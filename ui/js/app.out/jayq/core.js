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
var args15792 = [];
var len__6226__auto___15795 = arguments.length;
var i__6227__auto___15796 = (0);
while(true){
if((i__6227__auto___15796 < len__6226__auto___15795)){
args15792.push((arguments[i__6227__auto___15796]));

var G__15797 = (i__6227__auto___15796 + (1));
i__6227__auto___15796 = G__15797;
continue;
} else {
}
break;
}

var G__15794 = args15792.length;
switch (G__15794) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15792.length)].join('')));

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
var G__15800 = null;
var G__15800__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__15800__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__15800 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15800__2.call(this,self__,k);
case 3:
return G__15800__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15800.cljs$core$IFn$_invoke$arity$2 = G__15800__2;
G__15800.cljs$core$IFn$_invoke$arity$3 = G__15800__3;
return G__15800;
})()
;

jQuery.prototype.apply = (function (self__,args15799){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15799)));
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
var len__6226__auto___15806 = arguments.length;
var i__6227__auto___15807 = (0);
while(true){
if((i__6227__auto___15807 < len__6226__auto___15806)){
args__6233__auto__.push((arguments[i__6227__auto___15807]));

var G__15808 = (i__6227__auto___15807 + (1));
i__6227__auto___15807 = G__15808;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__15804){
var vec__15805 = p__15804;
var speed = cljs.core.nth.call(null,vec__15805,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15805,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq15801){
var G__15802 = cljs.core.first.call(null,seq15801);
var seq15801__$1 = cljs.core.next.call(null,seq15801);
var G__15803 = cljs.core.first.call(null,seq15801__$1);
var seq15801__$2 = cljs.core.next.call(null,seq15801__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__15802,G__15803,seq15801__$2);
});
jayq.core.text = (function jayq$core$text(var_args){
var args15809 = [];
var len__6226__auto___15812 = arguments.length;
var i__6227__auto___15813 = (0);
while(true){
if((i__6227__auto___15813 < len__6226__auto___15812)){
args15809.push((arguments[i__6227__auto___15813]));

var G__15814 = (i__6227__auto___15813 + (1));
i__6227__auto___15813 = G__15814;
continue;
} else {
}
break;
}

var G__15811 = args15809.length;
switch (G__15811) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15809.length)].join('')));

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
var args15816 = [];
var len__6226__auto___15819 = arguments.length;
var i__6227__auto___15820 = (0);
while(true){
if((i__6227__auto___15820 < len__6226__auto___15819)){
args15816.push((arguments[i__6227__auto___15820]));

var G__15821 = (i__6227__auto___15820 + (1));
i__6227__auto___15820 = G__15821;
continue;
} else {
}
break;
}

var G__15818 = args15816.length;
switch (G__15818) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15816.length)].join('')));

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
var args15823 = [];
var len__6226__auto___15826 = arguments.length;
var i__6227__auto___15827 = (0);
while(true){
if((i__6227__auto___15827 < len__6226__auto___15826)){
args15823.push((arguments[i__6227__auto___15827]));

var G__15828 = (i__6227__auto___15827 + (1));
i__6227__auto___15827 = G__15828;
continue;
} else {
}
break;
}

var G__15825 = args15823.length;
switch (G__15825) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15823.length)].join('')));

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
var args15830 = [];
var len__6226__auto___15833 = arguments.length;
var i__6227__auto___15834 = (0);
while(true){
if((i__6227__auto___15834 < len__6226__auto___15833)){
args15830.push((arguments[i__6227__auto___15834]));

var G__15835 = (i__6227__auto___15834 + (1));
i__6227__auto___15834 = G__15835;
continue;
} else {
}
break;
}

var G__15832 = args15830.length;
switch (G__15832) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15830.length)].join('')));

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
var args15837 = [];
var len__6226__auto___15840 = arguments.length;
var i__6227__auto___15841 = (0);
while(true){
if((i__6227__auto___15841 < len__6226__auto___15840)){
args15837.push((arguments[i__6227__auto___15841]));

var G__15842 = (i__6227__auto___15841 + (1));
i__6227__auto___15841 = G__15842;
continue;
} else {
}
break;
}

