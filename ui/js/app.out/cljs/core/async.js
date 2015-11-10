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
if(typeof cljs.core.async.t_cljs$core$async9205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9205 = (function (fn_handler,f,meta9206){
this.fn_handler = fn_handler;
this.f = f;
this.meta9206 = meta9206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9207,meta9206__$1){
var self__ = this;
var _9207__$1 = this;
return (new cljs.core.async.t_cljs$core$async9205(self__.fn_handler,self__.f,meta9206__$1));
});

cljs.core.async.t_cljs$core$async9205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9207){
var self__ = this;
var _9207__$1 = this;
return self__.meta9206;
});

cljs.core.async.t_cljs$core$async9205.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta9206","meta9206",-671809565,null)], null);
});

cljs.core.async.t_cljs$core$async9205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9205";

cljs.core.async.t_cljs$core$async9205.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async9205");
});

cljs.core.async.__GT_t_cljs$core$async9205 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async9205(fn_handler__$1,f__$1,meta9206){
return (new cljs.core.async.t_cljs$core$async9205(fn_handler__$1,f__$1,meta9206));
});

}

return (new cljs.core.async.t_cljs$core$async9205(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args9210 = [];
var len__6226__auto___9213 = arguments.length;
var i__6227__auto___9214 = (0);
while(true){
if((i__6227__auto___9214 < len__6226__auto___9213)){
args9210.push((arguments[i__6227__auto___9214]));

var G__9215 = (i__6227__auto___9214 + (1));
i__6227__auto___9214 = G__9215;
continue;
} else {
}
break;
}

var G__9212 = args9210.length;
switch (G__9212) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9210.length)].join('')));

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
var args9217 = [];
var len__6226__auto___9220 = arguments.length;
var i__6227__auto___9221 = (0);
while(true){
if((i__6227__auto___9221 < len__6226__auto___9220)){
args9217.push((arguments[i__6227__auto___9221]));

var G__9222 = (i__6227__auto___9221 + (1));
i__6227__auto___9221 = G__9222;
continue;
} else {
}
break;
}

var G__9219 = args9217.length;
switch (G__9219) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9217.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9224 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9224);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9224,ret){
return (function (){
return fn1.call(null,val_9224);
});})(val_9224,ret))
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
var args9225 = [];
var len__6226__auto___9228 = arguments.length;
var i__6227__auto___9229 = (0);
while(true){
if((i__6227__auto___9229 < len__6226__auto___9228)){
args9225.push((arguments[i__6227__auto___9229]));

var G__9230 = (i__6227__auto___9229 + (1));
i__6227__auto___9229 = G__9230;
continue;
} else {
}
break;
}

var G__9227 = args9225.length;
switch (G__9227) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9225.length)].join('')));

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
var n__6071__auto___9232 = n;
var x_9233 = (0);
while(true){
if((x_9233 < n__6071__auto___9232)){
(a[x_9233] = (0));

var G__9234 = (x_9233 + (1));
x_9233 = G__9234;
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

var G__9235 = (i + (1));
i = G__9235;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9239 = (function (alt_flag,flag,meta9240){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9240 = meta9240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9241,meta9240__$1){
var self__ = this;
var _9241__$1 = this;
return (new cljs.core.async.t_cljs$core$async9239(self__.alt_flag,self__.flag,meta9240__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9241){
var self__ = this;
var _9241__$1 = this;
return self__.meta9240;
});})(flag))
;

cljs.core.async.t_cljs$core$async9239.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9239.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9240","meta9240",-1516262899,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9239";

cljs.core.async.t_cljs$core$async9239.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async9239");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9239 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9239(alt_flag__$1,flag__$1,meta9240){
return (new cljs.core.async.t_cljs$core$async9239(alt_flag__$1,flag__$1,meta9240));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9239(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9245 = (function (alt_handler,flag,cb,meta9246){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9246 = meta9246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9247,meta9246__$1){
var self__ = this;
var _9247__$1 = this;
return (new cljs.core.async.t_cljs$core$async9245(self__.alt_handler,self__.flag,self__.cb,meta9246__$1));
});

cljs.core.async.t_cljs$core$async9245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9247){
var self__ = this;
var _9247__$1 = this;
return self__.meta9246;
});

cljs.core.async.t_cljs$core$async9245.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9245.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9245.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9246","meta9246",1032832434,null)], null);
});

cljs.core.async.t_cljs$core$async9245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9245";

cljs.core.async.t_cljs$core$async9245.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async9245");
});

cljs.core.async.__GT_t_cljs$core$async9245 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9245(alt_handler__$1,flag__$1,cb__$1,meta9246){
return (new cljs.core.async.t_cljs$core$async9245(alt_handler__$1,flag__$1,cb__$1,meta9246));
});

}

