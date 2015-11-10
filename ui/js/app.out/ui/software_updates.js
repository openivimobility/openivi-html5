// Compiled by ClojureScript 1.7.166 {}
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
var pred__24178 = cljs.core._GT__EQ_;
var expr__24179 = bytes;
if(cljs.core.truth_(pred__24178.call(null,(1024),expr__24179))){
return [cljs.core.str(format.call(null,bytes)),cljs.core.str(" bytes")].join('');
} else {
if(cljs.core.truth_(pred__24178.call(null,((1024) * (1024)),expr__24179))){
return [cljs.core.str(format.call(null,(bytes / (1000)))),cljs.core.str(" kB")].join('');
} else {
if(cljs.core.truth_(pred__24178.call(null,(((1024) * (1024)) * (1024)),expr__24179))){
return [cljs.core.str(format.call(null,((bytes / (1000)) / (1000)))),cljs.core.str(" MB")].join('');
} else {
if(cljs.core.truth_(pred__24178.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__24179))){
return [cljs.core.str(format.call(null,(((bytes / (1000)) / (1000)) / (1000)))),cljs.core.str(" GB")].join('');
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24179)].join('')));
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

var seq__24185 = cljs.core.seq.call(null,ui.software_updates.details.call(null));
var chunk__24186 = null;
var count__24187 = (0);
var i__24188 = (0);
while(true){
if((i__24188 < count__24187)){
var detail = cljs.core._nth.call(null,chunk__24186,i__24188);
f.call(null,ui.software_updates.detail__GT_update.call(null,detail));

var G__24189 = seq__24185;
var G__24190 = chunk__24186;
var G__24191 = count__24187;
var G__24192 = (i__24188 + (1));
seq__24185 = G__24189;
chunk__24186 = G__24190;
count__24187 = G__24191;
i__24188 = G__24192;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24185);
if(temp__4425__auto__){
var seq__24185__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24185__$1)){
var c__5963__auto__ = cljs.core.chunk_first.call(null,seq__24185__$1);
var G__24193 = cljs.core.chunk_rest.call(null,seq__24185__$1);
var G__24194 = c__5963__auto__;
var G__24195 = cljs.core.count.call(null,c__5963__auto__);
var G__24196 = (0);
seq__24185 = G__24193;
chunk__24186 = G__24194;
count__24187 = G__24195;
i__24188 = G__24196;
continue;
} else {
var detail = cljs.core.first.call(null,seq__24185__$1);
f.call(null,ui.software_updates.detail__GT_update.call(null,detail));

var G__24197 = cljs.core.next.call(null,seq__24185__$1);
var G__24198 = null;
var G__24199 = (0);
var G__24200 = (0);
seq__24185 = G__24197;
chunk__24186 = G__24198;
count__24187 = G__24199;
i__24188 = G__24200;
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
var this__14365__auto__ = this;
React.Component.apply(this__14365__auto__,arguments);

if(!((this__14365__auto__.getInitialState == null))){
this__14365__auto__.state = this__14365__auto__.getInitialState();
} else {
this__14365__auto__.state = {};
}

return this__14365__auto__;
});

ui.software_updates.SoftwareUpdateView.prototype = goog.object.clone(React.Component.prototype);

var x24205_24224 = ui.software_updates.SoftwareUpdateView.prototype;
x24205_24224.componentWillUpdate = ((function (x24205_24224){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14305__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14305__auto__);
});})(x24205_24224))
;

x24205_24224.shouldComponentUpdate = ((function (x24205_24224){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
var or__5160__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14305__auto__),goog.object.get(next_props__14306__auto__,"omcljs$value"));
if(or__5160__auto__){
return or__5160__auto__;
} else {
var and__5148__auto__ = this__14305__auto__.state;
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14305__auto__.state,"omcljs$state"),goog.object.get(next_state__14307__auto__,"omcljs$state"));
} else {
return and__5148__auto__;
}
}
});})(x24205_24224))
;

