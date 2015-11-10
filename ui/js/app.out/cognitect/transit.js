// Compiled by ClojureScript 1.7.170 {}
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
var seq__11947_11951 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__11948_11952 = null;
var count__11949_11953 = (0);
var i__11950_11954 = (0);
while(true){
if((i__11950_11954 < count__11949_11953)){
var k_11955 = cljs.core._nth.call(null,chunk__11948_11952,i__11950_11954);
var v_11956 = (b[k_11955]);
(a[k_11955] = v_11956);

var G__11957 = seq__11947_11951;
var G__11958 = chunk__11948_11952;
var G__11959 = count__11949_11953;
var G__11960 = (i__11950_11954 + (1));
seq__11947_11951 = G__11957;
chunk__11948_11952 = G__11958;
count__11949_11953 = G__11959;
i__11950_11954 = G__11960;
continue;
} else {
var temp__4425__auto___11961 = cljs.core.seq.call(null,seq__11947_11951);
if(temp__4425__auto___11961){
var seq__11947_11962__$1 = temp__4425__auto___11961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11947_11962__$1)){
var c__5971__auto___11963 = cljs.core.chunk_first.call(null,seq__11947_11962__$1);
var G__11964 = cljs.core.chunk_rest.call(null,seq__11947_11962__$1);
var G__11965 = c__5971__auto___11963;
var G__11966 = cljs.core.count.call(null,c__5971__auto___11963);
var G__11967 = (0);
seq__11947_11951 = G__11964;
chunk__11948_11952 = G__11965;
count__11949_11953 = G__11966;
i__11950_11954 = G__11967;
continue;
} else {
var k_11968 = cljs.core.first.call(null,seq__11947_11962__$1);
var v_11969 = (b[k_11968]);
(a[k_11968] = v_11969);

var G__11970 = cljs.core.next.call(null,seq__11947_11962__$1);
var G__11971 = null;
var G__11972 = (0);
var G__11973 = (0);
seq__11947_11951 = G__11970;
chunk__11948_11952 = G__11971;
count__11949_11953 = G__11972;
i__11950_11954 = G__11973;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cognitect.transit/VectorBuilder");
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
var args11974 = [];
var len__6226__auto___11977 = arguments.length;
var i__6227__auto___11978 = (0);
while(true){
if((i__6227__auto___11978 < len__6226__auto___11977)){
args11974.push((arguments[i__6227__auto___11978]));

var G__11979 = (i__6227__auto___11978 + (1));
i__6227__auto___11978 = G__11979;
continue;
} else {
}
break;
}

var G__11976 = args11974.length;
switch (G__11976) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11974.length)].join('')));

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
var G__11981 = (i + (2));
var G__11982 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__11981;
ret = G__11982;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cognitect.transit/SymbolHandler");
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
var seq__11983_11987 = cljs.core.seq.call(null,v);
var chunk__11984_11988 = null;
var count__11985_11989 = (0);
var i__11986_11990 = (0);
while(true){
if((i__11986_11990 < count__11985_11989)){
var x_11991 = cljs.core._nth.call(null,chunk__11984_11988,i__11986_11990);
ret.push(x_11991);

var G__11992 = seq__11983_11987;
var G__11993 = chunk__11984_11988;
var G__11994 = count__11985_11989;
var G__11995 = (i__11986_11990 + (1));
seq__11983_11987 = G__11992;
chunk__11984_11988 = G__11993;
count__11985_11989 = G__11994;
i__11986_11990 = G__11995;
continue;
} else {
var temp__4425__auto___11996 = cljs.core.seq.call(null,seq__11983_11987);
if(temp__4425__auto___11996){
var seq__11983_11997__$1 = temp__4425__auto___11996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11983_11997__$1)){
var c__5971__auto___11998 = cljs.core.chunk_first.call(null,seq__11983_11997__$1);
var G__11999 = cljs.core.chunk_rest.call(null,seq__11983_11997__$1);
var G__12000 = c__5971__auto___11998;
var G__12001 = cljs.core.count.call(null,c__5971__auto___11998);
var G__12002 = (0);
seq__11983_11987 = G__11999;
chunk__11984_11988 = G__12000;
count__11985_11989 = G__12001;
i__11986_11990 = G__12002;
continue;
} else {
var x_12003 = cljs.core.first.call(null,seq__11983_11997__$1);
ret.push(x_12003);

var G__12004 = cljs.core.next.call(null,seq__11983_11997__$1);
var G__12005 = null;
var G__12006 = (0);
var G__12007 = (0);
seq__11983_11987 = G__12004;
chunk__11984_11988 = G__12005;
count__11985_11989 = G__12006;
i__11986_11990 = G__12007;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cognitect.transit/MapHandler");
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
var seq__12008_12012 = cljs.core.seq.call(null,v);
var chunk__12009_12013 = null;
var count__12010_12014 = (0);
var i__12011_12015 = (0);
while(true){
if((i__12011_12015 < count__12010_12014)){
var x_12016 = cljs.core._nth.call(null,chunk__12009_12013,i__12011_12015);
ret.push(x_12016);

var G__12017 = seq__12008_12012;
var G__12018 = chunk__12009_12013;
var G__12019 = count__12010_12014;
var G__12020 = (i__12011_12015 + (1));
seq__12008_12012 = G__12017;
chunk__12009_12013 = G__12018;
count__12010_12014 = G__12019;
i__12011_12015 = G__12020;
continue;
} else {
var temp__4425__auto___12021 = cljs.core.seq.call(null,seq__12008_12012);
if(temp__4425__auto___12021){
var seq__12008_12022__$1 = temp__4425__auto___12021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12008_12022__$1)){
var c__5971__auto___12023 = cljs.core.chunk_first.call(null,seq__12008_12022__$1);
var G__12024 = cljs.core.chunk_rest.call(null,seq__12008_12022__$1);
var G__12025 = c__5971__auto___12023;
var G__12026 = cljs.core.count.call(null,c__5971__auto___12023);
var G__12027 = (0);
seq__12008_12012 = G__12024;
chunk__12009_12013 = G__12025;
count__12010_12014 = G__12026;
i__12011_12015 = G__12027;
continue;
} else {
var x_12028 = cljs.core.first.call(null,seq__12008_12022__$1);
ret.push(x_12028);

var G__12029 = cljs.core.next.call(null,seq__12008_12022__$1);
var G__12030 = null;
var G__12031 = (0);
var G__12032 = (0);
seq__12008_12012 = G__12029;
chunk__12009_12013 = G__12030;
count__12010_12014 = G__12031;
i__12011_12015 = G__12032;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cognitect.transit/SetHandler");
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
var seq__12033_12037 = cljs.core.seq.call(null,v);
var chunk__12034_12038 = null;
var count__12035_12039 = (0);
var i__12036_12040 = (0);
while(true){
if((i__12036_12040 < count__12035_12039)){
var x_12041 = cljs.core._nth.call(null,chunk__12034_12038,i__12036_12040);
ret.push(x_12041);

var G__12042 = seq__12033_12037;
var G__12043 = chunk__12034_12038;
var G__12044 = count__12035_12039;
var G__12045 = (i__12036_12040 + (1));
seq__12033_12037 = G__12042;
chunk__12034_12038 = G__12043;
count__12035_12039 = G__12044;
i__12036_12040 = G__12045;
continue;
} else {
var temp__4425__auto___12046 = cljs.core.seq.call(null,seq__12033_12037);
if(temp__4425__auto___12046){
var seq__12033_12047__$1 = temp__4425__auto___12046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12033_12047__$1)){
var c__5971__auto___12048 = cljs.core.chunk_first.call(null,seq__12033_12047__$1);
var G__12049 = cljs.core.chunk_rest.call(null,seq__12033_12047__$1);
var G__12050 = c__5971__auto___12048;
var G__12051 = cljs.core.count.call(null,c__5971__auto___12048);
var G__12052 = (0);
seq__12033_12037 = G__12049;
chunk__12034_12038 = G__12050;
count__12035_12039 = G__12051;
i__12036_12040 = G__12052;
continue;
} else {
var x_12053 = cljs.core.first.call(null,seq__12033_12047__$1);
ret.push(x_12053);

var G__12054 = cljs.core.next.call(null,seq__12033_12047__$1);
var G__12055 = null;
var G__12056 = (0);
var G__12057 = (0);
seq__12033_12037 = G__12054;
chunk__12034_12038 = G__12055;
count__12035_12039 = G__12056;
i__12036_12040 = G__12057;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cognitect.transit/UUIDHandler");
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
var args12058 = [];
var len__6226__auto___12069 = arguments.length;
var i__6227__auto___12070 = (0);
while(true){
if((i__6227__auto___12070 < len__6226__auto___12069)){
args12058.push((arguments[i__6227__auto___12070]));

var G__12071 = (i__6227__auto___12070 + (1));
i__6227__auto___12070 = G__12071;
continue;
} else {
}
break;
}

var G__12060 = args12058.length;
switch (G__12060) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12058.length)].join('')));

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
var G__12061 = obj;
G__12061.push(kfn.call(null,k),vfn.call(null,v));

return G__12061;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x12062 = cljs.core.clone.call(null,handlers);
x12062.forEach = ((function (x12062,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__12063 = cljs.core.seq.call(null,coll);
var chunk__12064 = null;
var count__12065 = (0);
var i__12066 = (0);
while(true){
if((i__12066 < count__12065)){
var vec__12067 = cljs.core._nth.call(null,chunk__12064,i__12066);
var k = cljs.core.nth.call(null,vec__12067,(0),null);
var v = cljs.core.nth.call(null,vec__12067,(1),null);
f.call(null,v,k);

var G__12073 = seq__12063;
var G__12074 = chunk__12064;
var G__12075 = count__12065;
var G__12076 = (i__12066 + (1));
seq__12063 = G__12073;
chunk__12064 = G__12074;
count__12065 = G__12075;
i__12066 = G__12076;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12063);
if(temp__4425__auto__){
var seq__12063__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12063__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__12063__$1);
var G__12077 = cljs.core.chunk_rest.call(null,seq__12063__$1);
var G__12078 = c__5971__auto__;
var G__12079 = cljs.core.count.call(null,c__5971__auto__);
var G__12080 = (0);
seq__12063 = G__12077;
chunk__12064 = G__12078;
count__12065 = G__12079;
i__12066 = G__12080;
continue;
} else {
var vec__12068 = cljs.core.first.call(null,seq__12063__$1);
var k = cljs.core.nth.call(null,vec__12068,(0),null);
var v = cljs.core.nth.call(null,vec__12068,(1),null);
f.call(null,v,k);

var G__12081 = cljs.core.next.call(null,seq__12063__$1);
var G__12082 = null;
var G__12083 = (0);
var G__12084 = (0);
seq__12063 = G__12081;
chunk__12064 = G__12082;
count__12065 = G__12083;
i__12066 = G__12084;
continue;
}
} else {
return null;
}
}
break;
}
});})(x12062,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x12062;
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
var args12085 = [];
var len__6226__auto___12091 = arguments.length;
var i__6227__auto___12092 = (0);
while(true){
if((i__6227__auto___12092 < len__6226__auto___12091)){
args12085.push((arguments[i__6227__auto___12092]));

var G__12093 = (i__6227__auto___12092 + (1));
i__6227__auto___12092 = G__12093;
continue;
} else {
}
break;
}

var G__12087 = args12085.length;
switch (G__12087) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12085.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit12088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit12088 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta12089){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta12089 = meta12089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit12088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12090,meta12089__$1){
var self__ = this;
var _12090__$1 = this;
return (new cognitect.transit.t_cognitect$transit12088(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta12089__$1));
});

cognitect.transit.t_cognitect$transit12088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12090){
var self__ = this;
var _12090__$1 = this;
return self__.meta12089;
});

cognitect.transit.t_cognitect$transit12088.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit12088.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit12088.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit12088.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit12088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta12089","meta12089",-1722193390,null)], null);
});

cognitect.transit.t_cognitect$transit12088.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit12088.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit12088";

cognitect.transit.t_cognitect$transit12088.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cognitect.transit/t_cognitect$transit12088");
});

cognitect.transit.__GT_t_cognitect$transit12088 = (function cognitect$transit$__GT_t_cognitect$transit12088(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12089){
return (new cognitect.transit.t_cognitect$transit12088(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta12089));
});

}

return (new cognitect.transit.t_cognitect$transit12088(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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