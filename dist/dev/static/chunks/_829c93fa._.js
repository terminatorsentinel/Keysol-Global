(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}
function slugify(text) {
    return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Navbar() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>setIsScrolled(window.scrollY > 8)
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // Exact NETSOL nav structure
    const navItems = [
        {
            name: "Solutions",
            href: "#",
            hasDropdown: true
        },
        {
            name: "Marketplace",
            href: "/marketplace/",
            hasDropdown: false
        },
        {
            name: "Consultancy",
            href: "/consultancy/",
            hasDropdown: false
        },
        {
            name: "Insights",
            href: "/insights/",
            hasDropdown: false
        },
        {
            name: "About Us",
            href: "/about/",
            hasDropdown: false
        },
        {
            name: "Contact Us",
            href: "/contact/",
            hasDropdown: false
        }
    ];
    const platformItems = [
        {
            title: "AI & Automation",
            desc: "Autonomous AI agents, chatbots, and intelligent business process automation",
            href: "/services/ai-automation/"
        },
        {
            title: "Custom Software",
            desc: "Tailor-made SaaS platforms, web apps, and enterprise-grade software solutions",
            href: "/services/software-engineering/"
        },
        {
            title: "ERP & CRM Systems",
            desc: "End-to-end enterprise resource and customer relationship management systems",
            href: "/services/software-engineering/"
        },
        {
            title: "Digital Growth",
            desc: "SEO, paid advertising, content marketing and conversion optimization",
            href: "/services/digital-growth/"
        },
        {
            title: "Consultancy",
            desc: "Strategic technology consulting to align your digital roadmap with business goals",
            href: "/consultancy/"
        },
        {
            title: "AI Labs",
            desc: "Applied intelligence research accelerating enterprise transformation and innovation",
            href: "/services/ai-labs/"
        },
        {
            title: "Marketplace",
            desc: "Connect with verified technology partners and solution providers globally",
            href: "/marketplace/"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200", isScrolled ? "shadow-[0_1px_0_0_#e5e7eb]" : "border-b border-[#f0f0f0]"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1440,
                    margin: "0 auto",
                    padding: "0 40px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex items-center justify-between",
                    style: {
                        height: 64
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2.5 flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "32",
                                    height: "32",
                                    viewBox: "0 0 32 32",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "kg1",
                                                x1: "0",
                                                y1: "0",
                                                x2: "32",
                                                y2: "32",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0%",
                                                        stopColor: "#60A5FA"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/navbar.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "100%",
                                                        stopColor: "#1D4ED8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/navbar.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/navbar.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/navbar.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: " M2,2 L8,2 L8,13 L22,2 L30,2 L16,16 L30,30 L22,30 L8,19 L8,30 L2,30 Z ",
                                            fill: "url(#kg1)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/navbar.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/navbar.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        lineHeight: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontWeight: 800,
                                                fontSize: 17,
                                                color: "#0f172a",
                                                letterSpacing: "0.12em",
                                                fontFamily: "Inter, sans-serif"
                                            },
                                            children: "KEYSOL"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/navbar.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontWeight: 400,
                                                fontSize: 9,
                                                color: "#6B7280",
                                                letterSpacing: "0.18em",
                                                fontFamily: "Inter, sans-serif",
                                                marginTop: 1
                                            },
                                            children: "GLOBAL"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/navbar.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/navbar.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/navbar.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-0",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "static"
                                    },
                                    onMouseEnter: ()=>setActiveDropdown(item.name),
                                    onMouseLeave: ()=>setActiveDropdown(null),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-[3px] px-4 py-2 text-[14px] font-medium transition-colors whitespace-nowrap", activeDropdown === item.name ? "text-[#1A56DB]" : "text-[#374151] hover:text-[#1A56DB]"),
                                            children: [
                                                item.name,
                                                item.hasDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3.5 h-3.5 text-[#9CA3AF] transition-transform duration-200 mt-[1px]", activeDropdown === item.name && "rotate-180 text-[#1A56DB]")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/navbar.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/navbar.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: item.hasDropdown && activeDropdown === item.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 4
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: 4
                                                },
                                                transition: {
                                                    duration: 0.12
                                                },
                                                style: {
                                                    position: "fixed",
                                                    top: 64,
                                                    left: 0,
                                                    right: 0,
                                                    margin: "0 auto",
                                                    width: "min(1100px, 96vw)",
                                                    zIndex: 100,
                                                    paddingTop: 4
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: "white",
                                                        borderRadius: 16,
                                                        boxShadow: "0 8px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
                                                        overflow: "hidden",
                                                        display: "flex",
                                                        flexDirection: "column"
                                                    },
                                                    children: item.name === "Solutions" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: 220,
                                                                            flexShrink: 0,
                                                                            borderRight: "1px solid #F1F5F9",
                                                                            padding: "24px 12px",
                                                                            background: "#FAFBFC"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                justifyContent: "space-between",
                                                                                padding: "10px 12px",
                                                                                borderRadius: 8,
                                                                                background: "#F1F5F9",
                                                                                cursor: "pointer"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: 14,
                                                                                        fontWeight: 600,
                                                                                        color: "#111827"
                                                                                    },
                                                                                    children: "Overview"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layout/navbar.tsx",
                                                                                    lineNumber: 140,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    width: "16",
                                                                                    height: "16",
                                                                                    viewBox: "0 0 24 24",
                                                                                    fill: "none",
                                                                                    stroke: "#6B7280",
                                                                                    strokeWidth: "2",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                                        points: "9 18 15 12 9 6"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/layout/navbar.tsx",
                                                                                        lineNumber: 142,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layout/navbar.tsx",
                                                                                    lineNumber: 141,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/layout/navbar.tsx",
                                                                            lineNumber: 135,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layout/navbar.tsx",
                                                                        lineNumber: 129,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            flex: 1,
                                                                            padding: "28px 36px 24px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    marginBottom: 6
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: 20,
                                                                                        fontWeight: 700,
                                                                                        color: "#111827"
                                                                                    },
                                                                                    children: "Solutions"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layout/navbar.tsx",
                                                                                    lineNumber: 150,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layout/navbar.tsx",
                                                                                lineNumber: 149,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                style: {
                                                                                    fontSize: 14,
                                                                                    color: "#6B7280",
                                                                                    marginBottom: 20,
                                                                                    lineHeight: 1.5
                                                                                },
                                                                                children: "AI-enabled solutions orchestrating intelligent commerce, automation, and growth."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layout/navbar.tsx",
                                                                                lineNumber: 152,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    height: 1,
                                                                                    background: "#E5E7EB",
                                                                                    marginBottom: 24
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layout/navbar.tsx",
                                                                                lineNumber: 155,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    display: "grid",
                                                                                    gridTemplateColumns: "1fr 1fr 1fr",
                                                                                    gap: "20px 32px"
                                                                                },
                                                                                children: platformItems.map((pi, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        href: pi.href,
                                                                                        onClick: ()=>setActiveDropdown(null),
                                                                                        style: {
                                                                                            textDecoration: "none"
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                cursor: "pointer"
                                                                                            },
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    style: {
                                                                                                        fontSize: 15,
                                                                                                        fontWeight: 700,
                                                                                                        color: "#111827",
                                                                                                        marginBottom: 4,
                                                                                                        lineHeight: 1.3
                                                                                                    },
                                                                                                    children: pi.title
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/layout/navbar.tsx",
                                                                                                    lineNumber: 167,
                                                                                                    columnNumber: 41
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    style: {
                                                                                                        fontSize: 13,
                                                                                                        color: "#6B7280",
                                                                                                        lineHeight: 1.55
                                                                                                    },
                                                                                                    children: pi.desc
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/layout/navbar.tsx",
                                                                                                    lineNumber: 170,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/layout/navbar.tsx",
                                                                                            lineNumber: 166,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    }, idx, false, {
                                                                                        fileName: "[project]/components/layout/navbar.tsx",
                                                                                        lineNumber: 160,
                                                                                        columnNumber: 37
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layout/navbar.tsx",
                                                                                lineNumber: 158,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layout/navbar.tsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/layout/navbar.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    borderTop: "1px solid #F1F5F9",
                                                                    padding: "16px 36px",
                                                                    display: "flex",
                                                                    justifyContent: "flex-end"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/contact/",
                                                                    onClick: ()=>setActiveDropdown(null),
                                                                    style: {
                                                                        background: "#2563EB",
                                                                        color: "white",
                                                                        borderRadius: 10,
                                                                        padding: "10px 24px",
                                                                        fontSize: 14,
                                                                        fontWeight: 600,
                                                                        textDecoration: "none",
                                                                        display: "inline-flex",
                                                                        alignItems: "center",
                                                                        gap: 8
                                                                    },
                                                                    children: "Get Started"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/navbar.tsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/navbar.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /* Generic small dropdown for other items */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: 8
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: item.href,
                                                            style: {
                                                                display: "block",
                                                                padding: "10px 16px",
                                                                fontSize: 13,
                                                                fontWeight: 500,
                                                                color: "#374151",
                                                                textDecoration: "none",
                                                                borderRadius: 8
                                                            },
                                                            onClick: ()=>setActiveDropdown(null),
                                                            children: [
                                                                "View ",
                                                                item.name
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layout/navbar.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/navbar.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/navbar.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/navbar.tsx",
                                                lineNumber: 100,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/navbar.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/components/layout/navbar.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/layout/navbar.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 36,
                                    height: 36,
                                    borderRadius: "50%",
                                    border: "1.5px solid #D1D5DB",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "36",
                                    height: "36",
                                    viewBox: "0 0 36 36",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                            id: "flag-clip",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "18",
                                                cy: "18",
                                                r: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/navbar.tsx",
                                                lineNumber: 239,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/navbar.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            clipPath: "url(#flag-clip)",
                                            children: [
                                                [
                                                    0,
                                                    1,
                                                    2,
                                                    3,
                                                    4,
                                                    5,
                                                    6,
                                                    7,
                                                    8,
                                                    9,
                                                    10,
                                                    11,
                                                    12
                                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "0",
                                                        y: i * 2.77,
                                                        width: "36",
                                                        height: "2.77",
                                                        fill: i % 2 === 0 ? "#B22234" : "#FFFFFF"
                                                    }, i, false, {
                                                        fileName: "[project]/components/layout/navbar.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "0",
                                                    y: "0",
                                                    width: "15",
                                                    height: "11.5",
                                                    fill: "#3C3B6E"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/navbar.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 19
                                                }, this),
                                                [
                                                    1,
                                                    3,
                                                    5,
                                                    7,
                                                    9
                                                ].map((row)=>[
                                                        1,
                                                        2,
                                                        3,
                                                        4,
                                                        5
                                                    ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: col * 2.4,
                                                            cy: row * 2.1,
                                                            r: "0.6",
                                                            fill: "white"
                                                        }, `${row}-${col}`, false, {
                                                            fileName: "[project]/components/layout/navbar.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 23
                                                        }, this)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/navbar.tsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/navbar.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/navbar.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/navbar.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "lg:hidden p-2 text-[#374151]",
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            "aria-label": "Toggle menu",
                            children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/navbar.tsx",
                                lineNumber: 265,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/navbar.tsx",
                                lineNumber: 265,
                                columnNumber: 61
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/navbar.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/navbar.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/navbar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "lg:hidden bg-white border-t border-gray-100 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "8px 24px"
                        },
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "flex items-center px-3 py-3 text-[#374151] text-sm font-medium hover:bg-[#F0F7FF] hover:text-[#1A56DB] rounded-lg transition-colors",
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: [
                                    item.name,
                                    item.hasDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3.5 h-3.5 ml-1 text-[#9CA3AF]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/navbar.tsx",
                                        lineNumber: 288,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/components/layout/navbar.tsx",
                                lineNumber: 281,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/navbar.tsx",
                        lineNumber: 279,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/navbar.tsx",
                    lineNumber: 273,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/navbar.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/navbar.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Navbar, "K2fXcVE6+Os5qMMzyIG+VydZYpo=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
const linkStyle = {
    color: "#b0b0b0",
    fontSize: 13,
    textDecoration: "none"
};
const hoverIn = (e)=>{
    e.currentTarget.style.color = "#fff";
};
const hoverOut = (e)=>{
    e.currentTarget.style.color = "#b0b0b0";
};
function Col({ title, links }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 11,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase"
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/components/layout/footer.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                },
                children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: l.href,
                            style: linkStyle,
                            onMouseEnter: hoverIn,
                            onMouseLeave: hoverOut,
                            children: l.name
                        }, void 0, false, {
                            fileName: "[project]/components/layout/footer.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this)
                    }, l.name, false, {
                        fileName: "[project]/components/layout/footer.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/layout/footer.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/footer.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Col;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: "#2a2a2a",
            color: "#fff",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
            borderTop: "4px solid #1d4ed8"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: "35px 53px 26px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "198px 1fr 1fr 1fr 1fr",
                        gap: "0 31px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        textDecoration: "none",
                                        marginBottom: 20
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 28 28",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "28",
                                                    height: "28",
                                                    rx: "4",
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/footer.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M7 7 L14 14 L7 21 M14 7 L21 14 L14 21",
                                                    stroke: "#2a2a2a",
                                                    strokeWidth: "2.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/footer.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/footer.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 17,
                                                fontWeight: 700,
                                                color: "#fff"
                                            },
                                            children: "KeySol"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/footer.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Col, {
                                    title: "",
                                    links: [
                                        {
                                            name: "Why KeySol",
                                            href: "/about/"
                                        },
                                        {
                                            name: "Board Of Directors",
                                            href: "/about/board/"
                                        },
                                        {
                                            name: "Management Team",
                                            href: "/about/team/"
                                        },
                                        {
                                            name: "Careers",
                                            href: "/careers/"
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 20
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Col, {
                                        title: "Investors",
                                        links: [
                                            {
                                                name: "Company Information",
                                                href: "/investors/"
                                            },
                                            {
                                                name: "News",
                                                href: "/investors/news/"
                                            },
                                            {
                                                name: "Stock Data",
                                                href: "/investors/stock/"
                                            },
                                            {
                                                name: "SEC Filings",
                                                href: "/investors/sec/"
                                            }
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/footer.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/footer.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Col, {
                            title: "Products",
                            links: [
                                {
                                    name: "Transcend Platform",
                                    href: "/products/transcend/"
                                },
                                {
                                    name: "Digital Retail",
                                    href: "/products/digital-retail/"
                                },
                                {
                                    name: "Intermediary Portals",
                                    href: "/products/intermediary-portals/"
                                },
                                {
                                    name: "Originations",
                                    href: "/products/originations/"
                                },
                                {
                                    name: "Servicing",
                                    href: "/products/servicing/"
                                },
                                {
                                    name: "Wholesale Finance",
                                    href: "/products/wholesale-finance/"
                                },
                                {
                                    name: "Mobility Solutions",
                                    href: "/products/mobility/"
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/layout/footer.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 22
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Col, {
                                    title: "Consultancy",
                                    links: [
                                        {
                                            name: "Information Security",
                                            href: "/consultancy/information-security/"
                                        },
                                        {
                                            name: "Digital Solutions",
                                            href: "/consultancy/digital-solutions/"
                                        },
                                        {
                                            name: "AI, ML & Data Analytics",
                                            href: "/consultancy/ai-ml/"
                                        },
                                        {
                                            name: "Generative AI",
                                            href: "/consultancy/generative-ai/"
                                        },
                                        {
                                            name: "Emerging Technologies",
                                            href: "/consultancy/emerging-technologies/"
                                        },
                                        {
                                            name: "Cloud Services",
                                            href: "/consultancy/cloud/"
                                        },
                                        {
                                            name: "Data Engineering",
                                            href: "/consultancy/data-engineering/"
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Col, {
                                    title: "Insights",
                                    links: [
                                        {
                                            name: "Case Studies",
                                            href: "/insights/case-studies/"
                                        },
                                        {
                                            name: "Guides",
                                            href: "/insights/guides/"
                                        },
                                        {
                                            name: "Blogs",
                                            href: "/insights/blogs/"
                                        },
                                        {
                                            name: "Events",
                                            href: "/insights/events/"
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/footer.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 22
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Col, {
                                    title: "Solutions",
                                    links: [
                                        {
                                            name: "Asset Finance",
                                            href: "/solutions/asset-finance/"
                                        },
                                        {
                                            name: "Automotive Finance",
                                            href: "/solutions/automotive-finance/"
                                        },
                                        {
                                            name: "Equipment Finance",
                                            href: "/solutions/equipment-finance/"
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Col, {
                                    title: "Marketplace",
                                    links: [
                                        {
                                            name: "Calculation Engine",
                                            href: "/marketplace/calculation-engine/"
                                        },
                                        {
                                            name: "Document Generation",
                                            href: "/marketplace/document-generation/"
                                        },
                                        {
                                            name: "API Library",
                                            href: "/marketplace/api-library/"
                                        },
                                        {
                                            name: "Loan Origination System",
                                            href: "/marketplace/loan-origination/"
                                        },
                                        {
                                            name: "Customer Care Portal",
                                            href: "/marketplace/customer-care/"
                                        },
                                        {
                                            name: "Tax Calculation Engine",
                                            href: "/marketplace/tax-calculation/"
                                        },
                                        {
                                            name: "Credit Decisioning Engine",
                                            href: "/marketplace/credit-decisioning/"
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/footer.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 12,
                                        fontWeight: 700,
                                        color: "#fff",
                                        marginBottom: 11,
                                        letterSpacing: "0.06em",
                                        textTransform: "uppercase"
                                    },
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: "#fff",
                                        marginBottom: 9
                                    },
                                    children: "Corporate Headquarters"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 13,
                                        color: "#b0b0b0",
                                        marginBottom: 4,
                                        lineHeight: 1.55
                                    },
                                    children: "Address: 16000 Ventura Blvd, Suite 770 Encino, CA 91436, USA"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 13,
                                        color: "#b0b0b0",
                                        marginBottom: 20
                                    },
                                    children: "Phone: +1 818 222 9195"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 12,
                                        fontWeight: 700,
                                        color: "#fff",
                                        marginBottom: 11,
                                        letterSpacing: "0.06em",
                                        textTransform: "uppercase"
                                    },
                                    children: "Connect With Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 10
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://x.com/keysolglobal",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                color: "#b0b0b0"
                                            },
                                            onMouseEnter: hoverIn,
                                            onMouseLeave: hoverOut,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/footer.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 85
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/footer.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/footer.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://linkedin.com/company/keysolglobal",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                color: "#b0b0b0"
                                            },
                                            onMouseEnter: hoverIn,
                                            onMouseLeave: hoverOut,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/footer.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 85
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "4",
                                                        cy: "4",
                                                        r: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/footer.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 173
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/footer.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/footer.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://facebook.com/keysolglobal",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                color: "#b0b0b0"
                                            },
                                            onMouseEnter: hoverIn,
                                            onMouseLeave: hoverOut,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/footer.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 85
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/footer.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/footer.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://youtube.com/@keysolglobal",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                color: "#b0b0b0"
                                            },
                                            onMouseEnter: hoverIn,
                                            onMouseLeave: hoverOut,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "18",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/footer.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 85
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                        points: "9.75 15.02 15.5 12 9.75 8.98 9.75 15.02",
                                                        fill: "#2a2a2a"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/footer.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 360
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/footer.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/footer.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/footer.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/footer.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/footer.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: "1px solid rgba(255,255,255,0.1)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1280,
                        margin: "0 auto",
                        padding: "15px 53px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 13,
                                color: "#888"
                            },
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " KeySol Global. All Rights Reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/footer.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                {
                                    name: "Terms of Use",
                                    href: "/terms/"
                                },
                                {
                                    name: "Privacy Policy",
                                    href: "/privacy/"
                                },
                                {
                                    name: "Human Rights Policy",
                                    href: "/human-rights/"
                                },
                                {
                                    name: "Modern Slavery Act",
                                    href: "/modern-slavery/"
                                }
                            ].map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#555",
                                                margin: "0 10px"
                                            },
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/footer.tsx",
                                            lineNumber: 148,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: l.href,
                                            style: {
                                                fontSize: 13,
                                                color: "#888",
                                                textDecoration: "none"
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.color = "#fff",
                                            onMouseLeave: (e)=>e.currentTarget.style.color = "#888",
                                            children: l.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/footer.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, l.name, true, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/layout/footer.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/footer.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/footer.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/footer.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = Footer;
var _c, _c1;
__turbopack_context__.k.register(_c, "Col");
__turbopack_context__.k.register(_c1, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/keysol-chatbot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KeySolChatbot",
    ()=>KeySolChatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/* ── Context-sensitive follow-up chips per topic ── */ const TOPIC_CHIPS = {
    "AI & Automation": [
        "Show me use cases",
        "What's the cost?",
        "Book a consultation",
        "How long does it take?"
    ],
    "Software & Enterprise Solutions": [
        "Tech stack?",
        "ERP vs CRM?",
        "Get a quote",
        "See case studies"
    ],
    "Digital Growth": [
        "SEO vs Paid Ads",
        "Show me ROI stats",
        "Content strategy",
        "Book a strategy call"
    ],
    "No-Code / Low-Code": [
        "Best for MVPs?",
        "Webflow vs Bubble",
        "How fast?",
        "Pricing?"
    ],
    "Emerging Tech": [
        "Blockchain use cases",
        "IoT for my business",
        "AR/VR examples",
        "Talk to an expert"
    ],
    "E-commerce": [
        "Shopify vs headless",
        "Conversion tips",
        "Get a quote",
        "Migration help"
    ],
    "Consultancy": [
        "What's included?",
        "How long is an audit?",
        "Pricing",
        "Book a call"
    ],
    "Pricing": [
        "Fixed vs retainer?",
        "Get a free quote",
        "What's included?",
        "Talk to sales"
    ],
    "About KeySol Global": [
        "Meet the team",
        "Our process",
        "See our work",
        "Get in touch"
    ],
    "Contact": [
        "Book a free call",
        "Send a message",
        "Email us",
        "WhatsApp?"
    ],
    "Our Process": [
        "How long does it take?",
        "Do you use Agile?",
        "Post-launch support?",
        "Get started"
    ],
    "Insights & Resources": [
        "Latest AI articles",
        "Case studies",
        "Download a guide",
        "Subscribe"
    ],
    "Solutions": [
        "FinTech solutions",
        "Healthcare tech",
        "Retail & E-commerce",
        "Startup packages"
    ],
    "Our Team": [
        "Meet the leadership",
        "Engineering team",
        "Work with us",
        "Our culture"
    ],
    "Careers": [
        "Open roles",
        "Tech stack?",
        "Work culture",
        "Apply now"
    ],
    "Case Studies": [
        "AI case studies",
        "E-commerce results",
        "Digital growth wins",
        "Software projects"
    ]
};
const DEFAULT_CHIPS = [
    "What services do you offer?",
    "Tell me about AI & Automation",
    "How does your process work?",
    "What does it cost?",
    "Book a free consultation"
];
const INTENTS = [
    /* ── Greetings ─────────────────────────────────────────── */ {
        id: "greeting",
        keywords: [
            {
                terms: [
                    "hi",
                    "hello",
                    "hey",
                    "howdy",
                    "greetings",
                    "good morning",
                    "good afternoon",
                    "good evening",
                    "sup",
                    "yo",
                    "hiya",
                    "what's up",
                    "wassup",
                    "helo"
                ],
                weight: 10
            }
        ],
        response: {
            topic: "greeting",
            text: "Hello! 👋 I'm **Kaia**, KeySol Global's AI assistant.\n\nI can help you with:\n• Our services (AI, Software, Digital Growth & more)\n• Company information and our process\n• Pricing guidance and getting a quote\n• Connecting you with the right team member\n\nWhat would you like to explore today?",
            chips: [
                "What services do you offer?",
                "How does your process work?",
                "What does it cost?",
                "Book a consultation"
            ]
        }
    },
    /* ── AI & Automation ───────────────────────────────────── */ {
        id: "ai_automation",
        keywords: [
            {
                terms: [
                    "ai",
                    "artificial intelligence",
                    "machine learning",
                    "ml",
                    "deep learning",
                    "neural network",
                    "llm",
                    "gpt",
                    "chatgpt",
                    "openai",
                    "generative ai",
                    "large language model",
                    "gen ai"
                ],
                weight: 9
            },
            {
                terms: [
                    "automation",
                    "automate",
                    "automated",
                    "workflow automation",
                    "rpa",
                    "robotic process",
                    "process automation"
                ],
                weight: 8
            },
            {
                terms: [
                    "chatbot",
                    "virtual assistant",
                    "conversational ai",
                    "bot",
                    "agentic",
                    "ai agent",
                    "autonomous agent",
                    "intelligent agent"
                ],
                weight: 8
            },
            {
                terms: [
                    "nlp",
                    "natural language",
                    "predictive analytics",
                    "data science",
                    "computer vision",
                    "image recognition"
                ],
                weight: 7
            },
            {
                terms: [
                    "hyperautomation",
                    "intelligent automation",
                    "business automation",
                    "ai solution",
                    "ai platform"
                ],
                weight: 7
            }
        ],
        response: {
            topic: "AI & Automation",
            text: "Our **AI & Automation** practice delivers transformative, production-ready AI solutions:\n\n🤖 **Agentic AI Systems**\nAutonomous AI agents that plan, reason, and execute multi-step tasks — from research agents to full workflow orchestrators. Built on the latest LLM frameworks.\n\n💬 **Intelligent Chatbots & Virtual Assistants**\nContext-aware conversational AI for customer support, sales, HR, and operations. Typically deflects 60–80% of inbound queries automatically.\n\n⚙️ **Business Process Automation (BPA)**\nEnd-to-end automation of repetitive workflows — document processing, approvals, data routing, reporting. Average **75% reduction** in manual effort.\n\n📊 **ML & Predictive Analytics**\nCustom models for demand forecasting, anomaly detection, lead scoring, and real-time insights.\n\n🔗 **AI Integration**\nEmbedding AI into your existing CRM, ERP, and communication tools — intelligence within your current workflow.\n\nClients typically see **40–70% operational cost reduction** within 6 months.",
            links: [
                {
                    label: "Explore AI & Automation →",
                    href: "/services/ai-automation/"
                },
                {
                    label: "Book a Free AI Consultation →",
                    href: "/consultancy/"
                }
            ],
            chips: [
                "What does it cost?",
                "Show me use cases",
                "How long to implement?",
                "Book a consultation"
            ]
        }
    },
    /* ── Custom Software / Engineering ────────────────────── */ {
        id: "software_engineering",
        keywords: [
            {
                terms: [
                    "software",
                    "custom software",
                    "application",
                    "app",
                    "web app",
                    "mobile app",
                    "platform",
                    "saas",
                    "build",
                    "develop",
                    "engineer",
                    "development"
                ],
                weight: 8
            },
            {
                terms: [
                    "erp",
                    "enterprise resource planning",
                    "crm",
                    "customer relationship",
                    "microsoft dynamics",
                    "salesforce",
                    "odoo",
                    "sap",
                    "netsuite"
                ],
                weight: 9
            },
            {
                terms: [
                    "react",
                    "next.js",
                    "node",
                    "python",
                    "typescript",
                    "api",
                    "backend",
                    "frontend",
                    "full stack",
                    "microservices",
                    "cloud native",
                    "rest api",
                    "graphql"
                ],
                weight: 7
            },
            {
                terms: [
                    "database",
                    "postgres",
                    "mongodb",
                    "mysql",
                    "redis",
                    "cloud",
                    "aws",
                    "azure",
                    "gcp",
                    "devops",
                    "docker",
                    "kubernetes",
                    "ci/cd"
                ],
                weight: 6
            },
            {
                terms: [
                    "enterprise solution",
                    "enterprise software",
                    "business software",
                    "legacy modernisation",
                    "digital transformation",
                    "legacy migration"
                ],
                weight: 8
            }
        ],
        response: {
            topic: "Software & Enterprise Solutions",
            text: "Our **Software & Enterprise Solutions** division builds technology that truly scales:\n\n🌐 **Custom SaaS Platforms**\nCloud-native web and mobile applications designed precisely around your business logic — not off-the-shelf compromises. Architected for performance, security, and growth.\n\n🏢 **ERP Systems**\nFull-cycle ERP covering finance, HR, supply chain, and inventory. We work with custom builds, Odoo, SAP, and Microsoft Dynamics.\n\n📋 **CRM Solutions**\nIntelligent sales pipeline management with automated follow-ups, lead scoring, and deep analytics. Custom or Salesforce/HubSpot implementation.\n\n🔌 **API & Systems Integration**\nConnecting disparate tools into one unified ecosystem — eliminating data silos and manual transfers between platforms.\n\n🔄 **Legacy Modernisation**\nMigrating outdated systems to modern, maintainable architectures without disrupting operations.\n\n**Our Stack:** Next.js, React, Node.js, Python, TypeScript, PostgreSQL, AWS/Azure — always chosen to fit your needs.",
            links: [
                {
                    label: "View Software Services →",
                    href: "/services/software-engineering/"
                },
                {
                    label: "Discuss Your Project →",
                    href: "/contact/"
                }
            ],
            chips: [
                "What ERP systems do you support?",
                "Cloud vs on-premise?",
                "Timeline for a SaaS build?",
                "Get a quote"
            ]
        }
    },
    /* ── Digital Growth / Marketing ───────────────────────── */ {
        id: "digital_growth",
        keywords: [
            {
                terms: [
                    "seo",
                    "search engine optimisation",
                    "search engine optimization",
                    "organic search",
                    "ranking",
                    "google ranking",
                    "serp",
                    "search visibility"
                ],
                weight: 9
            },
            {
                terms: [
                    "aeo",
                    "answer engine",
                    "geo",
                    "generative engine",
                    "ai search",
                    "bing",
                    "perplexity",
                    "ai seo"
                ],
                weight: 8
            },
            {
                terms: [
                    "digital marketing",
                    "paid ads",
                    "ppc",
                    "google ads",
                    "meta ads",
                    "facebook ads",
                    "linkedin ads",
                    "programmatic",
                    "paid media"
                ],
                weight: 8
            },
            {
                terms: [
                    "content marketing",
                    "content strategy",
                    "blog",
                    "thought leadership",
                    "copywriting",
                    "content creation"
                ],
                weight: 7
            },
            {
                terms: [
                    "lead generation",
                    "lead gen",
                    "demand gen",
                    "growth hacking",
                    "funnel",
                    "customer acquisition",
                    "pipeline"
                ],
                weight: 8
            },
            {
                terms: [
                    "conversion",
                    "cro",
                    "conversion rate",
                    "a/b test",
                    "landing page",
                    "ux optimisation",
                    "cart abandonment",
                    "ab test"
                ],
                weight: 7
            },
            {
                terms: [
                    "analytics",
                    "attribution",
                    "ga4",
                    "google analytics",
                    "tracking",
                    "data driven marketing",
                    "roi",
                    "roas"
                ],
                weight: 6
            },
            {
                terms: [
                    "email marketing",
                    "social media",
                    "influencer",
                    "brand awareness",
                    "growth strategy",
                    "digital growth"
                ],
                weight: 6
            }
        ],
        response: {
            topic: "Digital Growth",
            text: "Our **Digital Growth** team drives measurable, attributable revenue — not just vanity metrics:\n\n🔍 **Search Visibility (SEO / AEO / GEO)**\nWe optimise for traditional search, AI answer engines (Perplexity, Bing Copilot), and generative AI results — covering every discovery channel in 2025.\n\n💰 **Paid Advertising**\nROI-focused campaigns across Google Ads, Meta, LinkedIn, and programmatic. Every penny tracked to pipeline and revenue. Average **4× ROAS** for our clients.\n\n📝 **Content Marketing & Thought Leadership**\nStrategic content that builds authority, earns backlinks, and attracts qualified leads.\n\n🎯 **Conversion Rate Optimisation (CRO)**\nSystematic A/B testing and UX improvements to turn more visitors into customers — without increasing ad spend.\n\n📊 **Analytics & Full-Funnel Attribution**\nCustom GA4 setups, CRM integration, and attribution modelling so you know exactly which channels drive revenue.\n\n🚀 **Lead Generation Campaigns**\nMulti-channel lead gen targeting your ideal customer with compelling offers and automated nurture sequences.",
            links: [
                {
                    label: "Explore Digital Growth →",
                    href: "/services/digital-growth/"
                },
                {
                    label: "Get a Growth Strategy Session →",
                    href: "/contact/"
                }
            ],
            chips: [
                "SEO vs Paid Ads",
                "How do you measure ROI?",
                "Content strategy options",
                "Get a free audit"
            ]
        }
    },
    /* ── No-Code / Low-Code ────────────────────────────────── */ {
        id: "no_code",
        keywords: [
            {
                terms: [
                    "no code",
                    "nocode",
                    "low code",
                    "lowcode",
                    "no-code",
                    "low-code",
                    "no code platform"
                ],
                weight: 10
            },
            {
                terms: [
                    "webflow",
                    "bubble",
                    "framer",
                    "retool",
                    "glide",
                    "softr",
                    "appsmith",
                    "adalo",
                    "xano"
                ],
                weight: 9
            },
            {
                terms: [
                    "zapier",
                    "make",
                    "make.com",
                    "n8n",
                    "integromat",
                    "workflow tool",
                    "automation tool"
                ],
                weight: 7
            },
            {
                terms: [
                    "airtable",
                    "notion",
                    "coda",
                    "spreadsheet app",
                    "database app",
                    "internal tool",
                    "admin panel"
                ],
                weight: 7
            },
            {
                terms: [
                    "rapid prototype",
                    "mvp",
                    "proof of concept",
                    "fast build",
                    "quick app",
                    "prototype"
                ],
                weight: 6
            }
        ],
        response: {
            topic: "No-Code / Low-Code",
            text: "Our **No-Code / Low-Code** practice delivers at startup speed without compromising quality:\n\n⚡ **Rapid Prototyping & MVPs**\nFrom validated idea to working product in days, not months — test market fit before committing to a full engineering investment.\n\n🎨 **Webflow & Framer Development**\nHighly designed, performant marketing sites and web apps with CMS capabilities.\n\n🔧 **Bubble & Retool Applications**\nFull-featured apps with complex logic, databases, user auth, and external APIs — built in a fraction of the time.\n\n🔄 **Workflow Automation**\nConnecting tools with Make.com, Zapier, and n8n — automating lead routing, invoicing, notifications, and more.\n\n📊 **Internal Tools & Dashboards**\nCustom admin panels and reporting tools that replace spreadsheets and save your team hours daily.\n\n**Best fit when:** You need an MVP fast, have a limited budget, or your team needs to self-manage the product.",
            chips: [
                "MVP in 2 weeks?",
                "Webflow vs Bubble?",
                "Workflow automation examples",
                "See pricing"
            ]
        }
    },
    /* ── Emerging Tech ─────────────────────────────────────── */ {
        id: "emerging_tech",
        keywords: [
            {
                terms: [
                    "blockchain",
                    "smart contract",
                    "defi",
                    "web3",
                    "crypto",
                    "nft",
                    "token",
                    "dao",
                    "solidity",
                    "ethereum",
                    "polygon"
                ],
                weight: 9
            },
            {
                terms: [
                    "iot",
                    "internet of things",
                    "connected device",
                    "edge computing",
                    "sensor",
                    "embedded",
                    "industrial iot"
                ],
                weight: 8
            },
            {
                terms: [
                    "ar",
                    "vr",
                    "xr",
                    "augmented reality",
                    "virtual reality",
                    "mixed reality",
                    "metaverse",
                    "spatial computing",
                    "immersive"
                ],
                weight: 8
            },
            {
                terms: [
                    "emerging technology",
                    "frontier tech",
                    "emerging tech",
                    "cutting edge",
                    "future technology",
                    "innovation"
                ],
                weight: 7
            },
            {
                terms: [
                    "quantum",
                    "computer vision",
                    "robotics",
                    "digital twin",
                    "3d printing",
                    "edge ai"
                ],
                weight: 6
            }
        ],
        response: {
            topic: "Emerging Tech",
            text: "Our **Emerging Technology** practice helps forward-thinking organisations adopt frontier tech before competitors do:\n\n⛓️ **Blockchain & Web3**\nSmart contracts, DeFi protocols, NFT platforms, and supply chain traceability on Ethereum, Polygon, and other chains.\n\n📡 **IoT & Connected Systems**\nEnd-to-end IoT architecture — sensor hardware to edge computing, cloud pipelines, and real-time dashboards.\n\n🥽 **AR / VR Experiences**\nImmersive training, product visualisation, and virtual showrooms built for headsets and mobile AR.\n\n👁️ **Computer Vision**\nReal-time image/video analysis for quality control, security, retail analytics, and medical imaging.\n\n🔮 **Digital Twins**\nVirtual replicas of physical assets and processes for simulation, monitoring, and optimisation.\n\nWe run quarterly **Emerging Tech Briefings** for clients — helping leadership identify genuine opportunity vs. hype.",
            links: [
                {
                    label: "Explore Our Platform →",
                    href: "/platform/"
                }
            ],
            chips: [
                "Blockchain use cases",
                "IoT for manufacturing",
                "AR/VR for training",
                "Talk to an expert"
            ]
        }
    },
    /* ── E-commerce ────────────────────────────────────────── */ {
        id: "ecommerce",
        keywords: [
            {
                terms: [
                    "ecommerce",
                    "e-commerce",
                    "e commerce",
                    "online store",
                    "online shop",
                    "online retail",
                    "digital commerce",
                    "shop"
                ],
                weight: 9
            },
            {
                terms: [
                    "shopify",
                    "shopify plus",
                    "woocommerce",
                    "magento",
                    "bigcommerce",
                    "commercetools",
                    "shopware"
                ],
                weight: 9
            },
            {
                terms: [
                    "headless commerce",
                    "headless shopify",
                    "storefront",
                    "product catalogue",
                    "checkout",
                    "cart",
                    "basket"
                ],
                weight: 8
            },
            {
                terms: [
                    "inventory",
                    "fulfilment",
                    "order management",
                    "warehouse",
                    "logistics",
                    "returns",
                    "shipping"
                ],
                weight: 7
            },
            {
                terms: [
                    "product page",
                    "collection page",
                    "pdp",
                    "conversion",
                    "upsell",
                    "cross-sell",
                    "abandoned cart",
                    "aov"
                ],
                weight: 7
            }
        ],
        response: {
            topic: "E-commerce",
            text: "Our **E-commerce** solutions are built for brands that want to sell smarter and scale faster:\n\n🛍️ **Shopify & Shopify Plus**\nCustom themes, app development, and full store builds optimised for conversion — from DTC startups to enterprise merchants.\n\n🚀 **Headless Commerce**\nDecoupled storefronts with Next.js + Shopify/Commercetools — blazing performance, SEO advantage, and total design freedom.\n\n⚙️ **E-commerce Automation**\nInventory sync, automated reordering, fulfilment routing, customer segmentation, and post-purchase flows.\n\n📈 **Conversion Optimisation**\nData-driven improvements to product pages, checkout flows, and cart recovery — meaningfully increases AOV and conversion rate.\n\n🌐 **Marketplace Integration**\nConnecting your store to Amazon, eBay, Etsy — unified inventory and centralised orders.\n\nOur e-commerce clients see an average **35% revenue increase** within 6 months of launch.",
            chips: [
                "Shopify vs WooCommerce?",
                "Headless commerce benefits?",
                "Migration timeline",
                "Get a quote"
            ]
        }
    },
    /* ── Consultancy / Strategy ────────────────────────────── */ {
        id: "consultancy",
        keywords: [
            {
                terms: [
                    "consultancy",
                    "consulting",
                    "consultant",
                    "advisory",
                    "advisor",
                    "strategic advice",
                    "strategy consulting"
                ],
                weight: 9
            },
            {
                terms: [
                    "strategy",
                    "strategic planning",
                    "digital strategy",
                    "technology strategy",
                    "it strategy",
                    "tech strategy"
                ],
                weight: 8
            },
            {
                terms: [
                    "roadmap",
                    "technology roadmap",
                    "product roadmap",
                    "digital roadmap",
                    "tech roadmap"
                ],
                weight: 8
            },
            {
                terms: [
                    "technology audit",
                    "tech audit",
                    "it audit",
                    "system assessment",
                    "gap analysis",
                    "current state",
                    "existing systems"
                ],
                weight: 8
            },
            {
                terms: [
                    "digital transformation",
                    "transformation programme",
                    "change management",
                    "modernisation",
                    "digital journey"
                ],
                weight: 7
            },
            {
                terms: [
                    "ai readiness",
                    "ai adoption",
                    "ai strategy",
                    "ai maturity",
                    "ai assessment"
                ],
                weight: 8
            }
        ],
        response: {
            topic: "Consultancy",
            text: "Our **Technology Consultancy** provides strategic clarity before major technology investments:\n\n🔍 **Technology Audits**\nComprehensive assessment of your tech stack — identifying inefficiencies, security gaps, and modernisation opportunities. Delivered as a prioritised report.\n\n🗺️ **Digital Roadmapping**\nA clear 12–24 month technology strategy aligned to your business goals — prioritised by impact and feasibility.\n\n🤖 **AI Readiness Assessment**\nIdentifying where AI can create genuine value — high-ROI opportunities, data readiness, and implementation risks.\n\n🏗️ **Architecture Design & Review**\nPlanning system architectures for scalability, resilience, and security — before you build.\n\n⚖️ **Build vs. Buy Analysis**\nObjective evaluation with total cost of ownership modelling.\n\nEvery engagement is led by a **senior consultant with hands-on delivery experience** — not theoretical frameworks.",
            links: [
                {
                    label: "Book a Consultation →",
                    href: "/consultancy/"
                },
                {
                    label: "Contact Us →",
                    href: "/contact/"
                }
            ],
            chips: [
                "What's in an audit?",
                "How long is a roadmap?",
                "AI readiness check",
                "Book a free call"
            ]
        }
    },
    /* ── Pricing ───────────────────────────────────────────── */ {
        id: "pricing",
        keywords: [
            {
                terms: [
                    "price",
                    "pricing",
                    "cost",
                    "how much",
                    "rate",
                    "rates",
                    "fee",
                    "fees",
                    "charge",
                    "charges"
                ],
                weight: 9
            },
            {
                terms: [
                    "quote",
                    "quotation",
                    "proposal",
                    "estimate",
                    "budget",
                    "investment",
                    "ballpark"
                ],
                weight: 8
            },
            {
                terms: [
                    "monthly",
                    "retainer",
                    "subscription",
                    "ongoing",
                    "per month",
                    "per year",
                    "monthly cost"
                ],
                weight: 6
            },
            {
                terms: [
                    "cheap",
                    "affordable",
                    "expensive",
                    "value",
                    "roi",
                    "return on investment",
                    "worth it"
                ],
                weight: 5
            }
        ],
        response: {
            topic: "Pricing",
            text: "Our pricing is scoped to each project's specific requirements — here's how engagements are typically structured:\n\n💼 **Project-Based (Fixed Price)**\nBest for well-defined deliverables. Fixed price, fixed timeline, no surprises.\n→ Typical range: **£5,000 – £150,000+** depending on complexity\n\n📅 **Monthly Retainer**\nBest for ongoing development, content, or marketing support.\n→ Typical range: **£2,000 – £15,000/month**\n\n🎯 **Consulting Day Rates**\nFor audits, strategy, and advisory work.\n→ Typical range: **£800 – £2,500/day**\n\n📈 **Outcome-Based**\nFor digital growth engagements — pricing tied to agreed KPIs and results.\n\nTo get an accurate quote, share your project details — we typically respond within **24 business hours** with a tailored proposal.",
            links: [
                {
                    label: "Get a Free Quote →",
                    href: "/contact/"
                },
                {
                    label: "Book a Discovery Call →",
                    href: "/consultancy/"
                }
            ],
            chips: [
                "Fixed vs retainer?",
                "Get a free quote now",
                "What's included in a retainer?",
                "Talk to sales"
            ]
        }
    },
    /* ── About / Company ───────────────────────────────────── */ {
        id: "about",
        keywords: [
            {
                terms: [
                    "about",
                    "about you",
                    "about keysol",
                    "who are you",
                    "who is keysol",
                    "what is keysol",
                    "tell me about"
                ],
                weight: 8
            },
            {
                terms: [
                    "company",
                    "organisation",
                    "firm",
                    "agency",
                    "studio",
                    "team",
                    "organisation"
                ],
                weight: 5
            },
            {
                terms: [
                    "founded",
                    "history",
                    "background",
                    "story",
                    "mission",
                    "vision",
                    "values",
                    "culture"
                ],
                weight: 7
            },
            {
                terms: [
                    "keysol global",
                    "keysol",
                    "ksg",
                    "key sol"
                ],
                weight: 9
            },
            {
                terms: [
                    "where are you",
                    "location",
                    "country",
                    "office",
                    "headquarters",
                    "based",
                    "where based"
                ],
                weight: 7
            }
        ],
        response: {
            topic: "About KeySol Global",
            text: "**KeySol Global** is a premium technology solutions firm helping businesses harness AI, software engineering, and digital innovation to scale intelligently.\n\n🎯 **Our Mission**\nMake enterprise-grade technology accessible and impactful for businesses at every stage — from ambitious startups to global enterprises.\n\n🏆 **What Makes Us Different**\nWe're not a generalist agency. Every service is deeply specialised, delivered by practitioners — not account managers with outsourced delivery.\n\n🛠️ **What We Do**\n• AI & Automation — agents, chatbots, ML, BPA\n• Custom Software & ERP/CRM\n• Digital Growth — SEO, paid, CRO, content\n• No-Code / Low-Code solutions\n• Emerging Tech — blockchain, IoT, AR/VR\n• E-commerce — Shopify, headless, conversion\n• Technology Consultancy\n\n🌍 **Global Reach**\nClients across the US, UK, Europe, Middle East, and APAC — operating across time zones to support you wherever you are.",
            links: [
                {
                    label: "Learn More About Us →",
                    href: "/about/"
                }
            ],
            chips: [
                "Meet the team",
                "Our process",
                "Client success stories",
                "Get in touch"
            ]
        }
    },
    /* ── Team ──────────────────────────────────────────────── */ {
        id: "team",
        keywords: [
            {
                terms: [
                    "team",
                    "staff",
                    "people",
                    "who works",
                    "employees",
                    "founders",
                    "leadership",
                    "management"
                ],
                weight: 9
            },
            {
                terms: [
                    "engineers",
                    "developers",
                    "designers",
                    "marketers",
                    "consultants",
                    "specialists"
                ],
                weight: 7
            },
            {
                terms: [
                    "meet the team",
                    "our team",
                    "your team",
                    "company team",
                    "who builds"
                ],
                weight: 10
            }
        ],
        response: {
            topic: "Our Team",
            text: "KeySol Global is built on a team of highly specialised practitioners — not generalists:\n\n👥 **Leadership & Consultancy**\nSenior consultants and strategists with 10–20 years of industry experience across Fortune 500 and scale-up environments.\n\n⚙️ **Engineering Teams**\nFull-stack engineers, cloud architects, DevOps specialists, and QA professionals — organised into focused delivery squads.\n\n🤖 **AI & Data Science**\nML engineers, LLM specialists, NLP researchers, and automation architects who've shipped AI to production.\n\n📈 **Digital Growth**\nSEO strategists, PPC specialists, content creators, CRO experts, and analytics engineers.\n\n🎨 **Design & UX**\nUI/UX designers with expertise in enterprise product design and high-conversion landing experiences.\n\nEvery client engagement is led by a senior specialist — you work directly with the people building your solution.",
            links: [
                {
                    label: "Learn More About Us →",
                    href: "/about/"
                }
            ],
            chips: [
                "How do you staff projects?",
                "Remote or on-site?",
                "Join the team?",
                "Contact us"
            ]
        }
    },
    /* ── Careers ───────────────────────────────────────────── */ {
        id: "careers",
        keywords: [
            {
                terms: [
                    "careers",
                    "career",
                    "jobs",
                    "job",
                    "hiring",
                    "work here",
                    "work for you",
                    "join keysol",
                    "work at keysol"
                ],
                weight: 10
            },
            {
                terms: [
                    "vacancy",
                    "vacancies",
                    "open roles",
                    "positions",
                    "openings",
                    "apply",
                    "application"
                ],
                weight: 9
            },
            {
                terms: [
                    "internship",
                    "graduate",
                    "junior",
                    "senior",
                    "contract",
                    "freelance"
                ],
                weight: 7
            },
            {
                terms: [
                    "salary",
                    "compensation",
                    "benefits",
                    "perks",
                    "remote work",
                    "flexible"
                ],
                weight: 6
            }
        ],
        response: {
            topic: "Careers",
            text: "**Careers at KeySol Global** — We're always looking for exceptional talent:\n\n🚀 **Why Join Us?**\nWork on cutting-edge AI, enterprise, and digital projects for clients across multiple industries and regions. Fast-paced, collaborative, and genuinely exciting work.\n\n💼 **Roles We Typically Hire For**\n• AI/ML Engineers & LLM Specialists\n• Full-Stack & Cloud Engineers\n• Digital Growth Specialists (SEO, PPC, CRO)\n• UX/UI Designers\n• Technology Consultants & Strategists\n• Project & Delivery Managers\n\n🌍 **Remote-First**\nWe operate with a distributed, remote-friendly model — hiring talent wherever the best people are.\n\n📧 **How to Apply**\nSend your CV and a note about what excites you to **hello@keysolglobal.com** with the subject line 'Careers — [Role]'.",
            links: [
                {
                    label: "Contact Us →",
                    href: "/contact/"
                }
            ],
            chips: [
                "What roles are open?",
                "Is it remote?",
                "Culture & benefits",
                "Apply now"
            ]
        }
    },
    /* ── Case Studies / Portfolio ──────────────────────────── */ {
        id: "case_studies",
        keywords: [
            {
                terms: [
                    "case study",
                    "case studies",
                    "portfolio",
                    "work",
                    "projects",
                    "examples",
                    "examples of work",
                    "past work"
                ],
                weight: 9
            },
            {
                terms: [
                    "success story",
                    "client results",
                    "testimonial",
                    "review",
                    "outcome",
                    "results achieved"
                ],
                weight: 8
            },
            {
                terms: [
                    "what have you built",
                    "what did you make",
                    "show me your work",
                    "previous work",
                    "similar project"
                ],
                weight: 8
            }
        ],
        response: {
            topic: "Case Studies",
            text: "We're proud of the real-world outcomes we've delivered for clients across industries:\n\n🤖 **AI & Automation**\nBuilt an AI document processing system for a financial services firm — reducing manual processing time by **82%** and cutting errors to near-zero.\n\n💻 **SaaS Platform**\nEngineered a multi-tenant logistics SaaS platform from scratch — now serving **500+ enterprise clients** with 99.98% uptime.\n\n📈 **Digital Growth**\nTook a B2B SaaS company from 2,000 to **47,000 monthly organic visitors** in 14 months through an integrated SEO and content strategy.\n\n🛍️ **E-commerce**\nMigrated a retail brand to headless Shopify — resulting in **41% faster page loads** and a **28% uplift** in conversion rate.\n\n🏢 **ERP Implementation**\nDelivered a custom Odoo ERP for a manufacturing company — replacing 6 disconnected tools with one unified system.\n\nFull case studies available in our Resource Centre.",
            links: [
                {
                    label: "Visit Resource Centre →",
                    href: "/insights/"
                },
                {
                    label: "Discuss Your Project →",
                    href: "/contact/"
                }
            ],
            chips: [
                "AI case studies",
                "E-commerce results",
                "Software projects",
                "Book a consultation"
            ]
        }
    },
    /* ── Contact ───────────────────────────────────────────── */ {
        id: "contact",
        keywords: [
            {
                terms: [
                    "contact",
                    "get in touch",
                    "reach",
                    "email",
                    "phone",
                    "call",
                    "message",
                    "reach out"
                ],
                weight: 9
            },
            {
                terms: [
                    "talk to",
                    "speak to",
                    "speak with",
                    "chat with",
                    "connect with",
                    "meet",
                    "discuss"
                ],
                weight: 8
            },
            {
                terms: [
                    "demo",
                    "discovery call",
                    "free call",
                    "free consultation",
                    "schedule",
                    "book",
                    "arrange"
                ],
                weight: 8
            },
            {
                terms: [
                    "hello@",
                    "support",
                    "sales",
                    "enquiry",
                    "inquiry",
                    "whatsapp"
                ],
                weight: 7
            }
        ],
        response: {
            topic: "Contact",
            text: "I'd be happy to connect you with our team! Here are your options:\n\n📋 **Contact Form**\nFill in your details — the right team member responds within **24 business hours** with a thoughtful, tailored response.\n\n📞 **Free Discovery Call**\nBook a complimentary 30-minute strategy call with a senior consultant — no obligation, just a focused conversation about your goals.\n\n✉️ **Direct Email**\nhello@keysolglobal.com — for general enquiries, partnerships, or anything else.\n\n⚡ **What to Expect**\nWe take a consultative approach from the very first interaction. No generic sales pitches — we listen carefully and only recommend what genuinely fits your needs.",
            links: [
                {
                    label: "Contact Us →",
                    href: "/contact/"
                },
                {
                    label: "Book a Free Consultation →",
                    href: "/consultancy/"
                }
            ],
            chips: [
                "Book a free call",
                "Send a message",
                "What info do you need?",
                "Response time?"
            ]
        }
    },
    /* ── Process / Methodology ─────────────────────────────── */ {
        id: "process",
        keywords: [
            {
                terms: [
                    "process",
                    "how do you work",
                    "how does it work",
                    "methodology",
                    "approach",
                    "framework",
                    "how you work"
                ],
                weight: 9
            },
            {
                terms: [
                    "steps",
                    "phases",
                    "stage",
                    "workflow",
                    "delivery",
                    "project management",
                    "delivery process"
                ],
                weight: 7
            },
            {
                terms: [
                    "timeline",
                    "how long",
                    "duration",
                    "when",
                    "deadline",
                    "launch",
                    "time to build"
                ],
                weight: 6
            },
            {
                terms: [
                    "agile",
                    "scrum",
                    "sprint",
                    "waterfall",
                    "iterative",
                    "lean",
                    "kanban"
                ],
                weight: 6
            }
        ],
        response: {
            topic: "Our Process",
            text: "Our delivery methodology is built around **5 clear phases** — ensuring every project launches on solid foundations:\n\n**1️⃣ Discover**\nWe immerse ourselves in your business — goals, challenges, existing systems, and market context. Deep discovery eliminates misalignment downstream.\n\n**2️⃣ Strategize**\nWe design the optimal technology strategy and roadmap — defining scope, tech choices, architecture, success metrics, and risk mitigation.\n\n**3️⃣ Design**\nDetailed technical blueprints and UX/UI designs — reviewed and approved before any code is written, avoiding costly late-stage changes.\n\n**4️⃣ Build**\nIterative engineering with full transparency — regular demos, staging environments, and direct team communication throughout.\n\n**5️⃣ Optimise & Scale**\nPost-launch monitoring, performance improvements, and continuous iteration. We don't disappear after go-live.\n\n⏱️ **Timelines:** A no-code MVP might take 2 weeks; a full ERP 6 months. We give realistic estimates during discovery.",
            links: [
                {
                    label: "Our Approach →",
                    href: "/about/"
                }
            ],
            chips: [
                "How long does it take?",
                "Do you use Agile?",
                "Post-launch support?",
                "Get started now"
            ]
        }
    },
    /* ── Insights / Resources ──────────────────────────────── */ {
        id: "insights",
        keywords: [
            {
                terms: [
                    "insights",
                    "blog",
                    "article",
                    "post",
                    "read",
                    "content",
                    "resource centre",
                    "resource center"
                ],
                weight: 8
            },
            {
                terms: [
                    "whitepaper",
                    "white paper",
                    "research",
                    "report",
                    "download",
                    "guide",
                    "ebook"
                ],
                weight: 7
            },
            {
                terms: [
                    "case study",
                    "case studies",
                    "success story",
                    "client result",
                    "portfolio"
                ],
                weight: 8
            },
            {
                terms: [
                    "webinar",
                    "podcast",
                    "video",
                    "event",
                    "watch",
                    "listen",
                    "recording"
                ],
                weight: 7
            },
            {
                terms: [
                    "latest news",
                    "news",
                    "announcement",
                    "press",
                    "newsletter"
                ],
                weight: 6
            }
        ],
        response: {
            topic: "Insights & Resources",
            text: "Our **Resource Centre** is packed with expert content to help you stay ahead:\n\n📝 **Blogs & Articles**\nPractical, actionable pieces on AI, software engineering, digital growth, and emerging technology — written by practitioners, not marketers.\n\n📊 **Case Studies**\nDetailed breakdowns of client engagements — challenges faced, our approach, and measurable results achieved.\n\n📄 **Whitepapers & Guides**\nDeep-dive research and strategic frameworks on AI adoption, digital transformation, and technology selection.\n\n🎙️ **Webinars & Events**\nLive and recorded sessions where our experts and industry guests discuss trends shaping technology in business.\n\nAll content is **completely free** — no paywalls, just genuine value.",
            links: [
                {
                    label: "Visit Our Resource Centre →",
                    href: "/insights/"
                }
            ],
            chips: [
                "Latest AI articles",
                "Download a guide",
                "Watch webinars",
                "Subscribe"
            ]
        }
    },
    /* ── Solutions / Industries ────────────────────────────── */ {
        id: "solutions",
        keywords: [
            {
                terms: [
                    "solutions",
                    "solution",
                    "industries",
                    "industry",
                    "sector",
                    "vertical",
                    "specialisation"
                ],
                weight: 7
            },
            {
                terms: [
                    "healthcare",
                    "fintech",
                    "finance",
                    "banking",
                    "retail",
                    "manufacturing",
                    "logistics",
                    "education",
                    "real estate",
                    "startup"
                ],
                weight: 8
            },
            {
                terms: [
                    "small business",
                    "smb",
                    "sme",
                    "startup",
                    "scale-up",
                    "enterprise",
                    "large company",
                    "mid-market"
                ],
                weight: 7
            }
        ],
        response: {
            topic: "Solutions",
            text: "KeySol Global delivers tailored solutions across a wide range of industries:\n\n🏦 **FinTech & Financial Services** — Compliance automation, data platforms, client portals\n🏥 **Healthcare** — Patient management, clinical data, telehealth platforms\n🛒 **Retail & E-commerce** — Omnichannel platforms, inventory, CX automation\n🏭 **Manufacturing & Logistics** — ERP, IoT, supply chain optimisation\n👔 **Professional Services** — CRM, project management, billing automation\n🎓 **Education & EdTech** — LMS, AI tutoring, admin automation\n🏠 **Real Estate** — Property management, CRM, valuation tools\n\n**By Business Size:**\n• **Startups** — MVPs, growth infrastructure, lean tech stacks\n• **SMBs** — Systems removing operational bottlenecks\n• **Enterprise** — Large-scale digital transformation and AI adoption\n\nEvery engagement is tailored to your specific industry context and stage.",
            links: [
                {
                    label: "View Our Solutions →",
                    href: "/solutions/"
                }
            ],
            chips: [
                "FinTech solutions",
                "Healthcare tech",
                "Startup packages",
                "Enterprise options"
            ]
        }
    },
    /* ── Marketplace ───────────────────────────────────────── */ {
        id: "marketplace",
        keywords: [
            {
                terms: [
                    "marketplace",
                    "market place",
                    "partner",
                    "partners",
                    "partnership",
                    "vendor",
                    "vendor management"
                ],
                weight: 9
            },
            {
                terms: [
                    "technology partner",
                    "tech partner",
                    "solution provider",
                    "saas tool",
                    "third party",
                    "tool recommendations"
                ],
                weight: 8
            },
            {
                terms: [
                    "integrate",
                    "integration",
                    "connect",
                    "ecosystem",
                    "stack",
                    "tool stack"
                ],
                weight: 5
            }
        ],
        response: {
            topic: "Marketplace",
            text: "Our **Marketplace** is a curated directory of vetted technology partners and solution providers:\n\n🏪 **What's in the Marketplace?**\n• Specialist SaaS tools across every business function\n• Certified implementation partners for leading platforms\n• Complementary service providers (legal, finance, HR tech)\n• Hardware and infrastructure vendors\n\n✅ **Why It's Different**\nEvery listing is reviewed and approved by our team. You're accessing a vetted network that meets our quality standards — not an open directory.\n\n🤝 **Partnership Programme**\nIf your business offers technology solutions that complement our services, we'd love to explore a partnership.",
            links: [
                {
                    label: "Explore the Marketplace →",
                    href: "/marketplace/"
                }
            ],
            chips: [
                "Become a partner",
                "Browse tools",
                "Tech recommendations",
                "Integration help"
            ]
        }
    },
    /* ── Goodbye / Thanks ──────────────────────────────────── */ {
        id: "goodbye",
        keywords: [
            {
                terms: [
                    "bye",
                    "goodbye",
                    "see you",
                    "farewell",
                    "take care",
                    "later",
                    "cya",
                    "ttyl"
                ],
                weight: 10
            },
            {
                terms: [
                    "thanks",
                    "thank you",
                    "thank you so much",
                    "appreciate",
                    "cheers",
                    "great help",
                    "helpful",
                    "you've been helpful"
                ],
                weight: 8
            },
            {
                terms: [
                    "that's all",
                    "that's it",
                    "nothing else",
                    "all good",
                    "sorted",
                    "done",
                    "no more questions"
                ],
                weight: 7
            }
        ],
        response: {
            topic: "goodbye",
            text: "It was a pleasure chatting with you! 🚀\n\nWhenever you're ready to take the next step — a quick question, a detailed brief, or booking a discovery call — I'll be right here.\n\nHave an excellent day, and let's build something remarkable together! ✨",
            links: [
                {
                    label: "Contact Our Team →",
                    href: "/contact/"
                }
            ],
            chips: [
                "Book a free call",
                "See our services",
                "Start a project"
            ]
        }
    },
    /* ── About Kaia ─────────────────────────────────────────── */ {
        id: "about_kaia",
        keywords: [
            {
                terms: [
                    "who are you",
                    "what are you",
                    "your name",
                    "kaia",
                    "jennifer",
                    "chatbot",
                    "ai assistant",
                    "bot",
                    "are you human",
                    "are you ai",
                    "are you real",
                    "who made you"
                ],
                weight: 10
            }
        ],
        response: {
            topic: "About Kaia",
            text: "I'm **Kaia** — KeySol Global's AI assistant! 🤖\n\nI'm here to help you:\n• Learn about KeySol's services and capabilities\n• Understand our process and how we work\n• Get pricing guidance and timelines\n• Navigate the website\n• Connect you with the right person on our team\n\nI'm powered by KeySol's knowledge base and trained specifically to represent the company accurately. For detailed project discussions, our human team is always available.\n\nWhat would you like to know?",
            chips: [
                "What services do you offer?",
                "How does pricing work?",
                "Talk to a human",
                "Book a call"
            ]
        }
    }
];
/* ── Scoring engine ─────────────────────────────────────────────────────── */ function scoreIntent(input, intent) {
    const lower = input.toLowerCase();
    const words = lower.split(/\s+/);
    let score = 0;
    for (const group of intent.keywords){
        let groupMatched = false;
        for (const term of group.terms){
            // Exact phrase match
            if (lower.includes(term)) {
                score += group.weight;
                groupMatched = true;
                break;
            }
            // Partial word match for compound terms
            if (!groupMatched && term.split(" ").length === 1 && words.some((w)=>w.startsWith(term) || term.startsWith(w))) {
                score += Math.floor(group.weight * 0.6);
                groupMatched = true;
                break;
            }
        }
    }
    return score;
}
/* ── Context-aware response selector ───────────────────────────────────── */ function getBotResponse(input, lastTopic) {
    const lower = input.toLowerCase().trim();
    // Score all intents
    const scored = INTENTS.map((intent)=>({
            intent,
            score: scoreIntent(input, intent)
        })).filter((s)=>s.score > 0).sort((a, b)=>b.score - a.score);
    // If strong match found
    if (scored.length > 0 && scored[0].score >= 5) {
        return scored[0].intent.response;
    }
    // General service overview
    if (/service|offer|do you|what (can|do)|help me|what.*provide|capabilities|speciali[sz]/i.test(lower)) {
        return {
            topic: "Services Overview",
            text: "KeySol Global offers a comprehensive suite of technology services:\n\n🤖 **AI & Automation** — Agentic AI, chatbots, process automation, ML\n💻 **Custom Software & ERP/CRM** — SaaS platforms, enterprise applications\n📈 **Digital Growth** — SEO/AEO, paid ads, content strategy, CRO\n🔗 **No-Code / Low-Code** — Rapid MVPs, Webflow, Bubble, workflow automation\n⛓️ **Emerging Tech** — Blockchain, IoT, AR/VR, computer vision\n🛒 **E-commerce** — Shopify, headless commerce, retail automation\n🎯 **Consultancy** — Technology strategy, audits, digital roadmapping\n\nWhich area would you like to explore?",
            links: [
                {
                    label: "View All Services →",
                    href: "/platform/"
                }
            ],
            chips: [
                "AI & Automation",
                "Custom Software",
                "Digital Growth",
                "Consultancy"
            ]
        };
    }
    // Navigation helper
    if (/where|find|go to|navigate|page|section|link/i.test(lower)) {
        return {
            text: "Here are the main sections of the KeySol Global website:\n\n• **Platform** — Overview of all technology capabilities\n• **Marketplace** — Vetted technology partners and tools\n• **Consultancy** — Strategic advisory and booking\n• **Solutions** — Industry-specific solutions\n• **Insights** — Blogs, case studies, and resources\n• **About Us** — Company information\n• **Contact** — Get in touch or book a call",
            links: [
                {
                    label: "Explore Platform →",
                    href: "/platform/"
                },
                {
                    label: "Contact Us →",
                    href: "/contact/"
                }
            ],
            chips: [
                "Platform overview",
                "Book a consultation",
                "Read insights",
                "Contact us"
            ]
        };
    }
    // Positive affirmations
    if (/^(yes|yeah|yep|sure|ok|okay|great|perfect|sounds good|absolutely|definitely|love it|brilliant)$/i.test(lower)) {
        return {
            text: "Excellent! What can I help you with next? Feel free to ask about our services, process, pricing, or I can connect you directly with our team. 😊",
            links: [
                {
                    label: "Contact Our Team →",
                    href: "/contact/"
                }
            ],
            chips: DEFAULT_CHIPS
        };
    }
    // Negative / not interested
    if (/^(no|nope|not really|never mind|nevermind|not interested|no thanks)$/i.test(lower)) {
        return {
            text: "No problem at all! If you have any other questions or want to explore our services at any point, I'm right here. Is there anything else I can help with?",
            chips: DEFAULT_CHIPS
        };
    }
    // Default — escalate to human
    return {
        text: "That's a great question — I want to make sure you get the most accurate answer possible.\n\nFor this specific enquiry, our team would be best placed to respond thoughtfully. Would you like to reach out to them directly?",
        links: [
            {
                label: "Contact Our Team →",
                href: "/contact/"
            },
            {
                label: "Book a Free Call →",
                href: "/consultancy/"
            }
        ],
        chips: [
            "What services do you offer?",
            "How does pricing work?",
            "Book a consultation"
        ]
    };
}
/* ─── Markdown renderer ──────────────────────────────────────────────────── */ function RenderText({ text, isUser }) {
    const lines = text.split("\n");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 3
        },
        children: lines.map((line, i)=>{
            if (!line.trim()) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 3
                }
            }, i, false, {
                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                lineNumber: 511,
                columnNumber: 34
            }, this);
            const parts = line.split(/(\*\*[^*]+\*\*)/g);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    lineHeight: 1.7
                },
                children: parts.map((part, j)=>part.startsWith("**") && part.endsWith("**") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            fontWeight: 700,
                            color: isUser ? "rgba(255,255,255,0.95)" : "#0F172A"
                        },
                        children: part.slice(2, -2)
                    }, j, false, {
                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                        lineNumber: 517,
                        columnNumber: 17
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: part
                    }, j, false, {
                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                        lineNumber: 521,
                        columnNumber: 17
                    }, this))
            }, i, false, {
                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                lineNumber: 514,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/layout/keysol-chatbot.tsx",
        lineNumber: 509,
        columnNumber: 5
    }, this);
}
_c = RenderText;
/* ─── Typing Dots ──────────────────────────────────────────────────────────── */ function TypingDots() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "14px 18px"
        },
        children: [
            0,
            1,
            2
        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2563EB, #7C3AED)"
                },
                animate: {
                    y: [
                        0,
                        -7,
                        0
                    ],
                    scale: [
                        1,
                        1.2,
                        1
                    ]
                },
                transition: {
                    duration: 0.65,
                    repeat: Infinity,
                    delay: i * 0.18,
                    ease: "easeInOut"
                }
            }, i, false, {
                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                lineNumber: 536,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/layout/keysol-chatbot.tsx",
        lineNumber: 534,
        columnNumber: 5
    }, this);
}
_c1 = TypingDots;
/* ─── Avatar ─────────────────────────────────────────────────────────────── */ function KaiaAvatar({ size = 32 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: size,
            height: size,
            borderRadius: "50%",
            flexShrink: 0,
            background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(37,99,235,0.35)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size * 0.45,
            height: size * 0.45,
            viewBox: "0 0 32 32",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4,4 L10,4 L10,14 L22,4 L30,4 L18,16 L30,28 L22,28 L10,18 L10,28 L4,28 Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                lineNumber: 560,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/keysol-chatbot.tsx",
            lineNumber: 559,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/keysol-chatbot.tsx",
        lineNumber: 553,
        columnNumber: 5
    }, this);
}
_c2 = KaiaAvatar;
function KeySolChatbot() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "welcome",
            role: "bot",
            text: "Hi there! 👋 I'm **Kaia**, KeySol Global's AI assistant.\n\nI can help you explore our services, learn about the company, get pricing guidance, or connect you with our team.\n\nWhat would you like to know?",
            chips: DEFAULT_CHIPS,
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasUnread, setHasUnread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastTopic, setLastTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [fabHovered, setFabHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KeySolChatbot.useEffect": ()=>{
            bottomRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["KeySolChatbot.useEffect"], [
        messages,
        isTyping
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KeySolChatbot.useEffect": ()=>{
            if (isOpen) {
                setHasUnread(false);
                setTimeout({
                    "KeySolChatbot.useEffect": ()=>inputRef.current?.focus()
                }["KeySolChatbot.useEffect"], 350);
            }
        }
    }["KeySolChatbot.useEffect"], [
        isOpen
    ]);
    // Periodic pulse on FAB when closed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KeySolChatbot.useEffect": ()=>{
            // Initialize to visible
            controls.set({
                scale: 1,
                opacity: 1
            });
            if (!isOpen) {
                const interval = setInterval({
                    "KeySolChatbot.useEffect.interval": ()=>{
                        controls.start({
                            scale: [
                                1,
                                1.08,
                                1
                            ],
                            transition: {
                                duration: 0.5,
                                ease: "easeInOut"
                            }
                        });
                    }
                }["KeySolChatbot.useEffect.interval"], 4000);
                return ({
                    "KeySolChatbot.useEffect": ()=>clearInterval(interval)
                })["KeySolChatbot.useEffect"];
            }
        }
    }["KeySolChatbot.useEffect"], [
        isOpen,
        controls
    ]);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "KeySolChatbot.useCallback[sendMessage]": (text)=>{
            if (!text.trim()) return;
            const userMsg = {
                id: `u-${Date.now()}`,
                role: "user",
                text: text.trim(),
                timestamp: new Date()
            };
            setMessages({
                "KeySolChatbot.useCallback[sendMessage]": (prev)=>[
                        ...prev,
                        userMsg
                    ]
            }["KeySolChatbot.useCallback[sendMessage]"]);
            setInput("");
            setIsTyping(true);
            const delay = 700 + Math.random() * 600;
            setTimeout({
                "KeySolChatbot.useCallback[sendMessage]": ()=>{
                    const resp = getBotResponse(text, lastTopic);
                    const botMsg = {
                        id: `b-${Date.now()}`,
                        role: "bot",
                        text: resp.text,
                        links: resp.links,
                        topic: resp.topic,
                        chips: resp.chips || resp.topic && TOPIC_CHIPS[resp.topic] || undefined,
                        timestamp: new Date()
                    };
                    setMessages({
                        "KeySolChatbot.useCallback[sendMessage]": (prev)=>[
                                ...prev,
                                botMsg
                            ]
                    }["KeySolChatbot.useCallback[sendMessage]"]);
                    if (resp.topic) setLastTopic(resp.topic);
                    setIsTyping(false);
                }
            }["KeySolChatbot.useCallback[sendMessage]"], delay);
        }
    }["KeySolChatbot.useCallback[sendMessage]"], [
        lastTopic
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        sendMessage(input);
    };
    // Get chips for the last bot message
    const lastBotMsg = [
        ...messages
    ].reverse().find((m)=>m.role === "bot");
    const currentChips = lastBotMsg?.chips;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    bottom: 28,
                    right: 28,
                    zIndex: 9999
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        exit: {
                            scale: 0.7,
                            opacity: 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: 350,
                            damping: 22
                        },
                        style: {
                            position: "relative"
                        },
                        onHoverStart: ()=>setFabHovered(true),
                        onHoverEnd: ()=>setFabHovered(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                style: {
                                    position: "absolute",
                                    inset: -6,
                                    borderRadius: "50%",
                                    background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
                                    pointerEvents: "none"
                                },
                                animate: {
                                    scale: [
                                        1,
                                        1.2,
                                        1
                                    ],
                                    opacity: [
                                        0.5,
                                        0.15,
                                        0.5
                                    ]
                                },
                                transition: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                lineNumber: 668,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>setIsOpen(true),
                                animate: controls,
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 20
                                },
                                style: {
                                    width: 64,
                                    height: 64,
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 50%, #7C3AED 100%)",
                                    border: "none",
                                    cursor: "pointer",
                                    boxShadow: fabHovered ? "0 12px 40px rgba(37,99,235,0.55), 0 4px 16px rgba(124,58,237,0.3)" : "0 8px 28px rgba(37,99,235,0.42), 0 2px 8px rgba(0,0,0,0.15)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                    transition: "box-shadow 0.25s ease"
                                },
                                "aria-label": "Open chat with Kaia",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
                                            borderRadius: "50%"
                                        },
                                        animate: {
                                            x: [
                                                "-100%",
                                                "200%"
                                            ]
                                        },
                                        transition: {
                                            duration: 2.5,
                                            repeat: Infinity,
                                            repeatDelay: 1.5,
                                            ease: "easeInOut"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                        lineNumber: 696,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "28",
                                        height: "28",
                                        viewBox: "0 0 32 32",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4,4 L10,4 L10,14 L22,4 L30,4 L18,16 L30,28 L22,28 L10,18 L10,28 L4,28 Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                            lineNumber: 706,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                        lineNumber: 705,
                                        columnNumber: 17
                                    }, this),
                                    hasUnread && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            scale: 0
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        transition: {
                                            type: "spring",
                                            delay: 0.3
                                        },
                                        style: {
                                            position: "absolute",
                                            top: 2,
                                            right: 2,
                                            width: 16,
                                            height: 16,
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #EF4444, #DC2626)",
                                            border: "2.5px solid white",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 8,
                                                fontWeight: 800,
                                                color: "#fff"
                                            },
                                            children: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                            lineNumber: 723,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                        lineNumber: 711,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                lineNumber: 678,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: fabHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 8,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        x: 8,
                                        scale: 0.9
                                    },
                                    transition: {
                                        duration: 0.18
                                    },
                                    style: {
                                        position: "absolute",
                                        right: 74,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        background: "#0F172A",
                                        color: "#fff",
                                        padding: "8px 14px",
                                        borderRadius: 10,
                                        fontSize: 13,
                                        fontWeight: 600,
                                        whiteSpace: "nowrap",
                                        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                                        pointerEvents: "none"
                                    },
                                    children: [
                                        "Chat with Kaia ✨",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                right: -5,
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                width: 10,
                                                height: 10,
                                                background: "#0F172A",
                                                clipPath: "polygon(0 50%, 100% 0, 100% 100%)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                            lineNumber: 746,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                    lineNumber: 731,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                lineNumber: 729,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                        lineNumber: 658,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                    lineNumber: 656,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                lineNumber: 655,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.88,
                        y: 24,
                        originX: 1,
                        originY: 1
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.88,
                        y: 24
                    },
                    transition: {
                        type: "spring",
                        stiffness: 340,
                        damping: 28
                    },
                    style: {
                        position: "fixed",
                        bottom: 28,
                        right: 28,
                        width: 420,
                        height: 660,
                        borderRadius: 24,
                        background: "#ffffff",
                        boxShadow: "0 32px 80px rgba(0,0,0,0.16), 0 8px 32px rgba(37,99,235,0.08), 0 1px 0 rgba(255,255,255,0.9)",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        zIndex: 9999,
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                        border: "1px solid rgba(37,99,235,0.1)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "linear-gradient(135deg, #0D1B3E 0%, #1a3068 45%, #0F172A 100%)",
                                padding: "16px 18px 15px",
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                flexShrink: 0,
                                position: "relative",
                                overflow: "hidden"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        inset: 0,
                                        pointerEvents: "none",
                                        background: "radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.18) 0%, transparent 60%)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                    lineNumber: 788,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative",
                                        flexShrink: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 44,
                                                height: 44,
                                                borderRadius: "50%",
                                                background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                boxShadow: "0 0 0 3px rgba(96,165,250,0.2), 0 4px 12px rgba(37,99,235,0.4)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 32 32",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4,4 L10,4 L10,14 L22,4 L30,4 L18,16 L30,28 L22,28 L10,18 L10,28 L4,28 Z",
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                    lineNumber: 802,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                lineNumber: 801,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                            lineNumber: 795,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            style: {
                                                position: "absolute",
                                                bottom: 1,
                                                right: 1,
                                                width: 11,
                                                height: 11,
                                                borderRadius: "50%",
                                                background: "#22C55E",
                                                border: "2px solid #0D1B3E"
                                            },
                                            animate: {
                                                scale: [
                                                    1,
                                                    1.25,
                                                    1
                                                ]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: Infinity
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                            lineNumber: 806,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                    lineNumber: 794,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        zIndex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 15.5,
                                                        fontWeight: 700,
                                                        color: "#fff",
                                                        letterSpacing: "-0.02em"
                                                    },
                                                    children: "Kaia"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                    lineNumber: 820,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    style: {
                                                        fontSize: 9.5,
                                                        fontWeight: 700,
                                                        background: "linear-gradient(135deg, rgba(96,165,250,0.25), rgba(167,139,250,0.25))",
                                                        color: "#A5B4FC",
                                                        padding: "2px 8px",
                                                        borderRadius: 20,
                                                        letterSpacing: "0.06em",
                                                        textTransform: "uppercase",
                                                        border: "1px solid rgba(167,139,250,0.3)"
                                                    },
                                                    animate: {
                                                        opacity: [
                                                            0.7,
                                                            1,
                                                            0.7
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 2.5,
                                                        repeat: Infinity
                                                    },
                                                    children: "AI Assistant"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                    lineNumber: 821,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                            lineNumber: 819,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 5,
                                                marginTop: 3
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        background: "#22C55E"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                    lineNumber: 837,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 11,
                                                        color: "rgba(255,255,255,0.5)",
                                                        letterSpacing: "0.01em"
                                                    },
                                                    children: "KeySol Global · Online now"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                    lineNumber: 838,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                            lineNumber: 836,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                    lineNumber: 818,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    style: {
                                        width: 32,
                                        height: 32,
                                        borderRadius: "50%",
                                        background: "rgba(255,255,255,0.08)",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        cursor: "pointer",
                                        zIndex: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "background 0.15s"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.background = "rgba(255,255,255,0.16)",
                                    onMouseLeave: (e)=>e.currentTarget.style.background = "rgba(255,255,255,0.08)",
                                    "aria-label": "Close chat",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "13",
                                        height: "13",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "rgba(255,255,255,0.8)",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "18",
                                                y1: "6",
                                                x2: "6",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                lineNumber: 860,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "6",
                                                y1: "6",
                                                x2: "18",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                lineNumber: 861,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                        lineNumber: 859,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                    lineNumber: 845,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                            lineNumber: 781,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                overflowY: "auto",
                                padding: "18px 16px 10px",
                                display: "flex",
                                flexDirection: "column",
                                gap: 14,
                                background: "linear-gradient(180deg, #F0F4FF 0%, #F8FAFC 100%)",
                                scrollbarWidth: "thin",
                                scrollbarColor: "rgba(37,99,235,0.15) transparent"
                            },
                            children: [
                                messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 12,
                                            scale: 0.97
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1
                                        },
                                        transition: {
                                            duration: 0.28,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1
                                            ]
                                        },
                                        style: {
                                            display: "flex",
                                            flexDirection: msg.role === "user" ? "row-reverse" : "row",
                                            alignItems: "flex-end",
                                            gap: 8
                                        },
                                        children: [
                                            msg.role === "bot" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KaiaAvatar, {
                                                size: 30
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                lineNumber: 887,
                                                columnNumber: 42
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    maxWidth: "82%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: 7,
                                                    flex: msg.role === "user" ? undefined : 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: msg.role === "user" ? "11px 15px" : "13px 16px",
                                                            borderRadius: msg.role === "user" ? "20px 20px 5px 20px" : "20px 20px 20px 5px",
                                                            background: msg.role === "user" ? "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)" : "#ffffff",
                                                            color: msg.role === "user" ? "rgba(255,255,255,0.92)" : "#374151",
                                                            fontSize: 13.5,
                                                            lineHeight: 1.65,
                                                            boxShadow: msg.role === "bot" ? "0 2px 12px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.9), inset 0 1px 0 rgba(255,255,255,0.8)" : "0 4px 14px rgba(37,99,235,0.3)",
                                                            border: msg.role === "bot" ? "1px solid rgba(37,99,235,0.07)" : "none",
                                                            position: "relative"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderText, {
                                                            text: msg.text,
                                                            isUser: msg.role === "user"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                            lineNumber: 907,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                        lineNumber: 891,
                                                        columnNumber: 21
                                                    }, this),
                                                    msg.links && msg.links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        },
                                                        children: msg.links.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                                href: link.href,
                                                                whileHover: {
                                                                    x: 3,
                                                                    scale: 1.01
                                                                },
                                                                transition: {
                                                                    type: "spring",
                                                                    stiffness: 400,
                                                                    damping: 20
                                                                },
                                                                style: {
                                                                    display: "inline-flex",
                                                                    alignItems: "center",
                                                                    gap: 6,
                                                                    background: "linear-gradient(135deg, #EFF6FF, #F5F3FF)",
                                                                    color: "#2563EB",
                                                                    textDecoration: "none",
                                                                    fontSize: 12.5,
                                                                    fontWeight: 600,
                                                                    padding: "8px 13px",
                                                                    borderRadius: 10,
                                                                    border: "1px solid rgba(37,99,235,0.15)",
                                                                    alignSelf: "flex-start",
                                                                    boxShadow: "0 1px 4px rgba(37,99,235,0.08)",
                                                                    letterSpacing: "-0.01em"
                                                                },
                                                                children: [
                                                                    link.label,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "11",
                                                                        height: "11",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "#2563EB",
                                                                        strokeWidth: "2.5",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                x1: "5",
                                                                                y1: "12",
                                                                                x2: "19",
                                                                                y2: "12"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                                                lineNumber: 933,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                                points: "12 5 19 12 12 19"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                                                lineNumber: 934,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                                        lineNumber: 932,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                                lineNumber: 914,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                        lineNumber: 912,
                                                        columnNumber: 23
                                                    }, this),
                                                    msg.role === "bot" && msg.chips && idx === messages.length - 1 && !isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            gap: 5,
                                                            flexWrap: "wrap",
                                                            marginTop: 2
                                                        },
                                                        children: msg.chips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                onClick: ()=>sendMessage(chip),
                                                                whileHover: {
                                                                    scale: 1.04,
                                                                    y: -1
                                                                },
                                                                whileTap: {
                                                                    scale: 0.97
                                                                },
                                                                transition: {
                                                                    type: "spring",
                                                                    stiffness: 400,
                                                                    damping: 20
                                                                },
                                                                style: {
                                                                    padding: "5px 12px",
                                                                    borderRadius: 20,
                                                                    fontSize: 11.5,
                                                                    fontWeight: 600,
                                                                    border: "1.5px solid rgba(37,99,235,0.18)",
                                                                    background: "rgba(255,255,255,0.9)",
                                                                    color: "#2563EB",
                                                                    cursor: "pointer",
                                                                    whiteSpace: "nowrap",
                                                                    boxShadow: "0 1px 4px rgba(37,99,235,0.07)",
                                                                    transition: "border-color 0.15s"
                                                                },
                                                                onMouseEnter: (e)=>e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)",
                                                                onMouseLeave: (e)=>e.currentTarget.style.borderColor = "rgba(37,99,235,0.18)",
                                                                children: chip
                                                            }, chip, false, {
                                                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                                lineNumber: 947,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                        lineNumber: 943,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 10,
                                                            color: "#B0BEC5",
                                                            alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                                                            letterSpacing: "0.02em"
                                                        },
                                                        children: msg.timestamp.toLocaleTimeString([], {
                                                            hour: "2-digit",
                                                            minute: "2-digit"
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                        lineNumber: 973,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                lineNumber: 889,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, msg.id, true, {
                                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                        lineNumber: 875,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        transition: {
                                            duration: 0.22
                                        },
                                        style: {
                                            display: "flex",
                                            alignItems: "flex-end",
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KaiaAvatar, {
                                                size: 30
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                lineNumber: 995,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#ffffff",
                                                    borderRadius: "20px 20px 20px 5px",
                                                    boxShadow: "0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
                                                    border: "1px solid rgba(37,99,235,0.07)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TypingDots, {}, void 0, false, {
                                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                    lineNumber: 1002,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                lineNumber: 996,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, "typing", true, {
                                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                        lineNumber: 987,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                    lineNumber: 985,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: bottomRef
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                    lineNumber: 1008,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                            lineNumber: 867,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "#fff",
                                borderTop: "1px solid rgba(37,99,235,0.08)",
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    style: {
                                        padding: "12px 14px 14px",
                                        display: "flex",
                                        gap: 10,
                                        alignItems: "flex-end"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                position: "relative"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: inputRef,
                                                type: "text",
                                                value: input,
                                                onChange: (e)=>setInput(e.target.value),
                                                placeholder: "Ask Kaia anything…",
                                                style: {
                                                    width: "100%",
                                                    padding: "11px 14px",
                                                    borderRadius: 14,
                                                    border: "1.5px solid #E8ECF4",
                                                    fontSize: 13.5,
                                                    outline: "none",
                                                    color: "#111827",
                                                    background: "#F8FAFC",
                                                    transition: "border-color 0.2s, box-shadow 0.2s",
                                                    boxSizing: "border-box",
                                                    fontFamily: "inherit"
                                                },
                                                onFocus: (e)=>{
                                                    e.target.style.borderColor = "#2563EB";
                                                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                                                    e.target.style.background = "#fff";
                                                },
                                                onBlur: (e)=>{
                                                    e.target.style.borderColor = "#E8ECF4";
                                                    e.target.style.boxShadow = "none";
                                                    e.target.style.background = "#F8FAFC";
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                lineNumber: 1025,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                            lineNumber: 1024,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            type: "submit",
                                            disabled: !input.trim() || isTyping,
                                            whileHover: input.trim() && !isTyping ? {
                                                scale: 1.08
                                            } : {},
                                            whileTap: input.trim() && !isTyping ? {
                                                scale: 0.94
                                            } : {},
                                            style: {
                                                width: 42,
                                                height: 42,
                                                borderRadius: 13,
                                                border: "none",
                                                background: input.trim() && !isTyping ? "linear-gradient(135deg, #2563EB, #4F46E5)" : "#E8ECF4",
                                                cursor: input.trim() && !isTyping ? "pointer" : "not-allowed",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                                boxShadow: input.trim() && !isTyping ? "0 4px 14px rgba(37,99,235,0.35)" : "none",
                                                transition: "background 0.2s, box-shadow 0.2s"
                                            },
                                            "aria-label": "Send message",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: input.trim() && !isTyping ? "#fff" : "#9CA3AF",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "22",
                                                        y1: "2",
                                                        x2: "11",
                                                        y2: "13"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                        lineNumber: 1077,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                        points: "22 2 15 22 11 13 2 9 22 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                        lineNumber: 1078,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                lineNumber: 1074,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                            lineNumber: 1054,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                    lineNumber: 1017,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "0 16px 12px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 6
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 14,
                                                height: 14,
                                                borderRadius: "50%",
                                                background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "7",
                                                height: "7",
                                                viewBox: "0 0 32 32",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4,4 L10,4 L10,14 L22,4 L30,4 L18,16 L30,28 L22,28 L10,18 L10,28 L4,28 Z",
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                    lineNumber: 1095,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                lineNumber: 1094,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                            lineNumber: 1088,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 10.5,
                                                color: "#B0BEC5",
                                                letterSpacing: "0.01em"
                                            },
                                            children: [
                                                "Powered by ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 700,
                                                        color: "#6366F1"
                                                    },
                                                    children: "KeySol AI"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                                    lineNumber: 1099,
                                                    columnNumber: 30
                                                }, this),
                                                " · Always improving"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                            lineNumber: 1098,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                                    lineNumber: 1084,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/keysol-chatbot.tsx",
                            lineNumber: 1012,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/keysol-chatbot.tsx",
                    lineNumber: 762,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/keysol-chatbot.tsx",
                lineNumber: 760,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(KeySolChatbot, "19KM/B2JqwRlBtxprzXlyeQs9g0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c3 = KeySolChatbot;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "RenderText");
__turbopack_context__.k.register(_c1, "TypingDots");
__turbopack_context__.k.register(_c2, "KaiaAvatar");
__turbopack_context__.k.register(_c3, "KeySolChatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_829c93fa._.js.map