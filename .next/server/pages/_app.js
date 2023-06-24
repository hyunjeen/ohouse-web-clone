(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2927:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Noto_Sans_KR_ef9f93', '__Noto_Sans_KR_Fallback_ef9f93'","fontStyle":"normal"},
	"className": "__className_ef9f93"
};


/***/ }),

/***/ 3844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9212);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Logo() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-[138px] text-3xl font-medium",
        children: "현진이의집"
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 3214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function SearchInput({ className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex h-[40px] items-center  rounded border px-2 ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMagnifyingGlass,
                className: `ml-1 mr-2 translate-y-[2px]`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: `w-full outline-0`,
                placeholder: "통합검색"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2670:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function WriterButton({ onClickHandler  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "flex h-[40px] items-center gap-1 rounded bg-blue-400 px-4 text-white",
        onClick: onClickHandler,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `whitespace-nowrap`,
                children: "글쓰기"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAngleDown
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WriterButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function HeaderInnerWrap({ children , className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: ` w-full border-b bg-white ${className ? className : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "m-auto flex max-w-7xl items-center gap-3",
            children: children
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(HeaderInnerWrap));


/***/ }),

/***/ 2799:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_layer_header_HeaderTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2391);
/* harmony import */ var _components_layer_header_HeaderBottom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3968);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layer_header_HeaderTop__WEBPACK_IMPORTED_MODULE_1__, _components_layer_header_HeaderBottom__WEBPACK_IMPORTED_MODULE_2__]);
([_components_layer_header_HeaderTop__WEBPACK_IMPORTED_MODULE_1__, _components_layer_header_HeaderBottom__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const Header = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layer_header_HeaderTop__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layer_header_HeaderBottom__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_modules_navigation_SubNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _components_modules_hot_topic_HotTopic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2304);
/* harmony import */ var _components_layer_header_Header_innerWrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5529);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_modules_hot_topic_HotTopic__WEBPACK_IMPORTED_MODULE_3__]);
_components_modules_hot_topic_HotTopic__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function HeaderBottom() {
    const curMainMenuOrder = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.currentMenuOrder.currentMainMenuOrder);
    const curSubMenuOrder = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.currentMenuOrder.currentSubMenuOrder);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layer_header_Header_innerWrap__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modules_navigation_SubNavigation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                curMainMenuOrder: curMainMenuOrder,
                curSubMenuOrder: curSubMenuOrder
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modules_hot_topic_HotTopic__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderBottom);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_common_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9700);
/* harmony import */ var _components_modules_navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9238);
/* harmony import */ var _components_common_SearchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3214);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCartPlus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7899);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCartPlus__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCartPlus__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_modules_auth_LoginMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5402);
/* harmony import */ var _components_layer_header_Header_innerWrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5529);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_modules_wirte_Write__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_SearchInput__WEBPACK_IMPORTED_MODULE_3__, _components_modules_auth_LoginMenu__WEBPACK_IMPORTED_MODULE_6__, _components_modules_wirte_Write__WEBPACK_IMPORTED_MODULE_10__]);
([_components_common_SearchInput__WEBPACK_IMPORTED_MODULE_3__, _components_modules_auth_LoginMenu__WEBPACK_IMPORTED_MODULE_6__, _components_modules_wirte_Write__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function HeaderTop() {
    const curMainMenuOrder = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.currentMenuOrder.currentMainMenuOrder);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layer_header_Header_innerWrap__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Logo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modules_navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                order: curMainMenuOrder
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_SearchInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: `hidden lg:flex`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons_faCartPlus__WEBPACK_IMPORTED_MODULE_5__.faCartPlus,
                className: "text-xl"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modules_auth_LoginMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modules_wirte_Write__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderTop);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);


function FullLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullLayout);


/***/ }),

/***/ 2826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layer_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2799);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layer_header_Header__WEBPACK_IMPORTED_MODULE_2__]);
_components_layer_header_Header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function HeaderLayout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layer_header_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9189:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_HeaderLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2826);
/* harmony import */ var _components_layout_FullLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5450);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_HeaderLayout__WEBPACK_IMPORTED_MODULE_2__]);
_components_layout_HeaderLayout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Layout({ pathname , children  }) {
    const FullLayoutPath = [
        "/users/sign_in",
        "/un_users/new"
    ];
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    if (router.pathname === `/404`) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_FullLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: FullLayoutPath.some((value)=>{
            return value === pathname;
        }) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_FullLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: children
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_HeaderLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: children
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useLogoutHook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2785);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useLogoutHook__WEBPACK_IMPORTED_MODULE_5__]);
_hooks_useLogoutHook__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function LoginMenu() {
    const status = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.userReducer.status);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const redirectUrl = router.pathname.replaceAll("/", "%2F");
    const { onLogoutHandler  } = (0,_hooks_useLogoutHook__WEBPACK_IMPORTED_MODULE_5__/* .useLogoutHook */ .g)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-4 text-[14px]",
        children: [
            status != "success" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/users/sign_in?redirect_to=${redirectUrl}`,
                        children: "로그인"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/un_users/new",
                        children: "회원가입"
                    })
                ]
            }),
            status == "success" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: onLogoutHandler,
                children: "로그아웃"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/forum",
                children: "고객센터"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2304:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7840);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5198);