var G__15839 = args15837.length;
switch (G__15839) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15837.length)].join('')));

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
var args15844 = [];
var len__6226__auto___15847 = arguments.length;
var i__6227__auto___15848 = (0);
while(true){
if((i__6227__auto___15848 < len__6226__auto___15847)){
args15844.push((arguments[i__6227__auto___15848]));

var G__15849 = (i__6227__auto___15848 + (1));
i__6227__auto___15848 = G__15849;
continue;
} else {
}
break;
}

var G__15846 = args15844.length;
switch (G__15846) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15844.length)].join('')));

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
var args15851 = [];
var len__6226__auto___15854 = arguments.length;
var i__6227__auto___15855 = (0);
while(true){
if((i__6227__auto___15855 < len__6226__auto___15854)){
args15851.push((arguments[i__6227__auto___15855]));

var G__15856 = (i__6227__auto___15855 + (1));
i__6227__auto___15855 = G__15856;
continue;
} else {
}
break;
}

var G__15853 = args15851.length;
switch (G__15853) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15851.length)].join('')));

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
var len__6226__auto___15862 = arguments.length;
var i__6227__auto___15863 = (0);
while(true){
if((i__6227__auto___15863 < len__6226__auto___15862)){
args__6233__auto__.push((arguments[i__6227__auto___15863]));

var G__15864 = (i__6227__auto___15863 + (1));
i__6227__auto___15863 = G__15864;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15860){
var vec__15861 = p__15860;
var speed = cljs.core.nth.call(null,vec__15861,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15861,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq15858){
var G__15859 = cljs.core.first.call(null,seq15858);
var seq15858__$1 = cljs.core.next.call(null,seq15858);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__15859,seq15858__$1);
});
jayq.core.show = (function jayq$core$show(var_args){
var args__6233__auto__ = [];
var len__6226__auto___15869 = arguments.length;
var i__6227__auto___15870 = (0);
while(true){
if((i__6227__auto___15870 < len__6226__auto___15869)){
args__6233__auto__.push((arguments[i__6227__auto___15870]));

var G__15871 = (i__6227__auto___15870 + (1));
i__6227__auto___15870 = G__15871;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15867){
var vec__15868 = p__15867;
var speed = cljs.core.nth.call(null,vec__15868,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15868,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq15865){
var G__15866 = cljs.core.first.call(null,seq15865);
var seq15865__$1 = cljs.core.next.call(null,seq15865);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__15866,seq15865__$1);
});
jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__6233__auto__ = [];
var len__6226__auto___15876 = arguments.length;
var i__6227__auto___15877 = (0);
while(true){
if((i__6227__auto___15877 < len__6226__auto___15876)){
args__6233__auto__.push((arguments[i__6227__auto___15877]));

var G__15878 = (i__6227__auto___15877 + (1));
i__6227__auto___15877 = G__15878;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15874){
var vec__15875 = p__15874;
var speed = cljs.core.nth.call(null,vec__15875,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15875,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq15872){
var G__15873 = cljs.core.first.call(null,seq15872);
var seq15872__$1 = cljs.core.next.call(null,seq15872);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__15873,seq15872__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__6233__auto__ = [];
var len__6226__auto___15883 = arguments.length;
var i__6227__auto___15884 = (0);
while(true){
if((i__6227__auto___15884 < len__6226__auto___15883)){
args__6233__auto__.push((arguments[i__6227__auto___15884]));

var G__15885 = (i__6227__auto___15884 + (1));
i__6227__auto___15884 = G__15885;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15881){
var vec__15882 = p__15881;
var speed = cljs.core.nth.call(null,vec__15882,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15882,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq15879){
var G__15880 = cljs.core.first.call(null,seq15879);
var seq15879__$1 = cljs.core.next.call(null,seq15879);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__15880,seq15879__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__6233__auto__ = [];
var len__6226__auto___15890 = arguments.length;
var i__6227__auto___15891 = (0);
while(true){
if((i__6227__auto___15891 < len__6226__auto___15890)){
args__6233__auto__.push((arguments[i__6227__auto___15891]));

var G__15892 = (i__6227__auto___15891 + (1));
i__6227__auto___15891 = G__15892;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15888){
var vec__15889 = p__15888;
var speed = cljs.core.nth.call(null,vec__15889,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15889,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq15886){
var G__15887 = cljs.core.first.call(null,seq15886);
var seq15886__$1 = cljs.core.next.call(null,seq15886);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__15887,seq15886__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__6233__auto__ = [];
var len__6226__auto___15897 = arguments.length;
var i__6227__auto___15898 = (0);
while(true){
if((i__6227__auto___15898 < len__6226__auto___15897)){
args__6233__auto__.push((arguments[i__6227__auto___15898]));

var G__15899 = (i__6227__auto___15898 + (1));
i__6227__auto___15898 = G__15899;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15895){
var vec__15896 = p__15895;
var speed = cljs.core.nth.call(null,vec__15896,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15896,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq15893){
var G__15894 = cljs.core.first.call(null,seq15893);
var seq15893__$1 = cljs.core.next.call(null,seq15893);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__15894,seq15893__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__6233__auto__ = [];
var len__6226__auto___15904 = arguments.length;
var i__6227__auto___15905 = (0);
while(true){
if((i__6227__auto___15905 < len__6226__auto___15904)){
args__6233__auto__.push((arguments[i__6227__auto___15905]));

var G__15906 = (i__6227__auto___15905 + (1));
i__6227__auto___15905 = G__15906;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__15902){
var vec__15903 = p__15902;
var speed = cljs.core.nth.call(null,vec__15903,(0),null);
var on_finish = cljs.core.nth.call(null,vec__15903,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq15900){
var G__15901 = cljs.core.first.call(null,seq15900);
var seq15900__$1 = cljs.core.next.call(null,seq15900);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__15901,seq15900__$1);
});
jayq.core.siblings = (function jayq$core$siblings(var_args){
var args15907 = [];
var len__6226__auto___15910 = arguments.length;
var i__6227__auto___15911 = (0);
while(true){
if((i__6227__auto___15911 < len__6226__auto___15910)){
args15907.push((arguments[i__6227__auto___15911]));

var G__15912 = (i__6227__auto___15911 + (1));
i__6227__auto___15911 = G__15912;
continue;
} else {
}
break;
}

var G__15909 = args15907.length;
switch (G__15909) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15907.length)].join('')));

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
var args15914 = [];
var len__6226__auto___15917 = arguments.length;
var i__6227__auto___15918 = (0);
while(true){
if((i__6227__auto___15918 < len__6226__auto___15917)){
args15914.push((arguments[i__6227__auto___15918]));

var G__15919 = (i__6227__auto___15918 + (1));
i__6227__auto___15918 = G__15919;
continue;
} else {
}
break;
}

var G__15916 = args15914.length;
switch (G__15916) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15914.length)].join('')));

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
var args15921 = [];
var len__6226__auto___15924 = arguments.length;
var i__6227__auto___15925 = (0);
while(true){
if((i__6227__auto___15925 < len__6226__auto___15924)){
args15921.push((arguments[i__6227__auto___15925]));

var G__15926 = (i__6227__auto___15925 + (1));
i__6227__auto___15925 = G__15926;
continue;
} else {
}
break;
}

var G__15923 = args15921.length;
switch (G__15923) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15921.length)].join('')));

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
var args15928 = [];
var len__6226__auto___15931 = arguments.length;
var i__6227__auto___15932 = (0);
while(true){
if((i__6227__auto___15932 < len__6226__auto___15931)){
args15928.push((arguments[i__6227__auto___15932]));

var G__15933 = (i__6227__auto___15932 + (1));
i__6227__auto___15932 = G__15933;
continue;
} else {
}
break;
}

var G__15930 = args15928.length;
switch (G__15930) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15928.length)].join('')));

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
var args15935 = [];
var len__6226__auto___15938 = arguments.length;
var i__6227__auto___15939 = (0);
while(true){
if((i__6227__auto___15939 < len__6226__auto___15938)){
args15935.push((arguments[i__6227__auto___15939]));

var G__15940 = (i__6227__auto___15939 + (1));
i__6227__auto___15939 = G__15940;
continue;
} else {
}
break;
}

