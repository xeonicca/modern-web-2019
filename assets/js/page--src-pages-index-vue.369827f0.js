(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{220:function(e,t,s){},221:function(e,t,s){},222:function(e,t){},223:function(e,t,s){"use strict";var i=s(1),a=s(43),n=s(22),l=s(6),r=[].sort,o=[1,2,3];i(i.P+i.F*(l(function(){o.sort(void 0)})||!l(function(){o.sort(null)})||!s(44)(r)),"Array",{sort:function(e){return void 0===e?r.call(n(this)):r.call(n(this),a(e))}})},224:function(e,t,s){"use strict";var i=s(1),a=s(61)(5),n=!0;"find"in[]&&Array(1).find(function(){n=!1}),i(i.P+i.F*n,"Array",{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),s(141)("find")},225:function(e,t,s){var i=s(1);i(i.S,"Date",{now:function(){return(new Date).getTime()}})},226:function(e,t,s){var i=s(1),a=s(227)(!1);i(i.S,"Object",{values:function(e){return a(e)}})},227:function(e,t,s){var i=s(5),a=s(29),n=s(21),l=s(45).f;e.exports=function(e){return function(t){for(var s,r=n(t),o=a(r),c=o.length,u=0,d=[];c>u;)s=o[u++],i&&!l.call(r,s)||d.push(e?[s,r[s]]:r[s]);return d}}},228:function(e,t,s){"use strict";var i=s(220);s.n(i).a},229:function(e,t,s){"use strict";var i=s(221);s.n(i).a},230:function(e,t,s){"use strict";var i=s(222),a=s.n(i);t.default=a.a},231:function(e,t,s){"use strict";s.r(t);s(62),s(224);var i=s(33),a=(s(223),s(11),s(30),s(60),s(225),s(226),s(142),{data:function(){return{columnsVisible:{date:{title:"Date",display:!0},title:{title:"Name",display:!0},track:{title:"Track",display:!0},time:{title:"Time",display:!0},speaker:{title:"Speaker",display:!0}},showDetailIcon:!0}},props:{talks:{defalt:function(){return[]}}},computed:{data:function(){return this.talks.map(function(e){return Object.values(e)[0]})}},methods:{toggle:function(e){this.$refs.table.toggleDetails(e)},rowClass:function(e){var t=e.sessionType,s=e.sort,i="is-".concat(t);return s<Date.now()&&(i+=" is-active"),i}},filters:{speakerName:function(e){return e&&e.length&&e[0].name||""}}}),n=(s(228),s(92)),l={metaInfo:{title:"Hello, world!"},computed:{realTalks:function(){var e=[];return this.$page.talks.edges.forEach(function(t){var s=t.node;if("break"===s.sessionType||"keynote"===s.sessionType)e.push(Object(i.a)({},s.sort,s));else if("session"===s.sessionType){var a=e.find(function(e){return Object.keys(e)[0]==s.sort});a||(a=Object(i.a)({},s.sort,{title:"議程",items:[],sessionType:"session",date:s.date,startDate:s.startDate,startDateText:s.startDateText,endDate:s.endDate,endDateText:s.endDateText,sort:s.sort}),e.push(a)),a[s.sort].items.push(s)}}),e}},components:{Table:Object(n.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("b-table",{ref:"table",attrs:{data:e.data,detailed:"","custom-detail-row":"","opened-detailed":["議程"],"detail-key":"title","show-detail-icon":e.showDetailIcon,"row-class":function(t,s){return e.rowClass(t)}},scopedSlots:e._u([{key:"default",fn:function(t){return[s("b-table-column",{attrs:{field:"date",visible:e.columnsVisible.date.display,label:e.columnsVisible.date.title,width:"300",sortable:""}},[s("strong",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(t.row.date)}})]),s("b-table-column",{attrs:{field:"date",visible:e.columnsVisible.time.display,label:e.columnsVisible.time.title,sortable:"",centered:""}},[e._v("\n        "+e._s(t.row.startDateText)+" - "+e._s(t.row.endDateText)+"\n      ")]),s("b-table-column",{attrs:{visible:e.columnsVisible.track.display,label:e.columnsVisible.track.title,centered:""}}),s("b-table-column",{attrs:{field:"title",visible:e.columnsVisible.title.display,label:e.columnsVisible.title.title,width:"300",sortable:""}},[s("strong",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(t.row.title)}})]),s("b-table-column",{attrs:{visible:e.columnsVisible.speaker.display,label:e.columnsVisible.speaker.title}},[e._v("\n        "+e._s(e._f("speakerName")(t.row.speaker))+"\n      ")])]}},{key:"detail",fn:function(t){return t.row.items.length?e._l(t.row.items,function(t,i){return s("tr",{key:t.id},[e.showDetailIcon?s("td"):e._e(),s("td"),s("b-table-column",{attrs:{field:"date",visible:e.columnsVisible.date.display,label:e.columnsVisible.date.title,sortable:"",centered:""}}),s("td",{directives:[{name:"show",rawName:"v-show",value:e.columnsVisible.track.display,expression:"columnsVisible['track'].display"}],staticClass:"has-text-centered"},[s("span",{class:["tag",{"is-danger":"A"===t.track},{"is-success":"B"===t.track},{"is-primary":"C"===t.track},{"is-warning":"D"===t.track},{"is-info":"E"===t.track}]},[e._v("\n            "+e._s(t.track)+"\n          ")])]),s("td",{directives:[{name:"show",rawName:"v-show",value:e.columnsVisible.title.display,expression:"columnsVisible['title'].display"}]},[e._v(e._s(t.title))]),s("td",{directives:[{name:"show",rawName:"v-show",value:e.columnsVisible.speaker.display,expression:"columnsVisible['speaker'].display"}]},[e._v(e._s(e._f("speakerName")(t.speaker)))])],1)}):void 0}}],null,!0)})],1)},[],!1,null,null,null).exports}},r=(s(229),s(230)),o=Object(n.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("Layout",[t("Table",{attrs:{talks:this.realTalks}})],1)},[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(o);t.default=o.exports}}]);