// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__6342,handler){
var map__6343 = p__6342;
var map__6343__$1 = ((((!((map__6343 == null)))?((((map__6343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6343):map__6343);
var uri = cljs.core.get.call(null,map__6343__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__6343__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__6343__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__6343__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__6343__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__6343__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__6343__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__6343,map__6343__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__6341_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__6341_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__6343,map__6343__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___6351 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___6351)){
var response_type_6352 = temp__4425__auto___6351;
this$__$1.responseType = cljs.core.name.call(null,response_type_6352);
} else {
}

var seq__6345_6353 = cljs.core.seq.call(null,headers);
var chunk__6346_6354 = null;
var count__6347_6355 = (0);
var i__6348_6356 = (0);
while(true){
if((i__6348_6356 < count__6347_6355)){
var vec__6349_6357 = cljs.core._nth.call(null,chunk__6346_6354,i__6348_6356);
var k_6358 = cljs.core.nth.call(null,vec__6349_6357,(0),null);
var v_6359 = cljs.core.nth.call(null,vec__6349_6357,(1),null);
this$__$1.setRequestHeader(k_6358,v_6359);

var G__6360 = seq__6345_6353;
var G__6361 = chunk__6346_6354;
var G__6362 = count__6347_6355;
var G__6363 = (i__6348_6356 + (1));
seq__6345_6353 = G__6360;
chunk__6346_6354 = G__6361;
count__6347_6355 = G__6362;
i__6348_6356 = G__6363;
continue;
} else {
var temp__4425__auto___6364 = cljs.core.seq.call(null,seq__6345_6353);
if(temp__4425__auto___6364){
var seq__6345_6365__$1 = temp__4425__auto___6364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6345_6365__$1)){
var c__5971__auto___6366 = cljs.core.chunk_first.call(null,seq__6345_6365__$1);
var G__6367 = cljs.core.chunk_rest.call(null,seq__6345_6365__$1);
var G__6368 = c__5971__auto___6366;
var G__6369 = cljs.core.count.call(null,c__5971__auto___6366);
var G__6370 = (0);
seq__6345_6353 = G__6367;
chunk__6346_6354 = G__6368;
count__6347_6355 = G__6369;
i__6348_6356 = G__6370;
continue;
} else {
var vec__6350_6371 = cljs.core.first.call(null,seq__6345_6365__$1);
var k_6372 = cljs.core.nth.call(null,vec__6350_6371,(0),null);
var v_6373 = cljs.core.nth.call(null,vec__6350_6371,(1),null);
this$__$1.setRequestHeader(k_6372,v_6373);

var G__6374 = cljs.core.next.call(null,seq__6345_6365__$1);
var G__6375 = null;
var G__6376 = (0);
var G__6377 = (0);
seq__6345_6353 = G__6374;
chunk__6346_6354 = G__6375;
count__6347_6355 = G__6376;
i__6348_6356 = G__6377;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5168__auto__ = body;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map