// Compiled by ClojureScript 1.7.166 {}
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
var seq__17140_17154 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17141_17155 = null;
var count__17142_17156 = (0);
var i__17143_17157 = (0);
while(true){
if((i__17143_17157 < count__17142_17156)){
var f_17158 = cljs.core._nth.call(null,chunk__17141_17155,i__17143_17157);
cljs.core.println.call(null,"  ",f_17158);

var G__17159 = seq__17140_17154;
var G__17160 = chunk__17141_17155;
var G__17161 = count__17142_17156;
var G__17162 = (i__17143_17157 + (1));
seq__17140_17154 = G__17159;
chunk__17141_17155 = G__17160;
count__17142_17156 = G__17161;
i__17143_17157 = G__17162;
continue;
} else {
var temp__4425__auto___17163 = cljs.core.seq.call(null,seq__17140_17154);
if(temp__4425__auto___17163){
var seq__17140_17164__$1 = temp__4425__auto___17163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17140_17164__$1)){
var c__5963__auto___17165 = cljs.core.chunk_first.call(null,seq__17140_17164__$1);
var G__17166 = cljs.core.chunk_rest.call(null,seq__17140_17164__$1);
var G__17167 = c__5963__auto___17165;
var G__17168 = cljs.core.count.call(null,c__5963__auto___17165);
var G__17169 = (0);
seq__17140_17154 = G__17166;
chunk__17141_17155 = G__17167;
count__17142_17156 = G__17168;
i__17143_17157 = G__17169;
continue;
} else {
var f_17170 = cljs.core.first.call(null,seq__17140_17164__$1);
cljs.core.println.call(null,"  ",f_17170);

var G__17171 = cljs.core.next.call(null,seq__17140_17164__$1);
var G__17172 = null;
var G__17173 = (0);
var G__17174 = (0);
seq__17140_17154 = G__17171;
chunk__17141_17155 = G__17172;
count__17142_17156 = G__17173;
i__17143_17157 = G__17174;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17175 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5160__auto__)){
return or__5160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17175);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17175)))?cljs.core.second.call(null,arglists_17175):arglists_17175));
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
var seq__17144 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17145 = null;
var count__17146 = (0);
var i__17147 = (0);
while(true){
if((i__17147 < count__17146)){
var vec__17148 = cljs.core._nth.call(null,chunk__17145,i__17147);
var name = cljs.core.nth.call(null,vec__17148,(0),null);
var map__17149 = cljs.core.nth.call(null,vec__17148,(1),null);
var map__17149__$1 = ((((!((map__17149 == null)))?((((map__17149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17149):map__17149);
var doc = cljs.core.get.call(null,map__17149__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__17149__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17176 = seq__17144;
var G__17177 = chunk__17145;
var G__17178 = count__17146;
var G__17179 = (i__17147 + (1));
seq__17144 = G__17176;
chunk__17145 = G__17177;
count__17146 = G__17178;
i__17147 = G__17179;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17144);
if(temp__4425__auto__){
var seq__17144__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17144__$1)){
var c__5963__auto__ = cljs.core.chunk_first.call(null,seq__17144__$1);
var G__17180 = cljs.core.chunk_rest.call(null,seq__17144__$1);
var G__17181 = c__5963__auto__;
var G__17182 = cljs.core.count.call(null,c__5963__auto__);
var G__17183 = (0);
seq__17144 = G__17180;
chunk__17145 = G__17181;
count__17146 = G__17182;
i__17147 = G__17183;
continue;
} else {
var vec__17151 = cljs.core.first.call(null,seq__17144__$1);
var name = cljs.core.nth.call(null,vec__17151,(0),null);
var map__17152 = cljs.core.nth.call(null,vec__17151,(1),null);
var map__17152__$1 = ((((!((map__17152 == null)))?((((map__17152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17152):map__17152);
var doc = cljs.core.get.call(null,map__17152__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__17152__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17184 = cljs.core.next.call(null,seq__17144__$1);
var G__17185 = null;
var G__17186 = (0);
var G__17187 = (0);
seq__17144 = G__17184;
chunk__17145 = G__17185;
count__17146 = G__17186;
i__17147 = G__17187;
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