// Compiled by ClojureScript 1.7.170 {}
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
var args15807 = [];
var len__6226__auto___15810 = arguments.length;
var i__6227__auto___15811 = (0);
while(true){
if((i__6227__auto___15811 < len__6226__auto___15810)){
args15807.push((arguments[i__6227__auto___15811]));

var G__15812 = (i__6227__auto___15811 + (1));
i__6227__auto___15811 = G__15812;
continue;
} else {
}
break;
}

var G__15809 = args15807.length;
switch (G__15809) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15807.length)].join('')));

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
var or__5168__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
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
var G__15815 = null;
var G__15815__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__15815__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__15815 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15815__2.call(this,self__,k);
case 3:
return G__15815__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15815.cljs$core$IFn$_invoke$arity$2 = G__15815__2;
G__15815.cljs$core$IFn$_invoke$arity$3 = G__15815__3;
return G__15815;
})()
;

jQuery.prototype.apply = (function (self__,args15814){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15814)));
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
var args__6233__auto__ = [];
var len__6226__auto___15821 = arguments.length;
var i__6227__auto___15822 = (0);
while(true){
if((i__6227__auto___15822 < len__6226__auto___15821)){
args__6233__auto__.push((arguments[i__6227__auto___15822]));

var G__15823 = (i__6227__auto___15822 + (1));
i__6227__auto___15822 = G__15823;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__15819){
var vec__15820 = p__15819;
var speed = cljs.core.nth.call(null,vec__15820,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15820,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq15816){
var G__15817 = cljs.core.first.call(null,seq15816);
var seq15816__$1 = cljs.core.next.call(null,seq15816);
var G__15818 = cljs.core.first.call(null,seq15816__$1);
var seq15816__$2 = cljs.core.next.call(null,seq15816__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__15817,G__15818,seq15816__$2);
});
jayq.core.text = (function jayq$core$text(var_args){
var args15824 = [];
var len__6226__auto___15827 = arguments.length;
var i__6227__auto___15828 = (0);
while(true){
if((i__6227__auto___15828 < len__6226__auto___15827)){
args15824.push((arguments[i__6227__auto___15828]));

var G__15829 = (i__6227__auto___15828 + (1));
i__6227__auto___15828 = G__15829;
continue;
} else {
}
break;
}

var G__15826 = args15824.length;
switch (G__15826) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15824.length)].join('')));

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
var args15831 = [];
var len__6226__auto___15834 = arguments.length;
var i__6227__auto___15835 = (0);
while(true){
if((i__6227__auto___15835 < len__6226__auto___15834)){
args15831.push((arguments[i__6227__auto___15835]));

var G__15836 = (i__6227__auto___15835 + (1));
i__6227__auto___15835 = G__15836;
continue;
} else {
}
break;
}

var G__15833 = args15831.length;
switch (G__15833) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15831.length)].join('')));

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
var args15838 = [];
var len__6226__auto___15841 = arguments.length;
var i__6227__auto___15842 = (0);
while(true){
if((i__6227__auto___15842 < len__6226__auto___15841)){
args15838.push((arguments[i__6227__auto___15842]));

var G__15843 = (i__6227__auto___15842 + (1));
i__6227__auto___15842 = G__15843;
continue;
} else {
}
break;
}

var G__15840 = args15838.length;
switch (G__15840) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15838.length)].join('')));

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
var args15845 = [];
var len__6226__auto___15848 = arguments.length;
var i__6227__auto___15849 = (0);
while(true){
if((i__6227__auto___15849 < len__6226__auto___15848)){
args15845.push((arguments[i__6227__auto___15849]));

var G__15850 = (i__6227__auto___15849 + (1));
i__6227__auto___15849 = G__15850;
continue;
} else {
}
break;
}

var G__15847 = args15845.length;
switch (G__15847) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15845.length)].join('')));

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
var args15852 = [];
var len__6226__auto___15855 = arguments.length;
var i__6227__auto___15856 = (0);
while(true){
if((i__6227__auto___15856 < len__6226__auto___15855)){
args15852.push((arguments[i__6227__auto___15856]));

var G__15857 = (i__6227__auto___15856 + (1));
i__6227__auto___15856 = G__15857;
continue;
} else {
}
break;
}

