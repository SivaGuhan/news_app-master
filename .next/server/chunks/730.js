"use strict";
exports.id = 730;
exports.ids = [730];
exports.modules = {

/***/ 2730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ Toolbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/images/index.jpeg
/* harmony default export */ const components_images = ({"src":"/_next/static/media/index.d30b1bb7.jpeg","height":225,"width":225,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAL4F/wD/xAAjEAAAAwYHAAAAAAAAAAAAAAABAwQAAhESExUiJDEyM4GS/9oACAEBAAE/AM7cOQ4FTqrTHREibzt7i3//xAAWEQADAAAAAAAAAAAAAAAAAAAAAUH/2gAIAQIBAT8AVP/EABcRAAMBAAAAAAAAAAAAAAAAAAACQnH/2gAIAQMBAT8AecP/2Q==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/images/news2.gif
/* harmony default export */ const news2 = ({"src":"/_next/static/media/news2.0512a869.gif","height":188,"width":900});
// EXTERNAL MODULE: external "react-icons/sl"
var sl_ = __webpack_require__(5065);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/toolbar.js








const Toolbar = ()=>{
    const { data: session  } = (0,react_.useSession)();
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " flex flex-row ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[120px] h-[120px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: components_images
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[520px] h-[100px] ml-[34rem]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: news2
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex bg-red-600 text-xl",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>router.push("/"),
                        className: "p-8 font-verdana cursor-pointer bold text-white bg-black hover:bg-gray-800",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(sl_.SlHome, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>router.push("/headlines/business"),
                        className: "p-8 font-sans cursor-pointer bold text-white hover:bg-red-500",
                        children: "Business"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>router.push("/headlines/entertainment"),
                        className: "p-8 font-sans cursor-pointer bold text-white hover:bg-red-500",
                        children: "Entertainment"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>router.push("/headlines/general"),
                        className: "p-8 font-sans cursor-pointer bold text-white hover:bg-red-500",
                        children: "General"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>router.push("/headlines/health"),
                        className: "p-8 font-sans cursor-pointer bold text-white hover:bg-red-500",
                        children: "Health"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>router.push("/headlines/science"),
                        className: "p-8 font-sans cursor-pointer bold text-white hover:bg-red-500",
                        children: "Science"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>router.push("/headlines/sports"),
                        className: "p-8 font-sans cursor-pointer bold text-white hover:bg-red-500",
                        children: "Sports"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>router.push("/headlines/technology"),
                        className: "p-8 font-sans cursor-pointer bold text-white hover:bg-red-500",
                        children: "Technology"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>router.push("/bookmark"),
                        className: "p-8 font-sans cursor-pointer bold text-white hover:bg-red-500",
                        children: "Bookmarks"
                    }),
                    !session && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: (e)=>{
                            e.preventDefault();
                            (0,react_.signIn)();
                        },
                        className: "p-8 font-sans cursor-pointer bold text-white hover:bg-red-500",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/api/auth/signin",
                            children: "SignIn"
                        })
                    }),
                    session && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: (e)=>{
                                e.preventDefault();
                                (0,react_.signOut)();
                            },
                            className: "p-8 font-sans cursor-pointer bold text-white hover:bg-red-500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/api/auth/signout",
                                children: "SignOut"
                            })
                        })
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;