"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
  "future-ready",
];

/* ─────────────────────────────────────────────
   5 industry slides — photorealistic 3D SVG illustrations
   Style: isolated subject, 3/4 perspective, metallic shading,
   soft ground shadow — matching NETSOL quality
───────────────────────────────────────────── */

// SVG: Retail Lenders — photorealistic silver sedan, 3/4 front view
function SVGRetailLenders() {
  return (
    <svg viewBox="0 0 360 300" width="340" height="280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rl_body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8eef5"/>
          <stop offset="35%" stopColor="#c8d8ec"/>
          <stop offset="70%" stopColor="#8aabcc"/>
          <stop offset="100%" stopColor="#5a7a9a"/>
        </linearGradient>
        <linearGradient id="rl_roof" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d0dce8"/>
          <stop offset="100%" stopColor="#7090b0"/>
        </linearGradient>
        <linearGradient id="rl_glass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c8dff5" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#6090c0" stopOpacity="0.7"/>
        </linearGradient>
        <radialGradient id="rl_shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8aabcc" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#8aabcc" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="rl_wheel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a3a3a"/>
          <stop offset="100%" stopColor="#1a1a1a"/>
        </linearGradient>
        <linearGradient id="rl_rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0e8f0"/>
          <stop offset="100%" stopColor="#9ab0c8"/>
        </linearGradient>
        <filter id="rl_blur"><feGaussianBlur stdDeviation="4"/></filter>
      </defs>
      {/* Ground shadow */}
      <ellipse cx="180" cy="268" rx="150" ry="16" fill="url(#rl_shadow)" filter="url(#rl_blur)"/>
      {/* Lower body / rocker panels */}
      <path d="M55,210 Q58,225 75,230 L285,230 Q302,225 305,210 L295,208 L65,208 Z" fill="#4a6a8a"/>
      {/* Main body — sweeping coupe profile */}
      <path d="M62,210 Q70,185 90,175 L120,168 L130,148 Q145,128 175,122 L215,122 Q248,124 265,140 L278,160 L295,172 Q318,182 320,200 L318,210 Z" fill="url(#rl_body)"/>
      {/* Body lower highlight */}
      <path d="M80,210 Q88,198 100,194 L290,194 L295,210 Z" fill="#d0dce8" opacity="0.25"/>
      {/* Roof */}
      <path d="M128,148 Q143,125 178,120 L215,120 Q248,122 265,140 L260,142 Q244,126 215,124 L178,124 Q148,128 134,150 Z" fill="url(#rl_roof)"/>
      {/* Windshield */}
      <path d="M134,150 Q148,128 178,124 L215,124 Q244,126 258,142 L248,158 Q234,140 210,138 L182,138 Q158,140 144,156 Z" fill="url(#rl_glass)"/>
      {/* Windshield shine */}
      <path d="M142,153 Q154,134 178,130 L195,130 Q178,133 164,148 Z" fill="white" opacity="0.3"/>
      {/* Rear window */}
      <path d="M258,142 L265,140 L272,155 L260,165 L248,158 Z" fill="url(#rl_glass)"/>
      {/* Side window */}
      <path d="M144,156 L182,138 L210,138 L248,158 L238,172 L155,172 Z" fill="#a8c8e8" opacity="0.5"/>
      {/* A-pillar */}
      <line x1="144" y1="156" x2="134" y2="172" stroke="#5a7a9a" strokeWidth="3"/>
      {/* C-pillar */}
      <line x1="248" y1="158" x2="262" y2="175" stroke="#5a7a9a" strokeWidth="3"/>
      {/* Door line */}
      <path d="M155,172 L155,208" stroke="#7090b0" strokeWidth="1.5" opacity="0.6"/>
      {/* Door handle left */}
      <rect x="116" y="192" width="24" height="5" rx="2.5" fill="#b8c8d8"/>
      <rect x="116" y="192" width="24" height="2" rx="1" fill="#e0ecf8" opacity="0.8"/>
      {/* Door handle right */}
      <rect x="218" y="192" width="24" height="5" rx="2.5" fill="#b8c8d8"/>
      {/* Headlight assembly */}
      <path d="M62,192 Q65,178 78,174 L100,172 L100,185 L75,188 Q65,190 62,200 Z" fill="#d8e8f5"/>
      <path d="M64,194 Q67,182 78,178 L98,176 L98,183 L78,186 Q68,188 66,196 Z" fill="#b0d0f0" opacity="0.8"/>
      {/* Headlight DRL */}
      <path d="M66,196 Q69,188 80,185 L96,183" stroke="#e8f4ff" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M68,199 Q72,192 82,189" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      {/* Headlight amber */}
      <ellipse cx="70" cy="202" rx="6" ry="4" fill="#f8c840" opacity="0.9"/>
      {/* Tail light */}
      <path d="M298,192 Q305,180 308,175 L318,178 L320,200 Q318,208 308,210 Z" fill="#c83030" opacity="0.9"/>
      <path d="M300,194 Q306,184 310,180" stroke="#ff6060" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      {/* Front bumper */}
      <path d="M58,208 Q62,220 78,226 L105,228 L105,222 L82,220 Q68,216 65,208 Z" fill="#b8c8d8"/>
      <path d="M60,212 Q64,222 80,226" stroke="#d8e4f0" strokeWidth="2" opacity="0.6"/>
      {/* Rear bumper */}
      <path d="M302,208 Q298,220 282,226 L255,228 L255,222 L278,220 Q292,216 300,208 Z" fill="#b8c8d8"/>
      {/* Side mirror left */}
      <path d="M100,175 L94,172 L92,168 L100,168 L104,172 Z" fill="#9ab0c8"/>
      {/* Side mirror right */}
      <path d="M258,165 L266,162 L268,158 L260,158 L256,162 Z" fill="#9ab0c8"/>
      {/* Body crease highlight */}
      <path d="M85,200 Q160,195 295,200" stroke="#e8f4ff" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      {/* Front wheel */}
      <circle cx="108" cy="230" r="32" fill="url(#rl_wheel)"/>
      <circle cx="108" cy="230" r="26" fill="#282828"/>
      <circle cx="108" cy="230" r="20" fill="url(#rl_rim)"/>
      <circle cx="108" cy="230" r="8" fill="#d0dce8"/>
      {[0,51.4,102.8,154.2,205.7,257.1,308.5].map((a,i)=>{
        const r=a*Math.PI/180, x1=108+9*Math.cos(r), y1=230+9*Math.sin(r), x2=108+19*Math.cos(r), y2=230+19*Math.sin(r);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8aabcc" strokeWidth="3" strokeLinecap="round"/>;
      })}
      <circle cx="108" cy="230" r="5" fill="#b0c4d8"/>
      {/* Rear wheel */}
      <circle cx="252" cy="230" r="32" fill="url(#rl_wheel)"/>
      <circle cx="252" cy="230" r="26" fill="#282828"/>
      <circle cx="252" cy="230" r="20" fill="url(#rl_rim)"/>
      <circle cx="252" cy="230" r="8" fill="#d0dce8"/>
      {[0,51.4,102.8,154.2,205.7,257.1,308.5].map((a,i)=>{
        const r=a*Math.PI/180, x1=252+9*Math.cos(r), y1=230+9*Math.sin(r), x2=252+19*Math.cos(r), y2=230+19*Math.sin(r);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8aabcc" strokeWidth="3" strokeLinecap="round"/>;
      })}
      <circle cx="252" cy="230" r="5" fill="#b0c4d8"/>
      {/* Roof highlight */}
      <path d="M148,130 Q175,122 215,124" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.35"/>
    </svg>
  );
}

