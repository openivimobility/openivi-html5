// Compiled by ClojureScript 1.7.166 {}
goog.provide('cats.monad.either');
goog.require('cljs.core');
goog.require('cats.protocols');
goog.require('cats.context');
cats.monad.either.context;

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cats.protocols.Extract}
 * @implements {cljs.core.IDeref}
 * @implements {cats.protocols.Contextual}
*/
cats.monad.either.Right = (function (v){
this.v = v;
this.cljs$lang$protocol_mask$partition0$ = 2129920;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cats.monad.either.Right.prototype.cats$protocols$Contextual$ = true;

cats.monad.either.Right.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.monad.either.context;
});

cats.monad.either.Right.prototype.cats$protocols$Extract$ = true;

cats.monad.either.Right.prototype.cats$protocols$Extract$_extract$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
});

cats.monad.either.Right.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
});

cats.monad.either.Right.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cats.monad.either.Right)){
return cljs.core._EQ_.call(null,self__.v,other.v);
} else {
return false;
}
});

cats.monad.either.Right.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
});

cats.monad.either.Right.cljs$lang$type = true;

cats.monad.either.Right.cljs$lang$ctorStr = "cats.monad.either/Right";

cats.monad.either.Right.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cats.monad.either/Right");
});

cats.monad.either.__GT_Right = (function cats$monad$either$__GT_Right(v){
return (new cats.monad.either.Right(v));
});


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cats.protocols.Extract}
 * @implements {cljs.core.IDeref}
 * @implements {cats.protocols.Contextual}
*/
cats.monad.either.Left = (function (v){
this.v = v;
this.cljs$lang$protocol_mask$partition0$ = 2129920;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cats.monad.either.Left.prototype.cats$protocols$Contextual$ = true;

cats.monad.either.Left.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.monad.either.context;
});

cats.monad.either.Left.prototype.cats$protocols$Extract$ = true;

cats.monad.either.Left.prototype.cats$protocols$Extract$_extract$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
});

cats.monad.either.Left.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
});

cats.monad.either.Left.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cats.monad.either.Left)){
return cljs.core._EQ_.call(null,self__.v,other.v);
} else {
return false;
}
});

cats.monad.either.Left.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
});

cats.monad.either.Left.cljs$lang$type = true;

cats.monad.either.Left.cljs$lang$ctorStr = "cats.monad.either/Left";

cats.monad.either.Left.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cats.monad.either/Left");
});

cats.monad.either.__GT_Left = (function cats$monad$either$__GT_Left(v){
return (new cats.monad.either.Left(v));
});

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return cats.monad.either.__GT_Right;},new cljs.core.Symbol("cats.monad.either","->Right","cats.monad.either/->Right",-535712357,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",-5615896),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",-1245752602,null),null,new cljs.core.Symbol("cats.protocols","Extract","cats.protocols/Extract",2103877014,null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",1331648568,null),null,new cljs.core.Symbol("cats.protocols","Contextual","cats.protocols/Contextual",1524429182,null),null], null), null),new cljs.core.Symbol(null,"cats.monad.either","cats.monad.either",1750269820,null),new cljs.core.Symbol(null,"->Right","->Right",2073405232,null),"/Users/txus/.boot/cache/tmp/Users/txus/Code/Ats/sota_hmi/ui/l3c/-jstf34/js/app.out/cats/monad/either.cljc",15,1,new cljs.core.Keyword(null,"positional","positional",-203580463),49,49,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",-1245752602,null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",1331648568,null),null], null), null),null,(cljs.core.truth_(cats.monad.either.__GT_Right)?cats.monad.either.__GT_Right.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"private","private",-558947994),true);
cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return cats.monad.either.__GT_Left;},new cljs.core.Symbol("cats.monad.either","->Left","cats.monad.either/->Left",-2141500372,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",-5615896),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",-1245752602,null),null,new cljs.core.Symbol("cats.protocols","Extract","cats.protocols/Extract",2103877014,null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",1331648568,null),null,new cljs.core.Symbol("cats.protocols","Contextual","cats.protocols/Contextual",1524429182,null),null], null), null),new cljs.core.Symbol(null,"cats.monad.either","cats.monad.either",1750269820,null),new cljs.core.Symbol(null,"->Left","->Left",-2143679,null),"/Users/txus/.boot/cache/tmp/Users/txus/Code/Ats/sota_hmi/ui/l3c/-jstf34/js/app.out/cats/monad/either.cljc",14,1,new cljs.core.Keyword(null,"positional","positional",-203580463),78,78,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",-1245752602,null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",1331648568,null),null], null), null),null,(cljs.core.truth_(cats.monad.either.__GT_Left)?cats.monad.either.__GT_Left.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"private","private",-558947994),true);
/**
 * A Left type constructor.
 */
cats.monad.either.left = (function cats$monad$either$left(var_args){
var args6285 = [];
var len__6218__auto___6288 = arguments.length;
var i__6219__auto___6289 = (0);
while(true){
if((i__6219__auto___6289 < len__6218__auto___6288)){
args6285.push((arguments[i__6219__auto___6289]));

var G__6290 = (i__6219__auto___6289 + (1));
i__6219__auto___6289 = G__6290;
continue;
} else {
}
break;
}

var G__6287 = args6285.length;
switch (G__6287) {
case 0:
return cats.monad.either.left.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cats.monad.either.left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6285.length)].join('')));

}
});

