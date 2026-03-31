module.exports = [
"[project]/app/(pages)/services/software-engineering/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SoftwareEngineeringPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/* ══════════════════════════════════════════════════════════
   ANIMATION PRIMITIVES
══════════════════════════════════════════════════════════ */ function FadeUp({ children, delay = 0, className = "" }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: className,
        initial: {
            y: 32
        },
        animate: inView ? {
            y: 0
        } : {
            y: 32
        },
        transition: {
            duration: 0.6,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function SlideIn({ children, delay = 0, from = "left" }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-40px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            x: from === "left" ? -40 : 40
        },
        animate: inView ? {
            x: 0
        } : {
            x: from === "left" ? -40 : 40
        },
        transition: {
            duration: 0.65,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   ANIMATED COUNTER
══════════════════════════════════════════════════════════ */ function Counter({ target, suffix = "", prefix = "" }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    const [val, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!inView) return;
        const steps = 60, dur = 2000;
        let s = 0;
        const inc = target / steps;
        const id = setInterval(()=>{
            s += inc;
            if (s >= target) {
                setVal(target);
                clearInterval(id);
            } else setVal(Math.floor(s));
        }, dur / steps);
        return ()=>clearInterval(id);
    }, [
        inView,
        target
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: [
            prefix,
            val,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
}
/* ══════════════════════════════════════════════════════════
   CODE EDITOR VIZ — dark theme, clickable tabs, animated typing
══════════════════════════════════════════════════════════ */ const EDITOR_TABS = [
    {
        name: "deploy.ts",
        dot: "#4ADE80",
        accentColor: "#A78BFA",
        lines: [
            {
                tokens: [
                    {
                        t: "async ",
                        c: "#C792EA"
                    },
                    {
                        t: "function ",
                        c: "#82AAFF"
                    },
                    {
                        t: "deployService",
                        c: "#FFCB6B"
                    },
                    {
                        t: "(",
                        c: "#89DDFF"
                    },
                    {
                        t: "config",
                        c: "#F78C6C"
                    },
                    {
                        t: ": ",
                        c: "#89DDFF"
                    },
                    {
                        t: "Config",
                        c: "#FFCB6B"
                    },
                    {
                        t: ") {",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "  const ",
                        c: "#C792EA"
                    },
                    {
                        t: "pipeline ",
                        c: "#EEFFFF"
                    },
                    {
                        t: "= ",
                        c: "#89DDFF"
                    },
                    {
                        t: "await ",
                        c: "#C792EA"
                    },
                    {
                        t: "CI",
                        c: "#82AAFF"
                    },
                    {
                        t: ".build(config);",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "  await ",
                        c: "#C792EA"
                    },
                    {
                        t: "pipeline",
                        c: "#EEFFFF"
                    },
                    {
                        t: ".runTests(",
                        c: "#89DDFF"
                    },
                    {
                        t: "{ coverage: ",
                        c: "#89DDFF"
                    },
                    {
                        t: "true",
                        c: "#F78C6C"
                    },
                    {
                        t: " });",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "  if ",
                        c: "#C792EA"
                    },
                    {
                        t: "(pipeline.coverage ",
                        c: "#EEFFFF"
                    },
                    {
                        t: ">= ",
                        c: "#89DDFF"
                    },
                    {
                        t: "97",
                        c: "#F78C6C"
                    },
                    {
                        t: ") {",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "    await ",
                        c: "#C792EA"
                    },
                    {
                        t: "k8s",
                        c: "#82AAFF"
                    },
                    {
                        t: ".deploy(pipeline);",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "    logger",
                        c: "#82AAFF"
                    },
                    {
                        t: ".info(",
                        c: "#89DDFF"
                    },
                    {
                        t: "`✅ Deployed v",
                        c: "#C3E88D"
                    },
                    {
                        t: "${",
                        c: "#89DDFF"
                    },
                    {
                        t: "config.version",
                        c: "#EEFFFF"
                    },
                    {
                        t: "}`",
                        c: "#C3E88D"
                    },
                    {
                        t: ");",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "  } ",
                        c: "#89DDFF"
                    },
                    {
                        t: "else ",
                        c: "#C792EA"
                    },
                    {
                        t: "{",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "    throw ",
                        c: "#C792EA"
                    },
                    {
                        t: "new ",
                        c: "#C792EA"
                    },
                    {
                        t: "Error",
                        c: "#FFCB6B"
                    },
                    {
                        t: "(",
                        c: "#89DDFF"
                    },
                    {
                        t: "`Coverage below threshold`",
                        c: "#C3E88D"
                    },
                    {
                        t: ");",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "  }",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "}",
                        c: "#89DDFF"
                    }
                ]
            }
        ]
    },
    {
        name: "api.ts",
        dot: "#60A5FA",
        accentColor: "#60A5FA",
        lines: [
            {
                tokens: [
                    {
                        t: "import ",
                        c: "#C792EA"
                    },
                    {
                        t: "{ Router } ",
                        c: "#EEFFFF"
                    },
                    {
                        t: "from ",
                        c: "#C792EA"
                    },
                    {
                        t: "'express';",
                        c: "#C3E88D"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "import ",
                        c: "#C792EA"
                    },
                    {
                        t: "{ authenticate } ",
                        c: "#EEFFFF"
                    },
                    {
                        t: "from ",
                        c: "#C792EA"
                    },
                    {
                        t: "'./middleware';",
                        c: "#C3E88D"
                    }
                ]
            },
            {
                tokens: []
            },
            {
                tokens: [
                    {
                        t: "const ",
                        c: "#C792EA"
                    },
                    {
                        t: "router ",
                        c: "#EEFFFF"
                    },
                    {
                        t: "= ",
                        c: "#89DDFF"
                    },
                    {
                        t: "Router",
                        c: "#FFCB6B"
                    },
                    {
                        t: "();",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: []
            },
            {
                tokens: [
                    {
                        t: "router",
                        c: "#82AAFF"
                    },
                    {
                        t: ".get(",
                        c: "#89DDFF"
                    },
                    {
                        t: "'/users/:id'",
                        c: "#C3E88D"
                    },
                    {
                        t: ", authenticate,",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "  async ",
                        c: "#C792EA"
                    },
                    {
                        t: "(req, res) ",
                        c: "#EEFFFF"
                    },
                    {
                        t: "=> {",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "    const ",
                        c: "#C792EA"
                    },
                    {
                        t: "user ",
                        c: "#EEFFFF"
                    },
                    {
                        t: "= ",
                        c: "#89DDFF"
                    },
                    {
                        t: "await ",
                        c: "#C792EA"
                    },
                    {
                        t: "User",
                        c: "#FFCB6B"
                    },
                    {
                        t: ".findById(req.params.id);",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "    res",
                        c: "#82AAFF"
                    },
                    {
                        t: ".json(",
                        c: "#89DDFF"
                    },
                    {
                        t: "{ data: user, status: ",
                        c: "#89DDFF"
                    },
                    {
                        t: "200 ",
                        c: "#F78C6C"
                    },
                    {
                        t: "});",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "});",
                        c: "#89DDFF"
                    }
                ]
            }
        ]
    },
    {
        name: "schema.ts",
        dot: "#A78BFA",
        accentColor: "#A78BFA",
        lines: [
            {
                tokens: [
                    {
                        t: "import ",
                        c: "#C792EA"
                    },
                    {
                        t: "{ z } ",
                        c: "#EEFFFF"
                    },
                    {
                        t: "from ",
                        c: "#C792EA"
                    },
                    {
                        t: "'zod';",
                        c: "#C3E88D"
                    }
                ]
            },
            {
                tokens: []
            },
            {
                tokens: [
                    {
                        t: "export ",
                        c: "#C792EA"
                    },
                    {
                        t: "const ",
                        c: "#C792EA"
                    },
                    {
                        t: "UserSchema ",
                        c: "#FFCB6B"
                    },
                    {
                        t: "= z",
                        c: "#EEFFFF"
                    },
                    {
                        t: ".object({",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "  id: ",
                        c: "#EEFFFF"
                    },
                    {
                        t: "z",
                        c: "#EEFFFF"
                    },
                    {
                        t: ".string()",
                        c: "#82AAFF"
                    },
                    {
                        t: ".uuid(),",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "  name: ",
                        c: "#EEFFFF"
                    },
                    {
                        t: "z",
                        c: "#EEFFFF"
                    },
                    {
                        t: ".string()",
                        c: "#82AAFF"
                    },
                    {
                        t: ".min(",
                        c: "#89DDFF"
                    },
                    {
                        t: "2",
                        c: "#F78C6C"
                    },
                    {
                        t: "),",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "  email: ",
                        c: "#EEFFFF"
                    },
                    {
                        t: "z",
                        c: "#EEFFFF"
                    },
                    {
                        t: ".string()",
                        c: "#82AAFF"
                    },
                    {
                        t: ".email(),",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "  role: ",
                        c: "#EEFFFF"
                    },
                    {
                        t: "z",
                        c: "#EEFFFF"
                    },
                    {
                        t: ".enum([",
                        c: "#89DDFF"
                    },
                    {
                        t: "'admin'",
                        c: "#C3E88D"
                    },
                    {
                        t: ", ",
                        c: "#89DDFF"
                    },
                    {
                        t: "'user'",
                        c: "#C3E88D"
                    },
                    {
                        t: "]),",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "  createdAt: ",
                        c: "#EEFFFF"
                    },
                    {
                        t: "z",
                        c: "#EEFFFF"
                    },
                    {
                        t: ".date(),",
                        c: "#82AAFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "});",
                        c: "#89DDFF"
                    }
                ]
            },
            {
                tokens: [
                    {
                        t: "export ",
                        c: "#C792EA"
                    },
                    {
                        t: "type ",
                        c: "#C792EA"
                    },
                    {
                        t: "User ",
                        c: "#FFCB6B"
                    },
                    {
                        t: "= z",
                        c: "#EEFFFF"
                    },
                    {
                        t: ".infer<",
                        c: "#89DDFF"
                    },
                    {
                        t: "typeof ",
                        c: "#C792EA"
                    },
                    {
                        t: "UserSchema>;",
                        c: "#89DDFF"
                    }
                ]
            }
        ]
    }
];
function CodeEditorViz() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeLine, setActiveLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [charCount, setCharCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cursorVisible, setCursorVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const currentLines = EDITOR_TABS[activeTab].lines;
    const accentColor = EDITOR_TABS[activeTab].accentColor;
    // Reset animation when tab changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setActiveLine(0);
        setCharCount(0);
    }, [
        activeTab
    ]);
    // Cursor blink
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = setInterval(()=>setCursorVisible((v)=>!v), 530);
        return ()=>clearInterval(id);
    }, []);
    // Typing animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const currentLine = currentLines[activeLine];
        const fullText = currentLine.tokens.map((t)=>t.t).join("");
        if (charCount < fullText.length) {
            const id = setTimeout(()=>setCharCount((c)=>c + 1), 36);
            return ()=>clearTimeout(id);
        } else {
            const id = setTimeout(()=>{
                const next = (activeLine + 1) % currentLines.length;
                setActiveLine(next);
                setCharCount(0);
            }, 480);
            return ()=>clearTimeout(id);
        }
    }, [
        activeLine,
        charCount,
        currentLines
    ]);
    function renderTokens(lineIdx) {
        const tokens = currentLines[lineIdx].tokens;
        const fullText = tokens.map((t)=>t.t).join("");
        const slice = fullText.slice(0, charCount);
        let pos = 0;
        return tokens.map((tok, ti)=>{
            const start = pos;
            pos += tok.t.length;
            const visible = slice.slice(start, pos);
            if (!visible) return null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: tok.c
                },
                children: visible
            }, ti, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 166,
                columnNumber: 14
            }, this);
        });
    }
    const lineNumbers = Array.from({
        length: currentLines.length
    }, (_, i)=>i + 1);
    const TAB_HEADER_HEIGHT = 44;
    const LINE_H = 21;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#0F172A",
            borderRadius: 12,
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
            fontSize: 11.5,
            lineHeight: `${LINE_H}px`,
            position: "relative",
            overflow: "hidden",
            minHeight: 252
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: "30%",
                    width: 200,
                    height: 100,
                    background: `radial-gradient(ellipse, ${accentColor}18 0%, transparent 70%)`,
                    pointerEvents: "none",
                    transition: "background 0.4s"
                }
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: 0,
                    right: "10%",
                    width: 180,
                    height: 90,
                    background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 0,
                    paddingLeft: 10,
                    paddingTop: 6,
                    borderBottom: "1.5px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.03)",
                    height: TAB_HEADER_HEIGHT
                },
                children: EDITOR_TABS.map((tab, ti)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(ti),
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                            padding: "5px 14px 6px",
                            borderRadius: "6px 6px 0 0",
                            background: ti === activeTab ? "rgba(255,255,255,0.06)" : "transparent",
                            border: "none",
                            borderTop: ti === activeTab ? `2px solid ${tab.accentColor}` : "2px solid transparent",
                            borderBottom: ti === activeTab ? `1.5px solid #0F172A` : "none",
                            cursor: "pointer",
                            transition: "background 0.18s, border-color 0.18s",
                            marginBottom: ti === activeTab ? "-1.5px" : 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 5,
                                    height: 5,
                                    borderRadius: "50%",
                                    background: tab.dot,
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 10.5,
                                    color: ti === activeTab ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.32)",
                                    fontWeight: ti === activeTab ? 700 : 400,
                                    letterSpacing: "0.01em",
                                    transition: "color 0.18s"
                                },
                                children: tab.name
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, tab.name, true, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    paddingTop: 6,
                    paddingBottom: 4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            minWidth: 34,
                            padding: "0 6px 0 10px",
                            textAlign: "right",
                            userSelect: "none",
                            flexShrink: 0
                        },
                        children: lineNumbers.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: i === activeLine ? accentColor : "rgba(255,255,255,0.2)",
                                    fontSize: 10,
                                    lineHeight: `${LINE_H}px`,
                                    fontWeight: i === activeLine ? 700 : 400,
                                    transition: "color 0.2s"
                                },
                                children: n
                            }, n, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: `${TAB_HEADER_HEIGHT + 6 + activeLine * LINE_H}px`,
                            height: LINE_H,
                            background: `${accentColor}12`,
                            borderLeft: `2px solid ${accentColor}55`,
                            pointerEvents: "none",
                            transition: "top 0.12s ease, border-color 0.4s, background 0.4s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            paddingRight: 12
                        },
                        children: currentLines.map((line, li)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    whiteSpace: "pre",
                                    lineHeight: `${LINE_H}px`,
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: li < activeLine || li === activeLine && charCount === line.tokens.map((t)=>t.t).join("").length ? line.tokens.map((tok, ti)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: tok.c
                                        },
                                        children: tok.t
                                    }, ti, false, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 48
                                    }, this)) : li === activeLine ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        renderTokens(li),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: "inline-block",
                                                width: 1.5,
                                                height: 13,
                                                background: cursorVisible ? accentColor : "transparent",
                                                marginLeft: 1,
                                                verticalAlign: "middle",
                                                boxShadow: cursorVisible ? `0 0 5px ${accentColor}` : "none",
                                                transition: "background 0.05s"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "rgba(255,255,255,0.07)"
                                    },
                                    children: line.tokens.map((t)=>t.t).join("")
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 272,
                                    columnNumber: 21
                                }, this)
                            }, li, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px 12px 7px",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    background: "rgba(255,255,255,0.02)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            scale: [
                                                1,
                                                1.4,
                                                1
                                            ]
                                        },
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity
                                        },
                                        style: {
                                            width: 5,
                                            height: 5,
                                            borderRadius: "50%",
                                            background: "#4ADE80",
                                            flexShrink: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 9.5,
                                            color: "rgba(255,255,255,0.45)",
                                            fontWeight: 600
                                        },
                                        children: "TypeScript"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 9.5,
                                    color: "rgba(255,255,255,0.3)"
                                },
                                children: [
                                    "Ln ",
                                    activeLine + 1,
                                    ", Col ",
                                    charCount + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 9.5,
                                    color: "rgba(74,222,128,0.85)",
                                    fontWeight: 700
                                },
                                children: "✓ 0 errors"
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 9.5,
                                    color: "rgba(255,255,255,0.25)"
                                },
                                children: "UTF-8"
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   TICKER BANNER
══════════════════════════════════════════════════════════ */ const TICKER_ITEMS = [
    "⚡ 150+ production apps shipped globally",
    "🔧 Full-stack engineering from MVP to enterprise",
    "☁️ AWS, GCP & Azure certified architects",
    "🧪 97%+ automated test coverage standard",
    "🚀 Production-ready in as little as 6 weeks",
    "🔐 SOC 2 & ISO 27001 compliant builds",
    "📦 Microservices, APIs & cloud-native architecture",
    "🛡️ Full IP ownership — no lock-in, ever"
];
function TickerBanner() {
    const doubled = [
        ...TICKER_ITEMS,
        ...TICKER_ITEMS
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "linear-gradient(90deg, #0D1B3E 0%, #1a3068 50%, #0D1B3E 100%)",
            overflow: "hidden",
            padding: "12px 0",
            borderBottom: "1px solid rgba(37,99,235,0.2)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: {
                x: [
                    "0%",
                    "-50%"
                ]
            },
            transition: {
                duration: 28,
                repeat: Infinity,
                ease: "linear"
            },
            style: {
                display: "flex",
                gap: 0,
                width: "max-content"
            },
            children: doubled.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        paddingRight: 56,
                        whiteSpace: "nowrap"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 12,
                                fontWeight: 600,
                                color: "rgba(255,255,255,0.75)",
                                letterSpacing: "0.01em"
                            },
                            children: item
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 335,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: 4,
                                height: 4,
                                borderRadius: "50%",
                                background: "rgba(96,165,250,0.5)",
                                flexShrink: 0,
                                display: "inline-block"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 336,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 331,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 325,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 320,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   ROI CALCULATOR (Software Engineering)
