// Compiled by ClojureScript 1.7.170 {}
goog.provide('ui.map');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('ajax.core');
goog.require('cljsjs.leaflet');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('om.next');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ui.map.Route = (function (geometry,time,distance,__meta,__extmap,__hash){
this.geometry = geometry;
this.time = time;
this.distance = distance;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ui.map.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5782__auto__,k__5783__auto__){
var self__ = this;
var this__5782__auto____$1 = this;
return cljs.core._lookup.call(null,this__5782__auto____$1,k__5783__auto__,null);
});

ui.map.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5784__auto__,k14983,else__5785__auto__){
var self__ = this;
var this__5784__auto____$1 = this;
var G__14985 = (((k14983 instanceof cljs.core.Keyword))?k14983.fqn:null);
switch (G__14985) {
case "geometry":
return self__.geometry;

break;
case "time":
return self__.time;

break;
case "distance":
return self__.distance;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14983,else__5785__auto__);

}
});

ui.map.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5796__auto__,writer__5797__auto__,opts__5798__auto__){
var self__ = this;
var this__5796__auto____$1 = this;
var pr_pair__5799__auto__ = ((function (this__5796__auto____$1){
return (function (keyval__5800__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5797__auto__,cljs.core.pr_writer,""," ","",opts__5798__auto__,keyval__5800__auto__);
});})(this__5796__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5797__auto__,pr_pair__5799__auto__,"#ui.map.Route{",", ","}",opts__5798__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"geometry","geometry",-405034994),self__.geometry],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time","time",1385887882),self__.time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"distance","distance",-1671893894),self__.distance],null))], null),self__.__extmap));
});

ui.map.Route.prototype.cljs$core$IIterable$ = true;

ui.map.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14982){
var self__ = this;
var G__14982__$1 = this;
return (new cljs.core.RecordIter((0),G__14982__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"distance","distance",-1671893894)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ui.map.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5780__auto__){
var self__ = this;
var this__5780__auto____$1 = this;
return self__.__meta;
});

ui.map.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5776__auto__){
var self__ = this;
var this__5776__auto____$1 = this;
return (new ui.map.Route(self__.geometry,self__.time,self__.distance,self__.__meta,self__.__extmap,self__.__hash));
});

ui.map.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5786__auto__){
var self__ = this;
var this__5786__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ui.map.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5777__auto__){
var self__ = this;
var this__5777__auto____$1 = this;
var h__5603__auto__ = self__.__hash;
if(!((h__5603__auto__ == null))){
return h__5603__auto__;
} else {
var h__5603__auto____$1 = cljs.core.hash_imap.call(null,this__5777__auto____$1);
self__.__hash = h__5603__auto____$1;

return h__5603__auto____$1;
}
});

ui.map.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5778__auto__,other__5779__auto__){
var self__ = this;
var this__5778__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5156__auto__ = other__5779__auto__;
if(cljs.core.truth_(and__5156__auto__)){
var and__5156__auto____$1 = (this__5778__auto____$1.constructor === other__5779__auto__.constructor);
if(and__5156__auto____$1){
return cljs.core.equiv_map.call(null,this__5778__auto____$1,other__5779__auto__);
} else {
return and__5156__auto____$1;
}
} else {
return and__5156__auto__;
}
})())){
return true;
} else {
return false;
}
});

ui.map.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5791__auto__,k__5792__auto__){
var self__ = this;
var this__5791__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),null,new cljs.core.Keyword(null,"geometry","geometry",-405034994),null,new cljs.core.Keyword(null,"distance","distance",-1671893894),null], null), null),k__5792__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5791__auto____$1),self__.__meta),k__5792__auto__);
} else {
return (new ui.map.Route(self__.geometry,self__.time,self__.distance,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5792__auto__)),null));
}
});

ui.map.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5789__auto__,k__5790__auto__,G__14982){
var self__ = this;
var this__5789__auto____$1 = this;
var pred__14986 = cljs.core.keyword_identical_QMARK_;
var expr__14987 = k__5790__auto__;
if(cljs.core.truth_(pred__14986.call(null,new cljs.core.Keyword(null,"geometry","geometry",-405034994),expr__14987))){
return (new ui.map.Route(G__14982,self__.time,self__.distance,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14986.call(null,new cljs.core.Keyword(null,"time","time",1385887882),expr__14987))){
return (new ui.map.Route(self__.geometry,G__14982,self__.distance,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14986.call(null,new cljs.core.Keyword(null,"distance","distance",-1671893894),expr__14987))){
return (new ui.map.Route(self__.geometry,self__.time,G__14982,self__.__meta,self__.__extmap,null));
} else {
return (new ui.map.Route(self__.geometry,self__.time,self__.distance,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5790__auto__,G__14982),null));
}
}
}
});

ui.map.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5794__auto__){
var self__ = this;
var this__5794__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"geometry","geometry",-405034994),self__.geometry],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time","time",1385887882),self__.time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"distance","distance",-1671893894),self__.distance],null))], null),self__.__extmap));
});

ui.map.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5781__auto__,G__14982){
var self__ = this;
var this__5781__auto____$1 = this;
return (new ui.map.Route(self__.geometry,self__.time,self__.distance,G__14982,self__.__extmap,self__.__hash));
});

ui.map.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5787__auto__,entry__5788__auto__){
var self__ = this;
var this__5787__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5788__auto__)){
return cljs.core._assoc.call(null,this__5787__auto____$1,cljs.core._nth.call(null,entry__5788__auto__,(0)),cljs.core._nth.call(null,entry__5788__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5787__auto____$1,entry__5788__auto__);
}
});

ui.map.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"geometry","geometry",1235496533,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"distance","distance",-31362367,null)], null);
});

ui.map.Route.cljs$lang$type = true;

ui.map.Route.cljs$lang$ctorPrSeq = (function (this__5816__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ui.map/Route");
});

ui.map.Route.cljs$lang$ctorPrWriter = (function (this__5816__auto__,writer__5817__auto__){
return cljs.core._write.call(null,writer__5817__auto__,"ui.map/Route");
});

