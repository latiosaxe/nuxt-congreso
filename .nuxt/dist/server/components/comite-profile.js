exports.ids = [1];
exports.modules = {

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7bd78b91", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(17);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(79);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.speak-name{\n  padding:5px;\n  display:none\n}\n.profile__label.--show-always-speak{\n  min-height:120px\n}\n.profile__label.--show-always-speak .speak-name{\n  display:block;\n  color:#4bcfbb;\n  padding-left:0;\n  padding-right:0\n}\n.single-speak{\n  position:absolute;\n  top:50%;\n  left:0;\n  right:0;\n  z-index:10000;\n  opacity:0;\n  padding:5px;\n  color:#fff;\n  transform:translateY(-50%);\n  background:rgba(0,0,0,.5);\n  transition:opacity .3s ease-in-out\n}\n.profile{\n  width:100%;\n  border-radius:15px;\n  padding-bottom:130%;\n  margin-bottom:60px;\n  background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 50% no-repeat\n}\n.profile__label{\n  left:0;\n  right:0;\n  bottom:0;\n  min-height:60px;\n  padding:10px 20px;\n  border-radius:5px;\n  background:#2b2b2b\n}\n.profile__label__info{\n  display:none\n}\n.profile__image{\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  background:50% no-repeat;\n  background-size:cover\n}\n.profile:hover .single-speak{\n  opacity:1\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/profile-pic.10c26e8.png";

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/comite/Profile.vue?vue&type=template&id=67a5ce3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile relative overflow-hidden"},[_vm._ssrNode("<div"+(_vm._ssrClass("profile__label absolute z-20 flex flex-col items-center justify-center",{ '--with-info': _vm.info, '--show-always-speak': _vm.showSpeakAlways }))+"><p class=\"text-sm text-white w-full text-left profile-name\">"+_vm._ssrEscape(_vm._s(_vm.name))+"</p> "+((_vm.speak || _vm.showSpeakAlways)?("<p class=\"text-xs text-white w-full text-left speak-name\">"+_vm._ssrEscape(_vm._s(_vm.speak))+"</p>"):"<!---->")+" "+((_vm.info)?("<button class=\"profile__label__info button --is-rounded --primary --nano-2 mt-2\">Ver más &gt;</button>"):"<!---->")+"</div> <div class=\"profile__image absolute z-10\""+(_vm._ssrStyle(null,{ backgroundImage: "url(" + __webpack_require__(18)("./" + (this.image)) + ")" }, null))+"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/comite/Profile.vue?vue&type=template&id=67a5ce3e&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/comite/Profile.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Profilevue_type_script_lang_js_ = ({
  name: 'Profile',
  props: ['image', 'name', 'info', 'data', 'speak', 'showSpeakAlways'],
  methods: {
    changeModal(val) {
      this.$store.commit('modal/changeModal', val);
      console.log('DATA', this.data);
      const data = {
        name: this.name,
        job: this.data.job,
        image: this.image,
        info: this.data.info
      };
      console.log('data', data);
      this.$store.commit('modal/fillModal', data);
    }

  }
});
// CONCATENATED MODULE: ./components/comite/Profile.vue?vue&type=script&lang=js&
 /* harmony default export */ var comite_Profilevue_type_script_lang_js_ = (Profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/comite/Profile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  comite_Profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c3b381a4"
  
)

/* harmony default export */ var Profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=comite-profile.js.map