══════════════════════════════════════════════════════════ */ function ROICalculator() {
    const [devCount, setDevCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3);
    const [projectMonths, setProjectMonths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(6);
    const [avgDevSalary, setAvgDevSalary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(75000);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-60px"
    });
    const inHouseCost = devCount * (avgDevSalary / 12) * projectMonths * 1.4; // 40% overhead
    const keysolCost = devCount * 8500 * projectMonths; // avg ~£8,500/dev/month
    const savings = Math.max(0, inHouseCost - keysolCost);
    const roi = savings > 0 ? Math.round(savings / keysolCost * 100) : 0;
    const fasterDelivery = Math.round(projectMonths * 0.35);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        style: {
            padding: "108px 48px",
            background: "linear-gradient(160deg, #F0F4FF 0%, #F8FAFF 50%, #EEF2FF 100%)",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)",
                    backgroundSize: "32px 32px"
                }
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: -200,
                    right: -100,
                    width: 600,
                    height: 600,
                    background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 60%)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: -100,
                    left: -100,
                    width: 500,
                    height: 500,
                    background: "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 60%)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1160,
                    margin: "0 auto",
                    position: "relative"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: 40
                    },
                    animate: inView ? {
                        y: 0
                    } : {
                        y: 40
                    },
                    transition: {
                        duration: 0.65,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: "center",
                                marginBottom: 64
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 8,
                                        background: "rgba(37,99,235,0.08)",
                                        border: "1px solid rgba(37,99,235,0.2)",
                                        borderRadius: 100,
                                        padding: "7px 20px",
                                        marginBottom: 24
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                scale: [
                                                    1,
                                                    1.4,
                                                    1
                                                ]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: Infinity
                                            },
                                            style: {
                                                width: 6,
                                                height: 6,
                                                borderRadius: "50%",
                                                background: "#2563EB"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 386,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 11,
                                                fontWeight: 700,
                                                color: "#2563EB",
                                                letterSpacing: "0.14em",
                                                textTransform: "uppercase"
                                            },
                                            children: "Cost Calculator"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: "clamp(32px,3.5vw,52px)",
                                        fontWeight: 900,
                                        color: "#0F172A",
                                        letterSpacing: "-0.03em",
                                        lineHeight: 1.1,
                                        marginBottom: 16
                                    },
                                    children: [
                                        "In-house vs. KeySol:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                backgroundPosition: [
                                                    "0% center",
                                                    "200% center",
                                                    "0% center"
                                                ]
                                            },
                                            transition: {
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            style: {
                                                background: "linear-gradient(90deg, #2563EB, #7C3AED, #059669, #2563EB)",
                                                backgroundSize: "300% 100%",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                display: "inline"
                                            },
                                            children: "see the difference."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 16,
                                        color: "rgba(15,23,42,0.5)",
                                        maxWidth: 480,
                                        margin: "0 auto",
                                        lineHeight: 1.75
                                    },
                                    children: "Adjust the sliders to compare building in-house versus partnering with KeySol."
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 380,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: 48,
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 36
                                    },
                                    children: [
                                        {
                                            label: "Number of developers needed",
                                            value: devCount,
                                            min: 1,
                                            max: 20,
                                            step: 1,
                                            set: setDevCount,
                                            suffix: "",
                                            color: "#2563EB"
                                        },
                                        {
                                            label: "Project duration (months)",
                                            value: projectMonths,
                                            min: 1,
                                            max: 24,
                                            step: 1,
                                            set: setProjectMonths,
                                            suffix: " mo",
                                            color: "#7C3AED"
                                        },
                                        {
                                            label: "Average developer salary (£/year)",
                                            value: avgDevSalary,
                                            min: 40000,
                                            max: 150000,
                                            step: 5000,
                                            set: setAvgDevSalary,
                                            suffix: "",
                                            prefix: "£",
                                            color: "#059669"
                                        }
                                    ].map(({ label, value, min, max, step, set, suffix, prefix, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        marginBottom: 10
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 13,
                                                                fontWeight: 600,
                                                                color: "rgba(15,23,42,0.65)"
                                                            },
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 15,
                                                                fontWeight: 800,
                                                                color,
                                                                letterSpacing: "-0.02em"
                                                            },
                                                            children: [
                                                                prefix,
                                                                value.toLocaleString(),
                                                                suffix
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "relative",
                                                        height: 6,
                                                        borderRadius: 6,
                                                        background: "rgba(37,99,235,0.1)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: "absolute",
                                                                left: 0,
                                                                top: 0,
                                                                height: "100%",
                                                                width: `${(value - min) / (max - min) * 100}%`,
                                                                background: `linear-gradient(90deg, ${color}66, ${color})`,
                                                                borderRadius: 6,
                                                                transition: "width 0.1s"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "range",
                                                            min: min,
                                                            max: max,
                                                            step: step,
                                                            value: value,
                                                            onChange: (e)=>set(Number(e.target.value)),
                                                            style: {
                                                                position: "absolute",
                                                                inset: 0,
                                                                width: "100%",
                                                                height: "100%",
                                                                opacity: 0,
                                                                cursor: "pointer",
                                                                margin: 0
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 437,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: "absolute",
                                                                top: "50%",
                                                                left: `calc(${(value - min) / (max - min) * 100}% - 10px)`,
                                                                transform: "translateY(-50%)",
                                                                width: 20,
                                                                height: 20,
                                                                borderRadius: "50%",
                                                                background: color,
                                                                boxShadow: `0 0 12px ${color}60`,
                                                                border: "2.5px solid #fff",
                                                                pointerEvents: "none"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 423,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 417,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "rgba(255,255,255,0.95)",
                                        border: "1px solid rgba(37,99,235,0.12)",
                                        borderRadius: 28,
                                        padding: "40px 36px",
                                        backdropFilter: "blur(20px)",
                                        boxShadow: "0 24px 64px rgba(37,99,235,0.1), 0 4px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: "center",
                                                marginBottom: 36
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        color: "rgba(15,23,42,0.4)",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.12em",
                                                        marginBottom: 12
                                                    },
                                                    children: "Estimated cost saving"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        scale: 0.92
                                                    },
                                                    animate: {
                                                        scale: 1
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 20
                                                    },
                                                    style: {
                                                        fontSize: "clamp(42px,4.5vw,64px)",
                                                        fontWeight: 900,
                                                        background: "linear-gradient(135deg, #059669, #047857)",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent",
                                                        letterSpacing: "-0.04em",
                                                        lineHeight: 1
                                                    },
                                                    children: [
                                                        "£",
                                                        Math.round(savings / 1000),
                                                        "k"
                                                    ]
                                                }, Math.round(savings / 1000), true, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 13,
                                                        color: "rgba(15,23,42,0.4)",
                                                        marginTop: 8,
                                                        fontWeight: 500
                                                    },
                                                    children: "vs. hiring in-house"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 462,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                height: 1,
                                                background: "rgba(37,99,235,0.08)",
                                                marginBottom: 24
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 481,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 14,
                                                marginBottom: 32
                                            },
                                            children: [
                                                {
                                                    label: "In-house total cost (incl. overheads)",
                                                    value: `£${Math.round(inHouseCost / 1000)}k`,
                                                    color: "#DC2626"
                                                },
                                                {
                                                    label: "KeySol engagement cost",
                                                    value: `£${Math.round(keysolCost / 1000)}k`,
                                                    color: "#2563EB"
                                                },
                                                {
                                                    label: "Time saved vs. in-house hiring",
                                                    value: `~${fasterDelivery} mo`,
                                                    color: "#7C3AED"
                                                },
                                                {
                                                    label: "Estimated cost ROI",
                                                    value: `${roi}%`,
                                                    color: "#059669"
                                                }
                                            ].map(({ label, value, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        padding: "10px 14px",
                                                        borderRadius: 10,
                                                        background: `${color}08`,
                                                        border: `1px solid ${color}18`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 13,
                                                                color: "rgba(15,23,42,0.6)",
                                                                fontWeight: 500
                                                            },
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 15,
                                                                fontWeight: 800,
                                                                color
                                                            },
                                                            children: value
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, label, true, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 483,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact/",
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: 10,
                                                background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                                                color: "#fff",
                                                borderRadius: 14,
                                                padding: "14px 24px",
                                                fontSize: 14,
                                                fontWeight: 700,
                                                textDecoration: "none",
                                                boxShadow: "0 8px 28px rgba(37,99,235,0.35)",
                                                transition: "transform 0.15s, box-shadow 0.15s"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = "translateY(-2px)";
                                                e.currentTarget.style.boxShadow = "0 12px 36px rgba(37,99,235,0.45)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = "none";
                                                e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,99,235,0.35)";
                                            },
                                            children: [
                                                "Get your personalised cost estimate",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "13",
                                                    height: "13",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "white",
                                                    strokeWidth: "2.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "5",
                                                            y1: "12",
                                                            x2: "19",
                                                            y2: "12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 513,
                                                            columnNumber: 155
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "12 5 19 12 12 19"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 513,
                                                            columnNumber: 193
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 501,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 11,
                                                color: "rgba(15,23,42,0.35)",
                                                textAlign: "center",
                                                marginTop: 14,
                                                lineHeight: 1.6
                                            },
                                            children: "Based on typical UK market rates and 150+ project engagements. Actual results vary."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 515,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 455,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 416,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 361,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   TECH STACK MARQUEE