// SVG: Brokers — photorealistic white SUV, 3/4 rear view
function SVGBrokers() {
  return (
    <svg viewBox="0 0 360 300" width="340" height="280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="br_body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5f8ff"/>
          <stop offset="40%" stopColor="#dce8f8"/>
          <stop offset="80%" stopColor="#a8bcd8"/>
          <stop offset="100%" stopColor="#7090b8"/>
        </linearGradient>
        <linearGradient id="br_roof" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8f0fc"/>
          <stop offset="100%" stopColor="#8098bc"/>
        </linearGradient>
        <linearGradient id="br_glass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b8d0f0" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#5080b0" stopOpacity="0.65"/>
        </linearGradient>
        <radialGradient id="br_shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7090b8" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#7090b8" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="br_wheel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#404040"/>
          <stop offset="100%" stopColor="#181818"/>
        </linearGradient>
        <linearGradient id="br_rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8f0f8"/>
          <stop offset="100%" stopColor="#a0b8d0"/>
        </linearGradient>
        <filter id="br_blur"><feGaussianBlur stdDeviation="4"/></filter>
      </defs>
      {/* Ground shadow */}
      <ellipse cx="180" cy="265" rx="155" ry="18" fill="url(#br_shadow)" filter="url(#br_blur)"/>
      {/* Rocker / lower sill */}
      <path d="M48,205 Q52,222 72,228 L288,228 Q308,222 312,205 L300,204 L60,204 Z" fill="#5878a0"/>
      {/* Main SUV body */}
      <path d="M55,205 Q58,180 72,168 L95,162 L110,148 Q128,130 158,126 L218,126 Q250,128 270,145 L285,160 L302,170 Q322,180 325,198 L323,205 Z" fill="url(#br_body)"/>
      {/* Body lower highlight strip */}
      <path d="M72,205 Q100,196 300,200 L302,205 Z" fill="white" opacity="0.18"/>
      {/* Flat SUV roof */}
      <path d="M112,148 Q130,128 160,124 L218,124 Q248,126 268,145 L270,148 Q250,132 218,130 L160,130 Q132,132 114,150 Z" fill="url(#br_roof)"/>
      {/* Rear windshield */}
      <path d="M270,148 L268,145 L285,162 L294,178 L278,175 Q275,160 264,152 Z" fill="url(#br_glass)"/>
      {/* Rear window top */}
      <path d="M268,145 L270,148 L264,152 Q260,142 252,138 L238,136 Q252,136 262,143 Z" fill="url(#br_glass)"/>
      {/* Front windshield */}
      <path d="M114,150 Q130,130 160,126 L218,126 Q248,128 268,145 L258,158 Q240,142 215,138 L180,138 Q156,140 142,155 Z" fill="url(#br_glass)"/>
      {/* Windshield shine */}
      <path d="M122,153 Q138,132 165,128 L188,128 Q165,131 148,150 Z" fill="white" opacity="0.28"/>
      {/* Side windows */}
      <path d="M142,155 L180,138 L215,138 L258,158 L248,170 L152,170 Z" fill="#9ab8d8" opacity="0.5"/>
      {/* B-pillar */}
      <rect x="196" y="138" width="4" height="32" rx="2" fill="#7090b0" opacity="0.6"/>
      {/* Rear tail light */}
      <path d="M305,178 Q315,168 320,160 L326,165 L325,200 Q322,208 312,208 Z" fill="#cc2020" opacity="0.9"/>
      <path d="M308,182 Q316,172 320,165" stroke="#ff5050" strokeWidth="2.5" strokeLinecap="round" opacity="0.75"/>
      <path d="M310,190 Q317,182 321,175" stroke="#ff8080" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      {/* Rear bumper */}
      <path d="M308,205 Q305,218 288,225 L260,228 L260,222 L284,220 Q298,216 304,205 Z" fill="#b0c4dc"/>
      {/* Rear fog light */}
      <ellipse cx="302" cy="215" rx="6" ry="4" fill="#ff8800" opacity="0.85"/>
      {/* Rear license plate */}
      <rect x="252" y="212" width="42" height="18" rx="3" fill="#e8f0f8"/>
      <rect x="254" y="214" width="38" height="14" rx="2" fill="white"/>
      {/* Front headlight area */}
      <path d="M55,188 Q58,175 68,170 L92,168 L92,182 L70,184 Q60,186 58,195 Z" fill="#d0e4f5"/>
      <path d="M57,190 Q60,178 70,174 L90,172 L90,180 L72,182 Q62,184 60,192 Z" fill="#a8ccec" opacity="0.85"/>
      <path d="M60,192 Q64,184 74,181 L88,180" stroke="#e0f0ff" strokeWidth="2.5" strokeLinecap="round"/>
      {/* DRL strip */}
      <path d="M62,195 Q66,188 78,185 L90,184" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      {/* Front bumper */}
      <path d="M50,205 Q54,218 72,225 L100,228 L100,222 L76,220 Q62,216 58,205 Z" fill="#b0c4dc"/>
      {/* Front fog */}
      <ellipse cx="64" cy="215" rx="7" ry="4.5" fill="#ffe060" opacity="0.88"/>
      {/* Roof rail */}
      <rect x="112" y="124" width="156" height="5" rx="2.5" fill="#9ab0cc"/>
      <rect x="114" y="125" width="152" height="2" rx="1" fill="#d0dce8" opacity="0.6"/>
      {/* Side mirror right (front) */}
      <path d="M100,165 L94,162 L92,157 L102,157 L106,162 Z" fill="#98b0c8"/>
      {/* Body crease line */}
      <path d="M72,192 Q180,186 302,192" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
      {/* Front wheel */}
      <circle cx="110" cy="228" r="34" fill="url(#br_wheel)"/>
      <circle cx="110" cy="228" r="27" fill="#222222"/>
      <circle cx="110" cy="228" r="21" fill="url(#br_rim)"/>
      <circle cx="110" cy="228" r="9" fill="#ccd8e8"/>
      {[0,45,90,135,180,225,270,315].map((a,i)=>{
        const r=a*Math.PI/180,x1=110+10*Math.cos(r),y1=228+10*Math.sin(r),x2=110+20*Math.cos(r),y2=228+20*Math.sin(r);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#90aac4" strokeWidth="3.5" strokeLinecap="round"/>;
      })}
      <circle cx="110" cy="228" r="5" fill="#a8bcd0"/>
      {/* Rear wheel */}
      <circle cx="256" cy="228" r="34" fill="url(#br_wheel)"/>
      <circle cx="256" cy="228" r="27" fill="#222222"/>
      <circle cx="256" cy="228" r="21" fill="url(#br_rim)"/>
      <circle cx="256" cy="228" r="9" fill="#ccd8e8"/>
      {[0,45,90,135,180,225,270,315].map((a,i)=>{
        const r=a*Math.PI/180,x1=256+10*Math.cos(r),y1=228+10*Math.sin(r),x2=256+20*Math.cos(r),y2=228+20*Math.sin(r);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#90aac4" strokeWidth="3.5" strokeLinecap="round"/>;
      })}
      <circle cx="256" cy="228" r="5" fill="#a8bcd0"/>
      {/* Roof highlight */}
      <path d="M130,128 Q175,124 220,126" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
    </svg>
  );
}

