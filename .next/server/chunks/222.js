"use strict";
exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 9222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C$": () => (/* binding */ useGetProductsQuery),
/* harmony export */   "fi": () => (/* binding */ productsApi),
/* harmony export */   "qX": () => (/* binding */ useCreateProductMutation)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const productsApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "productsApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://api.devhyunjeen.shop/"
    }),
    tagTypes: [
        "Products"
    ],
    endpoints: (builder)=>({
            getProducts: builder.query({
                query: ()=>"/products",
                providesTags: [
                    "Products"
                ]
            }),
            createProduct: builder.mutation({
                query: (formData)=>({
                        url: "/products/new",
                        method: "POST",
                        body: formData
                    }),
                invalidatesTags: [
                    "Products"
                ]
            })
        })
});
const { useGetProductsQuery , useCreateProductMutation  } = productsApi;


/***/ })

};
;