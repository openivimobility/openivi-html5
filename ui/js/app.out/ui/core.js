// Compiled by ClojureScript 1.7.166 {}
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
var h_24249 = (new goog.History());
goog.events.listen(h_24249,goog.history.EventType.NAVIGATE,((function (h_24249){
return (function (e){
return secretary.core.dispatch_BANG_.call(null,e.token);
});})(h_24249))
);

var G__24248_24250 = h_24249;
G__24248_24250.setEnabled(true);

cljs.core.enable_console_print_BANG_.call(null);
ui.core.init_data = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("app","sections","app/sections",-886812091),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"Route",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword("section","visible","section/visible",1231307198),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"Fuel stop",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"fuel-stop","fuel-stop",-2127913382),new cljs.core.Keyword("section","visible","section/visible",1231307198),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"POI",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"poi","poi",923822222),new cljs.core.Keyword("section","visible","section/visible",1231307198),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"User",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"user-profiles","user-profiles",1911528023),new cljs.core.Keyword("section","visible","section/visible",1231307198),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"Settings",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("section","visible","section/visible",1231307198),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"Updates",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"updates","updates",2013983452),new cljs.core.Keyword("section","visible","section/visible",1231307198),true], null)], null),new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566),(30),new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("app","users","app/users",-713520992),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","name","user/name",1848814598),"guest",new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword(null,"guest","guest",692663006)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","name","user/name",1848814598),"Ringo",new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword(null,"ringo","ringo",-1968417937)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","name","user/name",1848814598),"John",new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword(null,"john","john",-1116534405)], null)], null),new cljs.core.Keyword("app","current-user","app/current-user",-868957432),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"guest","guest",692663006)], null),new cljs.core.Keyword("app","current-section","app/current-section",1521904761),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","by-id","section/by-id",329469792),new cljs.core.Keyword(null,"route","route",329891309)], null)], null);
ui.core.get_many = (function ui$core$get_many(state,key){
var st = cljs.core.deref.call(null,state);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st){
return (function (p1__24251_SHARP_){
return cljs.core.get_in.call(null,st,p1__24251_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
if(typeof ui.core.read !== 'undefined'){
} else {
ui.core.read = (function (){var method_table__6073__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6074__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6075__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6076__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6077__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6077__auto__,method_table__6073__auto__,prefer_table__6074__auto__,method_cache__6075__auto__,cached_hierarchy__6076__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__24252,k,_){
var map__24253 = p__24252;
var map__24253__$1 = ((((!((map__24253 == null)))?((((map__24253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24253):map__24253);
var state = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
if(cljs.core.contains_QMARK_.call(null,st,k)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,k)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("app","current-user","app/current-user",-868957432),(function (p__24255,key,_){
var map__24256 = p__24255;
var map__24256__$1 = ((((!((map__24256 == null)))?((((map__24256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24256):map__24256);
var env = map__24256__$1;
var state = cljs.core.get.call(null,map__24256__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,st,cljs.core.get.call(null,st,key))], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("app","current-section","app/current-section",1521904761),(function (p__24258,key,_){
var map__24259 = p__24258;
var map__24259__$1 = ((((!((map__24259 == null)))?((((map__24259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24259):map__24259);
var env = map__24259__$1;
var state = cljs.core.get.call(null,map__24259__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,st,cljs.core.get.call(null,st,key))], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("app","sections","app/sections",-886812091),(function (p__24261,key,_){
var map__24262 = p__24261;
var map__24262__$1 = ((((!((map__24262 == null)))?((((map__24262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24262):map__24262);
var env = map__24262__$1;
var state = cljs.core.get.call(null,map__24262__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
if(cljs.core.contains_QMARK_.call(null,st,key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.map.call(null,((function (st,map__24262,map__24262__$1,env,state){
return (function (section_ref){
var map__24264 = st;
var map__24264__$1 = ((((!((map__24264 == null)))?((((map__24264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24264):map__24264);
var current_section = cljs.core.get.call(null,map__24264__$1,new cljs.core.Keyword("app","current-section","app/current-section",1521904761));
var current = cljs.core.get_in.call(null,st,current_section);
var section = cljs.core.get_in.call(null,st,section_ref);
var section__$1 = cljs.core.assoc.call(null,section,new cljs.core.Keyword("section","active","section/active",93427439),cljs.core._EQ_.call(null,current,section));
return section__$1;
});})(st,map__24262,map__24262__$1,env,state))
,cljs.core.get.call(null,st,key))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),(function (p__24267,key,_){
var map__24268 = p__24267;
var map__24268__$1 = ((((!((map__24268 == null)))?((((map__24268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24268):map__24268);
var env = map__24268__$1;
var state = cljs.core.get.call(null,map__24268__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st,map__24268,map__24268__$1,env,state){
return (function (p1__24266_SHARP_){
return cljs.core.get_in.call(null,st,p1__24266_SHARP_);
});})(st,map__24268,map__24268__$1,env,state))
),cljs.core.get.call(null,st,key))], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("app","users","app/users",-713520992),(function (p__24270,key,_){
var map__24271 = p__24270;
var map__24271__$1 = ((((!((map__24271 == null)))?((((map__24271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24271):map__24271);
var env = map__24271__$1;
var state = cljs.core.get.call(null,map__24271__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
if(cljs.core.contains_QMARK_.call(null,st,key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.map.call(null,((function (st,map__24271,map__24271__$1,env,state){
return (function (user_ref){
var map__24273 = st;
var map__24273__$1 = ((((!((map__24273 == null)))?((((map__24273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24273):map__24273);
var current_user = cljs.core.get.call(null,map__24273__$1,new cljs.core.Keyword("app","current-user","app/current-user",-868957432));
var current = cljs.core.get_in.call(null,st,current_user);
var user = cljs.core.get_in.call(null,st,user_ref);
var user__$1 = cljs.core.assoc.call(null,user,new cljs.core.Keyword("user","authenticated","user/authenticated",1279355290),cljs.core._EQ_.call(null,current,user));
return user__$1;
});})(st,map__24271,map__24271__$1,env,state))
,cljs.core.get.call(null,st,key))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
if(typeof ui.core.mutate !== 'undefined'){
} else {
ui.core.mutate = (function (){var method_table__6073__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6074__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6075__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6076__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6077__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6077__auto__,method_table__6073__auto__,prefer_table__6074__auto__,method_cache__6075__auto__,cached_hierarchy__6076__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("section","goto","section/goto",-201392033,null),(function (p__24275,_,p__24276){
var map__24277 = p__24275;
var map__24277__$1 = ((((!((map__24277 == null)))?((((map__24277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24277):map__24277);
var env = map__24277__$1;
var state = cljs.core.get.call(null,map__24277__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__24278 = p__24276;
var map__24278__$1 = ((((!((map__24278 == null)))?((((map__24278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24278):map__24278);
var section = cljs.core.get.call(null,map__24278__$1,new cljs.core.Keyword(null,"section","section",-300141526));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__24277,map__24277__$1,env,state,map__24278,map__24278__$1,section){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("app","current-section","app/current-section",1521904761),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","by-id","section/by-id",329469792),section], null));
});})(map__24277,map__24277__$1,env,state,map__24278,map__24278__$1,section))
], null);
}));
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("software-updates","accept!","software-updates/accept!",-554374218,null),(function (p__24281,_,___$1){
var map__24282 = p__24281;
var map__24282__$1 = ((((!((map__24282 == null)))?((((map__24282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24282):map__24282);
var env = map__24282__$1;
var state = cljs.core.get.call(null,map__24282__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__24282,map__24282__$1,env,state){
return (function (){
ui.software_updates.accept_BANG_.call(null);

var seq__24284 = cljs.core.seq.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"software-updates","software-updates",1873409622)));
var chunk__24285 = null;
var count__24286 = (0);
var i__24287 = (0);
while(true){
if((i__24287 < count__24286)){
var update_ref = cljs.core._nth.call(null,chunk__24285,i__24287);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,update_ref,((function (seq__24284,chunk__24285,count__24286,i__24287,update_ref,map__24282,map__24282__$1,env,state){
return (function (update){
if(cljs.core.truth_(ui.software_updates.pending_QMARK_.call(null,update))){
return cljs.core.assoc.call(null,update,new cljs.core.Keyword("software-update","status","software-update/status",1331026980),new cljs.core.Keyword(null,"downloading","downloading",-213530737));
} else {
return update;
}
});})(seq__24284,chunk__24285,count__24286,i__24287,update_ref,map__24282,map__24282__$1,env,state))
);

var G__24288 = seq__24284;
var G__24289 = chunk__24285;
var G__24290 = count__24286;
var G__24291 = (i__24287 + (1));
seq__24284 = G__24288;
chunk__24285 = G__24289;
count__24286 = G__24290;
i__24287 = G__24291;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24284);
if(temp__4425__auto__){
var seq__24284__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24284__$1)){
var c__5963__auto__ = cljs.core.chunk_first.call(null,seq__24284__$1);
var G__24292 = cljs.core.chunk_rest.call(null,seq__24284__$1);
var G__24293 = c__5963__auto__;
var G__24294 = cljs.core.count.call(null,c__5963__auto__);
var G__24295 = (0);
seq__24284 = G__24292;
chunk__24285 = G__24293;
count__24286 = G__24294;
i__24287 = G__24295;
continue;
} else {
var update_ref = cljs.core.first.call(null,seq__24284__$1);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,update_ref,((function (seq__24284,chunk__24285,count__24286,i__24287,update_ref,seq__24284__$1,temp__4425__auto__,map__24282,map__24282__$1,env,state){
return (function (update){
if(cljs.core.truth_(ui.software_updates.pending_QMARK_.call(null,update))){
return cljs.core.assoc.call(null,update,new cljs.core.Keyword("software-update","status","software-update/status",1331026980),new cljs.core.Keyword(null,"downloading","downloading",-213530737));
} else {
return update;
}
});})(seq__24284,chunk__24285,count__24286,i__24287,update_ref,seq__24284__$1,temp__4425__auto__,map__24282,map__24282__$1,env,state))
);

var G__24296 = cljs.core.next.call(null,seq__24284__$1);
var G__24297 = null;
var G__24298 = (0);
var G__24299 = (0);
seq__24284 = G__24296;
chunk__24285 = G__24297;
count__24286 = G__24298;
i__24287 = G__24299;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__24282,map__24282__$1,env,state))
], null);
}));
ui.core.create_update = (function ui$core$create_update(st,p__24300){
var map__24303 = p__24300;
var map__24303__$1 = ((((!((map__24303 == null)))?((((map__24303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24303):map__24303);
var software_update = map__24303__$1;
var name = cljs.core.get.call(null,map__24303__$1,new cljs.core.Keyword("software-update","name","software-update/name",827209690));
var version = cljs.core.get.call(null,map__24303__$1,new cljs.core.Keyword("software-update","version","software-update/version",1052892105));
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","by-id","software-update/by-id",1413379894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,version], null)], null);
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,software_update),new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),cljs.core.conj,ref);
});
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("software-updates","new-update","software-updates/new-update",1876226561,null),(function (p__24305,_,update){
var map__24306 = p__24305;
var map__24306__$1 = ((((!((map__24306 == null)))?((((map__24306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24306):map__24306);
var env = map__24306__$1;
var state = cljs.core.get.call(null,map__24306__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__24306,map__24306__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,((function (map__24306,map__24306__$1,env,state){
return (function (st){
return ui.core.create_update.call(null,st,update);
});})(map__24306,map__24306__$1,env,state))
);
});})(map__24306,map__24306__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__24308,key,params){
var map__24309 = p__24308;
var map__24309__$1 = ((((!((map__24309 == null)))?((((map__24309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24309):map__24309);
var env = map__24309__$1;
var state = cljs.core.get.call(null,map__24309__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
console.error("unknown mutate: ",key,params);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}));
/**
 * @constructor
 */
ui.core.SectionIconView = (function ui$core$SectionIconView(){
var this__14365__auto__ = this;
React.Component.apply(this__14365__auto__,arguments);

if(!((this__14365__auto__.getInitialState == null))){
this__14365__auto__.state = this__14365__auto__.getInitialState();
} else {
this__14365__auto__.state = {};
}

return this__14365__auto__;
});

ui.core.SectionIconView.prototype = goog.object.clone(React.Component.prototype);

var x24315_24331 = ui.core.SectionIconView.prototype;
x24315_24331.componentWillUpdate = ((function (x24315_24331){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14305__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14305__auto__);
});})(x24315_24331))
;

x24315_24331.shouldComponentUpdate = ((function (x24315_24331){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
var or__5160__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14305__auto__),goog.object.get(next_props__14306__auto__,"omcljs$value"));
if(or__5160__auto__){
return or__5160__auto__;
} else {
var and__5148__auto__ = this__14305__auto__.state;
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14305__auto__.state,"omcljs$state"),goog.object.get(next_state__14307__auto__,"omcljs$state"));
} else {
return and__5148__auto__;
}
}
});})(x24315_24331))
;

x24315_24331.componentWillUnmount = ((function (x24315_24331){
return (function (){
var this__14305__auto__ = this;
var r__14311__auto__ = om.next.get_reconciler.call(null,this__14305__auto__);
var cfg__14312__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14311__auto__);
var st__14313__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
var indexer__14310__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
if((st__14313__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14313__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14305__auto__);
}

if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24315_24331))
;

x24315_24331.componentDidUpdate = ((function (x24315_24331){
return (function (prev_props__14308__auto__,prev_state__14309__auto__){
var this__14305__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14305__auto__);
});})(x24315_24331))
;

x24315_24331.isMounted = ((function (x24315_24331){
return (function (){
var this__14305__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14305__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24315_24331))
;

x24315_24331.componentWillMount = ((function (x24315_24331){
return (function (){
var this__14305__auto__ = this;
var indexer__14310__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14305__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24315_24331))
;

x24315_24331.render = ((function (x24315_24331){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24316 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24317 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24318 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24319 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24320 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__24321 = om.next.props.call(null,this$);
var map__24321__$1 = ((((!((map__24321 == null)))?((((map__24321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24321):map__24321);
var id = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var name = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword("section","name","section/name",-260849884));
var active = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword("section","active","section/active",93427439));
var badge = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword("section","badge","section/badge",1281543678));
var section_id = cljs.core.name.call(null,id);
return React.DOM.li({"className": [cljs.core.str(section_id),cljs.core.str((cljs.core.truth_(active)?" active":""))].join('')},(cljs.core.truth_(badge)?React.DOM.div({"className": "section-badge"},badge):React.DOM.div(null)),React.DOM.a({"href": [cljs.core.str("#/"),cljs.core.str(section_id)].join('')},name));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24320;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24319;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24318;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24317;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24316;
}});})(x24315_24331))
;


ui.core.SectionIconView.prototype.constructor = ui.core.SectionIconView;

ui.core.SectionIconView.prototype.om$isComponent = true;

var x24323_24332 = ui.core.SectionIconView;
x24323_24332.om$next$Ident$ = true;

x24323_24332.om$next$Ident$ident$arity$2 = ((function (x24323_24332){
return (function (this$,p__24324){
var map__24325 = p__24324;
var map__24325__$1 = ((((!((map__24325 == null)))?((((map__24325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24325):map__24325);
var id = cljs.core.get.call(null,map__24325__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","by-id","section/by-id",329469792),id], null);
});})(x24323_24332))
;

x24323_24332.om$next$IQuery$ = true;

x24323_24332.om$next$IQuery$query$arity$1 = ((function (x24323_24332){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword("section","name","section/name",-260849884),new cljs.core.Keyword("section","visible","section/visible",1231307198),new cljs.core.Keyword("section","active","section/active",93427439)], null);
});})(x24323_24332))
;


var x24327_24333 = ui.core.SectionIconView.prototype;
x24327_24333.om$next$Ident$ = true;

x24327_24333.om$next$Ident$ident$arity$2 = ((function (x24327_24333){
return (function (this$,p__24328){
var map__24329 = p__24328;
var map__24329__$1 = ((((!((map__24329 == null)))?((((map__24329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24329):map__24329);
var id = cljs.core.get.call(null,map__24329__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","by-id","section/by-id",329469792),id], null);
});})(x24327_24333))
;

x24327_24333.om$next$IQuery$ = true;

x24327_24333.om$next$IQuery$query$arity$1 = ((function (x24327_24333){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword("section","name","section/name",-260849884),new cljs.core.Keyword("section","visible","section/visible",1231307198),new cljs.core.Keyword("section","active","section/active",93427439)], null);
});})(x24327_24333))
;


ui.core.SectionIconView.cljs$lang$type = true;

ui.core.SectionIconView.cljs$lang$ctorStr = "ui.core/SectionIconView";

ui.core.SectionIconView.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){
return cljs.core._write.call(null,writer__14368__auto__,"ui.core/SectionIconView");
});
ui.core.section_icon_view = om.next.factory.call(null,ui.core.SectionIconView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("section","id","section/id",1495804783)], null));
/**
 * @constructor
 */
ui.core.NavigationView = (function ui$core$NavigationView(){
var this__14365__auto__ = this;
React.Component.apply(this__14365__auto__,arguments);

if(!((this__14365__auto__.getInitialState == null))){
this__14365__auto__.state = this__14365__auto__.getInitialState();
} else {
this__14365__auto__.state = {};
}

return this__14365__auto__;
});

ui.core.NavigationView.prototype = goog.object.clone(React.Component.prototype);

var x24338_24346 = ui.core.NavigationView.prototype;
x24338_24346.componentWillUpdate = ((function (x24338_24346){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14305__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14305__auto__);
});})(x24338_24346))
;

x24338_24346.shouldComponentUpdate = ((function (x24338_24346){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
var or__5160__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14305__auto__),goog.object.get(next_props__14306__auto__,"omcljs$value"));
if(or__5160__auto__){
return or__5160__auto__;
} else {
var and__5148__auto__ = this__14305__auto__.state;
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14305__auto__.state,"omcljs$state"),goog.object.get(next_state__14307__auto__,"omcljs$state"));
} else {
return and__5148__auto__;
}
}
});})(x24338_24346))
;

x24338_24346.componentWillUnmount = ((function (x24338_24346){
return (function (){
var this__14305__auto__ = this;
var r__14311__auto__ = om.next.get_reconciler.call(null,this__14305__auto__);
var cfg__14312__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14311__auto__);
var st__14313__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
var indexer__14310__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
if((st__14313__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14313__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14305__auto__);
}

if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24338_24346))
;

x24338_24346.componentDidUpdate = ((function (x24338_24346){
return (function (prev_props__14308__auto__,prev_state__14309__auto__){
var this__14305__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14305__auto__);
});})(x24338_24346))
;

x24338_24346.isMounted = ((function (x24338_24346){
return (function (){
var this__14305__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14305__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24338_24346))
;

x24338_24346.componentWillMount = ((function (x24338_24346){
return (function (){
var this__14305__auto__ = this;
var indexer__14310__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14305__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24338_24346))
;

x24338_24346.render = ((function (x24338_24346){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24339 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24340 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24341 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24342 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24343 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var sections = om.next.props.call(null,this$);
return cljs.core.apply.call(null,om.dom.ul,{"className": "side-nav"},cljs.core.map.call(null,ui.core.section_icon_view,cljs.core.filter.call(null,new cljs.core.Keyword("section","visible","section/visible",1231307198),sections)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24343;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24342;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24341;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24340;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24339;
}});})(x24338_24346))
;


ui.core.NavigationView.prototype.constructor = ui.core.NavigationView;

ui.core.NavigationView.prototype.om$isComponent = true;

var x24344_24347 = ui.core.NavigationView;


var x24345_24348 = ui.core.NavigationView.prototype;


ui.core.NavigationView.cljs$lang$type = true;

ui.core.NavigationView.cljs$lang$ctorStr = "ui.core/NavigationView";

ui.core.NavigationView.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){
return cljs.core._write.call(null,writer__14368__auto__,"ui.core/NavigationView");
});
ui.core.navigation_view = om.next.factory.call(null,ui.core.NavigationView);
/**
 * @constructor
 */
ui.core.UserView = (function ui$core$UserView(){
var this__14365__auto__ = this;
React.Component.apply(this__14365__auto__,arguments);

if(!((this__14365__auto__.getInitialState == null))){
this__14365__auto__.state = this__14365__auto__.getInitialState();
} else {
this__14365__auto__.state = {};
}

return this__14365__auto__;
});

ui.core.UserView.prototype = goog.object.clone(React.Component.prototype);

var x24353_24369 = ui.core.UserView.prototype;
x24353_24369.componentWillUpdate = ((function (x24353_24369){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14305__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14305__auto__);
});})(x24353_24369))
;

x24353_24369.shouldComponentUpdate = ((function (x24353_24369){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
var or__5160__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14305__auto__),goog.object.get(next_props__14306__auto__,"omcljs$value"));
if(or__5160__auto__){
return or__5160__auto__;
} else {
var and__5148__auto__ = this__14305__auto__.state;
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14305__auto__.state,"omcljs$state"),goog.object.get(next_state__14307__auto__,"omcljs$state"));
} else {
return and__5148__auto__;
}
}
});})(x24353_24369))
;

x24353_24369.componentWillUnmount = ((function (x24353_24369){
return (function (){
var this__14305__auto__ = this;
var r__14311__auto__ = om.next.get_reconciler.call(null,this__14305__auto__);
var cfg__14312__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14311__auto__);
var st__14313__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
var indexer__14310__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
if((st__14313__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14313__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14305__auto__);
}

if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24353_24369))
;

x24353_24369.componentDidUpdate = ((function (x24353_24369){
return (function (prev_props__14308__auto__,prev_state__14309__auto__){
var this__14305__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14305__auto__);
});})(x24353_24369))
;

x24353_24369.isMounted = ((function (x24353_24369){
return (function (){
var this__14305__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14305__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24353_24369))
;

x24353_24369.componentWillMount = ((function (x24353_24369){
return (function (){
var this__14305__auto__ = this;
var indexer__14310__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14305__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24353_24369))
;

x24353_24369.render = ((function (x24353_24369){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24354 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24355 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24356 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24357 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24358 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__24359 = om.next.props.call(null,this$);
var map__24359__$1 = ((((!((map__24359 == null)))?((((map__24359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24359):map__24359);
var id = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var name = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword("user","name","user/name",1848814598));
var authenticated = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword("user","authenticated","user/authenticated",1279355290));
return React.DOM.div(null,React.DOM.span(null,id),React.DOM.span(null,name),React.DOM.span(null,authenticated));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24358;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24357;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24356;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24355;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24354;
}});})(x24353_24369))
;


ui.core.UserView.prototype.constructor = ui.core.UserView;

ui.core.UserView.prototype.om$isComponent = true;

var x24361_24370 = ui.core.UserView;
x24361_24370.om$next$Ident$ = true;

x24361_24370.om$next$Ident$ident$arity$2 = ((function (x24361_24370){
return (function (this$,p__24362){
var map__24363 = p__24362;
var map__24363__$1 = ((((!((map__24363 == null)))?((((map__24363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24363):map__24363);
var id = cljs.core.get.call(null,map__24363__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),id], null);
});})(x24361_24370))
;

x24361_24370.om$next$IQuery$ = true;

x24361_24370.om$next$IQuery$query$arity$1 = ((function (x24361_24370){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","authenticated","user/authenticated",1279355290)], null);
});})(x24361_24370))
;


var x24365_24371 = ui.core.UserView.prototype;
x24365_24371.om$next$Ident$ = true;

x24365_24371.om$next$Ident$ident$arity$2 = ((function (x24365_24371){
return (function (this$,p__24366){
var map__24367 = p__24366;
var map__24367__$1 = ((((!((map__24367 == null)))?((((map__24367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24367):map__24367);
var id = cljs.core.get.call(null,map__24367__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),id], null);
});})(x24365_24371))
;

x24365_24371.om$next$IQuery$ = true;

x24365_24371.om$next$IQuery$query$arity$1 = ((function (x24365_24371){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","authenticated","user/authenticated",1279355290)], null);
});})(x24365_24371))
;


ui.core.UserView.cljs$lang$type = true;

ui.core.UserView.cljs$lang$ctorStr = "ui.core/UserView";

ui.core.UserView.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){
return cljs.core._write.call(null,writer__14368__auto__,"ui.core/UserView");
});
ui.core.user_view = om.next.factory.call(null,ui.core.UserView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword("user","id","user/id",-1375756663)], null));
/**
 * @constructor
 */
ui.core.HeaderView = (function ui$core$HeaderView(){
var this__14365__auto__ = this;
React.Component.apply(this__14365__auto__,arguments);

if(!((this__14365__auto__.getInitialState == null))){
this__14365__auto__.state = this__14365__auto__.getInitialState();
} else {
this__14365__auto__.state = {};
}

return this__14365__auto__;
});

ui.core.HeaderView.prototype = goog.object.clone(React.Component.prototype);

var x24376_24388 = ui.core.HeaderView.prototype;
x24376_24388.componentWillUpdate = ((function (x24376_24388){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14305__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14305__auto__);
});})(x24376_24388))
;

x24376_24388.shouldComponentUpdate = ((function (x24376_24388){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
var or__5160__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14305__auto__),goog.object.get(next_props__14306__auto__,"omcljs$value"));
if(or__5160__auto__){
return or__5160__auto__;
} else {
var and__5148__auto__ = this__14305__auto__.state;
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14305__auto__.state,"omcljs$state"),goog.object.get(next_state__14307__auto__,"omcljs$state"));
} else {
return and__5148__auto__;
}
}
});})(x24376_24388))
;

x24376_24388.componentWillUnmount = ((function (x24376_24388){
return (function (){
var this__14305__auto__ = this;
var r__14311__auto__ = om.next.get_reconciler.call(null,this__14305__auto__);
var cfg__14312__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14311__auto__);
var st__14313__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
var indexer__14310__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
if((st__14313__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14313__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14305__auto__);
}

if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24376_24388))
;

x24376_24388.componentDidUpdate = ((function (x24376_24388){
return (function (prev_props__14308__auto__,prev_state__14309__auto__){
var this__14305__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14305__auto__);
});})(x24376_24388))
;

x24376_24388.isMounted = ((function (x24376_24388){
return (function (){
var this__14305__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14305__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24376_24388))
;

x24376_24388.componentWillMount = ((function (x24376_24388){
return (function (){
var this__14305__auto__ = this;
var indexer__14310__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14305__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24376_24388))
;

x24376_24388.render = ((function (x24376_24388){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24377 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24378 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24379 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24380 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24381 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__24382 = om.next.props.call(null,this$);
var map__24382__$1 = ((((!((map__24382 == null)))?((((map__24382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24382):map__24382);
var current_user = cljs.core.get.call(null,map__24382__$1,new cljs.core.Keyword("app","current-user","app/current-user",-868957432));
var map__24383 = current_user;
var map__24383__$1 = ((((!((map__24383 == null)))?((((map__24383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24383):map__24383);
var name = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword("user","name","user/name",1848814598));
return React.DOM.div({"className": "top-nav"},React.DOM.span({"className": "top-logo"},React.DOM.a({"href": [cljs.core.str("#/settings")].join('')})),React.DOM.span({"className": "top-user-icon"},React.DOM.span({"className": "top-user-greeting"},"Hi, ",React.DOM.span({"className": "top-user-name"},name))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24381;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24380;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24379;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24378;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24377;
}});})(x24376_24388))
;


ui.core.HeaderView.prototype.constructor = ui.core.HeaderView;

ui.core.HeaderView.prototype.om$isComponent = true;

var x24386_24389 = ui.core.HeaderView;
x24386_24389.om$next$IQuery$ = true;

x24386_24389.om$next$IQuery$query$arity$1 = ((function (x24386_24389){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","current-user","app/current-user",-868957432),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null)], null);
});})(x24386_24389))
;


var x24387_24390 = ui.core.HeaderView.prototype;
x24387_24390.om$next$IQuery$ = true;

x24387_24390.om$next$IQuery$query$arity$1 = ((function (x24387_24390){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","current-user","app/current-user",-868957432),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null)], null);
});})(x24387_24390))
;


ui.core.HeaderView.cljs$lang$type = true;

ui.core.HeaderView.cljs$lang$ctorStr = "ui.core/HeaderView";

ui.core.HeaderView.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){
return cljs.core._write.call(null,writer__14368__auto__,"ui.core/HeaderView");
});
ui.core.header_view = om.next.factory.call(null,ui.core.HeaderView);
/**
 * @constructor
 */
ui.core.RemainingRangeView = (function ui$core$RemainingRangeView(){
var this__14365__auto__ = this;
React.Component.apply(this__14365__auto__,arguments);

if(!((this__14365__auto__.getInitialState == null))){
this__14365__auto__.state = this__14365__auto__.getInitialState();
} else {
this__14365__auto__.state = {};
}

return this__14365__auto__;
});

ui.core.RemainingRangeView.prototype = goog.object.clone(React.Component.prototype);

var x24395_24405 = ui.core.RemainingRangeView.prototype;
x24395_24405.componentWillUpdate = ((function (x24395_24405){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14305__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14305__auto__);
});})(x24395_24405))
;

x24395_24405.shouldComponentUpdate = ((function (x24395_24405){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
var or__5160__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14305__auto__),goog.object.get(next_props__14306__auto__,"omcljs$value"));
if(or__5160__auto__){
return or__5160__auto__;
} else {
var and__5148__auto__ = this__14305__auto__.state;
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14305__auto__.state,"omcljs$state"),goog.object.get(next_state__14307__auto__,"omcljs$state"));
} else {
return and__5148__auto__;
}
}
});})(x24395_24405))
;

x24395_24405.componentWillUnmount = ((function (x24395_24405){
return (function (){
var this__14305__auto__ = this;
var r__14311__auto__ = om.next.get_reconciler.call(null,this__14305__auto__);
var cfg__14312__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14311__auto__);
var st__14313__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
var indexer__14310__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
if((st__14313__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14313__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14305__auto__);
}

if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24395_24405))
;

x24395_24405.componentDidUpdate = ((function (x24395_24405){
return (function (prev_props__14308__auto__,prev_state__14309__auto__){
var this__14305__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14305__auto__);
});})(x24395_24405))
;

x24395_24405.isMounted = ((function (x24395_24405){
return (function (){
var this__14305__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14305__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24395_24405))
;

x24395_24405.componentWillMount = ((function (x24395_24405){
return (function (){
var this__14305__auto__ = this;
var indexer__14310__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14305__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24395_24405))
;

x24395_24405.render = ((function (x24395_24405){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24396 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24397 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24398 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24399 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24400 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__24401 = om.next.props.call(null,this$);
var map__24401__$1 = ((((!((map__24401 == null)))?((((map__24401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24401):map__24401);
var remaining_range = cljs.core.get.call(null,map__24401__$1,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566));
return React.DOM.div({"className": "remaining-range"},React.DOM.span({"className": "range"},[cljs.core.str(remaining_range),cljs.core.str("KM")].join('')));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24400;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24399;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24398;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24397;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24396;
}});})(x24395_24405))
;


ui.core.RemainingRangeView.prototype.constructor = ui.core.RemainingRangeView;

ui.core.RemainingRangeView.prototype.om$isComponent = true;

var x24403_24406 = ui.core.RemainingRangeView;
x24403_24406.om$next$IQuery$ = true;

x24403_24406.om$next$IQuery$query$arity$1 = ((function (x24403_24406){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566)], null);
});})(x24403_24406))
;


var x24404_24407 = ui.core.RemainingRangeView.prototype;
x24404_24407.om$next$IQuery$ = true;

x24404_24407.om$next$IQuery$query$arity$1 = ((function (x24404_24407){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566)], null);
});})(x24404_24407))
;


ui.core.RemainingRangeView.cljs$lang$type = true;

ui.core.RemainingRangeView.cljs$lang$ctorStr = "ui.core/RemainingRangeView";

ui.core.RemainingRangeView.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){
return cljs.core._write.call(null,writer__14368__auto__,"ui.core/RemainingRangeView");
});
ui.core.remaining_range_view = om.next.factory.call(null,ui.core.RemainingRangeView);
/**
 * @constructor
 */
ui.core.RouteView = (function ui$core$RouteView(){
var this__14365__auto__ = this;
React.Component.apply(this__14365__auto__,arguments);

if(!((this__14365__auto__.getInitialState == null))){
this__14365__auto__.state = this__14365__auto__.getInitialState();
} else {
this__14365__auto__.state = {};
}

return this__14365__auto__;
});

ui.core.RouteView.prototype = goog.object.clone(React.Component.prototype);

var x24413_24437 = ui.core.RouteView.prototype;
x24413_24437.componentWillUpdate = ((function (x24413_24437){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14305__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14305__auto__);
});})(x24413_24437))
;

x24413_24437.shouldComponentUpdate = ((function (x24413_24437){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
var or__5160__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14305__auto__),goog.object.get(next_props__14306__auto__,"omcljs$value"));
if(or__5160__auto__){
return or__5160__auto__;
} else {
var and__5148__auto__ = this__14305__auto__.state;
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14305__auto__.state,"omcljs$state"),goog.object.get(next_state__14307__auto__,"omcljs$state"));
} else {
return and__5148__auto__;
}
}
});})(x24413_24437))
;

x24413_24437.componentWillUnmount = ((function (x24413_24437){
return (function (){
var this__14305__auto__ = this;
var r__14311__auto__ = om.next.get_reconciler.call(null,this__14305__auto__);
var cfg__14312__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14311__auto__);
var st__14313__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
var indexer__14310__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
if((st__14313__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14313__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14305__auto__);
}

if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24413_24437))
;

x24413_24437.componentDidUpdate = ((function (x24413_24437){
return (function (prev_props__14308__auto__,prev_state__14309__auto__){
var this__14305__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14305__auto__);
});})(x24413_24437))
;

x24413_24437.isMounted = ((function (x24413_24437){
return (function (){
var this__14305__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14305__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24413_24437))
;

x24413_24437.componentWillMount = ((function (x24413_24437){
return (function (){
var this$ = this;
var indexer__14300__auto___24438 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14300__auto___24438 == null)){
} else {
om.next.protocols.index_component_BANG_.call(null,indexer__14300__auto___24438,this$);
}

return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destination","destination",-253872483),"Hamburg"], null));
});})(x24413_24437))
;

x24413_24437.render = ((function (x24413_24437){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24414 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24415 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24416 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24417 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24418 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__24419 = om.next.get_state.call(null,this$);
var map__24419__$1 = ((((!((map__24419 == null)))?((((map__24419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24419):map__24419);
var destination = cljs.core.get.call(null,map__24419__$1,new cljs.core.Keyword(null,"destination","destination",-253872483));
var map__24420 = om.next.props.call(null,this$);
var map__24420__$1 = ((((!((map__24420 == null)))?((((map__24420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24420):map__24420);
var routing = cljs.core.get.call(null,map__24420__$1,new cljs.core.Keyword(null,"routing","routing",1440253662));
var remaining_range = cljs.core.get.call(null,map__24420__$1,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566));
return React.DOM.div({"id": "route"},React.DOM.div({"id": "directions"},React.DOM.h2(null,"Route"),React.DOM.form({"id": "route", "className": "routing"},React.DOM.label(null,"To:"),om.dom.input.call(null,{"className": "destination", "type": "text", "value": destination, "onChange": ((function (map__24419,map__24419__$1,destination,map__24420,map__24420__$1,routing,remaining_range,_STAR_reconciler_STAR_24414,_STAR_depth_STAR_24415,_STAR_shared_STAR_24416,_STAR_instrument_STAR_24417,_STAR_parent_STAR_24418,this$,x24413_24437){
return (function (p1__24408_SHARP_){
return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destination","destination",-253872483),p1__24408_SHARP_.target.value], null));
});})(map__24419,map__24419__$1,destination,map__24420,map__24420__$1,routing,remaining_range,_STAR_reconciler_STAR_24414,_STAR_depth_STAR_24415,_STAR_shared_STAR_24416,_STAR_instrument_STAR_24417,_STAR_parent_STAR_24418,this$,x24413_24437))
}),React.DOM.button({"onClick": ((function (map__24419,map__24419__$1,destination,map__24420,map__24420__$1,routing,remaining_range,_STAR_reconciler_STAR_24414,_STAR_depth_STAR_24415,_STAR_shared_STAR_24416,_STAR_instrument_STAR_24417,_STAR_parent_STAR_24418,this$,x24413_24437){
return (function (){
var c__11293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto__,map__24419,map__24419__$1,destination,map__24420,map__24420__$1,routing,remaining_range,_STAR_reconciler_STAR_24414,_STAR_depth_STAR_24415,_STAR_shared_STAR_24416,_STAR_instrument_STAR_24417,_STAR_parent_STAR_24418,this$,x24413_24437){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto__,map__24419,map__24419__$1,destination,map__24420,map__24420__$1,routing,remaining_range,_STAR_reconciler_STAR_24414,_STAR_depth_STAR_24415,_STAR_shared_STAR_24416,_STAR_instrument_STAR_24417,_STAR_parent_STAR_24418,this$,x24413_24437){
return (function (state_24426){
var state_val_24427 = (state_24426[(1)]);
if((state_val_24427 === (1))){
var state_24426__$1 = state_24426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24426__$1,(2),routing,destination);
} else {
if((state_val_24427 === (2))){
var inst_24424 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24426__$1,inst_24424);
} else {
return null;
}
}
});})(c__11293__auto__,map__24419,map__24419__$1,destination,map__24420,map__24420__$1,routing,remaining_range,_STAR_reconciler_STAR_24414,_STAR_depth_STAR_24415,_STAR_shared_STAR_24416,_STAR_instrument_STAR_24417,_STAR_parent_STAR_24418,this$,x24413_24437))
;
return ((function (switch__11181__auto__,c__11293__auto__,map__24419,map__24419__$1,destination,map__24420,map__24420__$1,routing,remaining_range,_STAR_reconciler_STAR_24414,_STAR_depth_STAR_24415,_STAR_shared_STAR_24416,_STAR_instrument_STAR_24417,_STAR_parent_STAR_24418,this$,x24413_24437){
return (function() {
var ui$core$state_machine__11182__auto__ = null;
var ui$core$state_machine__11182__auto____0 = (function (){
var statearr_24431 = [null,null,null,null,null,null,null];
(statearr_24431[(0)] = ui$core$state_machine__11182__auto__);

(statearr_24431[(1)] = (1));

return statearr_24431;
});
var ui$core$state_machine__11182__auto____1 = (function (state_24426){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_24426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e24432){if((e24432 instanceof Object)){
var ex__11185__auto__ = e24432;
var statearr_24433_24439 = state_24426;
(statearr_24433_24439[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24440 = state_24426;
state_24426 = G__24440;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
ui$core$state_machine__11182__auto__ = function(state_24426){
switch(arguments.length){
case 0:
return ui$core$state_machine__11182__auto____0.call(this);
case 1:
return ui$core$state_machine__11182__auto____1.call(this,state_24426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__11182__auto____0;
ui$core$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__11182__auto____1;
return ui$core$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto__,map__24419,map__24419__$1,destination,map__24420,map__24420__$1,routing,remaining_range,_STAR_reconciler_STAR_24414,_STAR_depth_STAR_24415,_STAR_shared_STAR_24416,_STAR_instrument_STAR_24417,_STAR_parent_STAR_24418,this$,x24413_24437))
})();
var state__11295__auto__ = (function (){var statearr_24434 = f__11294__auto__.call(null);
(statearr_24434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto__);

return statearr_24434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto__,map__24419,map__24419__$1,destination,map__24420,map__24420__$1,routing,remaining_range,_STAR_reconciler_STAR_24414,_STAR_depth_STAR_24415,_STAR_shared_STAR_24416,_STAR_instrument_STAR_24417,_STAR_parent_STAR_24418,this$,x24413_24437))
);

return c__11293__auto__;
});})(map__24419,map__24419__$1,destination,map__24420,map__24420__$1,routing,remaining_range,_STAR_reconciler_STAR_24414,_STAR_depth_STAR_24415,_STAR_shared_STAR_24416,_STAR_instrument_STAR_24417,_STAR_parent_STAR_24418,this$,x24413_24437))
},"Directions"))),ui.core.remaining_range_view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566),remaining_range], null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24418;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24417;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24416;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24415;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24414;
}});})(x24413_24437))
;


ui.core.RouteView.prototype.constructor = ui.core.RouteView;

ui.core.RouteView.prototype.om$isComponent = true;

var x24435_24441 = ui.core.RouteView;


var x24436_24442 = ui.core.RouteView.prototype;


ui.core.RouteView.cljs$lang$type = true;

ui.core.RouteView.cljs$lang$ctorStr = "ui.core/RouteView";

ui.core.RouteView.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){
return cljs.core._write.call(null,writer__14368__auto__,"ui.core/RouteView");
});
ui.core.route_view = om.next.factory.call(null,ui.core.RouteView);
/**
 * @constructor
 */
ui.core.FuelStopView = (function ui$core$FuelStopView(){
var this__14365__auto__ = this;
React.Component.apply(this__14365__auto__,arguments);

if(!((this__14365__auto__.getInitialState == null))){
this__14365__auto__.state = this__14365__auto__.getInitialState();
} else {
this__14365__auto__.state = {};
}

return this__14365__auto__;
});

ui.core.FuelStopView.prototype = goog.object.clone(React.Component.prototype);

var x24447_24455 = ui.core.FuelStopView.prototype;
x24447_24455.componentWillUpdate = ((function (x24447_24455){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14305__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14305__auto__);
});})(x24447_24455))
;

x24447_24455.shouldComponentUpdate = ((function (x24447_24455){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
var or__5160__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14305__auto__),goog.object.get(next_props__14306__auto__,"omcljs$value"));
if(or__5160__auto__){
return or__5160__auto__;
} else {
var and__5148__auto__ = this__14305__auto__.state;
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14305__auto__.state,"omcljs$state"),goog.object.get(next_state__14307__auto__,"omcljs$state"));
} else {
return and__5148__auto__;
}
}
});})(x24447_24455))
;

x24447_24455.componentWillUnmount = ((function (x24447_24455){
return (function (){
var this__14305__auto__ = this;
var r__14311__auto__ = om.next.get_reconciler.call(null,this__14305__auto__);
var cfg__14312__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14311__auto__);
var st__14313__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
var indexer__14310__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
if((st__14313__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14313__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14305__auto__);
}

if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24447_24455))
;

x24447_24455.componentDidUpdate = ((function (x24447_24455){
return (function (prev_props__14308__auto__,prev_state__14309__auto__){
var this__14305__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14305__auto__);
});})(x24447_24455))
;

x24447_24455.isMounted = ((function (x24447_24455){
return (function (){
var this__14305__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14305__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24447_24455))
;

x24447_24455.componentWillMount = ((function (x24447_24455){
return (function (){
var this__14305__auto__ = this;
var indexer__14310__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14305__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24447_24455))
;

x24447_24455.render = ((function (x24447_24455){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24448 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24449 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24450 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24451 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24452 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "fuel-stop", "className": "solid"},React.DOM.h2(null,"Fuel Stop"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24452;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24451;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24450;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24449;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24448;
}});})(x24447_24455))
;


ui.core.FuelStopView.prototype.constructor = ui.core.FuelStopView;

ui.core.FuelStopView.prototype.om$isComponent = true;

var x24453_24456 = ui.core.FuelStopView;


var x24454_24457 = ui.core.FuelStopView.prototype;


ui.core.FuelStopView.cljs$lang$type = true;

ui.core.FuelStopView.cljs$lang$ctorStr = "ui.core/FuelStopView";

ui.core.FuelStopView.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){
return cljs.core._write.call(null,writer__14368__auto__,"ui.core/FuelStopView");
});
ui.core.fuel_stop_view = om.next.factory.call(null,ui.core.FuelStopView);
/**
 * @constructor
 */
ui.core.PoiView = (function ui$core$PoiView(){
var this__14365__auto__ = this;
React.Component.apply(this__14365__auto__,arguments);

if(!((this__14365__auto__.getInitialState == null))){
this__14365__auto__.state = this__14365__auto__.getInitialState();
} else {
this__14365__auto__.state = {};
}

return this__14365__auto__;
});

ui.core.PoiView.prototype = goog.object.clone(React.Component.prototype);

var x24462_24470 = ui.core.PoiView.prototype;
x24462_24470.componentWillUpdate = ((function (x24462_24470){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14305__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14305__auto__);
});})(x24462_24470))
;

x24462_24470.shouldComponentUpdate = ((function (x24462_24470){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
var or__5160__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14305__auto__),goog.object.get(next_props__14306__auto__,"omcljs$value"));
if(or__5160__auto__){
return or__5160__auto__;
} else {
var and__5148__auto__ = this__14305__auto__.state;
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14305__auto__.state,"omcljs$state"),goog.object.get(next_state__14307__auto__,"omcljs$state"));
} else {
return and__5148__auto__;
}
}
});})(x24462_24470))
;

x24462_24470.componentWillUnmount = ((function (x24462_24470){
return (function (){
var this__14305__auto__ = this;
var r__14311__auto__ = om.next.get_reconciler.call(null,this__14305__auto__);
var cfg__14312__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14311__auto__);
var st__14313__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
var indexer__14310__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
if((st__14313__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14313__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14305__auto__);
}

if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24462_24470))
;

x24462_24470.componentDidUpdate = ((function (x24462_24470){
return (function (prev_props__14308__auto__,prev_state__14309__auto__){
var this__14305__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14305__auto__);
});})(x24462_24470))
;

x24462_24470.isMounted = ((function (x24462_24470){
return (function (){
var this__14305__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14305__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24462_24470))
;

x24462_24470.componentWillMount = ((function (x24462_24470){
return (function (){
var this__14305__auto__ = this;
var indexer__14310__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14305__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24462_24470))
;

x24462_24470.render = ((function (x24462_24470){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24463 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24464 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24465 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24466 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24467 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "poi", "className": "solid"},React.DOM.h2(null,"POI"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24467;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24466;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24465;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24464;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24463;
}});})(x24462_24470))
;


ui.core.PoiView.prototype.constructor = ui.core.PoiView;

ui.core.PoiView.prototype.om$isComponent = true;

var x24468_24471 = ui.core.PoiView;


var x24469_24472 = ui.core.PoiView.prototype;


ui.core.PoiView.cljs$lang$type = true;

ui.core.PoiView.cljs$lang$ctorStr = "ui.core/PoiView";

ui.core.PoiView.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){
return cljs.core._write.call(null,writer__14368__auto__,"ui.core/PoiView");
});
ui.core.poi_view = om.next.factory.call(null,ui.core.PoiView);
/**
 * @constructor
 */
ui.core.UserProfilesView = (function ui$core$UserProfilesView(){
var this__14365__auto__ = this;
React.Component.apply(this__14365__auto__,arguments);

if(!((this__14365__auto__.getInitialState == null))){
this__14365__auto__.state = this__14365__auto__.getInitialState();
} else {
this__14365__auto__.state = {};
}

return this__14365__auto__;
});

ui.core.UserProfilesView.prototype = goog.object.clone(React.Component.prototype);

var x24477_24485 = ui.core.UserProfilesView.prototype;
x24477_24485.componentWillUpdate = ((function (x24477_24485){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14305__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14305__auto__);
});})(x24477_24485))
;

x24477_24485.shouldComponentUpdate = ((function (x24477_24485){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
var or__5160__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14305__auto__),goog.object.get(next_props__14306__auto__,"omcljs$value"));
if(or__5160__auto__){
return or__5160__auto__;
} else {
var and__5148__auto__ = this__14305__auto__.state;
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14305__auto__.state,"omcljs$state"),goog.object.get(next_state__14307__auto__,"omcljs$state"));
} else {
return and__5148__auto__;
}
}
});})(x24477_24485))
;

x24477_24485.componentWillUnmount = ((function (x24477_24485){
return (function (){
var this__14305__auto__ = this;
var r__14311__auto__ = om.next.get_reconciler.call(null,this__14305__auto__);
var cfg__14312__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14311__auto__);
var st__14313__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
var indexer__14310__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
if((st__14313__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14313__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14305__auto__);
}

if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24477_24485))
;

x24477_24485.componentDidUpdate = ((function (x24477_24485){
return (function (prev_props__14308__auto__,prev_state__14309__auto__){
var this__14305__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14305__auto__);
});})(x24477_24485))
;

x24477_24485.isMounted = ((function (x24477_24485){
return (function (){
var this__14305__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14305__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24477_24485))
;

x24477_24485.componentWillMount = ((function (x24477_24485){
return (function (){
var this__14305__auto__ = this;
var indexer__14310__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14305__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24477_24485))
;

x24477_24485.render = ((function (x24477_24485){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24478 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24479 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24480 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24481 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24482 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "user-profiles", "className": "solid"},React.DOM.h2(null,"User Profiles"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24482;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24481;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24480;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24479;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24478;
}});})(x24477_24485))
;


ui.core.UserProfilesView.prototype.constructor = ui.core.UserProfilesView;

ui.core.UserProfilesView.prototype.om$isComponent = true;

var x24483_24486 = ui.core.UserProfilesView;


var x24484_24487 = ui.core.UserProfilesView.prototype;


ui.core.UserProfilesView.cljs$lang$type = true;

ui.core.UserProfilesView.cljs$lang$ctorStr = "ui.core/UserProfilesView";

ui.core.UserProfilesView.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){
return cljs.core._write.call(null,writer__14368__auto__,"ui.core/UserProfilesView");
});
ui.core.user_profiles_view = om.next.factory.call(null,ui.core.UserProfilesView);
/**
 * @constructor
 */
ui.core.SettingsView = (function ui$core$SettingsView(){
var this__14365__auto__ = this;
React.Component.apply(this__14365__auto__,arguments);

if(!((this__14365__auto__.getInitialState == null))){
this__14365__auto__.state = this__14365__auto__.getInitialState();
} else {
this__14365__auto__.state = {};
}

return this__14365__auto__;
});

ui.core.SettingsView.prototype = goog.object.clone(React.Component.prototype);

var x24492_24500 = ui.core.SettingsView.prototype;
x24492_24500.componentWillUpdate = ((function (x24492_24500){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14305__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14305__auto__);
});})(x24492_24500))
;

x24492_24500.shouldComponentUpdate = ((function (x24492_24500){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
var or__5160__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14305__auto__),goog.object.get(next_props__14306__auto__,"omcljs$value"));
if(or__5160__auto__){
return or__5160__auto__;
} else {
var and__5148__auto__ = this__14305__auto__.state;
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14305__auto__.state,"omcljs$state"),goog.object.get(next_state__14307__auto__,"omcljs$state"));
} else {
return and__5148__auto__;
}
}
});})(x24492_24500))
;

x24492_24500.componentWillUnmount = ((function (x24492_24500){
return (function (){
var this__14305__auto__ = this;
var r__14311__auto__ = om.next.get_reconciler.call(null,this__14305__auto__);
var cfg__14312__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14311__auto__);
var st__14313__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
var indexer__14310__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
if((st__14313__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14313__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14305__auto__);
}

if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24492_24500))
;

x24492_24500.componentDidUpdate = ((function (x24492_24500){
return (function (prev_props__14308__auto__,prev_state__14309__auto__){
var this__14305__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14305__auto__);
});})(x24492_24500))
;

x24492_24500.isMounted = ((function (x24492_24500){
return (function (){
var this__14305__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14305__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24492_24500))
;

x24492_24500.componentWillMount = ((function (x24492_24500){
return (function (){
var this__14305__auto__ = this;
var indexer__14310__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14305__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24492_24500))
;

x24492_24500.render = ((function (x24492_24500){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24493 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24494 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24495 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24496 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24497 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "settings", "class": "solid"},React.DOM.h2(null,"Settings"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24497;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24496;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24495;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24494;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24493;
}});})(x24492_24500))
;


ui.core.SettingsView.prototype.constructor = ui.core.SettingsView;

ui.core.SettingsView.prototype.om$isComponent = true;

var x24498_24501 = ui.core.SettingsView;


var x24499_24502 = ui.core.SettingsView.prototype;


ui.core.SettingsView.cljs$lang$type = true;

ui.core.SettingsView.cljs$lang$ctorStr = "ui.core/SettingsView";

ui.core.SettingsView.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){
return cljs.core._write.call(null,writer__14368__auto__,"ui.core/SettingsView");
});
ui.core.settings_view = om.next.factory.call(null,ui.core.SettingsView);
/**
 * @constructor
 */
ui.core.RootView = (function ui$core$RootView(){
var this__14365__auto__ = this;
React.Component.apply(this__14365__auto__,arguments);

if(!((this__14365__auto__.getInitialState == null))){
this__14365__auto__.state = this__14365__auto__.getInitialState();
} else {
this__14365__auto__.state = {};
}

return this__14365__auto__;
});

ui.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x24510_24548 = ui.core.RootView.prototype;
x24510_24548.componentWillUpdate = ((function (x24510_24548){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14305__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14305__auto__);
});})(x24510_24548))
;

x24510_24548.shouldComponentUpdate = ((function (x24510_24548){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
var or__5160__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14305__auto__),goog.object.get(next_props__14306__auto__,"omcljs$value"));
if(or__5160__auto__){
return or__5160__auto__;
} else {
var and__5148__auto__ = this__14305__auto__.state;
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14305__auto__.state,"omcljs$state"),goog.object.get(next_state__14307__auto__,"omcljs$state"));
} else {
return and__5148__auto__;
}
}
});})(x24510_24548))
;

