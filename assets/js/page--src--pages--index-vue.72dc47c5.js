(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{221:function(e,t,i){},222:function(e,t,i){},223:function(e,t){},225:function(e,t,i){var s=i(1);s(s.S,"Date",{now:function(){return(new Date).getTime()}})},227:function(e,t,i){"use strict";var s=i(1),a=i(61)(5),n=!0;"find"in[]&&Array(1).find(function(){n=!1}),s(s.P+s.F*n,"Array",{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i(141)("find")},228:function(e,t,i){"use strict";var s=i(1),a=i(43),n=i(22),r=i(6),l=[].sort,o=[1,2,3];s(s.P+s.F*(r(function(){o.sort(void 0)})||!r(function(){o.sort(null)})||!i(44)(l)),"Array",{sort:function(e){return void 0===e?l.call(n(this)):l.call(n(this),a(e))}})},229:function(e,t,i){var s=i(1),a=i(230)(!1);s(s.S,"Object",{values:function(e){return a(e)}})},230:function(e,t,i){var s=i(5),a=i(29),n=i(21),r=i(45).f;e.exports=function(e){return function(t){for(var i,l=n(t),o=a(l),c=o.length,u=0,d=[];c>u;)i=o[u++],s&&!r.call(l,i)||d.push(e?[i,l[i]]:l[i]);return d}}},231:function(e,t,i){"use strict";var s=i(221);i.n(s).a},232:function(e,t,i){"use strict";var s=i(222);i.n(s).a},233:function(e,t,i){"use strict";var s=i(223),a=i.n(s);t.default=a.a},235:function(e,t,i){"use strict";i.r(t);i(225),i(62),i(63),i(227);var s=i(33),a=(i(228),i(11),i(30),i(60),i(229),i(142),{data:function(){return{columnsVisible:{date:{title:"Date",display:!0},title:{title:"Name",display:!0},track:{title:"Track",display:!0},time:{title:"Time",display:!0},speaker:{title:"Speaker",display:!0}},showDetailIcon:!1}},props:{talks:{defalt:function(){return[]}}},computed:{data:function(){return this.talks.map(function(e){return Object.values(e)[0]})}},methods:{toggle:function(e){this.$refs.table.toggleDetails(e)},rowClass:function(e){var t=e.sessionType,i=e.startDate,s=e.endDate,a="is-".concat(t);return i<Date.now()&&s>Date.now()&&(a+=" is-active"),a}},filters:{speakerName:function(e){return e&&e.name||""}}}),n=(i(231),i(92)),r={metaInfo:{title:"Hello, world!"},computed:{realTalks:function(){var e=[];return this.$page.talks.edges.forEach(function(t){var i=t.node;if("break"===i.sessionType||"keynote"===i.sessionType)e.push(Object(s.a)({},i.sort,i));else if("session"===i.sessionType){var a=e.find(function(e){return Object.keys(e)[0]==i.sort});a||(a=Object(s.a)({},i.sort,{title:"議程",items:[],sessionType:"session",date:i.date,startDate:i.startDate,startDateText:i.startDateText,endDate:i.endDate,endDateText:i.endDateText,sort:i.sort}),e.push(a)),a[i.sort].items.push(i)}}),e}},components:{Table:Object(n.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("b-table",{ref:"table",attrs:{data:e.data,detailed:"","custom-detail-row":"","opened-detailed":["議程"],"detail-key":"title","show-detail-icon":e.showDetailIcon,"row-class":function(t,i){return e.rowClass(t)}},scopedSlots:e._u([{key:"default",fn:function(t){return[i("b-table-column",{attrs:{field:"date",visible:e.columnsVisible.date.display,label:e.columnsVisible.date.title,centered:""}},[i("strong",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(t.row.date)}})]),i("b-table-column",{attrs:{field:"date",visible:e.columnsVisible.time.display,label:e.columnsVisible.time.title,centered:""}},[i("span",{staticClass:"time-hint",attrs:{"data-start-date":t.row.startDate,"data-end-date":t.row.endDate}},[e._v(e._s(t.row.startDateText)+" - "+e._s(t.row.endDateText))])]),i("b-table-column",{attrs:{visible:e.columnsVisible.track.display,label:e.columnsVisible.track.title,centered:""}}),i("b-table-column",{attrs:{field:"title",visible:e.columnsVisible.title.display,label:e.columnsVisible.title.title,width:"500"}},[t.row.id?i("g-link",{attrs:{to:"talk/"+t.row.id}},[i("strong",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(t.row.title)}})]):i("span",[e._v(e._s(t.row.title))])],1),i("b-table-column",{attrs:{visible:e.columnsVisible.speaker.display,label:e.columnsVisible.speaker.title}},[e._v("\n        "+e._s(e._f("speakerName")(t.row.speaker))+"\n      ")])]}},{key:"detail",fn:function(t){return t.row.items.length?e._l(t.row.items,function(t,s){return i("tr",{key:t.id},[e.showDetailIcon?i("td"):e._e(),i("td",{directives:[{name:"show",rawName:"v-show",value:e.columnsVisible.date.display,expression:"columnsVisible['date'].display"}]}),i("td",{directives:[{name:"show",rawName:"v-show",value:e.columnsVisible.time.display,expression:"columnsVisible['time'].display"}]}),i("td",{directives:[{name:"show",rawName:"v-show",value:e.columnsVisible.track.display,expression:"columnsVisible['track'].display"}]},[i("span",{class:["tag",{"is-danger":"A"===t.track},{"is-success":"B"===t.track},{"is-primary":"C"===t.track},{"is-warning":"D"===t.track},{"is-info":"E"===t.track}]},[e._v("\n            "+e._s(t.track)+"\n          ")]),e._v("\n           "),i("strong",[e._v(e._s(t.classroom))])]),i("td",{directives:[{name:"show",rawName:"v-show",value:e.columnsVisible.title.display,expression:"columnsVisible['title'].display"}]},[i("g-link",{attrs:{to:"talk/"+t.id}},[i("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(t.title)}})])],1),i("td",{directives:[{name:"show",rawName:"v-show",value:e.columnsVisible.speaker.display,expression:"columnsVisible['speaker'].display"}]},[e._v(e._s(e._f("speakerName")(t.speaker)))])])}):void 0}}],null,!0)})],1)},[],!1,null,null,null).exports},mounted:function(){var e=document.querySelector("tr.is-active");window.scrollTo({top:e.getBoundingClientRect().top-50,behavior:"smooth"}),document.addEventListener("visibilitychange",function(e){if("visible"===document.visibilityState){var t=Array.prototype.filter.call(document.querySelectorAll(".time-hint"),function(e){var t=e.dataset.startDate,i=e.dataset.endDate;return+t<Date.now()&&+i>Date.now()});if(t.length){t=t[0];var i=document.querySelector("tr.is-active");i&&i.classList.remove("is-active");var s=t.parentNode.parentNode;s.classList.add("is-active"),window.scrollTo({top:s.getBoundingClientRect().top-50,behavior:"smooth"})}}})}},l=(i(232),i(233)),o=Object(n.a)(r,function(){var e=this.$createElement,t=this._self._c||e;return t("Layout",[t("Table",{attrs:{talks:this.realTalks}})],1)},[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(o);t.default=o.exports}}]);