var G__15937 = args15935.length;
switch (G__15937) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15935.length)].join('')));

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
var args15942 = [];
var len__6226__auto___15945 = arguments.length;
var i__6227__auto___15946 = (0);
while(true){
if((i__6227__auto___15946 < len__6226__auto___15945)){
args15942.push((arguments[i__6227__auto___15946]));

var G__15947 = (i__6227__auto___15946 + (1));
i__6227__auto___15946 = G__15947;
continue;
} else {
}
break;
}

var G__15944 = args15942.length;
switch (G__15944) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15942.length)].join('')));

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
var args15949 = [];
var len__6226__auto___15952 = arguments.length;
var i__6227__auto___15953 = (0);
while(true){
if((i__6227__auto___15953 < len__6226__auto___15952)){
args15949.push((arguments[i__6227__auto___15953]));

var G__15954 = (i__6227__auto___15953 + (1));
i__6227__auto___15953 = G__15954;
continue;
} else {
}
break;
}

var G__15951 = args15949.length;
switch (G__15951) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15949.length)].join('')));

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
var args15956 = [];
var len__6226__auto___15959 = arguments.length;
var i__6227__auto___15960 = (0);
while(true){
if((i__6227__auto___15960 < len__6226__auto___15959)){
args15956.push((arguments[i__6227__auto___15960]));

var G__15961 = (i__6227__auto___15960 + (1));
i__6227__auto___15960 = G__15961;
continue;
} else {
}
break;
}