cats.monad.either.left.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new cats.monad.either.Left(null));
});

cats.monad.either.left.cljs$core$IFn$_invoke$arity$1 = (function (v){
return (new cats.monad.either.Left(v));
});

cats.monad.either.left.cljs$lang$maxFixedArity = 1;
/**
 * A Right type constructor.
 */
cats.monad.either.right = (function cats$monad$either$right(var_args){
var args6292 = [];
var len__6218__auto___6295 = arguments.length;
var i__6219__auto___6296 = (0);
while(true){
if((i__6219__auto___6296 < len__6218__auto___6295)){
args6292.push((arguments[i__6219__auto___6296]));

var G__6297 = (i__6219__auto___6296 + (1));
i__6219__auto___6296 = G__6297;
continue;
} else {
}
break;
}

var G__6294 = args6292.length;
switch (G__6294) {
case 0:
return cats.monad.either.right.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cats.monad.either.right.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6292.length)].join('')));

}
});

cats.monad.either.right.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new cats.monad.either.Right(null));
});

cats.monad.either.right.cljs$core$IFn$_invoke$arity$1 = (function (v){
return (new cats.monad.either.Right(v));
});

cats.monad.either.right.cljs$lang$maxFixedArity = 1;
/**
 * Return true if `v` is an instance
 *   of Left type.
 */
cats.monad.either.left_QMARK_ = (function cats$monad$either$left_QMARK_(v){
return (v instanceof cats.monad.either.Left);
});
/**
 * Return true if `v` is an instance
 *   of Right type.
 */
cats.monad.either.right_QMARK_ = (function cats$monad$either$right_QMARK_(v){
return (v instanceof cats.monad.either.Right);
});
/**
 * Return true in case of `v` is instance
 *   of Either monad.
 */
cats.monad.either.either_QMARK_ = (function cats$monad$either$either_QMARK_(v){
if(((!((v == null)))?(((false) || (v.cats$protocols$Contextual$))?true:(((!v.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Contextual,v):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Contextual,v))){
return (cats.protocols._get_context.call(null,v) === cats.monad.either.context);
} else {
return false;
}
});
cats.monad.either.context = (function (){
if(typeof cats.monad.either.t_cats$monad$either6301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Foldable}
 * @implements {cats.protocols.Traversable}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
*/
cats.monad.either.t_cats$monad$either6301 = (function (meta6302){
this.meta6302 = meta6302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cats.monad.either.t_cats$monad$either6301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6303,meta6302__$1){
var self__ = this;
var _6303__$1 = this;
return (new cats.monad.either.t_cats$monad$either6301(meta6302__$1));
});

cats.monad.either.t_cats$monad$either6301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6303){
var self__ = this;
var _6303__$1 = this;
return self__.meta6302;
});

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Context$ = true;

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Context$_get_level$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.context._PLUS_level_default_PLUS_;
});

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Functor$ = true;

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (_,f,s){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cats.monad.either.right_QMARK_.call(null,s))){
return cats.monad.either.right.call(null,f.call(null,s.v));
} else {
return s;
}
});

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Applicative$ = true;

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cats.monad.either.right.call(null,v);
});

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (m,af,av){
var self__ = this;
var m__$1 = this;
if(cljs.core.truth_(cats.monad.either.right_QMARK_.call(null,af))){
return cats.protocols._fmap.call(null,m__$1,af.v,av);
} else {
return af;
}
});

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Monad$ = true;

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cats.monad.either.right.call(null,v);
});

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,s,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cats.monad.either.right_QMARK_.call(null,s))){
return f.call(null,s.v);
} else {
return s;
}
});

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Foldable$ = true;

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Foldable$_foldl$arity$4 = (function (_,f,z,mv){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cats.monad.either.right_QMARK_.call(null,mv))){
return f.call(null,z,cats.protocols._extract.call(null,mv));
} else {
return z;
}
});

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Foldable$_foldr$arity$4 = (function (_,f,z,mv){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cats.monad.either.right_QMARK_.call(null,mv))){
return f.call(null,cats.protocols._extract.call(null,mv),z);
} else {
return z;
}
});

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Traversable$ = true;

