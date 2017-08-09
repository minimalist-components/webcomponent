/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function(){
'use strict';var g=new function(){};var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function k(b){var a=aa.has(b);b=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b);return!a&&b}function l(b){var a=b.isConnected;if(void 0!==a)return a;for(;b&&!(b.__CE_isImportDocument||b instanceof Document);)b=b.parentNode||(window.ShadowRoot&&b instanceof ShadowRoot?b.host:void 0);return!(!b||!(b.__CE_isImportDocument||b instanceof Document))}
function m(b,a){for(;a&&a!==b&&!a.nextSibling;)a=a.parentNode;return a&&a!==b?a.nextSibling:null}
function n(b,a,e){e=e?e:new Set;for(var c=b;c;){if(c.nodeType===Node.ELEMENT_NODE){var d=c;a(d);var h=d.localName;if("link"===h&&"import"===d.getAttribute("rel")){c=d.import;if(c instanceof Node&&!e.has(c))for(e.add(c),c=c.firstChild;c;c=c.nextSibling)n(c,a,e);c=m(b,d);continue}else if("template"===h){c=m(b,d);continue}if(d=d.__CE_shadowRoot)for(d=d.firstChild;d;d=d.nextSibling)n(d,a,e)}c=c.firstChild?c.firstChild:m(b,c)}}function q(b,a,e){b[a]=e};function r(){this.a=new Map;this.m=new Map;this.f=[];this.b=!1}function ba(b,a,e){b.a.set(a,e);b.m.set(e.constructor,e)}function t(b,a){b.b=!0;b.f.push(a)}function v(b,a){b.b&&n(a,function(a){return w(b,a)})}function w(b,a){if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var e=0;e<b.f.length;e++)b.f[e](a)}}function x(b,a){var e=[];n(a,function(b){return e.push(b)});for(a=0;a<e.length;a++){var c=e[a];1===c.__CE_state?b.connectedCallback(c):y(b,c)}}
function z(b,a){var e=[];n(a,function(b){return e.push(b)});for(a=0;a<e.length;a++){var c=e[a];1===c.__CE_state&&b.disconnectedCallback(c)}}
function A(b,a,e){e=e?e:new Set;var c=[];n(a,function(d){if("link"===d.localName&&"import"===d.getAttribute("rel")){var a=d.import;a instanceof Node&&"complete"===a.readyState?(a.__CE_isImportDocument=!0,a.__CE_hasRegistry=!0):d.addEventListener("load",function(){var a=d.import;a.__CE_documentLoadHandled||(a.__CE_documentLoadHandled=!0,a.__CE_isImportDocument=!0,a.__CE_hasRegistry=!0,e.delete(a),A(b,a,e))})}else c.push(d)},e);if(b.b)for(a=0;a<c.length;a++)w(b,c[a]);for(a=0;a<c.length;a++)y(b,c[a])}
function y(b,a){if(void 0===a.__CE_state){var e=b.a.get(a.localName);if(e){e.constructionStack.push(a);var c=e.constructor;try{try{if(new c!==a)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{e.constructionStack.pop()}}catch(f){throw a.__CE_state=2,f;}a.__CE_state=1;a.__CE_definition=e;if(e.attributeChangedCallback)for(e=e.observedAttributes,c=0;c<e.length;c++){var d=e[c],h=a.getAttribute(d);null!==h&&b.attributeChangedCallback(a,d,null,h,null)}l(a)&&
b.connectedCallback(a)}}}r.prototype.connectedCallback=function(b){var a=b.__CE_definition;a.connectedCallback&&a.connectedCallback.call(b)};r.prototype.disconnectedCallback=function(b){var a=b.__CE_definition;a.disconnectedCallback&&a.disconnectedCallback.call(b)};r.prototype.attributeChangedCallback=function(b,a,e,c,d){var h=b.__CE_definition;h.attributeChangedCallback&&-1<h.observedAttributes.indexOf(a)&&h.attributeChangedCallback.call(b,a,e,c,d)};function B(b,a){this.c=b;this.a=a;this.b=void 0;A(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function C(b){b.b&&b.b.disconnect()}B.prototype.f=function(b){var a=this.a.readyState;"interactive"!==a&&"complete"!==a||C(this);for(a=0;a<b.length;a++)for(var e=b[a].addedNodes,c=0;c<e.length;c++)A(this.c,e[c])};function ca(){var b=this;this.b=this.a=void 0;this.f=new Promise(function(a){b.b=a;b.a&&a(b.a)})}function D(b){if(b.a)throw Error("Already resolved.");b.a=void 0;b.b&&b.b(void 0)};function E(b){this.i=!1;this.c=b;this.l=new Map;this.j=function(b){return b()};this.g=!1;this.h=[];this.s=new B(b,document)}
E.prototype.define=function(b,a){var e=this;if(!(a instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!k(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(this.c.a.get(b))throw Error("A custom element with name '"+b+"' has already been defined.");if(this.i)throw Error("A custom element is already being defined.");this.i=!0;var c,d,h,f,u;try{var p=function(b){var a=P[b];if(void 0!==a&&!(a instanceof Function))throw Error("The '"+b+"' callback must be a function.");
return a},P=a.prototype;if(!(P instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");c=p("connectedCallback");d=p("disconnectedCallback");h=p("adoptedCallback");f=p("attributeChangedCallback");u=a.observedAttributes||[]}catch(ua){return}finally{this.i=!1}ba(this.c,b,{localName:b,constructor:a,connectedCallback:c,disconnectedCallback:d,adoptedCallback:h,attributeChangedCallback:f,observedAttributes:u,constructionStack:[]});this.h.push(b);this.g||(this.g=
!0,this.j(function(){if(!1!==e.g)for(e.g=!1,A(e.c,document);0<e.h.length;){var b=e.h.shift();(b=e.l.get(b))&&D(b)}}))};E.prototype.get=function(b){if(b=this.c.a.get(b))return b.constructor};E.prototype.whenDefined=function(b){if(!k(b))return Promise.reject(new SyntaxError("'"+b+"' is not a valid custom element name."));var a=this.l.get(b);if(a)return a.f;a=new ca;this.l.set(b,a);this.c.a.get(b)&&-1===this.h.indexOf(b)&&D(a);return a.f};E.prototype.u=function(b){C(this.s);var a=this.j;this.j=function(e){return b(function(){return a(e)})}};
window.CustomElementRegistry=E;E.prototype.define=E.prototype.define;E.prototype.get=E.prototype.get;E.prototype.whenDefined=E.prototype.whenDefined;E.prototype.polyfillWrapFlushCallback=E.prototype.u;var F=window.Document.prototype.createElement,da=window.Document.prototype.createElementNS,ea=window.Document.prototype.importNode,fa=window.Document.prototype.prepend,ga=window.Document.prototype.append,G=window.Node.prototype.cloneNode,H=window.Node.prototype.appendChild,I=window.Node.prototype.insertBefore,J=window.Node.prototype.removeChild,K=window.Node.prototype.replaceChild,L=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),M=window.Element.prototype.attachShadow,N=Object.getOwnPropertyDescriptor(window.Element.prototype,
"innerHTML"),O=window.Element.prototype.getAttribute,Q=window.Element.prototype.setAttribute,R=window.Element.prototype.removeAttribute,S=window.Element.prototype.getAttributeNS,T=window.Element.prototype.setAttributeNS,U=window.Element.prototype.removeAttributeNS,V=window.Element.prototype.insertAdjacentElement,ha=window.Element.prototype.prepend,ia=window.Element.prototype.append,ja=window.Element.prototype.before,ka=window.Element.prototype.after,la=window.Element.prototype.replaceWith,ma=window.Element.prototype.remove,
na=window.HTMLElement,W=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),X=window.HTMLElement.prototype.insertAdjacentElement;function oa(){var b=Y;window.HTMLElement=function(){function a(){var a=this.constructor,c=b.m.get(a);if(!c)throw Error("The custom element being constructed was not registered with `customElements`.");var d=c.constructionStack;if(!d.length)return d=F.call(document,c.localName),Object.setPrototypeOf(d,a.prototype),d.__CE_state=1,d.__CE_definition=c,w(b,d),d;var c=d.length-1,h=d[c];if(h===g)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
d[c]=g;Object.setPrototypeOf(h,a.prototype);w(b,h);return h}a.prototype=na.prototype;return a}()};function pa(b,a,e){a.prepend=function(a){for(var d=[],c=0;c<arguments.length;++c)d[c-0]=arguments[c];c=d.filter(function(b){return b instanceof Node&&l(b)});e.o.apply(this,d);for(var f=0;f<c.length;f++)z(b,c[f]);if(l(this))for(c=0;c<d.length;c++)f=d[c],f instanceof Element&&x(b,f)};a.append=function(a){for(var d=[],c=0;c<arguments.length;++c)d[c-0]=arguments[c];c=d.filter(function(b){return b instanceof Node&&l(b)});e.append.apply(this,d);for(var f=0;f<c.length;f++)z(b,c[f]);if(l(this))for(c=0;c<
d.length;c++)f=d[c],f instanceof Element&&x(b,f)}};function qa(){var b=Y;q(Document.prototype,"createElement",function(a){if(this.__CE_hasRegistry){var e=b.a.get(a);if(e)return new e.constructor}a=F.call(this,a);w(b,a);return a});q(Document.prototype,"importNode",function(a,e){a=ea.call(this,a,e);this.__CE_hasRegistry?A(b,a):v(b,a);return a});q(Document.prototype,"createElementNS",function(a,e){if(this.__CE_hasRegistry&&(null===a||"http://www.w3.org/1999/xhtml"===a)){var c=b.a.get(e);if(c)return new c.constructor}a=da.call(this,a,e);w(b,a);return a});
pa(b,Document.prototype,{o:fa,append:ga})};function ra(){var b=Y;function a(a,c){Object.defineProperty(a,"textContent",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)c.set.call(this,a);else{var d=void 0;if(this.firstChild){var e=this.childNodes,u=e.length;if(0<u&&l(this))for(var d=Array(u),p=0;p<u;p++)d[p]=e[p]}c.set.call(this,a);if(d)for(a=0;a<d.length;a++)z(b,d[a])}}})}q(Node.prototype,"insertBefore",function(a,c){if(a instanceof DocumentFragment){var d=Array.prototype.slice.apply(a.childNodes);
a=I.call(this,a,c);if(l(this))for(c=0;c<d.length;c++)x(b,d[c]);return a}d=l(a);c=I.call(this,a,c);d&&z(b,a);l(this)&&x(b,a);return c});q(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=H.call(this,a);if(l(this))for(var d=0;d<c.length;d++)x(b,c[d]);return a}c=l(a);d=H.call(this,a);c&&z(b,a);l(this)&&x(b,a);return d});q(Node.prototype,"cloneNode",function(a){a=G.call(this,a);this.ownerDocument.__CE_hasRegistry?A(b,a):v(b,a);
return a});q(Node.prototype,"removeChild",function(a){var c=l(a),d=J.call(this,a);c&&z(b,a);return d});q(Node.prototype,"replaceChild",function(a,c){if(a instanceof DocumentFragment){var d=Array.prototype.slice.apply(a.childNodes);a=K.call(this,a,c);if(l(this))for(z(b,c),c=0;c<d.length;c++)x(b,d[c]);return a}var d=l(a),e=K.call(this,a,c),f=l(this);f&&z(b,c);d&&z(b,a);f&&x(b,a);return e});L&&L.get?a(Node.prototype,L):t(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=[],b=
0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)J.call(this,this.firstChild);H.call(this,document.createTextNode(a))}})})};function sa(b){var a=Element.prototype;a.before=function(a){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];d=c.filter(function(a){return a instanceof Node&&l(a)});ja.apply(this,c);for(var e=0;e<d.length;e++)z(b,d[e]);if(l(this))for(d=0;d<c.length;d++)e=c[d],e instanceof Element&&x(b,e)};a.after=function(a){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];d=c.filter(function(a){return a instanceof Node&&l(a)});ka.apply(this,c);for(var e=0;e<d.length;e++)z(b,d[e]);if(l(this))for(d=
0;d<c.length;d++)e=c[d],e instanceof Element&&x(b,e)};a.replaceWith=function(a){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];var d=c.filter(function(a){return a instanceof Node&&l(a)}),e=l(this);la.apply(this,c);for(var f=0;f<d.length;f++)z(b,d[f]);if(e)for(z(b,this),d=0;d<c.length;d++)e=c[d],e instanceof Element&&x(b,e)};a.remove=function(){var a=l(this);ma.call(this);a&&z(b,this)}};function ta(){var b=Y;function a(a,c){Object.defineProperty(a,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){var d=this,e=void 0;l(this)&&(e=[],n(this,function(a){a!==d&&e.push(a)}));c.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var h=e[f];1===h.__CE_state&&b.disconnectedCallback(h)}this.ownerDocument.__CE_hasRegistry?A(b,this):v(b,this);return a}})}function e(a,c){q(a,"insertAdjacentElement",function(a,d){var e=l(d);a=c.call(this,a,d);e&&z(b,d);l(a)&&x(b,d);
return a})}M?q(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=M.call(this,a)}):console.warn("Custom Elements: `Element#attachShadow` was not patched.");if(N&&N.get)a(Element.prototype,N);else if(W&&W.get)a(HTMLElement.prototype,W);else{var c=F.call(document,"div");t(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return G.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName?this.content:this;for(c.innerHTML=a;0<b.childNodes.length;)J.call(b,
b.childNodes[0]);for(;0<c.childNodes.length;)H.call(b,c.childNodes[0])}})})}q(Element.prototype,"setAttribute",function(a,c){if(1!==this.__CE_state)return Q.call(this,a,c);var d=O.call(this,a);Q.call(this,a,c);c=O.call(this,a);b.attributeChangedCallback(this,a,d,c,null)});q(Element.prototype,"setAttributeNS",function(a,c,e){if(1!==this.__CE_state)return T.call(this,a,c,e);var d=S.call(this,a,c);T.call(this,a,c,e);e=S.call(this,a,c);b.attributeChangedCallback(this,c,d,e,a)});q(Element.prototype,"removeAttribute",
function(a){if(1!==this.__CE_state)return R.call(this,a);var c=O.call(this,a);R.call(this,a);null!==c&&b.attributeChangedCallback(this,a,c,null,null)});q(Element.prototype,"removeAttributeNS",function(a,c){if(1!==this.__CE_state)return U.call(this,a,c);var d=S.call(this,a,c);U.call(this,a,c);var e=S.call(this,a,c);d!==e&&b.attributeChangedCallback(this,c,d,e,a)});X?e(HTMLElement.prototype,X):V?e(Element.prototype,V):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
pa(b,Element.prototype,{o:ha,append:ia});sa(b)};/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Z=window.customElements;if(!Z||Z.forcePolyfill||"function"!=typeof Z.define||"function"!=typeof Z.get){var Y=new r;oa();qa();ra();ta();document.__CE_hasRegistry=!0;var customElements=new E(Y);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};
}).call(self);

