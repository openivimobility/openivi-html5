// Compiled by ClojureScript 1.7.166 {}
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
ui.map.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5774__auto__,k__5775__auto__){
var self__ = this;
var this__5774__auto____$1 = this;
return cljs.core._lookup.call(null,this__5774__auto____$1,k__5775__auto__,null);
});

ui.map.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5776__auto__,k17278,else__5777__auto__){
var self__ = this;
var this__5776__auto____$1 = this;
var G__17280 = (((k17278 instanceof cljs.core.Keyword))?k17278.fqn:null);
switch (G__17280) {
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
return cljs.core.get.call(null,self__.__extmap,k17278,else__5777__auto__);

}
});

ui.map.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5788__auto__,writer__5789__auto__,opts__5790__auto__){
var self__ = this;
var this__5788__auto____$1 = this;
var pr_pair__5791__auto__ = ((function (this__5788__auto____$1){
return (function (keyval__5792__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5789__auto__,cljs.core.pr_writer,""," ","",opts__5790__auto__,keyval__5792__auto__);
});})(this__5788__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5789__auto__,pr_pair__5791__auto__,"#ui.map.Route{",", ","}",opts__5790__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"geometry","geometry",-405034994),self__.geometry],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time","time",1385887882),self__.time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"distance","distance",-1671893894),self__.distance],null))], null),self__.__extmap));
});

ui.map.Route.prototype.cljs$core$IIterable$ = true;

ui.map.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17277){
var self__ = this;
var G__17277__$1 = this;
return (new cljs.core.RecordIter((0),G__17277__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"distance","distance",-1671893894)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ui.map.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5772__auto__){
var self__ = this;
var this__5772__auto____$1 = this;
return self__.__meta;
});

ui.map.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5768__auto__){
var self__ = this;
var this__5768__auto____$1 = this;
return (new ui.map.Route(self__.geometry,self__.time,self__.distance,self__.__meta,self__.__extmap,self__.__hash));
});

ui.map.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5778__auto__){
var self__ = this;
var this__5778__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ui.map.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5769__auto__){
var self__ = this;
var this__5769__auto____$1 = this;
var h__5595__auto__ = self__.__hash;
if(!((h__5595__auto__ == null))){
return h__5595__auto__;
} else {
var h__5595__auto____$1 = cljs.core.hash_imap.call(null,this__5769__auto____$1);
self__.__hash = h__5595__auto____$1;

return h__5595__auto____$1;
}
});

ui.map.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5770__auto__,other__5771__auto__){
var self__ = this;
var this__5770__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5148__auto__ = other__5771__auto__;
if(cljs.core.truth_(and__5148__auto__)){
var and__5148__auto____$1 = (this__5770__auto____$1.constructor === other__5771__auto__.constructor);
if(and__5148__auto____$1){
return cljs.core.equiv_map.call(null,this__5770__auto____$1,other__5771__auto__);
} else {
return and__5148__auto____$1;
}
} else {
return and__5148__auto__;
}
})())){
return true;
} else {
return false;
}
});

ui.map.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5783__auto__,k__5784__auto__){
var self__ = this;
var this__5783__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),null,new cljs.core.Keyword(null,"geometry","geometry",-405034994),null,new cljs.core.Keyword(null,"distance","distance",-1671893894),null], null), null),k__5784__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5783__auto____$1),self__.__meta),k__5784__auto__);
} else {
return (new ui.map.Route(self__.geometry,self__.time,self__.distance,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5784__auto__)),null));
}
});

ui.map.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5781__auto__,k__5782__auto__,G__17277){
var self__ = this;
var this__5781__auto____$1 = this;
var pred__17281 = cljs.core.keyword_identical_QMARK_;
var expr__17282 = k__5782__auto__;
if(cljs.core.truth_(pred__17281.call(null,new cljs.core.Keyword(null,"geometry","geometry",-405034994),expr__17282))){
return (new ui.map.Route(G__17277,self__.time,self__.distance,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17281.call(null,new cljs.core.Keyword(null,"time","time",1385887882),expr__17282))){
return (new ui.map.Route(self__.geometry,G__17277,self__.distance,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17281.call(null,new cljs.core.Keyword(null,"distance","distance",-1671893894),expr__17282))){
return (new ui.map.Route(self__.geometry,self__.time,G__17277,self__.__meta,self__.__extmap,null));
} else {
return (new ui.map.Route(self__.geometry,self__.time,self__.distance,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5782__auto__,G__17277),null));
}
}
}
});

ui.map.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5786__auto__){
var self__ = this;
var this__5786__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"geometry","geometry",-405034994),self__.geometry],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time","time",1385887882),self__.time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"distance","distance",-1671893894),self__.distance],null))], null),self__.__extmap));
});

ui.map.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5773__auto__,G__17277){
var self__ = this;
var this__5773__auto____$1 = this;
return (new ui.map.Route(self__.geometry,self__.time,self__.distance,G__17277,self__.__extmap,self__.__hash));
});

ui.map.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5779__auto__,entry__5780__auto__){
var self__ = this;
var this__5779__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5780__auto__)){
return cljs.core._assoc.call(null,this__5779__auto____$1,cljs.core._nth.call(null,entry__5780__auto__,(0)),cljs.core._nth.call(null,entry__5780__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5779__auto____$1,entry__5780__auto__);
}
});

ui.map.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"geometry","geometry",1235496533,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"distance","distance",-31362367,null)], null);
});

ui.map.Route.cljs$lang$type = true;

ui.map.Route.cljs$lang$ctorPrSeq = (function (this__5808__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ui.map/Route");
});

ui.map.Route.cljs$lang$ctorPrWriter = (function (this__5808__auto__,writer__5809__auto__){
return cljs.core._write.call(null,writer__5809__auto__,"ui.map/Route");
});

ui.map.__GT_Route = (function ui$map$__GT_Route(geometry,time,distance){
return (new ui.map.Route(geometry,time,distance,null,null,null));
});

