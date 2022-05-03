exports.ids = [9];
exports.modules = {

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5826c45d", content, true, context)
};

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/agenda.a881be4.png";

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agenda_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agenda_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agenda_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agenda_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Agenda_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.agenda__image img{\n  width:100%;\n  display:block;\n  transform:translateX(0)\n}\n@media(min-width:768px){\n.agenda__image img{\n    transform:translateX(90px)\n}\n}\n.agenda__image:before{\n  content:\"\";\n  top:0;\n  right:0;\n  bottom:0;\n  left:-50%;\n  position:absolute;\n  background:#2b2b2b\n}\n.agenda__grid{\n  padding:14px 10px;\n  border-radius:10px\n}\n.agenda__grid iframe{\n  width:100%\n}\n.agenda__grid__row{\n  margin-bottom:15px;\n  padding-bottom:15px;\n  border-bottom:1px solid #000\n}\n.agenda__grid__row__hour{\n  width:200px;\n  margin-bottom:5px;\n  display:inline-block\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Agenda.vue?vue&type=template&id=7133becc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"no-home-section bg-light-blue agenda"},[_vm._ssrNode("<div class=\"container\"><div class=\"md:grid grid-cols-10 gap-20 relative\"><div class=\"agenda__image relative col-span-4\"><img"+(_vm._ssrAttr("src",__webpack_require__(125)))+" alt=\"Agenda\"></div> <div class=\"agenda__content col-span-6\"><h2 class=\"text-emerald text-6xl font-bold mb-8\">Agenda</h2> <p class=\"text-emerald text-xl mb-4\">¡Una experiencia de aprendizaje como ninguna otra!</p> <p class=\"mb-4\">Descubre todas las actividades que tendremos, consulta los días y horarios para que no te lo pierdas.</p> <div class=\"flex mb-4\">"+(_vm._ssrList((_vm.tabs),function(tab,index){return ("<div"+(_vm._ssrClass("button --is-rounded  --nano mr-2 ",[ index == _vm.currentTab ? ' --primary shadow-2xl' : '--white' ]))+">"+_vm._ssrEscape(_vm._s(tab.label))+"</div>")}))+"</div> <div class=\"agenda__grid bg-white mb-10\">"+((_vm.currentTab == 0)?("<iframe width=\"500\" height=\"500\" frameborder=\"0\" scrolling=\"no\" src=\"https://docs.google.com/spreadsheets/d/1v4RVGRL9aF68jhW1gUIeufLzr7M-WhXMRNEcgPMrJ8Y/edit?usp=sharing&rm=minimal\"></iframe>"):"<!---->")+" "+((_vm.currentTab == 1)?("<iframe width=\"500\" height=\"500\" frameborder=\"0\" scrolling=\"no\" src=\"https://docs.google.com/spreadsheets/d/1v4RVGRL9aF68jhW1gUIeufLzr7M-WhXMRNEcgPMrJ8Y/edit#gid=1861318082?usp=sharing&rm=minimal\"></iframe>"):"<!---->")+" "+((_vm.currentTab == 2)?("<iframe width=\"500\" height=\"500\" frameborder=\"0\" scrolling=\"no\" src=\"https://docs.google.com/spreadsheets/d/1v4RVGRL9aF68jhW1gUIeufLzr7M-WhXMRNEcgPMrJ8Y/edit#gid=64163190?usp=sharing&rm=minimal\"></iframe>"):"<!---->")+"</div> <div><a href=\"https://docs.google.com/forms/d/e/1FAIpQLScbcVZHyXKvnOM-abhxt5cK0PoV3zGEWcuXdyLWODTsxg_trQ/viewform\" target=\"_blank\" class=\"button --is-rounded mr-2 --primary\">Inscribirme</a></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Agenda.vue?vue&type=template&id=7133becc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Agenda.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Agendavue_type_script_lang_js_ = ({
  name: 'Agenda',

  data() {
    return {
      currentTab: 0,
      tabs: [{
        label: 'Conferencias Magistrales'
      }, {
        label: 'Talleres'
      }, {
        label: 'Ponencias'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/Agenda.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Agendavue_type_script_lang_js_ = (Agendavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Agenda.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(126)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Agendavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3d684bb6"
  
)

/* harmony default export */ var Agenda = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Agenda.js.map