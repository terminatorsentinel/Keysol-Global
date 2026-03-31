"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (el.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: 3, zIndex: 9999, background: "rgba(0,0,0,0.08)" }}>
      <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, #2563EB, #7C3AED)", transition: "width 0.1s linear" }} />
    </div>
  );
}
