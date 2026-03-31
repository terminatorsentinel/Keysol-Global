module.exports = [
"[project]/app/(pages)/services/digital-growth/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DigitalGrowthPage
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
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
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
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
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
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
}
/* ══════════════════════════════════════════════════════════
   GROWTH DASHBOARD VIZ — chart + legend + KPI in HTML
══════════════════════════════════════════════════════════ */ function GrowthDashboardViz() {
    const [activePt, setActivePt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = setInterval(()=>setActivePt((p)=>(p + 1) % 9), 1200);
        return ()=>clearInterval(id);
    }, []);
    const barData = [
        32,
        48,
        58,
        54,
        76,
        90,
        82,
        100,
        94
    ];
    const lineData = [
        18,
        24,
        30,
        28,
        40,
        50,
        48,
        60,
        58
    ];
    const months = [
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov"
    ];
    // viewBox 400 × 170  — bars + line + month labels only
    const CX = 16, CY = 20, CW = 368, CH = 132;
    const maxV = 112;
    const barGap = CW / barData.length;
    const barW = barGap * 0.58;
    const bX = (i)=>CX + i * barGap + (barGap - barW) / 2;
    const bH = (v)=>v / maxV * CH;
    const bY = (v)=>CY + CH - bH(v);
    const lX = (i)=>CX + i * barGap + barGap / 2;
    const lY = (v)=>CY + CH - v / maxV * CH;
    const smoothLine = lineData.map((v, i)=>{
        if (i === 0) return `M${lX(0)},${lY(v)}`;
        const x0 = lX(i - 1), y0 = lY(lineData[i - 1]);
        const x1 = lX(i), y1 = lY(v);
        const cx = (x0 + x1) / 2;
        return `C${cx},${y0} ${cx},${y1} ${x1},${y1}`;
    }).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 400 170",
                width: "100%",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                    display: "block"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "barDef",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#A5B4FC",
                                        stopOpacity: "0.55"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#C7D7FF",
                                        stopOpacity: "0.08"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "barAct",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#7C3AED",
                                        stopOpacity: "0.95"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#A78BFA",
                                        stopOpacity: "0.6"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "lineWash",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#22C55E",
                                        stopOpacity: "0.12"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#22C55E",
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                id: "cc",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: CX,
                                    y: CY,
                                    width: CW,
                                    height: CH
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    barData.map((v, i)=>{
                        const isActive = i === activePt;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: bX(i),
                                    y: bY(v),
                                    width: barW,
                                    height: bH(v),
                                    rx: "6",
                                    fill: isActive ? "url(#barAct)" : "url(#barDef)"
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: bX(i) + barW / 2,
                                    y: bY(v) - 6,
                                    textAnchor: "middle",
                                    fill: "#7C3AED",
                                    fontSize: "9",
                                    fontFamily: "Inter,sans-serif",
                                    fontWeight: "700",
                                    children: [
                                        "+",
                                        Math.round(v * 0.45),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: smoothLine + ` L${lX(8)},${CY + CH} L${lX(0)},${CY + CH} Z`,
                        fill: "url(#lineWash)",
                        clipPath: "url(#cc)"
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: smoothLine,
                        fill: "none",
                        stroke: "#22C55E",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        clipPath: "url(#cc)"
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    months.map((m, i)=>i % 2 === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: lX(i),
                            y: CY + CH + 16,
                            textAnchor: "middle",
                            fill: "rgba(15,23,42,0.28)",
                            fontSize: "9",
                            fontFamily: "Inter,sans-serif",
                            children: m
                        }, i, false, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this) : null)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    padding: "8px 20px 12px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 10,
                                    height: 10,
                                    borderRadius: 2,
                                    background: "#93C5FD",
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 11,
                                    color: "rgba(15,23,42,0.4)",
                                    fontWeight: 400
                                },
                                children: "Revenue"
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 20,
                                    height: 3,
                                    borderRadius: 2,
                                    background: "#22C55E",
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 11,
                                    color: "rgba(15,23,42,0.4)",
                                    fontWeight: 400
                                },
                                children: "Organic Growth"
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: "1px solid rgba(15,23,42,0.07)",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr"
                },
                children: [
                    {
                        val: "+318%",
                        label: "Organic Traffic",
                        sub: "↑ 12% this month",
                        color: "#16A34A",
                        border: true
                    },
                    {
                        val: "4.8×",
                        label: "Google Ads ROAS",
                        sub: "↑ 0.3 vs last month",
                        color: "#2563EB",
                        border: true
                    },
                    {
                        val: "−62%",
                        label: "Cost Per Lead",
                        sub: "vs. 6 months ago",
                        color: "#D97706",
                        border: false
                    }
                ].map((kpi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "18px 20px 20px",
                            borderRight: kpi.border ? "1px solid rgba(15,23,42,0.07)" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 24,
                                    fontWeight: 900,
                                    color: kpi.color,
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1,
                                    marginBottom: 6
                                },
                                children: kpi.val
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: "rgba(15,23,42,0.45)",
                                    fontWeight: 400,
                                    marginBottom: 5
                                },
                                children: kpi.label
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11.5,
                                    color: kpi.color,
                                    fontWeight: 600
                                },
                                children: kpi.sub
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        ]
                    }, kpi.label, true, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   TICKER BANNER
