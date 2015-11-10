// Compiled by ClojureScript 1.7.166 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__6523,handler){
var map__6524 = p__6523;
var map__6524__$1 = ((((!((map__6524 == null)))?((((map__6524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6524):map__6524);
var uri = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__6524,map__6524__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__6522_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__6522_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__6524,map__6524__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___6532 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___6532)){
var response_type_6533 = temp__4425__auto___6532;
this$__$1.responseType = cljs.core.name.call(null,response_type_6533);
} else {
}

var seq__6526_6534 = cljs.core.seq.call(null,headers);
var chunk__6527_6535 = null;
var count__6528_6536 = (0);
var i__6529_6537 = (0);
while(true){
if((i__6529_6537 < count__6528_6536)){
var vec__6530_6538 = cljs.core._nth.call(null,chunk__6527_6535,i__6529_6537);
var k_6539 = cljs.core.nth.call(null,vec__6530_6538,(0),null);
var v_6540 = cljs.core.nth.call(null,vec__6530_6538,(1),null);
this$__$1.setRequestHeader(k_6539,v_6540);

var G__6541 = seq__6526_6534;
var G__6542 = chunk__6527_6535;
var G__6543 = count__6528_6536;
var G__6544 = (i__6529_6537 + (1));
seq__6526_6534 = G__6541;
chunk__6527_6535 = G__6542;
count__6528_6536 = G__6543;
i__6529_6537 = G__6544;
continue;
} else {
var temp__4425__auto___6545 = cljs.core.seq.call(null,seq__6526_6534);
if(temp__4425__auto___6545){
var seq__6526_6546__$1 = temp__4425__auto___6545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6526_6546__$1)){
var c__5963__auto___6547 = cljs.core.chunk_first.call(null,seq__6526_6546__$1);
var G__6548 = cljs.core.chunk_rest.call(null,seq__6526_6546__$1);
var G__6549 = c__5963__auto___6547;
var G__6550 = cljs.core.count.call(null,c__5963__auto___6547);
var G__6551 = (0);
seq__6526_6534 = G__6548;
chunk__6527_6535 = G__6549;
count__6528_6536 = G__6550;
i__6529_6537 = G__6551;
continue;
} else {
var vec__6531_6552 = cljs.core.first.call(null,seq__6526_6546__$1);
var k_6553 = cljs.core.nth.call(null,vec__6531_6552,(0),null);
var v_6554 = cljs.core.nth.call(null,vec__6531_6552,(1),null);
this$__$1.setRequestHeader(k_6553,v_6554);

var G__6555 = cljs.core.next.call(null,seq__6526_6546__$1);
var G__6556 = null;
var G__6557 = (0);
var G__6558 = (0);
seq__6526_6534 = G__6555;
chunk__6527_6535 = G__6556;
count__6528_6536 = G__6557;
i__6529_6537 = G__6558;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5160__auto__ = body;
if(cljs.core.truth_(or__5160__auto__)){
return or__5160__auto__;
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