// Compiled by ClojureScript 1.7.170 {}
goog.provide('ui.software_updates');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('cljsjs.jquery');
goog.require('schema.core');
goog.require('om.dom');
goog.require('cats.monad.either');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('jayq.core');
goog.require('om.next');
((3) + (4));
/**
 * A schema for a software update.
 */
ui.software_updates.SoftwareUpdate = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Str,new cljs.core.Keyword(null,"version","version",425292698),schema.core.Str,new cljs.core.Keyword(null,"size","size",1098693007),schema.core.Num,new cljs.core.Keyword(null,"status","status",-1997798413),schema.core.enum$.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"downloading","downloading",-213530737),new cljs.core.Keyword(null,"installing","installing",506071602),new cljs.core.Keyword(null,"installed","installed",553977691))], null);
ui.software_updates.ats_blue = "#A7E6E0";
ui.software_updates.ats_orange = "#FFB393";
ui.software_updates.change_color = (function ui$software_updates$change_color(selector,color){
return jayq.core.css.call(null,jayq.core.$.call(null,selector),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null));
});
ui.software_updates.describe_size = (function ui$software_updates$describe_size(bytes){
var round = (function (precision,n){
var factor = Math.pow((10),precision);
return (Math.round((n * factor)) / factor);
});
var format = cljs.core.partial.call(null,round,(2));
var pred__18113 = cljs.core._GT__EQ_;
var expr__18114 = bytes;
if(cljs.core.truth_(pred__18113.call(null,(1024),expr__18114))){
return [cljs.core.str(format.call(null,bytes)),cljs.core.str(" bytes")].join('');
} else {
if(cljs.core.truth_(pred__18113.call(null,((1024) * (1024)),expr__18114))){
return [cljs.core.str(format.call(null,(bytes / (1000)))),cljs.core.str(" kB")].join('');
} else {
if(cljs.core.truth_(pred__18113.call(null,(((1024) * (1024)) * (1024)),expr__18114))){
return [cljs.core.str(format.call(null,((bytes / (1000)) / (1000)))),cljs.core.str(" MB")].join('');
} else {
if(cljs.core.truth_(pred__18113.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__18114))){
return [cljs.core.str(format.call(null,(((bytes / (1000)) / (1000)) / (1000)))),cljs.core.str(" GB")].join('');
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__18114)].join('')));
}
}
}
}
});
ui.software_updates.pending_QMARK_ = cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pending","pending",-220036727),null], null), null),new cljs.core.Keyword("software-update","status","software-update/status",1331026980));
ui.software_updates.installed_QMARK_ = cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"installed","installed",553977691),null], null), null),new cljs.core.Keyword("software-update","status","software-update/status",1331026980));
ui.software_updates.processing_QMARK_ = cljs.core.complement.call(null,ui.software_updates.installed_QMARK_);
ui.software_updates.slm = (function ui$software_updates$slm(){
return genivi.slm;
});
ui.software_updates.details = (function ui$software_updates$details(){
return ui.software_updates.slm.call(null).details();
});
ui.software_updates.accept_BANG_ = (function ui$software_updates$accept_BANG_(){
return ui.software_updates.slm.call(null).approve(ui.software_updates.details.call(null));
});
ui.software_updates.details_changed_signal = (function ui$software_updates$details_changed_signal(){
return ui.software_updates.slm.call(null).details_changed;
});
ui.software_updates.update_state_changed_signal = (function ui$software_updates$update_state_changed_signal(){
return ui.software_updates.slm.call(null).update_state_changed;
});
ui.software_updates.on_signal = (function ui$software_updates$on_signal(signal,f){
return signal.connect(f);
});
ui.software_updates.default_size = (852324);
ui.software_updates.detail__GT_update = (function ui$software_updates$detail__GT_update(detail){
return cljs.core.assoc.call(null,cljs.core.update.call(null,clojure.set.rename_keys.call(null,cljs.core.js__GT_clj.call(null,detail),new cljs.core.PersistentArrayMap(null, 3, ["name",new cljs.core.Keyword(null,"name","name",1843675177),"version",new cljs.core.Keyword(null,"version","version",425292698),"status",new cljs.core.Keyword(null,"status","status",-1997798413)], null)),new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.keyword),new cljs.core.Keyword(null,"size","size",1098693007),ui.software_updates.default_size);
});
ui.software_updates.get_all = (function ui$software_updates$get_all(){
return cljs.core.map.call(null,ui.software_updates.detail__GT_update,ui.software_updates.details.call(null));
});
ui.software_updates.watch = (function ui$software_updates$watch(f){
ui.software_updates.on_signal.call(null,ui.software_updates.update_state_changed_signal.call(null),(function (state,count){
console.log("Update state changed: ",state,count);

var seq__18120 = cljs.core.seq.call(null,ui.software_updates.details.call(null));
var chunk__18121 = null;
var count__18122 = (0);
var i__18123 = (0);
while(true){
if((i__18123 < count__18122)){
var detail = cljs.core._nth.call(null,chunk__18121,i__18123);
f.call(null,ui.software_updates.detail__GT_update.call(null,detail));

var G__18124 = seq__18120;
var G__18125 = chunk__18121;
var G__18126 = count__18122;
var G__18127 = (i__18123 + (1));
seq__18120 = G__18124;
chunk__18121 = G__18125;
count__18122 = G__18126;
i__18123 = G__18127;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18120);
if(temp__4425__auto__){
var seq__18120__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18120__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__18120__$1);
var G__18128 = cljs.core.chunk_rest.call(null,seq__18120__$1);
var G__18129 = c__5971__auto__;
var G__18130 = cljs.core.count.call(null,c__5971__auto__);
var G__18131 = (0);
seq__18120 = G__18128;
chunk__18121 = G__18129;
count__18122 = G__18130;
i__18123 = G__18131;
continue;
} else {
var detail = cljs.core.first.call(null,seq__18120__$1);
f.call(null,ui.software_updates.detail__GT_update.call(null,detail));

var G__18132 = cljs.core.next.call(null,seq__18120__$1);
var G__18133 = null;
var G__18134 = (0);
var G__18135 = (0);
seq__18120 = G__18132;
chunk__18121 = G__18133;
count__18122 = G__18134;
i__18123 = G__18135;
continue;
}
} else {
return null;
}
}
break;
}
}));

