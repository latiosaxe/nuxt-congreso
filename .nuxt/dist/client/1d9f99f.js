(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{315:function(t,e,n){var content=n(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("5826c45d",content,!0,{sourceMap:!1})},327:function(t,e,n){t.exports=n.p+"img/agenda.a881be4.png"},328:function(t,e,n){"use strict";n(315)},329:function(t,e,n){var r=n(29)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n.agenda__image img{\n  width:100%;\n  display:block;\n  transform:translateX(0)\n}\n@media(min-width:768px){\n.agenda__image img{\n    transform:translateX(90px)\n}\n}\n.agenda__image:before{\n  content:"";\n  top:0;\n  right:0;\n  bottom:0;\n  left:-50%;\n  position:absolute;\n  background:#2b2b2b\n}\n.agenda__grid{\n  padding:14px 10px;\n  border-radius:10px\n}\n.agenda__grid iframe{\n  width:100%\n}\n.agenda__grid__row{\n  margin-bottom:15px;\n  padding-bottom:15px;\n  border-bottom:1px solid #000\n}\n.agenda__grid__row__hour{\n  width:200px;\n  margin-bottom:5px;\n  display:inline-block\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},349:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"agenda__image relative col-span-4"},[e("img",{attrs:{src:n(327),alt:"Agenda"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"button --is-rounded mr-2 --primary",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLScbcVZHyXKvnOM-abhxt5cK0PoV3zGEWcuXdyLWODTsxg_trQ/viewform",target:"_blank"}},[t._v("Inscribirme")])])}],o={name:"Agenda",data:function(){return{currentTab:0,tabs:[{label:"Conferencias Magistrales"},{label:"Talleres"},{label:"Ponencias"}]}}},d=(n(328),n(18)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"no-home-section bg-light-blue agenda"},[n("div",{staticClass:"container"},[n("div",{staticClass:"md:grid grid-cols-10 gap-20 relative"},[t._m(0),t._v(" "),n("div",{staticClass:"agenda__content col-span-6"},[n("h2",{staticClass:"text-emerald text-6xl font-bold mb-8"},[t._v("Agenda")]),t._v(" "),n("p",{staticClass:"text-emerald text-xl mb-4"},[t._v("¡Una experiencia de aprendizaje como ninguna otra!")]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v("Descubre todas las actividades que tendremos, consulta los días y horarios para que no te lo pierdas.")]),t._v(" "),n("div",{staticClass:"flex mb-4"},t._l(t.tabs,(function(e,r){return n("div",{key:r,staticClass:"button --is-rounded  --nano mr-2 ",class:[r==t.currentTab?" --primary shadow-2xl":"--white"],domProps:{textContent:t._s(e.label)},on:{click:function(e){t.currentTab=r}}})})),0),t._v(" "),n("div",{staticClass:"agenda__grid bg-white mb-10"},[0==t.currentTab?[n("iframe",{attrs:{width:"500",height:"500",frameborder:"0",scrolling:"no",src:"https://docs.google.com/spreadsheets/d/1v4RVGRL9aF68jhW1gUIeufLzr7M-WhXMRNEcgPMrJ8Y/edit?usp=sharing&rm=minimal"}})]:t._e(),t._v(" "),1==t.currentTab?[n("iframe",{attrs:{width:"500",height:"500",frameborder:"0",scrolling:"no",src:"https://docs.google.com/spreadsheets/d/1v4RVGRL9aF68jhW1gUIeufLzr7M-WhXMRNEcgPMrJ8Y/edit#gid=1861318082?usp=sharing&rm=minimal"}})]:t._e(),t._v(" "),2==t.currentTab?[n("iframe",{attrs:{width:"500",height:"500",frameborder:"0",scrolling:"no",src:"https://docs.google.com/spreadsheets/d/1v4RVGRL9aF68jhW1gUIeufLzr7M-WhXMRNEcgPMrJ8Y/edit#gid=64163190?usp=sharing&rm=minimal"}})]:t._e()],2),t._v(" "),t._m(1)])])])])}),r,!1,null,null,null);e.default=component.exports}}]);