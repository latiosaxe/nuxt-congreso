exports.ids = [15,1,2,3,4,5,6,7,8];
exports.modules = Array(76).concat([
/* 76 */
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
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 78 */
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/profile-pic.10c26e8.png";

/***/ }),
/* 80 */
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

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero-interest.251d52a.png";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-1.6ae15ab.png";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-2.89f2b02.png";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-3.7ec4a0d.png";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-document.cd50dc2.png";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f4bc2136", content, true, context)
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("eeaedc4e", content, true, context)
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("410fa6b0", content, true, context)
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("d960e4b6", content, true, context)
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("18fc88a5", content, true, context)
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(110);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("71824df6", content, true, context)
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("eaf8ecbc", content, true, context)
};

/***/ }),
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(17);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(99);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.hero{\n  height:100vh;\n  max-height:875px\n}\n.hero__content{\n  z-index:2;\n  max-width:490px;\n  padding:240px 0 100px\n}\n.hero__content__small{\n  max-width:270px\n}\n.hero__bg{\n  z-index:1;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 50% no-repeat;\n  background-size:cover\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero-bg.57bb56d.jpg";

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.home-tag{\n  padding:50px 0\n}\n.home-tag__text{\n  margin:0 auto;\n  max-width:820px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home-convene.bb380c2.png";

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convene_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convene_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convene_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convene_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Convene_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.home-convene{\n  margin-bottom:80px\n}\n.home-convene__content{\n  z-index:2\n}\n@media(min-width:768px){\n.home-convene__text{\n    padding-right:80px\n}\n}\n.home-convene__image img{\n  transform:translateX(-100px)\n}\n.home-convene:before{\n  content:\"\"\n}\n@media(min-width:768px){\n.home-convene:before{\n    top:0;\n    left:50%;\n    bottom:0;\n    z-index:1;\n    right:-50%;\n    position:absolute;\n    background:#2b2b2b\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.home-convene{\n  margin-bottom:80px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Benefits_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Benefits_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Benefits_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Benefits_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Benefits_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.home-benefits{\n  padding:50px 0\n}\n.home-benefits__element img{\n  width:150px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Speakers_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Speakers_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Speakers_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Speakers_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Speakers_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.home-speakers{\n  padding:50px 0\n}\n.home-speakers__head{\n  margin-left:auto;\n  margin-right:auto;\n  max-width:470px\n}\n.home-speakers__title{\n  padding:100px 0 220px\n}\n.home-speakers__title__background{\n  z-index:1;\n  left:0;\n  right:0;\n  top:50%;\n  text-shadow:0 0 1px #4bcfbb,-1px -1px 1px #4bcfbb,1px 1px 1px #4bcfbb,-1px 1px 1px #4bcfbb,1px -1px 1px #4bcfbb;\n  transform:translateY(-46%);\n  font-size:20vw\n}\n.home-speakers__cta{\n  padding:50px 0\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Interest_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Interest_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Interest_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Interest_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Interest_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.home-interest{\n  margin-bottom:80px\n}\n.home-interest__content{\n  z-index:2\n}\n.home-interest__text{\n  padding-left:80px\n}\n.home-interest__image img{\n  transform:translateX(100px)\n}\n.home-interest:before{\n  content:\"\"\n}\n@media(min-width:768px){\n.home-interest:before{\n    top:0;\n    left:-50%;\n    bottom:0;\n    z-index:1;\n    right:50%;\n    position:absolute;\n    background:#2b2b2b\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Hero.vue?vue&type=template&id=7c5af8ca&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero relative"},[_vm._ssrNode("<div class=\"container text-white flex\"><div data-aos=\"fade-up\" data-aos-duration=\"900\" class=\"hero__content relative\"><h2 class=\"text-4xl md:text-8xl\">Bienvenido</h2> <p class=\"text-xl font-thin mb-10\">\n        al 1er. Congreso Internacional sobre Tecnología, Innovación, Calidad y Productividad para el Desarrollo Económico de las Naciones.\n      </p> <p class=\"hero__content__small text-xl font-thin mb-8\"><span class=\"font-bold\">16, 17 y 18</span> de Mayo de 2022, en modalidad virtual.\n      </p> <div class=\"flex\"><a href=\"https://docs.google.com/forms/d/e/1FAIpQLScbcVZHyXKvnOM-abhxt5cK0PoV3zGEWcuXdyLWODTsxg_trQ/viewform\" target=\"_blank\" class=\"button --is-rounded --primary mr-4\">Inscribirme</a> <a href=\"/files/agenda.pdf\" target=\"_blank\" class=\"button --is-rounded\">Ver Agenda</a></div></div></div> <div class=\"hero__bg absolute\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/Hero.vue?vue&type=template&id=7c5af8ca&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Hero.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Herovue_type_script_lang_js_ = ({
  name: 'HomeHero'
});
// CONCATENATED MODULE: ./components/home/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/Hero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a3e8cc42"
  
)

/* harmony default export */ var Hero = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Speakers.vue?vue&type=template&id=1f1a2d99&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-speakers relative w-full overflow-hidden"},[_vm._ssrNode("<link rel=\"stylesheet\" href=\"https://unpkg.com/swiper@8/swiper-bundle.min.css\"> <div class=\"home-speakers__head text-center mb-4\"><p class=\"text-emerald text-5xl font-bold mb-4\">Conoce más</p> <p class=\"font-bold text-3xl\">acerca del asombroso grupo de oradores que compartirán sus ideas y conocimientos.</p></div> <div class=\"home-speakers__title relative\"><div class=\"container relative z-10\"><p class=\"home-speakers__title__label text-emerald text-6xl font-bold\">Speakers<br>Magistrales</p></div> <p class=\"home-speakers__title__background absolute text-center text-white\">Speakers</p></div> "),_vm._ssrNode("<div class=\"home-speakers__slider relative\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"swiper mySwiper\">","</div>",[_vm._ssrNode("<div class=\"swiper-wrapper\">","</div>",_vm._l((_vm.speakers),function(ppl,index){return _vm._ssrNode("<div class=\"swiper-slide carousel-wrapper__relative\">","</div>",[_c('ComiteProfile',{attrs:{"name":ppl.name,"image":ppl.image,"info":ppl.info,"data":ppl.data,"speak":ppl.speak}})],1)}),0),_vm._ssrNode(" <div class=\"swiper-pagination\"></div>")],2)])]),_vm._ssrNode(" <div class=\"home-speakers__title relative\"><div class=\"container relative z-10\"><p class=\"home-speakers__title__label text-emerald text-6xl font-bold\">Talleristas<br>Invitados</p></div> <p class=\"home-speakers__title__background absolute text-center text-white\">Talleristas</p></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-2 md:grid-cols-4 gap-5\">","</div>",_vm._l((_vm.workshop),function(ppl,index){return _c('ComiteProfile',{key:index,attrs:{"name":ppl.name,"image":ppl.image,"speak":ppl.speak,"show-speak-always":true}})}),1)]),_vm._ssrNode(" <div class=\"home-speakers__cta text-center\"><a href=\"/files/agenda.pdf\" target=\"_blank\" class=\"button --is-rounded\">Ver Agenda</a></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/Speakers.vue?vue&type=template&id=1f1a2d99&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Speakers.vue?vue&type=script&lang=js&
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
//
//
/* harmony default export */ var Speakersvue_type_script_lang_js_ = ({
  mounted() {
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      arrows: true,
      autoplay: true,
      centeredSlides: true,
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      }
    });
  },

  data() {
    return {
      speakers: [{
        name: 'Ing. Gaby Carolina Muñoz Chará',
        image: 'gaby.png',
        info: true,
        speak: 'El poder de la Tecnología Colaborativa en la Movilidad',
        data: {
          job: 'Co – Fundadora y CEO de TAXIA LIFE',
          info: '<p class="mb-1">Colombia</p><p class="font-bold mb-5">"El poder de la Tecnología Colaborativa en la Movilidad"</p><p>Ingeniera electrónica y de telecomunicaciones, desde hace 12 años trabajando en la transformación tecnológica de transporte en Colombia, contribuyendo con el desarrollo tecnológico y con modelos de operación que han permitido tener cambios positivos en la industria del transporte, como CEO en TAXIA LIFE mi propósito de transformar la movilidad me ha comprometido con procesos de innovación y desarrollo empresarial, ejecutando proyectos de base tecnológica, pero con eminente corte social, emprendedora, empresaria, con un equipo de trabajo comprometido, empoderado y con alto nivel técnico pero con gran pasión por su labor. Actualmente trabajo en proyectos de movilidad urbana, ciudades digitales y seguridad ciudadana, en Taxia hemos logrado más de 55 millones de servicios y posicionarnos en 20 ciudades de Colombia, en Córdoba Argentina, Aruba y Panama, y en este momento abriendo operaciones en el norte de Mexico, también como empresa Andi del Futuro y Manizales Mas, ser parte de la red Wayra y SeedStars, además de ser ganadora en programas de emprendimiento como apps co, Colombia startup entre otros.</p>'
        }
      }, {
        name: 'Mtro. Víctor Pagaza Melero',
        image: 'victor.png',
        info: true,
        speak: 'Reciclado de llantas, patentes, OD´S y economía circular',
        data: {
          job: 'Fundador y CEO de la empresa A3P IMPERLLANTA',
          info: '<p class="mb-1">México</p><p class="font-bold mb-5">"Reciclado de llantas, patentes, OD’S y economía circular"</p><p class="mb-2">Prestigiado ambientalista de Valle de Bravo, Estado de México, que comenzó un negocio familiar, en 1997 fund RAMSA dedicada al reciclaje de llantas, en el 2006 fue pionero para hacer impermeabilizante hecho a base de este reciclaje,en 2008 inició la empresa de recubrimientos ecológicos y reciclados fabricante del impermeabilizante A3P Imperllanta contando a la fecha con más de 500 distribuidores nacionales e internacionales en los Estado Unidos, planta de fabricación en Bolivia con exportación a 6 países.</p><p class="mb-2">En el 2008 le otorgaron el Premio Nacional de Ecología otorgado por la Fundación Miguel Alemán Valdez</p><p class="mb-2">Representante de los organismos internacionales Onward E IIDEL en México, </p>'
        }
      }, {
        name: 'Dr. Antonio Alarcón Paredes',
        image: 'antonio.png',
        info: true,
        speak: 'El cómputo inteligente y sus aplicaciones',
        data: {
          job: 'Miembro de la Sociedad Mexicana de la Inteligencia Artificial y del Sistema Nacional de Investigadores.',
          info: '<p class="mb-1">México</p><p class="font-bold mb-5">"El cómputo inteligente y sus aplicaciones"</p><p class="mb-2">Doctorado en Ciencias de la Computación, por el Centro de investigación en Computación del IPN, en México, en 2013 con su tésis sobre la Comprensión de imágenes mediante modelos asociativos alfa .beta. Maestría en Ciencias de Ingeniería de Cómputo, por el Centro de Investigación en Computación del IPN, México, en 2009, con su tésis: Redes neuronales alfa – beta sin pesos: condiciones suficientes para la recuperación de patrones Ingeniero en Sistemas Computacionales por la Universidad del Valle de Cuernavaca, en 2007.</p><p class="mb-2">Ha obtenido diversas distinciones como:</p><ol><li>Miembro del Sistema Nacional de Investigadores Nivel 1</li><li>Miembro de la Sociedad Mexicana de Inteligencia Artificial</li><li>Reconocimiento a Perfil Deseable PRODEP desde 2015, entre otras</li></ol>'
        }
      }, {
        name: 'Dr. Edgardo Solís Carmona ',
        image: 'edgardo.png',
        info: false,
        speak: 'Innovar para ser competitivos en un mundo globalizado y monopolizado'
      }, {
        name: 'Ing. José Ricardo Guadarrama Jiménez',
        image: 'jose.png',
        info: true,
        speak: 'Hackeando a las matemáticas',
        data: {
          job: 'CEO de Richie Systems',
          info: '<p class="mb-1">México</p><p class="font-bold mb-5">"Hackeando las matemáticas"</p><p class="mb-2">Ingeniero en Sistemas Computacionales, CEO de Richie Systems</p><p class="mb-2">Especialista y asesor en medidas de protección en Ciberinteligencia, Ciberespionaje e Ingeniería Social, experto en técnicas de hacking y cracking Docente de tecnologías, robótica y ciencias exactas durante 9 años.</p><p class="mb-2">Actualmente maestrante de Tecnologías Educativas. Ha participado en varios proyectos como lo destacan en Google y en UNESCO, en los que ha perfeccionado sus conocimientos de Innovación tecnológica educativa. Destaca especialmente su proyecto llamado “Hackeando a las Matemáticas” impartido en comunidades rurales y diferentes países como Guatemala, Chile, Colombia y próximamente en Argentina. Uno de sus objetivos es formar profesionistas comprometidos con su entorno y ser ciudadanos éticos digitales.</p>'
        }
      }, {
        name: 'Mtra. Cristina García',
        image: 'cristina.png',
        info: false,
        speak: 'Cómo Gestionar la Innovación dentro de la Organización'
      }, {
        name: 'Mtro. Izhar Oswaldo Escudero Ornelas',
        image: 'izhar.png',
        info: false,
        speak: 'Machine Learning y Redes Neurales aplicadas en el aumento de la Productividad'
      }, {
        name: 'Dra. Yanet Romero Arriaga',
        image: 'yanet.png',
        info: false,
        speak: 'Los retos actuales de los profesionistas en la pandemia'
      }, {
        name: 'Dr. César Humberto Anchante Saravia',
        image: 'cesar.png',
        info: false,
        speak: 'Sistema de acuaponia orientada al desarrollo sostenible'
      }],
      workshop: [{
        name: 'Dr. Tayde González Arias',
        image: 'tayde.png',
        speak: 'Derechos y Propiedad Intelectual'
      }, {
        name: 'Mtro. Manuel Tovilla Espadas',
        image: 'manuel.png',
        speak: 'Métodos de Análisis de Estados Financieros'
      }, {
        name: 'Mtro. Carlos Abraham Carballo Monsivais',
        image: 'carlos.png',
        speak: 'Implementando Aprendizaje Maquina en toma de decisiones del bitcoin'
      }, {
        name: 'Mtra. Liliana Álvarez Arreola',
        image: 'liliana.png',
        speak: 'Deja para mañana, lo que no quieras hacer hoy'
      }, {
        name: 'Mtro. Jesús Eduardo Lara Miranda',
        image: 'jesus.png',
        speak: 'Vamos a crecer en tiempos de crisis'
      }, {
        name: 'Mtro. Aland Yarden Escudero Ornelas',
        image: 'aland.png',
        speak: 'La ciencia de datos en la Calidad y la Productividad'
      }, {
        name: 'Ing. Sylvia Garcés Soria',
        image: 'sylvia.png',
        speak: 'Herramientas para abordar oportunidades, riesgos y desafíos en la cadena de suministros'
      }, {
        name: 'Dr. Héctor Bourget Ontiveros',
        image: 'hector.png',
        speak: 'Modelos corporativos en la competitividad para emprendedores'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/home/Speakers.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Speakersvue_type_script_lang_js_ = (Speakersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/Speakers.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(109)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_Speakersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ce14828e"
  
)

/* harmony default export */ var Speakers = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ComiteProfile: __webpack_require__(80).default})


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Tag.vue?vue&type=template&id=014ae6da&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-tag container"},[_vm._ssrNode("<p class=\"home-tag__text text-xl text-center font-bold\">\n    La Maestría en Ingeniería para la Innovación y Desarrollo Tecnológico (MIIDT) de la Universidad Autónoma de Guerrero, el Tecnológico Universitario Toluca (TUT) y la Federación Global de Profesiones AC.\n  </p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/Tag.vue?vue&type=template&id=014ae6da&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/Tag.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(100)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "06039976"
  
)

/* harmony default export */ var Tag = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Convene.vue?vue&type=template&id=cd13c84a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-convene relative overflow-hidden bg-light-blue"},[_vm._ssrNode("<div class=\"container\"><div class=\"home-convene__content md:grid grid-cols-2 relative\"><div class=\"self-center home-convene__text\"><h3 class=\"text-emerald text-4xl font-bold mb-2\">Convocan</h3> <p>\n          A la comunidad estudiantil, a los especialistas en Innovación,\n          <span class=\"font-bold\">Tecnología, Economía, Calidad y Productividad</span>; a todas las\n          personas que laboran en empresas privadas, Oficinas de Gobierno, órganos no gubernamentales, Instituciones Públicas y a quienes\n          realizan investigación científica que estén interesadas en aportar\n          en el desarrollo económico de la Nación, a participar.\n        </p></div> <div class=\"bg-dark-grey home-convene__image\"><img"+(_vm._ssrAttr("src",__webpack_require__(102)))+" alt=\"Convocan\" data-aos=\"fade-right\" data-aos-delay=\"300\" data-aos-duration=\"900\"></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/Convene.vue?vue&type=template&id=cd13c84a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/Convene.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(103)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4f5bd853"
  
)

