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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Input */ \"./src/components/Input.jsx\");\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        const { title , resume , category , numberOfPages , local , author , year , editor , numberOfCategory , numberOfAuthor  } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"T\\xedtulo\",\n                    onChange: this.handleChange,\n                    value: title\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: ()=>this.addAuthor(),\n                    children: \"Adicionar Autor\"\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                numberOfAuthor > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: this.removeAuthor,\n                    children: \"Remover Autor\"\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"Local\",\n                    onChange: this.handleChange,\n                    value: local\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"Editor\",\n                    onChange: this.handleChange,\n                    value: editor\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"Ano\",\n                    onChange: this.handleChange,\n                    value: year\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"P\\xe1ginas\",\n                    onChange: this.handleChange,\n                    value: numberOfPages\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"Categoria\",\n                    onChange: this.handleChange,\n                    value: category\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"Resumo\",\n                    onChange: this.handleChange,\n                    value: resume\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            title: \"\",\n            numberOfAuthor: 1,\n            author: [],\n            editor: \"\",\n            local: \"\",\n            year: 0,\n            numberOfPages: 0,\n            numberOfCategory: 1,\n            category: [],\n            resume: \"\"\n        };\n        //  componentDidMount() {\n        //  \n        //  }\n        //  shouldComponentUpdate(nextProps, nextState) {\n        //  \n        //    return true;\n        //  }\n        //  componentDidUpdate() {\n        //    const { boolDidUpdate } = this.state;\n        //    if (boolDidUpdate) {\n        //      this.setState({boolDidUpdate: false,}, this.func)\n        //    }\n        //  }\n        //  componentDidMount() {\n        //  \n        //  }\n        this.handleChange = (param)=>{\n            let { target  } = param;\n            const { state  } = this;\n            const { name , value  } = target;\n            // const result = target.type === 'checkbox' ? target.checked : value;\n            this.setState({\n                ...state,\n                [name]: value\n            });\n        };\n        this.addAuthor = ()=>{\n            this.setState((i)=>({\n                    author: [\n                        ...i.author,\n                        \"mais\"\n                    ]\n                }));\n        };\n        this.removeAuthor = ()=>{\n            const { author  } = this.state;\n            const lessOne = author.map;\n            this.setState((i)=>({\n                    author: [\n                        ...i.author,\n                        \"mais\"\n                    ]\n                }));\n        };\n        this.onClickAuthor = ()=>{};\n    }\n}\nHome.propTypes = ({\n    nameState: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)\n}).isRequired;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGlnaXRhbGl6ZS1zdWEvQmlibGlvdGVjYS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlDO0FBQ047QUFDSTtBQUV2QyxNQUFNSSxhQUFhSCw0Q0FBU0E7SUFnRTFCSSxTQUFTO1FBQ1AsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFQyxjQUFhLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBRUMsaUJBQWdCLEVBQUVDLGVBQWMsRUFBRSxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUM1SCxxQkFDRSw4REFBQ0M7OzhCQUNDLDhEQUFDZCx5REFBS0E7b0JBQUNlLE1BQUs7b0JBQU9DLE1BQUs7b0JBQVFDLE9BQU07b0JBQVNDLFVBQVUsSUFBSSxDQUFDQyxZQUFZO29CQUFFQyxPQUFPakI7Ozs7Ozs4QkFFbkYsOERBQUNrQjtvQkFBT04sTUFBSztvQkFBU08sU0FBUyxJQUFNLElBQUksQ0FBQ0MsU0FBUzs4QkFBSTs7Ozs7O2dCQUN0RFgsaUJBQWlCLG1CQUNsQiw4REFBQ1M7b0JBQU9OLE1BQUs7b0JBQVNPLFNBQVMsSUFBSSxDQUFDRSxZQUFZOzhCQUFFOzs7Ozs7OEJBRWxELDhEQUFDeEIseURBQUtBO29CQUFDZSxNQUFLO29CQUFPQyxNQUFLO29CQUFRQyxPQUFNO29CQUFRQyxVQUFVLElBQUksQ0FBQ0MsWUFBWTtvQkFBRUMsT0FBT2I7Ozs7Ozs4QkFDbEYsOERBQUNQLHlEQUFLQTtvQkFBQ2UsTUFBSztvQkFBT0MsTUFBSztvQkFBUUMsT0FBTTtvQkFBU0MsVUFBVSxJQUFJLENBQUNDLFlBQVk7b0JBQUVDLE9BQU9WOzs7Ozs7OEJBQ25GLDhEQUFDVix5REFBS0E7b0JBQUNlLE1BQUs7b0JBQU9DLE1BQUs7b0JBQVFDLE9BQU07b0JBQU1DLFVBQVUsSUFBSSxDQUFDQyxZQUFZO29CQUFFQyxPQUFPWDs7Ozs7OzhCQUNoRiw4REFBQ1QseURBQUtBO29CQUFDZSxNQUFLO29CQUFPQyxNQUFLO29CQUFRQyxPQUFNO29CQUFVQyxVQUFVLElBQUksQ0FBQ0MsWUFBWTtvQkFBRUMsT0FBT2Q7Ozs7Ozs4QkFDcEYsOERBQUNOLHlEQUFLQTtvQkFBQ2UsTUFBSztvQkFBT0MsTUFBSztvQkFBUUMsT0FBTTtvQkFBWUMsVUFBVSxJQUFJLENBQUNDLFlBQVk7b0JBQUVDLE9BQU9mOzs7Ozs7OEJBQ3RGLDhEQUFDTCx5REFBS0E7b0JBQUNlLE1BQUs7b0JBQU9DLE1BQUs7b0JBQVFDLE9BQU07b0JBQVNDLFVBQVUsSUFBSSxDQUFDQyxZQUFZO29CQUFFQyxPQUFPaEI7Ozs7Ozs7Ozs7OztJQUd6Rjs7O2FBaEZBUyxRQUFPO1lBQ0xWLE9BQU87WUFDUFMsZ0JBQWdCO1lBQ2hCSixRQUFRLEVBQUU7WUFDVkUsUUFBUTtZQUNSSCxPQUFPO1lBQ1BFLE1BQU07WUFDTkgsZUFBZTtZQUNmSyxrQkFBa0I7WUFDbEJOLFVBQVUsRUFBRTtZQUNaRCxRQUFRO1FBQ1Y7UUFFRCx5QkFBeUI7UUFDekIsSUFBSTtRQUNKLEtBQUs7UUFFTCxpREFBaUQ7UUFDakQsSUFBSTtRQUNKLGtCQUFrQjtRQUNsQixLQUFLO1FBRUwsMEJBQTBCO1FBQzFCLDJDQUEyQztRQUMzQywwQkFBMEI7UUFDMUIseURBQXlEO1FBQ3pELE9BQU87UUFDUCxLQUFLO1FBRUwseUJBQXlCO1FBQ3pCLElBQUk7UUFDSixLQUFLO2FBRU5lLGVBQWUsU0FBZ0I7Z0JBQWYsRUFBRU0sT0FBTSxFQUFFO1lBQ3hCLE1BQU0sRUFBRVosTUFBSyxFQUFFLEdBQUcsSUFBSTtZQUN0QixNQUFNLEVBQUVHLEtBQUksRUFBRUksTUFBSyxFQUFFLEdBQUdLO1lBQ3hCLHNFQUFzRTtZQUN0RSxJQUFJLENBQUNDLFFBQVEsQ0FBQztnQkFDWixHQUFHYixLQUFLO2dCQUNSLENBQUNHLEtBQUssRUFBRUk7WUFDVjtRQUNGO2FBRUFHLFlBQVksSUFBTTtZQUNoQixJQUFJLENBQUNHLFFBQVEsQ0FBQyxDQUFDQyxJQUFNO29CQUNuQm5CLFFBQVE7MkJBQUltQixFQUFFbkIsTUFBTTt3QkFBRTtxQkFBTztnQkFDL0I7UUFDRjthQUVBZ0IsZUFBZSxJQUFNO1lBQ25CLE1BQU0sRUFBQ2hCLE9BQU0sRUFBQyxHQUFHLElBQUksQ0FBQ0ssS0FBSztZQUMzQixNQUFNZSxVQUFVcEIsT0FBT3FCLEdBQUc7WUFDMUIsSUFBSSxDQUFDSCxRQUFRLENBQUMsQ0FBQ0MsSUFBTTtvQkFDbkJuQixRQUFROzJCQUFJbUIsRUFBRW5CLE1BQU07d0JBQUU7cUJBQU87Z0JBQy9CO1FBQ0Y7YUFFQXNCLGdCQUFnQixJQUFNLENBRXRCOztBQXNCQTtBQUVBN0IsS0FBSzhCLFNBQVMsR0FBRztJQUNmQyxXQUFXakMsMERBQWdCO0FBQzdCLEdBQUVtQyxVQUFVO0FBRVosK0RBQWVqQyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kaWdpdGFsaXplLXN1YS9CaWJsaW90ZWNhLmpzeD8xZTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IElucHV0IGZyb20gJ0AvY29tcG9uZW50cy9JbnB1dCc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIG51bWJlck9mQXV0aG9yOiAxLFxuICAgIGF1dGhvcjogW10sXG4gICAgZWRpdG9yOiAnJyxcbiAgICBsb2NhbDogJycsXG4gICAgeWVhcjogMCxcbiAgICBudW1iZXJPZlBhZ2VzOiAwLFxuICAgIG51bWJlck9mQ2F0ZWdvcnk6IDEsXG4gICAgY2F0ZWdvcnk6IFtdLFxuICAgIHJlc3VtZTogJydcbiAgfVxuXG4gLy8gIGNvbXBvbmVudERpZE1vdW50KCkge1xuIC8vICBcbiAvLyAgfVxuXG4gLy8gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuIC8vICBcbiAvLyAgICByZXR1cm4gdHJ1ZTtcbiAvLyAgfVxuXG4gLy8gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAvLyAgICBjb25zdCB7IGJvb2xEaWRVcGRhdGUgfSA9IHRoaXMuc3RhdGU7XG4gLy8gICAgaWYgKGJvb2xEaWRVcGRhdGUpIHtcbiAvLyAgICAgIHRoaXMuc2V0U3RhdGUoe2Jvb2xEaWRVcGRhdGU6IGZhbHNlLH0sIHRoaXMuZnVuYylcbiAvLyAgICB9XG4gLy8gIH1cblxuIC8vICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAvLyAgXG4gLy8gIH1cblxuaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcbiAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gdGFyZ2V0O1xuICAvLyBjb25zdCByZXN1bHQgPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRhcmdldC5jaGVja2VkIDogdmFsdWU7XG4gIHRoaXMuc2V0U3RhdGUoe1xuICAgIC4uLnN0YXRlLFxuICAgIFtuYW1lXTogdmFsdWUsXG4gIH0pO1xufTtcblxuYWRkQXV0aG9yID0gKCkgPT4ge1xuICB0aGlzLnNldFN0YXRlKChpKT0+ICh7XG4gICAgYXV0aG9yOiBbLi4uaS5hdXRob3IsICdtYWlzJ11cbiAgfSkpXG59O1xuXG5yZW1vdmVBdXRob3IgPSAoKSA9PiB7XG4gIGNvbnN0IHthdXRob3J9ID0gdGhpcy5zdGF0ZTtcbiAgY29uc3QgbGVzc09uZSA9IGF1dGhvci5tYXBcbiAgdGhpcy5zZXRTdGF0ZSgoaSk9PiAoe1xuICAgIGF1dGhvcjogWy4uLmkuYXV0aG9yLCAnbWFpcyddXG4gIH0pKVxufTtcblxub25DbGlja0F1dGhvciA9ICgpID0+IHtcblxufTtcblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCByZXN1bWUsIGNhdGVnb3J5LCBudW1iZXJPZlBhZ2VzLCBsb2NhbCwgYXV0aG9yLCB5ZWFyLCBlZGl0b3IsIG51bWJlck9mQ2F0ZWdvcnksIG51bWJlck9mQXV0aG9yIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgbGFiZWw9XCJUw610dWxvXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGl0bGV9IC8+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5hZGRBdXRob3IoKX0+QWRpY2lvbmFyIEF1dG9yPC9idXR0b24+XG4gICAgICAgIHtudW1iZXJPZkF1dGhvciA+IDEgICYmXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlQXV0aG9yfT5SZW1vdmVyIEF1dG9yPC9idXR0b24+IH1cblxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBsYWJlbD1cIkxvY2FsXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17bG9jYWx9IC8+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGxhYmVsPVwiRWRpdG9yXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17ZWRpdG9yfSAvPlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBsYWJlbD1cIkFub1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3llYXJ9IC8+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGxhYmVsPVwiUMOhZ2luYXNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtudW1iZXJPZlBhZ2VzfSAvPlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBsYWJlbD1cIkNhdGVnb3JpYVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e2NhdGVnb3J5fSAvPlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBsYWJlbD1cIlJlc3Vtb1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3Jlc3VtZX0gLz5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbkhvbWUucHJvcFR5cGVzID0ge1xuICBuYW1lU3RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG59LmlzUmVxdWlyZWQ7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJJbnB1dCIsIkhvbWUiLCJyZW5kZXIiLCJ0aXRsZSIsInJlc3VtZSIsImNhdGVnb3J5IiwibnVtYmVyT2ZQYWdlcyIsImxvY2FsIiwiYXV0aG9yIiwieWVhciIsImVkaXRvciIsIm51bWJlck9mQ2F0ZWdvcnkiLCJudW1iZXJPZkF1dGhvciIsInN0YXRlIiwiZm9ybSIsInR5cGUiLCJuYW1lIiwibGFiZWwiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayIsImFkZEF1dGhvciIsInJlbW92ZUF1dGhvciIsInRhcmdldCIsInNldFN0YXRlIiwiaSIsImxlc3NPbmUiLCJtYXAiLCJvbkNsaWNrQXV0aG9yIiwicHJvcFR5cGVzIiwibmFtZVN0YXRlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/digitalize-sua/Biblioteca.jsx\n"));

/***/ })

});