var G__15854 = args15852.length;
switch (G__15854) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15852.length)].join('')));

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
var args15859 = [];
var len__6226__auto___15862 = arguments.length;
var i__6227__auto___15863 = (0);
while(true){
if((i__6227__auto___15863 < len__6226__auto___15862)){
args15859.push((arguments[i__6227__auto___15863]));

var G__15864 = (i__6227__auto___15863 + (1));
i__6227__auto___15863 = G__15864;
continue;
} else {
}
break;
}

var G__15861 = args15859.length;
switch (G__15861) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15859.length)].join('')));

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
var args15866 = [];
var len__6226__auto___15869 = arguments.length;
var i__6227__auto___15870 = (0);
while(true){
if((i__6227__auto___15870 < len__6226__auto___15869)){
args15866.push((arguments[i__6227__auto___15870]));

var G__15871 = (i__6227__auto___15870 + (1));
i__6227__auto___15870 = G__15871;
continue;
} else {
}
break;
}

var G__15868 = args15866.length;
switch (G__15868) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15866.length)].join('')));

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
var args__6233__auto__ = [];
var len__6226__auto___15877 = arguments.length;
var i__6227__auto___15878 = (0);
while(true){
if((i__6227__auto___15878 < len__6226__auto___15877)){
args__6233__auto__.push((arguments[i__6227__auto___15878]));

var G__15879 = (i__6227__auto___15878 + (1));
i__6227__auto___15878 = G__15879;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15875){
var vec__15876 = p__15875;
var speed = cljs.core.nth.call(null,vec__15876,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15876,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq15873){
var G__15874 = cljs.core.first.call(null,seq15873);
var seq15873__$1 = cljs.core.next.call(null,seq15873);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__15874,seq15873__$1);
});
jayq.core.show = (function jayq$core$show(var_args){
var args__6233__auto__ = [];
var len__6226__auto___15884 = arguments.length;
var i__6227__auto___15885 = (0);
while(true){
if((i__6227__auto___15885 < len__6226__auto___15884)){
args__6233__auto__.push((arguments[i__6227__auto___15885]));

var G__15886 = (i__6227__auto___15885 + (1));
i__6227__auto___15885 = G__15886;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15882){
var vec__15883 = p__15882;
var speed = cljs.core.nth.call(null,vec__15883,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15883,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq15880){
var G__15881 = cljs.core.first.call(null,seq15880);
var seq15880__$1 = cljs.core.next.call(null,seq15880);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__15881,seq15880__$1);
});
jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__6233__auto__ = [];
var len__6226__auto___15891 = arguments.length;
var i__6227__auto___15892 = (0);
while(true){
if((i__6227__auto___15892 < len__6226__auto___15891)){
args__6233__auto__.push((arguments[i__6227__auto___15892]));

var G__15893 = (i__6227__auto___15892 + (1));
i__6227__auto___15892 = G__15893;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15889){
var vec__15890 = p__15889;
var speed = cljs.core.nth.call(null,vec__15890,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15890,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq15887){
var G__15888 = cljs.core.first.call(null,seq15887);
var seq15887__$1 = cljs.core.next.call(null,seq15887);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__15888,seq15887__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__6233__auto__ = [];
var len__6226__auto___15898 = arguments.length;
var i__6227__auto___15899 = (0);
while(true){
if((i__6227__auto___15899 < len__6226__auto___15898)){
args__6233__auto__.push((arguments[i__6227__auto___15899]));

var G__15900 = (i__6227__auto___15899 + (1));
i__6227__auto___15899 = G__15900;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15896){
var vec__15897 = p__15896;
var speed = cljs.core.nth.call(null,vec__15897,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15897,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq15894){
var G__15895 = cljs.core.first.call(null,seq15894);
var seq15894__$1 = cljs.core.next.call(null,seq15894);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__15895,seq15894__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__6233__auto__ = [];
var len__6226__auto___15905 = arguments.length;
var i__6227__auto___15906 = (0);
while(true){
if((i__6227__auto___15906 < len__6226__auto___15905)){
args__6233__auto__.push((arguments[i__6227__auto___15906]));

var G__15907 = (i__6227__auto___15906 + (1));
i__6227__auto___15906 = G__15907;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15903){
var vec__15904 = p__15903;
var speed = cljs.core.nth.call(null,vec__15904,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15904,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq15901){
var G__15902 = cljs.core.first.call(null,seq15901);
var seq15901__$1 = cljs.core.next.call(null,seq15901);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__15902,seq15901__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__6233__auto__ = [];
var len__6226__auto___15912 = arguments.length;
var i__6227__auto___15913 = (0);
while(true){
if((i__6227__auto___15913 < len__6226__auto___15912)){
args__6233__auto__.push((arguments[i__6227__auto___15913]));

var G__15914 = (i__6227__auto___15913 + (1));
i__6227__auto___15913 = G__15914;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15910){
var vec__15911 = p__15910;
var speed = cljs.core.nth.call(null,vec__15911,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15911,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq15908){
var G__15909 = cljs.core.first.call(null,seq15908);
var seq15908__$1 = cljs.core.next.call(null,seq15908);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__15909,seq15908__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__6233__auto__ = [];
var len__6226__auto___15919 = arguments.length;
var i__6227__auto___15920 = (0);
while(true){
if((i__6227__auto___15920 < len__6226__auto___15919)){
args__6233__auto__.push((arguments[i__6227__auto___15920]));

var G__15921 = (i__6227__auto___15920 + (1));
i__6227__auto___15920 = G__15921;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15917){
var vec__15918 = p__15917;
var speed = cljs.core.nth.call(null,vec__15918,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15918,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq15915){
var G__15916 = cljs.core.first.call(null,seq15915);
var seq15915__$1 = cljs.core.next.call(null,seq15915);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__15916,seq15915__$1);
});
jayq.core.siblings = (function jayq$core$siblings(var_args){
var args15922 = [];
var len__6226__auto___15925 = arguments.length;
var i__6227__auto___15926 = (0);
while(true){
if((i__6227__auto___15926 < len__6226__auto___15925)){
args15922.push((arguments[i__6227__auto___15926]));

var G__15927 = (i__6227__auto___15926 + (1));
i__6227__auto___15926 = G__15927;
continue;
} else {
}
break;
}

var G__15924 = args15922.length;
switch (G__15924) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15922.length)].join('')));

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
var args15929 = [];
var len__6226__auto___15932 = arguments.length;
var i__6227__auto___15933 = (0);
while(true){
if((i__6227__auto___15933 < len__6226__auto___15932)){
args15929.push((arguments[i__6227__auto___15933]));

var G__15934 = (i__6227__auto___15933 + (1));
i__6227__auto___15933 = G__15934;
continue;
} else {
}
break;
}

var G__15931 = args15929.length;
switch (G__15931) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15929.length)].join('')));

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
var args15936 = [];
var len__6226__auto___15939 = arguments.length;
var i__6227__auto___15940 = (0);
while(true){
if((i__6227__auto___15940 < len__6226__auto___15939)){
args15936.push((arguments[i__6227__auto___15940]));

var G__15941 = (i__6227__auto___15940 + (1));
i__6227__auto___15940 = G__15941;
continue;
} else {
}
break;
}

var G__15938 = args15936.length;
switch (G__15938) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15936.length)].join('')));

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
var args15943 = [];
var len__6226__auto___15946 = arguments.length;
var i__6227__auto___15947 = (0);
while(true){
if((i__6227__auto___15947 < len__6226__auto___15946)){
args15943.push((arguments[i__6227__auto___15947]));

var G__15948 = (i__6227__auto___15947 + (1));
i__6227__auto___15947 = G__15948;
continue;
} else {
}
break;
}

var G__15945 = args15943.length;
switch (G__15945) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15943.length)].join('')));

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
var args15950 = [];
var len__6226__auto___15953 = arguments.length;
var i__6227__auto___15954 = (0);
while(true){
if((i__6227__auto___15954 < len__6226__auto___15953)){
args15950.push((arguments[i__6227__auto___15954]));

var G__15955 = (i__6227__auto___15954 + (1));
i__6227__auto___15954 = G__15955;
continue;
} else {
}
break;
}