x24510_24548.componentWillUnmount = ((function (x24510_24548){
return (function (){
var this__14305__auto__ = this;
var r__14311__auto__ = om.next.get_reconciler.call(null,this__14305__auto__);
var cfg__14312__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14311__auto__);
var st__14313__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
var indexer__14310__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
if((st__14313__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14313__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14305__auto__);
}

if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24510_24548))
;

x24510_24548.componentDidUpdate = ((function (x24510_24548){
return (function (prev_props__14308__auto__,prev_state__14309__auto__){
var this__14305__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14305__auto__);
});})(x24510_24548))
;

x24510_24548.isMounted = ((function (x24510_24548){
return (function (){
var this__14305__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14305__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24510_24548))
;

x24510_24548.componentWillMount = ((function (x24510_24548){
return (function (){
var this$ = this;
var indexer__14300__auto___24549 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14300__auto___24549 == null)){
} else {
om.next.protocols.index_component_BANG_.call(null,indexer__14300__auto___24549,this$);
}

var gps_positions = cljs.core.async.chan.call(null);
var routing = cljs.core.async.chan.call(null);
ui.gps.location.call(null,((function (gps_positions,routing,this$,x24510_24548){
return (function (p1__24504_SHARP_){
var c__11293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto__,gps_positions,routing,this$,x24510_24548){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto__,gps_positions,routing,this$,x24510_24548){
return (function (state_24514){
var state_val_24515 = (state_24514[(1)]);
if((state_val_24515 === (1))){
var state_24514__$1 = state_24514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24514__$1,(2),gps_positions,p1__24504_SHARP_);
} else {
if((state_val_24515 === (2))){
var inst_24512 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24514__$1,inst_24512);
} else {
return null;
}
}
});})(c__11293__auto__,gps_positions,routing,this$,x24510_24548))
;
return ((function (switch__11181__auto__,c__11293__auto__,gps_positions,routing,this$,x24510_24548){
return (function() {
var ui$core$state_machine__11182__auto__ = null;
var ui$core$state_machine__11182__auto____0 = (function (){
var statearr_24519 = [null,null,null,null,null,null,null];
(statearr_24519[(0)] = ui$core$state_machine__11182__auto__);

(statearr_24519[(1)] = (1));

return statearr_24519;
});
var ui$core$state_machine__11182__auto____1 = (function (state_24514){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_24514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e24520){if((e24520 instanceof Object)){
var ex__11185__auto__ = e24520;
var statearr_24521_24550 = state_24514;
(statearr_24521_24550[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24551 = state_24514;
state_24514 = G__24551;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
ui$core$state_machine__11182__auto__ = function(state_24514){
switch(arguments.length){
case 0:
return ui$core$state_machine__11182__auto____0.call(this);
case 1:
return ui$core$state_machine__11182__auto____1.call(this,state_24514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__11182__auto____0;
ui$core$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__11182__auto____1;
return ui$core$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto__,gps_positions,routing,this$,x24510_24548))
})();
var state__11295__auto__ = (function (){var statearr_24522 = f__11294__auto__.call(null);
(statearr_24522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto__);

return statearr_24522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto__,gps_positions,routing,this$,x24510_24548))
);

return c__11293__auto__;
});})(gps_positions,routing,this$,x24510_24548))
);

ui.software_updates.watch.call(null,((function (gps_positions,routing,this$,x24510_24548){
return (function (p__24523){
var map__24524 = p__24523;
var map__24524__$1 = ((((!((map__24524 == null)))?((((map__24524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24524):map__24524);
var name = cljs.core.get.call(null,map__24524__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var version = cljs.core.get.call(null,map__24524__$1,new cljs.core.Keyword(null,"version","version",425292698));
var size = cljs.core.get.call(null,map__24524__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var status = cljs.core.get.call(null,map__24524__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("software-updates","new-update","software-updates/new-update",1876226561,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","name","software-update/name",827209690)),cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","version","software-update/version",1052892105)),cljs.core._conj.call(null,cljs.core.List.EMPTY,version),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","size","software-update/size",188162400)),cljs.core._conj.call(null,cljs.core.List.EMPTY,size),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","status","software-update/status",1331026980)),cljs.core._conj.call(null,cljs.core.List.EMPTY,status)))))))))))))));
});})(gps_positions,routing,this$,x24510_24548))
);

om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gps-positions","gps-positions",-1184039063),gps_positions,new cljs.core.Keyword(null,"routing","routing",1440253662),routing], null));

var seq__24526 = cljs.core.seq.call(null,ui.software_updates.get_all.call(null));
var chunk__24527 = null;
var count__24528 = (0);
var i__24529 = (0);
while(true){
if((i__24529 < count__24528)){
var map__24530 = cljs.core._nth.call(null,chunk__24527,i__24529);
var map__24530__$1 = ((((!((map__24530 == null)))?((((map__24530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24530):map__24530);
var name = cljs.core.get.call(null,map__24530__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var version = cljs.core.get.call(null,map__24530__$1,new cljs.core.Keyword(null,"version","version",425292698));
var size = cljs.core.get.call(null,map__24530__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var status = cljs.core.get.call(null,map__24530__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("software-updates","new-update","software-updates/new-update",1876226561,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","name","software-update/name",827209690)),cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","version","software-update/version",1052892105)),cljs.core._conj.call(null,cljs.core.List.EMPTY,version),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","size","software-update/size",188162400)),cljs.core._conj.call(null,cljs.core.List.EMPTY,size),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","status","software-update/status",1331026980)),cljs.core._conj.call(null,cljs.core.List.EMPTY,status)))))))))))))));

