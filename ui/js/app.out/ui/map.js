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

ui.map.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5784__auto__,k20571,else__5785__auto__){
var self__ = this;
var this__5784__auto____$1 = this;
var G__20573 = (((k20571 instanceof cljs.core.Keyword))?k20571.fqn:null);
switch (G__20573) {
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
return cljs.core.get.call(null,self__.__extmap,k20571,else__5785__auto__);

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

ui.map.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20570){
var self__ = this;
var G__20570__$1 = this;
return (new cljs.core.RecordIter((0),G__20570__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"distance","distance",-1671893894)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

ui.map.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5789__auto__,k__5790__auto__,G__20570){
var self__ = this;
var this__5789__auto____$1 = this;
var pred__20574 = cljs.core.keyword_identical_QMARK_;
var expr__20575 = k__5790__auto__;
if(cljs.core.truth_(pred__20574.call(null,new cljs.core.Keyword(null,"geometry","geometry",-405034994),expr__20575))){
return (new ui.map.Route(G__20570,self__.time,self__.distance,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20574.call(null,new cljs.core.Keyword(null,"time","time",1385887882),expr__20575))){
return (new ui.map.Route(self__.geometry,G__20570,self__.distance,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20574.call(null,new cljs.core.Keyword(null,"distance","distance",-1671893894),expr__20575))){
return (new ui.map.Route(self__.geometry,self__.time,G__20570,self__.__meta,self__.__extmap,null));
} else {
return (new ui.map.Route(self__.geometry,self__.time,self__.distance,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5790__auto__,G__20570),null));
}
}
}
});

ui.map.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5794__auto__){
var self__ = this;
var this__5794__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"geometry","geometry",-405034994),self__.geometry],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time","time",1385887882),self__.time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"distance","distance",-1671893894),self__.distance],null))], null),self__.__extmap));
});

ui.map.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5781__auto__,G__20570){
var self__ = this;
var this__5781__auto____$1 = this;
return (new ui.map.Route(self__.geometry,self__.time,self__.distance,G__20570,self__.__extmap,self__.__hash));
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

ui.map.map__GT_Route = (function ui$map$map__GT_Route(G__20572){
return (new ui.map.Route(new cljs.core.Keyword(null,"geometry","geometry",-405034994).cljs$core$IFn$_invoke$arity$1(G__20572),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(G__20572),new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(G__20572),null,cljs.core.dissoc.call(null,G__20572,new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"distance","distance",-1671893894)),null));
});

