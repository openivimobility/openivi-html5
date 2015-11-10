// Compiled by ClojureScript 1.7.166 {}
goog.provide('adzerk.boot_reload');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.client');
goog.require('ui.core');
if(cljs.core.truth_(adzerk.boot_reload.client.alive_QMARK_.call(null))){
} else {
adzerk.boot_reload.client.connect.call(null,"ws://localhost:56185",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return ui.core.init.call(null);
})], null));
}

//# sourceMappingURL=boot_reload.js.map