var G__24552 = seq__24526;
var G__24553 = chunk__24527;
var G__24554 = count__24528;
var G__24555 = (i__24529 + (1));
seq__24526 = G__24552;
chunk__24527 = G__24553;
count__24528 = G__24554;
i__24529 = G__24555;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24526);
if(temp__4425__auto__){
var seq__24526__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24526__$1)){
var c__5963__auto__ = cljs.core.chunk_first.call(null,seq__24526__$1);
var G__24556 = cljs.core.chunk_rest.call(null,seq__24526__$1);
var G__24557 = c__5963__auto__;
var G__24558 = cljs.core.count.call(null,c__5963__auto__);
var G__24559 = (0);
seq__24526 = G__24556;
chunk__24527 = G__24557;
count__24528 = G__24558;
i__24529 = G__24559;
continue;
} else {
var map__24532 = cljs.core.first.call(null,seq__24526__$1);
var map__24532__$1 = ((((!((map__24532 == null)))?((((map__24532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24532):map__24532);
var name = cljs.core.get.call(null,map__24532__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var version = cljs.core.get.call(null,map__24532__$1,new cljs.core.Keyword(null,"version","version",425292698));
var size = cljs.core.get.call(null,map__24532__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var status = cljs.core.get.call(null,map__24532__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("software-updates","new-update","software-updates/new-update",1876226561,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","name","software-update/name",827209690)),cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","version","software-update/version",1052892105)),cljs.core._conj.call(null,cljs.core.List.EMPTY,version),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","size","software-update/size",188162400)),cljs.core._conj.call(null,cljs.core.List.EMPTY,size),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","status","software-update/status",1331026980)),cljs.core._conj.call(null,cljs.core.List.EMPTY,status)))))))))))))));

