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
var h_21105 = (new goog.History());
goog.events.listen(h_21105,goog.history.EventType.NAVIGATE,((function (h_21105){
return (function (e){
return secretary.core.dispatch_BANG_.call(null,e.token);
});})(h_21105))
);

var G__21104_21106 = h_21105;
G__21104_21106.setEnabled(true);

cljs.core.enable_console_print_BANG_.call(null);
ui.core.init_data = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("app","sections","app/sections",-886812091),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"Route",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword("section","visible","section/visible",1231307198),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"Fuel stop",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"fuel-stop","fuel-stop",-2127913382),new cljs.core.Keyword("section","visible","section/visible",1231307198),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"POI",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"poi","poi",923822222),new cljs.core.Keyword("section","visible","section/visible",1231307198),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"User",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"user-profiles","user-profiles",1911528023),new cljs.core.Keyword("section","visible","section/visible",1231307198),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"Settings",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("section","visible","section/visible",1231307198),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("section","name","section/name",-260849884),"Updates",new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword(null,"updates","updates",2013983452),new cljs.core.Keyword("section","visible","section/visible",1231307198),true], null)], null),new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566),(30),new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("app","users","app/users",-713520992),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","name","user/name",1848814598),"guest",new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword(null,"guest","guest",692663006)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","name","user/name",1848814598),"Ringo",new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword(null,"ringo","ringo",-1968417937)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","name","user/name",1848814598),"John",new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword(null,"john","john",-1116534405)], null)], null),new cljs.core.Keyword("app","current-user","app/current-user",-868957432),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"guest","guest",692663006)], null),new cljs.core.Keyword("app","current-section","app/current-section",1521904761),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","by-id","section/by-id",329469792),new cljs.core.Keyword(null,"route","route",329891309)], null)], null);
ui.core.get_many = (function ui$core$get_many(state,key){
var st = cljs.core.deref.call(null,state);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st){
return (function (p1__21107_SHARP_){
return cljs.core.get_in.call(null,st,p1__21107_SHARP_);
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
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__21108,k,_){
var map__21109 = p__21108;
var map__21109__$1 = ((((!((map__21109 == null)))?((((map__21109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21109):map__21109);
var state = cljs.core.get.call(null,map__21109__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
if(cljs.core.contains_QMARK_.call(null,st,k)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,k)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("app","current-user","app/current-user",-868957432),(function (p__21111,key,_){
var map__21112 = p__21111;
var map__21112__$1 = ((((!((map__21112 == null)))?((((map__21112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21112):map__21112);
var env = map__21112__$1;
var state = cljs.core.get.call(null,map__21112__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,st,cljs.core.get.call(null,st,key))], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("app","current-section","app/current-section",1521904761),(function (p__21114,key,_){
var map__21115 = p__21114;
var map__21115__$1 = ((((!((map__21115 == null)))?((((map__21115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21115):map__21115);
var env = map__21115__$1;
var state = cljs.core.get.call(null,map__21115__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,st,cljs.core.get.call(null,st,key))], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("app","sections","app/sections",-886812091),(function (p__21117,key,_){
var map__21118 = p__21117;
var map__21118__$1 = ((((!((map__21118 == null)))?((((map__21118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21118):map__21118);
var env = map__21118__$1;
var state = cljs.core.get.call(null,map__21118__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
if(cljs.core.contains_QMARK_.call(null,st,key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.map.call(null,((function (st,map__21118,map__21118__$1,env,state){
return (function (section_ref){
var map__21120 = st;
var map__21120__$1 = ((((!((map__21120 == null)))?((((map__21120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21120):map__21120);
var current_section = cljs.core.get.call(null,map__21120__$1,new cljs.core.Keyword("app","current-section","app/current-section",1521904761));
var current = cljs.core.get_in.call(null,st,current_section);
var section = cljs.core.get_in.call(null,st,section_ref);
var section__$1 = cljs.core.assoc.call(null,section,new cljs.core.Keyword("section","active","section/active",93427439),cljs.core._EQ_.call(null,current,section));
return section__$1;
});})(st,map__21118,map__21118__$1,env,state))
,cljs.core.get.call(null,st,key))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),(function (p__21123,key,_){
var map__21124 = p__21123;
var map__21124__$1 = ((((!((map__21124 == null)))?((((map__21124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21124):map__21124);
var env = map__21124__$1;
var state = cljs.core.get.call(null,map__21124__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st,map__21124,map__21124__$1,env,state){
return (function (p1__21122_SHARP_){
return cljs.core.get_in.call(null,st,p1__21122_SHARP_);
});})(st,map__21124,map__21124__$1,env,state))
),cljs.core.get.call(null,st,key))], null);
}));
cljs.core._add_method.call(null,ui.core.read,new cljs.core.Keyword("app","users","app/users",-713520992),(function (p__21126,key,_){
var map__21127 = p__21126;
var map__21127__$1 = ((((!((map__21127 == null)))?((((map__21127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21127):map__21127);
var env = map__21127__$1;
var state = cljs.core.get.call(null,map__21127__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
if(cljs.core.contains_QMARK_.call(null,st,key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.map.call(null,((function (st,map__21127,map__21127__$1,env,state){
return (function (user_ref){
var map__21129 = st;
var map__21129__$1 = ((((!((map__21129 == null)))?((((map__21129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21129):map__21129);
var current_user = cljs.core.get.call(null,map__21129__$1,new cljs.core.Keyword("app","current-user","app/current-user",-868957432));
var current = cljs.core.get_in.call(null,st,current_user);
var user = cljs.core.get_in.call(null,st,user_ref);
var user__$1 = cljs.core.assoc.call(null,user,new cljs.core.Keyword("user","authenticated","user/authenticated",1279355290),cljs.core._EQ_.call(null,current,user));
return user__$1;
});})(st,map__21127,map__21127__$1,env,state))
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
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("section","goto","section/goto",-201392033,null),(function (p__21131,_,p__21132){
var map__21133 = p__21131;
var map__21133__$1 = ((((!((map__21133 == null)))?((((map__21133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21133):map__21133);
var env = map__21133__$1;
var state = cljs.core.get.call(null,map__21133__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__21134 = p__21132;
var map__21134__$1 = ((((!((map__21134 == null)))?((((map__21134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21134):map__21134);
var section = cljs.core.get.call(null,map__21134__$1,new cljs.core.Keyword(null,"section","section",-300141526));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__21133,map__21133__$1,env,state,map__21134,map__21134__$1,section){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("app","current-section","app/current-section",1521904761),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","by-id","section/by-id",329469792),section], null));
});})(map__21133,map__21133__$1,env,state,map__21134,map__21134__$1,section))
], null);
}));
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("software-updates","accept!","software-updates/accept!",-554374218,null),(function (p__21137,_,___$1){
var map__21138 = p__21137;
var map__21138__$1 = ((((!((map__21138 == null)))?((((map__21138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21138):map__21138);
var env = map__21138__$1;
var state = cljs.core.get.call(null,map__21138__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__21138,map__21138__$1,env,state){
return (function (){
ui.software_updates.accept_BANG_.call(null);

var seq__21140 = cljs.core.seq.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"software-updates","software-updates",1873409622)));
var chunk__21141 = null;
var count__21142 = (0);
var i__21143 = (0);
while(true){
if((i__21143 < count__21142)){
var update_ref = cljs.core._nth.call(null,chunk__21141,i__21143);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,update_ref,((function (seq__21140,chunk__21141,count__21142,i__21143,update_ref,map__21138,map__21138__$1,env,state){
return (function (update){
if(cljs.core.truth_(ui.software_updates.pending_QMARK_.call(null,update))){
return cljs.core.assoc.call(null,update,new cljs.core.Keyword("software-update","status","software-update/status",1331026980),new cljs.core.Keyword(null,"downloading","downloading",-213530737));
} else {
return update;
}
});})(seq__21140,chunk__21141,count__21142,i__21143,update_ref,map__21138,map__21138__$1,env,state))
);

var G__21144 = seq__21140;
var G__21145 = chunk__21141;
var G__21146 = count__21142;
var G__21147 = (i__21143 + (1));
seq__21140 = G__21144;
chunk__21141 = G__21145;
count__21142 = G__21146;
i__21143 = G__21147;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21140);
if(temp__4425__auto__){
var seq__21140__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21140__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__21140__$1);
var G__21148 = cljs.core.chunk_rest.call(null,seq__21140__$1);
var G__21149 = c__5971__auto__;
var G__21150 = cljs.core.count.call(null,c__5971__auto__);
var G__21151 = (0);
seq__21140 = G__21148;
chunk__21141 = G__21149;
count__21142 = G__21150;
i__21143 = G__21151;
continue;
} else {
var update_ref = cljs.core.first.call(null,seq__21140__$1);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,update_ref,((function (seq__21140,chunk__21141,count__21142,i__21143,update_ref,seq__21140__$1,temp__4425__auto__,map__21138,map__21138__$1,env,state){
return (function (update){
if(cljs.core.truth_(ui.software_updates.pending_QMARK_.call(null,update))){
return cljs.core.assoc.call(null,update,new cljs.core.Keyword("software-update","status","software-update/status",1331026980),new cljs.core.Keyword(null,"downloading","downloading",-213530737));
} else {
return update;
}
});})(seq__21140,chunk__21141,count__21142,i__21143,update_ref,seq__21140__$1,temp__4425__auto__,map__21138,map__21138__$1,env,state))
);

var G__21152 = cljs.core.next.call(null,seq__21140__$1);
var G__21153 = null;
var G__21154 = (0);
var G__21155 = (0);
seq__21140 = G__21152;
chunk__21141 = G__21153;
count__21142 = G__21154;
i__21143 = G__21155;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__21138,map__21138__$1,env,state))
], null);
}));
ui.core.create_update = (function ui$core$create_update(st,p__21156){
var map__21159 = p__21156;
var map__21159__$1 = ((((!((map__21159 == null)))?((((map__21159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21159):map__21159);
var software_update = map__21159__$1;
var name = cljs.core.get.call(null,map__21159__$1,new cljs.core.Keyword("software-update","name","software-update/name",827209690));
var version = cljs.core.get.call(null,map__21159__$1,new cljs.core.Keyword("software-update","version","software-update/version",1052892105));
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","by-id","software-update/by-id",1413379894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,version], null)], null);
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,software_update),new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),cljs.core.conj,ref);
});
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Symbol("software-updates","new-update","software-updates/new-update",1876226561,null),(function (p__21161,_,update){
var map__21162 = p__21161;
var map__21162__$1 = ((((!((map__21162 == null)))?((((map__21162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21162):map__21162);
var env = map__21162__$1;
var state = cljs.core.get.call(null,map__21162__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__21162,map__21162__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,((function (map__21162,map__21162__$1,env,state){
return (function (st){
return ui.core.create_update.call(null,st,update);
});})(map__21162,map__21162__$1,env,state))
);
});})(map__21162,map__21162__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,ui.core.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__21164,key,params){
var map__21165 = p__21164;
var map__21165__$1 = ((((!((map__21165 == null)))?((((map__21165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21165):map__21165);
var env = map__21165__$1;
var state = cljs.core.get.call(null,map__21165__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
console.error("unknown mutate: ",key,params);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}));
/**
 * @constructor
 */
ui.core.SectionIconView = (function ui$core$SectionIconView(){
var this__12945__auto__ = this;
React.Component.apply(this__12945__auto__,arguments);

if(!((this__12945__auto__.initLocalState == null))){
this__12945__auto__.state = this__12945__auto__.initLocalState();
} else {
this__12945__auto__.state = {};
}

return this__12945__auto__;
});

ui.core.SectionIconView.prototype = goog.object.clone(React.Component.prototype);

var x21171_21187 = ui.core.SectionIconView.prototype;
x21171_21187.componentWillUpdate = ((function (x21171_21187){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__12885__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12885__auto__);
});})(x21171_21187))
;

x21171_21187.shouldComponentUpdate = ((function (x21171_21187){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12885__auto__),goog.object.get(next_props__12886__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12885__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12885__auto__.state,"omcljs$state"),goog.object.get(next_state__12887__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x21171_21187))
;

x21171_21187.componentWillUnmount = ((function (x21171_21187){
return (function (){
var this__12885__auto__ = this;
var r__12891__auto__ = om.next.get_reconciler.call(null,this__12885__auto__);
var cfg__12892__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12891__auto__);
var st__12893__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
var indexer__12890__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
if((st__12893__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__12893__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12885__auto__);
}

if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21171_21187))
;

x21171_21187.componentDidUpdate = ((function (x21171_21187){
return (function (prev_props__12888__auto__,prev_state__12889__auto__){
var this__12885__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12885__auto__);
});})(x21171_21187))
;

x21171_21187.isMounted = ((function (x21171_21187){
return (function (){
var this__12885__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12885__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21171_21187))
;

x21171_21187.componentWillMount = ((function (x21171_21187){
return (function (){
var this__12885__auto__ = this;
var indexer__12890__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12885__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21171_21187))
;

x21171_21187.render = ((function (x21171_21187){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21172 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21173 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21174 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21175 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21176 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__21177 = om.next.props.call(null,this$);
var map__21177__$1 = ((((!((map__21177 == null)))?((((map__21177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21177):map__21177);
var id = cljs.core.get.call(null,map__21177__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var name = cljs.core.get.call(null,map__21177__$1,new cljs.core.Keyword("section","name","section/name",-260849884));
var active = cljs.core.get.call(null,map__21177__$1,new cljs.core.Keyword("section","active","section/active",93427439));
var badge = cljs.core.get.call(null,map__21177__$1,new cljs.core.Keyword("section","badge","section/badge",1281543678));
var section_id = cljs.core.name.call(null,id);
return React.DOM.li({"className": [cljs.core.str(section_id),cljs.core.str((cljs.core.truth_(active)?" active":""))].join('')},om.util.force_children.call(null,(cljs.core.truth_(badge)?React.DOM.div({"className": "section-badge"},om.util.force_children.call(null,badge)):React.DOM.div(null))),om.util.force_children.call(null,React.DOM.a({"href": [cljs.core.str("#/"),cljs.core.str(section_id)].join('')},om.util.force_children.call(null,name))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21176;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21175;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21174;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21173;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21172;
}});})(x21171_21187))
;


ui.core.SectionIconView.prototype.constructor = ui.core.SectionIconView;

ui.core.SectionIconView.prototype.om$isComponent = true;

var x21179_21188 = ui.core.SectionIconView;
x21179_21188.om$next$Ident$ = true;

x21179_21188.om$next$Ident$ident$arity$2 = ((function (x21179_21188){
return (function (this$,p__21180){
var map__21181 = p__21180;
var map__21181__$1 = ((((!((map__21181 == null)))?((((map__21181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21181):map__21181);
var id = cljs.core.get.call(null,map__21181__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","by-id","section/by-id",329469792),id], null);
});})(x21179_21188))
;

x21179_21188.om$next$IQuery$ = true;

x21179_21188.om$next$IQuery$query$arity$1 = ((function (x21179_21188){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword("section","name","section/name",-260849884),new cljs.core.Keyword("section","visible","section/visible",1231307198),new cljs.core.Keyword("section","active","section/active",93427439)], null);
});})(x21179_21188))
;


var x21183_21189 = ui.core.SectionIconView.prototype;
x21183_21189.om$next$Ident$ = true;

x21183_21189.om$next$Ident$ident$arity$2 = ((function (x21183_21189){
return (function (this$,p__21184){
var map__21185 = p__21184;
var map__21185__$1 = ((((!((map__21185 == null)))?((((map__21185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21185):map__21185);
var id = cljs.core.get.call(null,map__21185__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","by-id","section/by-id",329469792),id], null);
});})(x21183_21189))
;

x21183_21189.om$next$IQuery$ = true;

x21183_21189.om$next$IQuery$query$arity$1 = ((function (x21183_21189){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("section","id","section/id",1495804783),new cljs.core.Keyword("section","name","section/name",-260849884),new cljs.core.Keyword("section","visible","section/visible",1231307198),new cljs.core.Keyword("section","active","section/active",93427439)], null);
});})(x21183_21189))
;


ui.core.SectionIconView.cljs$lang$type = true;

ui.core.SectionIconView.cljs$lang$ctorStr = "ui.core/SectionIconView";

ui.core.SectionIconView.cljs$lang$ctorPrWriter = (function (this__12947__auto__,writer__12948__auto__,opt__12949__auto__){
return cljs.core._write.call(null,writer__12948__auto__,"ui.core/SectionIconView");
});
ui.core.section_icon_view = om.next.factory.call(null,ui.core.SectionIconView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("section","id","section/id",1495804783)], null));
/**
 * @constructor
 */
ui.core.NavigationView = (function ui$core$NavigationView(){
var this__12945__auto__ = this;
React.Component.apply(this__12945__auto__,arguments);

if(!((this__12945__auto__.initLocalState == null))){
this__12945__auto__.state = this__12945__auto__.initLocalState();
} else {
this__12945__auto__.state = {};
}

return this__12945__auto__;
});

ui.core.NavigationView.prototype = goog.object.clone(React.Component.prototype);

var x21194_21202 = ui.core.NavigationView.prototype;
x21194_21202.componentWillUpdate = ((function (x21194_21202){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__12885__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12885__auto__);
});})(x21194_21202))
;

x21194_21202.shouldComponentUpdate = ((function (x21194_21202){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12885__auto__),goog.object.get(next_props__12886__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12885__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12885__auto__.state,"omcljs$state"),goog.object.get(next_state__12887__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x21194_21202))
;

x21194_21202.componentWillUnmount = ((function (x21194_21202){
return (function (){
var this__12885__auto__ = this;
var r__12891__auto__ = om.next.get_reconciler.call(null,this__12885__auto__);
var cfg__12892__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12891__auto__);
var st__12893__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
var indexer__12890__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
if((st__12893__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__12893__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12885__auto__);
}

if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21194_21202))
;

x21194_21202.componentDidUpdate = ((function (x21194_21202){
return (function (prev_props__12888__auto__,prev_state__12889__auto__){
var this__12885__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12885__auto__);
});})(x21194_21202))
;

x21194_21202.isMounted = ((function (x21194_21202){
return (function (){
var this__12885__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12885__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21194_21202))
;

x21194_21202.componentWillMount = ((function (x21194_21202){
return (function (){
var this__12885__auto__ = this;
var indexer__12890__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12885__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21194_21202))
;

x21194_21202.render = ((function (x21194_21202){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21195 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21196 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21197 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21198 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21199 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var sections = om.next.props.call(null,this$);
return cljs.core.apply.call(null,om.dom.ul,{"className": "side-nav"},cljs.core.map.call(null,ui.core.section_icon_view,cljs.core.filter.call(null,new cljs.core.Keyword("section","visible","section/visible",1231307198),sections)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21199;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21198;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21197;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21196;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21195;
}});})(x21194_21202))
;


ui.core.NavigationView.prototype.constructor = ui.core.NavigationView;

ui.core.NavigationView.prototype.om$isComponent = true;

var x21200_21203 = ui.core.NavigationView;


var x21201_21204 = ui.core.NavigationView.prototype;


ui.core.NavigationView.cljs$lang$type = true;

ui.core.NavigationView.cljs$lang$ctorStr = "ui.core/NavigationView";

ui.core.NavigationView.cljs$lang$ctorPrWriter = (function (this__12947__auto__,writer__12948__auto__,opt__12949__auto__){
return cljs.core._write.call(null,writer__12948__auto__,"ui.core/NavigationView");
});
ui.core.navigation_view = om.next.factory.call(null,ui.core.NavigationView);
/**
 * @constructor
 */
ui.core.UserView = (function ui$core$UserView(){
var this__12945__auto__ = this;
React.Component.apply(this__12945__auto__,arguments);

if(!((this__12945__auto__.initLocalState == null))){
this__12945__auto__.state = this__12945__auto__.initLocalState();
} else {
this__12945__auto__.state = {};
}

return this__12945__auto__;
});

ui.core.UserView.prototype = goog.object.clone(React.Component.prototype);

var x21209_21225 = ui.core.UserView.prototype;
x21209_21225.componentWillUpdate = ((function (x21209_21225){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__12885__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12885__auto__);
});})(x21209_21225))
;

x21209_21225.shouldComponentUpdate = ((function (x21209_21225){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12885__auto__),goog.object.get(next_props__12886__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12885__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12885__auto__.state,"omcljs$state"),goog.object.get(next_state__12887__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x21209_21225))
;

x21209_21225.componentWillUnmount = ((function (x21209_21225){
return (function (){
var this__12885__auto__ = this;
var r__12891__auto__ = om.next.get_reconciler.call(null,this__12885__auto__);
var cfg__12892__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12891__auto__);
var st__12893__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
var indexer__12890__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
if((st__12893__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__12893__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12885__auto__);
}

if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21209_21225))
;

x21209_21225.componentDidUpdate = ((function (x21209_21225){
return (function (prev_props__12888__auto__,prev_state__12889__auto__){
var this__12885__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12885__auto__);
});})(x21209_21225))
;

x21209_21225.isMounted = ((function (x21209_21225){
return (function (){
var this__12885__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12885__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21209_21225))
;

x21209_21225.componentWillMount = ((function (x21209_21225){
return (function (){
var this__12885__auto__ = this;
var indexer__12890__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12885__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21209_21225))
;

x21209_21225.render = ((function (x21209_21225){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21210 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21211 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21212 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21213 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21214 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__21215 = om.next.props.call(null,this$);
var map__21215__$1 = ((((!((map__21215 == null)))?((((map__21215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21215):map__21215);
var id = cljs.core.get.call(null,map__21215__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var name = cljs.core.get.call(null,map__21215__$1,new cljs.core.Keyword("user","name","user/name",1848814598));
var authenticated = cljs.core.get.call(null,map__21215__$1,new cljs.core.Keyword("user","authenticated","user/authenticated",1279355290));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,id))),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,name))),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,authenticated))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21214;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21213;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21212;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21211;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21210;
}});})(x21209_21225))
;


ui.core.UserView.prototype.constructor = ui.core.UserView;

ui.core.UserView.prototype.om$isComponent = true;

var x21217_21226 = ui.core.UserView;
x21217_21226.om$next$Ident$ = true;

x21217_21226.om$next$Ident$ident$arity$2 = ((function (x21217_21226){
return (function (this$,p__21218){
var map__21219 = p__21218;
var map__21219__$1 = ((((!((map__21219 == null)))?((((map__21219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21219):map__21219);
var id = cljs.core.get.call(null,map__21219__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),id], null);
});})(x21217_21226))
;

x21217_21226.om$next$IQuery$ = true;

x21217_21226.om$next$IQuery$query$arity$1 = ((function (x21217_21226){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","authenticated","user/authenticated",1279355290)], null);
});})(x21217_21226))
;


var x21221_21227 = ui.core.UserView.prototype;
x21221_21227.om$next$Ident$ = true;

x21221_21227.om$next$Ident$ident$arity$2 = ((function (x21221_21227){
return (function (this$,p__21222){
var map__21223 = p__21222;
var map__21223__$1 = ((((!((map__21223 == null)))?((((map__21223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21223):map__21223);
var id = cljs.core.get.call(null,map__21223__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),id], null);
});})(x21221_21227))
;

x21221_21227.om$next$IQuery$ = true;

x21221_21227.om$next$IQuery$query$arity$1 = ((function (x21221_21227){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","authenticated","user/authenticated",1279355290)], null);
});})(x21221_21227))
;


ui.core.UserView.cljs$lang$type = true;

ui.core.UserView.cljs$lang$ctorStr = "ui.core/UserView";

ui.core.UserView.cljs$lang$ctorPrWriter = (function (this__12947__auto__,writer__12948__auto__,opt__12949__auto__){
return cljs.core._write.call(null,writer__12948__auto__,"ui.core/UserView");
});
ui.core.user_view = om.next.factory.call(null,ui.core.UserView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword("user","id","user/id",-1375756663)], null));
/**
 * @constructor
 */
ui.core.HeaderView = (function ui$core$HeaderView(){
var this__12945__auto__ = this;
React.Component.apply(this__12945__auto__,arguments);

if(!((this__12945__auto__.initLocalState == null))){
this__12945__auto__.state = this__12945__auto__.initLocalState();
} else {
this__12945__auto__.state = {};
}

return this__12945__auto__;
});

ui.core.HeaderView.prototype = goog.object.clone(React.Component.prototype);

var x21232_21244 = ui.core.HeaderView.prototype;
x21232_21244.componentWillUpdate = ((function (x21232_21244){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__12885__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12885__auto__);
});})(x21232_21244))
;

x21232_21244.shouldComponentUpdate = ((function (x21232_21244){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12885__auto__),goog.object.get(next_props__12886__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12885__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12885__auto__.state,"omcljs$state"),goog.object.get(next_state__12887__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x21232_21244))
;

x21232_21244.componentWillUnmount = ((function (x21232_21244){
return (function (){
var this__12885__auto__ = this;
var r__12891__auto__ = om.next.get_reconciler.call(null,this__12885__auto__);
var cfg__12892__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12891__auto__);
var st__12893__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
var indexer__12890__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
if((st__12893__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__12893__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12885__auto__);
}

if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21232_21244))
;

x21232_21244.componentDidUpdate = ((function (x21232_21244){
return (function (prev_props__12888__auto__,prev_state__12889__auto__){
var this__12885__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12885__auto__);
});})(x21232_21244))
;

x21232_21244.isMounted = ((function (x21232_21244){
return (function (){
var this__12885__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12885__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21232_21244))
;

x21232_21244.componentWillMount = ((function (x21232_21244){
return (function (){
var this__12885__auto__ = this;
var indexer__12890__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12885__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21232_21244))
;

x21232_21244.render = ((function (x21232_21244){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21233 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21234 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21235 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21236 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21237 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__21238 = om.next.props.call(null,this$);
var map__21238__$1 = ((((!((map__21238 == null)))?((((map__21238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21238):map__21238);
var current_user = cljs.core.get.call(null,map__21238__$1,new cljs.core.Keyword("app","current-user","app/current-user",-868957432));
var map__21239 = current_user;
var map__21239__$1 = ((((!((map__21239 == null)))?((((map__21239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21239):map__21239);
var name = cljs.core.get.call(null,map__21239__$1,new cljs.core.Keyword("user","name","user/name",1848814598));
return React.DOM.div({"className": "top-nav"},om.util.force_children.call(null,React.DOM.span({"className": "top-logo"},om.util.force_children.call(null,React.DOM.a({"href": [cljs.core.str("#/settings")].join('')})))),om.util.force_children.call(null,React.DOM.span({"className": "top-user-icon"},om.util.force_children.call(null,React.DOM.span({"className": "top-user-greeting"},om.util.force_children.call(null,"Hi, "),om.util.force_children.call(null,React.DOM.span({"className": "top-user-name"},om.util.force_children.call(null,name))))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21237;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21236;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21235;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21234;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21233;
}});})(x21232_21244))
;


ui.core.HeaderView.prototype.constructor = ui.core.HeaderView;

ui.core.HeaderView.prototype.om$isComponent = true;

var x21242_21245 = ui.core.HeaderView;
x21242_21245.om$next$IQuery$ = true;

x21242_21245.om$next$IQuery$query$arity$1 = ((function (x21242_21245){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","current-user","app/current-user",-868957432),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null)], null);
});})(x21242_21245))
;


var x21243_21246 = ui.core.HeaderView.prototype;
x21243_21246.om$next$IQuery$ = true;

x21243_21246.om$next$IQuery$query$arity$1 = ((function (x21243_21246){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","current-user","app/current-user",-868957432),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null)], null);
});})(x21243_21246))
;


ui.core.HeaderView.cljs$lang$type = true;

ui.core.HeaderView.cljs$lang$ctorStr = "ui.core/HeaderView";

ui.core.HeaderView.cljs$lang$ctorPrWriter = (function (this__12947__auto__,writer__12948__auto__,opt__12949__auto__){
return cljs.core._write.call(null,writer__12948__auto__,"ui.core/HeaderView");
});
ui.core.header_view = om.next.factory.call(null,ui.core.HeaderView);
/**
 * @constructor
 */
ui.core.RemainingRangeView = (function ui$core$RemainingRangeView(){
var this__12945__auto__ = this;
React.Component.apply(this__12945__auto__,arguments);

if(!((this__12945__auto__.initLocalState == null))){
this__12945__auto__.state = this__12945__auto__.initLocalState();
} else {
this__12945__auto__.state = {};
}

return this__12945__auto__;
});

ui.core.RemainingRangeView.prototype = goog.object.clone(React.Component.prototype);

var x21251_21261 = ui.core.RemainingRangeView.prototype;
x21251_21261.componentWillUpdate = ((function (x21251_21261){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__12885__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12885__auto__);
});})(x21251_21261))
;

x21251_21261.shouldComponentUpdate = ((function (x21251_21261){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12885__auto__),goog.object.get(next_props__12886__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12885__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12885__auto__.state,"omcljs$state"),goog.object.get(next_state__12887__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x21251_21261))
;

x21251_21261.componentWillUnmount = ((function (x21251_21261){
return (function (){
var this__12885__auto__ = this;
var r__12891__auto__ = om.next.get_reconciler.call(null,this__12885__auto__);
var cfg__12892__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12891__auto__);
var st__12893__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
var indexer__12890__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
if((st__12893__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__12893__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12885__auto__);
}

if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21251_21261))
;

x21251_21261.componentDidUpdate = ((function (x21251_21261){
return (function (prev_props__12888__auto__,prev_state__12889__auto__){
var this__12885__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12885__auto__);
});})(x21251_21261))
;

x21251_21261.isMounted = ((function (x21251_21261){
return (function (){
var this__12885__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12885__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21251_21261))
;

x21251_21261.componentWillMount = ((function (x21251_21261){
return (function (){
var this__12885__auto__ = this;
var indexer__12890__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12885__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21251_21261))
;

x21251_21261.render = ((function (x21251_21261){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21252 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21253 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21254 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21255 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21256 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__21257 = om.next.props.call(null,this$);
var map__21257__$1 = ((((!((map__21257 == null)))?((((map__21257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21257):map__21257);
var remaining_range = cljs.core.get.call(null,map__21257__$1,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566));
return React.DOM.div({"className": "remaining-range"},om.util.force_children.call(null,React.DOM.span({"className": "range"},om.util.force_children.call(null,[cljs.core.str(remaining_range),cljs.core.str("KM")].join('')))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21256;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21255;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21254;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21253;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21252;
}});})(x21251_21261))
;


ui.core.RemainingRangeView.prototype.constructor = ui.core.RemainingRangeView;

ui.core.RemainingRangeView.prototype.om$isComponent = true;

var x21259_21262 = ui.core.RemainingRangeView;
x21259_21262.om$next$IQuery$ = true;

x21259_21262.om$next$IQuery$query$arity$1 = ((function (x21259_21262){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566)], null);
});})(x21259_21262))
;


var x21260_21263 = ui.core.RemainingRangeView.prototype;
x21260_21263.om$next$IQuery$ = true;

x21260_21263.om$next$IQuery$query$arity$1 = ((function (x21260_21263){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566)], null);
});})(x21260_21263))
;


ui.core.RemainingRangeView.cljs$lang$type = true;

ui.core.RemainingRangeView.cljs$lang$ctorStr = "ui.core/RemainingRangeView";

ui.core.RemainingRangeView.cljs$lang$ctorPrWriter = (function (this__12947__auto__,writer__12948__auto__,opt__12949__auto__){
return cljs.core._write.call(null,writer__12948__auto__,"ui.core/RemainingRangeView");
});
ui.core.remaining_range_view = om.next.factory.call(null,ui.core.RemainingRangeView);
/**
 * @constructor
 */
ui.core.RouteView = (function ui$core$RouteView(){
var this__12945__auto__ = this;
React.Component.apply(this__12945__auto__,arguments);

if(!((this__12945__auto__.initLocalState == null))){
this__12945__auto__.state = this__12945__auto__.initLocalState();
} else {
this__12945__auto__.state = {};
}

return this__12945__auto__;
});

ui.core.RouteView.prototype = goog.object.clone(React.Component.prototype);

var x21269_21293 = ui.core.RouteView.prototype;
x21269_21293.componentWillUpdate = ((function (x21269_21293){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__12885__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12885__auto__);
});})(x21269_21293))
;

x21269_21293.shouldComponentUpdate = ((function (x21269_21293){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12885__auto__),goog.object.get(next_props__12886__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12885__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12885__auto__.state,"omcljs$state"),goog.object.get(next_state__12887__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x21269_21293))
;

x21269_21293.componentWillUnmount = ((function (x21269_21293){
return (function (){
var this__12885__auto__ = this;
var r__12891__auto__ = om.next.get_reconciler.call(null,this__12885__auto__);
var cfg__12892__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12891__auto__);
var st__12893__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
var indexer__12890__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
if((st__12893__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__12893__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12885__auto__);
}

if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21269_21293))
;

x21269_21293.componentDidUpdate = ((function (x21269_21293){
return (function (prev_props__12888__auto__,prev_state__12889__auto__){
var this__12885__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12885__auto__);
});})(x21269_21293))
;

x21269_21293.isMounted = ((function (x21269_21293){
return (function (){
var this__12885__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12885__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21269_21293))
;

x21269_21293.componentWillMount = ((function (x21269_21293){
return (function (){
var this$ = this;
var indexer__12880__auto___21294 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12880__auto___21294 == null)){
} else {
om.next.protocols.index_component_BANG_.call(null,indexer__12880__auto___21294,this$);
}

return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destination","destination",-253872483),"Hamburg"], null));
});})(x21269_21293))
;

x21269_21293.render = ((function (x21269_21293){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21270 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21271 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21272 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21273 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21274 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__21275 = om.next.get_state.call(null,this$);
var map__21275__$1 = ((((!((map__21275 == null)))?((((map__21275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21275):map__21275);
var destination = cljs.core.get.call(null,map__21275__$1,new cljs.core.Keyword(null,"destination","destination",-253872483));
var map__21276 = om.next.props.call(null,this$);
var map__21276__$1 = ((((!((map__21276 == null)))?((((map__21276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21276):map__21276);
var routing = cljs.core.get.call(null,map__21276__$1,new cljs.core.Keyword(null,"routing","routing",1440253662));
var remaining_range = cljs.core.get.call(null,map__21276__$1,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566));
return React.DOM.div({"id": "route"},om.util.force_children.call(null,React.DOM.div({"id": "directions"},om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Route"))),om.util.force_children.call(null,React.DOM.form({"id": "route", "className": "routing"},om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"To:"))),om.util.force_children.call(null,om.dom.input.call(null,{"className": "destination", "type": "text", "value": destination, "onChange": ((function (map__21275,map__21275__$1,destination,map__21276,map__21276__$1,routing,remaining_range,_STAR_reconciler_STAR_21270,_STAR_depth_STAR_21271,_STAR_shared_STAR_21272,_STAR_instrument_STAR_21273,_STAR_parent_STAR_21274,this$,x21269_21293){
return (function (p1__21264_SHARP_){
return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destination","destination",-253872483),p1__21264_SHARP_.target.value], null));
});})(map__21275,map__21275__$1,destination,map__21276,map__21276__$1,routing,remaining_range,_STAR_reconciler_STAR_21270,_STAR_depth_STAR_21271,_STAR_shared_STAR_21272,_STAR_instrument_STAR_21273,_STAR_parent_STAR_21274,this$,x21269_21293))
})),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__21275,map__21275__$1,destination,map__21276,map__21276__$1,routing,remaining_range,_STAR_reconciler_STAR_21270,_STAR_depth_STAR_21271,_STAR_shared_STAR_21272,_STAR_instrument_STAR_21273,_STAR_parent_STAR_21274,this$,x21269_21293){
return (function (e){
console.log(e);

var c__9157__auto___21295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___21295,map__21275,map__21275__$1,destination,map__21276,map__21276__$1,routing,remaining_range,_STAR_reconciler_STAR_21270,_STAR_depth_STAR_21271,_STAR_shared_STAR_21272,_STAR_instrument_STAR_21273,_STAR_parent_STAR_21274,this$,x21269_21293){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___21295,map__21275,map__21275__$1,destination,map__21276,map__21276__$1,routing,remaining_range,_STAR_reconciler_STAR_21270,_STAR_depth_STAR_21271,_STAR_shared_STAR_21272,_STAR_instrument_STAR_21273,_STAR_parent_STAR_21274,this$,x21269_21293){
return (function (state_21282){
var state_val_21283 = (state_21282[(1)]);
if((state_val_21283 === (1))){
var state_21282__$1 = state_21282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21282__$1,(2),routing,destination);
} else {
if((state_val_21283 === (2))){
var inst_21280 = (state_21282[(2)]);
var state_21282__$1 = state_21282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21282__$1,inst_21280);
} else {
return null;
}
}
});})(c__9157__auto___21295,map__21275,map__21275__$1,destination,map__21276,map__21276__$1,routing,remaining_range,_STAR_reconciler_STAR_21270,_STAR_depth_STAR_21271,_STAR_shared_STAR_21272,_STAR_instrument_STAR_21273,_STAR_parent_STAR_21274,this$,x21269_21293))
;
return ((function (switch__9045__auto__,c__9157__auto___21295,map__21275,map__21275__$1,destination,map__21276,map__21276__$1,routing,remaining_range,_STAR_reconciler_STAR_21270,_STAR_depth_STAR_21271,_STAR_shared_STAR_21272,_STAR_instrument_STAR_21273,_STAR_parent_STAR_21274,this$,x21269_21293){
return (function() {
var ui$core$state_machine__9046__auto__ = null;
var ui$core$state_machine__9046__auto____0 = (function (){
var statearr_21287 = [null,null,null,null,null,null,null];
(statearr_21287[(0)] = ui$core$state_machine__9046__auto__);

(statearr_21287[(1)] = (1));

return statearr_21287;
});
var ui$core$state_machine__9046__auto____1 = (function (state_21282){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_21282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e21288){if((e21288 instanceof Object)){
var ex__9049__auto__ = e21288;
var statearr_21289_21296 = state_21282;
(statearr_21289_21296[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21297 = state_21282;
state_21282 = G__21297;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
ui$core$state_machine__9046__auto__ = function(state_21282){
switch(arguments.length){
case 0:
return ui$core$state_machine__9046__auto____0.call(this);
case 1:
return ui$core$state_machine__9046__auto____1.call(this,state_21282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__9046__auto____0;
ui$core$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__9046__auto____1;
return ui$core$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___21295,map__21275,map__21275__$1,destination,map__21276,map__21276__$1,routing,remaining_range,_STAR_reconciler_STAR_21270,_STAR_depth_STAR_21271,_STAR_shared_STAR_21272,_STAR_instrument_STAR_21273,_STAR_parent_STAR_21274,this$,x21269_21293))
})();
var state__9159__auto__ = (function (){var statearr_21290 = f__9158__auto__.call(null);
(statearr_21290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___21295);

return statearr_21290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___21295,map__21275,map__21275__$1,destination,map__21276,map__21276__$1,routing,remaining_range,_STAR_reconciler_STAR_21270,_STAR_depth_STAR_21271,_STAR_shared_STAR_21272,_STAR_instrument_STAR_21273,_STAR_parent_STAR_21274,this$,x21269_21293))
);


e.stopPropagation();

e.preventDefault();

return false;
});})(map__21275,map__21275__$1,destination,map__21276,map__21276__$1,routing,remaining_range,_STAR_reconciler_STAR_21270,_STAR_depth_STAR_21271,_STAR_shared_STAR_21272,_STAR_instrument_STAR_21273,_STAR_parent_STAR_21274,this$,x21269_21293))
},om.util.force_children.call(null,"Directions"))))))),om.util.force_children.call(null,ui.core.remaining_range_view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566),remaining_range], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21274;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21273;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21272;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21271;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21270;
}});})(x21269_21293))
;


ui.core.RouteView.prototype.constructor = ui.core.RouteView;

ui.core.RouteView.prototype.om$isComponent = true;

var x21291_21298 = ui.core.RouteView;


var x21292_21299 = ui.core.RouteView.prototype;


ui.core.RouteView.cljs$lang$type = true;

ui.core.RouteView.cljs$lang$ctorStr = "ui.core/RouteView";

ui.core.RouteView.cljs$lang$ctorPrWriter = (function (this__12947__auto__,writer__12948__auto__,opt__12949__auto__){
return cljs.core._write.call(null,writer__12948__auto__,"ui.core/RouteView");
});
ui.core.route_view = om.next.factory.call(null,ui.core.RouteView);
/**
 * @constructor
 */
ui.core.FuelStopView = (function ui$core$FuelStopView(){
var this__12945__auto__ = this;
React.Component.apply(this__12945__auto__,arguments);

if(!((this__12945__auto__.initLocalState == null))){
this__12945__auto__.state = this__12945__auto__.initLocalState();
} else {
this__12945__auto__.state = {};
}

return this__12945__auto__;
});

ui.core.FuelStopView.prototype = goog.object.clone(React.Component.prototype);

var x21304_21312 = ui.core.FuelStopView.prototype;
x21304_21312.componentWillUpdate = ((function (x21304_21312){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__12885__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12885__auto__);
});})(x21304_21312))
;

x21304_21312.shouldComponentUpdate = ((function (x21304_21312){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12885__auto__),goog.object.get(next_props__12886__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12885__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12885__auto__.state,"omcljs$state"),goog.object.get(next_state__12887__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x21304_21312))
;

x21304_21312.componentWillUnmount = ((function (x21304_21312){
return (function (){
var this__12885__auto__ = this;
var r__12891__auto__ = om.next.get_reconciler.call(null,this__12885__auto__);
var cfg__12892__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12891__auto__);
var st__12893__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
var indexer__12890__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
if((st__12893__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__12893__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12885__auto__);
}

if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21304_21312))
;

x21304_21312.componentDidUpdate = ((function (x21304_21312){
return (function (prev_props__12888__auto__,prev_state__12889__auto__){
var this__12885__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12885__auto__);
});})(x21304_21312))
;

x21304_21312.isMounted = ((function (x21304_21312){
return (function (){
var this__12885__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12885__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21304_21312))
;

x21304_21312.componentWillMount = ((function (x21304_21312){
return (function (){
var this__12885__auto__ = this;
var indexer__12890__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12885__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21304_21312))
;

x21304_21312.render = ((function (x21304_21312){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21305 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21306 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21307 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21308 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21309 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "fuel-stop", "className": "solid"},om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Fuel Stop"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21309;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21308;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21307;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21306;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21305;
}});})(x21304_21312))
;


ui.core.FuelStopView.prototype.constructor = ui.core.FuelStopView;

ui.core.FuelStopView.prototype.om$isComponent = true;

var x21310_21313 = ui.core.FuelStopView;


var x21311_21314 = ui.core.FuelStopView.prototype;


ui.core.FuelStopView.cljs$lang$type = true;

ui.core.FuelStopView.cljs$lang$ctorStr = "ui.core/FuelStopView";

ui.core.FuelStopView.cljs$lang$ctorPrWriter = (function (this__12947__auto__,writer__12948__auto__,opt__12949__auto__){
return cljs.core._write.call(null,writer__12948__auto__,"ui.core/FuelStopView");
});
ui.core.fuel_stop_view = om.next.factory.call(null,ui.core.FuelStopView);
/**
 * @constructor
 */
ui.core.PoiView = (function ui$core$PoiView(){
var this__12945__auto__ = this;
React.Component.apply(this__12945__auto__,arguments);

if(!((this__12945__auto__.initLocalState == null))){
this__12945__auto__.state = this__12945__auto__.initLocalState();
} else {
this__12945__auto__.state = {};
}

return this__12945__auto__;
});

ui.core.PoiView.prototype = goog.object.clone(React.Component.prototype);

var x21319_21327 = ui.core.PoiView.prototype;
x21319_21327.componentWillUpdate = ((function (x21319_21327){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__12885__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12885__auto__);
});})(x21319_21327))
;

x21319_21327.shouldComponentUpdate = ((function (x21319_21327){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12885__auto__),goog.object.get(next_props__12886__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12885__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12885__auto__.state,"omcljs$state"),goog.object.get(next_state__12887__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x21319_21327))
;

x21319_21327.componentWillUnmount = ((function (x21319_21327){
return (function (){
var this__12885__auto__ = this;
var r__12891__auto__ = om.next.get_reconciler.call(null,this__12885__auto__);
var cfg__12892__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12891__auto__);
var st__12893__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
var indexer__12890__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
if((st__12893__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__12893__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12885__auto__);
}

if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21319_21327))
;

x21319_21327.componentDidUpdate = ((function (x21319_21327){
return (function (prev_props__12888__auto__,prev_state__12889__auto__){
var this__12885__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12885__auto__);
});})(x21319_21327))
;

x21319_21327.isMounted = ((function (x21319_21327){
return (function (){
var this__12885__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12885__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21319_21327))
;

x21319_21327.componentWillMount = ((function (x21319_21327){
return (function (){
var this__12885__auto__ = this;
var indexer__12890__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12885__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21319_21327))
;

x21319_21327.render = ((function (x21319_21327){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21320 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21321 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21322 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21323 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21324 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "poi", "className": "solid"},om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"POI"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21324;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21323;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21322;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21321;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21320;
}});})(x21319_21327))
;


ui.core.PoiView.prototype.constructor = ui.core.PoiView;

ui.core.PoiView.prototype.om$isComponent = true;

var x21325_21328 = ui.core.PoiView;


var x21326_21329 = ui.core.PoiView.prototype;


ui.core.PoiView.cljs$lang$type = true;

ui.core.PoiView.cljs$lang$ctorStr = "ui.core/PoiView";

ui.core.PoiView.cljs$lang$ctorPrWriter = (function (this__12947__auto__,writer__12948__auto__,opt__12949__auto__){
return cljs.core._write.call(null,writer__12948__auto__,"ui.core/PoiView");
});
ui.core.poi_view = om.next.factory.call(null,ui.core.PoiView);
/**
 * @constructor
 */
ui.core.UserProfilesView = (function ui$core$UserProfilesView(){
var this__12945__auto__ = this;
React.Component.apply(this__12945__auto__,arguments);

if(!((this__12945__auto__.initLocalState == null))){
this__12945__auto__.state = this__12945__auto__.initLocalState();
} else {
this__12945__auto__.state = {};
}

return this__12945__auto__;
});

ui.core.UserProfilesView.prototype = goog.object.clone(React.Component.prototype);

var x21334_21342 = ui.core.UserProfilesView.prototype;
x21334_21342.componentWillUpdate = ((function (x21334_21342){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__12885__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12885__auto__);
});})(x21334_21342))
;

x21334_21342.shouldComponentUpdate = ((function (x21334_21342){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12885__auto__),goog.object.get(next_props__12886__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12885__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12885__auto__.state,"omcljs$state"),goog.object.get(next_state__12887__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x21334_21342))
;

x21334_21342.componentWillUnmount = ((function (x21334_21342){
return (function (){
var this__12885__auto__ = this;
var r__12891__auto__ = om.next.get_reconciler.call(null,this__12885__auto__);
var cfg__12892__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12891__auto__);
var st__12893__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
var indexer__12890__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
if((st__12893__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__12893__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12885__auto__);
}

if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21334_21342))
;

x21334_21342.componentDidUpdate = ((function (x21334_21342){
return (function (prev_props__12888__auto__,prev_state__12889__auto__){
var this__12885__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12885__auto__);
});})(x21334_21342))
;

x21334_21342.isMounted = ((function (x21334_21342){
return (function (){
var this__12885__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12885__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21334_21342))
;

x21334_21342.componentWillMount = ((function (x21334_21342){
return (function (){
var this__12885__auto__ = this;
var indexer__12890__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12885__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21334_21342))
;

x21334_21342.render = ((function (x21334_21342){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21335 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21336 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21337 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21338 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21339 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "user-profiles", "className": "solid"},om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"User Profiles"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21339;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21338;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21337;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21336;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21335;
}});})(x21334_21342))
;


ui.core.UserProfilesView.prototype.constructor = ui.core.UserProfilesView;

ui.core.UserProfilesView.prototype.om$isComponent = true;

var x21340_21343 = ui.core.UserProfilesView;


var x21341_21344 = ui.core.UserProfilesView.prototype;


ui.core.UserProfilesView.cljs$lang$type = true;

ui.core.UserProfilesView.cljs$lang$ctorStr = "ui.core/UserProfilesView";

ui.core.UserProfilesView.cljs$lang$ctorPrWriter = (function (this__12947__auto__,writer__12948__auto__,opt__12949__auto__){
return cljs.core._write.call(null,writer__12948__auto__,"ui.core/UserProfilesView");
});
ui.core.user_profiles_view = om.next.factory.call(null,ui.core.UserProfilesView);
/**
 * @constructor
 */
ui.core.SettingsView = (function ui$core$SettingsView(){
var this__12945__auto__ = this;
React.Component.apply(this__12945__auto__,arguments);

if(!((this__12945__auto__.initLocalState == null))){
this__12945__auto__.state = this__12945__auto__.initLocalState();
} else {
this__12945__auto__.state = {};
}

return this__12945__auto__;
});

ui.core.SettingsView.prototype = goog.object.clone(React.Component.prototype);

var x21349_21357 = ui.core.SettingsView.prototype;
x21349_21357.componentWillUpdate = ((function (x21349_21357){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__12885__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12885__auto__);
});})(x21349_21357))
;

x21349_21357.shouldComponentUpdate = ((function (x21349_21357){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12885__auto__),goog.object.get(next_props__12886__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12885__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12885__auto__.state,"omcljs$state"),goog.object.get(next_state__12887__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x21349_21357))
;

x21349_21357.componentWillUnmount = ((function (x21349_21357){
return (function (){
var this__12885__auto__ = this;
var r__12891__auto__ = om.next.get_reconciler.call(null,this__12885__auto__);
var cfg__12892__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12891__auto__);
var st__12893__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
var indexer__12890__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
if((st__12893__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__12893__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12885__auto__);
}

if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21349_21357))
;

x21349_21357.componentDidUpdate = ((function (x21349_21357){
return (function (prev_props__12888__auto__,prev_state__12889__auto__){
var this__12885__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12885__auto__);
});})(x21349_21357))
;

x21349_21357.isMounted = ((function (x21349_21357){
return (function (){
var this__12885__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12885__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21349_21357))
;

x21349_21357.componentWillMount = ((function (x21349_21357){
return (function (){
var this__12885__auto__ = this;
var indexer__12890__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12885__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21349_21357))
;

x21349_21357.render = ((function (x21349_21357){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21350 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21351 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21352 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21353 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21354 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "settings", "class": "solid"},om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,"Settings"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21354;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21353;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21352;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21351;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21350;
}});})(x21349_21357))
;


ui.core.SettingsView.prototype.constructor = ui.core.SettingsView;

ui.core.SettingsView.prototype.om$isComponent = true;

var x21355_21358 = ui.core.SettingsView;


var x21356_21359 = ui.core.SettingsView.prototype;


ui.core.SettingsView.cljs$lang$type = true;

ui.core.SettingsView.cljs$lang$ctorStr = "ui.core/SettingsView";

ui.core.SettingsView.cljs$lang$ctorPrWriter = (function (this__12947__auto__,writer__12948__auto__,opt__12949__auto__){
return cljs.core._write.call(null,writer__12948__auto__,"ui.core/SettingsView");
});
ui.core.settings_view = om.next.factory.call(null,ui.core.SettingsView);
/**
 * @constructor
 */
ui.core.RootView = (function ui$core$RootView(){
var this__12945__auto__ = this;
React.Component.apply(this__12945__auto__,arguments);

if(!((this__12945__auto__.initLocalState == null))){
this__12945__auto__.state = this__12945__auto__.initLocalState();
} else {
this__12945__auto__.state = {};
}

return this__12945__auto__;
});

ui.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x21367_21420 = ui.core.RootView.prototype;
x21367_21420.componentWillUpdate = ((function (x21367_21420){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__12885__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12885__auto__);
});})(x21367_21420))
;

x21367_21420.shouldComponentUpdate = ((function (x21367_21420){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12885__auto__),goog.object.get(next_props__12886__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12885__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12885__auto__.state,"omcljs$state"),goog.object.get(next_state__12887__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x21367_21420))
;

x21367_21420.componentWillUnmount = ((function (x21367_21420){
return (function (){
var this__12885__auto__ = this;
var r__12891__auto__ = om.next.get_reconciler.call(null,this__12885__auto__);
var cfg__12892__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12891__auto__);
var st__12893__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
var indexer__12890__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
if((st__12893__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__12893__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12885__auto__);
}

if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x21367_21420))
;

x21367_21420.componentDidUpdate = ((function (x21367_21420){
return (function (prev_props__12888__auto__,prev_state__12889__auto__){
var this__12885__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12885__auto__);
});})(x21367_21420))
;

x21367_21420.isMounted = ((function (x21367_21420){
return (function (){
var this__12885__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12885__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21367_21420))
;

x21367_21420.componentWillMount = ((function (x21367_21420){
return (function (){
var this$ = this;
var indexer__12880__auto___21421 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12880__auto___21421 == null)){
} else {
om.next.protocols.index_component_BANG_.call(null,indexer__12880__auto___21421,this$);
}

var gps_positions = cljs.core.async.chan.call(null);
var routing = cljs.core.async.chan.call(null);
ui.gps.location.call(null,((function (gps_positions,routing,this$,x21367_21420){
return (function (p1__21361_SHARP_){
var c__9157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto__,gps_positions,routing,this$,x21367_21420){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto__,gps_positions,routing,this$,x21367_21420){
return (function (state_21371){
var state_val_21372 = (state_21371[(1)]);
if((state_val_21372 === (1))){
var state_21371__$1 = state_21371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21371__$1,(2),gps_positions,p1__21361_SHARP_);
} else {
if((state_val_21372 === (2))){
var inst_21369 = (state_21371[(2)]);
var state_21371__$1 = state_21371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21371__$1,inst_21369);
} else {
return null;
}
}
});})(c__9157__auto__,gps_positions,routing,this$,x21367_21420))
;
return ((function (switch__9045__auto__,c__9157__auto__,gps_positions,routing,this$,x21367_21420){
return (function() {
var ui$core$state_machine__9046__auto__ = null;
var ui$core$state_machine__9046__auto____0 = (function (){
var statearr_21376 = [null,null,null,null,null,null,null];
(statearr_21376[(0)] = ui$core$state_machine__9046__auto__);

(statearr_21376[(1)] = (1));

return statearr_21376;
});
var ui$core$state_machine__9046__auto____1 = (function (state_21371){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_21371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e21377){if((e21377 instanceof Object)){
var ex__9049__auto__ = e21377;
var statearr_21378_21422 = state_21371;
(statearr_21378_21422[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21423 = state_21371;
state_21371 = G__21423;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
ui$core$state_machine__9046__auto__ = function(state_21371){
switch(arguments.length){
case 0:
return ui$core$state_machine__9046__auto____0.call(this);
case 1:
return ui$core$state_machine__9046__auto____1.call(this,state_21371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__9046__auto____0;
ui$core$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__9046__auto____1;
return ui$core$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto__,gps_positions,routing,this$,x21367_21420))
})();
var state__9159__auto__ = (function (){var statearr_21379 = f__9158__auto__.call(null);
(statearr_21379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto__);

return statearr_21379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto__,gps_positions,routing,this$,x21367_21420))
);

return c__9157__auto__;
});})(gps_positions,routing,this$,x21367_21420))
);

var c__9157__auto___21424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___21424,gps_positions,routing,this$,x21367_21420){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___21424,gps_positions,routing,this$,x21367_21420){
return (function (state_21386){
var state_val_21387 = (state_21386[(1)]);
if((state_val_21387 === (1))){
var inst_21380 = [new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"longitude","longitude",-1268876372)];
var inst_21381 = [52.5167,13.3833];
var inst_21382 = cljs.core.PersistentHashMap.fromArrays(inst_21380,inst_21381);
var state_21386__$1 = state_21386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21386__$1,(2),gps_positions,inst_21382);
} else {
if((state_val_21387 === (2))){
var inst_21384 = (state_21386[(2)]);
var state_21386__$1 = state_21386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21386__$1,inst_21384);
} else {
return null;
}
}
});})(c__9157__auto___21424,gps_positions,routing,this$,x21367_21420))
;
return ((function (switch__9045__auto__,c__9157__auto___21424,gps_positions,routing,this$,x21367_21420){
return (function() {
var ui$core$state_machine__9046__auto__ = null;
var ui$core$state_machine__9046__auto____0 = (function (){
var statearr_21391 = [null,null,null,null,null,null,null];
(statearr_21391[(0)] = ui$core$state_machine__9046__auto__);

(statearr_21391[(1)] = (1));

return statearr_21391;
});
var ui$core$state_machine__9046__auto____1 = (function (state_21386){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_21386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e21392){if((e21392 instanceof Object)){
var ex__9049__auto__ = e21392;
var statearr_21393_21425 = state_21386;
(statearr_21393_21425[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21426 = state_21386;
state_21386 = G__21426;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
ui$core$state_machine__9046__auto__ = function(state_21386){
switch(arguments.length){
case 0:
return ui$core$state_machine__9046__auto____0.call(this);
case 1:
return ui$core$state_machine__9046__auto____1.call(this,state_21386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$state_machine__9046__auto____0;
ui$core$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$state_machine__9046__auto____1;
return ui$core$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___21424,gps_positions,routing,this$,x21367_21420))
})();
var state__9159__auto__ = (function (){var statearr_21394 = f__9158__auto__.call(null);
(statearr_21394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___21424);

return statearr_21394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___21424,gps_positions,routing,this$,x21367_21420))
);


ui.software_updates.watch.call(null,((function (gps_positions,routing,this$,x21367_21420){
return (function (p__21395){
var map__21396 = p__21395;
var map__21396__$1 = ((((!((map__21396 == null)))?((((map__21396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21396):map__21396);
var name = cljs.core.get.call(null,map__21396__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var version = cljs.core.get.call(null,map__21396__$1,new cljs.core.Keyword(null,"version","version",425292698));
var size = cljs.core.get.call(null,map__21396__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var status = cljs.core.get.call(null,map__21396__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("software-updates","new-update","software-updates/new-update",1876226561,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","name","software-update/name",827209690)),cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","version","software-update/version",1052892105)),cljs.core._conj.call(null,cljs.core.List.EMPTY,version),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","size","software-update/size",188162400)),cljs.core._conj.call(null,cljs.core.List.EMPTY,size),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","status","software-update/status",1331026980)),cljs.core._conj.call(null,cljs.core.List.EMPTY,status)))))))))))))));
});})(gps_positions,routing,this$,x21367_21420))
);

om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gps-positions","gps-positions",-1184039063),gps_positions,new cljs.core.Keyword(null,"routing","routing",1440253662),routing], null));

var seq__21398 = cljs.core.seq.call(null,ui.software_updates.get_all.call(null));
var chunk__21399 = null;
var count__21400 = (0);
var i__21401 = (0);
while(true){
if((i__21401 < count__21400)){
var map__21402 = cljs.core._nth.call(null,chunk__21399,i__21401);
var map__21402__$1 = ((((!((map__21402 == null)))?((((map__21402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21402):map__21402);
var name = cljs.core.get.call(null,map__21402__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var version = cljs.core.get.call(null,map__21402__$1,new cljs.core.Keyword(null,"version","version",425292698));
var size = cljs.core.get.call(null,map__21402__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var status = cljs.core.get.call(null,map__21402__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("software-updates","new-update","software-updates/new-update",1876226561,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","name","software-update/name",827209690)),cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","version","software-update/version",1052892105)),cljs.core._conj.call(null,cljs.core.List.EMPTY,version),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","size","software-update/size",188162400)),cljs.core._conj.call(null,cljs.core.List.EMPTY,size),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","status","software-update/status",1331026980)),cljs.core._conj.call(null,cljs.core.List.EMPTY,status)))))))))))))));

var G__21427 = seq__21398;
var G__21428 = chunk__21399;
var G__21429 = count__21400;
var G__21430 = (i__21401 + (1));
seq__21398 = G__21427;
chunk__21399 = G__21428;
count__21400 = G__21429;
i__21401 = G__21430;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21398);
if(temp__4425__auto__){
var seq__21398__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21398__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__21398__$1);
var G__21431 = cljs.core.chunk_rest.call(null,seq__21398__$1);
var G__21432 = c__5971__auto__;
var G__21433 = cljs.core.count.call(null,c__5971__auto__);
var G__21434 = (0);
seq__21398 = G__21431;
chunk__21399 = G__21432;
count__21400 = G__21433;
i__21401 = G__21434;
continue;
} else {
var map__21404 = cljs.core.first.call(null,seq__21398__$1);
var map__21404__$1 = ((((!((map__21404 == null)))?((((map__21404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21404):map__21404);
var name = cljs.core.get.call(null,map__21404__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var version = cljs.core.get.call(null,map__21404__$1,new cljs.core.Keyword(null,"version","version",425292698));
var size = cljs.core.get.call(null,map__21404__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var status = cljs.core.get.call(null,map__21404__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("software-updates","new-update","software-updates/new-update",1876226561,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","name","software-update/name",827209690)),cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","version","software-update/version",1052892105)),cljs.core._conj.call(null,cljs.core.List.EMPTY,version),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","size","software-update/size",188162400)),cljs.core._conj.call(null,cljs.core.List.EMPTY,size),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("software-update","status","software-update/status",1331026980)),cljs.core._conj.call(null,cljs.core.List.EMPTY,status)))))))))))))));

var G__21435 = cljs.core.next.call(null,seq__21398__$1);
var G__21436 = null;
var G__21437 = (0);
var G__21438 = (0);
seq__21398 = G__21435;
chunk__21399 = G__21436;
count__21400 = G__21437;
i__21401 = G__21438;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21367_21420))
;

x21367_21420.render = ((function (x21367_21420){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21406 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21407 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21408 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21409 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21410 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__21411 = om.next.props.call(null,this$);
var map__21411__$1 = ((((!((map__21411 == null)))?((((map__21411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21411):map__21411);
var props = map__21411__$1;
var users = cljs.core.get.call(null,map__21411__$1,new cljs.core.Keyword("app","users","app/users",-713520992));
var sections = cljs.core.get.call(null,map__21411__$1,new cljs.core.Keyword("app","sections","app/sections",-886812091));
var current_user = cljs.core.get.call(null,map__21411__$1,new cljs.core.Keyword("app","current-user","app/current-user",-868957432));
var current_section = cljs.core.get.call(null,map__21411__$1,new cljs.core.Keyword("app","current-section","app/current-section",1521904761));
var software_updates = cljs.core.get.call(null,map__21411__$1,new cljs.core.Keyword(null,"software-updates","software-updates",1873409622));
var remaining_range = cljs.core.get.call(null,map__21411__$1,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566));
var map__21412 = om.next.get_state.call(null,this$);
var map__21412__$1 = ((((!((map__21412 == null)))?((((map__21412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21412):map__21412);
var gps_positions = cljs.core.get.call(null,map__21412__$1,new cljs.core.Keyword(null,"gps-positions","gps-positions",-1184039063));
var routing = cljs.core.get.call(null,map__21412__$1,new cljs.core.Keyword(null,"routing","routing",1440253662));
var sections__$1 = cljs.core.map.call(null,((function (map__21411,map__21411__$1,props,users,sections,current_user,current_section,software_updates,remaining_range,map__21412,map__21412__$1,gps_positions,routing,_STAR_reconciler_STAR_21406,_STAR_depth_STAR_21407,_STAR_shared_STAR_21408,_STAR_instrument_STAR_21409,_STAR_parent_STAR_21410,this$,x21367_21420){
return (function (p1__21362_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("section","id","section/id",1495804783).cljs$core$IFn$_invoke$arity$1(p1__21362_SHARP_),new cljs.core.Keyword(null,"updates","updates",2013983452))){
var pending_count = cljs.core.count.call(null,cljs.core.filter.call(null,ui.software_updates.pending_QMARK_,software_updates));
var processing_count = cljs.core.count.call(null,cljs.core.filter.call(null,ui.software_updates.processing_QMARK_,software_updates));
return cljs.core.assoc.call(null,p1__21362_SHARP_,new cljs.core.Keyword("section","badge","section/badge",1281543678),pending_count,new cljs.core.Keyword("section","visible","section/visible",1231307198),cljs.core.not_EQ_.call(null,processing_count,(0)));
} else {
return p1__21362_SHARP_;
}
});})(map__21411,map__21411__$1,props,users,sections,current_user,current_section,software_updates,remaining_range,map__21412,map__21412__$1,gps_positions,routing,_STAR_reconciler_STAR_21406,_STAR_depth_STAR_21407,_STAR_shared_STAR_21408,_STAR_instrument_STAR_21409,_STAR_parent_STAR_21410,this$,x21367_21420))
,sections);
return React.DOM.div(null,om.util.force_children.call(null,ui.core.header_view.call(null,props)),om.util.force_children.call(null,ui.core.navigation_view.call(null,sections__$1)),om.util.force_children.call(null,React.DOM.div({"id": "main"},om.util.force_children.call(null,(function (){var pred__21415 = cljs.core._EQ_;
var expr__21416 = new cljs.core.Keyword("section","id","section/id",1495804783).cljs$core$IFn$_invoke$arity$1(current_section);
if(cljs.core.truth_(pred__21415.call(null,new cljs.core.Keyword(null,"route","route",329891309),expr__21416))){
return ui.core.route_view.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routing","routing",1440253662),routing,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566),remaining_range], null));
} else {
if(cljs.core.truth_(pred__21415.call(null,new cljs.core.Keyword(null,"fuel-stop","fuel-stop",-2127913382),expr__21416))){
return ui.core.fuel_stop_view.call(null);
} else {
if(cljs.core.truth_(pred__21415.call(null,new cljs.core.Keyword(null,"poi","poi",923822222),expr__21416))){
return ui.core.poi_view.call(null);
} else {
if(cljs.core.truth_(pred__21415.call(null,new cljs.core.Keyword(null,"user-profiles","user-profiles",1911528023),expr__21416))){
return ui.core.user_profiles_view.call(null);
} else {
if(cljs.core.truth_(pred__21415.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),expr__21416))){
return ui.core.settings_view.call(null);
} else {
if(cljs.core.truth_(pred__21415.call(null,new cljs.core.Keyword(null,"updates","updates",2013983452),expr__21416))){
return ui.software_updates.view.call(null,om.next.computed.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept-fn","accept-fn",-863534511),((function (pred__21415,expr__21416,map__21411,map__21411__$1,props,users,sections,current_user,current_section,software_updates,remaining_range,map__21412,map__21412__$1,gps_positions,routing,sections__$1,_STAR_reconciler_STAR_21406,_STAR_depth_STAR_21407,_STAR_shared_STAR_21408,_STAR_instrument_STAR_21409,_STAR_parent_STAR_21410,this$,x21367_21420){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("software-updates","accept!","software-updates/accept!",-554374218,null))], null));
});})(pred__21415,expr__21416,map__21411,map__21411__$1,props,users,sections,current_user,current_section,software_updates,remaining_range,map__21412,map__21412__$1,gps_positions,routing,sections__$1,_STAR_reconciler_STAR_21406,_STAR_depth_STAR_21407,_STAR_shared_STAR_21408,_STAR_instrument_STAR_21409,_STAR_parent_STAR_21410,this$,x21367_21420))
], null)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21416)].join('')));
}
}
}
}
}
}
})()),om.util.force_children.call(null,ui.map.view.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),gps_positions,new cljs.core.Keyword(null,"routing","routing",1440253662),routing], null))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21410;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21409;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21408;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21407;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21406;
}});})(x21367_21420))
;


ui.core.RootView.prototype.constructor = ui.core.RootView;

ui.core.RootView.prototype.om$isComponent = true;

var x21418_21439 = ui.core.RootView;
x21418_21439.om$next$IQuery$ = true;

x21418_21439.om$next$IQuery$query$arity$1 = ((function (x21418_21439){
return (function (this$){
var this$__$1 = this;
var sections = om.next.get_query.call(null,ui.core.SectionIconView);
var users = om.next.get_query.call(null,ui.core.UserView);
var software_updates = om.next.get_query.call(null,ui.software_updates.SoftwareUpdatesView);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","sections","app/sections",-886812091)),cljs.core._conj.call(null,cljs.core.List.EMPTY,sections)))))),software_updates,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","current-section","app/current-section",1521904761)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","users","app/users",-713520992)),cljs.core._conj.call(null,cljs.core.List.EMPTY,users)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","current-user","app/current-user",-868957432))))));
});})(x21418_21439))
;


var x21419_21440 = ui.core.RootView.prototype;
x21419_21440.om$next$IQuery$ = true;

x21419_21440.om$next$IQuery$query$arity$1 = ((function (x21419_21440){
return (function (this$){
var this$__$1 = this;
var sections = om.next.get_query.call(null,ui.core.SectionIconView);
var users = om.next.get_query.call(null,ui.core.UserView);
var software_updates = om.next.get_query.call(null,ui.software_updates.SoftwareUpdatesView);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","sections","app/sections",-886812091)),cljs.core._conj.call(null,cljs.core.List.EMPTY,sections)))))),software_updates,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","current-section","app/current-section",1521904761)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("car","remaining-range","car/remaining-range",-1121230566)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","users","app/users",-713520992)),cljs.core._conj.call(null,cljs.core.List.EMPTY,users)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("app","current-user","app/current-user",-868957432))))));
});})(x21419_21440))
;


ui.core.RootView.cljs$lang$type = true;

ui.core.RootView.cljs$lang$ctorStr = "ui.core/RootView";

ui.core.RootView.cljs$lang$ctorPrWriter = (function (this__12947__auto__,writer__12948__auto__,opt__12949__auto__){
return cljs.core._write.call(null,writer__12948__auto__,"ui.core/RootView");
});
ui.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),ui.core.init_data,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ui.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),ui.core.mutate], null))], null));
var seq__21441_21457 = cljs.core.seq.call(null,new cljs.core.Keyword("app","sections","app/sections",-886812091).cljs$core$IFn$_invoke$arity$1(ui.core.init_data));
var chunk__21442_21458 = null;
var count__21443_21459 = (0);
var i__21444_21460 = (0);
while(true){
if((i__21444_21460 < count__21443_21459)){
var map__21445_21461 = cljs.core._nth.call(null,chunk__21442_21458,i__21444_21460);
var map__21445_21462__$1 = ((((!((map__21445_21461 == null)))?((((map__21445_21461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21445_21461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21445_21461):map__21445_21461);
var id_21463 = cljs.core.get.call(null,map__21445_21462__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var action__13963__auto___21464 = ((function (seq__21441_21457,chunk__21442_21458,count__21443_21459,i__21444_21460,map__21445_21461,map__21445_21462__$1,id_21463){
return (function (params__13964__auto__){
if(cljs.core.map_QMARK_.call(null,params__13964__auto__)){
var map__21447 = params__13964__auto__;
var map__21447__$1 = ((((!((map__21447 == null)))?((((map__21447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21447):map__21447);
var params = map__21447__$1;
return om.next.transact_BANG_.call(null,ui.core.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("section","goto","section/goto",-201392033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"section","section",-300141526)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id_21463)))))))))))))));
} else {
if(cljs.core.vector_QMARK_.call(null,params__13964__auto__)){
var map__21449 = params__13964__auto__;
var map__21449__$1 = ((((!((map__21449 == null)))?((((map__21449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21449):map__21449);
var params = map__21449__$1;
return om.next.transact_BANG_.call(null,ui.core.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("section","goto","section/goto",-201392033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"section","section",-300141526)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id_21463)))))))))))))));
} else {
return null;
}
}
});})(seq__21441_21457,chunk__21442_21458,count__21443_21459,i__21444_21460,map__21445_21461,map__21445_21462__$1,id_21463))
;
secretary.core.add_route_BANG_.call(null,[cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,id_21463))].join(''),action__13963__auto___21464);


var G__21465 = seq__21441_21457;
var G__21466 = chunk__21442_21458;
var G__21467 = count__21443_21459;
var G__21468 = (i__21444_21460 + (1));
seq__21441_21457 = G__21465;
chunk__21442_21458 = G__21466;
count__21443_21459 = G__21467;
i__21444_21460 = G__21468;
continue;
} else {
var temp__4425__auto___21469 = cljs.core.seq.call(null,seq__21441_21457);
if(temp__4425__auto___21469){
var seq__21441_21470__$1 = temp__4425__auto___21469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21441_21470__$1)){
var c__5971__auto___21471 = cljs.core.chunk_first.call(null,seq__21441_21470__$1);
var G__21472 = cljs.core.chunk_rest.call(null,seq__21441_21470__$1);
var G__21473 = c__5971__auto___21471;
var G__21474 = cljs.core.count.call(null,c__5971__auto___21471);
var G__21475 = (0);
seq__21441_21457 = G__21472;
chunk__21442_21458 = G__21473;
count__21443_21459 = G__21474;
i__21444_21460 = G__21475;
continue;
} else {
var map__21451_21476 = cljs.core.first.call(null,seq__21441_21470__$1);
var map__21451_21477__$1 = ((((!((map__21451_21476 == null)))?((((map__21451_21476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21451_21476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21451_21476):map__21451_21476);
var id_21478 = cljs.core.get.call(null,map__21451_21477__$1,new cljs.core.Keyword("section","id","section/id",1495804783));
var action__13963__auto___21479 = ((function (seq__21441_21457,chunk__21442_21458,count__21443_21459,i__21444_21460,map__21451_21476,map__21451_21477__$1,id_21478,seq__21441_21470__$1,temp__4425__auto___21469){
return (function (params__13964__auto__){
if(cljs.core.map_QMARK_.call(null,params__13964__auto__)){
var map__21453 = params__13964__auto__;
var map__21453__$1 = ((((!((map__21453 == null)))?((((map__21453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21453):map__21453);
var params = map__21453__$1;
return om.next.transact_BANG_.call(null,ui.core.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("section","goto","section/goto",-201392033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"section","section",-300141526)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id_21478)))))))))))))));
} else {
if(cljs.core.vector_QMARK_.call(null,params__13964__auto__)){
var map__21455 = params__13964__auto__;
var map__21455__$1 = ((((!((map__21455 == null)))?((((map__21455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21455):map__21455);
var params = map__21455__$1;
return om.next.transact_BANG_.call(null,ui.core.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("section","goto","section/goto",-201392033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"section","section",-300141526)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id_21478)))))))))))))));
} else {
return null;
}
}
});})(seq__21441_21457,chunk__21442_21458,count__21443_21459,i__21444_21460,map__21451_21476,map__21451_21477__$1,id_21478,seq__21441_21470__$1,temp__4425__auto___21469))
;
secretary.core.add_route_BANG_.call(null,[cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,id_21478))].join(''),action__13963__auto___21479);


var G__21480 = cljs.core.next.call(null,seq__21441_21470__$1);
var G__21481 = null;
var G__21482 = (0);
var G__21483 = (0);
seq__21441_21457 = G__21480;
chunk__21442_21458 = G__21481;
count__21443_21459 = G__21482;
i__21444_21460 = G__21483;
continue;
}
} else {
}
}
break;
}
ui.core.init = (function ui$core$init(){
om.next.add_root_BANG_.call(null,ui.core.reconciler,ui.core.RootView,goog.dom.getElement("app"));

return secretary.core.dispatch_BANG_.call(null,"/route");
});

//# sourceMappingURL=core.js.map