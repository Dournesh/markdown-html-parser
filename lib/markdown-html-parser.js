(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["markdown-html-parser"] = factory();
	else
		root["markdown-html-parser"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generate_parsed_string__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (function (string, reg, className, meta) {
	var type = meta.type;

	switch (type) {
		case 'link':
			return string.replace(reg, function () {
				var title = arguments.length <= 1 ? undefined : arguments[1];
				var url = arguments.length <= 2 ? undefined : arguments[2];
				var alt = arguments.length <= 3 ? undefined : arguments[3];
				return Object(__WEBPACK_IMPORTED_MODULE_0__generate_parsed_string__["a" /* default */])(className, title, { type: type, title: title, url: url, alt: alt });
			});
		case 'image':
			return string.replace(reg, function () {
				var title = arguments.length <= 1 ? undefined : arguments[1];
				var url = arguments.length <= 2 ? undefined : arguments[2];
				var alt = arguments.length <= 3 ? undefined : arguments[3];
				return Object(__WEBPACK_IMPORTED_MODULE_0__generate_parsed_string__["a" /* default */])(className, title, { type: type, title: title, url: url, alt: alt });
			});
		case 'list':
			return string.replace(reg, function () {
				var val1 = arguments.length <= 1 ? undefined : arguments[1];
				var val2 = arguments.length <= 2 ? undefined : arguments[2];
				return Object(__WEBPACK_IMPORTED_MODULE_0__generate_parsed_string__["a" /* default */])(className, val1 + ' ' + val2, { type: type });
			});
		default:
			return string.replace(reg, function () {
				var value = arguments.length <= 1 ? undefined : arguments[1];
				return Object(__WEBPACK_IMPORTED_MODULE_0__generate_parsed_string__["a" /* default */])(className, value, { type: type });
			});
	}
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fonts_check_font__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_replace_string__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regulars__ = __webpack_require__(4);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





/* harmony default export */ __webpack_exports__["default"] = (function (string, options) {
	var newString = string;
	options.forEach(function (option) {
		var title = option.title,
		    included = option.included;

		if (included === true) {
			switch (title) {
				case 'headers':
					{
						var level = option.level,
						    levels = option.levels;

						if ((typeof level === 'undefined' ? 'undefined' : _typeof(level)) === 'object' && !Array.isArray(level)) {
							var _option$level = option.level,
							    number = _option$level.number,
							    className = _option$level.className;

							var reg = new RegExp('^#{' + number + '}\\s(.+)', 'gim');
							newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, reg, className, { type: title });
						}
						if ((typeof levels === 'undefined' ? 'undefined' : _typeof(levels)) === 'object' && Array.isArray(levels)) {
							levels.forEach(function (level) {
								var number = level.number,
								    className = level.className;

								var reg = new RegExp('^#{' + number + '}\\s(.+)', 'gim');
								newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, reg, className, { type: title });
							});
						}
						if (levels === 'all') {
							var classNames = option.classNames;

							if ((typeof classNames === 'undefined' ? 'undefined' : _typeof(classNames)) === 'object' && !Array.isArray(classNames)) {
								Object.keys(classNames).forEach(function (key, index) {
									var newIndex = index + 1;
									var reg = new RegExp('^#{' + newIndex + '}\\s(.+)', 'gim');
									newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, reg, classNames[key], { type: title });
								});
							}
						}
						break;
					}
				case 'font':
					{
						var font = option.font,
						    fonts = option.fonts;

						if ((typeof font === 'undefined' ? 'undefined' : _typeof(font)) === 'object' && !Array.isArray(font)) {
							newString = Object(__WEBPACK_IMPORTED_MODULE_0__fonts_check_font__["a" /* default */])(font, newString);
						}
						if ((typeof fonts === 'undefined' ? 'undefined' : _typeof(fonts)) === 'object' && Array.isArray(fonts)) {
							fonts.forEach(function (font) {
								newString = Object(__WEBPACK_IMPORTED_MODULE_0__fonts_check_font__["a" /* default */])(font, newString);
							});
						}
						if (fonts === 'all') {
							var _classNames = option.classNames;

							Object.keys(_classNames).forEach(function (key, index) {
								var newIndex = index + 1;
								if (key === 'bold') {
									__WEBPACK_IMPORTED_MODULE_2__regulars__["a" /* default */].bold.forEach(function (reg) {
										newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, reg, _classNames[key], { type: title });
									});
								}
								if (key === 'inclined') {
									__WEBPACK_IMPORTED_MODULE_2__regulars__["a" /* default */].inclined.forEach(function (reg) {
										newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, reg, _classNames[key], { type: title });
									});
								}
								if (key === 'strike') {
									newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, __WEBPACK_IMPORTED_MODULE_2__regulars__["a" /* default */].strike, _classNames[key], { type: title });
								}
							});
						}
						break;
					}
				case 'line-break':
					{
						var _className = option.className,
						    allowed = option.allowed;

						if (allowed === 'all') {
							var _reg = new RegExp('^(\\*{3,}|-{3,})$', 'gim');
							newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, _reg, _className, { type: title });
						} else if (typeof allowed === 'string') {
							var _reg2 = new RegExp('^(\\' + allowed + '{3,})$', 'gim');
							newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, _reg2, _className, { type: title });
						}
						break;
					}
				case 'li':
					{
						var _className2 = option.className,
						    _allowed = option.allowed;

						if (_allowed === 'all') {
							var _reg3 = new RegExp('^[-+*]\\s(.+)', 'gim');
							newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, _reg3, _className2, { type: title });
						} else if (typeof _allowed === 'string') {
							var _reg4 = new RegExp('^\\' + _allowed + '\\s([^*].+)', 'gim');
							newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, _reg4, _className2, { type: title });
						}
						break;
					}
				case 'list':
					{
						var _className3 = option.className;

						var _reg5 = new RegExp('^(\\d*\\.)\\s?(.+)', 'gim');
						newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, _reg5, _className3, { type: title });
						break;
					}
				case 'link':
					{
						var _className4 = option.className;

						var _reg6 = new RegExp('\\[(.+)\\]\\((.+)\\s["\'](.+)["\']\\)', 'gim');
						newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, _reg6, _className4, { type: title });
						break;
					}
				case 'image':
					{
						var _className5 = option.className;

						var _reg7 = new RegExp('!\\[(.+)\\]\\((.+)\\)', 'gim');
						newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, _reg7, _className5, { type: title });
						break;
					}
				case 'code':
					{
						var _className6 = option.className;

						var _reg8 = new RegExp('`{1,2}\\s?<(.+)>\\s?`{1,2}', 'gim');
						newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, _reg8, _className6, { type: title });
						break;
					}
				case 'blockquote':
					{
						var _className7 = option.className;

						var _reg9 = new RegExp('^>\\s(.+)', 'gim');
						newString = Object(__WEBPACK_IMPORTED_MODULE_1__utils_replace_string__["a" /* default */])(newString, _reg9, _className7, { type: title });
						break;
					}
			}
		}
	});
	return newString;
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_replace_string__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (font, newString) {
	var title = font.title,
	    included = font.included,
	    allowed = font.allowed,
	    className = font.className;

	if (title === 'bold' && included === true) {
		if (typeof allowed === 'string' && allowed !== 'all') {
			var screen = '\\' + allowed + '\\' + allowed;
			var reg = new RegExp(screen + '\\s?([^*].+?)\\s?' + screen, 'gim');
			newString = Object(__WEBPACK_IMPORTED_MODULE_0__utils_replace_string__["a" /* default */])(newString, reg, className);
		}
		if (allowed === 'all') {
			var reg1 = new RegExp('\\*\\*\\s?([^*].+?)\\s?\\*\\*', 'gim');
			var reg2 = new RegExp('__\\s?([^*].+?)\\s?__', 'gim');
			newString = Object(__WEBPACK_IMPORTED_MODULE_0__utils_replace_string__["a" /* default */])(newString, reg1, className);
			newString = Object(__WEBPACK_IMPORTED_MODULE_0__utils_replace_string__["a" /* default */])(newString, reg2, className);
		}
	}
	if (title === 'inclined' && included === true) {
		if (typeof allowed === 'string' && allowed !== 'all') {
			var _screen = '\\' + allowed;
			var _reg = new RegExp(_screen + '\\s?([^*].+?)\\s?' + _screen, 'gim');
			newString = Object(__WEBPACK_IMPORTED_MODULE_0__utils_replace_string__["a" /* default */])(newString, _reg, className);
		}
		if (allowed === 'all') {
			var _reg2 = new RegExp('\\*\\s?([^*].+?)\\s?\\*', 'gim');
			var _reg3 = new RegExp('_\\s?([^*].+?)\\s?_', 'gim');
			newString = Object(__WEBPACK_IMPORTED_MODULE_0__utils_replace_string__["a" /* default */])(newString, _reg2, className);
			newString = Object(__WEBPACK_IMPORTED_MODULE_0__utils_replace_string__["a" /* default */])(newString, _reg3, className);
		}
	}
	if (title === 'strike' && included === true) {
		var _reg4 = new RegExp('~~\\s?(.+?)\\s?~~', 'gim');
		newString = Object(__WEBPACK_IMPORTED_MODULE_0__utils_replace_string__["a" /* default */])(newString, _reg4, className);
	}
	return newString;
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (className, value, meta) {
	var type = meta.type;

	switch (type) {
		case 'line-break':
			return '<div class="' + className + '"/>';
		case 'link':
			{
				var title = meta.title,
				    url = meta.url,
				    alt = meta.alt;

				return '<a class="' + className + '" href="' + url + '" title="' + alt + '">' + title + '</a>';
			}
		case 'image':
			{
				var _url = meta.url,
				    _alt = meta.alt;

				return '<img class="' + className + '" src="' + _url + '" title="' + _alt + '" />';
			}
		case 'code':
			return '<span class="' + className + '">&lt;' + value + '&gt;</span>';
		case 'list':
			return '<span class="' + className + '">' + value + '</span>';
		default:
			return '<span class="' + className + '">' + value + '</span>';
	}
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	bold: [/\*\*\s?([^*].+?)\s?\*\*/gim, /__\s?([^*].+?)\s?__/gim],
	inclined: [/\*\s?([^*].+?)\s?\*/gim, /_\s?([^_].+?)\s?_/gim],
	strike: /~~\s?(.+?)\s?~~/gim
});

/***/ })
/******/ ]);
});