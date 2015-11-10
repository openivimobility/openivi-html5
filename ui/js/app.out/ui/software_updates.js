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
var pred__16180 = cljs.core._GT__EQ_;
var expr__16181 = bytes;
if(cljs.core.truth_(pred__16180.call(null,(1024),expr__16181))){
return [cljs.core.str(format.call(null,bytes)),cljs.core.str(" bytes")].join('');
} else {
if(cljs.core.truth_(pred__16180.call(null,((1024) * (1024)),expr__16181))){
return [cljs.core.str(format.call(null,(bytes / (1000)))),cljs.core.str(" kB")].join('');
} else {
if(cljs.core.truth_(pred__16180.call(null,(((1024) * (1024)) * (1024)),expr__16181))){
return [cljs.core.str(format.call(null,((bytes / (1000)) / (1000)))),cljs.core.str(" MB")].join('');
} else {
if(cljs.core.truth_(pred__16180.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__16181))){
return [cljs.core.str(format.call(null,(((bytes / (1000)) / (1000)) / (1000)))),cljs.core.str(" GB")].join('');
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16181)].join('')));
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

var seq__16187 = cljs.core.seq.call(null,ui.software_updates.details.call(null));
var chunk__16188 = null;
var count__16189 = (0);
var i__16190 = (0);
while(true){
if((i__16190 < count__16189)){
var detail = cljs.core._nth.call(null,chunk__16188,i__16190);
f.call(null,ui.software_updates.detail__GT_update.call(null,detail));

var G__16191 = seq__16187;
var G__16192 = chunk__16188;
var G__16193 = count__16189;
var G__16194 = (i__16190 + (1));
seq__16187 = G__16191;
chunk__16188 = G__16192;
count__16189 = G__16193;
i__16190 = G__16194;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16187);
if(temp__4425__auto__){
var seq__16187__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16187__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__16187__$1);
var G__16195 = cljs.core.chunk_rest.call(null,seq__16187__$1);
var G__16196 = c__5971__auto__;
var G__16197 = cljs.core.count.call(null,c__5971__auto__);
var G__16198 = (0);
seq__16187 = G__16195;
chunk__16188 = G__16196;
count__16189 = G__16197;
i__16190 = G__16198;
continue;
} else {
var detail = cljs.core.first.call(null,seq__16187__$1);
f.call(null,ui.software_updates.detail__GT_update.call(null,detail));

var G__16199 = cljs.core.next.call(null,seq__16187__$1);
var G__16200 = null;
var G__16201 = (0);
var G__16202 = (0);
seq__16187 = G__16199;
chunk__16188 = G__16200;
count__16189 = G__16201;
i__16190 = G__16202;
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
var this__14507__auto__ = this;
React.Component.apply(this__14507__auto__,arguments);

if(!((this__14507__auto__.initLocalState == null))){
this__14507__auto__.state = this__14507__auto__.initLocalState();
} else {
this__14507__auto__.state = {};
}

return this__14507__auto__;
});

ui.software_updates.SoftwareUpdateView.prototype = goog.object.clone(React.Component.prototype);

var x16207_16226 = ui.software_updates.SoftwareUpdateView.prototype;
x16207_16226.componentWillUpdate = ((function (x16207_16226){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14447__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14447__auto__);
});})(x16207_16226))
;