cats.monad.either.t_cats$monad$either6301.prototype.cats$protocols$Traversable$_traverse$arity$3 = (function (_,f,mv){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cats.monad.either.right_QMARK_.call(null,mv))){
var a = f.call(null,cats.protocols._extract.call(null,mv));
return cats.protocols._fmap.call(null,cats.protocols._get_context.call(null,a),cats.monad.either.right,a);
} else {
return cats.protocols._pure.call(null,cats.context.get_current.call(null),mv);
}
});

cats.monad.either.t_cats$monad$either6301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta6302","meta6302",342241702,null)], null);
});

cats.monad.either.t_cats$monad$either6301.cljs$lang$type = true;

cats.monad.either.t_cats$monad$either6301.cljs$lang$ctorStr = "cats.monad.either/t_cats$monad$either6301";

cats.monad.either.t_cats$monad$either6301.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cats.monad.either/t_cats$monad$either6301");
});

cats.monad.either.__GT_t_cats$monad$either6301 = (function cats$monad$either$__GT_t_cats$monad$either6301(meta6302){
return (new cats.monad.either.t_cats$monad$either6301(meta6302));
});

}

return (new cats.monad.either.t_cats$monad$either6301(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The Either transformer constructor.
 */
cats.monad.either.either_t = (function cats$monad$either$either_t(inner_monad){
if(typeof cats.monad.either.t_cats$monad$either6307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.MonadTrans}
 * @implements {cats.protocols.Monad}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
*/
cats.monad.either.t_cats$monad$either6307 = (function (either_t,inner_monad,meta6308){
this.either_t = either_t;
this.inner_monad = inner_monad;
this.meta6308 = meta6308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cats.monad.either.t_cats$monad$either6307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6309,meta6308__$1){
var self__ = this;
var _6309__$1 = this;
return (new cats.monad.either.t_cats$monad$either6307(self__.either_t,self__.inner_monad,meta6308__$1));
});

cats.monad.either.t_cats$monad$either6307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6309){
var self__ = this;
var _6309__$1 = this;
return self__.meta6308;
});

cats.monad.either.t_cats$monad$either6307.prototype.cats$protocols$Context$ = true;

cats.monad.either.t_cats$monad$either6307.prototype.cats$protocols$Context$_get_level$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.context._PLUS_level_transformer_PLUS_;
});

cats.monad.either.t_cats$monad$either6307.prototype.cats$protocols$Monad$ = true;

cats.monad.either.t_cats$monad$either6307.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cats.protocols._mreturn.call(null,self__.inner_monad,cats.monad.either.right.call(null,v));
});

cats.monad.either.t_cats$monad$either6307.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (_,mv,f){
var self__ = this;
var ___$1 = this;
return cats.protocols._mbind.call(null,self__.inner_monad,mv,((function (___$1){
return (function (either_v){
if(cljs.core.truth_(cats.monad.either.left_QMARK_.call(null,either_v))){
return cats.protocols._mreturn.call(null,self__.inner_monad,either_v);
} else {
return f.call(null,cats.protocols._extract.call(null,either_v));
}
});})(___$1))
);
});

cats.monad.either.t_cats$monad$either6307.prototype.cats$protocols$MonadTrans$ = true;

