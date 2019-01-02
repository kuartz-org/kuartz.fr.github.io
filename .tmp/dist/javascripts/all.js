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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar portfolioImages = document.querySelectorAll('.portfolio-image');\n\nportfolioImages.forEach(function (img) {\n  var referenceCardContainer = img.parentElement.parentElement.parentElement;\n  var portfolioModalContainer = referenceCardContainer.querySelector('.portfolio-modal-container');\n  var closeBtn = portfolioModalContainer.querySelector('.close-btn');\n  var previousBtn = portfolioModalContainer.querySelector('.previous-btn');\n  var nextBtn = portfolioModalContainer.querySelector('.next-btn');\n\n  closeBtn.addEventListener('click', function (event) {\n    return hideActivePortfolioModal();\n  });\n  previousBtn.addEventListener('click', function (event) {\n    return previousPortfolioModal();\n  });\n  nextBtn.addEventListener('click', function (event) {\n    return nextPortfolioModal();\n  });\n\n  portfolioModalContainer.addEventListener('click', function (event) {\n    if (event.target === portfolioModalContainer) hideActivePortfolioModal();\n  });\n\n  img.addEventListener('click', function (event) {\n    return displayPortfolioModal(portfolioModalContainer);\n  });\n});\n\nfunction displayPortfolioModal(portfolioModalContainer) {\n  portfolioModalContainer.style.display = 'flex';\n  portfolioModalContainer.classList.add('is-active');\n}\n\nfunction hideActivePortfolioModal() {\n  var portfolioModalContainer = document.querySelector('.portfolio-modal-container.is-active');\n\n  portfolioModalContainer.style.display = 'none';\n  portfolioModalContainer.classList.remove('is-active');\n}\n\nfunction previousPortfolioModal() {\n  var portfolioModalContainers = document.querySelectorAll('.portfolio-modal-container');\n  var portfolioModalContainer = document.querySelector('.portfolio-modal-container.is-active');\n\n  if (portfolioModalContainer) {\n    var modalIndex = Array.from(portfolioModalContainers).indexOf(portfolioModalContainer);\n\n    if (modalIndex !== 0) {\n      hideActivePortfolioModal();\n      displayPortfolioModal(portfolioModalContainers[modalIndex - 1]);\n    }\n  }\n}\n\nfunction nextPortfolioModal() {\n  var portfolioModalContainers = document.querySelectorAll('.portfolio-modal-container');\n  var portfolioModalContainer = document.querySelector('.portfolio-modal-container.is-active');\n\n  if (portfolioModalContainer) {\n    var modalIndex = Array.from(portfolioModalContainers).indexOf(portfolioModalContainer);\n\n    if (modalIndex !== portfolioModalContainers.length - 1) {\n      hideActivePortfolioModal(portfolioModalContainer);\n      displayPortfolioModal(portfolioModalContainers[modalIndex + 1]);\n    }\n  }\n}\n\ndocument.addEventListener('keyup', function (event) {\n  var portfolioModalContainers = document.querySelectorAll('.portfolio-modal-container');\n  var portfolioModalContainer = document.querySelector('.portfolio-modal-container.is-active');\n\n  if (portfolioModalContainer) {\n    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {\n      nextPortfolioModal();\n    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {\n      previousPortfolioModal();\n    } else if (event.key === 'Escape') {\n      hideActivePortfolioModal();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zb3VyY2UvYXNzZXRzL2phdmFzY3JpcHRzL2FwcGxpY2F0aW9uLmpzP2U5YzgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcG9ydGZvbGlvSW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcnRmb2xpby1pbWFnZScpXG5cbnBvcnRmb2xpb0ltYWdlcy5mb3JFYWNoKGltZyA9PiB7XG4gIGNvbnN0IHJlZmVyZW5jZUNhcmRDb250YWluZXIgID0gaW1nLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gIGNvbnN0IHBvcnRmb2xpb01vZGFsQ29udGFpbmVyID0gcmVmZXJlbmNlQ2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLW1vZGFsLWNvbnRhaW5lcicpXG4gIGNvbnN0IGNsb3NlQnRuICAgICAgICAgICAgICAgID0gcG9ydGZvbGlvTW9kYWxDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpXG4gIGNvbnN0IHByZXZpb3VzQnRuICAgICAgICAgICAgID0gcG9ydGZvbGlvTW9kYWxDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByZXZpb3VzLWJ0bicpXG4gIGNvbnN0IG5leHRCdG4gICAgICAgICAgICAgICAgID0gcG9ydGZvbGlvTW9kYWxDb250YWluZXIucXVlcnlTZWxlY3RvcignLm5leHQtYnRuJylcblxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGhpZGVBY3RpdmVQb3J0Zm9saW9Nb2RhbCgpKVxuICBwcmV2aW91c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHByZXZpb3VzUG9ydGZvbGlvTW9kYWwoKSlcbiAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IG5leHRQb3J0Zm9saW9Nb2RhbCgpKVxuXG4gIHBvcnRmb2xpb01vZGFsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldCA9PT0gcG9ydGZvbGlvTW9kYWxDb250YWluZXIpIGhpZGVBY3RpdmVQb3J0Zm9saW9Nb2RhbCgpXG4gIH0pXG4gIFxuICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBkaXNwbGF5UG9ydGZvbGlvTW9kYWwocG9ydGZvbGlvTW9kYWxDb250YWluZXIpKVxufSlcblxuZnVuY3Rpb24gZGlzcGxheVBvcnRmb2xpb01vZGFsKHBvcnRmb2xpb01vZGFsQ29udGFpbmVyKXtcbiAgcG9ydGZvbGlvTW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICBwb3J0Zm9saW9Nb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKVxufVxuXG5mdW5jdGlvbiBoaWRlQWN0aXZlUG9ydGZvbGlvTW9kYWwoKXtcbiAgY29uc3QgcG9ydGZvbGlvTW9kYWxDb250YWluZXIgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1tb2RhbC1jb250YWluZXIuaXMtYWN0aXZlJylcblxuICBwb3J0Zm9saW9Nb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ICAgID0gJ25vbmUnXG4gIHBvcnRmb2xpb01vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXG59XG5cbmZ1bmN0aW9uIHByZXZpb3VzUG9ydGZvbGlvTW9kYWwoKXtcbiAgY29uc3QgcG9ydGZvbGlvTW9kYWxDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcnRmb2xpby1tb2RhbC1jb250YWluZXInKVxuICBjb25zdCBwb3J0Zm9saW9Nb2RhbENvbnRhaW5lciAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLW1vZGFsLWNvbnRhaW5lci5pcy1hY3RpdmUnKVxuICBcbiAgaWYocG9ydGZvbGlvTW9kYWxDb250YWluZXIpe1xuICAgIGNvbnN0IG1vZGFsSW5kZXggPSBBcnJheS5mcm9tKHBvcnRmb2xpb01vZGFsQ29udGFpbmVycykuaW5kZXhPZihwb3J0Zm9saW9Nb2RhbENvbnRhaW5lcilcbiAgICBcbiAgICBpZihtb2RhbEluZGV4ICE9PSAwKXtcbiAgICAgIGhpZGVBY3RpdmVQb3J0Zm9saW9Nb2RhbCgpXG4gICAgICBkaXNwbGF5UG9ydGZvbGlvTW9kYWwocG9ydGZvbGlvTW9kYWxDb250YWluZXJzW21vZGFsSW5kZXggLSAxXSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbmV4dFBvcnRmb2xpb01vZGFsKCl7XG4gIGNvbnN0IHBvcnRmb2xpb01vZGFsQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3J0Zm9saW8tbW9kYWwtY29udGFpbmVyJylcbiAgY29uc3QgcG9ydGZvbGlvTW9kYWxDb250YWluZXIgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1tb2RhbC1jb250YWluZXIuaXMtYWN0aXZlJylcblxuICBpZihwb3J0Zm9saW9Nb2RhbENvbnRhaW5lcil7XG4gICAgY29uc3QgbW9kYWxJbmRleCA9IEFycmF5LmZyb20ocG9ydGZvbGlvTW9kYWxDb250YWluZXJzKS5pbmRleE9mKHBvcnRmb2xpb01vZGFsQ29udGFpbmVyKVxuXG4gICAgaWYobW9kYWxJbmRleCAhPT0gcG9ydGZvbGlvTW9kYWxDb250YWluZXJzLmxlbmd0aCAtIDEpe1xuICAgICAgaGlkZUFjdGl2ZVBvcnRmb2xpb01vZGFsKHBvcnRmb2xpb01vZGFsQ29udGFpbmVyKVxuICAgICAgZGlzcGxheVBvcnRmb2xpb01vZGFsKHBvcnRmb2xpb01vZGFsQ29udGFpbmVyc1ttb2RhbEluZGV4ICsgMV0pXG4gICAgfVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICBjb25zdCBwb3J0Zm9saW9Nb2RhbENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9ydGZvbGlvLW1vZGFsLWNvbnRhaW5lcicpXG4gIGNvbnN0IHBvcnRmb2xpb01vZGFsQ29udGFpbmVyICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tbW9kYWwtY29udGFpbmVyLmlzLWFjdGl2ZScpXG4gIFxuICBpZihwb3J0Zm9saW9Nb2RhbENvbnRhaW5lcil7XG4gICAgaWYoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jyl7XG4gICAgICBuZXh0UG9ydGZvbGlvTW9kYWwoKVxuICAgIH0gZWxzZSBpZihldmVudC5rZXkgPT09ICdBcnJvd1VwJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnKXtcbiAgICAgIHByZXZpb3VzUG9ydGZvbGlvTW9kYWwoKVxuICAgIH0gZWxzZSBpZihldmVudC5rZXkgPT09ICdFc2NhcGUnKXtcbiAgICAgIGhpZGVBY3RpdmVQb3J0Zm9saW9Nb2RhbCgpXG4gICAgfVxuICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNvdXJjZS9hc3NldHMvamF2YXNjcmlwdHMvYXBwbGljYXRpb24uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);