var G__24560 = cljs.core.next.call(null,seq__24526__$1);
var G__24561 = null;
var G__24562 = (0);
var G__24563 = (0);
seq__24526 = G__24560;
chunk__24527 = G__24561;
count__24528 = G__24562;
i__24529 = G__24563;
continue;
}
} else {
return null;
}
}
break;
}
});})(x24510_24548))
;

x24510_24548.render = ((function (x24510_24548){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24534 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24535 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24536 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24537 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24538 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__24539 = om.next.props.call(null,this$);
var map__24539__$1 = ((((!((map__24539 == null)))?((((map__24539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24539):map__24539);
var props = map__24539__$1;
var users = cljs.core.get.call(null,map__24539__$1,new cljs.core.Keyword("app","users","app/users",-713520992));
var sections = cljs.core.get.call(null,map__24539__$1,new cljs.core.Keyword("app","sections","app/sections",-886812091));
var current_user = cljs.core.get.call(null,map__24539__$1,new cljs.core.Keyword("app","current-user","app/current-user",-868957432));
var current_section = cljs.core.get.call(null,map__24539__$1,new cljs.core.Keyword("app","current-section","app/current-section",1521904761));
var software_updates = cljs.core.get.call(null,map__24539__$1,new cljs.core.Keyword(null,"software-updates","software-updates",1873409622));
var remaining_range = cljs.core.get.call(null,map__24539__$1,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566));
var map__24540 = om.next.get_state.call(null,this$);
var map__24540__$1 = ((((!((map__24540 == null)))?((((map__24540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24540):map__24540);
var gps_positions = cljs.core.get.call(null,map__24540__$1,new cljs.core.Keyword(null,"gps-positions","gps-positions",-1184039063));
var routing = cljs.core.get.call(null,map__24540__$1,new cljs.core.Keyword(null,"routing","routing",1440253662));
var sections__$1 = cljs.core.map.call(null,((function (map__24539,map__24539__$1,props,users,sections,current_user,current_section,software_updates,remaining_range,map__24540,map__24540__$1,gps_positions,routing,_STAR_reconciler_STAR_24534,_STAR_depth_STAR_24535,_STAR_shared_STAR_24536,_STAR_instrument_STAR_24537,_STAR_parent_STAR_24538,this$,x24510_24548){
return (function (p1__24505_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("section","id","section/id",1495804783).cljs$core$IFn$_invoke$arity$1(p1__24505_SHARP_),new cljs.core.Keyword(null,"updates","updates",2013983452))){
var pending_count = cljs.core.count.call(null,cljs.core.filter.call(null,ui.software_updates.pending_QMARK_,software_updates));
var processing_count = cljs.core.count.call(null,cljs.core.filter.call(null,ui.software_updates.processing_QMARK_,software_updates));
return cljs.core.assoc.call(null,p1__24505_SHARP_,new cljs.core.Keyword("section","badge","section/badge",1281543678),pending_count,new cljs.core.Keyword("section","visible","section/visible",1231307198),cljs.core.not_EQ_.call(null,processing_count,(0)));
} else {
return p1__24505_SHARP_;
}
});})(map__24539,map__24539__$1,props,users,sections,current_user,current_section,software_updates,remaining_range,map__24540,map__24540__$1,gps_positions,routing,_STAR_reconciler_STAR_24534,_STAR_depth_STAR_24535,_STAR_shared_STAR_24536,_STAR_instrument_STAR_24537,_STAR_parent_STAR_24538,this$,x24510_24548))
,sections);
return React.DOM.div(null,ui.core.header_view.call(null,props),ui.core.navigation_view.call(null,sections__$1),React.DOM.div({"id": "main"},(function (){var pred__24543 = cljs.core._EQ_;
var expr__24544 = new cljs.core.Keyword("section","id","section/id",1495804783).cljs$core$IFn$_invoke$arity$1(current_section);
if(cljs.core.truth_(pred__24543.call(null,new cljs.core.Keyword(null,"route","route",329891309),expr__24544))){
return ui.core.route_view.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routing","routing",1440253662),routing,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566),remaining_range], null));
} else {
if(cljs.core.truth_(pred__24543.call(null,new cljs.core.Keyword(null,"fuel-stop","fuel-stop",-2127913382),expr__24544))){
return ui.core.fuel_stop_view.call(null);
} else {
if(cljs.core.truth_(pred__24543.call(null,new cljs.core.Keyword(null,"poi","poi",923822222),expr__24544))){
return ui.core.poi_view.call(null);
} else {
if(cljs.core.truth_(pred__24543.call(null,new cljs.core.Keyword(null,"user-profiles","user-profiles",1911528023),expr__24544))){
return ui.core.user_profiles_view.call(null);
} else {
if(cljs.core.truth_(pred__24543.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),expr__24544))){
return ui.core.settings_view.call(null);
} else {
if(cljs.core.truth_(pred__24543.call(null,new cljs.core.Keyword(null,"updates","updates",2013983452),expr__24544))){
return ui.software_updates.view.call(null,om.next.computed.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept-fn","accept-fn",-863534511),((function (pred__24543,expr__24544,map__24539,map__24539__$1,props,users,sections,current_user,current_section,software_updates,remaining_range,map__24540,map__24540__$1,gps_positions,routing,sections__$1,_STAR_reconciler_STAR_24534,_STAR_depth_STAR_24535,_STAR_shared_STAR_24536,_STAR_instrument_STAR_24537,_STAR_parent_STAR_24538,this$,x24510_24548){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("software-updates","accept!","software-updates/accept!",-554374218,null))], null));
});})(pred__24543,expr__24544,map__24539,map__24539__$1,props,users,sections,current_user,current_section,software_updates,remaining_range,map__24540,map__24540__$1,gps_positions,routing,sections__$1,_STAR_reconciler_STAR_24534,_STAR_depth_STAR_24535,_STAR_shared_STAR_24536,_STAR_instrument_STAR_24537,_STAR_parent_STAR_24538,this$,x24510_24548))
], null)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24544)].join('')));
}
}
}
}
}
}
})(),ui.map.view.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),gps_positions,new cljs.core.Keyword(null,"routing","routing",1440253662),routing], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24538;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24537;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24536;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24535;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24534;
}});})(x24510_24548))
;


