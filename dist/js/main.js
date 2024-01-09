/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/google-photo/add-ons/add-ons.js":
/*!************************************************************!*\
  !*** ./src/blocks/modules/google-photo/add-ons/add-ons.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

if (window.location.href.includes('http://localhost:4000/pages/google-photo/Add-ons.html')) {
  var arrow = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.google-photo-header__arrow');
  arrow.on('click', function () {
    history.go(-1);
  });
}

/***/ }),

/***/ "./src/blocks/modules/google-photo/database/database.js":
/*!**************************************************************!*\
  !*** ./src/blocks/modules/google-photo/database/database.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

if (window.location.href.includes('http://localhost:4000/pages/google-photo/Database.html')) {
  var arrow = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.google-photo-database__header__arrow');
  arrow.on('click', function () {
    history.go(-1);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    var dropDownMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dropdown-menu');
    var innerDropDownMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.inner-dropdown-menu');
    dropDownMenu.hide();
    innerDropDownMenu.hide();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.dropdown-toggle', function () {
      var currentDropDownMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find(dropDownMenu);
      var currentArrow = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.arrow');
      var currentInnerDropDownMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.google-photo-database-list').find(innerDropDownMenu);
      var currentInnerArrow = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.google-photo-database-list').find('.inner .arrow');
      if (currentDropDownMenu.css('display') !== 'none') {
        currentInnerDropDownMenu.slideUp();
        currentInnerArrow.removeClass('arrow-up');
      }
      currentDropDownMenu.finish().slideToggle(400);
      currentArrow.toggleClass('arrow-up');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.inner-dropdown-toggle', function () {
      var currentInnerDropDownMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find('.inner-dropdown-menu');
      var currentArrow = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.arrow');
      currentInnerDropDownMenu.stop().slideToggle(400);
      currentArrow.toggleClass('arrow-up');
    });
  });
}

/***/ }),

/***/ "./src/blocks/modules/google-photo/main/main.js":
/*!******************************************************!*\
  !*** ./src/blocks/modules/google-photo/main/main.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

if (window.location.href.includes('http://localhost:4000/pages/Google%20Photo.html')) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.google-photo-element').on('click', function () {
      var projectName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.google-photo-element__text').text();
      window.location.href = "google-photo/".concat(projectName, ".html");
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.google-photo-header__arrow').on('click', function () {
      history.go(-1);
    });
  });
}

/***/ }),

/***/ "./src/blocks/modules/google-photo/pages/main-php/main-php.js":
/*!********************************************************************!*\
  !*** ./src/blocks/modules/google-photo/pages/main-php/main-php.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

if (window.location.href.includes('http://localhost:4000/pages/google-photo/main.php.html')) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
    var arrow = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.google-photo-pages__header__arrow');
    var dropdownToggle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dropdown-toggle');
    var dropdownMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dropdown-menu');
    arrow.on('click', function () {
      history.go(-1);
    });
    dropdownToggle.on('click', function () {
      dropdownMenu.slideToggle(400);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.arrow').toggleClass('arrow-up');
    });
  });
}

/***/ }),

/***/ "./src/blocks/modules/google-photo/pages/pages.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/google-photo/pages/pages.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

if (window.location.href.includes('http://localhost:4000/pages/google-photo/Pages.html')) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    var arrow = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.google-photo-pages__header__arrow');
    var back = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.google-photo-pages__item:first');
    var items = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.google-photo-pages__item').not(':first');
    arrow.on('click', function () {
      history.go(-1);
    });
    items.on('click', function (event) {
      var projectName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).closest('.google-photo-pages__item').find('.google-photo-pages__item__text').text();
      window.location.href = "".concat(projectName, ".html");
    });
    back.on('click', function () {
      history.go(-1);
    });
  });
}

/***/ }),

/***/ "./src/blocks/modules/google-photo/settings/settings.js":
/*!**************************************************************!*\
  !*** ./src/blocks/modules/google-photo/settings/settings.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

if (window.location.href.includes('http://localhost:4000/pages/google-photo/Settings.html')) {
  var wrapper = document.querySelector('.theme-wrapper');
  wrapper.addEventListener('click', function () {
    wrapper.classList.toggle('rotate');
  });
}

/***/ }),

/***/ "./src/blocks/modules/google-photo/statistic/statistic.js":
/*!****************************************************************!*\
  !*** ./src/blocks/modules/google-photo/statistic/statistic.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

if (window.location.href.includes('http://localhost:4000/pages/google-photo/Statistic.html')) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-section').on('click', '.main-section__block-project', function (event) {
      var projectName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).closest('.main-section__block-project').find('.main-section__project-name').text();
      window.location.href = "pages/".concat(projectName, ".html");
    });
    var arrow = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.google-photo-statistic__header__arrow');
    arrow.on('click', function () {
      history.go(-1);
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.dropdown-toggle', function () {
      var dropdownMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next('.dropdown-menu');
      dropdownMenu.slideToggle(400);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.arrow').toggleClass('arrow-up');
    });
  });
}

/***/ }),

/***/ "./src/blocks/modules/main/main.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/main/main.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-section__block-project').on('click', function (event) {
    var projectName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).closest('.main-section__block-project').find('.main-section__project-name').text();
    window.location.href = "pages/".concat(projectName, ".html");
  });
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/main/main */ "./src/blocks/modules/main/main.js");
/* harmony import */ var _modules_google_photo_main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/google-photo/main/main */ "./src/blocks/modules/google-photo/main/main.js");
/* harmony import */ var _modules_google_photo_statistic_statistic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/google-photo/statistic/statistic */ "./src/blocks/modules/google-photo/statistic/statistic.js");
/* harmony import */ var _modules_google_photo_pages_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/google-photo/pages/pages */ "./src/blocks/modules/google-photo/pages/pages.js");
/* harmony import */ var _modules_google_photo_pages_main_php_main_php__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/google-photo/pages/main-php/main-php */ "./src/blocks/modules/google-photo/pages/main-php/main-php.js");
/* harmony import */ var _modules_google_photo_database_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/google-photo/database/database */ "./src/blocks/modules/google-photo/database/database.js");
/* harmony import */ var _modules_google_photo_add_ons_add_ons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/google-photo/add-ons/add-ons */ "./src/blocks/modules/google-photo/add-ons/add-ons.js");
/* harmony import */ var _modules_google_photo_settings_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/google-photo/settings/settings */ "./src/blocks/modules/google-photo/settings/settings.js");









/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map