var G__15952 = args15950.length;
switch (G__15952) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15950.length)].join('')));

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
var args15957 = [];
var len__6226__auto___15960 = arguments.length;
var i__6227__auto___15961 = (0);
while(true){
if((i__6227__auto___15961 < len__6226__auto___15960)){
args15957.push((arguments[i__6227__auto___15961]));

var G__15962 = (i__6227__auto___15961 + (1));
i__6227__auto___15961 = G__15962;
continue;
} else {
}
break;
}

var G__15959 = args15957.length;
switch (G__15959) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15957.length)].join('')));

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
var args15964 = [];
var len__6226__auto___15967 = arguments.length;
var i__6227__auto___15968 = (0);
while(true){
if((i__6227__auto___15968 < len__6226__auto___15967)){
args15964.push((arguments[i__6227__auto___15968]));

var G__15969 = (i__6227__auto___15968 + (1));
i__6227__auto___15968 = G__15969;
continue;
} else {
}
break;
}

var G__15966 = args15964.length;
switch (G__15966) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15964.length)].join('')));

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
var args15971 = [];
var len__6226__auto___15974 = arguments.length;
var i__6227__auto___15975 = (0);
while(true){
if((i__6227__auto___15975 < len__6226__auto___15974)){
args15971.push((arguments[i__6227__auto___15975]));

var G__15976 = (i__6227__auto___15975 + (1));
i__6227__auto___15975 = G__15976;
continue;
} else {
}
break;
}

