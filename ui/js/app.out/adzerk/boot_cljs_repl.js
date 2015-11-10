// Compiled by ClojureScript 1.7.166 {}
goog.provide('adzerk.boot_cljs_repl');
goog.require('cljs.core');
goog.require('weasel.repl');
var repl_conn_19082 = "ws://localhost:56332";
if(cljs.core.truth_((function (){var and__5148__auto__ = repl_conn_19082;
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.not.call(null,weasel.repl.alive_QMARK_.call(null));
} else {
return and__5148__auto__;
}
})())){
weasel.repl.connect.call(null,"ws://localhost:56332");
} else {
}

//# sourceMappingURL=boot_cljs_repl.js.map