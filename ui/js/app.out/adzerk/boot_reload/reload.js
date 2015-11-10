// Compiled by ClojureScript 1.7.166 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var uri = (new goog.Uri(href_or_uri));
var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (uri,path){
return (function (p1__6361_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6361_SHARP_,path);
});})(uri,path))
,changed)))){
return uri;
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__6366 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6367 = null;
var count__6368 = (0);
var i__6369 = (0);
while(true){
if((i__6369 < count__6368)){
var s = cljs.core._nth.call(null,chunk__6367,i__6369);
var temp__4425__auto___6370 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6370)){
var sheet_6371 = temp__4425__auto___6370;
var temp__4425__auto___6372__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6371.href,changed);
if(cljs.core.truth_(temp__4425__auto___6372__$1)){
var href_uri_6373 = temp__4425__auto___6372__$1;
sheet_6371.ownerNode.href = href_uri_6373.makeUnique().toString();
} else {
}
} else {
}

var G__6374 = seq__6366;
var G__6375 = chunk__6367;
var G__6376 = count__6368;
var G__6377 = (i__6369 + (1));
seq__6366 = G__6374;
chunk__6367 = G__6375;
count__6368 = G__6376;
i__6369 = G__6377;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6366);
if(temp__4425__auto__){
var seq__6366__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6366__$1)){
var c__5963__auto__ = cljs.core.chunk_first.call(null,seq__6366__$1);
var G__6378 = cljs.core.chunk_rest.call(null,seq__6366__$1);
var G__6379 = c__5963__auto__;
var G__6380 = cljs.core.count.call(null,c__5963__auto__);
var G__6381 = (0);
seq__6366 = G__6378;
chunk__6367 = G__6379;
count__6368 = G__6380;
i__6369 = G__6381;
continue;
} else {
var s = cljs.core.first.call(null,seq__6366__$1);
var temp__4425__auto___6382__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6382__$1)){
var sheet_6383 = temp__4425__auto___6382__$1;
var temp__4425__auto___6384__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6383.href,changed);
if(cljs.core.truth_(temp__4425__auto___6384__$2)){
var href_uri_6385 = temp__4425__auto___6384__$2;
sheet_6383.ownerNode.href = href_uri_6385.makeUnique().toString();
} else {
}
} else {
}

var G__6386 = cljs.core.next.call(null,seq__6366__$1);
var G__6387 = null;
var G__6388 = (0);
var G__6389 = (0);
seq__6366 = G__6386;
chunk__6367 = G__6387;
count__6368 = G__6388;
i__6369 = G__6389;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__6394 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6395 = null;
var count__6396 = (0);
var i__6397 = (0);
while(true){
if((i__6397 < count__6396)){
var s = cljs.core._nth.call(null,chunk__6395,i__6397);
var temp__4425__auto___6398 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6398)){
var image_6399 = temp__4425__auto___6398;
var temp__4425__auto___6400__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6399.src,changed);
if(cljs.core.truth_(temp__4425__auto___6400__$1)){
var href_uri_6401 = temp__4425__auto___6400__$1;
image_6399.src = href_uri_6401.makeUnique().toString();
} else {
}
} else {
}

var G__6402 = seq__6394;
var G__6403 = chunk__6395;
var G__6404 = count__6396;
var G__6405 = (i__6397 + (1));
seq__6394 = G__6402;
chunk__6395 = G__6403;
count__6396 = G__6404;
i__6397 = G__6405;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6394);
if(temp__4425__auto__){
var seq__6394__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6394__$1)){
var c__5963__auto__ = cljs.core.chunk_first.call(null,seq__6394__$1);
var G__6406 = cljs.core.chunk_rest.call(null,seq__6394__$1);
var G__6407 = c__5963__auto__;
var G__6408 = cljs.core.count.call(null,c__5963__auto__);
var G__6409 = (0);
seq__6394 = G__6406;
chunk__6395 = G__6407;
count__6396 = G__6408;
i__6397 = G__6409;
continue;
} else {
var s = cljs.core.first.call(null,seq__6394__$1);
var temp__4425__auto___6410__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6410__$1)){
var image_6411 = temp__4425__auto___6410__$1;
var temp__4425__auto___6412__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6411.src,changed);
if(cljs.core.truth_(temp__4425__auto___6412__$2)){
var href_uri_6413 = temp__4425__auto___6412__$2;
image_6411.src = href_uri_6413.makeUnique().toString();
} else {
}
} else {
}

