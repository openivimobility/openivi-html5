// Compiled by ClojureScript 1.7.166 {}
goog.provide('ui.gps');
goog.require('cljs.core');

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
ui.gps.Position = (function (latitude,longitude,timestamp,__meta,__extmap,__hash){
this.latitude = latitude;
this.longitude = longitude;
this.timestamp = timestamp;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ui.gps.Position.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5774__auto__,k__5775__auto__){
var self__ = this;
var this__5774__auto____$1 = this;
return cljs.core._lookup.call(null,this__5774__auto____$1,k__5775__auto__,null);
});

ui.gps.Position.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5776__auto__,k17865,else__5777__auto__){
var self__ = this;
var this__5776__auto____$1 = this;
var G__17867 = (((k17865 instanceof cljs.core.Keyword))?k17865.fqn:null);
switch (G__17867) {
case "latitude":
return self__.latitude;

break;
case "longitude":
return self__.longitude;

break;
case "timestamp":
return self__.timestamp;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17865,else__5777__auto__);

}
});

ui.gps.Position.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5788__auto__,writer__5789__auto__,opts__5790__auto__){
var self__ = this;
var this__5788__auto____$1 = this;
var pr_pair__5791__auto__ = ((function (this__5788__auto____$1){
return (function (keyval__5792__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5789__auto__,cljs.core.pr_writer,""," ","",opts__5790__auto__,keyval__5792__auto__);
});})(this__5788__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5789__auto__,pr_pair__5791__auto__,"#ui.gps.Position{",", ","}",opts__5790__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"latitude","latitude",394867543),self__.latitude],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"longitude","longitude",-1268876372),self__.longitude],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timestamp","timestamp",579478971),self__.timestamp],null))], null),self__.__extmap));
});

ui.gps.Position.prototype.cljs$core$IIterable$ = true;

ui.gps.Position.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17864){
var self__ = this;
var G__17864__$1 = this;
return (new cljs.core.RecordIter((0),G__17864__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ui.gps.Position.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5772__auto__){
var self__ = this;
var this__5772__auto____$1 = this;
return self__.__meta;
});

ui.gps.Position.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5768__auto__){
var self__ = this;
var this__5768__auto____$1 = this;
return (new ui.gps.Position(self__.latitude,self__.longitude,self__.timestamp,self__.__meta,self__.__extmap,self__.__hash));
});

ui.gps.Position.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5778__auto__){
var self__ = this;
var this__5778__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ui.gps.Position.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5769__auto__){
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

ui.gps.Position.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5770__auto__,other__5771__auto__){
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

ui.gps.Position.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5783__auto__,k__5784__auto__){
var self__ = this;
var this__5783__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),null,new cljs.core.Keyword(null,"latitude","latitude",394867543),null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),null], null), null),k__5784__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5783__auto____$1),self__.__meta),k__5784__auto__);
} else {
return (new ui.gps.Position(self__.latitude,self__.longitude,self__.timestamp,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5784__auto__)),null));
}
});

ui.gps.Position.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5781__auto__,k__5782__auto__,G__17864){
var self__ = this;
var this__5781__auto____$1 = this;
var pred__17868 = cljs.core.keyword_identical_QMARK_;
var expr__17869 = k__5782__auto__;
if(cljs.core.truth_(pred__17868.call(null,new cljs.core.Keyword(null,"latitude","latitude",394867543),expr__17869))){
return (new ui.gps.Position(G__17864,self__.longitude,self__.timestamp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17868.call(null,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),expr__17869))){
return (new ui.gps.Position(self__.latitude,G__17864,self__.timestamp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17868.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),expr__17869))){
return (new ui.gps.Position(self__.latitude,self__.longitude,G__17864,self__.__meta,self__.__extmap,null));
} else {
return (new ui.gps.Position(self__.latitude,self__.longitude,self__.timestamp,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5782__auto__,G__17864),null));
}
}
}
});

ui.gps.Position.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5786__auto__){
var self__ = this;
var this__5786__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"latitude","latitude",394867543),self__.latitude],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"longitude","longitude",-1268876372),self__.longitude],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timestamp","timestamp",579478971),self__.timestamp],null))], null),self__.__extmap));
});

ui.gps.Position.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5773__auto__,G__17864){
var self__ = this;
var this__5773__auto____$1 = this;
return (new ui.gps.Position(self__.latitude,self__.longitude,self__.timestamp,G__17864,self__.__extmap,self__.__hash));
});

ui.gps.Position.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5779__auto__,entry__5780__auto__){
var self__ = this;
var this__5779__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5780__auto__)){
return cljs.core._assoc.call(null,this__5779__auto____$1,cljs.core._nth.call(null,entry__5780__auto__,(0)),cljs.core._nth.call(null,entry__5780__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5779__auto____$1,entry__5780__auto__);
}
});

ui.gps.Position.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"latitude","latitude",2035399070,null),new cljs.core.Symbol(null,"longitude","longitude",371655155,null),new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null)], null);
});

ui.gps.Position.cljs$lang$type = true;

ui.gps.Position.cljs$lang$ctorPrSeq = (function (this__5808__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ui.gps/Position");
});

ui.gps.Position.cljs$lang$ctorPrWriter = (function (this__5808__auto__,writer__5809__auto__){
return cljs.core._write.call(null,writer__5809__auto__,"ui.gps/Position");
});

ui.gps.__GT_Position = (function ui$gps$__GT_Position(latitude,longitude,timestamp){
return (new ui.gps.Position(latitude,longitude,timestamp,null,null,null));
});

ui.gps.map__GT_Position = (function ui$gps$map__GT_Position(G__17866){
return (new ui.gps.Position(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(G__17866),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(G__17866),new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(G__17866),null,cljs.core.dissoc.call(null,G__17866,new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)),null));
});

ui.gps.new_position = (function ui$gps$new_position(position){
var coords = position.coords;
var timestamp = position.timestamp;
var latitude = coords.latitude;
var longitude = coords.longitude;
return ui.gps.__GT_Position.call(null,latitude,longitude,timestamp);
});
ui.gps.with_gps = (function ui$gps$with_gps(f){
var temp__4423__auto__ = navigator.geolocation;
if(cljs.core.truth_(temp__4423__auto__)){
var gps = temp__4423__auto__;
return f.call(null,gps);
} else {
return console.error("Geolocation is not supported by this browser.");
}
});
ui.gps.start = (function ui$gps$start(f){
return ui.gps.with_gps.call(null,(function (p1__17872_SHARP_){
return p1__17872_SHARP_.watchPosition(cljs.core.comp.call(null,f,ui.gps.new_position));
}));
});
ui.gps.location = (function ui$gps$location(f){
return ui.gps.with_gps.call(null,(function (p1__17873_SHARP_){
return p1__17873_SHARP_.getCurrentPosition(cljs.core.comp.call(null,f,ui.gps.new_position));
}));
});
ui.gps.stop = (function ui$gps$stop(){
return ui.gps.with_gps.call(null,(function (p1__17874_SHARP_){
return p1__17874_SHARP_.clearWatch();
}));
});

//# sourceMappingURL=gps.js.map