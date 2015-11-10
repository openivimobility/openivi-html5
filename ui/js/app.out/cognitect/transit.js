// Compiled by ClojureScript 1.7.166 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__6565_6569 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__6566_6570 = null;
var count__6567_6571 = (0);
var i__6568_6572 = (0);
while(true){
if((i__6568_6572 < count__6567_6571)){
var k_6573 = cljs.core._nth.call(null,chunk__6566_6570,i__6568_6572);
var v_6574 = (b[k_6573]);
(a[k_6573] = v_6574);

var G__6575 = seq__6565_6569;
var G__6576 = chunk__6566_6570;
var G__6577 = count__6567_6571;
var G__6578 = (i__6568_6572 + (1));
seq__6565_6569 = G__6575;
chunk__6566_6570 = G__6576;
count__6567_6571 = G__6577;
i__6568_6572 = G__6578;
continue;
} else {
var temp__4425__auto___6579 = cljs.core.seq.call(null,seq__6565_6569);
if(temp__4425__auto___6579){
var seq__6565_6580__$1 = temp__4425__auto___6579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6565_6580__$1)){
var c__5963__auto___6581 = cljs.core.chunk_first.call(null,seq__6565_6580__$1);
var G__6582 = cljs.core.chunk_rest.call(null,seq__6565_6580__$1);
var G__6583 = c__5963__auto___6581;
var G__6584 = cljs.core.count.call(null,c__5963__auto___6581);
var G__6585 = (0);
seq__6565_6569 = G__6582;
chunk__6566_6570 = G__6583;
count__6567_6571 = G__6584;
i__6568_6572 = G__6585;
continue;
} else {
var k_6586 = cljs.core.first.call(null,seq__6565_6580__$1);
var v_6587 = (b[k_6586]);
(a[k_6586] = v_6587);

var G__6588 = cljs.core.next.call(null,seq__6565_6580__$1);
var G__6589 = null;
var G__6590 = (0);
var G__6591 = (0);
seq__6565_6569 = G__6588;
chunk__6566_6570 = G__6589;
count__6567_6571 = G__6590;
i__6568_6572 = G__6591;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args6592 = [];
var len__6218__auto___6595 = arguments.length;
var i__6219__auto___6596 = (0);
while(true){
if((i__6219__auto___6596 < len__6218__auto___6595)){
args6592.push((arguments[i__6219__auto___6596]));

var G__6597 = (i__6219__auto___6596 + (1));
i__6219__auto___6596 = G__6597;
continue;
} else {
}
break;
}

var G__6594 = args6592.length;
switch (G__6594) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6592.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__6599 = (i + (2));
var G__6600 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__6599;
ret = G__6600;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__6601_6605 = cljs.core.seq.call(null,v);
var chunk__6602_6606 = null;
var count__6603_6607 = (0);
var i__6604_6608 = (0);
while(true){
if((i__6604_6608 < count__6603_6607)){
var x_6609 = cljs.core._nth.call(null,chunk__6602_6606,i__6604_6608);
ret.push(x_6609);

var G__6610 = seq__6601_6605;
var G__6611 = chunk__6602_6606;
var G__6612 = count__6603_6607;
var G__6613 = (i__6604_6608 + (1));
seq__6601_6605 = G__6610;
chunk__6602_6606 = G__6611;
count__6603_6607 = G__6612;
i__6604_6608 = G__6613;
continue;
} else {
var temp__4425__auto___6614 = cljs.core.seq.call(null,seq__6601_6605);
if(temp__4425__auto___6614){
var seq__6601_6615__$1 = temp__4425__auto___6614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6601_6615__$1)){
var c__5963__auto___6616 = cljs.core.chunk_first.call(null,seq__6601_6615__$1);
var G__6617 = cljs.core.chunk_rest.call(null,seq__6601_6615__$1);
var G__6618 = c__5963__auto___6616;
var G__6619 = cljs.core.count.call(null,c__5963__auto___6616);
var G__6620 = (0);
seq__6601_6605 = G__6617;
chunk__6602_6606 = G__6618;
count__6603_6607 = G__6619;
i__6604_6608 = G__6620;
continue;
} else {
var x_6621 = cljs.core.first.call(null,seq__6601_6615__$1);
ret.push(x_6621);

var G__6622 = cljs.core.next.call(null,seq__6601_6615__$1);
var G__6623 = null;
var G__6624 = (0);
var G__6625 = (0);
seq__6601_6605 = G__6622;
chunk__6602_6606 = G__6623;
count__6603_6607 = G__6624;
i__6604_6608 = G__6625;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__6626_6630 = cljs.core.seq.call(null,v);
var chunk__6627_6631 = null;
var count__6628_6632 = (0);
var i__6629_6633 = (0);
while(true){
if((i__6629_6633 < count__6628_6632)){
var x_6634 = cljs.core._nth.call(null,chunk__6627_6631,i__6629_6633);
ret.push(x_6634);

var G__6635 = seq__6626_6630;
var G__6636 = chunk__6627_6631;
var G__6637 = count__6628_6632;
var G__6638 = (i__6629_6633 + (1));
seq__6626_6630 = G__6635;
chunk__6627_6631 = G__6636;
count__6628_6632 = G__6637;
i__6629_6633 = G__6638;
continue;
} else {
var temp__4425__auto___6639 = cljs.core.seq.call(null,seq__6626_6630);
if(temp__4425__auto___6639){
var seq__6626_6640__$1 = temp__4425__auto___6639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6626_6640__$1)){
var c__5963__auto___6641 = cljs.core.chunk_first.call(null,seq__6626_6640__$1);
var G__6642 = cljs.core.chunk_rest.call(null,seq__6626_6640__$1);
var G__6643 = c__5963__auto___6641;
var G__6644 = cljs.core.count.call(null,c__5963__auto___6641);
var G__6645 = (0);
seq__6626_6630 = G__6642;
chunk__6627_6631 = G__6643;
count__6628_6632 = G__6644;
i__6629_6633 = G__6645;
continue;
} else {
var x_6646 = cljs.core.first.call(null,seq__6626_6640__$1);
ret.push(x_6646);

var G__6647 = cljs.core.next.call(null,seq__6626_6640__$1);
var G__6648 = null;
var G__6649 = (0);
var G__6650 = (0);
seq__6626_6630 = G__6647;
chunk__6627_6631 = G__6648;
count__6628_6632 = G__6649;
i__6629_6633 = G__6650;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__6651_6655 = cljs.core.seq.call(null,v);
var chunk__6652_6656 = null;
var count__6653_6657 = (0);
var i__6654_6658 = (0);
while(true){
if((i__6654_6658 < count__6653_6657)){
var x_6659 = cljs.core._nth.call(null,chunk__6652_6656,i__6654_6658);
ret.push(x_6659);

var G__6660 = seq__6651_6655;
var G__6661 = chunk__6652_6656;
var G__6662 = count__6653_6657;
var G__6663 = (i__6654_6658 + (1));
seq__6651_6655 = G__6660;
chunk__6652_6656 = G__6661;
count__6653_6657 = G__6662;
i__6654_6658 = G__6663;
continue;
} else {
var temp__4425__auto___6664 = cljs.core.seq.call(null,seq__6651_6655);
if(temp__4425__auto___6664){
var seq__6651_6665__$1 = temp__4425__auto___6664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6651_6665__$1)){
var c__5963__auto___6666 = cljs.core.chunk_first.call(null,seq__6651_6665__$1);
var G__6667 = cljs.core.chunk_rest.call(null,seq__6651_6665__$1);
var G__6668 = c__5963__auto___6666;
var G__6669 = cljs.core.count.call(null,c__5963__auto___6666);
var G__6670 = (0);
seq__6651_6655 = G__6667;
chunk__6652_6656 = G__6668;
count__6653_6657 = G__6669;
i__6654_6658 = G__6670;
continue;
} else {
var x_6671 = cljs.core.first.call(null,seq__6651_6665__$1);
ret.push(x_6671);

var G__6672 = cljs.core.next.call(null,seq__6651_6665__$1);
var G__6673 = null;
var G__6674 = (0);
var G__6675 = (0);
seq__6651_6655 = G__6672;
chunk__6652_6656 = G__6673;
count__6653_6657 = G__6674;
i__6654_6658 = G__6675;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a JavaScript
 * array of interleaved type constructors and handler instances for those 
 * type constructors.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args6676 = [];
var len__6218__auto___6687 = arguments.length;
var i__6219__auto___6688 = (0);
while(true){
if((i__6219__auto___6688 < len__6218__auto___6687)){
args6676.push((arguments[i__6219__auto___6688]));

var G__6689 = (i__6219__auto___6688 + (1));
i__6219__auto___6688 = G__6689;
continue;
} else {
}
break;
}

var G__6678 = args6676.length;
switch (G__6678) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6676.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__6679 = obj;
G__6679.push(kfn.call(null,k),vfn.call(null,v));

return G__6679;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x6680 = cljs.core.clone.call(null,handlers);
x6680.forEach = ((function (x6680,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__6681 = cljs.core.seq.call(null,coll);
var chunk__6682 = null;
var count__6683 = (0);
var i__6684 = (0);
while(true){
if((i__6684 < count__6683)){
var vec__6685 = cljs.core._nth.call(null,chunk__6682,i__6684);
var k = cljs.core.nth.call(null,vec__6685,(0),null);
var v = cljs.core.nth.call(null,vec__6685,(1),null);
f.call(null,v,k);

var G__6691 = seq__6681;
var G__6692 = chunk__6682;
var G__6693 = count__6683;
var G__6694 = (i__6684 + (1));
seq__6681 = G__6691;
chunk__6682 = G__6692;
count__6683 = G__6693;
i__6684 = G__6694;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6681);
if(temp__4425__auto__){
var seq__6681__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6681__$1)){
var c__5963__auto__ = cljs.core.chunk_first.call(null,seq__6681__$1);
var G__6695 = cljs.core.chunk_rest.call(null,seq__6681__$1);
var G__6696 = c__5963__auto__;
var G__6697 = cljs.core.count.call(null,c__5963__auto__);
var G__6698 = (0);
seq__6681 = G__6695;
chunk__6682 = G__6696;
count__6683 = G__6697;
i__6684 = G__6698;
continue;
} else {
var vec__6686 = cljs.core.first.call(null,seq__6681__$1);
var k = cljs.core.nth.call(null,vec__6686,(0),null);
var v = cljs.core.nth.call(null,vec__6686,(1),null);
f.call(null,v,k);

var G__6699 = cljs.core.next.call(null,seq__6681__$1);
var G__6700 = null;
var G__6701 = (0);
var G__6702 = (0);
seq__6681 = G__6699;
chunk__6682 = G__6700;
count__6683 = G__6701;
i__6684 = G__6702;
continue;
}
} else {
return null;
}
}
break;
}
});})(x6680,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x6680;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args6703 = [];
var len__6218__auto___6709 = arguments.length;
var i__6219__auto___6710 = (0);
while(true){
if((i__6219__auto___6710 < len__6218__auto___6709)){
args6703.push((arguments[i__6219__auto___6710]));

var G__6711 = (i__6219__auto___6710 + (1));
i__6219__auto___6710 = G__6711;
continue;
} else {
}
break;
}

var G__6705 = args6703.length;
switch (G__6705) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6703.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit6706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit6706 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta6707){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta6707 = meta6707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit6706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6708,meta6707__$1){
var self__ = this;
var _6708__$1 = this;
return (new cognitect.transit.t_cognitect$transit6706(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta6707__$1));
});

cognitect.transit.t_cognitect$transit6706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6708){
var self__ = this;
var _6708__$1 = this;
return self__.meta6707;
});

cognitect.transit.t_cognitect$transit6706.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit6706.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit6706.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit6706.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit6706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta6707","meta6707",-1351515573,null)], null);
});

cognitect.transit.t_cognitect$transit6706.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit6706.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit6706";

cognitect.transit.t_cognitect$transit6706.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cognitect.transit/t_cognitect$transit6706");
});

cognitect.transit.__GT_t_cognitect$transit6706 = (function cognitect$transit$__GT_t_cognitect$transit6706(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta6707){
return (new cognitect.transit.t_cognitect$transit6706(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta6707));
});

}

return (new cognitect.transit.t_cognitect$transit6706(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map