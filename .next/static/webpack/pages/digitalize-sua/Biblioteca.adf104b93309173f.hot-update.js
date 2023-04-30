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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Input */ \"./src/components/Input.jsx\");\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        const { title , resume , category , numberOfPages , local , author , year , editor , numberOfCategory , numberOfAuthor  } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"T\\xedtulo\",\n                    onChange: this.handleChange,\n                    value: title\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: ()=>this.addAuthor(),\n                    children: \"Adicionar Autor\"\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                author.length > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: this.removeAuthor,\n                    children: \"Remover Autor\"\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                author.forEach((authore)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        type: \"text\",\n                        name: \"author\",\n                        label: \"Autor\",\n                        onChange: this.handleChange,\n                        value: author\n                    }, void 0, false, {\n                        fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"local\",\n                    label: \"Local\",\n                    onChange: this.handleChange,\n                    value: local\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"Editor\",\n                    label: \"Editor\",\n                    onChange: this.handleChange,\n                    value: editor\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"Ano\",\n                    onChange: this.handleChange,\n                    value: year\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"P\\xe1ginas\",\n                    onChange: this.handleChange,\n                    value: numberOfPages\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"Categoria\",\n                    onChange: this.handleChange,\n                    value: category\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"text\",\n                    name: \"title\",\n                    label: \"Resumo\",\n                    onChange: this.handleChange,\n                    value: resume\n                }, void 0, false, {\n                    fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/gerg/Documentos/meus-projetos/pessoais/digioteca/src/pages/digitalize-sua/Biblioteca.jsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        this.state = {\n            title: \"\",\n            numberOfAuthor: 1,\n            author: [],\n            editor: \"\",\n            local: \"\",\n            year: 0,\n            numberOfPages: 0,\n            numberOfCategory: 1,\n            category: [],\n            resume: \"\"\n        };\n        //  componentDidMount() {\n        //  \n        //  }\n        //  shouldComponentUpdate(nextProps, nextState) {\n        //  \n        //    return true;\n        //  }\n        //  componentDidUpdate() {\n        //    const { boolDidUpdate } = this.state;\n        //    if (boolDidUpdate) {\n        //      this.setState({boolDidUpdate: false,}, this.func)\n        //    }\n        //  }\n        //  componentDidMount() {\n        //  \n        //  }\n        this.handleChange = (param)=>{\n            let { target  } = param;\n            const { state  } = this;\n            const { name , value  } = target;\n            // const result = target.type === 'checkbox' ? target.checked : value;\n            this.setState({\n                ...state,\n                [name]: value\n            });\n        };\n        this.addAuthor = ()=>{\n            this.setState((i)=>({\n                    author: [\n                        ...i.author,\n                        \"mais\"\n                    ]\n                }));\n        };\n        this.removeAuthor = ()=>{\n            const { author  } = this.state;\n            const lessOne = author.filter((aut, index)=>index < author.length - 1);\n            this.setState({\n                author: lessOne\n            });\n        };\n        this.onClickAuthor = ()=>{};\n    }\n}\nHome.propTypes = ({\n    nameState: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)\n}).isRequired;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGlnaXRhbGl6ZS1zdWEvQmlibGlvdGVjYS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlDO0FBQ047QUFDSTtBQUV2QyxNQUFNSSxhQUFhSCw0Q0FBU0E7SUFnRTFCSSxTQUFTO1FBQ1AsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFQyxjQUFhLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBRUMsaUJBQWdCLEVBQUVDLGVBQWMsRUFBRSxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUM1SCxxQkFDRSw4REFBQ0M7OzhCQUNDLDhEQUFDZCx5REFBS0E7b0JBQUNlLE1BQUs7b0JBQU9DLE1BQUs7b0JBQVFDLE9BQU07b0JBQVNDLFVBQVUsSUFBSSxDQUFDQyxZQUFZO29CQUFFQyxPQUFPakI7Ozs7Ozs4QkFFbkYsOERBQUNrQjtvQkFBT04sTUFBSztvQkFBU08sU0FBUyxJQUFNLElBQUksQ0FBQ0MsU0FBUzs4QkFBSTs7Ozs7O2dCQUN0RGYsT0FBT2dCLE1BQU0sR0FBRyxtQkFDakIsOERBQUNIO29CQUFPTixNQUFLO29CQUFTTyxTQUFTLElBQUksQ0FBQ0csWUFBWTs4QkFBRTs7Ozs7O2dCQUNqRGpCLE9BQU9rQixPQUFPLENBQUMsQ0FBQ0Msd0JBQ2pCLDhEQUFDM0IseURBQUtBO3dCQUNOZSxNQUFLO3dCQUNMQyxNQUFLO3dCQUNMQyxPQUFNO3dCQUNOQyxVQUFVLElBQUksQ0FBQ0MsWUFBWTt3QkFDM0JDLE9BQU9aOzs7Ozs7OEJBR1AsOERBQUNSLHlEQUFLQTtvQkFBQ2UsTUFBSztvQkFBT0MsTUFBSztvQkFBUUMsT0FBTTtvQkFBUUMsVUFBVSxJQUFJLENBQUNDLFlBQVk7b0JBQUVDLE9BQU9iOzs7Ozs7OEJBQ2xGLDhEQUFDUCx5REFBS0E7b0JBQUNlLE1BQUs7b0JBQU9DLE1BQUs7b0JBQVNDLE9BQU07b0JBQVNDLFVBQVUsSUFBSSxDQUFDQyxZQUFZO29CQUFFQyxPQUFPVjs7Ozs7OzhCQUNwRiw4REFBQ1YseURBQUtBO29CQUFDZSxNQUFLO29CQUFPQyxNQUFLO29CQUFRQyxPQUFNO29CQUFNQyxVQUFVLElBQUksQ0FBQ0MsWUFBWTtvQkFBRUMsT0FBT1g7Ozs7Ozs4QkFDaEYsOERBQUNULHlEQUFLQTtvQkFBQ2UsTUFBSztvQkFBT0MsTUFBSztvQkFBUUMsT0FBTTtvQkFBVUMsVUFBVSxJQUFJLENBQUNDLFlBQVk7b0JBQUVDLE9BQU9kOzs7Ozs7OEJBQ3BGLDhEQUFDTix5REFBS0E7b0JBQUNlLE1BQUs7b0JBQU9DLE1BQUs7b0JBQVFDLE9BQU07b0JBQVlDLFVBQVUsSUFBSSxDQUFDQyxZQUFZO29CQUFFQyxPQUFPZjs7Ozs7OzhCQUN0Riw4REFBQ0wseURBQUtBO29CQUFDZSxNQUFLO29CQUFPQyxNQUFLO29CQUFRQyxPQUFNO29CQUFTQyxVQUFVLElBQUksQ0FBQ0MsWUFBWTtvQkFBRUMsT0FBT2hCOzs7Ozs7Ozs7Ozs7SUFHekY7OzthQXhGQVMsUUFBTztZQUNMVixPQUFPO1lBQ1BTLGdCQUFnQjtZQUNoQkosUUFBUSxFQUFFO1lBQ1ZFLFFBQVE7WUFDUkgsT0FBTztZQUNQRSxNQUFNO1lBQ05ILGVBQWU7WUFDZkssa0JBQWtCO1lBQ2xCTixVQUFVLEVBQUU7WUFDWkQsUUFBUTtRQUNWO1FBRUQseUJBQXlCO1FBQ3pCLElBQUk7UUFDSixLQUFLO1FBRUwsaURBQWlEO1FBQ2pELElBQUk7UUFDSixrQkFBa0I7UUFDbEIsS0FBSztRQUVMLDBCQUEwQjtRQUMxQiwyQ0FBMkM7UUFDM0MsMEJBQTBCO1FBQzFCLHlEQUF5RDtRQUN6RCxPQUFPO1FBQ1AsS0FBSztRQUVMLHlCQUF5QjtRQUN6QixJQUFJO1FBQ0osS0FBSzthQUVOZSxlQUFlLFNBQWdCO2dCQUFmLEVBQUVTLE9BQU0sRUFBRTtZQUN4QixNQUFNLEVBQUVmLE1BQUssRUFBRSxHQUFHLElBQUk7WUFDdEIsTUFBTSxFQUFFRyxLQUFJLEVBQUVJLE1BQUssRUFBRSxHQUFHUTtZQUN4QixzRUFBc0U7WUFDdEUsSUFBSSxDQUFDQyxRQUFRLENBQUM7Z0JBQ1osR0FBR2hCLEtBQUs7Z0JBQ1IsQ0FBQ0csS0FBSyxFQUFFSTtZQUNWO1FBQ0Y7YUFFQUcsWUFBWSxJQUFNO1lBQ2hCLElBQUksQ0FBQ00sUUFBUSxDQUFDLENBQUNDLElBQU07b0JBQ25CdEIsUUFBUTsyQkFBSXNCLEVBQUV0QixNQUFNO3dCQUFFO3FCQUFPO2dCQUMvQjtRQUNGO2FBRUFpQixlQUFlLElBQU07WUFDbkIsTUFBTSxFQUFDakIsT0FBTSxFQUFDLEdBQUcsSUFBSSxDQUFDSyxLQUFLO1lBQzNCLE1BQU1rQixVQUFVdkIsT0FBT3dCLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxRQUFVQSxRQUFRMUIsT0FBT2dCLE1BQU0sR0FBRTtZQUNyRSxJQUFJLENBQUNLLFFBQVEsQ0FBQztnQkFDWnJCLFFBQVF1QjtZQUNWO1FBQ0Y7YUFFQUksZ0JBQWdCLElBQU0sQ0FFdEI7O0FBOEJBO0FBRUFsQyxLQUFLbUMsU0FBUyxHQUFHO0lBQ2ZDLFdBQVd0QywwREFBZ0I7QUFDN0IsR0FBRXdDLFVBQVU7QUFFWiwrREFBZXRDLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RpZ2l0YWxpemUtc3VhL0JpYmxpb3RlY2EuanN4PzFlNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL0lucHV0JztcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGU9IHtcbiAgICB0aXRsZTogJycsXG4gICAgbnVtYmVyT2ZBdXRob3I6IDEsXG4gICAgYXV0aG9yOiBbXSxcbiAgICBlZGl0b3I6ICcnLFxuICAgIGxvY2FsOiAnJyxcbiAgICB5ZWFyOiAwLFxuICAgIG51bWJlck9mUGFnZXM6IDAsXG4gICAgbnVtYmVyT2ZDYXRlZ29yeTogMSxcbiAgICBjYXRlZ29yeTogW10sXG4gICAgcmVzdW1lOiAnJ1xuICB9XG5cbiAvLyAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gLy8gIFxuIC8vICB9XG5cbiAvLyAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gLy8gIFxuIC8vICAgIHJldHVybiB0cnVlO1xuIC8vICB9XG5cbiAvLyAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuIC8vICAgIGNvbnN0IHsgYm9vbERpZFVwZGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAvLyAgICBpZiAoYm9vbERpZFVwZGF0ZSkge1xuIC8vICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym9vbERpZFVwZGF0ZTogZmFsc2UsfSwgdGhpcy5mdW5jKVxuIC8vICAgIH1cbiAvLyAgfVxuXG4gLy8gIGNvbXBvbmVudERpZE1vdW50KCkge1xuIC8vICBcbiAvLyAgfVxuXG5oYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xuICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSB0YXJnZXQ7XG4gIC8vIGNvbnN0IHJlc3VsdCA9IHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gdGFyZ2V0LmNoZWNrZWQgOiB2YWx1ZTtcbiAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLi4uc3RhdGUsXG4gICAgW25hbWVdOiB2YWx1ZSxcbiAgfSk7XG59O1xuXG5hZGRBdXRob3IgPSAoKSA9PiB7XG4gIHRoaXMuc2V0U3RhdGUoKGkpPT4gKHtcbiAgICBhdXRob3I6IFsuLi5pLmF1dGhvciwgJ21haXMnXVxuICB9KSlcbn07XG5cbnJlbW92ZUF1dGhvciA9ICgpID0+IHtcbiAgY29uc3Qge2F1dGhvcn0gPSB0aGlzLnN0YXRlO1xuICBjb25zdCBsZXNzT25lID0gYXV0aG9yLmZpbHRlcigoYXV0LCBpbmRleCkgPT4gaW5kZXggPCBhdXRob3IubGVuZ3RoIC0xKTtcbiAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgYXV0aG9yOiBsZXNzT25lXG4gIH0pO1xufVxuXG5vbkNsaWNrQXV0aG9yID0gKCkgPT4ge1xuXG59O1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIHJlc3VtZSwgY2F0ZWdvcnksIG51bWJlck9mUGFnZXMsIGxvY2FsLCBhdXRob3IsIHllYXIsIGVkaXRvciwgbnVtYmVyT2ZDYXRlZ29yeSwgbnVtYmVyT2ZBdXRob3IgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtPlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBsYWJlbD1cIlTDrXR1bG9cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aXRsZX0gLz5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmFkZEF1dGhvcigpfT5BZGljaW9uYXIgQXV0b3I8L2J1dHRvbj5cbiAgICAgICAge2F1dGhvci5sZW5ndGggPiAxICAmJlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnJlbW92ZUF1dGhvcn0+UmVtb3ZlciBBdXRvcjwvYnV0dG9uPiB9XG4gICAgICAgIHthdXRob3IuZm9yRWFjaCgoYXV0aG9yZSkgPT4gKFxuICAgICAgICA8SW5wdXQgXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImF1dGhvclwiIFxuICAgICAgICBsYWJlbD1cIkF1dG9yXCJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICB2YWx1ZT17YXV0aG9yfVxuICAgICAgICAvPlxuICAgICAgICApICl9XG4gICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsb2NhbFwiIGxhYmVsPVwiTG9jYWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtsb2NhbH0gLz5cbiAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIkVkaXRvclwiIGxhYmVsPVwiRWRpdG9yXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17ZWRpdG9yfSAvPlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBsYWJlbD1cIkFub1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3llYXJ9IC8+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGxhYmVsPVwiUMOhZ2luYXNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtudW1iZXJPZlBhZ2VzfSAvPlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBsYWJlbD1cIkNhdGVnb3JpYVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e2NhdGVnb3J5fSAvPlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBsYWJlbD1cIlJlc3Vtb1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3Jlc3VtZX0gLz5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbkhvbWUucHJvcFR5cGVzID0ge1xuICBuYW1lU3RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG59LmlzUmVxdWlyZWQ7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJJbnB1dCIsIkhvbWUiLCJyZW5kZXIiLCJ0aXRsZSIsInJlc3VtZSIsImNhdGVnb3J5IiwibnVtYmVyT2ZQYWdlcyIsImxvY2FsIiwiYXV0aG9yIiwieWVhciIsImVkaXRvciIsIm51bWJlck9mQ2F0ZWdvcnkiLCJudW1iZXJPZkF1dGhvciIsInN0YXRlIiwiZm9ybSIsInR5cGUiLCJuYW1lIiwibGFiZWwiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayIsImFkZEF1dGhvciIsImxlbmd0aCIsInJlbW92ZUF1dGhvciIsImZvckVhY2giLCJhdXRob3JlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJpIiwibGVzc09uZSIsImZpbHRlciIsImF1dCIsImluZGV4Iiwib25DbGlja0F1dGhvciIsInByb3BUeXBlcyIsIm5hbWVTdGF0ZSIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/digitalize-sua/Biblioteca.jsx\n"));

/***/ })

});