// SVG: Commercial Lenders — photorealistic blue large truck, 3/4 view
function SVGCommercialLenders() {
  return (
    <svg viewBox="0 0 380 300" width="360" height="280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cl_cab" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0eaff"/>
          <stop offset="30%" stopColor="#9ab8e0"/>
          <stop offset="70%" stopColor="#4a70a8"/>
          <stop offset="100%" stopColor="#2a4880"/>
        </linearGradient>
        <linearGradient id="cl_trailer" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c8d8f0"/>
          <stop offset="50%" stopColor="#8098c0"/>
          <stop offset="100%" stopColor="#506090"/>
        </linearGradient>
        <linearGradient id="cl_glass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a8c8f0" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#4070b0" stopOpacity="0.7"/>
        </linearGradient>
        <radialGradient id="cl_shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#406090" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#406090" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="cl_wheel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#383838"/>
          <stop offset="100%" stopColor="#141414"/>
        </linearGradient>
        <linearGradient id="cl_rim2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d8e4f4"/>
          <stop offset="100%" stopColor="#8098b8"/>
        </linearGradient>
        <filter id="cl_blur"><feGaussianBlur stdDeviation="5"/></filter>
      </defs>
      {/* Ground shadow */}
      <ellipse cx="190" cy="272" rx="175" ry="16" fill="url(#cl_shadow)" filter="url(#cl_blur)"/>
      {/* ── TRAILER ── */}
      {/* Trailer body */}
      <rect x="95" y="140" width="240" height="100" rx="4" fill="url(#cl_trailer)"/>
      {/* Trailer top highlight */}
      <rect x="95" y="140" width="240" height="18" rx="4" fill="#d0e0f8" opacity="0.5"/>
      {/* Trailer side ribs */}
      {[135,175,215,255,295].map((x,i)=>(
        <line key={i} x1={x} y1="140" x2={x} y2="240" stroke="#6080a8" strokeWidth="1.5" opacity="0.5"/>
      ))}
      {/* Trailer rear door lines */}
      <rect x="310" y="145" width="22" height="90" rx="2" fill="#6888b8" opacity="0.6"/>
      {[155,170,185,200,215,225].map((y,i)=>(
        <line key={i} x1="310" y1={y} x2="332" y2={y} stroke="#4868a8" strokeWidth="1" opacity="0.5"/>
      ))}
      {/* Trailer undercarriage */}
      <rect x="100" y="238" width="235" height="10" rx="3" fill="#3a5888"/>
      {/* Trailer rear lights */}
      <rect x="330" y="148" width="8" height="30" rx="2" fill="#cc2020" opacity="0.9"/>
      <rect x="330" y="185" width="8" height="20" rx="2" fill="#ff8800" opacity="0.85"/>
      {/* Trailer rear bumper */}
      <rect x="95" y="238" width="244" height="10" rx="3" fill="#405880"/>
      {/* ── CAB ── */}
      {/* Cab body */}
      <path d="M38,175 Q42,150 55,138 L80,128 Q92,122 110,120 L112,140 L108,240 L38,240 Z" fill="url(#cl_cab)"/>
      {/* Cab hood */}
      <path d="M38,200 Q40,185 50,175 L90,165 L108,168 L108,185 L45,190 Z" fill="#7a9ccc"/>
      <path d="M40,202 Q42,190 52,182 L88,172 L106,175 L106,183 L48,188 Z" fill="#9abce0" opacity="0.5"/>
      {/* Windshield */}
      <path d="M85,128 Q96,118 112,118 L112,140 L90,142 Q80,138 78,130 Z" fill="url(#cl_glass)"/>
      <path d="M88,130 Q96,120 110,120 L110,136 L92,138 Q82,135 80,128 Z" fill="#c0dcf8" opacity="0.4"/>
      {/* Windshield shine */}
      <path d="M90,122 Q100,116 110,118 L108,126 Q98,122 90,126 Z" fill="white" opacity="0.3"/>
      {/* Side window */}
      <path d="M55,138 L80,128 L85,130 L82,155 L52,158 Z" fill="url(#cl_glass)" opacity="0.7"/>
      {/* Cab door */}
      <line x1="72" y1="140" x2="72" y2="240" stroke="#3860a0" strokeWidth="2" opacity="0.5"/>
      {/* Door handle */}
      <rect x="50" y="188" width="16" height="5" rx="2.5" fill="#a8c0dc"/>
      {/* Grille */}
      <rect x="38" y="200" width="16" height="38" rx="3" fill="#2a3850"/>
      {[205,212,219,226,233].map((y,i)=>(
        <line key={i} x1="39" y1={y} x2="53" y2={y} stroke="#4060a0" strokeWidth="1.5"/>
      ))}
      {/* Headlight */}
      <rect x="38" y="196" width="16" height="8" rx="2" fill="#e8f4ff" opacity="0.9"/>
      <rect x="40" y="198" width="12" height="4" rx="1" fill="white" opacity="0.8"/>
      {/* Running light */}
      <rect x="38" y="188" width="16" height="6" rx="2" fill="#f8c840" opacity="0.85"/>
      {/* Exhaust stack */}
      <rect x="106" y="100" width="7" height="42" rx="3" fill="#506080"/>
      <rect x="107" y="100" width="3" height="42" rx="2" fill="#7090b0" opacity="0.5"/>
      <ellipse cx="109" cy="100" rx="4" ry="2.5" fill="#405070"/>
      {/* Cab front bumper */}
      <rect x="34" y="238" width="75" height="10" rx="3" fill="#3858a0"/>
      {/* Step */}
      <rect x="38" y="215" width="12" height="6" rx="2" fill="#4868a8" opacity="0.7"/>
      {/* Mirror */}
      <path d="M108,138 L116,134 L118,128 L108,128 L104,133 Z" fill="#7090b0"/>
      {/* Cab highlight */}
      <path d="M60,130 Q85,122 108,122" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.28"/>
      {/* ── WHEELS ── */}
      {/* Front wheel */}
      <circle cx="62" cy="240" r="28" fill="url(#cl_wheel)"/>
      <circle cx="62" cy="240" r="22" fill="#1c1c1c"/>
      <circle cx="62" cy="240" r="17" fill="url(#cl_rim2)"/>
      <circle cx="62" cy="240" r="7" fill="#c0d0e4"/>
      {[0,60,120,180,240,300].map((a,i)=>{
        const rad=a*Math.PI/180,x1=62+8*Math.cos(rad),y1=240+8*Math.sin(rad),x2=62+16*Math.cos(rad),y2=240+16*Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7890b4" strokeWidth="4" strokeLinecap="round"/>;
      })}
      {/* Rear trailer wheels (double) */}
      {[270,295].map((cx,wi)=>(
        <g key={wi}>
          <circle cx={cx} cy="240" r="26" fill="url(#cl_wheel)"/>
          <circle cx={cx} cy="240" r="20" fill="#1c1c1c"/>
          <circle cx={cx} cy="240" r="15" fill="url(#cl_rim2)"/>
          <circle cx={cx} cy="240" r="6" fill="#c0d0e4"/>
          {[0,60,120,180,240,300].map((a,i)=>{
            const rad=a*Math.PI/180,x1=cx+7*Math.cos(rad),y1=240+7*Math.sin(rad),x2=cx+14*Math.cos(rad),y2=240+14*Math.sin(rad);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7890b4" strokeWidth="3.5" strokeLinecap="round"/>;
          })}
        </g>
      ))}
    </svg>
  );
}