/* harmony default export */ var Convene = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Goals.vue?vue&type=template&id=2e8d78c1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative overflow-hidden bg-light-blue py-20"},[_vm._ssrNode("<div class=\"container\"><div class=\"md:grid grid-cols-2 gap-20 relative\"><div class=\"self-start\"><h3 class=\"text-emerald text-5xl font-bold mb-4\">Objetivo<br>General</h3> <ol><li>\n            Generar un espacio de encuentro multidisciplinario entre los\n            investigadores, sociedad civil y las Instituciones del Sistema\n            Educativo Nacional que permita  incentivar el desarrollo científico, humanístico, tecnológico y la innovación con el objetivo de\n            contribuir  en las actividades de desarrollo económico a nivel global y compartir las experiencias de éxito.\n          </li></ol></div> <div class=\"self-start\"><h3 class=\"text-emerald text-5xl font-bold mb-4\">Objetivos<br>Específicos</h3> <ol><li>\n            Promover la formación de investigadores.\n          </li> <li>\n            Difundir la investigación científica y tecnológica generada por investigadores, profesionistas, profesores y estudiantes de los Institutos Tecnológicos, de instituciones públicas y privadas del país y del extranjero.\n          </li> <li>\n            Intercambiar experiencias en investigación e innovación.\n          </li> <li>\n            Vincular la docencia y la investigación con el sector productivo.\n          </li></ol></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/Goals.vue?vue&type=template&id=2e8d78c1&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/Goals.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(105)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "09321bab"
  
)

