"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/digitalize-sua/Biblioteca",{

/***/ "./src/pages/digitalize-sua/Biblioteca.jsx":
/*!*************************************************!*\
  !*** ./src/pages/digitalize-sua/Biblioteca.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Input */ \"./src/components/Input.jsx\");\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        const { title , resume , category , numberOfPages , local , author , year , editor , numberOfCategory , numberOfAuthor  } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"T\\xedtulo\",\n                    onChange: this.handleChange,\n                    value: title\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: ()=>this.addAuthor(),\n                    children: \"Adicionar Autor\"\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                author.length > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: this.removeAuthor,\n                    children: \"Remover Autor\"\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                author.map((author)=>({})),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"Local\",\n                    onChange: this.handleChange,\n                    value: local\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"Editor\",\n                    onChange: this.handleChange,\n                    value: editor\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"Ano\",\n                    onChange: this.handleChange,\n                    value: year\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"P\\xe1ginas\",\n                    onChange: this.handleChange,\n                    value: numberOfPages\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"Categoria\",\n                    onChange: this.handleChange,\n                    value: category\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"Resumo\",\n                    onChange: this.handleChange,\n                    value: resume\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            title: \"\",\n            numberOfAuthor: 1,\n            author: [],\n            editor: \"\",\n            local: \"\",\n            year: 0,\n            numberOfPages: 0,\n            numberOfCategory: 1,\n            category: [],\n            resume: \"\"\n        };\n        //  componentDidMount() {\n        //  \n        //  }\n        //  shouldComponentUpdate(nextProps, nextState) {\n        //  \n        //    return true;\n        //  }\n        //  componentDidUpdate() {\n        //    const { boolDidUpdate } = this.state;\n        //    if (boolDidUpdate) {\n        //      this.setState({boolDidUpdate: false,}, this.func)\n        //    }\n        //  }\n        //  componentDidMount() {\n        //  \n        //  }\n        this.handleChange = (param)=>{\n            let { target  } = param;\n            const { state  } = this;\n            const { name , value  } = target;\n            // const result = target.type === 'checkbox' ? target.checked : value;\n            this.setState({\n                ...state,\n                [name]: value\n            });\n        };\n        this.addAuthor = ()=>{\n            this.setState((i)=>({\n                    author: [\n                        ...i.author,\n                        \"mais\"\n                    ]\n                }));\n        };\n        this.removeAuthor = ()=>{\n            const { author  } = this.state;\n            const lessOne = author.filter((aut, index)=>index < author.length - 1);\n            this.setState({\n                author: lessOne\n            });\n        };\n        this.onClickAuthor = ()=>{};\n    }\n}\nHome.propTypes = ({\n    nameState: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)\n}).isRequired;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGlnaXRhbGl6ZS1zdWEvQmlibGlvdGVjYS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlDO0FBQ047QUFDSTtBQUV2QyxNQUFNSSxhQUFhSCw0Q0FBU0E7SUFnRTFCSSxTQUFTO1FBQ1AsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFQyxjQUFhLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBRUMsaUJBQWdCLEVBQUVDLGVBQWMsRUFBRSxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUM1SCxxQkFDRSw4REFBQ0M7OzhCQUNDLDhEQUFDZCx5REFBS0E7b0JBQUNlLE1BQUs7b0JBQU9DLE1BQUs7b0JBQVFDLE9BQU07b0JBQVNDLFVBQVUsSUFBSSxDQUFDQyxZQUFZO29CQUFFQyxPQUFPakI7Ozs7Ozs4QkFFbkYsOERBQUNrQjtvQkFBT04sTUFBSztvQkFBU08sU0FBUyxJQUFNLElBQUksQ0FBQ0MsU0FBUzs4QkFBSTs7Ozs7O2dCQUN0RGYsT0FBT2dCLE1BQU0sR0FBRyxtQkFDakIsOERBQUNIO29CQUFPTixNQUFLO29CQUFTTyxTQUFTLElBQUksQ0FBQ0csWUFBWTs4QkFBRTs7Ozs7O2dCQUNqRGpCLE9BQU9rQixHQUFHLENBQUMsQ0FBQ2xCLFNBQVcsRUFFeEI7OEJBQ0EsOERBQUNSLHlEQUFLQTtvQkFBQ2UsTUFBSztvQkFBT0MsTUFBSztvQkFBUUMsT0FBTTtvQkFBUUMsVUFBVSxJQUFJLENBQUNDLFlBQVk7b0JBQUVDLE9BQU9iOzs7Ozs7OEJBQ2xGLDhEQUFDUCx5REFBS0E7b0JBQUNlLE1BQUs7b0JBQU9DLE1BQUs7b0JBQVFDLE9BQU07b0JBQVNDLFVBQVUsSUFBSSxDQUFDQyxZQUFZO29CQUFFQyxPQUFPVjs7Ozs7OzhCQUNuRiw4REFBQ1YseURBQUtBO29CQUFDZSxNQUFLO29CQUFPQyxNQUFLO29CQUFRQyxPQUFNO29CQUFNQyxVQUFVLElBQUksQ0FBQ0MsWUFBWTtvQkFBRUMsT0FBT1g7Ozs7Ozs4QkFDaEYsOERBQUNULHlEQUFLQTtvQkFBQ2UsTUFBSztvQkFBT0MsTUFBSztvQkFBUUMsT0FBTTtvQkFBVUMsVUFBVSxJQUFJLENBQUNDLFlBQVk7b0JBQUVDLE9BQU9kOzs7Ozs7OEJBQ3BGLDhEQUFDTix5REFBS0E7b0JBQUNlLE1BQUs7b0JBQU9DLE1BQUs7b0JBQVFDLE9BQU07b0JBQVlDLFVBQVUsSUFBSSxDQUFDQyxZQUFZO29CQUFFQyxPQUFPZjs7Ozs7OzhCQUN0Riw4REFBQ0wseURBQUtBO29CQUFDZSxNQUFLO29CQUFPQyxNQUFLO29CQUFRQyxPQUFNO29CQUFTQyxVQUFVLElBQUksQ0FBQ0MsWUFBWTtvQkFBRUMsT0FBT2hCOzs7Ozs7Ozs7Ozs7SUFHekY7OzthQWxGQVMsUUFBTztZQUNMVixPQUFPO1lBQ1BTLGdCQUFnQjtZQUNoQkosUUFBUSxFQUFFO1lBQ1ZFLFFBQVE7WUFDUkgsT0FBTztZQUNQRSxNQUFNO1lBQ05ILGVBQWU7WUFDZkssa0JBQWtCO1lBQ2xCTixVQUFVLEVBQUU7WUFDWkQsUUFBUTtRQUNWO1FBRUQseUJBQXlCO1FBQ3pCLElBQUk7UUFDSixLQUFLO1FBRUwsaURBQWlEO1FBQ2pELElBQUk7UUFDSixrQkFBa0I7UUFDbEIsS0FBSztRQUVMLDBCQUEwQjtRQUMxQiwyQ0FBMkM7UUFDM0MsMEJBQTBCO1FBQzFCLHlEQUF5RDtRQUN6RCxPQUFPO1FBQ1AsS0FBSztRQUVMLHlCQUF5QjtRQUN6QixJQUFJO1FBQ0osS0FBSzthQUVOZSxlQUFlLFNBQWdCO2dCQUFmLEVBQUVRLE9BQU0sRUFBRTtZQUN4QixNQUFNLEVBQUVkLE1BQUssRUFBRSxHQUFHLElBQUk7WUFDdEIsTUFBTSxFQUFFRyxLQUFJLEVBQUVJLE1BQUssRUFBRSxHQUFHTztZQUN4QixzRUFBc0U7WUFDdEUsSUFBSSxDQUFDQyxRQUFRLENBQUM7Z0JBQ1osR0FBR2YsS0FBSztnQkFDUixDQUFDRyxLQUFLLEVBQUVJO1lBQ1Y7UUFDRjthQUVBRyxZQUFZLElBQU07WUFDaEIsSUFBSSxDQUFDSyxRQUFRLENBQUMsQ0FBQ0MsSUFBTTtvQkFDbkJyQixRQUFROzJCQUFJcUIsRUFBRXJCLE1BQU07d0JBQUU7cUJBQU87Z0JBQy9CO1FBQ0Y7YUFFQWlCLGVBQWUsSUFBTTtZQUNuQixNQUFNLEVBQUNqQixPQUFNLEVBQUMsR0FBRyxJQUFJLENBQUNLLEtBQUs7WUFDM0IsTUFBTWlCLFVBQVV0QixPQUFPdUIsTUFBTSxDQUFDLENBQUNDLEtBQUtDLFFBQVVBLFFBQVF6QixPQUFPZ0IsTUFBTSxHQUFFO1lBQ3JFLElBQUksQ0FBQ0ksUUFBUSxDQUFDO2dCQUNacEIsUUFBUXNCO1lBQ1Y7UUFDRjthQUVBSSxnQkFBZ0IsSUFBTSxDQUV0Qjs7QUF3QkE7QUFFQWpDLEtBQUtrQyxTQUFTLEdBQUc7SUFDZkMsV0FBV3JDLDBEQUFnQjtBQUM3QixHQUFFdUMsVUFBVTtBQUVaLCtEQUFlckMsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGlnaXRhbGl6ZS1zdWEvQmlibGlvdGVjYS5qc3g/MWU3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvSW5wdXQnO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZT0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICBudW1iZXJPZkF1dGhvcjogMSxcbiAgICBhdXRob3I6IFtdLFxuICAgIGVkaXRvcjogJycsXG4gICAgbG9jYWw6ICcnLFxuICAgIHllYXI6IDAsXG4gICAgbnVtYmVyT2ZQYWdlczogMCxcbiAgICBudW1iZXJPZkNhdGVnb3J5OiAxLFxuICAgIGNhdGVnb3J5OiBbXSxcbiAgICByZXN1bWU6ICcnXG4gIH1cblxuIC8vICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAvLyAgXG4gLy8gIH1cblxuIC8vICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAvLyAgXG4gLy8gICAgcmV0dXJuIHRydWU7XG4gLy8gIH1cblxuIC8vICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gLy8gICAgY29uc3QgeyBib29sRGlkVXBkYXRlIH0gPSB0aGlzLnN0YXRlO1xuIC8vICAgIGlmIChib29sRGlkVXBkYXRlKSB7XG4gLy8gICAgICB0aGlzLnNldFN0YXRlKHtib29sRGlkVXBkYXRlOiBmYWxzZSx9LCB0aGlzLmZ1bmMpXG4gLy8gICAgfVxuIC8vICB9XG5cbiAvLyAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gLy8gIFxuIC8vICB9XG5cbmhhbmRsZUNoYW5nZSA9ICh7IHRhcmdldCB9KSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XG4gIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IHRhcmdldDtcbiAgLy8gY29uc3QgcmVzdWx0ID0gdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyB0YXJnZXQuY2hlY2tlZCA6IHZhbHVlO1xuICB0aGlzLnNldFN0YXRlKHtcbiAgICAuLi5zdGF0ZSxcbiAgICBbbmFtZV06IHZhbHVlLFxuICB9KTtcbn07XG5cbmFkZEF1dGhvciA9ICgpID0+IHtcbiAgdGhpcy5zZXRTdGF0ZSgoaSk9PiAoe1xuICAgIGF1dGhvcjogWy4uLmkuYXV0aG9yLCAnbWFpcyddXG4gIH0pKVxufTtcblxucmVtb3ZlQXV0aG9yID0gKCkgPT4ge1xuICBjb25zdCB7YXV0aG9yfSA9IHRoaXMuc3RhdGU7XG4gIGNvbnN0IGxlc3NPbmUgPSBhdXRob3IuZmlsdGVyKChhdXQsIGluZGV4KSA9PiBpbmRleCA8IGF1dGhvci5sZW5ndGggLTEpO1xuICB0aGlzLnNldFN0YXRlKHtcbiAgICBhdXRob3I6IGxlc3NPbmVcbiAgfSk7XG59XG5cbm9uQ2xpY2tBdXRob3IgPSAoKSA9PiB7XG5cbn07XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgcmVzdW1lLCBjYXRlZ29yeSwgbnVtYmVyT2ZQYWdlcywgbG9jYWwsIGF1dGhvciwgeWVhciwgZWRpdG9yLCBudW1iZXJPZkNhdGVnb3J5LCBudW1iZXJPZkF1dGhvciB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGxhYmVsPVwiVMOtdHVsb1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RpdGxlfSAvPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuYWRkQXV0aG9yKCl9PkFkaWNpb25hciBBdXRvcjwvYnV0dG9uPlxuICAgICAgICB7YXV0aG9yLmxlbmd0aCA+IDEgICYmXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlQXV0aG9yfT5SZW1vdmVyIEF1dG9yPC9idXR0b24+IH1cbiAgICAgICAge2F1dGhvci5tYXAoKGF1dGhvcik9PiAoe1xuXG4gICAgICAgIH0pKX1cbiAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgbGFiZWw9XCJMb2NhbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e2xvY2FsfSAvPlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBsYWJlbD1cIkVkaXRvclwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e2VkaXRvcn0gLz5cbiAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgbGFiZWw9XCJBbm9cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt5ZWFyfSAvPlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBsYWJlbD1cIlDDoWdpbmFzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17bnVtYmVyT2ZQYWdlc30gLz5cbiAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgbGFiZWw9XCJDYXRlZ29yaWFcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtjYXRlZ29yeX0gLz5cbiAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgbGFiZWw9XCJSZXN1bW9cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtyZXN1bWV9IC8+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5Ib21lLnByb3BUeXBlcyA9IHtcbiAgbmFtZVN0YXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxufS5pc1JlcXVpcmVkO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiSW5wdXQiLCJIb21lIiwicmVuZGVyIiwidGl0bGUiLCJyZXN1bWUiLCJjYXRlZ29yeSIsIm51bWJlck9mUGFnZXMiLCJsb2NhbCIsImF1dGhvciIsInllYXIiLCJlZGl0b3IiLCJudW1iZXJPZkNhdGVnb3J5IiwibnVtYmVyT2ZBdXRob3IiLCJzdGF0ZSIsImZvcm0iLCJ0eXBlIiwibmFtZSIsImxhYmVsIiwib25DaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhZGRBdXRob3IiLCJsZW5ndGgiLCJyZW1vdmVBdXRob3IiLCJtYXAiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsImkiLCJsZXNzT25lIiwiZmlsdGVyIiwiYXV0IiwiaW5kZXgiLCJvbkNsaWNrQXV0aG9yIiwicHJvcFR5cGVzIiwibmFtZVN0YXRlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/digitalize-sua/Biblioteca.jsx\n"));

/***/ })

});