// SVG: Dealers — photorealistic black luxury coupe on showroom platform
function SVGDealers() {
  return (
    <svg viewBox="0 0 360 300" width="340" height="280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dl_body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5a6070"/>
          <stop offset="30%" stopColor="#2a3040"/>
          <stop offset="65%" stopColor="#181c28"/>
          <stop offset="100%" stopColor="#0c0e18"/>
        </linearGradient>
        <linearGradient id="dl_roof" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a4050"/>
          <stop offset="100%" stopColor="#10121c"/>
        </linearGradient>
        <linearGradient id="dl_glass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6080a0" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#203040" stopOpacity="0.75"/>
        </linearGradient>
        <linearGradient id="dl_platform" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8f0fc"/>
          <stop offset="50%" stopColor="#c8d8f0"/>
          <stop offset="100%" stopColor="#a0b8d8"/>
        </linearGradient>
        <radialGradient id="dl_floor" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#b0c8e0" stopOpacity="0.1"/>
        </radialGradient>
        <radialGradient id="dl_shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#182030" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#182030" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="dl_wheel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a"/>
          <stop offset="100%" stopColor="#080808"/>
        </linearGradient>
        <linearGradient id="dl_rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d8e4f0"/>
          <stop offset="100%" stopColor="#8090a8"/>
        </linearGradient>
        <filter id="dl_blur"><feGaussianBlur stdDeviation="5"/></filter>
        <filter id="dl_glow"><feGaussianBlur stdDeviation="3"/></filter>
      </defs>
      {/* Showroom platform */}
      <ellipse cx="180" cy="248" rx="165" ry="28" fill="url(#dl_platform)"/>
      <ellipse cx="180" cy="248" rx="165" ry="28" fill="url(#dl_floor)"/>
      {/* Platform edge */}
      <path d="M15,248 Q15,268 180,272 Q345,268 345,248" stroke="#90a8c8" strokeWidth="1.5" fill="none" opacity="0.5"/>
      {/* Ground shadow */}
      <ellipse cx="180" cy="246" rx="140" ry="12" fill="url(#dl_shadow)" filter="url(#dl_blur)"/>
      {/* Body bottom sill */}
      <path d="M52,210 Q56,226 78,232 L280,232 Q304,226 308,210 L296,208 L64,208 Z" fill="#181c28"/>
      {/* Main body — wide low sports profile */}
      <path d="M58,210 Q62,185 80,170 L110,162 L125,142 Q140,118 172,112 L212,112 Q245,114 264,130 L280,152 L300,168 Q322,180 324,200 L322,210 Z" fill="url(#dl_body)"/>
      {/* Body highlight — shoulder crease */}
      <path d="M78,198 Q180,188 308,194" stroke="#8090b0" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
      {/* Roof — fastback slope */}
      <path d="M124,142 Q140,116 175,110 L212,110 Q245,112 265,132 L262,134 Q244,118 212,116 L175,116 Q142,120 128,144 Z" fill="url(#dl_roof)"/>
      {/* Windshield */}
      <path d="M130,144 Q145,120 176,114 L212,114 Q244,116 262,134 L252,150 Q236,132 210,128 L180,128 Q155,130 140,148 Z" fill="url(#dl_glass)"/>
      <path d="M138,147 Q150,126 178,120 L198,120 Q175,124 158,145 Z" fill="white" opacity="0.22"/>
      {/* Rear quarter glass */}
      <path d="M262,134 L265,132 L280,152 L272,162 L258,150 Z" fill="url(#dl_glass)"/>
      {/* Side window */}
      <path d="M140,148 L180,128 L210,128 L252,150 L240,165 L152,165 Z" fill="#4060a0" opacity="0.4"/>
      {/* B-pillar */}
      <rect x="198" y="130" width="4" height="35" rx="2" fill="#0c0e20" opacity="0.7"/>
      {/* A-pillar */}
      <line x1="140" y1="148" x2="130" y2="165" stroke="#1a2030" strokeWidth="3"/>
      {/* C-pillar */}
      <line x1="252" y1="150" x2="266" y2="166" stroke="#1a2030" strokeWidth="3"/>
      {/* Door line */}
      <path d="M152,165 L152,208" stroke="#304060" strokeWidth="1.5" opacity="0.5"/>
      {/* Door handle left */}
      <rect x="112" y="188" width="22" height="4" rx="2" fill="#606880"/>
      {/* Door handle right */}
      <rect x="216" y="188" width="22" height="4" rx="2" fill="#606880"/>
      {/* Headlight — LED strip */}
      <path d="M58,190 Q62,176 76,170 L100,168 L100,180 L78,182 Q65,184 62,196 Z" fill="#1a2030"/>
      <path d="M62,192 Q65,180 76,176 L98,174 L98,180 L78,182 Q66,184 64,192 Z" fill="#0a1020"/>
      {/* LED DRL */}
      <path d="M64,194 Q68,184 80,181 L96,180" stroke="#a0d0ff" strokeWidth="2" strokeLinecap="round"/>
      <path d="M66,197 Q70,188 82,185" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      {/* Headlight glow */}
      <path d="M64,194 Q68,184 80,181 L96,180" stroke="#60b0ff" strokeWidth="5" strokeLinecap="round" opacity="0.2" filter="url(#dl_glow)"/>
      {/* Tail light */}
      <path d="M300,170 Q312,162 320,155 L324,160 L322,202 Q320,210 310,210 Z" fill="#200808"/>
      <path d="M302,174 Q312,165 318,158" stroke="#ff3030" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
      <path d="M304,185 Q312,178 318,172" stroke="#ff6060" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      {/* Front bumper with splitter */}
      <path d="M54,208 Q58,224 78,230 L108,232 L108,226 L82,224 Q65,220 60,208 Z" fill="#1a2030"/>
      <rect x="56" y="218" width="52" height="5" rx="2" fill="#0a1020"/>
      {/* Rear bumper */}
      <path d="M306,208 Q302,224 282,230 L252,232 L252,226 L278,224 Q295,220 302,208 Z" fill="#1a2030"/>
      {/* Side mirror */}
      <path d="M100,168 L93,165 L91,160 L101,160 L105,165 Z" fill="#404858"/>
      <path d="M258,152 L266,149 L268,144 L258,144 L254,149 Z" fill="#404858"/>
      {/* Wheels */}
      <circle cx="106" cy="232" r="34" fill="url(#dl_wheel)"/>
      <circle cx="106" cy="232" r="27" fill="#101010"/>
      <circle cx="106" cy="232" r="21" fill="url(#dl_rim)"/>
      <circle cx="106" cy="232" r="8" fill="#c8d8e8"/>
      {[0,40,80,120,160,200,240,280,320].map((a,i)=>{
        const rad=a*Math.PI/180,x1=106+9*Math.cos(rad),y1=232+9*Math.sin(rad),x2=106+20*Math.cos(rad),y2=232+20*Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7888a0" strokeWidth="3" strokeLinecap="round"/>;
      })}
      <circle cx="106" cy="232" r="4" fill="#a0b0c0"/>
      <circle cx="254" cy="232" r="34" fill="url(#dl_wheel)"/>
      <circle cx="254" cy="232" r="27" fill="#101010"/>
      <circle cx="254" cy="232" r="21" fill="url(#dl_rim)"/>
      <circle cx="254" cy="232" r="8" fill="#c8d8e8"/>
      {[0,40,80,120,160,200,240,280,320].map((a,i)=>{
        const rad=a*Math.PI/180,x1=254+9*Math.cos(rad),y1=232+9*Math.sin(rad),x2=254+20*Math.cos(rad),y2=232+20*Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7888a0" strokeWidth="3" strokeLinecap="round"/>;
      })}
      <circle cx="254" cy="232" r="4" fill="#a0b0c0"/>
      {/* Roof highlight */}
      <path d="M148,120 Q180,112 215,115" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.2"/>
      {/* Body gloss highlight */}
      <path d="M85,178 Q145,170 280,176" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.12"/>
    </svg>
  );
}