/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay
]);
const data = Array.from({
    length: 5
}, (val, index)=>{
    index++;
    const ratingState = index % 2 === 0 ? "down" : "up";
    return {
        id: index,
        title: `title-${index}`,
        ratingState: ratingState
    };
});
function HotTopic() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
        modules: [
            swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation,
            swiper__WEBPACK_IMPORTED_MODULE_1__.A11y
        ],
        slidesPerView: 1,
        loop: true,
        direction: "vertical",
        autoplay: {
            delay: 3000
        },
        init: true,
        observer: true,
        observeParents: true,
        className: `flex h-[40px] items-center overflow-hidden `,
        children: [
            data.map((value)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                    className: `flex items-center`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `flex items-center gap-2 `,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `font-medium`,
                                children: value.id
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPlay,
                                className: `${value.ratingState === "up" ? "translate-y-[1px] -rotate-90 text-red-600" : "translate-y-[2px] rotate-90 text-blue-600"} mx-1 text-[8px] `
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `w-[104px]`,
                                children: value.title
                            })
                        ]
                    })
                }, value.id)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngleDown,
                className: `ml-5 text-gray-400`
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().memo(HotTopic));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_modules_navigation_list_ListView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2737);
/* harmony import */ var _dummyData_menuItem_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(560);



const MainItems = _dummyData_menuItem_data__WEBPACK_IMPORTED_MODULE_2__/* .MenuItems.map */ .s.map(({ id , title , sub  })=>({
        id,
        title,
        src: sub[0].src
    }));
function Navigation({ order  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `sticky mr-auto text-[18px] font-medium`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modules_navigation_list_ListView__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            order: order,
            data: MainItems
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);


/***/ }),

/***/ 3015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_modules_navigation_list_ListView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2737);
/* harmony import */ var _dummyData_menuItem_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(560);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function SubNavigation({ curMainMenuOrder , curSubMenuOrder  }) {
    const [{ sub: subMenuItems  }] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return _dummyData_menuItem_data__WEBPACK_IMPORTED_MODULE_2__/* .MenuItems.filter */ .s.filter((value)=>value.id === curMainMenuOrder);
    }, [
        curMainMenuOrder
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modules_navigation_list_ListView__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        order: curSubMenuOrder,
        data: subMenuItems,
        sub: true
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubNavigation);


/***/ }),

/***/ 2737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ list_ListView)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/modules/navigation/list/ListItem.tsx


function ListItem(props) {
    return /*#__PURE__*/ jsx_runtime.jsx("li", {
        className: `flex items-center hover:text-blue-500 current:text-blue-500 ${props.currentId === props.menuId ? "active" : ""}`,
        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
            className: `inline-block px-4 current:text-blue-500 ${props.sub ? "py-3" : "py-5"}`,
            href: props.src,
            children: props.children
        })
    });
}
/* harmony default export */ const list_ListItem = (ListItem);