cats.monad.either.t_cats$monad$either6307.prototype.cats$protocols$MonadTrans$_lift$arity$2 = (function (m,mv){
var self__ = this;
var m__$1 = this;
return cats.protocols._mbind.call(null,self__.inner_monad,mv,((function (m__$1){
return (function (v){
return cats.protocols._mreturn.call(null,self__.inner_monad,cats.monad.either.right.call(null,v));
});})(m__$1))
);
});

cats.monad.either.t_cats$monad$either6307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"either-t","either-t",1113251990,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inner-monad","inner-monad",1251186187,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"The Either transformer constructor."], null)),new cljs.core.Symbol(null,"inner-monad","inner-monad",1251186187,null),new cljs.core.Symbol(null,"meta6308","meta6308",2079458961,null)], null);
});

cats.monad.either.t_cats$monad$either6307.cljs$lang$type = true;

cats.monad.either.t_cats$monad$either6307.cljs$lang$ctorStr = "cats.monad.either/t_cats$monad$either6307";

cats.monad.either.t_cats$monad$either6307.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cats.monad.either/t_cats$monad$either6307");
});

cats.monad.either.__GT_t_cats$monad$either6307 = (function cats$monad$either$either_t_$___GT_t_cats$monad$either6307(either_t__$1,inner_monad__$1,meta6308){
return (new cats.monad.either.t_cats$monad$either6307(either_t__$1,inner_monad__$1,meta6308));
});

}

return (new cats.monad.either.t_cats$monad$either6307(cats$monad$either$either_t,inner_monad,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given an either value and two functions, if the either is a
 *   left apply the first function to the value it contains; if the
 *   either is a right apply the second function to its value.
 */
cats.monad.either.branch = (function cats$monad$either$branch(e,lf,rf){
if(cljs.core.truth_(cats.monad.either.either_QMARK_.call(null,e))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"either?","either?",-604931892,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))].join('')));
}

if(cljs.core.truth_(cats.monad.either.left_QMARK_.call(null,e))){
return lf.call(null,cats.protocols._extract.call(null,e));
} else {
return rf.call(null,cats.protocols._extract.call(null,e));
}
});
/**
 * Given an either value and a function, if the either is a
 *   left, apply the function to the value it contains; if the
 *   either is a right, return it.
 */
cats.monad.either.branch_left = (function cats$monad$either$branch_left(e,lf){
if(cljs.core.truth_(cats.monad.either.either_QMARK_.call(null,e))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"either?","either?",-604931892,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))].join('')));
}

return cats.monad.either.branch.call(null,e,lf,cats.monad.either.right);
});
/**
 * Either-specific synonym for #'cats.core/bind
 * 
 *   Given an either value and a function, if the either is a
 *   right, apply the function to the value it contains; if the
 *   either is a left, return it.
 */
cats.monad.either.branch_right = (function cats$monad$either$branch_right(e,rf){
if(cljs.core.truth_(cats.monad.either.either_QMARK_.call(null,e))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"either?","either?",-604931892,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))].join('')));
}

return cats.protocols._mbind.call(null,cats.monad.either.context,e,rf);
});
/**
 * Given a collection of eithers, return only the values that are left.
 */
cats.monad.either.lefts = cljs.core.partial.call(null,cljs.core.filter,cats.monad.either.left_QMARK_);
/**
 * Given a collection of eithers, return only the values that are left.
 */
cats.monad.either.rights = cljs.core.partial.call(null,cljs.core.filter,cats.monad.either.right_QMARK_);
/**
 * Given a collection of either, return the first value that is left
 */
cats.monad.either.first_left = cljs.core.comp.call(null,cljs.core.first,cats.monad.either.lefts);
/**
 * Given a collection of either, return the first value that is right
 */
cats.monad.either.first_right = cljs.core.comp.call(null,cljs.core.first,cats.monad.either.rights);
/**
 * Convert a left to a right or viceversa, preserving content.
 */
cats.monad.either.invert = (function cats$monad$either$invert(e){
if(cljs.core.truth_(cats.monad.either.either_QMARK_.call(null,e))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"either?","either?",-604931892,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))].join('')));
}

if(cljs.core.truth_(cats.monad.either.left_QMARK_.call(null,e))){
return cats.monad.either.right.call(null,cats.protocols._extract.call(null,e));
} else {
return cats.monad.either.left.call(null,cats.protocols._extract.call(null,e));
}
});

//# sourceMappingURL=either.js.map