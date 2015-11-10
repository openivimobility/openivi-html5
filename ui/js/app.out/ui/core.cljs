(ns ui.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [ui.map :as nav-map]
            [ui.gps :as gps]
            [ui.software-updates :as software-updates]
            [goog.history.EventType :as EventType]
            [cljs.core.async :as async :refer [<! >! chan]]
            [om.dom :as dom])
  (:import goog.History)
  (:require-macros [cljs.core.async.macros :as m :refer [go go-loop]]))

(secretary/set-config! :prefix "#")

(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE (fn [e] (secretary/dispatch! (.-token e))))
  (doto h (.setEnabled true)))

(enable-console-print!)

(def init-data
  {:app/sections
   [{:section/name "Route"
     :section/id :route
     :section/visible true}
    {:section/name "Fuel stop"
     :section/id :fuel-stop
     :section/visible false}
    {:section/name "POI"
     :section/id :poi
     :section/visible false}
    {:section/name "User"
     :section/id :user-profiles
     :section/visible false}
    {:section/name "Settings"
     :section/id :settings
     :section/visible false}
    {:section/name "Updates"
     :section/id :updates
     :section/visible true}]

   :car/remaining-range 30

   :software-updates #{}

   :app/users
   [{:user/name "guest" :user/id :guest}
    {:user/name "Ringo" :user/id :ringo}
    {:user/name "John" :user/id :john}]

   :app/current-user [:user/by-id :guest]
   :app/current-section [:section/by-id :route]})

