// Compiled by ClojureScript 1.7.170 {}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('ui.map');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('ui.gps');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.next');
goog.require('ui.software_updates');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var h_16264 = (new goog.History());
goog.events.listen(h_16264,goog.history.EventType.NAVIGATE,((function (h_16264){
return (function (e){
return secretary.core.dispatch_BANG_.call(null,e.token);
});})(h_16264))
);

var G__16263_16265 = h_16264;
G__16263_16265.setEnabled(true);

cljs.core.enable_console_print_BANG_.call(null);
ui.core.init_data = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("app","sections","app/sections",-886812091),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"Route",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword("section","visible","section/visible",1231307198),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"Fuel stop",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"fuel-stop","fuel-stop",-2127913382),new cljs.core.Keyword("section","visible","section/visible",1231307198),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"POI",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"poi","poi",923822222),new cljs.core.Keyword("section","visible","section/visible",1231307198),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"User",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"user-profiles","user-profiles",1911528023),new cljs.core.Keyword("section","visible","section/visible",1231307198),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"Settings",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("section","visible","section/visible",1231307198),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"Updates",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"updates","updates",2013983452),new cljs.core.Keyword("section","visible","section/visible",1231307198),true], null)], null),new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566),(30),new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("app","users","app/users",-713520992),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","name","user/name",1848814598),"guest",new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword(null,"guest","guest",692663006)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","name","user/name",1848814598),"Ringo",new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword(null,"ringo","ringo",-1968417937)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","name","user/name",1848814598),"John",new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword(null,"john","john",-1116534405)], null)], null),new cljs.core.Keyword("app","current-user","app/current-user",-868957432),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"guest","guest",692663006)], null),new cljs.core.Keyword("app","current-section","app/current-section",1521904761),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","by-id","section/by-id",329469792),new cljs.core.Keyword(null,"route","route",329891309)], null)], null);
ui.core.get_many = (function ui$core$get_many(state,key){
var st = cljs.core.deref.call(null,state);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st){
return (function (p1__16266_SHARP_){
return cljs.core.get_in.call(null,st,p1__16266_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
if(typeof ui.core.read !== 'undefined'){
} else {
ui.core.read = (function (){var method_table__6081__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6082__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6083__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6084__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6085__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6085__auto__,method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__16267,k,_){
var map__16268 = p__16267;
var map__16268__$1 = ((((!((map__16268 == null)))?((((map__16268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16268):map__16268);
var state = cljs.core.get.call(null,map__16268__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
if(cljs.core.contains_QMARK_.call(null,st,k)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,k)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("app","current-user","app/current-user",-868957432),(function (p__16270,key,_){
var map__16271 = p__16270;
var map__16271__$1 = ((((!((map__16271 == null)))?((((map__16271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16271):map__16271);
var env = map__16271__$1;
var state = cljs.core.get.call(null,map__16271__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,st,cljs.core.get.call(null,st,key))], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("app","current-section","app/current-section",1521904761),(function (p__16273,key,_){
var map__16274 = p__16273;
var map__16274__$1 = ((((!((map__16274 == null)))?((((map__16274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16274):map__16274);
var env = map__16274__$1;
var state = cljs.core.get.call(null,map__16274__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,st,cljs.core.get.call(null,st,key))], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("app","sections","app/sections",-886812091),(function (p__16276,key,_){
var map__16277 = p__16276;
var map__16277__$1 = ((((!((map__16277 == null)))?((((map__16277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16277):map__16277);
var env = map__16277__$1;
var state = cljs.core.get.call(null,map__16277__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
if(cljs.core.contains_QMARK_.call(null,st,key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.map.call(null,((function (st,map__16277,map__16277__$1,env,state){
return (function (section_ref){
var map__16279 = st;
var map__16279__$1 = ((((!((map__16279 == null)))?((((map__16279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16279):map__16279);
var current_section = cljs.core.get.call(null,map__16279__$1,new cljs.core.Keyword("app","current-section","app/current-section",1521904761));
var current = cljs.core.get_in.call(null,st,current_section);
var section = cljs.core.get_in.call(null,st,section_ref);
var section__$1 = cljs.core.assoc.call(null,section,new cljs.core.Keyword("section","active","section/active",93427439),cljs.core._EQ_.call(null,current,section));
return section__$1;
});})(st,map__16277,map__16277__$1,env,state))
,cljs.core.get.call(null,st,key))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),(function (p__16282,key,_){
var map__16283 = p__16282;
var map__16283__$1 = ((((!((map__16283 == null)))?((((map__16283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16283):map__16283);
var env = map__16283__$1;
var state = cljs.core.get.call(null,map__16283__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st,map__16283,map__16283__$1,env,state){
return (function (p1__16281_SHARP_){
return cljs.core.get_in.call(null,st,p1__16281_SHARP_);
});})(st,map__16283,map__16283__$1,env,state))
),cljs.core.get.call(null,st,key))], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("app","users","app/users",-713520992),(function (p__16285,key,_){
var map__16286 = p__16285;
var map__16286__$1 = ((((!((map__16286 == null)))?((((map__16286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16286):map__16286);
var env = map__16286__$1;
var state = cljs.core.get.call(null,map__16286__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
if(cljs.core.contains_QMARK_.call(null,st,key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.map.call(null,((function (st,map__16286,map__16286__$1,env,state){
return (function (user_ref){
var map__16288 = st;
var map__16288__$1 = ((((!((map__16288 == null)))?((((map__16288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16288):map__16288);
var current_user = cljs.core.get.call(null,map__16288__$1,new cljs.core.Keyword("app","current-user","app/current-user",-868957432));
var current = cljs.core.get_in.call(null,st,current_user);
var user = cljs.core.get_in.call(null,st,user_ref);
var user__$1 = cljs.core.assoc.call(null,user,new cljs.core.Keyword("user","authenticated","user/authenticated",1279355290),cljs.core._EQ_.call(null,current,user));
return user__$1;
});})(st,map__16286,map__16286__$1,env,state))
,cljs.core.get.call(null,st,key))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
if(typeof ui.core.mutate !== 'undefined'){
} else {
ui.core.mutate = (function (){var method_table__6081__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6082__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6083__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6084__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6085__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6085__auto__,method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("section","goto","section/goto",-201392033,null),(function (p__16290,_,p__16291){
var map__16292 = p__16290;
var map__16292__$1 = ((((!((map__16292 == null)))?((((map__16292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16292):map__16292);
var env = map__16292__$1;
var state = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__16293 = p__16291;
var map__16293__$1 = ((((!((map__16293 == null)))?((((map__16293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16293):map__16293);
var section = cljs.core.get.call(null,map__16293__$1,new cljs.core.Keyword(null,"section","section",-300141526));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__16292,map__16292__$1,env,state,map__16293,map__16293__$1,section){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("app","current-section","app/current-section",1521904761),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","by-id","section/by-id",329469792),section], null));
});})(map__16292,map__16292__$1,env,state,map__16293,map__16293__$1,section))
], null);
}));
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("software-updates","accept!","software-updates/accept!",-554374218,null),(function (p__16296,_,___$1){
var map__16297 = p__16296;
var map__16297__$1 = ((((!((map__16297 == null)))?((((map__16297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16297):map__16297);
var env = map__16297__$1;
var state = cljs.core.get.call(null,map__16297__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__16297,map__16297__$1,env,state){
return (function (){
ui.software_updates.accept_BANG_.call(null);

var seq__16299 = cljs.core.seq.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"software-updates","software-updates",1873409622)));
var chunk__16300 = null;
var count__16301 = (0);
var i__16302 = (0);
while(true){
if((i__16302 < count__16301)){
var update_ref = cljs.core._nth.call(null,chunk__16300,i__16302);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,update_ref,((function (seq__16299,chunk__16300,count__16301,i__16302,update_ref,map__16297,map__16297__$1,env,state){
return (function (update){
if(cljs.core.truth_(ui.software_updates.pending_QMARK_.call(null,update))){
return cljs.core.assoc.call(null,update,new cljs.core.Keyword("software-update","status","software-update/status",1331026980),new cljs.core.Keyword(null,"downloading","downloading",-213530737));
} else {
return update;
}
});})(seq__16299,chunk__16300,count__16301,i__16302,update_ref,map__16297,map__16297__$1,env,state))
);

var G__16303 = seq__16299;
var G__16304 = chunk__16300;
var G__16305 = count__16301;
var G__16306 = (i__16302 + (1));
seq__16299 = G__16303;
chunk__16300 = G__16304;
count__16301 = G__16305;
i__16302 = G__16306;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16299);
if(temp__4425__auto__){
var seq__16299__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16299__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__16299__$1);
var G__16307 = cljs.core.chunk_rest.call(null,seq__16299__$1);
var G__16308 = c__5971__auto__;
var G__16309 = cljs.core.count.call(null,c__5971__auto__);
var G__16310 = (0);
seq__16299 = G__16307;
chunk__16300 = G__16308;
count__16301 = G__16309;
i__16302 = G__16310;
continue;
} else {
var update_ref = cljs.core.first.call(null,seq__16299__$1);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,update_ref,((function (seq__16299,chunk__16300,count__16301,i__16302,update_ref,seq__16299__$1,temp__4425__auto__,map__16297,map__16297__$1,env,state){
return (function (update){
if(cljs.core.truth_(ui.software_updates.pending_QMARK_.call(null,update))){
return cljs.core.assoc.call(null,update,new cljs.core.Keyword("software-update","status","software-update/status",1331026980),new cljs.core.Keyword(null,"downloading","downloading",-213530737));
} else {
return update;
}
});})(seq__16299,chunk__16300,count__16301,i__16302,update_ref,seq__16299__$1,temp__4425__auto__,map__16297,map__16297__$1,env,state))
);

var G__16311 = cljs.core.next.call(null,seq__16299__$1);
var G__16312 = null;
var G__16313 = (0);
var G__16314 = (0);
seq__16299 = G__16311;
chunk__16300 = G__16312;
count__16301 = G__16313;
i__16302 = G__16314;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__16297,map__16297__$1,env,state))
], null);
}));
ui.core.create_update = (function ui$core$create_update(st,p__16315){
var map__16318 = p__16315;
var map__16318__$1 = ((((!((map__16318 == null)))?((((map__16318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16318):map__16318);
var software_update = map__16318__$1;
var name = cljs.core.get.call(null,map__16318__$1,new cljs.core.Keyword("software-update","name","software-update/name",827209690));
var version = cljs.core.get.call(null,map__16318__$1,new cljs.core.Keyword("software-update","version","software-update/version",1052892105));
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","by-id","software-update/by-id",1413379894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,version], null)], null);
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,software_update),new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),cljs.core.conj,ref);
});
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("software-updates","new-update","software-updates/new-update",1876226561,null),(function (p__16320,_,update){
var map__16321 = p__16320;
var map__16321__$1 = ((((!((map__16321 == null)))?((((map__16321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16321):map__16321);
var env = map__16321__$1;
var state = cljs.core.get.call(null,map__16321__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__16321,map__16321__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,((function (map__16321,map__16321__$1,env,state){
return (function (st){
return ui.core.create_update.call(null,st,update);
});})(map__16321,map__16321__$1,env,state))
);
});})(map__16321,map__16321__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__16323,key,params){
var map__16324 = p__16323;
var map__16324__$1 = ((((!((map__16324 == null)))?((((map__16324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16324):map__16324);
var env = map__16324__$1;
var state = cljs.core.get.call(null,map__16324__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
console.error("unknown mutate: ",key,params);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}));
/**
 * @constructor
 */
ui.core.SectionIconView = (function ui$core$SectionIconView(){
var this__14507__auto__ = this;
React.Component.apply(this__14507__auto__,arguments);

if(!((this__14507__auto__.initLocalState == null))){
this__14507__auto__.state = this__14507__auto__.initLocalState();
} else {
this__14507__auto__.state = {};
}

return this__14507__auto__;
});

ui.core.SectionIconView.prototype = goog.object.clone(React.Component.prototype);

var x16330_16346 = ui.core.SectionIconView.prototype;
x16330_16346.componentWillUpdate = ((function (x16330_16346){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14447__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14447__auto__);
});})(x16330_16346))
;

x16330_16346.shouldComponentUpdate = ((function (x16330_16346){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14447__auto__),goog.object.get(next_props__14448__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__14447__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14447__auto__.state,"omcljs$state"),goog.object.get(next_state__14449__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x16330_16346))
;

x16330_16346.componentWillUnmount = ((function (x16330_16346){
return (function (){
var this__14447__auto__ = this;
var r__14453__auto__ = om.next.get_reconciler.call(null,this__14447__auto__);
var cfg__14454__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14453__auto__);
var st__14455__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
var indexer__14452__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
if((st__14455__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14455__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14447__auto__);
}

if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16330_16346))
;

x16330_16346.componentDidUpdate = ((function (x16330_16346){
return (function (prev_props__14450__auto__,prev_state__14451__auto__){
var this__14447__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14447__auto__);
});})(x16330_16346))
;

x16330_16346.isMounted = ((function (x16330_16346){
return (function (){
var this__14447__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14447__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16330_16346))
;

x16330_16346.componentWillMount = ((function (x16330_16346){
return (function (){
var this__14447__auto__ = this;
var indexer__14452__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14447__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16330_16346))
;

x16330_16346.render = ((function (x16330_16346){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16331 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16332 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16333 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16334 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16335 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__16336 = om.next.props.call(null,this$);
var map__16336__$1 = ((((!((map__16336 == null)))?((((map__16336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16336):map__16336);
var id = cljs.core.get.call(null,map__16336__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var name = cljs.core.get.call(null,map__16336__$1,new cljs.core.Keyword("section","name","section/name",-260849884));
var active = cljs.core.get.call(null,map__16336__$1,new cljs.core.Keyword("section","active","section/active",93427439));
var badge = cljs.core.get.call(null,map__16336__$1,new cljs.core.Keyword("section","badge","section/badge",1281543678));
var section_id = cljs.core.name.call(null,id);
return React.DOM.li({"className": [cljs.core.str(section_id),cljs.core.str((cljs.core.truth_(active)?" active":""))].join('')},om.util.force_children.call(null,(cljs.core.truth_(badge)?React.DOM.div({"className": "section-badge"},om.util.force_children.call(null,badge)):React.DOM.div(null))),om.util.force_children.call(null,React.DOM.a({"href": [cljs.core.str("#/"),cljs.core.str(section_id)].join('')},om.util.force_children.call(null,name))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16335;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16334;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16333;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16332;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16331;
}});})(x16330_16346))
;


ui.core.SectionIconView.prototype.constructor = ui.core.SectionIconView;

ui.core.SectionIconView.prototype.om$isComponent = true;

var x16338_16347 = ui.core.SectionIconView;
x16338_16347.om$next$Ident$ = true;

x16338_16347.om$next$Ident$ident$arity$2 = ((function (x16338_16347){
return (function (this$,p__16339){
var map__16340 = p__16339;
var map__16340__$1 = ((((!((map__16340 == null)))?((((map__16340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16340):map__16340);
var id = cljs.core.get.call(null,map__16340__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","by-id","section/by-id",329469792),id], null);
});})(x16338_16347))
;

x16338_16347.om$next$IQuery$ = true;

x16338_16347.om$next$IQuery$query$arity$1 = ((function (x16338_16347){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword("section","name","section/name",-260849884),new cljs.core.Keyword("section","visible","section/visible",1231307198),new cljs.core.Keyword("section","active","section/active",93427439)], null);
});})(x16338_16347))
;


var x16342_16348 = ui.core.SectionIconView.prototype;
x16342_16348.om$next$Ident$ = true;

x16342_16348.om$next$Ident$ident$arity$2 = ((function (x16342_16348){
return (function (this$,p__16343){
var map__16344 = p__16343;
var map__16344__$1 = ((((!((map__16344 == null)))?((((map__16344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16344):map__16344);
var id = cljs.core.get.call(null,map__16344__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","by-id","section/by-id",329469792),id], null);
});})(x16342_16348))
;

x16342_16348.om$next$IQuery$ = true;

x16342_16348.om$next$IQuery$query$arity$1 = ((function (x16342_16348){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword("section","name","section/name",-260849884),new cljs.core.Keyword("section","visible","section/visible",1231307198),new cljs.core.Keyword("section","active","section/active",93427439)], null);
});})(x16342_16348))
;


ui.core.SectionIconView.cljs$lang$type = true;

ui.core.SectionIconView.cljs$lang$ctorStr = "ui.core/SectionIconView";

ui.core.SectionIconView.cljs$lang$ctorPrWriter = (function (this__14509__auto__,writer__14510__auto__,opt__14511__auto__){
return cljs.core._write.call(null,writer__14510__auto__,"ui.core/SectionIconView");
});
ui.core.section_icon_view = om.next.factory.call(null,ui.core.SectionIconView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("section","id","section/id",1495804783)], null));
/**
 * @constructor
 */
ui.core.NavigationView = (function ui$core$NavigationView(){
var this__14507__auto__ = this;
React.Component.apply(this__14507__auto__,arguments);

if(!((this__14507__auto__.initLocalState == null))){
this__14507__auto__.state = this__14507__auto__.initLocalState();
} else {
this__14507__auto__.state = {};
}

return this__14507__auto__;
});

ui.core.NavigationView.prototype = goog.object.clone(React.Component.prototype);

var x16353_16361 = ui.core.NavigationView.prototype;
x16353_16361.componentWillUpdate = ((function (x16353_16361){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14447__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14447__auto__);
});})(x16353_16361))
;

x16353_16361.shouldComponentUpdate = ((function (x16353_16361){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14447__auto__),goog.object.get(next_props__14448__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__14447__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14447__auto__.state,"omcljs$state"),goog.object.get(next_state__14449__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x16353_16361))
;

x16353_16361.componentWillUnmount = ((function (x16353_16361){
return (function (){
var this__14447__auto__ = this;
var r__14453__auto__ = om.next.get_reconciler.call(null,this__14447__auto__);
var cfg__14454__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14453__auto__);
var st__14455__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
var indexer__14452__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
if((st__14455__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14455__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14447__auto__);
}

if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16353_16361))
;

x16353_16361.componentDidUpdate = ((function (x16353_16361){
return (function (prev_props__14450__auto__,prev_state__14451__auto__){
var this__14447__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14447__auto__);
});})(x16353_16361))
;

x16353_16361.isMounted = ((function (x16353_16361){
return (function (){
var this__14447__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14447__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16353_16361))
;

x16353_16361.componentWillMount = ((function (x16353_16361){
return (function (){
var this__14447__auto__ = this;
var indexer__14452__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14447__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16353_16361))
;

x16353_16361.render = ((function (x16353_16361){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16354 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16355 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16356 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16357 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16358 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var sections = om.next.props.call(null,this$);
return cljs.core.apply.call(null,om.dom.ul,{"className": "side-nav"},cljs.core.map.call(null,ui.core.section_icon_view,cljs.core.filter.call(null,new cljs.core.Keyword("section","visible","section/visible",1231307198),sections)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16358;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16357;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16356;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16355;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16354;
}});})(x16353_16361))
;


ui.core.NavigationView.prototype.constructor = ui.core.NavigationView;

ui.core.NavigationView.prototype.om$isComponent = true;

var x16359_16362 = ui.core.NavigationView;


var x16360_16363 = ui.core.NavigationView.prototype;


ui.core.NavigationView.cljs$lang$type = true;

ui.core.NavigationView.cljs$lang$ctorStr = "ui.core/NavigationView";

ui.core.NavigationView.cljs$lang$ctorPrWriter = (function (this__14509__auto__,writer__14510__auto__,opt__14511__auto__){
return cljs.core._write.call(null,writer__14510__auto__,"ui.core/NavigationView");
});
ui.core.navigation_view = om.next.factory.call(null,ui.core.NavigationView);
/**
 * @constructor
 */
ui.core.UserView = (function ui$core$UserView(){
var this__14507__auto__ = this;
React.Component.apply(this__14507__auto__,arguments);

if(!((this__14507__auto__.initLocalState == null))){
this__14507__auto__.state = this__14507__auto__.initLocalState();
} else {
this__14507__auto__.state = {};
}

return this__14507__auto__;
});

ui.core.UserView.prototype = goog.object.clone(React.Component.prototype);

var x16368_16384 = ui.core.UserView.prototype;
x16368_16384.componentWillUpdate = ((function (x16368_16384){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14447__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14447__auto__);
});})(x16368_16384))
;

x16368_16384.shouldComponentUpdate = ((function (x16368_16384){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14447__auto__),goog.object.get(next_props__14448__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__14447__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14447__auto__.state,"omcljs$state"),goog.object.get(next_state__14449__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x16368_16384))
;

x16368_16384.componentWillUnmount = ((function (x16368_16384){
return (function (){
var this__14447__auto__ = this;
var r__14453__auto__ = om.next.get_reconciler.call(null,this__14447__auto__);
var cfg__14454__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14453__auto__);
var st__14455__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
var indexer__14452__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
if((st__14455__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14455__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14447__auto__);
}

if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16368_16384))
;

x16368_16384.componentDidUpdate = ((function (x16368_16384){
return (function (prev_props__14450__auto__,prev_state__14451__auto__){
var this__14447__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14447__auto__);
});})(x16368_16384))
;

x16368_16384.isMounted = ((function (x16368_16384){
return (function (){
var this__14447__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14447__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16368_16384))
;

x16368_16384.componentWillMount = ((function (x16368_16384){
return (function (){
var this__14447__auto__ = this;
var indexer__14452__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14447__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16368_16384))
;

x16368_16384.render = ((function (x16368_16384){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16369 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16370 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16371 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16372 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16373 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__16374 = om.next.props.call(null,this$);
var map__16374__$1 = ((((!((map__16374 == null)))?((((map__16374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16374):map__16374);
var id = cljs.core.get.call(null,map__16374__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var name = cljs.core.get.call(null,map__16374__$1,new cljs.core.Keyword("user","name","user/name",1848814598));
var authenticated = cljs.core.get.call(null,map__16374__$1,new cljs.core.Keyword("user","authenticated","user/authenticated",1279355290));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,id))),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,name))),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,authenticated))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16373;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16372;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16371;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16370;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16369;
}});})(x16368_16384))
;


ui.core.UserView.prototype.constructor = ui.core.UserView;

ui.core.UserView.prototype.om$isComponent = true;

var x16376_16385 = ui.core.UserView;
x16376_16385.om$next$Ident$ = true;

x16376_16385.om$next$Ident$ident$arity$2 = ((function (x16376_16385){
return (function (this$,p__16377){
var map__16378 = p__16377;
var map__16378__$1 = ((((!((map__16378 == null)))?((((map__16378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16378):map__16378);
var id = cljs.core.get.call(null,map__16378__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),id], null);
});})(x16376_16385))
;

x16376_16385.om$next$IQuery$ = true;

x16376_16385.om$next$IQuery$query$arity$1 = ((function (x16376_16385){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","authenticated","user/authenticated",1279355290)], null);
});})(x16376_16385))
;


var x16380_16386 = ui.core.UserView.prototype;
x16380_16386.om$next$Ident$ = true;

x16380_16386.om$next$Ident$ident$arity$2 = ((function (x16380_16386){
return (function (this$,p__16381){
var map__16382 = p__16381;
var map__16382__$1 = ((((!((map__16382 == null)))?((((map__16382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16382):map__16382);
var id = cljs.core.get.call(null,map__16382__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),id], null);
});})(x16380_16386))
;

x16380_16386.om$next$IQuery$ = true;

x16380_16386.om$next$IQuery$query$arity$1 = ((function (x16380_16386){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","authenticated","user/authenticated",1279355290)], null);
});})(x16380_16386))
;


ui.core.UserView.cljs$lang$type = true;

ui.core.UserView.cljs$lang$ctorStr = "ui.core/UserView";

ui.core.UserView.cljs$lang$ctorPrWriter = (function (this__14509__auto__,writer__14510__auto__,opt__14511__auto__){
return cljs.core._write.call(null,writer__14510__auto__,"ui.core/UserView");
});
ui.core.user_view = om.next.factory.call(null,ui.core.UserView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword("user","id","user/id",-1375756663)], null));
/**
 * @constructor
 */
ui.core.HeaderView = (function ui$core$HeaderView(){
var this__14507__auto__ = this;
React.Component.apply(this__14507__auto__,arguments);

if(!((this__14507__auto__.initLocalState == null))){
this__14507__auto__.state = this__14507__auto__.initLocalState();
} else {
this__14507__auto__.state = {};
}

return this__14507__auto__;
});

ui.core.HeaderView.prototype = goog.object.clone(React.Component.prototype);

var x16391_16403 = ui.core.HeaderView.prototype;
x16391_16403.componentWillUpdate = ((function (x16391_16403){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14447__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14447__auto__);
});})(x16391_16403))
;

x16391_16403.shouldComponentUpdate = ((function (x16391_16403){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14447__auto__),goog.object.get(next_props__14448__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__14447__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14447__auto__.state,"omcljs$state"),goog.object.get(next_state__14449__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x16391_16403))
;

x16391_16403.componentWillUnmount = ((function (x16391_16403){
return (function (){
var this__14447__auto__ = this;
var r__14453__auto__ = om.next.get_reconciler.call(null,this__14447__auto__);
var cfg__14454__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14453__auto__);
var st__14455__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
var indexer__14452__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
if((st__14455__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14455__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14447__auto__);
}

if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16391_16403))
;

x16391_16403.componentDidUpdate = ((function (x16391_16403){
return (function (prev_props__14450__auto__,prev_state__14451__auto__){
var this__14447__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14447__auto__);
});})(x16391_16403))
;

x16391_16403.isMounted = ((function (x16391_16403){
return (function (){
var this__14447__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14447__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16391_16403))
;

x16391_16403.componentWillMount = ((function (x16391_16403){
return (function (){
var this__14447__auto__ = this;
var indexer__14452__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14447__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16391_16403))
;

x16391_16403.render = ((function (x16391_16403){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16392 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16393 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16394 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16395 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16396 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__16397 = om.next.props.call(null,this$);
var map__16397__$1 = ((((!((map__16397 == null)))?((((map__16397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16397):map__16397);
var current_user = cljs.core.get.call(null,map__16397__$1,new cljs.core.Keyword("app","current-user","app/current-user",-868957432));
var map__16398 = current_user;
var map__16398__$1 = ((((!((map__16398 == null)))?((((map__16398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16398):map__16398);
var name = cljs.core.get.call(null,map__16398__$1,new cljs.core.Keyword("user","name","user/name",1848814598));
return React.DOM.div({"className": "top-nav"},om.util.force_children.call(null,React.DOM.span({"className": "top-logo"},om.util.force_children.call(null,React.DOM.a({"href": [cljs.core.str("#/settings")].join('')})))),om.util.force_children.call(null,React.DOM.span({"className": "top-user-icon"},om.util.force_children.call(null,React.DOM.span({"className": "top-user-greeting"},om.util.force_children.call(null,"Hi, "),om.util.force_children.call(null,React.DOM.span({"className": "top-user-name"},om.util.force_children.call(null,name))))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16396;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16395;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16394;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16393;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16392;
}});})(x16391_16403))
;


ui.core.HeaderView.prototype.constructor = ui.core.HeaderView;

ui.core.HeaderView.prototype.om$isComponent = true;

var x16401_16404 = ui.core.HeaderView;
x16401_16404.om$next$IQuery$ = true;

x16401_16404.om$next$IQuery$query$arity$1 = ((function (x16401_16404){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","current-user","app/current-user",-868957432),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null)], null);
});})(x16401_16404))
;


var x16402_16405 = ui.core.HeaderView.prototype;
x16402_16405.om$next$IQuery$ = true;

x16402_16405.om$next$IQuery$query$arity$1 = ((function (x16402_16405){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","current-user","app/current-user",-868957432),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null)], null);
});})(x16402_16405))
;


ui.core.HeaderView.cljs$lang$type = true;

ui.core.HeaderView.cljs$lang$ctorStr = "ui.core/HeaderView";

ui.core.HeaderView.cljs$lang$ctorPrWriter = (function (this__14509__auto__,writer__14510__auto__,opt__14511__auto__){
return cljs.core._write.call(null,writer__14510__auto__,"ui.core/HeaderView");
});
ui.core.header_view = om.next.factory.call(null,ui.core.HeaderView);
/**
 * @constructor
 */
ui.core.RemainingRangeView = (function ui$core$RemainingRangeView(){
var this__14507__auto__ = this;
React.Component.apply(this__14507__auto__,arguments);

if(!((this__14507__auto__.initLocalState == null))){
this__14507__auto__.state = this__14507__auto__.initLocalState();
} else {
this__14507__auto__.state = {};
}

return this__14507__auto__;
});

ui.core.RemainingRangeView.prototype = goog.object.clone(React.Component.prototype);

var x16410_16420 = ui.core.RemainingRangeView.prototype;
x16410_16420.componentWillUpdate = ((function (x16410_16420){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14447__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14447__auto__);
});})(x16410_16420))
;

x16410_16420.shouldComponentUpdate = ((function (x16410_16420){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14447__auto__),goog.object.get(next_props__14448__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__14447__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14447__auto__.state,"omcljs$state"),goog.object.get(next_state__14449__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x16410_16420))
;

x16410_16420.componentWillUnmount = ((function (x16410_16420){
return (function (){
var this__14447__auto__ = this;
var r__14453__auto__ = om.next.get_reconciler.call(null,this__14447__auto__);
var cfg__14454__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14453__auto__);
var st__14455__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
var indexer__14452__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
if((st__14455__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14455__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14447__auto__);
}

if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16410_16420))
;

x16410_16420.componentDidUpdate = ((function (x16410_16420){
return (function (prev_props__14450__auto__,prev_state__14451__auto__){
var this__14447__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14447__auto__);
});})(x16410_16420))
;

x16410_16420.isMounted = ((function (x16410_16420){
return (function (){
var this__14447__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14447__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16410_16420))
;

x16410_16420.componentWillMount = ((function (x16410_16420){
return (function (){
var this__14447__auto__ = this;
var indexer__14452__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14447__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16410_16420))
;

x16410_16420.render = ((function (x16410_16420){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16411 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16412 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16413 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16414 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16415 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__16416 = om.next.props.call(null,this$);
var map__16416__$1 = ((((!((map__16416 == null)))?((((map__16416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16416):map__16416);
var remaining_range = cljs.core.get.call(null,map__16416__$1,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566));
return React.DOM.div({"className": "remaining-range"},om.util.force_children.call(null,React.DOM.span({"className": "range"},om.util.force_children.call(null,[cljs.core.str(remaining_range),cljs.core.str("KM")].join('')))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16415;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16414;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16413;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16412;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16411;
}});})(x16410_16420))
;


ui.core.RemainingRangeView.prototype.constructor = ui.core.RemainingRangeView;

ui.core.RemainingRangeView.prototype.om$isComponent = true;

var x16418_16421 = ui.core.RemainingRangeView;
x16418_16421.om$next$IQuery$ = true;

x16418_16421.om$next$IQuery$query$arity$1 = ((function (x16418_16421){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566)], null);
});})(x16418_16421))
;


var x16419_16422 = ui.core.RemainingRangeView.prototype;
x16419_16422.om$next$IQuery$ = true;

x16419_16422.om$next$IQuery$query$arity$1 = ((function (x16419_16422){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566)], null);
});})(x16419_16422))
;


ui.core.RemainingRangeView.cljs$lang$type = true;

ui.core.RemainingRangeView.cljs$lang$ctorStr = "ui.core/RemainingRangeView";

ui.core.RemainingRangeView.cljs$lang$ctorPrWriter = (function (this__14509__auto__,writer__14510__auto__,opt__14511__auto__){
return cljs.core._write.call(null,writer__14510__auto__,"ui.core/RemainingRangeView");
});
ui.core.remaining_range_view = om.next.factory.call(null,ui.core.RemainingRangeView);
/**
 * @constructor
 */
ui.core.RouteView = (function ui$core$RouteView(){
var this__14507__auto__ = this;
React.Component.apply(this__14507__auto__,arguments);

if(!((this__14507__auto__.initLocalState == null))){
this__14507__auto__.state = this__14507__auto__.initLocalState();
} else {
this__14507__auto__.state = {};
}

return this__14507__auto__;
});

ui.core.RouteView.prototype = goog.object.clone(React.Component.prototype);

var x16428_16452 = ui.core.RouteView.prototype;
x16428_16452.componentWillUpdate = ((function (x16428_16452){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14447__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14447__auto__);
});})(x16428_16452))
;

x16428_16452.shouldComponentUpdate = ((function (x16428_16452){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14447__auto__),goog.object.get(next_props__14448__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__14447__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14447__auto__.state,"omcljs$state"),goog.object.get(next_state__14449__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x16428_16452))
;

x16428_16452.componentWillUnmount = ((function (x16428_16452){
return (function (){
var this__14447__auto__ = this;
var r__14453__auto__ = om.next.get_reconciler.call(null,this__14447__auto__);
var cfg__14454__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14453__auto__);
var st__14455__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
var indexer__14452__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
if((st__14455__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14455__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14447__auto__);
}

if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16428_16452))
;

x16428_16452.componentDidUpdate = ((function (x16428_16452){
return (function (prev_props__14450__auto__,prev_state__14451__auto__){
var this__14447__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14447__auto__);
});})(x16428_16452))
;

x16428_16452.isMounted = ((function (x16428_16452){
return (function (){
var this__14447__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14447__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16428_16452))
;

x16428_16452.componentWillMount = ((function (x16428_16452){
return (function (){
var this$ = this;
var indexer__14442__auto___16453 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14442__auto___16453 == null)){
} else {
om.next.protocols.index_component_BANG_.call(null,indexer__14442__auto___16453,this$);
}

return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destination","destination",-253872483),"Hamburg"], null));
});})(x16428_16452))
;

x16428_16452.render = ((function (x16428_16452){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16429 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16430 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16431 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16432 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16433 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__16434 = om.next.get_state.call(null,this$);
var map__16434__$1 = ((((!((map__16434 == null)))?((((map__16434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16434):map__16434);
var destination = cljs.core.get.call(null,map__16434__$1,new cljs.core.Keyword(null,"destination","destination",-253872483));
var map__16435 = om.next.props.call(null,this$);
var map__16435__$1 = ((((!((map__16435 == null)))?((((map__16435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16435):map__16435);
var routing = cljs.core.get.call(null,map__16435__$1,new cljs.core.Keyword(null,"routing","routing",1440253662));
var remaining_range = cljs.core.get.call(null,map__16435__$1,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566));
return React.DOM.div({"id": "route"},om.util.force_children.call(null,React.DOM.div({"id": "directions"},om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Route"))),om.util.force_children.call(null,React.DOM.form({"id": "route", "className": "routing"},om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"To:"))),om.util.force_children.call(null,om.dom.input.call(null,{"className": "destination", "type": "text", "value": destination, "onChange": ((function (map__16434,map__16434__$1,destination,map__16435,map__16435__$1,routing,remaining_range,_STAR_reconciler_STAR_16429,_STAR_depth_STAR_16430,_STAR_shared_STAR_16431,_STAR_instrument_STAR_16432,_STAR_parent_STAR_16433,this$,x16428_16452){
return (function (p1__16423_SHARP_){
return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destination","destination",-253872483),p1__16423_SHARP_.target.value], null));
});})(map__16434,map__16434__$1,destination,map__16435,map__16435__$1,routing,remaining_range,_STAR_reconciler_STAR_16429,_STAR_depth_STAR_16430,_STAR_shared_STAR_16431,_STAR_instrument_STAR_16432,_STAR_parent_STAR_16433,this$,x16428_16452))
})),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__16434,map__16434__$1,destination,map__16435,map__16435__$1,routing,remaining_range,_STAR_reconciler_STAR_16429,_STAR_depth_STAR_16430,_STAR_shared_STAR_16431,_STAR_instrument_STAR_16432,_STAR_parent_STAR_16433,this$,x16428_16452){
return (function (){
var c__11673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto__,map__16434,map__16434__$1,destination,map__16435,map__16435__$1,routing,remaining_range,_STAR_reconciler_STAR_16429,_STAR_depth_STAR_16430,_STAR_shared_STAR_16431,_STAR_instrument_STAR_16432,_STAR_parent_STAR_16433,this$,x16428_16452){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto__,map__16434,map__16434__$1,destination,map__16435,map__16435__$1,routing,remaining_range,_STAR_reconciler_STAR_16429,_STAR_depth_STAR_16430,_STAR_shared_STAR_16431,_STAR_instrument_STAR_16432,_STAR_parent_STAR_16433,this$,x16428_16452){
return (function (state_16441){
var state_val_16442 = (state_16441[(1)]);
if((state_val_16442 === (1))){
var state_16441__$1 = state_16441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16441__$1,(2),routing,destination);
} else {
if((state_val_16442 === (2))){
var inst_16439 = (state_16441[(2)]);
var state_16441__$1 = state_16441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16441__$1,inst_16439);
} else {
return null;
}
}
});})(c__11673__auto__,map__16434,map__16434__$1,destination,map__16435,map__16435__$1,routing,remaining_range,_STAR_reconciler_STAR_16429,_STAR_depth_STAR_16430,_STAR_shared_STAR_16431,_STAR_instrument_STAR_16432,_STAR_parent_STAR_16433,this$,x16428_16452))
;
return ((function (switch__11561__auto__,c__11673__auto__,map__16434,map__16434__$1,destination,map__16435,map__16435__$1,routing,remaining_range,_STAR_reconciler_STAR_16429,_STAR_depth_STAR_16430,_STAR_shared_STAR_16431,_STAR_instrument_STAR_16432,_STAR_parent_STAR_16433,this$,x16428_16452){
return (function() {
var ui$core$state_machine__11562__auto__ = null;
var ui$core$state_machine__11562__auto____0 = (function (){
var statearr_16446 = [null,null,null,null,null,null,null];
(statearr_16446[(0)] = ui$core$state_machine__11562__auto__);

(statearr_16446[(1)] = (1));

return statearr_16446;
});
var ui$core$state_machine__11562__auto____1 = (function (state_16441){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_16441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e16447){if((e16447 instanceof Object)){
var ex__11565__auto__ = e16447;
var statearr_16448_16454 = state_16441;
(statearr_16448_16454[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16455 = state_16441;
state_16441 = G__16455;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
ui$core$state_machine__11562__auto__ = function(state_16441){
switch(arguments.length){
case 0:
return ui$core$state_machine__11562__auto____0.call(this);
case 1:
return ui$core$state_machine__11562__auto____1.call(this,state_16441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__11562__auto____0;
ui$core$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__11562__auto____1;
return ui$core$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto__,map__16434,map__16434__$1,destination,map__16435,map__16435__$1,routing,remaining_range,_STAR_reconciler_STAR_16429,_STAR_depth_STAR_16430,_STAR_shared_STAR_16431,_STAR_instrument_STAR_16432,_STAR_parent_STAR_16433,this$,x16428_16452))
})();
var state__11675__auto__ = (function (){var statearr_16449 = f__11674__auto__.call(null);
(statearr_16449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto__);

return statearr_16449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto__,map__16434,map__16434__$1,destination,map__16435,map__16435__$1,routing,remaining_range,_STAR_reconciler_STAR_16429,_STAR_depth_STAR_16430,_STAR_shared_STAR_16431,_STAR_instrument_STAR_16432,_STAR_parent_STAR_16433,this$,x16428_16452))
);

return c__11673__auto__;
});})(map__16434,map__16434__$1,destination,map__16435,map__16435__$1,routing,remaining_range,_STAR_reconciler_STAR_16429,_STAR_depth_STAR_16430,_STAR_shared_STAR_16431,_STAR_instrument_STAR_16432,_STAR_parent_STAR_16433,this$,x16428_16452))
},om.util.force_children.call(null,"Directions"))))))),om.util.force_children.call(null,ui.core.remaining_range_view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566),remaining_range], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16433;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16432;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16431;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16430;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16429;
}});})(x16428_16452))
;


ui.core.RouteView.prototype.constructor = ui.core.RouteView;

ui.core.RouteView.prototype.om$isComponent = true;

var x16450_16456 = ui.core.RouteView;


var x16451_16457 = ui.core.RouteView.prototype;


ui.core.RouteView.cljs$lang$type = true;

ui.core.RouteView.cljs$lang$ctorStr = "ui.core/RouteView";

ui.core.RouteView.cljs$lang$ctorPrWriter = (function (this__14509__auto__,writer__14510__auto__,opt__14511__auto__){
return cljs.core._write.call(null,writer__14510__auto__,"ui.core/RouteView");
});
ui.core.route_view = om.next.factory.call(null,ui.core.RouteView);
/**
 * @constructor
 */
ui.core.FuelStopView = (function ui$core$FuelStopView(){
var this__14507__auto__ = this;
React.Component.apply(this__14507__auto__,arguments);

if(!((this__14507__auto__.initLocalState == null))){
this__14507__auto__.state = this__14507__auto__.initLocalState();
} else {
this__14507__auto__.state = {};
}

return this__14507__auto__;
});

ui.core.FuelStopView.prototype = goog.object.clone(React.Component.prototype);

var x16462_16470 = ui.core.FuelStopView.prototype;
x16462_16470.componentWillUpdate = ((function (x16462_16470){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14447__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14447__auto__);
});})(x16462_16470))
;

x16462_16470.shouldComponentUpdate = ((function (x16462_16470){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14447__auto__),goog.object.get(next_props__14448__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__14447__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14447__auto__.state,"omcljs$state"),goog.object.get(next_state__14449__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x16462_16470))
;

x16462_16470.componentWillUnmount = ((function (x16462_16470){
return (function (){
var this__14447__auto__ = this;
var r__14453__auto__ = om.next.get_reconciler.call(null,this__14447__auto__);
var cfg__14454__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14453__auto__);
var st__14455__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
var indexer__14452__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
if((st__14455__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14455__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14447__auto__);
}

if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16462_16470))
;

x16462_16470.componentDidUpdate = ((function (x16462_16470){
return (function (prev_props__14450__auto__,prev_state__14451__auto__){
var this__14447__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14447__auto__);
});})(x16462_16470))
;

x16462_16470.isMounted = ((function (x16462_16470){
return (function (){
var this__14447__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14447__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16462_16470))
;

x16462_16470.componentWillMount = ((function (x16462_16470){
return (function (){
var this__14447__auto__ = this;
var indexer__14452__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14447__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16462_16470))
;

x16462_16470.render = ((function (x16462_16470){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16463 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16464 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16465 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16466 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16467 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "fuel-stop", "className": "solid"},om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Fuel Stop"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16467;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16466;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16465;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16464;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16463;
}});})(x16462_16470))
;


ui.core.FuelStopView.prototype.constructor = ui.core.FuelStopView;

ui.core.FuelStopView.prototype.om$isComponent = true;

var x16468_16471 = ui.core.FuelStopView;


var x16469_16472 = ui.core.FuelStopView.prototype;


ui.core.FuelStopView.cljs$lang$type = true;

ui.core.FuelStopView.cljs$lang$ctorStr = "ui.core/FuelStopView";

ui.core.FuelStopView.cljs$lang$ctorPrWriter = (function (this__14509__auto__,writer__14510__auto__,opt__14511__auto__){
return cljs.core._write.call(null,writer__14510__auto__,"ui.core/FuelStopView");
});
ui.core.fuel_stop_view = om.next.factory.call(null,ui.core.FuelStopView);
/**
 * @constructor
 */
ui.core.PoiView = (function ui$core$PoiView(){
var this__14507__auto__ = this;
React.Component.apply(this__14507__auto__,arguments);

if(!((this__14507__auto__.initLocalState == null))){
this__14507__auto__.state = this__14507__auto__.initLocalState();
} else {
this__14507__auto__.state = {};
}

return this__14507__auto__;
});

ui.core.PoiView.prototype = goog.object.clone(React.Component.prototype);

var x16477_16485 = ui.core.PoiView.prototype;
x16477_16485.componentWillUpdate = ((function (x16477_16485){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14447__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14447__auto__);
});})(x16477_16485))
;

x16477_16485.shouldComponentUpdate = ((function (x16477_16485){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14447__auto__),goog.object.get(next_props__14448__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__14447__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14447__auto__.state,"omcljs$state"),goog.object.get(next_state__14449__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x16477_16485))
;

x16477_16485.componentWillUnmount = ((function (x16477_16485){
return (function (){
var this__14447__auto__ = this;
var r__14453__auto__ = om.next.get_reconciler.call(null,this__14447__auto__);
var cfg__14454__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14453__auto__);
var st__14455__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
var indexer__14452__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
if((st__14455__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14455__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14447__auto__);
}

if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16477_16485))
;

x16477_16485.componentDidUpdate = ((function (x16477_16485){
return (function (prev_props__14450__auto__,prev_state__14451__auto__){
var this__14447__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14447__auto__);
});})(x16477_16485))
;

x16477_16485.isMounted = ((function (x16477_16485){
return (function (){
var this__14447__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14447__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16477_16485))
;

x16477_16485.componentWillMount = ((function (x16477_16485){
return (function (){
var this__14447__auto__ = this;
var indexer__14452__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14447__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16477_16485))
;

x16477_16485.render = ((function (x16477_16485){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16478 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16479 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16480 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16481 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16482 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "poi", "className": "solid"},om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"POI"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16482;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16481;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16480;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16479;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16478;
}});})(x16477_16485))
;


ui.core.PoiView.prototype.constructor = ui.core.PoiView;

ui.core.PoiView.prototype.om$isComponent = true;

var x16483_16486 = ui.core.PoiView;


var x16484_16487 = ui.core.PoiView.prototype;


ui.core.PoiView.cljs$lang$type = true;

ui.core.PoiView.cljs$lang$ctorStr = "ui.core/PoiView";

ui.core.PoiView.cljs$lang$ctorPrWriter = (function (this__14509__auto__,writer__14510__auto__,opt__14511__auto__){
return cljs.core._write.call(null,writer__14510__auto__,"ui.core/PoiView");
});
ui.core.poi_view = om.next.factory.call(null,ui.core.PoiView);
/**
 * @constructor
 */
ui.core.UserProfilesView = (function ui$core$UserProfilesView(){
var this__14507__auto__ = this;
React.Component.apply(this__14507__auto__,arguments);

if(!((this__14507__auto__.initLocalState == null))){
this__14507__auto__.state = this__14507__auto__.initLocalState();
} else {
this__14507__auto__.state = {};
}

return this__14507__auto__;
});

ui.core.UserProfilesView.prototype = goog.object.clone(React.Component.prototype);

var x16492_16500 = ui.core.UserProfilesView.prototype;
x16492_16500.componentWillUpdate = ((function (x16492_16500){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14447__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14447__auto__);
});})(x16492_16500))
;

x16492_16500.shouldComponentUpdate = ((function (x16492_16500){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14447__auto__),goog.object.get(next_props__14448__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__14447__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14447__auto__.state,"omcljs$state"),goog.object.get(next_state__14449__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x16492_16500))
;

x16492_16500.componentWillUnmount = ((function (x16492_16500){
return (function (){
var this__14447__auto__ = this;
var r__14453__auto__ = om.next.get_reconciler.call(null,this__14447__auto__);
var cfg__14454__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14453__auto__);
var st__14455__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
var indexer__14452__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
if((st__14455__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14455__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14447__auto__);
}

if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16492_16500))
;

x16492_16500.componentDidUpdate = ((function (x16492_16500){
return (function (prev_props__14450__auto__,prev_state__14451__auto__){
var this__14447__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14447__auto__);
});})(x16492_16500))
;

x16492_16500.isMounted = ((function (x16492_16500){
return (function (){
var this__14447__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14447__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16492_16500))
;

x16492_16500.componentWillMount = ((function (x16492_16500){
return (function (){
var this__14447__auto__ = this;
var indexer__14452__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14447__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16492_16500))
;

x16492_16500.render = ((function (x16492_16500){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16493 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16494 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16495 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16496 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16497 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "user-profiles", "className": "solid"},om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"User Profiles"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16497;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16496;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16495;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16494;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16493;
}});})(x16492_16500))
;


ui.core.UserProfilesView.prototype.constructor = ui.core.UserProfilesView;

ui.core.UserProfilesView.prototype.om$isComponent = true;

var x16498_16501 = ui.core.UserProfilesView;


var x16499_16502 = ui.core.UserProfilesView.prototype;


ui.core.UserProfilesView.cljs$lang$type = true;

ui.core.UserProfilesView.cljs$lang$ctorStr = "ui.core/UserProfilesView";

ui.core.UserProfilesView.cljs$lang$ctorPrWriter = (function (this__14509__auto__,writer__14510__auto__,opt__14511__auto__){
return cljs.core._write.call(null,writer__14510__auto__,"ui.core/UserProfilesView");
});
ui.core.user_profiles_view = om.next.factory.call(null,ui.core.UserProfilesView);
/**
 * @constructor
 */
ui.core.SettingsView = (function ui$core$SettingsView(){
var this__14507__auto__ = this;
React.Component.apply(this__14507__auto__,arguments);

if(!((this__14507__auto__.initLocalState == null))){
this__14507__auto__.state = this__14507__auto__.initLocalState();
} else {
this__14507__auto__.state = {};
}

return this__14507__auto__;
});

ui.core.SettingsView.prototype = goog.object.clone(React.Component.prototype);

var x16507_16515 = ui.core.SettingsView.prototype;
x16507_16515.componentWillUpdate = ((function (x16507_16515){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14447__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14447__auto__);
});})(x16507_16515))
;

x16507_16515.shouldComponentUpdate = ((function (x16507_16515){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14447__auto__),goog.object.get(next_props__14448__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__14447__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14447__auto__.state,"omcljs$state"),goog.object.get(next_state__14449__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x16507_16515))
;

x16507_16515.componentWillUnmount = ((function (x16507_16515){
return (function (){
var this__14447__auto__ = this;
var r__14453__auto__ = om.next.get_reconciler.call(null,this__14447__auto__);
var cfg__14454__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14453__auto__);
var st__14455__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
var indexer__14452__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
if((st__14455__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14455__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14447__auto__);
}

if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16507_16515))
;

x16507_16515.componentDidUpdate = ((function (x16507_16515){
return (function (prev_props__14450__auto__,prev_state__14451__auto__){
var this__14447__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14447__auto__);
});})(x16507_16515))
;

x16507_16515.isMounted = ((function (x16507_16515){
return (function (){
var this__14447__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14447__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16507_16515))
;

x16507_16515.componentWillMount = ((function (x16507_16515){
return (function (){
var this__14447__auto__ = this;
var indexer__14452__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14447__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16507_16515))
;

x16507_16515.render = ((function (x16507_16515){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16508 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16509 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16510 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16511 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16512 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "settings", "class": "solid"},om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Settings"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16512;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16511;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16510;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16509;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16508;
}});})(x16507_16515))
;


ui.core.SettingsView.prototype.constructor = ui.core.SettingsView;

ui.core.SettingsView.prototype.om$isComponent = true;

var x16513_16516 = ui.core.SettingsView;


var x16514_16517 = ui.core.SettingsView.prototype;


ui.core.SettingsView.cljs$lang$type = true;

ui.core.SettingsView.cljs$lang$ctorStr = "ui.core/SettingsView";

ui.core.SettingsView.cljs$lang$ctorPrWriter = (function (this__14509__auto__,writer__14510__auto__,opt__14511__auto__){
return cljs.core._write.call(null,writer__14510__auto__,"ui.core/SettingsView");
});
ui.core.settings_view = om.next.factory.call(null,ui.core.SettingsView);
/**
 * @constructor
 */
ui.core.RootView = (function ui$core$RootView(){
var this__14507__auto__ = this;
React.Component.apply(this__14507__auto__,arguments);

if(!((this__14507__auto__.initLocalState == null))){
this__14507__auto__.state = this__14507__auto__.initLocalState();
} else {
this__14507__auto__.state = {};
}

return this__14507__auto__;
});

ui.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x16525_16563 = ui.core.RootView.prototype;
x16525_16563.componentWillUpdate = ((function (x16525_16563){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14447__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14447__auto__);
});})(x16525_16563))
;

x16525_16563.shouldComponentUpdate = ((function (x16525_16563){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14447__auto__),goog.object.get(next_props__14448__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__14447__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14447__auto__.state,"omcljs$state"),goog.object.get(next_state__14449__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x16525_16563))
;

x16525_16563.componentWillUnmount = ((function (x16525_16563){
return (function (){
var this__14447__auto__ = this;
var r__14453__auto__ = om.next.get_reconciler.call(null,this__14447__auto__);
var cfg__14454__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14453__auto__);
var st__14455__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
var indexer__14452__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
if((st__14455__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14455__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14447__auto__);
}

if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16525_16563))
;

x16525_16563.componentDidUpdate = ((function (x16525_16563){
return (function (prev_props__14450__auto__,prev_state__14451__auto__){
var this__14447__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14447__auto__);
});})(x16525_16563))
;

x16525_16563.isMounted = ((function (x16525_16563){
return (function (){
var this__14447__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14447__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16525_16563))
;

x16525_16563.componentWillMount = ((function (x16525_16563){
return (function (){
var this$ = this;
var indexer__14442__auto___16564 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14442__auto___16564 == null)){
} else {
om.next.protocols.index_component_BANG_.call(null,indexer__14442__auto___16564,this$);
}

var gps_positions = cljs.core.async.chan.call(null);
var routing = cljs.core.async.chan.call(null);
ui.gps.location.call(null,((function (gps_positions,routing,this$,x16525_16563){
return (function (p1__16519_SHARP_){
var c__11673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto__,gps_positions,routing,this$,x16525_16563){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto__,gps_positions,routing,this$,x16525_16563){
return (function (state_16529){
var state_val_16530 = (state_16529[(1)]);
if((state_val_16530 === (1))){
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16529__$1,(2),gps_positions,p1__16519_SHARP_);
} else {
if((state_val_16530 === (2))){
var inst_16527 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16529__$1,inst_16527);
} else {
return null;
}
}
});})(c__11673__auto__,gps_positions,routing,this$,x16525_16563))
;
return ((function (switch__11561__auto__,c__11673__auto__,gps_positions,routing,this$,x16525_16563){
return (function() {
var ui$core$state_machine__11562__auto__ = null;
var ui$core$state_machine__11562__auto____0 = (function (){
var statearr_16534 = [null,null,null,null,null,null,null];
(statearr_16534[(0)] = ui$core$state_machine__11562__auto__);

(statearr_16534[(1)] = (1));

return statearr_16534;
});
var ui$core$state_machine__11562__auto____1 = (function (state_16529){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_16529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e16535){if((e16535 instanceof Object)){
var ex__11565__auto__ = e16535;
var statearr_16536_16565 = state_16529;
(statearr_16536_16565[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16566 = state_16529;
state_16529 = G__16566;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
ui$core$state_machine__11562__auto__ = function(state_16529){
switch(arguments.length){
case 0:
return ui$core$state_machine__11562__auto____0.call(this);
case 1:
return ui$core$state_machine__11562__auto____1.call(this,state_16529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__11562__auto____0;
ui$core$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__11562__auto____1;
return ui$core$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto__,gps_positions,routing,this$,x16525_16563))
})();
var state__11675__auto__ = (function (){var statearr_16537 = f__11674__auto__.call(null);
(statearr_16537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto__);

return statearr_16537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto__,gps_positions,routing,this$,x16525_16563))
);

return c__11673__auto__;
});})(gps_positions,routing,this$,x16525_16563))
);

ui.software_updates.watch.call(null,((function (gps_positions,routing,this$,x16525_16563){
return (function (p__16538){
var map__16539 = p__16538;
var map__16539__$1 = ((((!((map__16539 == null)))?((((map__16539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16539):map__16539);
var name = cljs.core.get.call(null,map__16539__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var version = cljs.core.get.call(null,map__16539__$1,new cljs.core.Keyword(null,"version","version",425292698));
var size = cljs.core.get.call(null,map__16539__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var status = cljs.core.get.call(null,map__16539__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("software-updates","new-update","software-updates/new-update",1876226561,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","name","software-update/name",827209690)),cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","version","software-update/version",1052892105)),cljs.core._conj.call(null,cljs.core.List.EMPTY,version),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","size","software-update/size",188162400)),cljs.core._conj.call(null,cljs.core.List.EMPTY,size),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","status","software-update/status",1331026980)),cljs.core._conj.call(null,cljs.core.List.EMPTY,status)))))))))))))));
});})(gps_positions,routing,this$,x16525_16563))
);

om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gps-positions","gps-positions",-1184039063),gps_positions,new cljs.core.Keyword(null,"routing","routing",1440253662),routing], null));

var seq__16541 = cljs.core.seq.call(null,ui.software_updates.get_all.call(null));
var chunk__16542 = null;
var count__16543 = (0);
var i__16544 = (0);
while(true){
if((i__16544 < count__16543)){
var map__16545 = cljs.core._nth.call(null,chunk__16542,i__16544);
var map__16545__$1 = ((((!((map__16545 == null)))?((((map__16545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16545):map__16545);
var name = cljs.core.get.call(null,map__16545__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var version = cljs.core.get.call(null,map__16545__$1,new cljs.core.Keyword(null,"version","version",425292698));
var size = cljs.core.get.call(null,map__16545__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var status = cljs.core.get.call(null,map__16545__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("software-updates","new-update","software-updates/new-update",1876226561,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","name","software-update/name",827209690)),cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","version","software-update/version",1052892105)),cljs.core._conj.call(null,cljs.core.List.EMPTY,version),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","size","software-update/size",188162400)),cljs.core._conj.call(null,cljs.core.List.EMPTY,size),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","status","software-update/status",1331026980)),cljs.core._conj.call(null,cljs.core.List.EMPTY,status)))))))))))))));

var G__16567 = seq__16541;
var G__16568 = chunk__16542;
var G__16569 = count__16543;
var G__16570 = (i__16544 + (1));
seq__16541 = G__16567;
chunk__16542 = G__16568;
count__16543 = G__16569;
i__16544 = G__16570;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16541);
if(temp__4425__auto__){
var seq__16541__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16541__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__16541__$1);
var G__16571 = cljs.core.chunk_rest.call(null,seq__16541__$1);
var G__16572 = c__5971__auto__;
var G__16573 = cljs.core.count.call(null,c__5971__auto__);
var G__16574 = (0);
seq__16541 = G__16571;
chunk__16542 = G__16572;
count__16543 = G__16573;
i__16544 = G__16574;
continue;
} else {
var map__16547 = cljs.core.first.call(null,seq__16541__$1);
var map__16547__$1 = ((((!((map__16547 == null)))?((((map__16547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16547):map__16547);
var name = cljs.core.get.call(null,map__16547__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var version = cljs.core.get.call(null,map__16547__$1,new cljs.core.Keyword(null,"version","version",425292698));
var size = cljs.core.get.call(null,map__16547__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var status = cljs.core.get.call(null,map__16547__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("software-updates","new-update","software-updates/new-update",1876226561,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","name","software-update/name",827209690)),cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","version","software-update/version",1052892105)),cljs.core._conj.call(null,cljs.core.List.EMPTY,version),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","size","software-update/size",188162400)),cljs.core._conj.call(null,cljs.core.List.EMPTY,size),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","status","software-update/status",1331026980)),cljs.core._conj.call(null,cljs.core.List.EMPTY,status)))))))))))))));

var G__16575 = cljs.core.next.call(null,seq__16541__$1);
var G__16576 = null;
var G__16577 = (0);
var G__16578 = (0);
seq__16541 = G__16575;
chunk__16542 = G__16576;
count__16543 = G__16577;
i__16544 = G__16578;
continue;
}
} else {
return null;
}
}
break;
}
});})(x16525_16563))
;

x16525_16563.render = ((function (x16525_16563){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16549 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16550 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16551 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16552 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16553 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__16554 = om.next.props.call(null,this$);
var map__16554__$1 = ((((!((map__16554 == null)))?((((map__16554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16554):map__16554);
var props = map__16554__$1;
var users = cljs.core.get.call(null,map__16554__$1,new cljs.core.Keyword("app","users","app/users",-713520992));
var sections = cljs.core.get.call(null,map__16554__$1,new cljs.core.Keyword("app","sections","app/sections",-886812091));
var current_user = cljs.core.get.call(null,map__16554__$1,new cljs.core.Keyword("app","current-user","app/current-user",-868957432));
var current_section = cljs.core.get.call(null,map__16554__$1,new cljs.core.Keyword("app","current-section","app/current-section",1521904761));
var software_updates = cljs.core.get.call(null,map__16554__$1,new cljs.core.Keyword(null,"software-updates","software-updates",1873409622));
var remaining_range = cljs.core.get.call(null,map__16554__$1,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566));
var map__16555 = om.next.get_state.call(null,this$);
var map__16555__$1 = ((((!((map__16555 == null)))?((((map__16555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16555):map__16555);
var gps_positions = cljs.core.get.call(null,map__16555__$1,new cljs.core.Keyword(null,"gps-positions","gps-positions",-1184039063));
var routing = cljs.core.get.call(null,map__16555__$1,new cljs.core.Keyword(null,"routing","routing",1440253662));
var sections__$1 = cljs.core.map.call(null,((function (map__16554,map__16554__$1,props,users,sections,current_user,current_section,software_updates,remaining_range,map__16555,map__16555__$1,gps_positions,routing,_STAR_reconciler_STAR_16549,_STAR_depth_STAR_16550,_STAR_shared_STAR_16551,_STAR_instrument_STAR_16552,_STAR_parent_STAR_16553,this$,x16525_16563){
return (function (p1__16520_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("section","id","section/id",1495804783).cljs$core$IFn$_invoke$arity$1(p1__16520_SHARP_),new cljs.core.Keyword(null,"updates","updates",2013983452))){
var pending_count = cljs.core.count.call(null,cljs.core.filter.call(null,ui.software_updates.pending_QMARK_,software_updates));
var processing_count = cljs.core.count.call(null,cljs.core.filter.call(null,ui.software_updates.processing_QMARK_,software_updates));
return cljs.core.assoc.call(null,p1__16520_SHARP_,new cljs.core.Keyword("section","badge","section/badge",1281543678),pending_count,new cljs.core.Keyword("section","visible","section/visible",1231307198),cljs.core.not_EQ_.call(null,processing_count,(0)));
} else {
return p1__16520_SHARP_;
}
});})(map__16554,map__16554__$1,props,users,sections,current_user,current_section,software_updates,remaining_range,map__16555,map__16555__$1,gps_positions,routing,_STAR_reconciler_STAR_16549,_STAR_depth_STAR_16550,_STAR_shared_STAR_16551,_STAR_instrument_STAR_16552,_STAR_parent_STAR_16553,this$,x16525_16563))
,sections);
return React.DOM.div(null,om.util.force_children.call(null,ui.core.header_view.call(null,props)),om.util.force_children.call(null,ui.core.navigation_view.call(null,sections__$1)),om.util.force_children.call(null,React.DOM.div({"id": "main"},om.util.force_children.call(null,(function (){var pred__16558 = cljs.core._EQ_;
var expr__16559 = new cljs.core.Keyword("section","id","section/id",1495804783).cljs$core$IFn$_invoke$arity$1(current_section);
if(cljs.core.truth_(pred__16558.call(null,new cljs.core.Keyword(null,"route","route",329891309),expr__16559))){
return ui.core.route_view.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routing","routing",1440253662),routing,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566),remaining_range], null));
} else {
if(cljs.core.truth_(pred__16558.call(null,new cljs.core.Keyword(null,"fuel-stop","fuel-stop",-2127913382),expr__16559))){
return ui.core.fuel_stop_view.call(null);
} else {
if(cljs.core.truth_(pred__16558.call(null,new cljs.core.Keyword(null,"poi","poi",923822222),expr__16559))){
return ui.core.poi_view.call(null);
} else {
if(cljs.core.truth_(pred__16558.call(null,new cljs.core.Keyword(null,"user-profiles","user-profiles",1911528023),expr__16559))){
return ui.core.user_profiles_view.call(null);
} else {
if(cljs.core.truth_(pred__16558.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),expr__16559))){
return ui.core.settings_view.call(null);
} else {
if(cljs.core.truth_(pred__16558.call(null,new cljs.core.Keyword(null,"updates","updates",2013983452),expr__16559))){
return ui.software_updates.view.call(null,om.next.computed.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept-fn","accept-fn",-863534511),((function (pred__16558,expr__16559,map__16554,map__16554__$1,props,users,sections,current_user,current_section,software_updates,remaining_range,map__16555,map__16555__$1,gps_positions,routing,sections__$1,_STAR_reconciler_STAR_16549,_STAR_depth_STAR_16550,_STAR_shared_STAR_16551,_STAR_instrument_STAR_16552,_STAR_parent_STAR_16553,this$,x16525_16563){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("software-updates","accept!","software-updates/accept!",-554374218,null))], null));
});})(pred__16558,expr__16559,map__16554,map__16554__$1,props,users,sections,current_user,current_section,software_updates,remaining_range,map__16555,map__16555__$1,gps_positions,routing,sections__$1,_STAR_reconciler_STAR_16549,_STAR_depth_STAR_16550,_STAR_shared_STAR_16551,_STAR_instrument_STAR_16552,_STAR_parent_STAR_16553,this$,x16525_16563))
], null)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16559)].join('')));
}
}
}
}
}
}
})()),om.util.force_children.call(null,ui.map.view.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),gps_positions,new cljs.core.Keyword(null,"routing","routing",1440253662),routing], null))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16553;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16552;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16551;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16550;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16549;
}});})(x16525_16563))
;


ui.core.RootView.prototype.constructor = ui.core.RootView;

ui.core.RootView.prototype.om$isComponent = true;

var x16561_16579 = ui.core.RootView;
x16561_16579.om$next$IQuery$ = true;

x16561_16579.om$next$IQuery$query$arity$1 = ((function (x16561_16579){
return (function (this$){
var this$__$1 = this;
var sections = om.next.get_query.call(null,ui.core.SectionIconView);
var users = om.next.get_query.call(null,ui.core.UserView);
var software_updates = om.next.get_query.call(null,ui.software_updates.SoftwareUpdatesView);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","sections","app/sections",-886812091)),cljs.core._conj.call(null,cljs.core.List.EMPTY,sections)))))),software_updates,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","current-section","app/current-section",1521904761)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","users","app/users",-713520992)),cljs.core._conj.call(null,cljs.core.List.EMPTY,users)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","current-user","app/current-user",-868957432))))));
});})(x16561_16579))
;


var x16562_16580 = ui.core.RootView.prototype;
x16562_16580.om$next$IQuery$ = true;

x16562_16580.om$next$IQuery$query$arity$1 = ((function (x16562_16580){
return (function (this$){
var this$__$1 = this;
var sections = om.next.get_query.call(null,ui.core.SectionIconView);
var users = om.next.get_query.call(null,ui.core.UserView);
var software_updates = om.next.get_query.call(null,ui.software_updates.SoftwareUpdatesView);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","sections","app/sections",-886812091)),cljs.core._conj.call(null,cljs.core.List.EMPTY,sections)))))),software_updates,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","current-section","app/current-section",1521904761)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","users","app/users",-713520992)),cljs.core._conj.call(null,cljs.core.List.EMPTY,users)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","current-user","app/current-user",-868957432))))));
});})(x16562_16580))
;


ui.core.RootView.cljs$lang$type = true;

ui.core.RootView.cljs$lang$ctorStr = "ui.core/RootView";

ui.core.RootView.cljs$lang$ctorPrWriter = (function (this__14509__auto__,writer__14510__auto__,opt__14511__auto__){
return cljs.core._write.call(null,writer__14510__auto__,"ui.core/RootView");
});
ui.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),ui.core.init_data,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ui.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),ui.core.mutate], null))], null));
var seq__16581_16597 = cljs.core.seq.call(null,new cljs.core.Keyword("app","sections","app/sections",-886812091).cljs$core$IFn$_invoke$arity$1(ui.core.init_data));
var chunk__16582_16598 = null;
var count__16583_16599 = (0);
var i__16584_16600 = (0);
while(true){
if((i__16584_16600 < count__16583_16599)){
var map__16585_16601 = cljs.core._nth.call(null,chunk__16582_16598,i__16584_16600);
var map__16585_16602__$1 = ((((!((map__16585_16601 == null)))?((((map__16585_16601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16585_16601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16585_16601):map__16585_16601);
var id_16603 = cljs.core.get.call(null,map__16585_16602__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var action__15525__auto___16604 = ((function (seq__16581_16597,chunk__16582_16598,count__16583_16599,i__16584_16600,map__16585_16601,map__16585_16602__$1,id_16603){
return (function (params__15526__auto__){
if(cljs.core.map_QMARK_.call(null,params__15526__auto__)){
var map__16587 = params__15526__auto__;
var map__16587__$1 = ((((!((map__16587 == null)))?((((map__16587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16587):map__16587);
var params = map__16587__$1;
return om.next.transact_BANG_.call(null,ui.core.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("section","goto","section/goto",-201392033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"section","section",-300141526)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id_16603)))))))))))))));
} else {
if(cljs.core.vector_QMARK_.call(null,params__15526__auto__)){
var map__16589 = params__15526__auto__;
var map__16589__$1 = ((((!((map__16589 == null)))?((((map__16589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16589):map__16589);
var params = map__16589__$1;
return om.next.transact_BANG_.call(null,ui.core.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("section","goto","section/goto",-201392033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"section","section",-300141526)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id_16603)))))))))))))));
} else {
return null;
}
}
});})(seq__16581_16597,chunk__16582_16598,count__16583_16599,i__16584_16600,map__16585_16601,map__16585_16602__$1,id_16603))
;
secretary.core.add_route_BANG_.call(null,[cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,id_16603))].join(''),action__15525__auto___16604);


var G__16605 = seq__16581_16597;
var G__16606 = chunk__16582_16598;
var G__16607 = count__16583_16599;
var G__16608 = (i__16584_16600 + (1));
seq__16581_16597 = G__16605;
chunk__16582_16598 = G__16606;
count__16583_16599 = G__16607;
i__16584_16600 = G__16608;
continue;
} else {
var temp__4425__auto___16609 = cljs.core.seq.call(null,seq__16581_16597);
if(temp__4425__auto___16609){
var seq__16581_16610__$1 = temp__4425__auto___16609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16581_16610__$1)){
var c__5971__auto___16611 = cljs.core.chunk_first.call(null,seq__16581_16610__$1);
var G__16612 = cljs.core.chunk_rest.call(null,seq__16581_16610__$1);
var G__16613 = c__5971__auto___16611;
var G__16614 = cljs.core.count.call(null,c__5971__auto___16611);
var G__16615 = (0);
seq__16581_16597 = G__16612;
chunk__16582_16598 = G__16613;
count__16583_16599 = G__16614;
i__16584_16600 = G__16615;
continue;
} else {
var map__16591_16616 = cljs.core.first.call(null,seq__16581_16610__$1);
var map__16591_16617__$1 = ((((!((map__16591_16616 == null)))?((((map__16591_16616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16591_16616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16591_16616):map__16591_16616);
var id_16618 = cljs.core.get.call(null,map__16591_16617__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var action__15525__auto___16619 = ((function (seq__16581_16597,chunk__16582_16598,count__16583_16599,i__16584_16600,map__16591_16616,map__16591_16617__$1,id_16618,seq__16581_16610__$1,temp__4425__auto___16609){
return (function (params__15526__auto__){
if(cljs.core.map_QMARK_.call(null,params__15526__auto__)){
var map__16593 = params__15526__auto__;
var map__16593__$1 = ((((!((map__16593 == null)))?((((map__16593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16593):map__16593);
var params = map__16593__$1;
return om.next.transact_BANG_.call(null,ui.core.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("section","goto","section/goto",-201392033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"section","section",-300141526)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id_16618)))))))))))))));
} else {
if(cljs.core.vector_QMARK_.call(null,params__15526__auto__)){
var map__16595 = params__15526__auto__;
var map__16595__$1 = ((((!((map__16595 == null)))?((((map__16595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16595):map__16595);
var params = map__16595__$1;
return om.next.transact_BANG_.call(null,ui.core.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("section","goto","section/goto",-201392033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"section","section",-300141526)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id_16618)))))))))))))));
} else {
return null;
}
}
});})(seq__16581_16597,chunk__16582_16598,count__16583_16599,i__16584_16600,map__16591_16616,map__16591_16617__$1,id_16618,seq__16581_16610__$1,temp__4425__auto___16609))
;
secretary.core.add_route_BANG_.call(null,[cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,id_16618))].join(''),action__15525__auto___16619);


var G__16620 = cljs.core.next.call(null,seq__16581_16610__$1);
var G__16621 = null;
var G__16622 = (0);
var G__16623 = (0);
seq__16581_16597 = G__16620;
chunk__16582_16598 = G__16621;
count__16583_16599 = G__16622;
i__16584_16600 = G__16623;
continue;
}
} else {
}
}
break;
}
ui.core.init = (function ui$core$init(){
return om.next.add_root_BANG_.call(null,ui.core.reconciler,ui.core.RootView,goog.dom.getElement("app"));
});

//# sourceMappingURL=core.js.map