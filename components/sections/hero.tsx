"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* Per-slide cycling words — semantically matched to each SVG illustration */
const slideWords: Record<number, string[]> = {
  0: ["transparent","efficient","scalable","discoverable","dominant"],   // SEO & Search
  1: ["intelligent","unstoppable","autonomous","adaptive","efficient"],  // AI & Automation
  2: ["profitable","engaging","impactful","compelling","viral"],         // Content Marketing
  3: ["seamless","connected","viral","influential","unstoppable"],       // Social Media
  4: ["secure","robust","future-ready","scalable","reliable"],          // Custom Software Dev
};

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 1 — SEO & SEARCH
   Dark HUD radar + glowing rank nodes + search beam
═══════════════════════════════════════════════════════════════════ */
function SVGRetailLenders() {
  return (
    <svg viewBox="0 0 540 460" width="540" height="460" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="s1_bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0a1628"/>
          <stop offset="100%" stopColor="#060d1a"/>
        </radialGradient>
        <radialGradient id="s1_glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A56DB" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#1A56DB" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="s1_node_a" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#60a5fa"/>
          <stop offset="100%" stopColor="#1A56DB"/>
        </radialGradient>
        <radialGradient id="s1_node_b" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#93c5fd"/>
          <stop offset="100%" stopColor="#2563eb"/>
        </radialGradient>
        <radialGradient id="s1_scan" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A56DB" stopOpacity="0.18"/>
          <stop offset="70%" stopColor="#1A56DB" stopOpacity="0.06"/>
          <stop offset="100%" stopColor="#1A56DB" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="s1_beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0"/>
          <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.2"/>
        </linearGradient>
        <linearGradient id="s1_bar1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1A56DB" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#60a5fa"/>
        </linearGradient>
        <linearGradient id="s1_bar2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1A56DB" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#93c5fd"/>
        </linearGradient>
        <linearGradient id="s1_bar3" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1A56DB" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
        <linearGradient id="s1_glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.07"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02"/>
        </linearGradient>
        <filter id="s1_gf" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12"/>
        </filter>
        <filter id="s1_nf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="8"/>
        </filter>
        <filter id="s1_sf" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4"/>
        </filter>
        <clipPath id="s1_clip"><rect width="540" height="460" rx="20"/></clipPath>
      </defs>
      <g clipPath="url(#s1_clip)">
        {/* Background */}
        <rect width="540" height="460" fill="url(#s1_bg)"/>
        {/* Grid */}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i=>(
          <g key={i} opacity="0.07">
            <line x1={i*45} y1="0" x2={i*45} y2="460" stroke="#60a5fa" strokeWidth="1"/>
            <line x1="0" y1={i*38} x2="540" y2={i*38} stroke="#60a5fa" strokeWidth="1"/>
          </g>
        ))}
        {/* Radar rings */}
        {[150,118,86,54,22].map((r,i)=>(
          <circle key={i} cx="270" cy="230" r={r} stroke="#1A56DB" strokeWidth={i===0?1.5:1}
            strokeOpacity={0.22+i*0.06} fill="none" strokeDasharray={i%2===0?"":"6 4"}/>
        ))}
        {/* Radar center glow */}
        <circle cx="270" cy="230" r="150" fill="url(#s1_scan)"/>
        {/* Radar sweep arm */}
        <line x1="270" y1="230" x2="390" y2="110" stroke="url(#s1_beam)" strokeWidth="2" opacity="0.9"/>
        <circle cx="270" cy="230" r="154" fill="url(#s1_glow)" filter="url(#s1_gf)"/>
        {/* Cross hairs */}
        <line x1="270" y1="82" x2="270" y2="378" stroke="#1A56DB" strokeWidth="1" opacity="0.18"/>
        <line x1="122" y1="230" x2="418" y2="230" stroke="#1A56DB" strokeWidth="1" opacity="0.18"/>
        {/* Rank node 1 — top (position 1) */}
        <circle cx="270" cy="112" r="22" fill="#1A56DB" opacity="0.18" filter="url(#s1_nf)"/>
        <circle cx="270" cy="112" r="22" fill="url(#s1_node_a)"/>
        <circle cx="270" cy="112" r="22" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.70"/>
        <text x="270" y="117" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="monospace">#1</text>
        {/* Rank node 2 — right */}
        <circle cx="390" cy="180" r="17" fill="#1d4ed8" opacity="0.18" filter="url(#s1_nf)"/>
        <circle cx="390" cy="180" r="17" fill="url(#s1_node_b)"/>
        <circle cx="390" cy="180" r="17" fill="none" stroke="#93c5fd" strokeWidth="1.2" opacity="0.60"/>
        <text x="390" y="185" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="monospace">#2</text>
        {/* Rank node 3 */}
        <circle cx="185" cy="178" r="15" fill="#2563eb" opacity="0.15" filter="url(#s1_nf)"/>
        <circle cx="185" cy="178" r="15" fill="url(#s1_node_b)"/>
        <circle cx="185" cy="178" r="15" fill="none" stroke="#93c5fd" strokeWidth="1.2" opacity="0.55"/>
        <text x="185" y="183" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="monospace">#3</text>
        {/* Connector lines */}
        <line x1="270" y1="134" x2="270" y2="230" stroke="#60a5fa" strokeWidth="1.2" opacity="0.35" strokeDasharray="4 4"/>
        <line x1="377" y1="190" x2="320" y2="230" stroke="#93c5fd" strokeWidth="1" opacity="0.30" strokeDasharray="4 4"/>
        <line x1="197" y1="188" x2="240" y2="226" stroke="#93c5fd" strokeWidth="1" opacity="0.28" strokeDasharray="4 4"/>
        {/* Magnifier glass */}
        <circle cx="380" cy="104" r="36" fill="url(#s1_node_a)" opacity="0.08"/>
        <circle cx="380" cy="104" r="36" fill="none" stroke="#60a5fa" strokeWidth="2.5" opacity="0.75"/>
        <circle cx="380" cy="104" r="27" fill="#0a1628" opacity="0.70"/>
        <circle cx="380" cy="104" r="27" fill="url(#s1_glass)"/>
        <circle cx="370" cy="95" r="6" fill="none" stroke="#bfdbfe" strokeWidth="1" opacity="0.45"/>
        <line x1="408" y1="132" x2="428" y2="154" stroke="#60a5fa" strokeWidth="3.5" strokeLinecap="round" opacity="0.80"/>
        <line x1="406" y1="130" x2="426" y2="152" stroke="#bfdbfe" strokeWidth="1.5" strokeLinecap="round" opacity="0.40"/>
        {/* Search result lines */}
        <rect x="64" y="58" width="148" height="60" rx="8" fill="url(#s1_glass)" stroke="#1A56DB" strokeWidth="1" strokeOpacity="0.30"/>
        <rect x="72" y="68" width="80" height="5" rx="2.5" fill="#60a5fa" opacity="0.55"/>
        <rect x="72" y="79" width="110" height="4" rx="2" fill="#3b82f6" opacity="0.35"/>
        <rect x="72" y="88" width="90" height="4" rx="2" fill="#3b82f6" opacity="0.25"/>
        <rect x="72" y="97" width="64" height="4" rx="2" fill="#3b82f6" opacity="0.18"/>
        <rect x="64" y="130" width="148" height="46" rx="8" fill="url(#s1_glass)" stroke="#1A56DB" strokeWidth="1" strokeOpacity="0.22"/>
        <rect x="72" y="140" width="66" height="4" rx="2" fill="#60a5fa" opacity="0.42"/>
        <rect x="72" y="150" width="106" height="4" rx="2" fill="#3b82f6" opacity="0.28"/>
        <rect x="72" y="160" width="84" height="4" rx="2" fill="#3b82f6" opacity="0.20"/>
        {/* Rank bars bottom-right */}
        <rect x="400" y="310" width="18" height="96" rx="4" fill="url(#s1_bar1)" opacity="0.90"/>
        <rect x="424" y="340" width="18" height="66" rx="4" fill="url(#s1_bar2)" opacity="0.75"/>
        <rect x="448" y="362" width="18" height="44" rx="4" fill="url(#s1_bar3)" opacity="0.65"/>
        <rect x="396" y="406" width="78" height="2" rx="1" fill="#1A56DB" opacity="0.40"/>
        {/* Glow dots on bars */}
        <circle cx="409" cy="310" r="4" fill="#60a5fa"/>
        <circle cx="409" cy="310" r="8" fill="#60a5fa" opacity="0.25" filter="url(#s1_sf)"/>
        <circle cx="433" cy="340" r="3.5" fill="#93c5fd"/>
        <circle cx="457" cy="362" r="3" fill="#60a5fa" opacity="0.80"/>
        {/* Bottom HUD bar */}
        <rect x="64" y="390" width="280" height="28" rx="6" fill="url(#s1_glass)" stroke="#1A56DB" strokeWidth="1" strokeOpacity="0.28"/>
        <rect x="74" y="398" width="42" height="4" rx="2" fill="#60a5fa" opacity="0.50"/>
        <rect x="122" y="398" width="72" height="4" rx="2" fill="#3b82f6" opacity="0.32"/>
        <rect x="200" y="398" width="54" height="4" rx="2" fill="#3b82f6" opacity="0.22"/>
        <circle cx="320" cy="404" r="5" fill="#1A56DB"/>
        <circle cx="320" cy="404" r="10" fill="#1A56DB" opacity="0.22" filter="url(#s1_sf)"/>
        <text x="320" y="408" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="monospace">●</text>
        {/* Floating label */}
        <rect x="200" y="60" width="90" height="24" rx="5" fill="#1A56DB" opacity="0.85"/>
        <text x="245" y="76" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="monospace">RANK TRACKER</text>
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 2 — AI & AUTOMATION
   Neural network + glowing synapses + floating data orbs