(defn get-many [state key]
  (let [st @state]
    (into [] (map #(get-in st %)) (get st key))))

(defmulti read om/dispatch)

(defmethod read :default
  [{:keys [state]} k _]
  (let [st @state]
    (if (contains? st k)
      {:value (get st k)}
      {:value :not-found})))

(defmethod read :app/current-user
  [{:keys [state] :as env} key _]
  (let [st @state]
    {:value (get-in st (get st key))}))

(defmethod read :app/current-section
  [{:keys [state] :as env} key _]
  (let [st @state]
    {:value (get-in st (get st key))}))

(defmethod read :app/sections
  [{:keys [state] :as env} key _]
  (let [st @state]
    (if (contains? st key)
      {:value (->> (get st key)
                   (map (fn [section-ref]
                          (let [{:keys [app/current-section]} st
                                current (get-in st current-section)
                                section (get-in st section-ref)
                                section (assoc section :section/active (= current section))]
                            section))))}
      {:value :not-found})))

(defmethod read :software-updates
  [{:keys [state] :as env} key _]
  (let [st @state]
    {:value (into [] (map #(get-in st %)) (get st key))}))

(defmethod read :app/users
  [{:keys [state] :as env} key _]
  (let [st @state]
    (if (contains? st key)
      {:value (->> (get st key)
                   (map (fn [user-ref]
                          (let [{:keys [app/current-user]} st
                                current (get-in st current-user)
                                user (get-in st user-ref)
                                user (assoc user :user/authenticated (= current user))]
                            user))))}
      {:value :not-found})))

(defmulti mutate om/dispatch)
(defmethod mutate 'section/goto
  [{:keys [state] :as env} _ {:keys [section]}]
  {:value :ok
   :action #(swap! state assoc :app/current-section [:section/by-id section])})
(defmethod mutate 'software-updates/accept!
  [{:keys [state] :as env} _ _]
  {:value :ok
   :action (fn []
             (software-updates/accept!)
             (doseq [update-ref (@state :software-updates)]
               (swap! state update-in update-ref
                      (fn [update]
                        (if (software-updates/pending? update)
                          (assoc update :software-update/status :downloading)
                          update)))))})

(defn create-update [st {:keys [software-update/name
                                software-update/version] :as software-update}]
  (let [ref [:software-update/by-id [name version]]]
    (-> st
        (assoc-in ref software-update)
        (update :software-updates conj ref))))

(defmethod mutate 'software-updates/new-update
  [{:keys [state] :as env} _ update]
  {:value :ok
   :action #(swap! state (fn [st] (create-update st update)))})

(defmethod mutate :default
  [{:keys [state] :as env} key params]
  (js/console.error "unknown mutate: " key params)
  {:value :not-found})

(defui SectionIconView
  static om/Ident
  (ident [this {:keys [section/id]}]
         [:section/by-id id])
  static om/IQuery
  (query [this]
         '[:section/id :section/name :section/visible :section/active])
  Object
  (render [this]
          (let [{:keys [section/id section/name section/active section/badge]} (om/props this)
                section-id (clojure.core/name id)]
            (dom/li #js {:className (str section-id (if active " active" ""))}
                    (if badge
                      (dom/div #js {:className "section-badge"} badge)
                      (dom/div nil))
                    (dom/a #js {:href (str "#/" section-id)} name)))))

(def section-icon-view (om/factory SectionIconView {:keyfn :section/id}))

(defui NavigationView
  Object
  (render [this]
          (let [sections (om/props this)]
            (apply dom/ul #js {:className "side-nav"}
                   (->> sections
                        (filter :section/visible)
                        (map section-icon-view))))))

(def navigation-view (om/factory NavigationView))

(defui UserView
  static om/Ident
  (ident [this {:keys [user/id]}]
         [:user/by-id id])
  static om/IQuery
  (query [this]
         '[:user/id :user/name :user/authenticated])
  Object
  (render [this]
          (let [{:keys [user/id user/name user/authenticated]} (om/props this)]
            (dom/div nil
                     (dom/span nil id)
                     (dom/span nil name)
                     (dom/span nil authenticated)
                     ))))

(def user-view (om/factory UserView {:key-fn :user/id}))

(defui HeaderView
  static om/IQuery
  (query [this]
         [{:app/current-user [:user/name]}])
  Object
  (render [this]
          (let [{:keys [app/current-user]} (om/props this)
                {:keys [user/name]} current-user]
            (dom/div #js {:className "top-nav"}
                     (dom/span #js {:className "top-logo"}
                               (dom/a #js {:href (str "#/settings")}))
                     (dom/span #js {:className "top-user-icon"}
                               (dom/span #js {:className "top-user-greeting"}
                                         "Hi, "
                                         (dom/span #js {:className "top-user-name"}
                                                   name)))))))

(def header-view (om/factory HeaderView))

(defui RemainingRangeView
  static om/IQuery
  (query [this] [:car/remaining-range])
  Object
  (render [this]
          (let [{:keys [car/remaining-range]} (om/props this)]
            (dom/div #js {:className "remaining-range"}
                     (dom/span #js {:className "range"} (str remaining-range "KM"))))))

(def remaining-range-view (om/factory RemainingRangeView))

(defui RouteView
  Object
  (componentWillMount [this]
                      (om/set-state! this {:destination "Hamburg"}))
  (render [this]
          (let [{:keys [destination]} (om/get-state this)
                {:keys [routing car/remaining-range]} (om/props this)]
            (dom/div #js {:id "route"}
                     (dom/div #js {:id "directions"}
                              (dom/h2 nil "Route")
                              (dom/form #js {:id "route" :className "routing"}
                                        (dom/label nil "To:")
                                        (dom/input #js {:className "destination"
                                                        :type "text"
                                                        :value destination
                                                        :onChange #(om/set-state! this {:destination
                                                                                        (.-value (.-target %))})})
                                        (dom/button #js {:onClick (fn [e]
                                                               (js/console.log e)
                                                               (go (>! routing destination))
                                                               (.stopPropagation e)
                                                               (.preventDefault e)
                                                               false)}
                                                    "Directions")))
                     (remaining-range-view {:car/remaining-range remaining-range})))))

(def route-view (om/factory RouteView))

(defui FuelStopView
  Object
  (render [this]
          (dom/div #js {:id "fuel-stop" :className "solid"}
                   (dom/h2 nil
                           "Fuel Stop"))))

(def fuel-stop-view (om/factory FuelStopView))

(defui PoiView
  Object
  (render [this]
          (dom/div #js {:id "poi" :className "solid"}
                   (dom/h2 nil
                           "POI"))))

(def poi-view (om/factory PoiView))

(defui UserProfilesView
  Object
  (render [this]
          (dom/div #js {:id "user-profiles" :className "solid"}
                   (dom/h2 nil
                           "User Profiles"))))

(def user-profiles-view (om/factory UserProfilesView))

(defui SettingsView
  Object
  (render [this]
          (dom/div #js {:id "settings" :class "solid"}
                   (dom/h2 nil
                           "Settings"))))

(def settings-view (om/factory SettingsView))

(defui RootView
  static om/IQuery
  (query [this]
         (let [sections (om/get-query SectionIconView)
               users (om/get-query UserView)
               software-updates (om/get-query software-updates/SoftwareUpdatesView)]
           `[{:app/sections ~sections}
             ~@software-updates
             :app/current-section
             :car/remaining-range
             {:app/users ~users}
             :app/current-user]))
  Object
  (componentWillMount [this]
                      (let [gps-positions (chan)
                            routing (chan)]
                       ; Uncomment this if you want the map to follow the GPS
                       #_(gps/start #(go (>! gps-positions %)))
                       (gps/location #(go (>! gps-positions %))) ; and also comment this out

                       ; center in berlin by default for the QT app
                       (go (>! gps-positions {:latitude 52.5167 :longitude 13.3833}))

                       (software-updates/watch
                        (fn [{:keys [name version size status]}]
                          (om/transact! this `[(software-updates/new-update
                                                {:software-update/name ~name
                                                 :software-update/version ~version
                                                 :software-update/size ~size
                                                 :software-update/status ~status})])))

                       (om/set-state! this {:gps-positions gps-positions
                                            :routing routing})

                       #_(let [vim {:software-update/name "Vim"
                                  :software-update/version "2.54.2"
                                  :software-update/size 3525}
                             dbus {:software-update/name "Dbus"
                                   :software-update/version "1.4.1"
                                   :software-update/size 8238}]

                         (software-updates/watch
                          (fn [state count]
                            (condp = state
                              :no-updates (om/transact! this `[(software-updates/new-update
                                                                ~(assoc vim
                                                                        :software-update/status
                                                                        :installed))
                                                               (software-updates/new-update
                                                                ~(assoc dbus
                                                                        :software-update/status
                                                                        :installed))])
                              :pending (om/transact! this `[(software-updates/new-update
                                                             ~(assoc vim
                                                                     :software-update/status
                                                                     :pending))
                                                            (software-updates/new-update
                                                             ~(assoc dbus
                                                                     :software-update/status
                                                                     :pending))])
                              :installing (om/transact! this `[(software-updates/new-update
                                                                ~(assoc vim
                                                                        :software-update/status
                                                                        :installing))
                                                               (software-updates/new-update
                                                                ~(assoc dbus
                                                                        :software-update/status
                                                                        :installing))])))))

                       (doseq [{:keys [name version size status]} (software-updates/get-all)]
                         (om/transact! this `[(software-updates/new-update
                                               {:software-update/name ~name
                                                :software-update/version ~version
                                                :software-update/size ~size
                                                :software-update/status ~status})]))))
  (render [this]
          (let [{:keys [app/users
                        app/sections
                        app/current-user
                        app/current-section
                        software-updates
                        car/remaining-range] :as props} (om/props this)
                {:keys [gps-positions routing]} (om/get-state this)
                sections (map #(if (= (:section/id %) :updates)
                                 (let [pending-count (count (filter software-updates/pending? software-updates))
                                       processing-count (count (filter software-updates/processing? software-updates))]
                                   (assoc % :section/badge pending-count :section/visible (not= processing-count 0)))
                                 %) sections)]
            (dom/div nil
                     (header-view props)
                     (navigation-view sections)
                     (dom/div #js {:id "main"}
                              (condp = (:section/id current-section)
                                :route (route-view {:routing routing :car/remaining-range remaining-range})
                                :fuel-stop (fuel-stop-view)
                                :poi (poi-view)
                                :user-profiles (user-profiles-view)
                                :settings (settings-view)
                                :updates (software-updates/view
                                          (om/computed props {:accept-fn #(om/transact! this '[(software-updates/accept!)])})))
                              (nav-map/view {:center gps-positions :routing routing}))))))

(def reconciler
  (om/reconciler
   {:state  init-data
    :normalize true
    :parser (om/parser {:read read :mutate mutate})}))

(doseq [{:keys [section/id]} (-> init-data :app/sections)]
  (defroute (str "/" (name id)) {:as params}
    (om/transact! reconciler `[(section/goto {:section ~id})])))

(comment
  (def parser (om/parser {:read read}))

  (secretary/dispatch! "/user-profiles")

  (om/transact! reconciler '[(goto {:section :fuel-stop})])

  @reconciler

  (om/get-query software-updates/SoftwareUpdatesView)

  (om/tree->db RootView init-data true)

  (defui Bar
    static om/Ident
    (ident [this {:keys [foo/name]}]
           [:foos/by-id name])
    static om/IQuery
    (query [this]
           [{:foos [:foo/name]}]))

  (def data {:foos
             [{:foo/name "Foo"}
              {:foo/name "Bar"}]})

  (om/tree->db Bar data true)

  ; {:foos [nil nil], nil {nil {:foo/name Bar}}}

  (println norm-data)

  (om/get-query RootView)

  (def st (atom norm-data))

  (println st)

  (parser {:state st} [:car/remaining-range])

)

(defn init []
  (om/add-root! reconciler
                RootView (gdom/getElement "app"))
  (secretary/dispatch! "/route"))
