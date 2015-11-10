(ns ui.gps)

(defrecord Position [latitude longitude timestamp])

(defn- new-position [position]
  (let [coords (.-coords position)
        timestamp (.-timestamp position)
        latitude (.-latitude coords)
        longitude (.-longitude coords)]
    (->Position latitude longitude timestamp)))

(defn- with-gps [f]
  (if-let [gps (.-geolocation js/navigator)]
    (f gps)
    (js/console.error "Geolocation is not supported by this browser.")))

(defn start [f]
  (with-gps #(.watchPosition % (comp f new-position))))

(defn location [f]
  (with-gps #(.getCurrentPosition % (comp f new-position))))

(defn stop []
  (with-gps #(.clearWatch %)))