═══════════════════════════════════════════════════════════════════ */
function SVGBrokers() {
  return (
    <svg viewBox="0 0 540 460" width="540" height="460" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="s2_bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0d0a1e"/>
          <stop offset="100%" stopColor="#080614"/>
        </radialGradient>
        <radialGradient id="s2_core" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#a78bfa"/>
          <stop offset="100%" stopColor="#7C3AED"/>
        </radialGradient>
        <radialGradient id="s2_node" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#c4b5fd"/>
          <stop offset="100%" stopColor="#8b5cf6"/>
        </radialGradient>
        <radialGradient id="s2_orb" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ddd6fe"/>
          <stop offset="60%" stopColor="#8b5cf6"/>
          <stop offset="100%" stopColor="#5b21b6"/>
        </radialGradient>
        <radialGradient id="s2_glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.40"/>
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="s2_wire" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2"/>
        </linearGradient>
        <linearGradient id="s2_glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02"/>
        </linearGradient>
        <filter id="s2_gf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="18"/>
        </filter>
        <filter id="s2_nf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="10"/>
        </filter>
        <filter id="s2_sf" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5"/>
        </filter>
        <clipPath id="s2_clip"><rect width="540" height="460" rx="20"/></clipPath>
      </defs>
      <g clipPath="url(#s2_clip)">
        <rect width="540" height="460" fill="url(#s2_bg)"/>
        {/* Grid */}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i=>(
          <g key={i} opacity="0.06">
            <line x1={i*45} y1="0" x2={i*45} y2="460" stroke="#a78bfa" strokeWidth="1"/>
            <line x1="0" y1={i*38} x2="540" y2={i*38} stroke="#a78bfa" strokeWidth="1"/>
          </g>
        ))}
        {/* Ambient glow */}
        <circle cx="270" cy="210" r="160" fill="url(#s2_glow)" filter="url(#s2_gf)"/>
        {/* Neural layer nodes: input */}
        {[80,140,200,260,320].map((y,i)=>(
          <g key={i}>
            <circle cx="80" cy={y} r="12" fill="#7C3AED" opacity="0.15" filter="url(#s2_nf)"/>
            <circle cx="80" cy={y} r="12" fill="url(#s2_node)"/>
            <circle cx="80" cy={y} r="12" fill="none" stroke="#c4b5fd" strokeWidth="1.5" opacity="0.70"/>
            <circle cx="80" cy={y} r="5" fill="#ddd6fe" opacity="0.80"/>
          </g>
        ))}
        {/* Hidden layer 1 */}
        {[110,175,240,305].map((y,i)=>(
          <g key={i}>
            <circle cx="200" cy={y} r="14" fill="#7C3AED" opacity="0.18" filter="url(#s2_nf)"/>
            <circle cx="200" cy={y} r="14" fill="url(#s2_node)"/>
            <circle cx="200" cy={y} r="14" fill="none" stroke="#c4b5fd" strokeWidth="1.5" opacity="0.65"/>
            <circle cx="200" cy={y} r="6" fill="#ddd6fe" opacity="0.75"/>
          </g>
        ))}
        {/* Hidden layer 2 / Core */}
        {[140,220,300].map((y,i)=>(
          <g key={i}>
            <circle cx="320" cy={y} r="18" fill="#7C3AED" opacity="0.22" filter="url(#s2_nf)"/>
            <circle cx="320" cy={y} r="18" fill="url(#s2_core)"/>
            <circle cx="320" cy={y} r="18" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.75"/>
            <circle cx="320" cy={y} r="8" fill="#ede9fe" opacity="0.70"/>
          </g>
        ))}
        {/* Output */}
        {[155,255].map((y,i)=>(
          <g key={i}>
            <circle cx="440" cy={y} r="20" fill="#7C3AED" opacity="0.28" filter="url(#s2_nf)"/>
            <circle cx="440" cy={y} r="20" fill="url(#s2_orb)"/>
            <circle cx="440" cy={y} r="20" fill="none" stroke="#a78bfa" strokeWidth="2.5" opacity="0.80"/>
            <circle cx="440" cy={y} r="9" fill="white" opacity="0.60"/>
            <circle cx="440" cy={y} r="20" fill="url(#s2_glow)" filter="url(#s2_sf)"/>
          </g>
        ))}
        {/* Wires: input→h1 */}
        {[80,140,200,260,320].map((y1,a)=>
          [110,175,240,305].map((y2,b)=>(
            <line key={`${a}-${b}`} x1="92" y1={y1} x2="186" y2={y2}
              stroke="#a78bfa" strokeWidth="0.8" opacity={0.12+Math.abs(a-b)*0.02}/>
          ))
        )}
        {/* Wires: h1→h2 */}
        {[110,175,240,305].map((y1,a)=>
          [140,220,300].map((y2,b)=>(
            <line key={`${a}-${b}`} x1="214" y1={y1} x2="302" y2={y2}
              stroke="#a78bfa" strokeWidth="1" opacity={0.18+Math.abs(a-b)*0.03}/>
          ))
        )}
        {/* Wires: h2→output */}
        {[140,220,300].map((y1,a)=>
          [155,255].map((y2,b)=>(
            <line key={`${a}-${b}`} x1="338" y1={y1} x2="420" y2={y2}
              stroke="#c4b5fd" strokeWidth="1.5" opacity={0.30+b*0.08}/>
          ))
        )}
        {/* HUD panel */}
        <rect x="46" y="346" width="200" height="78" rx="10" fill="url(#s2_glass)" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.40"/>
        <text x="58" y="366" fill="#c4b5fd" fontSize="8" fontWeight="700" fontFamily="monospace" opacity="0.85">AI MODEL v3.2</text>
        <rect x="58" y="374" width="120" height="4" rx="2" fill="#a78bfa" opacity="0.55"/>
        <rect x="58" y="384" width="86" height="4" rx="2" fill="#8b5cf6" opacity="0.40"/>
        <rect x="58" y="394" width="104" height="4" rx="2" fill="#8b5cf6" opacity="0.30"/>
        <rect x="58" y="404" width="60" height="4" rx="2" fill="#8b5cf6" opacity="0.22"/>
        {/* Accuracy meter */}
        <rect x="290" y="346" width="204" height="78" rx="10" fill="url(#s2_glass)" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.35"/>
        <text x="302" y="366" fill="#c4b5fd" fontSize="8" fontWeight="700" fontFamily="monospace" opacity="0.80">ACCURACY</text>
        <text x="302" y="390" fill="#a78bfa" fontSize="22" fontWeight="800" fontFamily="monospace">98.4%</text>
        <rect x="302" y="402" width="160" height="6" rx="3" fill="#5b21b6" opacity="0.45"/>
        <rect x="302" y="402" width="157" height="6" rx="3" fill="#a78bfa" opacity="0.85"/>
        {/* Floating data badge */}
        <rect x="456" y="60" width="68" height="24" rx="6" fill="#7C3AED" opacity="0.90"/>
        <text x="490" y="76" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="monospace">TRAINING</text>
        <rect x="456" y="92" width="68" height="24" rx="6" fill="#5b21b6" opacity="0.80"/>
        <text x="490" y="108" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontWeight="700" fontFamily="monospace">INFERENCE</text>
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 3 — CONTENT MARKETING
   Holographic content hub + floating article cards + engagement pulse
