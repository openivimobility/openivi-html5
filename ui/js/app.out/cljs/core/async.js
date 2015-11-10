// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async11721 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11721 = (function (fn_handler,f,meta11722){
this.fn_handler = fn_handler;
this.f = f;
this.meta11722 = meta11722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11723,meta11722__$1){
var self__ = this;
var _11723__$1 = this;
return (new cljs.core.async.t_cljs$core$async11721(self__.fn_handler,self__.f,meta11722__$1));
});

cljs.core.async.t_cljs$core$async11721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11723){
var self__ = this;
var _11723__$1 = this;
return self__.meta11722;
});

cljs.core.async.t_cljs$core$async11721.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta11722","meta11722",-522744959,null)], null);
});

cljs.core.async.t_cljs$core$async11721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11721";

cljs.core.async.t_cljs$core$async11721.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async11721");
});

cljs.core.async.__GT_t_cljs$core$async11721 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async11721(fn_handler__$1,f__$1,meta11722){
return (new cljs.core.async.t_cljs$core$async11721(fn_handler__$1,f__$1,meta11722));
});

}

return (new cljs.core.async.t_cljs$core$async11721(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args11726 = [];
var len__6226__auto___11729 = arguments.length;
var i__6227__auto___11730 = (0);
while(true){
if((i__6227__auto___11730 < len__6226__auto___11729)){
args11726.push((arguments[i__6227__auto___11730]));

var G__11731 = (i__6227__auto___11730 + (1));
i__6227__auto___11730 = G__11731;
continue;
} else {
}
break;
}

var G__11728 = args11726.length;
switch (G__11728) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11726.length)].join('')));

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
var args11733 = [];
var len__6226__auto___11736 = arguments.length;
var i__6227__auto___11737 = (0);
while(true){
if((i__6227__auto___11737 < len__6226__auto___11736)){
args11733.push((arguments[i__6227__auto___11737]));

var G__11738 = (i__6227__auto___11737 + (1));
i__6227__auto___11737 = G__11738;
continue;
} else {
}
break;
}

var G__11735 = args11733.length;
switch (G__11735) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11733.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11740 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11740);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11740,ret){
return (function (){
return fn1.call(null,val_11740);
});})(val_11740,ret))
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
var args11741 = [];
var len__6226__auto___11744 = arguments.length;
var i__6227__auto___11745 = (0);
while(true){
if((i__6227__auto___11745 < len__6226__auto___11744)){
args11741.push((arguments[i__6227__auto___11745]));

var G__11746 = (i__6227__auto___11745 + (1));
i__6227__auto___11745 = G__11746;
continue;
} else {
}
break;
}

var G__11743 = args11741.length;
switch (G__11743) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11741.length)].join('')));

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
var n__6071__auto___11748 = n;
var x_11749 = (0);
while(true){
if((x_11749 < n__6071__auto___11748)){
(a[x_11749] = (0));

var G__11750 = (x_11749 + (1));
x_11749 = G__11750;
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

var G__11751 = (i + (1));
i = G__11751;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11755 = (function (alt_flag,flag,meta11756){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11756 = meta11756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11757,meta11756__$1){
var self__ = this;
var _11757__$1 = this;
return (new cljs.core.async.t_cljs$core$async11755(self__.alt_flag,self__.flag,meta11756__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11757){
var self__ = this;
var _11757__$1 = this;
return self__.meta11756;
});})(flag))
;

cljs.core.async.t_cljs$core$async11755.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11755.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11756","meta11756",1455758547,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11755";

cljs.core.async.t_cljs$core$async11755.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async11755");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11755 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11755(alt_flag__$1,flag__$1,meta11756){
return (new cljs.core.async.t_cljs$core$async11755(alt_flag__$1,flag__$1,meta11756));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11755(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11761 = (function (alt_handler,flag,cb,meta11762){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11762 = meta11762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11763,meta11762__$1){
var self__ = this;
var _11763__$1 = this;
return (new cljs.core.async.t_cljs$core$async11761(self__.alt_handler,self__.flag,self__.cb,meta11762__$1));
});

cljs.core.async.t_cljs$core$async11761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11763){
var self__ = this;
var _11763__$1 = this;
return self__.meta11762;
});

cljs.core.async.t_cljs$core$async11761.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11762","meta11762",1082744272,null)], null);
});

cljs.core.async.t_cljs$core$async11761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11761";

cljs.core.async.t_cljs$core$async11761.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async11761");
});

cljs.core.async.__GT_t_cljs$core$async11761 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11761(alt_handler__$1,flag__$1,cb__$1,meta11762){
return (new cljs.core.async.t_cljs$core$async11761(alt_handler__$1,flag__$1,cb__$1,meta11762));
});

}