return (new cljs.core.async.t_cljs$core$async9245(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9248_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9248_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9249_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9249_SHARP_,port], null));
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
var G__9250 = (i + (1));
i = G__9250;
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
var len__6226__auto___9256 = arguments.length;
var i__6227__auto___9257 = (0);
while(true){
if((i__6227__auto___9257 < len__6226__auto___9256)){
args__6233__auto__.push((arguments[i__6227__auto___9257]));

var G__9258 = (i__6227__auto___9257 + (1));
i__6227__auto___9257 = G__9258;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9253){
var map__9254 = p__9253;
var map__9254__$1 = ((((!((map__9254 == null)))?((((map__9254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9254):map__9254);
var opts = map__9254__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9251){
var G__9252 = cljs.core.first.call(null,seq9251);
var seq9251__$1 = cljs.core.next.call(null,seq9251);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9252,seq9251__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args9259 = [];
var len__6226__auto___9309 = arguments.length;
var i__6227__auto___9310 = (0);
while(true){
if((i__6227__auto___9310 < len__6226__auto___9309)){
args9259.push((arguments[i__6227__auto___9310]));

var G__9311 = (i__6227__auto___9310 + (1));
i__6227__auto___9310 = G__9311;
continue;
} else {
}
break;
}

var G__9261 = args9259.length;
switch (G__9261) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9259.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9157__auto___9313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___9313){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___9313){
return (function (state_9285){
var state_val_9286 = (state_9285[(1)]);
if((state_val_9286 === (7))){
var inst_9281 = (state_9285[(2)]);
var state_9285__$1 = state_9285;
var statearr_9287_9314 = state_9285__$1;
(statearr_9287_9314[(2)] = inst_9281);

(statearr_9287_9314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9286 === (1))){
var state_9285__$1 = state_9285;
var statearr_9288_9315 = state_9285__$1;
(statearr_9288_9315[(2)] = null);

(statearr_9288_9315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9286 === (4))){
var inst_9264 = (state_9285[(7)]);
var inst_9264__$1 = (state_9285[(2)]);
var inst_9265 = (inst_9264__$1 == null);
var state_9285__$1 = (function (){var statearr_9289 = state_9285;
(statearr_9289[(7)] = inst_9264__$1);

return statearr_9289;
})();
if(cljs.core.truth_(inst_9265)){
var statearr_9290_9316 = state_9285__$1;
(statearr_9290_9316[(1)] = (5));

} else {
var statearr_9291_9317 = state_9285__$1;
(statearr_9291_9317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9286 === (13))){
var state_9285__$1 = state_9285;
var statearr_9292_9318 = state_9285__$1;
(statearr_9292_9318[(2)] = null);

(statearr_9292_9318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9286 === (6))){
var inst_9264 = (state_9285[(7)]);
var state_9285__$1 = state_9285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9285__$1,(11),to,inst_9264);
} else {
if((state_val_9286 === (3))){
var inst_9283 = (state_9285[(2)]);
var state_9285__$1 = state_9285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9285__$1,inst_9283);
} else {
if((state_val_9286 === (12))){
var state_9285__$1 = state_9285;
var statearr_9293_9319 = state_9285__$1;
(statearr_9293_9319[(2)] = null);

(statearr_9293_9319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9286 === (2))){
var state_9285__$1 = state_9285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9285__$1,(4),from);
} else {
if((state_val_9286 === (11))){
var inst_9274 = (state_9285[(2)]);
var state_9285__$1 = state_9285;
if(cljs.core.truth_(inst_9274)){
var statearr_9294_9320 = state_9285__$1;
(statearr_9294_9320[(1)] = (12));

} else {
var statearr_9295_9321 = state_9285__$1;
(statearr_9295_9321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9286 === (9))){
var state_9285__$1 = state_9285;
var statearr_9296_9322 = state_9285__$1;
(statearr_9296_9322[(2)] = null);

(statearr_9296_9322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9286 === (5))){
var state_9285__$1 = state_9285;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9297_9323 = state_9285__$1;
(statearr_9297_9323[(1)] = (8));

} else {
var statearr_9298_9324 = state_9285__$1;
(statearr_9298_9324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9286 === (14))){
var inst_9279 = (state_9285[(2)]);
var state_9285__$1 = state_9285;
var statearr_9299_9325 = state_9285__$1;
(statearr_9299_9325[(2)] = inst_9279);

(statearr_9299_9325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9286 === (10))){
var inst_9271 = (state_9285[(2)]);
var state_9285__$1 = state_9285;
var statearr_9300_9326 = state_9285__$1;
(statearr_9300_9326[(2)] = inst_9271);

(statearr_9300_9326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9286 === (8))){
var inst_9268 = cljs.core.async.close_BANG_.call(null,to);
var state_9285__$1 = state_9285;
var statearr_9301_9327 = state_9285__$1;
(statearr_9301_9327[(2)] = inst_9268);

(statearr_9301_9327[(1)] = (10));


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
});})(c__9157__auto___9313))
;
return ((function (switch__9045__auto__,c__9157__auto___9313){
return (function() {
var cljs$core$async$state_machine__9046__auto__ = null;
var cljs$core$async$state_machine__9046__auto____0 = (function (){
var statearr_9305 = [null,null,null,null,null,null,null,null];
(statearr_9305[(0)] = cljs$core$async$state_machine__9046__auto__);

(statearr_9305[(1)] = (1));

return statearr_9305;
});
var cljs$core$async$state_machine__9046__auto____1 = (function (state_9285){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_9285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e9306){if((e9306 instanceof Object)){
var ex__9049__auto__ = e9306;
var statearr_9307_9328 = state_9285;
(statearr_9307_9328[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9329 = state_9285;
state_9285 = G__9329;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$state_machine__9046__auto__ = function(state_9285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9046__auto____1.call(this,state_9285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9046__auto____0;
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9046__auto____1;
return cljs$core$async$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___9313))
})();
var state__9159__auto__ = (function (){var statearr_9308 = f__9158__auto__.call(null);
(statearr_9308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___9313);

return statearr_9308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___9313))
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
return (function (p__9513){
var vec__9514 = p__9513;
var v = cljs.core.nth.call(null,vec__9514,(0),null);
var p = cljs.core.nth.call(null,vec__9514,(1),null);
var job = vec__9514;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9157__auto___9696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___9696,res,vec__9514,v,p,job,jobs,results){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___9696,res,vec__9514,v,p,job,jobs,results){
return (function (state_9519){
var state_val_9520 = (state_9519[(1)]);
if((state_val_9520 === (1))){
var state_9519__$1 = state_9519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9519__$1,(2),res,v);
} else {
if((state_val_9520 === (2))){
var inst_9516 = (state_9519[(2)]);
var inst_9517 = cljs.core.async.close_BANG_.call(null,res);
var state_9519__$1 = (function (){var statearr_9521 = state_9519;
(statearr_9521[(7)] = inst_9516);

return statearr_9521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9519__$1,inst_9517);
} else {
return null;
}
}
});})(c__9157__auto___9696,res,vec__9514,v,p,job,jobs,results))
;
return ((function (switch__9045__auto__,c__9157__auto___9696,res,vec__9514,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0 = (function (){
var statearr_9525 = [null,null,null,null,null,null,null,null];
(statearr_9525[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__);

(statearr_9525[(1)] = (1));

return statearr_9525;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1 = (function (state_9519){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_9519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e9526){if((e9526 instanceof Object)){
var ex__9049__auto__ = e9526;
var statearr_9527_9697 = state_9519;
(statearr_9527_9697[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9698 = state_9519;
state_9519 = G__9698;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__ = function(state_9519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1.call(this,state_9519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___9696,res,vec__9514,v,p,job,jobs,results))
})();
var state__9159__auto__ = (function (){var statearr_9528 = f__9158__auto__.call(null);
(statearr_9528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___9696);

return statearr_9528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___9696,res,vec__9514,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9529){
var vec__9530 = p__9529;
var v = cljs.core.nth.call(null,vec__9530,(0),null);
var p = cljs.core.nth.call(null,vec__9530,(1),null);
var job = vec__9530;
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
var n__6071__auto___9699 = n;
var __9700 = (0);
while(true){
if((__9700 < n__6071__auto___9699)){
var G__9531_9701 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9531_9701) {
case "compute":
var c__9157__auto___9703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9700,c__9157__auto___9703,G__9531_9701,n__6071__auto___9699,jobs,results,process,async){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (__9700,c__9157__auto___9703,G__9531_9701,n__6071__auto___9699,jobs,results,process,async){
return (function (state_9544){
var state_val_9545 = (state_9544[(1)]);
if((state_val_9545 === (1))){
var state_9544__$1 = state_9544;
var statearr_9546_9704 = state_9544__$1;
(statearr_9546_9704[(2)] = null);

(statearr_9546_9704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9545 === (2))){
var state_9544__$1 = state_9544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9544__$1,(4),jobs);
} else {
if((state_val_9545 === (3))){
var inst_9542 = (state_9544[(2)]);
var state_9544__$1 = state_9544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9544__$1,inst_9542);
} else {
if((state_val_9545 === (4))){
var inst_9534 = (state_9544[(2)]);
var inst_9535 = process.call(null,inst_9534);
var state_9544__$1 = state_9544;
if(cljs.core.truth_(inst_9535)){
var statearr_9547_9705 = state_9544__$1;
(statearr_9547_9705[(1)] = (5));

} else {
var statearr_9548_9706 = state_9544__$1;
(statearr_9548_9706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9545 === (5))){
var state_9544__$1 = state_9544;
var statearr_9549_9707 = state_9544__$1;
(statearr_9549_9707[(2)] = null);

(statearr_9549_9707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9545 === (6))){
var state_9544__$1 = state_9544;
var statearr_9550_9708 = state_9544__$1;
(statearr_9550_9708[(2)] = null);

(statearr_9550_9708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9545 === (7))){
var inst_9540 = (state_9544[(2)]);
var state_9544__$1 = state_9544;
var statearr_9551_9709 = state_9544__$1;
(statearr_9551_9709[(2)] = inst_9540);

(statearr_9551_9709[(1)] = (3));


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
});})(__9700,c__9157__auto___9703,G__9531_9701,n__6071__auto___9699,jobs,results,process,async))
;
return ((function (__9700,switch__9045__auto__,c__9157__auto___9703,G__9531_9701,n__6071__auto___9699,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0 = (function (){
var statearr_9555 = [null,null,null,null,null,null,null];
(statearr_9555[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__);

(statearr_9555[(1)] = (1));

return statearr_9555;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1 = (function (state_9544){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_9544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e9556){if((e9556 instanceof Object)){
var ex__9049__auto__ = e9556;
var statearr_9557_9710 = state_9544;
(statearr_9557_9710[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9711 = state_9544;
state_9544 = G__9711;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__ = function(state_9544){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1.call(this,state_9544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__;
})()
;})(__9700,switch__9045__auto__,c__9157__auto___9703,G__9531_9701,n__6071__auto___9699,jobs,results,process,async))
})();
var state__9159__auto__ = (function (){var statearr_9558 = f__9158__auto__.call(null);
(statearr_9558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___9703);

return statearr_9558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(__9700,c__9157__auto___9703,G__9531_9701,n__6071__auto___9699,jobs,results,process,async))
);


break;
case "async":
var c__9157__auto___9712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9700,c__9157__auto___9712,G__9531_9701,n__6071__auto___9699,jobs,results,process,async){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (__9700,c__9157__auto___9712,G__9531_9701,n__6071__auto___9699,jobs,results,process,async){
return (function (state_9571){
var state_val_9572 = (state_9571[(1)]);
if((state_val_9572 === (1))){
var state_9571__$1 = state_9571;
var statearr_9573_9713 = state_9571__$1;
(statearr_9573_9713[(2)] = null);

(statearr_9573_9713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9572 === (2))){
var state_9571__$1 = state_9571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9571__$1,(4),jobs);
} else {
if((state_val_9572 === (3))){
var inst_9569 = (state_9571[(2)]);
var state_9571__$1 = state_9571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9571__$1,inst_9569);
} else {
if((state_val_9572 === (4))){
var inst_9561 = (state_9571[(2)]);
var inst_9562 = async.call(null,inst_9561);
var state_9571__$1 = state_9571;
if(cljs.core.truth_(inst_9562)){
var statearr_9574_9714 = state_9571__$1;
(statearr_9574_9714[(1)] = (5));

} else {
var statearr_9575_9715 = state_9571__$1;
(statearr_9575_9715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9572 === (5))){
var state_9571__$1 = state_9571;
var statearr_9576_9716 = state_9571__$1;
(statearr_9576_9716[(2)] = null);

(statearr_9576_9716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9572 === (6))){
var state_9571__$1 = state_9571;
var statearr_9577_9717 = state_9571__$1;
(statearr_9577_9717[(2)] = null);

(statearr_9577_9717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9572 === (7))){
var inst_9567 = (state_9571[(2)]);
var state_9571__$1 = state_9571;
var statearr_9578_9718 = state_9571__$1;
(statearr_9578_9718[(2)] = inst_9567);

(statearr_9578_9718[(1)] = (3));


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
});})(__9700,c__9157__auto___9712,G__9531_9701,n__6071__auto___9699,jobs,results,process,async))
;
return ((function (__9700,switch__9045__auto__,c__9157__auto___9712,G__9531_9701,n__6071__auto___9699,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0 = (function (){
var statearr_9582 = [null,null,null,null,null,null,null];
(statearr_9582[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__);

(statearr_9582[(1)] = (1));

return statearr_9582;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1 = (function (state_9571){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_9571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e9583){if((e9583 instanceof Object)){
var ex__9049__auto__ = e9583;
var statearr_9584_9719 = state_9571;
(statearr_9584_9719[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9720 = state_9571;
state_9571 = G__9720;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__ = function(state_9571){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1.call(this,state_9571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__;
})()
;})(__9700,switch__9045__auto__,c__9157__auto___9712,G__9531_9701,n__6071__auto___9699,jobs,results,process,async))
})();
var state__9159__auto__ = (function (){var statearr_9585 = f__9158__auto__.call(null);
(statearr_9585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___9712);

return statearr_9585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(__9700,c__9157__auto___9712,G__9531_9701,n__6071__auto___9699,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9721 = (__9700 + (1));
__9700 = G__9721;
continue;
} else {
}
break;
}

var c__9157__auto___9722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___9722,jobs,results,process,async){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___9722,jobs,results,process,async){
return (function (state_9607){
var state_val_9608 = (state_9607[(1)]);
if((state_val_9608 === (1))){
var state_9607__$1 = state_9607;
var statearr_9609_9723 = state_9607__$1;
(statearr_9609_9723[(2)] = null);

(statearr_9609_9723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9608 === (2))){
var state_9607__$1 = state_9607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9607__$1,(4),from);
} else {
if((state_val_9608 === (3))){
var inst_9605 = (state_9607[(2)]);
var state_9607__$1 = state_9607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9607__$1,inst_9605);
} else {
if((state_val_9608 === (4))){
var inst_9588 = (state_9607[(7)]);
var inst_9588__$1 = (state_9607[(2)]);
var inst_9589 = (inst_9588__$1 == null);
var state_9607__$1 = (function (){var statearr_9610 = state_9607;
(statearr_9610[(7)] = inst_9588__$1);

return statearr_9610;
})();
if(cljs.core.truth_(inst_9589)){
var statearr_9611_9724 = state_9607__$1;
(statearr_9611_9724[(1)] = (5));

} else {
var statearr_9612_9725 = state_9607__$1;
(statearr_9612_9725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9608 === (5))){
var inst_9591 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9607__$1 = state_9607;
var statearr_9613_9726 = state_9607__$1;
(statearr_9613_9726[(2)] = inst_9591);

(statearr_9613_9726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9608 === (6))){
var inst_9588 = (state_9607[(7)]);
var inst_9593 = (state_9607[(8)]);
var inst_9593__$1 = cljs.core.async.chan.call(null,(1));
var inst_9594 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9595 = [inst_9588,inst_9593__$1];
var inst_9596 = (new cljs.core.PersistentVector(null,2,(5),inst_9594,inst_9595,null));
var state_9607__$1 = (function (){var statearr_9614 = state_9607;
(statearr_9614[(8)] = inst_9593__$1);

return statearr_9614;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9607__$1,(8),jobs,inst_9596);
} else {
if((state_val_9608 === (7))){
var inst_9603 = (state_9607[(2)]);
var state_9607__$1 = state_9607;
var statearr_9615_9727 = state_9607__$1;
(statearr_9615_9727[(2)] = inst_9603);

(statearr_9615_9727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9608 === (8))){
var inst_9593 = (state_9607[(8)]);
var inst_9598 = (state_9607[(2)]);
var state_9607__$1 = (function (){var statearr_9616 = state_9607;
(statearr_9616[(9)] = inst_9598);

return statearr_9616;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9607__$1,(9),results,inst_9593);
} else {
if((state_val_9608 === (9))){
var inst_9600 = (state_9607[(2)]);
var state_9607__$1 = (function (){var statearr_9617 = state_9607;
(statearr_9617[(10)] = inst_9600);

return statearr_9617;
})();
var statearr_9618_9728 = state_9607__$1;
(statearr_9618_9728[(2)] = null);

(statearr_9618_9728[(1)] = (2));


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
});})(c__9157__auto___9722,jobs,results,process,async))
;
return ((function (switch__9045__auto__,c__9157__auto___9722,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0 = (function (){
var statearr_9622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9622[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__);

(statearr_9622[(1)] = (1));

return statearr_9622;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1 = (function (state_9607){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_9607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e9623){if((e9623 instanceof Object)){
var ex__9049__auto__ = e9623;
var statearr_9624_9729 = state_9607;
(statearr_9624_9729[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9730 = state_9607;
state_9607 = G__9730;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__ = function(state_9607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1.call(this,state_9607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___9722,jobs,results,process,async))
})();
var state__9159__auto__ = (function (){var statearr_9625 = f__9158__auto__.call(null);
(statearr_9625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___9722);

return statearr_9625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___9722,jobs,results,process,async))
);


var c__9157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto__,jobs,results,process,async){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto__,jobs,results,process,async){
return (function (state_9663){
var state_val_9664 = (state_9663[(1)]);
if((state_val_9664 === (7))){
var inst_9659 = (state_9663[(2)]);
var state_9663__$1 = state_9663;
var statearr_9665_9731 = state_9663__$1;
(statearr_9665_9731[(2)] = inst_9659);

(statearr_9665_9731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (20))){
var state_9663__$1 = state_9663;
var statearr_9666_9732 = state_9663__$1;
(statearr_9666_9732[(2)] = null);

(statearr_9666_9732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (1))){
var state_9663__$1 = state_9663;
var statearr_9667_9733 = state_9663__$1;
(statearr_9667_9733[(2)] = null);

(statearr_9667_9733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (4))){
var inst_9628 = (state_9663[(7)]);
var inst_9628__$1 = (state_9663[(2)]);
var inst_9629 = (inst_9628__$1 == null);
var state_9663__$1 = (function (){var statearr_9668 = state_9663;
(statearr_9668[(7)] = inst_9628__$1);

return statearr_9668;
})();
if(cljs.core.truth_(inst_9629)){
var statearr_9669_9734 = state_9663__$1;
(statearr_9669_9734[(1)] = (5));

} else {
var statearr_9670_9735 = state_9663__$1;
(statearr_9670_9735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (15))){
var inst_9641 = (state_9663[(8)]);
var state_9663__$1 = state_9663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9663__$1,(18),to,inst_9641);
} else {
if((state_val_9664 === (21))){
var inst_9654 = (state_9663[(2)]);
var state_9663__$1 = state_9663;
var statearr_9671_9736 = state_9663__$1;
(statearr_9671_9736[(2)] = inst_9654);

(statearr_9671_9736[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (13))){
var inst_9656 = (state_9663[(2)]);
var state_9663__$1 = (function (){var statearr_9672 = state_9663;
(statearr_9672[(9)] = inst_9656);

return statearr_9672;
})();
var statearr_9673_9737 = state_9663__$1;
(statearr_9673_9737[(2)] = null);

(statearr_9673_9737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (6))){
var inst_9628 = (state_9663[(7)]);
var state_9663__$1 = state_9663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9663__$1,(11),inst_9628);
} else {
if((state_val_9664 === (17))){
var inst_9649 = (state_9663[(2)]);
var state_9663__$1 = state_9663;
if(cljs.core.truth_(inst_9649)){
var statearr_9674_9738 = state_9663__$1;
(statearr_9674_9738[(1)] = (19));

} else {
var statearr_9675_9739 = state_9663__$1;
(statearr_9675_9739[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (3))){
var inst_9661 = (state_9663[(2)]);
var state_9663__$1 = state_9663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9663__$1,inst_9661);
} else {
if((state_val_9664 === (12))){
var inst_9638 = (state_9663[(10)]);
var state_9663__$1 = state_9663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9663__$1,(14),inst_9638);
} else {
if((state_val_9664 === (2))){
var state_9663__$1 = state_9663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9663__$1,(4),results);
} else {
if((state_val_9664 === (19))){
var state_9663__$1 = state_9663;
var statearr_9676_9740 = state_9663__$1;
(statearr_9676_9740[(2)] = null);

(statearr_9676_9740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (11))){
var inst_9638 = (state_9663[(2)]);
var state_9663__$1 = (function (){var statearr_9677 = state_9663;
(statearr_9677[(10)] = inst_9638);

return statearr_9677;
})();
var statearr_9678_9741 = state_9663__$1;
(statearr_9678_9741[(2)] = null);

(statearr_9678_9741[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (9))){
var state_9663__$1 = state_9663;
var statearr_9679_9742 = state_9663__$1;
(statearr_9679_9742[(2)] = null);

(statearr_9679_9742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (5))){
var state_9663__$1 = state_9663;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9680_9743 = state_9663__$1;
(statearr_9680_9743[(1)] = (8));

} else {
var statearr_9681_9744 = state_9663__$1;
(statearr_9681_9744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (14))){
var inst_9641 = (state_9663[(8)]);
var inst_9643 = (state_9663[(11)]);
var inst_9641__$1 = (state_9663[(2)]);
var inst_9642 = (inst_9641__$1 == null);
var inst_9643__$1 = cljs.core.not.call(null,inst_9642);
var state_9663__$1 = (function (){var statearr_9682 = state_9663;
(statearr_9682[(8)] = inst_9641__$1);

(statearr_9682[(11)] = inst_9643__$1);

return statearr_9682;
})();
if(inst_9643__$1){
var statearr_9683_9745 = state_9663__$1;
(statearr_9683_9745[(1)] = (15));

} else {
var statearr_9684_9746 = state_9663__$1;
(statearr_9684_9746[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (16))){
var inst_9643 = (state_9663[(11)]);
var state_9663__$1 = state_9663;
var statearr_9685_9747 = state_9663__$1;
(statearr_9685_9747[(2)] = inst_9643);

(statearr_9685_9747[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (10))){
var inst_9635 = (state_9663[(2)]);
var state_9663__$1 = state_9663;
var statearr_9686_9748 = state_9663__$1;
(statearr_9686_9748[(2)] = inst_9635);

(statearr_9686_9748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (18))){
var inst_9646 = (state_9663[(2)]);
var state_9663__$1 = state_9663;
var statearr_9687_9749 = state_9663__$1;
(statearr_9687_9749[(2)] = inst_9646);

(statearr_9687_9749[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9664 === (8))){
var inst_9632 = cljs.core.async.close_BANG_.call(null,to);
var state_9663__$1 = state_9663;
var statearr_9688_9750 = state_9663__$1;
(statearr_9688_9750[(2)] = inst_9632);

(statearr_9688_9750[(1)] = (10));


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
});})(c__9157__auto__,jobs,results,process,async))
;
return ((function (switch__9045__auto__,c__9157__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0 = (function (){
var statearr_9692 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9692[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__);

(statearr_9692[(1)] = (1));

return statearr_9692;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1 = (function (state_9663){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_9663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e9693){if((e9693 instanceof Object)){
var ex__9049__auto__ = e9693;
var statearr_9694_9751 = state_9663;
(statearr_9694_9751[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9752 = state_9663;
state_9663 = G__9752;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__ = function(state_9663){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1.call(this,state_9663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9046__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto__,jobs,results,process,async))
})();
var state__9159__auto__ = (function (){var statearr_9695 = f__9158__auto__.call(null);
(statearr_9695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto__);

return statearr_9695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto__,jobs,results,process,async))
);

return c__9157__auto__;
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
var args9753 = [];
var len__6226__auto___9756 = arguments.length;
var i__6227__auto___9757 = (0);
while(true){
if((i__6227__auto___9757 < len__6226__auto___9756)){
args9753.push((arguments[i__6227__auto___9757]));

var G__9758 = (i__6227__auto___9757 + (1));
i__6227__auto___9757 = G__9758;
continue;
} else {
}
break;
}

var G__9755 = args9753.length;
switch (G__9755) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9753.length)].join('')));

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
var args9760 = [];
var len__6226__auto___9763 = arguments.length;
var i__6227__auto___9764 = (0);
while(true){
if((i__6227__auto___9764 < len__6226__auto___9763)){
args9760.push((arguments[i__6227__auto___9764]));

var G__9765 = (i__6227__auto___9764 + (1));
i__6227__auto___9764 = G__9765;
continue;
} else {
}
break;
}

var G__9762 = args9760.length;
switch (G__9762) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9760.length)].join('')));

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
var args9767 = [];
var len__6226__auto___9820 = arguments.length;
var i__6227__auto___9821 = (0);
while(true){
if((i__6227__auto___9821 < len__6226__auto___9820)){
args9767.push((arguments[i__6227__auto___9821]));

var G__9822 = (i__6227__auto___9821 + (1));
i__6227__auto___9821 = G__9822;
continue;
} else {
}
break;
}

var G__9769 = args9767.length;
switch (G__9769) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9767.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9157__auto___9824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___9824,tc,fc){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___9824,tc,fc){
return (function (state_9795){
var state_val_9796 = (state_9795[(1)]);
if((state_val_9796 === (7))){
var inst_9791 = (state_9795[(2)]);
var state_9795__$1 = state_9795;
var statearr_9797_9825 = state_9795__$1;
(statearr_9797_9825[(2)] = inst_9791);

(statearr_9797_9825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9796 === (1))){
var state_9795__$1 = state_9795;
var statearr_9798_9826 = state_9795__$1;
(statearr_9798_9826[(2)] = null);

(statearr_9798_9826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9796 === (4))){
var inst_9772 = (state_9795[(7)]);
var inst_9772__$1 = (state_9795[(2)]);
var inst_9773 = (inst_9772__$1 == null);
var state_9795__$1 = (function (){var statearr_9799 = state_9795;
(statearr_9799[(7)] = inst_9772__$1);

return statearr_9799;
})();
if(cljs.core.truth_(inst_9773)){
var statearr_9800_9827 = state_9795__$1;
(statearr_9800_9827[(1)] = (5));

} else {
var statearr_9801_9828 = state_9795__$1;
(statearr_9801_9828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9796 === (13))){
var state_9795__$1 = state_9795;
var statearr_9802_9829 = state_9795__$1;
(statearr_9802_9829[(2)] = null);

(statearr_9802_9829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9796 === (6))){
var inst_9772 = (state_9795[(7)]);
var inst_9778 = p.call(null,inst_9772);
var state_9795__$1 = state_9795;
if(cljs.core.truth_(inst_9778)){
var statearr_9803_9830 = state_9795__$1;
(statearr_9803_9830[(1)] = (9));

} else {
var statearr_9804_9831 = state_9795__$1;
(statearr_9804_9831[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9796 === (3))){
var inst_9793 = (state_9795[(2)]);
var state_9795__$1 = state_9795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9795__$1,inst_9793);
} else {
if((state_val_9796 === (12))){
var state_9795__$1 = state_9795;
var statearr_9805_9832 = state_9795__$1;
(statearr_9805_9832[(2)] = null);

(statearr_9805_9832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9796 === (2))){
var state_9795__$1 = state_9795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9795__$1,(4),ch);
} else {
if((state_val_9796 === (11))){
var inst_9772 = (state_9795[(7)]);
var inst_9782 = (state_9795[(2)]);
var state_9795__$1 = state_9795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9795__$1,(8),inst_9782,inst_9772);
} else {
if((state_val_9796 === (9))){
var state_9795__$1 = state_9795;
var statearr_9806_9833 = state_9795__$1;
(statearr_9806_9833[(2)] = tc);

(statearr_9806_9833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9796 === (5))){
var inst_9775 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9776 = cljs.core.async.close_BANG_.call(null,fc);
var state_9795__$1 = (function (){var statearr_9807 = state_9795;
(statearr_9807[(8)] = inst_9775);

return statearr_9807;
})();
var statearr_9808_9834 = state_9795__$1;
(statearr_9808_9834[(2)] = inst_9776);

(statearr_9808_9834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9796 === (14))){
var inst_9789 = (state_9795[(2)]);
var state_9795__$1 = state_9795;
var statearr_9809_9835 = state_9795__$1;
(statearr_9809_9835[(2)] = inst_9789);

(statearr_9809_9835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9796 === (10))){
var state_9795__$1 = state_9795;
var statearr_9810_9836 = state_9795__$1;
(statearr_9810_9836[(2)] = fc);

(statearr_9810_9836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9796 === (8))){
var inst_9784 = (state_9795[(2)]);
var state_9795__$1 = state_9795;
if(cljs.core.truth_(inst_9784)){
var statearr_9811_9837 = state_9795__$1;
(statearr_9811_9837[(1)] = (12));

} else {
var statearr_9812_9838 = state_9795__$1;
(statearr_9812_9838[(1)] = (13));

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
});})(c__9157__auto___9824,tc,fc))
;
return ((function (switch__9045__auto__,c__9157__auto___9824,tc,fc){
return (function() {
var cljs$core$async$state_machine__9046__auto__ = null;
var cljs$core$async$state_machine__9046__auto____0 = (function (){
var statearr_9816 = [null,null,null,null,null,null,null,null,null];
(statearr_9816[(0)] = cljs$core$async$state_machine__9046__auto__);

(statearr_9816[(1)] = (1));

return statearr_9816;
});
var cljs$core$async$state_machine__9046__auto____1 = (function (state_9795){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_9795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e9817){if((e9817 instanceof Object)){
var ex__9049__auto__ = e9817;
var statearr_9818_9839 = state_9795;
(statearr_9818_9839[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9840 = state_9795;
state_9795 = G__9840;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$state_machine__9046__auto__ = function(state_9795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9046__auto____1.call(this,state_9795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9046__auto____0;
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9046__auto____1;
return cljs$core$async$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___9824,tc,fc))
})();
var state__9159__auto__ = (function (){var statearr_9819 = f__9158__auto__.call(null);
(statearr_9819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___9824);

return statearr_9819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___9824,tc,fc))
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
var c__9157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto__){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto__){
return (function (state_9887){
var state_val_9888 = (state_9887[(1)]);
if((state_val_9888 === (1))){
var inst_9873 = init;
var state_9887__$1 = (function (){var statearr_9889 = state_9887;
(statearr_9889[(7)] = inst_9873);

return statearr_9889;
})();
var statearr_9890_9905 = state_9887__$1;
(statearr_9890_9905[(2)] = null);

(statearr_9890_9905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (2))){
var state_9887__$1 = state_9887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9887__$1,(4),ch);
} else {
if((state_val_9888 === (3))){
var inst_9885 = (state_9887[(2)]);
var state_9887__$1 = state_9887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9887__$1,inst_9885);
} else {
if((state_val_9888 === (4))){
var inst_9876 = (state_9887[(8)]);
var inst_9876__$1 = (state_9887[(2)]);
var inst_9877 = (inst_9876__$1 == null);
var state_9887__$1 = (function (){var statearr_9891 = state_9887;
(statearr_9891[(8)] = inst_9876__$1);

return statearr_9891;
})();
if(cljs.core.truth_(inst_9877)){
var statearr_9892_9906 = state_9887__$1;
(statearr_9892_9906[(1)] = (5));

} else {
var statearr_9893_9907 = state_9887__$1;
(statearr_9893_9907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (5))){
var inst_9873 = (state_9887[(7)]);
var state_9887__$1 = state_9887;
var statearr_9894_9908 = state_9887__$1;
(statearr_9894_9908[(2)] = inst_9873);

(statearr_9894_9908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (6))){
var inst_9876 = (state_9887[(8)]);
var inst_9873 = (state_9887[(7)]);
var inst_9880 = f.call(null,inst_9873,inst_9876);
var inst_9873__$1 = inst_9880;
var state_9887__$1 = (function (){var statearr_9895 = state_9887;
(statearr_9895[(7)] = inst_9873__$1);

return statearr_9895;
})();
var statearr_9896_9909 = state_9887__$1;
(statearr_9896_9909[(2)] = null);

(statearr_9896_9909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (7))){
var inst_9883 = (state_9887[(2)]);
var state_9887__$1 = state_9887;
var statearr_9897_9910 = state_9887__$1;
(statearr_9897_9910[(2)] = inst_9883);

(statearr_9897_9910[(1)] = (3));


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
});})(c__9157__auto__))
;
return ((function (switch__9045__auto__,c__9157__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9046__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9046__auto____0 = (function (){
var statearr_9901 = [null,null,null,null,null,null,null,null,null];
(statearr_9901[(0)] = cljs$core$async$reduce_$_state_machine__9046__auto__);

(statearr_9901[(1)] = (1));

return statearr_9901;
});
var cljs$core$async$reduce_$_state_machine__9046__auto____1 = (function (state_9887){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_9887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e9902){if((e9902 instanceof Object)){
var ex__9049__auto__ = e9902;
var statearr_9903_9911 = state_9887;
(statearr_9903_9911[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9912 = state_9887;
state_9887 = G__9912;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9046__auto__ = function(state_9887){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9046__auto____1.call(this,state_9887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9046__auto____0;
cljs$core$async$reduce_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9046__auto____1;
return cljs$core$async$reduce_$_state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto__))
})();
var state__9159__auto__ = (function (){var statearr_9904 = f__9158__auto__.call(null);
(statearr_9904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto__);

return statearr_9904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto__))
);

return c__9157__auto__;
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
var args9913 = [];
var len__6226__auto___9965 = arguments.length;
var i__6227__auto___9966 = (0);
while(true){
if((i__6227__auto___9966 < len__6226__auto___9965)){
args9913.push((arguments[i__6227__auto___9966]));

var G__9967 = (i__6227__auto___9966 + (1));
i__6227__auto___9966 = G__9967;
continue;
} else {
}
break;
}

var G__9915 = args9913.length;
switch (G__9915) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9913.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto__){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto__){
return (function (state_9940){
var state_val_9941 = (state_9940[(1)]);
if((state_val_9941 === (7))){
var inst_9922 = (state_9940[(2)]);
var state_9940__$1 = state_9940;
var statearr_9942_9969 = state_9940__$1;
(statearr_9942_9969[(2)] = inst_9922);

(statearr_9942_9969[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9941 === (1))){
var inst_9916 = cljs.core.seq.call(null,coll);
var inst_9917 = inst_9916;
var state_9940__$1 = (function (){var statearr_9943 = state_9940;
(statearr_9943[(7)] = inst_9917);

return statearr_9943;
})();
var statearr_9944_9970 = state_9940__$1;
(statearr_9944_9970[(2)] = null);

(statearr_9944_9970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9941 === (4))){
var inst_9917 = (state_9940[(7)]);
var inst_9920 = cljs.core.first.call(null,inst_9917);
var state_9940__$1 = state_9940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9940__$1,(7),ch,inst_9920);
} else {
if((state_val_9941 === (13))){
var inst_9934 = (state_9940[(2)]);
var state_9940__$1 = state_9940;
var statearr_9945_9971 = state_9940__$1;
(statearr_9945_9971[(2)] = inst_9934);

(statearr_9945_9971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9941 === (6))){
var inst_9925 = (state_9940[(2)]);
var state_9940__$1 = state_9940;
if(cljs.core.truth_(inst_9925)){
var statearr_9946_9972 = state_9940__$1;
(statearr_9946_9972[(1)] = (8));

} else {
var statearr_9947_9973 = state_9940__$1;
(statearr_9947_9973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9941 === (3))){
var inst_9938 = (state_9940[(2)]);
var state_9940__$1 = state_9940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9940__$1,inst_9938);
} else {
if((state_val_9941 === (12))){
var state_9940__$1 = state_9940;
var statearr_9948_9974 = state_9940__$1;
(statearr_9948_9974[(2)] = null);

(statearr_9948_9974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9941 === (2))){
var inst_9917 = (state_9940[(7)]);
var state_9940__$1 = state_9940;
if(cljs.core.truth_(inst_9917)){
var statearr_9949_9975 = state_9940__$1;
(statearr_9949_9975[(1)] = (4));

} else {
var statearr_9950_9976 = state_9940__$1;
(statearr_9950_9976[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9941 === (11))){
var inst_9931 = cljs.core.async.close_BANG_.call(null,ch);
var state_9940__$1 = state_9940;
var statearr_9951_9977 = state_9940__$1;
(statearr_9951_9977[(2)] = inst_9931);

(statearr_9951_9977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9941 === (9))){
var state_9940__$1 = state_9940;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9952_9978 = state_9940__$1;
(statearr_9952_9978[(1)] = (11));

} else {
var statearr_9953_9979 = state_9940__$1;
(statearr_9953_9979[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9941 === (5))){
var inst_9917 = (state_9940[(7)]);
var state_9940__$1 = state_9940;
var statearr_9954_9980 = state_9940__$1;
(statearr_9954_9980[(2)] = inst_9917);

(statearr_9954_9980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9941 === (10))){
var inst_9936 = (state_9940[(2)]);
var state_9940__$1 = state_9940;
var statearr_9955_9981 = state_9940__$1;
(statearr_9955_9981[(2)] = inst_9936);

(statearr_9955_9981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9941 === (8))){
var inst_9917 = (state_9940[(7)]);
var inst_9927 = cljs.core.next.call(null,inst_9917);
var inst_9917__$1 = inst_9927;
var state_9940__$1 = (function (){var statearr_9956 = state_9940;
(statearr_9956[(7)] = inst_9917__$1);

return statearr_9956;
})();
var statearr_9957_9982 = state_9940__$1;
(statearr_9957_9982[(2)] = null);

(statearr_9957_9982[(1)] = (2));


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
});})(c__9157__auto__))
;
return ((function (switch__9045__auto__,c__9157__auto__){
return (function() {
var cljs$core$async$state_machine__9046__auto__ = null;
var cljs$core$async$state_machine__9046__auto____0 = (function (){
var statearr_9961 = [null,null,null,null,null,null,null,null];
(statearr_9961[(0)] = cljs$core$async$state_machine__9046__auto__);

(statearr_9961[(1)] = (1));

return statearr_9961;
});
var cljs$core$async$state_machine__9046__auto____1 = (function (state_9940){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_9940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e9962){if((e9962 instanceof Object)){
var ex__9049__auto__ = e9962;
var statearr_9963_9983 = state_9940;
(statearr_9963_9983[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9984 = state_9940;
state_9940 = G__9984;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$state_machine__9046__auto__ = function(state_9940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9046__auto____1.call(this,state_9940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9046__auto____0;
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9046__auto____1;
return cljs$core$async$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto__))
})();
var state__9159__auto__ = (function (){var statearr_9964 = f__9158__auto__.call(null);
(statearr_9964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto__);

return statearr_9964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto__))
);

return c__9157__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async10206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10206 = (function (mult,ch,cs,meta10207){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10207 = meta10207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10208,meta10207__$1){
var self__ = this;
var _10208__$1 = this;
return (new cljs.core.async.t_cljs$core$async10206(self__.mult,self__.ch,self__.cs,meta10207__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10208){
var self__ = this;
var _10208__$1 = this;
return self__.meta10207;
});})(cs))
;

cljs.core.async.t_cljs$core$async10206.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10206.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10206.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async10206.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10206.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10206.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10206.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10207","meta10207",1159977443,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10206";

cljs.core.async.t_cljs$core$async10206.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async10206");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10206 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10206(mult__$1,ch__$1,cs__$1,meta10207){
return (new cljs.core.async.t_cljs$core$async10206(mult__$1,ch__$1,cs__$1,meta10207));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10206(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9157__auto___10427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___10427,cs,m,dchan,dctr,done){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___10427,cs,m,dchan,dctr,done){
return (function (state_10339){
var state_val_10340 = (state_10339[(1)]);
if((state_val_10340 === (7))){
var inst_10335 = (state_10339[(2)]);
var state_10339__$1 = state_10339;
var statearr_10341_10428 = state_10339__$1;
(statearr_10341_10428[(2)] = inst_10335);

(statearr_10341_10428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (20))){
var inst_10240 = (state_10339[(7)]);
var inst_10250 = cljs.core.first.call(null,inst_10240);
var inst_10251 = cljs.core.nth.call(null,inst_10250,(0),null);
var inst_10252 = cljs.core.nth.call(null,inst_10250,(1),null);
var state_10339__$1 = (function (){var statearr_10342 = state_10339;
(statearr_10342[(8)] = inst_10251);

return statearr_10342;
})();
if(cljs.core.truth_(inst_10252)){
var statearr_10343_10429 = state_10339__$1;
(statearr_10343_10429[(1)] = (22));

} else {
var statearr_10344_10430 = state_10339__$1;
(statearr_10344_10430[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (27))){
var inst_10287 = (state_10339[(9)]);
var inst_10280 = (state_10339[(10)]);
var inst_10282 = (state_10339[(11)]);
var inst_10211 = (state_10339[(12)]);
var inst_10287__$1 = cljs.core._nth.call(null,inst_10280,inst_10282);
var inst_10288 = cljs.core.async.put_BANG_.call(null,inst_10287__$1,inst_10211,done);
var state_10339__$1 = (function (){var statearr_10345 = state_10339;
(statearr_10345[(9)] = inst_10287__$1);

return statearr_10345;
})();
if(cljs.core.truth_(inst_10288)){
var statearr_10346_10431 = state_10339__$1;
(statearr_10346_10431[(1)] = (30));

} else {
var statearr_10347_10432 = state_10339__$1;
(statearr_10347_10432[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (1))){
var state_10339__$1 = state_10339;
var statearr_10348_10433 = state_10339__$1;
(statearr_10348_10433[(2)] = null);

(statearr_10348_10433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (24))){
var inst_10240 = (state_10339[(7)]);
var inst_10257 = (state_10339[(2)]);
var inst_10258 = cljs.core.next.call(null,inst_10240);
var inst_10220 = inst_10258;
var inst_10221 = null;
var inst_10222 = (0);
var inst_10223 = (0);
var state_10339__$1 = (function (){var statearr_10349 = state_10339;
(statearr_10349[(13)] = inst_10221);

(statearr_10349[(14)] = inst_10222);

(statearr_10349[(15)] = inst_10257);

(statearr_10349[(16)] = inst_10223);

(statearr_10349[(17)] = inst_10220);

return statearr_10349;
})();
var statearr_10350_10434 = state_10339__$1;
(statearr_10350_10434[(2)] = null);

(statearr_10350_10434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (39))){
var state_10339__$1 = state_10339;
var statearr_10354_10435 = state_10339__$1;
(statearr_10354_10435[(2)] = null);

(statearr_10354_10435[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (4))){
var inst_10211 = (state_10339[(12)]);
var inst_10211__$1 = (state_10339[(2)]);
var inst_10212 = (inst_10211__$1 == null);
var state_10339__$1 = (function (){var statearr_10355 = state_10339;
(statearr_10355[(12)] = inst_10211__$1);

return statearr_10355;
})();
if(cljs.core.truth_(inst_10212)){
var statearr_10356_10436 = state_10339__$1;
(statearr_10356_10436[(1)] = (5));

} else {
var statearr_10357_10437 = state_10339__$1;
(statearr_10357_10437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (15))){
var inst_10221 = (state_10339[(13)]);
var inst_10222 = (state_10339[(14)]);
var inst_10223 = (state_10339[(16)]);
var inst_10220 = (state_10339[(17)]);
var inst_10236 = (state_10339[(2)]);
var inst_10237 = (inst_10223 + (1));
var tmp10351 = inst_10221;
var tmp10352 = inst_10222;
var tmp10353 = inst_10220;
var inst_10220__$1 = tmp10353;
var inst_10221__$1 = tmp10351;
var inst_10222__$1 = tmp10352;
var inst_10223__$1 = inst_10237;
var state_10339__$1 = (function (){var statearr_10358 = state_10339;
(statearr_10358[(18)] = inst_10236);

(statearr_10358[(13)] = inst_10221__$1);

(statearr_10358[(14)] = inst_10222__$1);

(statearr_10358[(16)] = inst_10223__$1);

(statearr_10358[(17)] = inst_10220__$1);

return statearr_10358;
})();
var statearr_10359_10438 = state_10339__$1;
(statearr_10359_10438[(2)] = null);

(statearr_10359_10438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (21))){
var inst_10261 = (state_10339[(2)]);
var state_10339__$1 = state_10339;
var statearr_10363_10439 = state_10339__$1;
(statearr_10363_10439[(2)] = inst_10261);

(statearr_10363_10439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (31))){
var inst_10287 = (state_10339[(9)]);
var inst_10291 = done.call(null,null);
var inst_10292 = cljs.core.async.untap_STAR_.call(null,m,inst_10287);
var state_10339__$1 = (function (){var statearr_10364 = state_10339;
(statearr_10364[(19)] = inst_10291);

return statearr_10364;
})();
var statearr_10365_10440 = state_10339__$1;
(statearr_10365_10440[(2)] = inst_10292);

(statearr_10365_10440[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (32))){
var inst_10281 = (state_10339[(20)]);
var inst_10280 = (state_10339[(10)]);
var inst_10282 = (state_10339[(11)]);
var inst_10279 = (state_10339[(21)]);
var inst_10294 = (state_10339[(2)]);
var inst_10295 = (inst_10282 + (1));
var tmp10360 = inst_10281;
var tmp10361 = inst_10280;
var tmp10362 = inst_10279;
var inst_10279__$1 = tmp10362;
var inst_10280__$1 = tmp10361;
var inst_10281__$1 = tmp10360;
var inst_10282__$1 = inst_10295;
var state_10339__$1 = (function (){var statearr_10366 = state_10339;
(statearr_10366[(20)] = inst_10281__$1);

(statearr_10366[(10)] = inst_10280__$1);

(statearr_10366[(11)] = inst_10282__$1);

(statearr_10366[(22)] = inst_10294);

(statearr_10366[(21)] = inst_10279__$1);

return statearr_10366;
})();
var statearr_10367_10441 = state_10339__$1;
(statearr_10367_10441[(2)] = null);

(statearr_10367_10441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (40))){
var inst_10307 = (state_10339[(23)]);
var inst_10311 = done.call(null,null);
var inst_10312 = cljs.core.async.untap_STAR_.call(null,m,inst_10307);
var state_10339__$1 = (function (){var statearr_10368 = state_10339;
(statearr_10368[(24)] = inst_10311);

return statearr_10368;
})();
var statearr_10369_10442 = state_10339__$1;
(statearr_10369_10442[(2)] = inst_10312);

(statearr_10369_10442[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (33))){
var inst_10298 = (state_10339[(25)]);
var inst_10300 = cljs.core.chunked_seq_QMARK_.call(null,inst_10298);
var state_10339__$1 = state_10339;
if(inst_10300){
var statearr_10370_10443 = state_10339__$1;
(statearr_10370_10443[(1)] = (36));

} else {
var statearr_10371_10444 = state_10339__$1;
(statearr_10371_10444[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (13))){
var inst_10230 = (state_10339[(26)]);
var inst_10233 = cljs.core.async.close_BANG_.call(null,inst_10230);
var state_10339__$1 = state_10339;
var statearr_10372_10445 = state_10339__$1;
(statearr_10372_10445[(2)] = inst_10233);

(statearr_10372_10445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (22))){
var inst_10251 = (state_10339[(8)]);
var inst_10254 = cljs.core.async.close_BANG_.call(null,inst_10251);
var state_10339__$1 = state_10339;
var statearr_10373_10446 = state_10339__$1;
(statearr_10373_10446[(2)] = inst_10254);

(statearr_10373_10446[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (36))){
var inst_10298 = (state_10339[(25)]);
var inst_10302 = cljs.core.chunk_first.call(null,inst_10298);
var inst_10303 = cljs.core.chunk_rest.call(null,inst_10298);
var inst_10304 = cljs.core.count.call(null,inst_10302);
var inst_10279 = inst_10303;
var inst_10280 = inst_10302;
var inst_10281 = inst_10304;
var inst_10282 = (0);
var state_10339__$1 = (function (){var statearr_10374 = state_10339;
(statearr_10374[(20)] = inst_10281);

(statearr_10374[(10)] = inst_10280);

(statearr_10374[(11)] = inst_10282);

(statearr_10374[(21)] = inst_10279);

return statearr_10374;
})();
var statearr_10375_10447 = state_10339__$1;
(statearr_10375_10447[(2)] = null);

(statearr_10375_10447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (41))){
var inst_10298 = (state_10339[(25)]);
var inst_10314 = (state_10339[(2)]);
var inst_10315 = cljs.core.next.call(null,inst_10298);
var inst_10279 = inst_10315;
var inst_10280 = null;
var inst_10281 = (0);
var inst_10282 = (0);
var state_10339__$1 = (function (){var statearr_10376 = state_10339;
(statearr_10376[(20)] = inst_10281);

(statearr_10376[(10)] = inst_10280);

(statearr_10376[(11)] = inst_10282);

(statearr_10376[(27)] = inst_10314);

(statearr_10376[(21)] = inst_10279);

return statearr_10376;
})();
var statearr_10377_10448 = state_10339__$1;
(statearr_10377_10448[(2)] = null);

(statearr_10377_10448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (43))){
var state_10339__$1 = state_10339;
var statearr_10378_10449 = state_10339__$1;
(statearr_10378_10449[(2)] = null);

(statearr_10378_10449[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (29))){
var inst_10323 = (state_10339[(2)]);
var state_10339__$1 = state_10339;
var statearr_10379_10450 = state_10339__$1;
(statearr_10379_10450[(2)] = inst_10323);

(statearr_10379_10450[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (44))){
var inst_10332 = (state_10339[(2)]);
var state_10339__$1 = (function (){var statearr_10380 = state_10339;
(statearr_10380[(28)] = inst_10332);

return statearr_10380;
})();
var statearr_10381_10451 = state_10339__$1;
(statearr_10381_10451[(2)] = null);

(statearr_10381_10451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (6))){
var inst_10271 = (state_10339[(29)]);
var inst_10270 = cljs.core.deref.call(null,cs);
var inst_10271__$1 = cljs.core.keys.call(null,inst_10270);
var inst_10272 = cljs.core.count.call(null,inst_10271__$1);
var inst_10273 = cljs.core.reset_BANG_.call(null,dctr,inst_10272);
var inst_10278 = cljs.core.seq.call(null,inst_10271__$1);
var inst_10279 = inst_10278;
var inst_10280 = null;
var inst_10281 = (0);
var inst_10282 = (0);
var state_10339__$1 = (function (){var statearr_10382 = state_10339;
(statearr_10382[(20)] = inst_10281);

(statearr_10382[(30)] = inst_10273);

(statearr_10382[(29)] = inst_10271__$1);

(statearr_10382[(10)] = inst_10280);

(statearr_10382[(11)] = inst_10282);

(statearr_10382[(21)] = inst_10279);

return statearr_10382;
})();
var statearr_10383_10452 = state_10339__$1;
(statearr_10383_10452[(2)] = null);

(statearr_10383_10452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (28))){
var inst_10298 = (state_10339[(25)]);
var inst_10279 = (state_10339[(21)]);
var inst_10298__$1 = cljs.core.seq.call(null,inst_10279);
var state_10339__$1 = (function (){var statearr_10384 = state_10339;
(statearr_10384[(25)] = inst_10298__$1);

return statearr_10384;
})();
if(inst_10298__$1){
var statearr_10385_10453 = state_10339__$1;
(statearr_10385_10453[(1)] = (33));

} else {
var statearr_10386_10454 = state_10339__$1;
(statearr_10386_10454[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (25))){
var inst_10281 = (state_10339[(20)]);
var inst_10282 = (state_10339[(11)]);
var inst_10284 = (inst_10282 < inst_10281);
var inst_10285 = inst_10284;
var state_10339__$1 = state_10339;
if(cljs.core.truth_(inst_10285)){
var statearr_10387_10455 = state_10339__$1;
(statearr_10387_10455[(1)] = (27));

} else {
var statearr_10388_10456 = state_10339__$1;
(statearr_10388_10456[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (34))){
var state_10339__$1 = state_10339;
var statearr_10389_10457 = state_10339__$1;
(statearr_10389_10457[(2)] = null);

(statearr_10389_10457[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (17))){
var state_10339__$1 = state_10339;
var statearr_10390_10458 = state_10339__$1;
(statearr_10390_10458[(2)] = null);

(statearr_10390_10458[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (3))){
var inst_10337 = (state_10339[(2)]);
var state_10339__$1 = state_10339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10339__$1,inst_10337);
} else {
if((state_val_10340 === (12))){
var inst_10266 = (state_10339[(2)]);
var state_10339__$1 = state_10339;
var statearr_10391_10459 = state_10339__$1;
(statearr_10391_10459[(2)] = inst_10266);

(statearr_10391_10459[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (2))){
var state_10339__$1 = state_10339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10339__$1,(4),ch);
} else {
if((state_val_10340 === (23))){
var state_10339__$1 = state_10339;
var statearr_10392_10460 = state_10339__$1;
(statearr_10392_10460[(2)] = null);

(statearr_10392_10460[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (35))){
var inst_10321 = (state_10339[(2)]);
var state_10339__$1 = state_10339;
var statearr_10393_10461 = state_10339__$1;
(statearr_10393_10461[(2)] = inst_10321);

(statearr_10393_10461[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (19))){
var inst_10240 = (state_10339[(7)]);
var inst_10244 = cljs.core.chunk_first.call(null,inst_10240);
var inst_10245 = cljs.core.chunk_rest.call(null,inst_10240);
var inst_10246 = cljs.core.count.call(null,inst_10244);
var inst_10220 = inst_10245;
var inst_10221 = inst_10244;
var inst_10222 = inst_10246;
var inst_10223 = (0);
var state_10339__$1 = (function (){var statearr_10394 = state_10339;
(statearr_10394[(13)] = inst_10221);

(statearr_10394[(14)] = inst_10222);

(statearr_10394[(16)] = inst_10223);

(statearr_10394[(17)] = inst_10220);

return statearr_10394;
})();
var statearr_10395_10462 = state_10339__$1;
(statearr_10395_10462[(2)] = null);

(statearr_10395_10462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (11))){
var inst_10240 = (state_10339[(7)]);
var inst_10220 = (state_10339[(17)]);
var inst_10240__$1 = cljs.core.seq.call(null,inst_10220);
var state_10339__$1 = (function (){var statearr_10396 = state_10339;
(statearr_10396[(7)] = inst_10240__$1);

return statearr_10396;
})();
if(inst_10240__$1){
var statearr_10397_10463 = state_10339__$1;
(statearr_10397_10463[(1)] = (16));

} else {
var statearr_10398_10464 = state_10339__$1;
(statearr_10398_10464[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (9))){
var inst_10268 = (state_10339[(2)]);
var state_10339__$1 = state_10339;
var statearr_10399_10465 = state_10339__$1;
(statearr_10399_10465[(2)] = inst_10268);

(statearr_10399_10465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (5))){
var inst_10218 = cljs.core.deref.call(null,cs);
var inst_10219 = cljs.core.seq.call(null,inst_10218);
var inst_10220 = inst_10219;
var inst_10221 = null;
var inst_10222 = (0);
var inst_10223 = (0);
var state_10339__$1 = (function (){var statearr_10400 = state_10339;
(statearr_10400[(13)] = inst_10221);

(statearr_10400[(14)] = inst_10222);

(statearr_10400[(16)] = inst_10223);

(statearr_10400[(17)] = inst_10220);

return statearr_10400;
})();
var statearr_10401_10466 = state_10339__$1;
(statearr_10401_10466[(2)] = null);

(statearr_10401_10466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (14))){
var state_10339__$1 = state_10339;
var statearr_10402_10467 = state_10339__$1;
(statearr_10402_10467[(2)] = null);

(statearr_10402_10467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (45))){
var inst_10329 = (state_10339[(2)]);
var state_10339__$1 = state_10339;
var statearr_10403_10468 = state_10339__$1;
(statearr_10403_10468[(2)] = inst_10329);

(statearr_10403_10468[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (26))){
var inst_10271 = (state_10339[(29)]);
var inst_10325 = (state_10339[(2)]);
var inst_10326 = cljs.core.seq.call(null,inst_10271);
var state_10339__$1 = (function (){var statearr_10404 = state_10339;
(statearr_10404[(31)] = inst_10325);

return statearr_10404;
})();
if(inst_10326){
var statearr_10405_10469 = state_10339__$1;
(statearr_10405_10469[(1)] = (42));

} else {
var statearr_10406_10470 = state_10339__$1;
(statearr_10406_10470[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (16))){
var inst_10240 = (state_10339[(7)]);
var inst_10242 = cljs.core.chunked_seq_QMARK_.call(null,inst_10240);
var state_10339__$1 = state_10339;
if(inst_10242){
var statearr_10407_10471 = state_10339__$1;
(statearr_10407_10471[(1)] = (19));

} else {
var statearr_10408_10472 = state_10339__$1;
(statearr_10408_10472[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (38))){
var inst_10318 = (state_10339[(2)]);
var state_10339__$1 = state_10339;
var statearr_10409_10473 = state_10339__$1;
(statearr_10409_10473[(2)] = inst_10318);

(statearr_10409_10473[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (30))){
var state_10339__$1 = state_10339;
var statearr_10410_10474 = state_10339__$1;
(statearr_10410_10474[(2)] = null);

(statearr_10410_10474[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (10))){
var inst_10221 = (state_10339[(13)]);
var inst_10223 = (state_10339[(16)]);
var inst_10229 = cljs.core._nth.call(null,inst_10221,inst_10223);
var inst_10230 = cljs.core.nth.call(null,inst_10229,(0),null);
var inst_10231 = cljs.core.nth.call(null,inst_10229,(1),null);
var state_10339__$1 = (function (){var statearr_10411 = state_10339;
(statearr_10411[(26)] = inst_10230);

return statearr_10411;
})();
if(cljs.core.truth_(inst_10231)){
var statearr_10412_10475 = state_10339__$1;
(statearr_10412_10475[(1)] = (13));

} else {
var statearr_10413_10476 = state_10339__$1;
(statearr_10413_10476[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (18))){
var inst_10264 = (state_10339[(2)]);
var state_10339__$1 = state_10339;
var statearr_10414_10477 = state_10339__$1;
(statearr_10414_10477[(2)] = inst_10264);

(statearr_10414_10477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (42))){
var state_10339__$1 = state_10339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10339__$1,(45),dchan);
} else {
if((state_val_10340 === (37))){
var inst_10307 = (state_10339[(23)]);
var inst_10298 = (state_10339[(25)]);
var inst_10211 = (state_10339[(12)]);
var inst_10307__$1 = cljs.core.first.call(null,inst_10298);
var inst_10308 = cljs.core.async.put_BANG_.call(null,inst_10307__$1,inst_10211,done);
var state_10339__$1 = (function (){var statearr_10415 = state_10339;
(statearr_10415[(23)] = inst_10307__$1);

return statearr_10415;
})();
if(cljs.core.truth_(inst_10308)){
var statearr_10416_10478 = state_10339__$1;
(statearr_10416_10478[(1)] = (39));

} else {
var statearr_10417_10479 = state_10339__$1;
(statearr_10417_10479[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10340 === (8))){
var inst_10222 = (state_10339[(14)]);
var inst_10223 = (state_10339[(16)]);
var inst_10225 = (inst_10223 < inst_10222);
var inst_10226 = inst_10225;
var state_10339__$1 = state_10339;
if(cljs.core.truth_(inst_10226)){
var statearr_10418_10480 = state_10339__$1;
(statearr_10418_10480[(1)] = (10));

} else {
var statearr_10419_10481 = state_10339__$1;
(statearr_10419_10481[(1)] = (11));

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
});})(c__9157__auto___10427,cs,m,dchan,dctr,done))
;
return ((function (switch__9045__auto__,c__9157__auto___10427,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9046__auto__ = null;
var cljs$core$async$mult_$_state_machine__9046__auto____0 = (function (){
var statearr_10423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10423[(0)] = cljs$core$async$mult_$_state_machine__9046__auto__);

(statearr_10423[(1)] = (1));

return statearr_10423;
});
var cljs$core$async$mult_$_state_machine__9046__auto____1 = (function (state_10339){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_10339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e10424){if((e10424 instanceof Object)){
var ex__9049__auto__ = e10424;
var statearr_10425_10482 = state_10339;
(statearr_10425_10482[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10483 = state_10339;
state_10339 = G__10483;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9046__auto__ = function(state_10339){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9046__auto____1.call(this,state_10339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9046__auto____0;
cljs$core$async$mult_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9046__auto____1;
return cljs$core$async$mult_$_state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___10427,cs,m,dchan,dctr,done))
})();
var state__9159__auto__ = (function (){var statearr_10426 = f__9158__auto__.call(null);
(statearr_10426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___10427);

return statearr_10426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___10427,cs,m,dchan,dctr,done))
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
var args10484 = [];
var len__6226__auto___10487 = arguments.length;
var i__6227__auto___10488 = (0);
while(true){
if((i__6227__auto___10488 < len__6226__auto___10487)){
args10484.push((arguments[i__6227__auto___10488]));

var G__10489 = (i__6227__auto___10488 + (1));
i__6227__auto___10488 = G__10489;
continue;
} else {
}
break;
}

var G__10486 = args10484.length;
switch (G__10486) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10484.length)].join('')));

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
var len__6226__auto___10501 = arguments.length;
var i__6227__auto___10502 = (0);
while(true){
if((i__6227__auto___10502 < len__6226__auto___10501)){
args__6233__auto__.push((arguments[i__6227__auto___10502]));

var G__10503 = (i__6227__auto___10502 + (1));
i__6227__auto___10502 = G__10503;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((3) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6234__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10495){
var map__10496 = p__10495;
var map__10496__$1 = ((((!((map__10496 == null)))?((((map__10496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10496):map__10496);
var opts = map__10496__$1;
var statearr_10498_10504 = state;
(statearr_10498_10504[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__10496,map__10496__$1,opts){
return (function (val){
var statearr_10499_10505 = state;
(statearr_10499_10505[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10496,map__10496__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_10500_10506 = state;
(statearr_10500_10506[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10491){
var G__10492 = cljs.core.first.call(null,seq10491);
var seq10491__$1 = cljs.core.next.call(null,seq10491);
var G__10493 = cljs.core.first.call(null,seq10491__$1);
var seq10491__$2 = cljs.core.next.call(null,seq10491__$1);
var G__10494 = cljs.core.first.call(null,seq10491__$2);
var seq10491__$3 = cljs.core.next.call(null,seq10491__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10492,G__10493,G__10494,seq10491__$3);
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
if(typeof cljs.core.async.t_cljs$core$async10670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10670 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10671){
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
this.meta10671 = meta10671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10672,meta10671__$1){
var self__ = this;
var _10672__$1 = this;
return (new cljs.core.async.t_cljs$core$async10670(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10671__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10672){
var self__ = this;
var _10672__$1 = this;
return self__.meta10671;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10670.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10670.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10670.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10670.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10670.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10670.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10670.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async10670.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10671","meta10671",-76220257,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10670";

cljs.core.async.t_cljs$core$async10670.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async10670");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10670 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10670(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10671){
return (new cljs.core.async.t_cljs$core$async10670(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10671));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10670(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9157__auto___10833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___10833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___10833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10770){
var state_val_10771 = (state_10770[(1)]);
if((state_val_10771 === (7))){
var inst_10688 = (state_10770[(2)]);
var state_10770__$1 = state_10770;
var statearr_10772_10834 = state_10770__$1;
(statearr_10772_10834[(2)] = inst_10688);

(statearr_10772_10834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (20))){
var inst_10700 = (state_10770[(7)]);
var state_10770__$1 = state_10770;
var statearr_10773_10835 = state_10770__$1;
(statearr_10773_10835[(2)] = inst_10700);

(statearr_10773_10835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (27))){
var state_10770__$1 = state_10770;
var statearr_10774_10836 = state_10770__$1;
(statearr_10774_10836[(2)] = null);

(statearr_10774_10836[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (1))){
var inst_10676 = (state_10770[(8)]);
var inst_10676__$1 = calc_state.call(null);
var inst_10678 = (inst_10676__$1 == null);
var inst_10679 = cljs.core.not.call(null,inst_10678);
var state_10770__$1 = (function (){var statearr_10775 = state_10770;
(statearr_10775[(8)] = inst_10676__$1);

return statearr_10775;
})();
if(inst_10679){
var statearr_10776_10837 = state_10770__$1;
(statearr_10776_10837[(1)] = (2));

} else {
var statearr_10777_10838 = state_10770__$1;
(statearr_10777_10838[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (24))){
var inst_10723 = (state_10770[(9)]);
var inst_10744 = (state_10770[(10)]);
var inst_10730 = (state_10770[(11)]);
var inst_10744__$1 = inst_10723.call(null,inst_10730);
var state_10770__$1 = (function (){var statearr_10778 = state_10770;
(statearr_10778[(10)] = inst_10744__$1);

return statearr_10778;
})();
if(cljs.core.truth_(inst_10744__$1)){
var statearr_10779_10839 = state_10770__$1;
(statearr_10779_10839[(1)] = (29));

} else {
var statearr_10780_10840 = state_10770__$1;
(statearr_10780_10840[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (4))){
var inst_10691 = (state_10770[(2)]);
var state_10770__$1 = state_10770;
if(cljs.core.truth_(inst_10691)){
var statearr_10781_10841 = state_10770__$1;
(statearr_10781_10841[(1)] = (8));

} else {
var statearr_10782_10842 = state_10770__$1;
(statearr_10782_10842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (15))){
var inst_10717 = (state_10770[(2)]);
var state_10770__$1 = state_10770;
if(cljs.core.truth_(inst_10717)){
var statearr_10783_10843 = state_10770__$1;
(statearr_10783_10843[(1)] = (19));

} else {
var statearr_10784_10844 = state_10770__$1;
(statearr_10784_10844[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (21))){
var inst_10722 = (state_10770[(12)]);
var inst_10722__$1 = (state_10770[(2)]);
var inst_10723 = cljs.core.get.call(null,inst_10722__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10724 = cljs.core.get.call(null,inst_10722__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10725 = cljs.core.get.call(null,inst_10722__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10770__$1 = (function (){var statearr_10785 = state_10770;
(statearr_10785[(13)] = inst_10724);

(statearr_10785[(9)] = inst_10723);

(statearr_10785[(12)] = inst_10722__$1);

return statearr_10785;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10770__$1,(22),inst_10725);
} else {
if((state_val_10771 === (31))){
var inst_10752 = (state_10770[(2)]);
var state_10770__$1 = state_10770;
if(cljs.core.truth_(inst_10752)){
var statearr_10786_10845 = state_10770__$1;
(statearr_10786_10845[(1)] = (32));

} else {
var statearr_10787_10846 = state_10770__$1;
(statearr_10787_10846[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (32))){
var inst_10729 = (state_10770[(14)]);
var state_10770__$1 = state_10770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10770__$1,(35),out,inst_10729);
} else {
if((state_val_10771 === (33))){
var inst_10722 = (state_10770[(12)]);
var inst_10700 = inst_10722;
var state_10770__$1 = (function (){var statearr_10788 = state_10770;
(statearr_10788[(7)] = inst_10700);

return statearr_10788;
})();
var statearr_10789_10847 = state_10770__$1;
(statearr_10789_10847[(2)] = null);

(statearr_10789_10847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (13))){
var inst_10700 = (state_10770[(7)]);
var inst_10707 = inst_10700.cljs$lang$protocol_mask$partition0$;
var inst_10708 = (inst_10707 & (64));
var inst_10709 = inst_10700.cljs$core$ISeq$;
var inst_10710 = (inst_10708) || (inst_10709);
var state_10770__$1 = state_10770;
if(cljs.core.truth_(inst_10710)){
var statearr_10790_10848 = state_10770__$1;
(statearr_10790_10848[(1)] = (16));

} else {
var statearr_10791_10849 = state_10770__$1;
(statearr_10791_10849[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (22))){
var inst_10730 = (state_10770[(11)]);
var inst_10729 = (state_10770[(14)]);
var inst_10728 = (state_10770[(2)]);
var inst_10729__$1 = cljs.core.nth.call(null,inst_10728,(0),null);
var inst_10730__$1 = cljs.core.nth.call(null,inst_10728,(1),null);
var inst_10731 = (inst_10729__$1 == null);
var inst_10732 = cljs.core._EQ_.call(null,inst_10730__$1,change);
var inst_10733 = (inst_10731) || (inst_10732);
var state_10770__$1 = (function (){var statearr_10792 = state_10770;
(statearr_10792[(11)] = inst_10730__$1);

(statearr_10792[(14)] = inst_10729__$1);

return statearr_10792;
})();
if(cljs.core.truth_(inst_10733)){
var statearr_10793_10850 = state_10770__$1;
(statearr_10793_10850[(1)] = (23));

} else {
var statearr_10794_10851 = state_10770__$1;
(statearr_10794_10851[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (36))){
var inst_10722 = (state_10770[(12)]);
var inst_10700 = inst_10722;
var state_10770__$1 = (function (){var statearr_10795 = state_10770;
(statearr_10795[(7)] = inst_10700);

return statearr_10795;
})();
var statearr_10796_10852 = state_10770__$1;
(statearr_10796_10852[(2)] = null);

(statearr_10796_10852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (29))){
var inst_10744 = (state_10770[(10)]);
var state_10770__$1 = state_10770;
var statearr_10797_10853 = state_10770__$1;
(statearr_10797_10853[(2)] = inst_10744);

(statearr_10797_10853[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (6))){
var state_10770__$1 = state_10770;
var statearr_10798_10854 = state_10770__$1;
(statearr_10798_10854[(2)] = false);

(statearr_10798_10854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (28))){
var inst_10740 = (state_10770[(2)]);
var inst_10741 = calc_state.call(null);
var inst_10700 = inst_10741;
var state_10770__$1 = (function (){var statearr_10799 = state_10770;
(statearr_10799[(15)] = inst_10740);

(statearr_10799[(7)] = inst_10700);

return statearr_10799;
})();
var statearr_10800_10855 = state_10770__$1;
(statearr_10800_10855[(2)] = null);

(statearr_10800_10855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (25))){
var inst_10766 = (state_10770[(2)]);
var state_10770__$1 = state_10770;
var statearr_10801_10856 = state_10770__$1;
(statearr_10801_10856[(2)] = inst_10766);

(statearr_10801_10856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (34))){
var inst_10764 = (state_10770[(2)]);
var state_10770__$1 = state_10770;
var statearr_10802_10857 = state_10770__$1;
(statearr_10802_10857[(2)] = inst_10764);

(statearr_10802_10857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (17))){
var state_10770__$1 = state_10770;
var statearr_10803_10858 = state_10770__$1;
(statearr_10803_10858[(2)] = false);

(statearr_10803_10858[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (3))){
var state_10770__$1 = state_10770;
var statearr_10804_10859 = state_10770__$1;
(statearr_10804_10859[(2)] = false);

(statearr_10804_10859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (12))){
var inst_10768 = (state_10770[(2)]);
var state_10770__$1 = state_10770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10770__$1,inst_10768);
} else {
if((state_val_10771 === (2))){
var inst_10676 = (state_10770[(8)]);
var inst_10681 = inst_10676.cljs$lang$protocol_mask$partition0$;
var inst_10682 = (inst_10681 & (64));
var inst_10683 = inst_10676.cljs$core$ISeq$;
var inst_10684 = (inst_10682) || (inst_10683);
var state_10770__$1 = state_10770;
if(cljs.core.truth_(inst_10684)){
var statearr_10805_10860 = state_10770__$1;
(statearr_10805_10860[(1)] = (5));

} else {
var statearr_10806_10861 = state_10770__$1;
(statearr_10806_10861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (23))){
var inst_10729 = (state_10770[(14)]);
var inst_10735 = (inst_10729 == null);
var state_10770__$1 = state_10770;
if(cljs.core.truth_(inst_10735)){
var statearr_10807_10862 = state_10770__$1;
(statearr_10807_10862[(1)] = (26));

} else {
var statearr_10808_10863 = state_10770__$1;
(statearr_10808_10863[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (35))){
var inst_10755 = (state_10770[(2)]);
var state_10770__$1 = state_10770;
if(cljs.core.truth_(inst_10755)){
var statearr_10809_10864 = state_10770__$1;
(statearr_10809_10864[(1)] = (36));

} else {
var statearr_10810_10865 = state_10770__$1;
(statearr_10810_10865[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (19))){
var inst_10700 = (state_10770[(7)]);
var inst_10719 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10700);
var state_10770__$1 = state_10770;
var statearr_10811_10866 = state_10770__$1;
(statearr_10811_10866[(2)] = inst_10719);

(statearr_10811_10866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (11))){
var inst_10700 = (state_10770[(7)]);
var inst_10704 = (inst_10700 == null);
var inst_10705 = cljs.core.not.call(null,inst_10704);
var state_10770__$1 = state_10770;
if(inst_10705){
var statearr_10812_10867 = state_10770__$1;
(statearr_10812_10867[(1)] = (13));

} else {
var statearr_10813_10868 = state_10770__$1;
(statearr_10813_10868[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (9))){
var inst_10676 = (state_10770[(8)]);
var state_10770__$1 = state_10770;
var statearr_10814_10869 = state_10770__$1;
(statearr_10814_10869[(2)] = inst_10676);

(statearr_10814_10869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (5))){
var state_10770__$1 = state_10770;
var statearr_10815_10870 = state_10770__$1;
(statearr_10815_10870[(2)] = true);

(statearr_10815_10870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (14))){
var state_10770__$1 = state_10770;
var statearr_10816_10871 = state_10770__$1;
(statearr_10816_10871[(2)] = false);

(statearr_10816_10871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (26))){
var inst_10730 = (state_10770[(11)]);
var inst_10737 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10730);
var state_10770__$1 = state_10770;
var statearr_10817_10872 = state_10770__$1;
(statearr_10817_10872[(2)] = inst_10737);

(statearr_10817_10872[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (16))){
var state_10770__$1 = state_10770;
var statearr_10818_10873 = state_10770__$1;
(statearr_10818_10873[(2)] = true);

(statearr_10818_10873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (38))){
var inst_10760 = (state_10770[(2)]);
var state_10770__$1 = state_10770;
var statearr_10819_10874 = state_10770__$1;
(statearr_10819_10874[(2)] = inst_10760);

(statearr_10819_10874[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (30))){
var inst_10724 = (state_10770[(13)]);
var inst_10723 = (state_10770[(9)]);
var inst_10730 = (state_10770[(11)]);
var inst_10747 = cljs.core.empty_QMARK_.call(null,inst_10723);
var inst_10748 = inst_10724.call(null,inst_10730);
var inst_10749 = cljs.core.not.call(null,inst_10748);
var inst_10750 = (inst_10747) && (inst_10749);
var state_10770__$1 = state_10770;
var statearr_10820_10875 = state_10770__$1;
(statearr_10820_10875[(2)] = inst_10750);

(statearr_10820_10875[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (10))){
var inst_10676 = (state_10770[(8)]);
var inst_10696 = (state_10770[(2)]);
var inst_10697 = cljs.core.get.call(null,inst_10696,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10698 = cljs.core.get.call(null,inst_10696,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10699 = cljs.core.get.call(null,inst_10696,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10700 = inst_10676;
var state_10770__$1 = (function (){var statearr_10821 = state_10770;
(statearr_10821[(16)] = inst_10699);

(statearr_10821[(17)] = inst_10698);

(statearr_10821[(18)] = inst_10697);

(statearr_10821[(7)] = inst_10700);

return statearr_10821;
})();
var statearr_10822_10876 = state_10770__$1;
(statearr_10822_10876[(2)] = null);

(statearr_10822_10876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (18))){
var inst_10714 = (state_10770[(2)]);
var state_10770__$1 = state_10770;
var statearr_10823_10877 = state_10770__$1;
(statearr_10823_10877[(2)] = inst_10714);

(statearr_10823_10877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (37))){
var state_10770__$1 = state_10770;
var statearr_10824_10878 = state_10770__$1;
(statearr_10824_10878[(2)] = null);

(statearr_10824_10878[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10771 === (8))){
var inst_10676 = (state_10770[(8)]);
var inst_10693 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10676);
var state_10770__$1 = state_10770;
var statearr_10825_10879 = state_10770__$1;
(statearr_10825_10879[(2)] = inst_10693);

(statearr_10825_10879[(1)] = (10));


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
});})(c__9157__auto___10833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9045__auto__,c__9157__auto___10833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9046__auto__ = null;
var cljs$core$async$mix_$_state_machine__9046__auto____0 = (function (){
var statearr_10829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10829[(0)] = cljs$core$async$mix_$_state_machine__9046__auto__);

(statearr_10829[(1)] = (1));

return statearr_10829;
});
var cljs$core$async$mix_$_state_machine__9046__auto____1 = (function (state_10770){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_10770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e10830){if((e10830 instanceof Object)){
var ex__9049__auto__ = e10830;
var statearr_10831_10880 = state_10770;
(statearr_10831_10880[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10881 = state_10770;
state_10770 = G__10881;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9046__auto__ = function(state_10770){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9046__auto____1.call(this,state_10770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9046__auto____0;
cljs$core$async$mix_$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9046__auto____1;
return cljs$core$async$mix_$_state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___10833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9159__auto__ = (function (){var statearr_10832 = f__9158__auto__.call(null);
(statearr_10832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___10833);

return statearr_10832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___10833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args10882 = [];
var len__6226__auto___10885 = arguments.length;
var i__6227__auto___10886 = (0);
while(true){
if((i__6227__auto___10886 < len__6226__auto___10885)){
args10882.push((arguments[i__6227__auto___10886]));

var G__10887 = (i__6227__auto___10886 + (1));
i__6227__auto___10886 = G__10887;
continue;
} else {
}
break;
}

var G__10884 = args10882.length;
switch (G__10884) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10882.length)].join('')));

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
var args10890 = [];
var len__6226__auto___11015 = arguments.length;
var i__6227__auto___11016 = (0);
while(true){
if((i__6227__auto___11016 < len__6226__auto___11015)){
args10890.push((arguments[i__6227__auto___11016]));

var G__11017 = (i__6227__auto___11016 + (1));
i__6227__auto___11016 = G__11017;
continue;
} else {
}
break;
}

var G__10892 = args10890.length;
switch (G__10892) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10890.length)].join('')));

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
return (function (p1__10889_SHARP_){
if(cljs.core.truth_(p1__10889_SHARP_.call(null,topic))){
return p1__10889_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10889_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5168__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async10893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10893 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10894){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10894 = meta10894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10895,meta10894__$1){
var self__ = this;
var _10895__$1 = this;
return (new cljs.core.async.t_cljs$core$async10893(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10894__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10895){
var self__ = this;
var _10895__$1 = this;
return self__.meta10894;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10893.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10893.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10893.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async10893.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10893.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async10893.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10893.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10893.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10894","meta10894",-442826229,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10893.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10893";

cljs.core.async.t_cljs$core$async10893.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async10893");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async10893 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10893(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10894){
return (new cljs.core.async.t_cljs$core$async10893(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10894));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10893(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9157__auto___11019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___11019,mults,ensure_mult,p){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___11019,mults,ensure_mult,p){
return (function (state_10967){
var state_val_10968 = (state_10967[(1)]);
if((state_val_10968 === (7))){
var inst_10963 = (state_10967[(2)]);
var state_10967__$1 = state_10967;
var statearr_10969_11020 = state_10967__$1;
(statearr_10969_11020[(2)] = inst_10963);

(statearr_10969_11020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (20))){
var state_10967__$1 = state_10967;
var statearr_10970_11021 = state_10967__$1;
(statearr_10970_11021[(2)] = null);

(statearr_10970_11021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (1))){
var state_10967__$1 = state_10967;
var statearr_10971_11022 = state_10967__$1;
(statearr_10971_11022[(2)] = null);

(statearr_10971_11022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (24))){
var inst_10946 = (state_10967[(7)]);
var inst_10955 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10946);
var state_10967__$1 = state_10967;
var statearr_10972_11023 = state_10967__$1;
(statearr_10972_11023[(2)] = inst_10955);

(statearr_10972_11023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (4))){
var inst_10898 = (state_10967[(8)]);
var inst_10898__$1 = (state_10967[(2)]);
var inst_10899 = (inst_10898__$1 == null);
var state_10967__$1 = (function (){var statearr_10973 = state_10967;
(statearr_10973[(8)] = inst_10898__$1);

return statearr_10973;
})();
if(cljs.core.truth_(inst_10899)){
var statearr_10974_11024 = state_10967__$1;
(statearr_10974_11024[(1)] = (5));

} else {
var statearr_10975_11025 = state_10967__$1;
(statearr_10975_11025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (15))){
var inst_10940 = (state_10967[(2)]);
var state_10967__$1 = state_10967;
var statearr_10976_11026 = state_10967__$1;
(statearr_10976_11026[(2)] = inst_10940);

(statearr_10976_11026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (21))){
var inst_10960 = (state_10967[(2)]);
var state_10967__$1 = (function (){var statearr_10977 = state_10967;
(statearr_10977[(9)] = inst_10960);

return statearr_10977;
})();
var statearr_10978_11027 = state_10967__$1;
(statearr_10978_11027[(2)] = null);

(statearr_10978_11027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (13))){
var inst_10922 = (state_10967[(10)]);
var inst_10924 = cljs.core.chunked_seq_QMARK_.call(null,inst_10922);
var state_10967__$1 = state_10967;
if(inst_10924){
var statearr_10979_11028 = state_10967__$1;
(statearr_10979_11028[(1)] = (16));

} else {
var statearr_10980_11029 = state_10967__$1;
(statearr_10980_11029[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (22))){
var inst_10952 = (state_10967[(2)]);
var state_10967__$1 = state_10967;
if(cljs.core.truth_(inst_10952)){
var statearr_10981_11030 = state_10967__$1;
(statearr_10981_11030[(1)] = (23));

} else {
var statearr_10982_11031 = state_10967__$1;
(statearr_10982_11031[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (6))){
var inst_10946 = (state_10967[(7)]);
var inst_10948 = (state_10967[(11)]);
var inst_10898 = (state_10967[(8)]);
var inst_10946__$1 = topic_fn.call(null,inst_10898);
var inst_10947 = cljs.core.deref.call(null,mults);
var inst_10948__$1 = cljs.core.get.call(null,inst_10947,inst_10946__$1);
var state_10967__$1 = (function (){var statearr_10983 = state_10967;
(statearr_10983[(7)] = inst_10946__$1);

(statearr_10983[(11)] = inst_10948__$1);

return statearr_10983;
})();
if(cljs.core.truth_(inst_10948__$1)){
var statearr_10984_11032 = state_10967__$1;
(statearr_10984_11032[(1)] = (19));

} else {
var statearr_10985_11033 = state_10967__$1;
(statearr_10985_11033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (25))){
var inst_10957 = (state_10967[(2)]);
var state_10967__$1 = state_10967;
var statearr_10986_11034 = state_10967__$1;
(statearr_10986_11034[(2)] = inst_10957);

(statearr_10986_11034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (17))){
var inst_10922 = (state_10967[(10)]);
var inst_10931 = cljs.core.first.call(null,inst_10922);
var inst_10932 = cljs.core.async.muxch_STAR_.call(null,inst_10931);
var inst_10933 = cljs.core.async.close_BANG_.call(null,inst_10932);
var inst_10934 = cljs.core.next.call(null,inst_10922);
var inst_10908 = inst_10934;
var inst_10909 = null;
var inst_10910 = (0);
var inst_10911 = (0);
var state_10967__$1 = (function (){var statearr_10987 = state_10967;
(statearr_10987[(12)] = inst_10909);

(statearr_10987[(13)] = inst_10908);

(statearr_10987[(14)] = inst_10933);

(statearr_10987[(15)] = inst_10911);

(statearr_10987[(16)] = inst_10910);

return statearr_10987;
})();
var statearr_10988_11035 = state_10967__$1;
(statearr_10988_11035[(2)] = null);

(statearr_10988_11035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (3))){
var inst_10965 = (state_10967[(2)]);
var state_10967__$1 = state_10967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10967__$1,inst_10965);
} else {
if((state_val_10968 === (12))){
var inst_10942 = (state_10967[(2)]);
var state_10967__$1 = state_10967;
var statearr_10989_11036 = state_10967__$1;
(statearr_10989_11036[(2)] = inst_10942);

(statearr_10989_11036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (2))){
var state_10967__$1 = state_10967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10967__$1,(4),ch);
} else {
if((state_val_10968 === (23))){
var state_10967__$1 = state_10967;
var statearr_10990_11037 = state_10967__$1;
(statearr_10990_11037[(2)] = null);

(statearr_10990_11037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (19))){
var inst_10948 = (state_10967[(11)]);
var inst_10898 = (state_10967[(8)]);
var inst_10950 = cljs.core.async.muxch_STAR_.call(null,inst_10948);
var state_10967__$1 = state_10967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10967__$1,(22),inst_10950,inst_10898);
} else {
if((state_val_10968 === (11))){
var inst_10908 = (state_10967[(13)]);
var inst_10922 = (state_10967[(10)]);
var inst_10922__$1 = cljs.core.seq.call(null,inst_10908);
var state_10967__$1 = (function (){var statearr_10991 = state_10967;
(statearr_10991[(10)] = inst_10922__$1);

return statearr_10991;
})();
if(inst_10922__$1){
var statearr_10992_11038 = state_10967__$1;
(statearr_10992_11038[(1)] = (13));

} else {
var statearr_10993_11039 = state_10967__$1;
(statearr_10993_11039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (9))){
var inst_10944 = (state_10967[(2)]);
var state_10967__$1 = state_10967;
var statearr_10994_11040 = state_10967__$1;
(statearr_10994_11040[(2)] = inst_10944);

(statearr_10994_11040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (5))){
var inst_10905 = cljs.core.deref.call(null,mults);
var inst_10906 = cljs.core.vals.call(null,inst_10905);
var inst_10907 = cljs.core.seq.call(null,inst_10906);
var inst_10908 = inst_10907;
var inst_10909 = null;
var inst_10910 = (0);
var inst_10911 = (0);
var state_10967__$1 = (function (){var statearr_10995 = state_10967;
(statearr_10995[(12)] = inst_10909);

(statearr_10995[(13)] = inst_10908);

(statearr_10995[(15)] = inst_10911);

(statearr_10995[(16)] = inst_10910);

return statearr_10995;
})();
var statearr_10996_11041 = state_10967__$1;
(statearr_10996_11041[(2)] = null);

(statearr_10996_11041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (14))){
var state_10967__$1 = state_10967;
var statearr_11000_11042 = state_10967__$1;
(statearr_11000_11042[(2)] = null);

(statearr_11000_11042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (16))){
var inst_10922 = (state_10967[(10)]);
var inst_10926 = cljs.core.chunk_first.call(null,inst_10922);
var inst_10927 = cljs.core.chunk_rest.call(null,inst_10922);
var inst_10928 = cljs.core.count.call(null,inst_10926);
var inst_10908 = inst_10927;
var inst_10909 = inst_10926;
var inst_10910 = inst_10928;
var inst_10911 = (0);
var state_10967__$1 = (function (){var statearr_11001 = state_10967;
(statearr_11001[(12)] = inst_10909);

(statearr_11001[(13)] = inst_10908);

(statearr_11001[(15)] = inst_10911);

(statearr_11001[(16)] = inst_10910);

return statearr_11001;
})();
var statearr_11002_11043 = state_10967__$1;
(statearr_11002_11043[(2)] = null);

(statearr_11002_11043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (10))){
var inst_10909 = (state_10967[(12)]);
var inst_10908 = (state_10967[(13)]);
var inst_10911 = (state_10967[(15)]);
var inst_10910 = (state_10967[(16)]);
var inst_10916 = cljs.core._nth.call(null,inst_10909,inst_10911);
var inst_10917 = cljs.core.async.muxch_STAR_.call(null,inst_10916);
var inst_10918 = cljs.core.async.close_BANG_.call(null,inst_10917);
var inst_10919 = (inst_10911 + (1));
var tmp10997 = inst_10909;
var tmp10998 = inst_10908;
var tmp10999 = inst_10910;
var inst_10908__$1 = tmp10998;
var inst_10909__$1 = tmp10997;
var inst_10910__$1 = tmp10999;
var inst_10911__$1 = inst_10919;
var state_10967__$1 = (function (){var statearr_11003 = state_10967;
(statearr_11003[(12)] = inst_10909__$1);

(statearr_11003[(13)] = inst_10908__$1);

(statearr_11003[(17)] = inst_10918);

(statearr_11003[(15)] = inst_10911__$1);

(statearr_11003[(16)] = inst_10910__$1);

return statearr_11003;
})();
var statearr_11004_11044 = state_10967__$1;
(statearr_11004_11044[(2)] = null);

(statearr_11004_11044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (18))){
var inst_10937 = (state_10967[(2)]);
var state_10967__$1 = state_10967;
var statearr_11005_11045 = state_10967__$1;
(statearr_11005_11045[(2)] = inst_10937);

(statearr_11005_11045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10968 === (8))){
var inst_10911 = (state_10967[(15)]);
var inst_10910 = (state_10967[(16)]);
var inst_10913 = (inst_10911 < inst_10910);
var inst_10914 = inst_10913;
var state_10967__$1 = state_10967;
if(cljs.core.truth_(inst_10914)){
var statearr_11006_11046 = state_10967__$1;
(statearr_11006_11046[(1)] = (10));

} else {
var statearr_11007_11047 = state_10967__$1;
(statearr_11007_11047[(1)] = (11));

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
});})(c__9157__auto___11019,mults,ensure_mult,p))
;
return ((function (switch__9045__auto__,c__9157__auto___11019,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9046__auto__ = null;
var cljs$core$async$state_machine__9046__auto____0 = (function (){
var statearr_11011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11011[(0)] = cljs$core$async$state_machine__9046__auto__);

(statearr_11011[(1)] = (1));

return statearr_11011;
});
var cljs$core$async$state_machine__9046__auto____1 = (function (state_10967){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_10967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e11012){if((e11012 instanceof Object)){
var ex__9049__auto__ = e11012;
var statearr_11013_11048 = state_10967;
(statearr_11013_11048[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11049 = state_10967;
state_10967 = G__11049;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$state_machine__9046__auto__ = function(state_10967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9046__auto____1.call(this,state_10967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9046__auto____0;
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9046__auto____1;
return cljs$core$async$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___11019,mults,ensure_mult,p))
})();
var state__9159__auto__ = (function (){var statearr_11014 = f__9158__auto__.call(null);
(statearr_11014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___11019);

return statearr_11014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___11019,mults,ensure_mult,p))
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
var args11050 = [];
var len__6226__auto___11053 = arguments.length;
var i__6227__auto___11054 = (0);
while(true){
if((i__6227__auto___11054 < len__6226__auto___11053)){
args11050.push((arguments[i__6227__auto___11054]));

var G__11055 = (i__6227__auto___11054 + (1));
i__6227__auto___11054 = G__11055;
continue;
} else {
}
break;
}

var G__11052 = args11050.length;
switch (G__11052) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11050.length)].join('')));

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
var args11057 = [];
var len__6226__auto___11060 = arguments.length;
var i__6227__auto___11061 = (0);
while(true){
if((i__6227__auto___11061 < len__6226__auto___11060)){
args11057.push((arguments[i__6227__auto___11061]));

var G__11062 = (i__6227__auto___11061 + (1));
i__6227__auto___11061 = G__11062;
continue;
} else {
}
break;
}

var G__11059 = args11057.length;
switch (G__11059) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11057.length)].join('')));

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
var args11064 = [];
var len__6226__auto___11135 = arguments.length;
var i__6227__auto___11136 = (0);
while(true){
if((i__6227__auto___11136 < len__6226__auto___11135)){
args11064.push((arguments[i__6227__auto___11136]));

var G__11137 = (i__6227__auto___11136 + (1));
i__6227__auto___11136 = G__11137;
continue;
} else {
}
break;
}

var G__11066 = args11064.length;
switch (G__11066) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11064.length)].join('')));

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
var c__9157__auto___11139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___11139,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___11139,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11105){
var state_val_11106 = (state_11105[(1)]);
if((state_val_11106 === (7))){
var state_11105__$1 = state_11105;
var statearr_11107_11140 = state_11105__$1;
(statearr_11107_11140[(2)] = null);

(statearr_11107_11140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11106 === (1))){
var state_11105__$1 = state_11105;
var statearr_11108_11141 = state_11105__$1;
(statearr_11108_11141[(2)] = null);

(statearr_11108_11141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11106 === (4))){
var inst_11069 = (state_11105[(7)]);
var inst_11071 = (inst_11069 < cnt);
var state_11105__$1 = state_11105;
if(cljs.core.truth_(inst_11071)){
var statearr_11109_11142 = state_11105__$1;
(statearr_11109_11142[(1)] = (6));

} else {
var statearr_11110_11143 = state_11105__$1;
(statearr_11110_11143[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11106 === (15))){
var inst_11101 = (state_11105[(2)]);
var state_11105__$1 = state_11105;
var statearr_11111_11144 = state_11105__$1;
(statearr_11111_11144[(2)] = inst_11101);

(statearr_11111_11144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11106 === (13))){
var inst_11094 = cljs.core.async.close_BANG_.call(null,out);
var state_11105__$1 = state_11105;
var statearr_11112_11145 = state_11105__$1;
(statearr_11112_11145[(2)] = inst_11094);

(statearr_11112_11145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11106 === (6))){
var state_11105__$1 = state_11105;
var statearr_11113_11146 = state_11105__$1;
(statearr_11113_11146[(2)] = null);

(statearr_11113_11146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11106 === (3))){
var inst_11103 = (state_11105[(2)]);
var state_11105__$1 = state_11105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11105__$1,inst_11103);
} else {
if((state_val_11106 === (12))){
var inst_11091 = (state_11105[(8)]);
var inst_11091__$1 = (state_11105[(2)]);
var inst_11092 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11091__$1);
var state_11105__$1 = (function (){var statearr_11114 = state_11105;
(statearr_11114[(8)] = inst_11091__$1);

return statearr_11114;
})();
if(cljs.core.truth_(inst_11092)){
var statearr_11115_11147 = state_11105__$1;
(statearr_11115_11147[(1)] = (13));

} else {
var statearr_11116_11148 = state_11105__$1;
(statearr_11116_11148[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11106 === (2))){
var inst_11068 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11069 = (0);
var state_11105__$1 = (function (){var statearr_11117 = state_11105;
(statearr_11117[(7)] = inst_11069);

(statearr_11117[(9)] = inst_11068);

return statearr_11117;
})();
var statearr_11118_11149 = state_11105__$1;
(statearr_11118_11149[(2)] = null);

(statearr_11118_11149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11106 === (11))){
var inst_11069 = (state_11105[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11105,(10),Object,null,(9));
var inst_11078 = chs__$1.call(null,inst_11069);
var inst_11079 = done.call(null,inst_11069);
var inst_11080 = cljs.core.async.take_BANG_.call(null,inst_11078,inst_11079);
var state_11105__$1 = state_11105;
var statearr_11119_11150 = state_11105__$1;
(statearr_11119_11150[(2)] = inst_11080);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11105__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11106 === (9))){
var inst_11069 = (state_11105[(7)]);
var inst_11082 = (state_11105[(2)]);
var inst_11083 = (inst_11069 + (1));
var inst_11069__$1 = inst_11083;
var state_11105__$1 = (function (){var statearr_11120 = state_11105;
(statearr_11120[(10)] = inst_11082);

(statearr_11120[(7)] = inst_11069__$1);

return statearr_11120;
})();
var statearr_11121_11151 = state_11105__$1;
(statearr_11121_11151[(2)] = null);

(statearr_11121_11151[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11106 === (5))){
var inst_11089 = (state_11105[(2)]);
var state_11105__$1 = (function (){var statearr_11122 = state_11105;
(statearr_11122[(11)] = inst_11089);

return statearr_11122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11105__$1,(12),dchan);
} else {
if((state_val_11106 === (14))){
var inst_11091 = (state_11105[(8)]);
var inst_11096 = cljs.core.apply.call(null,f,inst_11091);
var state_11105__$1 = state_11105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11105__$1,(16),out,inst_11096);
} else {
if((state_val_11106 === (16))){
var inst_11098 = (state_11105[(2)]);
var state_11105__$1 = (function (){var statearr_11123 = state_11105;
(statearr_11123[(12)] = inst_11098);

return statearr_11123;
})();
var statearr_11124_11152 = state_11105__$1;
(statearr_11124_11152[(2)] = null);

(statearr_11124_11152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11106 === (10))){
var inst_11073 = (state_11105[(2)]);
var inst_11074 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11105__$1 = (function (){var statearr_11125 = state_11105;
(statearr_11125[(13)] = inst_11073);

return statearr_11125;
})();
var statearr_11126_11153 = state_11105__$1;
(statearr_11126_11153[(2)] = inst_11074);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11105__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11106 === (8))){
var inst_11087 = (state_11105[(2)]);
var state_11105__$1 = state_11105;
var statearr_11127_11154 = state_11105__$1;
(statearr_11127_11154[(2)] = inst_11087);

(statearr_11127_11154[(1)] = (5));


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
});})(c__9157__auto___11139,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9045__auto__,c__9157__auto___11139,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9046__auto__ = null;
var cljs$core$async$state_machine__9046__auto____0 = (function (){
var statearr_11131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11131[(0)] = cljs$core$async$state_machine__9046__auto__);

(statearr_11131[(1)] = (1));

return statearr_11131;
});
var cljs$core$async$state_machine__9046__auto____1 = (function (state_11105){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_11105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e11132){if((e11132 instanceof Object)){
var ex__9049__auto__ = e11132;
var statearr_11133_11155 = state_11105;
(statearr_11133_11155[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11156 = state_11105;
state_11105 = G__11156;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$state_machine__9046__auto__ = function(state_11105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9046__auto____1.call(this,state_11105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9046__auto____0;
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9046__auto____1;
return cljs$core$async$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___11139,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9159__auto__ = (function (){var statearr_11134 = f__9158__auto__.call(null);
(statearr_11134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___11139);

return statearr_11134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___11139,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args11158 = [];
var len__6226__auto___11214 = arguments.length;
var i__6227__auto___11215 = (0);
while(true){
if((i__6227__auto___11215 < len__6226__auto___11214)){
args11158.push((arguments[i__6227__auto___11215]));

var G__11216 = (i__6227__auto___11215 + (1));
i__6227__auto___11215 = G__11216;
continue;
} else {
}
break;
}

var G__11160 = args11158.length;
switch (G__11160) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11158.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9157__auto___11218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___11218,out){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___11218,out){
return (function (state_11190){
var state_val_11191 = (state_11190[(1)]);
if((state_val_11191 === (7))){
var inst_11169 = (state_11190[(7)]);
var inst_11170 = (state_11190[(8)]);
var inst_11169__$1 = (state_11190[(2)]);
var inst_11170__$1 = cljs.core.nth.call(null,inst_11169__$1,(0),null);
var inst_11171 = cljs.core.nth.call(null,inst_11169__$1,(1),null);
var inst_11172 = (inst_11170__$1 == null);
var state_11190__$1 = (function (){var statearr_11192 = state_11190;
(statearr_11192[(9)] = inst_11171);

(statearr_11192[(7)] = inst_11169__$1);

(statearr_11192[(8)] = inst_11170__$1);

return statearr_11192;
})();
if(cljs.core.truth_(inst_11172)){
var statearr_11193_11219 = state_11190__$1;
(statearr_11193_11219[(1)] = (8));

} else {
var statearr_11194_11220 = state_11190__$1;
(statearr_11194_11220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (1))){
var inst_11161 = cljs.core.vec.call(null,chs);
var inst_11162 = inst_11161;
var state_11190__$1 = (function (){var statearr_11195 = state_11190;
(statearr_11195[(10)] = inst_11162);

return statearr_11195;
})();
var statearr_11196_11221 = state_11190__$1;
(statearr_11196_11221[(2)] = null);

(statearr_11196_11221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (4))){
var inst_11162 = (state_11190[(10)]);
var state_11190__$1 = state_11190;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11190__$1,(7),inst_11162);
} else {
if((state_val_11191 === (6))){
var inst_11186 = (state_11190[(2)]);
var state_11190__$1 = state_11190;
var statearr_11197_11222 = state_11190__$1;
(statearr_11197_11222[(2)] = inst_11186);

(statearr_11197_11222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (3))){
var inst_11188 = (state_11190[(2)]);
var state_11190__$1 = state_11190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11190__$1,inst_11188);
} else {
if((state_val_11191 === (2))){
var inst_11162 = (state_11190[(10)]);
var inst_11164 = cljs.core.count.call(null,inst_11162);
var inst_11165 = (inst_11164 > (0));
var state_11190__$1 = state_11190;
if(cljs.core.truth_(inst_11165)){
var statearr_11199_11223 = state_11190__$1;
(statearr_11199_11223[(1)] = (4));

} else {
var statearr_11200_11224 = state_11190__$1;
(statearr_11200_11224[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (11))){
var inst_11162 = (state_11190[(10)]);
var inst_11179 = (state_11190[(2)]);
var tmp11198 = inst_11162;
var inst_11162__$1 = tmp11198;
var state_11190__$1 = (function (){var statearr_11201 = state_11190;
(statearr_11201[(11)] = inst_11179);

(statearr_11201[(10)] = inst_11162__$1);

return statearr_11201;
})();
var statearr_11202_11225 = state_11190__$1;
(statearr_11202_11225[(2)] = null);

(statearr_11202_11225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (9))){
var inst_11170 = (state_11190[(8)]);
var state_11190__$1 = state_11190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11190__$1,(11),out,inst_11170);
} else {
if((state_val_11191 === (5))){
var inst_11184 = cljs.core.async.close_BANG_.call(null,out);
var state_11190__$1 = state_11190;
var statearr_11203_11226 = state_11190__$1;
(statearr_11203_11226[(2)] = inst_11184);

(statearr_11203_11226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (10))){
var inst_11182 = (state_11190[(2)]);
var state_11190__$1 = state_11190;
var statearr_11204_11227 = state_11190__$1;
(statearr_11204_11227[(2)] = inst_11182);

(statearr_11204_11227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11191 === (8))){
var inst_11171 = (state_11190[(9)]);
var inst_11169 = (state_11190[(7)]);
var inst_11162 = (state_11190[(10)]);
var inst_11170 = (state_11190[(8)]);
var inst_11174 = (function (){var cs = inst_11162;
var vec__11167 = inst_11169;
var v = inst_11170;
var c = inst_11171;
return ((function (cs,vec__11167,v,c,inst_11171,inst_11169,inst_11162,inst_11170,state_val_11191,c__9157__auto___11218,out){
return (function (p1__11157_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11157_SHARP_);
});
;})(cs,vec__11167,v,c,inst_11171,inst_11169,inst_11162,inst_11170,state_val_11191,c__9157__auto___11218,out))
})();
var inst_11175 = cljs.core.filterv.call(null,inst_11174,inst_11162);
var inst_11162__$1 = inst_11175;
var state_11190__$1 = (function (){var statearr_11205 = state_11190;
(statearr_11205[(10)] = inst_11162__$1);

return statearr_11205;
})();
var statearr_11206_11228 = state_11190__$1;
(statearr_11206_11228[(2)] = null);

(statearr_11206_11228[(1)] = (2));


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
});})(c__9157__auto___11218,out))
;
return ((function (switch__9045__auto__,c__9157__auto___11218,out){
return (function() {
var cljs$core$async$state_machine__9046__auto__ = null;
var cljs$core$async$state_machine__9046__auto____0 = (function (){
var statearr_11210 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11210[(0)] = cljs$core$async$state_machine__9046__auto__);

(statearr_11210[(1)] = (1));

return statearr_11210;
});
var cljs$core$async$state_machine__9046__auto____1 = (function (state_11190){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_11190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e11211){if((e11211 instanceof Object)){
var ex__9049__auto__ = e11211;
var statearr_11212_11229 = state_11190;
(statearr_11212_11229[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11230 = state_11190;
state_11190 = G__11230;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$state_machine__9046__auto__ = function(state_11190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9046__auto____1.call(this,state_11190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9046__auto____0;
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9046__auto____1;
return cljs$core$async$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___11218,out))
})();
var state__9159__auto__ = (function (){var statearr_11213 = f__9158__auto__.call(null);
(statearr_11213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___11218);

return statearr_11213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___11218,out))
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
var args11231 = [];
var len__6226__auto___11280 = arguments.length;
var i__6227__auto___11281 = (0);
while(true){
if((i__6227__auto___11281 < len__6226__auto___11280)){
args11231.push((arguments[i__6227__auto___11281]));

var G__11282 = (i__6227__auto___11281 + (1));
i__6227__auto___11281 = G__11282;
continue;
} else {
}
break;
}

var G__11233 = args11231.length;
switch (G__11233) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11231.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9157__auto___11284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___11284,out){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___11284,out){
return (function (state_11257){
var state_val_11258 = (state_11257[(1)]);
if((state_val_11258 === (7))){
var inst_11239 = (state_11257[(7)]);
var inst_11239__$1 = (state_11257[(2)]);
var inst_11240 = (inst_11239__$1 == null);
var inst_11241 = cljs.core.not.call(null,inst_11240);
var state_11257__$1 = (function (){var statearr_11259 = state_11257;
(statearr_11259[(7)] = inst_11239__$1);

return statearr_11259;
})();
if(inst_11241){
var statearr_11260_11285 = state_11257__$1;
(statearr_11260_11285[(1)] = (8));

} else {
var statearr_11261_11286 = state_11257__$1;
(statearr_11261_11286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (1))){
var inst_11234 = (0);
var state_11257__$1 = (function (){var statearr_11262 = state_11257;
(statearr_11262[(8)] = inst_11234);

return statearr_11262;
})();
var statearr_11263_11287 = state_11257__$1;
(statearr_11263_11287[(2)] = null);

(statearr_11263_11287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (4))){
var state_11257__$1 = state_11257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11257__$1,(7),ch);
} else {
if((state_val_11258 === (6))){
var inst_11252 = (state_11257[(2)]);
var state_11257__$1 = state_11257;
var statearr_11264_11288 = state_11257__$1;
(statearr_11264_11288[(2)] = inst_11252);

(statearr_11264_11288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (3))){
var inst_11254 = (state_11257[(2)]);
var inst_11255 = cljs.core.async.close_BANG_.call(null,out);
var state_11257__$1 = (function (){var statearr_11265 = state_11257;
(statearr_11265[(9)] = inst_11254);

return statearr_11265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11257__$1,inst_11255);
} else {
if((state_val_11258 === (2))){
var inst_11234 = (state_11257[(8)]);
var inst_11236 = (inst_11234 < n);
var state_11257__$1 = state_11257;
if(cljs.core.truth_(inst_11236)){
var statearr_11266_11289 = state_11257__$1;
(statearr_11266_11289[(1)] = (4));

} else {
var statearr_11267_11290 = state_11257__$1;
(statearr_11267_11290[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (11))){
var inst_11234 = (state_11257[(8)]);
var inst_11244 = (state_11257[(2)]);
var inst_11245 = (inst_11234 + (1));
var inst_11234__$1 = inst_11245;
var state_11257__$1 = (function (){var statearr_11268 = state_11257;
(statearr_11268[(8)] = inst_11234__$1);

(statearr_11268[(10)] = inst_11244);

return statearr_11268;
})();
var statearr_11269_11291 = state_11257__$1;
(statearr_11269_11291[(2)] = null);

(statearr_11269_11291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (9))){
var state_11257__$1 = state_11257;
var statearr_11270_11292 = state_11257__$1;
(statearr_11270_11292[(2)] = null);

(statearr_11270_11292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (5))){
var state_11257__$1 = state_11257;
var statearr_11271_11293 = state_11257__$1;
(statearr_11271_11293[(2)] = null);

(statearr_11271_11293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (10))){
var inst_11249 = (state_11257[(2)]);
var state_11257__$1 = state_11257;
var statearr_11272_11294 = state_11257__$1;
(statearr_11272_11294[(2)] = inst_11249);

(statearr_11272_11294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (8))){
var inst_11239 = (state_11257[(7)]);
var state_11257__$1 = state_11257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11257__$1,(11),out,inst_11239);
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
});})(c__9157__auto___11284,out))
;
return ((function (switch__9045__auto__,c__9157__auto___11284,out){
return (function() {
var cljs$core$async$state_machine__9046__auto__ = null;
var cljs$core$async$state_machine__9046__auto____0 = (function (){
var statearr_11276 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11276[(0)] = cljs$core$async$state_machine__9046__auto__);

(statearr_11276[(1)] = (1));

return statearr_11276;
});
var cljs$core$async$state_machine__9046__auto____1 = (function (state_11257){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_11257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e11277){if((e11277 instanceof Object)){
var ex__9049__auto__ = e11277;
var statearr_11278_11295 = state_11257;
(statearr_11278_11295[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11296 = state_11257;
state_11257 = G__11296;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$state_machine__9046__auto__ = function(state_11257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9046__auto____1.call(this,state_11257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9046__auto____0;
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9046__auto____1;
return cljs$core$async$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___11284,out))
})();
var state__9159__auto__ = (function (){var statearr_11279 = f__9158__auto__.call(null);
(statearr_11279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___11284);

return statearr_11279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___11284,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11304 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11304 = (function (map_LT_,f,ch,meta11305){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11305 = meta11305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11306,meta11305__$1){
var self__ = this;
var _11306__$1 = this;
return (new cljs.core.async.t_cljs$core$async11304(self__.map_LT_,self__.f,self__.ch,meta11305__$1));
});

cljs.core.async.t_cljs$core$async11304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11306){
var self__ = this;
var _11306__$1 = this;
return self__.meta11305;
});

cljs.core.async.t_cljs$core$async11304.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11304.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11304.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11304.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11304.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11307 = (function (map_LT_,f,ch,meta11305,_,fn1,meta11308){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11305 = meta11305;
this._ = _;
this.fn1 = fn1;
this.meta11308 = meta11308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11309,meta11308__$1){
var self__ = this;
var _11309__$1 = this;
return (new cljs.core.async.t_cljs$core$async11307(self__.map_LT_,self__.f,self__.ch,self__.meta11305,self__._,self__.fn1,meta11308__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11309){
var self__ = this;
var _11309__$1 = this;
return self__.meta11308;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11307.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11297_SHARP_){
return f1.call(null,(((p1__11297_SHARP_ == null))?null:self__.f.call(null,p1__11297_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11307.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11305","meta11305",2132787387,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11304","cljs.core.async/t_cljs$core$async11304",1254972032,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11308","meta11308",-809632412,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11307";

cljs.core.async.t_cljs$core$async11307.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async11307");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11307 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11307(map_LT___$1,f__$1,ch__$1,meta11305__$1,___$2,fn1__$1,meta11308){
return (new cljs.core.async.t_cljs$core$async11307(map_LT___$1,f__$1,ch__$1,meta11305__$1,___$2,fn1__$1,meta11308));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11307(self__.map_LT_,self__.f,self__.ch,self__.meta11305,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async11304.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11304.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11305","meta11305",2132787387,null)], null);
});

cljs.core.async.t_cljs$core$async11304.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11304";

cljs.core.async.t_cljs$core$async11304.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async11304");
});

cljs.core.async.__GT_t_cljs$core$async11304 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11304(map_LT___$1,f__$1,ch__$1,meta11305){
return (new cljs.core.async.t_cljs$core$async11304(map_LT___$1,f__$1,ch__$1,meta11305));
});

}

return (new cljs.core.async.t_cljs$core$async11304(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11313 = (function (map_GT_,f,ch,meta11314){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11314 = meta11314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11315,meta11314__$1){
var self__ = this;
var _11315__$1 = this;
return (new cljs.core.async.t_cljs$core$async11313(self__.map_GT_,self__.f,self__.ch,meta11314__$1));
});

cljs.core.async.t_cljs$core$async11313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11315){
var self__ = this;
var _11315__$1 = this;
return self__.meta11314;
});

cljs.core.async.t_cljs$core$async11313.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11313.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11313.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11314","meta11314",-2098598235,null)], null);
});

cljs.core.async.t_cljs$core$async11313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11313";

cljs.core.async.t_cljs$core$async11313.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async11313");
});

cljs.core.async.__GT_t_cljs$core$async11313 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11313(map_GT___$1,f__$1,ch__$1,meta11314){
return (new cljs.core.async.t_cljs$core$async11313(map_GT___$1,f__$1,ch__$1,meta11314));
});

}

return (new cljs.core.async.t_cljs$core$async11313(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11319 = (function (filter_GT_,p,ch,meta11320){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11320 = meta11320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11321,meta11320__$1){
var self__ = this;
var _11321__$1 = this;
return (new cljs.core.async.t_cljs$core$async11319(self__.filter_GT_,self__.p,self__.ch,meta11320__$1));
});

cljs.core.async.t_cljs$core$async11319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11321){
var self__ = this;
var _11321__$1 = this;
return self__.meta11320;
});

cljs.core.async.t_cljs$core$async11319.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11319.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11319.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11319.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11320","meta11320",-1464593293,null)], null);
});

cljs.core.async.t_cljs$core$async11319.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11319";

cljs.core.async.t_cljs$core$async11319.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async11319");
});

cljs.core.async.__GT_t_cljs$core$async11319 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11319(filter_GT___$1,p__$1,ch__$1,meta11320){
return (new cljs.core.async.t_cljs$core$async11319(filter_GT___$1,p__$1,ch__$1,meta11320));
});

}

return (new cljs.core.async.t_cljs$core$async11319(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args11322 = [];
var len__6226__auto___11366 = arguments.length;
var i__6227__auto___11367 = (0);
while(true){
if((i__6227__auto___11367 < len__6226__auto___11366)){
args11322.push((arguments[i__6227__auto___11367]));

var G__11368 = (i__6227__auto___11367 + (1));
i__6227__auto___11367 = G__11368;
continue;
} else {
}
break;
}

var G__11324 = args11322.length;
switch (G__11324) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11322.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9157__auto___11370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___11370,out){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___11370,out){
return (function (state_11345){
var state_val_11346 = (state_11345[(1)]);
if((state_val_11346 === (7))){
var inst_11341 = (state_11345[(2)]);
var state_11345__$1 = state_11345;
var statearr_11347_11371 = state_11345__$1;
(statearr_11347_11371[(2)] = inst_11341);

(statearr_11347_11371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11346 === (1))){
var state_11345__$1 = state_11345;
var statearr_11348_11372 = state_11345__$1;
(statearr_11348_11372[(2)] = null);

(statearr_11348_11372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11346 === (4))){
var inst_11327 = (state_11345[(7)]);
var inst_11327__$1 = (state_11345[(2)]);
var inst_11328 = (inst_11327__$1 == null);
var state_11345__$1 = (function (){var statearr_11349 = state_11345;
(statearr_11349[(7)] = inst_11327__$1);

return statearr_11349;
})();
if(cljs.core.truth_(inst_11328)){
var statearr_11350_11373 = state_11345__$1;
(statearr_11350_11373[(1)] = (5));

} else {
var statearr_11351_11374 = state_11345__$1;
(statearr_11351_11374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11346 === (6))){
var inst_11327 = (state_11345[(7)]);
var inst_11332 = p.call(null,inst_11327);
var state_11345__$1 = state_11345;
if(cljs.core.truth_(inst_11332)){
var statearr_11352_11375 = state_11345__$1;
(statearr_11352_11375[(1)] = (8));

} else {
var statearr_11353_11376 = state_11345__$1;
(statearr_11353_11376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11346 === (3))){
var inst_11343 = (state_11345[(2)]);
var state_11345__$1 = state_11345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11345__$1,inst_11343);
} else {
if((state_val_11346 === (2))){
var state_11345__$1 = state_11345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11345__$1,(4),ch);
} else {
if((state_val_11346 === (11))){
var inst_11335 = (state_11345[(2)]);
var state_11345__$1 = state_11345;
var statearr_11354_11377 = state_11345__$1;
(statearr_11354_11377[(2)] = inst_11335);

(statearr_11354_11377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11346 === (9))){
var state_11345__$1 = state_11345;
var statearr_11355_11378 = state_11345__$1;
(statearr_11355_11378[(2)] = null);

(statearr_11355_11378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11346 === (5))){
var inst_11330 = cljs.core.async.close_BANG_.call(null,out);
var state_11345__$1 = state_11345;
var statearr_11356_11379 = state_11345__$1;
(statearr_11356_11379[(2)] = inst_11330);

(statearr_11356_11379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11346 === (10))){
var inst_11338 = (state_11345[(2)]);
var state_11345__$1 = (function (){var statearr_11357 = state_11345;
(statearr_11357[(8)] = inst_11338);

return statearr_11357;
})();
var statearr_11358_11380 = state_11345__$1;
(statearr_11358_11380[(2)] = null);

(statearr_11358_11380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11346 === (8))){
var inst_11327 = (state_11345[(7)]);
var state_11345__$1 = state_11345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11345__$1,(11),out,inst_11327);
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
});})(c__9157__auto___11370,out))
;
return ((function (switch__9045__auto__,c__9157__auto___11370,out){
return (function() {
var cljs$core$async$state_machine__9046__auto__ = null;
var cljs$core$async$state_machine__9046__auto____0 = (function (){
var statearr_11362 = [null,null,null,null,null,null,null,null,null];
(statearr_11362[(0)] = cljs$core$async$state_machine__9046__auto__);

(statearr_11362[(1)] = (1));

return statearr_11362;
});
var cljs$core$async$state_machine__9046__auto____1 = (function (state_11345){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_11345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e11363){if((e11363 instanceof Object)){
var ex__9049__auto__ = e11363;
var statearr_11364_11381 = state_11345;
(statearr_11364_11381[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11382 = state_11345;
state_11345 = G__11382;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$state_machine__9046__auto__ = function(state_11345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9046__auto____1.call(this,state_11345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9046__auto____0;
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9046__auto____1;
return cljs$core$async$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___11370,out))
})();
var state__9159__auto__ = (function (){var statearr_11365 = f__9158__auto__.call(null);
(statearr_11365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___11370);

return statearr_11365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___11370,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11383 = [];
var len__6226__auto___11386 = arguments.length;
var i__6227__auto___11387 = (0);
while(true){
if((i__6227__auto___11387 < len__6226__auto___11386)){
args11383.push((arguments[i__6227__auto___11387]));

var G__11388 = (i__6227__auto___11387 + (1));
i__6227__auto___11387 = G__11388;
continue;
} else {
}
break;
}

var G__11385 = args11383.length;
switch (G__11385) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11383.length)].join('')));

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
var c__9157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto__){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto__){
return (function (state_11555){
var state_val_11556 = (state_11555[(1)]);
if((state_val_11556 === (7))){
var inst_11551 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
var statearr_11557_11598 = state_11555__$1;
(statearr_11557_11598[(2)] = inst_11551);

(statearr_11557_11598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (20))){
var inst_11521 = (state_11555[(7)]);
var inst_11532 = (state_11555[(2)]);
var inst_11533 = cljs.core.next.call(null,inst_11521);
var inst_11507 = inst_11533;
var inst_11508 = null;
var inst_11509 = (0);
var inst_11510 = (0);
var state_11555__$1 = (function (){var statearr_11558 = state_11555;
(statearr_11558[(8)] = inst_11507);

(statearr_11558[(9)] = inst_11509);

(statearr_11558[(10)] = inst_11508);

(statearr_11558[(11)] = inst_11532);

(statearr_11558[(12)] = inst_11510);

return statearr_11558;
})();
var statearr_11559_11599 = state_11555__$1;
(statearr_11559_11599[(2)] = null);

(statearr_11559_11599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (1))){
var state_11555__$1 = state_11555;
var statearr_11560_11600 = state_11555__$1;
(statearr_11560_11600[(2)] = null);

(statearr_11560_11600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (4))){
var inst_11496 = (state_11555[(13)]);
var inst_11496__$1 = (state_11555[(2)]);
var inst_11497 = (inst_11496__$1 == null);
var state_11555__$1 = (function (){var statearr_11561 = state_11555;
(statearr_11561[(13)] = inst_11496__$1);

return statearr_11561;
})();
if(cljs.core.truth_(inst_11497)){
var statearr_11562_11601 = state_11555__$1;
(statearr_11562_11601[(1)] = (5));

} else {
var statearr_11563_11602 = state_11555__$1;
(statearr_11563_11602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (15))){
var state_11555__$1 = state_11555;
var statearr_11567_11603 = state_11555__$1;
(statearr_11567_11603[(2)] = null);

(statearr_11567_11603[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (21))){
var state_11555__$1 = state_11555;
var statearr_11568_11604 = state_11555__$1;
(statearr_11568_11604[(2)] = null);

(statearr_11568_11604[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (13))){
var inst_11507 = (state_11555[(8)]);
var inst_11509 = (state_11555[(9)]);
var inst_11508 = (state_11555[(10)]);
var inst_11510 = (state_11555[(12)]);
var inst_11517 = (state_11555[(2)]);
var inst_11518 = (inst_11510 + (1));
var tmp11564 = inst_11507;
var tmp11565 = inst_11509;
var tmp11566 = inst_11508;
var inst_11507__$1 = tmp11564;
var inst_11508__$1 = tmp11566;
var inst_11509__$1 = tmp11565;
var inst_11510__$1 = inst_11518;
var state_11555__$1 = (function (){var statearr_11569 = state_11555;
(statearr_11569[(8)] = inst_11507__$1);

(statearr_11569[(9)] = inst_11509__$1);

(statearr_11569[(10)] = inst_11508__$1);

(statearr_11569[(14)] = inst_11517);

(statearr_11569[(12)] = inst_11510__$1);

return statearr_11569;
})();
var statearr_11570_11605 = state_11555__$1;
(statearr_11570_11605[(2)] = null);

(statearr_11570_11605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (22))){
var state_11555__$1 = state_11555;
var statearr_11571_11606 = state_11555__$1;
(statearr_11571_11606[(2)] = null);

(statearr_11571_11606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (6))){
var inst_11496 = (state_11555[(13)]);
var inst_11505 = f.call(null,inst_11496);
var inst_11506 = cljs.core.seq.call(null,inst_11505);
var inst_11507 = inst_11506;
var inst_11508 = null;
var inst_11509 = (0);
var inst_11510 = (0);
var state_11555__$1 = (function (){var statearr_11572 = state_11555;
(statearr_11572[(8)] = inst_11507);

(statearr_11572[(9)] = inst_11509);

(statearr_11572[(10)] = inst_11508);

(statearr_11572[(12)] = inst_11510);

return statearr_11572;
})();
var statearr_11573_11607 = state_11555__$1;
(statearr_11573_11607[(2)] = null);

(statearr_11573_11607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (17))){
var inst_11521 = (state_11555[(7)]);
var inst_11525 = cljs.core.chunk_first.call(null,inst_11521);
var inst_11526 = cljs.core.chunk_rest.call(null,inst_11521);
var inst_11527 = cljs.core.count.call(null,inst_11525);
var inst_11507 = inst_11526;
var inst_11508 = inst_11525;
var inst_11509 = inst_11527;
var inst_11510 = (0);
var state_11555__$1 = (function (){var statearr_11574 = state_11555;
(statearr_11574[(8)] = inst_11507);

(statearr_11574[(9)] = inst_11509);

(statearr_11574[(10)] = inst_11508);

(statearr_11574[(12)] = inst_11510);

return statearr_11574;
})();
var statearr_11575_11608 = state_11555__$1;
(statearr_11575_11608[(2)] = null);

(statearr_11575_11608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (3))){
var inst_11553 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11555__$1,inst_11553);
} else {
if((state_val_11556 === (12))){
var inst_11541 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
var statearr_11576_11609 = state_11555__$1;
(statearr_11576_11609[(2)] = inst_11541);

(statearr_11576_11609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (2))){
var state_11555__$1 = state_11555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11555__$1,(4),in$);
} else {
if((state_val_11556 === (23))){
var inst_11549 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
var statearr_11577_11610 = state_11555__$1;
(statearr_11577_11610[(2)] = inst_11549);

(statearr_11577_11610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (19))){
var inst_11536 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
var statearr_11578_11611 = state_11555__$1;
(statearr_11578_11611[(2)] = inst_11536);

(statearr_11578_11611[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (11))){
var inst_11507 = (state_11555[(8)]);
var inst_11521 = (state_11555[(7)]);
var inst_11521__$1 = cljs.core.seq.call(null,inst_11507);
var state_11555__$1 = (function (){var statearr_11579 = state_11555;
(statearr_11579[(7)] = inst_11521__$1);

return statearr_11579;
})();
if(inst_11521__$1){
var statearr_11580_11612 = state_11555__$1;
(statearr_11580_11612[(1)] = (14));

} else {
var statearr_11581_11613 = state_11555__$1;
(statearr_11581_11613[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (9))){
var inst_11543 = (state_11555[(2)]);
var inst_11544 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11555__$1 = (function (){var statearr_11582 = state_11555;
(statearr_11582[(15)] = inst_11543);

return statearr_11582;
})();
if(cljs.core.truth_(inst_11544)){
var statearr_11583_11614 = state_11555__$1;
(statearr_11583_11614[(1)] = (21));

} else {
var statearr_11584_11615 = state_11555__$1;
(statearr_11584_11615[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (5))){
var inst_11499 = cljs.core.async.close_BANG_.call(null,out);
var state_11555__$1 = state_11555;
var statearr_11585_11616 = state_11555__$1;
(statearr_11585_11616[(2)] = inst_11499);

(statearr_11585_11616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (14))){
var inst_11521 = (state_11555[(7)]);
var inst_11523 = cljs.core.chunked_seq_QMARK_.call(null,inst_11521);
var state_11555__$1 = state_11555;
if(inst_11523){
var statearr_11586_11617 = state_11555__$1;
(statearr_11586_11617[(1)] = (17));

} else {
var statearr_11587_11618 = state_11555__$1;
(statearr_11587_11618[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (16))){
var inst_11539 = (state_11555[(2)]);
var state_11555__$1 = state_11555;
var statearr_11588_11619 = state_11555__$1;
(statearr_11588_11619[(2)] = inst_11539);

(statearr_11588_11619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11556 === (10))){
var inst_11508 = (state_11555[(10)]);
var inst_11510 = (state_11555[(12)]);
var inst_11515 = cljs.core._nth.call(null,inst_11508,inst_11510);
var state_11555__$1 = state_11555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11555__$1,(13),out,inst_11515);
} else {
if((state_val_11556 === (18))){
var inst_11521 = (state_11555[(7)]);
var inst_11530 = cljs.core.first.call(null,inst_11521);
var state_11555__$1 = state_11555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11555__$1,(20),out,inst_11530);
} else {
if((state_val_11556 === (8))){
var inst_11509 = (state_11555[(9)]);
var inst_11510 = (state_11555[(12)]);
var inst_11512 = (inst_11510 < inst_11509);
var inst_11513 = inst_11512;
var state_11555__$1 = state_11555;
if(cljs.core.truth_(inst_11513)){
var statearr_11589_11620 = state_11555__$1;
(statearr_11589_11620[(1)] = (10));

} else {
var statearr_11590_11621 = state_11555__$1;
(statearr_11590_11621[(1)] = (11));

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
});})(c__9157__auto__))
;
return ((function (switch__9045__auto__,c__9157__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9046__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9046__auto____0 = (function (){
var statearr_11594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11594[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9046__auto__);

(statearr_11594[(1)] = (1));

return statearr_11594;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9046__auto____1 = (function (state_11555){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_11555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e11595){if((e11595 instanceof Object)){
var ex__9049__auto__ = e11595;
var statearr_11596_11622 = state_11555;
(statearr_11596_11622[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11623 = state_11555;
state_11555 = G__11623;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9046__auto__ = function(state_11555){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9046__auto____1.call(this,state_11555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9046__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9046__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto__))
})();
var state__9159__auto__ = (function (){var statearr_11597 = f__9158__auto__.call(null);
(statearr_11597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto__);

return statearr_11597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto__))
);

return c__9157__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11624 = [];
var len__6226__auto___11627 = arguments.length;
var i__6227__auto___11628 = (0);
while(true){
if((i__6227__auto___11628 < len__6226__auto___11627)){
args11624.push((arguments[i__6227__auto___11628]));

var G__11629 = (i__6227__auto___11628 + (1));
i__6227__auto___11628 = G__11629;
continue;
} else {
}
break;
}

var G__11626 = args11624.length;
switch (G__11626) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11624.length)].join('')));

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
var args11631 = [];
var len__6226__auto___11634 = arguments.length;
var i__6227__auto___11635 = (0);
while(true){
if((i__6227__auto___11635 < len__6226__auto___11634)){
args11631.push((arguments[i__6227__auto___11635]));

var G__11636 = (i__6227__auto___11635 + (1));
i__6227__auto___11635 = G__11636;
continue;
} else {
}
break;
}

var G__11633 = args11631.length;
switch (G__11633) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11631.length)].join('')));

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
var args11638 = [];
var len__6226__auto___11689 = arguments.length;
var i__6227__auto___11690 = (0);
while(true){
if((i__6227__auto___11690 < len__6226__auto___11689)){
args11638.push((arguments[i__6227__auto___11690]));

var G__11691 = (i__6227__auto___11690 + (1));
i__6227__auto___11690 = G__11691;
continue;
} else {
}
break;
}

var G__11640 = args11638.length;
switch (G__11640) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11638.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9157__auto___11693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___11693,out){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___11693,out){
return (function (state_11664){
var state_val_11665 = (state_11664[(1)]);
if((state_val_11665 === (7))){
var inst_11659 = (state_11664[(2)]);
var state_11664__$1 = state_11664;
var statearr_11666_11694 = state_11664__$1;
(statearr_11666_11694[(2)] = inst_11659);

(statearr_11666_11694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (1))){
var inst_11641 = null;
var state_11664__$1 = (function (){var statearr_11667 = state_11664;
(statearr_11667[(7)] = inst_11641);

return statearr_11667;
})();
var statearr_11668_11695 = state_11664__$1;
(statearr_11668_11695[(2)] = null);

(statearr_11668_11695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (4))){
var inst_11644 = (state_11664[(8)]);
var inst_11644__$1 = (state_11664[(2)]);
var inst_11645 = (inst_11644__$1 == null);
var inst_11646 = cljs.core.not.call(null,inst_11645);
var state_11664__$1 = (function (){var statearr_11669 = state_11664;
(statearr_11669[(8)] = inst_11644__$1);

return statearr_11669;
})();
if(inst_11646){
var statearr_11670_11696 = state_11664__$1;
(statearr_11670_11696[(1)] = (5));

} else {
var statearr_11671_11697 = state_11664__$1;
(statearr_11671_11697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (6))){
var state_11664__$1 = state_11664;
var statearr_11672_11698 = state_11664__$1;
(statearr_11672_11698[(2)] = null);

(statearr_11672_11698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (3))){
var inst_11661 = (state_11664[(2)]);
var inst_11662 = cljs.core.async.close_BANG_.call(null,out);
var state_11664__$1 = (function (){var statearr_11673 = state_11664;
(statearr_11673[(9)] = inst_11661);

return statearr_11673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11664__$1,inst_11662);
} else {
if((state_val_11665 === (2))){
var state_11664__$1 = state_11664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11664__$1,(4),ch);
} else {
if((state_val_11665 === (11))){
var inst_11644 = (state_11664[(8)]);
var inst_11653 = (state_11664[(2)]);
var inst_11641 = inst_11644;
var state_11664__$1 = (function (){var statearr_11674 = state_11664;
(statearr_11674[(7)] = inst_11641);

(statearr_11674[(10)] = inst_11653);

return statearr_11674;
})();
var statearr_11675_11699 = state_11664__$1;
(statearr_11675_11699[(2)] = null);

(statearr_11675_11699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (9))){
var inst_11644 = (state_11664[(8)]);
var state_11664__$1 = state_11664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11664__$1,(11),out,inst_11644);
} else {
if((state_val_11665 === (5))){
var inst_11641 = (state_11664[(7)]);
var inst_11644 = (state_11664[(8)]);
var inst_11648 = cljs.core._EQ_.call(null,inst_11644,inst_11641);
var state_11664__$1 = state_11664;
if(inst_11648){
var statearr_11677_11700 = state_11664__$1;
(statearr_11677_11700[(1)] = (8));

} else {
var statearr_11678_11701 = state_11664__$1;
(statearr_11678_11701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (10))){
var inst_11656 = (state_11664[(2)]);
var state_11664__$1 = state_11664;
var statearr_11679_11702 = state_11664__$1;
(statearr_11679_11702[(2)] = inst_11656);

(statearr_11679_11702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11665 === (8))){
var inst_11641 = (state_11664[(7)]);
var tmp11676 = inst_11641;
var inst_11641__$1 = tmp11676;
var state_11664__$1 = (function (){var statearr_11680 = state_11664;
(statearr_11680[(7)] = inst_11641__$1);

return statearr_11680;
})();
var statearr_11681_11703 = state_11664__$1;
(statearr_11681_11703[(2)] = null);

(statearr_11681_11703[(1)] = (2));


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
});})(c__9157__auto___11693,out))
;
return ((function (switch__9045__auto__,c__9157__auto___11693,out){
return (function() {
var cljs$core$async$state_machine__9046__auto__ = null;
var cljs$core$async$state_machine__9046__auto____0 = (function (){
var statearr_11685 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11685[(0)] = cljs$core$async$state_machine__9046__auto__);

(statearr_11685[(1)] = (1));

return statearr_11685;
});
var cljs$core$async$state_machine__9046__auto____1 = (function (state_11664){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_11664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e11686){if((e11686 instanceof Object)){
var ex__9049__auto__ = e11686;
var statearr_11687_11704 = state_11664;
(statearr_11687_11704[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11705 = state_11664;
state_11664 = G__11705;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$state_machine__9046__auto__ = function(state_11664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9046__auto____1.call(this,state_11664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9046__auto____0;
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9046__auto____1;
return cljs$core$async$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___11693,out))
})();
var state__9159__auto__ = (function (){var statearr_11688 = f__9158__auto__.call(null);
(statearr_11688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___11693);

return statearr_11688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___11693,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11706 = [];
var len__6226__auto___11776 = arguments.length;
var i__6227__auto___11777 = (0);
while(true){
if((i__6227__auto___11777 < len__6226__auto___11776)){
args11706.push((arguments[i__6227__auto___11777]));

var G__11778 = (i__6227__auto___11777 + (1));
i__6227__auto___11777 = G__11778;
continue;
} else {
}
break;
}

var G__11708 = args11706.length;
switch (G__11708) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11706.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9157__auto___11780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___11780,out){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___11780,out){
return (function (state_11746){
var state_val_11747 = (state_11746[(1)]);
if((state_val_11747 === (7))){
var inst_11742 = (state_11746[(2)]);
var state_11746__$1 = state_11746;
var statearr_11748_11781 = state_11746__$1;
(statearr_11748_11781[(2)] = inst_11742);

(statearr_11748_11781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11747 === (1))){
var inst_11709 = (new Array(n));
var inst_11710 = inst_11709;
var inst_11711 = (0);
var state_11746__$1 = (function (){var statearr_11749 = state_11746;
(statearr_11749[(7)] = inst_11710);

(statearr_11749[(8)] = inst_11711);

return statearr_11749;
})();
var statearr_11750_11782 = state_11746__$1;
(statearr_11750_11782[(2)] = null);

(statearr_11750_11782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11747 === (4))){
var inst_11714 = (state_11746[(9)]);
var inst_11714__$1 = (state_11746[(2)]);
var inst_11715 = (inst_11714__$1 == null);
var inst_11716 = cljs.core.not.call(null,inst_11715);
var state_11746__$1 = (function (){var statearr_11751 = state_11746;
(statearr_11751[(9)] = inst_11714__$1);

return statearr_11751;
})();
if(inst_11716){
var statearr_11752_11783 = state_11746__$1;
(statearr_11752_11783[(1)] = (5));

} else {
var statearr_11753_11784 = state_11746__$1;
(statearr_11753_11784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11747 === (15))){
var inst_11736 = (state_11746[(2)]);
var state_11746__$1 = state_11746;
var statearr_11754_11785 = state_11746__$1;
(statearr_11754_11785[(2)] = inst_11736);

(statearr_11754_11785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11747 === (13))){
var state_11746__$1 = state_11746;
var statearr_11755_11786 = state_11746__$1;
(statearr_11755_11786[(2)] = null);

(statearr_11755_11786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11747 === (6))){
var inst_11711 = (state_11746[(8)]);
var inst_11732 = (inst_11711 > (0));
var state_11746__$1 = state_11746;
if(cljs.core.truth_(inst_11732)){
var statearr_11756_11787 = state_11746__$1;
(statearr_11756_11787[(1)] = (12));

} else {
var statearr_11757_11788 = state_11746__$1;
(statearr_11757_11788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11747 === (3))){
var inst_11744 = (state_11746[(2)]);
var state_11746__$1 = state_11746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11746__$1,inst_11744);
} else {
if((state_val_11747 === (12))){
var inst_11710 = (state_11746[(7)]);
var inst_11734 = cljs.core.vec.call(null,inst_11710);
var state_11746__$1 = state_11746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11746__$1,(15),out,inst_11734);
} else {
if((state_val_11747 === (2))){
var state_11746__$1 = state_11746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11746__$1,(4),ch);
} else {
if((state_val_11747 === (11))){
var inst_11726 = (state_11746[(2)]);
var inst_11727 = (new Array(n));
var inst_11710 = inst_11727;
var inst_11711 = (0);
var state_11746__$1 = (function (){var statearr_11758 = state_11746;
(statearr_11758[(7)] = inst_11710);

(statearr_11758[(8)] = inst_11711);

(statearr_11758[(10)] = inst_11726);

return statearr_11758;
})();
var statearr_11759_11789 = state_11746__$1;
(statearr_11759_11789[(2)] = null);

(statearr_11759_11789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11747 === (9))){
var inst_11710 = (state_11746[(7)]);
var inst_11724 = cljs.core.vec.call(null,inst_11710);
var state_11746__$1 = state_11746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11746__$1,(11),out,inst_11724);
} else {
if((state_val_11747 === (5))){
var inst_11710 = (state_11746[(7)]);
var inst_11714 = (state_11746[(9)]);
var inst_11711 = (state_11746[(8)]);
var inst_11719 = (state_11746[(11)]);
var inst_11718 = (inst_11710[inst_11711] = inst_11714);
var inst_11719__$1 = (inst_11711 + (1));
var inst_11720 = (inst_11719__$1 < n);
var state_11746__$1 = (function (){var statearr_11760 = state_11746;
(statearr_11760[(12)] = inst_11718);

(statearr_11760[(11)] = inst_11719__$1);

return statearr_11760;
})();
if(cljs.core.truth_(inst_11720)){
var statearr_11761_11790 = state_11746__$1;
(statearr_11761_11790[(1)] = (8));

} else {
var statearr_11762_11791 = state_11746__$1;
(statearr_11762_11791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11747 === (14))){
var inst_11739 = (state_11746[(2)]);
var inst_11740 = cljs.core.async.close_BANG_.call(null,out);
var state_11746__$1 = (function (){var statearr_11764 = state_11746;
(statearr_11764[(13)] = inst_11739);

return statearr_11764;
})();
var statearr_11765_11792 = state_11746__$1;
(statearr_11765_11792[(2)] = inst_11740);

(statearr_11765_11792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11747 === (10))){
var inst_11730 = (state_11746[(2)]);
var state_11746__$1 = state_11746;
var statearr_11766_11793 = state_11746__$1;
(statearr_11766_11793[(2)] = inst_11730);

(statearr_11766_11793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11747 === (8))){
var inst_11710 = (state_11746[(7)]);
var inst_11719 = (state_11746[(11)]);
var tmp11763 = inst_11710;
var inst_11710__$1 = tmp11763;
var inst_11711 = inst_11719;
var state_11746__$1 = (function (){var statearr_11767 = state_11746;
(statearr_11767[(7)] = inst_11710__$1);

(statearr_11767[(8)] = inst_11711);

return statearr_11767;
})();
var statearr_11768_11794 = state_11746__$1;
(statearr_11768_11794[(2)] = null);

(statearr_11768_11794[(1)] = (2));


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
});})(c__9157__auto___11780,out))
;
return ((function (switch__9045__auto__,c__9157__auto___11780,out){
return (function() {
var cljs$core$async$state_machine__9046__auto__ = null;
var cljs$core$async$state_machine__9046__auto____0 = (function (){
var statearr_11772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11772[(0)] = cljs$core$async$state_machine__9046__auto__);

(statearr_11772[(1)] = (1));

return statearr_11772;
});
var cljs$core$async$state_machine__9046__auto____1 = (function (state_11746){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_11746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e11773){if((e11773 instanceof Object)){
var ex__9049__auto__ = e11773;
var statearr_11774_11795 = state_11746;
(statearr_11774_11795[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11796 = state_11746;
state_11746 = G__11796;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$state_machine__9046__auto__ = function(state_11746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9046__auto____1.call(this,state_11746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9046__auto____0;
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9046__auto____1;
return cljs$core$async$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___11780,out))
})();
var state__9159__auto__ = (function (){var statearr_11775 = f__9158__auto__.call(null);
(statearr_11775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___11780);

return statearr_11775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___11780,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args11797 = [];
var len__6226__auto___11871 = arguments.length;
var i__6227__auto___11872 = (0);
while(true){
if((i__6227__auto___11872 < len__6226__auto___11871)){
args11797.push((arguments[i__6227__auto___11872]));

var G__11873 = (i__6227__auto___11872 + (1));
i__6227__auto___11872 = G__11873;
continue;
} else {
}
break;
}

var G__11799 = args11797.length;
switch (G__11799) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11797.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9157__auto___11875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9157__auto___11875,out){
return (function (){
var f__9158__auto__ = (function (){var switch__9045__auto__ = ((function (c__9157__auto___11875,out){
return (function (state_11841){
var state_val_11842 = (state_11841[(1)]);
if((state_val_11842 === (7))){
var inst_11837 = (state_11841[(2)]);
var state_11841__$1 = state_11841;
var statearr_11843_11876 = state_11841__$1;
(statearr_11843_11876[(2)] = inst_11837);

(statearr_11843_11876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11842 === (1))){
var inst_11800 = [];
var inst_11801 = inst_11800;
var inst_11802 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11841__$1 = (function (){var statearr_11844 = state_11841;
(statearr_11844[(7)] = inst_11801);

(statearr_11844[(8)] = inst_11802);

return statearr_11844;
})();
var statearr_11845_11877 = state_11841__$1;
(statearr_11845_11877[(2)] = null);

(statearr_11845_11877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11842 === (4))){
var inst_11805 = (state_11841[(9)]);
var inst_11805__$1 = (state_11841[(2)]);
var inst_11806 = (inst_11805__$1 == null);
var inst_11807 = cljs.core.not.call(null,inst_11806);
var state_11841__$1 = (function (){var statearr_11846 = state_11841;
(statearr_11846[(9)] = inst_11805__$1);

return statearr_11846;
})();
if(inst_11807){
var statearr_11847_11878 = state_11841__$1;
(statearr_11847_11878[(1)] = (5));

} else {
var statearr_11848_11879 = state_11841__$1;
(statearr_11848_11879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11842 === (15))){
var inst_11831 = (state_11841[(2)]);
var state_11841__$1 = state_11841;
var statearr_11849_11880 = state_11841__$1;
(statearr_11849_11880[(2)] = inst_11831);

(statearr_11849_11880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11842 === (13))){
var state_11841__$1 = state_11841;
var statearr_11850_11881 = state_11841__$1;
(statearr_11850_11881[(2)] = null);

(statearr_11850_11881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11842 === (6))){
var inst_11801 = (state_11841[(7)]);
var inst_11826 = inst_11801.length;
var inst_11827 = (inst_11826 > (0));
var state_11841__$1 = state_11841;
if(cljs.core.truth_(inst_11827)){
var statearr_11851_11882 = state_11841__$1;
(statearr_11851_11882[(1)] = (12));

} else {
var statearr_11852_11883 = state_11841__$1;
(statearr_11852_11883[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11842 === (3))){
var inst_11839 = (state_11841[(2)]);
var state_11841__$1 = state_11841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11841__$1,inst_11839);
} else {
if((state_val_11842 === (12))){
var inst_11801 = (state_11841[(7)]);
var inst_11829 = cljs.core.vec.call(null,inst_11801);
var state_11841__$1 = state_11841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11841__$1,(15),out,inst_11829);
} else {
if((state_val_11842 === (2))){
var state_11841__$1 = state_11841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11841__$1,(4),ch);
} else {
if((state_val_11842 === (11))){
var inst_11805 = (state_11841[(9)]);
var inst_11809 = (state_11841[(10)]);
var inst_11819 = (state_11841[(2)]);
var inst_11820 = [];
var inst_11821 = inst_11820.push(inst_11805);
var inst_11801 = inst_11820;
var inst_11802 = inst_11809;
var state_11841__$1 = (function (){var statearr_11853 = state_11841;
(statearr_11853[(7)] = inst_11801);

(statearr_11853[(8)] = inst_11802);

(statearr_11853[(11)] = inst_11819);

(statearr_11853[(12)] = inst_11821);

return statearr_11853;
})();
var statearr_11854_11884 = state_11841__$1;
(statearr_11854_11884[(2)] = null);

(statearr_11854_11884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11842 === (9))){
var inst_11801 = (state_11841[(7)]);
var inst_11817 = cljs.core.vec.call(null,inst_11801);
var state_11841__$1 = state_11841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11841__$1,(11),out,inst_11817);
} else {
if((state_val_11842 === (5))){
var inst_11802 = (state_11841[(8)]);
var inst_11805 = (state_11841[(9)]);
var inst_11809 = (state_11841[(10)]);
var inst_11809__$1 = f.call(null,inst_11805);
var inst_11810 = cljs.core._EQ_.call(null,inst_11809__$1,inst_11802);
var inst_11811 = cljs.core.keyword_identical_QMARK_.call(null,inst_11802,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11812 = (inst_11810) || (inst_11811);
var state_11841__$1 = (function (){var statearr_11855 = state_11841;
(statearr_11855[(10)] = inst_11809__$1);

return statearr_11855;
})();
if(cljs.core.truth_(inst_11812)){
var statearr_11856_11885 = state_11841__$1;
(statearr_11856_11885[(1)] = (8));

} else {
var statearr_11857_11886 = state_11841__$1;
(statearr_11857_11886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11842 === (14))){
var inst_11834 = (state_11841[(2)]);
var inst_11835 = cljs.core.async.close_BANG_.call(null,out);
var state_11841__$1 = (function (){var statearr_11859 = state_11841;
(statearr_11859[(13)] = inst_11834);

return statearr_11859;
})();
var statearr_11860_11887 = state_11841__$1;
(statearr_11860_11887[(2)] = inst_11835);

(statearr_11860_11887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11842 === (10))){
var inst_11824 = (state_11841[(2)]);
var state_11841__$1 = state_11841;
var statearr_11861_11888 = state_11841__$1;
(statearr_11861_11888[(2)] = inst_11824);

(statearr_11861_11888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11842 === (8))){
var inst_11801 = (state_11841[(7)]);
var inst_11805 = (state_11841[(9)]);
var inst_11809 = (state_11841[(10)]);
var inst_11814 = inst_11801.push(inst_11805);
var tmp11858 = inst_11801;
var inst_11801__$1 = tmp11858;
var inst_11802 = inst_11809;
var state_11841__$1 = (function (){var statearr_11862 = state_11841;
(statearr_11862[(7)] = inst_11801__$1);

(statearr_11862[(14)] = inst_11814);

(statearr_11862[(8)] = inst_11802);

return statearr_11862;
})();
var statearr_11863_11889 = state_11841__$1;
(statearr_11863_11889[(2)] = null);

(statearr_11863_11889[(1)] = (2));


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
});})(c__9157__auto___11875,out))
;
return ((function (switch__9045__auto__,c__9157__auto___11875,out){
return (function() {
var cljs$core$async$state_machine__9046__auto__ = null;
var cljs$core$async$state_machine__9046__auto____0 = (function (){
var statearr_11867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11867[(0)] = cljs$core$async$state_machine__9046__auto__);

(statearr_11867[(1)] = (1));

return statearr_11867;
});
var cljs$core$async$state_machine__9046__auto____1 = (function (state_11841){
while(true){
var ret_value__9047__auto__ = (function (){try{while(true){
var result__9048__auto__ = switch__9045__auto__.call(null,state_11841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9048__auto__;
}
break;
}
}catch (e11868){if((e11868 instanceof Object)){
var ex__9049__auto__ = e11868;
var statearr_11869_11890 = state_11841;
(statearr_11869_11890[(5)] = ex__9049__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11891 = state_11841;
state_11841 = G__11891;
continue;
} else {
return ret_value__9047__auto__;
}
break;
}
});
cljs$core$async$state_machine__9046__auto__ = function(state_11841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9046__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9046__auto____1.call(this,state_11841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9046__auto____0;
cljs$core$async$state_machine__9046__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9046__auto____1;
return cljs$core$async$state_machine__9046__auto__;
})()
;})(switch__9045__auto__,c__9157__auto___11875,out))
})();
var state__9159__auto__ = (function (){var statearr_11870 = f__9158__auto__.call(null);
(statearr_11870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9157__auto___11875);

return statearr_11870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9159__auto__);
});})(c__9157__auto___11875,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map