var G__15973 = args15971.length;
switch (G__15973) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15971.length)].join('')));

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
var args15978 = [];
var len__6226__auto___15981 = arguments.length;
var i__6227__auto___15982 = (0);
while(true){
if((i__6227__auto___15982 < len__6226__auto___15981)){
args15978.push((arguments[i__6227__auto___15982]));

var G__15983 = (i__6227__auto___15982 + (1));
i__6227__auto___15982 = G__15983;
continue;
} else {
}
break;
}

var G__15980 = args15978.length;
switch (G__15980) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15978.length)].join('')));

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
var args15985 = [];
var len__6226__auto___15988 = arguments.length;
var i__6227__auto___15989 = (0);
while(true){
if((i__6227__auto___15989 < len__6226__auto___15988)){
args15985.push((arguments[i__6227__auto___15989]));

var G__15990 = (i__6227__auto___15989 + (1));
i__6227__auto___15989 = G__15990;
continue;
} else {
}
break;
}

var G__15987 = args15985.length;
switch (G__15987) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15985.length)].join('')));

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
var args__6233__auto__ = [];
var len__6226__auto___15997 = arguments.length;
var i__6227__auto___15998 = (0);
while(true){
if((i__6227__auto___15998 < len__6226__auto___15997)){
args__6233__auto__.push((arguments[i__6227__auto___15998]));

var G__15999 = (i__6227__auto___15998 + (1));
i__6227__auto___15998 = G__15999;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__15995){
var vec__15996 = p__15995;
var context = cljs.core.nth.call(null,vec__15996,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq15992){
var G__15993 = cljs.core.first.call(null,seq15992);
var seq15992__$1 = cljs.core.next.call(null,seq15992);
var G__15994 = cljs.core.first.call(null,seq15992__$1);
var seq15992__$2 = cljs.core.next.call(null,seq15992__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__15993,G__15994,seq15992__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args16000 = [];
var len__6226__auto___16003 = arguments.length;
var i__6227__auto___16004 = (0);
while(true){
if((i__6227__auto___16004 < len__6226__auto___16003)){
args16000.push((arguments[i__6227__auto___16004]));

var G__16005 = (i__6227__auto___16004 + (1));
i__6227__auto___16004 = G__16005;
continue;
} else {
}
break;
}

var G__16002 = args16000.length;
switch (G__16002) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16000.length)].join('')));

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
var args16007 = [];
var len__6226__auto___16010 = arguments.length;
var i__6227__auto___16011 = (0);
while(true){
if((i__6227__auto___16011 < len__6226__auto___16010)){
args16007.push((arguments[i__6227__auto___16011]));

var G__16012 = (i__6227__auto___16011 + (1));
i__6227__auto___16011 = G__16012;
continue;
} else {
}
break;
}

