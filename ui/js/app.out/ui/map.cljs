(ns ui.map
  (:require cljsjs.leaflet
            [cljs.core.async :as async :refer [<! >! chan]]
            [goog.dom :as gdom]
            [ajax.core :refer [GET]]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom])
  (:require-macros [cljs.core.async.macros :as m :refer [go go-loop]]))

(defrecord Route [geometry time distance])

(def routing-endpoint "http://router.project-osrm.org/viaroute")
(def geocoding-endpoint "http://nominatim.openstreetmap.org/search?format=json&q=")

(defn geocode [place]
  (let [resp (chan)]
    (GET (str geocoding-endpoint place)
        {:response-format :json
         :keywords? true
         :error-handler (fn [error] (go (>! resp {:error error})))
         :handler (fn [data]
                    (if-let [{:keys [lon lat]} (first data)]
                      (go (>! resp {:longitude (js/parseFloat lon)
                                    :latitude (js/parseFloat lat)}))
                      (go (>! resp {:error (str "Location " place " not found")}))))})
    resp))

(defn route [from to]
  (let [resp (chan)]
    (GET (apply str [routing-endpoint
                     "?loc=" (:latitude from) "," (:longitude from)
                     "&loc=" (:latitude to) "," (:longitude to)])
        {:response-format :json
         :keywords? true
         :error-handler (fn [error] (go (>! resp {:error error})))
         :handler (fn [data]
                    (if-let [summary (:route_summary data)]
                      (let [geometry (:route_geometry data)
                            {:keys [total_time total_distance]} summary]
                        (go (>! resp (->Route geometry total_time total_distance))))
                      (go (>! resp {:error "Couldn't find a route."}))))})
    resp))

(defn- new-map []
  (js/console.log "Rendering new map.")
  (let [map (.map js/L "map" #js {:zoomControl false})
        zoom-control (js/L.control.zoom #js {:position "topright"})
        tile-layer (.tileLayer js/L "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                               (clj->js {:attribution "Map data &copy; [...]"
                                         :maxZoom 18}))]
    (.addTo zoom-control map)
    (.addTo tile-layer map)
    (.setView map #js[52.5167 13.3833] 13)
    map))

(defui MapView
  Object
  (componentDidMount [this]
                     (om/set-state! this {})
                     (let [map (new-map)]
                       (let [{:keys [center routing]} (om/props this)]
                         (go-loop []
                           (let [{:keys [latitude longitude] :as msg} (<! center)]
                             (om/update-state! this assoc :position msg)
                             (.setView map (clj->js [latitude longitude]) (or (.getZoom map) 13)))
                           (recur))

                         (go-loop []
                           (let [destination (<! routing)
                                 {:keys [error latitude longitude]} (<! (geocode destination))]
                             (if error
                               (js/console.error error)
                               (let [{:keys [position]} (om/get-state this)
                                     {:keys [error geometry time distance]} (<! (route position {:latitude latitude :longitude longitude}))]
                                 (if error
                                   (js/console.error error)

                                   (let [polyline (js/L.Polyline. (.decode js/L.PolylineUtil geometry 6)
                                                                  #js {:color "red" :weight 4})
                                         #_[in-reach out-of-reach] #_(split-at )]
                                     #_(doseq [p (-> this om/get-state :polylines seq)]
                                       (.removeFrom p map))
                                     #_(om/update-state! this assoc :polylines [[in-reach out-of-reach]])
                                     #_(render-path map in-reach {:color "blue"})
                                     #_(render-path map out-of-reach {:color "red"})
                                     (.addTo polyline map)
                                     (.fitBounds map (.getBounds polyline)))))))
                           (recur)))))
  (render [this]
          (dom/div #js {:id "map"})))

(def view (om/factory MapView))
