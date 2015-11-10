(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] ui.core))
(when-not (client/alive?) (client/connect "ws://localhost:58653" {:on-jsload (fn* [] (ui.core/init))}))