//# sourceMappingURL=custom-elements.min.js.map


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const {HTMLElement} = window
const evaluate = __webpack_require__(2)

module.exports = class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this.trimValue = true
    this._setStyle()
    this._setInput()
    this._setPlaceholder()
    this._setAttributeValue()
    this._setAttributeName()
    this._setAttributeDisabled()
    this._setAttributeReadonly()
    this._setAttributeMaxlength()
    this._setAttributeAutocapitalize()
    this._setAttributeAutocomplete()
    this._setAttributeSpellcheck()
    this._setAttributeAutofocus()
    this._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'maxlength',
      'autocapitalize',
      'autofocus',
    ]
  }

  attributeChangedCallback(name, old, value) {
    this[name] = value
  }

  _setStyle() {
    this.classList.add('mn-input')
  }

  _setInput() {
    this.input = document.createElement('input')
    this.input.classList.add('input')

    this.appendChild(this.input)

    this.input.addEventListener('input', () => {
      this.input.value
        ? this.classList.add('has-value')
        : this.classList.remove('has-value')
    })

    this.input.addEventListener('change', () => { // set class .has-value
      if (this.trimValue) {
        this.input.value = this.input.value.replace(/\s{2,}/g, ' ').trim()
      }

      this.input.value
        ? this.classList.add('has-value')
        : this.classList.remove('has-value')
    })

    this.input.addEventListener('blur', () => {
      this.input.value
        ? this.classList.add('has-value')
        : this.classList.remove('has-value')
    })

    const validate = () => { // validate
      const closestForm = this.closest('form') || this.closest('mn-form')
      closestForm && closestForm.classList.contains('submitted')
        ? this.validate()
        : null
    }

    this.input.addEventListener('keyup', validate)
    this.input.addEventListener('change', validate)
    this.input.addEventListener('input', validate)

    this.input.addEventListener('focus', () => {
      if (!this.hasAttribute('readonly') && !this.hasAttribute('disabled')) {
        this.classList.add('focus')
      }
    })

    this.input.addEventListener('blur', () => this.classList.remove('focus'))
  }

  _setPlaceholder() {
    this.label = document.createElement('label')
    this.label.classList.add('placeholder')
    this.appendChild(this.label)
    this.placeholder = this.getAttribute('placeholder')
  }

  _setAttributeValue() {
    this.value = evaluate(this.getAttribute('value') || '')
    this.default = this.value
  }

  _setAttributeName() {
    const name = this.getAttribute('name')
    if (name) {
      this.name = name
    }
  }

  _setAttributeDisabled() {
    this.disabled = this.hasAttribute('disabled')
  }

  _setAttributeReadonly() {
    this.readonly = this.hasAttribute('readonly')
  }

  _setAttributeMaxlength() {
    this.maxlength = this.getAttribute('maxlength')
  }

  _setAttributeAutocapitalize() {
    this.autocapitalize = this.getAttribute('autocapitalize') || 'off'
  }

  _setAttributeAutocomplete() {
    this.input.setAttribute('autocomplete', 'off')
  }

  _setAttributeSpellcheck() {
    this.input.setAttribute('spellcheck', 'off')
  }

  _setAttributeAutofocus() {
    this.autofocus = this.hasAttribute('autofocus')
  }

  _setValidations() {
    this.validations = {
      required: () => this.value === '',
      pattern: () => {
        const reg = new RegExp(this.getAttribute('pattern'))

        return this.value
          ? !reg.test(this.value)
          : false
      },
    }
  }

  get value() {
    return this.input.value
  }

  set value(value = '') {
    if (this.input) {
      const differentValue = this.input.value !== value

      if (differentValue) {
        this.input.value = this.trimValue && value
          ? value.replace(/\s{2,}/g, ' ').trim()
          : value
        this.input.dispatchEvent(new Event('change'))
      }
    }
  }

  set name(value) {
    const form = this.closest('form') || this.closest('mn-form')
    const name = this.getAttribute('name')
    const element = this

    if (form && !form[name]) {
      Object.defineProperty(form, name, {
        get: () => {
          return element.getAttribute('name')
            ? element
            : undefined
        },
      })
    }
  }

  set placeholder(value) {
    if (this.label) {
      this.label.textContent = value
    }
  }

  set disabled(value) {
    if (this.input) {
      this.input.disabled = value || this.hasAttribute('disabled')
    }
  }

  set readonly(value) {
    this.input.readOnly = value || this.hasAttribute('readonly')
  }

  set maxlength(value) {
    if (this.input) {
      value
        ? this.input.setAttribute('maxlength', value)
        : this.input.removeAttribute('maxlength')
    }
  }

  set autocapitalize(value) {
    if (this.input) {
      value
        ? this.input.setAttribute('autocapitalize', value)
        : this.input.removeAttribute('autocapitalize')
    }
  }

  set autofocus(value) {
    if (this.input) {
      this.input.autofocus = value || this.hasAttribute('autofocus')
    }
  }

  blur() {
    this.input.blur()
  }

  focus() {
    // this.input.dispatchEvent(new Event('touchstart'))
    // this.input.dispatchEvent(new Event('touchsend'))
    this.input.focus()
  }

  validate() {
    const validations = {}

    for (const attribute of Object.keys(this.validations || {})) {
      const hasAttribute = this.hasAttribute(attribute)
      const attributeIsInvalid = this.validations[attribute]()

      if (hasAttribute && attributeIsInvalid) {
        this.classList.add(attribute)
        validations[attribute] = true
      } else {
        this.classList.remove(attribute)
      }
    }

    const isInvalid = Object.values(validations).some(item => item === true)

    isInvalid
      ? this.classList.add('invalid')
      : this.classList.remove('invalid')
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// const string = evaluateString('string')
// const number = evaluateString('5')
// const booleanFalse = evaluateString('false')
// const booleanTrue = evaluateString('true')
// const array = evaluateString('[1, 2]')
// const object = evaluateString(`{id: 1, name: 'snow'}`)
// const json = evaluateString('{"id": 1, "name": "snow"}')

module.exports = evaluateString

function evaluateString(value) {
  try {
    value = value.trim()
    const isVariable = !value.startsWith('[')
      && !value.startsWith('{')
      && !value.startsWith('\'')
      && !value.startsWith('"')
      && !value.startsWith('`')
      && value !== 'true'
      && value !== 'false'
      && isNaN(value)

    return isVariable
        ? eval(`'${value}'`) // convert to string
        : eval(`(${value})`) // evaluate
  } catch (e) {
    return value
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnActionSheetCustomElement()

function MnActionSheetCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-action-sheet')) {
    window.customElements.define('mn-action-sheet', __webpack_require__(11))
  }

  return window.customElements.get('mn-action-sheet')
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const {HTMLElement} = window
const evaluate = __webpack_require__(2)

module.exports = class MnCheckbox extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.ready = false
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    this._setLabel()
    this._setInput()
    this._setCustomInput()
    this._setForm()
    this.checked = this.hasAttribute('checked')
    this.disabled = this.hasAttribute('disabled')
    this.readonly = this.hasAttribute('readonly')
    this.name = this.hasAttribute('name')
    this._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'disabled',
      'readonly',
      'autofocus',
    ]
  }

  attributeChangedCallback(name, old, value) {
    if (this.parentNode && this.input && this.ready) {
      this[name] = value || this.hasAttribute(name)
    }
  }

  _setStyle() {
    this.classList.add('mn-checkbox')
    this.classList.add('mn-option')
  }

  _setLabel() {
    this.label = document.createElement('label')
    this.appendChild(this.label)

    this.label.addEventListener('mouseleave', () => {
      this.input.blur()
    })

    document.addEventListener('click', event => {
      const isLabel = event.target.tagName === 'LABEL'
        && event.target.getAttribute('for') === this.id

      if (isLabel && this.id) {
        this.input.checked = !this.input.checked
        this.input.dispatchEvent(new Event('change'))
      }
    })
  }

  _setInput() {
    this.input = document.createElement('input')
    this.input.setAttribute('type', 'checkbox')
    this.label.appendChild(this.input)

    this.addEventListener('click', () => {
      setTimeout(() => {
        this.input.blur()
      }, 0)
    })

    this.input.addEventListener('change', () => {
      this.checked
        ? this.setAttribute('checked', '')
        : this.removeAttribute('checked')

      this.form && this.form.classList && this.form.classList.contains('submitted')
        ? this.validate()
        : null
    })
  }

  _setCustomInput() {
    const input = document.createElement('div')
    input.classList.add('input')

    const vector = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    vector.innerHTML = `
      <g
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round">
          <g
            x="50%" y="50%"
            transform="translate(5, 5)"
            stroke-width="2">
              <polyline
                points="12.3825 0.581533333 3.653 10.3935333 0.273722222 6.7386"></polyline>
          </g>
      </g>
    `
    input.appendChild(vector)
    this.label.appendChild(input)
  }

  _setForm() {
    this.form = this.closest('form') || this.closest('mn-form') || document
  }

  _setValidations() {
    this.validations = {
      required: () => {
        return Array.isArray(this.value)
          ? !this.value.some(value =>
            value === evaluate(this.getAttribute('value')) || value === this.getAttribute('placeholder')
          )
          : !this.value
      },
    }
  }

  get checked() {
    return this.input.checked
  }

  set checked(value) {
    this.input.checked = value
    this.input.dispatchEvent(new Event('change'))
  }

  set disabled(value) {
    this.input.disabled = value
  }

  set readonly(value) {
    this.input.readOnly = value
  }

  set name(value) {
    const name = this.getAttribute('name')

    if (name) {
      const element = this
      this.input.setAttribute('name', name)

      if (this.form && !this.form[name]) {
        Object.defineProperty(this.form, name, {
          get: () => {
            return element.getAttribute('name')
              ? element
              : undefined
          },
        })
      }
    }
  }

  get value() {
    const values = this
      .options
      .filter(option => option.checked)
      .map(option => !option.hasAttribute('value') && !option.hasAttribute('placeholder')
        ? this.checked
        : option.hasAttribute('value')
          ? evaluate(option.getAttribute('value'))
          : option.getAttribute('placeholder')
      )

    const isSingleOption = this.options.length === 1
    const isBoolean = typeof evaluate(this.options[0].getAttribute('value')) === 'boolean'
      || !this.options[0].hasAttribute('value') && !this.options[0].hasAttribute('placeholder')

    return isSingleOption && isBoolean
      ? Boolean(values[0])
      : values
  }

  set value(value) {
    const values = Array.isArray(value)
      ? value
      : [value]

    this.options
    .forEach(option => {
      const check = values.some(value => value === option.getAttribute('value'))
      check
        ? option.setAttribute('checked', '')
        : option.removeAttribute('checked')
      option.checked = check
    })
  }

  get options() {
    const name = this.getAttribute('name')
      ? `[name="${this.getAttribute('name')}"]`
      : ':not([name])'

    return Array.from(this.form.querySelectorAll(`.mn-checkbox${name}`))
  }

  validate() {
    const validations = {}

    for (const attribute of Object.keys(this.validations || {})) {
      const hasAttribute = this.hasAttribute(attribute)
      const attributeIsInvalid = this.validations[attribute]()

      if (hasAttribute && attributeIsInvalid) {
        this.classList.add(attribute)
        validations[attribute] = true
      } else {
        this.classList.remove(attribute)
      }
    }

    const isInvalid = Object.values(validations).some(item => item === true)

    isInvalid
      ? this.classList.add('invalid')
      : this.classList.remove('invalid')
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* global angular */

angular
  .module('minimalist')
  .directive('mnCheckbox', MnCheckboxDirective)

module.exports = MnCheckboxDirective

function MnCheckboxDirective() {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element, attributes, ngModel) {
      const component = element[0]
      const input = component.input

      if (!attributes.name) {
        const name = attributes.ngModel.split('.')[attributes.ngModel.split('.').length - 1]
        component.setAttribute('name', name)
      }

      ngModel.$validators = {}
      input.addEventListener('change', setViewValue)

      element.ready(() => {
        component.ready = true
        component.value = ngModel.$modelValue
        ngModel.$setViewValue(component.value)
        // scope.$watch(attributes.ngModel, setComponentValue)
      })

      scope.$on('$destroy', () => {
        element.remove()
      })

      // function setComponentValue(value) {
      //   component.value = value
      // }

      function setViewValue() {
        ngModel.$setViewValue(component.value)
      }
    }
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const MnInput = __webpack_require__(1)
const MnActionSheet = __webpack_require__(3)
const evaluate = __webpack_require__(2)

module.exports = class MnSelect extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.empty()
    this._setStyle()
    this._setInput()
    super._setPlaceholder()
    this._setMenu()
    this._setActionSheet()
    this._setOptions()
    this._setKeyboardNavigation()
    this._setAttributeValue()
    super._setAttributeName()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    super._setAttributeAutocomplete()
    super._setAttributeSpellcheck()
    this._setValidations()
  }

  disconnectedCallback() {
    if (this.actionSheet) {
      this.actionSheet.parentNode.removeChild(this.actionSheet)
    }
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
    ]
  }

  empty() {
    Array
      .from(this.children)
      .forEach(children => {
        if (children.tagName !== 'OPTION') {
          this.removeChild(children)
        }
      })
  }

  _setOptions() {
    Array
      .from(this.querySelectorAll('option'))
      .forEach(option => {
        const hasAngularAttribute = Array
          .from(option.attributes)
          .some(attribute => attribute.name.startsWith('ng-'))

        if (!hasAngularAttribute) {
          this.addOption(option)
        }
      })

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const addedNode = mutation.addedNodes[0]
        const removedNode = mutation.removedNodes[0]
        const addOption = addedNode && addedNode.tagName === 'OPTION'
        const removeOption = removedNode && removedNode.tagName === 'OPTION'
        if (addOption) {
          this.addOption(addedNode)
        }

        if (removeOption) {
          this.removeOption(removedNode)
        }
      })
    })

    observer.observe(this, {
      attributes: false,
      childList: true,
      characterData: false,
    })

    document.addEventListener('mousedown', (event) => {
      const isOption = event.target.classList.contains('option')
        && event.target.closest('.mn-select') === this

      if (isOption) {
        event.stopPropagation()
        event.preventDefault()

        const value = event.target.getAttribute('value') || event.target.textContent
        this.value = value
        this.input.blur()
      }
    })

    document.addEventListener('mousemove', (event) => {
      const isOption = event.target.classList && event.target.classList.contains('option')
        && event.target.closest('.mn-select') === this

      if (isOption) {
        if (!this.keyboardNavigation) {
          this.focusOption(event.target)
        }
      }
    })
  }

  addOption(value) {
    const option = document.createElement('div')
    option.classList.add('option')
    option.innerHTML = value.textContent
    const focusedOption = this.menu.querySelector('.option.focus')

    if (!focusedOption) {
      option.classList.add('focus')
    }

    option.innerHTML = value.textContent
      .split('')
      .map(char => `<span class="char" data-char="${char.toLowerCase()}">${char}</span>`)
      .join('')

    if (value.hasAttribute('value')) {
      option.setAttribute('value', value.getAttribute('value'))
    }

    this.menu.appendChild(option)

    if (this.actionSheet) {
      const actionSheetOption = document.createElement('div')
      actionSheetOption.classList.add('option')
      actionSheetOption.textContent = option.textContent
      this.actionSheet.menu.appendChild(actionSheetOption)
    }

    this.filter = this.filter
  }

  removeOption(value) {
    const option = Array
      .from(this.menu.querySelectorAll('.option'))
      .find(option => option.textContent === value.textContent)

    if (option) {
      this.menu.removeChild(option)
    }

    if (this.actionSheet) {
      const actionSheetOption = Array
        .from(this.actionSheet.menu.querySelectorAll('.option'))
        .find(option => option.textContent === value.textContent)

      if (actionSheetOption) {
        this.actionSheet.menu.removeChild(actionSheetOption)
      }
    }
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-select')
  }

  _setInput() {
    super._setInput()

    this.input.addEventListener('focus', () => {
      this.input.select()
      !this.input.hasAttribute('readonly')
        ? this.show()
        : undefined
      this.filter = undefined
    })

    this.input.addEventListener('blur', () => {
      const option = Array
        .from(this.menu.querySelectorAll('.option'))
        .filter(option => {
          const optionValue = option.getAttribute('value') || option.textContent
          return optionValue === this.getAttribute('value')
        })[0]

      if (this.input.value && option) {
        this.input.value = option.textContent
      } else {
        this.value = undefined
      }
      this.hide()
    })

    this.input.addEventListener('input', () => {
      this.filter = this.input.value
      this.focusOption(this.menu.querySelector('.option:not(.hidden)'))
    })

    document.addEventListener('click', event => {
      const clickOutside = !event.target.closest('.mn-select') && event.target !== this

      if (this.visible && clickOutside) {
        this.hide()
      }
    })
  }

  _setAttributeValue() {
    const selectedOption = this.querySelector('.option[selected]')
    const selectedValue = selectedOption
      ? selectedOption.getAttribute('value') || selectedOption.textContent
      : ''

    const value = this.getAttribute('value') || selectedValue
    this.value = value
  }

  _setMenu() {
    const menu = document.createElement('menu')
    menu.classList.add('mn-card')

    this.appendChild(menu)
    this.menu = menu
  }

  _setActionSheet() {
    if (screen.width < 768) {
      const actionSheet = new MnActionSheet()
      this.actionSheet = actionSheet
      this.actionSheet.addEventListener('change', (event) => {
        const {index} = event.data
        const option = this.menu.querySelector(`.option:nth-child(${index + 1})`)
        this.value = option.textContent
        this.actionSheet.hide()
      })
      document.body.appendChild(this.actionSheet)
    }
  }

  _setKeyboardNavigation() {
    this.input.addEventListener('keydown', (event) => { // arrow navigate
      const arrowDown = event.key === 'ArrowDown'
      const arrowUp = event.key === 'ArrowUp'
      let nextOption

      const options = Array.from(this.menu.querySelectorAll('.option:not(.hidden)'))
      const currentOption = this.menu.querySelector('.option.focus')

      const currentIndex = Array.prototype.indexOf.call(options, currentOption)

      if (arrowDown) {
        event.preventDefault()
        nextOption = options[currentIndex + 1]
      } else if (arrowUp) {
        event.preventDefault()
        nextOption = options[currentIndex - 1]
      }

      if (nextOption) {
        const top = nextOption.offsetTop
        const bottom = top + nextOption.clientHeight
        const scrollToTop = top < this.menu.scrollTop
        const scrollToBottom = bottom > this.menu.scrollTop + this.menu.clientHeight

        this.keyboardNavigation = true
        if (scrollToTop) {
          this.menu.scrollTop = top
        } else if (scrollToBottom) {
          this.menu.scrollTop = bottom - this.menu.clientHeight
        }

        this.focusOption(nextOption)
        setTimeout(() => {
          delete this.keyboardNavigation
        }, 100)
      }
    })

    this.input.addEventListener('keydown', event => {
      const esc = event.key === 'Escape'

      if (esc) {
        this.value = this.value
        this.input.select()
        this.filter = undefined
      }
    })

    this.input.addEventListener('keydown', (event) => {
      const enter = event.key === 'Enter'

      if (enter) {
        const option = this.menu.querySelector('.option.focus')
        event.preventDefault()
        event.stopPropagation()

        option
          ? this.value = option.getAttribute('value') || option.textContent
          : this.value = this.value

        this.hide()
        this.input.blur()
      }
    })
  }

  _setValidations() {
    super._setValidations()
    this.validations.required = () => this.value === undefined,
    delete this.validations.pattern
  }

  show() {
    this.classList.add('visible')
    this.menu.scrollTop = 0
    this.focusOption(this.querySelector('.option:first-child'))

    if (this.actionSheet) {
      this.input.blur()
      this.actionSheet.show()
    }
  }

  hide() {
    this.classList.remove('visible')
    this.removeOptionFocus()
  }

  get visible() {
    return this.classList.contains('visible')
  }

  removeOptionFocus() {
    const latest = this.menu.querySelector('.focus')
    latest
      ? latest.classList.remove('focus')
      : undefined
  }

  focusOption(option) {
    this.removeOptionFocus()
    option
      ? option.classList.add('focus')
      : null
  }

  get value() {
    return this.getAttribute('value')
      ? evaluate(this.getAttribute('value'))
      : undefined
  }

  set value(value) {
    const differentValue = this.getAttribute('value') !== value
    const option = Array
      .from(this.querySelectorAll('option'))
      .filter(option => {
        return option.getAttribute('value') == String(value) // eslint-disable-line eqeqeq
          || option.getAttribute('value') === JSON.stringify(value)
          || option.textContent == String(value) // eslint-disable-line eqeqeq
      })[0]

    const textNotApplied = option && this.input.value !== option.textContent

    if (textNotApplied) {
      this.input.value = option
        ? option.textContent
        : ''

      this.input.dispatchEvent(new Event('change'))
    }

    if (differentValue) {
      const hasValue = value !== undefined && value !== null

      hasValue && option
        ? this.setAttribute('value', option.getAttribute('value') || option.textContent)
        :  this.removeAttribute('value')

      this.input.dispatchEvent(new Event('change'))
    }

    // if (!this.hasAttribute('value')) {
    //   this.input.value = ''
    //   this.input.dispatchEvent(new Event('change'))
    // }
  }

  get filter() {
    return this.input.value
  }

  set filter(value) {
    if (value) {
      this.classList.add('filtered')

      try {
        Array
          .from(this.menu.querySelectorAll('.option'))
          .forEach(option => {
            const matchOption = RegExp(value.split('').join('.*'), 'i').test(option.textContent)

            Array
              .from(option.querySelectorAll('.match'))
              .forEach(char => char.classList.remove('match'))

            if (matchOption) {
              option.classList.remove('hidden')

              value
                .split('')
                .forEach(char => {
                  const selector = `span[data-char="${char.toLowerCase()}"]:not(.match)`
                  const letter = option.querySelector(`.match ~ ${selector}`) || option.querySelector(selector)
                  letter
                    ? letter.classList.add('match')
                    : null
                })

            } else {
              option.classList.add('hidden')
            }
          })
      } catch (error) {
        console.log(error)
      }
    } else {
      this.classList.remove('filtered')
      Array
        .from(this.querySelectorAll('.option.hidden'))
        .forEach(option => option.classList.remove('hidden'))
    }
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* global angular */

angular.module('minimalist', [])

module.exports = {
  input: __webpack_require__(24),
  form: __webpack_require__(22),
  checkbox: __webpack_require__(5),
  radio: __webpack_require__(31),
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8)
__webpack_require__(7)


angular.module('app', [
  'minimalist',
  'ngResource',
])

angular
  .module('app')
  .controller('HomeController', HomeController)

angular
  .module('app')
  .service('Houses', HousesService)

function HomeController() {
  this.name = 'test'
  this.date = new Date()
  this.house = {name: 'stark'}

  this.change = () => {
    this.house = {name: 'lannister'}
  }
}

function HousesService($resource) {
  const service =  $resource('http://localhost:4000/houses')

  this.list = list

  function list(params = {}) {
    return service.query(params).$promise
  }
}

angular
  .module('app')
  .directive('houses', HousesSearchDirective)

function HousesSearchDirective(Houses) {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element, attributes) {
      element.bind('search', search)

      function search(event) {
        const query = angular.isObject(event.query) && event.query.name
          ? event.query.name
          : event.query

        event.target
          .fetch(() => Houses.list({query}))
          .then(setOptions)

        function setOptions(options) {
          options.forEach(item => {
            const option = document.createElement('option')
            option.textContent = item
            option.setAttribute('value', JSON.stringify({name: item.toLowerCase()}))
            event.target.appendChild(option)
          })
        }
      }
    }
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  input: __webpack_require__(25),
  email: __webpack_require__(20),
  password: __webpack_require__(29),
  number: __webpack_require__(27),
  date: __webpack_require__(16),
  select: __webpack_require__(35),
  actionSheet: __webpack_require__(3),
  form: __webpack_require__(23),
  sidenav: __webpack_require__(37),
  checkbox: __webpack_require__(14),
  radio: __webpack_require__(32),
  dialog: __webpack_require__(18),
  button: __webpack_require__(13),
  search: __webpack_require__(34),
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

const {HTMLElement} = window

module.exports = class MnActionSheet extends HTMLElement {
  constructor() {
    self = super(self)
    return self
  }

  connectedCallback() {
    this._setStyle()
    this._setMenu()
    this._setCancel()
  }

  static get observedAttributes() {
    return []
  }

  attributeChangedCallback(name, old, value) {
    if (this.parentNode) {
      this[name] = value
    }
  }

  _setStyle() {
    this.classList.add('mn-action-sheet')
    document.body.classList.add('mn-backdrop')
  }

  _setMenu() {
    const menu = document.createElement('menu')
    menu.classList.add('mn-card')

    Array
      .from(this.querySelectorAll('option'))
      .forEach(child => {
        const option = document.createElement('div')
        option.classList.add('option')
        option.innerHTML = child.textContent

        Array
          .from(child.attributes)
          .forEach(attr => option.setAttribute(attr.name, attr.value))

        child.parentNode.removeChild(child)
        menu.appendChild(option)
      })

    document.addEventListener('click', event => {
      const isOption = event.target.classList.contains('option') && event.target.closest('.mn-action-sheet')
      const index = Array.prototype.indexOf.call(this.menu.querySelectorAll('.option'), event.target)

      if (isOption && index >= 0) {
        const changeEvent = new Event('change')
        changeEvent.data = {index}
        this.dispatchEvent(changeEvent)
      }
    })

    this.appendChild(menu)
    this.menu = menu
  }

  _setCancel() {
    const button = document.createElement('button')

    button.addEventListener('click', () => {
      this.hide()
    })

    document.addEventListener('touchmove', () => {
      const clickOutside = event.target === this
      this.touchmove = true
      if (clickOutside) {
        event.preventDefault()
      }
    })

    document.addEventListener('touchend', (event) => {
      const clickOutside = event.target === this && !this.touchmove
      if (clickOutside) {
        this.hide()
      }
      delete this.touchmove
    })

    this.button = button
    this.appendChild(this.button)
  }

  show() {
    this.menu.scrollTop = 0
    this.classList.add('visible')
    document.body.classList.add('mn-backdrop-visible')
    document.body.classList.add('mn-action-sheet-visible')
  }

  hide() {
    this.classList.remove('visible')
    document.body.classList.remove('mn-backdrop-visible')
    document.body.classList.remove('mn-action-sheet-visible')
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

const {HTMLElement} = window

module.exports = class MnButton extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
    this.setButton()
  }

  setStyle() {
    this.classList.add('mn-button')
  }

  setButton() {
    this.setAttribute('tabindex', '0')
    this.addEventListener('click', () => this.blur())

    document.addEventListener('keyup', (event) => {
      if (event.target === this && event.key === 'Enter') {
        this.click()
      }
    })
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnSidenavCustomElement()

function MnSidenavCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-button')) {
    window.customElements.define('mn-button', __webpack_require__(12))
  }

  return window.customElements.get('mn-button')
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnCheckboxCustomElement()

function MnCheckboxCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-checkbox')) {
    window.customElements.define('mn-checkbox', __webpack_require__(4))
  }

  return window.customElements.get('mn-checkbox')
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const MnInput = __webpack_require__(1)

module.exports = class MnDate extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    this._setInput()
    super._setPlaceholder()
    super._setAttributeValue()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    this._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
      'max',
      'min',
    ]
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-date')
  }

  _setInput() {
    super._setInput()
    this.input.setAttribute('type', 'date')
    const supportsInputDate = this.input.type === 'date'

    if (!supportsInputDate) {
      this.input.setAttribute('type', 'text')
      this.input.setAttribute('maxlength', 10)
      this._setMask()
    }
  }

  _setValidations() {
    super._setValidations()
    this.validations.required = () => this.value === undefined,
    this.validations.min = () => newDate(this.value) < newDate(this.getAttribute('min'))
    this.validations.max = () => newDate(this.value) > newDate(this.getAttribute('max'))
    delete this.validations.pattern
  }

  _setMask() {
    this.input.addEventListener('keydown', (event) => {
      const isInputEditing = event.key === 'Backspace'
        || this.input.selectionStart !== this.input.value.length

      this.inputEditing = isInputEditing
    })

    this.input.addEventListener('input', () => {
      if (!this.inputEditing) {
        this.updateMask()
      }

      this.inputEditing = undefined
    })

    this.input.addEventListener('blur', () => {
      this.updateMask()
      const dateString = this.input.value
        .split('/')
        .reverse()
        .join('-')

      isValidDate(dateString)
        ? this.updateMask()
        : this.value = ''
    })
  }

  updateMask() {
    this.input.value = this.input.value
      .replace(/[^\d\/]/, '') // disallow invalid chars
      .replace(/[a-z]/ig, '') // disallow letters
      .replace(/(?:^00|^(\d{2})\/00)/g, '$101') // disallow repeated 0
      .replace(/000(\d)$/g, '190$1') // disallow year 0
      .replace(/00(\d{2})$/g, '19$1') // disallow year 0
      .replace(/\/{2}/g, '/') // disallow repeated /
      .replace(/(^\/)/, '') // disallow / as first char
      .replace(/(\d+\/\d+\/)\//, '$1') // disallow third /
      .replace(/^(\d)\//, '0$1/') // leading 0 day
      .replace(/^(\d{2})(\d{1})/, '$1/$2') // add first /
      .replace(/^(\d{2}\/)(\d{1})\//, '$10$2/') // leading 0 month
      .replace(/^(\d{2}\/\d{2})(\d{1})/, '$1/$2') // add second /
  }

  get value() {
    let date
    try {
      const isDateString = this.input.type === 'date'
      const value = isDateString
        ? this.input.value
        : this.input.value
          .split('/')
          .reverse()
          .join('-')

      date = isValidDate(value)
        ? newDate(value).toISOString()
        : undefined
    } catch (e) {}

    return date
      ? date
      : undefined
  }

  set value(value = '') {
    const validDate = typeof value === 'string'
      && isValidDate(value)

    value = value instanceof Date
      ? value.toISOString().substring(0, 10)
      : validDate
        ? newDate(value)
          .toISOString()
          .substring(0, 10)
        : ''

    const supportsInputDate = this.input.type === 'date'

    if (!supportsInputDate && validDate) {
      const dateString = value.split('-')
      value = new Date(dateString[0], dateString[1] - 1, dateString[2], 0, 0)
        .toLocaleString('pt-BR')
        .substring(0, 10)
    }

    this.input.value = value
    this.input.dispatchEvent(new Event('change'))
  }
}

function isValidDate(dateString) {
  const year = +dateString.split('-')[0]
  const month = +dateString.split('-')[1]
  const date = newDate(dateString)

  return date.getFullYear() >= 1900
    && date.getFullYear() === year
    && date.getMonth() + 1 === month
}

function newDate(dateString) {
  dateString = dateString || ''
  const isString = typeof dateString === 'string'
  dateString = dateString.replace(/T.+/, '')
  dateString = isString && dateString.includes('/')
    ? dateString
      .split('/')
      .reverse()
      .join('-')
    : dateString

  dateString = dateString.split('-')

  const date = new Date(dateString[0], dateString[1] - 1, dateString[2])
  return date
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnDateCustomElement()

function MnDateCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-date')) {
    window.customElements.define('mn-date', __webpack_require__(15))
  }

  return window.customElements.get('mn-date')
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

const {HTMLElement} = window

module.exports = class MnDialog extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
    this.setCard()
    this.setButtonClose()
    this.setOpenEvents()
    this.setToggleEvents()
    this.setCloseEvents()
  }

  setStyle() {
    this.classList.add('mn-dialog')
    document.body.classList.add('mn-backdrop')
  }

  setCard() {
    const card = document.createElement('div')
    card.classList.add('mn-card')
    card.innerHTML = this.innerHTML
    this.innerHTML = ''
    this.appendChild(card)
    this.card = card
  }

  setButtonClose() {
    const button = document.createElement('button')
    button.classList.add('mn-button')
    button.classList.add('action')
    button.setAttribute('close-dialog', '')
    const dialog = this.querySelector('.mn-card')
    dialog.insertBefore(button, dialog.firstChild)
  }

  setOpenEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[open-dialog="${this.id}"]`)) {
        this.open()
        event.stopPropagation()
      }
    })
  }

  setToggleEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[toggle-dialog="${this.id}"]`)) {
        this.toggle()
        event.stopPropagation()
      }
    })
  }

  setCloseEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches('[close-dialog]')) {
        this.close()
        event.stopPropagation()
      }
    })

    document.addEventListener('mousedown', event => {
      const dialogVisible = this.classList.contains('visible')
      const clickOutside = event.target.matches('.mn-dialog')

      if (dialogVisible && clickOutside) {
        this.close()
      }
    })

    document.addEventListener('keyup', event => {
      const esc = event.key === 'Escape'
      const isOpened = this.classList.contains('visible')

      if (esc && isOpened) {
        this.close()
      }
    })
  }

  open() {
    const previousDialog = document.querySelector('.mn-dialog.visible')
    if (previousDialog) {
      previousDialog.classList.remove('visible')
    }

    this.classList.add('visible')
    this.scrollTop = 0
    document.body.classList.add('mn-dialog-visible')
    document.body.classList.add('mn-backdrop-visible')
    this.dispatchEvent(new Event('open'))
  }

  close() {
    document.body.classList.remove('mn-dialog-visible')
    this.classList.remove('visible')
    document.body.classList.remove('mn-backdrop-visible')
    this.dispatchEvent(new Event('close'))
  }

  toggle() {
    this.classList.toggle('visible')
      ? this.open()
      : this.close()
  }
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnDialogCustomElement()

function MnDialogCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-dialog')) {
    window.customElements.define('mn-dialog', __webpack_require__(17))
  }

  return window.customElements.get('mn-dialog')
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

const MnInput = __webpack_require__(1)

module.exports = class MnEmail extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    super.connectedCallback()
    this.classList.add('mn-email')
    this.input.setAttribute('type', 'email')
    const regex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*'
    this.setAttribute('pattern', this.getAttribute('pattern') || regex)
  }
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnEmailCustomElement()

function MnEmailCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-email')) {
    window.customElements.define('mn-email', __webpack_require__(19))
  }

  return window.customElements.get('mn-email')
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

const {HTMLElement} = window

module.exports = class MnForm extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
    this.setSubmit()
    this.setReset()
    this.setAttributeDisabled()
    this.setAttributeReadonly()
  }

  static get observedAttributes() {
    return [
      'name',
      'disabled',
      'readonly',
    ]
  }

  attributeChangedCallback(name, old, value) {
    this[name] = value
  }

  setStyle() {
    this.classList.add('mn-form')
  }

  setSubmit() {
    document.addEventListener('keydown', (event) => {
      const enter = event.key === 'Enter'
      const srcElementInsideForm = event.target.closest('mn-form')
      if (enter && srcElementInsideForm) {
        this.submit()
      }
    })

    document.addEventListener('click', (event) => {
      const isButtonSubmit = (event.target.matches('button[type="submit"]')
        || event.target.matches('mn-button[submit]'))
        && event.target.closest('mn-form') === this

      if (isButtonSubmit) {
        this.submit()
      }
    })
  }

  setReset() {
    document.addEventListener('click', (event) => {
      const isButtonSubmit = (event.target.matches('button[type="reset"]')
        || event.target.matches('mn-button[reset]'))
        && event.target.closest('mn-form') === this

      if (isButtonSubmit) {
        this.reset()
      }
    })
  }

  setAttributeDisabled() {
    this.disabled = this.hasAttribute('disabled')
  }

  setAttributeReadonly() {
    this.readonly = this.hasAttribute('readonly')
  }

  validate() {
    this.inputs
      .filter(input => !input.hasAttribute('disabled') && !input.hasAttribute('readonly'))
      .forEach(input => input.validate())

    const isInvalid = !this.inputs.some(input => input.classList.contains('invalid'))
    return isInvalid
  }

  reset() {
    Object
      .keys(this.data)
      .forEach(name => {
        this[name].value = this.defaults[name]
      })
  }

  get inputs() {
    return Array.from(this.querySelectorAll('.mn-input, .mn-checkbox, .mn-radio'))
  }

  get defaults() {
    const defaults = {}

    this.inputs
      .forEach(input => {
        const name = input.getAttribute('name')

        if (name) {
          defaults[name] = input.default
        }
      })

    return defaults
  }

  get data() {
    const data = {}

    this.inputs
      .forEach(input => {
        const name = input.getAttribute('name')

        if (name) {
          data[name] = input.value
        }
      })

    return data
  }

  set name(name) {
    if (name && typeof name === 'string') {
      window[name] = this
    }
  }

  set disabled(value) {
    this.inputs
      .forEach(input => {
        this.hasAttribute('disabled')
          ? input.setAttribute('disabled', 'true')
          : input.removeAttribute('disabled')
      })
  }

  set readonly(value) {
    this.inputs
      .forEach(input => {
        this.hasAttribute('readonly')
          ? input.setAttribute('readonly', 'true')
          : input.removeAttribute('readonly')
      })
  }

  submit() {
    this.classList.add('submitted')
    const isValid = this.validate()
    const event = new Event('submit')
    event.data = this.data

    if (isValid) {
      this.dispatchEvent(event)
    }
  }
}


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/* global angular */