ui.map.__GT_Route = (function ui$map$__GT_Route(geometry,time,distance){
return (new ui.map.Route(geometry,time,distance,null,null,null));
});

ui.map.map__GT_Route = (function ui$map$map__GT_Route(G__14984){
return (new ui.map.Route(new cljs.core.Keyword(null,"geometry","geometry",-405034994).cljs$core$IFn$_invoke$arity$1(G__14984),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(G__14984),new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(G__14984),null,cljs.core.dissoc.call(null,G__14984,new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"distance","distance",-1671893894)),null));
});

ui.map.routing_endpoint = "http://router.project-osrm.org/viaroute";
ui.map.geocoding_endpoint = "http://nominatim.openstreetmap.org/search?format=json&q=";
ui.map.geocode = (function ui$map$geocode(place){
var resp = cljs.core.async.chan.call(null);
ajax.core.GET.call(null,[cljs.core.str(ui.map.geocoding_endpoint),cljs.core.str(place)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (resp){
return (function (error){
var c__11673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto__,resp){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto__,resp){
return (function (state_15046){
var state_val_15047 = (state_15046[(1)]);
if((state_val_15047 === (1))){
var inst_15040 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_15041 = [error];
var inst_15042 = cljs.core.PersistentHashMap.fromArrays(inst_15040,inst_15041);
var state_15046__$1 = state_15046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15046__$1,(2),resp,inst_15042);
} else {
if((state_val_15047 === (2))){
var inst_15044 = (state_15046[(2)]);
var state_15046__$1 = state_15046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15046__$1,inst_15044);
} else {
return null;
}
}
});})(c__11673__auto__,resp))
;
return ((function (switch__11561__auto__,c__11673__auto__,resp){
return (function() {
var ui$map$geocode_$_state_machine__11562__auto__ = null;
var ui$map$geocode_$_state_machine__11562__auto____0 = (function (){
var statearr_15051 = [null,null,null,null,null,null,null];
(statearr_15051[(0)] = ui$map$geocode_$_state_machine__11562__auto__);

(statearr_15051[(1)] = (1));

return statearr_15051;
});
var ui$map$geocode_$_state_machine__11562__auto____1 = (function (state_15046){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_15046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e15052){if((e15052 instanceof Object)){
var ex__11565__auto__ = e15052;
var statearr_15053_15090 = state_15046;
(statearr_15053_15090[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15091 = state_15046;
state_15046 = G__15091;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
ui$map$geocode_$_state_machine__11562__auto__ = function(state_15046){
switch(arguments.length){
case 0:
return ui$map$geocode_$_state_machine__11562__auto____0.call(this);
case 1:
return ui$map$geocode_$_state_machine__11562__auto____1.call(this,state_15046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$geocode_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$geocode_$_state_machine__11562__auto____0;
ui$map$geocode_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$geocode_$_state_machine__11562__auto____1;
return ui$map$geocode_$_state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto__,resp))
})();
var state__11675__auto__ = (function (){var statearr_15054 = f__11674__auto__.call(null);
(statearr_15054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto__);

return statearr_15054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto__,resp))
);

return c__11673__auto__;
});})(resp))
,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (resp){
return (function (data){
var temp__4423__auto__ = cljs.core.first.call(null,data);
if(cljs.core.truth_(temp__4423__auto__)){
var map__15055 = temp__4423__auto__;
var map__15055__$1 = ((((!((map__15055 == null)))?((((map__15055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15055):map__15055);
var lon = cljs.core.get.call(null,map__15055__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var lat = cljs.core.get.call(null,map__15055__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var c__11673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto__,map__15055,map__15055__$1,lon,lat,temp__4423__auto__,resp){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto__,map__15055,map__15055__$1,lon,lat,temp__4423__auto__,resp){
return (function (state_15065){
var state_val_15066 = (state_15065[(1)]);
if((state_val_15066 === (1))){
var inst_15057 = [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"latitude","latitude",394867543)];
var inst_15058 = parseFloat(lon);
var inst_15059 = parseFloat(lat);
var inst_15060 = [inst_15058,inst_15059];
var inst_15061 = cljs.core.PersistentHashMap.fromArrays(inst_15057,inst_15060);
var state_15065__$1 = state_15065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15065__$1,(2),resp,inst_15061);
} else {
if((state_val_15066 === (2))){
var inst_15063 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15065__$1,inst_15063);
} else {
return null;
}
}
});})(c__11673__auto__,map__15055,map__15055__$1,lon,lat,temp__4423__auto__,resp))
;
return ((function (switch__11561__auto__,c__11673__auto__,map__15055,map__15055__$1,lon,lat,temp__4423__auto__,resp){
return (function() {
var ui$map$geocode_$_state_machine__11562__auto__ = null;
var ui$map$geocode_$_state_machine__11562__auto____0 = (function (){
var statearr_15070 = [null,null,null,null,null,null,null];
(statearr_15070[(0)] = ui$map$geocode_$_state_machine__11562__auto__);

(statearr_15070[(1)] = (1));

return statearr_15070;
});
var ui$map$geocode_$_state_machine__11562__auto____1 = (function (state_15065){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_15065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e15071){if((e15071 instanceof Object)){
var ex__11565__auto__ = e15071;
var statearr_15072_15092 = state_15065;
(statearr_15072_15092[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15093 = state_15065;
state_15065 = G__15093;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
ui$map$geocode_$_state_machine__11562__auto__ = function(state_15065){
switch(arguments.length){
case 0:
return ui$map$geocode_$_state_machine__11562__auto____0.call(this);
case 1:
return ui$map$geocode_$_state_machine__11562__auto____1.call(this,state_15065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$geocode_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$geocode_$_state_machine__11562__auto____0;
ui$map$geocode_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$geocode_$_state_machine__11562__auto____1;
return ui$map$geocode_$_state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto__,map__15055,map__15055__$1,lon,lat,temp__4423__auto__,resp))
})();
var state__11675__auto__ = (function (){var statearr_15073 = f__11674__auto__.call(null);
(statearr_15073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto__);

return statearr_15073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto__,map__15055,map__15055__$1,lon,lat,temp__4423__auto__,resp))
);

return c__11673__auto__;
} else {
var c__11673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto__,temp__4423__auto__,resp){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto__,temp__4423__auto__,resp){
return (function (state_15081){
var state_val_15082 = (state_15081[(1)]);
if((state_val_15082 === (1))){
var inst_15074 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_15075 = [cljs.core.str("Location "),cljs.core.str(place),cljs.core.str(" not found")].join('');
var inst_15076 = [inst_15075];
var inst_15077 = cljs.core.PersistentHashMap.fromArrays(inst_15074,inst_15076);
var state_15081__$1 = state_15081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15081__$1,(2),resp,inst_15077);
} else {
if((state_val_15082 === (2))){
var inst_15079 = (state_15081[(2)]);
var state_15081__$1 = state_15081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15081__$1,inst_15079);
} else {
return null;
}
}
});})(c__11673__auto__,temp__4423__auto__,resp))
;
return ((function (switch__11561__auto__,c__11673__auto__,temp__4423__auto__,resp){
return (function() {
var ui$map$geocode_$_state_machine__11562__auto__ = null;
var ui$map$geocode_$_state_machine__11562__auto____0 = (function (){
var statearr_15086 = [null,null,null,null,null,null,null];
(statearr_15086[(0)] = ui$map$geocode_$_state_machine__11562__auto__);

(statearr_15086[(1)] = (1));

return statearr_15086;
});
var ui$map$geocode_$_state_machine__11562__auto____1 = (function (state_15081){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_15081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e15087){if((e15087 instanceof Object)){
var ex__11565__auto__ = e15087;
var statearr_15088_15094 = state_15081;
(statearr_15088_15094[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15095 = state_15081;
state_15081 = G__15095;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
ui$map$geocode_$_state_machine__11562__auto__ = function(state_15081){
switch(arguments.length){
case 0:
return ui$map$geocode_$_state_machine__11562__auto____0.call(this);
case 1:
return ui$map$geocode_$_state_machine__11562__auto____1.call(this,state_15081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$geocode_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$geocode_$_state_machine__11562__auto____0;
ui$map$geocode_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$geocode_$_state_machine__11562__auto____1;
return ui$map$geocode_$_state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto__,temp__4423__auto__,resp))
})();
var state__11675__auto__ = (function (){var statearr_15089 = f__11674__auto__.call(null);
(statearr_15089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto__);

return statearr_15089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto__,temp__4423__auto__,resp))
);

return c__11673__auto__;
}
});})(resp))
], null));

return resp;
});
ui.map.route = (function ui$map$route(from,to){
var resp = cljs.core.async.chan.call(null);
ajax.core.GET.call(null,cljs.core.apply.call(null,cljs.core.str,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.map.routing_endpoint,"?loc=",new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(from),",",new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(from),"&loc=",new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(to),",",new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(to)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (resp){
return (function (error){
var c__11673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto__,resp){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto__,resp){
return (function (state_15147){
var state_val_15148 = (state_15147[(1)]);
if((state_val_15148 === (1))){
var inst_15141 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_15142 = [error];
var inst_15143 = cljs.core.PersistentHashMap.fromArrays(inst_15141,inst_15142);
var state_15147__$1 = state_15147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15147__$1,(2),resp,inst_15143);
} else {
if((state_val_15148 === (2))){
var inst_15145 = (state_15147[(2)]);
var state_15147__$1 = state_15147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15147__$1,inst_15145);
} else {
return null;
}
}
});})(c__11673__auto__,resp))
;
return ((function (switch__11561__auto__,c__11673__auto__,resp){
return (function() {
var ui$map$route_$_state_machine__11562__auto__ = null;
var ui$map$route_$_state_machine__11562__auto____0 = (function (){
var statearr_15152 = [null,null,null,null,null,null,null];
(statearr_15152[(0)] = ui$map$route_$_state_machine__11562__auto__);

(statearr_15152[(1)] = (1));

return statearr_15152;
});
var ui$map$route_$_state_machine__11562__auto____1 = (function (state_15147){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_15147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e15153){if((e15153 instanceof Object)){
var ex__11565__auto__ = e15153;
var statearr_15154_15186 = state_15147;
(statearr_15154_15186[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15187 = state_15147;
state_15147 = G__15187;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
ui$map$route_$_state_machine__11562__auto__ = function(state_15147){
switch(arguments.length){
case 0:
return ui$map$route_$_state_machine__11562__auto____0.call(this);
case 1:
return ui$map$route_$_state_machine__11562__auto____1.call(this,state_15147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$route_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$route_$_state_machine__11562__auto____0;
ui$map$route_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$route_$_state_machine__11562__auto____1;
return ui$map$route_$_state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto__,resp))
})();
var state__11675__auto__ = (function (){var statearr_15155 = f__11674__auto__.call(null);
(statearr_15155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto__);

return statearr_15155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto__,resp))
);

return c__11673__auto__;
});})(resp))
,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (resp){
return (function (data){
var temp__4423__auto__ = new cljs.core.Keyword(null,"route_summary","route_summary",-1991848495).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__4423__auto__)){
var summary = temp__4423__auto__;
var geometry = new cljs.core.Keyword(null,"route_geometry","route_geometry",-458180234).cljs$core$IFn$_invoke$arity$1(data);
var map__15156 = summary;
var map__15156__$1 = ((((!((map__15156 == null)))?((((map__15156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15156):map__15156);
var total_time = cljs.core.get.call(null,map__15156__$1,new cljs.core.Keyword(null,"total_time","total_time",1010495910));
var total_distance = cljs.core.get.call(null,map__15156__$1,new cljs.core.Keyword(null,"total_distance","total_distance",-1615601506));
var c__11673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto__,geometry,map__15156,map__15156__$1,total_time,total_distance,summary,temp__4423__auto__,resp){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto__,geometry,map__15156,map__15156__$1,total_time,total_distance,summary,temp__4423__auto__,resp){
return (function (state_15162){
var state_val_15163 = (state_15162[(1)]);
if((state_val_15163 === (1))){
var inst_15158 = ui.map.__GT_Route.call(null,geometry,total_time,total_distance);
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15162__$1,(2),resp,inst_15158);
} else {
if((state_val_15163 === (2))){
var inst_15160 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15162__$1,inst_15160);
} else {
return null;
}
}
});})(c__11673__auto__,geometry,map__15156,map__15156__$1,total_time,total_distance,summary,temp__4423__auto__,resp))
;
return ((function (switch__11561__auto__,c__11673__auto__,geometry,map__15156,map__15156__$1,total_time,total_distance,summary,temp__4423__auto__,resp){
return (function() {
var ui$map$route_$_state_machine__11562__auto__ = null;
var ui$map$route_$_state_machine__11562__auto____0 = (function (){
var statearr_15167 = [null,null,null,null,null,null,null];
(statearr_15167[(0)] = ui$map$route_$_state_machine__11562__auto__);

(statearr_15167[(1)] = (1));

return statearr_15167;
});
var ui$map$route_$_state_machine__11562__auto____1 = (function (state_15162){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_15162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e15168){if((e15168 instanceof Object)){
var ex__11565__auto__ = e15168;
var statearr_15169_15188 = state_15162;
(statearr_15169_15188[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15189 = state_15162;
state_15162 = G__15189;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
ui$map$route_$_state_machine__11562__auto__ = function(state_15162){
switch(arguments.length){
case 0:
return ui$map$route_$_state_machine__11562__auto____0.call(this);
case 1:
return ui$map$route_$_state_machine__11562__auto____1.call(this,state_15162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$route_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$route_$_state_machine__11562__auto____0;
ui$map$route_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$route_$_state_machine__11562__auto____1;
return ui$map$route_$_state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto__,geometry,map__15156,map__15156__$1,total_time,total_distance,summary,temp__4423__auto__,resp))
})();
var state__11675__auto__ = (function (){var statearr_15170 = f__11674__auto__.call(null);
(statearr_15170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto__);

return statearr_15170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto__,geometry,map__15156,map__15156__$1,total_time,total_distance,summary,temp__4423__auto__,resp))
);

return c__11673__auto__;
} else {
var c__11673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto__,temp__4423__auto__,resp){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto__,temp__4423__auto__,resp){
return (function (state_15177){
var state_val_15178 = (state_15177[(1)]);
if((state_val_15178 === (1))){
var inst_15171 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_15172 = ["Couldn't find a route."];
var inst_15173 = cljs.core.PersistentHashMap.fromArrays(inst_15171,inst_15172);
var state_15177__$1 = state_15177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15177__$1,(2),resp,inst_15173);
} else {
if((state_val_15178 === (2))){
var inst_15175 = (state_15177[(2)]);
var state_15177__$1 = state_15177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15177__$1,inst_15175);
} else {
return null;
}
}
});})(c__11673__auto__,temp__4423__auto__,resp))
;
return ((function (switch__11561__auto__,c__11673__auto__,temp__4423__auto__,resp){
return (function() {
var ui$map$route_$_state_machine__11562__auto__ = null;
var ui$map$route_$_state_machine__11562__auto____0 = (function (){
var statearr_15182 = [null,null,null,null,null,null,null];
(statearr_15182[(0)] = ui$map$route_$_state_machine__11562__auto__);

(statearr_15182[(1)] = (1));

return statearr_15182;
});
var ui$map$route_$_state_machine__11562__auto____1 = (function (state_15177){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_15177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e15183){if((e15183 instanceof Object)){
var ex__11565__auto__ = e15183;
var statearr_15184_15190 = state_15177;
(statearr_15184_15190[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15191 = state_15177;
state_15177 = G__15191;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
ui$map$route_$_state_machine__11562__auto__ = function(state_15177){
switch(arguments.length){
case 0:
return ui$map$route_$_state_machine__11562__auto____0.call(this);
case 1:
return ui$map$route_$_state_machine__11562__auto____1.call(this,state_15177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$route_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$route_$_state_machine__11562__auto____0;
ui$map$route_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$route_$_state_machine__11562__auto____1;
return ui$map$route_$_state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto__,temp__4423__auto__,resp))
})();
var state__11675__auto__ = (function (){var statearr_15185 = f__11674__auto__.call(null);
(statearr_15185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto__);

return statearr_15185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto__,temp__4423__auto__,resp))
);

return c__11673__auto__;
}
});})(resp))
], null));

return resp;
});
ui.map.new_map = (function ui$map$new_map(){
console.log("Rendering new map.");

var map = L.map("map",{"zoomControl": false});
var zoom_control = L.control.zoom({"position": "topright"});
var tile_layer = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Map data &copy; [...]",new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(18)], null)));
zoom_control.addTo(map);

tile_layer.addTo(map);

map.setView([52.5167,13.3833],(13));

return map;
});
/**
 * @constructor
 */
ui.map.MapView = (function ui$map$MapView(){
var this__14507__auto__ = this;
React.Component.apply(this__14507__auto__,arguments);

if(!((this__14507__auto__.initLocalState == null))){
this__14507__auto__.state = this__14507__auto__.initLocalState();
} else {
this__14507__auto__.state = {};
}

return this__14507__auto__;
});

ui.map.MapView.prototype = goog.object.clone(React.Component.prototype);

var x15196_15442 = ui.map.MapView.prototype;
x15196_15442.componentWillUpdate = ((function (x15196_15442){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14447__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14447__auto__);
});})(x15196_15442))
;

x15196_15442.shouldComponentUpdate = ((function (x15196_15442){
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
});})(x15196_15442))
;

x15196_15442.componentWillUnmount = ((function (x15196_15442){
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
});})(x15196_15442))
;

x15196_15442.componentDidUpdate = ((function (x15196_15442){
return (function (prev_props__14450__auto__,prev_state__14451__auto__){
var this__14447__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14447__auto__);
});})(x15196_15442))
;

x15196_15442.isMounted = ((function (x15196_15442){
return (function (){
var this__14447__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14447__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x15196_15442))
;

x15196_15442.componentWillMount = ((function (x15196_15442){
return (function (){
var this__14447__auto__ = this;
var indexer__14452__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14447__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x15196_15442))
;

x15196_15442.componentDidMount = ((function (x15196_15442){
return (function (){
var this$ = this;
om.next.set_state_BANG_.call(null,this$,cljs.core.PersistentArrayMap.EMPTY);

var map = ui.map.new_map.call(null);
var map__15197 = om.next.props.call(null,this$);
var map__15197__$1 = ((((!((map__15197 == null)))?((((map__15197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15197):map__15197);
var center = cljs.core.get.call(null,map__15197__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var routing = cljs.core.get.call(null,map__15197__$1,new cljs.core.Keyword(null,"routing","routing",1440253662));
var c__11673__auto___15443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___15443,map__15197,map__15197__$1,center,routing,map,this$,x15196_15442){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___15443,map__15197,map__15197__$1,center,routing,map,this$,x15196_15442){
return (function (state_15240){
var state_val_15241 = (state_15240[(1)]);
if((state_val_15241 === (7))){
var inst_15217 = (state_15240[(2)]);
var state_15240__$1 = state_15240;
if(cljs.core.truth_(inst_15217)){
var statearr_15242_15444 = state_15240__$1;
(statearr_15242_15444[(1)] = (11));

} else {
var statearr_15243_15445 = state_15240__$1;
(statearr_15243_15445[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (1))){
var state_15240__$1 = state_15240;
var statearr_15244_15446 = state_15240__$1;
(statearr_15244_15446[(2)] = null);

(statearr_15244_15446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (4))){
var inst_15202 = (state_15240[(7)]);
var inst_15202__$1 = (state_15240[(2)]);
var inst_15204 = (inst_15202__$1 == null);
var inst_15205 = cljs.core.not.call(null,inst_15204);
var state_15240__$1 = (function (){var statearr_15245 = state_15240;
(statearr_15245[(7)] = inst_15202__$1);

return statearr_15245;
})();
if(inst_15205){
var statearr_15246_15447 = state_15240__$1;
(statearr_15246_15447[(1)] = (5));

} else {
var statearr_15247_15448 = state_15240__$1;
(statearr_15247_15448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (15))){
var state_15240__$1 = state_15240;
var statearr_15248_15449 = state_15240__$1;
(statearr_15248_15449[(2)] = (13));

(statearr_15248_15449[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (13))){
var inst_15230 = (state_15240[(8)]);
var inst_15222 = (state_15240[(2)]);
var inst_15223 = cljs.core.get.call(null,inst_15222,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var inst_15224 = cljs.core.get.call(null,inst_15222,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var inst_15225 = om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),inst_15222);
var inst_15226 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15227 = [inst_15223,inst_15224];
var inst_15228 = (new cljs.core.PersistentVector(null,2,(5),inst_15226,inst_15227,null));
var inst_15229 = cljs.core.clj__GT_js.call(null,inst_15228);
var inst_15230__$1 = map.getZoom();
var state_15240__$1 = (function (){var statearr_15249 = state_15240;
(statearr_15249[(9)] = inst_15225);

(statearr_15249[(10)] = inst_15229);

(statearr_15249[(8)] = inst_15230__$1);

return statearr_15249;
})();
if(cljs.core.truth_(inst_15230__$1)){
var statearr_15250_15450 = state_15240__$1;
(statearr_15250_15450[(1)] = (14));

} else {
var statearr_15251_15451 = state_15240__$1;
(statearr_15251_15451[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (6))){
var state_15240__$1 = state_15240;
var statearr_15252_15452 = state_15240__$1;
(statearr_15252_15452[(2)] = false);

(statearr_15252_15452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (3))){
var inst_15238 = (state_15240[(2)]);
var state_15240__$1 = state_15240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15240__$1,inst_15238);
} else {
if((state_val_15241 === (12))){
var inst_15202 = (state_15240[(7)]);
var state_15240__$1 = state_15240;
var statearr_15253_15453 = state_15240__$1;
(statearr_15253_15453[(2)] = inst_15202);

(statearr_15253_15453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (2))){
var state_15240__$1 = state_15240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15240__$1,(4),center);
} else {
if((state_val_15241 === (11))){
var inst_15202 = (state_15240[(7)]);
var inst_15219 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15202);
var state_15240__$1 = state_15240;
var statearr_15254_15454 = state_15240__$1;
(statearr_15254_15454[(2)] = inst_15219);

(statearr_15254_15454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (9))){
var state_15240__$1 = state_15240;
var statearr_15255_15455 = state_15240__$1;
(statearr_15255_15455[(2)] = false);

(statearr_15255_15455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (5))){
var inst_15202 = (state_15240[(7)]);
var inst_15207 = inst_15202.cljs$lang$protocol_mask$partition0$;
var inst_15208 = (inst_15207 & (64));
var inst_15209 = inst_15202.cljs$core$ISeq$;
var inst_15210 = (inst_15208) || (inst_15209);
var state_15240__$1 = state_15240;
if(cljs.core.truth_(inst_15210)){
var statearr_15256_15456 = state_15240__$1;
(statearr_15256_15456[(1)] = (8));

} else {
var statearr_15257_15457 = state_15240__$1;
(statearr_15257_15457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (14))){
var inst_15230 = (state_15240[(8)]);
var state_15240__$1 = state_15240;
var statearr_15258_15458 = state_15240__$1;
(statearr_15258_15458[(2)] = inst_15230);

(statearr_15258_15458[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (16))){
var inst_15229 = (state_15240[(10)]);
var inst_15234 = (state_15240[(2)]);
var inst_15235 = map.setView(inst_15229,inst_15234);
var state_15240__$1 = (function (){var statearr_15259 = state_15240;
(statearr_15259[(11)] = inst_15235);

return statearr_15259;
})();
var statearr_15260_15459 = state_15240__$1;
(statearr_15260_15459[(2)] = null);

(statearr_15260_15459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (10))){
var inst_15214 = (state_15240[(2)]);
var state_15240__$1 = state_15240;
var statearr_15261_15460 = state_15240__$1;
(statearr_15261_15460[(2)] = inst_15214);

(statearr_15261_15460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (8))){
var state_15240__$1 = state_15240;
var statearr_15262_15461 = state_15240__$1;
(statearr_15262_15461[(2)] = true);

(statearr_15262_15461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11673__auto___15443,map__15197,map__15197__$1,center,routing,map,this$,x15196_15442))
;
return ((function (switch__11561__auto__,c__11673__auto___15443,map__15197,map__15197__$1,center,routing,map,this$,x15196_15442){
return (function() {
var ui$map$state_machine__11562__auto__ = null;
var ui$map$state_machine__11562__auto____0 = (function (){
var statearr_15266 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15266[(0)] = ui$map$state_machine__11562__auto__);

(statearr_15266[(1)] = (1));

return statearr_15266;
});
var ui$map$state_machine__11562__auto____1 = (function (state_15240){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_15240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e15267){if((e15267 instanceof Object)){
var ex__11565__auto__ = e15267;
var statearr_15268_15462 = state_15240;
(statearr_15268_15462[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15463 = state_15240;
state_15240 = G__15463;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
ui$map$state_machine__11562__auto__ = function(state_15240){
switch(arguments.length){
case 0:
return ui$map$state_machine__11562__auto____0.call(this);
case 1:
return ui$map$state_machine__11562__auto____1.call(this,state_15240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$state_machine__11562__auto____0;
ui$map$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$state_machine__11562__auto____1;
return ui$map$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___15443,map__15197,map__15197__$1,center,routing,map,this$,x15196_15442))
})();
var state__11675__auto__ = (function (){var statearr_15269 = f__11674__auto__.call(null);
(statearr_15269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___15443);

return statearr_15269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___15443,map__15197,map__15197__$1,center,routing,map,this$,x15196_15442))
);


var c__11673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto__,map__15197,map__15197__$1,center,routing,map,this$,x15196_15442){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto__,map__15197,map__15197__$1,center,routing,map,this$,x15196_15442){
return (function (state_15373){
var state_val_15374 = (state_15373[(1)]);
if((state_val_15374 === (7))){
var state_15373__$1 = state_15373;
var statearr_15375_15464 = state_15373__$1;
(statearr_15375_15464[(2)] = false);

(statearr_15375_15464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (20))){
var inst_15320 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
if(cljs.core.truth_(inst_15320)){
var statearr_15376_15465 = state_15373__$1;
(statearr_15376_15465[(1)] = (24));

} else {
var statearr_15377_15466 = state_15373__$1;
(statearr_15377_15466[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (27))){
var inst_15332 = (state_15373[(7)]);
var inst_15332__$1 = (state_15373[(2)]);
var inst_15334 = (inst_15332__$1 == null);
var inst_15335 = cljs.core.not.call(null,inst_15334);
var state_15373__$1 = (function (){var statearr_15378 = state_15373;
(statearr_15378[(7)] = inst_15332__$1);

return statearr_15378;
})();
if(inst_15335){
var statearr_15379_15467 = state_15373__$1;
(statearr_15379_15467[(1)] = (28));

} else {
var statearr_15380_15468 = state_15373__$1;
(statearr_15380_15468[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (1))){
var state_15373__$1 = state_15373;
var statearr_15381_15469 = state_15373__$1;
(statearr_15381_15469[(2)] = null);

(statearr_15381_15469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (24))){
var inst_15305 = (state_15373[(8)]);
var inst_15322 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15305);
var state_15373__$1 = state_15373;
var statearr_15382_15470 = state_15373__$1;
(statearr_15382_15470[(2)] = inst_15322);

(statearr_15382_15470[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (39))){
var inst_15366 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
var statearr_15383_15471 = state_15373__$1;
(statearr_15383_15471[(2)] = inst_15366);

(statearr_15383_15471[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (4))){
var inst_15273 = (state_15373[(2)]);
var inst_15274 = ui.map.geocode.call(null,inst_15273);
var state_15373__$1 = state_15373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15373__$1,(5),inst_15274);
} else {
if((state_val_15374 === (15))){
var inst_15297 = (state_15373[(9)]);
var inst_15301 = console.error(inst_15297);
var state_15373__$1 = state_15373;
var statearr_15384_15472 = state_15373__$1;
(statearr_15384_15472[(2)] = inst_15301);

(statearr_15384_15472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (21))){
var state_15373__$1 = state_15373;
var statearr_15385_15473 = state_15373__$1;
(statearr_15385_15473[(2)] = true);

(statearr_15385_15473[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (31))){
var state_15373__$1 = state_15373;
var statearr_15386_15474 = state_15373__$1;
(statearr_15386_15474[(2)] = true);

(statearr_15386_15474[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (32))){
var state_15373__$1 = state_15373;
var statearr_15387_15475 = state_15373__$1;
(statearr_15387_15475[(2)] = false);

(statearr_15387_15475[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (33))){
var inst_15344 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
var statearr_15388_15476 = state_15373__$1;
(statearr_15388_15476[(2)] = inst_15344);

(statearr_15388_15476[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (13))){
var inst_15276 = (state_15373[(10)]);
var state_15373__$1 = state_15373;
var statearr_15389_15477 = state_15373__$1;
(statearr_15389_15477[(2)] = inst_15276);

(statearr_15389_15477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (22))){
var state_15373__$1 = state_15373;
var statearr_15390_15478 = state_15373__$1;
(statearr_15390_15478[(2)] = false);

(statearr_15390_15478[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (36))){
var inst_15353 = (state_15373[(11)]);
var inst_15352 = (state_15373[(2)]);
var inst_15353__$1 = cljs.core.get.call(null,inst_15352,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_15354 = cljs.core.get.call(null,inst_15352,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
var inst_15355 = cljs.core.get.call(null,inst_15352,new cljs.core.Keyword(null,"time","time",1385887882));
var inst_15356 = cljs.core.get.call(null,inst_15352,new cljs.core.Keyword(null,"distance","distance",-1671893894));
var state_15373__$1 = (function (){var statearr_15391 = state_15373;
(statearr_15391[(11)] = inst_15353__$1);

(statearr_15391[(12)] = inst_15354);

(statearr_15391[(13)] = inst_15355);

(statearr_15391[(14)] = inst_15356);

return statearr_15391;
})();
if(cljs.core.truth_(inst_15353__$1)){
var statearr_15392_15479 = state_15373__$1;
(statearr_15392_15479[(1)] = (37));

} else {
var statearr_15393_15480 = state_15373__$1;
(statearr_15393_15480[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (29))){
var state_15373__$1 = state_15373;
var statearr_15394_15481 = state_15373__$1;
(statearr_15394_15481[(2)] = false);

(statearr_15394_15481[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (6))){
var inst_15276 = (state_15373[(10)]);
var inst_15281 = inst_15276.cljs$lang$protocol_mask$partition0$;
var inst_15282 = (inst_15281 & (64));
var inst_15283 = inst_15276.cljs$core$ISeq$;
var inst_15284 = (inst_15282) || (inst_15283);
var state_15373__$1 = state_15373;
if(cljs.core.truth_(inst_15284)){
var statearr_15395_15482 = state_15373__$1;
(statearr_15395_15482[(1)] = (9));

} else {
var statearr_15396_15483 = state_15373__$1;
(statearr_15396_15483[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (28))){
var inst_15332 = (state_15373[(7)]);
var inst_15337 = inst_15332.cljs$lang$protocol_mask$partition0$;
var inst_15338 = (inst_15337 & (64));
var inst_15339 = inst_15332.cljs$core$ISeq$;
var inst_15340 = (inst_15338) || (inst_15339);
var state_15373__$1 = state_15373;
if(cljs.core.truth_(inst_15340)){
var statearr_15397_15484 = state_15373__$1;
(statearr_15397_15484[(1)] = (31));

} else {
var statearr_15398_15485 = state_15373__$1;
(statearr_15398_15485[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (25))){
var inst_15305 = (state_15373[(8)]);
var state_15373__$1 = state_15373;
var statearr_15399_15486 = state_15373__$1;
(statearr_15399_15486[(2)] = inst_15305);

(statearr_15399_15486[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (34))){
var inst_15332 = (state_15373[(7)]);
var inst_15349 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15332);
var state_15373__$1 = state_15373;
var statearr_15400_15487 = state_15373__$1;
(statearr_15400_15487[(2)] = inst_15349);

(statearr_15400_15487[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (17))){
var inst_15368 = (state_15373[(2)]);
var state_15373__$1 = (function (){var statearr_15401 = state_15373;
(statearr_15401[(15)] = inst_15368);

return statearr_15401;
})();
var statearr_15402_15488 = state_15373__$1;
(statearr_15402_15488[(2)] = null);

(statearr_15402_15488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (3))){
var inst_15371 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15373__$1,inst_15371);
} else {
if((state_val_15374 === (12))){
var inst_15276 = (state_15373[(10)]);
var inst_15293 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15276);
var state_15373__$1 = state_15373;
var statearr_15403_15489 = state_15373__$1;
(statearr_15403_15489[(2)] = inst_15293);

(statearr_15403_15489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (2))){
var state_15373__$1 = state_15373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15373__$1,(4),routing);
} else {
if((state_val_15374 === (23))){
var inst_15317 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
var statearr_15404_15490 = state_15373__$1;
(statearr_15404_15490[(2)] = inst_15317);

(statearr_15404_15490[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (35))){
var inst_15332 = (state_15373[(7)]);
var state_15373__$1 = state_15373;
var statearr_15405_15491 = state_15373__$1;
(statearr_15405_15491[(2)] = inst_15332);

(statearr_15405_15491[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (19))){
var state_15373__$1 = state_15373;
var statearr_15406_15492 = state_15373__$1;
(statearr_15406_15492[(2)] = false);

(statearr_15406_15492[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (11))){
var inst_15288 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
var statearr_15407_15493 = state_15373__$1;
(statearr_15407_15493[(2)] = inst_15288);

(statearr_15407_15493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (9))){
var state_15373__$1 = state_15373;
var statearr_15408_15494 = state_15373__$1;
(statearr_15408_15494[(2)] = true);

(statearr_15408_15494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (5))){
var inst_15276 = (state_15373[(10)]);
var inst_15276__$1 = (state_15373[(2)]);
var inst_15278 = (inst_15276__$1 == null);
var inst_15279 = cljs.core.not.call(null,inst_15278);
var state_15373__$1 = (function (){var statearr_15409 = state_15373;
(statearr_15409[(10)] = inst_15276__$1);

return statearr_15409;
})();
if(inst_15279){
var statearr_15410_15495 = state_15373__$1;
(statearr_15410_15495[(1)] = (6));

} else {
var statearr_15411_15496 = state_15373__$1;
(statearr_15411_15496[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (14))){
var inst_15297 = (state_15373[(9)]);
var inst_15296 = (state_15373[(2)]);
var inst_15297__$1 = cljs.core.get.call(null,inst_15296,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_15298 = cljs.core.get.call(null,inst_15296,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var inst_15299 = cljs.core.get.call(null,inst_15296,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var state_15373__$1 = (function (){var statearr_15412 = state_15373;
(statearr_15412[(16)] = inst_15299);

(statearr_15412[(9)] = inst_15297__$1);

(statearr_15412[(17)] = inst_15298);

return statearr_15412;
})();
if(cljs.core.truth_(inst_15297__$1)){
var statearr_15413_15497 = state_15373__$1;
(statearr_15413_15497[(1)] = (15));

} else {
var statearr_15414_15498 = state_15373__$1;
(statearr_15414_15498[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (26))){
var inst_15299 = (state_15373[(16)]);
var inst_15298 = (state_15373[(17)]);
var inst_15325 = (state_15373[(2)]);
var inst_15326 = cljs.core.get.call(null,inst_15325,new cljs.core.Keyword(null,"position","position",-2011731912));
var inst_15327 = [new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"longitude","longitude",-1268876372)];
var inst_15328 = [inst_15298,inst_15299];
var inst_15329 = cljs.core.PersistentHashMap.fromArrays(inst_15327,inst_15328);
var inst_15330 = ui.map.route.call(null,inst_15326,inst_15329);
var state_15373__$1 = state_15373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15373__$1,(27),inst_15330);
} else {
if((state_val_15374 === (16))){
var inst_15305 = (state_15373[(8)]);
var inst_15305__$1 = om.next.get_state.call(null,this$);
var inst_15307 = (inst_15305__$1 == null);
var inst_15308 = cljs.core.not.call(null,inst_15307);
var state_15373__$1 = (function (){var statearr_15415 = state_15373;
(statearr_15415[(8)] = inst_15305__$1);

return statearr_15415;
})();
if(inst_15308){
var statearr_15416_15499 = state_15373__$1;
(statearr_15416_15499[(1)] = (18));

} else {
var statearr_15417_15500 = state_15373__$1;
(statearr_15417_15500[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (38))){
var inst_15354 = (state_15373[(12)]);
var inst_15360 = L.PolylineUtil.decode(inst_15354,(6));
var inst_15361 = (new L.Polyline(inst_15360,{"color": "red", "weight": (4)}));
var inst_15362 = inst_15361.addTo(map);
var inst_15363 = inst_15361.getBounds();
var inst_15364 = map.fitBounds(inst_15363);
var state_15373__$1 = (function (){var statearr_15418 = state_15373;
(statearr_15418[(18)] = inst_15362);

return statearr_15418;
})();
var statearr_15419_15501 = state_15373__$1;
(statearr_15419_15501[(2)] = inst_15364);

(statearr_15419_15501[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (30))){
var inst_15347 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
if(cljs.core.truth_(inst_15347)){
var statearr_15420_15502 = state_15373__$1;
(statearr_15420_15502[(1)] = (34));

} else {
var statearr_15421_15503 = state_15373__$1;
(statearr_15421_15503[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (10))){
var state_15373__$1 = state_15373;
var statearr_15422_15504 = state_15373__$1;
(statearr_15422_15504[(2)] = false);

(statearr_15422_15504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (18))){
var inst_15305 = (state_15373[(8)]);
var inst_15310 = inst_15305.cljs$lang$protocol_mask$partition0$;
var inst_15311 = (inst_15310 & (64));
var inst_15312 = inst_15305.cljs$core$ISeq$;
var inst_15313 = (inst_15311) || (inst_15312);
var state_15373__$1 = state_15373;
if(cljs.core.truth_(inst_15313)){
var statearr_15423_15505 = state_15373__$1;
(statearr_15423_15505[(1)] = (21));

} else {
var statearr_15424_15506 = state_15373__$1;
(statearr_15424_15506[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (37))){
var inst_15353 = (state_15373[(11)]);
var inst_15358 = console.error(inst_15353);
var state_15373__$1 = state_15373;
var statearr_15425_15507 = state_15373__$1;
(statearr_15425_15507[(2)] = inst_15358);

(statearr_15425_15507[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (8))){
var inst_15291 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
if(cljs.core.truth_(inst_15291)){
var statearr_15426_15508 = state_15373__$1;
(statearr_15426_15508[(1)] = (12));

} else {
var statearr_15427_15509 = state_15373__$1;
(statearr_15427_15509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11673__auto__,map__15197,map__15197__$1,center,routing,map,this$,x15196_15442))
;
return ((function (switch__11561__auto__,c__11673__auto__,map__15197,map__15197__$1,center,routing,map,this$,x15196_15442){
return (function() {
var ui$map$state_machine__11562__auto__ = null;
var ui$map$state_machine__11562__auto____0 = (function (){
var statearr_15431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15431[(0)] = ui$map$state_machine__11562__auto__);

(statearr_15431[(1)] = (1));

return statearr_15431;
});
var ui$map$state_machine__11562__auto____1 = (function (state_15373){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_15373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e15432){if((e15432 instanceof Object)){
var ex__11565__auto__ = e15432;
var statearr_15433_15510 = state_15373;
(statearr_15433_15510[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15511 = state_15373;
state_15373 = G__15511;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
ui$map$state_machine__11562__auto__ = function(state_15373){
switch(arguments.length){
case 0:
return ui$map$state_machine__11562__auto____0.call(this);
case 1:
return ui$map$state_machine__11562__auto____1.call(this,state_15373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$state_machine__11562__auto____0;
ui$map$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$state_machine__11562__auto____1;
return ui$map$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto__,map__15197,map__15197__$1,center,routing,map,this$,x15196_15442))
})();
var state__11675__auto__ = (function (){var statearr_15434 = f__11674__auto__.call(null);
(statearr_15434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto__);

return statearr_15434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto__,map__15197,map__15197__$1,center,routing,map,this$,x15196_15442))
);

return c__11673__auto__;
});})(x15196_15442))
;

x15196_15442.render = ((function (x15196_15442){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_15435 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_15436 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_15437 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_15438 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_15439 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "map"});
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_15439;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_15438;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_15437;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_15436;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_15435;
}});})(x15196_15442))
;


ui.map.MapView.prototype.constructor = ui.map.MapView;

ui.map.MapView.prototype.om$isComponent = true;

var x15440_15512 = ui.map.MapView;


var x15441_15513 = ui.map.MapView.prototype;


ui.map.MapView.cljs$lang$type = true;

ui.map.MapView.cljs$lang$ctorStr = "ui.map/MapView";

ui.map.MapView.cljs$lang$ctorPrWriter = (function (this__14509__auto__,writer__14510__auto__,opt__14511__auto__){
return cljs.core._write.call(null,writer__14510__auto__,"ui.map/MapView");
});
ui.map.view = om.next.factory.call(null,ui.map.MapView);

//# sourceMappingURL=map.js.map