return ui.software_updates.on_signal.call(null,ui.software_updates.details_changed_signal.call(null),(function (name,version,status){
console.log("Details changed:",name,version,status);

return f.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.keyword.call(null,status),new cljs.core.Keyword(null,"size","size",1098693007),ui.software_updates.default_size], null));
}));
});
/**
 * @constructor
 */
ui.software_updates.SoftwareUpdateView = (function ui$software_updates$SoftwareUpdateView(){
var this__12945__auto__ = this;
React.Component.apply(this__12945__auto__,arguments);

if(!((this__12945__auto__.initLocalState == null))){
this__12945__auto__.state = this__12945__auto__.initLocalState();
} else {
this__12945__auto__.state = {};
}

return this__12945__auto__;
});

ui.software_updates.SoftwareUpdateView.prototype = goog.object.clone(React.Component.prototype);

var x18140_18159 = ui.software_updates.SoftwareUpdateView.prototype;
x18140_18159.componentWillUpdate = ((function (x18140_18159){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__12885__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12885__auto__);
});})(x18140_18159))
;

x18140_18159.shouldComponentUpdate = ((function (x18140_18159){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12885__auto__),goog.object.get(next_props__12886__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12885__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12885__auto__.state,"omcljs$state"),goog.object.get(next_state__12887__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x18140_18159))
;

x18140_18159.componentWillUnmount = ((function (x18140_18159){
return (function (){
var this__12885__auto__ = this;
var r__12891__auto__ = om.next.get_reconciler.call(null,this__12885__auto__);
var cfg__12892__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12891__auto__);
var st__12893__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
var indexer__12890__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
if((st__12893__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__12893__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12885__auto__);
}

if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x18140_18159))
;

x18140_18159.componentDidUpdate = ((function (x18140_18159){
return (function (prev_props__12888__auto__,prev_state__12889__auto__){
var this__12885__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12885__auto__);
});})(x18140_18159))
;

x18140_18159.isMounted = ((function (x18140_18159){
return (function (){
var this__12885__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12885__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18140_18159))
;

x18140_18159.componentWillMount = ((function (x18140_18159){
return (function (){
var this__12885__auto__ = this;
var indexer__12890__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12885__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x18140_18159))
;

x18140_18159.render = ((function (x18140_18159){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_18141 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18142 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18143 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18144 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18145 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__18146 = om.next.props.call(null,this$);
var map__18146__$1 = ((((!((map__18146 == null)))?((((map__18146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18146):map__18146);
var name = cljs.core.get.call(null,map__18146__$1,new cljs.core.Keyword("software-update","name","software-update/name",827209690));
var version = cljs.core.get.call(null,map__18146__$1,new cljs.core.Keyword("software-update","version","software-update/version",1052892105));
var size = cljs.core.get.call(null,map__18146__$1,new cljs.core.Keyword("software-update","size","software-update/size",188162400));
var status = cljs.core.get.call(null,map__18146__$1,new cljs.core.Keyword("software-update","status","software-update/status",1331026980));
return React.DOM.li({"className": "software-update"},om.util.force_children.call(null,React.DOM.dl(null,om.util.force_children.call(null,React.DOM.dt(null,om.util.force_children.call(null,"Name"))),om.util.force_children.call(null,React.DOM.dd(null,om.util.force_children.call(null,name))),om.util.force_children.call(null,React.DOM.dt(null,om.util.force_children.call(null,"Version"))),om.util.force_children.call(null,React.DOM.dd(null,om.util.force_children.call(null,version))),om.util.force_children.call(null,React.DOM.dt(null,om.util.force_children.call(null,"Size"))),om.util.force_children.call(null,React.DOM.dd(null,om.util.force_children.call(null,ui.software_updates.describe_size.call(null,size)))))),om.util.force_children.call(null,(function (){var pred__18148 = cljs.core._EQ_;
var expr__18149 = status;
if(cljs.core.truth_(pred__18148.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727),expr__18149))){
return React.DOM.div(null);
} else {
if(cljs.core.truth_(pred__18148.call(null,new cljs.core.Keyword(null,"downloading","downloading",-213530737),expr__18149))){
return React.DOM.div({"className": "loading"},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Downloading..."))));
} else {
if(cljs.core.truth_(pred__18148.call(null,new cljs.core.Keyword(null,"installing","installing",506071602),expr__18149))){
return React.DOM.div({"className": "loading"},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Installing..."))));
} else {
if(cljs.core.truth_(pred__18148.call(null,new cljs.core.Keyword(null,"installed","installed",553977691),expr__18149))){
return React.DOM.div({"className": "installed"},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Installed"))));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__18149)].join('')));
}
}
}
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18145;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18144;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18143;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18142;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18141;
}});})(x18140_18159))
;


ui.software_updates.SoftwareUpdateView.prototype.constructor = ui.software_updates.SoftwareUpdateView;

ui.software_updates.SoftwareUpdateView.prototype.om$isComponent = true;

var x18151_18160 = ui.software_updates.SoftwareUpdateView;
x18151_18160.om$next$Ident$ = true;

x18151_18160.om$next$Ident$ident$arity$2 = ((function (x18151_18160){
return (function (this$,p__18152){
var map__18153 = p__18152;
var map__18153__$1 = ((((!((map__18153 == null)))?((((map__18153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18153):map__18153);
var name = cljs.core.get.call(null,map__18153__$1,new cljs.core.Keyword("software-update","name","software-update/name",827209690));
var version = cljs.core.get.call(null,map__18153__$1,new cljs.core.Keyword("software-update","version","software-update/version",1052892105));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","by-id","software-update/by-id",1413379894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,version], null)], null);
});})(x18151_18160))
;

x18151_18160.om$next$IQuery$ = true;

x18151_18160.om$next$IQuery$query$arity$1 = ((function (x18151_18160){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","name","software-update/name",827209690),new cljs.core.Keyword("software-update","version","software-update/version",1052892105),new cljs.core.Keyword("software-update","size","software-update/size",188162400),new cljs.core.Keyword("software-update","status","software-update/status",1331026980)], null);
});})(x18151_18160))
;


var x18155_18161 = ui.software_updates.SoftwareUpdateView.prototype;
x18155_18161.om$next$Ident$ = true;

x18155_18161.om$next$Ident$ident$arity$2 = ((function (x18155_18161){
return (function (this$,p__18156){
var map__18157 = p__18156;
var map__18157__$1 = ((((!((map__18157 == null)))?((((map__18157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18157):map__18157);
var name = cljs.core.get.call(null,map__18157__$1,new cljs.core.Keyword("software-update","name","software-update/name",827209690));
var version = cljs.core.get.call(null,map__18157__$1,new cljs.core.Keyword("software-update","version","software-update/version",1052892105));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","by-id","software-update/by-id",1413379894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,version], null)], null);
});})(x18155_18161))
;

x18155_18161.om$next$IQuery$ = true;

x18155_18161.om$next$IQuery$query$arity$1 = ((function (x18155_18161){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","name","software-update/name",827209690),new cljs.core.Keyword("software-update","version","software-update/version",1052892105),new cljs.core.Keyword("software-update","size","software-update/size",188162400),new cljs.core.Keyword("software-update","status","software-update/status",1331026980)], null);
});})(x18155_18161))
;


ui.software_updates.SoftwareUpdateView.cljs$lang$type = true;

ui.software_updates.SoftwareUpdateView.cljs$lang$ctorStr = "ui.software-updates/SoftwareUpdateView";

ui.software_updates.SoftwareUpdateView.cljs$lang$ctorPrWriter = (function (this__12947__auto__,writer__12948__auto__,opt__12949__auto__){
return cljs.core._write.call(null,writer__12948__auto__,"ui.software-updates/SoftwareUpdateView");
});
ui.software_updates.software_update_view = om.next.factory.call(null,ui.software_updates.SoftwareUpdateView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.juxt.call(null,new cljs.core.Keyword("software-update","name","software-update/name",827209690),new cljs.core.Keyword("software-update","version","software-update/version",1052892105))], null));
/**
 * @constructor
 */
ui.software_updates.SoftwareUpdatesView = (function ui$software_updates$SoftwareUpdatesView(){
var this__12945__auto__ = this;
React.Component.apply(this__12945__auto__,arguments);

if(!((this__12945__auto__.initLocalState == null))){
this__12945__auto__.state = this__12945__auto__.initLocalState();
} else {
this__12945__auto__.state = {};
}

return this__12945__auto__;
});

ui.software_updates.SoftwareUpdatesView.prototype = goog.object.clone(React.Component.prototype);

var x18166_18178 = ui.software_updates.SoftwareUpdatesView.prototype;
x18166_18178.componentWillUpdate = ((function (x18166_18178){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__12885__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__12885__auto__);
});})(x18166_18178))
;

x18166_18178.shouldComponentUpdate = ((function (x18166_18178){
return (function (next_props__12886__auto__,next_state__12887__auto__){
var this__12885__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12885__auto__),goog.object.get(next_props__12886__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12885__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__12885__auto__.state,"omcljs$state"),goog.object.get(next_state__12887__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x18166_18178))
;

x18166_18178.componentWillUnmount = ((function (x18166_18178){
return (function (){
var this__12885__auto__ = this;
var r__12891__auto__ = om.next.get_reconciler.call(null,this__12885__auto__);
var cfg__12892__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__12891__auto__);
var st__12893__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
var indexer__12890__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__12892__auto__);
if((st__12893__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__12893__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__12885__auto__);
}

if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x18166_18178))
;

x18166_18178.componentDidUpdate = ((function (x18166_18178){
return (function (prev_props__12888__auto__,prev_state__12889__auto__){
var this__12885__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__12885__auto__);
});})(x18166_18178))
;

x18166_18178.isMounted = ((function (x18166_18178){
return (function (){
var this__12885__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__12885__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18166_18178))
;

x18166_18178.componentWillMount = ((function (x18166_18178){
return (function (){
var this__12885__auto__ = this;
var indexer__12890__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__12885__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__12890__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__12890__auto__,this__12885__auto__);
}
});})(x18166_18178))
;

x18166_18178.render = ((function (x18166_18178){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_18167 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18168 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18169 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18170 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18171 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__18172 = om.next.props.call(null,this$);
var map__18172__$1 = ((((!((map__18172 == null)))?((((map__18172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18172):map__18172);
var software_updates = cljs.core.get.call(null,map__18172__$1,new cljs.core.Keyword(null,"software-updates","software-updates",1873409622));
var map__18173 = om.next.get_computed.call(null,this$);
var map__18173__$1 = ((((!((map__18173 == null)))?((((map__18173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18173):map__18173);
var accept_fn = cljs.core.get.call(null,map__18173__$1,new cljs.core.Keyword(null,"accept-fn","accept-fn",-863534511));
var pending = cljs.core.filter.call(null,ui.software_updates.pending_QMARK_,software_updates);
return React.DOM.div({"id": "updates", "className": "solid"},om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.h4(null,om.util.force_children.call(null,"Software Updates"))),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,ui.software_updates.software_update_view,software_updates))),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,React.DOM.button(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),accept_fn], null),((cljs.core.not.call(null,cljs.core.seq.call(null,pending)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"disabled",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null):cljs.core.PersistentArrayMap.EMPTY))),om.util.force_children.call(null,"Download & Install All"))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18171;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18170;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18169;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18168;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18167;
}});})(x18166_18178))
;


ui.software_updates.SoftwareUpdatesView.prototype.constructor = ui.software_updates.SoftwareUpdatesView;

ui.software_updates.SoftwareUpdatesView.prototype.om$isComponent = true;

var x18176_18179 = ui.software_updates.SoftwareUpdatesView;
x18176_18179.om$next$IQuery$ = true;

x18176_18179.om$next$IQuery$query$arity$1 = ((function (x18176_18179){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),om.next.get_query.call(null,ui.software_updates.SoftwareUpdateView)], null)], null);
});})(x18176_18179))
;


var x18177_18180 = ui.software_updates.SoftwareUpdatesView.prototype;
x18177_18180.om$next$IQuery$ = true;

x18177_18180.om$next$IQuery$query$arity$1 = ((function (x18177_18180){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),om.next.get_query.call(null,ui.software_updates.SoftwareUpdateView)], null)], null);
});})(x18177_18180))
;


ui.software_updates.SoftwareUpdatesView.cljs$lang$type = true;

ui.software_updates.SoftwareUpdatesView.cljs$lang$ctorStr = "ui.software-updates/SoftwareUpdatesView";

ui.software_updates.SoftwareUpdatesView.cljs$lang$ctorPrWriter = (function (this__12947__auto__,writer__12948__auto__,opt__12949__auto__){
return cljs.core._write.call(null,writer__12948__auto__,"ui.software-updates/SoftwareUpdatesView");
});
ui.software_updates.view = om.next.factory.call(null,ui.software_updates.SoftwareUpdatesView);

//# sourceMappingURL=software_updates.js.map