═══════════════════════════════════════════════════════════════════ */
function SVGCommercialLenders() {
  return (
    <svg viewBox="0 0 540 460" width="540" height="460" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="s3_bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#061820"/>
          <stop offset="100%" stopColor="#030e14"/>
        </radialGradient>
        <radialGradient id="s3_glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0891B2" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#0891B2" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="s3_icon" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#67e8f9"/>
          <stop offset="100%" stopColor="#0891B2"/>
        </radialGradient>
        <linearGradient id="s3_card1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#164e63" stopOpacity="0.90"/>
          <stop offset="100%" stopColor="#0c3040" stopOpacity="0.95"/>
        </linearGradient>
        <linearGradient id="s3_card2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e4055" stopOpacity="0.90"/>
          <stop offset="100%" stopColor="#092535" stopOpacity="0.95"/>
        </linearGradient>
        <linearGradient id="s3_ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee"/>
          <stop offset="100%" stopColor="#0891B2"/>
        </linearGradient>
        <linearGradient id="s3_glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.07"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02"/>
        </linearGradient>
        <filter id="s3_gf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="16"/>
        </filter>
        <filter id="s3_sf" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5"/>
        </filter>
        <clipPath id="s3_clip"><rect width="540" height="460" rx="20"/></clipPath>
      </defs>
      <g clipPath="url(#s3_clip)">
        <rect width="540" height="460" fill="url(#s3_bg)"/>
        {/* Grid */}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i=>(
          <g key={i} opacity="0.06">
            <line x1={i*45} y1="0" x2={i*45} y2="460" stroke="#22d3ee" strokeWidth="1"/>
            <line x1="0" y1={i*38} x2="540" y2={i*38} stroke="#22d3ee" strokeWidth="1"/>
          </g>
        ))}
        {/* Center hub glow */}
        <circle cx="270" cy="220" r="130" fill="url(#s3_glow)" filter="url(#s3_gf)"/>
        {/* Hub rings */}
        {[90,62,36].map((r,i)=>(
          <circle key={i} cx="270" cy="220" r={r} fill="none"
            stroke={i===0?"#0891B2":"#22d3ee"} strokeWidth={i===0?2:1}
            opacity={0.18+i*0.14} strokeDasharray={i===1?"6 4":""}/>
        ))}
        {/* Center hub icon — megaphone */}
        <circle cx="270" cy="220" r="34" fill="#0891B2" opacity="0.20"/>
        <circle cx="270" cy="220" r="34" fill="none" stroke="#22d3ee" strokeWidth="2" opacity="0.70"/>
        <path d="M258,212 L278,202 L278,238 L258,228 Z" fill="url(#s3_icon)" opacity="0.90"/>
        <rect x="248" y="212" width="10" height="16" rx="3" fill="#67e8f9" opacity="0.85"/>
        {[14,20,26].map((r,i)=>(
          <path key={i} d={`M 280,${220-r*0.3} Q ${286+i*2},220 280,${220+r*0.3}`}
            stroke="#22d3ee" strokeWidth={1.8-i*0.3} fill="none" opacity={0.65-i*0.12} strokeLinecap="round"/>
        ))}
        {/* Article card 1 — top-left */}
        <rect x="46" y="58" width="164" height="108" rx="12" fill="url(#s3_card1)" stroke="#0891B2" strokeWidth="1" strokeOpacity="0.50"/>
        <rect x="46" y="58" width="164" height="28" rx="12" fill="#0891B2" opacity="0.30"/>
        <circle cx="62" cy="72" r="6" fill="#22d3ee" opacity="0.80"/>
        <text x="74" y="76" fill="#a5f3fc" fontSize="8" fontWeight="700" fontFamily="monospace">BLOG POST</text>
        <rect x="58" y="96" width="120" height="5" rx="2.5" fill="#22d3ee" opacity="0.55"/>
        <rect x="58" y="108" width="136" height="4" rx="2" fill="#67e8f9" opacity="0.32"/>
        <rect x="58" y="118" width="106" height="4" rx="2" fill="#67e8f9" opacity="0.24"/>
        <rect x="58" y="128" width="80" height="4" rx="2" fill="#67e8f9" opacity="0.18"/>
        <rect x="58" y="148" width="36" height="12" rx="4" fill="#0891B2" opacity="0.70"/>
        <text x="76" y="158" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="monospace">READ</text>
        {/* Article card 2 — top-right */}
        <rect x="330" y="48" width="164" height="98" rx="12" fill="url(#s3_card2)" stroke="#0891B2" strokeWidth="1" strokeOpacity="0.45"/>
        <rect x="330" y="48" width="164" height="28" rx="12" fill="#0891B2" opacity="0.25"/>
        <circle cx="346" cy="62" r="6" fill="#22d3ee" opacity="0.75"/>
        <text x="358" y="66" fill="#a5f3fc" fontSize="8" fontWeight="700" fontFamily="monospace">CASE STUDY</text>
        <rect x="342" y="86" width="110" height="5" rx="2.5" fill="#22d3ee" opacity="0.48"/>
        <rect x="342" y="98" width="140" height="4" rx="2" fill="#67e8f9" opacity="0.28"/>
        <rect x="342" y="108" width="116" height="4" rx="2" fill="#67e8f9" opacity="0.20"/>
        <rect x="342" y="126" width="48" height="12" rx="4" fill="#0891B2" opacity="0.65"/>
        <text x="366" y="136" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="monospace">EXPLORE</text>
        {/* Article card 3 — bottom-left */}
        <rect x="52" y="310" width="158" height="100" rx="12" fill="url(#s3_card1)" stroke="#0891B2" strokeWidth="1" strokeOpacity="0.40"/>
        <rect x="52" y="310" width="158" height="28" rx="12" fill="#0891B2" opacity="0.22"/>
        <circle cx="68" cy="324" r="6" fill="#22d3ee" opacity="0.70"/>
        <text x="80" y="328" fill="#a5f3fc" fontSize="8" fontWeight="700" fontFamily="monospace">WHITE PAPER</text>
        <rect x="64" y="350" width="102" height="4" rx="2" fill="#22d3ee" opacity="0.42"/>
        <rect x="64" y="360" width="128" height="4" rx="2" fill="#67e8f9" opacity="0.25"/>
        <rect x="64" y="370" width="94" height="4" rx="2" fill="#67e8f9" opacity="0.18"/>
        <rect x="64" y="390" width="52" height="12" rx="4" fill="#0891B2" opacity="0.62"/>
        <text x="90" y="400" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="monospace">DOWNLOAD</text>
        {/* Article card 4 — bottom-right */}
        <rect x="330" y="316" width="158" height="96" rx="12" fill="url(#s3_card2)" stroke="#0891B2" strokeWidth="1" strokeOpacity="0.38"/>
        <rect x="330" y="316" width="158" height="28" rx="12" fill="#0891B2" opacity="0.20"/>
        <circle cx="346" cy="330" r="6" fill="#22d3ee" opacity="0.65"/>
        <text x="358" y="334" fill="#a5f3fc" fontSize="8" fontWeight="700" fontFamily="monospace">NEWSLETTER</text>
        <rect x="342" y="356" width="108" height="4" rx="2" fill="#22d3ee" opacity="0.38"/>
        <rect x="342" y="366" width="130" height="4" rx="2" fill="#67e8f9" opacity="0.22"/>
        <rect x="342" y="376" width="98" height="4" rx="2" fill="#67e8f9" opacity="0.16"/>
        <rect x="342" y="396" width="60" height="12" rx="4" fill="#0891B2" opacity="0.58"/>
        <text x="372" y="406" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="monospace">SUBSCRIBE</text>
        {/* Connector lines hub→cards */}
        <line x1="210" y1="175" x2="179" y2="145" stroke="#22d3ee" strokeWidth="1.2" opacity="0.35" strokeDasharray="5 4"/>
        <line x1="320" y1="185" x2="365" y2="145" stroke="#22d3ee" strokeWidth="1.2" opacity="0.32" strokeDasharray="5 4"/>
        <line x1="218" y1="265" x2="176" y2="310" stroke="#22d3ee" strokeWidth="1.2" opacity="0.28" strokeDasharray="5 4"/>
        <line x1="322" y1="262" x2="360" y2="316" stroke="#22d3ee" strokeWidth="1.2" opacity="0.26" strokeDasharray="5 4"/>
        {/* Engagement stats */}
        <rect x="200" y="390" width="140" height="34" rx="8" fill="url(#s3_glass)" stroke="#0891B2" strokeWidth="1" strokeOpacity="0.45"/>
        <text x="218" y="404" fill="#67e8f9" fontSize="7" fontWeight="700" fontFamily="monospace">REACH</text>
        <text x="218" y="416" fill="#22d3ee" fontSize="11" fontWeight="800" fontFamily="monospace">2.4M</text>
        <text x="290" y="404" fill="#67e8f9" fontSize="7" fontWeight="700" fontFamily="monospace">CVR</text>
        <text x="290" y="416" fill="#22d3ee" fontSize="11" fontWeight="800" fontFamily="monospace">18.7%</text>
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 4 — SOCIAL MEDIA
   Social graph network + glowing engagement + notification stream
