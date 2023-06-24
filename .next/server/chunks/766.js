"use strict";
exports.id = 766;
exports.ids = [766];
exports.modules = {

/***/ 6636:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ axiosPrivate)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _redux_store_storeConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1086);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const axiosPrivate = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://api.devhyunjeen.shop/",
    withCredentials: true,
    timeout: 5000
});
axiosPrivate.interceptors.request.use((config)=>{
    config.headers["Authorization"] = `Bearer ${_redux_store_storeConfig__WEBPACK_IMPORTED_MODULE_1__/* .store.getState */ .h.getState().userReducer.accessToken}` || "";
    return config;
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_auth_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4673);
/* harmony import */ var _api_auth_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6140);
/* harmony import */ var _api_auth_logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5567);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_auth_login__WEBPACK_IMPORTED_MODULE_0__, _api_auth_register__WEBPACK_IMPORTED_MODULE_1__, _api_auth_logout__WEBPACK_IMPORTED_MODULE_2__]);
([_api_auth_login__WEBPACK_IMPORTED_MODULE_0__, _api_auth_register__WEBPACK_IMPORTED_MODULE_1__, _api_auth_logout__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    login: _api_auth_login__WEBPACK_IMPORTED_MODULE_0__/* .login */ .x,
    register: _api_auth_register__WEBPACK_IMPORTED_MODULE_1__/* .register */ .z,
    logout: _api_auth_logout__WEBPACK_IMPORTED_MODULE_2__/* .logout */ .k
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var _api_auth_common_axios_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6636);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_auth_common_axios_default__WEBPACK_IMPORTED_MODULE_0__]);
_api_auth_common_axios_default__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const login = async (data)=>{
    const result = await _api_auth_common_axios_default__WEBPACK_IMPORTED_MODULE_0__/* .axiosPrivate.post */ .j.post("auth/sign_in", data);
    return result.data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5567:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var _api_auth_common_axios_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6636);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_auth_common_axios_default__WEBPACK_IMPORTED_MODULE_0__]);
_api_auth_common_axios_default__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const logout = async ()=>{
    const result = await _api_auth_common_axios_default__WEBPACK_IMPORTED_MODULE_0__/* .axiosPrivate.post */ .j.post("auth/logout");
    return result.data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6140:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _api_auth_common_axios_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6636);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_auth_common_axios_default__WEBPACK_IMPORTED_MODULE_0__]);
_api_auth_common_axios_default__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const register = async (data)=>{
    const result = await _api_auth_common_axios_default__WEBPACK_IMPORTED_MODULE_0__/* .axiosPrivate.post */ .j.post("auth/sign_up", data);
    return result.data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C1": () => (/* binding */ setCurrentMainMenuOrder),
/* harmony export */   "Ur": () => (/* binding */ setCurrentSubMenuOrder),
/* harmony export */   "Vm": () => (/* binding */ currentMenuOrderReducer)
/* harmony export */ });
/* unused harmony export currentMenuOrderSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    currentMainMenuOrder: 0,
    currentSubMenuOrder: 0
};
const currentMenuOrderSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "currentMenuOrder",
    initialState,
    reducers: {
        setCurrentMainMenuOrder: (state, action)=>{
            state.currentMainMenuOrder = action.payload;
        },
        setCurrentSubMenuOrder: (state, action)=>{
            state.currentSubMenuOrder = action.payload;
        }
    }
});
const currentMenuOrderReducer = currentMenuOrderSlice.reducer;
const { setCurrentMainMenuOrder , setCurrentSubMenuOrder  } = currentMenuOrderSlice.actions;


/***/ }),

/***/ 1880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M3": () => (/* binding */ userReducer),
/* harmony export */   "av": () => (/* binding */ setUser)
/* harmony export */ });
/* unused harmony exports userSlice, reset */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8936);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
    status: null,
    user: null,
    accessToken: ""
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action)=>{
            state.status = "success";
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
        },
        reset: (state)=>{
            state.status = null;
            state.user = null;
            state.accessToken = "";
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(redux_persist__WEBPACK_IMPORTED_MODULE_1__.PURGE, ()=>initialState);
    }
});
const _userReducer = userSlice.reducer;
const persistConfig = {
    key: "root",
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default()),
    whitelist: [
        "user",
        "status",
        "accessToken"
    ]
};
const userReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(persistConfig, _userReducer);
const { setUser , reset  } = userSlice.actions;


/***/ }),

/***/ 1086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ persistor),
  "h": () => (/* binding */ store)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./src/redux/slice/currentMenuOrder.slice.ts
var currentMenuOrder_slice = __webpack_require__(1607);
// EXTERNAL MODULE: ./src/redux/slice/user.slice.ts
var user_slice = __webpack_require__(1880);
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(4161);
;// CONCATENATED MODULE: ./src/redux/slice/productImages.slice.ts

const initialState = {
    images: []
};
const productImagesSlice = (0,toolkit_.createSlice)({
    name: "productImages",
    initialState,
    reducers: {
        setImages: (state, action)=>{
            state.images = action.payload;
        }
    }
});
const productImagesSliceReducer = productImagesSlice.reducer;
const { setImages  } = productImagesSlice.actions;

// EXTERNAL MODULE: ./src/services/categoryApi.ts
var categoryApi = __webpack_require__(6192);
// EXTERNAL MODULE: ./src/services/productApi.ts
var productApi = __webpack_require__(9222);
;// CONCATENATED MODULE: ./src/redux/store/storeConfig.ts







const rootReducer = (0,toolkit_.combineReducers)({
    currentMenuOrder: currentMenuOrder_slice/* currentMenuOrderReducer */.Vm,
    userReducer: user_slice/* userReducer */.M3,
    productImagesSliceReducer: productImagesSliceReducer,
    [productApi/* productsApi.reducerPath */.fi.reducerPath]: productApi/* productsApi.reducer */.fi.reducer,
    [categoryApi/* categoriesApi.reducerPath */.Yc.reducerPath]: categoryApi/* categoriesApi.reducer */.Yc.reducer
});
const store = (0,toolkit_.configureStore)({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    external_redux_persist_.PERSIST,
                    external_redux_persist_.PURGE
                ]
            }
        }).concat(categoryApi/* categoriesApi.middleware */.Yc.middleware, productApi/* productsApi.middleware */.fi.middleware)
});
const persistor = (0,external_redux_persist_.persistStore)(store);


/***/ }),

/***/ 6192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NL": () => (/* binding */ useGetCategoriesQuery),
/* harmony export */   "U": () => (/* binding */ useGetSubCategoriesQuery),
/* harmony export */   "Yc": () => (/* binding */ categoriesApi)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const categoriesApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "categoryApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://api.devhyunjeen.shop/"
    }),
    endpoints: (builder)=>({
            getCategories: builder.query({
                query: ()=>"/categories",
                transformResponse: (response)=>response.map(({ name , uuid  })=>({
                            label: name,
                            value: uuid
                        }))
            }),
            getSubCategories: builder.query({
                query: (uuid)=>`/categories?id=${uuid}`,
                transformResponse: (response)=>response.map(({ name , uuid  })=>({
                            label: name,
                            value: uuid
                        }))
            })
        })
});
const { useGetCategoriesQuery , useGetSubCategoriesQuery  } = categoriesApi;


/***/ })

};
;