x16207_16226.shouldComponentUpdate = ((function (x16207_16226){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14447__auto__),goog.object.get(next_props__14448__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__14447__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14447__auto__.state,"omcljs$state"),goog.object.get(next_state__14449__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x16207_16226))
;

x16207_16226.componentWillUnmount = ((function (x16207_16226){
return (function (){
var this__14447__auto__ = this;
var r__14453__auto__ = om.next.get_reconciler.call(null,this__14447__auto__);
var cfg__14454__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14453__auto__);
var st__14455__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
var indexer__14452__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
if((st__14455__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14455__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14447__auto__);
}

if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16207_16226))
;

x16207_16226.componentDidUpdate = ((function (x16207_16226){
return (function (prev_props__14450__auto__,prev_state__14451__auto__){
var this__14447__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14447__auto__);
});})(x16207_16226))
;

x16207_16226.isMounted = ((function (x16207_16226){
return (function (){
var this__14447__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14447__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16207_16226))
;

x16207_16226.componentWillMount = ((function (x16207_16226){
return (function (){
var this__14447__auto__ = this;
var indexer__14452__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14447__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16207_16226))
;

x16207_16226.render = ((function (x16207_16226){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16208 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16209 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16210 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16211 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16212 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__16213 = om.next.props.call(null,this$);
var map__16213__$1 = ((((!((map__16213 == null)))?((((map__16213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16213):map__16213);
var name = cljs.core.get.call(null,map__16213__$1,new cljs.core.Keyword("software-update","name","software-update/name",827209690));
var version = cljs.core.get.call(null,map__16213__$1,new cljs.core.Keyword("software-update","version","software-update/version",1052892105));
var size = cljs.core.get.call(null,map__16213__$1,new cljs.core.Keyword("software-update","size","software-update/size",188162400));
var status = cljs.core.get.call(null,map__16213__$1,new cljs.core.Keyword("software-update","status","software-update/status",1331026980));
return React.DOM.li({"className": "software-update"},om.util.force_children.call(null,React.DOM.dl(null,om.util.force_children.call(null,React.DOM.dt(null,om.util.force_children.call(null,"Name"))),om.util.force_children.call(null,React.DOM.dd(null,om.util.force_children.call(null,name))),om.util.force_children.call(null,React.DOM.dt(null,om.util.force_children.call(null,"Version"))),om.util.force_children.call(null,React.DOM.dd(null,om.util.force_children.call(null,version))),om.util.force_children.call(null,React.DOM.dt(null,om.util.force_children.call(null,"Size"))),om.util.force_children.call(null,React.DOM.dd(null,om.util.force_children.call(null,ui.software_updates.describe_size.call(null,size)))))),om.util.force_children.call(null,(function (){var pred__16215 = cljs.core._EQ_;
var expr__16216 = status;
if(cljs.core.truth_(pred__16215.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727),expr__16216))){
return React.DOM.div(null);
} else {
if(cljs.core.truth_(pred__16215.call(null,new cljs.core.Keyword(null,"downloading","downloading",-213530737),expr__16216))){
return React.DOM.div({"className": "loading"},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Downloading..."))));
} else {
if(cljs.core.truth_(pred__16215.call(null,new cljs.core.Keyword(null,"installing","installing",506071602),expr__16216))){
return React.DOM.div({"className": "loading"},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Installing..."))));
} else {
if(cljs.core.truth_(pred__16215.call(null,new cljs.core.Keyword(null,"installed","installed",553977691),expr__16216))){
return React.DOM.div({"className": "installed"},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Installed"))));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16216)].join('')));
}
}
}
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16212;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16211;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16210;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16209;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16208;
}});})(x16207_16226))
;


ui.software_updates.SoftwareUpdateView.prototype.constructor = ui.software_updates.SoftwareUpdateView;

ui.software_updates.SoftwareUpdateView.prototype.om$isComponent = true;

var x16218_16227 = ui.software_updates.SoftwareUpdateView;
x16218_16227.om$next$Ident$ = true;

x16218_16227.om$next$Ident$ident$arity$2 = ((function (x16218_16227){
return (function (this$,p__16219){
var map__16220 = p__16219;
var map__16220__$1 = ((((!((map__16220 == null)))?((((map__16220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16220):map__16220);
var name = cljs.core.get.call(null,map__16220__$1,new cljs.core.Keyword("software-update","name","software-update/name",827209690));
var version = cljs.core.get.call(null,map__16220__$1,new cljs.core.Keyword("software-update","version","software-update/version",1052892105));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","by-id","software-update/by-id",1413379894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,version], null)], null);
});})(x16218_16227))
;

x16218_16227.om$next$IQuery$ = true;

x16218_16227.om$next$IQuery$query$arity$1 = ((function (x16218_16227){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","name","software-update/name",827209690),new cljs.core.Keyword("software-update","version","software-update/version",1052892105),new cljs.core.Keyword("software-update","size","software-update/size",188162400),new cljs.core.Keyword("software-update","status","software-update/status",1331026980)], null);
});})(x16218_16227))
;


var x16222_16228 = ui.software_updates.SoftwareUpdateView.prototype;
x16222_16228.om$next$Ident$ = true;

x16222_16228.om$next$Ident$ident$arity$2 = ((function (x16222_16228){
return (function (this$,p__16223){
var map__16224 = p__16223;
var map__16224__$1 = ((((!((map__16224 == null)))?((((map__16224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16224):map__16224);
var name = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword("software-update","name","software-update/name",827209690));
var version = cljs.core.get.call(null,map__16224__$1,new cljs.core.Keyword("software-update","version","software-update/version",1052892105));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","by-id","software-update/by-id",1413379894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,version], null)], null);
});})(x16222_16228))
;

x16222_16228.om$next$IQuery$ = true;

x16222_16228.om$next$IQuery$query$arity$1 = ((function (x16222_16228){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","name","software-update/name",827209690),new cljs.core.Keyword("software-update","version","software-update/version",1052892105),new cljs.core.Keyword("software-update","size","software-update/size",188162400),new cljs.core.Keyword("software-update","status","software-update/status",1331026980)], null);
});})(x16222_16228))
;


ui.software_updates.SoftwareUpdateView.cljs$lang$type = true;

ui.software_updates.SoftwareUpdateView.cljs$lang$ctorStr = "ui.software-updates/SoftwareUpdateView";

ui.software_updates.SoftwareUpdateView.cljs$lang$ctorPrWriter = (function (this__14509__auto__,writer__14510__auto__,opt__14511__auto__){
return cljs.core._write.call(null,writer__14510__auto__,"ui.software-updates/SoftwareUpdateView");
});
ui.software_updates.software_update_view = om.next.factory.call(null,ui.software_updates.SoftwareUpdateView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.juxt.call(null,new cljs.core.Keyword("software-update","name","software-update/name",827209690),new cljs.core.Keyword("software-update","version","software-update/version",1052892105))], null));
/**
 * @constructor
 */
ui.software_updates.SoftwareUpdatesView = (function ui$software_updates$SoftwareUpdatesView(){
var this__14507__auto__ = this;
React.Component.apply(this__14507__auto__,arguments);

if(!((this__14507__auto__.initLocalState == null))){
this__14507__auto__.state = this__14507__auto__.initLocalState();
} else {
this__14507__auto__.state = {};
}

return this__14507__auto__;
});

ui.software_updates.SoftwareUpdatesView.prototype = goog.object.clone(React.Component.prototype);

var x16233_16245 = ui.software_updates.SoftwareUpdatesView.prototype;
x16233_16245.componentWillUpdate = ((function (x16233_16245){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14447__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14447__auto__);
});})(x16233_16245))
;

x16233_16245.shouldComponentUpdate = ((function (x16233_16245){
return (function (next_props__14448__auto__,next_state__14449__auto__){
var this__14447__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14447__auto__),goog.object.get(next_props__14448__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__14447__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14447__auto__.state,"omcljs$state"),goog.object.get(next_state__14449__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x16233_16245))
;

x16233_16245.componentWillUnmount = ((function (x16233_16245){
return (function (){
var this__14447__auto__ = this;
var r__14453__auto__ = om.next.get_reconciler.call(null,this__14447__auto__);
var cfg__14454__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14453__auto__);
var st__14455__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
var indexer__14452__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14454__auto__);
if((st__14455__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14455__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14447__auto__);
}

if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16233_16245))
;

x16233_16245.componentDidUpdate = ((function (x16233_16245){
return (function (prev_props__14450__auto__,prev_state__14451__auto__){
var this__14447__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14447__auto__);
});})(x16233_16245))
;

x16233_16245.isMounted = ((function (x16233_16245){
return (function (){
var this__14447__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14447__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16233_16245))
;

x16233_16245.componentWillMount = ((function (x16233_16245){
return (function (){
var this__14447__auto__ = this;
var indexer__14452__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14447__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14452__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14452__auto__,this__14447__auto__);
}
});})(x16233_16245))
;

x16233_16245.render = ((function (x16233_16245){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16234 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16235 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16236 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16237 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16238 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__16239 = om.next.props.call(null,this$);
var map__16239__$1 = ((((!((map__16239 == null)))?((((map__16239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16239):map__16239);
var software_updates = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"software-updates","software-updates",1873409622));
var map__16240 = om.next.get_computed.call(null,this$);
var map__16240__$1 = ((((!((map__16240 == null)))?((((map__16240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16240):map__16240);
var accept_fn = cljs.core.get.call(null,map__16240__$1,new cljs.core.Keyword(null,"accept-fn","accept-fn",-863534511));
var pending = cljs.core.filter.call(null,ui.software_updates.pending_QMARK_,software_updates);
return React.DOM.div({"id": "updates", "className": "solid"},om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.h4(null,om.util.force_children.call(null,"Software Updates"))),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,ui.software_updates.software_update_view,software_updates))),om.util.force_children.call(null,React.DOM.br(null)),om.util.force_children.call(null,React.DOM.button(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),accept_fn], null),((cljs.core.not.call(null,cljs.core.seq.call(null,pending)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"disabled",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null):cljs.core.PersistentArrayMap.EMPTY))),om.util.force_children.call(null,"Download & Install All"))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16238;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16237;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16236;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16235;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16234;
}});})(x16233_16245))
;


ui.software_updates.SoftwareUpdatesView.prototype.constructor = ui.software_updates.SoftwareUpdatesView;

ui.software_updates.SoftwareUpdatesView.prototype.om$isComponent = true;

var x16243_16246 = ui.software_updates.SoftwareUpdatesView;
x16243_16246.om$next$IQuery$ = true;

x16243_16246.om$next$IQuery$query$arity$1 = ((function (x16243_16246){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),om.next.get_query.call(null,ui.software_updates.SoftwareUpdateView)], null)], null);
});})(x16243_16246))
;


var x16244_16247 = ui.software_updates.SoftwareUpdatesView.prototype;
x16244_16247.om$next$IQuery$ = true;

x16244_16247.om$next$IQuery$query$arity$1 = ((function (x16244_16247){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),om.next.get_query.call(null,ui.software_updates.SoftwareUpdateView)], null)], null);
});})(x16244_16247))
;


ui.software_updates.SoftwareUpdatesView.cljs$lang$type = true;

ui.software_updates.SoftwareUpdatesView.cljs$lang$ctorStr = "ui.software-updates/SoftwareUpdatesView";

ui.software_updates.SoftwareUpdatesView.cljs$lang$ctorPrWriter = (function (this__14509__auto__,writer__14510__auto__,opt__14511__auto__){
return cljs.core._write.call(null,writer__14510__auto__,"ui.software-updates/SoftwareUpdatesView");
});
ui.software_updates.view = om.next.factory.call(null,ui.software_updates.SoftwareUpdatesView);

//# sourceMappingURL=software_updates.js.map