ui.core.RootView.prototype.constructor = ui.core.RootView;

ui.core.RootView.prototype.om$isComponent = true;

var x24546_24564 = ui.core.RootView;
x24546_24564.om$next$IQuery$ = true;

x24546_24564.om$next$IQuery$query$arity$1 = ((function (x24546_24564){
return (function (this$){
var this$__$1 = this;
var sections = om.next.get_query.call(null,ui.core.SectionIconView);
var users = om.next.get_query.call(null,ui.core.UserView);
var software_updates = om.next.get_query.call(null,ui.software_updates.SoftwareUpdatesView);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","sections","app/sections",-886812091)),cljs.core._conj.call(null,cljs.core.List.EMPTY,sections)))))),software_updates,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","current-section","app/current-section",1521904761)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","users","app/users",-713520992)),cljs.core._conj.call(null,cljs.core.List.EMPTY,users)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","current-user","app/current-user",-868957432))))));
});})(x24546_24564))
;


var x24547_24565 = ui.core.RootView.prototype;
x24547_24565.om$next$IQuery$ = true;

x24547_24565.om$next$IQuery$query$arity$1 = ((function (x24547_24565){
return (function (this$){
var this$__$1 = this;
var sections = om.next.get_query.call(null,ui.core.SectionIconView);
var users = om.next.get_query.call(null,ui.core.UserView);
var software_updates = om.next.get_query.call(null,ui.software_updates.SoftwareUpdatesView);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","sections","app/sections",-886812091)),cljs.core._conj.call(null,cljs.core.List.EMPTY,sections)))))),software_updates,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","current-section","app/current-section",1521904761)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","users","app/users",-713520992)),cljs.core._conj.call(null,cljs.core.List.EMPTY,users)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","current-user","app/current-user",-868957432))))));
});})(x24547_24565))
;


