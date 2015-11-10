(ns adzerk.boot-cljs-repl (:require [weasel.repl :as repl]))
(let [repl-conn "ws://localhost:56332"] (when (and repl-conn (not (repl/alive?))) (repl/connect "ws://localhost:56332")))