var G__15958 = args15956.length;
switch (G__15958) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15956.length)].join('')));

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
var args15963 = [];
var len__6226__auto___15966 = arguments.length;
var i__6227__auto___15967 = (0);
while(true){
if((i__6227__auto___15967 < len__6226__auto___15966)){
args15963.push((arguments[i__6227__auto___15967]));

var G__15968 = (i__6227__auto___15967 + (1));
i__6227__auto___15967 = G__15968;
continue;
} else {
}
break;
}

var G__15965 = args15963.length;
switch (G__15965) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15963.length)].join('')));

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
var args15970 = [];
var len__6226__auto___15973 = arguments.length;
var i__6227__auto___15974 = (0);
while(true){
if((i__6227__auto___15974 < len__6226__auto___15973)){
args15970.push((arguments[i__6227__auto___15974]));

var G__15975 = (i__6227__auto___15974 + (1));
i__6227__auto___15974 = G__15975;
continue;
} else {
}
break;
}

var G__15972 = args15970.length;
switch (G__15972) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15970.length)].join('')));

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
var len__6226__auto___15982 = arguments.length;
var i__6227__auto___15983 = (0);
while(true){
if((i__6227__auto___15983 < len__6226__auto___15982)){
args__6233__auto__.push((arguments[i__6227__auto___15983]));

var G__15984 = (i__6227__auto___15983 + (1));
i__6227__auto___15983 = G__15984;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__15980){
var vec__15981 = p__15980;
var context = cljs.core.nth.call(null,vec__15981,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq15977){
var G__15978 = cljs.core.first.call(null,seq15977);
var seq15977__$1 = cljs.core.next.call(null,seq15977);
var G__15979 = cljs.core.first.call(null,seq15977__$1);
var seq15977__$2 = cljs.core.next.call(null,seq15977__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__15978,G__15979,seq15977__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
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
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15985.length)].join('')));

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
var args15992 = [];
var len__6226__auto___15995 = arguments.length;
var i__6227__auto___15996 = (0);
while(true){
if((i__6227__auto___15996 < len__6226__auto___15995)){
args15992.push((arguments[i__6227__auto___15996]));

var G__15997 = (i__6227__auto___15996 + (1));
i__6227__auto___15996 = G__15997;
continue;
} else {
}
break;
}

