// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__11905,handler){
var map__11906 = p__11905;
var map__11906__$1 = ((((!((map__11906 == null)))?((((map__11906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11906):map__11906);
var uri = cljs.core.get.call(null,map__11906__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__11906__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__11906__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__11906__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__11906__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__11906__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__11906__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__11906,map__11906__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__11904_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__11904_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__11906,map__11906__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___11914 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___11914)){
var response_type_11915 = temp__4425__auto___11914;
this$__$1.responseType = cljs.core.name.call(null,response_type_11915);
} else {
}

var seq__11908_11916 = cljs.core.seq.call(null,headers);
var chunk__11909_11917 = null;
var count__11910_11918 = (0);
var i__11911_11919 = (0);
while(true){
if((i__11911_11919 < count__11910_11918)){
var vec__11912_11920 = cljs.core._nth.call(null,chunk__11909_11917,i__11911_11919);
var k_11921 = cljs.core.nth.call(null,vec__11912_11920,(0),null);
var v_11922 = cljs.core.nth.call(null,vec__11912_11920,(1),null);
this$__$1.setRequestHeader(k_11921,v_11922);

var G__11923 = seq__11908_11916;
var G__11924 = chunk__11909_11917;
var G__11925 = count__11910_11918;
var G__11926 = (i__11911_11919 + (1));
seq__11908_11916 = G__11923;
chunk__11909_11917 = G__11924;
count__11910_11918 = G__11925;
i__11911_11919 = G__11926;
continue;
} else {
var temp__4425__auto___11927 = cljs.core.seq.call(null,seq__11908_11916);
if(temp__4425__auto___11927){
var seq__11908_11928__$1 = temp__4425__auto___11927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11908_11928__$1)){
var c__5971__auto___11929 = cljs.core.chunk_first.call(null,seq__11908_11928__$1);
var G__11930 = cljs.core.chunk_rest.call(null,seq__11908_11928__$1);
var G__11931 = c__5971__auto___11929;
var G__11932 = cljs.core.count.call(null,c__5971__auto___11929);
var G__11933 = (0);
seq__11908_11916 = G__11930;
chunk__11909_11917 = G__11931;
count__11910_11918 = G__11932;
i__11911_11919 = G__11933;
continue;
} else {
var vec__11913_11934 = cljs.core.first.call(null,seq__11908_11928__$1);
var k_11935 = cljs.core.nth.call(null,vec__11913_11934,(0),null);
var v_11936 = cljs.core.nth.call(null,vec__11913_11934,(1),null);
this$__$1.setRequestHeader(k_11935,v_11936);

var G__11937 = cljs.core.next.call(null,seq__11908_11928__$1);
var G__11938 = null;
var G__11939 = (0);
var G__11940 = (0);
seq__11908_11916 = G__11937;
chunk__11909_11917 = G__11938;
count__11910_11918 = G__11939;
i__11911_11919 = G__11940;
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