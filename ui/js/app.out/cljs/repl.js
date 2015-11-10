// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17439_17453 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17440_17454 = null;
var count__17441_17455 = (0);
var i__17442_17456 = (0);
while(true){
if((i__17442_17456 < count__17441_17455)){
var f_17457 = cljs.core._nth.call(null,chunk__17440_17454,i__17442_17456);
cljs.core.println.call(null,"  ",f_17457);

var G__17458 = seq__17439_17453;
var G__17459 = chunk__17440_17454;
var G__17460 = count__17441_17455;
var G__17461 = (i__17442_17456 + (1));
seq__17439_17453 = G__17458;
chunk__17440_17454 = G__17459;
count__17441_17455 = G__17460;
i__17442_17456 = G__17461;
continue;
} else {
var temp__4425__auto___17462 = cljs.core.seq.call(null,seq__17439_17453);
if(temp__4425__auto___17462){
var seq__17439_17463__$1 = temp__4425__auto___17462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17439_17463__$1)){
var c__5971__auto___17464 = cljs.core.chunk_first.call(null,seq__17439_17463__$1);
var G__17465 = cljs.core.chunk_rest.call(null,seq__17439_17463__$1);
var G__17466 = c__5971__auto___17464;
var G__17467 = cljs.core.count.call(null,c__5971__auto___17464);
var G__17468 = (0);
seq__17439_17453 = G__17465;
chunk__17440_17454 = G__17466;
count__17441_17455 = G__17467;
i__17442_17456 = G__17468;
continue;
} else {
var f_17469 = cljs.core.first.call(null,seq__17439_17463__$1);
cljs.core.println.call(null,"  ",f_17469);

var G__17470 = cljs.core.next.call(null,seq__17439_17463__$1);
var G__17471 = null;
var G__17472 = (0);
var G__17473 = (0);
seq__17439_17453 = G__17470;
chunk__17440_17454 = G__17471;
count__17441_17455 = G__17472;
i__17442_17456 = G__17473;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17474 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5168__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17474);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17474)))?cljs.core.second.call(null,arglists_17474):arglists_17474));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17443 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17444 = null;
var count__17445 = (0);
var i__17446 = (0);
while(true){
if((i__17446 < count__17445)){
var vec__17447 = cljs.core._nth.call(null,chunk__17444,i__17446);
var name = cljs.core.nth.call(null,vec__17447,(0),null);
var map__17448 = cljs.core.nth.call(null,vec__17447,(1),null);
var map__17448__$1 = ((((!((map__17448 == null)))?((((map__17448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17448):map__17448);
var doc = cljs.core.get.call(null,map__17448__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__17448__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17475 = seq__17443;
var G__17476 = chunk__17444;
var G__17477 = count__17445;
var G__17478 = (i__17446 + (1));
seq__17443 = G__17475;
chunk__17444 = G__17476;
count__17445 = G__17477;
i__17446 = G__17478;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17443);
if(temp__4425__auto__){
var seq__17443__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17443__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__17443__$1);
var G__17479 = cljs.core.chunk_rest.call(null,seq__17443__$1);
var G__17480 = c__5971__auto__;
var G__17481 = cljs.core.count.call(null,c__5971__auto__);
var G__17482 = (0);
seq__17443 = G__17479;
chunk__17444 = G__17480;
count__17445 = G__17481;
i__17446 = G__17482;
continue;
} else {
var vec__17450 = cljs.core.first.call(null,seq__17443__$1);
var name = cljs.core.nth.call(null,vec__17450,(0),null);
var map__17451 = cljs.core.nth.call(null,vec__17450,(1),null);
var map__17451__$1 = ((((!((map__17451 == null)))?((((map__17451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17451):map__17451);
var doc = cljs.core.get.call(null,map__17451__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__17451__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17483 = cljs.core.next.call(null,seq__17443__$1);
var G__17484 = null;
var G__17485 = (0);
var G__17486 = (0);
seq__17443 = G__17483;
chunk__17444 = G__17484;
count__17445 = G__17485;
i__17446 = G__17486;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map