x24205_24224.componentWillUnmount = ((function (x24205_24224){
return (function (){
var this__14305__auto__ = this;
var r__14311__auto__ = om.next.get_reconciler.call(null,this__14305__auto__);
var cfg__14312__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14311__auto__);
var st__14313__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
var indexer__14310__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
if((st__14313__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14313__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14305__auto__);
}

if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24205_24224))
;

x24205_24224.componentDidUpdate = ((function (x24205_24224){
return (function (prev_props__14308__auto__,prev_state__14309__auto__){
var this__14305__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14305__auto__);
});})(x24205_24224))
;

x24205_24224.isMounted = ((function (x24205_24224){
return (function (){
var this__14305__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14305__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24205_24224))
;

x24205_24224.componentWillMount = ((function (x24205_24224){
return (function (){
var this__14305__auto__ = this;
var indexer__14310__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14305__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24205_24224))
;

x24205_24224.render = ((function (x24205_24224){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24206 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24207 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24208 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24209 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24210 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__24211 = om.next.props.call(null,this$);
var map__24211__$1 = ((((!((map__24211 == null)))?((((map__24211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24211):map__24211);
var name = cljs.core.get.call(null,map__24211__$1,new cljs.core.Keyword("software-update","name","software-update/name",827209690));
var version = cljs.core.get.call(null,map__24211__$1,new cljs.core.Keyword("software-update","version","software-update/version",1052892105));
var size = cljs.core.get.call(null,map__24211__$1,new cljs.core.Keyword("software-update","size","software-update/size",188162400));
var status = cljs.core.get.call(null,map__24211__$1,new cljs.core.Keyword("software-update","status","software-update/status",1331026980));
return React.DOM.li({"className": "software-update"},React.DOM.dl(null,React.DOM.dt(null,"Name"),React.DOM.dd(null,name),React.DOM.dt(null,"Version"),React.DOM.dd(null,version),React.DOM.dt(null,"Size"),React.DOM.dd(null,ui.software_updates.describe_size.call(null,size))),(function (){var pred__24213 = cljs.core._EQ_;
var expr__24214 = status;
if(cljs.core.truth_(pred__24213.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727),expr__24214))){
return React.DOM.div(null);
} else {
if(cljs.core.truth_(pred__24213.call(null,new cljs.core.Keyword(null,"downloading","downloading",-213530737),expr__24214))){
return React.DOM.div({"className": "loading"},React.DOM.span(null,"Downloading..."));
} else {
if(cljs.core.truth_(pred__24213.call(null,new cljs.core.Keyword(null,"installing","installing",506071602),expr__24214))){
return React.DOM.div({"className": "loading"},React.DOM.span(null,"Installing..."));
} else {
if(cljs.core.truth_(pred__24213.call(null,new cljs.core.Keyword(null,"installed","installed",553977691),expr__24214))){
return React.DOM.div({"className": "installed"},React.DOM.span(null,"Installed"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24214)].join('')));
}
}
}
}
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24210;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24209;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24208;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24207;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24206;
}});})(x24205_24224))
;


ui.software_updates.SoftwareUpdateView.prototype.constructor = ui.software_updates.SoftwareUpdateView;

ui.software_updates.SoftwareUpdateView.prototype.om$isComponent = true;

var x24216_24225 = ui.software_updates.SoftwareUpdateView;
x24216_24225.om$next$Ident$ = true;

x24216_24225.om$next$Ident$ident$arity$2 = ((function (x24216_24225){
return (function (this$,p__24217){
var map__24218 = p__24217;
var map__24218__$1 = ((((!((map__24218 == null)))?((((map__24218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24218):map__24218);
var name = cljs.core.get.call(null,map__24218__$1,new cljs.core.Keyword("software-update","name","software-update/name",827209690));
var version = cljs.core.get.call(null,map__24218__$1,new cljs.core.Keyword("software-update","version","software-update/version",1052892105));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","by-id","software-update/by-id",1413379894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,version], null)], null);
});})(x24216_24225))
;

x24216_24225.om$next$IQuery$ = true;

x24216_24225.om$next$IQuery$query$arity$1 = ((function (x24216_24225){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","name","software-update/name",827209690),new cljs.core.Keyword("software-update","version","software-update/version",1052892105),new cljs.core.Keyword("software-update","size","software-update/size",188162400),new cljs.core.Keyword("software-update","status","software-update/status",1331026980)], null);
});})(x24216_24225))
;


var x24220_24226 = ui.software_updates.SoftwareUpdateView.prototype;
x24220_24226.om$next$Ident$ = true;

x24220_24226.om$next$Ident$ident$arity$2 = ((function (x24220_24226){
return (function (this$,p__24221){
var map__24222 = p__24221;
var map__24222__$1 = ((((!((map__24222 == null)))?((((map__24222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24222):map__24222);
var name = cljs.core.get.call(null,map__24222__$1,new cljs.core.Keyword("software-update","name","software-update/name",827209690));
var version = cljs.core.get.call(null,map__24222__$1,new cljs.core.Keyword("software-update","version","software-update/version",1052892105));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","by-id","software-update/by-id",1413379894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,version], null)], null);
});})(x24220_24226))
;

x24220_24226.om$next$IQuery$ = true;

x24220_24226.om$next$IQuery$query$arity$1 = ((function (x24220_24226){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("software-update","name","software-update/name",827209690),new cljs.core.Keyword("software-update","version","software-update/version",1052892105),new cljs.core.Keyword("software-update","size","software-update/size",188162400),new cljs.core.Keyword("software-update","status","software-update/status",1331026980)], null);
});})(x24220_24226))
;


ui.software_updates.SoftwareUpdateView.cljs$lang$type = true;

ui.software_updates.SoftwareUpdateView.cljs$lang$ctorStr = "ui.software-updates/SoftwareUpdateView";

ui.software_updates.SoftwareUpdateView.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){
return cljs.core._write.call(null,writer__14368__auto__,"ui.software-updates/SoftwareUpdateView");
});
ui.software_updates.software_update_view = om.next.factory.call(null,ui.software_updates.SoftwareUpdateView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.juxt.call(null,new cljs.core.Keyword("software-update","name","software-update/name",827209690),new cljs.core.Keyword("software-update","version","software-update/version",1052892105))], null));
/**
 * @constructor
 */
ui.software_updates.SoftwareUpdatesView = (function ui$software_updates$SoftwareUpdatesView(){
var this__14365__auto__ = this;
React.Component.apply(this__14365__auto__,arguments);

if(!((this__14365__auto__.getInitialState == null))){
this__14365__auto__.state = this__14365__auto__.getInitialState();
} else {
this__14365__auto__.state = {};
}

return this__14365__auto__;
});

ui.software_updates.SoftwareUpdatesView.prototype = goog.object.clone(React.Component.prototype);

var x24231_24243 = ui.software_updates.SoftwareUpdatesView.prototype;
x24231_24243.componentWillUpdate = ((function (x24231_24243){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__14305__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__14305__auto__);
});})(x24231_24243))
;

x24231_24243.shouldComponentUpdate = ((function (x24231_24243){
return (function (next_props__14306__auto__,next_state__14307__auto__){
var this__14305__auto__ = this;
var or__5160__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__14305__auto__),goog.object.get(next_props__14306__auto__,"omcljs$value"));
if(or__5160__auto__){
return or__5160__auto__;
} else {
var and__5148__auto__ = this__14305__auto__.state;
if(cljs.core.truth_(and__5148__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__14305__auto__.state,"omcljs$state"),goog.object.get(next_state__14307__auto__,"omcljs$state"));
} else {
return and__5148__auto__;
}
}
});})(x24231_24243))
;

x24231_24243.componentWillUnmount = ((function (x24231_24243){
return (function (){
var this__14305__auto__ = this;
var r__14311__auto__ = om.next.get_reconciler.call(null,this__14305__auto__);
var cfg__14312__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__14311__auto__);
var st__14313__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
var indexer__14310__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__14312__auto__);
if((st__14313__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__14313__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__14305__auto__);
}

if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24231_24243))
;

x24231_24243.componentDidUpdate = ((function (x24231_24243){
return (function (prev_props__14308__auto__,prev_state__14309__auto__){
var this__14305__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__14305__auto__);
});})(x24231_24243))
;

x24231_24243.isMounted = ((function (x24231_24243){
return (function (){
var this__14305__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__14305__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24231_24243))
;

x24231_24243.componentWillMount = ((function (x24231_24243){
return (function (){
var this__14305__auto__ = this;
var indexer__14310__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__14305__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__14310__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__14310__auto__,this__14305__auto__);
}
});})(x24231_24243))
;

x24231_24243.render = ((function (x24231_24243){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24232 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24233 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24234 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24235 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24236 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__24237 = om.next.props.call(null,this$);
var map__24237__$1 = ((((!((map__24237 == null)))?((((map__24237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24237):map__24237);
var software_updates = cljs.core.get.call(null,map__24237__$1,new cljs.core.Keyword(null,"software-updates","software-updates",1873409622));
var map__24238 = om.next.get_computed.call(null,this$);
var map__24238__$1 = ((((!((map__24238 == null)))?((((map__24238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24238):map__24238);
var accept_fn = cljs.core.get.call(null,map__24238__$1,new cljs.core.Keyword(null,"accept-fn","accept-fn",-863534511));
var pending = cljs.core.filter.call(null,ui.software_updates.pending_QMARK_,software_updates);
return React.DOM.div({"id": "updates", "className": "solid"},React.DOM.div(null,React.DOM.h4(null,"Software Updates"),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,ui.software_updates.software_update_view,software_updates)),React.DOM.br(null),React.DOM.button(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),accept_fn], null),((cljs.core.not.call(null,cljs.core.seq.call(null,pending)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"disabled",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null):cljs.core.PersistentArrayMap.EMPTY))),"Download & Install All")));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24236;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24235;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24234;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24233;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24232;
}});})(x24231_24243))
;


ui.software_updates.SoftwareUpdatesView.prototype.constructor = ui.software_updates.SoftwareUpdatesView;

ui.software_updates.SoftwareUpdatesView.prototype.om$isComponent = true;

var x24241_24244 = ui.software_updates.SoftwareUpdatesView;
x24241_24244.om$next$IQuery$ = true;

x24241_24244.om$next$IQuery$query$arity$1 = ((function (x24241_24244){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),om.next.get_query.call(null,ui.software_updates.SoftwareUpdateView)], null)], null);
});})(x24241_24244))
;


var x24242_24245 = ui.software_updates.SoftwareUpdatesView.prototype;
x24242_24245.om$next$IQuery$ = true;

x24242_24245.om$next$IQuery$query$arity$1 = ((function (x24242_24245){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"software-updates","software-updates",1873409622),om.next.get_query.call(null,ui.software_updates.SoftwareUpdateView)], null)], null);
});})(x24242_24245))
;


ui.software_updates.SoftwareUpdatesView.cljs$lang$type = true;

ui.software_updates.SoftwareUpdatesView.cljs$lang$ctorStr = "ui.software-updates/SoftwareUpdatesView";

ui.software_updates.SoftwareUpdatesView.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){
return cljs.core._write.call(null,writer__14368__auto__,"ui.software-updates/SoftwareUpdatesView");
});
ui.software_updates.view = om.next.factory.call(null,ui.software_updates.SoftwareUpdatesView);

//# sourceMappingURL=software_updates.js.map