// SVG: OEMs — photorealistic heavy construction excavator, 3/4 view
function SVGOEMs() {
  return (
    <svg viewBox="0 0 380 300" width="360" height="280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="oe_cab" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d040"/>
          <stop offset="40%" stopColor="#e0a800"/>
          <stop offset="100%" stopColor="#b07800"/>
        </linearGradient>
        <linearGradient id="oe_arm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c030"/>
          <stop offset="100%" stopColor="#c09000"/>
        </linearGradient>
        <linearGradient id="oe_track" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4a4a4a"/>
          <stop offset="100%" stopColor="#1e1e1e"/>
        </linearGradient>
        <linearGradient id="oe_bucket" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c89018"/>
          <stop offset="100%" stopColor="#906000"/>
        </linearGradient>
        <radialGradient id="oe_shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#403010" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#403010" stopOpacity="0"/>
        </radialGradient>
        <filter id="oe_blur"><feGaussianBlur stdDeviation="5"/></filter>
      </defs>
      {/* Ground shadow */}
      <ellipse cx="190" cy="272" rx="170" ry="18" fill="url(#oe_shadow)" filter="url(#oe_blur)"/>
      {/* ── UNDERCARRIAGE / TRACKS ── */}
      {/* Left track housing */}
      <rect x="35" y="228" width="185" height="35" rx="17" fill="url(#oe_track)"/>
      <rect x="35" y="228" width="185" height="14" rx="17" fill="#5a5a5a" opacity="0.6"/>
      {/* Left track pads */}
      {[45,70,95,120,145,170,195].map((x,i)=>(
        <rect key={i} x={x} y="255" width="18" height="10" rx="3" fill="#303030" stroke="#5a5a5a" strokeWidth="1"/>
      ))}
      {/* Track sprocket front */}
      <circle cx="52" cy="245" r="16" fill="#3a3a3a"/>
      <circle cx="52" cy="245" r="10" fill="#505050"/>
      {[0,60,120,180,240,300].map((a,i)=>{
        const rad=a*Math.PI/180;
        return <line key={i} x1={52+10*Math.cos(rad)} y1={245+10*Math.sin(rad)} x2={52+15*Math.cos(rad)} y2={245+15*Math.sin(rad)} stroke="#303030" strokeWidth="4" strokeLinecap="round"/>;
      })}
      {/* Track sprocket rear */}
      <circle cx="202" cy="245" r="16" fill="#3a3a3a"/>
      <circle cx="202" cy="245" r="10" fill="#505050"/>
      {[0,60,120,180,240,300].map((a,i)=>{
        const rad=a*Math.PI/180;
        return <line key={i} x1={202+10*Math.cos(rad)} y1={245+10*Math.sin(rad)} x2={202+15*Math.cos(rad)} y2={245+15*Math.sin(rad)} stroke="#303030" strokeWidth="4" strokeLinecap="round"/>;
      })}
      {/* ── UPPER BODY ── */}
      {/* Revolving platform */}
      <ellipse cx="165" cy="228" rx="110" ry="18" fill="#c89018"/>
      <ellipse cx="165" cy="222" rx="108" ry="16" fill="#e0a800"/>
      {/* Cab body */}
      <path d="M90,222 L90,160 Q92,148 105,142 L195,142 Q208,148 210,160 L210,222 Z" fill="url(#oe_cab)"/>
      {/* Cab roof */}
      <rect x="88" y="138" width="124" height="12" rx="4" fill="#f0c820"/>
      {/* Cab front face */}
      <rect x="90" y="160" width="40" height="62" rx="2" fill="#d49820"/>
      {/* Main windshield */}
      <rect x="94" y="148" width="80" height="48" rx="4" fill="#3060a0" opacity="0.85"/>
      <rect x="96" y="150" width="76" height="44" rx="3" fill="#4070b8" opacity="0.7"/>
      {/* Windshield shine */}
      <path d="M98,154 Q120,148 165,152" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.35"/>
      <path d="M100,162 Q115,156 140,158" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
      {/* Side glass */}
      <rect x="175" y="150" width="32" height="40" rx="3" fill="#3060a0" opacity="0.8"/>
      {/* Engine hood */}
      <rect x="130" y="196" width="80" height="30" rx="3" fill="#c89018"/>
      <rect x="132" y="198" width="76" height="12" rx="2" fill="#e8b820" opacity="0.6"/>
      {/* Engine vents */}
      {[148,162,176,190].map((x,i)=>(
        <line key={i} x1={x} y1="200" x2={x} y2="220" stroke="#a07010" strokeWidth="2"/>
      ))}
      {/* Exhaust pipe */}
      <rect x="202" y="148" width="8" height="40" rx="4" fill="#505050"/>
      <rect x="203" y="148" width="4" height="40" rx="2" fill="#686868" opacity="0.5"/>
      <ellipse cx="206" cy="148" rx="4" ry="2" fill="#404040"/>
      {/* ── BOOM ARM ── */}
      {/* Boom (main arm) */}
      <path d="M180,180 Q220,145 265,90 L278,98 Q235,152 195,190 Z" fill="url(#oe_arm)"/>
      <path d="M182,178 Q222,143 266,90" stroke="#f0c820" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
      {/* Hydraulic cylinder 1 */}
      <path d="M170,200 Q200,180 235,148" stroke="#c8c8c8" strokeWidth="6" strokeLinecap="round"/>
      <path d="M172,198 Q202,178 236,146" stroke="#e8e8e8" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
      {/* Stick (forearm) */}
      <path d="M265,90 Q295,95 318,125 L308,133 Q286,105 258,98 Z" fill="url(#oe_arm)"/>
      <path d="M266,91 Q296,96 318,126" stroke="#f0c820" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
      {/* Hydraulic cylinder 2 */}
      <path d="M258,105 Q285,115 310,135" stroke="#c8c8c8" strokeWidth="5" strokeLinecap="round"/>
      <path d="M260,103 Q287,113 311,133" stroke="#e8e8e8" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
      {/* Boom joint */}
      <circle cx="265" cy="92" r="10" fill="#c89018"/>
      <circle cx="265" cy="92" r="6" fill="#e0a800"/>
      {/* Stick joint */}
      <circle cx="315" cy="130" r="9" fill="#c89018"/>
      <circle cx="315" cy="130" r="5" fill="#e0a800"/>
      {/* ── BUCKET ── */}
      <path d="M312,130 Q335,145 342,165 L330,175 Q322,160 305,148 Z" fill="url(#oe_bucket)"/>
      {/* Bucket teeth */}
      {[322,330,338].map((x,i)=>(
        <path key={i} d={`M${x},175 L${x-3},188 L${x+3},188 Z`} fill="#906000"/>
      ))}
      <path d="M310,150 Q332,160 340,172" stroke="#f0c820" strokeWidth="1.5" opacity="0.3"/>
      {/* Hydraulic hoses */}
      <path d="M188,185 Q220,165 252,108" stroke="#808080" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5,3" opacity="0.6"/>
      <path d="M262,98 Q290,108 314,132" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeDasharray="5,3" opacity="0.5"/>
      {/* Counterweight */}
      <rect x="185" y="218" width="30" height="20" rx="3" fill="#a07000"/>
      <rect x="187" y="220" width="26" height="8" rx="2" fill="#c08010" opacity="0.6"/>
    </svg>
  );
}