/* harmony default export */ var Goals = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Benefits.vue?vue&type=template&id=60ec8d4c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-benefits container"},[_vm._ssrNode("<p class=\"text-3xl text-center font-bold text-emerald mb-16\">\n    Al participar en este evento serás parte de:\n  </p> <div class=\"md:grid grid-cols-3 gap-20 relative\"><div data-aos=\"fade-up\" data-aos-duration=\"900\" class=\"home-benefits__element flex justify-center items-center flex-col\"><img"+(_vm._ssrAttr("src",__webpack_require__(82)))+" alt=\"Icon 1\" class=\"mb-6\"> <div class=\"mb-3 flex text-emerald font-bold items-center\"><div class=\"mr-2 text-6xl\">9</div> <div class=\"leading-6 text-xl\"><p>Conferencias<br>Magistrales,</p></div></div> <p class=\"text-center\">\n        con profesionales de la más alta especialidad de distintas industrias y países.\n      </p></div> <div data-aos=\"fade-up\" data-aos-delay=\"300\" data-aos-duration=\"900\" class=\"home-benefits__element flex justify-center items-center flex-col\"><img"+(_vm._ssrAttr("src",__webpack_require__(83)))+" alt=\"Icon 2\" class=\"mb-6\"> <div class=\"mb-3 flex text-emerald font-bold items-center\"><div class=\"mr-2 text-6xl\">8</div> <div class=\"leading-6 text-xl\"><p>Talleres con distintas<br>personalidades,</p></div></div> <p class=\"text-center\">\n        expertas en su campo; que abarcarán  desde temas de Tecnología, Finanzas, Machine Learning, Administración del Tiempo y mucho más\n      </p></div> <div data-aos=\"fade-up\" data-aos-delay=\"600\" data-aos-duration=\"900\" class=\"home-benefits__element flex justify-center items-center flex-col\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt=\"Icon 3\" class=\"mb-6\"> <div class=\"mb-3 flex text-emerald font-bold items-center leading-6 text-xl text-center\"><p>Presentación de trabajos de investigación científica</p></div> <p class=\"text-center\">\n        En ponencia directa de 10min y en la revista FEGLININ (ISSN 2594-2298 e indexada Latindex).\n      </p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/Benefits.vue?vue&type=template&id=60ec8d4c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/Benefits.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(107)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "67998921"
  
)