═══════════════════════════════════════════════════════════════════ */
function SVGDealers() {
  return (
    <svg viewBox="0 0 540 460" width="540" height="460" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="s4_bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a0814"/>
          <stop offset="100%" stopColor="#10040d"/>
        </radialGradient>
        <radialGradient id="s4_glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E11D48" stopOpacity="0.32"/>
          <stop offset="100%" stopColor="#E11D48" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="s4_node_a" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#fb7185"/>
          <stop offset="100%" stopColor="#E11D48"/>
        </radialGradient>
        <radialGradient id="s4_node_b" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#fda4af"/>
          <stop offset="100%" stopColor="#f43f5e"/>
        </radialGradient>
        <linearGradient id="s4_glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02"/>
        </linearGradient>
        <linearGradient id="s4_bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#E11D48" stopOpacity="0.25"/>
          <stop offset="100%" stopColor="#fb7185"/>
        </linearGradient>
        <filter id="s4_gf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="18"/>
        </filter>
        <filter id="s4_nf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="10"/>
        </filter>
        <filter id="s4_sf" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5"/>
        </filter>
        <clipPath id="s4_clip"><rect width="540" height="460" rx="20"/></clipPath>
      </defs>
      <g clipPath="url(#s4_clip)">
        <rect width="540" height="460" fill="url(#s4_bg)"/>
        {/* Grid */}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i=>(
          <g key={i} opacity="0.06">
            <line x1={i*45} y1="0" x2={i*45} y2="460" stroke="#fb7185" strokeWidth="1"/>
            <line x1="0" y1={i*38} x2="540" y2={i*38} stroke="#fb7185" strokeWidth="1"/>
          </g>
        ))}
        {/* Center glow */}
        <circle cx="270" cy="218" r="140" fill="url(#s4_glow)" filter="url(#s4_gf)"/>
        {/* Network edges */}
        {[
          [270,218,118,118],[270,218,422,118],[270,218,118,318],[270,218,422,318],
          [270,218,270,80],[270,218,270,356],[270,218,80,218],[270,218,460,218],
          [118,118,270,80],[422,118,270,80],[118,318,270,356],[422,318,270,356],
          [118,118,80,218],[422,118,460,218],[118,318,80,218],[422,318,460,218],
        ].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#E11D48" strokeWidth="1" opacity={0.20+Math.floor(i/4)*0.03}
            strokeDasharray={i>7?"5 4":""}/>
        ))}
        {/* Outer nodes */}
        {[
          [118,118,16],[422,118,16],[118,318,16],[422,318,16],
          [270,80,14],[270,356,14],[80,218,14],[460,218,14],
        ].map(([cx,cy,r],i)=>(
          <g key={i}>
            <circle cx={cx} cy={cy} r={r+6} fill="#E11D48" opacity="0.12" filter="url(#s4_nf)"/>
            <circle cx={cx} cy={cy} r={r} fill="url(#s4_node_b)"/>
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#fda4af" strokeWidth="1.5" opacity="0.65"/>
            <circle cx={cx} cy={cy} r={r*0.38} fill="white" opacity="0.70"/>
          </g>
        ))}
        {/* Central hub */}
        <circle cx="270" cy="218" r="38" fill="#E11D48" opacity="0.20" filter="url(#s4_nf)"/>
        <circle cx="270" cy="218" r="38" fill="url(#s4_node_a)"/>
        <circle cx="270" cy="218" r="38" fill="none" stroke="#fb7185" strokeWidth="2.5" opacity="0.80"/>
        <circle cx="270" cy="218" r="38" fill="url(#s4_glow)" filter="url(s4_sf)"/>
        {/* Heart icon center */}
        <path d="M270,210 C270,210 260,200 252,206 C244,212 248,224 270,234 C292,224 296,212 288,206 C280,200 270,210 270,210 Z"
          fill="white" opacity="0.75"/>
        {/* Engagement metrics panel */}
        <rect x="46" y="370" width="190" height="62" rx="10" fill="url(#s4_glass)" stroke="#E11D48" strokeWidth="1" strokeOpacity="0.40"/>
        <text x="58" y="390" fill="#fda4af" fontSize="8" fontWeight="700" fontFamily="monospace">ENGAGEMENT</text>
        <text x="58" y="412" fill="#fb7185" fontSize="20" fontWeight="800" fontFamily="monospace">+284%</text>
        <text x="176" y="412" fill="#fda4af" fontSize="9" fontWeight="600" fontFamily="monospace">YoY</text>
        {/* Notifications stream */}
        <rect x="304" y="370" width="190" height="62" rx="10" fill="url(#s4_glass)" stroke="#E11D48" strokeWidth="1" strokeOpacity="0.38"/>
        <text x="316" y="388" fill="#fda4af" fontSize="8" fontWeight="700" fontFamily="monospace">FOLLOWERS</text>
        <text x="316" y="410" fill="#fb7185" fontSize="20" fontWeight="800" fontFamily="monospace">1.2M</text>
        <circle cx="462" cy="400" r="14" fill="#E11D48" opacity="0.75"/>
        <text x="462" y="404" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">+</text>
        {/* Floating notification badges */}
        {[
          [440,80,"+2.4k","LIKES"],[64,160,"+891","SHARES"],[440,280,"+412","COMMENTS"],
        ].map(([cx,cy,val,lbl],i)=>(
          <g key={i}>
            <rect x={Number(cx)-42} y={Number(cy)-18} width="84" height="36" rx="8"
              fill="url(#s4_glass)" stroke="#E11D48" strokeWidth="1" strokeOpacity="0.40"/>
            <text x={Number(cx)} y={Number(cy)-4} textAnchor="middle" fill="#fb7185" fontSize="10"
              fontWeight="800" fontFamily="monospace">{val}</text>
            <text x={Number(cx)} y={Number(cy)+10} textAnchor="middle" fill="#fda4af" fontSize="7"
              fontWeight="600" fontFamily="monospace">{lbl}</text>
          </g>
        ))}
        {/* Platform badges */}
        {[
          [64,80,"IG"],[64,108,"TK"],[64,136,"YT"],
        ].map(([cx,cy,lbl],i)=>(
          <g key={i}>
            <rect x={Number(cx)-14} y={Number(cy)-10} width="28" height="20" rx="5"
              fill="#E11D48" opacity={0.70-i*0.08}/>
            <text x={Number(cx)} y={Number(cy)+4} textAnchor="middle" fill="white" fontSize="8"
              fontWeight="700" fontFamily="monospace">{lbl}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SLIDE 5 — CUSTOM SOFTWARE DEVELOPMENT
   Dark terminal + code editor + pipeline nodes + circuit traces
═══════════════════════════════════════════════════════════════════ */
function SVGOEMs() {
  return (
    <svg viewBox="0 0 540 460" width="540" height="460" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="s5_bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#061410"/>
          <stop offset="100%" stopColor="#030d09"/>
        </radialGradient>
        <radialGradient id="s5_glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#059669" stopOpacity="0.30"/>
          <stop offset="100%" stopColor="#059669" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="s5_node" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#6ee7b7"/>
          <stop offset="100%" stopColor="#059669"/>
        </radialGradient>
        <linearGradient id="s5_glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.07"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02"/>
        </linearGradient>
        <linearGradient id="s5_win" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#052e1c" stopOpacity="0.96"/>
          <stop offset="100%" stopColor="#031809" stopOpacity="0.98"/>
        </linearGradient>
        <linearGradient id="s5_term" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#021208" stopOpacity="0.98"/>
          <stop offset="100%" stopColor="#010a04" stopOpacity="0.99"/>
        </linearGradient>
        <filter id="s5_gf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="16"/>
        </filter>
        <filter id="s5_nf" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="8"/>
        </filter>
        <filter id="s5_sf" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4"/>
        </filter>
        <clipPath id="s5_clip"><rect width="540" height="460" rx="20"/></clipPath>
      </defs>
      <g clipPath="url(#s5_clip)">
        <rect width="540" height="460" fill="url(#s5_bg)"/>
        {/* Grid */}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i=>(
          <g key={i} opacity="0.06">
            <line x1={i*45} y1="0" x2={i*45} y2="460" stroke="#059669" strokeWidth="1"/>
            <line x1="0" y1={i*38} x2="540" y2={i*38} stroke="#059669" strokeWidth="1"/>
          </g>
        ))}
        {/* Ambient glow */}
        <circle cx="270" cy="230" r="180" fill="url(#s5_glow)" filter="url(#s5_gf)"/>
        {/* Main code editor window */}
        <rect x="46" y="46" width="310" height="238" rx="12" fill="url(#s5_win)" stroke="#059669" strokeWidth="1.2" strokeOpacity="0.55"/>
        {/* Window title bar */}
        <rect x="46" y="46" width="310" height="28" rx="12" fill="#059669" opacity="0.22"/>
        <circle cx="64" cy="60" r="5" fill="#ef4444" opacity="0.80"/>
        <circle cx="80" cy="60" r="5" fill="#f59e0b" opacity="0.80"/>
        <circle cx="96" cy="60" r="5" fill="#22c55e" opacity="0.80"/>
        <text x="200" y="64" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontWeight="700" fontFamily="monospace" opacity="0.70">keysol-app / src / index.ts</text>
        {/* Line numbers */}
        {[0,1,2,3,4,5,6,7,8,9,10].map(i=>(
          <text key={i} x="62" y={90+i*17} fill="#059669" fontSize="8" fontFamily="monospace" opacity="0.45" textAnchor="middle">{i+1}</text>
        ))}
        {/* Code lines */}
        <text x="78" y="90" fill="#6ee7b7" fontSize="8.5" fontFamily="monospace" opacity="0.80">import</text>
        <text x="116" y="90" fill="#a7f3d0" fontSize="8.5" fontFamily="monospace" opacity="0.65"> {"{"} KeySolAI {"}"} </text>
        <text x="192" y="90" fill="#6ee7b7" fontSize="8.5" fontFamily="monospace" opacity="0.80">from</text>
        <text x="220" y="90" fill="#fbbf24" fontSize="8.5" fontFamily="monospace" opacity="0.70"> &apos;@keysol/core&apos;</text>
        <text x="78" y="107" fill="#a7f3d0" fontSize="8.5" fontFamily="monospace" opacity="0.65">const</text>
        <text x="110" y="107" fill="#6ee7b7" fontSize="8.5" fontFamily="monospace" opacity="0.75"> api</text>
        <text x="126" y="107" fill="#a7f3d0" fontSize="8.5" fontFamily="monospace" opacity="0.55"> =</text>
        <text x="138" y="107" fill="#6ee7b7" fontSize="8.5" fontFamily="monospace" opacity="0.75"> new KeySolAI({"{"}</text>
        <text x="88" y="124" fill="#fbbf24" fontSize="8.5" fontFamily="monospace" opacity="0.65">  model:</text>
        <text x="136" y="124" fill="#a7f3d0" fontSize="8.5" fontFamily="monospace" opacity="0.60"> &apos;gpt-4-turbo&apos;,</text>
        <text x="88" y="141" fill="#fbbf24" fontSize="8.5" fontFamily="monospace" opacity="0.60">  stream:</text>
        <text x="136" y="141" fill="#fb923c" fontSize="8.5" fontFamily="monospace" opacity="0.65"> true,</text>
        <text x="88" y="158" fill="#fbbf24" fontSize="8.5" fontFamily="monospace" opacity="0.55">  tools:</text>
        <text x="134" y="158" fill="#a7f3d0" fontSize="8.5" fontFamily="monospace" opacity="0.50"> [automate, deploy],</text>
        <text x="78" y="175" fill="#6ee7b7" fontSize="8.5" fontFamily="monospace" opacity="0.70">{"}"});</text>
        <rect x="78" y="183" width="140" height="8.5" rx="2" fill="#059669" opacity="0.12"/>
        <text x="78" y="192" fill="#60a5fa" fontSize="8.5" fontFamily="monospace" opacity="0.72">await</text>
        <text x="114" y="192" fill="#a7f3d0" fontSize="8.5" fontFamily="monospace" opacity="0.65"> api.deploy({"{"}</text>
        <text x="88" y="209" fill="#fbbf24" fontSize="8.5" fontFamily="monospace" opacity="0.58">  env:</text>
        <text x="116" y="209" fill="#a7f3d0" fontSize="8.5" fontFamily="monospace" opacity="0.52"> &apos;production&apos;,</text>
        <text x="88" y="226" fill="#fbbf24" fontSize="8.5" fontFamily="monospace" opacity="0.52">  scale:</text>
        <text x="122" y="226" fill="#fb923c" fontSize="8.5" fontFamily="monospace" opacity="0.58"> &apos;auto&apos;,</text>
        <text x="78" y="243" fill="#6ee7b7" fontSize="8.5" fontFamily="monospace" opacity="0.65">{"}"});</text>
        {/* Cursor blink */}
        <rect x="100" y="248" width="6" height="11" rx="1" fill="#059669" opacity="0.90"/>
        {/* Terminal window */}
        <rect x="46" y="298" width="310" height="128" rx="12" fill="url(#s5_term)" stroke="#059669" strokeWidth="1" strokeOpacity="0.45"/>
        <rect x="46" y="298" width="310" height="22" rx="12" fill="#059669" opacity="0.18"/>
        <text x="200" y="313" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontWeight="700" fontFamily="monospace" opacity="0.65">TERMINAL</text>
        <text x="58" y="336" fill="#059669" fontSize="8.5" fontFamily="monospace" opacity="0.80">$</text>
        <text x="68" y="336" fill="#a7f3d0" fontSize="8.5" fontFamily="monospace" opacity="0.70"> npm run deploy --prod</text>
        <text x="58" y="353" fill="#6ee7b7" fontSize="8.5" fontFamily="monospace" opacity="0.75">✓ Build complete</text>
        <text x="58" y="370" fill="#6ee7b7" fontSize="8.5" fontFamily="monospace" opacity="0.65">✓ Tests passed (142/142)</text>
        <text x="58" y="387" fill="#6ee7b7" fontSize="8.5" fontFamily="monospace" opacity="0.60">✓ Deploying to production…</text>
        <text x="58" y="404" fill="#4ade80" fontSize="8.5" fontFamily="monospace" opacity="0.90">✓ LIVE at keysolglobal.com</text>
        {/* CI/CD pipeline */}
        <rect x="368" y="46" width="126" height="338" rx="12" fill="url(#s5_glass)" stroke="#059669" strokeWidth="1" strokeOpacity="0.40"/>
        <text x="431" y="68" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontWeight="700" fontFamily="monospace" opacity="0.80">PIPELINE</text>
        {[
          ["BUILD","#4ade80",true],["TEST","#4ade80",true],["SCAN","#4ade80",true],
          ["STAGE","#fbbf24",false],["DEPLOY","#059669",false],
        ].map(([lbl,color,done],i)=>(
          <g key={i}>
            <circle cx="410" cy={94+i*56} r="14" fill={String(color)} opacity={done?0.20:0.10}
              filter="url(#s5_nf)"/>
            <circle cx="410" cy={94+i*56} r="14" fill="none" stroke={String(color)}
              strokeWidth="1.5" opacity={done?0.80:0.45}/>
            <text x="410" y={94+i*56+4} textAnchor="middle" fill={done?"#4ade80":"#fbbf24"}
              fontSize="7" fontWeight="700" fontFamily="monospace" opacity="0.90">
              {done?"✓":"⟳"}
            </text>
            <text x="434" y={94+i*56+4} fill={String(color)} fontSize="8" fontWeight="700"
              fontFamily="monospace" opacity={done?0.80:0.55}>{lbl}</text>
            {i < 4 && <line x1="410" y1={108+i*56} x2="410" y2={80+i*56+56}
              stroke={String(color)} strokeWidth="1.5" opacity={done?0.50:0.25}
              strokeDasharray={done?"":"4 3"}/>}
          </g>
        ))}
        {/* Glow dots */}
        <circle cx="410" cy="94" r="5" fill="#4ade80" filter="url(#s5_sf)"/>
        <circle cx="410" cy="150" r="5" fill="#4ade80" filter="url(#s5_sf)"/>
        <circle cx="410" cy="206" r="5" fill="#4ade80" filter="url(#s5_sf)"/>
      </g>
    </svg>
  );
}

const industrySlides = [
  { label: "SEO & Search",                color: "#1A56DB", bg: "linear-gradient(145deg,#0a1628 0%,#0d1f3c 100%)", svg: <SVGRetailLenders /> },
  { label: "AI & Automation",             color: "#7C3AED", bg: "linear-gradient(145deg,#0d0a1e 0%,#160e2e 100%)", svg: <SVGBrokers /> },
  { label: "Content Marketing",           color: "#0891B2", bg: "linear-gradient(145deg,#061820 0%,#0a2535 100%)", svg: <SVGCommercialLenders /> },
  { label: "Social Media",                color: "#E11D48", bg: "linear-gradient(145deg,#1a0814 0%,#280a1c 100%)", svg: <SVGDealers /> },
  { label: "Custom Software Development", color: "#059669", bg: "linear-gradient(145deg,#061410 0%,#0a2018 100%)", svg: <SVGOEMs /> },
];

/* Shared transition config used by every animated text element */
const SLIDE_TRANSITION = { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const };
const SLIDE_INTERVAL   = 3000; /* ms — single master clock */

function AnimatedWord({ word, color }: { word: string; color: string }) {
  return (
    <span style={{ display:"block", overflow:"hidden", height:"1.1em", lineHeight:"1.1em" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          initial={{ y:"100%", opacity:0 }}
          animate={{ y:"0%", opacity:1 }}
          exit={{ y:"-100%", opacity:0 }}
          transition={SLIDE_TRANSITION}
          style={{ display:"block", color }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function HeroCard({ current }: { current: number }) {
  const slide = industrySlides[current];
  return (
    <div className="relative flex flex-col items-center" style={{ gap:20 }}>
      <div className="absolute pointer-events-none" style={{ left:-60, top:"6%", height:"58%", display:"flex", gap:9, opacity:0.5 }}>
        {[...Array(5)].map((_,i) => <div key={i} className="rounded-full" style={{ width:2, height:"100%", background:"#4ECDC4" }}/>)}
      </div>
      <div
        className="relative overflow-hidden"
        style={{
          width:400, height:400,
          borderRadius:"22px 110px 22px 22px",
          background: slide.bg,
          transition:"background 0.7s ease",
          boxShadow:"0 0 0 1px rgba(255,255,255,0.06), 0 24px 72px rgba(0,0,0,0.45), 0 2px 14px rgba(0,0,0,0.30)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity:0, scale:0.90, y:18 }}
            animate={{ opacity:1, scale:1, y:0 }}
            exit={{ opacity:0, scale:0.93, y:-14 }}
            transition={SLIDE_TRANSITION}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div style={{ width:"92%", height:"92%", display:"flex", alignItems:"center", justifyContent:"center" }}>
              {slide.svg}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex flex-col gap-[6px]" style={{ width:400 }}>
        <div style={{ height:2, background:"#4ECDC4", borderRadius:2, opacity:0.7 }}/>
        <div style={{ height:2, background:"#4ECDC4", borderRadius:2, width:"68%", opacity:0.4 }}/>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={current}
          initial={{ opacity:0, y:8 }}
          animate={{ opacity:1, y:0 }}
          exit={{ opacity:0, y:-8 }}
          transition={SLIDE_TRANSITION}
          style={{ color:slide.color, fontWeight:700, fontSize:20, letterSpacing:"-0.01em", marginTop:-2 }}
        >
          {slide.label}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  const [step, setStep] = useState(0);
  /* One master clock drives everything in lockstep */
  useEffect(() => {
    const t = setInterval(() => setStep(p => p + 1), SLIDE_INTERVAL);
    return () => clearInterval(t);
  }, []);
  const current    = step % industrySlides.length;
  const words      = slideWords[current];
  const wordIndex  = Math.floor(step / industrySlides.length) % words.length;
  const slideColor = industrySlides[current].color;
  return (
    <section className="relative bg-white overflow-hidden" style={{ paddingTop:68 }}>
      <div className="w-full max-w-7xl mx-auto" style={{ paddingLeft:40, paddingRight:40 }}>
        <div className="grid items-center" style={{ minHeight:"calc(100vh - 100px)", gridTemplateColumns:"1fr 1fr", gap:48 }}>
          <div className="flex flex-col" style={{ gap:28, maxWidth:480, paddingTop:16 }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:2, height:18, background:"#9CA3AF", borderRadius:2, flexShrink:0 }}/>
              <span style={{ fontSize:13, color:"#6B7280", fontWeight:400, letterSpacing:"0.01em" }}>Shaping Smarter Business</span>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
              {["AI-enabled ecosystems","that make commerce"].map((line,i) => (
                <h1 key={i} style={{ fontSize:"clamp(2.4rem,4vw,3.4rem)", fontWeight:800, lineHeight:1.16, color:"#1e2d3d", letterSpacing:"-0.02em", margin:0, whiteSpace:"nowrap" }}>{line}</h1>
              ))}
              <div style={{ fontSize:"clamp(2.4rem,4vw,3.4rem)", fontWeight:800, lineHeight:1.16, letterSpacing:"-0.02em", whiteSpace:"nowrap" }}>
                <AnimatedWord word={words[wordIndex]} color={slideColor}/>
              </div>
            </div>
            <p style={{ fontSize:15, color:"#4A5568", lineHeight:1.65, maxWidth:520, margin:0 }}>
              We remove complexity from every business process with composable AI solutions that integrate effortlessly and scale intelligently.
            </p>
            <div style={{ paddingTop:4 }}>
              <Link href="/contact/">
                <motion.div
                  whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                  style={{ display:"inline-flex", alignItems:"center", background:"#1A56DB", borderRadius:9999, overflow:"hidden", cursor:"pointer" }}
                >
                  <span style={{ padding:"13px 24px", color:"white", fontWeight:600, fontSize:14, letterSpacing:"0.01em" }}>Get in touch</span>
                  <span style={{ display:"flex", alignItems:"center", justifyContent:"center", width:42, height:42, margin:"4px 4px 4px 0", borderRadius:8, background:"rgba(255,255,255,0.18)", flexShrink:0 }}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M2.5 12.5L12.5 2.5M12.5 2.5H5.5M12.5 2.5V9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </motion.div>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-end" style={{ paddingRight:8 }}>
            <HeroCard current={current}/>
          </div>
        </div>
      </div>
    </section>
  );
}
