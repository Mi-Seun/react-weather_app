"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainCard */ \"./components/MainCard.js\");\n/* harmony import */ var _components_ContentBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContentBox */ \"./components/ContentBox.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_DateAndTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DateAndTime */ \"./components/DateAndTime.js\");\n/* harmony import */ var _components_MetricsBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MetricsBox */ \"./components/MetricsBox.js\");\n/* harmony import */ var _components_UnitSwitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UnitSwitch */ \"./components/UnitSwitch.js\");\n/* harmony import */ var _components_LoadingScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/LoadingScreen */ \"./components/LoadingScreen.js\");\n/* harmony import */ var _components_ErrorScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ErrorScreen */ \"./components/ErrorScreen.js\");\n/* harmony import */ var _public_cityConfig_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/cityConfig.json */ \"./public/cityConfig.json\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { Search } from \"../components/Search\";\n\n\n\n\n\n\nconst App = ()=>{\n    _s();\n    const [cityInput, setCityInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Riga\");\n    const [triggerFetch, setTriggerFetch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [unitSystem, setUnitSystem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"metric\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"App.useEffect\": ()=>{\n            const getData = {\n                \"App.useEffect.getData\": async ()=>{\n                    const { latitude, longitude } = _public_cityConfig_json__WEBPACK_IMPORTED_MODULE_10__; // cityConfig에서 좌표 정보 가져오기\n                    const res = await fetch(\"https://api.open-meteo.com/v1/forecast?latitude=\".concat(latitude, \"&longitude=\").concat(longitude, \"&current_weather=true&timezone=Europe/Paris\"));\n                    const data = await res.json();\n                    // Open Meteo API에서 받은 데이터 처리\n                    const currentWeather = data.current_weather;\n                    setWeatherData({\n                        temperature: currentWeather.temperature,\n                        description: currentWeather.weathercode,\n                        windSpeed: currentWeather.windspeed\n                    });\n                }\n            }[\"App.useEffect.getData\"];\n            getData();\n        }\n    }[\"App.useEffect\"], [\n        triggerFetch\n    ]);\n    const changeSystem = ()=>unitSystem === \"metric\" ? setUnitSystem(\"imperial\") : setUnitSystem(\"metric\");\n    return weatherData && !weatherData.message ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainCard__WEBPACK_IMPORTED_MODULE_2__.MainCard, {\n                city: weatherData.name,\n                country: weatherData.sys.country,\n                description: weatherData.description,\n                iconName: weatherData.icon,\n                unitSystem: unitSystem,\n                weatherData: weatherData\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mi-Sun\\\\Desktop\\\\weather-app-test\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentBox__WEBPACK_IMPORTED_MODULE_3__.ContentBox, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DateAndTime__WEBPACK_IMPORTED_MODULE_5__.DateAndTime, {\n                            weatherData: weatherData,\n                            unitSystem: unitSystem\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mi-Sun\\\\Desktop\\\\weather-app-test\\\\pages\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mi-Sun\\\\Desktop\\\\weather-app-test\\\\pages\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MetricsBox__WEBPACK_IMPORTED_MODULE_6__.MetricsBox, {\n                        weatherData: weatherData,\n                        unitSystem: unitSystem\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mi-Sun\\\\Desktop\\\\weather-app-test\\\\pages\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UnitSwitch__WEBPACK_IMPORTED_MODULE_7__.UnitSwitch, {\n                        onClick: changeSystem,\n                        unitSystem: unitSystem\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mi-Sun\\\\Desktop\\\\weather-app-test\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mi-Sun\\\\Desktop\\\\weather-app-test\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mi-Sun\\\\Desktop\\\\weather-app-test\\\\pages\\\\index.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined) : weatherData && weatherData.message ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorScreen__WEBPACK_IMPORTED_MODULE_9__.ErrorScreen, {\n        errorMessage: \"City not found, try again!\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Mi-Sun\\\\Desktop\\\\weather-app-test\\\\pages\\\\index.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingScreen__WEBPACK_IMPORTED_MODULE_8__.LoadingScreen, {\n        loadingMessage: \"Loading data...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Mi-Sun\\\\Desktop\\\\weather-app-test\\\\pages\\\\index.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"lRBWcT+vyijQMY1hsgey8rRxv4w=\");\n_c = App;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBRU07QUFDSTtBQUNSO0FBQ1U7QUFDeEQsaURBQWlEO0FBQ0s7QUFDQTtBQUNNO0FBQ0o7QUFFTDtBQUVKO0FBRXhDLE1BQU1ZLE1BQU07O0lBQ2pCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNlLGNBQWNDLGdCQUFnQixHQUFHaEIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDaUIsYUFBYUMsZUFBZSxHQUFHbEIsK0NBQVFBO0lBQzlDLE1BQU0sQ0FBQ21CLFlBQVlDLGNBQWMsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRTdDQyxnREFBU0E7eUJBQUM7WUFDUixNQUFNb0I7eUNBQVU7b0JBQ2QsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRSxHQUFHYixxREFBVUEsRUFBRSwwQkFBMEI7b0JBQ3RFLE1BQU1jLE1BQU0sTUFBTUMsTUFBTSxtREFBeUVGLE9BQXRCRCxVQUFTLGVBQXVCLE9BQVZDLFdBQVU7b0JBQzNHLE1BQU1HLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtvQkFFM0IsNkJBQTZCO29CQUM3QixNQUFNQyxpQkFBaUJGLEtBQUtHLGVBQWU7b0JBQzNDWCxlQUFlO3dCQUNiWSxhQUFhRixlQUFlRSxXQUFXO3dCQUN2Q0MsYUFBYUgsZUFBZUksV0FBVzt3QkFDdkNDLFdBQVdMLGVBQWVNLFNBQVM7b0JBRXJDO2dCQUNGOztZQUNBYjtRQUNGO3dCQUFHO1FBQUNOO0tBQWE7SUFFakIsTUFBTW9CLGVBQWUsSUFDbkJoQixlQUFlLFdBQ1hDLGNBQWMsY0FDZEEsY0FBYztJQUVwQixPQUFPSCxlQUFlLENBQUNBLFlBQVltQixPQUFPLGlCQUN4Qyw4REFBQ0M7UUFBSUMsV0FBVzNCLHlFQUFjOzswQkFDNUIsOERBQUNULDBEQUFRQTtnQkFDUHNDLE1BQU12QixZQUFZd0IsSUFBSTtnQkFDdEJDLFNBQVN6QixZQUFZMEIsR0FBRyxDQUFDRCxPQUFPO2dCQUNoQ1gsYUFBYWQsWUFBWWMsV0FBVztnQkFDcENhLFVBQVUzQixZQUFZNEIsSUFBSTtnQkFDMUIxQixZQUFZQTtnQkFDWkYsYUFBYUE7Ozs7OzswQkFFZiw4REFBQ2QsOERBQVVBOztrQ0FDVCw4REFBQ0Msc0RBQU1BO2tDQUNMLDRFQUFDQyxnRUFBV0E7NEJBQUNZLGFBQWFBOzRCQUFhRSxZQUFZQTs7Ozs7Ozs7Ozs7a0NBRXJELDhEQUFDYiw4REFBVUE7d0JBQUNXLGFBQWFBO3dCQUFhRSxZQUFZQTs7Ozs7O2tDQUNsRCw4REFBQ1osOERBQVVBO3dCQUFDdUMsU0FBU1g7d0JBQWNoQixZQUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBR2pERixlQUFlQSxZQUFZbUIsT0FBTyxpQkFDcEMsOERBQUMzQixnRUFBV0E7UUFBQ3NDLGNBQWE7Ozs7O2tDQUUxQiw4REFBQ3ZDLG9FQUFhQTtRQUFDd0MsZ0JBQWU7Ozs7OztBQUVsQyxFQUFFO0dBcERXcEM7S0FBQUE7QUFzRGIsaUVBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWktU3VuXFxEZXNrdG9wXFx3ZWF0aGVyLWFwcC10ZXN0XFxwYWdlc1xcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgTWFpbkNhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluQ2FyZFwiO1xyXG5pbXBvcnQgeyBDb250ZW50Qm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGVudEJveFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IHsgRGF0ZUFuZFRpbWUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXRlQW5kVGltZVwiO1xyXG4vLyBpbXBvcnQgeyBTZWFyY2ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hcIjtcclxuaW1wb3J0IHsgTWV0cmljc0JveCB9IGZyb20gXCIuLi9jb21wb25lbnRzL01ldHJpY3NCb3hcIjtcclxuaW1wb3J0IHsgVW5pdFN3aXRjaCB9IGZyb20gXCIuLi9jb21wb25lbnRzL1VuaXRTd2l0Y2hcIjtcclxuaW1wb3J0IHsgTG9hZGluZ1NjcmVlbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmdTY3JlZW5cIjtcclxuaW1wb3J0IHsgRXJyb3JTY3JlZW4gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvclNjcmVlblwiO1xyXG5cclxuaW1wb3J0IGNpdHlDb25maWcgZnJvbSAnLi4vcHVibGljL2NpdHlDb25maWcuanNvbic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjaXR5SW5wdXQsIHNldENpdHlJbnB1dF0gPSB1c2VTdGF0ZShcIlJpZ2FcIik7XHJcbiAgY29uc3QgW3RyaWdnZXJGZXRjaCwgc2V0VHJpZ2dlckZldGNoXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt3ZWF0aGVyRGF0YSwgc2V0V2VhdGhlckRhdGFdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdW5pdFN5c3RlbSwgc2V0VW5pdFN5c3RlbV0gPSB1c2VTdGF0ZShcIm1ldHJpY1wiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gY2l0eUNvbmZpZzsgLy8gY2l0eUNvbmZpZ+yXkOyEnCDsooztkZwg7KCV67O0IOqwgOyguOyYpOq4sFxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3Blbi1tZXRlby5jb20vdjEvZm9yZWNhc3Q/bGF0aXR1ZGU9JHtsYXRpdHVkZX0mbG9uZ2l0dWRlPSR7bG9uZ2l0dWRlfSZjdXJyZW50X3dlYXRoZXI9dHJ1ZSZ0aW1lem9uZT1FdXJvcGUvUGFyaXNgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBPcGVuIE1ldGVvIEFQSeyXkOyEnCDrsJvsnYAg642w7J207YSwIOyymOumrFxyXG4gICAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRhdGEuY3VycmVudF93ZWF0aGVyO1xyXG4gICAgICBzZXRXZWF0aGVyRGF0YSh7XHJcbiAgICAgICAgdGVtcGVyYXR1cmU6IGN1cnJlbnRXZWF0aGVyLnRlbXBlcmF0dXJlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBjdXJyZW50V2VhdGhlci53ZWF0aGVyY29kZSxcclxuICAgICAgICB3aW5kU3BlZWQ6IGN1cnJlbnRXZWF0aGVyLndpbmRzcGVlZCxcclxuICAgICAgICAvLyDtlYTsmpTtlZwg642w7J207YSwIOy2lOqwgFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBnZXREYXRhKCk7XHJcbiAgfSwgW3RyaWdnZXJGZXRjaF0pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VTeXN0ZW0gPSAoKSA9PlxyXG4gICAgdW5pdFN5c3RlbSA9PT0gXCJtZXRyaWNcIlxyXG4gICAgICA/IHNldFVuaXRTeXN0ZW0oXCJpbXBlcmlhbFwiKVxyXG4gICAgICA6IHNldFVuaXRTeXN0ZW0oXCJtZXRyaWNcIik7XHJcblxyXG4gIHJldHVybiB3ZWF0aGVyRGF0YSAmJiAhd2VhdGhlckRhdGEubWVzc2FnZSA/IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgIDxNYWluQ2FyZFxyXG4gICAgICAgIGNpdHk9e3dlYXRoZXJEYXRhLm5hbWV9XHJcbiAgICAgICAgY291bnRyeT17d2VhdGhlckRhdGEuc3lzLmNvdW50cnl9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e3dlYXRoZXJEYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIGljb25OYW1lPXt3ZWF0aGVyRGF0YS5pY29ufVxyXG4gICAgICAgIHVuaXRTeXN0ZW09e3VuaXRTeXN0ZW19XHJcbiAgICAgICAgd2VhdGhlckRhdGE9e3dlYXRoZXJEYXRhfVxyXG4gICAgICAvPlxyXG4gICAgICA8Q29udGVudEJveD5cclxuICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgPERhdGVBbmRUaW1lIHdlYXRoZXJEYXRhPXt3ZWF0aGVyRGF0YX0gdW5pdFN5c3RlbT17dW5pdFN5c3RlbX0gLz5cclxuICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICA8TWV0cmljc0JveCB3ZWF0aGVyRGF0YT17d2VhdGhlckRhdGF9IHVuaXRTeXN0ZW09e3VuaXRTeXN0ZW19IC8+XHJcbiAgICAgICAgPFVuaXRTd2l0Y2ggb25DbGljaz17Y2hhbmdlU3lzdGVtfSB1bml0U3lzdGVtPXt1bml0U3lzdGVtfSAvPlxyXG4gICAgICA8L0NvbnRlbnRCb3g+XHJcbiAgICA8L2Rpdj5cclxuICApIDogd2VhdGhlckRhdGEgJiYgd2VhdGhlckRhdGEubWVzc2FnZSA/IChcclxuICAgIDxFcnJvclNjcmVlbiBlcnJvck1lc3NhZ2U9XCJDaXR5IG5vdCBmb3VuZCwgdHJ5IGFnYWluIVwiIC8+XHJcbiAgKSA6IChcclxuICAgIDxMb2FkaW5nU2NyZWVuIGxvYWRpbmdNZXNzYWdlPVwiTG9hZGluZyBkYXRhLi4uXCIgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNYWluQ2FyZCIsIkNvbnRlbnRCb3giLCJIZWFkZXIiLCJEYXRlQW5kVGltZSIsIk1ldHJpY3NCb3giLCJVbml0U3dpdGNoIiwiTG9hZGluZ1NjcmVlbiIsIkVycm9yU2NyZWVuIiwiY2l0eUNvbmZpZyIsInN0eWxlcyIsIkFwcCIsImNpdHlJbnB1dCIsInNldENpdHlJbnB1dCIsInRyaWdnZXJGZXRjaCIsInNldFRyaWdnZXJGZXRjaCIsIndlYXRoZXJEYXRhIiwic2V0V2VhdGhlckRhdGEiLCJ1bml0U3lzdGVtIiwic2V0VW5pdFN5c3RlbSIsImdldERhdGEiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjdXJyZW50V2VhdGhlciIsImN1cnJlbnRfd2VhdGhlciIsInRlbXBlcmF0dXJlIiwiZGVzY3JpcHRpb24iLCJ3ZWF0aGVyY29kZSIsIndpbmRTcGVlZCIsIndpbmRzcGVlZCIsImNoYW5nZVN5c3RlbSIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwiY2l0eSIsIm5hbWUiLCJjb3VudHJ5Iiwic3lzIiwiaWNvbk5hbWUiLCJpY29uIiwib25DbGljayIsImVycm9yTWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});