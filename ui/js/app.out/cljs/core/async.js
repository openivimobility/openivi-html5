// Compiled by ClojureScript 1.7.166 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async11341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11341 = (function (fn_handler,f,meta11342){
this.fn_handler = fn_handler;
this.f = f;
this.meta11342 = meta11342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11343,meta11342__$1){
var self__ = this;
var _11343__$1 = this;
return (new cljs.core.async.t_cljs$core$async11341(self__.fn_handler,self__.f,meta11342__$1));
});

cljs.core.async.t_cljs$core$async11341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11343){
var self__ = this;
var _11343__$1 = this;
return self__.meta11342;
});

cljs.core.async.t_cljs$core$async11341.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta11342","meta11342",2070013373,null)], null);
});

cljs.core.async.t_cljs$core$async11341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11341";

cljs.core.async.t_cljs$core$async11341.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cljs.core.async/t_cljs$core$async11341");
});

cljs.core.async.__GT_t_cljs$core$async11341 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async11341(fn_handler__$1,f__$1,meta11342){
return (new cljs.core.async.t_cljs$core$async11341(fn_handler__$1,f__$1,meta11342));
});

}

return (new cljs.core.async.t_cljs$core$async11341(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args11346 = [];
var len__6218__auto___11349 = arguments.length;
var i__6219__auto___11350 = (0);
while(true){
if((i__6219__auto___11350 < len__6218__auto___11349)){
args11346.push((arguments[i__6219__auto___11350]));

var G__11351 = (i__6219__auto___11350 + (1));
i__6219__auto___11350 = G__11351;
continue;
} else {
}
break;
}

var G__11348 = args11346.length;
switch (G__11348) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11346.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args11353 = [];
var len__6218__auto___11356 = arguments.length;
var i__6219__auto___11357 = (0);
while(true){
if((i__6219__auto___11357 < len__6218__auto___11356)){
args11353.push((arguments[i__6219__auto___11357]));

var G__11358 = (i__6219__auto___11357 + (1));
i__6219__auto___11357 = G__11358;
continue;
} else {
}
break;
}

var G__11355 = args11353.length;
switch (G__11355) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11353.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11360 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11360);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11360,ret){
return (function (){
return fn1.call(null,val_11360);
});})(val_11360,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args11361 = [];
var len__6218__auto___11364 = arguments.length;
var i__6219__auto___11365 = (0);
while(true){
if((i__6219__auto___11365 < len__6218__auto___11364)){
args11361.push((arguments[i__6219__auto___11365]));

var G__11366 = (i__6219__auto___11365 + (1));
i__6219__auto___11365 = G__11366;
continue;
} else {
}
break;
}

var G__11363 = args11361.length;
switch (G__11363) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11361.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__6063__auto___11368 = n;
var x_11369 = (0);
while(true){
if((x_11369 < n__6063__auto___11368)){
(a[x_11369] = (0));

var G__11370 = (x_11369 + (1));
x_11369 = G__11370;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__11371 = (i + (1));
i = G__11371;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11375 = (function (alt_flag,flag,meta11376){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11376 = meta11376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11377,meta11376__$1){
var self__ = this;
var _11377__$1 = this;
return (new cljs.core.async.t_cljs$core$async11375(self__.alt_flag,self__.flag,meta11376__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11377){
var self__ = this;
var _11377__$1 = this;
return self__.meta11376;
});})(flag))
;

cljs.core.async.t_cljs$core$async11375.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11375.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11376","meta11376",2054055710,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11375";

cljs.core.async.t_cljs$core$async11375.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cljs.core.async/t_cljs$core$async11375");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11375 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11375(alt_flag__$1,flag__$1,meta11376){
return (new cljs.core.async.t_cljs$core$async11375(alt_flag__$1,flag__$1,meta11376));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11375(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11381 = (function (alt_handler,flag,cb,meta11382){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11382 = meta11382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11383,meta11382__$1){
var self__ = this;
var _11383__$1 = this;
return (new cljs.core.async.t_cljs$core$async11381(self__.alt_handler,self__.flag,self__.cb,meta11382__$1));
});

cljs.core.async.t_cljs$core$async11381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11383){
var self__ = this;
var _11383__$1 = this;
return self__.meta11382;
});

cljs.core.async.t_cljs$core$async11381.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11382","meta11382",1179915412,null)], null);
});

cljs.core.async.t_cljs$core$async11381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11381";

cljs.core.async.t_cljs$core$async11381.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cljs.core.async/t_cljs$core$async11381");
});

cljs.core.async.__GT_t_cljs$core$async11381 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11381(alt_handler__$1,flag__$1,cb__$1,meta11382){
return (new cljs.core.async.t_cljs$core$async11381(alt_handler__$1,flag__$1,cb__$1,meta11382));
});

}