var G__16009 = args16007.length;
switch (G__16009) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16007.length)].join('')));

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
var args16014 = [];
var len__6226__auto___16017 = arguments.length;
var i__6227__auto___16018 = (0);
while(true){
if((i__6227__auto___16018 < len__6226__auto___16017)){
args16014.push((arguments[i__6227__auto___16018]));

var G__16019 = (i__6227__auto___16018 + (1));
i__6227__auto___16018 = G__16019;
continue;
} else {
}
break;
}

var G__16016 = args16014.length;
switch (G__16016) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16014.length)].join('')));

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
var args16021 = [];
var len__6226__auto___16024 = arguments.length;
var i__6227__auto___16025 = (0);
while(true){
if((i__6227__auto___16025 < len__6226__auto___16024)){
args16021.push((arguments[i__6227__auto___16025]));

var G__16026 = (i__6227__auto___16025 + (1));
i__6227__auto___16025 = G__16026;
continue;
} else {
}
break;
}

var G__16023 = args16021.length;
switch (G__16023) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16021.length)].join('')));

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
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__16030){
var map__16033 = p__16030;
var map__16033__$1 = ((((!((map__16033 == null)))?((((map__16033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16033):map__16033);
var request = map__16033__$1;
var data = cljs.core.get.call(null,map__16033__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__16033__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__16033,map__16033__$1,request,data,contentType){
return (function (p1__16029_SHARP_){
if(cljs.core.truth_((function (){var and__5156__auto__ = ct;
if(cljs.core.truth_(and__5156__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__5156__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__16029_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__16029_SHARP_;
}
});})(ct,map__16033,map__16033__$1,request,data,contentType))
.call(null,((function (ct,map__16033,map__16033__$1,request,data,contentType){
return (function (p1__16028_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__16028_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__16028_SHARP_;
}
});})(ct,map__16033,map__16033__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args16035 = [];
var len__6226__auto___16038 = arguments.length;
var i__6227__auto___16039 = (0);
while(true){
if((i__6227__auto___16039 < len__6226__auto___16038)){
args16035.push((arguments[i__6227__auto___16039]));

var G__16040 = (i__6227__auto___16039 + (1));
i__6227__auto___16039 = G__16040;
continue;
} else {
}
break;
}

var G__16037 = args16035.length;
switch (G__16037) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16035.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__16042,content,callback){
var vec__16044 = p__16042;
var method = cljs.core.nth.call(null,vec__16044,(0),null);
var uri = cljs.core.nth.call(null,vec__16044,(1),null);
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
var args__6233__auto__ = [];
var len__6226__auto___16050 = arguments.length;
var i__6227__auto___16051 = (0);
while(true){
if((i__6227__auto___16051 < len__6226__auto___16050)){
args__6233__auto__.push((arguments[i__6227__auto___16051]));

var G__16052 = (i__6227__auto___16051 + (1));
i__6227__auto___16051 = G__16052;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__16048){
var vec__16049 = p__16048;
var func = cljs.core.nth.call(null,vec__16049,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq16045){
var G__16046 = cljs.core.first.call(null,seq16045);
var seq16045__$1 = cljs.core.next.call(null,seq16045);
var G__16047 = cljs.core.first.call(null,seq16045__$1);
var seq16045__$2 = cljs.core.next.call(null,seq16045__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__16046,G__16047,seq16045__$2);
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
var args__6233__auto__ = [];
var len__6226__auto___16058 = arguments.length;
var i__6227__auto___16059 = (0);
while(true){
if((i__6227__auto___16059 < len__6226__auto___16058)){
args__6233__auto__.push((arguments[i__6227__auto___16059]));

var G__16060 = (i__6227__auto___16059 + (1));
i__6227__auto___16059 = G__16060;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__16056){
var vec__16057 = p__16056;
var sel = cljs.core.nth.call(null,vec__16057,(0),null);
var data = cljs.core.nth.call(null,vec__16057,(1),null);
var handler = cljs.core.nth.call(null,vec__16057,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq16053){
var G__16054 = cljs.core.first.call(null,seq16053);
var seq16053__$1 = cljs.core.next.call(null,seq16053);
var G__16055 = cljs.core.first.call(null,seq16053__$1);
var seq16053__$2 = cljs.core.next.call(null,seq16053__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__16054,G__16055,seq16053__$2);
});
jayq.core.one = (function jayq$core$one(var_args){
var args__6233__auto__ = [];
var len__6226__auto___16066 = arguments.length;
var i__6227__auto___16067 = (0);
while(true){
if((i__6227__auto___16067 < len__6226__auto___16066)){
args__6233__auto__.push((arguments[i__6227__auto___16067]));

var G__16068 = (i__6227__auto___16067 + (1));
i__6227__auto___16067 = G__16068;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__16064){
var vec__16065 = p__16064;
var sel = cljs.core.nth.call(null,vec__16065,(0),null);
var data = cljs.core.nth.call(null,vec__16065,(1),null);
var handler = cljs.core.nth.call(null,vec__16065,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq16061){
var G__16062 = cljs.core.first.call(null,seq16061);
var seq16061__$1 = cljs.core.next.call(null,seq16061);
var G__16063 = cljs.core.first.call(null,seq16061__$1);
var seq16061__$2 = cljs.core.next.call(null,seq16061__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__16062,G__16063,seq16061__$2);
});
jayq.core.off = (function jayq$core$off(var_args){
var args__6233__auto__ = [];
var len__6226__auto___16074 = arguments.length;
var i__6227__auto___16075 = (0);
while(true){
if((i__6227__auto___16075 < len__6226__auto___16074)){
args__6233__auto__.push((arguments[i__6227__auto___16075]));

var G__16076 = (i__6227__auto___16075 + (1));
i__6227__auto___16075 = G__16076;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__16072){
var vec__16073 = p__16072;
var sel = cljs.core.nth.call(null,vec__16073,(0),null);
var handler = cljs.core.nth.call(null,vec__16073,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq16069){
var G__16070 = cljs.core.first.call(null,seq16069);
var seq16069__$1 = cljs.core.next.call(null,seq16069);
var G__16071 = cljs.core.first.call(null,seq16069__$1);
var seq16069__$2 = cljs.core.next.call(null,seq16069__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__16070,G__16071,seq16069__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args16077 = [];
var len__6226__auto___16080 = arguments.length;
var i__6227__auto___16081 = (0);
while(true){
if((i__6227__auto___16081 < len__6226__auto___16080)){
args16077.push((arguments[i__6227__auto___16081]));

var G__16082 = (i__6227__auto___16081 + (1));
i__6227__auto___16081 = G__16082;
continue;
} else {
}
break;
}

var G__16079 = args16077.length;
switch (G__16079) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16077.length)].join('')));

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
var args16084 = [];
var len__6226__auto___16087 = arguments.length;
var i__6227__auto___16088 = (0);
while(true){
if((i__6227__auto___16088 < len__6226__auto___16087)){
args16084.push((arguments[i__6227__auto___16088]));

var G__16089 = (i__6227__auto___16088 + (1));
i__6227__auto___16088 = G__16089;
continue;
} else {
}
break;
}

var G__16086 = args16084.length;
switch (G__16086) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16084.length)].join('')));

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
var args16091 = [];
var len__6226__auto___16094 = arguments.length;
var i__6227__auto___16095 = (0);
while(true){
if((i__6227__auto___16095 < len__6226__auto___16094)){
args16091.push((arguments[i__6227__auto___16095]));

var G__16096 = (i__6227__auto___16095 + (1));
i__6227__auto___16095 = G__16096;
continue;
} else {
}
break;
}

var G__16093 = args16091.length;
switch (G__16093) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16091.length)].join('')));

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
var args16098 = [];
var len__6226__auto___16101 = arguments.length;
var i__6227__auto___16102 = (0);
while(true){
if((i__6227__auto___16102 < len__6226__auto___16101)){
args16098.push((arguments[i__6227__auto___16102]));

var G__16103 = (i__6227__auto___16102 + (1));
i__6227__auto___16102 = G__16103;
continue;
} else {
}
break;
}

var G__16100 = args16098.length;
switch (G__16100) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16098.length)].join('')));

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
var args16105 = [];
var len__6226__auto___16108 = arguments.length;
var i__6227__auto___16109 = (0);
while(true){
if((i__6227__auto___16109 < len__6226__auto___16108)){
args16105.push((arguments[i__6227__auto___16109]));

var G__16110 = (i__6227__auto___16109 + (1));
i__6227__auto___16109 = G__16110;
continue;
} else {
}
break;
}

var G__16107 = args16105.length;
switch (G__16107) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16105.length)].join('')));

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
var args16112 = [];
var len__6226__auto___16115 = arguments.length;
var i__6227__auto___16116 = (0);
while(true){
if((i__6227__auto___16116 < len__6226__auto___16115)){
args16112.push((arguments[i__6227__auto___16116]));

var G__16117 = (i__6227__auto___16116 + (1));
i__6227__auto___16116 = G__16117;
continue;
} else {
}
break;
}

var G__16114 = args16112.length;
switch (G__16114) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16112.length)].join('')));

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
var args__6233__auto__ = [];
var len__6226__auto___16121 = arguments.length;
var i__6227__auto___16122 = (0);
while(true){
if((i__6227__auto___16122 < len__6226__auto___16121)){
args__6233__auto__.push((arguments[i__6227__auto___16122]));

var G__16123 = (i__6227__auto___16122 + (1));
i__6227__auto___16122 = G__16123;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq16119){
var G__16120 = cljs.core.first.call(null,seq16119);
var seq16119__$1 = cljs.core.next.call(null,seq16119);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__16120,seq16119__$1);
});
jayq.core.fail = (function jayq$core$fail(var_args){
var args__6233__auto__ = [];
var len__6226__auto___16126 = arguments.length;
var i__6227__auto___16127 = (0);
while(true){
if((i__6227__auto___16127 < len__6226__auto___16126)){
args__6233__auto__.push((arguments[i__6227__auto___16127]));

var G__16128 = (i__6227__auto___16127 + (1));
i__6227__auto___16127 = G__16128;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq16124){
var G__16125 = cljs.core.first.call(null,seq16124);
var seq16124__$1 = cljs.core.next.call(null,seq16124);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__16125,seq16124__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args16129 = [];
var len__6226__auto___16132 = arguments.length;
var i__6227__auto___16133 = (0);
while(true){
if((i__6227__auto___16133 < len__6226__auto___16132)){
args16129.push((arguments[i__6227__auto___16133]));

var G__16134 = (i__6227__auto___16133 + (1));
i__6227__auto___16133 = G__16134;
continue;
} else {
}
break;
}

var G__16131 = args16129.length;
switch (G__16131) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16129.length)].join('')));

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
var args__6233__auto__ = [];
var len__6226__auto___16138 = arguments.length;
var i__6227__auto___16139 = (0);
while(true){
if((i__6227__auto___16139 < len__6226__auto___16138)){
args__6233__auto__.push((arguments[i__6227__auto___16139]));

var G__16140 = (i__6227__auto___16139 + (1));
i__6227__auto___16139 = G__16140;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq16136){
var G__16137 = cljs.core.first.call(null,seq16136);
var seq16136__$1 = cljs.core.next.call(null,seq16136);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__16137,seq16136__$1);
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
var args16141 = [];
var len__6226__auto___16144 = arguments.length;
var i__6227__auto___16145 = (0);
while(true){
if((i__6227__auto___16145 < len__6226__auto___16144)){
args16141.push((arguments[i__6227__auto___16145]));

var G__16146 = (i__6227__auto___16145 + (1));
i__6227__auto___16145 = G__16146;
continue;
} else {
}
break;
}

var G__16143 = args16141.length;
switch (G__16143) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16141.length)].join('')));

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