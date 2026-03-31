module.exports = [
"[project]/app/(pages)/services/ai-labs/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AiLabsPage
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
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
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
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
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
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
}
/* ══════════════════════════════════════════════════════════
   AI LABS VIZ — model inference pipeline animation
══════════════════════════════════════════════════════════ */ function AiLabsViz() {
    const [activeModel, setActiveModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [tokens, setTokens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = setInterval(()=>setActiveModel((m)=>(m + 1) % 4), 2400);
        return ()=>clearInterval(id);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let p = 0;
        const id = setInterval(()=>{
            p = (p + 2) % 102;
            setProgress(p > 100 ? 0 : p);
        }, 40);
        return ()=>clearInterval(id);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = setInterval(()=>{
            setTokens((prev)=>{
                const next = [
                    ...prev,
                    Math.random()
                ];
                return next.length > 8 ? next.slice(next.length - 8) : next;
            });
        }, 260);
        return ()=>clearInterval(id);
    }, []);
    const models = [
        {
            name: "GPT-5.4",
            tag: "Language",
            color: "#10B981",
            bg: "#D1FAE5"
        },
        {
            name: "Claude Opus 4.6",
            tag: "Reasoning",
            color: "#7C3AED",
            bg: "#EDE9FE"
        },
        {
            name: "Gemini 3.1 Pro",
            tag: "Multimodal",
            color: "#2563EB",
            bg: "#DBEAFE"
        },
        {
            name: "Llama 3.1",
            tag: "Open Source",
            color: "#D97706",
            bg: "#FEF3C7"
        }
    ];
    const metrics = [
        {
            label: "Latency",
            val: "42ms",
            color: "#10B981"
        },
        {
            label: "Accuracy",
            val: "98.7%",
            color: "#2563EB"
        },
        {
            label: "Throughput",
            val: "12k/s",
            color: "#7C3AED"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "16px 20px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(15,23,42,0.07)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 11.5,
                            fontWeight: 700,
                            color: "rgba(15,23,42,0.4)",
                            letterSpacing: "0.05em"
                        },
                        children: "MODEL INFERENCE"
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    opacity: [
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 1.2,
                                    repeat: Infinity
                                },
                                style: {
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: "#10B981"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 10,
                                    fontWeight: 700,
                                    color: "#10B981",
                                    letterSpacing: "0.06em"
                                },
                                children: "PROCESSING"
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: 8,
                    padding: "16px 20px 12px"
                },
                children: models.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setActiveModel(i),
                        style: {
                            padding: "10px 10px 10px",
                            borderRadius: 12,
                            background: activeModel === i ? m.color + "15" : "rgba(248,250,255,0.7)",
                            border: `1.5px solid ${activeModel === i ? m.color + "55" : "rgba(37,99,235,0.08)"}`,
                            cursor: "pointer",
                            transition: "all 0.25s"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 9.5,
                                    fontWeight: 700,
                                    color: activeModel === i ? m.color : "rgba(15,23,42,0.35)",
                                    letterSpacing: "0.04em",
                                    marginBottom: 3,
                                    textTransform: "uppercase"
                                },
                                children: m.tag
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11.5,
                                    fontWeight: 800,
                                    color: activeModel === i ? m.color : "rgba(15,23,42,0.55)",
                                    letterSpacing: "-0.01em"
                                },
                                children: m.name
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "0 20px 12px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 10.5,
                                    fontWeight: 600,
                                    color: "rgba(15,23,42,0.35)"
                                },
                                children: "Inference pipeline"
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 10.5,
                                    fontWeight: 700,
                                    color: models[activeModel].color
                                },
                                children: [
                                    progress,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 5,
                            borderRadius: 5,
                            background: "rgba(37,99,235,0.08)",
                            overflow: "hidden"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            style: {
                                height: "100%",
                                borderRadius: 5,
                                background: `linear-gradient(90deg, ${models[activeModel].color}88, ${models[activeModel].color})`
                            },
                            animate: {
                                width: `${progress}%`
                            },
                            transition: {
                                duration: 0.04,
                                ease: "linear"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "0 20px 14px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 10,
                            fontWeight: 600,
                            color: "rgba(15,23,42,0.3)",
                            marginBottom: 6,
                            letterSpacing: "0.05em"
                        },
                        children: "TOKEN STREAM"
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 4,
                            flexWrap: "wrap"
                        },
                        children: tokens.map((t, i)=>{
                            const tVal = Math.floor(t * 1000);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.7
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: 0.2
                                },
                                style: {
                                    padding: "3px 7px",
                                    borderRadius: 6,
                                    background: `${models[activeModel].color}12`,
                                    border: `1px solid ${models[activeModel].color}25`,
                                    fontSize: 9.5,
                                    fontWeight: 700,
                                    color: models[activeModel].color,
                                    fontFamily: "monospace"
                                },
                                children: tVal
                            }, i, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: "1px solid rgba(15,23,42,0.07)",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr"
                },
                children: metrics.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "16px 20px 18px",
                            borderRight: i < 2 ? "1px solid rgba(15,23,42,0.07)" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 22,
                                    fontWeight: 900,
                                    color: m.color,
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1,
                                    marginBottom: 5
                                },
                                children: m.val
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11.5,
                                    color: "rgba(15,23,42,0.45)",
                                    fontWeight: 400
                                },
                                children: m.label
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   TICKER BANNER
══════════════════════════════════════════════════════════ */ const TICKER_ITEMS = [
    "🧠 Custom LLM fine-tuning on your proprietary data",
    "⚡ Sub-50ms inference latency with GPU-accelerated pipelines",
    "🔬 AI research & prototyping to production-grade deployment",
    "🤖 RAG systems, agents & autonomous workflow orchestration",
    "📊 Real-time AI analytics and intelligent decision engines",
    "🔐 Private, secure AI deployments — your data never leaves",
    "🌐 Multimodal AI: vision, language, speech & structured data",
    "🚀 From proof-of-concept to enterprise scale in weeks"
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
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 225,
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
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 221,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 215,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   ROI CALCULATOR (AI Labs)
══════════════════════════════════════════════════════════ */ function ROICalculator() {
    const [manualTasks, setManualTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(40);
    const [teamSize, setTeamSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [avgSalary, setAvgSalary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(55000);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-60px"
    });
    const hoursSaved = manualTasks * teamSize * 52;
    const costOfManual = avgSalary / 2080 * hoursSaved;
    const aiCost = teamSize * 1200 * 12;
    const savings = Math.max(0, Math.round(costOfManual - aiCost));
    const roi = savings > 0 ? Math.round(savings / aiCost * 100) : 0;
    const productivityGain = Math.round(manualTasks / 40 * 100 * 0.7);
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
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 257,
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
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 260,
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
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 262,
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
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 277,
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
                                            children: "AI ROI Calculator"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 272,
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
                                        "What could AI automation save",
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
                                                background: "linear-gradient(90deg, #2563EB, #7C3AED, #10B981, #2563EB)",
                                                backgroundSize: "300% 100%",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                display: "inline"
                                            },
                                            children: "your team?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 284,
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
                                    children: "Estimate the annual cost savings from replacing manual, repetitive workflows with AI-powered automation."
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 271,
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
                                            label: "Hours per week spent on manual tasks (per person)",
                                            value: manualTasks,
                                            min: 5,
                                            max: 80,
                                            step: 5,
                                            set: setManualTasks,
                                            suffix: " hrs",
                                            color: "#2563EB"
                                        },
                                        {
                                            label: "Team size (people affected)",
                                            value: teamSize,
                                            min: 2,
                                            max: 200,
                                            step: 1,
                                            set: setTeamSize,
                                            suffix: " people",
                                            color: "#7C3AED"
                                        },
                                        {
                                            label: "Average team member salary (£/year)",
                                            value: avgSalary,
                                            min: 25000,
                                            max: 150000,
                                            step: 5000,
                                            set: setAvgSalary,
                                            suffix: "",
                                            prefix: "£",
                                            color: "#10B981"
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
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 316,
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
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 315,
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
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 322,
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
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 328,
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
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 314,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 308,
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
                                                    children: "Estimated annual cost saving"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 354,
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
                                                        background: "linear-gradient(135deg, #10B981, #059669)",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent",
                                                        letterSpacing: "-0.04em",
                                                        lineHeight: 1
                                                    },
                                                    children: [
                                                        "£",
                                                        (savings / 1000).toFixed(0),
                                                        "k"
                                                    ]
                                                }, savings, true, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 13,
                                                        color: "rgba(15,23,42,0.4)",
                                                        marginTop: 8,
                                                        fontWeight: 500
                                                    },
                                                    children: "saved per year with AI automation"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                height: 1,
                                                background: "rgba(37,99,235,0.08)",
                                                marginBottom: 24
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 372,
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
                                                    label: "Annual manual labour cost",
                                                    value: `£${Math.round(costOfManual / 1000)}k`,
                                                    color: "#DC2626"
                                                },
                                                {
                                                    label: "AI automation platform cost",
                                                    value: `£${Math.round(aiCost / 1000)}k/yr`,
                                                    color: "#2563EB"
                                                },
                                                {
                                                    label: "Productivity gain estimate",
                                                    value: `+${productivityGain}%`,
                                                    color: "#7C3AED"
                                                },
                                                {
                                                    label: "First-year ROI",
                                                    value: `${roi}%`,
                                                    color: "#10B981"
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
                                                                fontSize: 12.5,
                                                                color: "rgba(15,23,42,0.6)",
                                                                fontWeight: 500
                                                            },
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 14,
                                                                fontWeight: 800,
                                                                color
                                                            },
                                                            children: value
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, label, true, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 374,
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
                                                "Get your free AI readiness assessment",
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
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 155
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "12 5 19 12 12 19"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 193
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 392,
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
                                            children: "Based on real deployments across 50+ enterprise AI engagements. Actual results vary."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 406,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   AI TOOLS MARQUEE