ui.map.map__GT_Route = (function ui$map$map__GT_Route(G__17279){
return (new ui.map.Route(new cljs.core.Keyword(null,"geometry","geometry",-405034994).cljs$core$IFn$_invoke$arity$1(G__17279),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(G__17279),new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(G__17279),null,cljs.core.dissoc.call(null,G__17279,new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"distance","distance",-1671893894)),null));
});

ui.map.routing_endpoint = "http://router.project-osrm.org/viaroute";
ui.map.geocoding_endpoint = "http://nominatim.openstreetmap.org/search?format=json&q=";
ui.map.geocode = (function ui$map$geocode(place){
var resp = cljs.core.async.chan.call(null);
ajax.core.GET.call(null,[cljs.core.str(ui.map.geocoding_endpoint),cljs.core.str(place)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (resp){
return (function (error){
var c__11293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto__,resp){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto__,resp){
return (function (state_17341){
var state_val_17342 = (state_17341[(1)]);
if((state_val_17342 === (1))){
var inst_17335 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_17336 = [error];
var inst_17337 = cljs.core.PersistentHashMap.fromArrays(inst_17335,inst_17336);
var state_17341__$1 = state_17341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17341__$1,(2),resp,inst_17337);
} else {
if((state_val_17342 === (2))){
var inst_17339 = (state_17341[(2)]);
var state_17341__$1 = state_17341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17341__$1,inst_17339);
} else {
return null;
}
}
});})(c__11293__auto__,resp))
;
return ((function (switch__11181__auto__,c__11293__auto__,resp){
return (function() {
var ui$map$geocode_$_state_machine__11182__auto__ = null;
var ui$map$geocode_$_state_machine__11182__auto____0 = (function (){
var statearr_17346 = [null,null,null,null,null,null,null];
(statearr_17346[(0)] = ui$map$geocode_$_state_machine__11182__auto__);

(statearr_17346[(1)] = (1));

return statearr_17346;
});
var ui$map$geocode_$_state_machine__11182__auto____1 = (function (state_17341){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_17341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e17347){if((e17347 instanceof Object)){
var ex__11185__auto__ = e17347;
var statearr_17348_17385 = state_17341;
(statearr_17348_17385[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17386 = state_17341;
state_17341 = G__17386;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
ui$map$geocode_$_state_machine__11182__auto__ = function(state_17341){
switch(arguments.length){
case 0:
return ui$map$geocode_$_state_machine__11182__auto____0.call(this);
case 1:
return ui$map$geocode_$_state_machine__11182__auto____1.call(this,state_17341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$geocode_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$geocode_$_state_machine__11182__auto____0;
ui$map$geocode_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$geocode_$_state_machine__11182__auto____1;
return ui$map$geocode_$_state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto__,resp))
})();
var state__11295__auto__ = (function (){var statearr_17349 = f__11294__auto__.call(null);
(statearr_17349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto__);

return statearr_17349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto__,resp))
);

return c__11293__auto__;
});})(resp))
,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (resp){
return (function (data){
var temp__4423__auto__ = cljs.core.first.call(null,data);
if(cljs.core.truth_(temp__4423__auto__)){
var map__17350 = temp__4423__auto__;
var map__17350__$1 = ((((!((map__17350 == null)))?((((map__17350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17350):map__17350);
var lon = cljs.core.get.call(null,map__17350__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var lat = cljs.core.get.call(null,map__17350__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var c__11293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto__,map__17350,map__17350__$1,lon,lat,temp__4423__auto__,resp){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto__,map__17350,map__17350__$1,lon,lat,temp__4423__auto__,resp){
return (function (state_17360){
var state_val_17361 = (state_17360[(1)]);
if((state_val_17361 === (1))){
var inst_17352 = [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"latitude","latitude",394867543)];
var inst_17353 = parseFloat(lon);
var inst_17354 = parseFloat(lat);
var inst_17355 = [inst_17353,inst_17354];
var inst_17356 = cljs.core.PersistentHashMap.fromArrays(inst_17352,inst_17355);
var state_17360__$1 = state_17360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17360__$1,(2),resp,inst_17356);
} else {
if((state_val_17361 === (2))){
var inst_17358 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17360__$1,inst_17358);
} else {
return null;
}
}
});})(c__11293__auto__,map__17350,map__17350__$1,lon,lat,temp__4423__auto__,resp))
;
return ((function (switch__11181__auto__,c__11293__auto__,map__17350,map__17350__$1,lon,lat,temp__4423__auto__,resp){
return (function() {
var ui$map$geocode_$_state_machine__11182__auto__ = null;
var ui$map$geocode_$_state_machine__11182__auto____0 = (function (){
var statearr_17365 = [null,null,null,null,null,null,null];
(statearr_17365[(0)] = ui$map$geocode_$_state_machine__11182__auto__);

(statearr_17365[(1)] = (1));

return statearr_17365;
});
var ui$map$geocode_$_state_machine__11182__auto____1 = (function (state_17360){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_17360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e17366){if((e17366 instanceof Object)){
var ex__11185__auto__ = e17366;
var statearr_17367_17387 = state_17360;
(statearr_17367_17387[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17388 = state_17360;
state_17360 = G__17388;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
ui$map$geocode_$_state_machine__11182__auto__ = function(state_17360){
switch(arguments.length){
case 0:
return ui$map$geocode_$_state_machine__11182__auto____0.call(this);
case 1:
return ui$map$geocode_$_state_machine__11182__auto____1.call(this,state_17360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$geocode_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$geocode_$_state_machine__11182__auto____0;
ui$map$geocode_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$geocode_$_state_machine__11182__auto____1;
return ui$map$geocode_$_state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto__,map__17350,map__17350__$1,lon,lat,temp__4423__auto__,resp))
})();
var state__11295__auto__ = (function (){var statearr_17368 = f__11294__auto__.call(null);
(statearr_17368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto__);

return statearr_17368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto__,map__17350,map__17350__$1,lon,lat,temp__4423__auto__,resp))
);

return c__11293__auto__;
} else {
var c__11293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto__,temp__4423__auto__,resp){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto__,temp__4423__auto__,resp){
return (function (state_17376){
var state_val_17377 = (state_17376[(1)]);
if((state_val_17377 === (1))){
var inst_17369 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_17370 = [cljs.core.str("Location "),cljs.core.str(place),cljs.core.str(" not found")].join('');
var inst_17371 = [inst_17370];
var inst_17372 = cljs.core.PersistentHashMap.fromArrays(inst_17369,inst_17371);
var state_17376__$1 = state_17376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17376__$1,(2),resp,inst_17372);
} else {
if((state_val_17377 === (2))){
var inst_17374 = (state_17376[(2)]);
var state_17376__$1 = state_17376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17376__$1,inst_17374);
} else {
return null;
}
}
});})(c__11293__auto__,temp__4423__auto__,resp))
;
return ((function (switch__11181__auto__,c__11293__auto__,temp__4423__auto__,resp){
return (function() {
var ui$map$geocode_$_state_machine__11182__auto__ = null;
var ui$map$geocode_$_state_machine__11182__auto____0 = (function (){
var statearr_17381 = [null,null,null,null,null,null,null];
(statearr_17381[(0)] = ui$map$geocode_$_state_machine__11182__auto__);

(statearr_17381[(1)] = (1));

return statearr_17381;
});
var ui$map$geocode_$_state_machine__11182__auto____1 = (function (state_17376){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_17376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e17382){if((e17382 instanceof Object)){
var ex__11185__auto__ = e17382;
var statearr_17383_17389 = state_17376;
(statearr_17383_17389[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17390 = state_17376;
state_17376 = G__17390;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
ui$map$geocode_$_state_machine__11182__auto__ = function(state_17376){
switch(arguments.length){
case 0:
return ui$map$geocode_$_state_machine__11182__auto____0.call(this);
case 1:
return ui$map$geocode_$_state_machine__11182__auto____1.call(this,state_17376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$geocode_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$geocode_$_state_machine__11182__auto____0;
ui$map$geocode_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$geocode_$_state_machine__11182__auto____1;
return ui$map$geocode_$_state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto__,temp__4423__auto__,resp))
})();
var state__11295__auto__ = (function (){var statearr_17384 = f__11294__auto__.call(null);
(statearr_17384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto__);

return statearr_17384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto__,temp__4423__auto__,resp))
);

return c__11293__auto__;
}
});})(resp))
], null));

return resp;
});
ui.map.route = (function ui$map$route(from,to){
var resp = cljs.core.async.chan.call(null);
ajax.core.GET.call(null,cljs.core.apply.call(null,cljs.core.str,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.map.routing_endpoint,"?loc=",new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(from),",",new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(from),"&loc=",new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(to),",",new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(to)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (resp){
return (function (error){
var c__11293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto__,resp){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto__,resp){
return (function (state_17442){
var state_val_17443 = (state_17442[(1)]);
if((state_val_17443 === (1))){
var inst_17436 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_17437 = [error];
var inst_17438 = cljs.core.PersistentHashMap.fromArrays(inst_17436,inst_17437);
var state_17442__$1 = state_17442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17442__$1,(2),resp,inst_17438);
} else {
if((state_val_17443 === (2))){
var inst_17440 = (state_17442[(2)]);
var state_17442__$1 = state_17442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17442__$1,inst_17440);
} else {
return null;
}
}
});})(c__11293__auto__,resp))
;
return ((function (switch__11181__auto__,c__11293__auto__,resp){
return (function() {
var ui$map$route_$_state_machine__11182__auto__ = null;
var ui$map$route_$_state_machine__11182__auto____0 = (function (){
var statearr_17447 = [null,null,null,null,null,null,null];
(statearr_17447[(0)] = ui$map$route_$_state_machine__11182__auto__);

(statearr_17447[(1)] = (1));

return statearr_17447;
});
var ui$map$route_$_state_machine__11182__auto____1 = (function (state_17442){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_17442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e17448){if((e17448 instanceof Object)){
var ex__11185__auto__ = e17448;
var statearr_17449_17481 = state_17442;
(statearr_17449_17481[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17482 = state_17442;
state_17442 = G__17482;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
ui$map$route_$_state_machine__11182__auto__ = function(state_17442){
switch(arguments.length){
case 0:
return ui$map$route_$_state_machine__11182__auto____0.call(this);
case 1:
return ui$map$route_$_state_machine__11182__auto____1.call(this,state_17442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$route_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$route_$_state_machine__11182__auto____0;
ui$map$route_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$route_$_state_machine__11182__auto____1;
return ui$map$route_$_state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto__,resp))
})();
var state__11295__auto__ = (function (){var statearr_17450 = f__11294__auto__.call(null);
(statearr_17450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto__);

return statearr_17450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto__,resp))
);

return c__11293__auto__;
});})(resp))
,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (resp){
return (function (data){
var temp__4423__auto__ = new cljs.core.Keyword(null,"route_summary","route_summary",-1991848495).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__4423__auto__)){
var summary = temp__4423__auto__;
var geometry = new cljs.core.Keyword(null,"route_geometry","route_geometry",-458180234).cljs$core$IFn$_invoke$arity$1(data);
var map__17451 = summary;
var map__17451__$1 = ((((!((map__17451 == null)))?((((map__17451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17451):map__17451);
var total_time = cljs.core.get.call(null,map__17451__$1,new cljs.core.Keyword(null,"total_time","total_time",1010495910));
var total_distance = cljs.core.get.call(null,map__17451__$1,new cljs.core.Keyword(null,"total_distance","total_distance",-1615601506));
var c__11293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto__,geometry,map__17451,map__17451__$1,total_time,total_distance,summary,temp__4423__auto__,resp){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto__,geometry,map__17451,map__17451__$1,total_time,total_distance,summary,temp__4423__auto__,resp){
return (function (state_17457){
var state_val_17458 = (state_17457[(1)]);
if((state_val_17458 === (1))){
var inst_17453 = ui.map.__GT_Route.call(null,geometry,total_time,total_distance);
var state_17457__$1 = state_17457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17457__$1,(2),resp,inst_17453);
} else {
if((state_val_17458 === (2))){
var inst_17455 = (state_17457[(2)]);
var state_17457__$1 = state_17457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17457__$1,inst_17455);
} else {
return null;
}
}
});})(c__11293__auto__,geometry,map__17451,map__17451__$1,total_time,total_distance,summary,temp__4423__auto__,resp))
;
return ((function (switch__11181__auto__,c__11293__auto__,geometry,map__17451,map__17451__$1,total_time,total_distance,summary,temp__4423__auto__,resp){
return (function() {
var ui$map$route_$_state_machine__11182__auto__ = null;
var ui$map$route_$_state_machine__11182__auto____0 = (function (){
var statearr_17462 = [null,null,null,null,null,null,null];
(statearr_17462[(0)] = ui$map$route_$_state_machine__11182__auto__);

(statearr_17462[(1)] = (1));

return statearr_17462;
});
var ui$map$route_$_state_machine__11182__auto____1 = (function (state_17457){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_17457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e17463){if((e17463 instanceof Object)){
var ex__11185__auto__ = e17463;
var statearr_17464_17483 = state_17457;
(statearr_17464_17483[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17484 = state_17457;
state_17457 = G__17484;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
ui$map$route_$_state_machine__11182__auto__ = function(state_17457){
switch(arguments.length){
case 0:
return ui$map$route_$_state_machine__11182__auto____0.call(this);
case 1:
return ui$map$route_$_state_machine__11182__auto____1.call(this,state_17457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$route_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$route_$_state_machine__11182__auto____0;
ui$map$route_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$route_$_state_machine__11182__auto____1;
return ui$map$route_$_state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto__,geometry,map__17451,map__17451__$1,total_time,total_distance,summary,temp__4423__auto__,resp))
})();
var state__11295__auto__ = (function (){var statearr_17465 = f__11294__auto__.call(null);
(statearr_17465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto__);

return statearr_17465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto__,geometry,map__17451,map__17451__$1,total_time,total_distance,summary,temp__4423__auto__,resp))
);

return c__11293__auto__;
} else {
var c__11293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto__,temp__4423__auto__,resp){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto__,temp__4423__auto__,resp){
return (function (state_17472){
var state_val_17473 = (state_17472[(1)]);
if((state_val_17473 === (1))){
var inst_17466 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_17467 = ["Couldn't find a route."];
var inst_17468 = cljs.core.PersistentHashMap.fromArrays(inst_17466,inst_17467);
var state_17472__$1 = state_17472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17472__$1,(2),resp,inst_17468);
} else {
if((state_val_17473 === (2))){
var inst_17470 = (state_17472[(2)]);
var state_17472__$1 = state_17472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17472__$1,inst_17470);
} else {
return null;
}
}
});})(c__11293__auto__,temp__4423__auto__,resp))
;
return ((function (switch__11181__auto__,c__11293__auto__,temp__4423__auto__,resp){
return (function() {
var ui$map$route_$_state_machine__11182__auto__ = null;
var ui$map$route_$_state_machine__11182__auto____0 = (function (){
var statearr_17477 = [null,null,null,null,null,null,null];
(statearr_17477[(0)] = ui$map$route_$_state_machine__11182__auto__);

(statearr_17477[(1)] = (1));

return statearr_17477;
});
var ui$map$route_$_state_machine__11182__auto____1 = (function (state_17472){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_17472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e17478){if((e17478 instanceof Object)){
var ex__11185__auto__ = e17478;
var statearr_17479_17485 = state_17472;
(statearr_17479_17485[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17486 = state_17472;
state_17472 = G__17486;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
ui$map$route_$_state_machine__11182__auto__ = function(state_17472){
switch(arguments.length){
case 0:
return ui$map$route_$_state_machine__11182__auto____0.call(this);
case 1:
return ui$map$route_$_state_machine__11182__auto____1.call(this,state_17472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$route_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$route_$_state_machine__11182__auto____0;
ui$map$route_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$route_$_state_machine__11182__auto____1;
return ui$map$route_$_state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto__,temp__4423__auto__,resp))
})();
var state__11295__auto__ = (function (){var statearr_17480 = f__11294__auto__.call(null);
(statearr_17480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto__);

return statearr_17480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto__,temp__4423__auto__,resp))
);

return c__11293__auto__;
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

map.setView([13.3833,52.5167],(13));

return map;
});
/**
 * @constructor
 */
ui.map.MapView = (function ui$map$MapView(){
var this__14365__auto__ = this;
React.Component.apply(this__14365__auto__,arguments);

if(!((this__14365__auto__.getInitialState == null))){
this__14365__auto__.state = this__14365__auto__.getInitialState();
} else {
this__14365__auto__.state = {};
}

return this__14365__auto__;
});

ui.map.MapView.prototype = goog.object.clone(React.Component.prototype);

var x17491_17737 = ui.map.MapView.prototype;
x17491_17737.componentWillUpdate = ((function (x17491_17737){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14305__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14305__auto__);
});})(x17491_17737))
;

x17491_17737.shouldComponentUpdate = ((function (x17491_17737){
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
});})(x17491_17737))
;

x17491_17737.componentWillUnmount = ((function (x17491_17737){
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
});})(x17491_17737))
;

x17491_17737.componentDidUpdate = ((function (x17491_17737){
return (function (prev_props__14308__auto__,prev_state__14309__auto__){
var this__14305__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14305__auto__);
});})(x17491_17737))
;

x17491_17737.isMounted = ((function (x17491_17737){
return (function (){
var this__14305__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14305__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x17491_17737))
;

x17491_17737.componentWillMount = ((function (x17491_17737){
return (function (){
var this__14305__auto__ = this;
var indexer__14310__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14305__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x17491_17737))
;

x17491_17737.componentDidMount = ((function (x17491_17737){
return (function (){
var this$ = this;
om.next.set_state_BANG_.call(null,this$,cljs.core.PersistentArrayMap.EMPTY);

var map = ui.map.new_map.call(null);
var map__17492 = om.next.props.call(null,this$);
var map__17492__$1 = ((((!((map__17492 == null)))?((((map__17492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17492):map__17492);
var center = cljs.core.get.call(null,map__17492__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var routing = cljs.core.get.call(null,map__17492__$1,new cljs.core.Keyword(null,"routing","routing",1440253662));
var c__11293__auto___17738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___17738,map__17492,map__17492__$1,center,routing,map,this$,x17491_17737){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___17738,map__17492,map__17492__$1,center,routing,map,this$,x17491_17737){
return (function (state_17535){
var state_val_17536 = (state_17535[(1)]);
if((state_val_17536 === (7))){
var inst_17512 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
if(cljs.core.truth_(inst_17512)){
var statearr_17537_17739 = state_17535__$1;
(statearr_17537_17739[(1)] = (11));

} else {
var statearr_17538_17740 = state_17535__$1;
(statearr_17538_17740[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (1))){
var state_17535__$1 = state_17535;
var statearr_17539_17741 = state_17535__$1;
(statearr_17539_17741[(2)] = null);

(statearr_17539_17741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (4))){
var inst_17497 = (state_17535[(7)]);
var inst_17497__$1 = (state_17535[(2)]);
var inst_17499 = (inst_17497__$1 == null);
var inst_17500 = cljs.core.not.call(null,inst_17499);
var state_17535__$1 = (function (){var statearr_17540 = state_17535;
(statearr_17540[(7)] = inst_17497__$1);

return statearr_17540;
})();
if(inst_17500){
var statearr_17541_17742 = state_17535__$1;
(statearr_17541_17742[(1)] = (5));

} else {
var statearr_17542_17743 = state_17535__$1;
(statearr_17542_17743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (15))){
var state_17535__$1 = state_17535;
var statearr_17543_17744 = state_17535__$1;
(statearr_17543_17744[(2)] = (13));

(statearr_17543_17744[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (13))){
var inst_17525 = (state_17535[(8)]);
var inst_17517 = (state_17535[(2)]);
var inst_17518 = cljs.core.get.call(null,inst_17517,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var inst_17519 = cljs.core.get.call(null,inst_17517,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var inst_17520 = om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),inst_17517);
var inst_17521 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17522 = [inst_17518,inst_17519];
var inst_17523 = (new cljs.core.PersistentVector(null,2,(5),inst_17521,inst_17522,null));
var inst_17524 = cljs.core.clj__GT_js.call(null,inst_17523);
var inst_17525__$1 = map.getZoom();
var state_17535__$1 = (function (){var statearr_17544 = state_17535;
(statearr_17544[(9)] = inst_17520);

(statearr_17544[(10)] = inst_17524);

(statearr_17544[(8)] = inst_17525__$1);

return statearr_17544;
})();
if(cljs.core.truth_(inst_17525__$1)){
var statearr_17545_17745 = state_17535__$1;
(statearr_17545_17745[(1)] = (14));

} else {
var statearr_17546_17746 = state_17535__$1;
(statearr_17546_17746[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (6))){
var state_17535__$1 = state_17535;
var statearr_17547_17747 = state_17535__$1;
(statearr_17547_17747[(2)] = false);

(statearr_17547_17747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (3))){
var inst_17533 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17535__$1,inst_17533);
} else {
if((state_val_17536 === (12))){
var inst_17497 = (state_17535[(7)]);
var state_17535__$1 = state_17535;
var statearr_17548_17748 = state_17535__$1;
(statearr_17548_17748[(2)] = inst_17497);

(statearr_17548_17748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (2))){
var state_17535__$1 = state_17535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17535__$1,(4),center);
} else {
if((state_val_17536 === (11))){
var inst_17497 = (state_17535[(7)]);
var inst_17514 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17497);
var state_17535__$1 = state_17535;
var statearr_17549_17749 = state_17535__$1;
(statearr_17549_17749[(2)] = inst_17514);

(statearr_17549_17749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (9))){
var state_17535__$1 = state_17535;
var statearr_17550_17750 = state_17535__$1;
(statearr_17550_17750[(2)] = false);

(statearr_17550_17750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (5))){
var inst_17497 = (state_17535[(7)]);
var inst_17502 = inst_17497.cljs$lang$protocol_mask$partition0$;
var inst_17503 = (inst_17502 & (64));
var inst_17504 = inst_17497.cljs$core$ISeq$;
var inst_17505 = (inst_17503) || (inst_17504);
var state_17535__$1 = state_17535;
if(cljs.core.truth_(inst_17505)){
var statearr_17551_17751 = state_17535__$1;
(statearr_17551_17751[(1)] = (8));

} else {
var statearr_17552_17752 = state_17535__$1;
(statearr_17552_17752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (14))){
var inst_17525 = (state_17535[(8)]);
var state_17535__$1 = state_17535;
var statearr_17553_17753 = state_17535__$1;
(statearr_17553_17753[(2)] = inst_17525);

(statearr_17553_17753[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (16))){
var inst_17524 = (state_17535[(10)]);
var inst_17529 = (state_17535[(2)]);
var inst_17530 = map.setView(inst_17524,inst_17529);
var state_17535__$1 = (function (){var statearr_17554 = state_17535;
(statearr_17554[(11)] = inst_17530);

return statearr_17554;
})();
var statearr_17555_17754 = state_17535__$1;
(statearr_17555_17754[(2)] = null);

(statearr_17555_17754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (10))){
var inst_17509 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
var statearr_17556_17755 = state_17535__$1;
(statearr_17556_17755[(2)] = inst_17509);

(statearr_17556_17755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (8))){
var state_17535__$1 = state_17535;
var statearr_17557_17756 = state_17535__$1;
(statearr_17557_17756[(2)] = true);

(statearr_17557_17756[(1)] = (10));


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
});})(c__11293__auto___17738,map__17492,map__17492__$1,center,routing,map,this$,x17491_17737))
;
return ((function (switch__11181__auto__,c__11293__auto___17738,map__17492,map__17492__$1,center,routing,map,this$,x17491_17737){
return (function() {
var ui$map$state_machine__11182__auto__ = null;
var ui$map$state_machine__11182__auto____0 = (function (){
var statearr_17561 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17561[(0)] = ui$map$state_machine__11182__auto__);

(statearr_17561[(1)] = (1));

return statearr_17561;
});
var ui$map$state_machine__11182__auto____1 = (function (state_17535){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_17535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e17562){if((e17562 instanceof Object)){
var ex__11185__auto__ = e17562;
var statearr_17563_17757 = state_17535;
(statearr_17563_17757[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17758 = state_17535;
state_17535 = G__17758;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
ui$map$state_machine__11182__auto__ = function(state_17535){
switch(arguments.length){
case 0:
return ui$map$state_machine__11182__auto____0.call(this);
case 1:
return ui$map$state_machine__11182__auto____1.call(this,state_17535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$state_machine__11182__auto____0;
ui$map$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$state_machine__11182__auto____1;
return ui$map$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___17738,map__17492,map__17492__$1,center,routing,map,this$,x17491_17737))
})();
var state__11295__auto__ = (function (){var statearr_17564 = f__11294__auto__.call(null);
(statearr_17564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___17738);

return statearr_17564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___17738,map__17492,map__17492__$1,center,routing,map,this$,x17491_17737))
);


var c__11293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto__,map__17492,map__17492__$1,center,routing,map,this$,x17491_17737){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto__,map__17492,map__17492__$1,center,routing,map,this$,x17491_17737){
return (function (state_17668){
var state_val_17669 = (state_17668[(1)]);
if((state_val_17669 === (7))){
var state_17668__$1 = state_17668;
var statearr_17670_17759 = state_17668__$1;
(statearr_17670_17759[(2)] = false);

(statearr_17670_17759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (20))){
var inst_17615 = (state_17668[(2)]);
var state_17668__$1 = state_17668;
if(cljs.core.truth_(inst_17615)){
var statearr_17671_17760 = state_17668__$1;
(statearr_17671_17760[(1)] = (24));

} else {
var statearr_17672_17761 = state_17668__$1;
(statearr_17672_17761[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (27))){
var inst_17627 = (state_17668[(7)]);
var inst_17627__$1 = (state_17668[(2)]);
var inst_17629 = (inst_17627__$1 == null);
var inst_17630 = cljs.core.not.call(null,inst_17629);
var state_17668__$1 = (function (){var statearr_17673 = state_17668;
(statearr_17673[(7)] = inst_17627__$1);

return statearr_17673;
})();
if(inst_17630){
var statearr_17674_17762 = state_17668__$1;
(statearr_17674_17762[(1)] = (28));

} else {
var statearr_17675_17763 = state_17668__$1;
(statearr_17675_17763[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (1))){
var state_17668__$1 = state_17668;
var statearr_17676_17764 = state_17668__$1;
(statearr_17676_17764[(2)] = null);

(statearr_17676_17764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (24))){
var inst_17600 = (state_17668[(8)]);
var inst_17617 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17600);
var state_17668__$1 = state_17668;
var statearr_17677_17765 = state_17668__$1;
(statearr_17677_17765[(2)] = inst_17617);

(statearr_17677_17765[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (39))){
var inst_17661 = (state_17668[(2)]);
var state_17668__$1 = state_17668;
var statearr_17678_17766 = state_17668__$1;
(statearr_17678_17766[(2)] = inst_17661);

(statearr_17678_17766[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (4))){
var inst_17568 = (state_17668[(2)]);
var inst_17569 = ui.map.geocode.call(null,inst_17568);
var state_17668__$1 = state_17668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17668__$1,(5),inst_17569);
} else {
if((state_val_17669 === (15))){
var inst_17592 = (state_17668[(9)]);
var inst_17596 = console.error(inst_17592);
var state_17668__$1 = state_17668;
var statearr_17679_17767 = state_17668__$1;
(statearr_17679_17767[(2)] = inst_17596);

(statearr_17679_17767[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (21))){
var state_17668__$1 = state_17668;
var statearr_17680_17768 = state_17668__$1;
(statearr_17680_17768[(2)] = true);

(statearr_17680_17768[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (31))){
var state_17668__$1 = state_17668;
var statearr_17681_17769 = state_17668__$1;
(statearr_17681_17769[(2)] = true);

(statearr_17681_17769[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (32))){
var state_17668__$1 = state_17668;
var statearr_17682_17770 = state_17668__$1;
(statearr_17682_17770[(2)] = false);

(statearr_17682_17770[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (33))){
var inst_17639 = (state_17668[(2)]);
var state_17668__$1 = state_17668;
var statearr_17683_17771 = state_17668__$1;
(statearr_17683_17771[(2)] = inst_17639);

(statearr_17683_17771[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (13))){
var inst_17571 = (state_17668[(10)]);
var state_17668__$1 = state_17668;
var statearr_17684_17772 = state_17668__$1;
(statearr_17684_17772[(2)] = inst_17571);

(statearr_17684_17772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (22))){
var state_17668__$1 = state_17668;
var statearr_17685_17773 = state_17668__$1;
(statearr_17685_17773[(2)] = false);

(statearr_17685_17773[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (36))){
var inst_17648 = (state_17668[(11)]);
var inst_17647 = (state_17668[(2)]);
var inst_17648__$1 = cljs.core.get.call(null,inst_17647,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_17649 = cljs.core.get.call(null,inst_17647,new cljs.core.Keyword(null,"geometry","geometry",-405034994));
var inst_17650 = cljs.core.get.call(null,inst_17647,new cljs.core.Keyword(null,"time","time",1385887882));
var inst_17651 = cljs.core.get.call(null,inst_17647,new cljs.core.Keyword(null,"distance","distance",-1671893894));
var state_17668__$1 = (function (){var statearr_17686 = state_17668;
(statearr_17686[(12)] = inst_17651);

(statearr_17686[(13)] = inst_17650);

(statearr_17686[(11)] = inst_17648__$1);

(statearr_17686[(14)] = inst_17649);

return statearr_17686;
})();
if(cljs.core.truth_(inst_17648__$1)){
var statearr_17687_17774 = state_17668__$1;
(statearr_17687_17774[(1)] = (37));

} else {
var statearr_17688_17775 = state_17668__$1;
(statearr_17688_17775[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (29))){
var state_17668__$1 = state_17668;
var statearr_17689_17776 = state_17668__$1;
(statearr_17689_17776[(2)] = false);

(statearr_17689_17776[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (6))){
var inst_17571 = (state_17668[(10)]);
var inst_17576 = inst_17571.cljs$lang$protocol_mask$partition0$;
var inst_17577 = (inst_17576 & (64));
var inst_17578 = inst_17571.cljs$core$ISeq$;
var inst_17579 = (inst_17577) || (inst_17578);
var state_17668__$1 = state_17668;
if(cljs.core.truth_(inst_17579)){
var statearr_17690_17777 = state_17668__$1;
(statearr_17690_17777[(1)] = (9));

} else {
var statearr_17691_17778 = state_17668__$1;
(statearr_17691_17778[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (28))){
var inst_17627 = (state_17668[(7)]);
var inst_17632 = inst_17627.cljs$lang$protocol_mask$partition0$;
var inst_17633 = (inst_17632 & (64));
var inst_17634 = inst_17627.cljs$core$ISeq$;
var inst_17635 = (inst_17633) || (inst_17634);
var state_17668__$1 = state_17668;
if(cljs.core.truth_(inst_17635)){
var statearr_17692_17779 = state_17668__$1;
(statearr_17692_17779[(1)] = (31));

} else {
var statearr_17693_17780 = state_17668__$1;
(statearr_17693_17780[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (25))){
var inst_17600 = (state_17668[(8)]);
var state_17668__$1 = state_17668;
var statearr_17694_17781 = state_17668__$1;
(statearr_17694_17781[(2)] = inst_17600);

(statearr_17694_17781[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (34))){
var inst_17627 = (state_17668[(7)]);
var inst_17644 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17627);
var state_17668__$1 = state_17668;
var statearr_17695_17782 = state_17668__$1;
(statearr_17695_17782[(2)] = inst_17644);

(statearr_17695_17782[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (17))){
var inst_17663 = (state_17668[(2)]);
var state_17668__$1 = (function (){var statearr_17696 = state_17668;
(statearr_17696[(15)] = inst_17663);

return statearr_17696;
})();
var statearr_17697_17783 = state_17668__$1;
(statearr_17697_17783[(2)] = null);

(statearr_17697_17783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (3))){
var inst_17666 = (state_17668[(2)]);
var state_17668__$1 = state_17668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17668__$1,inst_17666);
} else {
if((state_val_17669 === (12))){
var inst_17571 = (state_17668[(10)]);
var inst_17588 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17571);
var state_17668__$1 = state_17668;
var statearr_17698_17784 = state_17668__$1;
(statearr_17698_17784[(2)] = inst_17588);

(statearr_17698_17784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (2))){
var state_17668__$1 = state_17668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17668__$1,(4),routing);
} else {
if((state_val_17669 === (23))){
var inst_17612 = (state_17668[(2)]);
var state_17668__$1 = state_17668;
var statearr_17699_17785 = state_17668__$1;
(statearr_17699_17785[(2)] = inst_17612);

(statearr_17699_17785[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (35))){
var inst_17627 = (state_17668[(7)]);
var state_17668__$1 = state_17668;
var statearr_17700_17786 = state_17668__$1;
(statearr_17700_17786[(2)] = inst_17627);

(statearr_17700_17786[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (19))){
var state_17668__$1 = state_17668;
var statearr_17701_17787 = state_17668__$1;
(statearr_17701_17787[(2)] = false);

(statearr_17701_17787[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (11))){
var inst_17583 = (state_17668[(2)]);
var state_17668__$1 = state_17668;
var statearr_17702_17788 = state_17668__$1;
(statearr_17702_17788[(2)] = inst_17583);

(statearr_17702_17788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (9))){
var state_17668__$1 = state_17668;
var statearr_17703_17789 = state_17668__$1;
(statearr_17703_17789[(2)] = true);

(statearr_17703_17789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (5))){
var inst_17571 = (state_17668[(10)]);
var inst_17571__$1 = (state_17668[(2)]);
var inst_17573 = (inst_17571__$1 == null);
var inst_17574 = cljs.core.not.call(null,inst_17573);
var state_17668__$1 = (function (){var statearr_17704 = state_17668;
(statearr_17704[(10)] = inst_17571__$1);

return statearr_17704;
})();
if(inst_17574){
var statearr_17705_17790 = state_17668__$1;
(statearr_17705_17790[(1)] = (6));

} else {
var statearr_17706_17791 = state_17668__$1;
(statearr_17706_17791[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (14))){
var inst_17592 = (state_17668[(9)]);
var inst_17591 = (state_17668[(2)]);
var inst_17592__$1 = cljs.core.get.call(null,inst_17591,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_17593 = cljs.core.get.call(null,inst_17591,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var inst_17594 = cljs.core.get.call(null,inst_17591,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var state_17668__$1 = (function (){var statearr_17707 = state_17668;
(statearr_17707[(16)] = inst_17593);

(statearr_17707[(17)] = inst_17594);

(statearr_17707[(9)] = inst_17592__$1);

return statearr_17707;
})();
if(cljs.core.truth_(inst_17592__$1)){
var statearr_17708_17792 = state_17668__$1;
(statearr_17708_17792[(1)] = (15));

} else {
var statearr_17709_17793 = state_17668__$1;
(statearr_17709_17793[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (26))){
var inst_17593 = (state_17668[(16)]);
var inst_17594 = (state_17668[(17)]);
var inst_17620 = (state_17668[(2)]);
var inst_17621 = cljs.core.get.call(null,inst_17620,new cljs.core.Keyword(null,"position","position",-2011731912));
var inst_17622 = [new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"longitude","longitude",-1268876372)];
var inst_17623 = [inst_17593,inst_17594];
var inst_17624 = cljs.core.PersistentHashMap.fromArrays(inst_17622,inst_17623);
var inst_17625 = ui.map.route.call(null,inst_17621,inst_17624);
var state_17668__$1 = state_17668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17668__$1,(27),inst_17625);
} else {
if((state_val_17669 === (16))){
var inst_17600 = (state_17668[(8)]);
var inst_17600__$1 = om.next.get_state.call(null,this$);
var inst_17602 = (inst_17600__$1 == null);
var inst_17603 = cljs.core.not.call(null,inst_17602);
var state_17668__$1 = (function (){var statearr_17710 = state_17668;
(statearr_17710[(8)] = inst_17600__$1);

return statearr_17710;
})();
if(inst_17603){
var statearr_17711_17794 = state_17668__$1;
(statearr_17711_17794[(1)] = (18));

} else {
var statearr_17712_17795 = state_17668__$1;
(statearr_17712_17795[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (38))){
var inst_17649 = (state_17668[(14)]);
var inst_17655 = L.PolylineUtil.decode(inst_17649,(6));
var inst_17656 = (new L.Polyline(inst_17655,{"color": "red", "weight": (4)}));
var inst_17657 = inst_17656.addTo(map);
var inst_17658 = inst_17656.getBounds();
var inst_17659 = map.fitBounds(inst_17658);
var state_17668__$1 = (function (){var statearr_17713 = state_17668;
(statearr_17713[(18)] = inst_17657);

return statearr_17713;
})();
var statearr_17714_17796 = state_17668__$1;
(statearr_17714_17796[(2)] = inst_17659);

(statearr_17714_17796[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (30))){
var inst_17642 = (state_17668[(2)]);
var state_17668__$1 = state_17668;
if(cljs.core.truth_(inst_17642)){
var statearr_17715_17797 = state_17668__$1;
(statearr_17715_17797[(1)] = (34));

} else {
var statearr_17716_17798 = state_17668__$1;
(statearr_17716_17798[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (10))){
var state_17668__$1 = state_17668;
var statearr_17717_17799 = state_17668__$1;
(statearr_17717_17799[(2)] = false);

(statearr_17717_17799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (18))){
var inst_17600 = (state_17668[(8)]);
var inst_17605 = inst_17600.cljs$lang$protocol_mask$partition0$;
var inst_17606 = (inst_17605 & (64));
var inst_17607 = inst_17600.cljs$core$ISeq$;
var inst_17608 = (inst_17606) || (inst_17607);
var state_17668__$1 = state_17668;
if(cljs.core.truth_(inst_17608)){
var statearr_17718_17800 = state_17668__$1;
(statearr_17718_17800[(1)] = (21));

} else {
var statearr_17719_17801 = state_17668__$1;
(statearr_17719_17801[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (37))){
var inst_17648 = (state_17668[(11)]);
var inst_17653 = console.error(inst_17648);
var state_17668__$1 = state_17668;
var statearr_17720_17802 = state_17668__$1;
(statearr_17720_17802[(2)] = inst_17653);

(statearr_17720_17802[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17669 === (8))){
var inst_17586 = (state_17668[(2)]);
var state_17668__$1 = state_17668;
if(cljs.core.truth_(inst_17586)){
var statearr_17721_17803 = state_17668__$1;
(statearr_17721_17803[(1)] = (12));

} else {
var statearr_17722_17804 = state_17668__$1;
(statearr_17722_17804[(1)] = (13));

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
});})(c__11293__auto__,map__17492,map__17492__$1,center,routing,map,this$,x17491_17737))
;
return ((function (switch__11181__auto__,c__11293__auto__,map__17492,map__17492__$1,center,routing,map,this$,x17491_17737){
return (function() {
var ui$map$state_machine__11182__auto__ = null;
var ui$map$state_machine__11182__auto____0 = (function (){
var statearr_17726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17726[(0)] = ui$map$state_machine__11182__auto__);

(statearr_17726[(1)] = (1));

return statearr_17726;
});
var ui$map$state_machine__11182__auto____1 = (function (state_17668){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_17668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e17727){if((e17727 instanceof Object)){
var ex__11185__auto__ = e17727;
var statearr_17728_17805 = state_17668;
(statearr_17728_17805[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17806 = state_17668;
state_17668 = G__17806;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
ui$map$state_machine__11182__auto__ = function(state_17668){
switch(arguments.length){
case 0:
return ui$map$state_machine__11182__auto____0.call(this);
case 1:
return ui$map$state_machine__11182__auto____1.call(this,state_17668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$map$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = ui$map$state_machine__11182__auto____0;
ui$map$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = ui$map$state_machine__11182__auto____1;
return ui$map$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto__,map__17492,map__17492__$1,center,routing,map,this$,x17491_17737))
})();
var state__11295__auto__ = (function (){var statearr_17729 = f__11294__auto__.call(null);
(statearr_17729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto__);

return statearr_17729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto__,map__17492,map__17492__$1,center,routing,map,this$,x17491_17737))
);

return c__11293__auto__;
});})(x17491_17737))
;

x17491_17737.render = ((function (x17491_17737){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_17730 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_17731 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_17732 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_17733 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_17734 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"id": "map"});
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_17734;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_17733;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_17732;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_17731;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_17730;
}});})(x17491_17737))
;


ui.map.MapView.prototype.constructor = ui.map.MapView;

ui.map.MapView.prototype.om$isComponent = true;

var x17735_17807 = ui.map.MapView;


var x17736_17808 = ui.map.MapView.prototype;


ui.map.MapView.cljs$lang$type = true;

ui.map.MapView.cljs$lang$ctorStr = "ui.map/MapView";

ui.map.MapView.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){
return cljs.core._write.call(null,writer__14368__auto__,"ui.map/MapView");
});
ui.map.view = om.next.factory.call(null,ui.map.MapView);

//# sourceMappingURL=map.js.map