;// CONCATENATED MODULE: ./src/components/modules/navigation/list/ListView.tsx



function ListView({ data , order , sub  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `flex-1`,
        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
            className: "flex items-center ",
            children: data.map(({ title , src , id  })=>/*#__PURE__*/ jsx_runtime.jsx(list_ListItem, {
                    src: src,
                    currentId: id,
                    menuId: order,
                    sub: sub,
                    children: title
                }, id))
        })
    });
}
/* harmony default export */ const list_ListView = (/*#__PURE__*/external_react_default().memo(ListView));


/***/ }),

/***/ 434:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_WriterButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2670);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2765);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common_WriterButton__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__]);
([_components_common_WriterButton__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Write() {
    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const popupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const handleClickOutside = (event)=>{
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setShowPopup(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleRouteChange = ()=>{
            setShowPopup(false);
        };
        router.events.on("routeChangeStart", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const onClickHandler = ()=>{
        setShowPopup(!showPopup);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative z-30 flex justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_WriterButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                onClickHandler: onClickHandler
            }),
            showPopup && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: popupRef,
                className: "absolute bottom-0 right-0 translate-y-[120%] rounded border bg-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/products/new",
                        className: "flex items-center justify-start p-5 hover:bg-gray-100",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faImage,
                                    className: "mr-2 text-3xl"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "whitespace-nowrap font-bold",
                                        children: "상품등록"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "whitespace-nowrap text-sm text-gray-400",
                                        children: "판매하고 싶은 상품을 올려보세요"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Write);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2870:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.baseURL = "https://api.devhyunjeen.shop/";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ MenuItems)
/* harmony export */ });
const MenuItems = [
    {
        id: 0,
        title: "커뮤니티",
        sub: [
            {
                id: 0,
                src: "/",
                title: "홈"
            },
            {
                id: 1,
                src: "/topics/recommend",
                title: "추천"
            },
            {
                id: 2,
                src: "/projects",
                title: "집들이"
            },
            {
                id: 3,
                src: "/card_collections",
                title: "집사진"
            }
        ]
    },
    {
        id: 1,
        title: "쇼핑",
        sub: [
            {
                id: 0,
                src: "/store",
                title: "쇼핑홈"
            },
            {
                id: 1,
                src: "/category",
                title: "카테고리"
            },
            {
                id: 2,
                src: "/ranks",
                title: "베스트"
            },
            {
                id: 3,
                src: "/",
                title: "오늘의딜"
            }
        ]
    },
    {
        id: 2,
        title: "이사/시공/수리",
        sub: [
            {
                id: 0,
                src: "/experts",
                title: "홈"
            }
        ]
    }
];


/***/ }),

/***/ 2785:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useLogoutHook)
/* harmony export */ });
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5766);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store_storeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1086);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_auth__WEBPACK_IMPORTED_MODULE_0__]);
_api_auth__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useLogoutHook = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const onLogoutHandler = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        try {
            await _api_auth__WEBPACK_IMPORTED_MODULE_0__/* ["default"].logout */ .Z.logout();
            await _redux_store_storeConfig__WEBPACK_IMPORTED_MODULE_2__/* .persistor.purge */ .D.purge();
            void router.replace("/?logout_popup=true");
        } catch (error) {
            // 추후 고민하여 로직짜기
            return;
        }
    }, [
        router
    ]);
    return {
        onLogoutHandler
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useScrollRestoration() {
    //애니메이션프레임 id 저장
    const frame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let scrollPosition;
        const saveScrollPosition = ()=>{
            scrollPosition = window.scrollY;
            frame.current = requestAnimationFrame(saveScrollPositionToSession);
        };
        const saveScrollPositionToSession = ()=>{
            sessionStorage.setItem("scrollPosition", scrollPosition.toString());
        };
        const restoreScrollPosition = ()=>{
            const savedScrollPosition = sessionStorage.getItem("scrollPosition");
            if (savedScrollPosition) {
                window.scrollTo(0, parseInt(savedScrollPosition, 10));
            }
        };
        window.addEventListener("scroll", saveScrollPosition);
        window.addEventListener("load", restoreScrollPosition);
        return ()=>{
            window.removeEventListener("scroll", saveScrollPosition);
            window.removeEventListener("load", restoreScrollPosition);
            if (frame.current) {
                cancelAnimationFrame(frame.current);
            }
        };
    }, []);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useScrollRestoration);