══════════════════════════════════════════════════════════ */ const AI_TOOLS = [
    {
        name: "OpenAI GPT-4",
        color: "#10A37F"
    },
    {
        name: "Anthropic Claude",
        color: "#C17B40"
    },
    {
        name: "Google Gemini",
        color: "#4285F4"
    },
    {
        name: "Meta Llama",
        color: "#0668E1"
    },
    {
        name: "Hugging Face",
        color: "#FFD21E"
    },
    {
        name: "LangChain",
        color: "#1C3D5A"
    },
    {
        name: "LlamaIndex",
        color: "#6E54F7"
    },
    {
        name: "Pinecone",
        color: "#1E8A5E"
    },
    {
        name: "Weaviate",
        color: "#FF5A1F"
    },
    {
        name: "PyTorch",
        color: "#EE4C2C"
    },
    {
        name: "TensorFlow",
        color: "#FF6F00"
    },
    {
        name: "AWS Bedrock",
        color: "#FF9900"
    }
];
function AiToolsStrip() {
    const doubled = [
        ...AI_TOOLS,
        ...AI_TOOLS
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
                    children: "AI Models & Platforms We Deploy"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 440,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 439,
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
                children: doubled.map((tool, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    background: tool.color,
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: "#374151",
                                    letterSpacing: "-0.01em"
                                },
                                children: tool.name
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 457,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 450,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 444,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 438,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   RESULTS STRIP
══════════════════════════════════════════════════════════ */ const clientResults = [
    {
        metric: "78%",
        label: "reduction in manual processing",
        quote: "KeySol's AI pipeline replaced 3 full-time data entry roles overnight. The accuracy is higher than humans and it runs 24/7. Transformative for our operations.",
        name: "COO, Insurance Platform (250 staff)",
        color: "#2563EB"
    },
    {
        metric: "12×",
        label: "faster document analysis",
        quote: "What took our legal team a week now takes 4 hours. The custom LLM they fine-tuned on our contract library is genuinely impressive.",
        name: "Head of Legal Ops, PE-backed Law Firm",
        color: "#7C3AED"
    },
    {
        metric: "£2.1M",
        label: "annual labour cost saved",
        quote: "The AI agents handle our entire customer triage and first-response layer. Support tickets resolved without a human touch went from 12% to 71% in 3 months.",
        name: "VP Customer Success, SaaS Platform",
        color: "#10B981"
    },
    {
        metric: "94%",
        label: "AI prediction accuracy",
        quote: "Their demand forecasting model cut our stock write-offs by 44% in the first quarter. The ROI was evident before the engagement even ended.",
        name: "Supply Chain Director, FMCG Brand",
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
                                border: "1px solid rgba(16,185,129,0.2)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        background: "#10B981"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 512,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 11,
                                        fontWeight: 700,
                                        color: "#10B981",
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase"
                                    },
                                    children: "Client Results"
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 507,
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
                            children: "Real AI outcomes from real deployments"
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 515,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 501,
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
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 535,
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
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 536,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 534,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: 1.5,
                                        background: `linear-gradient(90deg, ${r.color}40, transparent)`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 538,
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
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 539,
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
                                                "🧠",
                                                "⚖️",
                                                "🤖",
                                                "📦"
                                            ][i]
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 543,
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
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 550,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 542,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 522,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 520,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 500,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 499,
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 567,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 567,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Large Language Model Integration",
        desc: "Fine-tuned LLMs, RAG architectures, and agentic pipelines built on GPT-4, Claude, Llama, and Gemini — customised to your domain data and business logic.",
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 575,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 575,
                    columnNumber: 180
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 575,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "AI Agents & Automation Workflows",
        desc: "Autonomous AI agents that browse, reason, and act — orchestrated with LangChain, AutoGPT patterns, and custom tool use to replace entire manual workflows.",
        tag: ""
    },
    {
        gradient: "linear-gradient(135deg,#10B981,#059669)",
        glow: "rgba(16,185,129,0.3)",
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
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 583,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 583,
                    columnNumber: 188
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 583,
                    columnNumber: 233
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 583,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Vector Databases & RAG Systems",
        desc: "Pinecone, Weaviate, and pgvector-backed retrieval systems that give your AI accurate, grounded answers from your own knowledge bases and documents.",
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "3",
                    width: "20",
                    height: "14",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 591,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "21",
                    x2: "16",
                    y2: "21"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 591,
                    columnNumber: 198
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "17",
                    x2: "12",
                    y2: "21"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 591,
                    columnNumber: 236
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 591,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Computer Vision & Multimodal AI",
        desc: "Image classification, object detection, OCR pipelines, and multimodal models that process visual, audio, and text inputs in unified inference pipelines.",
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22 12 18 12 15 21 9 3 6 12 2 12"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 599,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 599,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Predictive Analytics & ML Models",
        desc: "Custom machine learning models for demand forecasting, churn prediction, fraud detection, and pricing optimisation — trained on your data, deployed in production.",
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 607,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 607,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Secure Private AI Deployment",
        desc: "On-premises and VPC-deployed AI — no data leaving your environment. Full SOC 2, GDPR, and ISO 27001 compliant AI infrastructure for regulated industries.",
        tag: ""
    }
];
const stats = [
    {
        value: 50,
        suffix: "+",
        label: "AI systems deployed",
        sub: "in production globally"
    },
    {
        value: 78,
        suffix: "%",
        label: "Avg. task automation",
        sub: "across client workflows"
    },
    {
        value: 12,
        suffix: "×",
        label: "Faster processing",
        sub: "vs. manual baselines"
    },
    {
        value: 94,
        suffix: "%",
        label: "Model accuracy",
        sub: "across all deployments"
    }
];
const processSteps = [
    {
        num: "01",
        color: "#2563EB",
        bg: "rgba(37,99,235,0.12)",
        title: "Discovery & Use Case Mapping",
        desc: "We audit your existing workflows, identify the highest-value AI opportunities, and prioritise use cases by ROI, feasibility, and strategic impact."
    },
    {
        num: "02",
        color: "#7C3AED",
        bg: "rgba(124,58,237,0.12)",
        title: "Data & Architecture Design",
        desc: "Data pipeline design, model selection, and system architecture — including privacy, compliance, and inference cost planning before any model is touched."
    },
    {
        num: "03",
        color: "#10B981",
        bg: "rgba(16,185,129,0.12)",
        title: "Model Build & Fine-Tuning",
        desc: "Training, fine-tuning, and RAG implementation on your proprietary data — with evaluation frameworks and benchmark targets agreed upfront."
    },
    {
        num: "04",
        color: "#059669",
        bg: "rgba(5,150,105,0.12)",
        title: "Integration & Deployment",
        desc: "Production-grade API deployment, monitoring dashboards, fallback logic, and human-in-the-loop controls so the system operates reliably at scale."
    },
    {
        num: "05",
        color: "#D97706",
        bg: "rgba(217,119,6,0.12)",
        title: "Iterate & Scale",
        desc: "Continuous model improvement via feedback loops, retraining pipelines, and performance telemetry — ensuring your AI compounds in capability over time."
    }
];
const useCases = [
    {
        industry: "Financial Services",
        icon: "💳",
        color: "#2563EB",
        items: [
            "AI-powered fraud detection & AML monitoring",
            "Automated document & contract analysis",
            "Intelligent customer onboarding & KYC"
        ]
    },
    {
        industry: "Healthcare & Life Sciences",
        icon: "🏥",
        color: "#10B981",
        items: [
            "Clinical note summarisation & coding",
            "Medical imaging analysis pipelines",
            "Drug interaction & research AI assistants"
        ]
    },
    {
        industry: "Legal & Professional Services",
        icon: "⚖️",
        color: "#7C3AED",
        items: [
            "Contract review & due diligence automation",
            "Legal research and case law retrieval (RAG)",
            "Regulatory compliance monitoring agents"
        ]
    },
    {
        industry: "E-commerce & Retail",
        icon: "🛍️",
        color: "#D97706",
        items: [
            "AI-powered search & personalisation",
            "Demand forecasting & inventory optimisation",
            "Automated product description generation"
        ]
    },
    {
        industry: "Manufacturing & Logistics",
        icon: "🏭",
        color: "#0891B2",
        items: [
            "Predictive maintenance with sensor AI",
            "Computer vision quality inspection",
            "Supply chain optimisation agents"
        ]
    },
    {
        industry: "SaaS & Tech Platforms",
        icon: "☁️",
        color: "#DC2626",
        items: [
            "AI-native product features & copilots",
            "Intelligent support ticket triage",
            "Automated code review & documentation"
        ]
    }
];
const reasons = [
    {
        color: "#2563EB",
        stat: "50+",
        statLabel: "AI systems in production",
        title: "Research-grade, production-ready",
        desc: "Our AI scientists and ML engineers combine academic rigour with hands-on deployment experience — models that work in the lab and hold up in production at enterprise scale.",
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
                    d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3M6.343 6.343l-.707-.707M6.343 17.657l-.707.707M15.657 6.343l.707-.707M15.657 17.657l.707.707M12 21v-1"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 694,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 694,
                    columnNumber: 322
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 694,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        color: "#7C3AED",
        stat: "100%",
        statLabel: "explainable outputs",
        title: "AI you can trust and audit",
        desc: "Every model we deploy comes with explainability tooling, confidence scores, and audit logs — because enterprise AI must be accountable, not a black box.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 701,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 701,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        color: "#10B981",
        stat: "GDPR",
        statLabel: "& SOC 2 compliant",
        title: "Privacy-first by design",
        desc: "Data never leaves your environment unless you choose otherwise. On-prem, VPC, and hybrid deployments with full encryption, access controls, and compliance documentation.",
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
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 708,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 11V7a5 5 0 0 1 10 0v4"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 708,
                    columnNumber: 206
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 708,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        color: "#D97706",
        stat: "24 / 7",
        statLabel: "model monitoring",
        title: "AI that stays sharp",
        desc: "Continuous drift detection, automated retraining triggers, and performance dashboards ensure your models remain accurate as your data and business evolve.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22 12 18 12 15 21 9 3 6 12 2 12"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 715,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 715,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const faqs = [
    {
        q: "Do we need large amounts of data to build a custom AI model?",
        a: "Not necessarily. For many use cases, fine-tuning a foundation model on 500–2,000 high-quality examples produces excellent results. For RAG systems, your existing documents and knowledge bases are sufficient. We advise on the minimum viable data requirement during discovery — no false starts."
    },
    {
        q: "How do you ensure our proprietary data stays secure?",
        a: "We offer fully private deployments where models are hosted in your own cloud environment (AWS, GCP, Azure) or on-premises. Data never passes through third-party APIs unless you explicitly choose managed model providers with your own API keys and data agreements in place."
    },
    {
        q: "How long does it take to go from idea to production AI?",
        a: "A well-scoped RAG system or LLM integration can go live in 4–6 weeks. Custom-trained models with production pipelines typically take 8–16 weeks. We always run a 1-week proof-of-concept sprint first to validate the approach and de-risk the engagement before full build."
    },
    {
        q: "Can you improve or replace an existing AI system we've built?",
        a: "Yes — this is common. We'll audit your existing models, data pipelines, and evaluation methodology, then propose targeted improvements or a full rebuild where warranted. Many of our best engagements started as rescue projects from in-house or agency-built AI that underperformed."
    },
    {
        q: "What happens when AI models degrade over time?",
        a: "We build continuous monitoring into every deployment — tracking accuracy, output quality, and data drift. Retraining triggers and human-review queues catch degradation before it impacts your business. We offer retainer-based MLOps support to keep your models production-sharp indefinitely."
    }
];
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
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 731,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 731,
                columnNumber: 180
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "a", true, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 731,
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        }, void 0, false, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 732,
            columnNumber: 149
        }, ("TURBOPACK compile-time value", void 0))
    }, "b", false, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 732,
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
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 733,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "8 6 2 12 8 18"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 733,
                columnNumber: 186
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "c", true, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 733,
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
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 734,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22 4 12 14.01 9 11.01"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 734,
                columnNumber: 195
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "d", true, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 734,
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
                d: "M12 2L2 7l10 5 10-5-10-5z"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 735,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 17l10 5 10-5"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 735,
                columnNumber: 186
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12l10 5 10-5"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 735,
                columnNumber: 213
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "e", true, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 735,
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
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 760,
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
                        pointerEvents: "none"
                    },
                    children: step.num
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 765,
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
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 773,
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
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 791,
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
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 792,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 785,
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
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 797,
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
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 799,
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
                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                lineNumber: 820,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "12 5 19 12 12 19"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                lineNumber: 820,
                                                columnNumber: 55
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 817,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 807,
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
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 823,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 806,
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
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 830,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 828,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 801,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 742,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 741,
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
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 862,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 861,
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
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 874,
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
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 875,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 873,
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
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 877,
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
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 878,
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
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 879,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 846,
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
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 904,
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
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 911,
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
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 918,
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
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 925,
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
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 926,
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
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 934,
                                columnNumber: 149
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "12 5 19 12 12 19"
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 934,
                                columnNumber: 187
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 934,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 927,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 890,
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
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 963,
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
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 972,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "5",
                                        y1: "12",
                                        x2: "19",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 972,
                                        columnNumber: 53
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 971,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 964,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 953,
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
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 986,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 985,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 978,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 976,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
            lineNumber: 947,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 946,
        columnNumber: 5
    }, this);
}
function AiLabsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
            background: "#fff",
            overflowX: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TickerBanner, {}, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 1004,
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
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1012,
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
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1015,
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
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1018,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: -100,
                            width: 400,
                            height: 400,
                            background: "radial-gradient(ellipse at center, rgba(16,185,129,0.05) 0%, transparent 65%)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1021,
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
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1026,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1024,
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
                                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                        lineNumber: 1042,
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
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 1043,
                                                            columnNumber: 126
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                        lineNumber: 1043,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: "#2563EB",
                                                            fontWeight: 600
                                                        },
                                                        children: "AI Labs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                        lineNumber: 1044,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                lineNumber: 1041,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1040,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeUp, {
                                            delay: 0.06,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: 9,
                                                    background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(16,185,129,0.08))",
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
                                                            background: "linear-gradient(135deg,#2563EB,#10B981)",
                                                            boxShadow: "0 0 8px rgba(16,185,129,0.5)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                        lineNumber: 1056,
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
                                                        children: "Applied AI Research"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                        lineNumber: 1061,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                lineNumber: 1049,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1048,
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
                                                children: "AI Labs"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                lineNumber: 1068,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1067,
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
                                                    children: "built to reason."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1075,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                lineNumber: 1074,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1073,
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
                                                children: "We research, design, and deploy production-grade AI systems — custom LLMs, intelligent agents, RAG pipelines, and predictive models — that automate complex work and unlock entirely new business capabilities."
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                lineNumber: 1091,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1090,
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
                                                            "Start an AI Project",
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
                                                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                        lineNumber: 1110,
                                                                        columnNumber: 159
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                        points: "12 5 19 12 12 19"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                        lineNumber: 1110,
                                                                        columnNumber: 197
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                lineNumber: 1110,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                        lineNumber: 1098,
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
                                                        children: "Free AI Assessment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                        lineNumber: 1112,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                lineNumber: 1097,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1096,
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
                                                        dot: "#10B981",
                                                        text: "78% avg. task automation",
                                                        border: true
                                                    },
                                                    {
                                                        dot: "#2563EB",
                                                        text: "Private & secure AI",
                                                        border: true
                                                    },
                                                    {
                                                        dot: "#7C3AED",
                                                        text: "POC in 1 week",
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
                                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                lineNumber: 1140,
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
                                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                lineNumber: 1141,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, text, true, {
                                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                        lineNumber: 1135,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                lineNumber: 1129,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1128,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 1039,
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,255,0.9) 100%)",
                                                backdropFilter: "blur(24px)",
                                                border: "1px solid rgba(37,99,235,0.12)",
                                                borderRadius: 28,
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
                                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                            lineNumber: 1168,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                    lineNumber: 1166,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 12,
                                                                        fontWeight: 600,
                                                                        color: "rgba(15,23,42,0.45)",
                                                                        marginLeft: 6
                                                                    },
                                                                    children: "KeySol AI Labs — Live Demo"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                    lineNumber: 1171,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 1165,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 6,
                                                                background: "rgba(16,185,129,0.12)",
                                                                border: "1px solid rgba(16,185,129,0.28)",
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
                                                                        background: "#10B981",
                                                                        flexShrink: 0
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                    lineNumber: 1178,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 10.5,
                                                                        fontWeight: 800,
                                                                        color: "#10B981",
                                                                        letterSpacing: "0.04em"
                                                                    },
                                                                    children: "LIVE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                    lineNumber: 1183,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 1173,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1159,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AiLabsViz, {}, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1188,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1151,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 1150,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 1149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 1036,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1035,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 1007,
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
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1203,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 1202,
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
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 1205,
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
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 1206,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1201,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 1200,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 1198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 1197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AiToolsStrip, {}, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 1214,
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
                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                lineNumber: 1222,
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
                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                lineNumber: 1223,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 1221,
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
                                        children: "End-to-end AI capabilities"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 1225,
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
                                        children: "From fine-tuned language models to computer vision and predictive analytics — we cover every layer of the modern AI stack."
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 1228,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1220,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 1219,
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
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 1236,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 1235,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 1233,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 1218,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 1217,
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
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1249,
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
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1252,
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
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1256,
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
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1268,
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
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1273,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1263,
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
                                                "How we build AI",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1276,
                                                    columnNumber: 32
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
                                                        background: "linear-gradient(90deg, #2563EB, #7C3AED, #10B981, #2563EB)",
                                                        backgroundSize: "300% 100%",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent",
                                                        display: "inline"
                                                    },
                                                    children: "that actually works in production."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1277,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1275,
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
                                            children: "A rigorous 5-phase AI delivery methodology that takes you from business problem to production-grade system — de-risked at every step."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1290,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 1262,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1261,
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
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1299,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 1298,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1296,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 1244,
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
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1313,
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
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1314,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1312,
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
                                            children: "AI that works across every industry"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1316,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 15.5,
                                                color: "#6B7280",
                                                lineHeight: 1.75,
                                                marginBottom: 32
                                            },
                                            children: "From financial services to manufacturing — every sector has workflows that can be intelligently automated. We have deployed AI across them all."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1319,
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
                                                "Discuss your AI use case",
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
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 1330,
                                                            columnNumber: 157
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "12 5 19 12 12 19"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 1330,
                                                            columnNumber: 195
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1330,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1322,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 1311,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1310,
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
                                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                lineNumber: 1347,
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
                                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                lineNumber: 1348,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                        lineNumber: 1346,
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
                                                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                        lineNumber: 1353,
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
                                                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                        lineNumber: 1354,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, j, true, {
                                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                                lineNumber: 1352,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                        lineNumber: 1350,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                lineNumber: 1339,
                                                columnNumber: 21
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1338,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 1336,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1335,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1309,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 1308,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 1307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultsStrip, {}, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 1368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ROICalculator, {}, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 1371,
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
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1379,
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
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1382,
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
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1384,
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
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1395,
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
                                                    children: "Why KeySol AI Labs"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1400,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1390,
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
                                            children: "We don't do AI demos."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1402,
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
                                                background: "linear-gradient(90deg, #2563EB, #7C3AED, #10B981, #2563EB)",
                                                backgroundSize: "300% 100%",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                letterSpacing: "-0.03em",
                                                lineHeight: 1.1,
                                                marginBottom: 28,
                                                display: "block"
                                            },
                                            children: "We build production AI."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1405,
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
                                            children: "Real ML engineers. Real data pipelines. Real accountability — from prototype to enterprise-scale deployment."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1419,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 1389,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1388,
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
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1428,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 1427,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1425,
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
                                            val: "POC in 1 week",
                                            label: "Rapid validation"
                                        },
                                        {
                                            val: "Full IP transfer",
                                            label: "You own the model"
                                        },
                                        {
                                            val: "MLOps retainer",
                                            label: "Ongoing model care"
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
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1442,
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
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1443,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, val, true, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1441,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 1434,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1433,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1387,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 1374,
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
                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                lineNumber: 1457,
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
                                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                lineNumber: 1458,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 1456,
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
                                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                        lineNumber: 1460,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1455,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 1454,
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
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 1467,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                            lineNumber: 1465,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                    lineNumber: 1453,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 1452,
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
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1479,
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
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1482,
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
                                                background: "#10B981"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1494,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 12,
                                                fontWeight: 700,
                                                color: "#2563EB",
                                                letterSpacing: "0.06em"
                                            },
                                            children: "Free AI readiness assessment — no obligation"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1495,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 1489,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1488,
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
                                        "Ready to build AI that actually",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1500,
                                            columnNumber: 46
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
                                                background: "linear-gradient(90deg, #2563EB, #7C3AED, #10B981, #2563EB)",
                                                backgroundSize: "300% 100%",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                display: "inline"
                                            },
                                            children: "works for your business?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1501,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 1499,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1498,
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
                                    children: "Book a free AI readiness assessment with one of our ML engineers. We'll identify your highest-value AI opportunities and give you a clear, risk-free roadmap — with a 1-week POC to prove it before any commitment."
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 1516,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1515,
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
                                                "Get My Free AI Assessment",
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
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 1534,
                                                            columnNumber: 155
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "12 5 19 12 12 19"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                            lineNumber: 1534,
                                                            columnNumber: 193
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1534,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1522,
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
                                            children: "View AI Case Studies"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1536,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 1521,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1520,
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
                                            text: "POC in 1 week"
                                        },
                                        {
                                            icon: "🧠",
                                            text: "Senior ML engineer assigned"
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
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1560,
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
                                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                                    lineNumber: 1561,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, text, true, {
                                            fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                            lineNumber: 1559,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                    lineNumber: 1553,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                                lineNumber: 1552,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                        lineNumber: 1487,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
                lineNumber: 1474,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/ai-labs/page.tsx",
        lineNumber: 1001,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_%28pages%29_services_ai-labs_page_tsx_065db6c7._.js.map