ui.map.routing_endpoint = "http://router.project-osrm.org/viaroute";
ui.map.geocoding_endpoint = "http://nominatim.openstreetmap.org/search?format=json&q=";
ui.map.geocode = (function ui$map$geocode(place){
var resp = cljs.core.async.chan.call(null);
ajax.core.GET.call(null,[cljs.core.str(ui.map.geocoding_endpoint),cljs.core.str(place)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (resp){
return (function (error){
var c__9157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto__,resp){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto__,resp){
return (function (state_20634){
var state_val_20635 = (state_20634[(1)]);
if((state_val_20635 === (1))){
var inst_20628 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_20629 = [error];
var inst_20630 = cljs.core.PersistentHashMap.fromArrays(inst_20628,inst_20629);
var state_20634__$1 = state_20634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20634__$1,(2),resp,inst_20630);
} else {
if((state_val_20635 === (2))){
var inst_20632 = (state_20634[(2)]);
var state_20634__$1 = state_20634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20634__$1,inst_20632);
} else {
return null;
}
}
});})(c__9157__auto__,resp))
;
return ((function (switch__9045__auto__,c__9157__auto__,resp){
return (function() {
var ui$map$geocode_$_state_machine__9046__auto__ = null;
var ui$map$geocode_$_state_machine__9046__auto____0 = (function (){
var statearr_20639 = [null,null,null,null,null,null,null];
(statearr_20639[(0)] = ui$map$geocode_$_state_machine__9046__auto__);

(statearr_20639[(1)] = (1));

return statearr_20639;
});
var ui$map$geocode_$_state_machine__9046__auto____1 = (function (state_20634){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_20634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e20640){if((e20640 instanceof Object)){
var ex__9049__auto__ = e20640;
var statearr_20641_20678 = state_20634;
(statearr_20641_20678[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20679 = state_20634;
state_20634 = G__20679;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
ui$map$geocode_$_state_machine__9046__auto__ = function(state_20634){
switch(arguments.length){
case 0:
return ui$map$geocode_$_state_machine__9046__auto____0.call(this);
case 1:
return ui$map$geocode_$_state_machine__9046__auto____1.call(this,state_20634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$geocode_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$geocode_$_state_machine__9046__auto____0;
ui$map$geocode_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$geocode_$_state_machine__9046__auto____1;
return ui$map$geocode_$_state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto__,resp))
})();
var state__9159__auto__ = (function (){var statearr_20642 = f__9158__auto__.call(null);
(statearr_20642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto__);

return statearr_20642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto__,resp))
);

return c__9157__auto__;
});})(resp))
,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (resp){
return (function (data){
var temp__4423__auto__ = cljs.core.first.call(null,data);
if(cljs.core.truth_(temp__4423__auto__)){
var map__20643 = temp__4423__auto__;
var map__20643__$1 = ((((!((map__20643 == null)))?((((map__20643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20643):map__20643);
var lon = cljs.core.get.call(null,map__20643__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var lat = cljs.core.get.call(null,map__20643__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var c__9157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto__,map__20643,map__20643__$1,lon,lat,temp__4423__auto__,resp){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto__,map__20643,map__20643__$1,lon,lat,temp__4423__auto__,resp){
return (function (state_20653){
var state_val_20654 = (state_20653[(1)]);
if((state_val_20654 === (1))){
var inst_20645 = [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"latitude","latitude",394867543)];
var inst_20646 = parseFloat(lon);
var inst_20647 = parseFloat(lat);
var inst_20648 = [inst_20646,inst_20647];
var inst_20649 = cljs.core.PersistentHashMap.fromArrays(inst_20645,inst_20648);
var state_20653__$1 = state_20653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20653__$1,(2),resp,inst_20649);
} else {
if((state_val_20654 === (2))){
var inst_20651 = (state_20653[(2)]);
var state_20653__$1 = state_20653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20653__$1,inst_20651);
} else {
return null;
}
}
});})(c__9157__auto__,map__20643,map__20643__$1,lon,lat,temp__4423__auto__,resp))
;
return ((function (switch__9045__auto__,c__9157__auto__,map__20643,map__20643__$1,lon,lat,temp__4423__auto__,resp){
return (function() {
var ui$map$geocode_$_state_machine__9046__auto__ = null;
var ui$map$geocode_$_state_machine__9046__auto____0 = (function (){
var statearr_20658 = [null,null,null,null,null,null,null];
(statearr_20658[(0)] = ui$map$geocode_$_state_machine__9046__auto__);

(statearr_20658[(1)] = (1));

return statearr_20658;
});
var ui$map$geocode_$_state_machine__9046__auto____1 = (function (state_20653){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_20653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e20659){if((e20659 instanceof Object)){
var ex__9049__auto__ = e20659;
var statearr_20660_20680 = state_20653;
(statearr_20660_20680[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20681 = state_20653;
state_20653 = G__20681;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
ui$map$geocode_$_state_machine__9046__auto__ = function(state_20653){
switch(arguments.length){
case 0:
return ui$map$geocode_$_state_machine__9046__auto____0.call(this);
case 1:
return ui$map$geocode_$_state_machine__9046__auto____1.call(this,state_20653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$geocode_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$geocode_$_state_machine__9046__auto____0;
ui$map$geocode_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$geocode_$_state_machine__9046__auto____1;
return ui$map$geocode_$_state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto__,map__20643,map__20643__$1,lon,lat,temp__4423__auto__,resp))
})();
var state__9159__auto__ = (function (){var statearr_20661 = f__9158__auto__.call(null);
(statearr_20661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto__);

return statearr_20661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto__,map__20643,map__20643__$1,lon,lat,temp__4423__auto__,resp))
);

return c__9157__auto__;
} else {
var c__9157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto__,temp__4423__auto__,resp){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto__,temp__4423__auto__,resp){
return (function (state_20669){
var state_val_20670 = (state_20669[(1)]);
if((state_val_20670 === (1))){
var inst_20662 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_20663 = [cljs.core.str("Location "),cljs.core.str(place),cljs.core.str(" not found")].join('');
var inst_20664 = [inst_20663];
var inst_20665 = cljs.core.PersistentHashMap.fromArrays(inst_20662,inst_20664);
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20669__$1,(2),resp,inst_20665);
} else {
if((state_val_20670 === (2))){
var inst_20667 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20669__$1,inst_20667);
} else {
return null;
}
}
});})(c__9157__auto__,temp__4423__auto__,resp))
;
return ((function (switch__9045__auto__,c__9157__auto__,temp__4423__auto__,resp){
return (function() {
var ui$map$geocode_$_state_machine__9046__auto__ = null;
var ui$map$geocode_$_state_machine__9046__auto____0 = (function (){
var statearr_20674 = [null,null,null,null,null,null,null];
(statearr_20674[(0)] = ui$map$geocode_$_state_machine__9046__auto__);

(statearr_20674[(1)] = (1));

return statearr_20674;
});
var ui$map$geocode_$_state_machine__9046__auto____1 = (function (state_20669){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_20669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e20675){if((e20675 instanceof Object)){
var ex__9049__auto__ = e20675;
var statearr_20676_20682 = state_20669;
(statearr_20676_20682[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20683 = state_20669;
state_20669 = G__20683;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
ui$map$geocode_$_state_machine__9046__auto__ = function(state_20669){
switch(arguments.length){
case 0:
return ui$map$geocode_$_state_machine__9046__auto____0.call(this);
case 1:
return ui$map$geocode_$_state_machine__9046__auto____1.call(this,state_20669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$geocode_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$geocode_$_state_machine__9046__auto____0;
ui$map$geocode_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$geocode_$_state_machine__9046__auto____1;
return ui$map$geocode_$_state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto__,temp__4423__auto__,resp))
})();
var state__9159__auto__ = (function (){var statearr_20677 = f__9158__auto__.call(null);
(statearr_20677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto__);

return statearr_20677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto__,temp__4423__auto__,resp))
);

return c__9157__auto__;
}
});})(resp))
], null));

return resp;
});
ui.map.route = (function ui$map$route(from,to){
var resp = cljs.core.async.chan.call(null);
ajax.core.GET.call(null,cljs.core.apply.call(null,cljs.core.str,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.map.routing_endpoint,"?loc=",new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(from),",",new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(from),"&loc=",new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(to),",",new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(to)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (resp){
return (function (error){
var c__9157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto__,resp){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto__,resp){
return (function (state_20735){
var state_val_20736 = (state_20735[(1)]);
if((state_val_20736 === (1))){
var inst_20729 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_20730 = [error];
var inst_20731 = cljs.core.PersistentHashMap.fromArrays(inst_20729,inst_20730);
var state_20735__$1 = state_20735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20735__$1,(2),resp,inst_20731);
} else {
if((state_val_20736 === (2))){
var inst_20733 = (state_20735[(2)]);
var state_20735__$1 = state_20735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20735__$1,inst_20733);
} else {
return null;
}
}
});})(c__9157__auto__,resp))
;
return ((function (switch__9045__auto__,c__9157__auto__,resp){
return (function() {
var ui$map$route_$_state_machine__9046__auto__ = null;
var ui$map$route_$_state_machine__9046__auto____0 = (function (){
var statearr_20740 = [null,null,null,null,null,null,null];
(statearr_20740[(0)] = ui$map$route_$_state_machine__9046__auto__);

(statearr_20740[(1)] = (1));

return statearr_20740;
});
var ui$map$route_$_state_machine__9046__auto____1 = (function (state_20735){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_20735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e20741){if((e20741 instanceof Object)){
var ex__9049__auto__ = e20741;
var statearr_20742_20774 = state_20735;
(statearr_20742_20774[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20775 = state_20735;
state_20735 = G__20775;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
ui$map$route_$_state_machine__9046__auto__ = function(state_20735){
switch(arguments.length){
case 0:
return ui$map$route_$_state_machine__9046__auto____0.call(this);
case 1:
return ui$map$route_$_state_machine__9046__auto____1.call(this,state_20735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$route_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$route_$_state_machine__9046__auto____0;
ui$map$route_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$route_$_state_machine__9046__auto____1;
return ui$map$route_$_state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto__,resp))
})();
var state__9159__auto__ = (function (){var statearr_20743 = f__9158__auto__.call(null);
(statearr_20743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto__);

return statearr_20743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto__,resp))
);

return c__9157__auto__;
});})(resp))
,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (resp){
return (function (data){
var temp__4423__auto__ = new cljs.core.Keyword(null,"route_summary","route_summary",-1991848495).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__4423__auto__)){
var summary = temp__4423__auto__;
var geometry = new cljs.core.Keyword(null,"route_geometry","route_geometry",-458180234).cljs$core$IFn$_invoke$arity$1(data);
var map__20744 = summary;
var map__20744__$1 = ((((!((map__20744 == null)))?((((map__20744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20744):map__20744);
var total_time = cljs.core.get.call(null,map__20744__$1,new cljs.core.Keyword(null,"total_time","total_time",1010495910));
var total_distance = cljs.core.get.call(null,map__20744__$1,new cljs.core.Keyword(null,"total_distance","total_distance",-1615601506));
var c__9157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto__,geometry,map__20744,map__20744__$1,total_time,total_distance,summary,temp__4423__auto__,resp){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto__,geometry,map__20744,map__20744__$1,total_time,total_distance,summary,temp__4423__auto__,resp){
return (function (state_20750){
var state_val_20751 = (state_20750[(1)]);
if((state_val_20751 === (1))){
var inst_20746 = ui.map.__GT_Route.call(null,geometry,total_time,total_distance);
var state_20750__$1 = state_20750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20750__$1,(2),resp,inst_20746);
} else {
if((state_val_20751 === (2))){
var inst_20748 = (state_20750[(2)]);
var state_20750__$1 = state_20750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20750__$1,inst_20748);
} else {
return null;
}
}
});})(c__9157__auto__,geometry,map__20744,map__20744__$1,total_time,total_distance,summary,temp__4423__auto__,resp))
;
return ((function (switch__9045__auto__,c__9157__auto__,geometry,map__20744,map__20744__$1,total_time,total_distance,summary,temp__4423__auto__,resp){
return (function() {
var ui$map$route_$_state_machine__9046__auto__ = null;
var ui$map$route_$_state_machine__9046__auto____0 = (function (){
var statearr_20755 = [null,null,null,null,null,null,null];
(statearr_20755[(0)] = ui$map$route_$_state_machine__9046__auto__);

(statearr_20755[(1)] = (1));

return statearr_20755;
});
var ui$map$route_$_state_machine__9046__auto____1 = (function (state_20750){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_20750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e20756){if((e20756 instanceof Object)){
var ex__9049__auto__ = e20756;
var statearr_20757_20776 = state_20750;
(statearr_20757_20776[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20777 = state_20750;
state_20750 = G__20777;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
ui$map$route_$_state_machine__9046__auto__ = function(state_20750){
switch(arguments.length){
case 0:
return ui$map$route_$_state_machine__9046__auto____0.call(this);
case 1:
return ui$map$route_$_state_machine__9046__auto____1.call(this,state_20750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$route_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$route_$_state_machine__9046__auto____0;
ui$map$route_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$route_$_state_machine__9046__auto____1;
return ui$map$route_$_state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto__,geometry,map__20744,map__20744__$1,total_time,total_distance,summary,temp__4423__auto__,resp))
})();
var state__9159__auto__ = (function (){var statearr_20758 = f__9158__auto__.call(null);
(statearr_20758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto__);

return statearr_20758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto__,geometry,map__20744,map__20744__$1,total_time,total_distance,summary,temp__4423__auto__,resp))
);

return c__9157__auto__;
} else {
var c__9157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto__,temp__4423__auto__,resp){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto__,temp__4423__auto__,resp){
return (function (state_20765){
var state_val_20766 = (state_20765[(1)]);
if((state_val_20766 === (1))){
var inst_20759 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_20760 = ["Couldn't find a route."];
var inst_20761 = cljs.core.PersistentHashMap.fromArrays(inst_20759,inst_20760);
var state_20765__$1 = state_20765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20765__$1,(2),resp,inst_20761);
} else {
if((state_val_20766 === (2))){
var inst_20763 = (state_20765[(2)]);
var state_20765__$1 = state_20765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20765__$1,inst_20763);
} else {
return null;
}
}
});})(c__9157__auto__,temp__4423__auto__,resp))
;
return ((function (switch__9045__auto__,c__9157__auto__,temp__4423__auto__,resp){
return (function() {
var ui$map$route_$_state_machine__9046__auto__ = null;
var ui$map$route_$_state_machine__9046__auto____0 = (function (){
var statearr_20770 = [null,null,null,null,null,null,null];
(statearr_20770[(0)] = ui$map$route_$_state_machine__9046__auto__);

(statearr_20770[(1)] = (1));

return statearr_20770;
});
var ui$map$route_$_state_machine__9046__auto____1 = (function (state_20765){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_20765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e20771){if((e20771 instanceof Object)){
var ex__9049__auto__ = e20771;
var statearr_20772_20778 = state_20765;
(statearr_20772_20778[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20779 = state_20765;
state_20765 = G__20779;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
ui$map$route_$_state_machine__9046__auto__ = function(state_20765){
switch(arguments.length){
case 0:
return ui$map$route_$_state_machine__9046__auto____0.call(this);
case 1:
return ui$map$route_$_state_machine__9046__auto____1.call(this,state_20765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$route_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$route_$_state_machine__9046__auto____0;
ui$map$route_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$route_$_state_machine__9046__auto____1;
return ui$map$route_$_state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto__,temp__4423__auto__,resp))
})();
var state__9159__auto__ = (function (){var statearr_20773 = f__9158__auto__.call(null);
(statearr_20773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto__);

return statearr_20773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto__,temp__4423__auto__,resp))
);

return c__9157__auto__;
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

return map;
});
/**
 * @constructor
 */
ui.map.MapView = (function ui$map$MapView(){
var this__12945__auto__ = this;
React.Component.apply(this__12945__auto__,arguments);

if(!((this__12945__auto__.initLocalState == null))){
this__12945__auto__.state = this__12945__auto__.initLocalState();
} else {
this__12945__auto__.state = {};
}

return this__12945__auto__;
});

ui.map.MapView.prototype = goog.object.clone(React.Component.prototype);

var x20784_21030 = ui.map.MapView.prototype;
x20784_21030.componentWillUpdate = ((function (x20784_21030){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__12885__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12885__auto__);
});})(x20784_21030))
;

x20784_21030.shouldComponentUpdate = ((function (x20784_21030){
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
});})(x20784_21030))
;

x20784_21030.componentWillUnmount = ((function (x20784_21030){
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
});})(x20784_21030))
;

x20784_21030.componentDidUpdate = ((function (x20784_21030){
return (function (prev_props__12888__auto__,prev_state__12889__auto__){
var this__12885__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12885__auto__);
});})(x20784_21030))
;

x20784_21030.isMounted = ((function (x20784_21030){
return (function (){
var this__12885__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12885__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20784_21030))
;

x20784_21030.componentWillMount = ((function (x20784_21030){
return (function (){
var this__12885__auto__ = this;
var indexer__12890__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12885__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x20784_21030))
;

x20784_21030.componentDidMount = ((function (x20784_21030){
return (function (){
var this$ = this;
om.next.set_state_BANG_.call(null,this$,cljs.core.PersistentArrayMap.EMPTY);

var map = ui.map.new_map.call(null);
var map__20785 = om.next.props.call(null,this$);
var map__20785__$1 = ((((!((map__20785 == null)))?((((map__20785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20785):map__20785);
var center = cljs.core.get.call(null,map__20785__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var routing = cljs.core.get.call(null,map__20785__$1,new cljs.core.Keyword(null,"routing","routing",1440253662));
var c__9157__auto___21031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___21031,map__20785,map__20785__$1,center,routing,map,this$,x20784_21030){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___21031,map__20785,map__20785__$1,center,routing,map,this$,x20784_21030){
return (function (state_20828){
var state_val_20829 = (state_20828[(1)]);
if((state_val_20829 === (7))){
var inst_20805 = (state_20828[(2)]);
var state_20828__$1 = state_20828;
if(cljs.core.truth_(inst_20805)){
var statearr_20830_21032 = state_20828__$1;
(statearr_20830_21032[(1)] = (11));

} else {
var statearr_20831_21033 = state_20828__$1;
(statearr_20831_21033[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (1))){
var state_20828__$1 = state_20828;
var statearr_20832_21034 = state_20828__$1;
(statearr_20832_21034[(2)] = null);

(statearr_20832_21034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (4))){
var inst_20790 = (state_20828[(7)]);
var inst_20790__$1 = (state_20828[(2)]);
var inst_20792 = (inst_20790__$1 == null);
var inst_20793 = cljs.core.not.call(null,inst_20792);
var state_20828__$1 = (function (){var statearr_20833 = state_20828;
(statearr_20833[(7)] = inst_20790__$1);

return statearr_20833;
})();
if(inst_20793){
var statearr_20834_21035 = state_20828__$1;
(statearr_20834_21035[(1)] = (5));

} else {
var statearr_20835_21036 = state_20828__$1;
(statearr_20835_21036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (15))){
var state_20828__$1 = state_20828;
var statearr_20836_21037 = state_20828__$1;
(statearr_20836_21037[(2)] = (13));

(statearr_20836_21037[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (13))){
var inst_20818 = (state_20828[(8)]);
var inst_20810 = (state_20828[(2)]);
var inst_20811 = cljs.core.get.call(null,inst_20810,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var inst_20812 = cljs.core.get.call(null,inst_20810,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var inst_20813 = om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),inst_20810);
var inst_20814 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20815 = [inst_20811,inst_20812];
var inst_20816 = (new cljs.core.PersistentVector(null,2,(5),inst_20814,inst_20815,null));
var inst_20817 = cljs.core.clj__GT_js.call(null,inst_20816);
var inst_20818__$1 = map.getZoom();
var state_20828__$1 = (function (){var statearr_20837 = state_20828;
(statearr_20837[(8)] = inst_20818__$1);

(statearr_20837[(9)] = inst_20817);

(statearr_20837[(10)] = inst_20813);

return statearr_20837;
})();
if(cljs.core.truth_(inst_20818__$1)){
var statearr_20838_21038 = state_20828__$1;
(statearr_20838_21038[(1)] = (14));

} else {
var statearr_20839_21039 = state_20828__$1;
(statearr_20839_21039[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (6))){
var state_20828__$1 = state_20828;
var statearr_20840_21040 = state_20828__$1;
(statearr_20840_21040[(2)] = false);

(statearr_20840_21040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (3))){
var inst_20826 = (state_20828[(2)]);
var state_20828__$1 = state_20828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20828__$1,inst_20826);
} else {
if((state_val_20829 === (12))){
var inst_20790 = (state_20828[(7)]);
var state_20828__$1 = state_20828;
var statearr_20841_21041 = state_20828__$1;
(statearr_20841_21041[(2)] = inst_20790);

(statearr_20841_21041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (2))){
var state_20828__$1 = state_20828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20828__$1,(4),center);
} else {
if((state_val_20829 === (11))){
var inst_20790 = (state_20828[(7)]);
var inst_20807 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20790);
var state_20828__$1 = state_20828;
var statearr_20842_21042 = state_20828__$1;
(statearr_20842_21042[(2)] = inst_20807);

(statearr_20842_21042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (9))){
var state_20828__$1 = state_20828;
var statearr_20843_21043 = state_20828__$1;
(statearr_20843_21043[(2)] = false);

(statearr_20843_21043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (5))){
var inst_20790 = (state_20828[(7)]);
var inst_20795 = inst_20790.cljs$lang$protocol_mask$partition0$;
var inst_20796 = (inst_20795 & (64));
var inst_20797 = inst_20790.cljs$core$ISeq$;
var inst_20798 = (inst_20796) || (inst_20797);
var state_20828__$1 = state_20828;
if(cljs.core.truth_(inst_20798)){
var statearr_20844_21044 = state_20828__$1;
(statearr_20844_21044[(1)] = (8));

} else {
var statearr_20845_21045 = state_20828__$1;
(statearr_20845_21045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (14))){
var inst_20818 = (state_20828[(8)]);
var state_20828__$1 = state_20828;
var statearr_20846_21046 = state_20828__$1;
(statearr_20846_21046[(2)] = inst_20818);

(statearr_20846_21046[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (16))){
var inst_20817 = (state_20828[(9)]);
var inst_20822 = (state_20828[(2)]);
var inst_20823 = map.setView(inst_20817,inst_20822);
var state_20828__$1 = (function (){var statearr_20847 = state_20828;
(statearr_20847[(11)] = inst_20823);

return statearr_20847;
})();
var statearr_20848_21047 = state_20828__$1;
(statearr_20848_21047[(2)] = null);

(statearr_20848_21047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (10))){
var inst_20802 = (state_20828[(2)]);
var state_20828__$1 = state_20828;
var statearr_20849_21048 = state_20828__$1;
(statearr_20849_21048[(2)] = inst_20802);

(statearr_20849_21048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20829 === (8))){
var state_20828__$1 = state_20828;
var statearr_20850_21049 = state_20828__$1;
(statearr_20850_21049[(2)] = true);

(statearr_20850_21049[(1)] = (10));


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
});})(c__9157__auto___21031,map__20785,map__20785__$1,center,routing,map,this$,x20784_21030))
;
return ((function (switch__9045__auto__,c__9157__auto___21031,map__20785,map__20785__$1,center,routing,map,this$,x20784_21030){
return (function() {
var ui$map$state_machine__9046__auto__ = null;
var ui$map$state_machine__9046__auto____0 = (function (){
var statearr_20854 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20854[(0)] = ui$map$state_machine__9046__auto__);

(statearr_20854[(1)] = (1));

return statearr_20854;
});
var ui$map$state_machine__9046__auto____1 = (function (state_20828){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_20828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e20855){if((e20855 instanceof Object)){
var ex__9049__auto__ = e20855;
var statearr_20856_21050 = state_20828;
(statearr_20856_21050[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21051 = state_20828;
state_20828 = G__21051;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
ui$map$state_machine__9046__auto__ = function(state_20828){
switch(arguments.length){
case 0:
return ui$map$state_machine__9046__auto____0.call(this);
case 1:
return ui$map$state_machine__9046__auto____1.call(this,state_20828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$state_machine__9046__auto____0;
ui$map$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$state_machine__9046__auto____1;
return ui$map$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___21031,map__20785,map__20785__$1,center,routing,map,this$,x20784_21030))
})();
var state__9159__auto__ = (function (){var statearr_20857 = f__9158__auto__.call(null);
(statearr_20857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___21031);

return statearr_20857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___21031,map__20785,map__20785__$1,center,routing,map,this$,x20784_21030))
);


var c__9157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto__,map__20785,map__20785__$1,center,routing,map,this$,x20784_21030){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto__,map__20785,map__20785__$1,center,routing,map,this$,x20784_21030){
return (function (state_20961){
var state_val_20962 = (state_20961[(1)]);
if((state_val_20962 === (7))){
var state_20961__$1 = state_20961;
var statearr_20963_21052 = state_20961__$1;
(statearr_20963_21052[(2)] = false);

(statearr_20963_21052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (20))){
var inst_20908 = (state_20961[(2)]);
var state_20961__$1 = state_20961;
if(cljs.core.truth_(inst_20908)){
var statearr_20964_21053 = state_20961__$1;
(statearr_20964_21053[(1)] = (24));

} else {
var statearr_20965_21054 = state_20961__$1;
(statearr_20965_21054[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (27))){
var inst_20920 = (state_20961[(7)]);
var inst_20920__$1 = (state_20961[(2)]);
var inst_20922 = (inst_20920__$1 == null);
var inst_20923 = cljs.core.not.call(null,inst_20922);
var state_20961__$1 = (function (){var statearr_20966 = state_20961;
(statearr_20966[(7)] = inst_20920__$1);

return statearr_20966;
})();
if(inst_20923){
var statearr_20967_21055 = state_20961__$1;
(statearr_20967_21055[(1)] = (28));

} else {
var statearr_20968_21056 = state_20961__$1;
(statearr_20968_21056[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (1))){
var state_20961__$1 = state_20961;
var statearr_20969_21057 = state_20961__$1;
(statearr_20969_21057[(2)] = null);

(statearr_20969_21057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (24))){
var inst_20893 = (state_20961[(8)]);
var inst_20910 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20893);
var state_20961__$1 = state_20961;
var statearr_20970_21058 = state_20961__$1;
(statearr_20970_21058[(2)] = inst_20910);

(statearr_20970_21058[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (39))){
var inst_20954 = (state_20961[(2)]);
var state_20961__$1 = state_20961;
var statearr_20971_21059 = state_20961__$1;
(statearr_20971_21059[(2)] = inst_20954);

(statearr_20971_21059[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (4))){
var inst_20861 = (state_20961[(2)]);
var inst_20862 = ui.map.geocode.call(null,inst_20861);
var state_20961__$1 = state_20961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20961__$1,(5),inst_20862);
} else {
if((state_val_20962 === (15))){
var inst_20885 = (state_20961[(9)]);
var inst_20889 = console.error(inst_20885);
var state_20961__$1 = state_20961;
var statearr_20972_21060 = state_20961__$1;
(statearr_20972_21060[(2)] = inst_20889);

(statearr_20972_21060[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (21))){
var state_20961__$1 = state_20961;
var statearr_20973_21061 = state_20961__$1;
(statearr_20973_21061[(2)] = true);

(statearr_20973_21061[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (31))){
var state_20961__$1 = state_20961;
var statearr_20974_21062 = state_20961__$1;
(statearr_20974_21062[(2)] = true);

(statearr_20974_21062[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (32))){
var state_20961__$1 = state_20961;
var statearr_20975_21063 = state_20961__$1;
(statearr_20975_21063[(2)] = false);

(statearr_20975_21063[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (33))){
var inst_20932 = (state_20961[(2)]);
var state_20961__$1 = state_20961;
var statearr_20976_21064 = state_20961__$1;
(statearr_20976_21064[(2)] = inst_20932);

(statearr_20976_21064[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (13))){
var inst_20864 = (state_20961[(10)]);
var state_20961__$1 = state_20961;
var statearr_20977_21065 = state_20961__$1;
(statearr_20977_21065[(2)] = inst_20864);

(statearr_20977_21065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (22))){
var state_20961__$1 = state_20961;
var statearr_20978_21066 = state_20961__$1;
(statearr_20978_21066[(2)] = false);

(statearr_20978_21066[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (36))){
var inst_20941 = (state_20961[(11)]);
var inst_20940 = (state_20961[(2)]);
var inst_20941__$1 = cljs.core.get.call(null,inst_20940,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_20942 = cljs.core.get.call(null,inst_20940,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
var inst_20943 = cljs.core.get.call(null,inst_20940,new cljs.core.Keyword(null,"time","time",1385887882));
var inst_20944 = cljs.core.get.call(null,inst_20940,new cljs.core.Keyword(null,"distance","distance",-1671893894));
var state_20961__$1 = (function (){var statearr_20979 = state_20961;
(statearr_20979[(11)] = inst_20941__$1);

(statearr_20979[(12)] = inst_20942);

(statearr_20979[(13)] = inst_20944);

(statearr_20979[(14)] = inst_20943);

return statearr_20979;
})();
if(cljs.core.truth_(inst_20941__$1)){
var statearr_20980_21067 = state_20961__$1;
(statearr_20980_21067[(1)] = (37));

} else {
var statearr_20981_21068 = state_20961__$1;
(statearr_20981_21068[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (29))){
var state_20961__$1 = state_20961;
var statearr_20982_21069 = state_20961__$1;
(statearr_20982_21069[(2)] = false);

(statearr_20982_21069[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (6))){
var inst_20864 = (state_20961[(10)]);
var inst_20869 = inst_20864.cljs$lang$protocol_mask$partition0$;
var inst_20870 = (inst_20869 & (64));
var inst_20871 = inst_20864.cljs$core$ISeq$;
var inst_20872 = (inst_20870) || (inst_20871);
var state_20961__$1 = state_20961;
if(cljs.core.truth_(inst_20872)){
var statearr_20983_21070 = state_20961__$1;
(statearr_20983_21070[(1)] = (9));

} else {
var statearr_20984_21071 = state_20961__$1;
(statearr_20984_21071[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (28))){
var inst_20920 = (state_20961[(7)]);
var inst_20925 = inst_20920.cljs$lang$protocol_mask$partition0$;
var inst_20926 = (inst_20925 & (64));
var inst_20927 = inst_20920.cljs$core$ISeq$;
var inst_20928 = (inst_20926) || (inst_20927);
var state_20961__$1 = state_20961;
if(cljs.core.truth_(inst_20928)){
var statearr_20985_21072 = state_20961__$1;
(statearr_20985_21072[(1)] = (31));

} else {
var statearr_20986_21073 = state_20961__$1;
(statearr_20986_21073[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (25))){
var inst_20893 = (state_20961[(8)]);
var state_20961__$1 = state_20961;
var statearr_20987_21074 = state_20961__$1;
(statearr_20987_21074[(2)] = inst_20893);

(statearr_20987_21074[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (34))){
var inst_20920 = (state_20961[(7)]);
var inst_20937 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20920);
var state_20961__$1 = state_20961;
var statearr_20988_21075 = state_20961__$1;
(statearr_20988_21075[(2)] = inst_20937);

(statearr_20988_21075[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (17))){
var inst_20956 = (state_20961[(2)]);
var state_20961__$1 = (function (){var statearr_20989 = state_20961;
(statearr_20989[(15)] = inst_20956);

return statearr_20989;
})();
var statearr_20990_21076 = state_20961__$1;
(statearr_20990_21076[(2)] = null);

(statearr_20990_21076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (3))){
var inst_20959 = (state_20961[(2)]);
var state_20961__$1 = state_20961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20961__$1,inst_20959);
} else {
if((state_val_20962 === (12))){
var inst_20864 = (state_20961[(10)]);
var inst_20881 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20864);
var state_20961__$1 = state_20961;
var statearr_20991_21077 = state_20961__$1;
(statearr_20991_21077[(2)] = inst_20881);

(statearr_20991_21077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (2))){
var state_20961__$1 = state_20961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20961__$1,(4),routing);
} else {
if((state_val_20962 === (23))){
var inst_20905 = (state_20961[(2)]);
var state_20961__$1 = state_20961;
var statearr_20992_21078 = state_20961__$1;
(statearr_20992_21078[(2)] = inst_20905);

(statearr_20992_21078[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (35))){
var inst_20920 = (state_20961[(7)]);
var state_20961__$1 = state_20961;
var statearr_20993_21079 = state_20961__$1;
(statearr_20993_21079[(2)] = inst_20920);

(statearr_20993_21079[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (19))){
var state_20961__$1 = state_20961;
var statearr_20994_21080 = state_20961__$1;
(statearr_20994_21080[(2)] = false);

(statearr_20994_21080[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (11))){
var inst_20876 = (state_20961[(2)]);
var state_20961__$1 = state_20961;
var statearr_20995_21081 = state_20961__$1;
(statearr_20995_21081[(2)] = inst_20876);

(statearr_20995_21081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (9))){
var state_20961__$1 = state_20961;
var statearr_20996_21082 = state_20961__$1;
(statearr_20996_21082[(2)] = true);

(statearr_20996_21082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (5))){
var inst_20864 = (state_20961[(10)]);
var inst_20864__$1 = (state_20961[(2)]);
var inst_20866 = (inst_20864__$1 == null);
var inst_20867 = cljs.core.not.call(null,inst_20866);
var state_20961__$1 = (function (){var statearr_20997 = state_20961;
(statearr_20997[(10)] = inst_20864__$1);

return statearr_20997;
})();
if(inst_20867){
var statearr_20998_21083 = state_20961__$1;
(statearr_20998_21083[(1)] = (6));

} else {
var statearr_20999_21084 = state_20961__$1;
(statearr_20999_21084[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (14))){
var inst_20885 = (state_20961[(9)]);
var inst_20884 = (state_20961[(2)]);
var inst_20885__$1 = cljs.core.get.call(null,inst_20884,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_20886 = cljs.core.get.call(null,inst_20884,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var inst_20887 = cljs.core.get.call(null,inst_20884,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var state_20961__$1 = (function (){var statearr_21000 = state_20961;
(statearr_21000[(16)] = inst_20887);

(statearr_21000[(17)] = inst_20886);

(statearr_21000[(9)] = inst_20885__$1);

return statearr_21000;
})();
if(cljs.core.truth_(inst_20885__$1)){
var statearr_21001_21085 = state_20961__$1;
(statearr_21001_21085[(1)] = (15));

} else {
var statearr_21002_21086 = state_20961__$1;
(statearr_21002_21086[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (26))){
var inst_20887 = (state_20961[(16)]);
var inst_20886 = (state_20961[(17)]);
var inst_20913 = (state_20961[(2)]);
var inst_20914 = cljs.core.get.call(null,inst_20913,new cljs.core.Keyword(null,"position","position",-2011731912));
var inst_20915 = [new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"longitude","longitude",-1268876372)];
var inst_20916 = [inst_20886,inst_20887];
var inst_20917 = cljs.core.PersistentHashMap.fromArrays(inst_20915,inst_20916);
var inst_20918 = ui.map.route.call(null,inst_20914,inst_20917);
var state_20961__$1 = state_20961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20961__$1,(27),inst_20918);
} else {
if((state_val_20962 === (16))){
var inst_20893 = (state_20961[(8)]);
var inst_20893__$1 = om.next.get_state.call(null,this$);
var inst_20895 = (inst_20893__$1 == null);
var inst_20896 = cljs.core.not.call(null,inst_20895);
var state_20961__$1 = (function (){var statearr_21003 = state_20961;
(statearr_21003[(8)] = inst_20893__$1);

return statearr_21003;
})();
if(inst_20896){
var statearr_21004_21087 = state_20961__$1;
(statearr_21004_21087[(1)] = (18));

} else {
var statearr_21005_21088 = state_20961__$1;
(statearr_21005_21088[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (38))){
var inst_20942 = (state_20961[(12)]);
var inst_20948 = L.PolylineUtil.decode(inst_20942,(6));
var inst_20949 = (new L.Polyline(inst_20948,{"color": "red", "weight": (4)}));
var inst_20950 = inst_20949.addTo(map);
var inst_20951 = inst_20949.getBounds();
var inst_20952 = map.fitBounds(inst_20951);
var state_20961__$1 = (function (){var statearr_21006 = state_20961;
(statearr_21006[(18)] = inst_20950);

return statearr_21006;
})();
var statearr_21007_21089 = state_20961__$1;
(statearr_21007_21089[(2)] = inst_20952);

(statearr_21007_21089[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (30))){
var inst_20935 = (state_20961[(2)]);
var state_20961__$1 = state_20961;
if(cljs.core.truth_(inst_20935)){
var statearr_21008_21090 = state_20961__$1;
(statearr_21008_21090[(1)] = (34));

} else {
var statearr_21009_21091 = state_20961__$1;
(statearr_21009_21091[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (10))){
var state_20961__$1 = state_20961;
var statearr_21010_21092 = state_20961__$1;
(statearr_21010_21092[(2)] = false);

(statearr_21010_21092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (18))){
var inst_20893 = (state_20961[(8)]);
var inst_20898 = inst_20893.cljs$lang$protocol_mask$partition0$;
var inst_20899 = (inst_20898 & (64));
var inst_20900 = inst_20893.cljs$core$ISeq$;
var inst_20901 = (inst_20899) || (inst_20900);
var state_20961__$1 = state_20961;
if(cljs.core.truth_(inst_20901)){
var statearr_21011_21093 = state_20961__$1;
(statearr_21011_21093[(1)] = (21));

} else {
var statearr_21012_21094 = state_20961__$1;
(statearr_21012_21094[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (37))){
var inst_20941 = (state_20961[(11)]);
var inst_20946 = console.error(inst_20941);
var state_20961__$1 = state_20961;
var statearr_21013_21095 = state_20961__$1;
(statearr_21013_21095[(2)] = inst_20946);

(statearr_21013_21095[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (8))){
var inst_20879 = (state_20961[(2)]);
var state_20961__$1 = state_20961;
if(cljs.core.truth_(inst_20879)){
var statearr_21014_21096 = state_20961__$1;
(statearr_21014_21096[(1)] = (12));

} else {
var statearr_21015_21097 = state_20961__$1;
(statearr_21015_21097[(1)] = (13));

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
});})(c__9157__auto__,map__20785,map__20785__$1,center,routing,map,this$,x20784_21030))
;
return ((function (switch__9045__auto__,c__9157__auto__,map__20785,map__20785__$1,center,routing,map,this$,x20784_21030){
return (function() {
var ui$map$state_machine__9046__auto__ = null;
var ui$map$state_machine__9046__auto____0 = (function (){
var statearr_21019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21019[(0)] = ui$map$state_machine__9046__auto__);

(statearr_21019[(1)] = (1));

return statearr_21019;
});
var ui$map$state_machine__9046__auto____1 = (function (state_20961){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_20961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e21020){if((e21020 instanceof Object)){
var ex__9049__auto__ = e21020;
var statearr_21021_21098 = state_20961;
(statearr_21021_21098[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21099 = state_20961;
state_20961 = G__21099;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
ui$map$state_machine__9046__auto__ = function(state_20961){
switch(arguments.length){
case 0:
return ui$map$state_machine__9046__auto____0.call(this);
case 1:
return ui$map$state_machine__9046__auto____1.call(this,state_20961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$state_machine__9046__auto____0;
ui$map$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$state_machine__9046__auto____1;
return ui$map$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto__,map__20785,map__20785__$1,center,routing,map,this$,x20784_21030))
})();
var state__9159__auto__ = (function (){var statearr_21022 = f__9158__auto__.call(null);
(statearr_21022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto__);

return statearr_21022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto__,map__20785,map__20785__$1,center,routing,map,this$,x20784_21030))
);

return c__9157__auto__;
});})(x20784_21030))
;

x20784_21030.render = ((function (x20784_21030){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21023 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21024 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21025 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21026 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21027 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "map"});
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21027;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21026;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21025;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21024;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21023;
}});})(x20784_21030))
;


ui.map.MapView.prototype.constructor = ui.map.MapView;

ui.map.MapView.prototype.om$isComponent = true;

var x21028_21100 = ui.map.MapView;


var x21029_21101 = ui.map.MapView.prototype;


ui.map.MapView.cljs$lang$type = true;

ui.map.MapView.cljs$lang$ctorStr = "ui.map/MapView";

ui.map.MapView.cljs$lang$ctorPrWriter = (function (this__12947__auto__,writer__12948__auto__,opt__12949__auto__){
return cljs.core._write.call(null,writer__12948__auto__,"ui.map/MapView");
});
ui.map.view = om.next.factory.call(null,ui.map.MapView);

//# sourceMappingURL=map.js.map