/***/ }),

/***/ 1899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_slice_currentMenuOrder_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1607);
/* harmony import */ var _dummyData_menuItem_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(560);






const PagePathMiddleware = ({ children  })=>{
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _dummyData_menuItem_data__WEBPACK_IMPORTED_MODULE_5__/* .MenuItems.some */ .s.some((value)=>value.sub.some((value1)=>{
                if (value1.src === pathname) {
                    dispatch((0,_redux_slice_currentMenuOrder_slice__WEBPACK_IMPORTED_MODULE_4__/* .setCurrentMainMenuOrder */ .C1)(value.id));
                    dispatch((0,_redux_slice_currentMenuOrder_slice__WEBPACK_IMPORTED_MODULE_4__/* .setCurrentSubMenuOrder */ .Ur)(value1.id));
                    return true; // return true when condition is met
                }
                return false;
            }));
    }, [
        pathname,
        dispatch
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PagePathMiddleware);


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5800);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_store_storeConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1086);
/* harmony import */ var _middleware_PagePath_middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1899);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9189);
/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6999);
/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_react_oauth_google__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_font__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2927);
/* harmony import */ var _styles_font__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_font__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _config_axios_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2870);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1127);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hooks_useScrollResotre__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8692);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__, _components_layout_Layout__WEBPACK_IMPORTED_MODULE_8__, _config_axios_config__WEBPACK_IMPORTED_MODULE_10__]);
([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__, _components_layout_Layout__WEBPACK_IMPORTED_MODULE_8__, _config_axios_config__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__.config.autoAddCss = false;
function App({ Component , pageProps  }) {
    (0,_hooks_useScrollResotre__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
                store: _redux_store_storeConfig__WEBPACK_IMPORTED_MODULE_6__/* .store */ .h,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_11__.PersistGate, {
                    persistor: _redux_store_storeConfig__WEBPACK_IMPORTED_MODULE_6__/* .persistor */ .D,
                    loading: null,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_oauth_google__WEBPACK_IMPORTED_MODULE_9__.GoogleOAuthProvider, {
                        clientId: "827825074660-en7jqfletrlq21bilafn0g1fme3i4du1.apps.googleusercontent.com",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_middleware_PagePath_middleware__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                pathname: pageProps?.pathname,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps,
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "4b96b02fb746f1b6",
                                            [
                                                (_styles_font__WEBPACK_IMPORTED_MODULE_13___default().style.fontFamily)
                                            ]
                                        ]
                                    ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
                                })
                            })
                        })
                    })
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "4b96b02fb746f1b6",
                dynamic: [
                    (_styles_font__WEBPACK_IMPORTED_MODULE_13___default().style.fontFamily)
                ],
                children: `html{font-family:${(_styles_font__WEBPACK_IMPORTED_MODULE_13___default().style.fontFamily)}}`
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5800:
/***/ (() => {



/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 9176:
/***/ (() => {



/***/ }),

/***/ 2996:
/***/ (() => {



/***/ }),

/***/ 5198:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 7899:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons/faCartPlus");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6999:
/***/ ((module) => {

"use strict";
module.exports = require("@react-oauth/google");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4335:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 4161:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ 1127:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ 8936:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 86:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/fontawesome-svg-core");;

/***/ }),

/***/ 2765:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-regular-svg-icons");;

/***/ }),

/***/ 4563:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 7840:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ }),

/***/ 167:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,222,766], () => (__webpack_exec__(3844)));
module.exports = __webpack_exports__;

})();