══════════════════════════════════════════════════════════ */ const TICKER_ITEMS = [
    "📈 320% average organic traffic growth within 12 months",
    "🎯 4× ROAS improvement across paid media accounts",
    "📉 65% lower cost-per-lead vs. industry benchmarks",
    "🚀 90+ brands scaled across B2B, SaaS & e-commerce",
    "🔍 Technical SEO, paid media, CRO & content under one roof",
    "📊 Full-funnel attribution — every £ tracked to revenue",
    "🤖 Marketing automation that works 24/7 to close pipeline",
    "🔒 No lock-in — month-to-month engagement terms"
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
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 223,
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
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 219,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 213,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   ROI CALCULATOR (Digital Growth)
══════════════════════════════════════════════════════════ */ function ROICalculator() {
    const [adSpend, setAdSpend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(5000);
    const [orgTrafficK, setOrgTrafficK] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [convRate, setConvRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-60px"
    });
    const avgOrderValue = 120; // assume £120 AOV
    const paidRevenue = adSpend * 4.2; // avg 4.2x ROAS after KeySol
    const currentPaidRevenue = adSpend * 1.8; // typical unoptimised
    const paidUplift = paidRevenue - currentPaidRevenue;
    const organicVisitors = orgTrafficK * 1000 * 3.2; // 320% growth
    const currentOrgVisitors = orgTrafficK * 1000;
    const organicUplift = (organicVisitors - currentOrgVisitors) * (convRate / 100) * avgOrderValue;
    const totalMonthlyUplift = Math.round(paidUplift + organicUplift);
    const annualUplift = totalMonthlyUplift * 12;
    const roiPct = Math.round(totalMonthlyUplift / (adSpend + 3000) * 100); // 3000 = approx retainer
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
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 261,
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
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 264,
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
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 266,
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
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 281,
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
                                            children: "Revenue Calculator"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 276,
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
                                        "What could growth look like",
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
                                            children: "for your brand?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 288,
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
                                    children: "Adjust the sliders to estimate the revenue uplift from a KeySol digital growth engagement."
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 275,
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
                                            label: "Monthly paid media ad spend (£)",
                                            value: adSpend,
                                            min: 1000,
                                            max: 50000,
                                            step: 500,
                                            set: setAdSpend,
                                            suffix: "",
                                            prefix: "£",
                                            color: "#2563EB"
                                        },
                                        {
                                            label: "Current monthly organic visitors (thousands)",
                                            value: orgTrafficK,
                                            min: 1,
                                            max: 200,
                                            step: 1,
                                            set: setOrgTrafficK,
                                            suffix: "k",
                                            prefix: "",
                                            color: "#7C3AED"
                                        },
                                        {
                                            label: "Current website conversion rate (%)",
                                            value: convRate,
                                            min: 0.5,
                                            max: 10,
                                            step: 0.5,
                                            set: setConvRate,
                                            suffix: "%",
                                            prefix: "",
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
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 320,
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
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 319,
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
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 326,
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
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 332,
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
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 312,
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
                                                    children: "Estimated monthly revenue uplift"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 358,
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
                                                        (totalMonthlyUplift / 1000).toFixed(1),
                                                        "k"
                                                    ]
                                                }, totalMonthlyUplift, true, {
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 13,
                                                        color: "rgba(15,23,42,0.4)",
                                                        marginTop: 8,
                                                        fontWeight: 500
                                                    },
                                                    children: "per month from paid + organic"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                height: 1,
                                                background: "rgba(37,99,235,0.08)",
                                                marginBottom: 24
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 376,
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
                                                    label: "Paid media revenue (at 4.2× ROAS)",
                                                    value: `£${Math.round(paidRevenue / 1000)}k/mo`,
                                                    color: "#2563EB"
                                                },
                                                {
                                                    label: "Paid revenue currently (est. 1.8× ROAS)",
                                                    value: `£${Math.round(currentPaidRevenue / 1000)}k/mo`,
                                                    color: "#DC2626"
                                                },
                                                {
                                                    label: "Organic traffic revenue uplift (320% growth)",
                                                    value: `£${Math.round(organicUplift / 1000)}k/mo`,
                                                    color: "#7C3AED"
                                                },
                                                {
                                                    label: "Projected annual uplift",
                                                    value: `£${Math.round(annualUplift / 1000)}k`,
                                                    color: "#059669"
                                                },
                                                {
                                                    label: "Estimated first-year ROI",
                                                    value: `${roiPct}%`,
                                                    color: "#D97706"
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
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 391,
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
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, label, true, {
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 378,
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
                                                "Get your free growth projection",
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
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 155
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "12 5 19 12 12 19"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 193
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 397,
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
                                            children: "Based on median results across 90+ brand engagements. Actual results vary by industry and baseline."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 411,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   GROWTH TOOLS MARQUEE
══════════════════════════════════════════════════════════ */ const GROWTH_TOOLS = [
    {
        name: "Google Ads",
        color: "#4285F4"
    },
    {
        name: "Meta Ads",
        color: "#1877F2"
    },
    {
        name: "SEMrush",
        color: "#FF642D"
    },
    {
        name: "HubSpot",
        color: "#FF7A59"
    },
    {
        name: "GA4",
        color: "#F57C00"
    },
    {
        name: "Ahrefs",
        color: "#1E7CFF"
    },
    {
        name: "LinkedIn Ads",
        color: "#0A66C2"
    },
    {
        name: "Hotjar",
        color: "#FD3A5C"
    },
    {
        name: "Klaviyo",
        color: "#00A36C"
    },
    {
        name: "Marketo",
        color: "#5C4EE5"
    },
    {
        name: "Looker Studio",
        color: "#4285F4"
    },
    {
        name: "Optimizely",
        color: "#0037FF"
    }
];
function GrowthToolsStrip() {
    const doubled = [
        ...GROWTH_TOOLS,
        ...GROWTH_TOOLS
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
                    children: "Platforms & Tools We Master"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 445,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 444,
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
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 461,
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
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 462,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 455,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 443,
        columnNumber: 5
    }, this);
}
/* ══════════════════════════════════════════════════════════
   RESULTS / TESTIMONIALS STRIP
══════════════════════════════════════════════════════════ */ const clientResults = [
    {
        metric: "320%",
        label: "organic traffic growth",
        quote: "KeySol rebuilt our entire SEO strategy from scratch. Within 8 months we went from page 5 to ranking #1 for our primary category. Traffic compounding ever since.",
        name: "CMO, SaaS Platform (Series B)",
        color: "#2563EB"
    },
    {
        metric: "4.8×",
        label: "paid media ROAS",
        quote: "We were burning £12k/month on Google Ads with a 1.6x return. KeySol restructured everything — within 60 days we hit 4.8x. Wish we'd done this two years ago.",
        name: "Growth Lead, D2C E-commerce Brand",
        color: "#7C3AED"
    },
    {
        metric: "62%",
        label: "lower cost-per-lead",
        quote: "Our CPL went from £180 to under £70 in a quarter. They completely rethought our targeting, creative strategy, and landing pages. Game-changing for our sales team.",
        name: "Head of Marketing, B2B Tech Company",
        color: "#059669"
    },
    {
        metric: "£1.4M",
        label: "additional revenue in year 1",
        quote: "The combined SEO, paid, and CRO programme generated £1.4M in attributable new revenue in the first 12 months — that's a 9× return on our engagement with KeySol.",
        name: "CEO, Professional Services Firm",
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
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 517,
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
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 518,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 512,
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
                            children: "Real growth from real engagements"
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 520,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 506,
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
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 540,
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
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 541,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 539,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: 1.5,
                                        background: `linear-gradient(90deg, ${r.color}40, transparent)`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 543,
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
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 544,
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
                                                "📈",
                                                "🎯",
                                                "💡",
                                                "💰"
                                            ][i]
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 548,
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
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 555,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 547,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 527,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 525,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 505,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 504,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 572,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "21",
                    x2: "16.65",
                    y2: "16.65"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 572,
                    columnNumber: 180
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 572,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Search Engine Optimisation",
        desc: "Technical SEO audits, on-page optimisation, link building, and content strategy engineered to dominate SERP rankings and compound organic traffic over time.",
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 580,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 580,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Performance Marketing",
        desc: "Data-driven paid media across Google, Meta, LinkedIn, and programmatic — precision targeting, ruthless optimisation, and ROAS that outperforms industry benchmarks.",
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
                    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 588,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 588,
                    columnNumber: 202
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23 21v-2a4 4 0 0 0-3-3.87"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 588,
                    columnNumber: 231
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 588,
                    columnNumber: 269
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 588,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Conversion Rate Optimisation",
        desc: "A/B testing frameworks, user journey analysis, landing page engineering, and funnel redesign that turns existing traffic into measurable revenue uplift.",
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 20h9"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 596,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 596,
                    columnNumber: 169
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 596,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Content & SEO Strategy",
        desc: "Editorial planning, long-form content production, thought leadership, and content marketing systems that build domain authority and attract qualified pipeline.",
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
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "3",
                    width: "20",
                    height: "14",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 604,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "21",
                    x2: "16",
                    y2: "21"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 604,
                    columnNumber: 198
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "17",
                    x2: "12",
                    y2: "21"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 604,
                    columnNumber: 236
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 604,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Marketing Automation",
        desc: "HubSpot, Marketo, and custom-built nurture sequences — automated lead scoring, email flows, and lifecycle campaigns that work 24/7 to move prospects to close.",
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18",
                    y1: "20",
                    x2: "18",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 612,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "20",
                    x2: "12",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 612,
                    columnNumber: 188
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "20",
                    x2: "6",
                    y2: "14"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 612,
                    columnNumber: 226
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 612,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Analytics & Growth Intelligence",
        desc: "GA4 implementation, custom dashboards, attribution modelling, and revenue analytics — so every growth decision is grounded in data, not gut feel.",
        tag: ""
    }
];
const stats = [
    {
        value: 320,
        suffix: "%",
        label: "Avg. traffic growth",
        sub: "organic, within 12 months"
    },
    {
        value: 4,
        suffix: "×",
        label: "ROAS improvement",
        sub: "across paid media accounts"
    },
    {
        value: 65,
        suffix: "%",
        label: "Lower CPL",
        sub: "vs. industry benchmarks"
    },
    {
        value: 90,
        suffix: "+",
        label: "Brands scaled",
        sub: "B2B, SaaS, e-commerce"
    }
];
const processSteps = [
    {
        num: "01",
        color: "#2563EB",
        bg: "rgba(37,99,235,0.12)",
        title: "Audit & Baseline",
        desc: "Comprehensive audit of your current SEO, paid, content, and funnel performance — benchmarked against competitors to identify the highest-leverage gaps."
    },
    {
        num: "02",
        color: "#7C3AED",
        bg: "rgba(124,58,237,0.12)",
        title: "Growth Strategy",
        desc: "A prioritised 90-day roadmap across channels — search, paid, content, and conversion — with clear KPIs and revenue targets baked in from the start."
    },
    {
        num: "03",
        color: "#0891B2",
        bg: "rgba(8,145,178,0.12)",
        title: "Execute & Test",
        desc: "Rapid execution across all agreed channels with continuous A/B testing, weekly optimisation cycles, and transparent performance reporting."
    },
    {
        num: "04",
        color: "#059669",
        bg: "rgba(5,150,105,0.12)",
        title: "Analyse & Iterate",
        desc: "Monthly deep-dive reviews — what&apos;s compounding, what needs pivoting, and where the next wave of growth unlocks lie based on your data."
    },
    {
        num: "05",
        color: "#D97706",
        bg: "rgba(217,119,6,0.12)",
        title: "Scale & Compound",
        desc: "Once channels prove ROI, we scale spend, content volume, and automation — building a self-reinforcing growth engine that compounds month over month."
    }
];
const useCases = [
    {
        industry: "SaaS & Tech",
        icon: "☁️",
        color: "#2563EB",
        items: [
            "Product-led SEO & content moats",
            "Trial-to-paid conversion optimisation",
            "LinkedIn & intent-based demand gen"
        ]
    },
    {
        industry: "E-commerce",
        icon: "🛍️",
        color: "#059669",
        items: [
            "Google Shopping & Performance Max",
            "Retargeting & cart abandonment recovery",
            "Organic category & brand SEO"
        ]
    },
    {
        industry: "B2B & Enterprise",
        icon: "🏢",
        color: "#7C3AED",
        items: [
            "Account-based marketing campaigns",
            "LinkedIn lead generation at scale",
            "Content-driven pipeline nurturing"
        ]
    },
    {
        industry: "Financial Services",
        icon: "💳",
        color: "#D97706",
        items: [
            "Compliant paid media for regulated sectors",
            "Trust-building content & SEO authority",
            "Lead qualification automation"
        ]
    },
    {
        industry: "Healthcare & MedTech",
        icon: "🏥",
        color: "#0891B2",
        items: [
            "YMYL-compliant SEO strategy",
            "Patient acquisition funnels",
            "HCP-targeted content programmes"
        ]
    },
    {
        industry: "Professional Services",
        icon: "⚖️",
        color: "#DC2626",
        items: [
            "Thought leadership & SEO authority",
            "Google Ads for high-intent keywords",
            "Client journey automation & CRM integration"
        ]
    }
];
const reasons = [
    {
        color: "#2563EB",
        stat: "90+",
        statLabel: "brands scaled",
        title: "Growth marketers, not generalists",
        desc: "Every strategist on your account has delivered measurable revenue growth — not vanity metrics — across competitive markets and enterprise budgets.",
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
                    points: "23 6 13.5 15.5 8.5 10.5 1 18"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 699,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "17 6 23 6 23 12"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 699,
                    columnNumber: 198
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 699,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        color: "#7C3AED",
        stat: "320%",
        statLabel: "avg. traffic growth",
        title: "Revenue-first thinking",
        desc: "We obsess over pipeline, CAC, and LTV — not impressions. Every channel, campaign, and piece of content is tied back to a revenue outcome.",
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18",
                    y1: "20",
                    x2: "18",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 706,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "20",
                    x2: "12",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 706,
                    columnNumber: 188
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "20",
                    x2: "6",
                    y2: "14"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 706,
                    columnNumber: 226
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 706,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        color: "#0891B2",
        stat: "100%",
        statLabel: "transparent reporting",
        title: "Full-funnel visibility",
        desc: "Live dashboards, weekly reports, and monthly strategy sessions — you always know exactly where your budget is going and what return it is generating.",
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
                    x: "2",
                    y: "3",
                    width: "20",
                    height: "14",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 713,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "21",
                    x2: "16",
                    y2: "21"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 713,
                    columnNumber: 198
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "17",
                    x2: "12",
                    y2: "21"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 713,
                    columnNumber: 236
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 713,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        color: "#059669",
        stat: "24 / 7",
        statLabel: "campaign monitoring",
        title: "Always-on optimisation",
        desc: "Algorithms do not sleep and neither does your competition. Our monitoring systems and response protocols keep your campaigns at peak efficiency around the clock.",
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
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 720,
                    columnNumber: 149
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "12 6 12 12 16 14"
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 720,
                    columnNumber: 181
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 720,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const faqs = [
    {
        q: "How long before we see results from SEO?",
        a: "Technical SEO improvements and indexing gains typically show within 4–8 weeks. Meaningful organic traffic growth usually compounds from month 3 onwards. We set realistic expectations at the start and report weekly so you track every improvement."
    },
    {
        q: "What is a realistic ROAS from paid media?",
        a: "It depends on your industry, average order value, and current baseline. In our experience, most accounts underperform their potential by 30–50% due to poor targeting, weak creative, or structural issues. We audit first, then project realistic targets before spending a pound."
    },
    {
        q: "Do you require a minimum monthly budget?",
        a: "For paid media management, we typically recommend a minimum ad spend of £3,000/month to generate statistically meaningful test data. For SEO and content retainers, there is no minimum spend — engagements are scoped to your goals."
    },
    {
        q: "How do you measure success?",
        a: "We agree on primary KPIs before we start — typically pipeline generated, CAC, ROAS, or organic traffic. Every engagement has a live dashboard you can access at any time, plus weekly summary emails and monthly strategy reviews."
    },
    {
        q: "Can you work alongside our internal marketing team?",
        a: "Yes — and we prefer it. Our best engagements are collaborative. We bring specialist depth in SEO, paid, and analytics; your team brings brand knowledge and product context. Together, the output is significantly stronger than either working alone."
    }
];
function DigitalGrowthPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
            background: "#fff",
            overflowX: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TickerBanner, {}, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 740,
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
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 748,
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
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 751,
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
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 754,
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
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 757,
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
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 762,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 760,
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
                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                        lineNumber: 778,
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
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 779,
                                                            columnNumber: 126
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                        lineNumber: 779,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: "#2563EB",
                                                            fontWeight: 600
                                                        },
                                                        children: "Digital Growth"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                        lineNumber: 780,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                lineNumber: 777,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 776,
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
                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                        lineNumber: 792,
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
                                                        children: "Revenue-Driven Marketing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                        lineNumber: 797,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                lineNumber: 785,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 784,
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
                                                    "Digital",
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
                                                        children: "Growth"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                        lineNumber: 806,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                lineNumber: 804,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 803,
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
                                                    children: "that compounds."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 818,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                lineNumber: 817,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 816,
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
                                                children: "We build and run full-funnel digital growth engines — SEO, paid media, content, CRO, and marketing automation — that compound traffic, reduce CAC, and turn your marketing spend into predictable, measurable revenue."
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                lineNumber: 834,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 833,
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
                                                            "Start Growing",
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
                                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                        lineNumber: 853,
                                                                        columnNumber: 159
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                        points: "12 5 19 12 12 19"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                        lineNumber: 853,
                                                                        columnNumber: 197
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                lineNumber: 853,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                        lineNumber: 841,
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
                                                        children: "Free Audit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                        lineNumber: 855,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                lineNumber: 840,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 839,
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
                                                        text: "320% avg. traffic growth",
                                                        border: true
                                                    },
                                                    {
                                                        dot: "#2563EB",
                                                        text: "4× ROAS improvement",
                                                        border: true
                                                    },
                                                    {
                                                        dot: "#7C3AED",
                                                        text: "No lock-in contracts",
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
                                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                lineNumber: 883,
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
                                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                lineNumber: 884,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, text, true, {
                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                        lineNumber: 878,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                lineNumber: 872,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 871,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 775,
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
                                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                            lineNumber: 911,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                    lineNumber: 909,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 12,
                                                                        fontWeight: 600,
                                                                        color: "rgba(15,23,42,0.45)",
                                                                        marginLeft: 6
                                                                    },
                                                                    children: "KeySol Growth Dashboard — Q4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                    lineNumber: 914,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 908,
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
                                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                    lineNumber: 921,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 10.5,
                                                                        fontWeight: 800,
                                                                        color: "#4ADE80",
                                                                        letterSpacing: "0.04em"
                                                                    },
                                                                    children: "LIVE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                    lineNumber: 926,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 916,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 902,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "20px 24px 4px"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GrowthDashboardViz, {}, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                        lineNumber: 932,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 931,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 894,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 893,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 892,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 772,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 771,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 743,
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
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 948,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 947,
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
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 950,
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
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 951,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 946,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 945,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 943,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 942,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GrowthToolsStrip, {}, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 959,
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
                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                lineNumber: 967,
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
                                                children: "What We Do"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                lineNumber: 968,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 966,
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
                                        children: "Full-funnel growth capabilities"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 970,
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
                                        children: "From organic search to paid media and conversion optimisation — we build every layer of your growth stack with the same rigour and revenue focus."
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 973,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 965,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 964,
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
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 981,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 980,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 978,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 963,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 962,
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
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 994,
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
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 997,
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
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 1001,
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
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 1013,
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
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 1018,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1008,
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
                                                "How we build growth",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 1021,
                                                    columnNumber: 36
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
                                                    children: "that actually compounds."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 1022,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1020,
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
                                            children: "A proven 5-phase growth methodology refined across 90+ brand engagements — from challenger startups to category leaders."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1035,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 1007,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1006,
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
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1044,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 1043,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1041,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 1005,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 989,
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
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 1058,
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
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 1059,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1057,
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
                                            children: "Growth that works across every industry"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1061,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 15.5,
                                                color: "#6B7280",
                                                lineHeight: 1.75,
                                                marginBottom: 32
                                            },
                                            children: "We have scaled growth across B2B, SaaS, e-commerce, and regulated industries. Each engagement is unique — but our methodology is battle-tested across every vertical."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1064,
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
                                                "Discuss your growth goals",
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
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 1075,
                                                            columnNumber: 157
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "12 5 19 12 12 19"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 1075,
                                                            columnNumber: 195
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 1075,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1067,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 1056,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1055,
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
                                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                lineNumber: 1092,
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
                                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                lineNumber: 1093,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                        lineNumber: 1091,
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
                                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                        lineNumber: 1098,
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
                                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                        lineNumber: 1099,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, j, true, {
                                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                                lineNumber: 1097,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                        lineNumber: 1095,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                lineNumber: 1084,
                                                columnNumber: 21
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1083,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 1081,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1080,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 1054,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 1053,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1052,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultsStrip, {}, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ROICalculator, {}, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1116,
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
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 1124,
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
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 1127,
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
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 1129,
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
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 1140,
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
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 1145,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1135,
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
                                            children: "We don't chase vanity metrics."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1147,
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
                                            children: "We drive real revenue."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1150,
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
                                            children: "Real strategists. Real attribution. Real accountability — from first campaign to compounding organic growth."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1164,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 1134,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1133,
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
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1173,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 1172,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1170,
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
                                            val: "No lock-in",
                                            label: "Month-to-month terms"
                                        },
                                        {
                                            val: "Weekly reports",
                                            label: "Full transparency"
                                        },
                                        {
                                            val: "ROI guarantee",
                                            label: "Or we keep working"
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
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 1187,
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
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 1188,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, val, true, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1186,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 1179,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 1132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1119,
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
                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                lineNumber: 1202,
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
                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                lineNumber: 1203,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 1201,
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
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 1205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1200,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 1199,
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
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 1212,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 1210,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 1198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1197,
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
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 1224,
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
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 1227,
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
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1239,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 12,
                                                fontWeight: 700,
                                                color: "#2563EB",
                                                letterSpacing: "0.06em"
                                            },
                                            children: "Free growth audit — no obligation"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1240,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 1234,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1233,
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
                                        "Ready to turn your marketing into",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1245,
                                            columnNumber: 48
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
                                            children: "a compounding revenue engine?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1246,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 1244,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1243,
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
                                    children: "Book a free growth audit with one of our senior strategists. We'll analyse your current channels, identify the highest-leverage gaps, and give you a clear 90-day growth plan — no obligation."
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 1261,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1260,
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
                                                "Get My Free Audit",
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
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 1279,
                                                            columnNumber: 155
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "12 5 19 12 12 19"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                            lineNumber: 1279,
                                                            columnNumber: 193
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 1279,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1267,
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
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1281,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 1266,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1265,
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
                                            text: "Tailored to your industry"
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
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 1305,
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
                                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                    lineNumber: 1306,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, text, true, {
                                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                            lineNumber: 1304,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 1298,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1297,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 1232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1219,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 737,
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
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1321,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1321,
                columnNumber: 180
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "a", true, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 1321,
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
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 1322,
            columnNumber: 149
        }, ("TURBOPACK compile-time value", void 0))
    }, "b", false, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 1322,
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
                points: "23 6 13.5 15.5 8.5 10.5 1 18"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1323,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "17 6 23 6 23 12"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1323,
                columnNumber: 198
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "c", true, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 1323,
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
                d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1324,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1324,
                columnNumber: 201
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "d", true, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 1324,
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
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1325,
                columnNumber: 149
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 17l10 5 10-5"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1325,
                columnNumber: 186
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12l10 5 10-5"
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1325,
                columnNumber: 213
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "e", true, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 1325,
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
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 1350,
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
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 1355,
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
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 1363,
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
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 1381,
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
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 1382,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 1375,
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
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 1387,
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
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 1389,
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
                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                lineNumber: 1410,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "12 5 19 12 12 19"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                                lineNumber: 1410,
                                                columnNumber: 55
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 1407,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 1397,
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
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 1413,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 1396,
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
                                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                    lineNumber: 1420,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 1418,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 1391,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 1332,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 1331,
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
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 1452,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1451,
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
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 1464,
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
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 1465,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1463,
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
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1467,
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
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1468,
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
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1469,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 1436,
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
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1494,
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
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1501,
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
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1508,
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
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1515,
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
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1516,
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
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1524,
                                columnNumber: 149
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "12 5 19 12 12 19"
                            }, void 0, false, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1524,
                                columnNumber: 187
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 1524,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                lineNumber: 1517,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 1480,
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
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 1553,
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
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 1562,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "5",
                                        y1: "12",
                                        x2: "19",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                        lineNumber: 1562,
                                        columnNumber: 53
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1561,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 1554,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 1543,
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
                                fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                                lineNumber: 1576,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                            lineNumber: 1575,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                        lineNumber: 1568,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
                    lineNumber: 1566,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
            lineNumber: 1537,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/services/digital-growth/page.tsx",
        lineNumber: 1536,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_%28pages%29_services_digital-growth_page_tsx_6da2cec7._.js.map