angular
  .module('minimalist')
  .directive('mnForm', MnFormDirective)

function MnFormDirective() {
  return {
    restrict: 'C',
    link(scope, element, attributes) {
      element.bind('submit', () => {
        scope.$eval(attributes.submit)
      })
    }
  }
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnFormCustomElement()

function MnFormCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-form')) {
    window.customElements.define('mn-form', __webpack_require__(21))
  }

  return window.customElements.get('mn-form')
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/* global angular */

angular
  .module('minimalist')
  .directive('mnInput', MnInputDirective)

function MnInputDirective() {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element, attributes, ngModel) {
      const component = element[0]
      const input = component.input
      const isSelect = component.classList.contains('mn-select')
      const isSearch = component.classList.contains('mn-search')

      if (!attributes.name) {
        const name = attributes.ngModel.split('.')[attributes.ngModel.split('.').length - 1]
        component.setAttribute('name', name)
      }

      ngModel.$validators = {}

      if (!isSearch) {
        input.addEventListener('change', setViewValue)
        input.addEventListener('input', setViewValue)
      }
      input.addEventListener('blur', setViewValue)

      if (!isSearch) {
        element.ready(() => {
          const value = ngModel.$modelValue

            component.value = value
            ngModel.$setViewValue(value)
            scope.$watch(attributes.ngModel, setComponentValue)
        })
      }

      if (isSearch) {
        scope.$watch(attributes.ngModel, (value) => {
          const search = new Event('search')
          search.query = value
          component.dispatchEvent(search)
          component.addEventListener('loading', applyValue)

          function applyValue() {
            component.removeEventListener('loading', applyValue)
            setTimeout(() => component.value = value, 0)
          }
        })
      }

      scope.$on('$destroy', () => {
        element.remove()
      })

      function setComponentValue(value) {
        const differentValue = component.getAttribute('value') !== value && component.value !== value
        const isObjectValue = angular.isObject(value)

        if (!isSelect || differentValue && !isObjectValue) {
          component.value = value
        }
      }

      function setViewValue(event) {
        const activeElement = event.currentTarget === document.activeElement
        const isDate = component.input.type === 'date'
        const isNumber = component.classList.contains('mn-number')
        const isBlur = event.type === 'blur'

        if (isBlur || !activeElement || !isDate && !isNumber && !isSelect) {
          ngModel.$setViewValue(component.value)
        }
      }
    }
  }
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnInputCustomElement()

function MnInputCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-input')) {
    window.customElements.define('mn-input', __webpack_require__(1))
  }

  return window.customElements.get('mn-input')
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

const MnInput = __webpack_require__(1)

module.exports = class MnNumber extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    super._setInput()
    this._setMask()
    this._setMobileKeyboard()
    this._setInputTransforms()
    this._setInputKeys()
    super._setPlaceholder()
    super._setAttributeValue()
    super._setAttributeName()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    this._setAttributeMax()
    this._setAttributeMin()
    this._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
      'max',
      'min',
    ]
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-number')
  }

  _setMask() {
    this.mask = document.createElement('div')
    this.mask.classList.add('mask')
    this.appendChild(this.mask)

    this.input.addEventListener('input', () => {
      this.updateMask()
    })
  }

  _setMobileKeyboard() {
    this.input.setAttribute('pattern', '\\d*')
  }

  _setInputTransforms() {
    this.input.addEventListener('change', () => {
      try {
        const value = eval(this.input.value.replace(/,/g, '.'))
        value !== undefined
          ? this.input.value = String(value).replace(/\./g, ',')
          : null
        const valueIsDefined = value !== undefined

        if (valueIsDefined) {
          const isCurrency = this.hasAttribute('currency')
          const precision = this.getAttribute('precision') || 0

          switch (true) {
            case isCurrency:
              this.input.value = value.toFixed(precision || 2).replace(/\./g, ',')
              break

            default:
              this.input.value = precision
                ? value.toFixed(precision).replace(/\./g, ',')
                : String(value).replace(/\./g, ',')
              break
          }
        }
      } catch (e) {
        this.value = undefined
      }

      this.hasAttribute('percentage')
        ? this.updateMask()
        : null
    })
  }

  _setInputKeys() {
    this.input.addEventListener('keydown', (event) => {
      if (!this.hasAttribute('readonly')) {
        const step = this.hasAttribute('percentage')
          ? ((+this.getAttribute('step') * 100) / 10000) || 0.01
          : +this.getAttribute('step') || 1
        const value = this.value || 0

        switch (event.key) {
          case 'ArrowUp':
            this.value = value + step
            break
          case 'ArrowDown':
            this.value = value - step
            break
        }

        event.key === 'ArrowUp' || event.key === 'ArrowDown'
          ? event.preventDefault()
          : null
      }
    })
  }

  _setAttributeMax() {
    this.max = this.getAttribute('max')
  }

  _setAttributeMin() {
    this.min = this.getAttribute('min')
  }

  _setValidations() {
    super._setValidations()
    this.validations.required = () => this.value === undefined,
    this.validations.min = () => this.value < this.getAttribute('min')
    this.validations.max = () => this.value > this.getAttribute('max')
    delete this.validations.pattern
  }

  get value() {
    const isUndefined = this.input.value === ''
    const numberString = this.input.value.replace(/,/g, '.')

    const val = isUndefined
      ? undefined
      : this.hasAttribute('percentage')
        ? (numberString * 100) / 10000
        : parseFloat(numberString)

    return val
  }

  set value(value = '') {
    if (this.input) {
      try {
        value = eval(String(value).replace(/,/g, '.'))
        const differentValue = this.input.value !== value

        if (value !== undefined && differentValue) {
          value = this.hasAttribute('percentage')
            ? +(value * 100).toFixed(this.getAttribute('precision') || 2)//value * 100
            : value
          this.input.value = value
        } else {
          this.input.value = ''
        }

      } catch (e) {
        this.input.value = ''
      }

      this.input.dispatchEvent(new Event('change'))
      this.input.dispatchEvent(new Event('input'))
    }
  }

  set max(value) {
    if (this.label) {
      this.hasAttribute('max')
        ? this.label.setAttribute('max', value)
        : this.label.removeAttribute('max')
    }
  }

  set min(value) {
    if (this.label) {
      this.hasAttribute('min')
        ? this.label.setAttribute('min', value)
        : this.label.removeAttribute('min')
    }
  }

  updateMask() {
    const hasValue = this.input.value !== '' && !/^\s+$/.test(this.input.value)

    if (this.mask && this.hasAttribute('percentage')) {
      const text = hasValue
        ? `${this.input.value} %`
        : ''

      this.mask.textContent = text
    }

    if (this.mask && this.hasAttribute('percentage')) {
      const text = hasValue
        ? `${this.input.value} %`
        : ''

      this.mask.textContent = text
    }
  }
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnNumberCustomElement()

function MnNumberCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-number')) {
    window.customElements.define('mn-number', __webpack_require__(26))
  }

  return window.customElements.get('mn-number')
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

const MnInput = __webpack_require__(1)

module.exports = class MnPassword extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    this._setInput()
    super._setPlaceholder()
    this._setVisibilityButton()
    super._setAttributeValue()
    super._setAttributeName()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    super._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
    ]
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-password')
  }

  _setInput() {
    super._setInput()
    this.input.setAttribute('type', 'password')
  }

  _setVisibilityButton() {
    const button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.setAttribute('tabindex', '-1')

    this.appendChild(button)
    this.button = button
    this.input.addEventListener('blur', () => {
      this.input.setAttribute('type', 'password')
      this.classList.remove('show-password')
      this.input.dispatchEvent(new Event('change'))
    })

    button.addEventListener('mousedown', event => {
      event.preventDefault()
    })

    button.addEventListener('click', () => {
      const toggledType = this.input.getAttribute('type') === 'password'
        ? 'text'
        : 'password'
      this.input.setAttribute('type', toggledType)
      this.classList.toggle('show-password')
      this.input.focus()
    })
  }
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnPasswordCustomElement()

function MnPasswordCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-password')) {
    window.customElements.define('mn-password', __webpack_require__(28))
  }

  return window.customElements.get('mn-password')
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

