(ns ui.software-updates
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljsjs.jquery]
            [goog.dom :as gdom]
            [clojure.set :refer [rename-keys]]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [cats.monad.either :as either]
            [cljs.core.async :refer [>! <!]]
            [jayq.core :refer [$ show hide html css]]
            [schema.core :as s :include-macros true]))

(+ 3 4)

(def SoftwareUpdate
  "A schema for a software update."
  {:name s/Str
   :version s/Str
   :size s/Num
   :status (s/enum :pending :downloading :installing :installed)})

(def ats-blue "#A7E6E0")
(def ats-orange "#FFB393")

(defn change-color [selector color]
  (css ($ selector) {:background-color color}))

(defn describe-size [bytes]
  (let [round (fn [precision n]
                (let [factor (Math/pow 10 precision)]
                  (/ (Math/round (* n factor)) factor)))
        format (partial round 2)]
    (condp >= bytes
      1024 (str (format bytes) " bytes")
      (* 1024 1024) (str (format (/ bytes 1000)) " kB")
      (* 1024 1024 1024) (str (format (/ bytes 1000 1000)) " MB")
      :else (str (format (/ bytes 1000 1000 1000)) " GB"))))

(def pending? (comp #{:pending} :software-update/status))
(def installed? (comp #{:installed} :software-update/status))
(def processing? (complement installed?))

(defn slm []
  (.-slm js/genivi))

(defn details []
  (.details (slm)))

(defn accept! []
  (.approve (slm) (details)))

(defn details-changed-signal []
  (.. (slm) -details_changed))

(defn update-state-changed-signal []
  (.. (slm) -update_state_changed))

(defn on-signal [signal f]
  (.connect signal f))

(def default-size 852324)

(defn detail->update [detail]
  (-> detail
      js->clj
      (rename-keys {"name" :name "version" :version "status" :status})
      (update :status keyword)
      (assoc :size default-size)))

(defn get-all []
  (map detail->update (details)))

(defn watch [f]
  (on-signal (update-state-changed-signal) (fn [state count]
                                             (js/console.log "Update state changed: " state count)
                                             (doseq [detail (details)]
                                               (-> detail detail->update f))))
  (on-signal (details-changed-signal) (fn [name version status]
                                        (js/console.log "Details changed:" name version status)
                                        (f {:name name :version version :status (keyword status) :size default-size}))))

(defui SoftwareUpdateView
  static om/Ident
  (ident [this {:keys [software-update/name software-update/version]}]
         [:software-update/by-id [name version]])
  static om/IQuery
  (query [this]
         [:software-update/name
          :software-update/version
          :software-update/size
          :software-update/status])
  Object
  (render [this]
          (let [{:keys [software-update/name
                        software-update/version
                        software-update/size
                        software-update/status]} (om/props this)]
            (dom/li #js {:className "software-update"}
                    (dom/dl nil (dom/dt nil "Name")
                            (dom/dd nil name)
                            (dom/dt nil "Version")
                            (dom/dd nil version)
                            (dom/dt nil "Size")
                            (dom/dd nil (describe-size size)))
                    (condp = status
                      :pending
                      (dom/div nil)

                      :downloading
                      (dom/div #js {:className "loading"}
                               (dom/span nil "Downloading..."))

                      :installing
                      (dom/div #js {:className "loading"}
                               (dom/span nil "Installing..."))

                      :installed
                      (dom/div #js {:className "installed"}
                               (dom/span nil "Installed")))))))

(def software-update-view (om/factory SoftwareUpdateView {:keyfn (juxt :software-update/name
                                                                       :software-update/version)}))

(defui SoftwareUpdatesView
  static om/IQuery
  (query [this]
         [{:software-updates
           (om/get-query SoftwareUpdateView)}])
  Object
  (render [this]
          (let [{:keys [software-updates]} (om/props this)
                {:keys [accept-fn]} (om/get-computed this)
                pending (filter pending? software-updates)]
            (dom/div #js {:id "updates" :className "solid"}
                       (dom/div nil
                                (dom/h4 nil "Software Updates")
                                (apply dom/ul nil (map software-update-view software-updates))
                                (dom/br nil)
                                (dom/button
                                 (clj->js (merge
                                           {:onClick accept-fn}
                                           (if-not (seq pending) {:className "disabled" :disabled true} {})))
                                 "Download & Install All"))))))

(def view (om/factory SoftwareUpdatesView))