══════════════════════════════════════════════════════════ */ const TECH_STACK = [
    {
        name: "Next.js",
        color: "#000000"
    },
    {
        name: "React",
        color: "#61DAFB"
    },
    {
        name: "TypeScript",
        color: "#3178C6"
    },
    {
        name: "Node.js",
        color: "#339933"
    },
    {
        name: "Python",
        color: "#3776AB"
    },
    {
        name: "PostgreSQL",
        color: "#4169E1"
    },
    {
        name: "AWS",
        color: "#FF9900"
    },
    {
        name: "Kubernetes",
        color: "#326CE5"
    },
    {
        name: "Docker",
        color: "#2496ED"
    },
    {
        name: "GraphQL",
        color: "#E10098"
    },
    {
        name: "Redis",
        color: "#DC382D"
    },
    {
        name: "Terraform",
        color: "#7B42BC"
    }
];
function TechStackStrip() {
    const doubled = [
        ...TECH_STACK,
        ...TECH_STACK
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "56px 0",
            background: "#fff",
            overflow: "hidden",
            borderTop: "1px solid rgba(37,99,235,0.06)",
            borderBottom: "1px solid rgba(37,99,235,0.06)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginBottom: 36
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: 11.5,
                        fontWeight: 700,
                        color: "rgba(15,23,42,0.35)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase"
                    },
                    children: "Technologies & Frameworks We Master"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 549,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 548,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    x: [
                        "0%",
                        "-50%"
                    ]
                },
                transition: {
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear"
                },
                style: {
                    display: "flex",
                    gap: 0,
                    width: "max-content"
                },
                children: doubled.map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "10px 28px",
                            marginRight: 8,
                            borderRadius: 12,
                            background: "rgba(248,250,255,0.8)",
                            border: "1.5px solid rgba(37,99,235,0.08)",
                            whiteSpace: "nowrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: tech.color,
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 565,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: "#374151",
                                    letterSpacing: "-0.01em"
                                },
                                children: tech.name
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 566,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 559,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 553,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 547,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   RESULTS / TESTIMONIALS STRIP
══════════════════════════════════════════════════════════ */ const clientResults = [
    {
        metric: "6×",
        label: "faster time-to-market",
        quote: "KeySol took our concept from design to live product in 9 weeks. We'd been quoted 6 months by two other agencies.",
        name: "CTO, Series A SaaS Startup",
        color: "#2563EB"
    },
    {
        metric: "97.3%",
        label: "automated test coverage",
        quote: "Their code quality is exceptional. Zero regressions across 18 months of feature releases. That's rare in this industry.",
        name: "VP Engineering, FinTech Platform",
        color: "#7C3AED"
    },
    {
        metric: "40%",
        label: "lower build cost vs agency",
        quote: "We saved £280k compared to the London agency quote — and got a better product. KeySol is genuinely world-class.",
        name: "COO, E-commerce Scale-up",
        color: "#059669"
    },
    {
        metric: "99.9%",
        label: "uptime SLA maintained",
        quote: "Our platform processes £4M/day and hasn't had an outage since KeySol rebuilt the infrastructure 14 months ago.",
        name: "Infrastructure Lead, Payments Co.",
        color: "#D97706"
    }
];
function ResultsStrip() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-60px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        style: {
            padding: "108px 48px",
            background: "#fff"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1240,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: 32
                    },
                    animate: inView ? {
                        y: 0
                    } : {
                        y: 32
                    },
                    transition: {
                        duration: 0.6,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    },
                    style: {
                        textAlign: "center",
                        marginBottom: 64
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 7,
                                background: "#F0FDF4",
                                borderRadius: 100,
                                padding: "5px 16px",
                                marginBottom: 18,
                                border: "1px solid rgba(5,150,105,0.2)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        background: "#059669"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 621,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 11,
                                        fontWeight: 700,
                                        color: "#059669",
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase"
                                    },
                                    children: "Client Results"
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 622,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 616,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: "clamp(30px,3.2vw,46px)",
                                fontWeight: 900,
                                color: "#0F172A",
                                letterSpacing: "-0.025em",
                                lineHeight: 1.15
                            },
                            children: "Real outcomes from real engagements"
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 624,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 610,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(4,1fr)",
                        gap: 24
                    },
                    children: clientResults.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                y: 24
                            },
                            animate: inView ? {
                                y: 0
                            } : {
                                y: 24
                            },
                            transition: {
                                duration: 0.55,
                                delay: 0.1 * i,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            style: {
                                padding: "32px 28px",
                                borderRadius: 22,
                                border: "1.5px solid rgba(37,99,235,0.08)",
                                background: "#FAFBFF",
                                display: "flex",
                                flexDirection: "column",
                                gap: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "clamp(36px,3vw,52px)",
                                                fontWeight: 900,
                                                color: r.color,
                                                letterSpacing: "-0.04em",
                                                lineHeight: 1
                                            },
                                            children: r.metric
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 644,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 12,
                                                color: "rgba(15,23,42,0.45)",
                                                fontWeight: 600,
                                                marginTop: 4,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.06em"
                                            },
                                            children: r.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 645,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 643,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: 1.5,
                                        background: `linear-gradient(90deg, ${r.color}40, transparent)`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 647,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 13,
                                        color: "#374151",
                                        lineHeight: 1.75,
                                        flex: 1,
                                        fontStyle: "italic"
                                    },
                                    children: [
                                        "“",
                                        r.quote,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 648,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 32,
                                                height: 32,
                                                borderRadius: "50%",
                                                background: `linear-gradient(135deg, ${r.color}40, ${r.color}20)`,
                                                border: `1.5px solid ${r.color}30`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: 14
                                            },
                                            children: [
                                                "💻",
                                                "🏦",
                                                "🛍️",
                                                "⚡"
                                            ][i]
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 652,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 11.5,
                                                fontWeight: 700,
                                                color: "#6B7280"
                                            },
                                            children: r.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 659,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 651,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 631,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 629,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 609,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 608,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */ const capabilities = [
    {
        gradient: "linear-gradient(135deg,#2563EB,#1D4ED8)",
        glow: "rgba(37,99,235,0.3)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "16 18 22 12 16 6"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 676,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "8 6 2 12 8 18"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 676,
                    columnNumber: 186
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 676,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Custom Web Applications",
        desc: "Scalable, high-performance web apps built with React, Next.js, and TypeScript — architected for enterprise scale from day one.",
        tag: "Most Popular"
    },
    {
        gradient: "linear-gradient(135deg,#7C3AED,#6D28D9)",
        glow: "rgba(124,58,237,0.3)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "5",
                    y: "2",
                    width: "14",
                    height: "20",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 684,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "18",
                    x2: "12.01",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 684,
                    columnNumber: 205
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 684,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Mobile App Development",
        desc: "Native-performance iOS & Android apps with React Native or Flutter — single codebase, rapid iteration, app-store ready.",
        tag: ""
    },
    {
        gradient: "linear-gradient(135deg,#0891B2,#0E7490)",
        glow: "rgba(8,145,178,0.3)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 8h1a4 4 0 0 1 0 8h-1"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 692,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 692,
                    columnNumber: 185
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "1",
                    x2: "6",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 692,
                    columnNumber: 239
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "10",
                    y1: "1",
                    x2: "10",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 692,
                    columnNumber: 274
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "14",
                    y1: "1",
                    x2: "14",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 692,
                    columnNumber: 311
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 692,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "API & Microservices",
        desc: "RESTful and GraphQL APIs, event-driven microservices, and distributed backends engineered to handle millions of requests with zero downtime.",
        tag: ""
    },
    {
        gradient: "linear-gradient(135deg,#059669,#047857)",
        glow: "rgba(5,150,105,0.3)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "12",
                    cy: "5",
                    rx: "9",
                    ry: "3"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 700,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 700,
                    columnNumber: 188
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 700,
                    columnNumber: 233
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 700,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Cloud Infrastructure & DevOps",
        desc: "AWS, GCP, and Azure architecture, Kubernetes orchestration, CI/CD pipelines, and infrastructure-as-code for production-grade deployments.",
        tag: ""
    },
    {
        gradient: "linear-gradient(135deg,#D97706,#B45309)",
        glow: "rgba(217,119,6,0.3)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 708,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 708,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Legacy System Modernisation",
        desc: "Migrate monoliths to modern microservices architecture — strangler pattern migration, zero downtime, full test coverage throughout.",
        tag: ""
    },
    {
        gradient: "linear-gradient(135deg,#DC2626,#B91C1C)",
        glow: "rgba(220,38,38,0.3)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "22 11.08V12a10 10 0 1 1-5.93-9.14"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 716,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "22 4 12 14.01 9 11.01"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 716,
                    columnNumber: 203
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 716,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "QA & Performance Engineering",
        desc: "Comprehensive automated test suites, load testing, security audits, and performance optimisation — ship with confidence every sprint.",
        tag: ""
    }
];
const stats = [
    {
        value: 150,
        suffix: "+",
        label: "Apps shipped",
        sub: "web, mobile & backend"
    },
    {
        value: 99,
        suffix: "%",
        label: "Uptime SLA",
        sub: "production systems"
    },
    {
        value: 4,
        suffix: "×",
        label: "Faster delivery",
        sub: "vs. in-house teams"
    },
    {
        value: 40,
        suffix: "%",
        label: "Cost savings",
        sub: "vs. traditional agencies"
    }
];
const processSteps = [
    {
        num: "01",
        color: "#2563EB",
        bg: "rgba(37,99,235,0.12)",
        title: "Discovery",
        desc: "We map your technical landscape, identify architecture risks, and define clear functional requirements — no assumptions, no surprises."
    },
    {
        num: "02",
        color: "#7C3AED",
        bg: "rgba(124,58,237,0.12)",
        title: "Architecture",
        desc: "System design, stack selection, API contracts, and full technical specification before a single line of production code is written."
    },
    {
        num: "03",
        color: "#0891B2",
        bg: "rgba(8,145,178,0.12)",
        title: "Sprint Build",
        desc: "Agile sprints with weekly demos, continuous integration, peer code reviews, and living documentation — full visibility at every stage."
    },
    {
        num: "04",
        color: "#059669",
        bg: "rgba(5,150,105,0.12)",
        title: "QA & Release",
        desc: "Automated tests, staged rollouts, and production hardening — we deploy when it is genuinely ready, not just deadline-driven."
    },
    {
        num: "05",
        color: "#D97706",
        bg: "rgba(217,119,6,0.12)",
        title: "Scale & Support",
        desc: "Post-launch monitoring, feature velocity, performance tuning, and roadmap execution so your product keeps compounding in value."
    }
];
const useCases = [
    {
        industry: "SaaS Platforms",
        icon: "☁️",
        color: "#2563EB",
        items: [
            "Multi-tenant SaaS architecture",
            "Subscription billing & metering",
            "Self-serve onboarding & in-app analytics"
        ]
    },
    {
        industry: "FinTech",
        icon: "💳",
        color: "#059669",
        items: [
            "Secure payment processing integrations",
            "Real-time transaction ledgers",
            "Regulatory compliance & audit trails"
        ]
    },
    {
        industry: "E-commerce",
        icon: "🛍️",
        color: "#7C3AED",
        items: [
            "Custom storefront & checkout flows",
            "Inventory & order management systems",
            "Headless commerce architecture"
        ]
    },
    {
        industry: "Enterprise Internal Tools",
        icon: "🏢",
        color: "#D97706",
        items: [
            "ERP & CRM custom modules",
            "Workflow automation dashboards",
            "Data visualisation & reporting portals"
        ]
    },
    {
        industry: "Healthcare Tech",
        icon: "🏥",
        color: "#0891B2",
        items: [
            "HIPAA-compliant patient portals",
            "EHR integration & HL7/FHIR APIs",
            "Telemedicine platform development"
        ]
    },
    {
        industry: "Marketplace & Platforms",
        icon: "🔄",
        color: "#DC2626",
        items: [
            "Two-sided marketplace architecture",
            "Matching algorithms & recommendation engines",
            "Dispute management & escrow systems"
        ]
    }
];
const reasons = [
    {
        color: "#2563EB",
        stat: "150+",
        statLabel: "products shipped",
        title: "Engineers, not account managers",
        desc: "You work directly with the senior engineers building your product. No middlemen, no telephone-game briefs — just fast, accurate execution.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "16 18 22 12 16 6"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 803,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "8 6 2 12 8 18"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 803,
                    columnNumber: 186
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 803,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        color: "#7C3AED",
        stat: "99%",
        statLabel: "on-time delivery",
        title: "Predictable delivery",
        desc: "Fixed-scope sprints with clear acceptance criteria mean you always know what you're getting and when — budgets and deadlines are respected.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 810,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "12 6 12 12 16 14"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 810,
                    columnNumber: 181
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 810,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        color: "#0891B2",
        stat: "100%",
        statLabel: "IP ownership",
        title: "You own everything",
        desc: "Full IP transfer on every engagement. You receive source code, documentation, and deployment scripts — no lock-in, ever.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "11",
                    width: "18",
                    height: "11",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 817,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 11V7a5 5 0 0 1 10 0v4"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 817,
                    columnNumber: 206
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 817,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        color: "#059669",
        stat: "24 / 7",
        statLabel: "monitoring & support",
        title: "Built to last",
        desc: "We write tests, not just features. Every project ships with a full CI/CD pipeline, monitoring stack, and runbook so operations teams sleep at night.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 824,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "22 4 12 14.01 9 11.01"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 824,
                    columnNumber: 195
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 824,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const faqs = [
    {
        q: "What technology stack do you use?",
        a: "We're stack-agnostic and recommend the best technology for your specific problem. Most commonly: Next.js/React/TypeScript for frontend, Node.js/Python/Go for backend, PostgreSQL/MongoDB for data, and AWS/GCP for infrastructure. We always explain our choices before any code is written."
    },
    {
        q: "How long does a typical project take?",
        a: "MVPs typically take 6–12 weeks. Full-scale products range from 16–32 weeks depending on complexity. We provide a detailed, milestone-based timeline after the discovery phase — with no ambiguity or hidden scope built in."
    },
    {
        q: "Can you take over an existing codebase?",
        a: "Yes — and we do this frequently. We start with a thorough codebase audit to understand quality, risks, and technical debt, then propose a migration or enhancement plan. We've successfully rescued dozens of projects from other agencies."
    },
    {
        q: "Do you work with early-stage startups?",
        a: "Absolutely. We offer founder-friendly engagement models including MVP sprints, equity discussions for the right projects, and post-launch retainer arrangements so you can scale development with predictable costs."
    },
    {
        q: "How do you handle IP and confidentiality?",
        a: "NDA-first on every engagement. All code, assets, and documentation are transferred to you at project close. We never reuse your IP for other clients and operate with full confidentiality throughout."
    }
];
function SoftwareEngineeringPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
            background: "#fff",
            overflowX: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TickerBanner, {}, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 844,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: "linear-gradient(150deg, #F8FAFF 0%, #EEF2FF 35%, #F0F7FF 65%, #F8FAFF 100%)",
                    paddingTop: 130,
                    paddingBottom: 120,
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            pointerEvents: "none",
                            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)",
                            backgroundSize: "32px 32px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 852,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: -200,
                            right: -200,
                            width: 700,
                            height: 700,
                            background: "radial-gradient(ellipse at center, rgba(37,99,235,0.1) 0%, transparent 60%)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 855,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: -150,
                            left: "30%",
                            width: 600,
                            height: 400,
                            background: "radial-gradient(ellipse at center, rgba(124,58,237,0.06) 0%, transparent 60%)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 858,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: -100,
                            width: 400,
                            height: 400,
                            background: "radial-gradient(ellipse at center, rgba(8,145,178,0.05) 0%, transparent 65%)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 861,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: 280,
                            pointerEvents: "none"
                        },
                        children: Array.from({
                            length: 30
                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    right: 0,
                                    height: "1px",
                                    width: `${30 + i * 9}px`,
                                    top: `${i * 20 + 20}px`,
                                    background: `rgba(37,99,235,${0.04 + i * 0.004})`
                                }
                            }, i, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 866,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 864,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1280,
                            margin: "0 auto",
                            padding: "0 56px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "1.05fr 0.95fr",
                                gap: 80,
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 8,
                                                    marginBottom: 30
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/services/",
                                                        style: {
                                                            fontSize: 12,
                                                            color: "rgba(15,23,42,0.45)",
                                                            textDecoration: "none",
                                                            fontWeight: 500
                                                        },
                                                        children: "Services"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 882,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "10",
                                                        height: "10",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "rgba(15,23,42,0.25)",
                                                        strokeWidth: "2.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "9 18 15 12 9 6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 883,
                                                            columnNumber: 126
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 883,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: "#2563EB",
                                                            fontWeight: 600
                                                        },
                                                        children: "Software Engineering"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 884,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 881,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 880,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                            delay: 0.06,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: 9,
                                                    background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(124,58,237,0.08))",
                                                    border: "1px solid rgba(37,99,235,0.2)",
                                                    borderRadius: 100,
                                                    padding: "7px 18px",
                                                    marginBottom: 26,
                                                    backdropFilter: "blur(8px)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 7,
                                                            height: 7,
                                                            borderRadius: "50%",
                                                            background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                                                            boxShadow: "0 0 8px rgba(37,99,235,0.5)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 896,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 11,
                                                            fontWeight: 800,
                                                            color: "#2563EB",
                                                            letterSpacing: "0.1em",
                                                            textTransform: "uppercase"
                                                        },
                                                        children: "Enterprise Engineering"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 901,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 889,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 888,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                            delay: 0.1,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                style: {
                                                    fontSize: "clamp(42px, 4.5vw, 68px)",
                                                    fontWeight: 900,
                                                    color: "#0F172A",
                                                    lineHeight: 1.0,
                                                    letterSpacing: "-0.035em",
                                                    marginBottom: 6
                                                },
                                                children: [
                                                    "Software",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            color: [
                                                                "#0F172A",
                                                                "#2563EB",
                                                                "#0F172A"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 4,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        },
                                                        style: {
                                                            display: "inline"
                                                        },
                                                        children: "Engineering"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 910,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 908,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 907,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                            delay: 0.14,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                style: {
                                                    fontSize: "clamp(42px, 4.5vw, 68px)",
                                                    fontWeight: 900,
                                                    lineHeight: 1.0,
                                                    letterSpacing: "-0.035em",
                                                    marginBottom: 32,
                                                    display: "inline-block"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    animate: {
                                                        backgroundPosition: [
                                                            "200% center",
                                                            "-200% center"
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    },
                                                    style: {
                                                        background: "linear-gradient(100deg, #60A5FA 0%, #A78BFA 30%, #34D399 55%, #60A5FA 70%, #F472B6 85%, #60A5FA 100%)",
                                                        backgroundSize: "300% 100%",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent",
                                                        display: "inline"
                                                    },
                                                    children: "built to last."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 922,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 921,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 920,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                            delay: 0.19,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: 17,
                                                    color: "rgba(15,23,42,0.6)",
                                                    lineHeight: 1.82,
                                                    marginBottom: 42,
                                                    maxWidth: 490
                                                },
                                                children: "We design and build scalable web applications, mobile apps, APIs, and cloud infrastructure that power ambitious businesses — shipped fast, engineered to last, and fully owned by you."
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 938,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 937,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                            delay: 0.24,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: 14,
                                                    flexWrap: "wrap"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/contact/",
                                                        style: {
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: 10,
                                                            background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                                                            color: "#fff",
                                                            borderRadius: 14,
                                                            padding: "15px 32px",
                                                            fontSize: 15,
                                                            fontWeight: 700,
                                                            textDecoration: "none",
                                                            boxShadow: "0 8px 32px rgba(37,99,235,0.55), inset 0 1px 0 rgba(255,255,255,0.18)",
                                                            transition: "transform 0.15s, box-shadow 0.15s"
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.transform = "translateY(-2px)";
                                                            e.currentTarget.style.boxShadow = "0 12px 40px rgba(37,99,235,0.65)";
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.transform = "none";
                                                            e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,99,235,0.55)";
                                                        },
                                                        children: [
                                                            "Start a Project",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "15",
                                                                height: "15",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "white",
                                                                strokeWidth: "2.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "5",
                                                                        y1: "12",
                                                                        x2: "19",
                                                                        y2: "12"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                        lineNumber: 957,
                                                                        columnNumber: 159
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                        points: "12 5 19 12 12 19"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                        lineNumber: 957,
                                                                        columnNumber: 197
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                lineNumber: 957,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 945,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/consultation/",
                                                        style: {
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: 10,
                                                            background: "#fff",
                                                            color: "#374151",
                                                            borderRadius: 14,
                                                            padding: "15px 28px",
                                                            fontSize: 15,
                                                            fontWeight: 600,
                                                            textDecoration: "none",
                                                            border: "1.5px solid #E5E7EB",
                                                            transition: "background 0.2s, border-color 0.2s"
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.background = "#F8FAFF";
                                                            e.currentTarget.style.borderColor = "#2563EB";
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.background = "#fff";
                                                            e.currentTarget.style.borderColor = "#E5E7EB";
                                                        },
                                                        children: "Free Consultation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 959,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 944,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 943,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                            delay: 0.32,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 0,
                                                    marginTop: 48,
                                                    borderTop: "1px solid rgba(15,23,42,0.08)",
                                                    paddingTop: 28
                                                },
                                                children: [
                                                    {
                                                        dot: "#22C55E",
                                                        text: "Full IP ownership",
                                                        border: true
                                                    },
                                                    {
                                                        dot: "#2563EB",
                                                        text: "99% uptime SLA",
                                                        border: true
                                                    },
                                                    {
                                                        dot: "#7C3AED",
                                                        text: "1–2 week sprints",
                                                        border: false
                                                    }
                                                ].map(({ dot, text, border })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 8,
                                                            paddingRight: border ? 24 : 0,
                                                            marginRight: border ? 24 : 0,
                                                            borderRight: border ? "1px solid rgba(15,23,42,0.1)" : "none"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: 7,
                                                                    height: 7,
                                                                    borderRadius: "50%",
                                                                    background: dot,
                                                                    flexShrink: 0,
                                                                    boxShadow: `0 0 8px ${dot}`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                lineNumber: 987,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 12.5,
                                                                    color: "rgba(15,23,42,0.5)",
                                                                    fontWeight: 500
                                                                },
                                                                children: text
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                lineNumber: 988,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, text, true, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 982,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 976,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 975,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 879,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                    delay: 0.22,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative",
                                            paddingTop: 48,
                                            paddingBottom: 80,
                                            paddingLeft: 32
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,255,0.9) 100%)",
                                                    backdropFilter: "blur(24px)",
                                                    border: "1px solid rgba(37,99,235,0.12)",
                                                    borderRadius: 28,
                                                    overflow: "hidden",
                                                    boxShadow: "0 40px 100px rgba(37,99,235,0.12), 0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: "18px 22px 16px",
                                                            borderBottom: "1px solid rgba(37,99,235,0.08)",
                                                            background: "rgba(248,250,255,0.8)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: 10
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            gap: 5
                                                                        },
                                                                        children: [
                                                                            "#FF5F57",
                                                                            "#FFBD2E",
                                                                            "#28C840"
                                                                        ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    width: 10,
                                                                                    height: 10,
                                                                                    borderRadius: "50%",
                                                                                    background: c
                                                                                }
                                                                            }, c, false, {
                                                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                                lineNumber: 1014,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                        lineNumber: 1012,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: 12,
                                                                            fontWeight: 600,
                                                                            color: "rgba(15,23,42,0.45)",
                                                                            marginLeft: 6
                                                                        },
                                                                        children: "KeySol Dev Studio — v2.8"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                        lineNumber: 1017,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                lineNumber: 1011,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: 6,
                                                                    background: "rgba(34,197,94,0.12)",
                                                                    border: "1px solid rgba(34,197,94,0.28)",
                                                                    borderRadius: 100,
                                                                    padding: "4px 12px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        animate: {
                                                                            scale: [
                                                                                1,
                                                                                1.4,
                                                                                1
                                                                            ]
                                                                        },
                                                                        transition: {
                                                                            duration: 1.5,
                                                                            repeat: Infinity
                                                                        },
                                                                        style: {
                                                                            width: 6,
                                                                            height: 6,
                                                                            borderRadius: "50%",
                                                                            background: "#22C55E",
                                                                            flexShrink: 0
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                        lineNumber: 1024,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: 10.5,
                                                                            fontWeight: 800,
                                                                            color: "#4ADE80",
                                                                            letterSpacing: "0.04em"
                                                                        },
                                                                        children: "BUILD"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                        lineNumber: 1029,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                lineNumber: 1019,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 1005,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: "20px 24px 16px"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditorViz, {}, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 1034,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 1033,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            height: 1,
                                                            background: "rgba(37,99,235,0.07)",
                                                            margin: "0 22px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 1037,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "grid",
                                                            gridTemplateColumns: "repeat(3,1fr)"
                                                        },
                                                        children: [
                                                            {
                                                                label: "Test Coverage",
                                                                val: "97.3%",
                                                                color: "#059669",
                                                                sub: "↑ 1.4% this sprint"
                                                            },
                                                            {
                                                                label: "Deploy Freq.",
                                                                val: "3.2/day",
                                                                color: "#2563EB",
                                                                sub: "↑ 0.4 vs last week"
                                                            },
                                                            {
                                                                label: "Perf. Score",
                                                                val: "98/100",
                                                                color: "#D97706",
                                                                sub: "↑ 3pts this week"
                                                            }
                                                        ].map((m, mi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: "16px 18px",
                                                                    borderRight: mi < 2 ? "1px solid rgba(37,99,235,0.07)" : "none"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: 22,
                                                                            fontWeight: 900,
                                                                            color: m.color,
                                                                            letterSpacing: "-0.03em",
                                                                            lineHeight: 1
                                                                        },
                                                                        children: m.val
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                        lineNumber: 1046,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: 10.5,
                                                                            color: "rgba(15,23,42,0.4)",
                                                                            marginTop: 4,
                                                                            fontWeight: 500
                                                                        },
                                                                        children: m.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                        lineNumber: 1047,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: 10,
                                                                            color: m.color,
                                                                            marginTop: 3,
                                                                            fontWeight: 600
                                                                        },
                                                                        children: m.sub
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                        lineNumber: 1048,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, m.label, true, {
                                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                lineNumber: 1045,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 1039,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 998,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    y: [
                                                        0,
                                                        -4,
                                                        0
                                                    ]
                                                },
                                                transition: {
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                },
                                                style: {
                                                    position: "absolute",
                                                    top: 48,
                                                    right: -240,
                                                    width: 224,
                                                    background: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,255,0.95))",
                                                    backdropFilter: "blur(20px)",
                                                    border: "1px solid rgba(37,99,235,0.12)",
                                                    borderRadius: 18,
                                                    padding: "16px 18px",
                                                    boxShadow: "0 16px 48px rgba(37,99,235,0.1), 0 4px 16px rgba(0,0,0,0.06)",
                                                    zIndex: 10
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 9.5,
                                                            fontWeight: 800,
                                                            color: "rgba(15,23,42,0.4)",
                                                            letterSpacing: "0.12em",
                                                            textTransform: "uppercase",
                                                            marginBottom: 12
                                                        },
                                                        children: "CI/CD Pipeline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 1067,
                                                        columnNumber: 19
                                                    }, this),
                                                    [
                                                        {
                                                            name: "Unit Tests",
                                                            pct: 100,
                                                            color: "#4ADE80"
                                                        },
                                                        {
                                                            name: "Build",
                                                            pct: 95,
                                                            color: "#60A5FA"
                                                        },
                                                        {
                                                            name: "Deploy",
                                                            pct: 88,
                                                            color: "#A78BFA"
                                                        }
                                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginBottom: 10
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        justifyContent: "space-between",
                                                                        marginBottom: 5
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: 11,
                                                                                fontWeight: 600,
                                                                                color: "rgba(15,23,42,0.7)"
                                                                            },
                                                                            children: item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                            lineNumber: 1075,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: 11,
                                                                                fontWeight: 800,
                                                                                color: item.color
                                                                            },
                                                                            children: [
                                                                                item.pct,
                                                                                "%"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                            lineNumber: 1076,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                    lineNumber: 1074,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        height: 4,
                                                                        borderRadius: 4,
                                                                        background: "rgba(37,99,235,0.08)"
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            height: "100%",
                                                                            width: `${item.pct}%`,
                                                                            borderRadius: 4,
                                                                            background: `linear-gradient(90deg, ${item.color}, ${item.color}55)`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                        lineNumber: 1079,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                    lineNumber: 1078,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, item.name, true, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 1073,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 1054,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    y: [
                                                        0,
                                                        5,
                                                        0
                                                    ]
                                                },
                                                transition: {
                                                    duration: 3.8,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: 0.6
                                                },
                                                style: {
                                                    position: "absolute",
                                                    bottom: -32,
                                                    right: 0,
                                                    background: "rgba(5,150,105,0.9)",
                                                    backdropFilter: "blur(12px)",
                                                    color: "#fff",
                                                    borderRadius: 14,
                                                    padding: "11px 18px",
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    boxShadow: "0 8px 28px rgba(5,150,105,0.5)",
                                                    border: "1px solid rgba(255,255,255,0.18)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 8,
                                                    zIndex: 10
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        animate: {
                                                            scale: [
                                                                1,
                                                                1.5,
                                                                1
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 1.8,
                                                            repeat: Infinity
                                                        },
                                                        style: {
                                                            width: 7,
                                                            height: 7,
                                                            borderRadius: "50%",
                                                            background: "#4ADE80",
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 1100,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Production Deployed & Live"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 1085,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 997,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 996,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 876,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 875,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 847,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: "#F8FAFF",
                    padding: "56px 48px",
                    borderTop: "1px solid rgba(37,99,235,0.08)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1240,
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(4,1fr)",
                        gap: 0
                    },
                    children: stats.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                            delay: 0.08 * i,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center",
                                    padding: "0 24px",
                                    borderRight: i < 3 ? "1px solid rgba(37,99,235,0.1)" : "none"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "clamp(36px,3.5vw,52px)",
                                            fontWeight: 900,
                                            background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            letterSpacing: "-0.04em",
                                            lineHeight: 1
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Counter, {
                                            target: s.value,
                                            suffix: s.suffix
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1120,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 1119,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 14,
                                            fontWeight: 700,
                                            color: "#0F172A",
                                            marginTop: 8
                                        },
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 1122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11.5,
                                            color: "rgba(15,23,42,0.42)",
                                            marginTop: 4
                                        },
                                        children: s.sub
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 1123,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1118,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 1117,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 1115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TechStackStrip, {}, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "108px 48px",
                    background: "#fff"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1240,
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center",
                                    marginBottom: 72
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 7,
                                            background: "#EFF6FF",
                                            borderRadius: 100,
                                            padding: "5px 16px",
                                            marginBottom: 18
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: "50%",
                                                    background: "#2563EB"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 1139,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                    color: "#2563EB",
                                                    letterSpacing: "0.1em",
                                                    textTransform: "uppercase"
                                                },
                                                children: "What We Build"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 1140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 1138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: "clamp(30px,3.2vw,46px)",
                                            fontWeight: 900,
                                            color: "#0F172A",
                                            letterSpacing: "-0.025em",
                                            lineHeight: 1.15,
                                            marginBottom: 18
                                        },
                                        children: "Full-stack engineering capabilities"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 1142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 17,
                                            color: "#6B7280",
                                            lineHeight: 1.75,
                                            maxWidth: 540,
                                            margin: "0 auto"
                                        },
                                        children: "From frontend UX to cloud infrastructure — we build every layer of your product with the same rigour, craftsmanship, and long-term thinking."
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 1145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1137,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 1136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(3,1fr)",
                                gap: 24
                            },
                            children: capabilities.map((cap, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                    delay: 0.07 * i,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CapabilityCard, {
                                        cap: cap
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 1153,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1152,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 1150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 1135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "120px 48px",
                    background: "linear-gradient(170deg, #F8FAFF 0%, #F1F5FF 50%, #EEF2FF 100%)",
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            pointerEvents: "none",
                            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)",
                            backgroundSize: "28px 28px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: -200,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 900,
                            height: 600,
                            borderRadius: "50%",
                            background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 65%)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: -160,
                            right: "5%",
                            width: 600,
                            height: 600,
                            background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1160,
                            margin: "0 auto",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        marginBottom: 88
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 8,
                                                background: "rgba(124,58,237,0.08)",
                                                border: "1px solid rgba(124,58,237,0.2)",
                                                borderRadius: 100,
                                                padding: "7px 20px",
                                                marginBottom: 24
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        scale: [
                                                            1,
                                                            1.4,
                                                            1
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 2,
                                                        repeat: Infinity
                                                    },
                                                    style: {
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        background: "#7C3AED"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 1185,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 11,
                                                        fontWeight: 700,
                                                        color: "#7C3AED",
                                                        letterSpacing: "0.14em",
                                                        textTransform: "uppercase"
                                                    },
                                                    children: "Our Process"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 1190,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "clamp(34px,3.8vw,58px)",
                                                fontWeight: 900,
                                                color: "#0F172A",
                                                letterSpacing: "-0.035em",
                                                lineHeight: 1.08,
                                                marginBottom: 20
                                            },
                                            children: [
                                                "How we build software",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 1193,
                                                    columnNumber: 38
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    animate: {
                                                        backgroundPosition: [
                                                            "0% center",
                                                            "200% center",
                                                            "0% center"
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 6,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    },
                                                    style: {
                                                        background: "linear-gradient(90deg, #2563EB, #7C3AED, #059669, #2563EB)",
                                                        backgroundSize: "300% 100%",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent",
                                                        display: "inline"
                                                    },
                                                    children: "that actually ships."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 1194,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 16,
                                                color: "rgba(15,23,42,0.5)",
                                                lineHeight: 1.8,
                                                maxWidth: 520,
                                                margin: "0 auto"
                                            },
                                            children: "A battle-tested 5-phase engineering process refined across 150+ software deliveries — from MVP to enterprise scale."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1207,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1179,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(5,1fr)",
                                    gap: 16,
                                    alignItems: "stretch"
                                },
                                children: processSteps.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                        delay: 0.1 * i,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProcessCard, {
                                            step: p,
                                            index: i,
                                            isLast: i === processSteps.length - 1
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1216,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 1215,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1213,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "108px 48px",
                    background: "#fff"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1240,
                        margin: "0 auto"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "1fr 2fr",
                            gap: 80,
                            alignItems: "start"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SlideIn, {
                                from: "left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "sticky",
                                        top: 120
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 7,
                                                background: "#EFF6FF",
                                                borderRadius: 100,
                                                padding: "5px 16px",
                                                marginBottom: 20
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        background: "#2563EB"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 1230,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 11,
                                                        fontWeight: 700,
                                                        color: "#2563EB",
                                                        letterSpacing: "0.1em",
                                                        textTransform: "uppercase"
                                                    },
                                                    children: "Industry Use Cases"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 1231,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1229,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "clamp(28px,2.8vw,40px)",
                                                fontWeight: 900,
                                                color: "#0F172A",
                                                letterSpacing: "-0.025em",
                                                lineHeight: 1.2,
                                                marginBottom: 20
                                            },
                                            children: "Software that works across every industry"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1233,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 15.5,
                                                color: "#6B7280",
                                                lineHeight: 1.75,
                                                marginBottom: 32
                                            },
                                            children: "We've built production software across a dozen verticals. Each product is unique — but our engineering rigour means faster delivery and fewer surprises."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1236,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact/",
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 8,
                                                background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
                                                color: "#fff",
                                                borderRadius: 12,
                                                padding: "13px 24px",
                                                fontSize: 14,
                                                fontWeight: 700,
                                                textDecoration: "none",
                                                boxShadow: "0 4px 18px rgba(37,99,235,0.4)"
                                            },
                                            children: [
                                                "Discuss your project",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "13",
                                                    height: "13",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "white",
                                                    strokeWidth: "2.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "5",
                                                            y1: "12",
                                                            x2: "19",
                                                            y2: "12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 1247,
                                                            columnNumber: 157
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "12 5 19 12 12 19"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 1247,
                                                            columnNumber: 195
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 1247,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1239,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1228,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1227,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SlideIn, {
                                from: "right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: 20
                                    },
                                    children: useCases.map((uc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                            delay: 0.08 * i,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: "24px",
                                                    borderRadius: 18,
                                                    border: "1.5px solid #E5E7EB",
                                                    background: "#fff",
                                                    transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s"
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.borderColor = uc.color;
                                                    e.currentTarget.style.boxShadow = `0 8px 32px ${uc.color}20`;
                                                    e.currentTarget.style.transform = "translateY(-3px)";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.borderColor = "#E5E7EB";
                                                    e.currentTarget.style.boxShadow = "none";
                                                    e.currentTarget.style.transform = "none";
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 10,
                                                            marginBottom: 14
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: 40,
                                                                    height: 40,
                                                                    borderRadius: 10,
                                                                    background: `${uc.color}15`,
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    fontSize: 18
                                                                },
                                                                children: uc.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                lineNumber: 1264,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 13.5,
                                                                    fontWeight: 800,
                                                                    color: "#0F172A"
                                                                },
                                                                children: uc.industry
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                lineNumber: 1265,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 1263,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        style: {
                                                            margin: 0,
                                                            padding: 0,
                                                            listStyle: "none",
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 7
                                                        },
                                                        children: uc.items.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "flex-start",
                                                                    gap: 8
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: 5,
                                                                            height: 5,
                                                                            borderRadius: "50%",
                                                                            background: uc.color,
                                                                            flexShrink: 0,
                                                                            marginTop: 6
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                        lineNumber: 1270,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: 12.5,
                                                                            color: "#475569",
                                                                            lineHeight: 1.6
                                                                        },
                                                                        children: item
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                        lineNumber: 1271,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, j, true, {
                                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                                lineNumber: 1269,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                        lineNumber: 1267,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 1256,
                                                columnNumber: 21
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1255,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1253,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1252,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1226,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 1225,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultsStrip, {}, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1285,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ROICalculator, {}, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "120px 48px",
                    background: "linear-gradient(160deg, #F8FAFF 0%, #F1F5FF 45%, #EEF2FF 75%, #F8FAFF 100%)",
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            pointerEvents: "none",
                            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px)",
                            backgroundSize: "32px 32px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: -100,
                            left: -100,
                            width: 600,
                            height: 600,
                            background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 65%)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: -80,
                            right: -60,
                            width: 500,
                            height: 500,
                            background: "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 65%)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1240,
                            margin: "0 auto",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        marginBottom: 80
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 8,
                                                background: "rgba(124,58,237,0.08)",
                                                border: "1px solid rgba(124,58,237,0.2)",
                                                borderRadius: 100,
                                                padding: "7px 20px",
                                                marginBottom: 24
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        scale: [
                                                            1,
                                                            1.5,
                                                            1
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 2.2,
                                                        repeat: Infinity
                                                    },
                                                    style: {
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        background: "#7C3AED",
                                                        flexShrink: 0
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 1312,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 11,
                                                        fontWeight: 700,
                                                        color: "#7C3AED",
                                                        letterSpacing: "0.14em",
                                                        textTransform: "uppercase"
                                                    },
                                                    children: "Why KeySol Global"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 1317,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1307,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "clamp(32px,3.6vw,54px)",
                                                fontWeight: 900,
                                                color: "#0F172A",
                                                letterSpacing: "-0.03em",
                                                lineHeight: 1.1,
                                                marginBottom: 14
                                            },
                                            children: "We don't just write code."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1319,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                            animate: {
                                                backgroundPosition: [
                                                    "0% center",
                                                    "200% center",
                                                    "0% center"
                                                ]
                                            },
                                            transition: {
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            style: {
                                                fontSize: "clamp(32px,3.6vw,54px)",
                                                fontWeight: 900,
                                                background: "linear-gradient(90deg, #2563EB, #7C3AED, #059669, #2563EB)",
                                                backgroundSize: "300% 100%",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                letterSpacing: "-0.03em",
                                                lineHeight: 1.1,
                                                marginBottom: 28,
                                                display: "block"
                                            },
                                            children: "We engineer solutions."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1322,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 16,
                                                color: "rgba(15,23,42,0.5)",
                                                maxWidth: 480,
                                                margin: "0 auto",
                                                lineHeight: 1.8
                                            },
                                            children: "Real engineers. Clean architecture. Full ownership — from first commit to compounding product value."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1336,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1306,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(4,1fr)",
                                    gap: 18
                                },
                                children: reasons.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                        delay: 0.09 * i,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReasonCard, {
                                            reason: r
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1345,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 1344,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1342,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                delay: 0.4,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 64,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 48,
                                        flexWrap: "wrap"
                                    },
                                    children: [
                                        {
                                            val: "NDA-first",
                                            label: "Full confidentiality"
                                        },
                                        {
                                            val: "Fixed-scope",
                                            label: "No scope creep"
                                        },
                                        {
                                            val: "Weekly demos",
                                            label: "Full transparency"
                                        },
                                        {
                                            val: "IP transfer",
                                            label: "You own everything"
                                        }
                                    ].map(({ val, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 13,
                                                        fontWeight: 800,
                                                        color: "#0F172A",
                                                        letterSpacing: "-0.01em",
                                                        marginBottom: 3
                                                    },
                                                    children: val
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 1359,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 11.5,
                                                        color: "rgba(15,23,42,0.4)",
                                                        fontWeight: 500
                                                    },
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 1360,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, val, true, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1358,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1351,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1350,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1304,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "108px 48px",
                    background: "#fff"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 840,
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center",
                                    marginBottom: 64
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 7,
                                            background: "#EFF6FF",
                                            borderRadius: 100,
                                            padding: "5px 16px",
                                            marginBottom: 18
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: "50%",
                                                    background: "#2563EB"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 1374,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                    color: "#2563EB",
                                                    letterSpacing: "0.1em",
                                                    textTransform: "uppercase"
                                                },
                                                children: "FAQ"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 1375,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 1373,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: "clamp(28px,3vw,42px)",
                                            fontWeight: 900,
                                            color: "#0F172A",
                                            letterSpacing: "-0.025em"
                                        },
                                        children: "Common questions"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 1377,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1372,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 1371,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 12
                            },
                            children: faqs.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqItem, {
                                    q: faq.q,
                                    a: faq.a,
                                    delay: 0.05 * i
                                }, i, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1384,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 1382,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 1370,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "96px 48px",
                    textAlign: "center",
                    background: "linear-gradient(150deg, #F8FAFF 0%, #EEF2FF 40%, #E8F0FF 70%, #F0F4FF 100%)",
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            pointerEvents: "none",
                            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)",
                            backgroundSize: "36px 36px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1396,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                            width: 700,
                            height: 400,
                            background: "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 65%)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1399,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 680,
                            margin: "0 auto",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 8,
                                        background: "rgba(37,99,235,0.08)",
                                        border: "1px solid rgba(37,99,235,0.2)",
                                        borderRadius: 100,
                                        padding: "8px 18px",
                                        marginBottom: 28
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 7,
                                                height: 7,
                                                borderRadius: "50%",
                                                background: "#22C55E"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1411,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 12,
                                                fontWeight: 700,
                                                color: "#2563EB",
                                                letterSpacing: "0.06em"
                                            },
                                            children: "Free 30-minute technical scoping session"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1412,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1406,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1405,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                delay: 0.08,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: "clamp(30px,3.6vw,52px)",
                                        fontWeight: 900,
                                        color: "#0F172A",
                                        lineHeight: 1.15,
                                        marginBottom: 20,
                                        letterSpacing: "-0.025em"
                                    },
                                    children: [
                                        "Ready to build software that",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1417,
                                            columnNumber: 43
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                backgroundPosition: [
                                                    "0% center",
                                                    "200% center",
                                                    "0% center"
                                                ]
                                            },
                                            transition: {
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            style: {
                                                background: "linear-gradient(90deg, #2563EB, #7C3AED, #059669, #2563EB)",
                                                backgroundSize: "300% 100%",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                display: "inline"
                                            },
                                            children: "actually scales?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1418,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1416,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1415,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                delay: 0.14,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 17,
                                        color: "rgba(15,23,42,0.6)",
                                        lineHeight: 1.75,
                                        marginBottom: 40
                                    },
                                    children: "Book a free scoping session with one of our senior engineers. We'll review your requirements, propose an architecture approach, and give you a clear cost and timeline estimate — no obligation."
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1433,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1432,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                delay: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 14,
                                        justifyContent: "center",
                                        flexWrap: "wrap"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact/",
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 10,
                                                background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
                                                color: "#fff",
                                                borderRadius: 14,
                                                padding: "16px 34px",
                                                fontSize: 15.5,
                                                fontWeight: 700,
                                                textDecoration: "none",
                                                boxShadow: "0 8px 32px rgba(37,99,235,0.4), inset 0 1px 0 rgba(255,255,255,0.18)",
                                                transition: "transform 0.15s, box-shadow 0.15s"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.transform = "translateY(-2px)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.transform = "none";
                                            },
                                            children: [
                                                "Book Free Tech Session",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "15",
                                                    height: "15",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "white",
                                                    strokeWidth: "2.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "5",
                                                            y1: "12",
                                                            x2: "19",
                                                            y2: "12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 1451,
                                                            columnNumber: 155
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "12 5 19 12 12 19"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                            lineNumber: 1451,
                                                            columnNumber: 193
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 1451,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1439,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/case-studies/",
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 10,
                                                background: "#fff",
                                                color: "#374151",
                                                borderRadius: 14,
                                                padding: "16px 28px",
                                                fontSize: 15,
                                                fontWeight: 600,
                                                textDecoration: "none",
                                                border: "1.5px solid #E5E7EB",
                                                transition: "background 0.2s, border-color 0.2s"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.background = "#F8FAFF";
                                                e.currentTarget.style.borderColor = "#2563EB";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.background = "#fff";
                                                e.currentTarget.style.borderColor = "#E5E7EB";
                                            },
                                            children: "View Case Studies"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1453,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1438,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1437,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                delay: 0.28,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 32,
                                        marginTop: 52
                                    },
                                    children: [
                                        {
                                            icon: "🔒",
                                            text: "No commitment required"
                                        },
                                        {
                                            icon: "⚡",
                                            text: "Response within 24 hours"
                                        },
                                        {
                                            icon: "🎯",
                                            text: "Tailored to your stack"
                                        }
                                    ].map(({ icon, text })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 16
                                                    },
                                                    children: icon
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 1477,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 12.5,
                                                        color: "rgba(15,23,42,0.45)",
                                                        fontWeight: 500
                                                    },
                                                    children: text
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                    lineNumber: 1478,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, text, true, {
                                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                            lineNumber: 1476,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1470,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1469,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1404,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1391,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 841,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   PROCESS CARD
══════════════════════════════════════════════════════════ */ const stepIcons = [
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "26",
        height: "26",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "white",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1493,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1493,
                columnNumber: 180
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "d", true, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 1493,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "26",
        height: "26",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "white",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1494,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 9h18"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1494,
                columnNumber: 198
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 21V9"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1494,
                columnNumber: 217
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "a", true, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 1494,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "26",
        height: "26",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "white",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "16 18 22 12 16 6"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1495,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "8 6 2 12 8 18"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1495,
                columnNumber: 186
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "b", true, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 1495,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "26",
        height: "26",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "white",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1496,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22 4 12 14.01 9 11.01"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1496,
                columnNumber: 195
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "q", true, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 1496,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)),
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "26",
        height: "26",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "white",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "22 12 18 12 15 21 9 3 6 12 2 12"
        }, void 0, false, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 1497,
            columnNumber: 149
        }, ("TURBOPACK compile-time value", void 0))
    }, "s", false, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 1497,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0))
];
function ProcessCard({ step, index, isLast }) {
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            height: "100%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onMouseEnter: ()=>setHovered(true),
            onMouseLeave: ()=>setHovered(false),
            style: {
                borderRadius: 24,
                background: hovered ? `linear-gradient(160deg, #fff 0%, ${step.color}08 100%)` : "#fff",
                border: `1.5px solid ${hovered ? step.color + "55" : "rgba(226,232,240,0.9)"}`,
                padding: "32px 26px 30px",
                boxShadow: hovered ? `0 24px 72px ${step.color}22, 0 6px 24px rgba(0,0,0,0.06), inset 0 0 0 1px ${step.color}15` : "0 1px 4px rgba(15,23,42,0.06), 0 4px 16px rgba(37,99,235,0.05)",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                transform: hovered ? "translateY(-12px) scale(1.01)" : "none",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                height: "100%",
                display: "flex",
                flexDirection: "column"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        inset: 0,
                        background: `radial-gradient(ellipse at 30% 0%, ${step.color}10 0%, transparent 70%)`,
                        pointerEvents: "none"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 1522,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        top: -10,
                        right: 14,
                        fontSize: 88,
                        fontWeight: 900,
                        lineHeight: 1,
                        color: hovered ? `${step.color}12` : "rgba(15,23,42,0.04)",
                        letterSpacing: "-0.06em",
                        userSelect: "none",
                        transition: "color 0.4s",
                        fontVariantNumeric: "tabular-nums",
                        pointerEvents: "none"
                    },
                    children: step.num
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 1527,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 68,
                        height: 68,
                        borderRadius: 20,
                        background: `linear-gradient(145deg, ${step.color}, ${step.color}bb)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: hovered ? `0 12px 40px ${step.color}55, 0 0 0 4px ${step.color}18` : `0 6px 20px ${step.color}35`,
                        transition: "box-shadow 0.35s, transform 0.35s",
                        transform: hovered ? "translateY(-3px) scale(1.06)" : "none",
                        marginBottom: 22,
                        flexShrink: 0,
                        position: "relative",
                        zIndex: 1
                    },
                    children: stepIcons[index]
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 1535,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: `${step.color}12`,
                        border: `1px solid ${step.color}30`,
                        borderRadius: 100,
                        padding: "4px 12px",
                        marginBottom: 14,
                        alignSelf: "flex-start"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                background: step.color,
                                flexShrink: 0
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 1553,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 10.5,
                                fontWeight: 700,
                                color: step.color,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase"
                            },
                            children: [
                                "Step ",
                                step.num
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 1554,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 1547,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    style: {
                        fontSize: 17,
                        fontWeight: 800,
                        color: "#0F172A",
                        marginBottom: 12,
                        lineHeight: 1.25,
                        letterSpacing: "-0.025em",
                        position: "relative",
                        zIndex: 1
                    },
                    children: step.title
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 1559,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: 13.5,
                        color: "rgba(15,23,42,0.55)",
                        lineHeight: 1.75,
                        marginBottom: 24,
                        flexGrow: 1,
                        position: "relative",
                        zIndex: 1
                    },
                    children: step.desc
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 1561,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTop: `1px solid ${hovered ? step.color + "25" : "rgba(226,232,240,0.8)"}`,
                        paddingTop: 16,
                        transition: "border-color 0.3s",
                        position: "relative",
                        zIndex: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 7
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: hovered ? {
                                        x: [
                                            0,
                                            4,
                                            0
                                        ]
                                    } : {
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.5,
                                        repeat: hovered ? Infinity : 0
                                    },
                                    style: {
                                        width: 28,
                                        height: 28,
                                        borderRadius: "50%",
                                        background: hovered ? step.color : `${step.color}15`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "background 0.25s",
                                        flexShrink: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "11",
                                        height: "11",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: hovered ? "white" : step.color,
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "5",
                                                y1: "12",
                                                x2: "19",
                                                y2: "12"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 1582,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "12 5 19 12 12 19"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                                lineNumber: 1582,
                                                columnNumber: 55
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 1579,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1569,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 12.5,
                                        fontWeight: 700,
                                        color: hovered ? step.color : "rgba(15,23,42,0.38)",
                                        transition: "color 0.25s"
                                    },
                                    children: "Learn more"
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1585,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 1568,
                            columnNumber: 11
                        }, this),
                        !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 3
                            },
                            children: [
                                0,
                                1,
                                2
                            ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 4,
                                        height: 4,
                                        borderRadius: "50%",
                                        background: step.color,
                                        opacity: 0.2 + d * 0.2
                                    }
                                }, d, false, {
                                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                    lineNumber: 1592,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 1590,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 1563,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 1504,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 1503,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   REASON CARD
══════════════════════════════════════════════════════════ */ function ReasonCard({ reason }) {
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            padding: "32px 26px 36px",
            borderRadius: 24,
            background: hovered ? `linear-gradient(160deg, #fff 0%, ${reason.color}08 100%)` : "#fff",
            border: `1.5px solid ${hovered ? reason.color + "55" : "rgba(226,232,240,0.9)"}`,
            boxShadow: hovered ? `0 24px 72px ${reason.color}20, 0 6px 24px rgba(0,0,0,0.06)` : "0 1px 4px rgba(15,23,42,0.06), 0 4px 16px rgba(37,99,235,0.05)",
            transition: "all 0.32s cubic-bezier(0.22,1,0.36,1)",
            transform: hovered ? "translateY(-8px)" : "none",
            position: "relative",
            overflow: "hidden",
            height: "100%",
            cursor: "default"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    marginBottom: 20
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 56,
                        height: 56,
                        borderRadius: 16,
                        background: `linear-gradient(135deg, ${reason.color}, ${reason.color}bb)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: hovered ? `0 8px 24px ${reason.color}50` : `0 4px 12px ${reason.color}28`,
                        transition: "box-shadow 0.3s, transform 0.3s",
                        transform: hovered ? "scale(1.06)" : "scale(1)"
                    },
                    children: reason.icon
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 1624,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1623,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 26,
                            fontWeight: 900,
                            letterSpacing: "-0.03em",
                            lineHeight: 1,
                            color: reason.color,
                            marginBottom: 3
                        },
                        children: reason.stat
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1636,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 10.5,
                            fontWeight: 600,
                            color: "rgba(15,23,42,0.38)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em"
                        },
                        children: reason.statLabel
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1637,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1635,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 1.5,
                    borderRadius: 2,
                    marginBottom: 18,
                    background: `linear-gradient(90deg, ${reason.color}60, transparent)`,
                    width: hovered ? "70%" : "28%",
                    transition: "width 0.45s cubic-bezier(0.22,1,0.36,1)"
                }
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontSize: 15.5,
                    fontWeight: 800,
                    color: "#0F172A",
                    marginBottom: 10,
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em"
                },
                children: reason.title
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1640,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 13,
                    color: "rgba(15,23,42,0.55)",
                    lineHeight: 1.78
                },
                children: reason.desc
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1641,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 1608,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   CAPABILITY CARD
══════════════════════════════════════════════════════════ */ function CapabilityCard({ cap }) {
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            padding: "28px 28px 32px",
            borderRadius: 20,
            border: `1.5px solid ${hovered ? "transparent" : "#E5E7EB"}`,
            background: hovered ? "linear-gradient(145deg, #F8FAFF, #EEF2FF)" : "#fff",
            boxShadow: hovered ? `0 16px 48px ${cap.glow}` : "0 2px 8px rgba(0,0,0,0.04)",
            transition: "all 0.25s ease",
            transform: hovered ? "translateY(-5px)" : "none",
            position: "relative",
            overflow: "hidden",
            height: "100%"
        },
        children: [
            hovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 100,
                    height: 100,
                    background: `radial-gradient(circle at 100% 0%, ${cap.glow}, transparent 70%)`,
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1666,
                columnNumber: 9
            }, this),
            cap.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                    color: "#fff",
                    borderRadius: 100,
                    padding: "3px 10px",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.05em"
                },
                children: cap.tag
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1673,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: cap.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    boxShadow: `0 6px 20px ${cap.glow}`
                },
                children: cap.icon
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1680,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontSize: 17,
                    fontWeight: 800,
                    color: "#0F172A",
                    marginBottom: 10,
                    lineHeight: 1.3
                },
                children: cap.title
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1687,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 14,
                    color: "#64748B",
                    lineHeight: 1.75
                },
                children: cap.desc
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1688,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 20,
                    color: "#2563EB",
                    fontSize: 13,
                    fontWeight: 700,
                    transform: hovered ? "translateX(0)" : "translateX(-4px)",
                    transition: "transform 0.2s"
                },
                children: [
                    "Learn more",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#2563EB",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "5",
                                y1: "12",
                                x2: "19",
                                y2: "12"
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1696,
                                columnNumber: 149
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "12 5 19 12 12 19"
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1696,
                                columnNumber: 187
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1696,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                lineNumber: 1689,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 1652,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   FAQ ACCORDION
══════════════════════════════════════════════════════════ */ function FaqItem({ q, a, delay }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
        delay: delay,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                borderRadius: 16,
                overflow: "hidden",
                border: `1.5px solid ${open ? "#2563EB" : "#E5E7EB"}`,
                boxShadow: open ? "0 4px 20px rgba(37,99,235,0.1)" : "none",
                transition: "border-color 0.2s, box-shadow 0.2s"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setOpen(!open),
                    style: {
                        width: "100%",
                        padding: "22px 26px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: open ? "#EFF6FF" : "#fff",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "background 0.2s"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 15.5,
                                fontWeight: 700,
                                color: "#0F172A",
                                lineHeight: 1.4,
                                paddingRight: 20
                            },
                            children: q
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 1725,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 32,
                                height: 32,
                                borderRadius: "50%",
                                flexShrink: 0,
                                background: open ? "linear-gradient(135deg,#2563EB,#7C3AED)" : "#F1F5F9",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "background 0.2s, transform 0.3s",
                                transform: open ? "rotate(45deg)" : "rotate(0deg)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "13",
                                height: "13",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: open ? "white" : "#94A3B8",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "5",
                                        x2: "12",
                                        y2: "19"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 1734,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "5",
                                        y1: "12",
                                        x2: "19",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                        lineNumber: 1734,
                                        columnNumber: 53
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1733,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 1726,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 1715,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: "auto"
                        },
                        exit: {
                            height: 0
                        },
                        transition: {
                            duration: 0.3,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        style: {
                            overflow: "hidden"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "4px 26px 24px",
                                background: "#EFF6FF"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 14.5,
                                    color: "#374151",
                                    lineHeight: 1.8,
                                    margin: 0
                                },
                                children: a
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                                lineNumber: 1748,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                            lineNumber: 1747,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                        lineNumber: 1740,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
                    lineNumber: 1738,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
            lineNumber: 1709,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/services/software-engineering/page.tsx",
        lineNumber: 1708,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_%28pages%29_services_software-engineering_page_tsx_6deae987._.js.map