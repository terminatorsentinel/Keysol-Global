(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/(pages)/insights/[slug]/reading-progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadingProgress",
    ()=>ReadingProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ReadingProgress() {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReadingProgress.useEffect": ()=>{
            const update = {
                "ReadingProgress.useEffect.update": ()=>{
                    const el = document.documentElement;
                    const total = el.scrollHeight - el.clientHeight;
                    setProgress(total > 0 ? el.scrollTop / total * 100 : 0);
                }
            }["ReadingProgress.useEffect.update"];
            window.addEventListener("scroll", update, {
                passive: true
            });
            return ({
                "ReadingProgress.useEffect": ()=>window.removeEventListener("scroll", update)
            })["ReadingProgress.useEffect"];
        }
    }["ReadingProgress.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: 3,
            zIndex: 9999,
            background: "rgba(0,0,0,0.08)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #2563EB, #7C3AED)",
                transition: "width 0.1s linear"
            }
        }, void 0, false, {
            fileName: "[project]/app/(pages)/insights/[slug]/reading-progress.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(pages)/insights/[slug]/reading-progress.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(ReadingProgress, "ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=");
_c = ReadingProgress;
var _c;
__turbopack_context__.k.register(_c, "ReadingProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_%28pages%29_insights_%5Bslug%5D_reading-progress_tsx_de644415._.js.map