const MnCheckbox = __webpack_require__(4)
const evaluate = __webpack_require__(2)

module.exports = class MnRadio extends MnCheckbox {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    super._setLabel()
    this._setInput()
    this._setCustomInput()
    this._setForm()
    this.checked = this.hasAttribute('checked')
    this.disabled = this.hasAttribute('disabled')
    this.readonly = this.hasAttribute('readonly')
    this.name = this.hasAttribute('name')
    this._setValidations()
  }

  _setStyle() {
    this.classList.add('mn-radio')
    this.classList.add('mn-option')
  }

  _setInput() {
    this.input = document.createElement('input')
    this.input.setAttribute('type', 'radio')
    this.label.appendChild(this.input)

    this.input.addEventListener('change', (event) => {
      this.checked
        ? this.setAttribute('checked', '')
        : this.removeAttribute('checked')

      this.options.forEach(option => {
        if (option !== event.target.closest('mn-radio')) {
          option.removeAttribute('checked')
          option.input.checked = false
        }

        option.form && option.form.classList && option.form.classList.contains('submitted')
          ? option.validate()
          : null
      })
    })
  }

  _setCustomInput() {
    const input = document.createElement('div')
    input.classList.add('input')

    this.label.appendChild(input)
  }

  _setValidations() {
    this.validations = {
      required: () => !this.value,
    }
  }

  get options() {
    const name = this.getAttribute('name')
      ? `[name="${this.getAttribute('name')}"]`
      : ':not([name])'

    return Array.from(this.form.querySelectorAll(`.mn-radio${name}`))
  }

  get value() {
    const value = this
      .options
      .filter(option => option.checked)
      .map(option => option.hasAttribute('value')
        ? evaluate(option.getAttribute('value'))
        : option.getAttribute('placeholder')
      )

    return value[0]
  }

  set value(value) {
    this.options.forEach(option => {
      option.checked = false
    })

    const option = this.options.find(option => evaluate(option.getAttribute('value')) === value)

    if (option) {
      option.checked = true
    }
  }
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* global angular */