const NETSOL_CDN = "https://www.netsoltech.com/_ipx/f_webp&q_60/images/banners/animations";

const industrySlides = [
  { label: "Retail Lenders",     bg: "linear-gradient(145deg,#dff4fb 0%,#c5ecf7 100%)", img: `${NETSOL_CDN}/Retail.webp` },
  { label: "Brokers",            bg: "linear-gradient(145deg,#dff4fb 0%,#c5ecf7 100%)", img: `${NETSOL_CDN}/Brokers.webp` },
  { label: "Commercial Lenders", bg: "linear-gradient(145deg,#dff4fb 0%,#c5ecf7 100%)", img: `${NETSOL_CDN}/Commercial.webp` },
  { label: "Dealers",            bg: "linear-gradient(145deg,#dff4fb 0%,#c5ecf7 100%)", img: `${NETSOL_CDN}/Dealers.webp` },
  { label: "OEMs",               bg: "linear-gradient(145deg,#dff4fb 0%,#c5ecf7 100%)", img: `${NETSOL_CDN}/OEMs.webp` },
];

/* ─────────────────────────────────────────────
   Animated cycling word — slides vertically
───────────────────────────────────────────── */
function AnimatedWord({ word }: { word: string }) {
  return (
    <span
      style={{
        display: "block",
        overflow: "hidden",
        height: "1.1em",
        lineHeight: "1.1em",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "block", color: "#1A56DB" }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ─────────────────────────────────────────────
   Hero card — right panel with cycling slides
   Matches NETSOL: white/light card, label BELOW
───────────────────────────────────────────── */
function HeroCard() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % industrySlides.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const slide = industrySlides[current];

  return (
    <div className="relative flex flex-col items-center" style={{ gap: 20 }}>

      {/* Decorative vertical lines — teal, positioned to the left of card */}
      <div
        className="absolute pointer-events-none"
        style={{ left: -60, top: "6%", height: "58%", display: "flex", gap: 9, opacity: 0.6 }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{ width: 2, height: "100%", background: "#4ECDC4" }}
          />
        ))}
      </div>

      {/* Main card — 400×400 */}
      <div
        className="relative overflow-hidden"
        style={{
          width: 400,
          height: 400,
          borderRadius: "22px 110px 22px 22px",
          background: slide.bg,
          transition: "background 0.7s ease",
          boxShadow: "0 24px 72px rgba(0,0,0,0.11), 0 2px 14px rgba(0,0,0,0.07)",
        }}
      >
        {/* Illustration */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.90, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: -14 }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={slide.img}
                alt={slide.label}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Two thin teal lines below card */}
      <div className="flex flex-col gap-[6px]" style={{ width: 400 }}>
        <div style={{ height: 2, background: "#4ECDC4", borderRadius: 2, opacity: 0.7 }} />
        <div style={{ height: 2, background: "#4ECDC4", borderRadius: 2, width: "68%", opacity: 0.4 }} />
      </div>

      {/* Label below card — bold blue, larger */}
      <AnimatePresence mode="wait">
        <motion.p
          key={slide.label}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.32 }}
          style={{
            color: "#1A56DB",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: "-0.01em",
            marginTop: -2,
          }}
        >
          {slide.label}
        </motion.p>
      </AnimatePresence>

    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Hero Section — exact NETSOL layout
