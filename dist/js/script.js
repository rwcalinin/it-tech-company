/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function reqCall({reqBtnsClass, mWindow, bgModal, clModal, tWindow, bgThanks, sButton}) {
//   
    const reqButtons = document.querySelectorAll(reqBtnsClass),
          modalWindow = document.querySelector(mWindow),
          thanksWindow = document.querySelector(tWindow),
          modalBg = document.querySelector(bgModal),
          thanksBg = document.querySelector(bgThanks),
          modalClose = document.querySelector(clModal),
          submitButton = document.querySelectorAll(sButton);
    let closeTimeout;
//
// ! EVENTS FOR MODAL/THANKS TOGGLE -----------------
    //
    reqButtons.forEach((button) => {
        button.addEventListener('click', () => {
            toggleModalForm();
        });
    });
    //
    modalClose.addEventListener('click', () => {
        toggleModalForm();
    });
    //
    modalBg.addEventListener('click', () => {
        toggleModalForm();
    });
    thanksBg.addEventListener('click', () => {
        toggleThanksForm();
        clearTimeout(closeTimeout);
    });
    //
// ! <----------------------------------------------

// ! THANKS APP AND DIS ----------------------------
    submitButton.forEach((sBtn) => {
        sBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modalWindow.classList.contains('hide')) {
                toggleThanksForm();
                closeTimeout = setTimeout(() => {
                toggleThanksForm();
            }, 3000);
            } else {
                toggleModalForm();
                toggleThanksForm();
                closeTimeout = setTimeout(() => {
                    toggleThanksForm();
                }, 3000);
            }
        });
    });
// ! <----------------------------------------------
//
    function toggleModalForm() {
        modalWindow.classList.toggle('hide');
        modalBg.classList.toggle('hide');
    }
//
    function toggleThanksForm() {
        thanksWindow.classList.toggle('hide');
        thanksBg.classList.toggle('hide');
    }
//
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reqCall);

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");




document.addEventListener('DOMContentLoaded', () => {
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.default)({
        reqBtnsClass: '.getcall',
        mWindow: '.modal',
        tWindow: '.thanks',
        bgModal: '.modal-bg',
        bgThanks: '.thanks-bg',
        clModal: '.modal__close',
        sButton: '.callback__form-submit'
    });
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map