ui.core.RootView.cljs$lang$type = true;

ui.core.RootView.cljs$lang$ctorStr = "ui.core/RootView";

ui.core.RootView.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){
return cljs.core._write.call(null,writer__14368__auto__,"ui.core/RootView");
});
ui.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),ui.core.init_data,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ui.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),ui.core.mutate], null))], null));
var seq__24566_24582 = cljs.core.seq.call(null,new cljs.core.Keyword("app","sections","app/sections",-886812091).cljs$core$IFn$_invoke$arity$1(ui.core.init_data));
var chunk__24567_24583 = null;
var count__24568_24584 = (0);
var i__24569_24585 = (0);
while(true){
if((i__24569_24585 < count__24568_24584)){
var map__24570_24586 = cljs.core._nth.call(null,chunk__24567_24583,i__24569_24585);
var map__24570_24587__$1 = ((((!((map__24570_24586 == null)))?((((map__24570_24586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24570_24586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24570_24586):map__24570_24586);
var id_24588 = cljs.core.get.call(null,map__24570_24587__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var action__15373__auto___24589 = ((function (seq__24566_24582,chunk__24567_24583,count__24568_24584,i__24569_24585,map__24570_24586,map__24570_24587__$1,id_24588){
return (function (params__15374__auto__){
if(cljs.core.map_QMARK_.call(null,params__15374__auto__)){
var map__24572 = params__15374__auto__;
var map__24572__$1 = ((((!((map__24572 == null)))?((((map__24572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24572):map__24572);
var params = map__24572__$1;
return om.next.transact_BANG_.call(null,ui.core.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("section","goto","section/goto",-201392033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"section","section",-300141526)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id_24588)))))))))))))));
} else {
if(cljs.core.vector_QMARK_.call(null,params__15374__auto__)){
var map__24574 = params__15374__auto__;
var map__24574__$1 = ((((!((map__24574 == null)))?((((map__24574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24574):map__24574);
var params = map__24574__$1;
return om.next.transact_BANG_.call(null,ui.core.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("section","goto","section/goto",-201392033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"section","section",-300141526)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id_24588)))))))))))))));
} else {
return null;
}
}
});})(seq__24566_24582,chunk__24567_24583,count__24568_24584,i__24569_24585,map__24570_24586,map__24570_24587__$1,id_24588))
;
secretary.core.add_route_BANG_.call(null,[cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,id_24588))].join(''),action__15373__auto___24589);


