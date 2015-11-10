// Compiled by ClojureScript 1.7.166 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4423__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4423__auto__)){
var cm = temp__4423__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var args15655 = [];
var len__6218__auto___15658 = arguments.length;
var i__6219__auto___15659 = (0);
while(true){
if((i__6219__auto___15659 < len__6218__auto___15658)){
args15655.push((arguments[i__6219__auto___15659]));

var G__15660 = (i__6219__auto___15659 + (1));
i__6219__auto___15659 = G__15660;
continue;
} else {
}
break;
}

var G__15657 = args15655.length;
switch (G__15657) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15655.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;
jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__5160__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__5160__auto__)){
return or__5160__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = true;

jQuery.prototype.call = (function() {
var G__15663 = null;
var G__15663__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__15663__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__15663 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15663__2.call(this,self__,k);
case 3:
return G__15663__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15663.cljs$core$IFn$_invoke$arity$2 = G__15663__2;
G__15663.cljs$core$IFn$_invoke$arity$3 = G__15663__3;
return G__15663;
})()
;

jQuery.prototype.apply = (function (self__,args15662){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15662)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15669 = arguments.length;
var i__6219__auto___15670 = (0);
while(true){
if((i__6219__auto___15670 < len__6218__auto___15669)){
args__6225__auto__.push((arguments[i__6219__auto___15670]));

var G__15671 = (i__6219__auto___15670 + (1));
i__6219__auto___15670 = G__15671;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((2) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((2)),(0))):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6226__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__15667){
var vec__15668 = p__15667;
var speed = cljs.core.nth.call(null,vec__15668,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15668,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq15664){
var G__15665 = cljs.core.first.call(null,seq15664);
var seq15664__$1 = cljs.core.next.call(null,seq15664);
var G__15666 = cljs.core.first.call(null,seq15664__$1);
var seq15664__$2 = cljs.core.next.call(null,seq15664__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__15665,G__15666,seq15664__$2);
});
jayq.core.text = (function jayq$core$text(var_args){
var args15672 = [];
var len__6218__auto___15675 = arguments.length;
var i__6219__auto___15676 = (0);
while(true){
if((i__6219__auto___15676 < len__6218__auto___15675)){
args15672.push((arguments[i__6219__auto___15676]));

var G__15677 = (i__6219__auto___15676 + (1));
i__6219__auto___15676 = G__15677;
continue;
} else {
}
break;
}

var G__15674 = args15672.length;
switch (G__15674) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15672.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;
jayq.core.css = (function jayq$core$css(var_args){
var args15679 = [];
var len__6218__auto___15682 = arguments.length;
var i__6219__auto___15683 = (0);
while(true){
if((i__6219__auto___15683 < len__6218__auto___15682)){
args15679.push((arguments[i__6219__auto___15683]));

var G__15684 = (i__6219__auto___15683 + (1));
i__6219__auto___15683 = G__15684;
continue;
} else {
}
break;
}

var G__15681 = args15679.length;
switch (G__15681) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15679.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;
jayq.core.attr = (function jayq$core$attr(var_args){
var args15686 = [];
var len__6218__auto___15689 = arguments.length;
var i__6219__auto___15690 = (0);
while(true){
if((i__6219__auto___15690 < len__6218__auto___15689)){
args15686.push((arguments[i__6219__auto___15690]));

var G__15691 = (i__6219__auto___15690 + (1));
i__6219__auto___15690 = G__15691;
continue;
} else {
}
break;
}

var G__15688 = args15686.length;
switch (G__15688) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15686.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;
jayq.core.prop = (function jayq$core$prop(var_args){
var args15693 = [];
var len__6218__auto___15696 = arguments.length;
var i__6219__auto___15697 = (0);
while(true){
if((i__6219__auto___15697 < len__6218__auto___15696)){
args15693.push((arguments[i__6219__auto___15697]));

var G__15698 = (i__6219__auto___15697 + (1));
i__6219__auto___15697 = G__15698;
continue;
} else {
}
break;
}

var G__15695 = args15693.length;
switch (G__15695) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15693.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;
jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(var_args){
var args15700 = [];
var len__6218__auto___15703 = arguments.length;
var i__6219__auto___15704 = (0);
while(true){
if((i__6219__auto___15704 < len__6218__auto___15703)){
args15700.push((arguments[i__6219__auto___15704]));

var G__15705 = (i__6219__auto___15704 + (1));
i__6219__auto___15704 = G__15705;
continue;
} else {
}
break;
}

var G__15702 = args15700.length;
switch (G__15702) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15700.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;
jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var args15707 = [];
var len__6218__auto___15710 = arguments.length;
var i__6219__auto___15711 = (0);
while(true){
if((i__6219__auto___15711 < len__6218__auto___15710)){
args15707.push((arguments[i__6219__auto___15711]));

var G__15712 = (i__6219__auto___15711 + (1));
i__6219__auto___15711 = G__15712;
continue;
} else {
}
break;
}

var G__15709 = args15707.length;
switch (G__15709) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15707.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;
jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var args15714 = [];
var len__6218__auto___15717 = arguments.length;
var i__6219__auto___15718 = (0);
while(true){
if((i__6219__auto___15718 < len__6218__auto___15717)){
args15714.push((arguments[i__6219__auto___15718]));

var G__15719 = (i__6219__auto___15718 + (1));
i__6219__auto___15718 = G__15719;
continue;
} else {
}
break;
}

var G__15716 = args15714.length;
switch (G__15716) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15714.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;
jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15725 = arguments.length;
var i__6219__auto___15726 = (0);
while(true){
if((i__6219__auto___15726 < len__6218__auto___15725)){
args__6225__auto__.push((arguments[i__6219__auto___15726]));

var G__15727 = (i__6219__auto___15726 + (1));
i__6219__auto___15726 = G__15727;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((1) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((1)),(0))):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6226__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15723){
var vec__15724 = p__15723;
var speed = cljs.core.nth.call(null,vec__15724,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15724,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq15721){
var G__15722 = cljs.core.first.call(null,seq15721);
var seq15721__$1 = cljs.core.next.call(null,seq15721);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__15722,seq15721__$1);
});
jayq.core.show = (function jayq$core$show(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15732 = arguments.length;
var i__6219__auto___15733 = (0);
while(true){
if((i__6219__auto___15733 < len__6218__auto___15732)){
args__6225__auto__.push((arguments[i__6219__auto___15733]));

var G__15734 = (i__6219__auto___15733 + (1));
i__6219__auto___15733 = G__15734;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((1) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((1)),(0))):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6226__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15730){
var vec__15731 = p__15730;
var speed = cljs.core.nth.call(null,vec__15731,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15731,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq15728){
var G__15729 = cljs.core.first.call(null,seq15728);
var seq15728__$1 = cljs.core.next.call(null,seq15728);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__15729,seq15728__$1);
});
jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15739 = arguments.length;
var i__6219__auto___15740 = (0);
while(true){
if((i__6219__auto___15740 < len__6218__auto___15739)){
args__6225__auto__.push((arguments[i__6219__auto___15740]));

var G__15741 = (i__6219__auto___15740 + (1));
i__6219__auto___15740 = G__15741;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((1) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((1)),(0))):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6226__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15737){
var vec__15738 = p__15737;
var speed = cljs.core.nth.call(null,vec__15738,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15738,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq15735){
var G__15736 = cljs.core.first.call(null,seq15735);
var seq15735__$1 = cljs.core.next.call(null,seq15735);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__15736,seq15735__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15746 = arguments.length;
var i__6219__auto___15747 = (0);
while(true){
if((i__6219__auto___15747 < len__6218__auto___15746)){
args__6225__auto__.push((arguments[i__6219__auto___15747]));

var G__15748 = (i__6219__auto___15747 + (1));
i__6219__auto___15747 = G__15748;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((1) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((1)),(0))):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6226__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15744){
var vec__15745 = p__15744;
var speed = cljs.core.nth.call(null,vec__15745,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15745,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq15742){
var G__15743 = cljs.core.first.call(null,seq15742);
var seq15742__$1 = cljs.core.next.call(null,seq15742);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__15743,seq15742__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15753 = arguments.length;
var i__6219__auto___15754 = (0);
while(true){
if((i__6219__auto___15754 < len__6218__auto___15753)){
args__6225__auto__.push((arguments[i__6219__auto___15754]));

var G__15755 = (i__6219__auto___15754 + (1));
i__6219__auto___15754 = G__15755;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((1) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((1)),(0))):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6226__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15751){
var vec__15752 = p__15751;
var speed = cljs.core.nth.call(null,vec__15752,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15752,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq15749){
var G__15750 = cljs.core.first.call(null,seq15749);
var seq15749__$1 = cljs.core.next.call(null,seq15749);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__15750,seq15749__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15760 = arguments.length;
var i__6219__auto___15761 = (0);
while(true){
if((i__6219__auto___15761 < len__6218__auto___15760)){
args__6225__auto__.push((arguments[i__6219__auto___15761]));

var G__15762 = (i__6219__auto___15761 + (1));
i__6219__auto___15761 = G__15762;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((1) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((1)),(0))):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6226__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15758){
var vec__15759 = p__15758;
var speed = cljs.core.nth.call(null,vec__15759,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15759,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq15756){
var G__15757 = cljs.core.first.call(null,seq15756);
var seq15756__$1 = cljs.core.next.call(null,seq15756);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__15757,seq15756__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15767 = arguments.length;
var i__6219__auto___15768 = (0);
while(true){
if((i__6219__auto___15768 < len__6218__auto___15767)){
args__6225__auto__.push((arguments[i__6219__auto___15768]));

var G__15769 = (i__6219__auto___15768 + (1));
i__6219__auto___15768 = G__15769;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((1) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((1)),(0))):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6226__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15765){
var vec__15766 = p__15765;
var speed = cljs.core.nth.call(null,vec__15766,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15766,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq15763){
var G__15764 = cljs.core.first.call(null,seq15763);
var seq15763__$1 = cljs.core.next.call(null,seq15763);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__15764,seq15763__$1);
});
jayq.core.siblings = (function jayq$core$siblings(var_args){
var args15770 = [];
var len__6218__auto___15773 = arguments.length;
var i__6219__auto___15774 = (0);
while(true){
if((i__6219__auto___15774 < len__6218__auto___15773)){
args15770.push((arguments[i__6219__auto___15774]));

var G__15775 = (i__6219__auto___15774 + (1));
i__6219__auto___15774 = G__15775;
continue;
} else {
}
break;
}

var G__15772 = args15770.length;
switch (G__15772) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15770.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;
jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var args15777 = [];
var len__6218__auto___15780 = arguments.length;
var i__6219__auto___15781 = (0);
while(true){
if((i__6219__auto___15781 < len__6218__auto___15780)){
args15777.push((arguments[i__6219__auto___15781]));

var G__15782 = (i__6219__auto___15781 + (1));
i__6219__auto___15781 = G__15782;
continue;
} else {
}
break;
}

var G__15779 = args15777.length;
switch (G__15779) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15777.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;
jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var args15784 = [];
var len__6218__auto___15787 = arguments.length;
var i__6219__auto___15788 = (0);
while(true){
if((i__6219__auto___15788 < len__6218__auto___15787)){
args15784.push((arguments[i__6219__auto___15788]));

var G__15789 = (i__6219__auto___15788 + (1));
i__6219__auto___15788 = G__15789;
continue;
} else {
}
break;
}

var G__15786 = args15784.length;
switch (G__15786) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15784.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;
jayq.core.children = (function jayq$core$children(var_args){
var args15791 = [];
var len__6218__auto___15794 = arguments.length;
var i__6219__auto___15795 = (0);
while(true){
if((i__6219__auto___15795 < len__6218__auto___15794)){
args15791.push((arguments[i__6219__auto___15795]));

var G__15796 = (i__6219__auto___15795 + (1));
i__6219__auto___15795 = G__15796;
continue;
} else {
}
break;
}

var G__15793 = args15791.length;
switch (G__15793) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15791.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;
jayq.core.next = (function jayq$core$next(var_args){
var args15798 = [];
var len__6218__auto___15801 = arguments.length;
var i__6219__auto___15802 = (0);
while(true){
if((i__6219__auto___15802 < len__6218__auto___15801)){
args15798.push((arguments[i__6219__auto___15802]));

var G__15803 = (i__6219__auto___15802 + (1));
i__6219__auto___15802 = G__15803;
continue;
} else {
}
break;
}

var G__15800 = args15798.length;
switch (G__15800) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15798.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;
jayq.core.prev = (function jayq$core$prev(var_args){
var args15805 = [];
var len__6218__auto___15808 = arguments.length;
var i__6219__auto___15809 = (0);
while(true){
if((i__6219__auto___15809 < len__6218__auto___15808)){
args15805.push((arguments[i__6219__auto___15809]));

var G__15810 = (i__6219__auto___15809 + (1));
i__6219__auto___15809 = G__15810;
continue;
} else {
}
break;
}

var G__15807 = args15805.length;
switch (G__15807) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15805.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;
jayq.core.next_all = (function jayq$core$next_all(var_args){
var args15812 = [];
var len__6218__auto___15815 = arguments.length;
var i__6219__auto___15816 = (0);
while(true){
if((i__6219__auto___15816 < len__6218__auto___15815)){
args15812.push((arguments[i__6219__auto___15816]));

var G__15817 = (i__6219__auto___15816 + (1));
i__6219__auto___15816 = G__15817;
continue;
} else {
}
break;
}

var G__15814 = args15812.length;
switch (G__15814) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15812.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;
jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var args15819 = [];
var len__6218__auto___15822 = arguments.length;
var i__6219__auto___15823 = (0);
while(true){
if((i__6219__auto___15823 < len__6218__auto___15822)){
args15819.push((arguments[i__6219__auto___15823]));

var G__15824 = (i__6219__auto___15823 + (1));
i__6219__auto___15823 = G__15824;
continue;
} else {
}
break;
}

var G__15821 = args15819.length;
switch (G__15821) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15819.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;
jayq.core.next_until = (function jayq$core$next_until(var_args){
var args15826 = [];
var len__6218__auto___15829 = arguments.length;
var i__6219__auto___15830 = (0);
while(true){
if((i__6219__auto___15830 < len__6218__auto___15829)){
args15826.push((arguments[i__6219__auto___15830]));

var G__15831 = (i__6219__auto___15830 + (1));
i__6219__auto___15830 = G__15831;
continue;
} else {
}
break;
}

var G__15828 = args15826.length;
switch (G__15828) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15826.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;
jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var args15833 = [];
var len__6218__auto___15836 = arguments.length;
var i__6219__auto___15837 = (0);
while(true){
if((i__6219__auto___15837 < len__6218__auto___15836)){
args15833.push((arguments[i__6219__auto___15837]));

var G__15838 = (i__6219__auto___15837 + (1));
i__6219__auto___15837 = G__15838;
continue;
} else {
}
break;
}

var G__15835 = args15833.length;
switch (G__15835) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15833.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;
jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15845 = arguments.length;
var i__6219__auto___15846 = (0);
while(true){
if((i__6219__auto___15846 < len__6218__auto___15845)){
args__6225__auto__.push((arguments[i__6219__auto___15846]));

var G__15847 = (i__6219__auto___15846 + (1));
i__6219__auto___15846 = G__15847;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((2) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((2)),(0))):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6226__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__15843){
var vec__15844 = p__15843;
var context = cljs.core.nth.call(null,vec__15844,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq15840){
var G__15841 = cljs.core.first.call(null,seq15840);
var seq15840__$1 = cljs.core.next.call(null,seq15840);
var G__15842 = cljs.core.first.call(null,seq15840__$1);
var seq15840__$2 = cljs.core.next.call(null,seq15840__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__15841,G__15842,seq15840__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args15848 = [];
var len__6218__auto___15851 = arguments.length;
var i__6219__auto___15852 = (0);
while(true){
if((i__6219__auto___15852 < len__6218__auto___15851)){
args15848.push((arguments[i__6219__auto___15852]));

var G__15853 = (i__6219__auto___15852 + (1));
i__6219__auto___15852 = G__15853;
continue;
} else {
}
break;
}

var G__15850 = args15848.length;
switch (G__15850) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15848.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;
jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var args15855 = [];
var len__6218__auto___15858 = arguments.length;
var i__6219__auto___15859 = (0);
while(true){
if((i__6219__auto___15859 < len__6218__auto___15858)){
args15855.push((arguments[i__6219__auto___15859]));

var G__15860 = (i__6219__auto___15859 + (1));
i__6219__auto___15859 = G__15860;
continue;
} else {
}
break;
}

var G__15857 = args15855.length;
switch (G__15857) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15855.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;
jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var args15862 = [];
var len__6218__auto___15865 = arguments.length;
var i__6219__auto___15866 = (0);
while(true){
if((i__6219__auto___15866 < len__6218__auto___15865)){
args15862.push((arguments[i__6219__auto___15866]));

var G__15867 = (i__6219__auto___15866 + (1));
i__6219__auto___15866 = G__15867;
continue;
} else {
}
break;
}

var G__15864 = args15862.length;
switch (G__15864) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15862.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;
jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var args15869 = [];
var len__6218__auto___15872 = arguments.length;
var i__6219__auto___15873 = (0);
while(true){
if((i__6219__auto___15873 < len__6218__auto___15872)){
args15869.push((arguments[i__6219__auto___15873]));

var G__15874 = (i__6219__auto___15873 + (1));
i__6219__auto___15873 = G__15874;
continue;
} else {
}
break;
}

var G__15871 = args15869.length;
switch (G__15871) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15869.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;
jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__15878){
var map__15881 = p__15878;
var map__15881__$1 = ((((!((map__15881 == null)))?((((map__15881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15881):map__15881);
var request = map__15881__$1;
var data = cljs.core.get.call(null,map__15881__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__15881__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__15881,map__15881__$1,request,data,contentType){
return (function (p1__15877_SHARP_){
if(cljs.core.truth_((function (){var and__5148__auto__ = ct;
if(cljs.core.truth_(and__5148__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__5148__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__15877_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__15877_SHARP_;
}
});})(ct,map__15881,map__15881__$1,request,data,contentType))
.call(null,((function (ct,map__15881,map__15881__$1,request,data,contentType){
return (function (p1__15876_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__15876_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__15876_SHARP_;
}
});})(ct,map__15881,map__15881__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args15883 = [];
var len__6218__auto___15886 = arguments.length;
var i__6219__auto___15887 = (0);
while(true){
if((i__6219__auto___15887 < len__6218__auto___15886)){
args15883.push((arguments[i__6219__auto___15887]));

var G__15888 = (i__6219__auto___15887 + (1));
i__6219__auto___15887 = G__15888;
continue;
} else {
}
break;
}

var G__15885 = args15883.length;
switch (G__15885) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15883.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__15890,content,callback){
var vec__15892 = p__15890;
var method = cljs.core.nth.call(null,vec__15892,(0),null);
var uri = cljs.core.nth.call(null,vec__15892,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15898 = arguments.length;
var i__6219__auto___15899 = (0);
while(true){
if((i__6219__auto___15899 < len__6218__auto___15898)){
args__6225__auto__.push((arguments[i__6219__auto___15899]));

var G__15900 = (i__6219__auto___15899 + (1));
i__6219__auto___15899 = G__15900;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((2) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((2)),(0))):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6226__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__15896){
var vec__15897 = p__15896;
var func = cljs.core.nth.call(null,vec__15897,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq15893){
var G__15894 = cljs.core.first.call(null,seq15893);
var seq15893__$1 = cljs.core.next.call(null,seq15893);
var G__15895 = cljs.core.first.call(null,seq15893__$1);
var seq15893__$2 = cljs.core.next.call(null,seq15893__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__15894,G__15895,seq15893__$2);
});
jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15906 = arguments.length;
var i__6219__auto___15907 = (0);
while(true){
if((i__6219__auto___15907 < len__6218__auto___15906)){
args__6225__auto__.push((arguments[i__6219__auto___15907]));

var G__15908 = (i__6219__auto___15907 + (1));
i__6219__auto___15907 = G__15908;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((2) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((2)),(0))):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6226__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__15904){
var vec__15905 = p__15904;
var sel = cljs.core.nth.call(null,vec__15905,(0),null);
var data = cljs.core.nth.call(null,vec__15905,(1),null);
var handler = cljs.core.nth.call(null,vec__15905,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq15901){
var G__15902 = cljs.core.first.call(null,seq15901);
var seq15901__$1 = cljs.core.next.call(null,seq15901);
var G__15903 = cljs.core.first.call(null,seq15901__$1);
var seq15901__$2 = cljs.core.next.call(null,seq15901__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__15902,G__15903,seq15901__$2);
});
jayq.core.one = (function jayq$core$one(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15914 = arguments.length;
var i__6219__auto___15915 = (0);
while(true){
if((i__6219__auto___15915 < len__6218__auto___15914)){
args__6225__auto__.push((arguments[i__6219__auto___15915]));

var G__15916 = (i__6219__auto___15915 + (1));
i__6219__auto___15915 = G__15916;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((2) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((2)),(0))):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6226__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__15912){
var vec__15913 = p__15912;
var sel = cljs.core.nth.call(null,vec__15913,(0),null);
var data = cljs.core.nth.call(null,vec__15913,(1),null);
var handler = cljs.core.nth.call(null,vec__15913,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq15909){
var G__15910 = cljs.core.first.call(null,seq15909);
var seq15909__$1 = cljs.core.next.call(null,seq15909);
var G__15911 = cljs.core.first.call(null,seq15909__$1);
var seq15909__$2 = cljs.core.next.call(null,seq15909__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__15910,G__15911,seq15909__$2);
});
jayq.core.off = (function jayq$core$off(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15922 = arguments.length;
var i__6219__auto___15923 = (0);
while(true){
if((i__6219__auto___15923 < len__6218__auto___15922)){
args__6225__auto__.push((arguments[i__6219__auto___15923]));

var G__15924 = (i__6219__auto___15923 + (1));
i__6219__auto___15923 = G__15924;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((2) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((2)),(0))):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6226__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__15920){
var vec__15921 = p__15920;
var sel = cljs.core.nth.call(null,vec__15921,(0),null);
var handler = cljs.core.nth.call(null,vec__15921,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq15917){
var G__15918 = cljs.core.first.call(null,seq15917);
var seq15917__$1 = cljs.core.next.call(null,seq15917);
var G__15919 = cljs.core.first.call(null,seq15917__$1);
var seq15917__$2 = cljs.core.next.call(null,seq15917__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__15918,G__15919,seq15917__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args15925 = [];
var len__6218__auto___15928 = arguments.length;
var i__6219__auto___15929 = (0);
while(true){
if((i__6219__auto___15929 < len__6218__auto___15928)){
args15925.push((arguments[i__6219__auto___15929]));

var G__15930 = (i__6219__auto___15929 + (1));
i__6219__auto___15929 = G__15930;
continue;
} else {
}
break;
}

var G__15927 = args15925.length;
switch (G__15927) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15925.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;
jayq.core.width = (function jayq$core$width(var_args){
var args15932 = [];
var len__6218__auto___15935 = arguments.length;
var i__6219__auto___15936 = (0);
while(true){
if((i__6219__auto___15936 < len__6218__auto___15935)){
args15932.push((arguments[i__6219__auto___15936]));

var G__15937 = (i__6219__auto___15936 + (1));
i__6219__auto___15936 = G__15937;
continue;
} else {
}
break;
}

var G__15934 = args15932.length;
switch (G__15934) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15932.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;
jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var args15939 = [];
var len__6218__auto___15942 = arguments.length;
var i__6219__auto___15943 = (0);
while(true){
if((i__6219__auto___15943 < len__6218__auto___15942)){
args15939.push((arguments[i__6219__auto___15943]));

var G__15944 = (i__6219__auto___15943 + (1));
i__6219__auto___15943 = G__15944;
continue;
} else {
}
break;
}

var G__15941 = args15939.length;
switch (G__15941) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15939.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;
jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var args15946 = [];
var len__6218__auto___15949 = arguments.length;
var i__6219__auto___15950 = (0);
while(true){
if((i__6219__auto___15950 < len__6218__auto___15949)){
args15946.push((arguments[i__6219__auto___15950]));

var G__15951 = (i__6219__auto___15950 + (1));
i__6219__auto___15950 = G__15951;
continue;
} else {
}
break;
}

var G__15948 = args15946.length;
switch (G__15948) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15946.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;
jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var args15953 = [];
var len__6218__auto___15956 = arguments.length;
var i__6219__auto___15957 = (0);
while(true){
if((i__6219__auto___15957 < len__6218__auto___15956)){
args15953.push((arguments[i__6219__auto___15957]));

var G__15958 = (i__6219__auto___15957 + (1));
i__6219__auto___15957 = G__15958;
continue;
} else {
}
break;
}

var G__15955 = args15953.length;
switch (G__15955) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15953.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;
jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var args15960 = [];
var len__6218__auto___15963 = arguments.length;
var i__6219__auto___15964 = (0);
while(true){
if((i__6219__auto___15964 < len__6218__auto___15963)){
args15960.push((arguments[i__6219__auto___15964]));

var G__15965 = (i__6219__auto___15964 + (1));
i__6219__auto___15964 = G__15965;
continue;
} else {
}
break;
}

var G__15962 = args15960.length;
switch (G__15962) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15960.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;
jayq.core.done = (function jayq$core$done(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15969 = arguments.length;
var i__6219__auto___15970 = (0);
while(true){
if((i__6219__auto___15970 < len__6218__auto___15969)){
args__6225__auto__.push((arguments[i__6219__auto___15970]));

var G__15971 = (i__6219__auto___15970 + (1));
i__6219__auto___15970 = G__15971;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((1) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((1)),(0))):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6226__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq15967){
var G__15968 = cljs.core.first.call(null,seq15967);
var seq15967__$1 = cljs.core.next.call(null,seq15967);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__15968,seq15967__$1);
});
jayq.core.fail = (function jayq$core$fail(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15974 = arguments.length;
var i__6219__auto___15975 = (0);
while(true){
if((i__6219__auto___15975 < len__6218__auto___15974)){
args__6225__auto__.push((arguments[i__6219__auto___15975]));

var G__15976 = (i__6219__auto___15975 + (1));
i__6219__auto___15975 = G__15976;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((1) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((1)),(0))):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6226__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq15972){
var G__15973 = cljs.core.first.call(null,seq15972);
var seq15972__$1 = cljs.core.next.call(null,seq15972);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__15973,seq15972__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args15977 = [];
var len__6218__auto___15980 = arguments.length;
var i__6219__auto___15981 = (0);
while(true){
if((i__6219__auto___15981 < len__6218__auto___15980)){
args15977.push((arguments[i__6219__auto___15981]));

var G__15982 = (i__6219__auto___15981 + (1));
i__6219__auto___15981 = G__15982;
continue;
} else {
}
break;
}

var G__15979 = args15977.length;
switch (G__15979) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15977.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;
jayq.core.always = (function jayq$core$always(var_args){
var args__6225__auto__ = [];
var len__6218__auto___15986 = arguments.length;
var i__6219__auto___15987 = (0);
while(true){
if((i__6219__auto___15987 < len__6218__auto___15986)){
args__6225__auto__.push((arguments[i__6219__auto___15987]));

var G__15988 = (i__6219__auto___15987 + (1));
i__6219__auto___15987 = G__15988;
continue;
} else {
}
break;
}

var argseq__6226__auto__ = ((((1) < args__6225__auto__.length))?(new cljs.core.IndexedSeq(args__6225__auto__.slice((1)),(0))):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6226__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq15984){
var G__15985 = cljs.core.first.call(null,seq15984);
var seq15984__$1 = cljs.core.next.call(null,seq15984);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__15985,seq15984__$1);
});
jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var args15989 = [];
var len__6218__auto___15992 = arguments.length;
var i__6219__auto___15993 = (0);
while(true){
if((i__6219__auto___15993 < len__6218__auto___15992)){
args15989.push((arguments[i__6219__auto___15993]));

var G__15994 = (i__6219__auto___15993 + (1));
i__6219__auto___15993 = G__15994;
continue;
} else {
}
break;
}

var G__15991 = args15989.length;
switch (G__15991) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15989.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;
jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map