angular
  .module('minimalist')
  .directive('mnRadio', MnRadioDirective)

module.exports = MnRadioDirective

function MnRadioDirective() {
  const MnCheckboxDirective = __webpack_require__(5)
  return MnCheckboxDirective()
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnRadioCustomElement()

function MnRadioCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-radio')) {
    window.customElements.define('mn-radio', __webpack_require__(30))
  }

  return window.customElements.get('mn-radio')
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

const MnSelect = __webpack_require__(6)

module.exports = class MnSearch extends MnSelect {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    super.connectedCallback()
    this.setLoading()
    this.setSearchSheet()
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-search')
  }

  setLoading() {
    const loading = document.createElement('div')
    loading.classList.add('loading')
    this.appendChild(loading)
  }

  setSearchSheet() {
    if (this.actionSheet) {
      this.actionSheet = undefined

      const dialog = document.createElement('mn-dialog')
      this.searchSheet = dialog
      this.searchSheet.classList.add('search-sheet')
      const input = document.createElement('mn-input')
      input.setAttribute('placeholder', 'Type to search')

      this.searchSheet.appendChild(input)
      document.body.appendChild(this.searchSheet)

      this.searchSheetInput = this.searchSheet.querySelector('mn-input')
      this.setSearchSheetList()

      this.searchSheetInput.addEventListener('input', () => {
        this.filter = event.target.value
        const search = new Event('search')
        search.query = event.target.value
        this.dispatchEvent(search)
      })

      this.input.addEventListener('focus', () => {
        this.blur()
        this.searchSheet.open()
        this.searchSheetInput.value = ''
        this.searchSheetInput.dispatchEvent(new Event('input'))
        setTimeout(() => {
          this.searchSheetInput.focus()
        }, 410)
      })

    }
  }

  setSearchSheetList() {
    this.searchSheetList = document.createElement('ul')
    this.searchSheetList.classList.add('mn-list')
    this.searchSheet.querySelector('.mn-card').appendChild(this.searchSheetList)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const addedNode = mutation.addedNodes[0]
        const removedNode = mutation.removedNodes[0]
        const addOption = addedNode && addedNode.tagName === 'OPTION'
        const removeOption = removedNode && removedNode.tagName === 'OPTION'
        if (addOption) {
          const item = document.createElement('div')
          item.classList.add('mn-item')
          item.textContent = addedNode.textContent
          item.setAttribute('value', addedNode.getAttribute('value') || addedNode.textContent)
          this.searchSheetList.appendChild(item)

          item.addEventListener('touchend', (event) => {
            this.searchSheet.close()
            this.value = event.target.getAttribute('value')
          })
        }

        if (removeOption) {
          const value = removedNode.getAttribute('value')
          const item = this.searchSheet.querySelector(`.mn-item[value="${value}"]`)
          item.parentNode.removeChild(item)
        }
      })
    })

    observer.observe(this, {
      attributes: false,
      childList: true,
      characterData: false,
    })
  }

  _setInput() {
    super._setInput()

    this.input.addEventListener('input', () => {
      const event = new Event('search')
      event.query = this.input.value
      this.dispatchEvent(event)
    })
  }

  cleanOptions() {
    const options = this.querySelectorAll('option')
    Array
      .from(options)
      .forEach(option => this.removeChild(option))
  }

  fetch(request) {
    const requestType = typeof request
    const loader = requestType === 'function'
      ? request
      : () => fetch(request)

    this.classList.add('loading')

    return loader()
      .then(res => {
        this.cleanOptions()
        this.classList.remove('loading')
        this.dispatchEvent(new Event('loading'))
        return res
      })
  }
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnSelectCustomElement()

function MnSelectCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-search')) {
    window.customElements.define('mn-search', __webpack_require__(33))
  }

  return window.customElements.get('mn-search')
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnSelectCustomElement()

function MnSelectCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-select')) {
    window.customElements.define('mn-select', __webpack_require__(6))
  }

  return window.customElements.get('mn-select')
}


/***/ }),
/* 36 */
/***/ (function(module, exports) {

const {HTMLElement} = window

module.exports = class MnSidenav extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this._setStyle()
    this._setOpenEvents()
    this._setToggleEvents()
    this._setCloseEvents()
  }

  _setStyle() {
    this.classList.add('mn-sidenav')
    this.classList.add('mn-card')
    document.body.classList.add('mn-backdrop')
  }

  _setOpenEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[open-sidenav="${this.id}"]`)) {
        this.open()
        event.stopPropagation()
      }
    })
  }

  _setToggleEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[toggle-sidenav="${this.id}"]`)) {
        this.toggle()
        event.stopPropagation()
      }
    })
  }

  _setCloseEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches('[close-sidenav]')) {
        this.close()
        event.stopPropagation()
      }
    })

    document.addEventListener('click', event => {
      const clickOutside = !event.target.matches('[open-sidenav]')
        && !event.target.matches('[close-sidenav]')
        && !event.target.matches('[toggle-sidenav]')
        && !event.target.closest('mn-sidenav')
      const sidebarVisible = this.classList.contains('visible')

      if (clickOutside && sidebarVisible) {
        this.close()
      }
    })

    document.addEventListener('keyup', event => {
      const esc = event.key === 'Escape'
      const isOpened = this.classList.contains('visible')

      if (esc && isOpened) {
        this.close()
      }
    })
  }

  open() {
    const fontSizeHTML = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('font-size'))
    const activeElement = this.querySelector('.active')
    this.scrollTop = activeElement
      ? activeElement.offsetTop - fontSizeHTML * 1.5
      : 0
    this.classList.add('visible')
    document.body.classList.add('mn-sidenav-visible')
    document.body.classList.add('mn-backdrop-visible')
  }

  close() {
    document.body.classList.remove('mn-sidenav-visible')
    this.classList.remove('visible')
    document.body.classList.remove('mn-backdrop-visible')
  }

  toggle() {
    this.classList.toggle('visible')
      ? this.open()
      : this.close()
  }
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnSidenavCustomElement()

function MnSidenavCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-sidenav')) {
    window.customElements.define('mn-sidenav', __webpack_require__(36))
  }

  return window.customElements.get('mn-sidenav')
}


/***/ })
/******/ ]);
//# sourceMappingURL=vendor.js.map