───────────────────────────────────────────── */
export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % cycleWords.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: 68 }}
    >
      {/* Full-width wrapper — no auto-centering so left text sits at true left */}
      <div className="w-full max-w-7xl mx-auto" style={{ paddingLeft: 40, paddingRight: 40 }}>
        {/* Outer grid: text left | card right */}
        <div
          className="grid items-center"
          style={{
            minHeight: "calc(100vh - 100px)",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
          }}
        >
          {/* ── LEFT COLUMN — flush to left edge, no extra indent ── */}
          <div
            className="flex flex-col"
            style={{ gap: 28, maxWidth: 480, paddingTop: 16 }}
          >
            {/* Tagline — short left border, lowercase, light gray */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 2,
                  height: 18,
                  background: "#9CA3AF",
                  borderRadius: 2,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  color: "#6B7280",
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                }}
              >
                Shaping Smarter Business
              </span>
            </div>

            {/* Headline — exact NETSOL: 3 lines */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                  fontWeight: 800,
                  lineHeight: 1.16,
                  color: "#1e2d3d",
                  letterSpacing: "-0.02em",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                AI-enabled ecosystems
              </h1>
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                  fontWeight: 800,
                  lineHeight: 1.16,
                  color: "#1e2d3d",
                  letterSpacing: "-0.02em",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                that make commerce
              </h1>
              <div
                style={{
                  fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                  fontWeight: 800,
                  lineHeight: 1.16,
                  color: "#0066FF",
                  letterSpacing: "-0.02em",
                  whiteSpace: "nowrap",
                }}
              >
                <AnimatedWord word={cycleWords[wordIndex]} />
              </div>
            </div>

            {/* Subtitle — smaller, lighter, single line preferred */}
            <p
              style={{
                fontSize: 15,
                color: "#4A5568",
                lineHeight: 1.65,
                maxWidth: 520,
                margin: 0,
              }}
            >
              We remove complexity from every business process with composable
              AI solutions that integrate effortlessly and scale intelligently.
            </p>

            {/* CTA — "Get in touch" pill with square arrow box, exact NETSOL style */}
            <div style={{ paddingTop: 4 }}>
              <Link href="/contact/">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "#1A56DB",
                    borderRadius: 9999,
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      padding: "13px 24px",
                      color: "white",
                      fontWeight: 600,
                      fontSize: 14,
                      letterSpacing: "0.01em",
                    }}
                  >
                    Get in touch
                  </span>
                  {/* Square icon box — exact NETSOL detail */}
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 42,
                      height: 42,
                      margin: "4px 4px 4px 0",
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.18)",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path
                        d="M2.5 12.5L12.5 2.5M12.5 2.5H5.5M12.5 2.5V9.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </motion.div>
              </Link>
            </div>
          </div>

          {/* ── RIGHT COLUMN — card pushed to right, vertically centered ── */}
          <div className="hidden lg:flex items-center justify-end" style={{ paddingRight: 8 }}>
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}
