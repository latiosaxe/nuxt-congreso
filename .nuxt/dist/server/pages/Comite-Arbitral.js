exports.ids = [11];
exports.modules = {

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("111af45f", content, true, context)
};

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comite_Arbitral_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comite_Arbitral_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comite_Arbitral_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comite_Arbitral_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comite_Arbitral_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.single-card{\n  padding:20px;\n  border-radius:5px\n}\n.single-card__row{\n  margin-bottom:10px\n}\n.single-card__row__icon{\n  width:60px;\n  min-width:60px\n}\n.single-card__row__icon img{\n  height:18px\n}\n.single-card__row:last-of-type{\n  margin-bottom:0\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Comite-Arbitral.vue?vue&type=template&id=b9ab9fbc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"no-home-section bg-light-blue"},[_vm._ssrNode("<div class=\"container\"><h2 class=\"text-6xl font-bold text-emerald mb-10\">Comit?? Arbitral</h2> <div class=\"grid grid-cols-3 gap-4 relative\">"+(_vm._ssrList((_vm.data),function(single,index){return ("<div class=\"bg-white single-card\"><div class=\"single-card__row\"><div class=\"flex flex-start items-center\"><div class=\"single-card__row__icon flex justify-center\"><img"+(_vm._ssrAttr("src",__webpack_require__(93)))+(_vm._ssrAttr("alt",single.name))+" class=\"mr-4\"></div> <span class=\"font-bold leading-5\">"+_vm._ssrEscape(_vm._s(single.name))+"</span></div></div> <div class=\"single-card__row\"><div class=\"flex flex-start items-center\"><div class=\"single-card__row__icon flex justify-center\"><img"+(_vm._ssrAttr("src",__webpack_require__(94)))+(_vm._ssrAttr("alt",single.place))+" class=\"mr-4\"></div> <span>"+_vm._ssrEscape(_vm._s(single.place))+"</span></div></div> <div class=\"single-card__row\"><div class=\"flex flex-start items-center\"><div class=\"single-card__row__icon flex justify-center\"><img"+(_vm._ssrAttr("src",__webpack_require__(95)))+(_vm._ssrAttr("alt",single.place))+" class=\"mr-4\"></div> <a"+(_vm._ssrAttr("href",("mailto:" + (single.email))))+" class=\"text-sm text-emerald\">"+_vm._ssrEscape(_vm._s(single.email))+"</a></div></div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Comite-Arbitral.vue?vue&type=template&id=b9ab9fbc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Comite-Arbitral.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Comite_Arbitralvue_type_script_lang_js_ = ({
  name: 'ComiteArbitral',

  data() {
    return {
      data: [{
        name: 'Ana Elizabeth Maruri Montes de Oca - Doctora',
        place: 'Tecnol??gico Universitario Toluca',
        email: 'anamaruri.m@gmail.com'
      }, {
        name: 'Carlos Rodrigo V??zquez Vald??s - Maestro',
        place: 'Tecnol??gico Universitario Toluca',
        email: 'chino-m-1@hotmail.com'
      }, {
        name: 'Francisco Javier Gonz??lez Raya - Maestro',
        place: 'Tecnol??gico Universitario Toluca',
        email: 'diraf_glez@yahoo.com.mx'
      }, {
        name: 'Irma Bedolla Solano - Maestra',
        place: 'Instituto Tecnol??gico de Acapulco',
        email: 'ir_m_a@hotmail.com'
      }, {
        name: 'Jazm??n Georgina Licona Olmos - Doctora',
        place: 'Instituto Tecnol??gico de Pachuca',
        email: 'jazmin.lo@pachuca.tecnm.mx '
      }, {
        name: 'Juan Pablo D??az Moreno - Maestro',
        place: 'Federaci??n Global de Profesiones',
        email: 'mxdiazjuan@gmail.com'
      }, {
        name: 'Juan Jos?? Bedolla Solano - Doctor',
        place: 'Instituto Tecnol??gico de Acapulco',
        email: 'juan.bs@acapulco.tecnm.mx'
      }, {
        name: 'Katya Lorena Avil??s Coyoli - Doctora',
        place: 'Instituto Tecnol??gico de Pachuca',
        email: 'katia.ac@pachuca.tecnm.mx'
      }, {
        name: 'Luis Alberto Quiroz Granados - Maestro',
        place: 'Instituto Tecnol??gico de Zit??cuaro',
        email: 'luis.qg@zitacuaro.tecnm.mx'
      }, {
        name: 'Lorenzo S??nchez V??squez - Doctor',
        place: 'Federaci??n Global de Profesiones',
        email: 'lorenzo.san.vas@gmail.com'
      }, {
        name: 'Mar??a Cristina Gonz??lez Garc??a - Maestra',
        place: 'Instituto Tecnol??gico de Zit??cuaro',
        email: 'maria.gg@zitacuaro.tecnm.mx'
      }, {
        name: 'Mar??a del Carmen Hern??ndez C??dova -Maestra',
        place: 'Tecnol??gico Universitario Toluca',
        email: 'tutcoordinacionacademica@gmail.com'
      }, {
        name: 'Norma L??pez P??rez - Maestra',
        place: 'Instituto Tecnol??gico de Pachuca',
        email: 'norma.lp@pachuca.tecnm.mx'
      }, {
        name: 'Ren?? Edmundo Cuevas Valencia -Doctor',
        place: 'Universidad Aut??noma de Guerrero',
        email: 'reneecuevas@uagro.mx'
      }, {
        name: 'Ren?? V??zquez Jim??nez - Doctor',
        place: 'Universidad Aut??noma de Guerrero',
        email: 'rvazquez@uagro.mx'
      }, {
        name: 'Roc??o Nayelly Ramos Bernal - Doctora',
        place: 'Universidad Aut??noma de Guerrero',
        email: ''
      }, {
        name: 'Silvestre Bedolla Solano - Maestro',
        place: 'Instituto Tecnol??gico de Acapulco',
        email: 'debollass@yahoo.com.mx'
      }, {
        name: 'Victoria Amaya Escamilla - Maestra',
        place: 'Tecnol??gico Universitario Toluca',
        email: 'tutcoordinacionacademica@gmail.com'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/Comite-Arbitral.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Comite_Arbitralvue_type_script_lang_js_ = (Comite_Arbitralvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Comite-Arbitral.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(130)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Comite_Arbitralvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "38e83b0c"
  
)

/* harmony default export */ var Comite_Arbitral = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/school.05227ad.png";

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/school-2.072414e.png";

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/email.afa601a.png";

/***/ })

};;
//# sourceMappingURL=Comite-Arbitral.js.map