return (new cljs.core.async.t_cljs$core$async11381(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11384_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11384_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11385_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11385_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5160__auto__ = wport;
if(cljs.core.truth_(or__5160__auto__)){
return or__5160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11386 = (i + (1));
i = G__11386;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5160__auto__ = ret;
if(cljs.core.truth_(or__5160__auto__)){
return or__5160__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__5148__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5148__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__6225__auto__ = [];
var len__6218__auto___11392 = arguments.length;
var i__6219__auto___11393 = (0);
while(true){
if((i__6219__auto___11393 < len__6218__auto___11392)){
args__6225__auto__.push((arguments[i__6219__auto___11393]));

var G__11394 = (i__6219__auto___11393 + (1));
i__6219__auto___11393 = G__11394;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((1) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6226__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11389){
var map__11390 = p__11389;
var map__11390__$1 = ((((!((map__11390 == null)))?((((map__11390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11390):map__11390);
var opts = map__11390__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11387){
var G__11388 = cljs.core.first.call(null,seq11387);
var seq11387__$1 = cljs.core.next.call(null,seq11387);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11388,seq11387__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args11395 = [];
var len__6218__auto___11445 = arguments.length;
var i__6219__auto___11446 = (0);
while(true){
if((i__6219__auto___11446 < len__6218__auto___11445)){
args11395.push((arguments[i__6219__auto___11446]));

var G__11447 = (i__6219__auto___11446 + (1));
i__6219__auto___11446 = G__11447;
continue;
} else {
}
break;
}

var G__11397 = args11395.length;
switch (G__11397) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11395.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11293__auto___11449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___11449){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___11449){
return (function (state_11421){
var state_val_11422 = (state_11421[(1)]);
if((state_val_11422 === (7))){
var inst_11417 = (state_11421[(2)]);
var state_11421__$1 = state_11421;
var statearr_11423_11450 = state_11421__$1;
(statearr_11423_11450[(2)] = inst_11417);

(statearr_11423_11450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (1))){
var state_11421__$1 = state_11421;
var statearr_11424_11451 = state_11421__$1;
(statearr_11424_11451[(2)] = null);

(statearr_11424_11451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (4))){
var inst_11400 = (state_11421[(7)]);
var inst_11400__$1 = (state_11421[(2)]);
var inst_11401 = (inst_11400__$1 == null);
var state_11421__$1 = (function (){var statearr_11425 = state_11421;
(statearr_11425[(7)] = inst_11400__$1);

return statearr_11425;
})();
if(cljs.core.truth_(inst_11401)){
var statearr_11426_11452 = state_11421__$1;
(statearr_11426_11452[(1)] = (5));

} else {
var statearr_11427_11453 = state_11421__$1;
(statearr_11427_11453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (13))){
var state_11421__$1 = state_11421;
var statearr_11428_11454 = state_11421__$1;
(statearr_11428_11454[(2)] = null);

(statearr_11428_11454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (6))){
var inst_11400 = (state_11421[(7)]);
var state_11421__$1 = state_11421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11421__$1,(11),to,inst_11400);
} else {
if((state_val_11422 === (3))){
var inst_11419 = (state_11421[(2)]);
var state_11421__$1 = state_11421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11421__$1,inst_11419);
} else {
if((state_val_11422 === (12))){
var state_11421__$1 = state_11421;
var statearr_11429_11455 = state_11421__$1;
(statearr_11429_11455[(2)] = null);

(statearr_11429_11455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (2))){
var state_11421__$1 = state_11421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11421__$1,(4),from);
} else {
if((state_val_11422 === (11))){
var inst_11410 = (state_11421[(2)]);
var state_11421__$1 = state_11421;
if(cljs.core.truth_(inst_11410)){
var statearr_11430_11456 = state_11421__$1;
(statearr_11430_11456[(1)] = (12));

} else {
var statearr_11431_11457 = state_11421__$1;
(statearr_11431_11457[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (9))){
var state_11421__$1 = state_11421;
var statearr_11432_11458 = state_11421__$1;
(statearr_11432_11458[(2)] = null);

(statearr_11432_11458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (5))){
var state_11421__$1 = state_11421;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11433_11459 = state_11421__$1;
(statearr_11433_11459[(1)] = (8));

} else {
var statearr_11434_11460 = state_11421__$1;
(statearr_11434_11460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (14))){
var inst_11415 = (state_11421[(2)]);
var state_11421__$1 = state_11421;
var statearr_11435_11461 = state_11421__$1;
(statearr_11435_11461[(2)] = inst_11415);

(statearr_11435_11461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (10))){
var inst_11407 = (state_11421[(2)]);
var state_11421__$1 = state_11421;
var statearr_11436_11462 = state_11421__$1;
(statearr_11436_11462[(2)] = inst_11407);

(statearr_11436_11462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11422 === (8))){
var inst_11404 = cljs.core.async.close_BANG_.call(null,to);
var state_11421__$1 = state_11421;
var statearr_11437_11463 = state_11421__$1;
(statearr_11437_11463[(2)] = inst_11404);

(statearr_11437_11463[(1)] = (10));


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
});})(c__11293__auto___11449))
;
return ((function (switch__11181__auto__,c__11293__auto___11449){
return (function() {
var cljs$core$async$state_machine__11182__auto__ = null;
var cljs$core$async$state_machine__11182__auto____0 = (function (){
var statearr_11441 = [null,null,null,null,null,null,null,null];
(statearr_11441[(0)] = cljs$core$async$state_machine__11182__auto__);

(statearr_11441[(1)] = (1));

return statearr_11441;
});
var cljs$core$async$state_machine__11182__auto____1 = (function (state_11421){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_11421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e11442){if((e11442 instanceof Object)){
var ex__11185__auto__ = e11442;
var statearr_11443_11464 = state_11421;
(statearr_11443_11464[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11465 = state_11421;
state_11421 = G__11465;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$state_machine__11182__auto__ = function(state_11421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11182__auto____1.call(this,state_11421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11182__auto____0;
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11182__auto____1;
return cljs$core$async$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___11449))
})();
var state__11295__auto__ = (function (){var statearr_11444 = f__11294__auto__.call(null);
(statearr_11444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___11449);

return statearr_11444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___11449))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11649){
var vec__11650 = p__11649;
var v = cljs.core.nth.call(null,vec__11650,(0),null);
var p = cljs.core.nth.call(null,vec__11650,(1),null);
var job = vec__11650;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11293__auto___11832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___11832,res,vec__11650,v,p,job,jobs,results){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___11832,res,vec__11650,v,p,job,jobs,results){
return (function (state_11655){
var state_val_11656 = (state_11655[(1)]);
if((state_val_11656 === (1))){
var state_11655__$1 = state_11655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11655__$1,(2),res,v);
} else {
if((state_val_11656 === (2))){
var inst_11652 = (state_11655[(2)]);
var inst_11653 = cljs.core.async.close_BANG_.call(null,res);
var state_11655__$1 = (function (){var statearr_11657 = state_11655;
(statearr_11657[(7)] = inst_11652);

return statearr_11657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11655__$1,inst_11653);
} else {
return null;
}
}
});})(c__11293__auto___11832,res,vec__11650,v,p,job,jobs,results))
;
return ((function (switch__11181__auto__,c__11293__auto___11832,res,vec__11650,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0 = (function (){
var statearr_11661 = [null,null,null,null,null,null,null,null];
(statearr_11661[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__);

(statearr_11661[(1)] = (1));

return statearr_11661;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1 = (function (state_11655){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_11655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e11662){if((e11662 instanceof Object)){
var ex__11185__auto__ = e11662;
var statearr_11663_11833 = state_11655;
(statearr_11663_11833[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11834 = state_11655;
state_11655 = G__11834;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__ = function(state_11655){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1.call(this,state_11655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___11832,res,vec__11650,v,p,job,jobs,results))
})();
var state__11295__auto__ = (function (){var statearr_11664 = f__11294__auto__.call(null);
(statearr_11664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___11832);

return statearr_11664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___11832,res,vec__11650,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11665){
var vec__11666 = p__11665;
var v = cljs.core.nth.call(null,vec__11666,(0),null);
var p = cljs.core.nth.call(null,vec__11666,(1),null);
var job = vec__11666;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__6063__auto___11835 = n;
var __11836 = (0);
while(true){
if((__11836 < n__6063__auto___11835)){
var G__11667_11837 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11667_11837) {
case "compute":
var c__11293__auto___11839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11836,c__11293__auto___11839,G__11667_11837,n__6063__auto___11835,jobs,results,process,async){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (__11836,c__11293__auto___11839,G__11667_11837,n__6063__auto___11835,jobs,results,process,async){
return (function (state_11680){
var state_val_11681 = (state_11680[(1)]);
if((state_val_11681 === (1))){
var state_11680__$1 = state_11680;
var statearr_11682_11840 = state_11680__$1;
(statearr_11682_11840[(2)] = null);

(statearr_11682_11840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11681 === (2))){
var state_11680__$1 = state_11680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11680__$1,(4),jobs);
} else {
if((state_val_11681 === (3))){
var inst_11678 = (state_11680[(2)]);
var state_11680__$1 = state_11680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11680__$1,inst_11678);
} else {
if((state_val_11681 === (4))){
var inst_11670 = (state_11680[(2)]);
var inst_11671 = process.call(null,inst_11670);
var state_11680__$1 = state_11680;
if(cljs.core.truth_(inst_11671)){
var statearr_11683_11841 = state_11680__$1;
(statearr_11683_11841[(1)] = (5));

} else {
var statearr_11684_11842 = state_11680__$1;
(statearr_11684_11842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11681 === (5))){
var state_11680__$1 = state_11680;
var statearr_11685_11843 = state_11680__$1;
(statearr_11685_11843[(2)] = null);

(statearr_11685_11843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11681 === (6))){
var state_11680__$1 = state_11680;
var statearr_11686_11844 = state_11680__$1;
(statearr_11686_11844[(2)] = null);

(statearr_11686_11844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11681 === (7))){
var inst_11676 = (state_11680[(2)]);
var state_11680__$1 = state_11680;
var statearr_11687_11845 = state_11680__$1;
(statearr_11687_11845[(2)] = inst_11676);

(statearr_11687_11845[(1)] = (3));


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
});})(__11836,c__11293__auto___11839,G__11667_11837,n__6063__auto___11835,jobs,results,process,async))
;
return ((function (__11836,switch__11181__auto__,c__11293__auto___11839,G__11667_11837,n__6063__auto___11835,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0 = (function (){
var statearr_11691 = [null,null,null,null,null,null,null];
(statearr_11691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__);

(statearr_11691[(1)] = (1));

return statearr_11691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1 = (function (state_11680){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_11680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e11692){if((e11692 instanceof Object)){
var ex__11185__auto__ = e11692;
var statearr_11693_11846 = state_11680;
(statearr_11693_11846[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11847 = state_11680;
state_11680 = G__11847;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__ = function(state_11680){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1.call(this,state_11680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__;
})()
;})(__11836,switch__11181__auto__,c__11293__auto___11839,G__11667_11837,n__6063__auto___11835,jobs,results,process,async))
})();
var state__11295__auto__ = (function (){var statearr_11694 = f__11294__auto__.call(null);
(statearr_11694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___11839);

return statearr_11694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(__11836,c__11293__auto___11839,G__11667_11837,n__6063__auto___11835,jobs,results,process,async))
);


break;
case "async":
var c__11293__auto___11848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11836,c__11293__auto___11848,G__11667_11837,n__6063__auto___11835,jobs,results,process,async){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (__11836,c__11293__auto___11848,G__11667_11837,n__6063__auto___11835,jobs,results,process,async){
return (function (state_11707){
var state_val_11708 = (state_11707[(1)]);
if((state_val_11708 === (1))){
var state_11707__$1 = state_11707;
var statearr_11709_11849 = state_11707__$1;
(statearr_11709_11849[(2)] = null);

(statearr_11709_11849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11708 === (2))){
var state_11707__$1 = state_11707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11707__$1,(4),jobs);
} else {
if((state_val_11708 === (3))){
var inst_11705 = (state_11707[(2)]);
var state_11707__$1 = state_11707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11707__$1,inst_11705);
} else {
if((state_val_11708 === (4))){
var inst_11697 = (state_11707[(2)]);
var inst_11698 = async.call(null,inst_11697);
var state_11707__$1 = state_11707;
if(cljs.core.truth_(inst_11698)){
var statearr_11710_11850 = state_11707__$1;
(statearr_11710_11850[(1)] = (5));

} else {
var statearr_11711_11851 = state_11707__$1;
(statearr_11711_11851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11708 === (5))){
var state_11707__$1 = state_11707;
var statearr_11712_11852 = state_11707__$1;
(statearr_11712_11852[(2)] = null);

(statearr_11712_11852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11708 === (6))){
var state_11707__$1 = state_11707;
var statearr_11713_11853 = state_11707__$1;
(statearr_11713_11853[(2)] = null);

(statearr_11713_11853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11708 === (7))){
var inst_11703 = (state_11707[(2)]);
var state_11707__$1 = state_11707;
var statearr_11714_11854 = state_11707__$1;
(statearr_11714_11854[(2)] = inst_11703);

(statearr_11714_11854[(1)] = (3));


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
});})(__11836,c__11293__auto___11848,G__11667_11837,n__6063__auto___11835,jobs,results,process,async))
;
return ((function (__11836,switch__11181__auto__,c__11293__auto___11848,G__11667_11837,n__6063__auto___11835,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0 = (function (){
var statearr_11718 = [null,null,null,null,null,null,null];
(statearr_11718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__);

(statearr_11718[(1)] = (1));

return statearr_11718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1 = (function (state_11707){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_11707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e11719){if((e11719 instanceof Object)){
var ex__11185__auto__ = e11719;
var statearr_11720_11855 = state_11707;
(statearr_11720_11855[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11856 = state_11707;
state_11707 = G__11856;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__ = function(state_11707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1.call(this,state_11707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__;
})()
;})(__11836,switch__11181__auto__,c__11293__auto___11848,G__11667_11837,n__6063__auto___11835,jobs,results,process,async))
})();
var state__11295__auto__ = (function (){var statearr_11721 = f__11294__auto__.call(null);
(statearr_11721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___11848);

return statearr_11721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(__11836,c__11293__auto___11848,G__11667_11837,n__6063__auto___11835,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11857 = (__11836 + (1));
__11836 = G__11857;
continue;
} else {
}
break;
}

var c__11293__auto___11858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___11858,jobs,results,process,async){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___11858,jobs,results,process,async){
return (function (state_11743){
var state_val_11744 = (state_11743[(1)]);
if((state_val_11744 === (1))){
var state_11743__$1 = state_11743;
var statearr_11745_11859 = state_11743__$1;
(statearr_11745_11859[(2)] = null);

(statearr_11745_11859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11744 === (2))){
var state_11743__$1 = state_11743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11743__$1,(4),from);
} else {
if((state_val_11744 === (3))){
var inst_11741 = (state_11743[(2)]);
var state_11743__$1 = state_11743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11743__$1,inst_11741);
} else {
if((state_val_11744 === (4))){
var inst_11724 = (state_11743[(7)]);
var inst_11724__$1 = (state_11743[(2)]);
var inst_11725 = (inst_11724__$1 == null);
var state_11743__$1 = (function (){var statearr_11746 = state_11743;
(statearr_11746[(7)] = inst_11724__$1);

return statearr_11746;
})();
if(cljs.core.truth_(inst_11725)){
var statearr_11747_11860 = state_11743__$1;
(statearr_11747_11860[(1)] = (5));

} else {
var statearr_11748_11861 = state_11743__$1;
(statearr_11748_11861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11744 === (5))){
var inst_11727 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11743__$1 = state_11743;
var statearr_11749_11862 = state_11743__$1;
(statearr_11749_11862[(2)] = inst_11727);

(statearr_11749_11862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11744 === (6))){
var inst_11729 = (state_11743[(8)]);
var inst_11724 = (state_11743[(7)]);
var inst_11729__$1 = cljs.core.async.chan.call(null,(1));
var inst_11730 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11731 = [inst_11724,inst_11729__$1];
var inst_11732 = (new cljs.core.PersistentVector(null,2,(5),inst_11730,inst_11731,null));
var state_11743__$1 = (function (){var statearr_11750 = state_11743;
(statearr_11750[(8)] = inst_11729__$1);

return statearr_11750;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11743__$1,(8),jobs,inst_11732);
} else {
if((state_val_11744 === (7))){
var inst_11739 = (state_11743[(2)]);
var state_11743__$1 = state_11743;
var statearr_11751_11863 = state_11743__$1;
(statearr_11751_11863[(2)] = inst_11739);

(statearr_11751_11863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11744 === (8))){
var inst_11729 = (state_11743[(8)]);
var inst_11734 = (state_11743[(2)]);
var state_11743__$1 = (function (){var statearr_11752 = state_11743;
(statearr_11752[(9)] = inst_11734);

return statearr_11752;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11743__$1,(9),results,inst_11729);
} else {
if((state_val_11744 === (9))){
var inst_11736 = (state_11743[(2)]);
var state_11743__$1 = (function (){var statearr_11753 = state_11743;
(statearr_11753[(10)] = inst_11736);

return statearr_11753;
})();
var statearr_11754_11864 = state_11743__$1;
(statearr_11754_11864[(2)] = null);

(statearr_11754_11864[(1)] = (2));


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
});})(c__11293__auto___11858,jobs,results,process,async))
;
return ((function (switch__11181__auto__,c__11293__auto___11858,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0 = (function (){
var statearr_11758 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11758[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__);

(statearr_11758[(1)] = (1));

return statearr_11758;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1 = (function (state_11743){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_11743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e11759){if((e11759 instanceof Object)){
var ex__11185__auto__ = e11759;
var statearr_11760_11865 = state_11743;
(statearr_11760_11865[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11866 = state_11743;
state_11743 = G__11866;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__ = function(state_11743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1.call(this,state_11743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___11858,jobs,results,process,async))
})();
var state__11295__auto__ = (function (){var statearr_11761 = f__11294__auto__.call(null);
(statearr_11761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___11858);

return statearr_11761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___11858,jobs,results,process,async))
);


var c__11293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto__,jobs,results,process,async){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto__,jobs,results,process,async){
return (function (state_11799){
var state_val_11800 = (state_11799[(1)]);
if((state_val_11800 === (7))){
var inst_11795 = (state_11799[(2)]);
var state_11799__$1 = state_11799;
var statearr_11801_11867 = state_11799__$1;
(statearr_11801_11867[(2)] = inst_11795);

(statearr_11801_11867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (20))){
var state_11799__$1 = state_11799;
var statearr_11802_11868 = state_11799__$1;
(statearr_11802_11868[(2)] = null);

(statearr_11802_11868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (1))){
var state_11799__$1 = state_11799;
var statearr_11803_11869 = state_11799__$1;
(statearr_11803_11869[(2)] = null);

(statearr_11803_11869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (4))){
var inst_11764 = (state_11799[(7)]);
var inst_11764__$1 = (state_11799[(2)]);
var inst_11765 = (inst_11764__$1 == null);
var state_11799__$1 = (function (){var statearr_11804 = state_11799;
(statearr_11804[(7)] = inst_11764__$1);

return statearr_11804;
})();
if(cljs.core.truth_(inst_11765)){
var statearr_11805_11870 = state_11799__$1;
(statearr_11805_11870[(1)] = (5));

} else {
var statearr_11806_11871 = state_11799__$1;
(statearr_11806_11871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (15))){
var inst_11777 = (state_11799[(8)]);
var state_11799__$1 = state_11799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11799__$1,(18),to,inst_11777);
} else {
if((state_val_11800 === (21))){
var inst_11790 = (state_11799[(2)]);
var state_11799__$1 = state_11799;
var statearr_11807_11872 = state_11799__$1;
(statearr_11807_11872[(2)] = inst_11790);

(statearr_11807_11872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (13))){
var inst_11792 = (state_11799[(2)]);
var state_11799__$1 = (function (){var statearr_11808 = state_11799;
(statearr_11808[(9)] = inst_11792);

return statearr_11808;
})();
var statearr_11809_11873 = state_11799__$1;
(statearr_11809_11873[(2)] = null);

(statearr_11809_11873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (6))){
var inst_11764 = (state_11799[(7)]);
var state_11799__$1 = state_11799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11799__$1,(11),inst_11764);
} else {
if((state_val_11800 === (17))){
var inst_11785 = (state_11799[(2)]);
var state_11799__$1 = state_11799;
if(cljs.core.truth_(inst_11785)){
var statearr_11810_11874 = state_11799__$1;
(statearr_11810_11874[(1)] = (19));

} else {
var statearr_11811_11875 = state_11799__$1;
(statearr_11811_11875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (3))){
var inst_11797 = (state_11799[(2)]);
var state_11799__$1 = state_11799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11799__$1,inst_11797);
} else {
if((state_val_11800 === (12))){
var inst_11774 = (state_11799[(10)]);
var state_11799__$1 = state_11799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11799__$1,(14),inst_11774);
} else {
if((state_val_11800 === (2))){
var state_11799__$1 = state_11799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11799__$1,(4),results);
} else {
if((state_val_11800 === (19))){
var state_11799__$1 = state_11799;
var statearr_11812_11876 = state_11799__$1;
(statearr_11812_11876[(2)] = null);

(statearr_11812_11876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (11))){
var inst_11774 = (state_11799[(2)]);
var state_11799__$1 = (function (){var statearr_11813 = state_11799;
(statearr_11813[(10)] = inst_11774);

return statearr_11813;
})();
var statearr_11814_11877 = state_11799__$1;
(statearr_11814_11877[(2)] = null);

(statearr_11814_11877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (9))){
var state_11799__$1 = state_11799;
var statearr_11815_11878 = state_11799__$1;
(statearr_11815_11878[(2)] = null);

(statearr_11815_11878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (5))){
var state_11799__$1 = state_11799;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11816_11879 = state_11799__$1;
(statearr_11816_11879[(1)] = (8));

} else {
var statearr_11817_11880 = state_11799__$1;
(statearr_11817_11880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (14))){
var inst_11779 = (state_11799[(11)]);
var inst_11777 = (state_11799[(8)]);
var inst_11777__$1 = (state_11799[(2)]);
var inst_11778 = (inst_11777__$1 == null);
var inst_11779__$1 = cljs.core.not.call(null,inst_11778);
var state_11799__$1 = (function (){var statearr_11818 = state_11799;
(statearr_11818[(11)] = inst_11779__$1);

(statearr_11818[(8)] = inst_11777__$1);

return statearr_11818;
})();
if(inst_11779__$1){
var statearr_11819_11881 = state_11799__$1;
(statearr_11819_11881[(1)] = (15));

} else {
var statearr_11820_11882 = state_11799__$1;
(statearr_11820_11882[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (16))){
var inst_11779 = (state_11799[(11)]);
var state_11799__$1 = state_11799;
var statearr_11821_11883 = state_11799__$1;
(statearr_11821_11883[(2)] = inst_11779);

(statearr_11821_11883[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (10))){
var inst_11771 = (state_11799[(2)]);
var state_11799__$1 = state_11799;
var statearr_11822_11884 = state_11799__$1;
(statearr_11822_11884[(2)] = inst_11771);

(statearr_11822_11884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (18))){
var inst_11782 = (state_11799[(2)]);
var state_11799__$1 = state_11799;
var statearr_11823_11885 = state_11799__$1;
(statearr_11823_11885[(2)] = inst_11782);

(statearr_11823_11885[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11800 === (8))){
var inst_11768 = cljs.core.async.close_BANG_.call(null,to);
var state_11799__$1 = state_11799;
var statearr_11824_11886 = state_11799__$1;
(statearr_11824_11886[(2)] = inst_11768);

(statearr_11824_11886[(1)] = (10));


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
});})(c__11293__auto__,jobs,results,process,async))
;
return ((function (switch__11181__auto__,c__11293__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0 = (function (){
var statearr_11828 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11828[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__);

(statearr_11828[(1)] = (1));

return statearr_11828;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1 = (function (state_11799){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_11799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e11829){if((e11829 instanceof Object)){
var ex__11185__auto__ = e11829;
var statearr_11830_11887 = state_11799;
(statearr_11830_11887[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11888 = state_11799;
state_11799 = G__11888;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__ = function(state_11799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1.call(this,state_11799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto__,jobs,results,process,async))
})();
var state__11295__auto__ = (function (){var statearr_11831 = f__11294__auto__.call(null);
(statearr_11831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto__);

return statearr_11831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto__,jobs,results,process,async))
);

return c__11293__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args11889 = [];
var len__6218__auto___11892 = arguments.length;
var i__6219__auto___11893 = (0);
while(true){
if((i__6219__auto___11893 < len__6218__auto___11892)){
args11889.push((arguments[i__6219__auto___11893]));

var G__11894 = (i__6219__auto___11893 + (1));
i__6219__auto___11893 = G__11894;
continue;
} else {
}
break;
}

var G__11891 = args11889.length;
switch (G__11891) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11889.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args11896 = [];
var len__6218__auto___11899 = arguments.length;
var i__6219__auto___11900 = (0);
while(true){
if((i__6219__auto___11900 < len__6218__auto___11899)){
args11896.push((arguments[i__6219__auto___11900]));

var G__11901 = (i__6219__auto___11900 + (1));
i__6219__auto___11900 = G__11901;
continue;
} else {
}
break;
}

var G__11898 = args11896.length;
switch (G__11898) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11896.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args11903 = [];
var len__6218__auto___11956 = arguments.length;
var i__6219__auto___11957 = (0);
while(true){
if((i__6219__auto___11957 < len__6218__auto___11956)){
args11903.push((arguments[i__6219__auto___11957]));

var G__11958 = (i__6219__auto___11957 + (1));
i__6219__auto___11957 = G__11958;
continue;
} else {
}
break;
}

var G__11905 = args11903.length;
switch (G__11905) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11903.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11293__auto___11960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___11960,tc,fc){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___11960,tc,fc){
return (function (state_11931){
var state_val_11932 = (state_11931[(1)]);
if((state_val_11932 === (7))){
var inst_11927 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
var statearr_11933_11961 = state_11931__$1;
(statearr_11933_11961[(2)] = inst_11927);

(statearr_11933_11961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (1))){
var state_11931__$1 = state_11931;
var statearr_11934_11962 = state_11931__$1;
(statearr_11934_11962[(2)] = null);

(statearr_11934_11962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (4))){
var inst_11908 = (state_11931[(7)]);
var inst_11908__$1 = (state_11931[(2)]);
var inst_11909 = (inst_11908__$1 == null);
var state_11931__$1 = (function (){var statearr_11935 = state_11931;
(statearr_11935[(7)] = inst_11908__$1);

return statearr_11935;
})();
if(cljs.core.truth_(inst_11909)){
var statearr_11936_11963 = state_11931__$1;
(statearr_11936_11963[(1)] = (5));

} else {
var statearr_11937_11964 = state_11931__$1;
(statearr_11937_11964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (13))){
var state_11931__$1 = state_11931;
var statearr_11938_11965 = state_11931__$1;
(statearr_11938_11965[(2)] = null);

(statearr_11938_11965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (6))){
var inst_11908 = (state_11931[(7)]);
var inst_11914 = p.call(null,inst_11908);
var state_11931__$1 = state_11931;
if(cljs.core.truth_(inst_11914)){
var statearr_11939_11966 = state_11931__$1;
(statearr_11939_11966[(1)] = (9));

} else {
var statearr_11940_11967 = state_11931__$1;
(statearr_11940_11967[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (3))){
var inst_11929 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11931__$1,inst_11929);
} else {
if((state_val_11932 === (12))){
var state_11931__$1 = state_11931;
var statearr_11941_11968 = state_11931__$1;
(statearr_11941_11968[(2)] = null);

(statearr_11941_11968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (2))){
var state_11931__$1 = state_11931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11931__$1,(4),ch);
} else {
if((state_val_11932 === (11))){
var inst_11908 = (state_11931[(7)]);
var inst_11918 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11931__$1,(8),inst_11918,inst_11908);
} else {
if((state_val_11932 === (9))){
var state_11931__$1 = state_11931;
var statearr_11942_11969 = state_11931__$1;
(statearr_11942_11969[(2)] = tc);

(statearr_11942_11969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (5))){
var inst_11911 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11912 = cljs.core.async.close_BANG_.call(null,fc);
var state_11931__$1 = (function (){var statearr_11943 = state_11931;
(statearr_11943[(8)] = inst_11911);

return statearr_11943;
})();
var statearr_11944_11970 = state_11931__$1;
(statearr_11944_11970[(2)] = inst_11912);

(statearr_11944_11970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (14))){
var inst_11925 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
var statearr_11945_11971 = state_11931__$1;
(statearr_11945_11971[(2)] = inst_11925);

(statearr_11945_11971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (10))){
var state_11931__$1 = state_11931;
var statearr_11946_11972 = state_11931__$1;
(statearr_11946_11972[(2)] = fc);

(statearr_11946_11972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11932 === (8))){
var inst_11920 = (state_11931[(2)]);
var state_11931__$1 = state_11931;
if(cljs.core.truth_(inst_11920)){
var statearr_11947_11973 = state_11931__$1;
(statearr_11947_11973[(1)] = (12));

} else {
var statearr_11948_11974 = state_11931__$1;
(statearr_11948_11974[(1)] = (13));

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
});})(c__11293__auto___11960,tc,fc))
;
return ((function (switch__11181__auto__,c__11293__auto___11960,tc,fc){
return (function() {
var cljs$core$async$state_machine__11182__auto__ = null;
var cljs$core$async$state_machine__11182__auto____0 = (function (){
var statearr_11952 = [null,null,null,null,null,null,null,null,null];
(statearr_11952[(0)] = cljs$core$async$state_machine__11182__auto__);

(statearr_11952[(1)] = (1));

return statearr_11952;
});
var cljs$core$async$state_machine__11182__auto____1 = (function (state_11931){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_11931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e11953){if((e11953 instanceof Object)){
var ex__11185__auto__ = e11953;
var statearr_11954_11975 = state_11931;
(statearr_11954_11975[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11976 = state_11931;
state_11931 = G__11976;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$state_machine__11182__auto__ = function(state_11931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11182__auto____1.call(this,state_11931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11182__auto____0;
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11182__auto____1;
return cljs$core$async$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___11960,tc,fc))
})();
var state__11295__auto__ = (function (){var statearr_11955 = f__11294__auto__.call(null);
(statearr_11955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___11960);

return statearr_11955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___11960,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto__){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto__){
return (function (state_12023){
var state_val_12024 = (state_12023[(1)]);
if((state_val_12024 === (1))){
var inst_12009 = init;
var state_12023__$1 = (function (){var statearr_12025 = state_12023;
(statearr_12025[(7)] = inst_12009);

return statearr_12025;
})();
var statearr_12026_12041 = state_12023__$1;
(statearr_12026_12041[(2)] = null);

(statearr_12026_12041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12024 === (2))){
var state_12023__$1 = state_12023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12023__$1,(4),ch);
} else {
if((state_val_12024 === (3))){
var inst_12021 = (state_12023[(2)]);
var state_12023__$1 = state_12023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12023__$1,inst_12021);
} else {
if((state_val_12024 === (4))){
var inst_12012 = (state_12023[(8)]);
var inst_12012__$1 = (state_12023[(2)]);
var inst_12013 = (inst_12012__$1 == null);
var state_12023__$1 = (function (){var statearr_12027 = state_12023;
(statearr_12027[(8)] = inst_12012__$1);

return statearr_12027;
})();
if(cljs.core.truth_(inst_12013)){
var statearr_12028_12042 = state_12023__$1;
(statearr_12028_12042[(1)] = (5));

} else {
var statearr_12029_12043 = state_12023__$1;
(statearr_12029_12043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12024 === (5))){
var inst_12009 = (state_12023[(7)]);
var state_12023__$1 = state_12023;
var statearr_12030_12044 = state_12023__$1;
(statearr_12030_12044[(2)] = inst_12009);

(statearr_12030_12044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12024 === (6))){
var inst_12012 = (state_12023[(8)]);
var inst_12009 = (state_12023[(7)]);
var inst_12016 = f.call(null,inst_12009,inst_12012);
var inst_12009__$1 = inst_12016;
var state_12023__$1 = (function (){var statearr_12031 = state_12023;
(statearr_12031[(7)] = inst_12009__$1);

return statearr_12031;
})();
var statearr_12032_12045 = state_12023__$1;
(statearr_12032_12045[(2)] = null);

(statearr_12032_12045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12024 === (7))){
var inst_12019 = (state_12023[(2)]);
var state_12023__$1 = state_12023;
var statearr_12033_12046 = state_12023__$1;
(statearr_12033_12046[(2)] = inst_12019);

(statearr_12033_12046[(1)] = (3));


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
});})(c__11293__auto__))
;
return ((function (switch__11181__auto__,c__11293__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11182__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11182__auto____0 = (function (){
var statearr_12037 = [null,null,null,null,null,null,null,null,null];
(statearr_12037[(0)] = cljs$core$async$reduce_$_state_machine__11182__auto__);

(statearr_12037[(1)] = (1));

return statearr_12037;
});
var cljs$core$async$reduce_$_state_machine__11182__auto____1 = (function (state_12023){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_12023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e12038){if((e12038 instanceof Object)){
var ex__11185__auto__ = e12038;
var statearr_12039_12047 = state_12023;
(statearr_12039_12047[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12048 = state_12023;
state_12023 = G__12048;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11182__auto__ = function(state_12023){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11182__auto____1.call(this,state_12023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11182__auto____0;
cljs$core$async$reduce_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11182__auto____1;
return cljs$core$async$reduce_$_state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto__))
})();
var state__11295__auto__ = (function (){var statearr_12040 = f__11294__auto__.call(null);
(statearr_12040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto__);

return statearr_12040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto__))
);

return c__11293__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args12049 = [];
var len__6218__auto___12101 = arguments.length;
var i__6219__auto___12102 = (0);
while(true){
if((i__6219__auto___12102 < len__6218__auto___12101)){
args12049.push((arguments[i__6219__auto___12102]));

var G__12103 = (i__6219__auto___12102 + (1));
i__6219__auto___12102 = G__12103;
continue;
} else {
}
break;
}

var G__12051 = args12049.length;
switch (G__12051) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12049.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto__){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto__){
return (function (state_12076){
var state_val_12077 = (state_12076[(1)]);
if((state_val_12077 === (7))){
var inst_12058 = (state_12076[(2)]);
var state_12076__$1 = state_12076;
var statearr_12078_12105 = state_12076__$1;
(statearr_12078_12105[(2)] = inst_12058);

(statearr_12078_12105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12077 === (1))){
var inst_12052 = cljs.core.seq.call(null,coll);
var inst_12053 = inst_12052;
var state_12076__$1 = (function (){var statearr_12079 = state_12076;
(statearr_12079[(7)] = inst_12053);

return statearr_12079;
})();
var statearr_12080_12106 = state_12076__$1;
(statearr_12080_12106[(2)] = null);

(statearr_12080_12106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12077 === (4))){
var inst_12053 = (state_12076[(7)]);
var inst_12056 = cljs.core.first.call(null,inst_12053);
var state_12076__$1 = state_12076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12076__$1,(7),ch,inst_12056);
} else {
if((state_val_12077 === (13))){
var inst_12070 = (state_12076[(2)]);
var state_12076__$1 = state_12076;
var statearr_12081_12107 = state_12076__$1;
(statearr_12081_12107[(2)] = inst_12070);

(statearr_12081_12107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12077 === (6))){
var inst_12061 = (state_12076[(2)]);
var state_12076__$1 = state_12076;
if(cljs.core.truth_(inst_12061)){
var statearr_12082_12108 = state_12076__$1;
(statearr_12082_12108[(1)] = (8));

} else {
var statearr_12083_12109 = state_12076__$1;
(statearr_12083_12109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12077 === (3))){
var inst_12074 = (state_12076[(2)]);
var state_12076__$1 = state_12076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12076__$1,inst_12074);
} else {
if((state_val_12077 === (12))){
var state_12076__$1 = state_12076;
var statearr_12084_12110 = state_12076__$1;
(statearr_12084_12110[(2)] = null);

(statearr_12084_12110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12077 === (2))){
var inst_12053 = (state_12076[(7)]);
var state_12076__$1 = state_12076;
if(cljs.core.truth_(inst_12053)){
var statearr_12085_12111 = state_12076__$1;
(statearr_12085_12111[(1)] = (4));

} else {
var statearr_12086_12112 = state_12076__$1;
(statearr_12086_12112[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12077 === (11))){
var inst_12067 = cljs.core.async.close_BANG_.call(null,ch);
var state_12076__$1 = state_12076;
var statearr_12087_12113 = state_12076__$1;
(statearr_12087_12113[(2)] = inst_12067);

(statearr_12087_12113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12077 === (9))){
var state_12076__$1 = state_12076;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12088_12114 = state_12076__$1;
(statearr_12088_12114[(1)] = (11));

} else {
var statearr_12089_12115 = state_12076__$1;
(statearr_12089_12115[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12077 === (5))){
var inst_12053 = (state_12076[(7)]);
var state_12076__$1 = state_12076;
var statearr_12090_12116 = state_12076__$1;
(statearr_12090_12116[(2)] = inst_12053);

(statearr_12090_12116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12077 === (10))){
var inst_12072 = (state_12076[(2)]);
var state_12076__$1 = state_12076;
var statearr_12091_12117 = state_12076__$1;
(statearr_12091_12117[(2)] = inst_12072);

(statearr_12091_12117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12077 === (8))){
var inst_12053 = (state_12076[(7)]);
var inst_12063 = cljs.core.next.call(null,inst_12053);
var inst_12053__$1 = inst_12063;
var state_12076__$1 = (function (){var statearr_12092 = state_12076;
(statearr_12092[(7)] = inst_12053__$1);

return statearr_12092;
})();
var statearr_12093_12118 = state_12076__$1;
(statearr_12093_12118[(2)] = null);

(statearr_12093_12118[(1)] = (2));


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
});})(c__11293__auto__))
;
return ((function (switch__11181__auto__,c__11293__auto__){
return (function() {
var cljs$core$async$state_machine__11182__auto__ = null;
var cljs$core$async$state_machine__11182__auto____0 = (function (){
var statearr_12097 = [null,null,null,null,null,null,null,null];
(statearr_12097[(0)] = cljs$core$async$state_machine__11182__auto__);

(statearr_12097[(1)] = (1));

return statearr_12097;
});
var cljs$core$async$state_machine__11182__auto____1 = (function (state_12076){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_12076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e12098){if((e12098 instanceof Object)){
var ex__11185__auto__ = e12098;
var statearr_12099_12119 = state_12076;
(statearr_12099_12119[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12120 = state_12076;
state_12076 = G__12120;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$state_machine__11182__auto__ = function(state_12076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11182__auto____1.call(this,state_12076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11182__auto____0;
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11182__auto____1;
return cljs$core$async$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto__))
})();
var state__11295__auto__ = (function (){var statearr_12100 = f__11294__auto__.call(null);
(statearr_12100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto__);

return statearr_12100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto__))
);

return c__11293__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5815__auto__ = (((_ == null))?null:_);
var m__5816__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5815__auto__)]);
if(!((m__5816__auto__ == null))){
return m__5816__auto__.call(null,_);
} else {
var m__5816__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5816__auto____$1 == null))){
return m__5816__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5815__auto__ = (((m == null))?null:m);
var m__5816__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5815__auto__)]);
if(!((m__5816__auto__ == null))){
return m__5816__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5816__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5816__auto____$1 == null))){
return m__5816__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5815__auto__ = (((m == null))?null:m);
var m__5816__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5815__auto__)]);
if(!((m__5816__auto__ == null))){
return m__5816__auto__.call(null,m,ch);
} else {
var m__5816__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5816__auto____$1 == null))){
return m__5816__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5815__auto__ = (((m == null))?null:m);
var m__5816__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5815__auto__)]);
if(!((m__5816__auto__ == null))){
return m__5816__auto__.call(null,m);
} else {
var m__5816__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5816__auto____$1 == null))){
return m__5816__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12342 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12342 = (function (mult,ch,cs,meta12343){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta12343 = meta12343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12344,meta12343__$1){
var self__ = this;
var _12344__$1 = this;
return (new cljs.core.async.t_cljs$core$async12342(self__.mult,self__.ch,self__.cs,meta12343__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12342.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12344){
var self__ = this;
var _12344__$1 = this;
return self__.meta12343;
});})(cs))
;

cljs.core.async.t_cljs$core$async12342.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12342.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12342.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async12342.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12342.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12342.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12342.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12343","meta12343",1758048643,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12342.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12342";

cljs.core.async.t_cljs$core$async12342.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cljs.core.async/t_cljs$core$async12342");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12342 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12342(mult__$1,ch__$1,cs__$1,meta12343){
return (new cljs.core.async.t_cljs$core$async12342(mult__$1,ch__$1,cs__$1,meta12343));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12342(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11293__auto___12563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___12563,cs,m,dchan,dctr,done){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___12563,cs,m,dchan,dctr,done){
return (function (state_12475){
var state_val_12476 = (state_12475[(1)]);
if((state_val_12476 === (7))){
var inst_12471 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
var statearr_12477_12564 = state_12475__$1;
(statearr_12477_12564[(2)] = inst_12471);

(statearr_12477_12564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (20))){
var inst_12376 = (state_12475[(7)]);
var inst_12386 = cljs.core.first.call(null,inst_12376);
var inst_12387 = cljs.core.nth.call(null,inst_12386,(0),null);
var inst_12388 = cljs.core.nth.call(null,inst_12386,(1),null);
var state_12475__$1 = (function (){var statearr_12478 = state_12475;
(statearr_12478[(8)] = inst_12387);

return statearr_12478;
})();
if(cljs.core.truth_(inst_12388)){
var statearr_12479_12565 = state_12475__$1;
(statearr_12479_12565[(1)] = (22));

} else {
var statearr_12480_12566 = state_12475__$1;
(statearr_12480_12566[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (27))){
var inst_12347 = (state_12475[(9)]);
var inst_12416 = (state_12475[(10)]);
var inst_12423 = (state_12475[(11)]);
var inst_12418 = (state_12475[(12)]);
var inst_12423__$1 = cljs.core._nth.call(null,inst_12416,inst_12418);
var inst_12424 = cljs.core.async.put_BANG_.call(null,inst_12423__$1,inst_12347,done);
var state_12475__$1 = (function (){var statearr_12481 = state_12475;
(statearr_12481[(11)] = inst_12423__$1);

return statearr_12481;
})();
if(cljs.core.truth_(inst_12424)){
var statearr_12482_12567 = state_12475__$1;
(statearr_12482_12567[(1)] = (30));

} else {
var statearr_12483_12568 = state_12475__$1;
(statearr_12483_12568[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (1))){
var state_12475__$1 = state_12475;
var statearr_12484_12569 = state_12475__$1;
(statearr_12484_12569[(2)] = null);

(statearr_12484_12569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (24))){
var inst_12376 = (state_12475[(7)]);
var inst_12393 = (state_12475[(2)]);
var inst_12394 = cljs.core.next.call(null,inst_12376);
var inst_12356 = inst_12394;
var inst_12357 = null;
var inst_12358 = (0);
var inst_12359 = (0);
var state_12475__$1 = (function (){var statearr_12485 = state_12475;
(statearr_12485[(13)] = inst_12356);

(statearr_12485[(14)] = inst_12358);

(statearr_12485[(15)] = inst_12357);

(statearr_12485[(16)] = inst_12359);

(statearr_12485[(17)] = inst_12393);

return statearr_12485;
})();
var statearr_12486_12570 = state_12475__$1;
(statearr_12486_12570[(2)] = null);

(statearr_12486_12570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (39))){
var state_12475__$1 = state_12475;
var statearr_12490_12571 = state_12475__$1;
(statearr_12490_12571[(2)] = null);

(statearr_12490_12571[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (4))){
var inst_12347 = (state_12475[(9)]);
var inst_12347__$1 = (state_12475[(2)]);
var inst_12348 = (inst_12347__$1 == null);
var state_12475__$1 = (function (){var statearr_12491 = state_12475;
(statearr_12491[(9)] = inst_12347__$1);

return statearr_12491;
})();
if(cljs.core.truth_(inst_12348)){
var statearr_12492_12572 = state_12475__$1;
(statearr_12492_12572[(1)] = (5));

} else {
var statearr_12493_12573 = state_12475__$1;
(statearr_12493_12573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (15))){
var inst_12356 = (state_12475[(13)]);
var inst_12358 = (state_12475[(14)]);
var inst_12357 = (state_12475[(15)]);
var inst_12359 = (state_12475[(16)]);
var inst_12372 = (state_12475[(2)]);
var inst_12373 = (inst_12359 + (1));
var tmp12487 = inst_12356;
var tmp12488 = inst_12358;
var tmp12489 = inst_12357;
var inst_12356__$1 = tmp12487;
var inst_12357__$1 = tmp12489;
var inst_12358__$1 = tmp12488;
var inst_12359__$1 = inst_12373;
var state_12475__$1 = (function (){var statearr_12494 = state_12475;
(statearr_12494[(13)] = inst_12356__$1);

(statearr_12494[(18)] = inst_12372);

(statearr_12494[(14)] = inst_12358__$1);

(statearr_12494[(15)] = inst_12357__$1);

(statearr_12494[(16)] = inst_12359__$1);

return statearr_12494;
})();
var statearr_12495_12574 = state_12475__$1;
(statearr_12495_12574[(2)] = null);

(statearr_12495_12574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (21))){
var inst_12397 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
var statearr_12499_12575 = state_12475__$1;
(statearr_12499_12575[(2)] = inst_12397);

(statearr_12499_12575[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (31))){
var inst_12423 = (state_12475[(11)]);
var inst_12427 = done.call(null,null);
var inst_12428 = cljs.core.async.untap_STAR_.call(null,m,inst_12423);
var state_12475__$1 = (function (){var statearr_12500 = state_12475;
(statearr_12500[(19)] = inst_12427);

return statearr_12500;
})();
var statearr_12501_12576 = state_12475__$1;
(statearr_12501_12576[(2)] = inst_12428);

(statearr_12501_12576[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (32))){
var inst_12417 = (state_12475[(20)]);
var inst_12415 = (state_12475[(21)]);
var inst_12416 = (state_12475[(10)]);
var inst_12418 = (state_12475[(12)]);
var inst_12430 = (state_12475[(2)]);
var inst_12431 = (inst_12418 + (1));
var tmp12496 = inst_12417;
var tmp12497 = inst_12415;
var tmp12498 = inst_12416;
var inst_12415__$1 = tmp12497;
var inst_12416__$1 = tmp12498;
var inst_12417__$1 = tmp12496;
var inst_12418__$1 = inst_12431;
var state_12475__$1 = (function (){var statearr_12502 = state_12475;
(statearr_12502[(20)] = inst_12417__$1);

(statearr_12502[(21)] = inst_12415__$1);

(statearr_12502[(10)] = inst_12416__$1);

(statearr_12502[(12)] = inst_12418__$1);

(statearr_12502[(22)] = inst_12430);

return statearr_12502;
})();
var statearr_12503_12577 = state_12475__$1;
(statearr_12503_12577[(2)] = null);

(statearr_12503_12577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (40))){
var inst_12443 = (state_12475[(23)]);
var inst_12447 = done.call(null,null);
var inst_12448 = cljs.core.async.untap_STAR_.call(null,m,inst_12443);
var state_12475__$1 = (function (){var statearr_12504 = state_12475;
(statearr_12504[(24)] = inst_12447);

return statearr_12504;
})();
var statearr_12505_12578 = state_12475__$1;
(statearr_12505_12578[(2)] = inst_12448);

(statearr_12505_12578[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (33))){
var inst_12434 = (state_12475[(25)]);
var inst_12436 = cljs.core.chunked_seq_QMARK_.call(null,inst_12434);
var state_12475__$1 = state_12475;
if(inst_12436){
var statearr_12506_12579 = state_12475__$1;
(statearr_12506_12579[(1)] = (36));

} else {
var statearr_12507_12580 = state_12475__$1;
(statearr_12507_12580[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (13))){
var inst_12366 = (state_12475[(26)]);
var inst_12369 = cljs.core.async.close_BANG_.call(null,inst_12366);
var state_12475__$1 = state_12475;
var statearr_12508_12581 = state_12475__$1;
(statearr_12508_12581[(2)] = inst_12369);

(statearr_12508_12581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (22))){
var inst_12387 = (state_12475[(8)]);
var inst_12390 = cljs.core.async.close_BANG_.call(null,inst_12387);
var state_12475__$1 = state_12475;
var statearr_12509_12582 = state_12475__$1;
(statearr_12509_12582[(2)] = inst_12390);

(statearr_12509_12582[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (36))){
var inst_12434 = (state_12475[(25)]);
var inst_12438 = cljs.core.chunk_first.call(null,inst_12434);
var inst_12439 = cljs.core.chunk_rest.call(null,inst_12434);
var inst_12440 = cljs.core.count.call(null,inst_12438);
var inst_12415 = inst_12439;
var inst_12416 = inst_12438;
var inst_12417 = inst_12440;
var inst_12418 = (0);
var state_12475__$1 = (function (){var statearr_12510 = state_12475;
(statearr_12510[(20)] = inst_12417);

(statearr_12510[(21)] = inst_12415);

(statearr_12510[(10)] = inst_12416);

(statearr_12510[(12)] = inst_12418);

return statearr_12510;
})();
var statearr_12511_12583 = state_12475__$1;
(statearr_12511_12583[(2)] = null);

(statearr_12511_12583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (41))){
var inst_12434 = (state_12475[(25)]);
var inst_12450 = (state_12475[(2)]);
var inst_12451 = cljs.core.next.call(null,inst_12434);
var inst_12415 = inst_12451;
var inst_12416 = null;
var inst_12417 = (0);
var inst_12418 = (0);
var state_12475__$1 = (function (){var statearr_12512 = state_12475;
(statearr_12512[(20)] = inst_12417);

(statearr_12512[(21)] = inst_12415);

(statearr_12512[(27)] = inst_12450);

(statearr_12512[(10)] = inst_12416);

(statearr_12512[(12)] = inst_12418);

return statearr_12512;
})();
var statearr_12513_12584 = state_12475__$1;
(statearr_12513_12584[(2)] = null);

(statearr_12513_12584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (43))){
var state_12475__$1 = state_12475;
var statearr_12514_12585 = state_12475__$1;
(statearr_12514_12585[(2)] = null);

(statearr_12514_12585[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (29))){
var inst_12459 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
var statearr_12515_12586 = state_12475__$1;
(statearr_12515_12586[(2)] = inst_12459);

(statearr_12515_12586[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (44))){
var inst_12468 = (state_12475[(2)]);
var state_12475__$1 = (function (){var statearr_12516 = state_12475;
(statearr_12516[(28)] = inst_12468);

return statearr_12516;
})();
var statearr_12517_12587 = state_12475__$1;
(statearr_12517_12587[(2)] = null);

(statearr_12517_12587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (6))){
var inst_12407 = (state_12475[(29)]);
var inst_12406 = cljs.core.deref.call(null,cs);
var inst_12407__$1 = cljs.core.keys.call(null,inst_12406);
var inst_12408 = cljs.core.count.call(null,inst_12407__$1);
var inst_12409 = cljs.core.reset_BANG_.call(null,dctr,inst_12408);
var inst_12414 = cljs.core.seq.call(null,inst_12407__$1);
var inst_12415 = inst_12414;
var inst_12416 = null;
var inst_12417 = (0);
var inst_12418 = (0);
var state_12475__$1 = (function (){var statearr_12518 = state_12475;
(statearr_12518[(20)] = inst_12417);

(statearr_12518[(21)] = inst_12415);

(statearr_12518[(10)] = inst_12416);

(statearr_12518[(29)] = inst_12407__$1);

(statearr_12518[(12)] = inst_12418);

(statearr_12518[(30)] = inst_12409);

return statearr_12518;
})();
var statearr_12519_12588 = state_12475__$1;
(statearr_12519_12588[(2)] = null);

(statearr_12519_12588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (28))){
var inst_12415 = (state_12475[(21)]);
var inst_12434 = (state_12475[(25)]);
var inst_12434__$1 = cljs.core.seq.call(null,inst_12415);
var state_12475__$1 = (function (){var statearr_12520 = state_12475;
(statearr_12520[(25)] = inst_12434__$1);

return statearr_12520;
})();
if(inst_12434__$1){
var statearr_12521_12589 = state_12475__$1;
(statearr_12521_12589[(1)] = (33));

} else {
var statearr_12522_12590 = state_12475__$1;
(statearr_12522_12590[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (25))){
var inst_12417 = (state_12475[(20)]);
var inst_12418 = (state_12475[(12)]);
var inst_12420 = (inst_12418 < inst_12417);
var inst_12421 = inst_12420;
var state_12475__$1 = state_12475;
if(cljs.core.truth_(inst_12421)){
var statearr_12523_12591 = state_12475__$1;
(statearr_12523_12591[(1)] = (27));

} else {
var statearr_12524_12592 = state_12475__$1;
(statearr_12524_12592[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (34))){
var state_12475__$1 = state_12475;
var statearr_12525_12593 = state_12475__$1;
(statearr_12525_12593[(2)] = null);

(statearr_12525_12593[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (17))){
var state_12475__$1 = state_12475;
var statearr_12526_12594 = state_12475__$1;
(statearr_12526_12594[(2)] = null);

(statearr_12526_12594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (3))){
var inst_12473 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12475__$1,inst_12473);
} else {
if((state_val_12476 === (12))){
var inst_12402 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
var statearr_12527_12595 = state_12475__$1;
(statearr_12527_12595[(2)] = inst_12402);

(statearr_12527_12595[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (2))){
var state_12475__$1 = state_12475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12475__$1,(4),ch);
} else {
if((state_val_12476 === (23))){
var state_12475__$1 = state_12475;
var statearr_12528_12596 = state_12475__$1;
(statearr_12528_12596[(2)] = null);

(statearr_12528_12596[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (35))){
var inst_12457 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
var statearr_12529_12597 = state_12475__$1;
(statearr_12529_12597[(2)] = inst_12457);

(statearr_12529_12597[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (19))){
var inst_12376 = (state_12475[(7)]);
var inst_12380 = cljs.core.chunk_first.call(null,inst_12376);
var inst_12381 = cljs.core.chunk_rest.call(null,inst_12376);
var inst_12382 = cljs.core.count.call(null,inst_12380);
var inst_12356 = inst_12381;
var inst_12357 = inst_12380;
var inst_12358 = inst_12382;
var inst_12359 = (0);
var state_12475__$1 = (function (){var statearr_12530 = state_12475;
(statearr_12530[(13)] = inst_12356);

(statearr_12530[(14)] = inst_12358);

(statearr_12530[(15)] = inst_12357);

(statearr_12530[(16)] = inst_12359);

return statearr_12530;
})();
var statearr_12531_12598 = state_12475__$1;
(statearr_12531_12598[(2)] = null);

(statearr_12531_12598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (11))){
var inst_12356 = (state_12475[(13)]);
var inst_12376 = (state_12475[(7)]);
var inst_12376__$1 = cljs.core.seq.call(null,inst_12356);
var state_12475__$1 = (function (){var statearr_12532 = state_12475;
(statearr_12532[(7)] = inst_12376__$1);

return statearr_12532;
})();
if(inst_12376__$1){
var statearr_12533_12599 = state_12475__$1;
(statearr_12533_12599[(1)] = (16));

} else {
var statearr_12534_12600 = state_12475__$1;
(statearr_12534_12600[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (9))){
var inst_12404 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
var statearr_12535_12601 = state_12475__$1;
(statearr_12535_12601[(2)] = inst_12404);

(statearr_12535_12601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (5))){
var inst_12354 = cljs.core.deref.call(null,cs);
var inst_12355 = cljs.core.seq.call(null,inst_12354);
var inst_12356 = inst_12355;
var inst_12357 = null;
var inst_12358 = (0);
var inst_12359 = (0);
var state_12475__$1 = (function (){var statearr_12536 = state_12475;
(statearr_12536[(13)] = inst_12356);

(statearr_12536[(14)] = inst_12358);

(statearr_12536[(15)] = inst_12357);

(statearr_12536[(16)] = inst_12359);

return statearr_12536;
})();
var statearr_12537_12602 = state_12475__$1;
(statearr_12537_12602[(2)] = null);

(statearr_12537_12602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (14))){
var state_12475__$1 = state_12475;
var statearr_12538_12603 = state_12475__$1;
(statearr_12538_12603[(2)] = null);

(statearr_12538_12603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (45))){
var inst_12465 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
var statearr_12539_12604 = state_12475__$1;
(statearr_12539_12604[(2)] = inst_12465);

(statearr_12539_12604[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (26))){
var inst_12407 = (state_12475[(29)]);
var inst_12461 = (state_12475[(2)]);
var inst_12462 = cljs.core.seq.call(null,inst_12407);
var state_12475__$1 = (function (){var statearr_12540 = state_12475;
(statearr_12540[(31)] = inst_12461);

return statearr_12540;
})();
if(inst_12462){
var statearr_12541_12605 = state_12475__$1;
(statearr_12541_12605[(1)] = (42));

} else {
var statearr_12542_12606 = state_12475__$1;
(statearr_12542_12606[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (16))){
var inst_12376 = (state_12475[(7)]);
var inst_12378 = cljs.core.chunked_seq_QMARK_.call(null,inst_12376);
var state_12475__$1 = state_12475;
if(inst_12378){
var statearr_12543_12607 = state_12475__$1;
(statearr_12543_12607[(1)] = (19));

} else {
var statearr_12544_12608 = state_12475__$1;
(statearr_12544_12608[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (38))){
var inst_12454 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
var statearr_12545_12609 = state_12475__$1;
(statearr_12545_12609[(2)] = inst_12454);

(statearr_12545_12609[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (30))){
var state_12475__$1 = state_12475;
var statearr_12546_12610 = state_12475__$1;
(statearr_12546_12610[(2)] = null);

(statearr_12546_12610[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (10))){
var inst_12357 = (state_12475[(15)]);
var inst_12359 = (state_12475[(16)]);
var inst_12365 = cljs.core._nth.call(null,inst_12357,inst_12359);
var inst_12366 = cljs.core.nth.call(null,inst_12365,(0),null);
var inst_12367 = cljs.core.nth.call(null,inst_12365,(1),null);
var state_12475__$1 = (function (){var statearr_12547 = state_12475;
(statearr_12547[(26)] = inst_12366);

return statearr_12547;
})();
if(cljs.core.truth_(inst_12367)){
var statearr_12548_12611 = state_12475__$1;
(statearr_12548_12611[(1)] = (13));

} else {
var statearr_12549_12612 = state_12475__$1;
(statearr_12549_12612[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (18))){
var inst_12400 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
var statearr_12550_12613 = state_12475__$1;
(statearr_12550_12613[(2)] = inst_12400);

(statearr_12550_12613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (42))){
var state_12475__$1 = state_12475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12475__$1,(45),dchan);
} else {
if((state_val_12476 === (37))){
var inst_12434 = (state_12475[(25)]);
var inst_12347 = (state_12475[(9)]);
var inst_12443 = (state_12475[(23)]);
var inst_12443__$1 = cljs.core.first.call(null,inst_12434);
var inst_12444 = cljs.core.async.put_BANG_.call(null,inst_12443__$1,inst_12347,done);
var state_12475__$1 = (function (){var statearr_12551 = state_12475;
(statearr_12551[(23)] = inst_12443__$1);

return statearr_12551;
})();
if(cljs.core.truth_(inst_12444)){
var statearr_12552_12614 = state_12475__$1;
(statearr_12552_12614[(1)] = (39));

} else {
var statearr_12553_12615 = state_12475__$1;
(statearr_12553_12615[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (8))){
var inst_12358 = (state_12475[(14)]);
var inst_12359 = (state_12475[(16)]);
var inst_12361 = (inst_12359 < inst_12358);
var inst_12362 = inst_12361;
var state_12475__$1 = state_12475;
if(cljs.core.truth_(inst_12362)){
var statearr_12554_12616 = state_12475__$1;
(statearr_12554_12616[(1)] = (10));

} else {
var statearr_12555_12617 = state_12475__$1;
(statearr_12555_12617[(1)] = (11));

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
}
}
}
}
}
}
});})(c__11293__auto___12563,cs,m,dchan,dctr,done))
;
return ((function (switch__11181__auto__,c__11293__auto___12563,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11182__auto__ = null;
var cljs$core$async$mult_$_state_machine__11182__auto____0 = (function (){
var statearr_12559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12559[(0)] = cljs$core$async$mult_$_state_machine__11182__auto__);

(statearr_12559[(1)] = (1));

return statearr_12559;
});
var cljs$core$async$mult_$_state_machine__11182__auto____1 = (function (state_12475){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_12475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e12560){if((e12560 instanceof Object)){
var ex__11185__auto__ = e12560;
var statearr_12561_12618 = state_12475;
(statearr_12561_12618[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12619 = state_12475;
state_12475 = G__12619;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11182__auto__ = function(state_12475){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11182__auto____1.call(this,state_12475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11182__auto____0;
cljs$core$async$mult_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11182__auto____1;
return cljs$core$async$mult_$_state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___12563,cs,m,dchan,dctr,done))
})();
var state__11295__auto__ = (function (){var statearr_12562 = f__11294__auto__.call(null);
(statearr_12562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___12563);

return statearr_12562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___12563,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args12620 = [];
var len__6218__auto___12623 = arguments.length;
var i__6219__auto___12624 = (0);
while(true){
if((i__6219__auto___12624 < len__6218__auto___12623)){
args12620.push((arguments[i__6219__auto___12624]));

var G__12625 = (i__6219__auto___12624 + (1));
i__6219__auto___12624 = G__12625;
continue;
} else {
}
break;
}

var G__12622 = args12620.length;
switch (G__12622) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12620.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5815__auto__ = (((m == null))?null:m);
var m__5816__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5815__auto__)]);
if(!((m__5816__auto__ == null))){
return m__5816__auto__.call(null,m,ch);
} else {
var m__5816__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5816__auto____$1 == null))){
return m__5816__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5815__auto__ = (((m == null))?null:m);
var m__5816__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5815__auto__)]);
if(!((m__5816__auto__ == null))){
return m__5816__auto__.call(null,m,ch);
} else {
var m__5816__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5816__auto____$1 == null))){
return m__5816__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5815__auto__ = (((m == null))?null:m);
var m__5816__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5815__auto__)]);
if(!((m__5816__auto__ == null))){
return m__5816__auto__.call(null,m);
} else {
var m__5816__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5816__auto____$1 == null))){
return m__5816__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5815__auto__ = (((m == null))?null:m);
var m__5816__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5815__auto__)]);
if(!((m__5816__auto__ == null))){
return m__5816__auto__.call(null,m,state_map);
} else {
var m__5816__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5816__auto____$1 == null))){
return m__5816__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5815__auto__ = (((m == null))?null:m);
var m__5816__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5815__auto__)]);
if(!((m__5816__auto__ == null))){
return m__5816__auto__.call(null,m,mode);
} else {
var m__5816__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5816__auto____$1 == null))){
return m__5816__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6225__auto__ = [];
var len__6218__auto___12637 = arguments.length;
var i__6219__auto___12638 = (0);
while(true){
if((i__6219__auto___12638 < len__6218__auto___12637)){
args__6225__auto__.push((arguments[i__6219__auto___12638]));

var G__12639 = (i__6219__auto___12638 + (1));
i__6219__auto___12638 = G__12639;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((3) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6226__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12631){
var map__12632 = p__12631;
var map__12632__$1 = ((((!((map__12632 == null)))?((((map__12632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12632):map__12632);
var opts = map__12632__$1;
var statearr_12634_12640 = state;
(statearr_12634_12640[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__12632,map__12632__$1,opts){
return (function (val){
var statearr_12635_12641 = state;
(statearr_12635_12641[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12632,map__12632__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_12636_12642 = state;
(statearr_12636_12642[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12627){
var G__12628 = cljs.core.first.call(null,seq12627);
var seq12627__$1 = cljs.core.next.call(null,seq12627);
var G__12629 = cljs.core.first.call(null,seq12627__$1);
var seq12627__$2 = cljs.core.next.call(null,seq12627__$1);
var G__12630 = cljs.core.first.call(null,seq12627__$2);
var seq12627__$3 = cljs.core.next.call(null,seq12627__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12628,G__12629,G__12630,seq12627__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12806 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12807){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12807 = meta12807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12808,meta12807__$1){
var self__ = this;
var _12808__$1 = this;
return (new cljs.core.async.t_cljs$core$async12806(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12807__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12808){
var self__ = this;
var _12808__$1 = this;
return self__.meta12807;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12806.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12806.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12806.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async12806.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12806.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12806.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12806.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12806.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12806.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12807","meta12807",-583492430,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12806";

cljs.core.async.t_cljs$core$async12806.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cljs.core.async/t_cljs$core$async12806");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async12806 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async12806(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12807){
return (new cljs.core.async.t_cljs$core$async12806(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12807));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async12806(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11293__auto___12969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___12969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___12969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12906){
var state_val_12907 = (state_12906[(1)]);
if((state_val_12907 === (7))){
var inst_12824 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
var statearr_12908_12970 = state_12906__$1;
(statearr_12908_12970[(2)] = inst_12824);

(statearr_12908_12970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (20))){
var inst_12836 = (state_12906[(7)]);
var state_12906__$1 = state_12906;
var statearr_12909_12971 = state_12906__$1;
(statearr_12909_12971[(2)] = inst_12836);

(statearr_12909_12971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (27))){
var state_12906__$1 = state_12906;
var statearr_12910_12972 = state_12906__$1;
(statearr_12910_12972[(2)] = null);

(statearr_12910_12972[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (1))){
var inst_12812 = (state_12906[(8)]);
var inst_12812__$1 = calc_state.call(null);
var inst_12814 = (inst_12812__$1 == null);
var inst_12815 = cljs.core.not.call(null,inst_12814);
var state_12906__$1 = (function (){var statearr_12911 = state_12906;
(statearr_12911[(8)] = inst_12812__$1);

return statearr_12911;
})();
if(inst_12815){
var statearr_12912_12973 = state_12906__$1;
(statearr_12912_12973[(1)] = (2));

} else {
var statearr_12913_12974 = state_12906__$1;
(statearr_12913_12974[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (24))){
var inst_12880 = (state_12906[(9)]);
var inst_12859 = (state_12906[(10)]);
var inst_12866 = (state_12906[(11)]);
var inst_12880__$1 = inst_12859.call(null,inst_12866);
var state_12906__$1 = (function (){var statearr_12914 = state_12906;
(statearr_12914[(9)] = inst_12880__$1);

return statearr_12914;
})();
if(cljs.core.truth_(inst_12880__$1)){
var statearr_12915_12975 = state_12906__$1;
(statearr_12915_12975[(1)] = (29));

} else {
var statearr_12916_12976 = state_12906__$1;
(statearr_12916_12976[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (4))){
var inst_12827 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
if(cljs.core.truth_(inst_12827)){
var statearr_12917_12977 = state_12906__$1;
(statearr_12917_12977[(1)] = (8));

} else {
var statearr_12918_12978 = state_12906__$1;
(statearr_12918_12978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (15))){
var inst_12853 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
if(cljs.core.truth_(inst_12853)){
var statearr_12919_12979 = state_12906__$1;
(statearr_12919_12979[(1)] = (19));

} else {
var statearr_12920_12980 = state_12906__$1;
(statearr_12920_12980[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (21))){
var inst_12858 = (state_12906[(12)]);
var inst_12858__$1 = (state_12906[(2)]);
var inst_12859 = cljs.core.get.call(null,inst_12858__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12860 = cljs.core.get.call(null,inst_12858__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12861 = cljs.core.get.call(null,inst_12858__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12906__$1 = (function (){var statearr_12921 = state_12906;
(statearr_12921[(12)] = inst_12858__$1);

(statearr_12921[(10)] = inst_12859);

(statearr_12921[(13)] = inst_12860);

return statearr_12921;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12906__$1,(22),inst_12861);
} else {
if((state_val_12907 === (31))){
var inst_12888 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
if(cljs.core.truth_(inst_12888)){
var statearr_12922_12981 = state_12906__$1;
(statearr_12922_12981[(1)] = (32));

} else {
var statearr_12923_12982 = state_12906__$1;
(statearr_12923_12982[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (32))){
var inst_12865 = (state_12906[(14)]);
var state_12906__$1 = state_12906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12906__$1,(35),out,inst_12865);
} else {
if((state_val_12907 === (33))){
var inst_12858 = (state_12906[(12)]);
var inst_12836 = inst_12858;
var state_12906__$1 = (function (){var statearr_12924 = state_12906;
(statearr_12924[(7)] = inst_12836);

return statearr_12924;
})();
var statearr_12925_12983 = state_12906__$1;
(statearr_12925_12983[(2)] = null);

(statearr_12925_12983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (13))){
var inst_12836 = (state_12906[(7)]);
var inst_12843 = inst_12836.cljs$lang$protocol_mask$partition0$;
var inst_12844 = (inst_12843 & (64));
var inst_12845 = inst_12836.cljs$core$ISeq$;
var inst_12846 = (inst_12844) || (inst_12845);
var state_12906__$1 = state_12906;
if(cljs.core.truth_(inst_12846)){
var statearr_12926_12984 = state_12906__$1;
(statearr_12926_12984[(1)] = (16));

} else {
var statearr_12927_12985 = state_12906__$1;
(statearr_12927_12985[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (22))){
var inst_12865 = (state_12906[(14)]);
var inst_12866 = (state_12906[(11)]);
var inst_12864 = (state_12906[(2)]);
var inst_12865__$1 = cljs.core.nth.call(null,inst_12864,(0),null);
var inst_12866__$1 = cljs.core.nth.call(null,inst_12864,(1),null);
var inst_12867 = (inst_12865__$1 == null);
var inst_12868 = cljs.core._EQ_.call(null,inst_12866__$1,change);
var inst_12869 = (inst_12867) || (inst_12868);
var state_12906__$1 = (function (){var statearr_12928 = state_12906;
(statearr_12928[(14)] = inst_12865__$1);

(statearr_12928[(11)] = inst_12866__$1);

return statearr_12928;
})();
if(cljs.core.truth_(inst_12869)){
var statearr_12929_12986 = state_12906__$1;
(statearr_12929_12986[(1)] = (23));

} else {
var statearr_12930_12987 = state_12906__$1;
(statearr_12930_12987[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (36))){
var inst_12858 = (state_12906[(12)]);
var inst_12836 = inst_12858;
var state_12906__$1 = (function (){var statearr_12931 = state_12906;
(statearr_12931[(7)] = inst_12836);

return statearr_12931;
})();
var statearr_12932_12988 = state_12906__$1;
(statearr_12932_12988[(2)] = null);

(statearr_12932_12988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (29))){
var inst_12880 = (state_12906[(9)]);
var state_12906__$1 = state_12906;
var statearr_12933_12989 = state_12906__$1;
(statearr_12933_12989[(2)] = inst_12880);

(statearr_12933_12989[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (6))){
var state_12906__$1 = state_12906;
var statearr_12934_12990 = state_12906__$1;
(statearr_12934_12990[(2)] = false);

(statearr_12934_12990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (28))){
var inst_12876 = (state_12906[(2)]);
var inst_12877 = calc_state.call(null);
var inst_12836 = inst_12877;
var state_12906__$1 = (function (){var statearr_12935 = state_12906;
(statearr_12935[(7)] = inst_12836);

(statearr_12935[(15)] = inst_12876);

return statearr_12935;
})();
var statearr_12936_12991 = state_12906__$1;
(statearr_12936_12991[(2)] = null);

(statearr_12936_12991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (25))){
var inst_12902 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
var statearr_12937_12992 = state_12906__$1;
(statearr_12937_12992[(2)] = inst_12902);

(statearr_12937_12992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (34))){
var inst_12900 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
var statearr_12938_12993 = state_12906__$1;
(statearr_12938_12993[(2)] = inst_12900);

(statearr_12938_12993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (17))){
var state_12906__$1 = state_12906;
var statearr_12939_12994 = state_12906__$1;
(statearr_12939_12994[(2)] = false);

(statearr_12939_12994[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (3))){
var state_12906__$1 = state_12906;
var statearr_12940_12995 = state_12906__$1;
(statearr_12940_12995[(2)] = false);

(statearr_12940_12995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (12))){
var inst_12904 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12906__$1,inst_12904);
} else {
if((state_val_12907 === (2))){
var inst_12812 = (state_12906[(8)]);
var inst_12817 = inst_12812.cljs$lang$protocol_mask$partition0$;
var inst_12818 = (inst_12817 & (64));
var inst_12819 = inst_12812.cljs$core$ISeq$;
var inst_12820 = (inst_12818) || (inst_12819);
var state_12906__$1 = state_12906;
if(cljs.core.truth_(inst_12820)){
var statearr_12941_12996 = state_12906__$1;
(statearr_12941_12996[(1)] = (5));

} else {
var statearr_12942_12997 = state_12906__$1;
(statearr_12942_12997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (23))){
var inst_12865 = (state_12906[(14)]);
var inst_12871 = (inst_12865 == null);
var state_12906__$1 = state_12906;
if(cljs.core.truth_(inst_12871)){
var statearr_12943_12998 = state_12906__$1;
(statearr_12943_12998[(1)] = (26));

} else {
var statearr_12944_12999 = state_12906__$1;
(statearr_12944_12999[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (35))){
var inst_12891 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
if(cljs.core.truth_(inst_12891)){
var statearr_12945_13000 = state_12906__$1;
(statearr_12945_13000[(1)] = (36));

} else {
var statearr_12946_13001 = state_12906__$1;
(statearr_12946_13001[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (19))){
var inst_12836 = (state_12906[(7)]);
var inst_12855 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12836);
var state_12906__$1 = state_12906;
var statearr_12947_13002 = state_12906__$1;
(statearr_12947_13002[(2)] = inst_12855);

(statearr_12947_13002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (11))){
var inst_12836 = (state_12906[(7)]);
var inst_12840 = (inst_12836 == null);
var inst_12841 = cljs.core.not.call(null,inst_12840);
var state_12906__$1 = state_12906;
if(inst_12841){
var statearr_12948_13003 = state_12906__$1;
(statearr_12948_13003[(1)] = (13));

} else {
var statearr_12949_13004 = state_12906__$1;
(statearr_12949_13004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (9))){
var inst_12812 = (state_12906[(8)]);
var state_12906__$1 = state_12906;
var statearr_12950_13005 = state_12906__$1;
(statearr_12950_13005[(2)] = inst_12812);

(statearr_12950_13005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (5))){
var state_12906__$1 = state_12906;
var statearr_12951_13006 = state_12906__$1;
(statearr_12951_13006[(2)] = true);

(statearr_12951_13006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (14))){
var state_12906__$1 = state_12906;
var statearr_12952_13007 = state_12906__$1;
(statearr_12952_13007[(2)] = false);

(statearr_12952_13007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (26))){
var inst_12866 = (state_12906[(11)]);
var inst_12873 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12866);
var state_12906__$1 = state_12906;
var statearr_12953_13008 = state_12906__$1;
(statearr_12953_13008[(2)] = inst_12873);

(statearr_12953_13008[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (16))){
var state_12906__$1 = state_12906;
var statearr_12954_13009 = state_12906__$1;
(statearr_12954_13009[(2)] = true);

(statearr_12954_13009[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (38))){
var inst_12896 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
var statearr_12955_13010 = state_12906__$1;
(statearr_12955_13010[(2)] = inst_12896);

(statearr_12955_13010[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (30))){
var inst_12859 = (state_12906[(10)]);
var inst_12866 = (state_12906[(11)]);
var inst_12860 = (state_12906[(13)]);
var inst_12883 = cljs.core.empty_QMARK_.call(null,inst_12859);
var inst_12884 = inst_12860.call(null,inst_12866);
var inst_12885 = cljs.core.not.call(null,inst_12884);
var inst_12886 = (inst_12883) && (inst_12885);
var state_12906__$1 = state_12906;
var statearr_12956_13011 = state_12906__$1;
(statearr_12956_13011[(2)] = inst_12886);

(statearr_12956_13011[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (10))){
var inst_12812 = (state_12906[(8)]);
var inst_12832 = (state_12906[(2)]);
var inst_12833 = cljs.core.get.call(null,inst_12832,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12834 = cljs.core.get.call(null,inst_12832,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12835 = cljs.core.get.call(null,inst_12832,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12836 = inst_12812;
var state_12906__$1 = (function (){var statearr_12957 = state_12906;
(statearr_12957[(7)] = inst_12836);

(statearr_12957[(16)] = inst_12834);

(statearr_12957[(17)] = inst_12835);

(statearr_12957[(18)] = inst_12833);

return statearr_12957;
})();
var statearr_12958_13012 = state_12906__$1;
(statearr_12958_13012[(2)] = null);

(statearr_12958_13012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (18))){
var inst_12850 = (state_12906[(2)]);
var state_12906__$1 = state_12906;
var statearr_12959_13013 = state_12906__$1;
(statearr_12959_13013[(2)] = inst_12850);

(statearr_12959_13013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (37))){
var state_12906__$1 = state_12906;
var statearr_12960_13014 = state_12906__$1;
(statearr_12960_13014[(2)] = null);

(statearr_12960_13014[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12907 === (8))){
var inst_12812 = (state_12906[(8)]);
var inst_12829 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12812);
var state_12906__$1 = state_12906;
var statearr_12961_13015 = state_12906__$1;
(statearr_12961_13015[(2)] = inst_12829);

(statearr_12961_13015[(1)] = (10));


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
});})(c__11293__auto___12969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11181__auto__,c__11293__auto___12969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11182__auto__ = null;
var cljs$core$async$mix_$_state_machine__11182__auto____0 = (function (){
var statearr_12965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12965[(0)] = cljs$core$async$mix_$_state_machine__11182__auto__);

(statearr_12965[(1)] = (1));

return statearr_12965;
});
var cljs$core$async$mix_$_state_machine__11182__auto____1 = (function (state_12906){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_12906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e12966){if((e12966 instanceof Object)){
var ex__11185__auto__ = e12966;
var statearr_12967_13016 = state_12906;
(statearr_12967_13016[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13017 = state_12906;
state_12906 = G__13017;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11182__auto__ = function(state_12906){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11182__auto____1.call(this,state_12906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11182__auto____0;
cljs$core$async$mix_$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11182__auto____1;
return cljs$core$async$mix_$_state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___12969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11295__auto__ = (function (){var statearr_12968 = f__11294__auto__.call(null);
(statearr_12968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___12969);

return statearr_12968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___12969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5815__auto__ = (((p == null))?null:p);
var m__5816__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5815__auto__)]);
if(!((m__5816__auto__ == null))){
return m__5816__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5816__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5816__auto____$1 == null))){
return m__5816__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5815__auto__ = (((p == null))?null:p);
var m__5816__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5815__auto__)]);
if(!((m__5816__auto__ == null))){
return m__5816__auto__.call(null,p,v,ch);
} else {
var m__5816__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5816__auto____$1 == null))){
return m__5816__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args13018 = [];
var len__6218__auto___13021 = arguments.length;
var i__6219__auto___13022 = (0);
while(true){
if((i__6219__auto___13022 < len__6218__auto___13021)){
args13018.push((arguments[i__6219__auto___13022]));

var G__13023 = (i__6219__auto___13022 + (1));
i__6219__auto___13022 = G__13023;
continue;
} else {
}
break;
}

var G__13020 = args13018.length;
switch (G__13020) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13018.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5815__auto__ = (((p == null))?null:p);
var m__5816__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5815__auto__)]);
if(!((m__5816__auto__ == null))){
return m__5816__auto__.call(null,p);
} else {
var m__5816__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5816__auto____$1 == null))){
return m__5816__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5815__auto__ = (((p == null))?null:p);
var m__5816__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5815__auto__)]);
if(!((m__5816__auto__ == null))){
return m__5816__auto__.call(null,p,v);
} else {
var m__5816__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5816__auto____$1 == null))){
return m__5816__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args13026 = [];
var len__6218__auto___13151 = arguments.length;
var i__6219__auto___13152 = (0);
while(true){
if((i__6219__auto___13152 < len__6218__auto___13151)){
args13026.push((arguments[i__6219__auto___13152]));

var G__13153 = (i__6219__auto___13152 + (1));
i__6219__auto___13152 = G__13153;
continue;
} else {
}
break;
}

var G__13028 = args13026.length;
switch (G__13028) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13026.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5160__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5160__auto__)){
return or__5160__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5160__auto__,mults){
return (function (p1__13025_SHARP_){
if(cljs.core.truth_(p1__13025_SHARP_.call(null,topic))){
return p1__13025_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13025_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5160__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async13029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13029 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13030){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13030 = meta13030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13031,meta13030__$1){
var self__ = this;
var _13031__$1 = this;
return (new cljs.core.async.t_cljs$core$async13029(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13030__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13031){
var self__ = this;
var _13031__$1 = this;
return self__.meta13030;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13029.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13029.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13030","meta13030",639445082,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13029";

cljs.core.async.t_cljs$core$async13029.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cljs.core.async/t_cljs$core$async13029");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async13029 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13029(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13030){
return (new cljs.core.async.t_cljs$core$async13029(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13030));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13029(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11293__auto___13155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___13155,mults,ensure_mult,p){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___13155,mults,ensure_mult,p){
return (function (state_13103){
var state_val_13104 = (state_13103[(1)]);
if((state_val_13104 === (7))){
var inst_13099 = (state_13103[(2)]);
var state_13103__$1 = state_13103;
var statearr_13105_13156 = state_13103__$1;
(statearr_13105_13156[(2)] = inst_13099);

(statearr_13105_13156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (20))){
var state_13103__$1 = state_13103;
var statearr_13106_13157 = state_13103__$1;
(statearr_13106_13157[(2)] = null);

(statearr_13106_13157[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (1))){
var state_13103__$1 = state_13103;
var statearr_13107_13158 = state_13103__$1;
(statearr_13107_13158[(2)] = null);

(statearr_13107_13158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (24))){
var inst_13082 = (state_13103[(7)]);
var inst_13091 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13082);
var state_13103__$1 = state_13103;
var statearr_13108_13159 = state_13103__$1;
(statearr_13108_13159[(2)] = inst_13091);

(statearr_13108_13159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (4))){
var inst_13034 = (state_13103[(8)]);
var inst_13034__$1 = (state_13103[(2)]);
var inst_13035 = (inst_13034__$1 == null);
var state_13103__$1 = (function (){var statearr_13109 = state_13103;
(statearr_13109[(8)] = inst_13034__$1);

return statearr_13109;
})();
if(cljs.core.truth_(inst_13035)){
var statearr_13110_13160 = state_13103__$1;
(statearr_13110_13160[(1)] = (5));

} else {
var statearr_13111_13161 = state_13103__$1;
(statearr_13111_13161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (15))){
var inst_13076 = (state_13103[(2)]);
var state_13103__$1 = state_13103;
var statearr_13112_13162 = state_13103__$1;
(statearr_13112_13162[(2)] = inst_13076);

(statearr_13112_13162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (21))){
var inst_13096 = (state_13103[(2)]);
var state_13103__$1 = (function (){var statearr_13113 = state_13103;
(statearr_13113[(9)] = inst_13096);

return statearr_13113;
})();
var statearr_13114_13163 = state_13103__$1;
(statearr_13114_13163[(2)] = null);

(statearr_13114_13163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (13))){
var inst_13058 = (state_13103[(10)]);
var inst_13060 = cljs.core.chunked_seq_QMARK_.call(null,inst_13058);
var state_13103__$1 = state_13103;
if(inst_13060){
var statearr_13115_13164 = state_13103__$1;
(statearr_13115_13164[(1)] = (16));

} else {
var statearr_13116_13165 = state_13103__$1;
(statearr_13116_13165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (22))){
var inst_13088 = (state_13103[(2)]);
var state_13103__$1 = state_13103;
if(cljs.core.truth_(inst_13088)){
var statearr_13117_13166 = state_13103__$1;
(statearr_13117_13166[(1)] = (23));

} else {
var statearr_13118_13167 = state_13103__$1;
(statearr_13118_13167[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (6))){
var inst_13082 = (state_13103[(7)]);
var inst_13084 = (state_13103[(11)]);
var inst_13034 = (state_13103[(8)]);
var inst_13082__$1 = topic_fn.call(null,inst_13034);
var inst_13083 = cljs.core.deref.call(null,mults);
var inst_13084__$1 = cljs.core.get.call(null,inst_13083,inst_13082__$1);
var state_13103__$1 = (function (){var statearr_13119 = state_13103;
(statearr_13119[(7)] = inst_13082__$1);

(statearr_13119[(11)] = inst_13084__$1);

return statearr_13119;
})();
if(cljs.core.truth_(inst_13084__$1)){
var statearr_13120_13168 = state_13103__$1;
(statearr_13120_13168[(1)] = (19));

} else {
var statearr_13121_13169 = state_13103__$1;
(statearr_13121_13169[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (25))){
var inst_13093 = (state_13103[(2)]);
var state_13103__$1 = state_13103;
var statearr_13122_13170 = state_13103__$1;
(statearr_13122_13170[(2)] = inst_13093);

(statearr_13122_13170[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (17))){
var inst_13058 = (state_13103[(10)]);
var inst_13067 = cljs.core.first.call(null,inst_13058);
var inst_13068 = cljs.core.async.muxch_STAR_.call(null,inst_13067);
var inst_13069 = cljs.core.async.close_BANG_.call(null,inst_13068);
var inst_13070 = cljs.core.next.call(null,inst_13058);
var inst_13044 = inst_13070;
var inst_13045 = null;
var inst_13046 = (0);
var inst_13047 = (0);
var state_13103__$1 = (function (){var statearr_13123 = state_13103;
(statearr_13123[(12)] = inst_13047);

(statearr_13123[(13)] = inst_13045);

(statearr_13123[(14)] = inst_13046);

(statearr_13123[(15)] = inst_13069);

(statearr_13123[(16)] = inst_13044);

return statearr_13123;
})();
var statearr_13124_13171 = state_13103__$1;
(statearr_13124_13171[(2)] = null);

(statearr_13124_13171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (3))){
var inst_13101 = (state_13103[(2)]);
var state_13103__$1 = state_13103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13103__$1,inst_13101);
} else {
if((state_val_13104 === (12))){
var inst_13078 = (state_13103[(2)]);
var state_13103__$1 = state_13103;
var statearr_13125_13172 = state_13103__$1;
(statearr_13125_13172[(2)] = inst_13078);

(statearr_13125_13172[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (2))){
var state_13103__$1 = state_13103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13103__$1,(4),ch);
} else {
if((state_val_13104 === (23))){
var state_13103__$1 = state_13103;
var statearr_13126_13173 = state_13103__$1;
(statearr_13126_13173[(2)] = null);

(statearr_13126_13173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (19))){
var inst_13084 = (state_13103[(11)]);
var inst_13034 = (state_13103[(8)]);
var inst_13086 = cljs.core.async.muxch_STAR_.call(null,inst_13084);
var state_13103__$1 = state_13103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13103__$1,(22),inst_13086,inst_13034);
} else {
if((state_val_13104 === (11))){
var inst_13058 = (state_13103[(10)]);
var inst_13044 = (state_13103[(16)]);
var inst_13058__$1 = cljs.core.seq.call(null,inst_13044);
var state_13103__$1 = (function (){var statearr_13127 = state_13103;
(statearr_13127[(10)] = inst_13058__$1);

return statearr_13127;
})();
if(inst_13058__$1){
var statearr_13128_13174 = state_13103__$1;
(statearr_13128_13174[(1)] = (13));

} else {
var statearr_13129_13175 = state_13103__$1;
(statearr_13129_13175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (9))){
var inst_13080 = (state_13103[(2)]);
var state_13103__$1 = state_13103;
var statearr_13130_13176 = state_13103__$1;
(statearr_13130_13176[(2)] = inst_13080);

(statearr_13130_13176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (5))){
var inst_13041 = cljs.core.deref.call(null,mults);
var inst_13042 = cljs.core.vals.call(null,inst_13041);
var inst_13043 = cljs.core.seq.call(null,inst_13042);
var inst_13044 = inst_13043;
var inst_13045 = null;
var inst_13046 = (0);
var inst_13047 = (0);
var state_13103__$1 = (function (){var statearr_13131 = state_13103;
(statearr_13131[(12)] = inst_13047);

(statearr_13131[(13)] = inst_13045);

(statearr_13131[(14)] = inst_13046);

(statearr_13131[(16)] = inst_13044);

return statearr_13131;
})();
var statearr_13132_13177 = state_13103__$1;
(statearr_13132_13177[(2)] = null);

(statearr_13132_13177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (14))){
var state_13103__$1 = state_13103;
var statearr_13136_13178 = state_13103__$1;
(statearr_13136_13178[(2)] = null);

(statearr_13136_13178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (16))){
var inst_13058 = (state_13103[(10)]);
var inst_13062 = cljs.core.chunk_first.call(null,inst_13058);
var inst_13063 = cljs.core.chunk_rest.call(null,inst_13058);
var inst_13064 = cljs.core.count.call(null,inst_13062);
var inst_13044 = inst_13063;
var inst_13045 = inst_13062;
var inst_13046 = inst_13064;
var inst_13047 = (0);
var state_13103__$1 = (function (){var statearr_13137 = state_13103;
(statearr_13137[(12)] = inst_13047);

(statearr_13137[(13)] = inst_13045);

(statearr_13137[(14)] = inst_13046);

(statearr_13137[(16)] = inst_13044);

return statearr_13137;
})();
var statearr_13138_13179 = state_13103__$1;
(statearr_13138_13179[(2)] = null);

(statearr_13138_13179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (10))){
var inst_13047 = (state_13103[(12)]);
var inst_13045 = (state_13103[(13)]);
var inst_13046 = (state_13103[(14)]);
var inst_13044 = (state_13103[(16)]);
var inst_13052 = cljs.core._nth.call(null,inst_13045,inst_13047);
var inst_13053 = cljs.core.async.muxch_STAR_.call(null,inst_13052);
var inst_13054 = cljs.core.async.close_BANG_.call(null,inst_13053);
var inst_13055 = (inst_13047 + (1));
var tmp13133 = inst_13045;
var tmp13134 = inst_13046;
var tmp13135 = inst_13044;
var inst_13044__$1 = tmp13135;
var inst_13045__$1 = tmp13133;
var inst_13046__$1 = tmp13134;
var inst_13047__$1 = inst_13055;
var state_13103__$1 = (function (){var statearr_13139 = state_13103;
(statearr_13139[(12)] = inst_13047__$1);

(statearr_13139[(17)] = inst_13054);

(statearr_13139[(13)] = inst_13045__$1);

(statearr_13139[(14)] = inst_13046__$1);

(statearr_13139[(16)] = inst_13044__$1);

return statearr_13139;
})();
var statearr_13140_13180 = state_13103__$1;
(statearr_13140_13180[(2)] = null);

(statearr_13140_13180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (18))){
var inst_13073 = (state_13103[(2)]);
var state_13103__$1 = state_13103;
var statearr_13141_13181 = state_13103__$1;
(statearr_13141_13181[(2)] = inst_13073);

(statearr_13141_13181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (8))){
var inst_13047 = (state_13103[(12)]);
var inst_13046 = (state_13103[(14)]);
var inst_13049 = (inst_13047 < inst_13046);
var inst_13050 = inst_13049;
var state_13103__$1 = state_13103;
if(cljs.core.truth_(inst_13050)){
var statearr_13142_13182 = state_13103__$1;
(statearr_13142_13182[(1)] = (10));

} else {
var statearr_13143_13183 = state_13103__$1;
(statearr_13143_13183[(1)] = (11));

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
});})(c__11293__auto___13155,mults,ensure_mult,p))
;
return ((function (switch__11181__auto__,c__11293__auto___13155,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11182__auto__ = null;
var cljs$core$async$state_machine__11182__auto____0 = (function (){
var statearr_13147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13147[(0)] = cljs$core$async$state_machine__11182__auto__);

(statearr_13147[(1)] = (1));

return statearr_13147;
});
var cljs$core$async$state_machine__11182__auto____1 = (function (state_13103){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_13103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e13148){if((e13148 instanceof Object)){
var ex__11185__auto__ = e13148;
var statearr_13149_13184 = state_13103;
(statearr_13149_13184[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13185 = state_13103;
state_13103 = G__13185;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$state_machine__11182__auto__ = function(state_13103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11182__auto____1.call(this,state_13103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11182__auto____0;
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11182__auto____1;
return cljs$core$async$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___13155,mults,ensure_mult,p))
})();
var state__11295__auto__ = (function (){var statearr_13150 = f__11294__auto__.call(null);
(statearr_13150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___13155);

return statearr_13150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___13155,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args13186 = [];
var len__6218__auto___13189 = arguments.length;
var i__6219__auto___13190 = (0);
while(true){
if((i__6219__auto___13190 < len__6218__auto___13189)){
args13186.push((arguments[i__6219__auto___13190]));

var G__13191 = (i__6219__auto___13190 + (1));
i__6219__auto___13190 = G__13191;
continue;
} else {
}
break;
}

var G__13188 = args13186.length;
switch (G__13188) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13186.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args13193 = [];
var len__6218__auto___13196 = arguments.length;
var i__6219__auto___13197 = (0);
while(true){
if((i__6219__auto___13197 < len__6218__auto___13196)){
args13193.push((arguments[i__6219__auto___13197]));

var G__13198 = (i__6219__auto___13197 + (1));
i__6219__auto___13197 = G__13198;
continue;
} else {
}
break;
}

var G__13195 = args13193.length;
switch (G__13195) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13193.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args13200 = [];
var len__6218__auto___13271 = arguments.length;
var i__6219__auto___13272 = (0);
while(true){
if((i__6219__auto___13272 < len__6218__auto___13271)){
args13200.push((arguments[i__6219__auto___13272]));

var G__13273 = (i__6219__auto___13272 + (1));
i__6219__auto___13272 = G__13273;
continue;
} else {
}
break;
}

var G__13202 = args13200.length;
switch (G__13202) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13200.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__11293__auto___13275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___13275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___13275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13241){
var state_val_13242 = (state_13241[(1)]);
if((state_val_13242 === (7))){
var state_13241__$1 = state_13241;
var statearr_13243_13276 = state_13241__$1;
(statearr_13243_13276[(2)] = null);

(statearr_13243_13276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13242 === (1))){
var state_13241__$1 = state_13241;
var statearr_13244_13277 = state_13241__$1;
(statearr_13244_13277[(2)] = null);

(statearr_13244_13277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13242 === (4))){
var inst_13205 = (state_13241[(7)]);
var inst_13207 = (inst_13205 < cnt);
var state_13241__$1 = state_13241;
if(cljs.core.truth_(inst_13207)){
var statearr_13245_13278 = state_13241__$1;
(statearr_13245_13278[(1)] = (6));

} else {
var statearr_13246_13279 = state_13241__$1;
(statearr_13246_13279[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13242 === (15))){
var inst_13237 = (state_13241[(2)]);
var state_13241__$1 = state_13241;
var statearr_13247_13280 = state_13241__$1;
(statearr_13247_13280[(2)] = inst_13237);

(statearr_13247_13280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13242 === (13))){
var inst_13230 = cljs.core.async.close_BANG_.call(null,out);
var state_13241__$1 = state_13241;
var statearr_13248_13281 = state_13241__$1;
(statearr_13248_13281[(2)] = inst_13230);

(statearr_13248_13281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13242 === (6))){
var state_13241__$1 = state_13241;
var statearr_13249_13282 = state_13241__$1;
(statearr_13249_13282[(2)] = null);

(statearr_13249_13282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13242 === (3))){
var inst_13239 = (state_13241[(2)]);
var state_13241__$1 = state_13241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13241__$1,inst_13239);
} else {
if((state_val_13242 === (12))){
var inst_13227 = (state_13241[(8)]);
var inst_13227__$1 = (state_13241[(2)]);
var inst_13228 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13227__$1);
var state_13241__$1 = (function (){var statearr_13250 = state_13241;
(statearr_13250[(8)] = inst_13227__$1);

return statearr_13250;
})();
if(cljs.core.truth_(inst_13228)){
var statearr_13251_13283 = state_13241__$1;
(statearr_13251_13283[(1)] = (13));

} else {
var statearr_13252_13284 = state_13241__$1;
(statearr_13252_13284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13242 === (2))){
var inst_13204 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13205 = (0);
var state_13241__$1 = (function (){var statearr_13253 = state_13241;
(statearr_13253[(9)] = inst_13204);

(statearr_13253[(7)] = inst_13205);

return statearr_13253;
})();
var statearr_13254_13285 = state_13241__$1;
(statearr_13254_13285[(2)] = null);

(statearr_13254_13285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13242 === (11))){
var inst_13205 = (state_13241[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13241,(10),Object,null,(9));
var inst_13214 = chs__$1.call(null,inst_13205);
var inst_13215 = done.call(null,inst_13205);
var inst_13216 = cljs.core.async.take_BANG_.call(null,inst_13214,inst_13215);
var state_13241__$1 = state_13241;
var statearr_13255_13286 = state_13241__$1;
(statearr_13255_13286[(2)] = inst_13216);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13241__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13242 === (9))){
var inst_13205 = (state_13241[(7)]);
var inst_13218 = (state_13241[(2)]);
var inst_13219 = (inst_13205 + (1));
var inst_13205__$1 = inst_13219;
var state_13241__$1 = (function (){var statearr_13256 = state_13241;
(statearr_13256[(10)] = inst_13218);

(statearr_13256[(7)] = inst_13205__$1);

return statearr_13256;
})();
var statearr_13257_13287 = state_13241__$1;
(statearr_13257_13287[(2)] = null);

(statearr_13257_13287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13242 === (5))){
var inst_13225 = (state_13241[(2)]);
var state_13241__$1 = (function (){var statearr_13258 = state_13241;
(statearr_13258[(11)] = inst_13225);

return statearr_13258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13241__$1,(12),dchan);
} else {
if((state_val_13242 === (14))){
var inst_13227 = (state_13241[(8)]);
var inst_13232 = cljs.core.apply.call(null,f,inst_13227);
var state_13241__$1 = state_13241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13241__$1,(16),out,inst_13232);
} else {
if((state_val_13242 === (16))){
var inst_13234 = (state_13241[(2)]);
var state_13241__$1 = (function (){var statearr_13259 = state_13241;
(statearr_13259[(12)] = inst_13234);

return statearr_13259;
})();
var statearr_13260_13288 = state_13241__$1;
(statearr_13260_13288[(2)] = null);

(statearr_13260_13288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13242 === (10))){
var inst_13209 = (state_13241[(2)]);
var inst_13210 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13241__$1 = (function (){var statearr_13261 = state_13241;
(statearr_13261[(13)] = inst_13209);

return statearr_13261;
})();
var statearr_13262_13289 = state_13241__$1;
(statearr_13262_13289[(2)] = inst_13210);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13241__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13242 === (8))){
var inst_13223 = (state_13241[(2)]);
var state_13241__$1 = state_13241;
var statearr_13263_13290 = state_13241__$1;
(statearr_13263_13290[(2)] = inst_13223);

(statearr_13263_13290[(1)] = (5));


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
});})(c__11293__auto___13275,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11181__auto__,c__11293__auto___13275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11182__auto__ = null;
var cljs$core$async$state_machine__11182__auto____0 = (function (){
var statearr_13267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13267[(0)] = cljs$core$async$state_machine__11182__auto__);

(statearr_13267[(1)] = (1));

return statearr_13267;
});
var cljs$core$async$state_machine__11182__auto____1 = (function (state_13241){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_13241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e13268){if((e13268 instanceof Object)){
var ex__11185__auto__ = e13268;
var statearr_13269_13291 = state_13241;
(statearr_13269_13291[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13292 = state_13241;
state_13241 = G__13292;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$state_machine__11182__auto__ = function(state_13241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11182__auto____1.call(this,state_13241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11182__auto____0;
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11182__auto____1;
return cljs$core$async$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___13275,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11295__auto__ = (function (){var statearr_13270 = f__11294__auto__.call(null);
(statearr_13270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___13275);

return statearr_13270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___13275,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args13294 = [];
var len__6218__auto___13350 = arguments.length;
var i__6219__auto___13351 = (0);
while(true){
if((i__6219__auto___13351 < len__6218__auto___13350)){
args13294.push((arguments[i__6219__auto___13351]));

var G__13352 = (i__6219__auto___13351 + (1));
i__6219__auto___13351 = G__13352;
continue;
} else {
}
break;
}

var G__13296 = args13294.length;
switch (G__13296) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13294.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11293__auto___13354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___13354,out){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___13354,out){
return (function (state_13326){
var state_val_13327 = (state_13326[(1)]);
if((state_val_13327 === (7))){
var inst_13305 = (state_13326[(7)]);
var inst_13306 = (state_13326[(8)]);
var inst_13305__$1 = (state_13326[(2)]);
var inst_13306__$1 = cljs.core.nth.call(null,inst_13305__$1,(0),null);
var inst_13307 = cljs.core.nth.call(null,inst_13305__$1,(1),null);
var inst_13308 = (inst_13306__$1 == null);
var state_13326__$1 = (function (){var statearr_13328 = state_13326;
(statearr_13328[(7)] = inst_13305__$1);

(statearr_13328[(9)] = inst_13307);

(statearr_13328[(8)] = inst_13306__$1);

return statearr_13328;
})();
if(cljs.core.truth_(inst_13308)){
var statearr_13329_13355 = state_13326__$1;
(statearr_13329_13355[(1)] = (8));

} else {
var statearr_13330_13356 = state_13326__$1;
(statearr_13330_13356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13327 === (1))){
var inst_13297 = cljs.core.vec.call(null,chs);
var inst_13298 = inst_13297;
var state_13326__$1 = (function (){var statearr_13331 = state_13326;
(statearr_13331[(10)] = inst_13298);

return statearr_13331;
})();
var statearr_13332_13357 = state_13326__$1;
(statearr_13332_13357[(2)] = null);

(statearr_13332_13357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13327 === (4))){
var inst_13298 = (state_13326[(10)]);
var state_13326__$1 = state_13326;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13326__$1,(7),inst_13298);
} else {
if((state_val_13327 === (6))){
var inst_13322 = (state_13326[(2)]);
var state_13326__$1 = state_13326;
var statearr_13333_13358 = state_13326__$1;
(statearr_13333_13358[(2)] = inst_13322);

(statearr_13333_13358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13327 === (3))){
var inst_13324 = (state_13326[(2)]);
var state_13326__$1 = state_13326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13326__$1,inst_13324);
} else {
if((state_val_13327 === (2))){
var inst_13298 = (state_13326[(10)]);
var inst_13300 = cljs.core.count.call(null,inst_13298);
var inst_13301 = (inst_13300 > (0));
var state_13326__$1 = state_13326;
if(cljs.core.truth_(inst_13301)){
var statearr_13335_13359 = state_13326__$1;
(statearr_13335_13359[(1)] = (4));

} else {
var statearr_13336_13360 = state_13326__$1;
(statearr_13336_13360[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13327 === (11))){
var inst_13298 = (state_13326[(10)]);
var inst_13315 = (state_13326[(2)]);
var tmp13334 = inst_13298;
var inst_13298__$1 = tmp13334;
var state_13326__$1 = (function (){var statearr_13337 = state_13326;
(statearr_13337[(11)] = inst_13315);

(statearr_13337[(10)] = inst_13298__$1);

return statearr_13337;
})();
var statearr_13338_13361 = state_13326__$1;
(statearr_13338_13361[(2)] = null);

(statearr_13338_13361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13327 === (9))){
var inst_13306 = (state_13326[(8)]);
var state_13326__$1 = state_13326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13326__$1,(11),out,inst_13306);
} else {
if((state_val_13327 === (5))){
var inst_13320 = cljs.core.async.close_BANG_.call(null,out);
var state_13326__$1 = state_13326;
var statearr_13339_13362 = state_13326__$1;
(statearr_13339_13362[(2)] = inst_13320);

(statearr_13339_13362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13327 === (10))){
var inst_13318 = (state_13326[(2)]);
var state_13326__$1 = state_13326;
var statearr_13340_13363 = state_13326__$1;
(statearr_13340_13363[(2)] = inst_13318);

(statearr_13340_13363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13327 === (8))){
var inst_13305 = (state_13326[(7)]);
var inst_13307 = (state_13326[(9)]);
var inst_13306 = (state_13326[(8)]);
var inst_13298 = (state_13326[(10)]);
var inst_13310 = (function (){var cs = inst_13298;
var vec__13303 = inst_13305;
var v = inst_13306;
var c = inst_13307;
return ((function (cs,vec__13303,v,c,inst_13305,inst_13307,inst_13306,inst_13298,state_val_13327,c__11293__auto___13354,out){
return (function (p1__13293_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13293_SHARP_);
});
;})(cs,vec__13303,v,c,inst_13305,inst_13307,inst_13306,inst_13298,state_val_13327,c__11293__auto___13354,out))
})();
var inst_13311 = cljs.core.filterv.call(null,inst_13310,inst_13298);
var inst_13298__$1 = inst_13311;
var state_13326__$1 = (function (){var statearr_13341 = state_13326;
(statearr_13341[(10)] = inst_13298__$1);

return statearr_13341;
})();
var statearr_13342_13364 = state_13326__$1;
(statearr_13342_13364[(2)] = null);

(statearr_13342_13364[(1)] = (2));


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
});})(c__11293__auto___13354,out))
;
return ((function (switch__11181__auto__,c__11293__auto___13354,out){
return (function() {
var cljs$core$async$state_machine__11182__auto__ = null;
var cljs$core$async$state_machine__11182__auto____0 = (function (){
var statearr_13346 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13346[(0)] = cljs$core$async$state_machine__11182__auto__);

(statearr_13346[(1)] = (1));

return statearr_13346;
});
var cljs$core$async$state_machine__11182__auto____1 = (function (state_13326){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_13326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e13347){if((e13347 instanceof Object)){
var ex__11185__auto__ = e13347;
var statearr_13348_13365 = state_13326;
(statearr_13348_13365[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13366 = state_13326;
state_13326 = G__13366;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$state_machine__11182__auto__ = function(state_13326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11182__auto____1.call(this,state_13326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11182__auto____0;
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11182__auto____1;
return cljs$core$async$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___13354,out))
})();
var state__11295__auto__ = (function (){var statearr_13349 = f__11294__auto__.call(null);
(statearr_13349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___13354);

return statearr_13349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___13354,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args13367 = [];
var len__6218__auto___13416 = arguments.length;
var i__6219__auto___13417 = (0);
while(true){
if((i__6219__auto___13417 < len__6218__auto___13416)){
args13367.push((arguments[i__6219__auto___13417]));

var G__13418 = (i__6219__auto___13417 + (1));
i__6219__auto___13417 = G__13418;
continue;
} else {
}
break;
}

var G__13369 = args13367.length;
switch (G__13369) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13367.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11293__auto___13420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___13420,out){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___13420,out){
return (function (state_13393){
var state_val_13394 = (state_13393[(1)]);
if((state_val_13394 === (7))){
var inst_13375 = (state_13393[(7)]);
var inst_13375__$1 = (state_13393[(2)]);
var inst_13376 = (inst_13375__$1 == null);
var inst_13377 = cljs.core.not.call(null,inst_13376);
var state_13393__$1 = (function (){var statearr_13395 = state_13393;
(statearr_13395[(7)] = inst_13375__$1);

return statearr_13395;
})();
if(inst_13377){
var statearr_13396_13421 = state_13393__$1;
(statearr_13396_13421[(1)] = (8));

} else {
var statearr_13397_13422 = state_13393__$1;
(statearr_13397_13422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (1))){
var inst_13370 = (0);
var state_13393__$1 = (function (){var statearr_13398 = state_13393;
(statearr_13398[(8)] = inst_13370);

return statearr_13398;
})();
var statearr_13399_13423 = state_13393__$1;
(statearr_13399_13423[(2)] = null);

(statearr_13399_13423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (4))){
var state_13393__$1 = state_13393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13393__$1,(7),ch);
} else {
if((state_val_13394 === (6))){
var inst_13388 = (state_13393[(2)]);
var state_13393__$1 = state_13393;
var statearr_13400_13424 = state_13393__$1;
(statearr_13400_13424[(2)] = inst_13388);

(statearr_13400_13424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (3))){
var inst_13390 = (state_13393[(2)]);
var inst_13391 = cljs.core.async.close_BANG_.call(null,out);
var state_13393__$1 = (function (){var statearr_13401 = state_13393;
(statearr_13401[(9)] = inst_13390);

return statearr_13401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13393__$1,inst_13391);
} else {
if((state_val_13394 === (2))){
var inst_13370 = (state_13393[(8)]);
var inst_13372 = (inst_13370 < n);
var state_13393__$1 = state_13393;
if(cljs.core.truth_(inst_13372)){
var statearr_13402_13425 = state_13393__$1;
(statearr_13402_13425[(1)] = (4));

} else {
var statearr_13403_13426 = state_13393__$1;
(statearr_13403_13426[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (11))){
var inst_13370 = (state_13393[(8)]);
var inst_13380 = (state_13393[(2)]);
var inst_13381 = (inst_13370 + (1));
var inst_13370__$1 = inst_13381;
var state_13393__$1 = (function (){var statearr_13404 = state_13393;
(statearr_13404[(8)] = inst_13370__$1);

(statearr_13404[(10)] = inst_13380);

return statearr_13404;
})();
var statearr_13405_13427 = state_13393__$1;
(statearr_13405_13427[(2)] = null);

(statearr_13405_13427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (9))){
var state_13393__$1 = state_13393;
var statearr_13406_13428 = state_13393__$1;
(statearr_13406_13428[(2)] = null);

(statearr_13406_13428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (5))){
var state_13393__$1 = state_13393;
var statearr_13407_13429 = state_13393__$1;
(statearr_13407_13429[(2)] = null);

(statearr_13407_13429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (10))){
var inst_13385 = (state_13393[(2)]);
var state_13393__$1 = state_13393;
var statearr_13408_13430 = state_13393__$1;
(statearr_13408_13430[(2)] = inst_13385);

(statearr_13408_13430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13394 === (8))){
var inst_13375 = (state_13393[(7)]);
var state_13393__$1 = state_13393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13393__$1,(11),out,inst_13375);
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
});})(c__11293__auto___13420,out))
;
return ((function (switch__11181__auto__,c__11293__auto___13420,out){
return (function() {
var cljs$core$async$state_machine__11182__auto__ = null;
var cljs$core$async$state_machine__11182__auto____0 = (function (){
var statearr_13412 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13412[(0)] = cljs$core$async$state_machine__11182__auto__);

(statearr_13412[(1)] = (1));

return statearr_13412;
});
var cljs$core$async$state_machine__11182__auto____1 = (function (state_13393){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_13393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e13413){if((e13413 instanceof Object)){
var ex__11185__auto__ = e13413;
var statearr_13414_13431 = state_13393;
(statearr_13414_13431[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13432 = state_13393;
state_13393 = G__13432;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$state_machine__11182__auto__ = function(state_13393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11182__auto____1.call(this,state_13393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11182__auto____0;
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11182__auto____1;
return cljs$core$async$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___13420,out))
})();
var state__11295__auto__ = (function (){var statearr_13415 = f__11294__auto__.call(null);
(statearr_13415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___13420);

return statearr_13415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___13420,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13440 = (function (map_LT_,f,ch,meta13441){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13441 = meta13441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13442,meta13441__$1){
var self__ = this;
var _13442__$1 = this;
return (new cljs.core.async.t_cljs$core$async13440(self__.map_LT_,self__.f,self__.ch,meta13441__$1));
});

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13442){
var self__ = this;
var _13442__$1 = this;
return self__.meta13441;
});

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13443 = (function (map_LT_,f,ch,meta13441,_,fn1,meta13444){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13441 = meta13441;
this._ = _;
this.fn1 = fn1;
this.meta13444 = meta13444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13445,meta13444__$1){
var self__ = this;
var _13445__$1 = this;
return (new cljs.core.async.t_cljs$core$async13443(self__.map_LT_,self__.f,self__.ch,self__.meta13441,self__._,self__.fn1,meta13444__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13445){
var self__ = this;
var _13445__$1 = this;
return self__.meta13444;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13443.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13433_SHARP_){
return f1.call(null,(((p1__13433_SHARP_ == null))?null:self__.f.call(null,p1__13433_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13443.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13441","meta13441",1069154497,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13440","cljs.core.async/t_cljs$core$async13440",1507150872,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13444","meta13444",-1599891453,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13443";

cljs.core.async.t_cljs$core$async13443.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cljs.core.async/t_cljs$core$async13443");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async13443 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13443(map_LT___$1,f__$1,ch__$1,meta13441__$1,___$2,fn1__$1,meta13444){
return (new cljs.core.async.t_cljs$core$async13443(map_LT___$1,f__$1,ch__$1,meta13441__$1,___$2,fn1__$1,meta13444));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13443(self__.map_LT_,self__.f,self__.ch,self__.meta13441,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5148__auto__ = ret;
if(cljs.core.truth_(and__5148__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__5148__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13441","meta13441",1069154497,null)], null);
});

cljs.core.async.t_cljs$core$async13440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13440";

cljs.core.async.t_cljs$core$async13440.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cljs.core.async/t_cljs$core$async13440");
});

cljs.core.async.__GT_t_cljs$core$async13440 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13440(map_LT___$1,f__$1,ch__$1,meta13441){
return (new cljs.core.async.t_cljs$core$async13440(map_LT___$1,f__$1,ch__$1,meta13441));
});

}

return (new cljs.core.async.t_cljs$core$async13440(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13449 = (function (map_GT_,f,ch,meta13450){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta13450 = meta13450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13451,meta13450__$1){
var self__ = this;
var _13451__$1 = this;
return (new cljs.core.async.t_cljs$core$async13449(self__.map_GT_,self__.f,self__.ch,meta13450__$1));
});

cljs.core.async.t_cljs$core$async13449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13451){
var self__ = this;
var _13451__$1 = this;
return self__.meta13450;
});

cljs.core.async.t_cljs$core$async13449.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13449.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13449.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13449.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13449.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13449.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13450","meta13450",-865831846,null)], null);
});

cljs.core.async.t_cljs$core$async13449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13449";

cljs.core.async.t_cljs$core$async13449.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cljs.core.async/t_cljs$core$async13449");
});

cljs.core.async.__GT_t_cljs$core$async13449 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13449(map_GT___$1,f__$1,ch__$1,meta13450){
return (new cljs.core.async.t_cljs$core$async13449(map_GT___$1,f__$1,ch__$1,meta13450));
});

}

return (new cljs.core.async.t_cljs$core$async13449(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13455 = (function (filter_GT_,p,ch,meta13456){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta13456 = meta13456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13457,meta13456__$1){
var self__ = this;
var _13457__$1 = this;
return (new cljs.core.async.t_cljs$core$async13455(self__.filter_GT_,self__.p,self__.ch,meta13456__$1));
});

cljs.core.async.t_cljs$core$async13455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13457){
var self__ = this;
var _13457__$1 = this;
return self__.meta13456;
});

cljs.core.async.t_cljs$core$async13455.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13455.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13455.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13455.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13455.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13455.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13455.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13456","meta13456",-1399713387,null)], null);
});

cljs.core.async.t_cljs$core$async13455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13455";

cljs.core.async.t_cljs$core$async13455.cljs$lang$ctorPrWriter = (function (this__5758__auto__,writer__5759__auto__,opt__5760__auto__){
return cljs.core._write.call(null,writer__5759__auto__,"cljs.core.async/t_cljs$core$async13455");
});

cljs.core.async.__GT_t_cljs$core$async13455 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13455(filter_GT___$1,p__$1,ch__$1,meta13456){
return (new cljs.core.async.t_cljs$core$async13455(filter_GT___$1,p__$1,ch__$1,meta13456));
});

}

return (new cljs.core.async.t_cljs$core$async13455(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args13458 = [];
var len__6218__auto___13502 = arguments.length;
var i__6219__auto___13503 = (0);
while(true){
if((i__6219__auto___13503 < len__6218__auto___13502)){
args13458.push((arguments[i__6219__auto___13503]));

var G__13504 = (i__6219__auto___13503 + (1));
i__6219__auto___13503 = G__13504;
continue;
} else {
}
break;
}

var G__13460 = args13458.length;
switch (G__13460) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13458.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11293__auto___13506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___13506,out){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___13506,out){
return (function (state_13481){
var state_val_13482 = (state_13481[(1)]);
if((state_val_13482 === (7))){
var inst_13477 = (state_13481[(2)]);
var state_13481__$1 = state_13481;
var statearr_13483_13507 = state_13481__$1;
(statearr_13483_13507[(2)] = inst_13477);

(statearr_13483_13507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (1))){
var state_13481__$1 = state_13481;
var statearr_13484_13508 = state_13481__$1;
(statearr_13484_13508[(2)] = null);

(statearr_13484_13508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (4))){
var inst_13463 = (state_13481[(7)]);
var inst_13463__$1 = (state_13481[(2)]);
var inst_13464 = (inst_13463__$1 == null);
var state_13481__$1 = (function (){var statearr_13485 = state_13481;
(statearr_13485[(7)] = inst_13463__$1);

return statearr_13485;
})();
if(cljs.core.truth_(inst_13464)){
var statearr_13486_13509 = state_13481__$1;
(statearr_13486_13509[(1)] = (5));

} else {
var statearr_13487_13510 = state_13481__$1;
(statearr_13487_13510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (6))){
var inst_13463 = (state_13481[(7)]);
var inst_13468 = p.call(null,inst_13463);
var state_13481__$1 = state_13481;
if(cljs.core.truth_(inst_13468)){
var statearr_13488_13511 = state_13481__$1;
(statearr_13488_13511[(1)] = (8));

} else {
var statearr_13489_13512 = state_13481__$1;
(statearr_13489_13512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (3))){
var inst_13479 = (state_13481[(2)]);
var state_13481__$1 = state_13481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13481__$1,inst_13479);
} else {
if((state_val_13482 === (2))){
var state_13481__$1 = state_13481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13481__$1,(4),ch);
} else {
if((state_val_13482 === (11))){
var inst_13471 = (state_13481[(2)]);
var state_13481__$1 = state_13481;
var statearr_13490_13513 = state_13481__$1;
(statearr_13490_13513[(2)] = inst_13471);

(statearr_13490_13513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (9))){
var state_13481__$1 = state_13481;
var statearr_13491_13514 = state_13481__$1;
(statearr_13491_13514[(2)] = null);

(statearr_13491_13514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (5))){
var inst_13466 = cljs.core.async.close_BANG_.call(null,out);
var state_13481__$1 = state_13481;
var statearr_13492_13515 = state_13481__$1;
(statearr_13492_13515[(2)] = inst_13466);

(statearr_13492_13515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (10))){
var inst_13474 = (state_13481[(2)]);
var state_13481__$1 = (function (){var statearr_13493 = state_13481;
(statearr_13493[(8)] = inst_13474);

return statearr_13493;
})();
var statearr_13494_13516 = state_13481__$1;
(statearr_13494_13516[(2)] = null);

(statearr_13494_13516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13482 === (8))){
var inst_13463 = (state_13481[(7)]);
var state_13481__$1 = state_13481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13481__$1,(11),out,inst_13463);
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
});})(c__11293__auto___13506,out))
;
return ((function (switch__11181__auto__,c__11293__auto___13506,out){
return (function() {
var cljs$core$async$state_machine__11182__auto__ = null;
var cljs$core$async$state_machine__11182__auto____0 = (function (){
var statearr_13498 = [null,null,null,null,null,null,null,null,null];
(statearr_13498[(0)] = cljs$core$async$state_machine__11182__auto__);

(statearr_13498[(1)] = (1));

return statearr_13498;
});
var cljs$core$async$state_machine__11182__auto____1 = (function (state_13481){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_13481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e13499){if((e13499 instanceof Object)){
var ex__11185__auto__ = e13499;
var statearr_13500_13517 = state_13481;
(statearr_13500_13517[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13518 = state_13481;
state_13481 = G__13518;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$state_machine__11182__auto__ = function(state_13481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11182__auto____1.call(this,state_13481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11182__auto____0;
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11182__auto____1;
return cljs$core$async$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___13506,out))
})();
var state__11295__auto__ = (function (){var statearr_13501 = f__11294__auto__.call(null);
(statearr_13501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___13506);

return statearr_13501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___13506,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args13519 = [];
var len__6218__auto___13522 = arguments.length;
var i__6219__auto___13523 = (0);
while(true){
if((i__6219__auto___13523 < len__6218__auto___13522)){
args13519.push((arguments[i__6219__auto___13523]));

var G__13524 = (i__6219__auto___13523 + (1));
i__6219__auto___13523 = G__13524;
continue;
} else {
}
break;
}

var G__13521 = args13519.length;
switch (G__13521) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13519.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto__){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto__){
return (function (state_13691){
var state_val_13692 = (state_13691[(1)]);
if((state_val_13692 === (7))){
var inst_13687 = (state_13691[(2)]);
var state_13691__$1 = state_13691;
var statearr_13693_13734 = state_13691__$1;
(statearr_13693_13734[(2)] = inst_13687);

(statearr_13693_13734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (20))){
var inst_13657 = (state_13691[(7)]);
var inst_13668 = (state_13691[(2)]);
var inst_13669 = cljs.core.next.call(null,inst_13657);
var inst_13643 = inst_13669;
var inst_13644 = null;
var inst_13645 = (0);
var inst_13646 = (0);
var state_13691__$1 = (function (){var statearr_13694 = state_13691;
(statearr_13694[(8)] = inst_13645);

(statearr_13694[(9)] = inst_13668);

(statearr_13694[(10)] = inst_13646);

(statearr_13694[(11)] = inst_13644);

(statearr_13694[(12)] = inst_13643);

return statearr_13694;
})();
var statearr_13695_13735 = state_13691__$1;
(statearr_13695_13735[(2)] = null);

(statearr_13695_13735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (1))){
var state_13691__$1 = state_13691;
var statearr_13696_13736 = state_13691__$1;
(statearr_13696_13736[(2)] = null);

(statearr_13696_13736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (4))){
var inst_13632 = (state_13691[(13)]);
var inst_13632__$1 = (state_13691[(2)]);
var inst_13633 = (inst_13632__$1 == null);
var state_13691__$1 = (function (){var statearr_13697 = state_13691;
(statearr_13697[(13)] = inst_13632__$1);

return statearr_13697;
})();
if(cljs.core.truth_(inst_13633)){
var statearr_13698_13737 = state_13691__$1;
(statearr_13698_13737[(1)] = (5));

} else {
var statearr_13699_13738 = state_13691__$1;
(statearr_13699_13738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (15))){
var state_13691__$1 = state_13691;
var statearr_13703_13739 = state_13691__$1;
(statearr_13703_13739[(2)] = null);

(statearr_13703_13739[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (21))){
var state_13691__$1 = state_13691;
var statearr_13704_13740 = state_13691__$1;
(statearr_13704_13740[(2)] = null);

(statearr_13704_13740[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (13))){
var inst_13645 = (state_13691[(8)]);
var inst_13646 = (state_13691[(10)]);
var inst_13644 = (state_13691[(11)]);
var inst_13643 = (state_13691[(12)]);
var inst_13653 = (state_13691[(2)]);
var inst_13654 = (inst_13646 + (1));
var tmp13700 = inst_13645;
var tmp13701 = inst_13644;
var tmp13702 = inst_13643;
var inst_13643__$1 = tmp13702;
var inst_13644__$1 = tmp13701;
var inst_13645__$1 = tmp13700;
var inst_13646__$1 = inst_13654;
var state_13691__$1 = (function (){var statearr_13705 = state_13691;
(statearr_13705[(8)] = inst_13645__$1);

(statearr_13705[(10)] = inst_13646__$1);

(statearr_13705[(14)] = inst_13653);

(statearr_13705[(11)] = inst_13644__$1);

(statearr_13705[(12)] = inst_13643__$1);

return statearr_13705;
})();
var statearr_13706_13741 = state_13691__$1;
(statearr_13706_13741[(2)] = null);

(statearr_13706_13741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (22))){
var state_13691__$1 = state_13691;
var statearr_13707_13742 = state_13691__$1;
(statearr_13707_13742[(2)] = null);

(statearr_13707_13742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (6))){
var inst_13632 = (state_13691[(13)]);
var inst_13641 = f.call(null,inst_13632);
var inst_13642 = cljs.core.seq.call(null,inst_13641);
var inst_13643 = inst_13642;
var inst_13644 = null;
var inst_13645 = (0);
var inst_13646 = (0);
var state_13691__$1 = (function (){var statearr_13708 = state_13691;
(statearr_13708[(8)] = inst_13645);

(statearr_13708[(10)] = inst_13646);

(statearr_13708[(11)] = inst_13644);

(statearr_13708[(12)] = inst_13643);

return statearr_13708;
})();
var statearr_13709_13743 = state_13691__$1;
(statearr_13709_13743[(2)] = null);

(statearr_13709_13743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (17))){
var inst_13657 = (state_13691[(7)]);
var inst_13661 = cljs.core.chunk_first.call(null,inst_13657);
var inst_13662 = cljs.core.chunk_rest.call(null,inst_13657);
var inst_13663 = cljs.core.count.call(null,inst_13661);
var inst_13643 = inst_13662;
var inst_13644 = inst_13661;
var inst_13645 = inst_13663;
var inst_13646 = (0);
var state_13691__$1 = (function (){var statearr_13710 = state_13691;
(statearr_13710[(8)] = inst_13645);

(statearr_13710[(10)] = inst_13646);

(statearr_13710[(11)] = inst_13644);

(statearr_13710[(12)] = inst_13643);

return statearr_13710;
})();
var statearr_13711_13744 = state_13691__$1;
(statearr_13711_13744[(2)] = null);

(statearr_13711_13744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (3))){
var inst_13689 = (state_13691[(2)]);
var state_13691__$1 = state_13691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13691__$1,inst_13689);
} else {
if((state_val_13692 === (12))){
var inst_13677 = (state_13691[(2)]);
var state_13691__$1 = state_13691;
var statearr_13712_13745 = state_13691__$1;
(statearr_13712_13745[(2)] = inst_13677);

(statearr_13712_13745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (2))){
var state_13691__$1 = state_13691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13691__$1,(4),in$);
} else {
if((state_val_13692 === (23))){
var inst_13685 = (state_13691[(2)]);
var state_13691__$1 = state_13691;
var statearr_13713_13746 = state_13691__$1;
(statearr_13713_13746[(2)] = inst_13685);

(statearr_13713_13746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (19))){
var inst_13672 = (state_13691[(2)]);
var state_13691__$1 = state_13691;
var statearr_13714_13747 = state_13691__$1;
(statearr_13714_13747[(2)] = inst_13672);

(statearr_13714_13747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (11))){
var inst_13657 = (state_13691[(7)]);
var inst_13643 = (state_13691[(12)]);
var inst_13657__$1 = cljs.core.seq.call(null,inst_13643);
var state_13691__$1 = (function (){var statearr_13715 = state_13691;
(statearr_13715[(7)] = inst_13657__$1);

return statearr_13715;
})();
if(inst_13657__$1){
var statearr_13716_13748 = state_13691__$1;
(statearr_13716_13748[(1)] = (14));

} else {
var statearr_13717_13749 = state_13691__$1;
(statearr_13717_13749[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (9))){
var inst_13679 = (state_13691[(2)]);
var inst_13680 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13691__$1 = (function (){var statearr_13718 = state_13691;
(statearr_13718[(15)] = inst_13679);

return statearr_13718;
})();
if(cljs.core.truth_(inst_13680)){
var statearr_13719_13750 = state_13691__$1;
(statearr_13719_13750[(1)] = (21));

} else {
var statearr_13720_13751 = state_13691__$1;
(statearr_13720_13751[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (5))){
var inst_13635 = cljs.core.async.close_BANG_.call(null,out);
var state_13691__$1 = state_13691;
var statearr_13721_13752 = state_13691__$1;
(statearr_13721_13752[(2)] = inst_13635);

(statearr_13721_13752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (14))){
var inst_13657 = (state_13691[(7)]);
var inst_13659 = cljs.core.chunked_seq_QMARK_.call(null,inst_13657);
var state_13691__$1 = state_13691;
if(inst_13659){
var statearr_13722_13753 = state_13691__$1;
(statearr_13722_13753[(1)] = (17));

} else {
var statearr_13723_13754 = state_13691__$1;
(statearr_13723_13754[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (16))){
var inst_13675 = (state_13691[(2)]);
var state_13691__$1 = state_13691;
var statearr_13724_13755 = state_13691__$1;
(statearr_13724_13755[(2)] = inst_13675);

(statearr_13724_13755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (10))){
var inst_13646 = (state_13691[(10)]);
var inst_13644 = (state_13691[(11)]);
var inst_13651 = cljs.core._nth.call(null,inst_13644,inst_13646);
var state_13691__$1 = state_13691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13691__$1,(13),out,inst_13651);
} else {
if((state_val_13692 === (18))){
var inst_13657 = (state_13691[(7)]);
var inst_13666 = cljs.core.first.call(null,inst_13657);
var state_13691__$1 = state_13691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13691__$1,(20),out,inst_13666);
} else {
if((state_val_13692 === (8))){
var inst_13645 = (state_13691[(8)]);
var inst_13646 = (state_13691[(10)]);
var inst_13648 = (inst_13646 < inst_13645);
var inst_13649 = inst_13648;
var state_13691__$1 = state_13691;
if(cljs.core.truth_(inst_13649)){
var statearr_13725_13756 = state_13691__$1;
(statearr_13725_13756[(1)] = (10));

} else {
var statearr_13726_13757 = state_13691__$1;
(statearr_13726_13757[(1)] = (11));

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
});})(c__11293__auto__))
;
return ((function (switch__11181__auto__,c__11293__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11182__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11182__auto____0 = (function (){
var statearr_13730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13730[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11182__auto__);

(statearr_13730[(1)] = (1));

return statearr_13730;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11182__auto____1 = (function (state_13691){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_13691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e13731){if((e13731 instanceof Object)){
var ex__11185__auto__ = e13731;
var statearr_13732_13758 = state_13691;
(statearr_13732_13758[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13759 = state_13691;
state_13691 = G__13759;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11182__auto__ = function(state_13691){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11182__auto____1.call(this,state_13691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11182__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11182__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto__))
})();
var state__11295__auto__ = (function (){var statearr_13733 = f__11294__auto__.call(null);
(statearr_13733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto__);

return statearr_13733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto__))
);

return c__11293__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args13760 = [];
var len__6218__auto___13763 = arguments.length;
var i__6219__auto___13764 = (0);
while(true){
if((i__6219__auto___13764 < len__6218__auto___13763)){
args13760.push((arguments[i__6219__auto___13764]));

var G__13765 = (i__6219__auto___13764 + (1));
i__6219__auto___13764 = G__13765;
continue;
} else {
}
break;
}

var G__13762 = args13760.length;
switch (G__13762) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13760.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args13767 = [];
var len__6218__auto___13770 = arguments.length;
var i__6219__auto___13771 = (0);
while(true){
if((i__6219__auto___13771 < len__6218__auto___13770)){
args13767.push((arguments[i__6219__auto___13771]));

var G__13772 = (i__6219__auto___13771 + (1));
i__6219__auto___13771 = G__13772;
continue;
} else {
}
break;
}

var G__13769 = args13767.length;
switch (G__13769) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13767.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args13774 = [];
var len__6218__auto___13825 = arguments.length;
var i__6219__auto___13826 = (0);
while(true){
if((i__6219__auto___13826 < len__6218__auto___13825)){
args13774.push((arguments[i__6219__auto___13826]));

var G__13827 = (i__6219__auto___13826 + (1));
i__6219__auto___13826 = G__13827;
continue;
} else {
}
break;
}

var G__13776 = args13774.length;
switch (G__13776) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13774.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11293__auto___13829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___13829,out){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___13829,out){
return (function (state_13800){
var state_val_13801 = (state_13800[(1)]);
if((state_val_13801 === (7))){
var inst_13795 = (state_13800[(2)]);
var state_13800__$1 = state_13800;
var statearr_13802_13830 = state_13800__$1;
(statearr_13802_13830[(2)] = inst_13795);

(statearr_13802_13830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (1))){
var inst_13777 = null;
var state_13800__$1 = (function (){var statearr_13803 = state_13800;
(statearr_13803[(7)] = inst_13777);

return statearr_13803;
})();
var statearr_13804_13831 = state_13800__$1;
(statearr_13804_13831[(2)] = null);

(statearr_13804_13831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (4))){
var inst_13780 = (state_13800[(8)]);
var inst_13780__$1 = (state_13800[(2)]);
var inst_13781 = (inst_13780__$1 == null);
var inst_13782 = cljs.core.not.call(null,inst_13781);
var state_13800__$1 = (function (){var statearr_13805 = state_13800;
(statearr_13805[(8)] = inst_13780__$1);

return statearr_13805;
})();
if(inst_13782){
var statearr_13806_13832 = state_13800__$1;
(statearr_13806_13832[(1)] = (5));

} else {
var statearr_13807_13833 = state_13800__$1;
(statearr_13807_13833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (6))){
var state_13800__$1 = state_13800;
var statearr_13808_13834 = state_13800__$1;
(statearr_13808_13834[(2)] = null);

(statearr_13808_13834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (3))){
var inst_13797 = (state_13800[(2)]);
var inst_13798 = cljs.core.async.close_BANG_.call(null,out);
var state_13800__$1 = (function (){var statearr_13809 = state_13800;
(statearr_13809[(9)] = inst_13797);

return statearr_13809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13800__$1,inst_13798);
} else {
if((state_val_13801 === (2))){
var state_13800__$1 = state_13800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13800__$1,(4),ch);
} else {
if((state_val_13801 === (11))){
var inst_13780 = (state_13800[(8)]);
var inst_13789 = (state_13800[(2)]);
var inst_13777 = inst_13780;
var state_13800__$1 = (function (){var statearr_13810 = state_13800;
(statearr_13810[(7)] = inst_13777);

(statearr_13810[(10)] = inst_13789);

return statearr_13810;
})();
var statearr_13811_13835 = state_13800__$1;
(statearr_13811_13835[(2)] = null);

(statearr_13811_13835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (9))){
var inst_13780 = (state_13800[(8)]);
var state_13800__$1 = state_13800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13800__$1,(11),out,inst_13780);
} else {
if((state_val_13801 === (5))){
var inst_13777 = (state_13800[(7)]);
var inst_13780 = (state_13800[(8)]);
var inst_13784 = cljs.core._EQ_.call(null,inst_13780,inst_13777);
var state_13800__$1 = state_13800;
if(inst_13784){
var statearr_13813_13836 = state_13800__$1;
(statearr_13813_13836[(1)] = (8));

} else {
var statearr_13814_13837 = state_13800__$1;
(statearr_13814_13837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (10))){
var inst_13792 = (state_13800[(2)]);
var state_13800__$1 = state_13800;
var statearr_13815_13838 = state_13800__$1;
(statearr_13815_13838[(2)] = inst_13792);

(statearr_13815_13838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13801 === (8))){
var inst_13777 = (state_13800[(7)]);
var tmp13812 = inst_13777;
var inst_13777__$1 = tmp13812;
var state_13800__$1 = (function (){var statearr_13816 = state_13800;
(statearr_13816[(7)] = inst_13777__$1);

return statearr_13816;
})();
var statearr_13817_13839 = state_13800__$1;
(statearr_13817_13839[(2)] = null);

(statearr_13817_13839[(1)] = (2));


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
});})(c__11293__auto___13829,out))
;
return ((function (switch__11181__auto__,c__11293__auto___13829,out){
return (function() {
var cljs$core$async$state_machine__11182__auto__ = null;
var cljs$core$async$state_machine__11182__auto____0 = (function (){
var statearr_13821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13821[(0)] = cljs$core$async$state_machine__11182__auto__);

(statearr_13821[(1)] = (1));

return statearr_13821;
});
var cljs$core$async$state_machine__11182__auto____1 = (function (state_13800){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_13800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e13822){if((e13822 instanceof Object)){
var ex__11185__auto__ = e13822;
var statearr_13823_13840 = state_13800;
(statearr_13823_13840[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13841 = state_13800;
state_13800 = G__13841;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$state_machine__11182__auto__ = function(state_13800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11182__auto____1.call(this,state_13800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11182__auto____0;
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11182__auto____1;
return cljs$core$async$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___13829,out))
})();
var state__11295__auto__ = (function (){var statearr_13824 = f__11294__auto__.call(null);
(statearr_13824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___13829);

return statearr_13824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___13829,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args13842 = [];
var len__6218__auto___13912 = arguments.length;
var i__6219__auto___13913 = (0);
while(true){
if((i__6219__auto___13913 < len__6218__auto___13912)){
args13842.push((arguments[i__6219__auto___13913]));

var G__13914 = (i__6219__auto___13913 + (1));
i__6219__auto___13913 = G__13914;
continue;
} else {
}
break;
}

var G__13844 = args13842.length;
switch (G__13844) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13842.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11293__auto___13916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___13916,out){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___13916,out){
return (function (state_13882){
var state_val_13883 = (state_13882[(1)]);
if((state_val_13883 === (7))){
var inst_13878 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
var statearr_13884_13917 = state_13882__$1;
(statearr_13884_13917[(2)] = inst_13878);

(statearr_13884_13917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (1))){
var inst_13845 = (new Array(n));
var inst_13846 = inst_13845;
var inst_13847 = (0);
var state_13882__$1 = (function (){var statearr_13885 = state_13882;
(statearr_13885[(7)] = inst_13847);

(statearr_13885[(8)] = inst_13846);

return statearr_13885;
})();
var statearr_13886_13918 = state_13882__$1;
(statearr_13886_13918[(2)] = null);

(statearr_13886_13918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (4))){
var inst_13850 = (state_13882[(9)]);
var inst_13850__$1 = (state_13882[(2)]);
var inst_13851 = (inst_13850__$1 == null);
var inst_13852 = cljs.core.not.call(null,inst_13851);
var state_13882__$1 = (function (){var statearr_13887 = state_13882;
(statearr_13887[(9)] = inst_13850__$1);

return statearr_13887;
})();
if(inst_13852){
var statearr_13888_13919 = state_13882__$1;
(statearr_13888_13919[(1)] = (5));

} else {
var statearr_13889_13920 = state_13882__$1;
(statearr_13889_13920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (15))){
var inst_13872 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
var statearr_13890_13921 = state_13882__$1;
(statearr_13890_13921[(2)] = inst_13872);

(statearr_13890_13921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (13))){
var state_13882__$1 = state_13882;
var statearr_13891_13922 = state_13882__$1;
(statearr_13891_13922[(2)] = null);

(statearr_13891_13922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (6))){
var inst_13847 = (state_13882[(7)]);
var inst_13868 = (inst_13847 > (0));
var state_13882__$1 = state_13882;
if(cljs.core.truth_(inst_13868)){
var statearr_13892_13923 = state_13882__$1;
(statearr_13892_13923[(1)] = (12));

} else {
var statearr_13893_13924 = state_13882__$1;
(statearr_13893_13924[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (3))){
var inst_13880 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13882__$1,inst_13880);
} else {
if((state_val_13883 === (12))){
var inst_13846 = (state_13882[(8)]);
var inst_13870 = cljs.core.vec.call(null,inst_13846);
var state_13882__$1 = state_13882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13882__$1,(15),out,inst_13870);
} else {
if((state_val_13883 === (2))){
var state_13882__$1 = state_13882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13882__$1,(4),ch);
} else {
if((state_val_13883 === (11))){
var inst_13862 = (state_13882[(2)]);
var inst_13863 = (new Array(n));
var inst_13846 = inst_13863;
var inst_13847 = (0);
var state_13882__$1 = (function (){var statearr_13894 = state_13882;
(statearr_13894[(10)] = inst_13862);

(statearr_13894[(7)] = inst_13847);

(statearr_13894[(8)] = inst_13846);

return statearr_13894;
})();
var statearr_13895_13925 = state_13882__$1;
(statearr_13895_13925[(2)] = null);

(statearr_13895_13925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (9))){
var inst_13846 = (state_13882[(8)]);
var inst_13860 = cljs.core.vec.call(null,inst_13846);
var state_13882__$1 = state_13882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13882__$1,(11),out,inst_13860);
} else {
if((state_val_13883 === (5))){
var inst_13850 = (state_13882[(9)]);
var inst_13855 = (state_13882[(11)]);
var inst_13847 = (state_13882[(7)]);
var inst_13846 = (state_13882[(8)]);
var inst_13854 = (inst_13846[inst_13847] = inst_13850);
var inst_13855__$1 = (inst_13847 + (1));
var inst_13856 = (inst_13855__$1 < n);
var state_13882__$1 = (function (){var statearr_13896 = state_13882;
(statearr_13896[(11)] = inst_13855__$1);

(statearr_13896[(12)] = inst_13854);

return statearr_13896;
})();
if(cljs.core.truth_(inst_13856)){
var statearr_13897_13926 = state_13882__$1;
(statearr_13897_13926[(1)] = (8));

} else {
var statearr_13898_13927 = state_13882__$1;
(statearr_13898_13927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (14))){
var inst_13875 = (state_13882[(2)]);
var inst_13876 = cljs.core.async.close_BANG_.call(null,out);
var state_13882__$1 = (function (){var statearr_13900 = state_13882;
(statearr_13900[(13)] = inst_13875);

return statearr_13900;
})();
var statearr_13901_13928 = state_13882__$1;
(statearr_13901_13928[(2)] = inst_13876);

(statearr_13901_13928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (10))){
var inst_13866 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
var statearr_13902_13929 = state_13882__$1;
(statearr_13902_13929[(2)] = inst_13866);

(statearr_13902_13929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (8))){
var inst_13855 = (state_13882[(11)]);
var inst_13846 = (state_13882[(8)]);
var tmp13899 = inst_13846;
var inst_13846__$1 = tmp13899;
var inst_13847 = inst_13855;
var state_13882__$1 = (function (){var statearr_13903 = state_13882;
(statearr_13903[(7)] = inst_13847);

(statearr_13903[(8)] = inst_13846__$1);

return statearr_13903;
})();
var statearr_13904_13930 = state_13882__$1;
(statearr_13904_13930[(2)] = null);

(statearr_13904_13930[(1)] = (2));


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
});})(c__11293__auto___13916,out))
;
return ((function (switch__11181__auto__,c__11293__auto___13916,out){
return (function() {
var cljs$core$async$state_machine__11182__auto__ = null;
var cljs$core$async$state_machine__11182__auto____0 = (function (){
var statearr_13908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13908[(0)] = cljs$core$async$state_machine__11182__auto__);

(statearr_13908[(1)] = (1));

return statearr_13908;
});
var cljs$core$async$state_machine__11182__auto____1 = (function (state_13882){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_13882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e13909){if((e13909 instanceof Object)){
var ex__11185__auto__ = e13909;
var statearr_13910_13931 = state_13882;
(statearr_13910_13931[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13932 = state_13882;
state_13882 = G__13932;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$state_machine__11182__auto__ = function(state_13882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11182__auto____1.call(this,state_13882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11182__auto____0;
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11182__auto____1;
return cljs$core$async$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___13916,out))
})();
var state__11295__auto__ = (function (){var statearr_13911 = f__11294__auto__.call(null);
(statearr_13911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___13916);

return statearr_13911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___13916,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args13933 = [];
var len__6218__auto___14007 = arguments.length;
var i__6219__auto___14008 = (0);
while(true){
if((i__6219__auto___14008 < len__6218__auto___14007)){
args13933.push((arguments[i__6219__auto___14008]));

var G__14009 = (i__6219__auto___14008 + (1));
i__6219__auto___14008 = G__14009;
continue;
} else {
}
break;
}

var G__13935 = args13933.length;
switch (G__13935) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13933.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11293__auto___14011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11293__auto___14011,out){
return (function (){
var f__11294__auto__ = (function (){var switch__11181__auto__ = ((function (c__11293__auto___14011,out){
return (function (state_13977){
var state_val_13978 = (state_13977[(1)]);
if((state_val_13978 === (7))){
var inst_13973 = (state_13977[(2)]);
var state_13977__$1 = state_13977;
var statearr_13979_14012 = state_13977__$1;
(statearr_13979_14012[(2)] = inst_13973);

(statearr_13979_14012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (1))){
var inst_13936 = [];
var inst_13937 = inst_13936;
var inst_13938 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13977__$1 = (function (){var statearr_13980 = state_13977;
(statearr_13980[(7)] = inst_13937);

(statearr_13980[(8)] = inst_13938);

return statearr_13980;
})();
var statearr_13981_14013 = state_13977__$1;
(statearr_13981_14013[(2)] = null);

(statearr_13981_14013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (4))){
var inst_13941 = (state_13977[(9)]);
var inst_13941__$1 = (state_13977[(2)]);
var inst_13942 = (inst_13941__$1 == null);
var inst_13943 = cljs.core.not.call(null,inst_13942);
var state_13977__$1 = (function (){var statearr_13982 = state_13977;
(statearr_13982[(9)] = inst_13941__$1);

return statearr_13982;
})();
if(inst_13943){
var statearr_13983_14014 = state_13977__$1;
(statearr_13983_14014[(1)] = (5));

} else {
var statearr_13984_14015 = state_13977__$1;
(statearr_13984_14015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (15))){
var inst_13967 = (state_13977[(2)]);
var state_13977__$1 = state_13977;
var statearr_13985_14016 = state_13977__$1;
(statearr_13985_14016[(2)] = inst_13967);

(statearr_13985_14016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (13))){
var state_13977__$1 = state_13977;
var statearr_13986_14017 = state_13977__$1;
(statearr_13986_14017[(2)] = null);

(statearr_13986_14017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (6))){
var inst_13937 = (state_13977[(7)]);
var inst_13962 = inst_13937.length;
var inst_13963 = (inst_13962 > (0));
var state_13977__$1 = state_13977;
if(cljs.core.truth_(inst_13963)){
var statearr_13987_14018 = state_13977__$1;
(statearr_13987_14018[(1)] = (12));

} else {
var statearr_13988_14019 = state_13977__$1;
(statearr_13988_14019[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (3))){
var inst_13975 = (state_13977[(2)]);
var state_13977__$1 = state_13977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13977__$1,inst_13975);
} else {
if((state_val_13978 === (12))){
var inst_13937 = (state_13977[(7)]);
var inst_13965 = cljs.core.vec.call(null,inst_13937);
var state_13977__$1 = state_13977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13977__$1,(15),out,inst_13965);
} else {
if((state_val_13978 === (2))){
var state_13977__$1 = state_13977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13977__$1,(4),ch);
} else {
if((state_val_13978 === (11))){
var inst_13941 = (state_13977[(9)]);
var inst_13945 = (state_13977[(10)]);
var inst_13955 = (state_13977[(2)]);
var inst_13956 = [];
var inst_13957 = inst_13956.push(inst_13941);
var inst_13937 = inst_13956;
var inst_13938 = inst_13945;
var state_13977__$1 = (function (){var statearr_13989 = state_13977;
(statearr_13989[(7)] = inst_13937);

(statearr_13989[(11)] = inst_13955);

(statearr_13989[(12)] = inst_13957);

(statearr_13989[(8)] = inst_13938);

return statearr_13989;
})();
var statearr_13990_14020 = state_13977__$1;
(statearr_13990_14020[(2)] = null);

(statearr_13990_14020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (9))){
var inst_13937 = (state_13977[(7)]);
var inst_13953 = cljs.core.vec.call(null,inst_13937);
var state_13977__$1 = state_13977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13977__$1,(11),out,inst_13953);
} else {
if((state_val_13978 === (5))){
var inst_13941 = (state_13977[(9)]);
var inst_13945 = (state_13977[(10)]);
var inst_13938 = (state_13977[(8)]);
var inst_13945__$1 = f.call(null,inst_13941);
var inst_13946 = cljs.core._EQ_.call(null,inst_13945__$1,inst_13938);
var inst_13947 = cljs.core.keyword_identical_QMARK_.call(null,inst_13938,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13948 = (inst_13946) || (inst_13947);
var state_13977__$1 = (function (){var statearr_13991 = state_13977;
(statearr_13991[(10)] = inst_13945__$1);

return statearr_13991;
})();
if(cljs.core.truth_(inst_13948)){
var statearr_13992_14021 = state_13977__$1;
(statearr_13992_14021[(1)] = (8));

} else {
var statearr_13993_14022 = state_13977__$1;
(statearr_13993_14022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (14))){
var inst_13970 = (state_13977[(2)]);
var inst_13971 = cljs.core.async.close_BANG_.call(null,out);
var state_13977__$1 = (function (){var statearr_13995 = state_13977;
(statearr_13995[(13)] = inst_13970);

return statearr_13995;
})();
var statearr_13996_14023 = state_13977__$1;
(statearr_13996_14023[(2)] = inst_13971);

(statearr_13996_14023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (10))){
var inst_13960 = (state_13977[(2)]);
var state_13977__$1 = state_13977;
var statearr_13997_14024 = state_13977__$1;
(statearr_13997_14024[(2)] = inst_13960);

(statearr_13997_14024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13978 === (8))){
var inst_13937 = (state_13977[(7)]);
var inst_13941 = (state_13977[(9)]);
var inst_13945 = (state_13977[(10)]);
var inst_13950 = inst_13937.push(inst_13941);
var tmp13994 = inst_13937;
var inst_13937__$1 = tmp13994;
var inst_13938 = inst_13945;
var state_13977__$1 = (function (){var statearr_13998 = state_13977;
(statearr_13998[(7)] = inst_13937__$1);

(statearr_13998[(8)] = inst_13938);

(statearr_13998[(14)] = inst_13950);

return statearr_13998;
})();
var statearr_13999_14025 = state_13977__$1;
(statearr_13999_14025[(2)] = null);

(statearr_13999_14025[(1)] = (2));


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
});})(c__11293__auto___14011,out))
;
return ((function (switch__11181__auto__,c__11293__auto___14011,out){
return (function() {
var cljs$core$async$state_machine__11182__auto__ = null;
var cljs$core$async$state_machine__11182__auto____0 = (function (){
var statearr_14003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14003[(0)] = cljs$core$async$state_machine__11182__auto__);

(statearr_14003[(1)] = (1));

return statearr_14003;
});
var cljs$core$async$state_machine__11182__auto____1 = (function (state_13977){
while(true){
var ret_value__11183__auto__ = (function (){try{while(true){
var result__11184__auto__ = switch__11181__auto__.call(null,state_13977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11184__auto__;
}
break;
}
}catch (e14004){if((e14004 instanceof Object)){
var ex__11185__auto__ = e14004;
var statearr_14005_14026 = state_13977;
(statearr_14005_14026[(5)] = ex__11185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14027 = state_13977;
state_13977 = G__14027;
continue;
} else {
return ret_value__11183__auto__;
}
break;
}
});
cljs$core$async$state_machine__11182__auto__ = function(state_13977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11182__auto____1.call(this,state_13977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11182__auto____0;
cljs$core$async$state_machine__11182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11182__auto____1;
return cljs$core$async$state_machine__11182__auto__;
})()
;})(switch__11181__auto__,c__11293__auto___14011,out))
})();
var state__11295__auto__ = (function (){var statearr_14006 = f__11294__auto__.call(null);
(statearr_14006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11293__auto___14011);

return statearr_14006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11295__auto__);
});})(c__11293__auto___14011,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map