var G__24590 = seq__24566_24582;
var G__24591 = chunk__24567_24583;
var G__24592 = count__24568_24584;
var G__24593 = (i__24569_24585 + (1));
seq__24566_24582 = G__24590;
chunk__24567_24583 = G__24591;
count__24568_24584 = G__24592;
i__24569_24585 = G__24593;
continue;
} else {
var temp__4425__auto___24594 = cljs.core.seq.call(null,seq__24566_24582);
if(temp__4425__auto___24594){
var seq__24566_24595__$1 = temp__4425__auto___24594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24566_24595__$1)){
var c__5963__auto___24596 = cljs.core.chunk_first.call(null,seq__24566_24595__$1);
var G__24597 = cljs.core.chunk_rest.call(null,seq__24566_24595__$1);
var G__24598 = c__5963__auto___24596;
var G__24599 = cljs.core.count.call(null,c__5963__auto___24596);
var G__24600 = (0);
seq__24566_24582 = G__24597;
chunk__24567_24583 = G__24598;
count__24568_24584 = G__24599;
i__24569_24585 = G__24600;
continue;
} else {
var map__24576_24601 = cljs.core.first.call(null,seq__24566_24595__$1);
var map__24576_24602__$1 = ((((!((map__24576_24601 == null)))?((((map__24576_24601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24576_24601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24576_24601):map__24576_24601);
var id_24603 = cljs.core.get.call(null,map__24576_24602__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var action__15373__auto___24604 = ((function (seq__24566_24582,chunk__24567_24583,count__24568_24584,i__24569_24585,map__24576_24601,map__24576_24602__$1,id_24603,seq__24566_24595__$1,temp__4425__auto___24594){
return (function (params__15374__auto__){
if(cljs.core.map_QMARK_.call(null,params__15374__auto__)){
var map__24578 = params__15374__auto__;
var map__24578__$1 = ((((!((map__24578 == null)))?((((map__24578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24578):map__24578);
var params = map__24578__$1;
return om.next.transact_BANG_.call(null,ui.core.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("section","goto","section/goto",-201392033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"section","section",-300141526)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id_24603)))))))))))))));
} else {
if(cljs.core.vector_QMARK_.call(null,params__15374__auto__)){
var map__24580 = params__15374__auto__;
var map__24580__$1 = ((((!((map__24580 == null)))?((((map__24580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24580):map__24580);
var params = map__24580__$1;
return om.next.transact_BANG_.call(null,ui.core.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("section","goto","section/goto",-201392033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"section","section",-300141526)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id_24603)))))))))))))));
} else {
return null;
}
}
});})(seq__24566_24582,chunk__24567_24583,count__24568_24584,i__24569_24585,map__24576_24601,map__24576_24602__$1,id_24603,seq__24566_24595__$1,temp__4425__auto___24594))
;
secretary.core.add_route_BANG_.call(null,[cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,id_24603))].join(''),action__15373__auto___24604);


var G__24605 = cljs.core.next.call(null,seq__24566_24595__$1);
var G__24606 = null;
var G__24607 = (0);
var G__24608 = (0);
seq__24566_24582 = G__24605;
chunk__24567_24583 = G__24606;
count__24568_24584 = G__24607;
i__24569_24585 = G__24608;
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