return (new cljs.core.async.t_cljs$core$async11761(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11764_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11764_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11765_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11765_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5168__auto__ = wport;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11766 = (i + (1));
i = G__11766;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5168__auto__ = ret;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__5156__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5156__auto__;
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
var args__6233__auto__ = [];
var len__6226__auto___11772 = arguments.length;
var i__6227__auto___11773 = (0);
while(true){
if((i__6227__auto___11773 < len__6226__auto___11772)){
args__6233__auto__.push((arguments[i__6227__auto___11773]));

var G__11774 = (i__6227__auto___11773 + (1));
i__6227__auto___11773 = G__11774;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11769){
var map__11770 = p__11769;
var map__11770__$1 = ((((!((map__11770 == null)))?((((map__11770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11770):map__11770);
var opts = map__11770__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11767){
var G__11768 = cljs.core.first.call(null,seq11767);
var seq11767__$1 = cljs.core.next.call(null,seq11767);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11768,seq11767__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args11775 = [];
var len__6226__auto___11825 = arguments.length;
var i__6227__auto___11826 = (0);
while(true){
if((i__6227__auto___11826 < len__6226__auto___11825)){
args11775.push((arguments[i__6227__auto___11826]));

var G__11827 = (i__6227__auto___11826 + (1));
i__6227__auto___11826 = G__11827;
continue;
} else {
}
break;
}

var G__11777 = args11775.length;
switch (G__11777) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11775.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11673__auto___11829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___11829){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___11829){
return (function (state_11801){
var state_val_11802 = (state_11801[(1)]);
if((state_val_11802 === (7))){
var inst_11797 = (state_11801[(2)]);
var state_11801__$1 = state_11801;
var statearr_11803_11830 = state_11801__$1;
(statearr_11803_11830[(2)] = inst_11797);

(statearr_11803_11830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11802 === (1))){
var state_11801__$1 = state_11801;
var statearr_11804_11831 = state_11801__$1;
(statearr_11804_11831[(2)] = null);

(statearr_11804_11831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11802 === (4))){
var inst_11780 = (state_11801[(7)]);
var inst_11780__$1 = (state_11801[(2)]);
var inst_11781 = (inst_11780__$1 == null);
var state_11801__$1 = (function (){var statearr_11805 = state_11801;
(statearr_11805[(7)] = inst_11780__$1);

return statearr_11805;
})();
if(cljs.core.truth_(inst_11781)){
var statearr_11806_11832 = state_11801__$1;
(statearr_11806_11832[(1)] = (5));

} else {
var statearr_11807_11833 = state_11801__$1;
(statearr_11807_11833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11802 === (13))){
var state_11801__$1 = state_11801;
var statearr_11808_11834 = state_11801__$1;
(statearr_11808_11834[(2)] = null);

(statearr_11808_11834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11802 === (6))){
var inst_11780 = (state_11801[(7)]);
var state_11801__$1 = state_11801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11801__$1,(11),to,inst_11780);
} else {
if((state_val_11802 === (3))){
var inst_11799 = (state_11801[(2)]);
var state_11801__$1 = state_11801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11801__$1,inst_11799);
} else {
if((state_val_11802 === (12))){
var state_11801__$1 = state_11801;
var statearr_11809_11835 = state_11801__$1;
(statearr_11809_11835[(2)] = null);

(statearr_11809_11835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11802 === (2))){
var state_11801__$1 = state_11801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11801__$1,(4),from);
} else {
if((state_val_11802 === (11))){
var inst_11790 = (state_11801[(2)]);
var state_11801__$1 = state_11801;
if(cljs.core.truth_(inst_11790)){
var statearr_11810_11836 = state_11801__$1;
(statearr_11810_11836[(1)] = (12));

} else {
var statearr_11811_11837 = state_11801__$1;
(statearr_11811_11837[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11802 === (9))){
var state_11801__$1 = state_11801;
var statearr_11812_11838 = state_11801__$1;
(statearr_11812_11838[(2)] = null);

(statearr_11812_11838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11802 === (5))){
var state_11801__$1 = state_11801;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11813_11839 = state_11801__$1;
(statearr_11813_11839[(1)] = (8));

} else {
var statearr_11814_11840 = state_11801__$1;
(statearr_11814_11840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11802 === (14))){
var inst_11795 = (state_11801[(2)]);
var state_11801__$1 = state_11801;
var statearr_11815_11841 = state_11801__$1;
(statearr_11815_11841[(2)] = inst_11795);

(statearr_11815_11841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11802 === (10))){
var inst_11787 = (state_11801[(2)]);
var state_11801__$1 = state_11801;
var statearr_11816_11842 = state_11801__$1;
(statearr_11816_11842[(2)] = inst_11787);

(statearr_11816_11842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11802 === (8))){
var inst_11784 = cljs.core.async.close_BANG_.call(null,to);
var state_11801__$1 = state_11801;
var statearr_11817_11843 = state_11801__$1;
(statearr_11817_11843[(2)] = inst_11784);

(statearr_11817_11843[(1)] = (10));


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
});})(c__11673__auto___11829))
;
return ((function (switch__11561__auto__,c__11673__auto___11829){
return (function() {
var cljs$core$async$state_machine__11562__auto__ = null;
var cljs$core$async$state_machine__11562__auto____0 = (function (){
var statearr_11821 = [null,null,null,null,null,null,null,null];
(statearr_11821[(0)] = cljs$core$async$state_machine__11562__auto__);

(statearr_11821[(1)] = (1));

return statearr_11821;
});
var cljs$core$async$state_machine__11562__auto____1 = (function (state_11801){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_11801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e11822){if((e11822 instanceof Object)){
var ex__11565__auto__ = e11822;
var statearr_11823_11844 = state_11801;
(statearr_11823_11844[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11845 = state_11801;
state_11801 = G__11845;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$state_machine__11562__auto__ = function(state_11801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11562__auto____1.call(this,state_11801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11562__auto____0;
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11562__auto____1;
return cljs$core$async$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___11829))
})();
var state__11675__auto__ = (function (){var statearr_11824 = f__11674__auto__.call(null);
(statearr_11824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___11829);

return statearr_11824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___11829))
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
return (function (p__12029){
var vec__12030 = p__12029;
var v = cljs.core.nth.call(null,vec__12030,(0),null);
var p = cljs.core.nth.call(null,vec__12030,(1),null);
var job = vec__12030;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11673__auto___12212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___12212,res,vec__12030,v,p,job,jobs,results){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___12212,res,vec__12030,v,p,job,jobs,results){
return (function (state_12035){
var state_val_12036 = (state_12035[(1)]);
if((state_val_12036 === (1))){
var state_12035__$1 = state_12035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12035__$1,(2),res,v);
} else {
if((state_val_12036 === (2))){
var inst_12032 = (state_12035[(2)]);
var inst_12033 = cljs.core.async.close_BANG_.call(null,res);
var state_12035__$1 = (function (){var statearr_12037 = state_12035;
(statearr_12037[(7)] = inst_12032);

return statearr_12037;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12035__$1,inst_12033);
} else {
return null;
}
}
});})(c__11673__auto___12212,res,vec__12030,v,p,job,jobs,results))
;
return ((function (switch__11561__auto__,c__11673__auto___12212,res,vec__12030,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0 = (function (){
var statearr_12041 = [null,null,null,null,null,null,null,null];
(statearr_12041[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__);

(statearr_12041[(1)] = (1));

return statearr_12041;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1 = (function (state_12035){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_12035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e12042){if((e12042 instanceof Object)){
var ex__11565__auto__ = e12042;
var statearr_12043_12213 = state_12035;
(statearr_12043_12213[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12214 = state_12035;
state_12035 = G__12214;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__ = function(state_12035){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1.call(this,state_12035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___12212,res,vec__12030,v,p,job,jobs,results))
})();
var state__11675__auto__ = (function (){var statearr_12044 = f__11674__auto__.call(null);
(statearr_12044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___12212);

return statearr_12044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___12212,res,vec__12030,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12045){
var vec__12046 = p__12045;
var v = cljs.core.nth.call(null,vec__12046,(0),null);
var p = cljs.core.nth.call(null,vec__12046,(1),null);
var job = vec__12046;
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
var n__6071__auto___12215 = n;
var __12216 = (0);
while(true){
if((__12216 < n__6071__auto___12215)){
var G__12047_12217 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12047_12217) {
case "compute":
var c__11673__auto___12219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12216,c__11673__auto___12219,G__12047_12217,n__6071__auto___12215,jobs,results,process,async){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (__12216,c__11673__auto___12219,G__12047_12217,n__6071__auto___12215,jobs,results,process,async){
return (function (state_12060){
var state_val_12061 = (state_12060[(1)]);
if((state_val_12061 === (1))){
var state_12060__$1 = state_12060;
var statearr_12062_12220 = state_12060__$1;
(statearr_12062_12220[(2)] = null);

(statearr_12062_12220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12061 === (2))){
var state_12060__$1 = state_12060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12060__$1,(4),jobs);
} else {
if((state_val_12061 === (3))){
var inst_12058 = (state_12060[(2)]);
var state_12060__$1 = state_12060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12060__$1,inst_12058);
} else {
if((state_val_12061 === (4))){
var inst_12050 = (state_12060[(2)]);
var inst_12051 = process.call(null,inst_12050);
var state_12060__$1 = state_12060;
if(cljs.core.truth_(inst_12051)){
var statearr_12063_12221 = state_12060__$1;
(statearr_12063_12221[(1)] = (5));

} else {
var statearr_12064_12222 = state_12060__$1;
(statearr_12064_12222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12061 === (5))){
var state_12060__$1 = state_12060;
var statearr_12065_12223 = state_12060__$1;
(statearr_12065_12223[(2)] = null);

(statearr_12065_12223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12061 === (6))){
var state_12060__$1 = state_12060;
var statearr_12066_12224 = state_12060__$1;
(statearr_12066_12224[(2)] = null);

(statearr_12066_12224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12061 === (7))){
var inst_12056 = (state_12060[(2)]);
var state_12060__$1 = state_12060;
var statearr_12067_12225 = state_12060__$1;
(statearr_12067_12225[(2)] = inst_12056);

(statearr_12067_12225[(1)] = (3));


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
});})(__12216,c__11673__auto___12219,G__12047_12217,n__6071__auto___12215,jobs,results,process,async))
;
return ((function (__12216,switch__11561__auto__,c__11673__auto___12219,G__12047_12217,n__6071__auto___12215,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0 = (function (){
var statearr_12071 = [null,null,null,null,null,null,null];
(statearr_12071[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__);

(statearr_12071[(1)] = (1));

return statearr_12071;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1 = (function (state_12060){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_12060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e12072){if((e12072 instanceof Object)){
var ex__11565__auto__ = e12072;
var statearr_12073_12226 = state_12060;
(statearr_12073_12226[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12227 = state_12060;
state_12060 = G__12227;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__ = function(state_12060){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1.call(this,state_12060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__;
})()
;})(__12216,switch__11561__auto__,c__11673__auto___12219,G__12047_12217,n__6071__auto___12215,jobs,results,process,async))
})();
var state__11675__auto__ = (function (){var statearr_12074 = f__11674__auto__.call(null);
(statearr_12074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___12219);

return statearr_12074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(__12216,c__11673__auto___12219,G__12047_12217,n__6071__auto___12215,jobs,results,process,async))
);


break;
case "async":
var c__11673__auto___12228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12216,c__11673__auto___12228,G__12047_12217,n__6071__auto___12215,jobs,results,process,async){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (__12216,c__11673__auto___12228,G__12047_12217,n__6071__auto___12215,jobs,results,process,async){
return (function (state_12087){
var state_val_12088 = (state_12087[(1)]);
if((state_val_12088 === (1))){
var state_12087__$1 = state_12087;
var statearr_12089_12229 = state_12087__$1;
(statearr_12089_12229[(2)] = null);

(statearr_12089_12229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12088 === (2))){
var state_12087__$1 = state_12087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12087__$1,(4),jobs);
} else {
if((state_val_12088 === (3))){
var inst_12085 = (state_12087[(2)]);
var state_12087__$1 = state_12087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12087__$1,inst_12085);
} else {
if((state_val_12088 === (4))){
var inst_12077 = (state_12087[(2)]);
var inst_12078 = async.call(null,inst_12077);
var state_12087__$1 = state_12087;
if(cljs.core.truth_(inst_12078)){
var statearr_12090_12230 = state_12087__$1;
(statearr_12090_12230[(1)] = (5));

} else {
var statearr_12091_12231 = state_12087__$1;
(statearr_12091_12231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12088 === (5))){
var state_12087__$1 = state_12087;
var statearr_12092_12232 = state_12087__$1;
(statearr_12092_12232[(2)] = null);

(statearr_12092_12232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12088 === (6))){
var state_12087__$1 = state_12087;
var statearr_12093_12233 = state_12087__$1;
(statearr_12093_12233[(2)] = null);

(statearr_12093_12233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12088 === (7))){
var inst_12083 = (state_12087[(2)]);
var state_12087__$1 = state_12087;
var statearr_12094_12234 = state_12087__$1;
(statearr_12094_12234[(2)] = inst_12083);

(statearr_12094_12234[(1)] = (3));


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
});})(__12216,c__11673__auto___12228,G__12047_12217,n__6071__auto___12215,jobs,results,process,async))
;
return ((function (__12216,switch__11561__auto__,c__11673__auto___12228,G__12047_12217,n__6071__auto___12215,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0 = (function (){
var statearr_12098 = [null,null,null,null,null,null,null];
(statearr_12098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__);

(statearr_12098[(1)] = (1));

return statearr_12098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1 = (function (state_12087){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_12087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e12099){if((e12099 instanceof Object)){
var ex__11565__auto__ = e12099;
var statearr_12100_12235 = state_12087;
(statearr_12100_12235[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12236 = state_12087;
state_12087 = G__12236;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__ = function(state_12087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1.call(this,state_12087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__;
})()
;})(__12216,switch__11561__auto__,c__11673__auto___12228,G__12047_12217,n__6071__auto___12215,jobs,results,process,async))
})();
var state__11675__auto__ = (function (){var statearr_12101 = f__11674__auto__.call(null);
(statearr_12101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___12228);

return statearr_12101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(__12216,c__11673__auto___12228,G__12047_12217,n__6071__auto___12215,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12237 = (__12216 + (1));
__12216 = G__12237;
continue;
} else {
}
break;
}

var c__11673__auto___12238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___12238,jobs,results,process,async){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___12238,jobs,results,process,async){
return (function (state_12123){
var state_val_12124 = (state_12123[(1)]);
if((state_val_12124 === (1))){
var state_12123__$1 = state_12123;
var statearr_12125_12239 = state_12123__$1;
(statearr_12125_12239[(2)] = null);

(statearr_12125_12239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12124 === (2))){
var state_12123__$1 = state_12123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12123__$1,(4),from);
} else {
if((state_val_12124 === (3))){
var inst_12121 = (state_12123[(2)]);
var state_12123__$1 = state_12123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12123__$1,inst_12121);
} else {
if((state_val_12124 === (4))){
var inst_12104 = (state_12123[(7)]);
var inst_12104__$1 = (state_12123[(2)]);
var inst_12105 = (inst_12104__$1 == null);
var state_12123__$1 = (function (){var statearr_12126 = state_12123;
(statearr_12126[(7)] = inst_12104__$1);

return statearr_12126;
})();
if(cljs.core.truth_(inst_12105)){
var statearr_12127_12240 = state_12123__$1;
(statearr_12127_12240[(1)] = (5));

} else {
var statearr_12128_12241 = state_12123__$1;
(statearr_12128_12241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12124 === (5))){
var inst_12107 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12123__$1 = state_12123;
var statearr_12129_12242 = state_12123__$1;
(statearr_12129_12242[(2)] = inst_12107);

(statearr_12129_12242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12124 === (6))){
var inst_12109 = (state_12123[(8)]);
var inst_12104 = (state_12123[(7)]);
var inst_12109__$1 = cljs.core.async.chan.call(null,(1));
var inst_12110 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12111 = [inst_12104,inst_12109__$1];
var inst_12112 = (new cljs.core.PersistentVector(null,2,(5),inst_12110,inst_12111,null));
var state_12123__$1 = (function (){var statearr_12130 = state_12123;
(statearr_12130[(8)] = inst_12109__$1);

return statearr_12130;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12123__$1,(8),jobs,inst_12112);
} else {
if((state_val_12124 === (7))){
var inst_12119 = (state_12123[(2)]);
var state_12123__$1 = state_12123;
var statearr_12131_12243 = state_12123__$1;
(statearr_12131_12243[(2)] = inst_12119);

(statearr_12131_12243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12124 === (8))){
var inst_12109 = (state_12123[(8)]);
var inst_12114 = (state_12123[(2)]);
var state_12123__$1 = (function (){var statearr_12132 = state_12123;
(statearr_12132[(9)] = inst_12114);

return statearr_12132;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12123__$1,(9),results,inst_12109);
} else {
if((state_val_12124 === (9))){
var inst_12116 = (state_12123[(2)]);
var state_12123__$1 = (function (){var statearr_12133 = state_12123;
(statearr_12133[(10)] = inst_12116);

return statearr_12133;
})();
var statearr_12134_12244 = state_12123__$1;
(statearr_12134_12244[(2)] = null);

(statearr_12134_12244[(1)] = (2));


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
});})(c__11673__auto___12238,jobs,results,process,async))
;
return ((function (switch__11561__auto__,c__11673__auto___12238,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0 = (function (){
var statearr_12138 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__);

(statearr_12138[(1)] = (1));

return statearr_12138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1 = (function (state_12123){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_12123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e12139){if((e12139 instanceof Object)){
var ex__11565__auto__ = e12139;
var statearr_12140_12245 = state_12123;
(statearr_12140_12245[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12246 = state_12123;
state_12123 = G__12246;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__ = function(state_12123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1.call(this,state_12123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___12238,jobs,results,process,async))
})();
var state__11675__auto__ = (function (){var statearr_12141 = f__11674__auto__.call(null);
(statearr_12141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___12238);

return statearr_12141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___12238,jobs,results,process,async))
);


var c__11673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto__,jobs,results,process,async){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto__,jobs,results,process,async){
return (function (state_12179){
var state_val_12180 = (state_12179[(1)]);
if((state_val_12180 === (7))){
var inst_12175 = (state_12179[(2)]);
var state_12179__$1 = state_12179;
var statearr_12181_12247 = state_12179__$1;
(statearr_12181_12247[(2)] = inst_12175);

(statearr_12181_12247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (20))){
var state_12179__$1 = state_12179;
var statearr_12182_12248 = state_12179__$1;
(statearr_12182_12248[(2)] = null);

(statearr_12182_12248[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (1))){
var state_12179__$1 = state_12179;
var statearr_12183_12249 = state_12179__$1;
(statearr_12183_12249[(2)] = null);

(statearr_12183_12249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (4))){
var inst_12144 = (state_12179[(7)]);
var inst_12144__$1 = (state_12179[(2)]);
var inst_12145 = (inst_12144__$1 == null);
var state_12179__$1 = (function (){var statearr_12184 = state_12179;
(statearr_12184[(7)] = inst_12144__$1);

return statearr_12184;
})();
if(cljs.core.truth_(inst_12145)){
var statearr_12185_12250 = state_12179__$1;
(statearr_12185_12250[(1)] = (5));

} else {
var statearr_12186_12251 = state_12179__$1;
(statearr_12186_12251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (15))){
var inst_12157 = (state_12179[(8)]);
var state_12179__$1 = state_12179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12179__$1,(18),to,inst_12157);
} else {
if((state_val_12180 === (21))){
var inst_12170 = (state_12179[(2)]);
var state_12179__$1 = state_12179;
var statearr_12187_12252 = state_12179__$1;
(statearr_12187_12252[(2)] = inst_12170);

(statearr_12187_12252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (13))){
var inst_12172 = (state_12179[(2)]);
var state_12179__$1 = (function (){var statearr_12188 = state_12179;
(statearr_12188[(9)] = inst_12172);

return statearr_12188;
})();
var statearr_12189_12253 = state_12179__$1;
(statearr_12189_12253[(2)] = null);

(statearr_12189_12253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (6))){
var inst_12144 = (state_12179[(7)]);
var state_12179__$1 = state_12179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12179__$1,(11),inst_12144);
} else {
if((state_val_12180 === (17))){
var inst_12165 = (state_12179[(2)]);
var state_12179__$1 = state_12179;
if(cljs.core.truth_(inst_12165)){
var statearr_12190_12254 = state_12179__$1;
(statearr_12190_12254[(1)] = (19));

} else {
var statearr_12191_12255 = state_12179__$1;
(statearr_12191_12255[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (3))){
var inst_12177 = (state_12179[(2)]);
var state_12179__$1 = state_12179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12179__$1,inst_12177);
} else {
if((state_val_12180 === (12))){
var inst_12154 = (state_12179[(10)]);
var state_12179__$1 = state_12179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12179__$1,(14),inst_12154);
} else {
if((state_val_12180 === (2))){
var state_12179__$1 = state_12179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12179__$1,(4),results);
} else {
if((state_val_12180 === (19))){
var state_12179__$1 = state_12179;
var statearr_12192_12256 = state_12179__$1;
(statearr_12192_12256[(2)] = null);

(statearr_12192_12256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (11))){
var inst_12154 = (state_12179[(2)]);
var state_12179__$1 = (function (){var statearr_12193 = state_12179;
(statearr_12193[(10)] = inst_12154);

return statearr_12193;
})();
var statearr_12194_12257 = state_12179__$1;
(statearr_12194_12257[(2)] = null);

(statearr_12194_12257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (9))){
var state_12179__$1 = state_12179;
var statearr_12195_12258 = state_12179__$1;
(statearr_12195_12258[(2)] = null);

(statearr_12195_12258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (5))){
var state_12179__$1 = state_12179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12196_12259 = state_12179__$1;
(statearr_12196_12259[(1)] = (8));

} else {
var statearr_12197_12260 = state_12179__$1;
(statearr_12197_12260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (14))){
var inst_12157 = (state_12179[(8)]);
var inst_12159 = (state_12179[(11)]);
var inst_12157__$1 = (state_12179[(2)]);
var inst_12158 = (inst_12157__$1 == null);
var inst_12159__$1 = cljs.core.not.call(null,inst_12158);
var state_12179__$1 = (function (){var statearr_12198 = state_12179;
(statearr_12198[(8)] = inst_12157__$1);

(statearr_12198[(11)] = inst_12159__$1);

return statearr_12198;
})();
if(inst_12159__$1){
var statearr_12199_12261 = state_12179__$1;
(statearr_12199_12261[(1)] = (15));

} else {
var statearr_12200_12262 = state_12179__$1;
(statearr_12200_12262[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (16))){
var inst_12159 = (state_12179[(11)]);
var state_12179__$1 = state_12179;
var statearr_12201_12263 = state_12179__$1;
(statearr_12201_12263[(2)] = inst_12159);

(statearr_12201_12263[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (10))){
var inst_12151 = (state_12179[(2)]);
var state_12179__$1 = state_12179;
var statearr_12202_12264 = state_12179__$1;
(statearr_12202_12264[(2)] = inst_12151);

(statearr_12202_12264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (18))){
var inst_12162 = (state_12179[(2)]);
var state_12179__$1 = state_12179;
var statearr_12203_12265 = state_12179__$1;
(statearr_12203_12265[(2)] = inst_12162);

(statearr_12203_12265[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12180 === (8))){
var inst_12148 = cljs.core.async.close_BANG_.call(null,to);
var state_12179__$1 = state_12179;
var statearr_12204_12266 = state_12179__$1;
(statearr_12204_12266[(2)] = inst_12148);

(statearr_12204_12266[(1)] = (10));


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
});})(c__11673__auto__,jobs,results,process,async))
;
return ((function (switch__11561__auto__,c__11673__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0 = (function (){
var statearr_12208 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12208[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__);

(statearr_12208[(1)] = (1));

return statearr_12208;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1 = (function (state_12179){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_12179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e12209){if((e12209 instanceof Object)){
var ex__11565__auto__ = e12209;
var statearr_12210_12267 = state_12179;
(statearr_12210_12267[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12268 = state_12179;
state_12179 = G__12268;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__ = function(state_12179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1.call(this,state_12179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11562__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto__,jobs,results,process,async))
})();
var state__11675__auto__ = (function (){var statearr_12211 = f__11674__auto__.call(null);
(statearr_12211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto__);

return statearr_12211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto__,jobs,results,process,async))
);

return c__11673__auto__;
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
var args12269 = [];
var len__6226__auto___12272 = arguments.length;
var i__6227__auto___12273 = (0);
while(true){
if((i__6227__auto___12273 < len__6226__auto___12272)){
args12269.push((arguments[i__6227__auto___12273]));

var G__12274 = (i__6227__auto___12273 + (1));
i__6227__auto___12273 = G__12274;
continue;
} else {
}
break;
}

var G__12271 = args12269.length;
switch (G__12271) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12269.length)].join('')));

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
var args12276 = [];
var len__6226__auto___12279 = arguments.length;
var i__6227__auto___12280 = (0);
while(true){
if((i__6227__auto___12280 < len__6226__auto___12279)){
args12276.push((arguments[i__6227__auto___12280]));

var G__12281 = (i__6227__auto___12280 + (1));
i__6227__auto___12280 = G__12281;
continue;
} else {
}
break;
}

var G__12278 = args12276.length;
switch (G__12278) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12276.length)].join('')));

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
var args12283 = [];
var len__6226__auto___12336 = arguments.length;
var i__6227__auto___12337 = (0);
while(true){
if((i__6227__auto___12337 < len__6226__auto___12336)){
args12283.push((arguments[i__6227__auto___12337]));

var G__12338 = (i__6227__auto___12337 + (1));
i__6227__auto___12337 = G__12338;
continue;
} else {
}
break;
}

var G__12285 = args12283.length;
switch (G__12285) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12283.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11673__auto___12340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___12340,tc,fc){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___12340,tc,fc){
return (function (state_12311){
var state_val_12312 = (state_12311[(1)]);
if((state_val_12312 === (7))){
var inst_12307 = (state_12311[(2)]);
var state_12311__$1 = state_12311;
var statearr_12313_12341 = state_12311__$1;
(statearr_12313_12341[(2)] = inst_12307);

(statearr_12313_12341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12312 === (1))){
var state_12311__$1 = state_12311;
var statearr_12314_12342 = state_12311__$1;
(statearr_12314_12342[(2)] = null);

(statearr_12314_12342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12312 === (4))){
var inst_12288 = (state_12311[(7)]);
var inst_12288__$1 = (state_12311[(2)]);
var inst_12289 = (inst_12288__$1 == null);
var state_12311__$1 = (function (){var statearr_12315 = state_12311;
(statearr_12315[(7)] = inst_12288__$1);

return statearr_12315;
})();
if(cljs.core.truth_(inst_12289)){
var statearr_12316_12343 = state_12311__$1;
(statearr_12316_12343[(1)] = (5));

} else {
var statearr_12317_12344 = state_12311__$1;
(statearr_12317_12344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12312 === (13))){
var state_12311__$1 = state_12311;
var statearr_12318_12345 = state_12311__$1;
(statearr_12318_12345[(2)] = null);

(statearr_12318_12345[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12312 === (6))){
var inst_12288 = (state_12311[(7)]);
var inst_12294 = p.call(null,inst_12288);
var state_12311__$1 = state_12311;
if(cljs.core.truth_(inst_12294)){
var statearr_12319_12346 = state_12311__$1;
(statearr_12319_12346[(1)] = (9));

} else {
var statearr_12320_12347 = state_12311__$1;
(statearr_12320_12347[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12312 === (3))){
var inst_12309 = (state_12311[(2)]);
var state_12311__$1 = state_12311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12311__$1,inst_12309);
} else {
if((state_val_12312 === (12))){
var state_12311__$1 = state_12311;
var statearr_12321_12348 = state_12311__$1;
(statearr_12321_12348[(2)] = null);

(statearr_12321_12348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12312 === (2))){
var state_12311__$1 = state_12311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12311__$1,(4),ch);
} else {
if((state_val_12312 === (11))){
var inst_12288 = (state_12311[(7)]);
var inst_12298 = (state_12311[(2)]);
var state_12311__$1 = state_12311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12311__$1,(8),inst_12298,inst_12288);
} else {
if((state_val_12312 === (9))){
var state_12311__$1 = state_12311;
var statearr_12322_12349 = state_12311__$1;
(statearr_12322_12349[(2)] = tc);

(statearr_12322_12349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12312 === (5))){
var inst_12291 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12292 = cljs.core.async.close_BANG_.call(null,fc);
var state_12311__$1 = (function (){var statearr_12323 = state_12311;
(statearr_12323[(8)] = inst_12291);

return statearr_12323;
})();
var statearr_12324_12350 = state_12311__$1;
(statearr_12324_12350[(2)] = inst_12292);

(statearr_12324_12350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12312 === (14))){
var inst_12305 = (state_12311[(2)]);
var state_12311__$1 = state_12311;
var statearr_12325_12351 = state_12311__$1;
(statearr_12325_12351[(2)] = inst_12305);

(statearr_12325_12351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12312 === (10))){
var state_12311__$1 = state_12311;
var statearr_12326_12352 = state_12311__$1;
(statearr_12326_12352[(2)] = fc);

(statearr_12326_12352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12312 === (8))){
var inst_12300 = (state_12311[(2)]);
var state_12311__$1 = state_12311;
if(cljs.core.truth_(inst_12300)){
var statearr_12327_12353 = state_12311__$1;
(statearr_12327_12353[(1)] = (12));

} else {
var statearr_12328_12354 = state_12311__$1;
(statearr_12328_12354[(1)] = (13));

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
});})(c__11673__auto___12340,tc,fc))
;
return ((function (switch__11561__auto__,c__11673__auto___12340,tc,fc){
return (function() {
var cljs$core$async$state_machine__11562__auto__ = null;
var cljs$core$async$state_machine__11562__auto____0 = (function (){
var statearr_12332 = [null,null,null,null,null,null,null,null,null];
(statearr_12332[(0)] = cljs$core$async$state_machine__11562__auto__);

(statearr_12332[(1)] = (1));

return statearr_12332;
});
var cljs$core$async$state_machine__11562__auto____1 = (function (state_12311){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_12311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e12333){if((e12333 instanceof Object)){
var ex__11565__auto__ = e12333;
var statearr_12334_12355 = state_12311;
(statearr_12334_12355[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12356 = state_12311;
state_12311 = G__12356;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$state_machine__11562__auto__ = function(state_12311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11562__auto____1.call(this,state_12311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11562__auto____0;
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11562__auto____1;
return cljs$core$async$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___12340,tc,fc))
})();
var state__11675__auto__ = (function (){var statearr_12335 = f__11674__auto__.call(null);
(statearr_12335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___12340);

return statearr_12335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___12340,tc,fc))
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
var c__11673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto__){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto__){
return (function (state_12403){
var state_val_12404 = (state_12403[(1)]);
if((state_val_12404 === (1))){
var inst_12389 = init;
var state_12403__$1 = (function (){var statearr_12405 = state_12403;
(statearr_12405[(7)] = inst_12389);

return statearr_12405;
})();
var statearr_12406_12421 = state_12403__$1;
(statearr_12406_12421[(2)] = null);

(statearr_12406_12421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12404 === (2))){
var state_12403__$1 = state_12403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12403__$1,(4),ch);
} else {
if((state_val_12404 === (3))){
var inst_12401 = (state_12403[(2)]);
var state_12403__$1 = state_12403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12403__$1,inst_12401);
} else {
if((state_val_12404 === (4))){
var inst_12392 = (state_12403[(8)]);
var inst_12392__$1 = (state_12403[(2)]);
var inst_12393 = (inst_12392__$1 == null);
var state_12403__$1 = (function (){var statearr_12407 = state_12403;
(statearr_12407[(8)] = inst_12392__$1);

return statearr_12407;
})();
if(cljs.core.truth_(inst_12393)){
var statearr_12408_12422 = state_12403__$1;
(statearr_12408_12422[(1)] = (5));

} else {
var statearr_12409_12423 = state_12403__$1;
(statearr_12409_12423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12404 === (5))){
var inst_12389 = (state_12403[(7)]);
var state_12403__$1 = state_12403;
var statearr_12410_12424 = state_12403__$1;
(statearr_12410_12424[(2)] = inst_12389);

(statearr_12410_12424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12404 === (6))){
var inst_12389 = (state_12403[(7)]);
var inst_12392 = (state_12403[(8)]);
var inst_12396 = f.call(null,inst_12389,inst_12392);
var inst_12389__$1 = inst_12396;
var state_12403__$1 = (function (){var statearr_12411 = state_12403;
(statearr_12411[(7)] = inst_12389__$1);

return statearr_12411;
})();
var statearr_12412_12425 = state_12403__$1;
(statearr_12412_12425[(2)] = null);

(statearr_12412_12425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12404 === (7))){
var inst_12399 = (state_12403[(2)]);
var state_12403__$1 = state_12403;
var statearr_12413_12426 = state_12403__$1;
(statearr_12413_12426[(2)] = inst_12399);

(statearr_12413_12426[(1)] = (3));


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
});})(c__11673__auto__))
;
return ((function (switch__11561__auto__,c__11673__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11562__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11562__auto____0 = (function (){
var statearr_12417 = [null,null,null,null,null,null,null,null,null];
(statearr_12417[(0)] = cljs$core$async$reduce_$_state_machine__11562__auto__);

(statearr_12417[(1)] = (1));

return statearr_12417;
});
var cljs$core$async$reduce_$_state_machine__11562__auto____1 = (function (state_12403){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_12403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e12418){if((e12418 instanceof Object)){
var ex__11565__auto__ = e12418;
var statearr_12419_12427 = state_12403;
(statearr_12419_12427[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12428 = state_12403;
state_12403 = G__12428;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11562__auto__ = function(state_12403){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11562__auto____1.call(this,state_12403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11562__auto____0;
cljs$core$async$reduce_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11562__auto____1;
return cljs$core$async$reduce_$_state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto__))
})();
var state__11675__auto__ = (function (){var statearr_12420 = f__11674__auto__.call(null);
(statearr_12420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto__);

return statearr_12420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto__))
);

return c__11673__auto__;
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
var args12429 = [];
var len__6226__auto___12481 = arguments.length;
var i__6227__auto___12482 = (0);
while(true){
if((i__6227__auto___12482 < len__6226__auto___12481)){
args12429.push((arguments[i__6227__auto___12482]));

var G__12483 = (i__6227__auto___12482 + (1));
i__6227__auto___12482 = G__12483;
continue;
} else {
}
break;
}

var G__12431 = args12429.length;
switch (G__12431) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12429.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto__){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto__){
return (function (state_12456){
var state_val_12457 = (state_12456[(1)]);
if((state_val_12457 === (7))){
var inst_12438 = (state_12456[(2)]);
var state_12456__$1 = state_12456;
var statearr_12458_12485 = state_12456__$1;
(statearr_12458_12485[(2)] = inst_12438);

(statearr_12458_12485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (1))){
var inst_12432 = cljs.core.seq.call(null,coll);
var inst_12433 = inst_12432;
var state_12456__$1 = (function (){var statearr_12459 = state_12456;
(statearr_12459[(7)] = inst_12433);

return statearr_12459;
})();
var statearr_12460_12486 = state_12456__$1;
(statearr_12460_12486[(2)] = null);

(statearr_12460_12486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (4))){
var inst_12433 = (state_12456[(7)]);
var inst_12436 = cljs.core.first.call(null,inst_12433);
var state_12456__$1 = state_12456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12456__$1,(7),ch,inst_12436);
} else {
if((state_val_12457 === (13))){
var inst_12450 = (state_12456[(2)]);
var state_12456__$1 = state_12456;
var statearr_12461_12487 = state_12456__$1;
(statearr_12461_12487[(2)] = inst_12450);

(statearr_12461_12487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (6))){
var inst_12441 = (state_12456[(2)]);
var state_12456__$1 = state_12456;
if(cljs.core.truth_(inst_12441)){
var statearr_12462_12488 = state_12456__$1;
(statearr_12462_12488[(1)] = (8));

} else {
var statearr_12463_12489 = state_12456__$1;
(statearr_12463_12489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (3))){
var inst_12454 = (state_12456[(2)]);
var state_12456__$1 = state_12456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12456__$1,inst_12454);
} else {
if((state_val_12457 === (12))){
var state_12456__$1 = state_12456;
var statearr_12464_12490 = state_12456__$1;
(statearr_12464_12490[(2)] = null);

(statearr_12464_12490[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (2))){
var inst_12433 = (state_12456[(7)]);
var state_12456__$1 = state_12456;
if(cljs.core.truth_(inst_12433)){
var statearr_12465_12491 = state_12456__$1;
(statearr_12465_12491[(1)] = (4));

} else {
var statearr_12466_12492 = state_12456__$1;
(statearr_12466_12492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (11))){
var inst_12447 = cljs.core.async.close_BANG_.call(null,ch);
var state_12456__$1 = state_12456;
var statearr_12467_12493 = state_12456__$1;
(statearr_12467_12493[(2)] = inst_12447);

(statearr_12467_12493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (9))){
var state_12456__$1 = state_12456;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12468_12494 = state_12456__$1;
(statearr_12468_12494[(1)] = (11));

} else {
var statearr_12469_12495 = state_12456__$1;
(statearr_12469_12495[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (5))){
var inst_12433 = (state_12456[(7)]);
var state_12456__$1 = state_12456;
var statearr_12470_12496 = state_12456__$1;
(statearr_12470_12496[(2)] = inst_12433);

(statearr_12470_12496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (10))){
var inst_12452 = (state_12456[(2)]);
var state_12456__$1 = state_12456;
var statearr_12471_12497 = state_12456__$1;
(statearr_12471_12497[(2)] = inst_12452);

(statearr_12471_12497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (8))){
var inst_12433 = (state_12456[(7)]);
var inst_12443 = cljs.core.next.call(null,inst_12433);
var inst_12433__$1 = inst_12443;
var state_12456__$1 = (function (){var statearr_12472 = state_12456;
(statearr_12472[(7)] = inst_12433__$1);

return statearr_12472;
})();
var statearr_12473_12498 = state_12456__$1;
(statearr_12473_12498[(2)] = null);

(statearr_12473_12498[(1)] = (2));


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
});})(c__11673__auto__))
;
return ((function (switch__11561__auto__,c__11673__auto__){
return (function() {
var cljs$core$async$state_machine__11562__auto__ = null;
var cljs$core$async$state_machine__11562__auto____0 = (function (){
var statearr_12477 = [null,null,null,null,null,null,null,null];
(statearr_12477[(0)] = cljs$core$async$state_machine__11562__auto__);

(statearr_12477[(1)] = (1));

return statearr_12477;
});
var cljs$core$async$state_machine__11562__auto____1 = (function (state_12456){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_12456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e12478){if((e12478 instanceof Object)){
var ex__11565__auto__ = e12478;
var statearr_12479_12499 = state_12456;
(statearr_12479_12499[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12500 = state_12456;
state_12456 = G__12500;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$state_machine__11562__auto__ = function(state_12456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11562__auto____1.call(this,state_12456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11562__auto____0;
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11562__auto____1;
return cljs$core$async$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto__))
})();
var state__11675__auto__ = (function (){var statearr_12480 = f__11674__auto__.call(null);
(statearr_12480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto__);

return statearr_12480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto__))
);

return c__11673__auto__;
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
var x__5823__auto__ = (((_ == null))?null:_);
var m__5824__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,_);
} else {
var m__5824__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,_);
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5824__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,ch);
} else {
var m__5824__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,ch);
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m);
} else {
var m__5824__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async12722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12722 = (function (mult,ch,cs,meta12723){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta12723 = meta12723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12724,meta12723__$1){
var self__ = this;
var _12724__$1 = this;
return (new cljs.core.async.t_cljs$core$async12722(self__.mult,self__.ch,self__.cs,meta12723__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12724){
var self__ = this;
var _12724__$1 = this;
return self__.meta12723;
});})(cs))
;

cljs.core.async.t_cljs$core$async12722.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12722.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12722.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async12722.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12722.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12722.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12722.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12723","meta12723",1052878187,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12722";

cljs.core.async.t_cljs$core$async12722.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async12722");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12722 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12722(mult__$1,ch__$1,cs__$1,meta12723){
return (new cljs.core.async.t_cljs$core$async12722(mult__$1,ch__$1,cs__$1,meta12723));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12722(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11673__auto___12943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___12943,cs,m,dchan,dctr,done){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___12943,cs,m,dchan,dctr,done){
return (function (state_12855){
var state_val_12856 = (state_12855[(1)]);
if((state_val_12856 === (7))){
var inst_12851 = (state_12855[(2)]);
var state_12855__$1 = state_12855;
var statearr_12857_12944 = state_12855__$1;
(statearr_12857_12944[(2)] = inst_12851);

(statearr_12857_12944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (20))){
var inst_12756 = (state_12855[(7)]);
var inst_12766 = cljs.core.first.call(null,inst_12756);
var inst_12767 = cljs.core.nth.call(null,inst_12766,(0),null);
var inst_12768 = cljs.core.nth.call(null,inst_12766,(1),null);
var state_12855__$1 = (function (){var statearr_12858 = state_12855;
(statearr_12858[(8)] = inst_12767);

return statearr_12858;
})();
if(cljs.core.truth_(inst_12768)){
var statearr_12859_12945 = state_12855__$1;
(statearr_12859_12945[(1)] = (22));

} else {
var statearr_12860_12946 = state_12855__$1;
(statearr_12860_12946[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (27))){
var inst_12796 = (state_12855[(9)]);
var inst_12803 = (state_12855[(10)]);
var inst_12727 = (state_12855[(11)]);
var inst_12798 = (state_12855[(12)]);
var inst_12803__$1 = cljs.core._nth.call(null,inst_12796,inst_12798);
var inst_12804 = cljs.core.async.put_BANG_.call(null,inst_12803__$1,inst_12727,done);
var state_12855__$1 = (function (){var statearr_12861 = state_12855;
(statearr_12861[(10)] = inst_12803__$1);

return statearr_12861;
})();
if(cljs.core.truth_(inst_12804)){
var statearr_12862_12947 = state_12855__$1;
(statearr_12862_12947[(1)] = (30));

} else {
var statearr_12863_12948 = state_12855__$1;
(statearr_12863_12948[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (1))){
var state_12855__$1 = state_12855;
var statearr_12864_12949 = state_12855__$1;
(statearr_12864_12949[(2)] = null);

(statearr_12864_12949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (24))){
var inst_12756 = (state_12855[(7)]);
var inst_12773 = (state_12855[(2)]);
var inst_12774 = cljs.core.next.call(null,inst_12756);
var inst_12736 = inst_12774;
var inst_12737 = null;
var inst_12738 = (0);
var inst_12739 = (0);
var state_12855__$1 = (function (){var statearr_12865 = state_12855;
(statearr_12865[(13)] = inst_12737);

(statearr_12865[(14)] = inst_12773);

(statearr_12865[(15)] = inst_12738);

(statearr_12865[(16)] = inst_12736);

(statearr_12865[(17)] = inst_12739);

return statearr_12865;
})();
var statearr_12866_12950 = state_12855__$1;
(statearr_12866_12950[(2)] = null);

(statearr_12866_12950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (39))){
var state_12855__$1 = state_12855;
var statearr_12870_12951 = state_12855__$1;
(statearr_12870_12951[(2)] = null);

(statearr_12870_12951[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (4))){
var inst_12727 = (state_12855[(11)]);
var inst_12727__$1 = (state_12855[(2)]);
var inst_12728 = (inst_12727__$1 == null);
var state_12855__$1 = (function (){var statearr_12871 = state_12855;
(statearr_12871[(11)] = inst_12727__$1);

return statearr_12871;
})();
if(cljs.core.truth_(inst_12728)){
var statearr_12872_12952 = state_12855__$1;
(statearr_12872_12952[(1)] = (5));

} else {
var statearr_12873_12953 = state_12855__$1;
(statearr_12873_12953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (15))){
var inst_12737 = (state_12855[(13)]);
var inst_12738 = (state_12855[(15)]);
var inst_12736 = (state_12855[(16)]);
var inst_12739 = (state_12855[(17)]);
var inst_12752 = (state_12855[(2)]);
var inst_12753 = (inst_12739 + (1));
var tmp12867 = inst_12737;
var tmp12868 = inst_12738;
var tmp12869 = inst_12736;
var inst_12736__$1 = tmp12869;
var inst_12737__$1 = tmp12867;
var inst_12738__$1 = tmp12868;
var inst_12739__$1 = inst_12753;
var state_12855__$1 = (function (){var statearr_12874 = state_12855;
(statearr_12874[(13)] = inst_12737__$1);

(statearr_12874[(18)] = inst_12752);

(statearr_12874[(15)] = inst_12738__$1);

(statearr_12874[(16)] = inst_12736__$1);

(statearr_12874[(17)] = inst_12739__$1);

return statearr_12874;
})();
var statearr_12875_12954 = state_12855__$1;
(statearr_12875_12954[(2)] = null);

(statearr_12875_12954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (21))){
var inst_12777 = (state_12855[(2)]);
var state_12855__$1 = state_12855;
var statearr_12879_12955 = state_12855__$1;
(statearr_12879_12955[(2)] = inst_12777);

(statearr_12879_12955[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (31))){
var inst_12803 = (state_12855[(10)]);
var inst_12807 = done.call(null,null);
var inst_12808 = cljs.core.async.untap_STAR_.call(null,m,inst_12803);
var state_12855__$1 = (function (){var statearr_12880 = state_12855;
(statearr_12880[(19)] = inst_12807);

return statearr_12880;
})();
var statearr_12881_12956 = state_12855__$1;
(statearr_12881_12956[(2)] = inst_12808);

(statearr_12881_12956[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (32))){
var inst_12795 = (state_12855[(20)]);
var inst_12796 = (state_12855[(9)]);
var inst_12797 = (state_12855[(21)]);
var inst_12798 = (state_12855[(12)]);
var inst_12810 = (state_12855[(2)]);
var inst_12811 = (inst_12798 + (1));
var tmp12876 = inst_12795;
var tmp12877 = inst_12796;
var tmp12878 = inst_12797;
var inst_12795__$1 = tmp12876;
var inst_12796__$1 = tmp12877;
var inst_12797__$1 = tmp12878;
var inst_12798__$1 = inst_12811;
var state_12855__$1 = (function (){var statearr_12882 = state_12855;
(statearr_12882[(20)] = inst_12795__$1);

(statearr_12882[(9)] = inst_12796__$1);

(statearr_12882[(21)] = inst_12797__$1);

(statearr_12882[(22)] = inst_12810);

(statearr_12882[(12)] = inst_12798__$1);

return statearr_12882;
})();
var statearr_12883_12957 = state_12855__$1;
(statearr_12883_12957[(2)] = null);

(statearr_12883_12957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (40))){
var inst_12823 = (state_12855[(23)]);
var inst_12827 = done.call(null,null);
var inst_12828 = cljs.core.async.untap_STAR_.call(null,m,inst_12823);
var state_12855__$1 = (function (){var statearr_12884 = state_12855;
(statearr_12884[(24)] = inst_12827);

return statearr_12884;
})();
var statearr_12885_12958 = state_12855__$1;
(statearr_12885_12958[(2)] = inst_12828);

(statearr_12885_12958[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (33))){
var inst_12814 = (state_12855[(25)]);
var inst_12816 = cljs.core.chunked_seq_QMARK_.call(null,inst_12814);
var state_12855__$1 = state_12855;
if(inst_12816){
var statearr_12886_12959 = state_12855__$1;
(statearr_12886_12959[(1)] = (36));

} else {
var statearr_12887_12960 = state_12855__$1;
(statearr_12887_12960[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (13))){
var inst_12746 = (state_12855[(26)]);
var inst_12749 = cljs.core.async.close_BANG_.call(null,inst_12746);
var state_12855__$1 = state_12855;
var statearr_12888_12961 = state_12855__$1;
(statearr_12888_12961[(2)] = inst_12749);

(statearr_12888_12961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (22))){
var inst_12767 = (state_12855[(8)]);
var inst_12770 = cljs.core.async.close_BANG_.call(null,inst_12767);
var state_12855__$1 = state_12855;
var statearr_12889_12962 = state_12855__$1;
(statearr_12889_12962[(2)] = inst_12770);

(statearr_12889_12962[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (36))){
var inst_12814 = (state_12855[(25)]);
var inst_12818 = cljs.core.chunk_first.call(null,inst_12814);
var inst_12819 = cljs.core.chunk_rest.call(null,inst_12814);
var inst_12820 = cljs.core.count.call(null,inst_12818);
var inst_12795 = inst_12819;
var inst_12796 = inst_12818;
var inst_12797 = inst_12820;
var inst_12798 = (0);
var state_12855__$1 = (function (){var statearr_12890 = state_12855;
(statearr_12890[(20)] = inst_12795);

(statearr_12890[(9)] = inst_12796);

(statearr_12890[(21)] = inst_12797);

(statearr_12890[(12)] = inst_12798);

return statearr_12890;
})();
var statearr_12891_12963 = state_12855__$1;
(statearr_12891_12963[(2)] = null);

(statearr_12891_12963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (41))){
var inst_12814 = (state_12855[(25)]);
var inst_12830 = (state_12855[(2)]);
var inst_12831 = cljs.core.next.call(null,inst_12814);
var inst_12795 = inst_12831;
var inst_12796 = null;
var inst_12797 = (0);
var inst_12798 = (0);
var state_12855__$1 = (function (){var statearr_12892 = state_12855;
(statearr_12892[(20)] = inst_12795);

(statearr_12892[(9)] = inst_12796);

(statearr_12892[(21)] = inst_12797);

(statearr_12892[(27)] = inst_12830);

(statearr_12892[(12)] = inst_12798);

return statearr_12892;
})();
var statearr_12893_12964 = state_12855__$1;
(statearr_12893_12964[(2)] = null);

(statearr_12893_12964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (43))){
var state_12855__$1 = state_12855;
var statearr_12894_12965 = state_12855__$1;
(statearr_12894_12965[(2)] = null);

(statearr_12894_12965[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (29))){
var inst_12839 = (state_12855[(2)]);
var state_12855__$1 = state_12855;
var statearr_12895_12966 = state_12855__$1;
(statearr_12895_12966[(2)] = inst_12839);

(statearr_12895_12966[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (44))){
var inst_12848 = (state_12855[(2)]);
var state_12855__$1 = (function (){var statearr_12896 = state_12855;
(statearr_12896[(28)] = inst_12848);

return statearr_12896;
})();
var statearr_12897_12967 = state_12855__$1;
(statearr_12897_12967[(2)] = null);

(statearr_12897_12967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (6))){
var inst_12787 = (state_12855[(29)]);
var inst_12786 = cljs.core.deref.call(null,cs);
var inst_12787__$1 = cljs.core.keys.call(null,inst_12786);
var inst_12788 = cljs.core.count.call(null,inst_12787__$1);
var inst_12789 = cljs.core.reset_BANG_.call(null,dctr,inst_12788);
var inst_12794 = cljs.core.seq.call(null,inst_12787__$1);
var inst_12795 = inst_12794;
var inst_12796 = null;
var inst_12797 = (0);
var inst_12798 = (0);
var state_12855__$1 = (function (){var statearr_12898 = state_12855;
(statearr_12898[(20)] = inst_12795);

(statearr_12898[(9)] = inst_12796);

(statearr_12898[(29)] = inst_12787__$1);

(statearr_12898[(21)] = inst_12797);

(statearr_12898[(30)] = inst_12789);

(statearr_12898[(12)] = inst_12798);

return statearr_12898;
})();
var statearr_12899_12968 = state_12855__$1;
(statearr_12899_12968[(2)] = null);

(statearr_12899_12968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (28))){
var inst_12795 = (state_12855[(20)]);
var inst_12814 = (state_12855[(25)]);
var inst_12814__$1 = cljs.core.seq.call(null,inst_12795);
var state_12855__$1 = (function (){var statearr_12900 = state_12855;
(statearr_12900[(25)] = inst_12814__$1);

return statearr_12900;
})();
if(inst_12814__$1){
var statearr_12901_12969 = state_12855__$1;
(statearr_12901_12969[(1)] = (33));

} else {
var statearr_12902_12970 = state_12855__$1;
(statearr_12902_12970[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (25))){
var inst_12797 = (state_12855[(21)]);
var inst_12798 = (state_12855[(12)]);
var inst_12800 = (inst_12798 < inst_12797);
var inst_12801 = inst_12800;
var state_12855__$1 = state_12855;
if(cljs.core.truth_(inst_12801)){
var statearr_12903_12971 = state_12855__$1;
(statearr_12903_12971[(1)] = (27));

} else {
var statearr_12904_12972 = state_12855__$1;
(statearr_12904_12972[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (34))){
var state_12855__$1 = state_12855;
var statearr_12905_12973 = state_12855__$1;
(statearr_12905_12973[(2)] = null);

(statearr_12905_12973[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (17))){
var state_12855__$1 = state_12855;
var statearr_12906_12974 = state_12855__$1;
(statearr_12906_12974[(2)] = null);

(statearr_12906_12974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (3))){
var inst_12853 = (state_12855[(2)]);
var state_12855__$1 = state_12855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12855__$1,inst_12853);
} else {
if((state_val_12856 === (12))){
var inst_12782 = (state_12855[(2)]);
var state_12855__$1 = state_12855;
var statearr_12907_12975 = state_12855__$1;
(statearr_12907_12975[(2)] = inst_12782);

(statearr_12907_12975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (2))){
var state_12855__$1 = state_12855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12855__$1,(4),ch);
} else {
if((state_val_12856 === (23))){
var state_12855__$1 = state_12855;
var statearr_12908_12976 = state_12855__$1;
(statearr_12908_12976[(2)] = null);

(statearr_12908_12976[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (35))){
var inst_12837 = (state_12855[(2)]);
var state_12855__$1 = state_12855;
var statearr_12909_12977 = state_12855__$1;
(statearr_12909_12977[(2)] = inst_12837);

(statearr_12909_12977[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (19))){
var inst_12756 = (state_12855[(7)]);
var inst_12760 = cljs.core.chunk_first.call(null,inst_12756);
var inst_12761 = cljs.core.chunk_rest.call(null,inst_12756);
var inst_12762 = cljs.core.count.call(null,inst_12760);
var inst_12736 = inst_12761;
var inst_12737 = inst_12760;
var inst_12738 = inst_12762;
var inst_12739 = (0);
var state_12855__$1 = (function (){var statearr_12910 = state_12855;
(statearr_12910[(13)] = inst_12737);

(statearr_12910[(15)] = inst_12738);

(statearr_12910[(16)] = inst_12736);

(statearr_12910[(17)] = inst_12739);

return statearr_12910;
})();
var statearr_12911_12978 = state_12855__$1;
(statearr_12911_12978[(2)] = null);

(statearr_12911_12978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (11))){
var inst_12736 = (state_12855[(16)]);
var inst_12756 = (state_12855[(7)]);
var inst_12756__$1 = cljs.core.seq.call(null,inst_12736);
var state_12855__$1 = (function (){var statearr_12912 = state_12855;
(statearr_12912[(7)] = inst_12756__$1);

return statearr_12912;
})();
if(inst_12756__$1){
var statearr_12913_12979 = state_12855__$1;
(statearr_12913_12979[(1)] = (16));

} else {
var statearr_12914_12980 = state_12855__$1;
(statearr_12914_12980[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (9))){
var inst_12784 = (state_12855[(2)]);
var state_12855__$1 = state_12855;
var statearr_12915_12981 = state_12855__$1;
(statearr_12915_12981[(2)] = inst_12784);

(statearr_12915_12981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (5))){
var inst_12734 = cljs.core.deref.call(null,cs);
var inst_12735 = cljs.core.seq.call(null,inst_12734);
var inst_12736 = inst_12735;
var inst_12737 = null;
var inst_12738 = (0);
var inst_12739 = (0);
var state_12855__$1 = (function (){var statearr_12916 = state_12855;
(statearr_12916[(13)] = inst_12737);

(statearr_12916[(15)] = inst_12738);

(statearr_12916[(16)] = inst_12736);

(statearr_12916[(17)] = inst_12739);

return statearr_12916;
})();
var statearr_12917_12982 = state_12855__$1;
(statearr_12917_12982[(2)] = null);

(statearr_12917_12982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (14))){
var state_12855__$1 = state_12855;
var statearr_12918_12983 = state_12855__$1;
(statearr_12918_12983[(2)] = null);

(statearr_12918_12983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (45))){
var inst_12845 = (state_12855[(2)]);
var state_12855__$1 = state_12855;
var statearr_12919_12984 = state_12855__$1;
(statearr_12919_12984[(2)] = inst_12845);

(statearr_12919_12984[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (26))){
var inst_12787 = (state_12855[(29)]);
var inst_12841 = (state_12855[(2)]);
var inst_12842 = cljs.core.seq.call(null,inst_12787);
var state_12855__$1 = (function (){var statearr_12920 = state_12855;
(statearr_12920[(31)] = inst_12841);

return statearr_12920;
})();
if(inst_12842){
var statearr_12921_12985 = state_12855__$1;
(statearr_12921_12985[(1)] = (42));

} else {
var statearr_12922_12986 = state_12855__$1;
(statearr_12922_12986[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (16))){
var inst_12756 = (state_12855[(7)]);
var inst_12758 = cljs.core.chunked_seq_QMARK_.call(null,inst_12756);
var state_12855__$1 = state_12855;
if(inst_12758){
var statearr_12923_12987 = state_12855__$1;
(statearr_12923_12987[(1)] = (19));

} else {
var statearr_12924_12988 = state_12855__$1;
(statearr_12924_12988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (38))){
var inst_12834 = (state_12855[(2)]);
var state_12855__$1 = state_12855;
var statearr_12925_12989 = state_12855__$1;
(statearr_12925_12989[(2)] = inst_12834);

(statearr_12925_12989[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (30))){
var state_12855__$1 = state_12855;
var statearr_12926_12990 = state_12855__$1;
(statearr_12926_12990[(2)] = null);

(statearr_12926_12990[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (10))){
var inst_12737 = (state_12855[(13)]);
var inst_12739 = (state_12855[(17)]);
var inst_12745 = cljs.core._nth.call(null,inst_12737,inst_12739);
var inst_12746 = cljs.core.nth.call(null,inst_12745,(0),null);
var inst_12747 = cljs.core.nth.call(null,inst_12745,(1),null);
var state_12855__$1 = (function (){var statearr_12927 = state_12855;
(statearr_12927[(26)] = inst_12746);

return statearr_12927;
})();
if(cljs.core.truth_(inst_12747)){
var statearr_12928_12991 = state_12855__$1;
(statearr_12928_12991[(1)] = (13));

} else {
var statearr_12929_12992 = state_12855__$1;
(statearr_12929_12992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (18))){
var inst_12780 = (state_12855[(2)]);
var state_12855__$1 = state_12855;
var statearr_12930_12993 = state_12855__$1;
(statearr_12930_12993[(2)] = inst_12780);

(statearr_12930_12993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (42))){
var state_12855__$1 = state_12855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12855__$1,(45),dchan);
} else {
if((state_val_12856 === (37))){
var inst_12823 = (state_12855[(23)]);
var inst_12814 = (state_12855[(25)]);
var inst_12727 = (state_12855[(11)]);
var inst_12823__$1 = cljs.core.first.call(null,inst_12814);
var inst_12824 = cljs.core.async.put_BANG_.call(null,inst_12823__$1,inst_12727,done);
var state_12855__$1 = (function (){var statearr_12931 = state_12855;
(statearr_12931[(23)] = inst_12823__$1);

return statearr_12931;
})();
if(cljs.core.truth_(inst_12824)){
var statearr_12932_12994 = state_12855__$1;
(statearr_12932_12994[(1)] = (39));

} else {
var statearr_12933_12995 = state_12855__$1;
(statearr_12933_12995[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12856 === (8))){
var inst_12738 = (state_12855[(15)]);
var inst_12739 = (state_12855[(17)]);
var inst_12741 = (inst_12739 < inst_12738);
var inst_12742 = inst_12741;
var state_12855__$1 = state_12855;
if(cljs.core.truth_(inst_12742)){
var statearr_12934_12996 = state_12855__$1;
(statearr_12934_12996[(1)] = (10));

} else {
var statearr_12935_12997 = state_12855__$1;
(statearr_12935_12997[(1)] = (11));

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
});})(c__11673__auto___12943,cs,m,dchan,dctr,done))
;
return ((function (switch__11561__auto__,c__11673__auto___12943,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11562__auto__ = null;
var cljs$core$async$mult_$_state_machine__11562__auto____0 = (function (){
var statearr_12939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12939[(0)] = cljs$core$async$mult_$_state_machine__11562__auto__);

(statearr_12939[(1)] = (1));

return statearr_12939;
});
var cljs$core$async$mult_$_state_machine__11562__auto____1 = (function (state_12855){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_12855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e12940){if((e12940 instanceof Object)){
var ex__11565__auto__ = e12940;
var statearr_12941_12998 = state_12855;
(statearr_12941_12998[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12999 = state_12855;
state_12855 = G__12999;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11562__auto__ = function(state_12855){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11562__auto____1.call(this,state_12855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11562__auto____0;
cljs$core$async$mult_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11562__auto____1;
return cljs$core$async$mult_$_state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___12943,cs,m,dchan,dctr,done))
})();
var state__11675__auto__ = (function (){var statearr_12942 = f__11674__auto__.call(null);
(statearr_12942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___12943);

return statearr_12942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___12943,cs,m,dchan,dctr,done))
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
var args13000 = [];
var len__6226__auto___13003 = arguments.length;
var i__6227__auto___13004 = (0);
while(true){
if((i__6227__auto___13004 < len__6226__auto___13003)){
args13000.push((arguments[i__6227__auto___13004]));

var G__13005 = (i__6227__auto___13004 + (1));
i__6227__auto___13004 = G__13005;
continue;
} else {
}
break;
}

var G__13002 = args13000.length;
switch (G__13002) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13000.length)].join('')));

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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,ch);
} else {
var m__5824__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,ch);
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,ch);
} else {
var m__5824__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,ch);
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m);
} else {
var m__5824__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m);
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,state_map);
} else {
var m__5824__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,state_map);
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,mode);
} else {
var m__5824__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6233__auto__ = [];
var len__6226__auto___13017 = arguments.length;
var i__6227__auto___13018 = (0);
while(true){
if((i__6227__auto___13018 < len__6226__auto___13017)){
args__6233__auto__.push((arguments[i__6227__auto___13018]));

var G__13019 = (i__6227__auto___13018 + (1));
i__6227__auto___13018 = G__13019;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((3) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6234__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13011){
var map__13012 = p__13011;
var map__13012__$1 = ((((!((map__13012 == null)))?((((map__13012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13012):map__13012);
var opts = map__13012__$1;
var statearr_13014_13020 = state;
(statearr_13014_13020[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__13012,map__13012__$1,opts){
return (function (val){
var statearr_13015_13021 = state;
(statearr_13015_13021[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13012,map__13012__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_13016_13022 = state;
(statearr_13016_13022[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13007){
var G__13008 = cljs.core.first.call(null,seq13007);
var seq13007__$1 = cljs.core.next.call(null,seq13007);
var G__13009 = cljs.core.first.call(null,seq13007__$1);
var seq13007__$2 = cljs.core.next.call(null,seq13007__$1);
var G__13010 = cljs.core.first.call(null,seq13007__$2);
var seq13007__$3 = cljs.core.next.call(null,seq13007__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13008,G__13009,G__13010,seq13007__$3);
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
if(typeof cljs.core.async.t_cljs$core$async13186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13186 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13187){
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
this.meta13187 = meta13187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13188,meta13187__$1){
var self__ = this;
var _13188__$1 = this;
return (new cljs.core.async.t_cljs$core$async13186(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13187__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13188){
var self__ = this;
var _13188__$1 = this;
return self__.meta13187;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13186.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13186.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13186.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async13186.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13186.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13186.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13186.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13186.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13186.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13187","meta13187",-563623452,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13186";

cljs.core.async.t_cljs$core$async13186.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async13186");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13186 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13186(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13187){
return (new cljs.core.async.t_cljs$core$async13186(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13187));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13186(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11673__auto___13349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___13349,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___13349,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13286){
var state_val_13287 = (state_13286[(1)]);
if((state_val_13287 === (7))){
var inst_13204 = (state_13286[(2)]);
var state_13286__$1 = state_13286;
var statearr_13288_13350 = state_13286__$1;
(statearr_13288_13350[(2)] = inst_13204);

(statearr_13288_13350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (20))){
var inst_13216 = (state_13286[(7)]);
var state_13286__$1 = state_13286;
var statearr_13289_13351 = state_13286__$1;
(statearr_13289_13351[(2)] = inst_13216);

(statearr_13289_13351[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (27))){
var state_13286__$1 = state_13286;
var statearr_13290_13352 = state_13286__$1;
(statearr_13290_13352[(2)] = null);

(statearr_13290_13352[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (1))){
var inst_13192 = (state_13286[(8)]);
var inst_13192__$1 = calc_state.call(null);
var inst_13194 = (inst_13192__$1 == null);
var inst_13195 = cljs.core.not.call(null,inst_13194);
var state_13286__$1 = (function (){var statearr_13291 = state_13286;
(statearr_13291[(8)] = inst_13192__$1);

return statearr_13291;
})();
if(inst_13195){
var statearr_13292_13353 = state_13286__$1;
(statearr_13292_13353[(1)] = (2));

} else {
var statearr_13293_13354 = state_13286__$1;
(statearr_13293_13354[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (24))){
var inst_13239 = (state_13286[(9)]);
var inst_13246 = (state_13286[(10)]);
var inst_13260 = (state_13286[(11)]);
var inst_13260__$1 = inst_13239.call(null,inst_13246);
var state_13286__$1 = (function (){var statearr_13294 = state_13286;
(statearr_13294[(11)] = inst_13260__$1);

return statearr_13294;
})();
if(cljs.core.truth_(inst_13260__$1)){
var statearr_13295_13355 = state_13286__$1;
(statearr_13295_13355[(1)] = (29));

} else {
var statearr_13296_13356 = state_13286__$1;
(statearr_13296_13356[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (4))){
var inst_13207 = (state_13286[(2)]);
var state_13286__$1 = state_13286;
if(cljs.core.truth_(inst_13207)){
var statearr_13297_13357 = state_13286__$1;
(statearr_13297_13357[(1)] = (8));

} else {
var statearr_13298_13358 = state_13286__$1;
(statearr_13298_13358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (15))){
var inst_13233 = (state_13286[(2)]);
var state_13286__$1 = state_13286;
if(cljs.core.truth_(inst_13233)){
var statearr_13299_13359 = state_13286__$1;
(statearr_13299_13359[(1)] = (19));

} else {
var statearr_13300_13360 = state_13286__$1;
(statearr_13300_13360[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (21))){
var inst_13238 = (state_13286[(12)]);
var inst_13238__$1 = (state_13286[(2)]);
var inst_13239 = cljs.core.get.call(null,inst_13238__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13240 = cljs.core.get.call(null,inst_13238__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13241 = cljs.core.get.call(null,inst_13238__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13286__$1 = (function (){var statearr_13301 = state_13286;
(statearr_13301[(9)] = inst_13239);

(statearr_13301[(12)] = inst_13238__$1);

(statearr_13301[(13)] = inst_13240);

return statearr_13301;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13286__$1,(22),inst_13241);
} else {
if((state_val_13287 === (31))){
var inst_13268 = (state_13286[(2)]);
var state_13286__$1 = state_13286;
if(cljs.core.truth_(inst_13268)){
var statearr_13302_13361 = state_13286__$1;
(statearr_13302_13361[(1)] = (32));

} else {
var statearr_13303_13362 = state_13286__$1;
(statearr_13303_13362[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (32))){
var inst_13245 = (state_13286[(14)]);
var state_13286__$1 = state_13286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13286__$1,(35),out,inst_13245);
} else {
if((state_val_13287 === (33))){
var inst_13238 = (state_13286[(12)]);
var inst_13216 = inst_13238;
var state_13286__$1 = (function (){var statearr_13304 = state_13286;
(statearr_13304[(7)] = inst_13216);

return statearr_13304;
})();
var statearr_13305_13363 = state_13286__$1;
(statearr_13305_13363[(2)] = null);

(statearr_13305_13363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (13))){
var inst_13216 = (state_13286[(7)]);
var inst_13223 = inst_13216.cljs$lang$protocol_mask$partition0$;
var inst_13224 = (inst_13223 & (64));
var inst_13225 = inst_13216.cljs$core$ISeq$;
var inst_13226 = (inst_13224) || (inst_13225);
var state_13286__$1 = state_13286;
if(cljs.core.truth_(inst_13226)){
var statearr_13306_13364 = state_13286__$1;
(statearr_13306_13364[(1)] = (16));

} else {
var statearr_13307_13365 = state_13286__$1;
(statearr_13307_13365[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (22))){
var inst_13246 = (state_13286[(10)]);
var inst_13245 = (state_13286[(14)]);
var inst_13244 = (state_13286[(2)]);
var inst_13245__$1 = cljs.core.nth.call(null,inst_13244,(0),null);
var inst_13246__$1 = cljs.core.nth.call(null,inst_13244,(1),null);
var inst_13247 = (inst_13245__$1 == null);
var inst_13248 = cljs.core._EQ_.call(null,inst_13246__$1,change);
var inst_13249 = (inst_13247) || (inst_13248);
var state_13286__$1 = (function (){var statearr_13308 = state_13286;
(statearr_13308[(10)] = inst_13246__$1);

(statearr_13308[(14)] = inst_13245__$1);

return statearr_13308;
})();
if(cljs.core.truth_(inst_13249)){
var statearr_13309_13366 = state_13286__$1;
(statearr_13309_13366[(1)] = (23));

} else {
var statearr_13310_13367 = state_13286__$1;
(statearr_13310_13367[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (36))){
var inst_13238 = (state_13286[(12)]);
var inst_13216 = inst_13238;
var state_13286__$1 = (function (){var statearr_13311 = state_13286;
(statearr_13311[(7)] = inst_13216);

return statearr_13311;
})();
var statearr_13312_13368 = state_13286__$1;
(statearr_13312_13368[(2)] = null);

(statearr_13312_13368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (29))){
var inst_13260 = (state_13286[(11)]);
var state_13286__$1 = state_13286;
var statearr_13313_13369 = state_13286__$1;
(statearr_13313_13369[(2)] = inst_13260);

(statearr_13313_13369[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (6))){
var state_13286__$1 = state_13286;
var statearr_13314_13370 = state_13286__$1;
(statearr_13314_13370[(2)] = false);

(statearr_13314_13370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (28))){
var inst_13256 = (state_13286[(2)]);
var inst_13257 = calc_state.call(null);
var inst_13216 = inst_13257;
var state_13286__$1 = (function (){var statearr_13315 = state_13286;
(statearr_13315[(15)] = inst_13256);

(statearr_13315[(7)] = inst_13216);

return statearr_13315;
})();
var statearr_13316_13371 = state_13286__$1;
(statearr_13316_13371[(2)] = null);

(statearr_13316_13371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (25))){
var inst_13282 = (state_13286[(2)]);
var state_13286__$1 = state_13286;
var statearr_13317_13372 = state_13286__$1;
(statearr_13317_13372[(2)] = inst_13282);

(statearr_13317_13372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (34))){
var inst_13280 = (state_13286[(2)]);
var state_13286__$1 = state_13286;
var statearr_13318_13373 = state_13286__$1;
(statearr_13318_13373[(2)] = inst_13280);

(statearr_13318_13373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (17))){
var state_13286__$1 = state_13286;
var statearr_13319_13374 = state_13286__$1;
(statearr_13319_13374[(2)] = false);

(statearr_13319_13374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (3))){
var state_13286__$1 = state_13286;
var statearr_13320_13375 = state_13286__$1;
(statearr_13320_13375[(2)] = false);

(statearr_13320_13375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (12))){
var inst_13284 = (state_13286[(2)]);
var state_13286__$1 = state_13286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13286__$1,inst_13284);
} else {
if((state_val_13287 === (2))){
var inst_13192 = (state_13286[(8)]);
var inst_13197 = inst_13192.cljs$lang$protocol_mask$partition0$;
var inst_13198 = (inst_13197 & (64));
var inst_13199 = inst_13192.cljs$core$ISeq$;
var inst_13200 = (inst_13198) || (inst_13199);
var state_13286__$1 = state_13286;
if(cljs.core.truth_(inst_13200)){
var statearr_13321_13376 = state_13286__$1;
(statearr_13321_13376[(1)] = (5));

} else {
var statearr_13322_13377 = state_13286__$1;
(statearr_13322_13377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (23))){
var inst_13245 = (state_13286[(14)]);
var inst_13251 = (inst_13245 == null);
var state_13286__$1 = state_13286;
if(cljs.core.truth_(inst_13251)){
var statearr_13323_13378 = state_13286__$1;
(statearr_13323_13378[(1)] = (26));

} else {
var statearr_13324_13379 = state_13286__$1;
(statearr_13324_13379[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (35))){
var inst_13271 = (state_13286[(2)]);
var state_13286__$1 = state_13286;
if(cljs.core.truth_(inst_13271)){
var statearr_13325_13380 = state_13286__$1;
(statearr_13325_13380[(1)] = (36));

} else {
var statearr_13326_13381 = state_13286__$1;
(statearr_13326_13381[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (19))){
var inst_13216 = (state_13286[(7)]);
var inst_13235 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13216);
var state_13286__$1 = state_13286;
var statearr_13327_13382 = state_13286__$1;
(statearr_13327_13382[(2)] = inst_13235);

(statearr_13327_13382[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (11))){
var inst_13216 = (state_13286[(7)]);
var inst_13220 = (inst_13216 == null);
var inst_13221 = cljs.core.not.call(null,inst_13220);
var state_13286__$1 = state_13286;
if(inst_13221){
var statearr_13328_13383 = state_13286__$1;
(statearr_13328_13383[(1)] = (13));

} else {
var statearr_13329_13384 = state_13286__$1;
(statearr_13329_13384[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (9))){
var inst_13192 = (state_13286[(8)]);
var state_13286__$1 = state_13286;
var statearr_13330_13385 = state_13286__$1;
(statearr_13330_13385[(2)] = inst_13192);

(statearr_13330_13385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (5))){
var state_13286__$1 = state_13286;
var statearr_13331_13386 = state_13286__$1;
(statearr_13331_13386[(2)] = true);

(statearr_13331_13386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (14))){
var state_13286__$1 = state_13286;
var statearr_13332_13387 = state_13286__$1;
(statearr_13332_13387[(2)] = false);

(statearr_13332_13387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (26))){
var inst_13246 = (state_13286[(10)]);
var inst_13253 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13246);
var state_13286__$1 = state_13286;
var statearr_13333_13388 = state_13286__$1;
(statearr_13333_13388[(2)] = inst_13253);

(statearr_13333_13388[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (16))){
var state_13286__$1 = state_13286;
var statearr_13334_13389 = state_13286__$1;
(statearr_13334_13389[(2)] = true);

(statearr_13334_13389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (38))){
var inst_13276 = (state_13286[(2)]);
var state_13286__$1 = state_13286;
var statearr_13335_13390 = state_13286__$1;
(statearr_13335_13390[(2)] = inst_13276);

(statearr_13335_13390[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (30))){
var inst_13239 = (state_13286[(9)]);
var inst_13246 = (state_13286[(10)]);
var inst_13240 = (state_13286[(13)]);
var inst_13263 = cljs.core.empty_QMARK_.call(null,inst_13239);
var inst_13264 = inst_13240.call(null,inst_13246);
var inst_13265 = cljs.core.not.call(null,inst_13264);
var inst_13266 = (inst_13263) && (inst_13265);
var state_13286__$1 = state_13286;
var statearr_13336_13391 = state_13286__$1;
(statearr_13336_13391[(2)] = inst_13266);

(statearr_13336_13391[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (10))){
var inst_13192 = (state_13286[(8)]);
var inst_13212 = (state_13286[(2)]);
var inst_13213 = cljs.core.get.call(null,inst_13212,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13214 = cljs.core.get.call(null,inst_13212,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13215 = cljs.core.get.call(null,inst_13212,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13216 = inst_13192;
var state_13286__$1 = (function (){var statearr_13337 = state_13286;
(statearr_13337[(7)] = inst_13216);

(statearr_13337[(16)] = inst_13213);

(statearr_13337[(17)] = inst_13215);

(statearr_13337[(18)] = inst_13214);

return statearr_13337;
})();
var statearr_13338_13392 = state_13286__$1;
(statearr_13338_13392[(2)] = null);

(statearr_13338_13392[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (18))){
var inst_13230 = (state_13286[(2)]);
var state_13286__$1 = state_13286;
var statearr_13339_13393 = state_13286__$1;
(statearr_13339_13393[(2)] = inst_13230);

(statearr_13339_13393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (37))){
var state_13286__$1 = state_13286;
var statearr_13340_13394 = state_13286__$1;
(statearr_13340_13394[(2)] = null);

(statearr_13340_13394[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13287 === (8))){
var inst_13192 = (state_13286[(8)]);
var inst_13209 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13192);
var state_13286__$1 = state_13286;
var statearr_13341_13395 = state_13286__$1;
(statearr_13341_13395[(2)] = inst_13209);

(statearr_13341_13395[(1)] = (10));


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
});})(c__11673__auto___13349,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11561__auto__,c__11673__auto___13349,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11562__auto__ = null;
var cljs$core$async$mix_$_state_machine__11562__auto____0 = (function (){
var statearr_13345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13345[(0)] = cljs$core$async$mix_$_state_machine__11562__auto__);

(statearr_13345[(1)] = (1));

return statearr_13345;
});
var cljs$core$async$mix_$_state_machine__11562__auto____1 = (function (state_13286){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_13286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e13346){if((e13346 instanceof Object)){
var ex__11565__auto__ = e13346;
var statearr_13347_13396 = state_13286;
(statearr_13347_13396[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13397 = state_13286;
state_13286 = G__13397;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11562__auto__ = function(state_13286){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11562__auto____1.call(this,state_13286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11562__auto____0;
cljs$core$async$mix_$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11562__auto____1;
return cljs$core$async$mix_$_state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___13349,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11675__auto__ = (function (){var statearr_13348 = f__11674__auto__.call(null);
(statearr_13348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___13349);

return statearr_13348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___13349,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5824__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,p,v,ch);
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args13398 = [];
var len__6226__auto___13401 = arguments.length;
var i__6227__auto___13402 = (0);
while(true){
if((i__6227__auto___13402 < len__6226__auto___13401)){
args13398.push((arguments[i__6227__auto___13402]));

var G__13403 = (i__6227__auto___13402 + (1));
i__6227__auto___13402 = G__13403;
continue;
} else {
}
break;
}

var G__13400 = args13398.length;
switch (G__13400) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13398.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,p);
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,p);
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
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,p,v);
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,p,v);
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
var args13406 = [];
var len__6226__auto___13531 = arguments.length;
var i__6227__auto___13532 = (0);
while(true){
if((i__6227__auto___13532 < len__6226__auto___13531)){
args13406.push((arguments[i__6227__auto___13532]));

var G__13533 = (i__6227__auto___13532 + (1));
i__6227__auto___13532 = G__13533;
continue;
} else {
}
break;
}

var G__13408 = args13406.length;
switch (G__13408) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13406.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5168__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5168__auto__,mults){
return (function (p1__13405_SHARP_){
if(cljs.core.truth_(p1__13405_SHARP_.call(null,topic))){
return p1__13405_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13405_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5168__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async13409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13409 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13410){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13410 = meta13410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13411,meta13410__$1){
var self__ = this;
var _13411__$1 = this;
return (new cljs.core.async.t_cljs$core$async13409(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13410__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13411){
var self__ = this;
var _13411__$1 = this;
return self__.meta13410;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13409.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13409.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13409.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async13409.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13409.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async13409.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13409.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13409.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13410","meta13410",-686859445,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13409";

cljs.core.async.t_cljs$core$async13409.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async13409");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async13409 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13409(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13410){
return (new cljs.core.async.t_cljs$core$async13409(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13410));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13409(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11673__auto___13535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___13535,mults,ensure_mult,p){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___13535,mults,ensure_mult,p){
return (function (state_13483){
var state_val_13484 = (state_13483[(1)]);
if((state_val_13484 === (7))){
var inst_13479 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13485_13536 = state_13483__$1;
(statearr_13485_13536[(2)] = inst_13479);

(statearr_13485_13536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (20))){
var state_13483__$1 = state_13483;
var statearr_13486_13537 = state_13483__$1;
(statearr_13486_13537[(2)] = null);

(statearr_13486_13537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (1))){
var state_13483__$1 = state_13483;
var statearr_13487_13538 = state_13483__$1;
(statearr_13487_13538[(2)] = null);

(statearr_13487_13538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (24))){
var inst_13462 = (state_13483[(7)]);
var inst_13471 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13462);
var state_13483__$1 = state_13483;
var statearr_13488_13539 = state_13483__$1;
(statearr_13488_13539[(2)] = inst_13471);

(statearr_13488_13539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (4))){
var inst_13414 = (state_13483[(8)]);
var inst_13414__$1 = (state_13483[(2)]);
var inst_13415 = (inst_13414__$1 == null);
var state_13483__$1 = (function (){var statearr_13489 = state_13483;
(statearr_13489[(8)] = inst_13414__$1);

return statearr_13489;
})();
if(cljs.core.truth_(inst_13415)){
var statearr_13490_13540 = state_13483__$1;
(statearr_13490_13540[(1)] = (5));

} else {
var statearr_13491_13541 = state_13483__$1;
(statearr_13491_13541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (15))){
var inst_13456 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13492_13542 = state_13483__$1;
(statearr_13492_13542[(2)] = inst_13456);

(statearr_13492_13542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (21))){
var inst_13476 = (state_13483[(2)]);
var state_13483__$1 = (function (){var statearr_13493 = state_13483;
(statearr_13493[(9)] = inst_13476);

return statearr_13493;
})();
var statearr_13494_13543 = state_13483__$1;
(statearr_13494_13543[(2)] = null);

(statearr_13494_13543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (13))){
var inst_13438 = (state_13483[(10)]);
var inst_13440 = cljs.core.chunked_seq_QMARK_.call(null,inst_13438);
var state_13483__$1 = state_13483;
if(inst_13440){
var statearr_13495_13544 = state_13483__$1;
(statearr_13495_13544[(1)] = (16));

} else {
var statearr_13496_13545 = state_13483__$1;
(statearr_13496_13545[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (22))){
var inst_13468 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
if(cljs.core.truth_(inst_13468)){
var statearr_13497_13546 = state_13483__$1;
(statearr_13497_13546[(1)] = (23));

} else {
var statearr_13498_13547 = state_13483__$1;
(statearr_13498_13547[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (6))){
var inst_13462 = (state_13483[(7)]);
var inst_13414 = (state_13483[(8)]);
var inst_13464 = (state_13483[(11)]);
var inst_13462__$1 = topic_fn.call(null,inst_13414);
var inst_13463 = cljs.core.deref.call(null,mults);
var inst_13464__$1 = cljs.core.get.call(null,inst_13463,inst_13462__$1);
var state_13483__$1 = (function (){var statearr_13499 = state_13483;
(statearr_13499[(7)] = inst_13462__$1);

(statearr_13499[(11)] = inst_13464__$1);

return statearr_13499;
})();
if(cljs.core.truth_(inst_13464__$1)){
var statearr_13500_13548 = state_13483__$1;
(statearr_13500_13548[(1)] = (19));

} else {
var statearr_13501_13549 = state_13483__$1;
(statearr_13501_13549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (25))){
var inst_13473 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13502_13550 = state_13483__$1;
(statearr_13502_13550[(2)] = inst_13473);

(statearr_13502_13550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (17))){
var inst_13438 = (state_13483[(10)]);
var inst_13447 = cljs.core.first.call(null,inst_13438);
var inst_13448 = cljs.core.async.muxch_STAR_.call(null,inst_13447);
var inst_13449 = cljs.core.async.close_BANG_.call(null,inst_13448);
var inst_13450 = cljs.core.next.call(null,inst_13438);
var inst_13424 = inst_13450;
var inst_13425 = null;
var inst_13426 = (0);
var inst_13427 = (0);
var state_13483__$1 = (function (){var statearr_13503 = state_13483;
(statearr_13503[(12)] = inst_13424);

(statearr_13503[(13)] = inst_13449);

(statearr_13503[(14)] = inst_13427);

(statearr_13503[(15)] = inst_13426);

(statearr_13503[(16)] = inst_13425);

return statearr_13503;
})();
var statearr_13504_13551 = state_13483__$1;
(statearr_13504_13551[(2)] = null);

(statearr_13504_13551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (3))){
var inst_13481 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13483__$1,inst_13481);
} else {
if((state_val_13484 === (12))){
var inst_13458 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13505_13552 = state_13483__$1;
(statearr_13505_13552[(2)] = inst_13458);

(statearr_13505_13552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (2))){
var state_13483__$1 = state_13483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13483__$1,(4),ch);
} else {
if((state_val_13484 === (23))){
var state_13483__$1 = state_13483;
var statearr_13506_13553 = state_13483__$1;
(statearr_13506_13553[(2)] = null);

(statearr_13506_13553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (19))){
var inst_13414 = (state_13483[(8)]);
var inst_13464 = (state_13483[(11)]);
var inst_13466 = cljs.core.async.muxch_STAR_.call(null,inst_13464);
var state_13483__$1 = state_13483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13483__$1,(22),inst_13466,inst_13414);
} else {
if((state_val_13484 === (11))){
var inst_13424 = (state_13483[(12)]);
var inst_13438 = (state_13483[(10)]);
var inst_13438__$1 = cljs.core.seq.call(null,inst_13424);
var state_13483__$1 = (function (){var statearr_13507 = state_13483;
(statearr_13507[(10)] = inst_13438__$1);

return statearr_13507;
})();
if(inst_13438__$1){
var statearr_13508_13554 = state_13483__$1;
(statearr_13508_13554[(1)] = (13));

} else {
var statearr_13509_13555 = state_13483__$1;
(statearr_13509_13555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (9))){
var inst_13460 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13510_13556 = state_13483__$1;
(statearr_13510_13556[(2)] = inst_13460);

(statearr_13510_13556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (5))){
var inst_13421 = cljs.core.deref.call(null,mults);
var inst_13422 = cljs.core.vals.call(null,inst_13421);
var inst_13423 = cljs.core.seq.call(null,inst_13422);
var inst_13424 = inst_13423;
var inst_13425 = null;
var inst_13426 = (0);
var inst_13427 = (0);
var state_13483__$1 = (function (){var statearr_13511 = state_13483;
(statearr_13511[(12)] = inst_13424);

(statearr_13511[(14)] = inst_13427);

(statearr_13511[(15)] = inst_13426);

(statearr_13511[(16)] = inst_13425);

return statearr_13511;
})();
var statearr_13512_13557 = state_13483__$1;
(statearr_13512_13557[(2)] = null);

(statearr_13512_13557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (14))){
var state_13483__$1 = state_13483;
var statearr_13516_13558 = state_13483__$1;
(statearr_13516_13558[(2)] = null);

(statearr_13516_13558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (16))){
var inst_13438 = (state_13483[(10)]);
var inst_13442 = cljs.core.chunk_first.call(null,inst_13438);
var inst_13443 = cljs.core.chunk_rest.call(null,inst_13438);
var inst_13444 = cljs.core.count.call(null,inst_13442);
var inst_13424 = inst_13443;
var inst_13425 = inst_13442;
var inst_13426 = inst_13444;
var inst_13427 = (0);
var state_13483__$1 = (function (){var statearr_13517 = state_13483;
(statearr_13517[(12)] = inst_13424);

(statearr_13517[(14)] = inst_13427);

(statearr_13517[(15)] = inst_13426);

(statearr_13517[(16)] = inst_13425);

return statearr_13517;
})();
var statearr_13518_13559 = state_13483__$1;
(statearr_13518_13559[(2)] = null);

(statearr_13518_13559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (10))){
var inst_13424 = (state_13483[(12)]);
var inst_13427 = (state_13483[(14)]);
var inst_13426 = (state_13483[(15)]);
var inst_13425 = (state_13483[(16)]);
var inst_13432 = cljs.core._nth.call(null,inst_13425,inst_13427);
var inst_13433 = cljs.core.async.muxch_STAR_.call(null,inst_13432);
var inst_13434 = cljs.core.async.close_BANG_.call(null,inst_13433);
var inst_13435 = (inst_13427 + (1));
var tmp13513 = inst_13424;
var tmp13514 = inst_13426;
var tmp13515 = inst_13425;
var inst_13424__$1 = tmp13513;
var inst_13425__$1 = tmp13515;
var inst_13426__$1 = tmp13514;
var inst_13427__$1 = inst_13435;
var state_13483__$1 = (function (){var statearr_13519 = state_13483;
(statearr_13519[(17)] = inst_13434);

(statearr_13519[(12)] = inst_13424__$1);

(statearr_13519[(14)] = inst_13427__$1);

(statearr_13519[(15)] = inst_13426__$1);

(statearr_13519[(16)] = inst_13425__$1);

return statearr_13519;
})();
var statearr_13520_13560 = state_13483__$1;
(statearr_13520_13560[(2)] = null);

(statearr_13520_13560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (18))){
var inst_13453 = (state_13483[(2)]);
var state_13483__$1 = state_13483;
var statearr_13521_13561 = state_13483__$1;
(statearr_13521_13561[(2)] = inst_13453);

(statearr_13521_13561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13484 === (8))){
var inst_13427 = (state_13483[(14)]);
var inst_13426 = (state_13483[(15)]);
var inst_13429 = (inst_13427 < inst_13426);
var inst_13430 = inst_13429;
var state_13483__$1 = state_13483;
if(cljs.core.truth_(inst_13430)){
var statearr_13522_13562 = state_13483__$1;
(statearr_13522_13562[(1)] = (10));

} else {
var statearr_13523_13563 = state_13483__$1;
(statearr_13523_13563[(1)] = (11));

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
});})(c__11673__auto___13535,mults,ensure_mult,p))
;
return ((function (switch__11561__auto__,c__11673__auto___13535,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11562__auto__ = null;
var cljs$core$async$state_machine__11562__auto____0 = (function (){
var statearr_13527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13527[(0)] = cljs$core$async$state_machine__11562__auto__);

(statearr_13527[(1)] = (1));

return statearr_13527;
});
var cljs$core$async$state_machine__11562__auto____1 = (function (state_13483){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_13483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e13528){if((e13528 instanceof Object)){
var ex__11565__auto__ = e13528;
var statearr_13529_13564 = state_13483;
(statearr_13529_13564[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13565 = state_13483;
state_13483 = G__13565;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$state_machine__11562__auto__ = function(state_13483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11562__auto____1.call(this,state_13483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11562__auto____0;
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11562__auto____1;
return cljs$core$async$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___13535,mults,ensure_mult,p))
})();
var state__11675__auto__ = (function (){var statearr_13530 = f__11674__auto__.call(null);
(statearr_13530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___13535);

return statearr_13530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___13535,mults,ensure_mult,p))
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
var args13566 = [];
var len__6226__auto___13569 = arguments.length;
var i__6227__auto___13570 = (0);
while(true){
if((i__6227__auto___13570 < len__6226__auto___13569)){
args13566.push((arguments[i__6227__auto___13570]));

var G__13571 = (i__6227__auto___13570 + (1));
i__6227__auto___13570 = G__13571;
continue;
} else {
}
break;
}

var G__13568 = args13566.length;
switch (G__13568) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13566.length)].join('')));

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
var args13573 = [];
var len__6226__auto___13576 = arguments.length;
var i__6227__auto___13577 = (0);
while(true){
if((i__6227__auto___13577 < len__6226__auto___13576)){
args13573.push((arguments[i__6227__auto___13577]));

var G__13578 = (i__6227__auto___13577 + (1));
i__6227__auto___13577 = G__13578;
continue;
} else {
}
break;
}

var G__13575 = args13573.length;
switch (G__13575) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13573.length)].join('')));

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
var args13580 = [];
var len__6226__auto___13651 = arguments.length;
var i__6227__auto___13652 = (0);
while(true){
if((i__6227__auto___13652 < len__6226__auto___13651)){
args13580.push((arguments[i__6227__auto___13652]));

var G__13653 = (i__6227__auto___13652 + (1));
i__6227__auto___13652 = G__13653;
continue;
} else {
}
break;
}

var G__13582 = args13580.length;
switch (G__13582) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13580.length)].join('')));

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
var c__11673__auto___13655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___13655,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___13655,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13621){
var state_val_13622 = (state_13621[(1)]);
if((state_val_13622 === (7))){
var state_13621__$1 = state_13621;
var statearr_13623_13656 = state_13621__$1;
(statearr_13623_13656[(2)] = null);

(statearr_13623_13656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13622 === (1))){
var state_13621__$1 = state_13621;
var statearr_13624_13657 = state_13621__$1;
(statearr_13624_13657[(2)] = null);

(statearr_13624_13657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13622 === (4))){
var inst_13585 = (state_13621[(7)]);
var inst_13587 = (inst_13585 < cnt);
var state_13621__$1 = state_13621;
if(cljs.core.truth_(inst_13587)){
var statearr_13625_13658 = state_13621__$1;
(statearr_13625_13658[(1)] = (6));

} else {
var statearr_13626_13659 = state_13621__$1;
(statearr_13626_13659[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13622 === (15))){
var inst_13617 = (state_13621[(2)]);
var state_13621__$1 = state_13621;
var statearr_13627_13660 = state_13621__$1;
(statearr_13627_13660[(2)] = inst_13617);

(statearr_13627_13660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13622 === (13))){
var inst_13610 = cljs.core.async.close_BANG_.call(null,out);
var state_13621__$1 = state_13621;
var statearr_13628_13661 = state_13621__$1;
(statearr_13628_13661[(2)] = inst_13610);

(statearr_13628_13661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13622 === (6))){
var state_13621__$1 = state_13621;
var statearr_13629_13662 = state_13621__$1;
(statearr_13629_13662[(2)] = null);

(statearr_13629_13662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13622 === (3))){
var inst_13619 = (state_13621[(2)]);
var state_13621__$1 = state_13621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13621__$1,inst_13619);
} else {
if((state_val_13622 === (12))){
var inst_13607 = (state_13621[(8)]);
var inst_13607__$1 = (state_13621[(2)]);
var inst_13608 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13607__$1);
var state_13621__$1 = (function (){var statearr_13630 = state_13621;
(statearr_13630[(8)] = inst_13607__$1);

return statearr_13630;
})();
if(cljs.core.truth_(inst_13608)){
var statearr_13631_13663 = state_13621__$1;
(statearr_13631_13663[(1)] = (13));

} else {
var statearr_13632_13664 = state_13621__$1;
(statearr_13632_13664[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13622 === (2))){
var inst_13584 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13585 = (0);
var state_13621__$1 = (function (){var statearr_13633 = state_13621;
(statearr_13633[(9)] = inst_13584);

(statearr_13633[(7)] = inst_13585);

return statearr_13633;
})();
var statearr_13634_13665 = state_13621__$1;
(statearr_13634_13665[(2)] = null);

(statearr_13634_13665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13622 === (11))){
var inst_13585 = (state_13621[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13621,(10),Object,null,(9));
var inst_13594 = chs__$1.call(null,inst_13585);
var inst_13595 = done.call(null,inst_13585);
var inst_13596 = cljs.core.async.take_BANG_.call(null,inst_13594,inst_13595);
var state_13621__$1 = state_13621;
var statearr_13635_13666 = state_13621__$1;
(statearr_13635_13666[(2)] = inst_13596);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13621__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13622 === (9))){
var inst_13585 = (state_13621[(7)]);
var inst_13598 = (state_13621[(2)]);
var inst_13599 = (inst_13585 + (1));
var inst_13585__$1 = inst_13599;
var state_13621__$1 = (function (){var statearr_13636 = state_13621;
(statearr_13636[(7)] = inst_13585__$1);

(statearr_13636[(10)] = inst_13598);

return statearr_13636;
})();
var statearr_13637_13667 = state_13621__$1;
(statearr_13637_13667[(2)] = null);

(statearr_13637_13667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13622 === (5))){
var inst_13605 = (state_13621[(2)]);
var state_13621__$1 = (function (){var statearr_13638 = state_13621;
(statearr_13638[(11)] = inst_13605);

return statearr_13638;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13621__$1,(12),dchan);
} else {
if((state_val_13622 === (14))){
var inst_13607 = (state_13621[(8)]);
var inst_13612 = cljs.core.apply.call(null,f,inst_13607);
var state_13621__$1 = state_13621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13621__$1,(16),out,inst_13612);
} else {
if((state_val_13622 === (16))){
var inst_13614 = (state_13621[(2)]);
var state_13621__$1 = (function (){var statearr_13639 = state_13621;
(statearr_13639[(12)] = inst_13614);

return statearr_13639;
})();
var statearr_13640_13668 = state_13621__$1;
(statearr_13640_13668[(2)] = null);

(statearr_13640_13668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13622 === (10))){
var inst_13589 = (state_13621[(2)]);
var inst_13590 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13621__$1 = (function (){var statearr_13641 = state_13621;
(statearr_13641[(13)] = inst_13589);

return statearr_13641;
})();
var statearr_13642_13669 = state_13621__$1;
(statearr_13642_13669[(2)] = inst_13590);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13621__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13622 === (8))){
var inst_13603 = (state_13621[(2)]);
var state_13621__$1 = state_13621;
var statearr_13643_13670 = state_13621__$1;
(statearr_13643_13670[(2)] = inst_13603);

(statearr_13643_13670[(1)] = (5));


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
});})(c__11673__auto___13655,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11561__auto__,c__11673__auto___13655,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11562__auto__ = null;
var cljs$core$async$state_machine__11562__auto____0 = (function (){
var statearr_13647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13647[(0)] = cljs$core$async$state_machine__11562__auto__);

(statearr_13647[(1)] = (1));

return statearr_13647;
});
var cljs$core$async$state_machine__11562__auto____1 = (function (state_13621){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_13621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e13648){if((e13648 instanceof Object)){
var ex__11565__auto__ = e13648;
var statearr_13649_13671 = state_13621;
(statearr_13649_13671[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13672 = state_13621;
state_13621 = G__13672;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$state_machine__11562__auto__ = function(state_13621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11562__auto____1.call(this,state_13621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11562__auto____0;
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11562__auto____1;
return cljs$core$async$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___13655,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11675__auto__ = (function (){var statearr_13650 = f__11674__auto__.call(null);
(statearr_13650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___13655);

return statearr_13650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___13655,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args13674 = [];
var len__6226__auto___13730 = arguments.length;
var i__6227__auto___13731 = (0);
while(true){
if((i__6227__auto___13731 < len__6226__auto___13730)){
args13674.push((arguments[i__6227__auto___13731]));

var G__13732 = (i__6227__auto___13731 + (1));
i__6227__auto___13731 = G__13732;
continue;
} else {
}
break;
}

var G__13676 = args13674.length;
switch (G__13676) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13674.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11673__auto___13734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___13734,out){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___13734,out){
return (function (state_13706){
var state_val_13707 = (state_13706[(1)]);
if((state_val_13707 === (7))){
var inst_13686 = (state_13706[(7)]);
var inst_13685 = (state_13706[(8)]);
var inst_13685__$1 = (state_13706[(2)]);
var inst_13686__$1 = cljs.core.nth.call(null,inst_13685__$1,(0),null);
var inst_13687 = cljs.core.nth.call(null,inst_13685__$1,(1),null);
var inst_13688 = (inst_13686__$1 == null);
var state_13706__$1 = (function (){var statearr_13708 = state_13706;
(statearr_13708[(7)] = inst_13686__$1);

(statearr_13708[(9)] = inst_13687);

(statearr_13708[(8)] = inst_13685__$1);

return statearr_13708;
})();
if(cljs.core.truth_(inst_13688)){
var statearr_13709_13735 = state_13706__$1;
(statearr_13709_13735[(1)] = (8));

} else {
var statearr_13710_13736 = state_13706__$1;
(statearr_13710_13736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (1))){
var inst_13677 = cljs.core.vec.call(null,chs);
var inst_13678 = inst_13677;
var state_13706__$1 = (function (){var statearr_13711 = state_13706;
(statearr_13711[(10)] = inst_13678);

return statearr_13711;
})();
var statearr_13712_13737 = state_13706__$1;
(statearr_13712_13737[(2)] = null);

(statearr_13712_13737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (4))){
var inst_13678 = (state_13706[(10)]);
var state_13706__$1 = state_13706;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13706__$1,(7),inst_13678);
} else {
if((state_val_13707 === (6))){
var inst_13702 = (state_13706[(2)]);
var state_13706__$1 = state_13706;
var statearr_13713_13738 = state_13706__$1;
(statearr_13713_13738[(2)] = inst_13702);

(statearr_13713_13738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (3))){
var inst_13704 = (state_13706[(2)]);
var state_13706__$1 = state_13706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13706__$1,inst_13704);
} else {
if((state_val_13707 === (2))){
var inst_13678 = (state_13706[(10)]);
var inst_13680 = cljs.core.count.call(null,inst_13678);
var inst_13681 = (inst_13680 > (0));
var state_13706__$1 = state_13706;
if(cljs.core.truth_(inst_13681)){
var statearr_13715_13739 = state_13706__$1;
(statearr_13715_13739[(1)] = (4));

} else {
var statearr_13716_13740 = state_13706__$1;
(statearr_13716_13740[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (11))){
var inst_13678 = (state_13706[(10)]);
var inst_13695 = (state_13706[(2)]);
var tmp13714 = inst_13678;
var inst_13678__$1 = tmp13714;
var state_13706__$1 = (function (){var statearr_13717 = state_13706;
(statearr_13717[(11)] = inst_13695);

(statearr_13717[(10)] = inst_13678__$1);

return statearr_13717;
})();
var statearr_13718_13741 = state_13706__$1;
(statearr_13718_13741[(2)] = null);

(statearr_13718_13741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (9))){
var inst_13686 = (state_13706[(7)]);
var state_13706__$1 = state_13706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13706__$1,(11),out,inst_13686);
} else {
if((state_val_13707 === (5))){
var inst_13700 = cljs.core.async.close_BANG_.call(null,out);
var state_13706__$1 = state_13706;
var statearr_13719_13742 = state_13706__$1;
(statearr_13719_13742[(2)] = inst_13700);

(statearr_13719_13742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (10))){
var inst_13698 = (state_13706[(2)]);
var state_13706__$1 = state_13706;
var statearr_13720_13743 = state_13706__$1;
(statearr_13720_13743[(2)] = inst_13698);

(statearr_13720_13743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (8))){
var inst_13678 = (state_13706[(10)]);
var inst_13686 = (state_13706[(7)]);
var inst_13687 = (state_13706[(9)]);
var inst_13685 = (state_13706[(8)]);
var inst_13690 = (function (){var cs = inst_13678;
var vec__13683 = inst_13685;
var v = inst_13686;
var c = inst_13687;
return ((function (cs,vec__13683,v,c,inst_13678,inst_13686,inst_13687,inst_13685,state_val_13707,c__11673__auto___13734,out){
return (function (p1__13673_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13673_SHARP_);
});
;})(cs,vec__13683,v,c,inst_13678,inst_13686,inst_13687,inst_13685,state_val_13707,c__11673__auto___13734,out))
})();
var inst_13691 = cljs.core.filterv.call(null,inst_13690,inst_13678);
var inst_13678__$1 = inst_13691;
var state_13706__$1 = (function (){var statearr_13721 = state_13706;
(statearr_13721[(10)] = inst_13678__$1);

return statearr_13721;
})();
var statearr_13722_13744 = state_13706__$1;
(statearr_13722_13744[(2)] = null);

(statearr_13722_13744[(1)] = (2));


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
});})(c__11673__auto___13734,out))
;
return ((function (switch__11561__auto__,c__11673__auto___13734,out){
return (function() {
var cljs$core$async$state_machine__11562__auto__ = null;
var cljs$core$async$state_machine__11562__auto____0 = (function (){
var statearr_13726 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13726[(0)] = cljs$core$async$state_machine__11562__auto__);

(statearr_13726[(1)] = (1));

return statearr_13726;
});
var cljs$core$async$state_machine__11562__auto____1 = (function (state_13706){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_13706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e13727){if((e13727 instanceof Object)){
var ex__11565__auto__ = e13727;
var statearr_13728_13745 = state_13706;
(statearr_13728_13745[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13746 = state_13706;
state_13706 = G__13746;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$state_machine__11562__auto__ = function(state_13706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11562__auto____1.call(this,state_13706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11562__auto____0;
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11562__auto____1;
return cljs$core$async$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___13734,out))
})();
var state__11675__auto__ = (function (){var statearr_13729 = f__11674__auto__.call(null);
(statearr_13729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___13734);

return statearr_13729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___13734,out))
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
var args13747 = [];
var len__6226__auto___13796 = arguments.length;
var i__6227__auto___13797 = (0);
while(true){
if((i__6227__auto___13797 < len__6226__auto___13796)){
args13747.push((arguments[i__6227__auto___13797]));

var G__13798 = (i__6227__auto___13797 + (1));
i__6227__auto___13797 = G__13798;
continue;
} else {
}
break;
}

var G__13749 = args13747.length;
switch (G__13749) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13747.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11673__auto___13800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___13800,out){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___13800,out){
return (function (state_13773){
var state_val_13774 = (state_13773[(1)]);
if((state_val_13774 === (7))){
var inst_13755 = (state_13773[(7)]);
var inst_13755__$1 = (state_13773[(2)]);
var inst_13756 = (inst_13755__$1 == null);
var inst_13757 = cljs.core.not.call(null,inst_13756);
var state_13773__$1 = (function (){var statearr_13775 = state_13773;
(statearr_13775[(7)] = inst_13755__$1);

return statearr_13775;
})();
if(inst_13757){
var statearr_13776_13801 = state_13773__$1;
(statearr_13776_13801[(1)] = (8));

} else {
var statearr_13777_13802 = state_13773__$1;
(statearr_13777_13802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (1))){
var inst_13750 = (0);
var state_13773__$1 = (function (){var statearr_13778 = state_13773;
(statearr_13778[(8)] = inst_13750);

return statearr_13778;
})();
var statearr_13779_13803 = state_13773__$1;
(statearr_13779_13803[(2)] = null);

(statearr_13779_13803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (4))){
var state_13773__$1 = state_13773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13773__$1,(7),ch);
} else {
if((state_val_13774 === (6))){
var inst_13768 = (state_13773[(2)]);
var state_13773__$1 = state_13773;
var statearr_13780_13804 = state_13773__$1;
(statearr_13780_13804[(2)] = inst_13768);

(statearr_13780_13804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (3))){
var inst_13770 = (state_13773[(2)]);
var inst_13771 = cljs.core.async.close_BANG_.call(null,out);
var state_13773__$1 = (function (){var statearr_13781 = state_13773;
(statearr_13781[(9)] = inst_13770);

return statearr_13781;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13773__$1,inst_13771);
} else {
if((state_val_13774 === (2))){
var inst_13750 = (state_13773[(8)]);
var inst_13752 = (inst_13750 < n);
var state_13773__$1 = state_13773;
if(cljs.core.truth_(inst_13752)){
var statearr_13782_13805 = state_13773__$1;
(statearr_13782_13805[(1)] = (4));

} else {
var statearr_13783_13806 = state_13773__$1;
(statearr_13783_13806[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (11))){
var inst_13750 = (state_13773[(8)]);
var inst_13760 = (state_13773[(2)]);
var inst_13761 = (inst_13750 + (1));
var inst_13750__$1 = inst_13761;
var state_13773__$1 = (function (){var statearr_13784 = state_13773;
(statearr_13784[(10)] = inst_13760);

(statearr_13784[(8)] = inst_13750__$1);

return statearr_13784;
})();
var statearr_13785_13807 = state_13773__$1;
(statearr_13785_13807[(2)] = null);

(statearr_13785_13807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (9))){
var state_13773__$1 = state_13773;
var statearr_13786_13808 = state_13773__$1;
(statearr_13786_13808[(2)] = null);

(statearr_13786_13808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (5))){
var state_13773__$1 = state_13773;
var statearr_13787_13809 = state_13773__$1;
(statearr_13787_13809[(2)] = null);

(statearr_13787_13809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (10))){
var inst_13765 = (state_13773[(2)]);
var state_13773__$1 = state_13773;
var statearr_13788_13810 = state_13773__$1;
(statearr_13788_13810[(2)] = inst_13765);

(statearr_13788_13810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13774 === (8))){
var inst_13755 = (state_13773[(7)]);
var state_13773__$1 = state_13773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13773__$1,(11),out,inst_13755);
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
});})(c__11673__auto___13800,out))
;
return ((function (switch__11561__auto__,c__11673__auto___13800,out){
return (function() {
var cljs$core$async$state_machine__11562__auto__ = null;
var cljs$core$async$state_machine__11562__auto____0 = (function (){
var statearr_13792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13792[(0)] = cljs$core$async$state_machine__11562__auto__);

(statearr_13792[(1)] = (1));

return statearr_13792;
});
var cljs$core$async$state_machine__11562__auto____1 = (function (state_13773){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_13773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e13793){if((e13793 instanceof Object)){
var ex__11565__auto__ = e13793;
var statearr_13794_13811 = state_13773;
(statearr_13794_13811[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13812 = state_13773;
state_13773 = G__13812;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$state_machine__11562__auto__ = function(state_13773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11562__auto____1.call(this,state_13773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11562__auto____0;
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11562__auto____1;
return cljs$core$async$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___13800,out))
})();
var state__11675__auto__ = (function (){var statearr_13795 = f__11674__auto__.call(null);
(statearr_13795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___13800);

return statearr_13795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___13800,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13820 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13820 = (function (map_LT_,f,ch,meta13821){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13821 = meta13821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13822,meta13821__$1){
var self__ = this;
var _13822__$1 = this;
return (new cljs.core.async.t_cljs$core$async13820(self__.map_LT_,self__.f,self__.ch,meta13821__$1));
});

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13822){
var self__ = this;
var _13822__$1 = this;
return self__.meta13821;
});

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13823 = (function (map_LT_,f,ch,meta13821,_,fn1,meta13824){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13821 = meta13821;
this._ = _;
this.fn1 = fn1;
this.meta13824 = meta13824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13825,meta13824__$1){
var self__ = this;
var _13825__$1 = this;
return (new cljs.core.async.t_cljs$core$async13823(self__.map_LT_,self__.f,self__.ch,self__.meta13821,self__._,self__.fn1,meta13824__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13825){
var self__ = this;
var _13825__$1 = this;
return self__.meta13824;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13823.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13823.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13823.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13813_SHARP_){
return f1.call(null,(((p1__13813_SHARP_ == null))?null:self__.f.call(null,p1__13813_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13823.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13821","meta13821",1137948813,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13820","cljs.core.async/t_cljs$core$async13820",-466363221,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13824","meta13824",34801754,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13823";

cljs.core.async.t_cljs$core$async13823.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async13823");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async13823 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13823(map_LT___$1,f__$1,ch__$1,meta13821__$1,___$2,fn1__$1,meta13824){
return (new cljs.core.async.t_cljs$core$async13823(map_LT___$1,f__$1,ch__$1,meta13821__$1,___$2,fn1__$1,meta13824));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13823(self__.map_LT_,self__.f,self__.ch,self__.meta13821,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5156__auto__ = ret;
if(cljs.core.truth_(and__5156__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__5156__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13820.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13821","meta13821",1137948813,null)], null);
});

cljs.core.async.t_cljs$core$async13820.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13820";

cljs.core.async.t_cljs$core$async13820.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async13820");
});

cljs.core.async.__GT_t_cljs$core$async13820 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13820(map_LT___$1,f__$1,ch__$1,meta13821){
return (new cljs.core.async.t_cljs$core$async13820(map_LT___$1,f__$1,ch__$1,meta13821));
});

}

return (new cljs.core.async.t_cljs$core$async13820(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13829 = (function (map_GT_,f,ch,meta13830){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta13830 = meta13830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13831,meta13830__$1){
var self__ = this;
var _13831__$1 = this;
return (new cljs.core.async.t_cljs$core$async13829(self__.map_GT_,self__.f,self__.ch,meta13830__$1));
});

cljs.core.async.t_cljs$core$async13829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13831){
var self__ = this;
var _13831__$1 = this;
return self__.meta13830;
});

cljs.core.async.t_cljs$core$async13829.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13829.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13829.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13829.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13829.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13829.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13830","meta13830",538204164,null)], null);
});

cljs.core.async.t_cljs$core$async13829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13829";

cljs.core.async.t_cljs$core$async13829.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async13829");
});

cljs.core.async.__GT_t_cljs$core$async13829 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13829(map_GT___$1,f__$1,ch__$1,meta13830){
return (new cljs.core.async.t_cljs$core$async13829(map_GT___$1,f__$1,ch__$1,meta13830));
});

}

return (new cljs.core.async.t_cljs$core$async13829(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13835 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13835 = (function (filter_GT_,p,ch,meta13836){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta13836 = meta13836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13837,meta13836__$1){
var self__ = this;
var _13837__$1 = this;
return (new cljs.core.async.t_cljs$core$async13835(self__.filter_GT_,self__.p,self__.ch,meta13836__$1));
});

cljs.core.async.t_cljs$core$async13835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13837){
var self__ = this;
var _13837__$1 = this;
return self__.meta13836;
});

cljs.core.async.t_cljs$core$async13835.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13835.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13835.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13835.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13835.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13835.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13835.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13836","meta13836",-1718568219,null)], null);
});

cljs.core.async.t_cljs$core$async13835.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13835";

cljs.core.async.t_cljs$core$async13835.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async13835");
});

cljs.core.async.__GT_t_cljs$core$async13835 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13835(filter_GT___$1,p__$1,ch__$1,meta13836){
return (new cljs.core.async.t_cljs$core$async13835(filter_GT___$1,p__$1,ch__$1,meta13836));
});

}

return (new cljs.core.async.t_cljs$core$async13835(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args13838 = [];
var len__6226__auto___13882 = arguments.length;
var i__6227__auto___13883 = (0);
while(true){
if((i__6227__auto___13883 < len__6226__auto___13882)){
args13838.push((arguments[i__6227__auto___13883]));

var G__13884 = (i__6227__auto___13883 + (1));
i__6227__auto___13883 = G__13884;
continue;
} else {
}
break;
}

var G__13840 = args13838.length;
switch (G__13840) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13838.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11673__auto___13886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___13886,out){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___13886,out){
return (function (state_13861){
var state_val_13862 = (state_13861[(1)]);
if((state_val_13862 === (7))){
var inst_13857 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13863_13887 = state_13861__$1;
(statearr_13863_13887[(2)] = inst_13857);

(statearr_13863_13887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (1))){
var state_13861__$1 = state_13861;
var statearr_13864_13888 = state_13861__$1;
(statearr_13864_13888[(2)] = null);

(statearr_13864_13888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (4))){
var inst_13843 = (state_13861[(7)]);
var inst_13843__$1 = (state_13861[(2)]);
var inst_13844 = (inst_13843__$1 == null);
var state_13861__$1 = (function (){var statearr_13865 = state_13861;
(statearr_13865[(7)] = inst_13843__$1);

return statearr_13865;
})();
if(cljs.core.truth_(inst_13844)){
var statearr_13866_13889 = state_13861__$1;
(statearr_13866_13889[(1)] = (5));

} else {
var statearr_13867_13890 = state_13861__$1;
(statearr_13867_13890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (6))){
var inst_13843 = (state_13861[(7)]);
var inst_13848 = p.call(null,inst_13843);
var state_13861__$1 = state_13861;
if(cljs.core.truth_(inst_13848)){
var statearr_13868_13891 = state_13861__$1;
(statearr_13868_13891[(1)] = (8));

} else {
var statearr_13869_13892 = state_13861__$1;
(statearr_13869_13892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (3))){
var inst_13859 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13861__$1,inst_13859);
} else {
if((state_val_13862 === (2))){
var state_13861__$1 = state_13861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13861__$1,(4),ch);
} else {
if((state_val_13862 === (11))){
var inst_13851 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13870_13893 = state_13861__$1;
(statearr_13870_13893[(2)] = inst_13851);

(statearr_13870_13893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (9))){
var state_13861__$1 = state_13861;
var statearr_13871_13894 = state_13861__$1;
(statearr_13871_13894[(2)] = null);

(statearr_13871_13894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (5))){
var inst_13846 = cljs.core.async.close_BANG_.call(null,out);
var state_13861__$1 = state_13861;
var statearr_13872_13895 = state_13861__$1;
(statearr_13872_13895[(2)] = inst_13846);

(statearr_13872_13895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (10))){
var inst_13854 = (state_13861[(2)]);
var state_13861__$1 = (function (){var statearr_13873 = state_13861;
(statearr_13873[(8)] = inst_13854);

return statearr_13873;
})();
var statearr_13874_13896 = state_13861__$1;
(statearr_13874_13896[(2)] = null);

(statearr_13874_13896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (8))){
var inst_13843 = (state_13861[(7)]);
var state_13861__$1 = state_13861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13861__$1,(11),out,inst_13843);
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
});})(c__11673__auto___13886,out))
;
return ((function (switch__11561__auto__,c__11673__auto___13886,out){
return (function() {
var cljs$core$async$state_machine__11562__auto__ = null;
var cljs$core$async$state_machine__11562__auto____0 = (function (){
var statearr_13878 = [null,null,null,null,null,null,null,null,null];
(statearr_13878[(0)] = cljs$core$async$state_machine__11562__auto__);

(statearr_13878[(1)] = (1));

return statearr_13878;
});
var cljs$core$async$state_machine__11562__auto____1 = (function (state_13861){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_13861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e13879){if((e13879 instanceof Object)){
var ex__11565__auto__ = e13879;
var statearr_13880_13897 = state_13861;
(statearr_13880_13897[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13898 = state_13861;
state_13861 = G__13898;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$state_machine__11562__auto__ = function(state_13861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11562__auto____1.call(this,state_13861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11562__auto____0;
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11562__auto____1;
return cljs$core$async$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___13886,out))
})();
var state__11675__auto__ = (function (){var statearr_13881 = f__11674__auto__.call(null);
(statearr_13881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___13886);

return statearr_13881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___13886,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args13899 = [];
var len__6226__auto___13902 = arguments.length;
var i__6227__auto___13903 = (0);
while(true){
if((i__6227__auto___13903 < len__6226__auto___13902)){
args13899.push((arguments[i__6227__auto___13903]));

var G__13904 = (i__6227__auto___13903 + (1));
i__6227__auto___13903 = G__13904;
continue;
} else {
}
break;
}

var G__13901 = args13899.length;
switch (G__13901) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13899.length)].join('')));

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
var c__11673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto__){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto__){
return (function (state_14071){
var state_val_14072 = (state_14071[(1)]);
if((state_val_14072 === (7))){
var inst_14067 = (state_14071[(2)]);
var state_14071__$1 = state_14071;
var statearr_14073_14114 = state_14071__$1;
(statearr_14073_14114[(2)] = inst_14067);

(statearr_14073_14114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (20))){
var inst_14037 = (state_14071[(7)]);
var inst_14048 = (state_14071[(2)]);
var inst_14049 = cljs.core.next.call(null,inst_14037);
var inst_14023 = inst_14049;
var inst_14024 = null;
var inst_14025 = (0);
var inst_14026 = (0);
var state_14071__$1 = (function (){var statearr_14074 = state_14071;
(statearr_14074[(8)] = inst_14023);

(statearr_14074[(9)] = inst_14026);

(statearr_14074[(10)] = inst_14024);

(statearr_14074[(11)] = inst_14048);

(statearr_14074[(12)] = inst_14025);

return statearr_14074;
})();
var statearr_14075_14115 = state_14071__$1;
(statearr_14075_14115[(2)] = null);

(statearr_14075_14115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (1))){
var state_14071__$1 = state_14071;
var statearr_14076_14116 = state_14071__$1;
(statearr_14076_14116[(2)] = null);

(statearr_14076_14116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (4))){
var inst_14012 = (state_14071[(13)]);
var inst_14012__$1 = (state_14071[(2)]);
var inst_14013 = (inst_14012__$1 == null);
var state_14071__$1 = (function (){var statearr_14077 = state_14071;
(statearr_14077[(13)] = inst_14012__$1);

return statearr_14077;
})();
if(cljs.core.truth_(inst_14013)){
var statearr_14078_14117 = state_14071__$1;
(statearr_14078_14117[(1)] = (5));

} else {
var statearr_14079_14118 = state_14071__$1;
(statearr_14079_14118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (15))){
var state_14071__$1 = state_14071;
var statearr_14083_14119 = state_14071__$1;
(statearr_14083_14119[(2)] = null);

(statearr_14083_14119[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (21))){
var state_14071__$1 = state_14071;
var statearr_14084_14120 = state_14071__$1;
(statearr_14084_14120[(2)] = null);

(statearr_14084_14120[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (13))){
var inst_14023 = (state_14071[(8)]);
var inst_14026 = (state_14071[(9)]);
var inst_14024 = (state_14071[(10)]);
var inst_14025 = (state_14071[(12)]);
var inst_14033 = (state_14071[(2)]);
var inst_14034 = (inst_14026 + (1));
var tmp14080 = inst_14023;
var tmp14081 = inst_14024;
var tmp14082 = inst_14025;
var inst_14023__$1 = tmp14080;
var inst_14024__$1 = tmp14081;
var inst_14025__$1 = tmp14082;
var inst_14026__$1 = inst_14034;
var state_14071__$1 = (function (){var statearr_14085 = state_14071;
(statearr_14085[(8)] = inst_14023__$1);

(statearr_14085[(9)] = inst_14026__$1);

(statearr_14085[(10)] = inst_14024__$1);

(statearr_14085[(12)] = inst_14025__$1);

(statearr_14085[(14)] = inst_14033);

return statearr_14085;
})();
var statearr_14086_14121 = state_14071__$1;
(statearr_14086_14121[(2)] = null);

(statearr_14086_14121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (22))){
var state_14071__$1 = state_14071;
var statearr_14087_14122 = state_14071__$1;
(statearr_14087_14122[(2)] = null);

(statearr_14087_14122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (6))){
var inst_14012 = (state_14071[(13)]);
var inst_14021 = f.call(null,inst_14012);
var inst_14022 = cljs.core.seq.call(null,inst_14021);
var inst_14023 = inst_14022;
var inst_14024 = null;
var inst_14025 = (0);
var inst_14026 = (0);
var state_14071__$1 = (function (){var statearr_14088 = state_14071;
(statearr_14088[(8)] = inst_14023);

(statearr_14088[(9)] = inst_14026);

(statearr_14088[(10)] = inst_14024);

(statearr_14088[(12)] = inst_14025);

return statearr_14088;
})();
var statearr_14089_14123 = state_14071__$1;
(statearr_14089_14123[(2)] = null);

(statearr_14089_14123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (17))){
var inst_14037 = (state_14071[(7)]);
var inst_14041 = cljs.core.chunk_first.call(null,inst_14037);
var inst_14042 = cljs.core.chunk_rest.call(null,inst_14037);
var inst_14043 = cljs.core.count.call(null,inst_14041);
var inst_14023 = inst_14042;
var inst_14024 = inst_14041;
var inst_14025 = inst_14043;
var inst_14026 = (0);
var state_14071__$1 = (function (){var statearr_14090 = state_14071;
(statearr_14090[(8)] = inst_14023);

(statearr_14090[(9)] = inst_14026);

(statearr_14090[(10)] = inst_14024);

(statearr_14090[(12)] = inst_14025);

return statearr_14090;
})();
var statearr_14091_14124 = state_14071__$1;
(statearr_14091_14124[(2)] = null);

(statearr_14091_14124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (3))){
var inst_14069 = (state_14071[(2)]);
var state_14071__$1 = state_14071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14071__$1,inst_14069);
} else {
if((state_val_14072 === (12))){
var inst_14057 = (state_14071[(2)]);
var state_14071__$1 = state_14071;
var statearr_14092_14125 = state_14071__$1;
(statearr_14092_14125[(2)] = inst_14057);

(statearr_14092_14125[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (2))){
var state_14071__$1 = state_14071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14071__$1,(4),in$);
} else {
if((state_val_14072 === (23))){
var inst_14065 = (state_14071[(2)]);
var state_14071__$1 = state_14071;
var statearr_14093_14126 = state_14071__$1;
(statearr_14093_14126[(2)] = inst_14065);

(statearr_14093_14126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (19))){
var inst_14052 = (state_14071[(2)]);
var state_14071__$1 = state_14071;
var statearr_14094_14127 = state_14071__$1;
(statearr_14094_14127[(2)] = inst_14052);

(statearr_14094_14127[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (11))){
var inst_14023 = (state_14071[(8)]);
var inst_14037 = (state_14071[(7)]);
var inst_14037__$1 = cljs.core.seq.call(null,inst_14023);
var state_14071__$1 = (function (){var statearr_14095 = state_14071;
(statearr_14095[(7)] = inst_14037__$1);

return statearr_14095;
})();
if(inst_14037__$1){
var statearr_14096_14128 = state_14071__$1;
(statearr_14096_14128[(1)] = (14));

} else {
var statearr_14097_14129 = state_14071__$1;
(statearr_14097_14129[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (9))){
var inst_14059 = (state_14071[(2)]);
var inst_14060 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14071__$1 = (function (){var statearr_14098 = state_14071;
(statearr_14098[(15)] = inst_14059);

return statearr_14098;
})();
if(cljs.core.truth_(inst_14060)){
var statearr_14099_14130 = state_14071__$1;
(statearr_14099_14130[(1)] = (21));

} else {
var statearr_14100_14131 = state_14071__$1;
(statearr_14100_14131[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (5))){
var inst_14015 = cljs.core.async.close_BANG_.call(null,out);
var state_14071__$1 = state_14071;
var statearr_14101_14132 = state_14071__$1;
(statearr_14101_14132[(2)] = inst_14015);

(statearr_14101_14132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (14))){
var inst_14037 = (state_14071[(7)]);
var inst_14039 = cljs.core.chunked_seq_QMARK_.call(null,inst_14037);
var state_14071__$1 = state_14071;
if(inst_14039){
var statearr_14102_14133 = state_14071__$1;
(statearr_14102_14133[(1)] = (17));

} else {
var statearr_14103_14134 = state_14071__$1;
(statearr_14103_14134[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (16))){
var inst_14055 = (state_14071[(2)]);
var state_14071__$1 = state_14071;
var statearr_14104_14135 = state_14071__$1;
(statearr_14104_14135[(2)] = inst_14055);

(statearr_14104_14135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14072 === (10))){
var inst_14026 = (state_14071[(9)]);
var inst_14024 = (state_14071[(10)]);
var inst_14031 = cljs.core._nth.call(null,inst_14024,inst_14026);
var state_14071__$1 = state_14071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14071__$1,(13),out,inst_14031);
} else {
if((state_val_14072 === (18))){
var inst_14037 = (state_14071[(7)]);
var inst_14046 = cljs.core.first.call(null,inst_14037);
var state_14071__$1 = state_14071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14071__$1,(20),out,inst_14046);
} else {
if((state_val_14072 === (8))){
var inst_14026 = (state_14071[(9)]);
var inst_14025 = (state_14071[(12)]);
var inst_14028 = (inst_14026 < inst_14025);
var inst_14029 = inst_14028;
var state_14071__$1 = state_14071;
if(cljs.core.truth_(inst_14029)){
var statearr_14105_14136 = state_14071__$1;
(statearr_14105_14136[(1)] = (10));

} else {
var statearr_14106_14137 = state_14071__$1;
(statearr_14106_14137[(1)] = (11));

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
});})(c__11673__auto__))
;
return ((function (switch__11561__auto__,c__11673__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11562__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11562__auto____0 = (function (){
var statearr_14110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14110[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11562__auto__);

(statearr_14110[(1)] = (1));

return statearr_14110;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11562__auto____1 = (function (state_14071){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_14071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e14111){if((e14111 instanceof Object)){
var ex__11565__auto__ = e14111;
var statearr_14112_14138 = state_14071;
(statearr_14112_14138[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14139 = state_14071;
state_14071 = G__14139;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11562__auto__ = function(state_14071){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11562__auto____1.call(this,state_14071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11562__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11562__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto__))
})();
var state__11675__auto__ = (function (){var statearr_14113 = f__11674__auto__.call(null);
(statearr_14113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto__);

return statearr_14113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto__))
);

return c__11673__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args14140 = [];
var len__6226__auto___14143 = arguments.length;
var i__6227__auto___14144 = (0);
while(true){
if((i__6227__auto___14144 < len__6226__auto___14143)){
args14140.push((arguments[i__6227__auto___14144]));

var G__14145 = (i__6227__auto___14144 + (1));
i__6227__auto___14144 = G__14145;
continue;
} else {
}
break;
}

var G__14142 = args14140.length;
switch (G__14142) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14140.length)].join('')));

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
var args14147 = [];
var len__6226__auto___14150 = arguments.length;
var i__6227__auto___14151 = (0);
while(true){
if((i__6227__auto___14151 < len__6226__auto___14150)){
args14147.push((arguments[i__6227__auto___14151]));

var G__14152 = (i__6227__auto___14151 + (1));
i__6227__auto___14151 = G__14152;
continue;
} else {
}
break;
}

var G__14149 = args14147.length;
switch (G__14149) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14147.length)].join('')));

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
var args14154 = [];
var len__6226__auto___14205 = arguments.length;
var i__6227__auto___14206 = (0);
while(true){
if((i__6227__auto___14206 < len__6226__auto___14205)){
args14154.push((arguments[i__6227__auto___14206]));

var G__14207 = (i__6227__auto___14206 + (1));
i__6227__auto___14206 = G__14207;
continue;
} else {
}
break;
}

var G__14156 = args14154.length;
switch (G__14156) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14154.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11673__auto___14209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___14209,out){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___14209,out){
return (function (state_14180){
var state_val_14181 = (state_14180[(1)]);
if((state_val_14181 === (7))){
var inst_14175 = (state_14180[(2)]);
var state_14180__$1 = state_14180;
var statearr_14182_14210 = state_14180__$1;
(statearr_14182_14210[(2)] = inst_14175);

(statearr_14182_14210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (1))){
var inst_14157 = null;
var state_14180__$1 = (function (){var statearr_14183 = state_14180;
(statearr_14183[(7)] = inst_14157);

return statearr_14183;
})();
var statearr_14184_14211 = state_14180__$1;
(statearr_14184_14211[(2)] = null);

(statearr_14184_14211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (4))){
var inst_14160 = (state_14180[(8)]);
var inst_14160__$1 = (state_14180[(2)]);
var inst_14161 = (inst_14160__$1 == null);
var inst_14162 = cljs.core.not.call(null,inst_14161);
var state_14180__$1 = (function (){var statearr_14185 = state_14180;
(statearr_14185[(8)] = inst_14160__$1);

return statearr_14185;
})();
if(inst_14162){
var statearr_14186_14212 = state_14180__$1;
(statearr_14186_14212[(1)] = (5));

} else {
var statearr_14187_14213 = state_14180__$1;
(statearr_14187_14213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (6))){
var state_14180__$1 = state_14180;
var statearr_14188_14214 = state_14180__$1;
(statearr_14188_14214[(2)] = null);

(statearr_14188_14214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (3))){
var inst_14177 = (state_14180[(2)]);
var inst_14178 = cljs.core.async.close_BANG_.call(null,out);
var state_14180__$1 = (function (){var statearr_14189 = state_14180;
(statearr_14189[(9)] = inst_14177);

return statearr_14189;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14180__$1,inst_14178);
} else {
if((state_val_14181 === (2))){
var state_14180__$1 = state_14180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14180__$1,(4),ch);
} else {
if((state_val_14181 === (11))){
var inst_14160 = (state_14180[(8)]);
var inst_14169 = (state_14180[(2)]);
var inst_14157 = inst_14160;
var state_14180__$1 = (function (){var statearr_14190 = state_14180;
(statearr_14190[(7)] = inst_14157);

(statearr_14190[(10)] = inst_14169);

return statearr_14190;
})();
var statearr_14191_14215 = state_14180__$1;
(statearr_14191_14215[(2)] = null);

(statearr_14191_14215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (9))){
var inst_14160 = (state_14180[(8)]);
var state_14180__$1 = state_14180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14180__$1,(11),out,inst_14160);
} else {
if((state_val_14181 === (5))){
var inst_14160 = (state_14180[(8)]);
var inst_14157 = (state_14180[(7)]);
var inst_14164 = cljs.core._EQ_.call(null,inst_14160,inst_14157);
var state_14180__$1 = state_14180;
if(inst_14164){
var statearr_14193_14216 = state_14180__$1;
(statearr_14193_14216[(1)] = (8));

} else {
var statearr_14194_14217 = state_14180__$1;
(statearr_14194_14217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (10))){
var inst_14172 = (state_14180[(2)]);
var state_14180__$1 = state_14180;
var statearr_14195_14218 = state_14180__$1;
(statearr_14195_14218[(2)] = inst_14172);

(statearr_14195_14218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (8))){
var inst_14157 = (state_14180[(7)]);
var tmp14192 = inst_14157;
var inst_14157__$1 = tmp14192;
var state_14180__$1 = (function (){var statearr_14196 = state_14180;
(statearr_14196[(7)] = inst_14157__$1);

return statearr_14196;
})();
var statearr_14197_14219 = state_14180__$1;
(statearr_14197_14219[(2)] = null);

(statearr_14197_14219[(1)] = (2));


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
});})(c__11673__auto___14209,out))
;
return ((function (switch__11561__auto__,c__11673__auto___14209,out){
return (function() {
var cljs$core$async$state_machine__11562__auto__ = null;
var cljs$core$async$state_machine__11562__auto____0 = (function (){
var statearr_14201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14201[(0)] = cljs$core$async$state_machine__11562__auto__);

(statearr_14201[(1)] = (1));

return statearr_14201;
});
var cljs$core$async$state_machine__11562__auto____1 = (function (state_14180){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_14180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e14202){if((e14202 instanceof Object)){
var ex__11565__auto__ = e14202;
var statearr_14203_14220 = state_14180;
(statearr_14203_14220[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14221 = state_14180;
state_14180 = G__14221;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$state_machine__11562__auto__ = function(state_14180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11562__auto____1.call(this,state_14180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11562__auto____0;
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11562__auto____1;
return cljs$core$async$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___14209,out))
})();
var state__11675__auto__ = (function (){var statearr_14204 = f__11674__auto__.call(null);
(statearr_14204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___14209);

return statearr_14204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___14209,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args14222 = [];
var len__6226__auto___14292 = arguments.length;
var i__6227__auto___14293 = (0);
while(true){
if((i__6227__auto___14293 < len__6226__auto___14292)){
args14222.push((arguments[i__6227__auto___14293]));

var G__14294 = (i__6227__auto___14293 + (1));
i__6227__auto___14293 = G__14294;
continue;
} else {
}
break;
}

var G__14224 = args14222.length;
switch (G__14224) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14222.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11673__auto___14296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___14296,out){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___14296,out){
return (function (state_14262){
var state_val_14263 = (state_14262[(1)]);
if((state_val_14263 === (7))){
var inst_14258 = (state_14262[(2)]);
var state_14262__$1 = state_14262;
var statearr_14264_14297 = state_14262__$1;
(statearr_14264_14297[(2)] = inst_14258);

(statearr_14264_14297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (1))){
var inst_14225 = (new Array(n));
var inst_14226 = inst_14225;
var inst_14227 = (0);
var state_14262__$1 = (function (){var statearr_14265 = state_14262;
(statearr_14265[(7)] = inst_14227);

(statearr_14265[(8)] = inst_14226);

return statearr_14265;
})();
var statearr_14266_14298 = state_14262__$1;
(statearr_14266_14298[(2)] = null);

(statearr_14266_14298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (4))){
var inst_14230 = (state_14262[(9)]);
var inst_14230__$1 = (state_14262[(2)]);
var inst_14231 = (inst_14230__$1 == null);
var inst_14232 = cljs.core.not.call(null,inst_14231);
var state_14262__$1 = (function (){var statearr_14267 = state_14262;
(statearr_14267[(9)] = inst_14230__$1);

return statearr_14267;
})();
if(inst_14232){
var statearr_14268_14299 = state_14262__$1;
(statearr_14268_14299[(1)] = (5));

} else {
var statearr_14269_14300 = state_14262__$1;
(statearr_14269_14300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (15))){
var inst_14252 = (state_14262[(2)]);
var state_14262__$1 = state_14262;
var statearr_14270_14301 = state_14262__$1;
(statearr_14270_14301[(2)] = inst_14252);

(statearr_14270_14301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (13))){
var state_14262__$1 = state_14262;
var statearr_14271_14302 = state_14262__$1;
(statearr_14271_14302[(2)] = null);

(statearr_14271_14302[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (6))){
var inst_14227 = (state_14262[(7)]);
var inst_14248 = (inst_14227 > (0));
var state_14262__$1 = state_14262;
if(cljs.core.truth_(inst_14248)){
var statearr_14272_14303 = state_14262__$1;
(statearr_14272_14303[(1)] = (12));

} else {
var statearr_14273_14304 = state_14262__$1;
(statearr_14273_14304[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (3))){
var inst_14260 = (state_14262[(2)]);
var state_14262__$1 = state_14262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14262__$1,inst_14260);
} else {
if((state_val_14263 === (12))){
var inst_14226 = (state_14262[(8)]);
var inst_14250 = cljs.core.vec.call(null,inst_14226);
var state_14262__$1 = state_14262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14262__$1,(15),out,inst_14250);
} else {
if((state_val_14263 === (2))){
var state_14262__$1 = state_14262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14262__$1,(4),ch);
} else {
if((state_val_14263 === (11))){
var inst_14242 = (state_14262[(2)]);
var inst_14243 = (new Array(n));
var inst_14226 = inst_14243;
var inst_14227 = (0);
var state_14262__$1 = (function (){var statearr_14274 = state_14262;
(statearr_14274[(7)] = inst_14227);

(statearr_14274[(8)] = inst_14226);

(statearr_14274[(10)] = inst_14242);

return statearr_14274;
})();
var statearr_14275_14305 = state_14262__$1;
(statearr_14275_14305[(2)] = null);

(statearr_14275_14305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (9))){
var inst_14226 = (state_14262[(8)]);
var inst_14240 = cljs.core.vec.call(null,inst_14226);
var state_14262__$1 = state_14262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14262__$1,(11),out,inst_14240);
} else {
if((state_val_14263 === (5))){
var inst_14235 = (state_14262[(11)]);
var inst_14230 = (state_14262[(9)]);
var inst_14227 = (state_14262[(7)]);
var inst_14226 = (state_14262[(8)]);
var inst_14234 = (inst_14226[inst_14227] = inst_14230);
var inst_14235__$1 = (inst_14227 + (1));
var inst_14236 = (inst_14235__$1 < n);
var state_14262__$1 = (function (){var statearr_14276 = state_14262;
(statearr_14276[(11)] = inst_14235__$1);

(statearr_14276[(12)] = inst_14234);

return statearr_14276;
})();
if(cljs.core.truth_(inst_14236)){
var statearr_14277_14306 = state_14262__$1;
(statearr_14277_14306[(1)] = (8));

} else {
var statearr_14278_14307 = state_14262__$1;
(statearr_14278_14307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (14))){
var inst_14255 = (state_14262[(2)]);
var inst_14256 = cljs.core.async.close_BANG_.call(null,out);
var state_14262__$1 = (function (){var statearr_14280 = state_14262;
(statearr_14280[(13)] = inst_14255);

return statearr_14280;
})();
var statearr_14281_14308 = state_14262__$1;
(statearr_14281_14308[(2)] = inst_14256);

(statearr_14281_14308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (10))){
var inst_14246 = (state_14262[(2)]);
var state_14262__$1 = state_14262;
var statearr_14282_14309 = state_14262__$1;
(statearr_14282_14309[(2)] = inst_14246);

(statearr_14282_14309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14263 === (8))){
var inst_14235 = (state_14262[(11)]);
var inst_14226 = (state_14262[(8)]);
var tmp14279 = inst_14226;
var inst_14226__$1 = tmp14279;
var inst_14227 = inst_14235;
var state_14262__$1 = (function (){var statearr_14283 = state_14262;
(statearr_14283[(7)] = inst_14227);

(statearr_14283[(8)] = inst_14226__$1);

return statearr_14283;
})();
var statearr_14284_14310 = state_14262__$1;
(statearr_14284_14310[(2)] = null);

(statearr_14284_14310[(1)] = (2));


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
});})(c__11673__auto___14296,out))
;
return ((function (switch__11561__auto__,c__11673__auto___14296,out){
return (function() {
var cljs$core$async$state_machine__11562__auto__ = null;
var cljs$core$async$state_machine__11562__auto____0 = (function (){
var statearr_14288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14288[(0)] = cljs$core$async$state_machine__11562__auto__);

(statearr_14288[(1)] = (1));

return statearr_14288;
});
var cljs$core$async$state_machine__11562__auto____1 = (function (state_14262){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_14262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e14289){if((e14289 instanceof Object)){
var ex__11565__auto__ = e14289;
var statearr_14290_14311 = state_14262;
(statearr_14290_14311[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14312 = state_14262;
state_14262 = G__14312;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$state_machine__11562__auto__ = function(state_14262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11562__auto____1.call(this,state_14262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11562__auto____0;
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11562__auto____1;
return cljs$core$async$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___14296,out))
})();
var state__11675__auto__ = (function (){var statearr_14291 = f__11674__auto__.call(null);
(statearr_14291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___14296);

return statearr_14291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___14296,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args14313 = [];
var len__6226__auto___14387 = arguments.length;
var i__6227__auto___14388 = (0);
while(true){
if((i__6227__auto___14388 < len__6226__auto___14387)){
args14313.push((arguments[i__6227__auto___14388]));

var G__14389 = (i__6227__auto___14388 + (1));
i__6227__auto___14388 = G__14389;
continue;
} else {
}
break;
}

var G__14315 = args14313.length;
switch (G__14315) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14313.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11673__auto___14391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11673__auto___14391,out){
return (function (){
var f__11674__auto__ = (function (){var switch__11561__auto__ = ((function (c__11673__auto___14391,out){
return (function (state_14357){
var state_val_14358 = (state_14357[(1)]);
if((state_val_14358 === (7))){
var inst_14353 = (state_14357[(2)]);
var state_14357__$1 = state_14357;
var statearr_14359_14392 = state_14357__$1;
(statearr_14359_14392[(2)] = inst_14353);

(statearr_14359_14392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (1))){
var inst_14316 = [];
var inst_14317 = inst_14316;
var inst_14318 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14357__$1 = (function (){var statearr_14360 = state_14357;
(statearr_14360[(7)] = inst_14317);

(statearr_14360[(8)] = inst_14318);

return statearr_14360;
})();
var statearr_14361_14393 = state_14357__$1;
(statearr_14361_14393[(2)] = null);

(statearr_14361_14393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (4))){
var inst_14321 = (state_14357[(9)]);
var inst_14321__$1 = (state_14357[(2)]);
var inst_14322 = (inst_14321__$1 == null);
var inst_14323 = cljs.core.not.call(null,inst_14322);
var state_14357__$1 = (function (){var statearr_14362 = state_14357;
(statearr_14362[(9)] = inst_14321__$1);

return statearr_14362;
})();
if(inst_14323){
var statearr_14363_14394 = state_14357__$1;
(statearr_14363_14394[(1)] = (5));

} else {
var statearr_14364_14395 = state_14357__$1;
(statearr_14364_14395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (15))){
var inst_14347 = (state_14357[(2)]);
var state_14357__$1 = state_14357;
var statearr_14365_14396 = state_14357__$1;
(statearr_14365_14396[(2)] = inst_14347);

(statearr_14365_14396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (13))){
var state_14357__$1 = state_14357;
var statearr_14366_14397 = state_14357__$1;
(statearr_14366_14397[(2)] = null);

(statearr_14366_14397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (6))){
var inst_14317 = (state_14357[(7)]);
var inst_14342 = inst_14317.length;
var inst_14343 = (inst_14342 > (0));
var state_14357__$1 = state_14357;
if(cljs.core.truth_(inst_14343)){
var statearr_14367_14398 = state_14357__$1;
(statearr_14367_14398[(1)] = (12));

} else {
var statearr_14368_14399 = state_14357__$1;
(statearr_14368_14399[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (3))){
var inst_14355 = (state_14357[(2)]);
var state_14357__$1 = state_14357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14357__$1,inst_14355);
} else {
if((state_val_14358 === (12))){
var inst_14317 = (state_14357[(7)]);
var inst_14345 = cljs.core.vec.call(null,inst_14317);
var state_14357__$1 = state_14357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14357__$1,(15),out,inst_14345);
} else {
if((state_val_14358 === (2))){
var state_14357__$1 = state_14357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14357__$1,(4),ch);
} else {
if((state_val_14358 === (11))){
var inst_14325 = (state_14357[(10)]);
var inst_14321 = (state_14357[(9)]);
var inst_14335 = (state_14357[(2)]);
var inst_14336 = [];
var inst_14337 = inst_14336.push(inst_14321);
var inst_14317 = inst_14336;
var inst_14318 = inst_14325;
var state_14357__$1 = (function (){var statearr_14369 = state_14357;
(statearr_14369[(11)] = inst_14337);

(statearr_14369[(7)] = inst_14317);

(statearr_14369[(8)] = inst_14318);

(statearr_14369[(12)] = inst_14335);

return statearr_14369;
})();
var statearr_14370_14400 = state_14357__$1;
(statearr_14370_14400[(2)] = null);

(statearr_14370_14400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (9))){
var inst_14317 = (state_14357[(7)]);
var inst_14333 = cljs.core.vec.call(null,inst_14317);
var state_14357__$1 = state_14357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14357__$1,(11),out,inst_14333);
} else {
if((state_val_14358 === (5))){
var inst_14325 = (state_14357[(10)]);
var inst_14321 = (state_14357[(9)]);
var inst_14318 = (state_14357[(8)]);
var inst_14325__$1 = f.call(null,inst_14321);
var inst_14326 = cljs.core._EQ_.call(null,inst_14325__$1,inst_14318);
var inst_14327 = cljs.core.keyword_identical_QMARK_.call(null,inst_14318,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14328 = (inst_14326) || (inst_14327);
var state_14357__$1 = (function (){var statearr_14371 = state_14357;
(statearr_14371[(10)] = inst_14325__$1);

return statearr_14371;
})();
if(cljs.core.truth_(inst_14328)){
var statearr_14372_14401 = state_14357__$1;
(statearr_14372_14401[(1)] = (8));

} else {
var statearr_14373_14402 = state_14357__$1;
(statearr_14373_14402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (14))){
var inst_14350 = (state_14357[(2)]);
var inst_14351 = cljs.core.async.close_BANG_.call(null,out);
var state_14357__$1 = (function (){var statearr_14375 = state_14357;
(statearr_14375[(13)] = inst_14350);

return statearr_14375;
})();
var statearr_14376_14403 = state_14357__$1;
(statearr_14376_14403[(2)] = inst_14351);

(statearr_14376_14403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (10))){
var inst_14340 = (state_14357[(2)]);
var state_14357__$1 = state_14357;
var statearr_14377_14404 = state_14357__$1;
(statearr_14377_14404[(2)] = inst_14340);

(statearr_14377_14404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14358 === (8))){
var inst_14325 = (state_14357[(10)]);
var inst_14321 = (state_14357[(9)]);
var inst_14317 = (state_14357[(7)]);
var inst_14330 = inst_14317.push(inst_14321);
var tmp14374 = inst_14317;
var inst_14317__$1 = tmp14374;
var inst_14318 = inst_14325;
var state_14357__$1 = (function (){var statearr_14378 = state_14357;
(statearr_14378[(14)] = inst_14330);

(statearr_14378[(7)] = inst_14317__$1);

(statearr_14378[(8)] = inst_14318);

return statearr_14378;
})();
var statearr_14379_14405 = state_14357__$1;
(statearr_14379_14405[(2)] = null);

(statearr_14379_14405[(1)] = (2));


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
});})(c__11673__auto___14391,out))
;
return ((function (switch__11561__auto__,c__11673__auto___14391,out){
return (function() {
var cljs$core$async$state_machine__11562__auto__ = null;
var cljs$core$async$state_machine__11562__auto____0 = (function (){
var statearr_14383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14383[(0)] = cljs$core$async$state_machine__11562__auto__);

(statearr_14383[(1)] = (1));

return statearr_14383;
});
var cljs$core$async$state_machine__11562__auto____1 = (function (state_14357){
while(true){
var ret_value__11563__auto__ = (function (){try{while(true){
var result__11564__auto__ = switch__11561__auto__.call(null,state_14357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11564__auto__;
}
break;
}
}catch (e14384){if((e14384 instanceof Object)){
var ex__11565__auto__ = e14384;
var statearr_14385_14406 = state_14357;
(statearr_14385_14406[(5)] = ex__11565__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11563__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14407 = state_14357;
state_14357 = G__14407;
continue;
} else {
return ret_value__11563__auto__;
}
break;
}
});
cljs$core$async$state_machine__11562__auto__ = function(state_14357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11562__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11562__auto____1.call(this,state_14357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11562__auto____0;
cljs$core$async$state_machine__11562__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11562__auto____1;
return cljs$core$async$state_machine__11562__auto__;
})()
;})(switch__11561__auto__,c__11673__auto___14391,out))
})();
var state__11675__auto__ = (function (){var statearr_14386 = f__11674__auto__.call(null);
(statearr_14386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11673__auto___14391);

return statearr_14386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11675__auto__);
});})(c__11673__auto___14391,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map