var G__15994 = args15992.length;
switch (G__15994) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15992.length)].join('')));

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
var args15999 = [];
var len__6226__auto___16002 = arguments.length;
var i__6227__auto___16003 = (0);
while(true){
if((i__6227__auto___16003 < len__6226__auto___16002)){
args15999.push((arguments[i__6227__auto___16003]));

var G__16004 = (i__6227__auto___16003 + (1));
i__6227__auto___16003 = G__16004;
continue;
} else {
}
break;
}

var G__16001 = args15999.length;
switch (G__16001) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15999.length)].join('')));

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
var args16006 = [];
var len__6226__auto___16009 = arguments.length;
var i__6227__auto___16010 = (0);
while(true){
if((i__6227__auto___16010 < len__6226__auto___16009)){
args16006.push((arguments[i__6227__auto___16010]));

var G__16011 = (i__6227__auto___16010 + (1));
i__6227__auto___16010 = G__16011;
continue;
} else {
}
break;
}

var G__16008 = args16006.length;
switch (G__16008) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16006.length)].join('')));

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
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__16015){
var map__16018 = p__16015;
var map__16018__$1 = ((((!((map__16018 == null)))?((((map__16018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16018):map__16018);
var request = map__16018__$1;
var data = cljs.core.get.call(null,map__16018__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__16018__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__16018,map__16018__$1,request,data,contentType){
return (function (p1__16014_SHARP_){
if(cljs.core.truth_((function (){var and__5156__auto__ = ct;
if(cljs.core.truth_(and__5156__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__5156__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__16014_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__16014_SHARP_;
}
});})(ct,map__16018,map__16018__$1,request,data,contentType))
.call(null,((function (ct,map__16018,map__16018__$1,request,data,contentType){
return (function (p1__16013_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__16013_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__16013_SHARP_;
}
});})(ct,map__16018,map__16018__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args16020 = [];
var len__6226__auto___16023 = arguments.length;
var i__6227__auto___16024 = (0);
while(true){
if((i__6227__auto___16024 < len__6226__auto___16023)){
args16020.push((arguments[i__6227__auto___16024]));

var G__16025 = (i__6227__auto___16024 + (1));
i__6227__auto___16024 = G__16025;
continue;
} else {
}
break;
}

var G__16022 = args16020.length;
switch (G__16022) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16020.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__16027,content,callback){
var vec__16029 = p__16027;
var method = cljs.core.nth.call(null,vec__16029,(0),null);
var uri = cljs.core.nth.call(null,vec__16029,(1),null);
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
var len__6226__auto___16035 = arguments.length;
var i__6227__auto___16036 = (0);
while(true){
if((i__6227__auto___16036 < len__6226__auto___16035)){
args__6233__auto__.push((arguments[i__6227__auto___16036]));

var G__16037 = (i__6227__auto___16036 + (1));
i__6227__auto___16036 = G__16037;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__16033){
var vec__16034 = p__16033;
var func = cljs.core.nth.call(null,vec__16034,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq16030){
var G__16031 = cljs.core.first.call(null,seq16030);
var seq16030__$1 = cljs.core.next.call(null,seq16030);
var G__16032 = cljs.core.first.call(null,seq16030__$1);
var seq16030__$2 = cljs.core.next.call(null,seq16030__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__16031,G__16032,seq16030__$2);
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
var len__6226__auto___16043 = arguments.length;
var i__6227__auto___16044 = (0);
while(true){
if((i__6227__auto___16044 < len__6226__auto___16043)){
args__6233__auto__.push((arguments[i__6227__auto___16044]));

var G__16045 = (i__6227__auto___16044 + (1));
i__6227__auto___16044 = G__16045;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__16041){
var vec__16042 = p__16041;
var sel = cljs.core.nth.call(null,vec__16042,(0),null);
var data = cljs.core.nth.call(null,vec__16042,(1),null);
var handler = cljs.core.nth.call(null,vec__16042,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq16038){
var G__16039 = cljs.core.first.call(null,seq16038);
var seq16038__$1 = cljs.core.next.call(null,seq16038);
var G__16040 = cljs.core.first.call(null,seq16038__$1);
var seq16038__$2 = cljs.core.next.call(null,seq16038__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__16039,G__16040,seq16038__$2);
});
jayq.core.one = (function jayq$core$one(var_args){
var args__6233__auto__ = [];
var len__6226__auto___16051 = arguments.length;
var i__6227__auto___16052 = (0);
while(true){
if((i__6227__auto___16052 < len__6226__auto___16051)){
args__6233__auto__.push((arguments[i__6227__auto___16052]));

var G__16053 = (i__6227__auto___16052 + (1));
i__6227__auto___16052 = G__16053;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__16049){
var vec__16050 = p__16049;
var sel = cljs.core.nth.call(null,vec__16050,(0),null);
var data = cljs.core.nth.call(null,vec__16050,(1),null);
var handler = cljs.core.nth.call(null,vec__16050,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq16046){
var G__16047 = cljs.core.first.call(null,seq16046);
var seq16046__$1 = cljs.core.next.call(null,seq16046);
var G__16048 = cljs.core.first.call(null,seq16046__$1);
var seq16046__$2 = cljs.core.next.call(null,seq16046__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__16047,G__16048,seq16046__$2);
});
jayq.core.off = (function jayq$core$off(var_args){
var args__6233__auto__ = [];
var len__6226__auto___16059 = arguments.length;
var i__6227__auto___16060 = (0);
while(true){
if((i__6227__auto___16060 < len__6226__auto___16059)){
args__6233__auto__.push((arguments[i__6227__auto___16060]));

var G__16061 = (i__6227__auto___16060 + (1));
i__6227__auto___16060 = G__16061;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__16057){
var vec__16058 = p__16057;
var sel = cljs.core.nth.call(null,vec__16058,(0),null);
var handler = cljs.core.nth.call(null,vec__16058,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq16054){
var G__16055 = cljs.core.first.call(null,seq16054);
var seq16054__$1 = cljs.core.next.call(null,seq16054);
var G__16056 = cljs.core.first.call(null,seq16054__$1);
var seq16054__$2 = cljs.core.next.call(null,seq16054__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__16055,G__16056,seq16054__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args16062 = [];
var len__6226__auto___16065 = arguments.length;
var i__6227__auto___16066 = (0);
while(true){
if((i__6227__auto___16066 < len__6226__auto___16065)){
args16062.push((arguments[i__6227__auto___16066]));

var G__16067 = (i__6227__auto___16066 + (1));
i__6227__auto___16066 = G__16067;
continue;
} else {
}
break;
}

var G__16064 = args16062.length;
switch (G__16064) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16062.length)].join('')));

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
var args16069 = [];
var len__6226__auto___16072 = arguments.length;
var i__6227__auto___16073 = (0);
while(true){
if((i__6227__auto___16073 < len__6226__auto___16072)){
args16069.push((arguments[i__6227__auto___16073]));

var G__16074 = (i__6227__auto___16073 + (1));
i__6227__auto___16073 = G__16074;
continue;
} else {
}
break;
}

var G__16071 = args16069.length;
switch (G__16071) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16069.length)].join('')));

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
var args16076 = [];
var len__6226__auto___16079 = arguments.length;
var i__6227__auto___16080 = (0);
while(true){
if((i__6227__auto___16080 < len__6226__auto___16079)){
args16076.push((arguments[i__6227__auto___16080]));

var G__16081 = (i__6227__auto___16080 + (1));
i__6227__auto___16080 = G__16081;
continue;
} else {
}
break;
}

var G__16078 = args16076.length;
switch (G__16078) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16076.length)].join('')));

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
var args16083 = [];
var len__6226__auto___16086 = arguments.length;
var i__6227__auto___16087 = (0);
while(true){
if((i__6227__auto___16087 < len__6226__auto___16086)){
args16083.push((arguments[i__6227__auto___16087]));

var G__16088 = (i__6227__auto___16087 + (1));
i__6227__auto___16087 = G__16088;
continue;
} else {
}
break;
}

var G__16085 = args16083.length;
switch (G__16085) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16083.length)].join('')));

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
var args16090 = [];
var len__6226__auto___16093 = arguments.length;
var i__6227__auto___16094 = (0);
while(true){
if((i__6227__auto___16094 < len__6226__auto___16093)){
args16090.push((arguments[i__6227__auto___16094]));

var G__16095 = (i__6227__auto___16094 + (1));
i__6227__auto___16094 = G__16095;
continue;
} else {
}
break;
}

var G__16092 = args16090.length;
switch (G__16092) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16090.length)].join('')));

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
var args16097 = [];
var len__6226__auto___16100 = arguments.length;
var i__6227__auto___16101 = (0);
while(true){
if((i__6227__auto___16101 < len__6226__auto___16100)){
args16097.push((arguments[i__6227__auto___16101]));

var G__16102 = (i__6227__auto___16101 + (1));
i__6227__auto___16101 = G__16102;
continue;
} else {
}
break;
}

var G__16099 = args16097.length;
switch (G__16099) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16097.length)].join('')));

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
var len__6226__auto___16106 = arguments.length;
var i__6227__auto___16107 = (0);
while(true){
if((i__6227__auto___16107 < len__6226__auto___16106)){
args__6233__auto__.push((arguments[i__6227__auto___16107]));

var G__16108 = (i__6227__auto___16107 + (1));
i__6227__auto___16107 = G__16108;
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

jayq.core.done.cljs$lang$applyTo = (function (seq16104){
var G__16105 = cljs.core.first.call(null,seq16104);
var seq16104__$1 = cljs.core.next.call(null,seq16104);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__16105,seq16104__$1);
});
jayq.core.fail = (function jayq$core$fail(var_args){
var args__6233__auto__ = [];
var len__6226__auto___16111 = arguments.length;
var i__6227__auto___16112 = (0);
while(true){
if((i__6227__auto___16112 < len__6226__auto___16111)){
args__6233__auto__.push((arguments[i__6227__auto___16112]));

var G__16113 = (i__6227__auto___16112 + (1));
i__6227__auto___16112 = G__16113;
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

jayq.core.fail.cljs$lang$applyTo = (function (seq16109){
var G__16110 = cljs.core.first.call(null,seq16109);
var seq16109__$1 = cljs.core.next.call(null,seq16109);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__16110,seq16109__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args16114 = [];
var len__6226__auto___16117 = arguments.length;
var i__6227__auto___16118 = (0);
while(true){
if((i__6227__auto___16118 < len__6226__auto___16117)){
args16114.push((arguments[i__6227__auto___16118]));

var G__16119 = (i__6227__auto___16118 + (1));
i__6227__auto___16118 = G__16119;
continue;
} else {
}
break;
}

var G__16116 = args16114.length;
switch (G__16116) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16114.length)].join('')));

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
var len__6226__auto___16123 = arguments.length;
var i__6227__auto___16124 = (0);
while(true){
if((i__6227__auto___16124 < len__6226__auto___16123)){
args__6233__auto__.push((arguments[i__6227__auto___16124]));

var G__16125 = (i__6227__auto___16124 + (1));
i__6227__auto___16124 = G__16125;
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

jayq.core.always.cljs$lang$applyTo = (function (seq16121){
var G__16122 = cljs.core.first.call(null,seq16121);
var seq16121__$1 = cljs.core.next.call(null,seq16121);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__16122,seq16121__$1);
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
var args16126 = [];
var len__6226__auto___16129 = arguments.length;
var i__6227__auto___16130 = (0);
while(true){
if((i__6227__auto___16130 < len__6226__auto___16129)){
args16126.push((arguments[i__6227__auto___16130]));

var G__16131 = (i__6227__auto___16130 + (1));
i__6227__auto___16130 = G__16131;
continue;
} else {
}
break;
}

var G__16128 = args16126.length;
switch (G__16128) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16126.length)].join('')));

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