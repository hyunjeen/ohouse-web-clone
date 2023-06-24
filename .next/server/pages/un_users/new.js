"use strict";
(() => {
var exports = {};
exports.id = 52;
exports.ids = [52];
exports.modules = {

/***/ 1740:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_un_users_new_index_tsx__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var private_next_pages_un_users_new_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(826);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_un_users_new_index_tsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_un_users_new_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Label({ title , htmlFor  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        className: `mt-4 w-full`,
        htmlFor: htmlFor,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: `mb-1 font-bold`,
            children: title
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);


/***/ }),

/***/ 1952:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_modules_auth_register_RegisterFormView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5265);
/* harmony import */ var _hooks_useRegisterHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4327);
/* harmony import */ var _util_toastifyError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5464);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_modules_auth_register_RegisterFormView__WEBPACK_IMPORTED_MODULE_1__, _hooks_useRegisterHook__WEBPACK_IMPORTED_MODULE_2__, _util_toastifyError__WEBPACK_IMPORTED_MODULE_3__]);
([_components_modules_auth_register_RegisterFormView__WEBPACK_IMPORTED_MODULE_1__, _hooks_useRegisterHook__WEBPACK_IMPORTED_MODULE_2__, _util_toastifyError__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function RegisterForm() {
    const { onSubmitHandler , errorReset , errorMessage , errorStatus  } = (0,_hooks_useRegisterHook__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterHook */ .p)();
    if (errorStatus) {
        (0,_util_toastifyError__WEBPACK_IMPORTED_MODULE_3__/* .toastifyError */ .Y)(errorMessage, errorReset);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modules_auth_register_RegisterFormView__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        onSubmitHandler: onSubmitHandler
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5265:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_common_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5413);
/* harmony import */ var _components_common_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4521);
/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5290);
/* harmony import */ var _components_common_GoogleAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2328);
/* harmony import */ var _components_common_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3207);
/* harmony import */ var _components_common_ErrorMessageBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7585);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
/* harmony import */ var _validator_registerValidator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9140);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _validator_registerValidator__WEBPACK_IMPORTED_MODULE_9__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _validator_registerValidator__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function RegisterForm({ onSubmitHandler  }) {
    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({
        resolver: _validator_registerValidator__WEBPACK_IMPORTED_MODULE_9__/* .registerResolver */ .Y
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_Form__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                onSubmitHandler: handleSubmit(onSubmitHandler),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: `flex justify-center text-2xl font-medium`,
                        children: "회원가입"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `mt-5 flex w-full flex-col items-center`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Label__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                title: "성함",
                                htmlFor: "name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                id: "name",
                                placeholder: "성함",
                                ...register("name"),
                                error: !!errors.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_ErrorMessageBlock__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                message: errors.name?.message
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Label__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                title: "이메일",
                                htmlFor: "email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                id: "email",
                                placeholder: "이메일",
                                ...register("email"),
                                error: !!errors.email
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_ErrorMessageBlock__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                message: errors.email?.message
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Label__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                title: "비밀번호",
                                htmlFor: "password"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                id: "password",
                                type: "password",
                                placeholder: "비밀번호",
                                autoComplete: "off",
                                ...register("password"),
                                error: !!errors.password
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_ErrorMessageBlock__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                message: errors.password?.message
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Label__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                title: "비밀번호 확인",
                                htmlFor: "password1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                id: "password1",
                                type: "password",
                                placeholder: "비밀번호 확인",
                                autoComplete: "off",
                                ...register("password1"),
                                error: !!errors.password1
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_ErrorMessageBlock__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                message: errors.password1?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        type: "submit",
                        className: "w-full",
                        children: "회원가입"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_GoogleAuth__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4327:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useRegisterHook)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5766);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_slice_user_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1880);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_auth__WEBPACK_IMPORTED_MODULE_1__]);
_api_auth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const useRegisterHook = ()=>{
    const [errorStatus, setErrorStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const errorReset = ()=>{
        setErrorStatus(false);
        setErrorMessage("");
    };
    const onSubmitHandler = async (data)=>{
        try {
            const result = await _api_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"].register */ .Z.register(data);
            dispatch((0,_redux_slice_user_slice__WEBPACK_IMPORTED_MODULE_3__/* .setUser */ .av)(result));
            void router.replace("/?sign_up=true");
        } catch (error) {
            const axiosError = error;
            if (axiosError) {
                setErrorStatus(true);
                setErrorMessage("회원가입에 실패하셨습니다");
            }
        }
    };
    return {
        errorStatus,
        errorMessage,
        onSubmitHandler,
        errorReset
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_modules_auth_register_RegisterForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1952);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_modules_auth_register_RegisterForm__WEBPACK_IMPORTED_MODULE_1__]);
_components_modules_auth_register_RegisterForm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function Index() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "h-[100vh] w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modules_auth_register_RegisterForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
    });
}
Index.getInitialProps = async (ctx)=>{
    const pathname = ctx.pathname;
    return {
        pathname
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9140:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ registerResolver)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1656);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_1__]);
([zod__WEBPACK_IMPORTED_MODULE_0__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const registerValidator = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, {
        message: "이름은 필수입니다."
    }),
    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, {
        message: "이메일은 필수입니다."
    }).email({
        message: "이메일 형식이 아닙니다"
    }),
    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, {
        message: "패스워드는 필수입니다."
    }),
    password1: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, {
        message: "패스워드는 필수입니다."
    })
}).refine((data)=>data.password === data.password1, {
    path: [
        "password1"
    ],
    message: "패스워드가 일치하지않습니다"
});
const registerResolver = (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_1__.zodResolver)(registerValidator);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6999:
/***/ ((module) => {

module.exports = require("@react-oauth/google");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 4161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 8936:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 1656:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/zod");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,675,222,766,162], () => (__webpack_exec__(1740)));
module.exports = __webpack_exports__;

})();