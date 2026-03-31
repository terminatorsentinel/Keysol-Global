(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/sections/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
// 9 cycling words — exact NETSOL style
const cycleWords = [
    "transparent",
    "profitable",
    "efficient",
    "secure",
    "seamless",
    "scalable",
    "intelligent",
    "unstoppable",
    "future-ready"
];
/* ─────────────────────────────────────────────
   5 industry slides — NETSOL CDN 3D models
───────────────────────────────────────────── */ const industrySlides = [
    {
        label: "Retail Lenders",
        bg: "linear-gradient(145deg,#dff4fb 0%,#c5ecf7 100%)",
        image: "https://netsoltech.com/_ipx/f_webp&q_60/images/banners/animations/Retail.webp"
    },
    {
        label: "Brokers",
        bg: "linear-gradient(145deg,#dff4fb 0%,#c5ecf7 100%)",
        image: "https://netsoltech.com/_ipx/f_webp&q_60/images/banners/animations/Brokers.webp"
    },
    {
        label: "Commercial Lenders",
        bg: "linear-gradient(145deg,#dff4fb 0%,#c5ecf7 100%)",
        image: "https://netsoltech.com/_ipx/f_webp&q_60/images/banners/animations/Commercial.webp"
    },
    {
        label: "Dealers",
        bg: "linear-gradient(145deg,#dff4fb 0%,#c5ecf7 100%)",
        image: "https://netsoltech.com/_ipx/f_webp&q_60/images/banners/animations/Dealers.webp"
    },
    {
        label: "OEMs",
        bg: "linear-gradient(145deg,#dff4fb 0%,#c5ecf7 100%)",
        image: "https://netsoltech.com/_ipx/f_webp&q_60/images/banners/animations/OEMs.webp"
    }
];
/* ─────────────────────────────────────────────
   Animated cycling word — slides vertically
───────────────────────────────────────────── */ function AnimatedWord({ word }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "block",
            overflow: "hidden",
            height: "1.1em",
            lineHeight: "1.1em"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    y: "100%",
                    opacity: 0
                },
                animate: {
                    y: "0%",
                    opacity: 1
                },
                exit: {
                    y: "-100%",
                    opacity: 0
                },
                transition: {
                    duration: 0.42,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                style: {
                    display: "block",
                    color: "#1A56DB"
                },
                children: word
            }, word, false, {
                fileName: "[project]/components/sections/hero.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/hero.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/hero.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c = AnimatedWord;
/* ─────────────────────────────────────────────
   Hero card — right panel with cycling slides
   Matches NETSOL: white/light card, label BELOW
───────────────────────────────────────────── */ function HeroCard() {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroCard.useEffect": ()=>{
            const timer = setInterval({
                "HeroCard.useEffect.timer": ()=>{
                    setCurrent({
                        "HeroCard.useEffect.timer": (prev)=>(prev + 1) % industrySlides.length
                    }["HeroCard.useEffect.timer"]);
                }
            }["HeroCard.useEffect.timer"], 2800);
            return ({
                "HeroCard.useEffect": ()=>clearInterval(timer)
            })["HeroCard.useEffect"];
        }
    }["HeroCard.useEffect"], []);
    const slide = industrySlides[current];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col items-center",
        style: {
            gap: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none",
                style: {
                    left: -60,
                    top: "6%",
                    height: "58%",
                    display: "flex",
                    gap: 9,
                    opacity: 0.6
                },
                children: [
                    ...Array(5)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-full",
                        style: {
                            width: 2,
                            height: "100%",
                            background: "#4ECDC4"
                        }
                    }, i, false, {
                        fileName: "[project]/components/sections/hero.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/hero.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden",
                style: {
                    width: 400,
                    height: 400,
                    borderRadius: "22px 110px 22px 22px",
                    background: slide.bg,
                    transition: "background 0.7s ease",
                    boxShadow: "0 24px 72px rgba(0,0,0,0.11), 0 2px 14px rgba(0,0,0,0.07)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.90,
                            y: 18
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.93,
                            y: -14
                        },
                        transition: {
                            duration: 0.48,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "absolute inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: slide.image,
                            alt: slide.label,
                            style: {
                                width: "88%",
                                height: "88%",
                                objectFit: "contain"
                            },
                            onError: (e)=>{
                                e.currentTarget.style.display = "none";
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/sections/hero.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    }, current, false, {
                        fileName: "[project]/components/sections/hero.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/hero.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/hero.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-[6px]",
                style: {
                    width: 400
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 2,
                            background: "#4ECDC4",
                            borderRadius: 2,
                            opacity: 0.7
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/hero.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 2,
                            background: "#4ECDC4",
                            borderRadius: 2,
                            width: "68%",
                            opacity: 0.4
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/hero.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/hero.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0,
                        y: 6
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -6
                    },
                    transition: {
                        duration: 0.32
                    },
                    style: {
                        color: "#1A56DB",
                        fontWeight: 700,
                        fontSize: 20,
                        letterSpacing: "-0.01em",
                        marginTop: -2
                    },
                    children: slide.label
                }, slide.label, false, {
                    fileName: "[project]/components/sections/hero.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/hero.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/hero.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(HeroCard, "Ce5S7Zpl2S4YgGoPn+G4m52qKq8=");
_c1 = HeroCard;
function Hero() {
    _s1();
    const [wordIndex, setWordIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const timer = setInterval({
                "Hero.useEffect.timer": ()=>{
                    setWordIndex({
                        "Hero.useEffect.timer": (prev)=>(prev + 1) % cycleWords.length
                    }["Hero.useEffect.timer"]);
                }
            }["Hero.useEffect.timer"], 2200);
            return ({
                "Hero.useEffect": ()=>clearInterval(timer)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-white overflow-hidden",
        style: {
            paddingTop: 68
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl mx-auto",
            style: {
                paddingLeft: 40,
                paddingRight: 40
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid items-center",
                style: {
                    minHeight: "calc(100vh - 100px)",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 48
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        style: {
                            gap: 28,
                            maxWidth: 480,
                            paddingTop: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 2,
                                            height: 18,
                                            background: "#9CA3AF",
                                            borderRadius: 2,
                                            flexShrink: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/hero.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 13,
                                            color: "#6B7280",
                                            fontWeight: 400,
                                            letterSpacing: "0.01em"
                                        },
                                        children: "Shaping Smarter Business"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/hero.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/hero.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                                            fontWeight: 800,
                                            lineHeight: 1.16,
                                            color: "#1e2d3d",
                                            letterSpacing: "-0.02em",
                                            margin: 0,
                                            whiteSpace: "nowrap"
                                        },
                                        children: "AI-enabled ecosystems"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/hero.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                                            fontWeight: 800,
                                            lineHeight: 1.16,
                                            color: "#1e2d3d",
                                            letterSpacing: "-0.02em",
                                            margin: 0,
                                            whiteSpace: "nowrap"
                                        },
                                        children: "that make commerce"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/hero.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                                            fontWeight: 800,
                                            lineHeight: 1.16,
                                            color: "#0066FF",
                                            letterSpacing: "-0.02em",
                                            whiteSpace: "nowrap"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedWord, {
                                            word: cycleWords[wordIndex]
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/hero.tsx",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/hero.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/hero.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 15,
                                    color: "#4A5568",
                                    lineHeight: 1.65,
                                    maxWidth: 520,
                                    margin: 0
                                },
                                children: "We remove complexity from every business process with composable AI solutions that integrate effortlessly and scale intelligently."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/hero.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingTop: 4
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact/",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        whileTap: {
                                            scale: 0.97
                                        },
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            background: "#1A56DB",
                                            borderRadius: 9999,
                                            overflow: "hidden",
                                            cursor: "pointer"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    padding: "13px 24px",
                                                    color: "white",
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    letterSpacing: "0.01em"
                                                },
                                                children: "Get in touch"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/hero.tsx",
                                                lineNumber: 303,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    width: 42,
                                                    height: 42,
                                                    margin: "4px 4px 4px 0",
                                                    borderRadius: 8,
                                                    background: "rgba(255,255,255,0.18)",
                                                    flexShrink: 0
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "15",
                                                    height: "15",
                                                    viewBox: "0 0 15 15",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M2.5 12.5L12.5 2.5M12.5 2.5H5.5M12.5 2.5V9.5",
                                                        stroke: "white",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/hero.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/hero.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/hero.tsx",
                                                lineNumber: 315,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/hero.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/hero.tsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/hero.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/hero.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center justify-end",
                        style: {
                            paddingRight: 8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroCard, {}, void 0, false, {
                            fileName: "[project]/components/sections/hero.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/hero.tsx",
                        lineNumber: 344,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/hero.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/hero.tsx",
            lineNumber: 194,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/hero.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_s1(Hero, "OFvGKZ+tzN0VWbjuIPz8U2OVF54=");
_c2 = Hero;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AnimatedWord");
__turbopack_context__.k.register(_c1, "HeroCard");
__turbopack_context__.k.register(_c2, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/trust-logos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrustLogos",
    ()=>TrustLogos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
/* ================================================================
   TrustLogos — NETSOL-exact trust bar
   - Full-bleed card (16px margin)
   - Dense tick borders TOP and BOTTOM (both visible)
   - All logos redrawn cleanly
   ================================================================ */ function TickBorder() {
    const items = [];
    for(let i = 0; i < 1200; i++){
        if (i % 20 === 19) {
            items.push({
                h: 0,
                gap: true
            });
            continue;
        }
        const mod = i % 4;
        items.push({
            h: mod === 0 ? 13 : mod === 2 ? 8 : 5,
            gap: false
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "flex-end",
            width: "100%",
            height: 18,
            overflow: "hidden"
        },
        children: items.map((item, i)=>item.gap ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flexShrink: 0,
                    width: 8
                }
            }, i, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 27,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flexShrink: 0,
                    width: 2,
                    marginRight: 1.5,
                    height: item.h,
                    background: "#93C5FD",
                    borderRadius: 1,
                    opacity: item.h === 13 ? 1 : item.h === 8 ? 0.6 : 0.32,
                    alignSelf: "flex-end"
                }
            }, i, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 29,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/sections/trust-logos.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = TickBorder;
/* ───────────────────────────────────────────────────────────────
   LOGOS — all redrawn for accuracy
─────────────────────────────────────────────────────────────── */ const GreatWallLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "100",
        height: "46",
        viewBox: "0 0 100 46",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "50",
                y: "13",
                textAnchor: "middle",
                fontSize: "10.5",
                fontWeight: "400",
                fill: "#0F172A",
                fontFamily: "sans-serif",
                letterSpacing: "0.3",
                children: "Great Wall"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 51,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            [
                0,
                1,
                2,
                3,
                4
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 4 + i * 18,
                            y: 19,
                            width: 12,
                            height: 16,
                            fill: "none",
                            stroke: "#0F172A",
                            strokeWidth: "1.4"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/trust-logos.tsx",
                            lineNumber: 56,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 4 + i * 18,
                            y: 19,
                            width: 12,
                            height: 7,
                            fill: "#0F172A"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/trust-logos.tsx",
                            lineNumber: 58,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i, true, {
                    fileName: "[project]/components/sections/trust-logos.tsx",
                    lineNumber: 54,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2",
                y1: "35",
                x2: "98",
                y2: "35",
                stroke: "#0F172A",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/trust-logos.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = GreatWallLogo;
const PeterbiltLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "136",
        height: "46",
        viewBox: "0 0 136 46",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "68",
                cy: "23",
                rx: "63",
                ry: "19",
                stroke: "#0F172A",
                strokeWidth: "2.2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 68,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "68",
                y: "28",
                textAnchor: "middle",
                fontSize: "16",
                fontWeight: "700",
                fontStyle: "italic",
                fill: "#0F172A",
                fontFamily: "Georgia,'Times New Roman',serif",
                letterSpacing: "0.3",
                children: "Peterbilt"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 69,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/trust-logos.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = PeterbiltLogo;
/* BMW: roundel emblem (64×64) + bold "BMW" wordmark to the right */ const BMWLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "128",
        height: "64",
        viewBox: "0 0 128 64",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "32",
                cy: "32",
                r: "30",
                fill: "#0F172A"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 80,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "32",
                cy: "32",
                r: "26",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 82,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32,11 A21,21 0 0,0 11,32 L32,32 Z",
                fill: "#0F172A"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 85,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32,11 A21,21 0 0,1 53,32 L32,32 Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 87,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M53,32 A21,21 0 0,1 32,53 L32,32 Z",
                fill: "#0F172A"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 89,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32,53 A21,21 0 0,1 11,32 L32,32 Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 91,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "32",
                cy: "32",
                r: "21",
                stroke: "#0F172A",
                strokeWidth: "1",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 93,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "11",
                x2: "32",
                y2: "53",
                stroke: "#0F172A",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 95,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "11",
                y1: "32",
                x2: "53",
                y2: "32",
                stroke: "#0F172A",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 96,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "95",
                y: "39",
                textAnchor: "middle",
                fontSize: "20",
                fontWeight: "900",
                fill: "#0F172A",
                fontFamily: "'Arial Black','Arial',sans-serif",
                letterSpacing: "1.5",
                children: "BMW"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 98,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/trust-logos.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = BMWLogo;
/* Yamaha: outer circle icon + gap + YAMAHA wordmark */ const YamahaLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "148",
        height: "46",
        viewBox: "0 0 148 46",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "22",
                cy: "23",
                r: "19",
                stroke: "#0F172A",
                strokeWidth: "1.8",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 107,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "22",
                y1: "23",
                x2: "22",
                y2: "4",
                stroke: "#0F172A",
                strokeWidth: "2.2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 109,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "22",
                y1: "23",
                x2: "5.5",
                y2: "35.5",
                stroke: "#0F172A",
                strokeWidth: "2.2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 110,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "22",
                y1: "23",
                x2: "38.5",
                y2: "35.5",
                stroke: "#0F172A",
                strokeWidth: "2.2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 111,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "22",
                cy: "4",
                r: "3",
                fill: "#0F172A"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 113,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "5.5",
                cy: "35.5",
                r: "3",
                fill: "#0F172A"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 114,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "38.5",
                cy: "35.5",
                r: "3",
                fill: "#0F172A"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 115,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "100",
                y: "28",
                textAnchor: "middle",
                fontSize: "17",
                fontWeight: "700",
                fill: "#0F172A",
                fontFamily: "sans-serif",
                letterSpacing: "1",
                children: "YAMAHA"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 117,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/trust-logos.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = YamahaLogo;
/* Mercedes-Benz: exact 3-pointed star logo
   Simple and accurate: thick ring + 3 separate arm paths with concave curves */ const MercedesLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "64",
        height: "64",
        viewBox: "0 0 100 100",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "50",
                cy: "50",
                r: "45",
                stroke: "#0F172A",
                strokeWidth: "5",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 127,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M50,8 Q53,28 56,46 L50,50 L44,46 Q47,28 50,8 Z",
                fill: "#0F172A"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 131,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M86.4,71 Q68,68 54,54 L50,50 L52,44 Q70,52 86.4,71 Z",
                fill: "#0F172A"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 133,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.6,71 Q32,68 46,54 L50,50 L48,44 Q30,52 13.6,71 Z",
                fill: "#0F172A"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 135,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/trust-logos.tsx",
        lineNumber: 125,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = MercedesLogo;
/* Close Brothers: ring icon + two-line text — icon properly sized & positioned */ const CloseBrothersLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "144",
        height: "46",
        viewBox: "0 0 144 46",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "13",
                cy: "21",
                r: "10",
                stroke: "#0F172A",
                strokeWidth: "1.8",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 142,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "13",
                cy: "21",
                r: "5",
                fill: "#0F172A"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 143,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "82",
                y: "17",
                textAnchor: "middle",
                fontSize: "13.5",
                fontWeight: "700",
                fill: "#0F172A",
                fontFamily: "sans-serif",
                children: "Close Brothers"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 144,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "82",
                y: "30",
                textAnchor: "middle",
                fontSize: "8.5",
                fill: "#64748B",
                fontFamily: "sans-serif",
                letterSpacing: "0.1",
                children: "Modern Merchant Banking"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 146,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/trust-logos.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = CloseBrothersLogo;
/* Nissan: premium emblem — thick outer oval, solid horizontal bar with raised edges, NISSAN wordmark */ const NissanLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "96",
        height: "50",
        viewBox: "0 0 96 50",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "48",
                cy: "25",
                rx: "45",
                ry: "23",
                stroke: "#0F172A",
                strokeWidth: "2.8",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 155,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5",
                y: "17.5",
                width: "86",
                height: "15",
                fill: "#0F172A",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 157,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5",
                y: "19",
                width: "86",
                height: "12",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 159,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "5",
                y1: "17.5",
                x2: "91",
                y2: "17.5",
                stroke: "#0F172A",
                strokeWidth: "2.2"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 161,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "5",
                y1: "32.5",
                x2: "91",
                y2: "32.5",
                stroke: "#0F172A",
                strokeWidth: "2.2"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 162,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "48",
                y: "28.5",
                textAnchor: "middle",
                fontSize: "10",
                fontWeight: "900",
                fill: "#0F172A",
                fontFamily: "'Arial Black','Arial',sans-serif",
                letterSpacing: "4",
                children: "NISSAN"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 164,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/trust-logos.tsx",
        lineNumber: 153,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = NissanLogo;
/* Toyota: correct 3-oval emblem — body oval, vertical center oval, top crossbar oval */ const ToyotaLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "84",
        height: "52",
        viewBox: "0 0 84 52",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "36",
                cy: "24",
                rx: "22",
                ry: "15",
                stroke: "#0F172A",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 173,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "48",
                cy: "24",
                rx: "22",
                ry: "15",
                stroke: "#0F172A",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 175,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "42",
                cy: "24",
                rx: "8.5",
                ry: "15",
                stroke: "#0F172A",
                strokeWidth: "2",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 177,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "42",
                cy: "11",
                rx: "17",
                ry: "7",
                stroke: "#0F172A",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 179,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "42",
                y: "46",
                textAnchor: "middle",
                fontSize: "8",
                fontWeight: "700",
                fill: "#0F172A",
                fontFamily: "sans-serif",
                letterSpacing: "3.5",
                children: "TOYOTA"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 181,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/trust-logos.tsx",
        lineNumber: 171,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = ToyotaLogo;
const PaccarLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "122",
        height: "46",
        viewBox: "0 0 122 46",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
            x: "61",
            y: "33",
            textAnchor: "middle",
            fontSize: "29",
            fontWeight: "900",
            fill: "#0F172A",
            fontFamily: "'Arial Black','Arial',sans-serif",
            letterSpacing: "0.5",
            children: "PACCAR"
        }, void 0, false, {
            fileName: "[project]/components/sections/trust-logos.tsx",
            lineNumber: 188,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/sections/trust-logos.tsx",
        lineNumber: 187,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = PaccarLogo;
const HaydockLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "112",
        height: "46",
        viewBox: "0 0 112 46",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "56",
                y: "24",
                textAnchor: "middle",
                fontSize: "18",
                fontWeight: "700",
                fill: "#0F172A",
                fontFamily: "Georgia,'Times New Roman',serif",
                children: "Haydock"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 196,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "56",
                y: "38",
                textAnchor: "middle",
                fontSize: "11",
                fill: "#555",
                fontFamily: "sans-serif",
                letterSpacing: "0.4",
                children: "Finance"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 199,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/trust-logos.tsx",
        lineNumber: 195,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = HaydockLogo;
const IsuzuLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "98",
        height: "46",
        viewBox: "0 0 98 46",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "49",
                y: "24",
                textAnchor: "middle",
                fontSize: "17",
                fontWeight: "900",
                fill: "#0F172A",
                fontFamily: "'Arial Black','Arial',sans-serif",
                letterSpacing: "2",
                children: "ISUZU"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 206,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "49",
                y: "37",
                textAnchor: "middle",
                fontSize: "10",
                fill: "#555",
                fontFamily: "sans-serif",
                letterSpacing: "1",
                children: "Leasing"
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 209,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/trust-logos.tsx",
        lineNumber: 205,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = IsuzuLogo;
const brands = [
    {
        name: "Great Wall",
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GreatWallLogo, {}, void 0, false, {
            fileName: "[project]/components/sections/trust-logos.tsx",
            lineNumber: 215,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0)),
        pad: 52
    },
    {
        name: "Peterbilt",
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PeterbiltLogo, {}, void 0, false, {
            fileName: "[project]/components/sections/trust-logos.tsx",
            lineNumber: 216,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0)),
        pad: 44
    },
    {
        name: "BMW",
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BMWLogo, {}, void 0, false, {
            fileName: "[project]/components/sections/trust-logos.tsx",
            lineNumber: 217,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0)),
        pad: 52
    },
    {
        name: "Yamaha",
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YamahaLogo, {}, void 0, false, {
            fileName: "[project]/components/sections/trust-logos.tsx",
            lineNumber: 218,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0)),
        pad: 44
    },
    {
        name: "Mercedes-Benz",
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MercedesLogo, {}, void 0, false, {
            fileName: "[project]/components/sections/trust-logos.tsx",
            lineNumber: 219,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0)),
        pad: 62
    },
    {
        name: "Close Brothers",
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseBrothersLogo, {}, void 0, false, {
            fileName: "[project]/components/sections/trust-logos.tsx",
            lineNumber: 220,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0)),
        pad: 36
    },
    {
        name: "Nissan",
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NissanLogo, {}, void 0, false, {
            fileName: "[project]/components/sections/trust-logos.tsx",
            lineNumber: 221,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0)),
        pad: 52
    },
    {
        name: "PACCAR",
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaccarLogo, {}, void 0, false, {
            fileName: "[project]/components/sections/trust-logos.tsx",
            lineNumber: 222,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0)),
        pad: 44
    },
    {
        name: "Haydock",
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HaydockLogo, {}, void 0, false, {
            fileName: "[project]/components/sections/trust-logos.tsx",
            lineNumber: 223,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0)),
        pad: 48
    },
    {
        name: "Isuzu",
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IsuzuLogo, {}, void 0, false, {
            fileName: "[project]/components/sections/trust-logos.tsx",
            lineNumber: 224,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0)),
        pad: 52
    }
];
function TrustLogos() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            width: "100%",
            background: "#fff",
            padding: "32px 0"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    margin: "0 16px",
                    borderRadius: 16,
                    border: "1px solid #BFDBFE",
                    background: "linear-gradient(170deg,#EFF6FF 0%,#F2F7FF 50%,#EEF2FF 100%)",
                    overflow: "hidden",
                    position: "relative",
                    isolation: "isolate",
                    /* explicit height so bottom ticks are always visible */ display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            overflow: "hidden",
                            pointerEvents: "none",
                            zIndex: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    left: "24%",
                                    top: "50%",
                                    transform: "translate(-50%,-50%)",
                                    width: 360,
                                    height: 240,
                                    borderRadius: "50%",
                                    background: "radial-gradient(ellipse,rgba(191,219,254,1) 0%,transparent 60%)",
                                    filter: "blur(30px)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/trust-logos.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    right: "9%",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    width: 300,
                                    height: 210,
                                    borderRadius: "50%",
                                    background: "radial-gradient(ellipse,rgba(199,210,254,1) 0%,transparent 60%)",
                                    filter: "blur(26px)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/trust-logos.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/trust-logos.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            zIndex: 1,
                            paddingTop: 10,
                            paddingBottom: 2,
                            flexShrink: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TickBorder, {}, void 0, false, {
                            fileName: "[project]/components/sections/trust-logos.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/trust-logos.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            position: "relative",
                            zIndex: 1,
                            flexShrink: 0,
                            margin: 0,
                            padding: "18px 0 20px",
                            textAlign: "center",
                            fontSize: 17,
                            fontWeight: 700,
                            color: "#0F172A",
                            letterSpacing: "-0.01em",
                            lineHeight: 1,
                            fontFamily: "sans-serif"
                        },
                        children: "The world's leading brands are powered by KeySol"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/trust-logos.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            zIndex: 1,
                            overflow: "hidden",
                            paddingBottom: 28,
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: 120,
                                    zIndex: 2,
                                    pointerEvents: "none",
                                    background: "linear-gradient(to right,#EFF6FF 20%,transparent 100%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/trust-logos.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: 120,
                                    zIndex: 2,
                                    pointerEvents: "none",
                                    background: "linear-gradient(to left,#EEF2FF 20%,transparent 100%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/trust-logos.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    width: "max-content",
                                    animation: "ks-marquee 44s linear infinite"
                                },
                                children: [
                                    ...brands,
                                    ...brands
                                ].map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flexShrink: 0,
                                            paddingLeft: b.pad / 2,
                                            paddingRight: b.pad / 2,
                                            height: 64,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: b.logo
                                    }, `${b.name}-${i}`, false, {
                                        fileName: "[project]/components/sections/trust-logos.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/trust-logos.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/trust-logos.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            zIndex: 1,
                            flexShrink: 0,
                            paddingBottom: 10,
                            paddingTop: 2,
                            /* flip vertically so ticks point upward from bottom edge */ transform: "scaleY(-1)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TickBorder, {}, void 0, false, {
                            fileName: "[project]/components/sections/trust-logos.tsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/trust-logos.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes ks-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/sections/trust-logos.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/trust-logos.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
_c12 = TrustLogos;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "TickBorder");
__turbopack_context__.k.register(_c1, "GreatWallLogo");
__turbopack_context__.k.register(_c2, "PeterbiltLogo");
__turbopack_context__.k.register(_c3, "BMWLogo");
__turbopack_context__.k.register(_c4, "YamahaLogo");
__turbopack_context__.k.register(_c5, "MercedesLogo");
__turbopack_context__.k.register(_c6, "CloseBrothersLogo");
__turbopack_context__.k.register(_c7, "NissanLogo");
__turbopack_context__.k.register(_c8, "ToyotaLogo");
__turbopack_context__.k.register(_c9, "PaccarLogo");
__turbopack_context__.k.register(_c10, "HaydockLogo");
__turbopack_context__.k.register(_c11, "IsuzuLogo");
__turbopack_context__.k.register(_c12, "TrustLogos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/solutions-showcase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SolutionsShowcase",
    ()=>SolutionsShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/* ══════════════════════════════════════════════════════════════
   TAB DATA
══════════════════════════════════════════════════════════════ */ const TABS = [
    {
        id: "retail",
        label: "Digital Retail",
        tabGrad: [
            "#7B2FE0",
            "#9D4EDD"
        ],
        leftBg: "linear-gradient(155deg,#F5EFFE 0%,#E8DDFB 40%,#D8C8F8 100%)",
        midBg: "linear-gradient(155deg,#FDFAFF 0%,#F2EBFD 100%)",
        illBg: "linear-gradient(140deg,#EDE3FA 0%,#D8C8F5 100%)",
        bmBg: "linear-gradient(140deg,#F8F3FE 0%,#EBE0FB 100%)",
        accent: "#A855F7",
        accentDark: "#7B2FE0",
        accentRgb: "124,47,224",
        pillGrad: [
            "#7B2FE0",
            "#38BDF8"
        ],
        title: "KeySol Retail",
        desc: "End-to-end orchestration for OEMs and dealers. Modular and scalable to unify showroom and online journeys into one seamless retail experience.",
        cta: "Learn More",
        tagline: "Auto retail redefined. Personalized paths, connected touchpoints and AI-driven precision.",
        pills: [
            "Dealer Groups",
            "OEMs",
            "Independent Dealers"
        ],
        defaultPill: 1,
        visual: "cubes"
    },
    {
        id: "finance",
        label: "Finance",
        tabGrad: [
            "#059669",
            "#10B981"
        ],
        leftBg: "linear-gradient(155deg,#ECFDF5 0%,#D1FAE5 40%,#A7F3D0 100%)",
        midBg: "linear-gradient(155deg,#F6FEFB 0%,#DCFCE7 100%)",
        illBg: "linear-gradient(140deg,#BBFFD8 0%,#86EFBA 100%)",
        bmBg: "linear-gradient(140deg,#EFFDF5 0%,#CDFACE 100%)",
        accent: "#10B981",
        accentDark: "#059669",
        accentRgb: "5,150,105",
        pillGrad: [
            "#059669",
            "#0891B2"
        ],
        title: "KeySol Finance",
        desc: "AI-driven intelligence for the full contract lifecycle — boosting decisions, onboarding and operations across auto, equipment and commercial finance.",
        cta: "Get in touch",
        tagline: "Smarter lending starts here. AI-enabled speed, flexibility, and precision.",
        pills: [
            "Auto Finance",
            "Equipment Finance",
            "Fleet Finance"
        ],
        defaultPill: 1,
        visual: "coins"
    },
    {
        id: "ai-labs",
        label: "AI Labs",
        tabGrad: [
            "#0284C7",
            "#06B6D4"
        ],
        leftBg: "linear-gradient(155deg,#ECFEFF 0%,#CFFAFE 40%,#A5F3FC 100%)",
        midBg: "linear-gradient(155deg,#F0FEFF 0%,#CFFAFE 100%)",
        illBg: "linear-gradient(140deg,#A5F3FC 0%,#67E8F9 100%)",
        bmBg: "linear-gradient(140deg,#E0FAFF 0%,#BAF5FC 100%)",
        accent: "#06B6D4",
        accentDark: "#0284C7",
        accentRgb: "2,132,199",
        pillGrad: [
            "#0284C7",
            "#0D9468"
        ],
        title: "KeySol AI Labs",
        desc: "AI innovation for lending, leasing and retail. Purpose-built tools that accelerate transformation and deliver real-world impact across workflows.",
        cta: "Learn More",
        tagline: "Transforming BFSI, finance and leasing with intelligent, industry-specific AI.",
        pills: [
            "Lab Innovations",
            "AI Applications",
            "AI Services"
        ],
        defaultPill: 1,
        visual: "sparkle"
    },
    {
        id: "marketplace",
        label: "Marketplace",
        tabGrad: [
            "#DC2626",
            "#F43F5E"
        ],
        leftBg: "linear-gradient(155deg,#FFF1F2 0%,#FFE4E6 40%,#FECDD3 100%)",
        midBg: "linear-gradient(155deg,#FFF5F6 0%,#FFE4E6 100%)",
        illBg: "linear-gradient(140deg,#FECDD3 0%,#FDA4AF 100%)",
        bmBg: "linear-gradient(140deg,#FFF1F2 0%,#FFD7DA 100%)",
        accent: "#F43F5E",
        accentDark: "#DC2626",
        accentRgb: "220,38,38",
        pillGrad: [
            "#DC2626",
            "#9333EA"
        ],
        title: "KeySol Marketplace",
        desc: "A unified marketplace of modular, API-driven solutions for lending, leasing and retail. Built to simplify and accelerate every workflow.",
        cta: "Learn More",
        tagline: "Smarter. Faster. Connected. Your modular marketplace for finance and leasing.",
        pills: [
            "Subscription-based",
            "API-first",
            "Component-based"
        ],
        defaultPill: 2,
        visual: "bag"
    },
    {
        id: "consultancy",
        label: "Consultancy",
        tabGrad: [
            "#4338CA",
            "#6366F1"
        ],
        leftBg: "linear-gradient(155deg,#EEF2FF 0%,#E0E7FF 40%,#C7D2FE 100%)",
        midBg: "linear-gradient(155deg,#F5F7FF 0%,#E8ECFF 100%)",
        illBg: "linear-gradient(140deg,#C7D2FE 0%,#A5B4FC 100%)",
        bmBg: "linear-gradient(140deg,#EEF2FF 0%,#DDE3FF 100%)",
        accent: "#6366F1",
        accentDark: "#4338CA",
        accentRgb: "67,56,202",
        pillGrad: [
            "#4338CA",
            "#0284C7"
        ],
        title: "KeySol Consultancy",
        desc: "Expertise in AI, data, cloud and security — helping BFSI and lenders modernize, scale confidently and build resilient, future-ready operations.",
        cta: "Get in touch",
        tagline: "Turning complex challenges into transformative opportunities.",
        pills: [
            "Bespoke Development",
            "Information Security",
            "Data & AI Services"
        ],
        defaultPill: 1,
        visual: "layers"
    }
];
/* ──────────────────────────────────────────────────────────────
   TICK BARS
────────────────────────────────────────────────────────────── */ function Ticks({ color, accentRgb, flip }) {
    const pattern = [
        18,
        8,
        5,
        12,
        18,
        8,
        5,
        12,
        8,
        5
    ];
    const count = 80;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "flex-end",
            gap: 2.5,
            height: 24,
            padding: "0 28px",
            overflow: "hidden",
            transform: flip ? "rotate(180deg)" : undefined
        },
        children: Array.from({
            length: count
        }).map((_, i)=>{
            const h = pattern[i % pattern.length];
            const op = h === 18 ? 0.9 : h === 12 ? 0.55 : 0.22;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 2.5,
                    height: h,
                    borderRadius: 2,
                    background: `rgba(${accentRgb},${op})`,
                    flexShrink: 0,
                    alignSelf: "flex-end"
                }
            }, i, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 129,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/sections/solutions-showcase.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c = Ticks;
/* ──────────────────────────────────────────────────────────────
   ICON BADGE
────────────────────────────────────────────────────────────── */ function IconBadge({ grad, size = 40 }) {
    const uid = grad[0].replace(/[^a-z0-9]/gi, "");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 40 40",
        fill: "none",
        style: {
            flexShrink: 0,
            borderRadius: 11
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: `ib-${uid}`,
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: grad[0]
                        }, void 0, false, {
                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: grad[1]
                        }, void 0, false, {
                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "40",
                height: "40",
                rx: "11",
                fill: `url(#ib-${uid})`
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 9v22M13 20l11-11M13 20l11 11",
                stroke: "white",
                strokeWidth: "2.8",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/solutions-showcase.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_c1 = IconBadge;
/* ──────────────────────────────────────────────────────────────
   WAVEFORM  (animated bars)
────────────────────────────────────────────────────────────── */ function Waveform({ color, accentRgb, tabIdx }) {
    const bars = [
        10,
        16,
        24,
        34,
        44,
        54,
        64,
        72,
        82,
        88,
        92,
        94,
        90,
        84,
        76,
        68,
        58,
        48,
        40,
        32,
        42,
        50,
        58,
        48,
        38,
        30,
        22,
        32,
        40,
        34,
        26,
        20,
        14,
        22,
        30,
        24,
        18,
        14,
        10,
        16,
        22,
        18
    ];
    const W = bars.length * 9;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${W} 100`,
        width: "100%",
        height: "96",
        preserveAspectRatio: "none",
        style: {
            display: "block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: `wv-${color.replace(/[^a-z0-9]/gi, "")}`,
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: color,
                            stopOpacity: "1"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "70%",
                            stopColor: color,
                            stopOpacity: "0.6"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: color,
                            stopOpacity: "0.15"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            bars.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                    x: i * 9 + 1.5,
                    y: 100 - h,
                    width: 7,
                    height: h,
                    rx: 3,
                    fill: `url(#wv-${color.replace(/[^a-z0-9]/gi, "")})`,
                    initial: {
                        scaleY: 0
                    },
                    animate: {
                        scaleY: 1
                    },
                    transition: {
                        delay: i * 0.016,
                        duration: 0.38,
                        ease: [
                            0.34,
                            1.56,
                            0.64,
                            1
                        ]
                    },
                    style: {
                        transformOrigin: "50% 100%"
                    }
                }, `${tabIdx}-${i}`, false, {
                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/solutions-showcase.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_c2 = Waveform;
/* ──────────────────────────────────────────────────────────────
   3-D ILLUSTRATIONS  (premium per-tab SVGs)
────────────────────────────────────────────────────────────── */ function Illus({ type, c, cm, cr }) {
    const uid = c.replace(/[^a-z0-9]/gi, "");
    if (type === "cubes") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "200",
        height: "168",
        viewBox: "0 0 200 168",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `il-${uid}`,
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: cm,
                                stopOpacity: "0.6"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: c,
                                stopOpacity: "0.2"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: `f-${uid}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "5",
                                result: "b"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "b"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 207,
                                        columnNumber: 20
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 207,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "108",
                cy: "158",
                rx: "62",
                ry: "8",
                fill: c,
                opacity: "0.1"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M36 76 L70 58 L104 76 L104 116 L70 134 L36 116Z",
                fill: `rgba(${cr},0.08)`,
                stroke: c,
                strokeWidth: "1.2",
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M36 76 L70 94 L104 76",
                stroke: c,
                strokeWidth: "1.2",
                fill: "none",
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M70 94 L70 134",
                stroke: c,
                strokeWidth: "1.2",
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M88 44 L126 24 L164 44 L164 92 L126 112 L88 92Z",
                fill: `url(#il-${uid})`,
                opacity: "0.28"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M88 44 L126 64 L164 44",
                stroke: cm,
                strokeWidth: "2",
                fill: "none",
                opacity: "0.8"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M126 64 L126 112",
                stroke: cm,
                strokeWidth: "2",
                opacity: "0.8"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M88 44 L88 92 L126 112",
                stroke: c,
                strokeWidth: "1.6",
                fill: "none",
                opacity: "0.65"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M164 44 L164 92 L126 112",
                stroke: c,
                strokeWidth: "1.6",
                fill: "none",
                opacity: "0.65"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M88 44 L126 24 L164 44",
                stroke: cm,
                strokeWidth: "2.5",
                fill: "none",
                opacity: "0.95"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M104 76 C118 68 140 58 164 44",
                stroke: cm,
                strokeWidth: "1.2",
                strokeDasharray: "4 3",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "126",
                cy: "24",
                r: "6",
                fill: cm,
                opacity: "0.9",
                filter: `url(#f-${uid})`
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "88",
                cy: "44",
                r: "4",
                fill: c,
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "164",
                cy: "44",
                r: "4",
                fill: c,
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/solutions-showcase.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
    if (type === "coins") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "176",
        height: "158",
        viewBox: "0 0 176 158",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: `il-${uid}`,
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: cm
                        }, void 0, false, {
                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: c,
                            stopOpacity: "0.55"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "88",
                cy: "150",
                rx: "54",
                ry: "7",
                fill: c,
                opacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            [
                3,
                2,
                1
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M34 ${76 + i * 16} L34 ${92 + i * 16} A54 19 0 0 0 142 ${92 + i * 16} L142 ${76 + i * 16}`,
                        fill: `rgba(${cr},${0.06 + i * 0.04})`,
                        stroke: c,
                        strokeWidth: "1.3",
                        opacity: 0.28 + i * 0.12
                    }, void 0, false, {
                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "88",
                cy: "48",
                rx: "54",
                ry: "19",
                fill: `url(#il-${uid})`,
                opacity: "0.22"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "88",
                cy: "48",
                rx: "54",
                ry: "19",
                fill: "white",
                stroke: cm,
                strokeWidth: "2.2",
                opacity: "0.9"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "88",
                cy: "48",
                rx: "38",
                ry: "12",
                fill: `rgba(${cr},0.08)`
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "88",
                cy: "48",
                rx: "38",
                ry: "12",
                stroke: c,
                strokeWidth: "0.8",
                fill: "none",
                opacity: "0.35"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "88",
                y: "53",
                textAnchor: "middle",
                fontSize: "14",
                fontWeight: "900",
                fill: c,
                opacity: "0.65",
                children: "$"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M34 48 L34 76",
                stroke: c,
                strokeWidth: "1.3",
                opacity: "0.35"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M142 48 L142 76",
                stroke: c,
                strokeWidth: "1.3",
                opacity: "0.35"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "88",
                cy: "76",
                rx: "54",
                ry: "19",
                fill: "white",
                stroke: c,
                strokeWidth: "2",
                opacity: "0.9"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/solutions-showcase.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
    if (type === "sparkle") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "188",
        height: "162",
        viewBox: "0 0 188 162",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `il-${uid}`,
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: cm,
                                stopOpacity: "0.85"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: c,
                                stopOpacity: "0.3"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: `gw-${uid}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "10",
                                result: "b"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "b"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 270,
                                        columnNumber: 20
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 270,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "94",
                cy: "81",
                rx: "65",
                ry: "58",
                fill: cm,
                opacity: "0.08",
                filter: `url(#gw-${uid})`
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M94 10 C96 47 114 64 151 66 C114 68 96 85 94 122 C92 85 74 68 37 66 C74 64 92 47 94 10Z",
                fill: "white",
                stroke: cm,
                strokeWidth: "1.8",
                opacity: "0.93"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M94 10 C96 47 114 64 151 66 C114 68 96 85 94 122 C92 85 74 68 37 66 C74 64 92 47 94 10Z",
                fill: `url(#il-${uid})`,
                opacity: "0.2"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M152 16 C153 29 160 36 173 37 C160 38 153 45 152 58 C151 45 144 38 131 37 C144 36 151 29 152 16Z",
                fill: "white",
                stroke: cm,
                strokeWidth: "1.1",
                opacity: "0.85"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M28 96 C29 106 34 111 44 112 C34 113 29 118 28 128 C27 118 22 113 12 112 C22 111 27 106 28 96Z",
                fill: "white",
                stroke: cm,
                strokeWidth: "1.1",
                opacity: "0.72"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "94",
                cy: "66",
                r: "4",
                fill: cm,
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/solutions-showcase.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
    if (type === "bag") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "170",
        height: "158",
        viewBox: "0 0 170 158",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: `il-${uid}`,
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: cm,
                            stopOpacity: "0.75"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: c,
                            stopOpacity: "0.25"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                    lineNumber: 292,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "85",
                cy: "150",
                rx: "50",
                ry: "7",
                fill: c,
                opacity: "0.09"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "16",
                y: "50",
                width: "138",
                height: "98",
                rx: "20",
                fill: "white",
                stroke: cm,
                strokeWidth: "2",
                opacity: "0.9"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "16",
                y: "50",
                width: "138",
                height: "98",
                rx: "20",
                fill: `url(#il-${uid})`,
                opacity: "0.12"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M48 50 C48 22 122 22 122 50",
                stroke: cm,
                strokeWidth: "3.2",
                fill: "none",
                strokeLinecap: "round",
                opacity: "0.82"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "85",
                cy: "100",
                r: "14",
                fill: "white",
                stroke: c,
                strokeWidth: "2",
                opacity: "0.92"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "85",
                cy: "100",
                r: "6",
                fill: cm,
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M26 70 Q50 60 68 70",
                stroke: "white",
                strokeWidth: "3",
                strokeLinecap: "round",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/solutions-showcase.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this);
    // layers (consultancy)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "192",
        height: "158",
        viewBox: "0 0 192 158",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: `il-${uid}`,
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: cm,
                            stopOpacity: "0.75"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: c,
                            stopOpacity: "0.3"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "96",
                cy: "150",
                rx: "58",
                ry: "7",
                fill: c,
                opacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            [
                2,
                1,
                0
            ].map((i)=>{
                const cy = 36 + i * 36, rx = 64 - i * 5;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `M${96 - rx} ${cy + 18} L96 ${cy} L${96 + rx} ${cy + 18} L${96 + rx} ${cy + 30} L96 ${cy + 12} L${96 - rx} ${cy + 30}Z`,
                            fill: "white",
                            stroke: cm,
                            strokeWidth: "1.5",
                            opacity: 0.82 - i * 0.1
                        }, void 0, false, {
                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                            lineNumber: 330,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `M${96 - rx} ${cy + 18} L96 ${cy} L${96 + rx} ${cy + 18}`,
                            fill: `url(#il-${uid})`,
                            opacity: 0.14 + i * 0.07
                        }, void 0, false, {
                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                            lineNumber: 332,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                    lineNumber: 329,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/solutions-showcase.tsx",
        lineNumber: 318,
        columnNumber: 5
    }, this);
}
_c3 = Illus;
/* ──────────────────────────────────────────────────────────────
   BRAND MARK  (conveyor stripes + K glow)
────────────────────────────────────────────────────────────── */ function BrandMark({ accentDark, accent, accentRgb }) {
    const uid = accentDark.replace(/[^a-z0-9]/gi, "");
    const W = 224, H = 124, GAP = 9, COUNT = 30, LEAN = 12;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes ks-scroll-${uid} {
          from { transform: translateX(0); }
          to   { transform: translateX(${GAP * 2}px); }
        }
        @keyframes ks-beam-${uid} {
          0%   { opacity:0; transform:translateX(-${W * 0.9}px) skewX(-${LEAN}deg); }
          10%  { opacity:1; }
          88%  { opacity:1; }
          100% { opacity:0; transform:translateX(${W * 1.8}px) skewX(-${LEAN}deg); }
        }
        @keyframes ks-halo-${uid} {
          0%,100% { opacity:0.18; filter:blur(9px); }
          50%     { opacity:0.42; filter:blur(14px); }
        }
        @keyframes ks-draw-${uid} {
          from { stroke-dashoffset: 320; opacity:0; }
          20%  { opacity:1; }
          to   { stroke-dashoffset: 0; opacity:1; }
        }
        @keyframes ks-pulse-${uid} {
          0%,100% { opacity:0.82; }
          50%     { opacity:1; }
        }
        .kss-${uid} { animation: ks-scroll-${uid} 0.55s linear infinite; }
        .ksb-${uid} { animation: ks-beam-${uid} 3s cubic-bezier(0.4,0,0.6,1) infinite; }
        .ksg-${uid} { animation: ks-halo-${uid} 2.4s ease-in-out infinite; }
        .ksd-${uid} {
          stroke-dasharray: 320;
          animation: ks-draw-${uid} 1.2s ease-out forwards,
                     ks-pulse-${uid} 2.4s ease-in-out 1.2s infinite;
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: W,
                height: H,
                viewBox: `0 0 ${W} ${H}`,
                fill: "none",
                style: {
                    display: "block"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: `ksg-${uid}`,
                                x1: "0",
                                y1: "0",
                                x2: "1",
                                y2: "0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: accentDark,
                                        stopOpacity: "0.1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 387,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "45%",
                                        stopColor: accent,
                                        stopOpacity: "0.8"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: accentDark,
                                        stopOpacity: "0.35"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: `ksb-${uid}`,
                                x1: "0",
                                y1: "0",
                                x2: "1",
                                y2: "0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "white",
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "30%",
                                        stopColor: "white",
                                        stopOpacity: "0.45"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 393,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: "white",
                                        stopOpacity: "0.72"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "70%",
                                        stopColor: "white",
                                        stopOpacity: "0.45"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 395,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "white",
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: `ksmk-${uid}`,
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: accent,
                                        stopOpacity: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: accentDark,
                                        stopOpacity: "0.9"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 400,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 398,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                id: `ksclip-${uid}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    width: W,
                                    height: H
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                                    lineNumber: 403,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        clipPath: `url(#ksclip-${uid})`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                className: `kss-${uid}`,
                                children: Array.from({
                                    length: COUNT * 2
                                }).map((_, i)=>{
                                    const cx = -W * 0.12 + i * GAP;
                                    const frac = i % COUNT / COUNT;
                                    const op = 0.12 + frac * 0.65;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: cx - 2.5,
                                        y: -10,
                                        width: 5,
                                        height: H + 20,
                                        rx: 2.5,
                                        fill: `url(#ksg-${uid})`,
                                        opacity: op,
                                        transform: `skewX(-${LEAN})`
                                    }, i, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 415,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 409,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                className: `ksb-${uid}`,
                                x: 0,
                                y: -10,
                                width: W * 0.28,
                                height: H + 20,
                                fill: `url(#ksb-${uid})`
                            }, void 0, false, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 425,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                className: `ksg-${uid}`,
                                d: "M78 18 L78 106 M78 62 L134 18 M78 62 L134 106",
                                stroke: accentDark,
                                strokeWidth: "26",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                className: `ksd-${uid}`,
                                d: "M78 18 L78 106 M78 62 L134 18 M78 62 L134 106",
                                stroke: accentDark,
                                strokeWidth: "9",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 438,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M78 18 L78 106 M78 62 L134 18 M78 62 L134 106",
                                stroke: "white",
                                strokeWidth: "3",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                opacity: "0.35"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c4 = BrandMark;
function SolutionsShowcase() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pills, setPills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(TABS.map({
        "SolutionsShowcase.useState": (t)=>t.defaultPill
    }["SolutionsShowcase.useState"]));
    const [pillDir, setPillDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tab = TABS[active];
    const c0 = tab.tabGrad[0], c1 = tab.tabGrad[1];
    function startCycle() {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(()=>{
            setPillDir(1);
            setPills((prev)=>prev.map((v, idx)=>idx !== active ? v : (v + 1) % TABS[idx].pills.length));
        }, 2200);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SolutionsShowcase.useEffect": ()=>{
            startCycle();
            return ({
                "SolutionsShowcase.useEffect": ()=>{
                    if (timerRef.current) clearInterval(timerRef.current);
                }
            })["SolutionsShowcase.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["SolutionsShowcase.useEffect"], [
        active
    ]);
    function selectPill(i) {
        setPillDir(i > pills[active] ? 1 : -1);
        setPills((prev)=>prev.map((v, idx)=>idx === active ? i : v));
        startCycle();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            width: "100%",
            background: "#ffffff",
            padding: "96px 0 110px",
            fontFamily: "-apple-system,BlinkMacSystemFont,'Inter','Segoe UI',Roboto,sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1300,
                    margin: "0 auto",
                    padding: "0 44px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            textAlign: "center",
                            marginBottom: 52
                        },
                        initial: {
                            opacity: 0,
                            y: 22
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.55
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 13,
                                    marginBottom: 18
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                scale: 0.7,
                                                opacity: 0,
                                                rotate: -8
                                            },
                                            animate: {
                                                scale: 1,
                                                opacity: 1,
                                                rotate: 0
                                            },
                                            exit: {
                                                scale: 0.7,
                                                opacity: 0,
                                                rotate: 8
                                            },
                                            transition: {
                                                duration: 0.25,
                                                ease: [
                                                    0.34,
                                                    1.56,
                                                    0.64,
                                                    1
                                                ]
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBadge, {
                                                grad: tab.tabGrad,
                                                size: 48
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                lineNumber: 517,
                                                columnNumber: 17
                                            }, this)
                                        }, active, false, {
                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                            lineNumber: 511,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 510,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            margin: 0,
                                            fontSize: 34,
                                            fontWeight: 800,
                                            color: "#0F172A",
                                            letterSpacing: "-0.03em",
                                            lineHeight: 1
                                        },
                                        children: "KeySol Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 520,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 509,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: "0 auto",
                                    maxWidth: 620,
                                    fontSize: 16.5,
                                    color: "#6B7280",
                                    lineHeight: 1.68,
                                    fontWeight: 400
                                },
                                children: "An AI-driven, composable platform for businesses — uniting digital retail, asset finance, and enterprise operations with trust and transparency."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 527,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                        lineNumber: 502,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            gap: 8,
                            marginBottom: 36,
                            flexWrap: "wrap"
                        },
                        children: TABS.map((t, i)=>{
                            const on = i === active;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>setActive(i),
                                whileHover: {
                                    y: on ? 0 : -3,
                                    scale: on ? 1 : 1.03
                                },
                                whileTap: {
                                    scale: 0.96
                                },
                                style: {
                                    position: "relative",
                                    padding: "11px 28px",
                                    borderRadius: 9999,
                                    border: on ? "none" : "1.5px solid #E2E8F0",
                                    background: on ? `linear-gradient(135deg,${t.tabGrad[0]},${t.tabGrad[1]})` : "#ffffff",
                                    color: on ? "#ffffff" : "#475569",
                                    fontSize: 15,
                                    fontWeight: on ? 700 : 500,
                                    cursor: "pointer",
                                    letterSpacing: "-0.01em",
                                    boxShadow: on ? `0 6px 22px ${t.tabGrad[0]}48, 0 2px 8px ${t.tabGrad[0]}28` : "0 1px 3px rgba(0,0,0,0.05)",
                                    transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden"
                                },
                                children: [
                                    on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(105deg,transparent 35%,rgba(255,255,255,0.22) 50%,transparent 65%)",
                                            borderRadius: 9999,
                                            animation: "tab-shine 2.5s ease-in-out infinite"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                        lineNumber: 571,
                                        columnNumber: 19
                                    }, this),
                                    t.label
                                ]
                            }, t.id, true, {
                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                lineNumber: 545,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                        lineNumber: 538,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 18
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -12
                            },
                            transition: {
                                duration: 0.28,
                                ease: [
                                    0.25,
                                    0.1,
                                    0.25,
                                    1
                                ]
                            },
                            style: {
                                display: "grid",
                                gridTemplateColumns: "1.85fr 2.15fr 1.7fr",
                                gap: 16,
                                alignItems: "stretch"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: tab.leftBg,
                                        borderRadius: 22,
                                        overflow: "hidden",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        minHeight: 500,
                                        boxShadow: `0 2px 24px rgba(${tab.accentRgb},0.12), 0 1px 4px rgba(0,0,0,0.04)`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                paddingTop: 18
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ticks, {
                                                color: tab.accent,
                                                accentRgb: tab.accentRgb
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                lineNumber: 613,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                            lineNumber: 612,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "flex-end",
                                                padding: "30px 34px 38px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 13,
                                                        marginBottom: 16
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBadge, {
                                                            grad: tab.tabGrad,
                                                            size: 42
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                            lineNumber: 621,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 22,
                                                                fontWeight: 800,
                                                                color: "#111827",
                                                                letterSpacing: "-0.022em"
                                                            },
                                                            children: tab.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                            lineNumber: 622,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                    lineNumber: 620,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: 15,
                                                        color: "#374151",
                                                        lineHeight: 1.72,
                                                        marginBottom: 30,
                                                        fontWeight: 400
                                                    },
                                                    children: tab.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    whileHover: {
                                                        scale: 1.04,
                                                        boxShadow: `0 8px 28px rgba(${tab.accentRgb},0.2)`,
                                                        borderColor: tab.accent
                                                    },
                                                    whileTap: {
                                                        scale: 0.97
                                                    },
                                                    style: {
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        gap: 8,
                                                        padding: "10px 20px",
                                                        border: `1.5px solid #CBD5E1`,
                                                        borderRadius: 10,
                                                        background: "#ffffff",
                                                        color: "#111827",
                                                        fontSize: 14.5,
                                                        fontWeight: 600,
                                                        cursor: "pointer",
                                                        width: "fit-content",
                                                        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                                                        transition: "all 0.18s"
                                                    },
                                                    children: [
                                                        tab.cta,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "13",
                                                            height: "13",
                                                            viewBox: "0 0 13 13",
                                                            fill: "none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M2 11L11 2M7 2h4v4",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.9",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                                lineNumber: 660,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                            lineNumber: 659,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                            lineNumber: 616,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                paddingBottom: 18
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ticks, {
                                                color: tab.accent,
                                                accentRgb: tab.accentRgb,
                                                flip: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                lineNumber: 668,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                            lineNumber: 667,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                                    lineNumber: 602,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                background: tab.midBg,
                                                borderRadius: 22,
                                                overflow: "hidden",
                                                display: "flex",
                                                flexDirection: "column",
                                                position: "relative",
                                                boxShadow: `0 2px 20px rgba(${tab.accentRgb},0.1)`
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                mode: "wait",
                                                custom: pillDir,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    custom: pillDir,
                                                    variants: {
                                                        enter: (d)=>({
                                                                opacity: 0,
                                                                y: d * 30
                                                            }),
                                                        show: ()=>({
                                                                opacity: 1,
                                                                y: 0
                                                            }),
                                                        exit: (d)=>({
                                                                opacity: 0,
                                                                y: d * -30
                                                            })
                                                    },
                                                    initial: "enter",
                                                    animate: "show",
                                                    exit: "exit",
                                                    transition: {
                                                        duration: 0.3,
                                                        ease: [
                                                            0.25,
                                                            0.1,
                                                            0.25,
                                                            1
                                                        ]
                                                    },
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                textAlign: "center",
                                                                fontSize: 15,
                                                                fontWeight: 500,
                                                                color: "#374151",
                                                                lineHeight: 1.62,
                                                                padding: "26px 30px 14px"
                                                            },
                                                            children: tab.tagline
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                            lineNumber: 700,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flex: 1,
                                                                padding: "0 18px 24px",
                                                                display: "flex",
                                                                alignItems: "flex-end"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Waveform, {
                                                                color: tab.accent,
                                                                accentRgb: tab.accentRgb,
                                                                tabIdx: active
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                                lineNumber: 712,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                            lineNumber: 708,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, `ctr-${active}-${pills[active]}`, true, {
                                                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                lineNumber: 687,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                            lineNumber: 678,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: tab.midBg,
                                                borderRadius: 22,
                                                padding: "28px 24px",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 10,
                                                boxShadow: `0 2px 20px rgba(${tab.accentRgb},0.1)`
                                            },
                                            children: tab.pills.map((pill, bi)=>{
                                                const on = pills[active] === bi;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>selectPill(bi),
                                                    style: {
                                                        position: "relative",
                                                        width: "100%",
                                                        padding: "14px 20px",
                                                        borderRadius: 11,
                                                        border: "1.5px solid",
                                                        borderColor: on ? "transparent" : "#E5E7EB",
                                                        background: "transparent",
                                                        color: on ? "#ffffff" : "#374151",
                                                        fontSize: 15,
                                                        fontWeight: on ? 700 : 500,
                                                        cursor: "pointer",
                                                        textAlign: "center",
                                                        letterSpacing: "-0.01em",
                                                        overflow: "hidden",
                                                        zIndex: 0,
                                                        transition: "color 0.22s, border-color 0.22s"
                                                    },
                                                    children: [
                                                        on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                            layoutId: `pill-bg-${active}`,
                                                            style: {
                                                                position: "absolute",
                                                                inset: 0,
                                                                borderRadius: 10,
                                                                background: `linear-gradient(135deg,${tab.pillGrad[0]},${tab.pillGrad[1]})`,
                                                                zIndex: -1,
                                                                boxShadow: `0 5px 18px ${tab.pillGrad[0]}48`
                                                            },
                                                            transition: {
                                                                type: "spring",
                                                                stiffness: 440,
                                                                damping: 38
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                            lineNumber: 748,
                                                            columnNumber: 25
                                                        }, this),
                                                        !on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                position: "absolute",
                                                                inset: 0,
                                                                borderRadius: 10,
                                                                background: "#ffffff",
                                                                zIndex: -1
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                            lineNumber: 760,
                                                            columnNumber: 25
                                                        }, this),
                                                        pill
                                                    ]
                                                }, pill, true, {
                                                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                    lineNumber: 730,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                            lineNumber: 719,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                                    lineNumber: 675,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                background: tab.illBg,
                                                borderRadius: 22,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                overflow: "hidden",
                                                position: "relative",
                                                minHeight: 222,
                                                boxShadow: `0 2px 22px rgba(${tab.accentRgb},0.14)`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "absolute",
                                                        inset: 0,
                                                        background: `radial-gradient(ellipse at 50% 38%, rgba(${tab.accentRgb},0.22) 0%, transparent 65%)`,
                                                        pointerEvents: "none"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                    lineNumber: 787,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    mode: "wait",
                                                    custom: pillDir,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        custom: pillDir,
                                                        variants: {
                                                            enter: (d)=>({
                                                                    opacity: 0,
                                                                    y: d * 44,
                                                                    scale: 0.92
                                                                }),
                                                            show: ()=>({
                                                                    opacity: 1,
                                                                    y: 0,
                                                                    scale: 1
                                                                }),
                                                            exit: (d)=>({
                                                                    opacity: 0,
                                                                    y: d * -44,
                                                                    scale: 0.92
                                                                })
                                                        },
                                                        initial: "enter",
                                                        animate: "show",
                                                        exit: "exit",
                                                        transition: {
                                                            duration: 0.34,
                                                            ease: [
                                                                0.34,
                                                                1.56,
                                                                0.64,
                                                                1
                                                            ]
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Illus, {
                                                            type: tab.visual,
                                                            c: tab.accentDark,
                                                            cm: tab.accent,
                                                            cr: tab.accentRgb
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                            lineNumber: 804,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, `ill-${active}-${pills[active]}`, false, {
                                                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                        lineNumber: 793,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                    lineNumber: 792,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                            lineNumber: 778,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: tab.bmBg,
                                                borderRadius: 22,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "16px 10px",
                                                overflow: "hidden",
                                                position: "relative",
                                                minHeight: 152,
                                                boxShadow: `0 2px 18px rgba(${tab.accentRgb},0.12)`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "absolute",
                                                        inset: 0,
                                                        background: `radial-gradient(ellipse at 58% 50%, rgba(${tab.accentRgb},0.16) 0%, transparent 65%)`,
                                                        pointerEvents: "none"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                    lineNumber: 819,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandMark, {
                                                    accentDark: tab.accentDark,
                                                    accent: tab.accent,
                                                    accentRgb: tab.accentRgb
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                                                    lineNumber: 824,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                                            lineNumber: 810,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                                    lineNumber: 775,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, active, true, {
                            fileName: "[project]/components/sections/solutions-showcase.tsx",
                            lineNumber: 586,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/solutions-showcase.tsx",
                        lineNumber: 585,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 52,
                    height: 3,
                    background: "#F1F5F9"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        width: 0
                    },
                    animate: {
                        width: `${(active + 1) / TABS.length * 100}%`
                    },
                    transition: {
                        duration: 0.5,
                        ease: [
                            0.4,
                            0,
                            0.2,
                            1
                        ]
                    },
                    style: {
                        height: "100%",
                        background: `linear-gradient(to right,${c0},${c1})`,
                        borderRadius: "0 3px 3px 0",
                        boxShadow: `0 0 10px ${c0}70`
                    }
                }, `pb-${active}`, false, {
                    fileName: "[project]/components/sections/solutions-showcase.tsx",
                    lineNumber: 839,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 838,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes tab-shine {
          0%   { transform:translateX(-100%) skewX(-15deg); }
          100% { transform:translateX(300%)  skewX(-15deg); }
        }
        @media (max-width:1024px) {
          .ks-pg { grid-template-columns:1fr 1fr !important; }
          .ks-pg > div:last-child { flex-direction:row !important; }
        }
        @media (max-width:680px) {
          .ks-pg { grid-template-columns:1fr !important; }
          .ks-pg > div:last-child { flex-direction:column !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/sections/solutions-showcase.tsx",
                lineNumber: 853,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/solutions-showcase.tsx",
        lineNumber: 493,
        columnNumber: 5
    }, this);
}
_s(SolutionsShowcase, "m0ZGkXMuFV18uyHMjTqey2MfUjQ=");
_c5 = SolutionsShowcase;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Ticks");
__turbopack_context__.k.register(_c1, "IconBadge");
__turbopack_context__.k.register(_c2, "Waveform");
__turbopack_context__.k.register(_c3, "Illus");
__turbopack_context__.k.register(_c4, "BrandMark");
__turbopack_context__.k.register(_c5, "SolutionsShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/stats-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsSection",
    ()=>StatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
/* ─────────────────────────────────────────────────────────────
   COUNTER
───────────────────────────────────────────────────────────── */ function Counter({ target, prefix = "", suffix = "", inView }) {
    _s();
    const [val, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Counter.useEffect": ()=>{
            if (!inView) return;
            const steps = 60, dur = 2000;
            let s = 0;
            const inc = target / steps;
            const id = setInterval({
                "Counter.useEffect.id": ()=>{
                    s += inc;
                    if (s >= target) {
                        setVal(target);
                        clearInterval(id);
                    } else setVal(Math.floor(s));
                }
            }["Counter.useEffect.id"], dur / steps);
            return ({
                "Counter.useEffect": ()=>clearInterval(id)
            })["Counter.useEffect"];
        }
    }["Counter.useEffect"], [
        inView,
        target
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            prefix,
            val,
            suffix
        ]
    }, void 0, true);
}
_s(Counter, "J9W7PNt/cWQtiNkcKYTpkMkMUx4=");
_c = Counter;
/* ─────────────────────────────────────────────────────────────
   LIGHTNING BOLT — animated electric strike
───────────────────────────────────────────────────────────── */ function LightningBolt({ active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
            width: "28",
            height: "44",
            viewBox: "0 0 28 44",
            initial: {
                opacity: 0,
                scale: 0.5,
                y: -10
            },
            animate: {
                opacity: [
                    0,
                    1,
                    1,
                    0
                ],
                scale: [
                    0.5,
                    1.2,
                    1,
                    0.8
                ],
                y: [
                    -10,
                    0,
                    0,
                    -5
                ]
            },
            exit: {
                opacity: 0,
                scale: 0.5
            },
            transition: {
                duration: 0.5
            },
            style: {
                position: "absolute",
                top: 8,
                right: 12,
                filter: "drop-shadow(0 0 12px #fbbf24) drop-shadow(0 0 24px #f59e0b)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                d: "M16 0 L8 20 L14 20 L6 44 L18 24 L12 24 L20 0",
                fill: "#fbbf24",
                initial: {
                    pathLength: 0
                },
                animate: {
                    pathLength: [
                        0,
                        1,
                        1,
                        0.8
                    ]
                },
                transition: {
                    duration: 0.3
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/stats-section.tsx",
                lineNumber: 50,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/stats-section.tsx",
            lineNumber: 35,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/stats-section.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c1 = LightningBolt;
/* ─────────────────────────────────────────────────────────────
   ELECTRIC SPARK — burst effect
───────────────────────────────────────────────────────────── */ function ElectricSpark({ active }) {
    const sparks = [
        {
            x: 0,
            y: -18,
            rotate: 0
        },
        {
            x: 12,
            y: -12,
            rotate: 45
        },
        {
            x: 18,
            y: 0,
            rotate: 90
        },
        {
            x: 12,
            y: 12,
            rotate: 135
        },
        {
            x: 0,
            y: 18,
            rotate: 180
        },
        {
            x: -12,
            y: 12,
            rotate: 225
        },
        {
            x: -18,
            y: 0,
            rotate: 270
        },
        {
            x: -12,
            y: -12,
            rotate: 315
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: active && sparks.map((spark, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0
                },
                animate: {
                    opacity: [
                        0,
                        1,
                        0
                    ],
                    scale: [
                        0,
                        1,
                        0
                    ],
                    x: spark.x,
                    y: spark.y
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: 0.4,
                    delay: i * 0.02
                },
                style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 2,
                    height: 6,
                    background: "linear-gradient(to bottom, #fef3c7, #f59e0b)",
                    borderRadius: 1,
                    transform: `rotate(${spark.rotate}deg)`,
                    marginLeft: -1,
                    marginTop: -3
                }
            }, i, false, {
                fileName: "[project]/components/sections/stats-section.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/sections/stats-section.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_c2 = ElectricSpark;
/* ─────────────────────────────────────────────────────────────
   GLOWING BORDER — animated gradient
───────────────────────────────────────────────────────────── */ function GlowingBorder({ color, active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: active ? 1 : 0
        },
        transition: {
            duration: 0.3
        },
        style: {
            position: "absolute",
            inset: 0,
            borderRadius: 24,
            padding: 2,
            background: `linear-gradient(90deg, ${color}, #fbbf24, ${color})`,
            backgroundSize: "200% 200%",
            animation: active ? "gradientShift 2s linear infinite" : "none",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: `
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `
        }, void 0, false, {
            fileName: "[project]/components/sections/stats-section.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/stats-section.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c3 = GlowingBorder;
/* ─────────────────────────────────────────────────────────────
   STAT CARD — Premium with lightning
───────────────────────────────────────────────────────────── */ function StatCard({ value, prefix = "", suffix = "", label, inView, delay, icon, gradient, index }) {
    _s1();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const accentColor = gradient.split(',')[1].trim().split(' ')[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            y: 40,
            scale: 0.95
        },
        animate: inView ? {
            y: 0,
            scale: 1
        } : {},
        transition: {
            duration: 0.7,
            delay,
            type: "spring",
            stiffness: 100
        },
        onHoverStart: ()=>setIsHovered(true),
        onHoverEnd: ()=>setIsHovered(false),
        whileHover: {
            y: -8,
            transition: {
                duration: 0.3
            }
        },
        style: {
            background: "white",
            borderRadius: 24,
            padding: "44px 36px",
            textAlign: "center",
            boxShadow: isHovered ? `0 20px 60px ${accentColor}30, 0 0 0 1px ${accentColor}20` : "0 4px 20px rgba(0,0,0,0.06)",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlowingBorder, {
                color: accentColor,
                active: isHovered
            }, void 0, false, {
                fileName: "[project]/components/sections/stats-section.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightningBolt, {
                active: isHovered
            }, void 0, false, {
                fileName: "[project]/components/sections/stats-section.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    scale: isHovered ? [
                        1,
                        1.4,
                        1
                    ] : [
                        1,
                        1.2,
                        1
                    ],
                    opacity: isHovered ? [
                        0.3,
                        0.6,
                        0.3
                    ] : [
                        0.2,
                        0.4,
                        0.2
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                },
                style: {
                    position: "absolute",
                    top: "10%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: gradient,
                    filter: "blur(30px)"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/stats-section.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    y: isHovered ? -6 : 0,
                    scale: isHovered ? 1.05 : 1
                },
                transition: {
                    duration: 0.3,
                    type: "spring"
                },
                style: {
                    position: "relative",
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    background: gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    boxShadow: isHovered ? `0 15px 40px ${accentColor}60, 0 0 30px ${accentColor}40` : `0 10px 30px ${accentColor}40`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ElectricSpark, {
                        active: isHovered
                    }, void 0, false, {
                        fileName: "[project]/components/sections/stats-section.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            opacity: [
                                0.4,
                                0.8,
                                0.4
                            ],
                            scale: [
                                0.8,
                                1,
                                0.8
                            ]
                        },
                        transition: {
                            duration: 2,
                            repeat: Infinity
                        },
                        style: {
                            position: "absolute",
                            inset: 6,
                            borderRadius: 12,
                            background: "rgba(255,255,255,0.25)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/stats-section.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/stats-section.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    scale: isHovered ? 1.05 : 1
                },
                transition: {
                    duration: 0.3,
                    type: "spring"
                },
                style: {
                    fontSize: 48,
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    marginBottom: 10,
                    background: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Counter, {
                    target: value,
                    prefix: prefix,
                    suffix: suffix,
                    inView: inView
                }, void 0, false, {
                    fileName: "[project]/components/sections/stats-section.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/stats-section.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    letterSpacing: isHovered ? "0.05em" : "0.01em"
                },
                transition: {
                    duration: 0.3
                },
                style: {
                    fontSize: 14,
                    color: "#64748b",
                    fontWeight: 500,
                    textTransform: "uppercase"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/sections/stats-section.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/stats-section.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_s1(StatCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c4 = StatCard;
function StatsSection() {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-100px"
    });
    const stats = [
        {
            value: 200,
            suffix: "+",
            label: "Projects Delivered",
            gradient: "linear-gradient(135deg, #8b5cf6, #a855f7, #6366f1)",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "28",
                height: "28",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/stats-section.tsx",
                        lineNumber: 272,
                        columnNumber: 150
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "22 4 12 14.01 9 11.01"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/stats-section.tsx",
                        lineNumber: 272,
                        columnNumber: 196
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/stats-section.tsx",
                lineNumber: 272,
                columnNumber: 14
            }, this)
        },
        {
            value: 50,
            suffix: "+",
            label: "Global Clients",
            gradient: "linear-gradient(135deg, #3b82f6, #06b6d4, #0ea5e9)",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "28",
                height: "28",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/stats-section.tsx",
                        lineNumber: 277,
                        columnNumber: 150
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "9",
                        cy: "7",
                        r: "4"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/stats-section.tsx",
                        lineNumber: 277,
                        columnNumber: 203
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M23 21v-2a4 4 0 0 0-3-3.87"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/stats-section.tsx",
                        lineNumber: 277,
                        columnNumber: 232
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 3.13a4 4 0 0 1 0 7.75"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/stats-section.tsx",
                        lineNumber: 277,
                        columnNumber: 270
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/stats-section.tsx",
                lineNumber: 277,
                columnNumber: 14
            }, this)
        },
        {
            value: 15,
            suffix: "+",
            label: "Countries Served",
            gradient: "linear-gradient(135deg, #10b981, #22c55e, #34d399)",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "28",
                height: "28",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/stats-section.tsx",
                        lineNumber: 282,
                        columnNumber: 150
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "2",
                        y1: "12",
                        x2: "22",
                        y2: "12"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/stats-section.tsx",
                        lineNumber: 282,
                        columnNumber: 182
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/stats-section.tsx",
                        lineNumber: 282,
                        columnNumber: 220
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/stats-section.tsx",
                lineNumber: 282,
                columnNumber: 14
            }, this)
        },
        {
            value: 98,
            suffix: "%",
            label: "Client Satisfaction",
            gradient: "linear-gradient(135deg, #f97316, #f59e0b, #fbbf24)",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "28",
                height: "28",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                }, void 0, false, {
                    fileName: "[project]/components/sections/stats-section.tsx",
                    lineNumber: 287,
                    columnNumber: 150
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/stats-section.tsx",
                lineNumber: 287,
                columnNumber: 14
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        style: {
            width: "100%",
            background: "linear-gradient(180deg, #fafafa 0%, #f8fafc 50%, #fafafa 100%)",
            padding: "120px 0",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    opacity: [
                        0,
                        0.04,
                        0
                    ]
                },
                transition: {
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 7
                },
                style: {
                    position: "absolute",
                    top: "10%",
                    right: "5%",
                    width: 100,
                    height: 150,
                    background: "linear-gradient(135deg, #fbbf24, transparent)",
                    filter: "blur(50px)",
                    transform: "rotate(15deg)"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/stats-section.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "0 48px",
                    position: "relative",
                    zIndex: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 100,
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        y: 20
                                    },
                                    animate: inView ? {
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.6,
                                        type: "spring"
                                    },
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 10,
                                        background: "white",
                                        border: "1px solid rgba(99,102,241,0.2)",
                                        borderRadius: 99,
                                        padding: "10px 20px",
                                        marginBottom: 28,
                                        boxShadow: "0 4px 15px rgba(99,102,241,0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                scale: [
                                                    1,
                                                    1.3,
                                                    1
                                                ],
                                                boxShadow: [
                                                    "0 0 0 0 rgba(99,102,241,0.4)",
                                                    "0 0 0 10px rgba(99,102,241,0)",
                                                    "0 0 0 0 rgba(99,102,241,0)"
                                                ]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: Infinity
                                            },
                                            style: {
                                                width: 8,
                                                height: 8,
                                                borderRadius: "50%",
                                                background: "#6366f1"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/stats-section.tsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 12,
                                                fontWeight: 700,
                                                letterSpacing: "0.1em",
                                                color: "#6366f1",
                                                textTransform: "uppercase"
                                            },
                                            children: "Why KeySol Global"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/stats-section.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/stats-section.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    initial: {
                                        y: 30
                                    },
                                    animate: inView ? {
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.7,
                                        delay: 0.1
                                    },
                                    style: {
                                        fontSize: "clamp(36px, 4.5vw, 56px)",
                                        fontWeight: 800,
                                        color: "#0f172a",
                                        letterSpacing: "-0.03em",
                                        lineHeight: 1.1,
                                        marginBottom: 28
                                    },
                                    children: [
                                        "Technology partner to the",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                backgroundPosition: [
                                                    "0% 50%",
                                                    "200% 50%",
                                                    "0% 50%"
                                                ]
                                            },
                                            transition: {
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            style: {
                                                background: "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)",
                                                backgroundSize: "200% auto",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                backgroundClip: "text"
                                            },
                                            children: "world's leading brands"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/stats-section.tsx",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/stats-section.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        y: 20
                                    },
                                    animate: inView ? {
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.2
                                    },
                                    style: {
                                        fontSize: 17,
                                        color: "#475569",
                                        lineHeight: 1.8,
                                        marginBottom: 18
                                    },
                                    children: "For over a decade, we've been helping businesses transform their operations through innovative technology solutions. Our team of experts brings deep industry knowledge and technical excellence to every project."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/stats-section.tsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        y: 20
                                    },
                                    animate: inView ? {
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.3
                                    },
                                    style: {
                                        fontSize: 17,
                                        color: "#475569",
                                        lineHeight: 1.8,
                                        marginBottom: 36
                                    },
                                    children: "We don't just deliver projects — we build lasting partnerships that drive continuous growth and innovation across the globe."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/stats-section.tsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    initial: {
                                        y: 20
                                    },
                                    animate: inView ? {
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.4
                                    },
                                    whileHover: {
                                        scale: 1.05,
                                        boxShadow: "0 0 40px rgba(99,102,241,0.4), 0 15px 40px rgba(99,102,241,0.3)"
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 12,
                                        background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                                        color: "white",
                                        border: "none",
                                        borderRadius: 14,
                                        padding: "18px 32px",
                                        fontSize: 16,
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        boxShadow: "0 8px 30px rgba(99,102,241,0.35)",
                                        fontFamily: "inherit",
                                        position: "relative",
                                        overflow: "hidden"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                x: [
                                                    0,
                                                    6,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 1.5,
                                                repeat: Infinity
                                            },
                                            children: "Explore Our Work"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/stats-section.tsx",
                                            lineNumber: 425,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            animate: {
                                                x: [
                                                    0,
                                                    6,
                                                    0
                                                ],
                                                y: [
                                                    0,
                                                    -6,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 1.5,
                                                repeat: Infinity
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "7",
                                                    y1: "17",
                                                    x2: "17",
                                                    y2: "7"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/stats-section.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "7 7 17 7 17 17"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/stats-section.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/stats-section.tsx",
                                            lineNumber: 428,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                x: [
                                                    "-100%",
                                                    "200%"
                                                ]
                                            },
                                            transition: {
                                                duration: 3,
                                                repeat: Infinity,
                                                repeatDelay: 2
                                            },
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "50%",
                                                height: "100%",
                                                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/stats-section.tsx",
                                            lineNumber: 438,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/stats-section.tsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/stats-section.tsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: 24
                            },
                            children: stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    value: stat.value,
                                    suffix: stat.suffix,
                                    label: stat.label,
                                    gradient: stat.gradient,
                                    icon: stat.icon,
                                    inView: inView,
                                    delay: 0.25 + i * 0.1,
                                    index: i
                                }, i, false, {
                                    fileName: "[project]/components/sections/stats-section.tsx",
                                    lineNumber: 456,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/stats-section.tsx",
                            lineNumber: 454,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/stats-section.tsx",
                    lineNumber: 318,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/stats-section.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/stats-section.tsx",
        lineNumber: 292,
        columnNumber: 5
    }, this);
}
_s2(StatsSection, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c5 = StatsSection;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Counter");
__turbopack_context__.k.register(_c1, "LightningBolt");
__turbopack_context__.k.register(_c2, "ElectricSpark");
__turbopack_context__.k.register(_c3, "GlowingBorder");
__turbopack_context__.k.register(_c4, "StatCard");
__turbopack_context__.k.register(_c5, "StatsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/process-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProcessSection",
    ()=>ProcessSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const steps = [
    {
        number: "01",
        title: "Discover",
        subtitle: "Deep Analysis",
        description: "We analyze your business challenges, goals, and existing systems to understand the full picture — uncovering hidden opportunities and key pain points.",
        gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        glow: "rgba(99,102,241,0.3)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "26",
            height: "26",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }, void 0, false, {
                    fileName: "[project]/components/sections/process-section.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "21",
                    x2: "16.65",
                    y2: "16.65"
                }, void 0, false, {
                    fileName: "[project]/components/sections/process-section.tsx",
                    lineNumber: 16,
                    columnNumber: 40
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/process-section.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        number: "02",
        title: "Strategize",
        subtitle: "Precision Planning",
        description: "We design a tailored roadmap with clear milestones, deliverables, and success metrics — ensuring every stakeholder is aligned before a single line of code is written.",
        gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
        glow: "rgba(59,130,246,0.3)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "26",
            height: "26",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "12 2 2 7 12 12 22 7 12 2"
                }, void 0, false, {
                    fileName: "[project]/components/sections/process-section.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "2 17 12 22 22 17"
                }, void 0, false, {
                    fileName: "[project]/components/sections/process-section.tsx",
                    lineNumber: 29,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "2 12 12 17 22 12"
                }, void 0, false, {
                    fileName: "[project]/components/sections/process-section.tsx",
                    lineNumber: 29,
                    columnNumber: 90
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/process-section.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        number: "03",
        title: "Execute",
        subtitle: "Flawless Build",
        description: "Our expert team builds your solution with surgical precision and continuous updates — leveraging cutting-edge technology to deliver beyond your expectations.",
        gradient: "linear-gradient(135deg, #10b981, #22c55e)",
        glow: "rgba(16,185,129,0.3)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "26",
            height: "26",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            }, void 0, false, {
                fileName: "[project]/components/sections/process-section.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/sections/process-section.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        number: "04",
        title: "Optimize",
        subtitle: "Continuous Growth",
        description: "We refine, scale, and ensure long-term success — monitoring performance, iterating on data insights, and evolving your platform as your business grows.",
        gradient: "linear-gradient(135deg, #f97316, #f59e0b)",
        glow: "rgba(249,115,22,0.3)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "26",
            height: "26",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "23 6 13.5 15.5 8.5 10.5 1 18"
                }, void 0, false, {
                    fileName: "[project]/components/sections/process-section.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "17 6 23 6 23 12"
                }, void 0, false, {
                    fileName: "[project]/components/sections/process-section.tsx",
                    lineNumber: 55,
                    columnNumber: 58
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/process-section.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function LightningBolt({ active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
            width: "20",
            height: "34",
            viewBox: "0 0 20 34",
            initial: {
                opacity: 0,
                scale: 0.5,
                y: -8
            },
            animate: {
                opacity: [
                    0,
                    1,
                    1,
                    0
                ],
                scale: [
                    0.5,
                    1.2,
                    1,
                    0.8
                ],
                y: [
                    -8,
                    0,
                    0,
                    -4
                ]
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.45
            },
            style: {
                position: "absolute",
                top: 8,
                right: 10,
                filter: "drop-shadow(0 0 8px #fbbf24)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 0 L4 16 L10 16 L4 34 L16 18 L10 18 L16 0",
                fill: "#fbbf24"
            }, void 0, false, {
                fileName: "[project]/components/sections/process-section.tsx",
                lineNumber: 73,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/process-section.tsx",
            lineNumber: 65,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/process-section.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_c = LightningBolt;
function ProcessSection() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-80px"
    });
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        style: {
            width: "100%",
            background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)",
            padding: "120px 0",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.04) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/process-section.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "0 48px",
                    position: "relative",
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            maxWidth: 700,
                            margin: "0 auto 80px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    y: 20
                                },
                                animate: inView ? {
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.6
                                },
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 10,
                                    background: "white",
                                    border: "1px solid rgba(99,102,241,0.2)",
                                    borderRadius: 99,
                                    padding: "10px 20px",
                                    marginBottom: 28,
                                    boxShadow: "0 4px 15px rgba(99,102,241,0.1)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            scale: [
                                                1,
                                                1.4,
                                                1
                                            ],
                                            boxShadow: [
                                                "0 0 0 0 rgba(99,102,241,0.4)",
                                                "0 0 0 8px rgba(99,102,241,0)",
                                                "0 0 0 0 rgba(99,102,241,0)"
                                            ]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity
                                        },
                                        style: {
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            background: "#6366f1"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/process-section.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 11,
                                            fontWeight: 700,
                                            letterSpacing: "0.12em",
                                            color: "#6366f1",
                                            textTransform: "uppercase"
                                        },
                                        children: "Our Process"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/process-section.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/process-section.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                initial: {
                                    y: 30
                                },
                                animate: inView ? {
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.7,
                                    delay: 0.1
                                },
                                style: {
                                    fontSize: "clamp(36px, 4.5vw, 56px)",
                                    fontWeight: 800,
                                    color: "#0f172a",
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1.1,
                                    marginBottom: 20
                                },
                                children: [
                                    "How we deliver",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        animate: {
                                            backgroundPosition: [
                                                "0% 50%",
                                                "200% 50%",
                                                "0% 50%"
                                            ]
                                        },
                                        transition: {
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "linear"
                                        },
                                        style: {
                                            background: "linear-gradient(90deg, #6366f1, #3b82f6, #10b981, #6366f1)",
                                            backgroundSize: "200% auto",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text"
                                        },
                                        children: "excellence"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/process-section.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/process-section.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    y: 20
                                },
                                animate: inView ? {
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2
                                },
                                style: {
                                    fontSize: 18,
                                    color: "#64748b",
                                    lineHeight: 1.75
                                },
                                children: "Our proven four-step methodology ensures every project is delivered on time, on budget, and above expectations."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/process-section.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/process-section.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: 24,
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    scaleX: 0
                                },
                                animate: inView ? {
                                    scaleX: 1
                                } : {},
                                transition: {
                                    duration: 1.2,
                                    delay: 0.5,
                                    ease: "easeInOut"
                                },
                                style: {
                                    position: "absolute",
                                    top: 52,
                                    left: "12.5%",
                                    width: "75%",
                                    height: 2,
                                    background: "linear-gradient(90deg, #6366f1, #3b82f6, #10b981, #f97316)",
                                    transformOrigin: "left center",
                                    zIndex: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/process-section.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            steps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        y: 50
                                    },
                                    animate: inView ? {
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.7,
                                        delay: 0.2 + i * 0.12,
                                        type: "spring",
                                        stiffness: 90
                                    },
                                    onHoverStart: ()=>setHoveredIndex(i),
                                    onHoverEnd: ()=>setHoveredIndex(null),
                                    whileHover: {
                                        y: -10,
                                        transition: {
                                            duration: 0.3
                                        }
                                    },
                                    style: {
                                        background: "white",
                                        borderRadius: 24,
                                        padding: "40px 32px",
                                        position: "relative",
                                        zIndex: 1,
                                        boxShadow: hoveredIndex === i ? `0 24px 60px ${step.glow}, 0 0 0 1px rgba(0,0,0,0.06)` : "0 4px 20px rgba(0,0,0,0.06)",
                                        cursor: "pointer",
                                        overflow: "hidden"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightningBolt, {
                                            active: hoveredIndex === i
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/process-section.tsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                scale: hoveredIndex === i ? [
                                                    1,
                                                    1.4,
                                                    1
                                                ] : [
                                                    1,
                                                    1.1,
                                                    1
                                                ],
                                                opacity: hoveredIndex === i ? 0.35 : 0.15
                                            },
                                            transition: {
                                                duration: 2.5,
                                                repeat: Infinity,
                                                delay: i * 0.3
                                            },
                                            style: {
                                                position: "absolute",
                                                top: -20,
                                                left: -20,
                                                width: 100,
                                                height: 100,
                                                borderRadius: "50%",
                                                background: step.gradient,
                                                filter: "blur(35px)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/process-section.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                opacity: hoveredIndex === i ? 1 : 0
                                            },
                                            transition: {
                                                duration: 0.3
                                            },
                                            style: {
                                                position: "absolute",
                                                inset: 0,
                                                borderRadius: 24,
                                                padding: 1.5,
                                                background: step.gradient,
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "xor",
                                                maskComposite: "exclude"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/process-section.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                scale: hoveredIndex === i ? 1.08 : 1,
                                                y: hoveredIndex === i ? -4 : 0
                                            },
                                            transition: {
                                                duration: 0.3,
                                                type: "spring"
                                            },
                                            style: {
                                                width: 60,
                                                height: 60,
                                                borderRadius: 18,
                                                background: step.gradient,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginBottom: 28,
                                                position: "relative",
                                                boxShadow: hoveredIndex === i ? `0 12px 30px ${step.glow}` : `0 6px 20px ${step.glow}`
                                            },
                                            children: [
                                                step.icon,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: "absolute",
                                                        top: -8,
                                                        right: -8,
                                                        width: 22,
                                                        height: 22,
                                                        borderRadius: "50%",
                                                        background: "white",
                                                        border: `2px solid`,
                                                        borderColor: step.glow,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        fontSize: 10,
                                                        fontWeight: 800,
                                                        color: "#0f172a",
                                                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                                                    },
                                                    children: i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/process-section.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/process-section.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                bottom: 16,
                                                right: 20,
                                                fontSize: 72,
                                                fontWeight: 900,
                                                lineHeight: 1,
                                                background: step.gradient,
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                backgroundClip: "text",
                                                opacity: 0.08,
                                                userSelect: "none",
                                                pointerEvents: "none"
                                            },
                                            children: step.number
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/process-section.tsx",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                fontWeight: 700,
                                                letterSpacing: "0.1em",
                                                textTransform: "uppercase",
                                                marginBottom: 8,
                                                background: step.gradient,
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                backgroundClip: "text"
                                            },
                                            children: step.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/process-section.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                            animate: {
                                                letterSpacing: hoveredIndex === i ? "-0.02em" : "-0.01em"
                                            },
                                            transition: {
                                                duration: 0.3
                                            },
                                            style: {
                                                fontSize: 22,
                                                fontWeight: 700,
                                                color: "#0f172a",
                                                marginBottom: 14,
                                                lineHeight: 1.2
                                            },
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/process-section.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 14,
                                                color: "#64748b",
                                                lineHeight: 1.8
                                            },
                                            children: step.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/process-section.tsx",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/sections/process-section.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/process-section.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/process-section.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/process-section.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(ProcessSection, "3iv1PI8H3TX5wSerWSmL53W2X2U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = ProcessSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "LightningBolt");
__turbopack_context__.k.register(_c1, "ProcessSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/who-we-serve.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhoWeServe",
    ()=>WhoWeServe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const services = [
    {
        title: "AI & Automation",
        subtitle: "Intelligent Systems",
        tagline: "The future of enterprise operations",
        description: "We empower businesses with next-generation AI — from autonomous agentic solutions and intelligent chatbots to full business process automation — transforming how enterprises operate, scale, and compete.",
        features: [
            "Agentic AI Solutions",
            "AI Chatbots & Assistants",
            "AI Call Agents",
            "Business Process Automation",
            "AI Integrations"
        ],
        href: "/services/ai-automation/",
        gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
        gradientText: "linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)",
        glow: "rgba(99,102,241,0.35)",
        softBg: "rgba(99,102,241,0.05)",
        accentColor: "#6366f1",
        sparkColor: "#a78bfa",
        stat: {
            value: "10×",
            label: "Faster Operations"
        },
        icon: (color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "32",
                height: "32",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: color,
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/who-we-serve.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "9",
                        cy: "14",
                        r: "1",
                        fill: color
                    }, void 0, false, {
                        fileName: "[project]/components/sections/who-we-serve.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "15",
                        cy: "14",
                        r: "1",
                        fill: color
                    }, void 0, false, {
                        fileName: "[project]/components/sections/who-we-serve.tsx",
                        lineNumber: 24,
                        columnNumber: 52
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/who-we-serve.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Software & Enterprise",
        subtitle: "Custom Engineering",
        tagline: "Precision-built for your scale",
        description: "We architect and build custom software, SaaS platforms, ERP and CRM systems tailored to your exact operations — delivering scalable, high-performance solutions engineered for long-term growth.",
        features: [
            "Custom Software Development",
            "SaaS Platforms",
            "ERP & CRM Systems",
            "Web Applications & APIs",
            "Legacy Modernization"
        ],
        href: "/services/software-engineering/",
        gradient: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #4f46e5 100%)",
        gradientText: "linear-gradient(90deg, #0ea5e9, #2563eb, #4f46e5)",
        glow: "rgba(37,99,235,0.35)",
        softBg: "rgba(37,99,235,0.05)",
        accentColor: "#2563eb",
        sparkColor: "#60a5fa",
        stat: {
            value: "99%",
            label: "Uptime Guaranteed"
        },
        icon: (color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "32",
                height: "32",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: color,
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "2",
                        y: "3",
                        width: "20",
                        height: "14",
                        rx: "2"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/who-we-serve.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "8",
                        y1: "21",
                        x2: "16",
                        y2: "21"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/who-we-serve.tsx",
                        lineNumber: 44,
                        columnNumber: 58
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "12",
                        y1: "17",
                        x2: "12",
                        y2: "21"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/who-we-serve.tsx",
                        lineNumber: 44,
                        columnNumber: 96
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "6 9 9 12 6 15"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/who-we-serve.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "12",
                        y1: "15",
                        x2: "17",
                        y2: "15"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/who-we-serve.tsx",
                        lineNumber: 45,
                        columnNumber: 43
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/who-we-serve.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Digital Growth",
        subtitle: "Marketing & Scale",
        tagline: "Revenue through intelligent strategy",
        description: "We accelerate revenue through data-driven digital strategies — combining SEO, paid advertising, content marketing, and conversion optimization to drive qualified leads and measurable business outcomes.",
        features: [
            "SEO, AEO & GEO",
            "Paid Advertising",
            "Content Marketing",
            "Social Media Growth",
            "Conversion Optimization"
        ],
        href: "/services/digital-growth/",
        gradient: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
        gradientText: "linear-gradient(90deg, #10b981, #059669, #047857)",
        glow: "rgba(16,185,129,0.35)",
        softBg: "rgba(16,185,129,0.05)",
        accentColor: "#10b981",
        sparkColor: "#34d399",
        stat: {
            value: "3×",
            label: "Lead Generation"
        },
        icon: (color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "32",
                height: "32",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: color,
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "23 6 13.5 15.5 8.5 10.5 1 18"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/who-we-serve.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "17 6 23 6 23 12"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/who-we-serve.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/who-we-serve.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    }
];
/* ── Multiple lightning bolts ── */ function LightningCluster({ active, color }) {
    const config = [
        {
            top: 10,
            right: 16,
            delay: 0,
            size: 1.0
        },
        {
            top: 7,
            right: 38,
            delay: 0.07,
            size: 0.65
        },
        {
            top: 16,
            right: 26,
            delay: 0.14,
            size: 0.45
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: active && config.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                width: Math.round(16 * c.size),
                height: Math.round(28 * c.size),
                viewBox: "0 0 16 28",
                initial: {
                    scale: 0.2,
                    rotate: -10
                },
                animate: {
                    scale: [
                        0.2,
                        c.size * 1.4,
                        c.size,
                        c.size * 0.9
                    ],
                    rotate: [
                        -10,
                        5,
                        0,
                        0
                    ]
                },
                transition: {
                    duration: 0.5,
                    delay: c.delay,
                    repeat: Infinity,
                    repeatDelay: 2.2
                },
                style: {
                    position: "absolute",
                    top: c.top,
                    right: c.right,
                    zIndex: 20,
                    filter: `drop-shadow(0 0 6px #fbbf24) drop-shadow(0 0 14px ${color})`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 0 L2 13 L7 13 L2 28 L14 12 L8 12 L13 0",
                    fill: "#fbbf24"
                }, void 0, false, {
                    fileName: "[project]/components/sections/who-we-serve.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/components/sections/who-we-serve.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/sections/who-we-serve.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_c = LightningCluster;
/* ── Radial spark burst ── */ function SparkRing({ active, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: active && Array.from({
            length: 10
        }).map((_, i)=>{
            const angle = i * 360 / 10;
            const dist = 28;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0,
                    x: 0,
                    y: 0
                },
                animate: {
                    scale: [
                        0,
                        1,
                        0
                    ],
                    x: [
                        0,
                        Math.cos(angle * Math.PI / 180) * dist
                    ],
                    y: [
                        0,
                        Math.sin(angle * Math.PI / 180) * dist
                    ]
                },
                transition: {
                    duration: 0.55,
                    delay: i * 0.02,
                    repeat: Infinity,
                    repeatDelay: 2.2
                },
                style: {
                    position: "absolute",
                    top: 18,
                    right: 24,
                    width: 3,
                    height: 8,
                    borderRadius: 2,
                    background: `linear-gradient(to bottom, #fef9c3, ${color})`,
                    rotate: `${angle}deg`,
                    zIndex: 19,
                    pointerEvents: "none"
                }
            }, i, false, {
                fileName: "[project]/components/sections/who-we-serve.tsx",
                lineNumber: 112,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/sections/who-we-serve.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c1 = SparkRing;
/* ── Floating stat chip ── */ function StatChip({ value, label, gradient, active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: {
            y: active ? [
                0,
                -6,
                0
            ] : 0,
            scale: active ? 1.05 : 1
        },
        transition: {
            duration: 2,
            repeat: active ? Infinity : 0
        },
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "white",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: 99,
            padding: "8px 16px",
            boxShadow: active ? "0 8px 24px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.06)",
            marginBottom: 28
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 16,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    background: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/components/sections/who-we-serve.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 12,
                    color: "#64748b",
                    fontWeight: 500
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/sections/who-we-serve.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/who-we-serve.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_c2 = StatChip;
function WhoWeServe() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-80px"
    });
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        style: {
            width: "100%",
            background: "linear-gradient(180deg, #f1f5f9 0%, #ffffff 20%, #f8fafc 80%, #f1f5f9 100%)",
            padding: "130px 0 120px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.06) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/who-we-serve.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            [
                {
                    x: "-8%",
                    y: "0%",
                    c: "rgba(99,102,241,0.07)",
                    s: 600,
                    d: 7
                },
                {
                    x: "60%",
                    y: "50%",
                    c: "rgba(37,99,235,0.05)",
                    s: 500,
                    d: 9
                },
                {
                    x: "85%",
                    y: "5%",
                    c: "rgba(16,185,129,0.06)",
                    s: 450,
                    d: 8
                }
            ].map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        scale: [
                            1,
                            1.25,
                            1
                        ]
                    },
                    transition: {
                        duration: o.d,
                        repeat: Infinity,
                        delay: i * 2
                    },
                    style: {
                        position: "absolute",
                        left: o.x,
                        top: o.y,
                        width: o.s,
                        height: o.s,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${o.c}, transparent 70%)`,
                        pointerEvents: "none",
                        transform: "translate(-50%, -50%)"
                    }
                }, i, false, {
                    fileName: "[project]/components/sections/who-we-serve.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this)),
            [
                {
                    x: "3%",
                    delay: 0
                },
                {
                    x: "97%",
                    delay: 3.5
                }
            ].map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                    width: "3",
                    height: "150",
                    viewBox: "0 0 3 150",
                    animate: {
                        opacity: [
                            0,
                            0.7,
                            0
                        ]
                    },
                    transition: {
                        duration: 0.25,
                        repeat: Infinity,
                        repeatDelay: 5 + i * 3,
                        delay: l.delay
                    },
                    style: {
                        position: "absolute",
                        top: "15%",
                        left: l.x,
                        filter: "drop-shadow(0 0 10px rgba(251,191,36,0.9))",
                        pointerEvents: "none",
                        zIndex: 1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M1.5 0 L0 45 L2.5 45 L0.5 95 L3 95 L1 150",
                        stroke: "#fbbf24",
                        strokeWidth: "2",
                        fill: "none",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/who-we-serve.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/components/sections/who-we-serve.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1240,
                    margin: "0 auto",
                    padding: "0 48px",
                    position: "relative",
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            maxWidth: 780,
                            margin: "0 auto 100px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    y: 20
                                },
                                animate: inView ? {
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.6
                                },
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 10,
                                    background: "white",
                                    border: "1px solid rgba(99,102,241,0.25)",
                                    borderRadius: 99,
                                    padding: "10px 22px",
                                    marginBottom: 30,
                                    boxShadow: "0 4px 20px rgba(99,102,241,0.12)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            scale: [
                                                1,
                                                1.6,
                                                1
                                            ],
                                            boxShadow: [
                                                "0 0 0 0 rgba(99,102,241,0.6)",
                                                "0 0 0 10px rgba(99,102,241,0)",
                                                "0 0 0 0 rgba(99,102,241,0)"
                                            ]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity
                                        },
                                        style: {
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            background: "#6366f1"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 11,
                                            fontWeight: 700,
                                            letterSpacing: "0.14em",
                                            color: "#6366f1",
                                            textTransform: "uppercase"
                                        },
                                        children: "Our Services"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/who-we-serve.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                initial: {
                                    y: 30
                                },
                                animate: inView ? {
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.7,
                                    delay: 0.1
                                },
                                style: {
                                    fontSize: "clamp(42px, 5.5vw, 68px)",
                                    fontWeight: 800,
                                    color: "#0f172a",
                                    letterSpacing: "-0.04em",
                                    lineHeight: 1.05,
                                    marginBottom: 24
                                },
                                children: [
                                    "What we",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        animate: {
                                            backgroundPosition: [
                                                "0% 50%",
                                                "300% 50%",
                                                "0% 50%"
                                            ]
                                        },
                                        transition: {
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "linear"
                                        },
                                        style: {
                                            background: "linear-gradient(90deg, #6366f1, #3b82f6, #10b981, #f59e0b, #ef4444, #6366f1)",
                                            backgroundSize: "300% auto",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text"
                                        },
                                        children: "deliver"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/who-we-serve.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    y: 20
                                },
                                animate: inView ? {
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2
                                },
                                style: {
                                    fontSize: 19,
                                    color: "#64748b",
                                    lineHeight: 1.8,
                                    maxWidth: 640,
                                    margin: "0 auto"
                                },
                                children: "Orchestrating intelligence, engineering, and growth across AI automation, enterprise software, and digital marketing ecosystems."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/who-we-serve.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/who-we-serve.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: 32
                        },
                        children: services.map((svc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    y: 70,
                                    scale: 0.92
                                },
                                animate: inView ? {
                                    y: 0,
                                    scale: 1
                                } : {},
                                transition: {
                                    duration: 0.85,
                                    delay: 0.2 + i * 0.14,
                                    type: "spring",
                                    stiffness: 80
                                },
                                onHoverStart: ()=>setHovered(i),
                                onHoverEnd: ()=>setHovered(null),
                                whileHover: {
                                    y: -14,
                                    transition: {
                                        type: "spring",
                                        stiffness: 250,
                                        damping: 20
                                    }
                                },
                                style: {
                                    background: hovered === i ? svc.softBg : "white",
                                    borderRadius: 32,
                                    padding: "48px 42px 44px",
                                    position: "relative",
                                    overflow: "hidden",
                                    boxShadow: hovered === i ? `0 40px 90px ${svc.glow}, 0 0 0 2px ${svc.accentColor}40` : "0 4px 30px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                                    cursor: "pointer",
                                    transition: "background 0.4s ease, box-shadow 0.4s ease"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightningCluster, {
                                        active: hovered === i,
                                        color: svc.sparkColor
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkRing, {
                                        active: hovered === i,
                                        color: svc.sparkColor
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 294,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            opacity: hovered === i ? 1 : 0
                                        },
                                        transition: {
                                            duration: 0.35
                                        },
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            borderRadius: 32,
                                            padding: 2,
                                            background: `linear-gradient(135deg, ${svc.accentColor}, #fbbf24, ${svc.accentColor})`,
                                            backgroundSize: "200% 200%",
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",
                                            animation: hovered === i ? "rotateBorder 3s linear infinite" : "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                        children: `@keyframes rotateBorder { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }`
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            scale: hovered === i ? [
                                                1,
                                                1.5,
                                                1
                                            ] : [
                                                1,
                                                1.15,
                                                1
                                            ],
                                            opacity: hovered === i ? [
                                                0.3,
                                                0.55,
                                                0.3
                                            ] : [
                                                0.1,
                                                0.18,
                                                0.1
                                            ]
                                        },
                                        transition: {
                                            duration: 2.5,
                                            repeat: Infinity,
                                            delay: i * 0.5
                                        },
                                        style: {
                                            position: "absolute",
                                            top: -50,
                                            right: -50,
                                            width: 220,
                                            height: 220,
                                            borderRadius: "50%",
                                            background: svc.gradient,
                                            filter: "blur(65px)",
                                            pointerEvents: "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            opacity: hovered === i ? 0.25 : 0
                                        },
                                        transition: {
                                            duration: 0.4
                                        },
                                        style: {
                                            position: "absolute",
                                            bottom: -30,
                                            left: -30,
                                            width: 180,
                                            height: 180,
                                            borderRadius: "50%",
                                            background: svc.gradient,
                                            filter: "blur(55px)",
                                            pointerEvents: "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatChip, {
                                        value: svc.stat.value,
                                        label: svc.stat.label,
                                        gradient: svc.gradientText,
                                        active: hovered === i
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            y: hovered === i ? -10 : 0,
                                            scale: hovered === i ? 1.08 : 1,
                                            boxShadow: hovered === i ? `0 20px 50px ${svc.glow}, 0 0 0 4px ${svc.accentColor}18` : `0 6px 18px ${svc.glow.replace("0.35", "0.2")}`
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 18
                                        },
                                        style: {
                                            width: 76,
                                            height: 76,
                                            borderRadius: 22,
                                            background: hovered === i ? svc.gradient : "white",
                                            border: `1.5px solid ${svc.accentColor}22`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: 28,
                                            position: "relative",
                                            transition: "background 0.35s ease"
                                        },
                                        children: [
                                            hovered === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    opacity: [
                                                        0.25,
                                                        0.5,
                                                        0.25
                                                    ],
                                                    scale: [
                                                        0.75,
                                                        1.05,
                                                        0.75
                                                    ]
                                                },
                                                transition: {
                                                    duration: 1.5,
                                                    repeat: Infinity
                                                },
                                                style: {
                                                    position: "absolute",
                                                    inset: 8,
                                                    borderRadius: 14,
                                                    background: "rgba(255,255,255,0.3)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/who-we-serve.tsx",
                                                lineNumber: 356,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "relative",
                                                    zIndex: 1
                                                },
                                                children: hovered === i ? svc.icon("white") : svc.icon(svc.accentColor)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/who-we-serve.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            letterSpacing: hovered === i ? "0.14em" : "0.09em"
                                        },
                                        transition: {
                                            duration: 0.3
                                        },
                                        style: {
                                            fontSize: 10,
                                            fontWeight: 800,
                                            textTransform: "uppercase",
                                            marginBottom: 8,
                                            background: svc.gradient,
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text"
                                        },
                                        children: svc.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                        animate: {
                                            letterSpacing: hovered === i ? "-0.035em" : "-0.025em"
                                        },
                                        transition: {
                                            duration: 0.3
                                        },
                                        style: {
                                            fontSize: 24,
                                            fontWeight: 800,
                                            color: "#0f172a",
                                            marginBottom: 8,
                                            lineHeight: 1.15
                                        },
                                        children: svc.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 13,
                                            fontStyle: "italic",
                                            marginBottom: 14,
                                            background: svc.gradientText,
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                            fontWeight: 500
                                        },
                                        children: svc.tagline
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 15,
                                            color: "#475569",
                                            lineHeight: 1.85,
                                            marginBottom: 28
                                        },
                                        children: svc.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            scaleX: hovered === i ? 1 : 0.35,
                                            opacity: hovered === i ? 1 : 0.5
                                        },
                                        transition: {
                                            duration: 0.45
                                        },
                                        style: {
                                            height: 2,
                                            borderRadius: 2,
                                            background: svc.gradient,
                                            marginBottom: 24,
                                            transformOrigin: "left",
                                            boxShadow: hovered === i ? `0 0 12px ${svc.accentColor}60` : "none",
                                            transition: "box-shadow 0.4s ease"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            listStyle: "none",
                                            padding: 0,
                                            margin: 0,
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 11
                                        },
                                        children: svc.features.map((f, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                initial: {
                                                    x: -14
                                                },
                                                animate: inView ? {
                                                    x: 0
                                                } : {},
                                                transition: {
                                                    duration: 0.4,
                                                    delay: 0.35 + i * 0.1 + j * 0.05
                                                },
                                                whileHover: {
                                                    x: 4,
                                                    transition: {
                                                        duration: 0.2
                                                    }
                                                },
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 12,
                                                    fontSize: 14,
                                                    color: "#1e293b",
                                                    fontWeight: 500
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        animate: {
                                                            scale: hovered === i ? [
                                                                1,
                                                                1.7,
                                                                1
                                                            ] : 1,
                                                            boxShadow: hovered === i ? [
                                                                `0 0 0 0 ${svc.accentColor}70`,
                                                                `0 0 0 6px ${svc.accentColor}00`
                                                            ] : "none"
                                                        },
                                                        transition: {
                                                            duration: 0.5,
                                                            delay: j * 0.08
                                                        },
                                                        style: {
                                                            width: 8,
                                                            height: 8,
                                                            borderRadius: "50%",
                                                            background: svc.gradient,
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 21
                                                    }, this),
                                                    f
                                                ]
                                            }, j, true, {
                                                fileName: "[project]/components/sections/who-we-serve.tsx",
                                                lineNumber: 416,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 414,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                        href: svc.href,
                                        animate: {
                                            x: hovered === i ? 6 : 0
                                        },
                                        transition: {
                                            duration: 0.3
                                        },
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 8,
                                            marginTop: 32,
                                            fontSize: 14,
                                            fontWeight: 700,
                                            background: svc.gradientText,
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                            textDecoration: "none"
                                        },
                                        children: [
                                            "Explore service",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                                animate: {
                                                    x: hovered === i ? 4 : 0,
                                                    y: hovered === i ? -4 : 0
                                                },
                                                transition: {
                                                    duration: 0.3
                                                },
                                                width: "15",
                                                height: "15",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: svc.accentColor,
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "7",
                                                        y1: "17",
                                                        x2: "17",
                                                        y2: "7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "7 7 17 7 17 17"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 56
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/who-we-serve.tsx",
                                                lineNumber: 450,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 438,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/sections/who-we-serve.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/who-we-serve.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            y: 30
                        },
                        animate: inView ? {
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.7,
                            delay: 0.75
                        },
                        style: {
                            textAlign: "center",
                            marginTop: 72
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: "/contact/",
                            whileHover: {
                                scale: 1.06,
                                boxShadow: "0 0 70px rgba(37,99,235,0.55), 0 28px 70px rgba(37,99,235,0.4)"
                            },
                            whileTap: {
                                scale: 0.97
                            },
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 16,
                                background: "linear-gradient(135deg, #1e40af 0%, #2563eb 40%, #3b82f6 80%, #60a5fa 100%)",
                                color: "white",
                                textDecoration: "none",
                                borderRadius: 20,
                                padding: "22px 52px",
                                fontSize: 18,
                                fontWeight: 700,
                                letterSpacing: "-0.02em",
                                boxShadow: "0 12px 50px rgba(37,99,235,0.4)",
                                fontFamily: "inherit",
                                position: "relative",
                                overflow: "hidden"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        x: [
                                            "-120%",
                                            "250%"
                                        ]
                                    },
                                    transition: {
                                        duration: 2.5,
                                        repeat: Infinity,
                                        repeatDelay: 1.5
                                    },
                                    style: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "35%",
                                        height: "100%",
                                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/who-we-serve.tsx",
                                    lineNumber: 484,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                    animate: {
                                        scale: [
                                            0.6,
                                            1.2,
                                            0.6
                                        ]
                                    },
                                    transition: {
                                        duration: 0.5,
                                        repeat: Infinity,
                                        repeatDelay: 3.5
                                    },
                                    width: "14",
                                    height: "22",
                                    viewBox: "0 0 14 22",
                                    style: {
                                        filter: "drop-shadow(0 0 5px #fef08a)",
                                        flexShrink: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 0 L1 11 L6 11 L1 22 L13 9 L7 9 L12 0",
                                        fill: "#fef9c3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 499,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/who-we-serve.tsx",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Connect with us"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/who-we-serve.tsx",
                                    lineNumber: 501,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        rotate: [
                                            0,
                                            45,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 0.5,
                                        repeat: Infinity,
                                        repeatDelay: 3.5
                                    },
                                    style: {
                                        width: 42,
                                        height: 42,
                                        borderRadius: 14,
                                        background: "rgba(255,255,255,0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "17",
                                        height: "17",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "white",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "7",
                                                y1: "17",
                                                x2: "17",
                                                y2: "7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/who-we-serve.tsx",
                                                lineNumber: 512,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "7 7 17 7 17 17"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/who-we-serve.tsx",
                                                lineNumber: 512,
                                                columnNumber: 54
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/who-we-serve.tsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/who-we-serve.tsx",
                                    lineNumber: 502,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/who-we-serve.tsx",
                            lineNumber: 469,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/who-we-serve.tsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/who-we-serve.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/who-we-serve.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_s(WhoWeServe, "Pbcqk5SoQENVwFfJGjPlVgMmUwE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c3 = WhoWeServe;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "LightningCluster");
__turbopack_context__.k.register(_c1, "SparkRing");
__turbopack_context__.k.register(_c2, "StatChip");
__turbopack_context__.k.register(_c3, "WhoWeServe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Testimonials",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const testimonials = [
    {
        headline: "InnovateCorp transforms operations with KeySol Global's AI automation suite",
        quote: "We've been building enterprise software for decades, but partnering with KeySol Global was a turning point. Their AI automation solutions gave us capabilities we couldn't have built in-house in years. The implementation was seamless and the results were immediate — a 40% increase in operational efficiency within just three months of going live.",
        name: "James Morrison",
        title: "Chief Technology Officer at Accenture",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop&crop=face"
    },
    {
        headline: "GlobalTech scales across 15 markets using KeySol Global's enterprise platform",
        quote: "Scaling a business across multiple countries is incredibly complex — different regulations, languages, workflows. KeySol Global understood our challenges from day one and built a platform that adapts to every market we operate in. They don't just deliver software, they deliver outcomes. I can say with confidence that they are the best technology partner we've ever had.",
        name: "David Reynolds",
        title: "Chief Executive Officer at Deloitte Digital",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face"
    },
    {
        headline: "KeySol Global partners with TechVentures to power its new era of digital transformation",
        quote: "At TechVentures, we decided it was time to create an end-to-end AI-powered operations system for our enterprise clients, and it was important to create something more than a simple automation tool. Our partnership with KeySol Global has enabled us not only to catch up with industry leaders, but also to set new benchmarks in enterprise AI, which traditional vendors in the industry could not provide.",
        name: "Sarah Chen",
        title: "Chief Operating Officer at McKinsey & Company",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=600&fit=crop&crop=face"
    }
];
function Testimonials() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const goTo = (index)=>{
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };
    const next = ()=>{
        setDirection(1);
        setCurrentIndex((prev)=>(prev + 1) % testimonials.length);
    };
    const prev = ()=>{
        setDirection(-1);
        setCurrentIndex((prev)=>(prev - 1 + testimonials.length) % testimonials.length);
    };
    // Auto cycle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            const id = setInterval({
                "Testimonials.useEffect.id": ()=>{
                    setDirection(1);
                    setCurrentIndex({
                        "Testimonials.useEffect.id": (prev)=>(prev + 1) % testimonials.length
                    }["Testimonials.useEffect.id"]);
                }
            }["Testimonials.useEffect.id"], 6000);
            return ({
                "Testimonials.useEffect": ()=>clearInterval(id)
            })["Testimonials.useEffect"];
        }
    }["Testimonials.useEffect"], []);
    const current = testimonials[currentIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            width: "100%",
            background: "linear-gradient(160deg, #e8f4fb 0%, #f0f9ff 40%, #e8f6fb 70%, #eaf7f5 100%)",
            padding: "80px 0 100px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "45%",
                    height: "100%",
                    backgroundImage: "repeating-linear-gradient(90deg, rgba(180,220,240,0.35) 0px, rgba(180,220,240,0.35) 1px, transparent 1px, transparent 28px)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/testimonials.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "45%",
                    height: "100%",
                    backgroundImage: "repeating-linear-gradient(90deg, rgba(160,220,210,0.3) 0px, rgba(160,220,210,0.3) 1px, transparent 1px, transparent 28px)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/testimonials.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 20,
                    left: 60,
                    width: 160,
                    height: 70,
                    borderRadius: 10,
                    background: "rgba(180,220,240,0.25)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/testimonials.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 30,
                    left: 240,
                    width: 340,
                    height: 70,
                    borderRadius: 10,
                    background: "rgba(180,220,240,0.2)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/testimonials.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 20,
                    right: 60,
                    width: 160,
                    height: 70,
                    borderRadius: 10,
                    background: "rgba(160,220,210,0.25)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/testimonials.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 30,
                    right: 240,
                    width: 200,
                    height: 70,
                    borderRadius: 10,
                    background: "rgba(160,220,210,0.2)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/testimonials.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1180,
                    margin: "0 auto",
                    padding: "0 40px",
                    position: "relative",
                    zIndex: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: 30
                    },
                    whileInView: {
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-80px"
                    },
                    transition: {
                        duration: 0.7,
                        type: "spring",
                        stiffness: 80
                    },
                    style: {
                        background: "white",
                        borderRadius: 28,
                        boxShadow: "0 8px 60px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.04)",
                        overflow: "hidden",
                        display: "grid",
                        gridTemplateColumns: "1.3fr 1fr",
                        minHeight: 480
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "64px 60px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "wait",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            x: direction * 40,
                                            opacity: 0
                                        },
                                        animate: {
                                            x: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            x: -direction * 40,
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.45,
                                            ease: "easeInOut"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontSize: "clamp(22px, 2.5vw, 32px)",
                                                    fontWeight: 700,
                                                    color: "#1a1a2e",
                                                    lineHeight: 1.25,
                                                    marginBottom: 28,
                                                    letterSpacing: "-0.02em"
                                                },
                                                children: current.headline
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/testimonials.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: "clamp(14px, 1.2vw, 16px)",
                                                    color: "#3d3d3d",
                                                    lineHeight: 1.85,
                                                    marginBottom: 36
                                                },
                                                children: [
                                                    "“",
                                                    current.quote,
                                                    "”"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/testimonials.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "clamp(18px, 1.8vw, 24px)",
                                                            fontWeight: 700,
                                                            color: "#1a1a2e",
                                                            marginBottom: 6,
                                                            letterSpacing: "-0.01em"
                                                        },
                                                        children: current.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/testimonials.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 14,
                                                            color: "#6b7280",
                                                            fontWeight: 400,
                                                            lineHeight: 1.5
                                                        },
                                                        children: current.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/testimonials.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/testimonials.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, `content-${currentIndex}`, true, {
                                        fileName: "[project]/components/sections/testimonials.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/testimonials.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginTop: 40,
                                        paddingTop: 32,
                                        borderTop: "1px solid #f1f5f9"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 8,
                                                alignItems: "center"
                                            },
                                            children: testimonials.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>goTo(i),
                                                    style: {
                                                        width: i === currentIndex ? 28 : 8,
                                                        height: 8,
                                                        borderRadius: 999,
                                                        background: i === currentIndex ? "#0052CC" : "#d1d5db",
                                                        border: "none",
                                                        cursor: "pointer",
                                                        transition: "all 0.3s ease",
                                                        padding: 0
                                                    }
                                                }, i, false, {
                                                    fileName: "[project]/components/sections/testimonials.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/testimonials.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: prev,
                                                    style: {
                                                        width: 40,
                                                        height: 40,
                                                        borderRadius: "50%",
                                                        border: "1.5px solid #e5e7eb",
                                                        background: "white",
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        color: "#374151",
                                                        transition: "all 0.2s"
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.background = "#f0f9ff",
                                                    onMouseLeave: (e)=>e.currentTarget.style.background = "white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "15 18 9 12 15 6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/testimonials.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/testimonials.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/testimonials.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: next,
                                                    style: {
                                                        width: 40,
                                                        height: 40,
                                                        borderRadius: "50%",
                                                        border: "1.5px solid #e5e7eb",
                                                        background: "white",
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        color: "#374151",
                                                        transition: "all 0.2s"
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.background = "#f0f9ff",
                                                    onMouseLeave: (e)=>e.currentTarget.style.background = "white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "9 18 15 12 9 6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/testimonials.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/testimonials.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/testimonials.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/testimonials.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/testimonials.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/testimonials.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "relative",
                                overflow: "hidden",
                                background: "linear-gradient(135deg, #e8f4fb 0%, #d0ecf7 100%)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "wait",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                        src: current.image,
                                        alt: current.name,
                                        initial: {
                                            scale: 1.05,
                                            opacity: 0
                                        },
                                        animate: {
                                            scale: 1,
                                            opacity: 1
                                        },
                                        exit: {
                                            scale: 1.05,
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        style: {
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: "center top",
                                            display: "block"
                                        },
                                        onError: (e)=>{
                                            const img = e.currentTarget;
                                            if (!img.dataset.fallback) {
                                                img.dataset.fallback = "1";
                                                img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(current.name)}&size=600&background=e8f4fb&color=0052CC&bold=true&font-size=0.3`;
                                            }
                                        }
                                    }, `image-${currentIndex}`, false, {
                                        fileName: "[project]/components/sections/testimonials.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/testimonials.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: 80,
                                        background: "linear-gradient(to top, rgba(255,255,255,0.1), transparent)",
                                        pointerEvents: "none"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/testimonials.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/testimonials.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/testimonials.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/testimonials.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/testimonials.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(Testimonials, "JqSUBMvr7QsOFmg0bNdjBdjLoII=");
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/cta-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASection",
    ()=>CTASection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const articles = [
    {
        type: "Blog",
        title: "Five ways AI automation is reshaping enterprise operations in 2025",
        description: "How forward-thinking companies are using intelligent automation to cut costs and accelerate growth.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=380&fit=crop",
        cta: "Read more",
        href: "/insights/ai-automation-enterprise/",
        typeColor: "#2563eb"
    },
    {
        type: "Whitepaper",
        title: "Why digital transformation in enterprise software needs an AI-first approach",
        description: "A deep dive into the frameworks and strategies that separate leaders from laggards.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=380&fit=crop",
        cta: "Download the Report",
        href: "/insights/digital-transformation-whitepaper/",
        typeColor: "#2563eb"
    },
    {
        type: "Blog",
        title: "From manual workflows to intelligent pipelines: How AI is changing operations",
        description: "Real-world examples of businesses cutting operational overhead by 40% with AI integrations.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=380&fit=crop",
        cta: "Read more",
        href: "/insights/intelligent-pipelines/",
        typeColor: "#2563eb"
    },
    {
        type: "Blog",
        title: "Shared growth models for high-value enterprise clients: a new partnership era",
        description: "How KeySol Global structures long-term partnerships that deliver measurable ROI.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=380&fit=crop",
        cta: "Read more",
        href: "/insights/partnership-models/",
        typeColor: "#2563eb"
    }
];
function CTASection() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-80px"
    });
    const [startIndex, setStartIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hoveredCard, setHoveredCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const prev = ()=>setStartIndex((p)=>Math.max(0, p - 1));
    const next = ()=>setStartIndex((p)=>Math.min(articles.length - 4, p + 1));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        style: {
            width: "100%",
            background: "#ffffff",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1240,
                    margin: "0 auto",
                    padding: "100px 48px 80px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            marginBottom: 52
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: 520
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                        initial: {
                                            y: 20
                                        },
                                        animate: inView ? {
                                            y: 0
                                        } : {},
                                        transition: {
                                            duration: 0.6
                                        },
                                        style: {
                                            fontSize: "clamp(28px, 3.5vw, 42px)",
                                            fontWeight: 800,
                                            color: "#0f172a",
                                            lineHeight: 1.15,
                                            marginBottom: 16,
                                            letterSpacing: "-0.03em"
                                        },
                                        children: [
                                            "Featured",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    background: "linear-gradient(90deg, #2563eb, #06b6d4)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                    backgroundClip: "text"
                                                },
                                                children: "reads & insights"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/cta-section.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/cta-section.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            y: 15
                                        },
                                        animate: inView ? {
                                            y: 0
                                        } : {},
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.1
                                        },
                                        style: {
                                            fontSize: 16,
                                            color: "#64748b",
                                            lineHeight: 1.75
                                        },
                                        children: "Stay informed with the latest from KeySol Global. Thought leadership, product updates, industry perspectives, and company news, all in one place."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/cta-section.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/cta-section.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    y: 15
                                },
                                animate: inView ? {
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.6,
                                    delay: 0.15
                                },
                                style: {
                                    display: "flex",
                                    gap: 10,
                                    paddingTop: 8
                                },
                                children: [
                                    {
                                        dir: "prev",
                                        onClick: prev,
                                        disabled: startIndex === 0
                                    },
                                    {
                                        dir: "next",
                                        onClick: next,
                                        disabled: startIndex >= articles.length - 4
                                    }
                                ].map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: btn.onClick,
                                        disabled: btn.disabled,
                                        style: {
                                            width: 44,
                                            height: 44,
                                            borderRadius: "50%",
                                            border: `1.5px solid ${btn.disabled ? "#e2e8f0" : "#cbd5e1"}`,
                                            background: "white",
                                            cursor: btn.disabled ? "default" : "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: btn.disabled ? "#cbd5e1" : "#475569",
                                            transition: "all 0.2s ease"
                                        },
                                        onMouseEnter: (e)=>{
                                            if (!btn.disabled) {
                                                e.currentTarget.style.background = "#f8fafc";
                                                e.currentTarget.style.borderColor = "#94a3b8";
                                            }
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.background = "white";
                                            e.currentTarget.style.borderColor = btn.disabled ? "#e2e8f0" : "#cbd5e1";
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: btn.dir === "prev" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "15 18 9 12 15 6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/cta-section.tsx",
                                                lineNumber: 114,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "9 18 15 12 9 6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/cta-section.tsx",
                                                lineNumber: 115,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/cta-section.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    }, btn.dir, false, {
                                        fileName: "[project]/components/sections/cta-section.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/cta-section.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/cta-section.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: 24
                        },
                        children: articles.map((article, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: article.href,
                                initial: {
                                    y: 40
                                },
                                animate: inView ? {
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.6,
                                    delay: 0.15 + i * 0.1
                                },
                                onHoverStart: ()=>setHoveredCard(i),
                                onHoverEnd: ()=>setHoveredCard(null),
                                whileHover: {
                                    y: -6,
                                    transition: {
                                        duration: 0.25,
                                        type: "spring",
                                        stiffness: 300
                                    }
                                },
                                style: {
                                    textDecoration: "none",
                                    background: "white",
                                    borderRadius: 16,
                                    border: `1px solid ${hoveredCard === i ? "#e2e8f0" : "#f1f5f9"}`,
                                    overflow: "hidden",
                                    boxShadow: hoveredCard === i ? "0 16px 40px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)" : "0 2px 10px rgba(0,0,0,0.04)",
                                    display: "block",
                                    transition: "box-shadow 0.3s ease, border-color 0.3s ease"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "100%",
                                            aspectRatio: "16/10",
                                            overflow: "hidden",
                                            background: "#f1f5f9"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                            src: article.image,
                                            alt: article.title,
                                            animate: {
                                                scale: hoveredCard === i ? 1.05 : 1
                                            },
                                            transition: {
                                                duration: 0.4
                                            },
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                display: "block"
                                            },
                                            onError: (e)=>{
                                                const img = e.currentTarget;
                                                if (!img.dataset.fallback) {
                                                    img.dataset.fallback = "1";
                                                    img.src = `https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=380&fit=crop`;
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/cta-section.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/cta-section.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "20px 20px 24px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    color: article.typeColor,
                                                    marginBottom: 10,
                                                    letterSpacing: "0.02em"
                                                },
                                                children: article.type
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/cta-section.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: 15,
                                                    fontWeight: 700,
                                                    color: "#0f172a",
                                                    lineHeight: 1.5,
                                                    marginBottom: 20,
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden"
                                                },
                                                children: article.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/cta-section.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                animate: {
                                                    x: hoveredCard === i ? 4 : 0
                                                },
                                                transition: {
                                                    duration: 0.25
                                                },
                                                style: {
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: 6,
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    color: "#0f172a"
                                                },
                                                children: [
                                                    article.cta,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "7",
                                                                y1: "17",
                                                                x2: "17",
                                                                y2: "7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/cta-section.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "7 7 17 7 17 17"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/cta-section.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 58
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/cta-section.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/cta-section.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/cta-section.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/sections/cta-section.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/cta-section.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/cta-section.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsletterBanner, {}, void 0, false, {
                fileName: "[project]/components/sections/cta-section.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/cta-section.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(CTASection, "PjZ6k49K2iSjll3+VzgyLzM5r00=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = CTASection;
/* ─────────────────────────────────────────────
   Newsletter Banner — Premium upgrade
───────────────────────────────────────────── */ function NewsletterBanner() {
    _s1();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (email) setSubmitted(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            y: 0
        },
        style: {
            width: "100%",
            display: "flex",
            minHeight: 400,
            overflow: "hidden",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: "0 0 50%",
                    background: "linear-gradient(145deg, #e8fafa 0%, #c0f0f4 35%, #82dde6 70%, #4fc8d8 100%)",
                    position: "relative",
                    overflow: "visible"
                },
                children: [
                    [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                y: [
                                    0,
                                    -12,
                                    0
                                ]
                            },
                            transition: {
                                duration: 4 + i * 0.4,
                                repeat: Infinity,
                                delay: i * 0.3
                            },
                            style: {
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: `${10 + i * 11}%`,
                                width: 1,
                                background: `rgba(255,255,255,${0.12 + i % 3 * 0.08})`
                            }
                        }, i, false, {
                            fileName: "[project]/components/sections/cta-section.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)),
                    [
                        {
                            top: 22,
                            left: 24,
                            w: 115,
                            h: 88,
                            delay: 0
                        },
                        {
                            top: 22,
                            left: 150,
                            w: 88,
                            h: 88,
                            delay: 0.1
                        },
                        {
                            top: 22,
                            left: 250,
                            w: 65,
                            h: 88,
                            delay: 0.2
                        }
                    ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                y: 10
                            },
                            animate: inView ? {
                                y: 0
                            } : {},
                            transition: {
                                duration: 0.7,
                                delay: r.delay
                            },
                            style: {
                                position: "absolute",
                                top: r.top,
                                left: r.left,
                                width: r.w,
                                height: r.h,
                                border: "1.5px solid rgba(80,185,205,0.5)",
                                borderRadius: 14,
                                background: "rgba(255,255,255,0.12)",
                                backdropFilter: "blur(4px)"
                            }
                        }, i, false, {
                            fileName: "[project]/components/sections/cta-section.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)),
                    [
                        {
                            top: 218,
                            left: 24,
                            w: 168,
                            h: 62
                        },
                        {
                            top: 292,
                            left: 24,
                            w: 168,
                            h: 62
                        }
                    ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                top: r.top,
                                left: r.left,
                                width: r.w,
                                height: r.h,
                                border: "1.5px solid rgba(80,185,205,0.45)",
                                borderRadius: 12,
                                background: "rgba(255,255,255,0.08)",
                                overflow: "hidden"
                            },
                            children: [
                                0,
                                1,
                                2,
                                3,
                                4
                            ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        top: 10 + l * 10,
                                        left: 10,
                                        right: 10,
                                        height: 1,
                                        background: "rgba(80,185,205,0.4)",
                                        borderRadius: 1
                                    }
                                }, l, false, {
                                    fileName: "[project]/components/sections/cta-section.tsx",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, this))
                        }, i, false, {
                            fileName: "[project]/components/sections/cta-section.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            x: 40
                        },
                        animate: inView ? {
                            x: 0
                        } : {},
                        transition: {
                            duration: 1,
                            type: "spring",
                            stiffness: 55
                        },
                        style: {
                            position: "absolute",
                            top: "10%",
                            left: "38%",
                            transform: "translate(-50%, 0%) rotate(180deg)",
                            width: "52%",
                            zIndex: 10
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://netsoltech.com/_ipx/f_webp&q_60/images/banners/animations/Dealers.webp",
                            alt: "Top down car",
                            style: {
                                width: "100%",
                                display: "block"
                            },
                            onError: (e)=>{
                                const img = e.currentTarget;
                                img.style.display = "none";
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/sections/cta-section.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/cta-section.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/cta-section.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: "0 0 50%",
                    background: "linear-gradient(145deg, #1562d6 0%, #1e72e8 30%, #1a9de0 70%, #12b8e8 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "0 72px 0 60px",
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)",
                            backgroundSize: "26px 26px",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/cta-section.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: -60,
                            right: -60,
                            width: 300,
                            height: 300,
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/cta-section.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            zIndex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    x: -16
                                },
                                animate: inView ? {
                                    x: 0
                                } : {},
                                transition: {
                                    duration: 0.6
                                },
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    background: "rgba(255,255,255,0.15)",
                                    border: "1px solid rgba(255,255,255,0.25)",
                                    borderRadius: 99,
                                    padding: "6px 16px",
                                    marginBottom: 22
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 6,
                                            height: 6,
                                            borderRadius: "50%",
                                            background: "#7ef4ff"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/cta-section.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 11,
                                            fontWeight: 700,
                                            color: "rgba(255,255,255,0.9)",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase"
                                        },
                                        children: "Newsletter"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/cta-section.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/cta-section.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                initial: {
                                    x: -20
                                },
                                animate: inView ? {
                                    x: 0
                                } : {},
                                transition: {
                                    duration: 0.7,
                                    delay: 0.1
                                },
                                style: {
                                    fontSize: "clamp(20px, 2.4vw, 32px)",
                                    fontWeight: 400,
                                    color: "white",
                                    lineHeight: 1.45,
                                    marginBottom: 32,
                                    maxWidth: 420,
                                    letterSpacing: "-0.01em"
                                },
                                children: [
                                    "Subscribe to our newsletter to get",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            fontWeight: 700
                                        },
                                        children: "the latest news in your inbox."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/cta-section.tsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/cta-section.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
                                initial: {
                                    x: -16
                                },
                                animate: inView ? {
                                    x: 0
                                } : {},
                                transition: {
                                    duration: 0.7,
                                    delay: 0.2
                                },
                                onSubmit: handleSubmit,
                                style: {
                                    display: "flex",
                                    gap: 0,
                                    maxWidth: 500,
                                    boxShadow: focused ? "0 0 0 3px rgba(255,255,255,0.4), 0 16px 40px rgba(0,0,0,0.2)" : "0 8px 30px rgba(0,0,0,0.18)",
                                    borderRadius: 12,
                                    overflow: "hidden",
                                    transition: "box-shadow 0.3s ease"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        placeholder: "abc@example.com",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        onFocus: ()=>setFocused(true),
                                        onBlur: ()=>setFocused(false),
                                        style: {
                                            flex: 1,
                                            padding: "17px 24px",
                                            fontSize: 15,
                                            border: "none",
                                            outline: "none",
                                            background: "white",
                                            color: "#1e293b",
                                            fontFamily: "inherit"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/cta-section.tsx",
                                        lineNumber: 416,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        style: {
                                            padding: "17px 38px",
                                            background: submitted ? "#059669" : "#1d4ed8",
                                            color: "white",
                                            border: "none",
                                            fontSize: 15,
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            fontFamily: "inherit",
                                            whiteSpace: "nowrap",
                                            transition: "background 0.25s ease",
                                            letterSpacing: "0.01em"
                                        },
                                        onMouseEnter: (e)=>{
                                            if (!submitted) e.currentTarget.style.background = "#1e40af";
                                        },
                                        onMouseLeave: (e)=>{
                                            if (!submitted) e.currentTarget.style.background = "#1d4ed8";
                                        },
                                        children: submitted ? "✓ Subscribed!" : "Subscribe"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/cta-section.tsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/cta-section.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    x: -12
                                },
                                animate: inView ? {
                                    x: 0
                                } : {},
                                transition: {
                                    duration: 0.6,
                                    delay: 0.3
                                },
                                style: {
                                    fontSize: 12,
                                    color: "rgba(255,255,255,0.6)",
                                    marginTop: 14
                                },
                                children: "No spam. Unsubscribe anytime. Trusted by 10,000+ professionals."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/cta-section.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/cta-section.tsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/cta-section.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/cta-section.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
_s1(NewsletterBanner, "/s6fyW+rPldtJZ1duKQuWA2P95U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = NewsletterBanner;
var _c, _c1;
__turbopack_context__.k.register(_c, "CTASection");
__turbopack_context__.k.register(_c1, "NewsletterBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_sections_10f7a45c._.js.map