var G__6414 = cljs.core.next.call(null,seq__6394__$1);
var G__6415 = null;
var G__6416 = (0);
var G__6417 = (0);
seq__6394 = G__6414;
chunk__6395 = G__6415;
count__6396 = G__6416;
i__6397 = G__6417;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__6420){
var map__6423 = p__6420;
var map__6423__$1 = ((((!((map__6423 == null)))?((((map__6423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6423):map__6423);
var on_jsload = cljs.core.get.call(null,map__6423__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6423,map__6423__$1,on_jsload){
return (function (p1__6418_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6418_SHARP_,".js");
});})(map__6423,map__6423__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6423,map__6423__$1,on_jsload){
return (function (p1__6419_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__6419_SHARP_).makeUnique());
});})(js_files,map__6423,map__6423__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6423,map__6423__$1,on_jsload){
return (function() { 
var G__6425__delegate = function (_){
return on_jsload.call(null);
};
var G__6425 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6426__i = 0, G__6426__a = new Array(arguments.length -  0);
while (G__6426__i < G__6426__a.length) {G__6426__a[G__6426__i] = arguments[G__6426__i + 0]; ++G__6426__i;}
  _ = new cljs.core.IndexedSeq(G__6426__a,0);
} 
return G__6425__delegate.call(this,_);};
G__6425.cljs$lang$maxFixedArity = 0;
G__6425.cljs$lang$applyTo = (function (arglist__6427){
var _ = cljs.core.seq(arglist__6427);
return G__6425__delegate(_);
});
G__6425.cljs$core$IFn$_invoke$arity$variadic = G__6425__delegate;
return G__6425;
})()
;})(js_files,map__6423,map__6423__$1,on_jsload))
,((function (js_files,map__6423,map__6423__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6423,map__6423__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__6432_6436 = cljs.core.seq.call(null,things_to_log);
var chunk__6433_6437 = null;
var count__6434_6438 = (0);
var i__6435_6439 = (0);
while(true){
if((i__6435_6439 < count__6434_6438)){
var t_6440 = cljs.core._nth.call(null,chunk__6433_6437,i__6435_6439);
console.log(t_6440);

var G__6441 = seq__6432_6436;
var G__6442 = chunk__6433_6437;
var G__6443 = count__6434_6438;
var G__6444 = (i__6435_6439 + (1));
seq__6432_6436 = G__6441;
chunk__6433_6437 = G__6442;
count__6434_6438 = G__6443;
i__6435_6439 = G__6444;
continue;
} else {
var temp__4425__auto___6445 = cljs.core.seq.call(null,seq__6432_6436);
if(temp__4425__auto___6445){
var seq__6432_6446__$1 = temp__4425__auto___6445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6432_6446__$1)){
var c__5963__auto___6447 = cljs.core.chunk_first.call(null,seq__6432_6446__$1);
var G__6448 = cljs.core.chunk_rest.call(null,seq__6432_6446__$1);
var G__6449 = c__5963__auto___6447;
var G__6450 = cljs.core.count.call(null,c__5963__auto___6447);
var G__6451 = (0);
seq__6432_6436 = G__6448;
chunk__6433_6437 = G__6449;
count__6434_6438 = G__6450;
i__6435_6439 = G__6451;
continue;
} else {
var t_6452 = cljs.core.first.call(null,seq__6432_6446__$1);
console.log(t_6452);

var G__6453 = cljs.core.next.call(null,seq__6432_6446__$1);
var G__6454 = null;
var G__6455 = (0);
var G__6456 = (0);
seq__6432_6436 = G__6453;
chunk__6433_6437 = G__6454;
count__6434_6438 = G__6455;
i__6435_6439 = G__6456;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__6458 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__6458,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__6458);

adzerk.boot_reload.reload.reload_css.call(null,G__6458);

adzerk.boot_reload.reload.reload_img.call(null,G__6458);

return G__6458;
});

//# sourceMappingURL=reload.js.map