/* harmony default export */ var Benefits = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Interest.vue?vue&type=template&id=d68bac44&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-interest relative overflow-hidden bg-light-blue"},[_vm._ssrNode("<div class=\"container\"><div class=\"home-interest__content md:grid grid-cols-2 relative\"><div class=\"bg-dark-grey home-interest__image\"><img"+(_vm._ssrAttr("src",__webpack_require__(81)))+" alt=\"Convocan\" data-aos=\"fade-left\" data-aos-delay=\"300\" data-aos-duration=\"900\"></div> <div class=\"self-center home-interest__text\"><h3 class=\"text-emerald text-4xl font-bold mb-4\">¿Estás interesado?</h3> <p class=\"mb-4 text-sm\">Regístrate o revisa la convocatoria completa aquí.</p> <div class=\"flex items-center justify-center mb-4\"><a href=\"https://docs.google.com/forms/d/e/1FAIpQLScbcVZHyXKvnOM-abhxt5cK0PoV3zGEWcuXdyLWODTsxg_trQ/viewform\" class=\"button --is-rounded --primary --compact mr-4\">Asistiré</a> <a href=\"/files/convocatoria.pdf\" target=\"_blank\" class=\"button --is-rounded --white --compact\">Ver convocatoria</a></div> <p class=\"mb-4 text-sm\">\n          Los trabajos presentados deberán estar orientados en la temática del Congreso y tienen fecha límite de recepción del <span class=\"font-bold\">20 de abril de 2022</span>.\n        </p> <div class=\"flex items-center justify-center mb-4\"><a href=\"https://docs.google.com/forms/d/e/1FAIpQLScGjECb8iSAQfuqFCPRVGZCGsEdeSLhqtQmF0mlCqa0BzUCtg/viewform\" class=\"flex items-center justify-center button --is-rounded --white --compact\"><img"+(_vm._ssrAttr("src",__webpack_require__(85)))+" alt=\"Registra tu trabajo\">\n            Registra tu trabajo\n          </a></div> <p class=\"text-emerald text-sm\">\n          ¡Gracias por ser parte de este gran acontecimiento y por construir juntos el futuro de la Nación!\n        </p></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/Interest.vue?vue&type=template&id=d68bac44&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/Interest.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(111)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c6f32ae2"
  
)

/* harmony default export */ var Interest = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=83ad15be&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('HomeHero'),_vm._ssrNode(" "),_c('HomeTag'),_vm._ssrNode(" "),_c('HomeConvene'),_vm._ssrNode(" "),_c('HomeGoals'),_vm._ssrNode(" "),_c('HomeBenefits'),_vm._ssrNode(" "),_c('HomeSpeakers'),_vm._ssrNode(" "),_c('HomeInterest')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=83ad15be&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  layout: 'default',
  name: 'IndexPage',
  head: {
    title: 'Congreso | Inicio',
    script: [{
      hid: 'stripe',
      src: 'https://unpkg.com/swiper@8/swiper-bundle.min.js',
      defer: true
    }],
    link: [{
      rel: "stylesheet",
      type: "text/css",
      href: 'https://unpkg.com/swiper@8/swiper-bundle.min.css'
    }]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7b8d5ce9"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HomeHero: __webpack_require__(118).default,HomeTag: __webpack_require__(120).default,HomeConvene: __webpack_require__(121).default,HomeGoals: __webpack_require__(122).default,HomeBenefits: __webpack_require__(123).default,HomeSpeakers: __webpack_require__(119).default,HomeInterest: __webpack_require__(124).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map