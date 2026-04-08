"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

/* ─── NLP Engine ──────────────────────────────────────────────────────────── */
type BotResponse = { text: string; links?: { label: string; href: string }[]; topic?: string; chips?: string[] };

interface Intent {
  id: string;
  keywords: { terms: string[]; weight: number }[];
  response: BotResponse;
}

/* ── Context-sensitive follow-up chips per topic ── */
const TOPIC_CHIPS: Record<string, string[]> = {
  "AI & Automation": ["Show me use cases", "What's the cost?", "Book a consultation", "How long does it take?"],
  "Software & Enterprise Solutions": ["Tech stack?", "ERP vs CRM?", "Get a quote", "See case studies"],
  "Digital Growth": ["SEO vs Paid Ads", "Show me ROI stats", "Content strategy", "Book a strategy call"],
  "No-Code / Low-Code": ["Best for MVPs?", "Webflow vs Bubble", "How fast?", "Pricing?"],
  "Emerging Tech": ["Blockchain use cases", "IoT for my business", "AR/VR examples", "Talk to an expert"],
  "E-commerce": ["Shopify vs headless", "Conversion tips", "Get a quote", "Migration help"],
  "Consultancy": ["What's included?", "How long is an audit?", "Pricing", "Book a call"],
  "Pricing": ["Fixed vs retainer?", "Get a free quote", "What's included?", "Talk to sales"],
  "About KeySol Global": ["Meet the team", "Our process", "See our work", "Get in touch"],
  "Contact": ["Book a free call", "Send a message", "Email us", "WhatsApp?"],
  "Our Process": ["How long does it take?", "Do you use Agile?", "Post-launch support?", "Get started"],
  "Insights & Resources": ["Latest AI articles", "Case studies", "Download a guide", "Subscribe"],
  "Solutions": ["FinTech solutions", "Healthcare tech", "Retail & E-commerce", "Startup packages"],
  "Our Team": ["Meet the leadership", "Engineering team", "Work with us", "Our culture"],
  "Careers": ["Open roles", "Tech stack?", "Work culture", "Apply now"],
  "Case Studies": ["AI case studies", "E-commerce results", "Digital growth wins", "Software projects"],
};

const DEFAULT_CHIPS = [
  "What services do you offer?",
  "Tell me about AI & Automation",
  "How does your process work?",
  "What does it cost?",
  "Book a free consultation",
];

const INTENTS: Intent[] = [
  /* ── Greetings ─────────────────────────────────────────── */
  {
    id: "greeting",
    keywords: [
      { terms: ["hi","hello","hey","howdy","greetings","good morning","good afternoon","good evening","sup","yo","hiya","what's up","wassup","helo"], weight: 10 },
    ],
    response: {
      topic: "greeting",
      text: "Hello! 👋 I'm **Kenza**, KeySol Global's AI assistant.\n\nI can help you with:\n• Our services (AI, Software, Digital Growth & more)\n• Company information and our process\n• Pricing guidance and getting a quote\n• Connecting you with the right team member\n\nWhat would you like to explore today?",
      chips: ["What services do you offer?", "How does your process work?", "What does it cost?", "Book a consultation"],
    },
  },

  /* ── AI & Automation ───────────────────────────────────── */
  {
    id: "ai_automation",
    keywords: [
      { terms: ["ai","artificial intelligence","machine learning","ml","deep learning","neural network","llm","gpt","chatgpt","openai","generative ai","large language model","gen ai"], weight: 9 },
      { terms: ["automation","automate","automated","workflow automation","rpa","robotic process","process automation"], weight: 8 },
      { terms: ["chatbot","virtual assistant","conversational ai","bot","agentic","ai agent","autonomous agent","intelligent agent"], weight: 8 },
      { terms: ["nlp","natural language","predictive analytics","data science","computer vision","image recognition"], weight: 7 },
      { terms: ["hyperautomation","intelligent automation","business automation","ai solution","ai platform"], weight: 7 },
    ],
    response: {
      topic: "AI & Automation",
      text: "Our **AI & Automation** practice delivers transformative, production-ready AI solutions:\n\n🤖 **Agentic AI Systems**\nAutonomous AI agents that plan, reason, and execute multi-step tasks — from research agents to full workflow orchestrators. Built on the latest LLM frameworks.\n\n💬 **Intelligent Chatbots & Virtual Assistants**\nContext-aware conversational AI for customer support, sales, HR, and operations. Typically deflects 60–80% of inbound queries automatically.\n\n⚙️ **Business Process Automation (BPA)**\nEnd-to-end automation of repetitive workflows — document processing, approvals, data routing, reporting. Average **75% reduction** in manual effort.\n\n📊 **ML & Predictive Analytics**\nCustom models for demand forecasting, anomaly detection, lead scoring, and real-time insights.\n\n🔗 **AI Integration**\nEmbedding AI into your existing CRM, ERP, and communication tools — intelligence within your current workflow.\n\nClients typically see **40–70% operational cost reduction** within 6 months.",
      links: [
        { label: "Explore AI & Automation →", href: "/services/ai-automation/" },
        { label: "Book a Free AI Consultation →", href: "/consultancy/" },
      ],
      chips: ["What does it cost?", "Show me use cases", "How long to implement?", "Book a consultation"],
    },
  },

  /* ── Custom Software / Engineering ────────────────────── */
  {
    id: "software_engineering",
    keywords: [
      { terms: ["software","custom software","application","app","web app","mobile app","platform","saas","build","develop","engineer","development"], weight: 8 },
      { terms: ["erp","enterprise resource planning","crm","customer relationship","microsoft dynamics","salesforce","odoo","sap","netsuite"], weight: 9 },
      { terms: ["react","next.js","node","python","typescript","api","backend","frontend","full stack","microservices","cloud native","rest api","graphql"], weight: 7 },
      { terms: ["database","postgres","mongodb","mysql","redis","cloud","aws","azure","gcp","devops","docker","kubernetes","ci/cd"], weight: 6 },
      { terms: ["enterprise solution","enterprise software","business software","legacy modernisation","digital transformation","legacy migration"], weight: 8 },
    ],
    response: {
      topic: "Software & Enterprise Solutions",
      text: "Our **Software & Enterprise Solutions** division builds technology that truly scales:\n\n🌐 **Custom SaaS Platforms**\nCloud-native web and mobile applications designed precisely around your business logic — not off-the-shelf compromises. Architected for performance, security, and growth.\n\n🏢 **ERP Systems**\nFull-cycle ERP covering finance, HR, supply chain, and inventory. We work with custom builds, Odoo, SAP, and Microsoft Dynamics.\n\n📋 **CRM Solutions**\nIntelligent sales pipeline management with automated follow-ups, lead scoring, and deep analytics. Custom or Salesforce/HubSpot implementation.\n\n🔌 **API & Systems Integration**\nConnecting disparate tools into one unified ecosystem — eliminating data silos and manual transfers between platforms.\n\n🔄 **Legacy Modernisation**\nMigrating outdated systems to modern, maintainable architectures without disrupting operations.\n\n**Our Stack:** Next.js, React, Node.js, Python, TypeScript, PostgreSQL, AWS/Azure — always chosen to fit your needs.",
      links: [
        { label: "View Software Services →", href: "/services/software-engineering/" },
        { label: "Discuss Your Project →", href: "/contact/" },
      ],
      chips: ["What ERP systems do you support?", "Cloud vs on-premise?", "Timeline for a SaaS build?", "Get a quote"],
    },
  },

  /* ── Digital Growth / Marketing ───────────────────────── */
  {
    id: "digital_growth",
    keywords: [
      { terms: ["seo","search engine optimisation","search engine optimization","organic search","ranking","google ranking","serp","search visibility"], weight: 9 },
      { terms: ["aeo","answer engine","geo","generative engine","ai search","bing","perplexity","ai seo"], weight: 8 },
      { terms: ["digital marketing","paid ads","ppc","google ads","meta ads","facebook ads","linkedin ads","programmatic","paid media"], weight: 8 },
      { terms: ["content marketing","content strategy","blog","thought leadership","copywriting","content creation"], weight: 7 },
      { terms: ["lead generation","lead gen","demand gen","growth hacking","funnel","customer acquisition","pipeline"], weight: 8 },
      { terms: ["conversion","cro","conversion rate","a/b test","landing page","ux optimisation","cart abandonment","ab test"], weight: 7 },
      { terms: ["analytics","attribution","ga4","google analytics","tracking","data driven marketing","roi","roas"], weight: 6 },
      { terms: ["email marketing","social media","influencer","brand awareness","growth strategy","digital growth"], weight: 6 },
    ],
    response: {
      topic: "Digital Growth",
      text: "Our **Digital Growth** team drives measurable, attributable revenue — not just vanity metrics:\n\n🔍 **Search Visibility (SEO / AEO / GEO)**\nWe optimise for traditional search, AI answer engines (Perplexity, Bing Copilot), and generative AI results — covering every discovery channel in 2025.\n\n💰 **Paid Advertising**\nROI-focused campaigns across Google Ads, Meta, LinkedIn, and programmatic. Every penny tracked to pipeline and revenue. Average **4× ROAS** for our clients.\n\n📝 **Content Marketing & Thought Leadership**\nStrategic content that builds authority, earns backlinks, and attracts qualified leads.\n\n🎯 **Conversion Rate Optimisation (CRO)**\nSystematic A/B testing and UX improvements to turn more visitors into customers — without increasing ad spend.\n\n📊 **Analytics & Full-Funnel Attribution**\nCustom GA4 setups, CRM integration, and attribution modelling so you know exactly which channels drive revenue.\n\n🚀 **Lead Generation Campaigns**\nMulti-channel lead gen targeting your ideal customer with compelling offers and automated nurture sequences.",
      links: [
        { label: "Explore Digital Growth →", href: "/services/digital-growth/" },
        { label: "Get a Growth Strategy Session →", href: "/contact/" },
      ],
      chips: ["SEO vs Paid Ads", "How do you measure ROI?", "Content strategy options", "Get a free audit"],
    },
  },

  /* ── No-Code / Low-Code ────────────────────────────────── */
  {
    id: "no_code",
    keywords: [
      { terms: ["no code","nocode","low code","lowcode","no-code","low-code","no code platform"], weight: 10 },
      { terms: ["webflow","bubble","framer","retool","glide","softr","appsmith","adalo","xano"], weight: 9 },
      { terms: ["zapier","make","make.com","n8n","integromat","workflow tool","automation tool"], weight: 7 },
      { terms: ["airtable","notion","coda","spreadsheet app","database app","internal tool","admin panel"], weight: 7 },
      { terms: ["rapid prototype","mvp","proof of concept","fast build","quick app","prototype"], weight: 6 },
    ],
    response: {
      topic: "No-Code / Low-Code",
      text: "Our **No-Code / Low-Code** practice delivers at startup speed without compromising quality:\n\n⚡ **Rapid Prototyping & MVPs**\nFrom validated idea to working product in days, not months — test market fit before committing to a full engineering investment.\n\n🎨 **Webflow & Framer Development**\nHighly designed, performant marketing sites and web apps with CMS capabilities.\n\n🔧 **Bubble & Retool Applications**\nFull-featured apps with complex logic, databases, user auth, and external APIs — built in a fraction of the time.\n\n🔄 **Workflow Automation**\nConnecting tools with Make.com, Zapier, and n8n — automating lead routing, invoicing, notifications, and more.\n\n📊 **Internal Tools & Dashboards**\nCustom admin panels and reporting tools that replace spreadsheets and save your team hours daily.\n\n**Best fit when:** You need an MVP fast, have a limited budget, or your team needs to self-manage the product.",
      chips: ["MVP in 2 weeks?", "Webflow vs Bubble?", "Workflow automation examples", "See pricing"],
    },
  },

  /* ── Emerging Tech ─────────────────────────────────────── */
  {
    id: "emerging_tech",
    keywords: [
      { terms: ["blockchain","smart contract","defi","web3","crypto","nft","token","dao","solidity","ethereum","polygon"], weight: 9 },
      { terms: ["iot","internet of things","connected device","edge computing","sensor","embedded","industrial iot"], weight: 8 },
      { terms: ["ar","vr","xr","augmented reality","virtual reality","mixed reality","metaverse","spatial computing","immersive"], weight: 8 },
      { terms: ["emerging technology","frontier tech","emerging tech","cutting edge","future technology","innovation"], weight: 7 },
      { terms: ["quantum","computer vision","robotics","digital twin","3d printing","edge ai"], weight: 6 },
    ],
    response: {
      topic: "Emerging Tech",
      text: "Our **Emerging Technology** practice helps forward-thinking organisations adopt frontier tech before competitors do:\n\n⛓️ **Blockchain & Web3**\nSmart contracts, DeFi protocols, NFT platforms, and supply chain traceability on Ethereum, Polygon, and other chains.\n\n📡 **IoT & Connected Systems**\nEnd-to-end IoT architecture — sensor hardware to edge computing, cloud pipelines, and real-time dashboards.\n\n🥽 **AR / VR Experiences**\nImmersive training, product visualisation, and virtual showrooms built for headsets and mobile AR.\n\n👁️ **Computer Vision**\nReal-time image/video analysis for quality control, security, retail analytics, and medical imaging.\n\n🔮 **Digital Twins**\nVirtual replicas of physical assets and processes for simulation, monitoring, and optimisation.\n\nWe run quarterly **Emerging Tech Briefings** for clients — helping leadership identify genuine opportunity vs. hype.",
      links: [{ label: "Explore Our Platform →", href: "/platform/" }],
      chips: ["Blockchain use cases", "IoT for manufacturing", "AR/VR for training", "Talk to an expert"],
    },
  },

  /* ── E-commerce ────────────────────────────────────────── */
  {
    id: "ecommerce",
    keywords: [
      { terms: ["ecommerce","e-commerce","e commerce","online store","online shop","online retail","digital commerce","shop"], weight: 9 },
      { terms: ["shopify","shopify plus","woocommerce","magento","bigcommerce","commercetools","shopware"], weight: 9 },
      { terms: ["headless commerce","headless shopify","storefront","product catalogue","checkout","cart","basket"], weight: 8 },
      { terms: ["inventory","fulfilment","order management","warehouse","logistics","returns","shipping"], weight: 7 },
      { terms: ["product page","collection page","pdp","conversion","upsell","cross-sell","abandoned cart","aov"], weight: 7 },
    ],
    response: {
      topic: "E-commerce",
      text: "Our **E-commerce** solutions are built for brands that want to sell smarter and scale faster:\n\n🛍️ **Shopify & Shopify Plus**\nCustom themes, app development, and full store builds optimised for conversion — from DTC startups to enterprise merchants.\n\n🚀 **Headless Commerce**\nDecoupled storefronts with Next.js + Shopify/Commercetools — blazing performance, SEO advantage, and total design freedom.\n\n⚙️ **E-commerce Automation**\nInventory sync, automated reordering, fulfilment routing, customer segmentation, and post-purchase flows.\n\n📈 **Conversion Optimisation**\nData-driven improvements to product pages, checkout flows, and cart recovery — meaningfully increases AOV and conversion rate.\n\n🌐 **Marketplace Integration**\nConnecting your store to Amazon, eBay, Etsy — unified inventory and centralised orders.\n\nOur e-commerce clients see an average **35% revenue increase** within 6 months of launch.",
      chips: ["Shopify vs WooCommerce?", "Headless commerce benefits?", "Migration timeline", "Get a quote"],
    },
  },

  /* ── Consultancy / Strategy ────────────────────────────── */
  {
    id: "consultancy",
    keywords: [
      { terms: ["consultancy","consulting","consultant","advisory","advisor","strategic advice","strategy consulting"], weight: 9 },
      { terms: ["strategy","strategic planning","digital strategy","technology strategy","it strategy","tech strategy"], weight: 8 },
      { terms: ["roadmap","technology roadmap","product roadmap","digital roadmap","tech roadmap"], weight: 8 },
      { terms: ["technology audit","tech audit","it audit","system assessment","gap analysis","current state","existing systems"], weight: 8 },
      { terms: ["digital transformation","transformation programme","change management","modernisation","digital journey"], weight: 7 },
      { terms: ["ai readiness","ai adoption","ai strategy","ai maturity","ai assessment"], weight: 8 },
    ],
    response: {
      topic: "Consultancy",
      text: "Our **Technology Consultancy** provides strategic clarity before major technology investments:\n\n🔍 **Technology Audits**\nComprehensive assessment of your tech stack — identifying inefficiencies, security gaps, and modernisation opportunities. Delivered as a prioritised report.\n\n🗺️ **Digital Roadmapping**\nA clear 12–24 month technology strategy aligned to your business goals — prioritised by impact and feasibility.\n\n🤖 **AI Readiness Assessment**\nIdentifying where AI can create genuine value — high-ROI opportunities, data readiness, and implementation risks.\n\n🏗️ **Architecture Design & Review**\nPlanning system architectures for scalability, resilience, and security — before you build.\n\n⚖️ **Build vs. Buy Analysis**\nObjective evaluation with total cost of ownership modelling.\n\nEvery engagement is led by a **senior consultant with hands-on delivery experience** — not theoretical frameworks.",
      links: [
        { label: "Book a Consultation →", href: "/consultancy/" },
        { label: "Contact Us →", href: "/contact/" },
      ],
      chips: ["What's in an audit?", "How long is a roadmap?", "AI readiness check", "Book a free call"],
    },
  },

  /* ── Pricing ───────────────────────────────────────────── */
  {
    id: "pricing",
    keywords: [
      { terms: ["price","pricing","cost","how much","rate","rates","fee","fees","charge","charges"], weight: 9 },
      { terms: ["quote","quotation","proposal","estimate","budget","investment","ballpark"], weight: 8 },
      { terms: ["monthly","retainer","subscription","ongoing","per month","per year","monthly cost"], weight: 6 },
      { terms: ["cheap","affordable","expensive","value","roi","return on investment","worth it"], weight: 5 },
    ],
    response: {
      topic: "Pricing",
      text: "Our pricing is scoped to each project's specific requirements — here's how engagements are typically structured:\n\n💼 **Project-Based (Fixed Price)**\nBest for well-defined deliverables. Fixed price, fixed timeline, no surprises.\n→ Typical range: **£5,000 – £150,000+** depending on complexity\n\n📅 **Monthly Retainer**\nBest for ongoing development, content, or marketing support.\n→ Typical range: **£2,000 – £15,000/month**\n\n🎯 **Consulting Day Rates**\nFor audits, strategy, and advisory work.\n→ Typical range: **£800 – £2,500/day**\n\n📈 **Outcome-Based**\nFor digital growth engagements — pricing tied to agreed KPIs and results.\n\nTo get an accurate quote, share your project details — we typically respond within **24 business hours** with a tailored proposal.",
      links: [
        { label: "Get a Free Quote →", href: "/contact/" },
        { label: "Book a Discovery Call →", href: "/consultancy/" },
      ],
      chips: ["Fixed vs retainer?", "Get a free quote now", "What's included in a retainer?", "Talk to sales"],
    },
  },

  /* ── About / Company ───────────────────────────────────── */
  {
    id: "about",
    keywords: [
      { terms: ["about","about you","about keysol","who are you","who is keysol","what is keysol","tell me about"], weight: 8 },
      { terms: ["company","organisation","firm","agency","studio","team","organisation"], weight: 5 },
      { terms: ["founded","history","background","story","mission","vision","values","culture"], weight: 7 },
      { terms: ["keysol global","keysol","ksg","key sol"], weight: 9 },
      { terms: ["where are you","location","country","office","headquarters","based","where based"], weight: 7 },
    ],
    response: {
      topic: "About KeySol Global",
      text: "**KeySol Global** is a premium technology solutions firm helping businesses harness AI, software engineering, and digital innovation to scale intelligently.\n\n🎯 **Our Mission**\nMake enterprise-grade technology accessible and impactful for businesses at every stage — from ambitious startups to global enterprises.\n\n🏆 **What Makes Us Different**\nWe're not a generalist agency. Every service is deeply specialised, delivered by practitioners — not account managers with outsourced delivery.\n\n🛠️ **What We Do**\n• AI & Automation — agents, chatbots, ML, BPA\n• Custom Software & ERP/CRM\n• Digital Growth — SEO, paid, CRO, content\n• No-Code / Low-Code solutions\n• Emerging Tech — blockchain, IoT, AR/VR\n• E-commerce — Shopify, headless, conversion\n• Technology Consultancy\n\n🌍 **Global Reach**\nClients across the US, UK, Europe, Middle East, and APAC — operating across time zones to support you wherever you are.",
      links: [{ label: "Learn More About Us →", href: "/about/" }],
      chips: ["Meet the team", "Our process", "Client success stories", "Get in touch"],
    },
  },

  /* ── Team ──────────────────────────────────────────────── */
  {
    id: "team",
    keywords: [
      { terms: ["team","staff","people","who works","employees","founders","leadership","management"], weight: 9 },
      { terms: ["engineers","developers","designers","marketers","consultants","specialists"], weight: 7 },
      { terms: ["meet the team","our team","your team","company team","who builds"], weight: 10 },
    ],
    response: {
      topic: "Our Team",
      text: "KeySol Global is built on a team of highly specialised practitioners — not generalists:\n\n👥 **Leadership & Consultancy**\nSenior consultants and strategists with 10–20 years of industry experience across Fortune 500 and scale-up environments.\n\n⚙️ **Engineering Teams**\nFull-stack engineers, cloud architects, DevOps specialists, and QA professionals — organised into focused delivery squads.\n\n🤖 **AI & Data Science**\nML engineers, LLM specialists, NLP researchers, and automation architects who've shipped AI to production.\n\n📈 **Digital Growth**\nSEO strategists, PPC specialists, content creators, CRO experts, and analytics engineers.\n\n🎨 **Design & UX**\nUI/UX designers with expertise in enterprise product design and high-conversion landing experiences.\n\nEvery client engagement is led by a senior specialist — you work directly with the people building your solution.",
      links: [{ label: "Learn More About Us →", href: "/about/" }],
      chips: ["How do you staff projects?", "Remote or on-site?", "Join the team?", "Contact us"],
    },
  },

  /* ── Careers ───────────────────────────────────────────── */
  {
    id: "careers",
    keywords: [
      { terms: ["careers","career","jobs","job","hiring","work here","work for you","join keysol","work at keysol"], weight: 10 },
      { terms: ["vacancy","vacancies","open roles","positions","openings","apply","application"], weight: 9 },
      { terms: ["internship","graduate","junior","senior","contract","freelance"], weight: 7 },
      { terms: ["salary","compensation","benefits","perks","remote work","flexible"], weight: 6 },
    ],
    response: {
      topic: "Careers",
      text: "**Careers at KeySol Global** — We're always looking for exceptional talent:\n\n🚀 **Why Join Us?**\nWork on cutting-edge AI, enterprise, and digital projects for clients across multiple industries and regions. Fast-paced, collaborative, and genuinely exciting work.\n\n💼 **Roles We Typically Hire For**\n• AI/ML Engineers & LLM Specialists\n• Full-Stack & Cloud Engineers\n• Digital Growth Specialists (SEO, PPC, CRO)\n• UX/UI Designers\n• Technology Consultants & Strategists\n• Project & Delivery Managers\n\n🌍 **Remote-First**\nWe operate with a distributed, remote-friendly model — hiring talent wherever the best people are.\n\n📧 **How to Apply**\nSend your CV and a note about what excites you to **Wajahat@keysolglobal.com** with the subject line 'Careers — [Role]'.",
      links: [{ label: "Contact Us →", href: "/contact/" }],
      chips: ["What roles are open?", "Is it remote?", "Culture & benefits", "Apply now"],
    },
  },

  /* ── Case Studies / Portfolio ──────────────────────────── */
  {
    id: "case_studies",
    keywords: [
      { terms: ["case study","case studies","portfolio","work","projects","examples","examples of work","past work"], weight: 9 },
      { terms: ["success story","client results","testimonial","review","outcome","results achieved"], weight: 8 },
      { terms: ["what have you built","what did you make","show me your work","previous work","similar project"], weight: 8 },
    ],
    response: {
      topic: "Case Studies",
      text: "We're proud of the real-world outcomes we've delivered for clients across industries:\n\n🤖 **AI & Automation**\nBuilt an AI document processing system for a financial services firm — reducing manual processing time by **82%** and cutting errors to near-zero.\n\n💻 **SaaS Platform**\nEngineered a multi-tenant logistics SaaS platform from scratch — now serving **500+ enterprise clients** with 99.98% uptime.\n\n📈 **Digital Growth**\nTook a B2B SaaS company from 2,000 to **47,000 monthly organic visitors** in 14 months through an integrated SEO and content strategy.\n\n🛍️ **E-commerce**\nMigrated a retail brand to headless Shopify — resulting in **41% faster page loads** and a **28% uplift** in conversion rate.\n\n🏢 **ERP Implementation**\nDelivered a custom Odoo ERP for a manufacturing company — replacing 6 disconnected tools with one unified system.\n\nFull case studies available in our Resource Centre.",
      links: [
        { label: "Visit Resource Centre →", href: "/insights/" },
        { label: "Discuss Your Project →", href: "/contact/" },
      ],
      chips: ["AI case studies", "E-commerce results", "Software projects", "Book a consultation"],
    },
  },

  /* ── Contact ───────────────────────────────────────────── */
  {
    id: "contact",
    keywords: [
      { terms: ["contact","get in touch","reach","email","phone","call","message","reach out"], weight: 9 },
      { terms: ["talk to","speak to","speak with","chat with","connect with","meet","discuss"], weight: 8 },
      { terms: ["demo","discovery call","free call","free consultation","schedule","book","arrange"], weight: 8 },
      { terms: ["hello@","support","sales","enquiry","inquiry","whatsapp"], weight: 7 },
    ],
    response: {
      topic: "Contact",
      text: "I'd be happy to connect you with our team! Here are your options:\n\n📋 **Contact Form**\nFill in your details — the right team member responds within **24 business hours** with a thoughtful, tailored response.\n\n📞 **Free Discovery Call**\nBook a complimentary 30-minute strategy call with a senior consultant — no obligation, just a focused conversation about your goals.\n\n✉️ **Direct Email**\nWajahat@keysolglobal.com — for general enquiries, partnerships, or anything else.\n\n⚡ **What to Expect**\nWe take a consultative approach from the very first interaction. No generic sales pitches — we listen carefully and only recommend what genuinely fits your needs.",
      links: [
        { label: "Contact Us →", href: "/contact/" },
        { label: "Book a Free Consultation →", href: "/consultancy/" },
      ],
      chips: ["Book a free call", "Send a message", "What info do you need?", "Response time?"],
    },
  },

  /* ── Process / Methodology ─────────────────────────────── */
  {
    id: "process",
    keywords: [
      { terms: ["process","how do you work","how does it work","methodology","approach","framework","how you work"], weight: 9 },
      { terms: ["steps","phases","stage","workflow","delivery","project management","delivery process"], weight: 7 },
      { terms: ["timeline","how long","duration","when","deadline","launch","time to build"], weight: 6 },
      { terms: ["agile","scrum","sprint","waterfall","iterative","lean","kanban"], weight: 6 },
    ],
    response: {
      topic: "Our Process",
      text: "Our delivery methodology is built around **5 clear phases** — ensuring every project launches on solid foundations:\n\n**1️⃣ Discover**\nWe immerse ourselves in your business — goals, challenges, existing systems, and market context. Deep discovery eliminates misalignment downstream.\n\n**2️⃣ Strategize**\nWe design the optimal technology strategy and roadmap — defining scope, tech choices, architecture, success metrics, and risk mitigation.\n\n**3️⃣ Design**\nDetailed technical blueprints and UX/UI designs — reviewed and approved before any code is written, avoiding costly late-stage changes.\n\n**4️⃣ Build**\nIterative engineering with full transparency — regular demos, staging environments, and direct team communication throughout.\n\n**5️⃣ Optimise & Scale**\nPost-launch monitoring, performance improvements, and continuous iteration. We don't disappear after go-live.\n\n⏱️ **Timelines:** A no-code MVP might take 2 weeks; a full ERP 6 months. We give realistic estimates during discovery.",
      links: [{ label: "Our Approach →", href: "/about/" }],
      chips: ["How long does it take?", "Do you use Agile?", "Post-launch support?", "Get started now"],
    },
  },

  /* ── Insights / Resources ──────────────────────────────── */
  {
    id: "insights",
    keywords: [
      { terms: ["insights","blog","article","post","read","content","resource centre","resource center"], weight: 8 },
      { terms: ["whitepaper","white paper","research","report","download","guide","ebook"], weight: 7 },
      { terms: ["case study","case studies","success story","client result","portfolio"], weight: 8 },
      { terms: ["webinar","podcast","video","event","watch","listen","recording"], weight: 7 },
      { terms: ["latest news","news","announcement","press","newsletter"], weight: 6 },
    ],
    response: {
      topic: "Insights & Resources",
      text: "Our **Resource Centre** is packed with expert content to help you stay ahead:\n\n📝 **Blogs & Articles**\nPractical, actionable pieces on AI, software engineering, digital growth, and emerging technology — written by practitioners, not marketers.\n\n📊 **Case Studies**\nDetailed breakdowns of client engagements — challenges faced, our approach, and measurable results achieved.\n\n📄 **Whitepapers & Guides**\nDeep-dive research and strategic frameworks on AI adoption, digital transformation, and technology selection.\n\n🎙️ **Webinars & Events**\nLive and recorded sessions where our experts and industry guests discuss trends shaping technology in business.\n\nAll content is **completely free** — no paywalls, just genuine value.",
      links: [{ label: "Visit Our Resource Centre →", href: "/insights/" }],
      chips: ["Latest AI articles", "Download a guide", "Watch webinars", "Subscribe"],
    },
  },

  /* ── Solutions / Industries ────────────────────────────── */
  {
    id: "solutions",
    keywords: [
      { terms: ["solutions","solution","industries","industry","sector","vertical","specialisation"], weight: 7 },
      { terms: ["healthcare","fintech","finance","banking","retail","manufacturing","logistics","education","real estate","startup"], weight: 8 },
      { terms: ["small business","smb","sme","startup","scale-up","enterprise","large company","mid-market"], weight: 7 },
    ],
    response: {
      topic: "Solutions",
      text: "KeySol Global delivers tailored solutions across a wide range of industries:\n\n🏦 **FinTech & Financial Services** — Compliance automation, data platforms, client portals\n🏥 **Healthcare** — Patient management, clinical data, telehealth platforms\n🛒 **Retail & E-commerce** — Omnichannel platforms, inventory, CX automation\n🏭 **Manufacturing & Logistics** — ERP, IoT, supply chain optimisation\n👔 **Professional Services** — CRM, project management, billing automation\n🎓 **Education & EdTech** — LMS, AI tutoring, admin automation\n🏠 **Real Estate** — Property management, CRM, valuation tools\n\n**By Business Size:**\n• **Startups** — MVPs, growth infrastructure, lean tech stacks\n• **SMBs** — Systems removing operational bottlenecks\n• **Enterprise** — Large-scale digital transformation and AI adoption\n\nEvery engagement is tailored to your specific industry context and stage.",
      links: [{ label: "View Our Solutions →", href: "/solutions/" }],
      chips: ["FinTech solutions", "Healthcare tech", "Startup packages", "Enterprise options"],
    },
  },

  /* ── Marketplace ───────────────────────────────────────── */
  {
    id: "marketplace",
    keywords: [
      { terms: ["marketplace","market place","partner","partners","partnership","vendor","vendor management"], weight: 9 },
      { terms: ["technology partner","tech partner","solution provider","saas tool","third party","tool recommendations"], weight: 8 },
      { terms: ["integrate","integration","connect","ecosystem","stack","tool stack"], weight: 5 },
    ],
    response: {
      topic: "Marketplace",
      text: "Our **Marketplace** is a curated directory of vetted technology partners and solution providers:\n\n🏪 **What's in the Marketplace?**\n• Specialist SaaS tools across every business function\n• Certified implementation partners for leading platforms\n• Complementary service providers (legal, finance, HR tech)\n• Hardware and infrastructure vendors\n\n✅ **Why It's Different**\nEvery listing is reviewed and approved by our team. You're accessing a vetted network that meets our quality standards — not an open directory.\n\n🤝 **Partnership Programme**\nIf your business offers technology solutions that complement our services, we'd love to explore a partnership.",
      links: [{ label: "Explore the Marketplace →", href: "/marketplace/" }],
      chips: ["Become a partner", "Browse tools", "Tech recommendations", "Integration help"],
    },
  },

  /* ── Goodbye / Thanks ──────────────────────────────────── */
  {
    id: "goodbye",
    keywords: [
      { terms: ["bye","goodbye","see you","farewell","take care","later","cya","ttyl"], weight: 10 },
      { terms: ["thanks","thank you","thank you so much","appreciate","cheers","great help","helpful","you've been helpful"], weight: 8 },
      { terms: ["that's all","that's it","nothing else","all good","sorted","done","no more questions"], weight: 7 },
    ],
    response: {
      topic: "goodbye",
      text: "It was a pleasure chatting with you! 🚀\n\nWhenever you're ready to take the next step — a quick question, a detailed brief, or booking a discovery call — I'll be right here.\n\nHave an excellent day, and let's build something remarkable together! ✨",
      links: [{ label: "Contact Our Team →", href: "/contact/" }],
      chips: ["Book a free call", "See our services", "Start a project"],
    },
  },

  /* ── About Kaia ─────────────────────────────────────────── */
  {
    id: "about_kaia",
    keywords: [
      { terms: ["who are you","what are you","your name","kaia","jennifer","chatbot","ai assistant","bot","are you human","are you ai","are you real","who made you"], weight: 10 },
    ],
    response: {
      topic: "About Kaia",
      text: "I'm **Kenza** — KeySol Global's AI assistant! 🤖\n\nI'm here to help you:\n• Learn about KeySol's services and capabilities\n• Understand our process and how we work\n• Get pricing guidance and timelines\n• Navigate the website\n• Connect you with the right person on our team\n\nI'm powered by KeySol's knowledge base and trained specifically to represent the company accurately. For detailed project discussions, our human team is always available.\n\nWhat would you like to know?",
      chips: ["What services do you offer?", "How does pricing work?", "Talk to a human", "Book a call"],
    },
  },
];

/* ── Scoring engine ─────────────────────────────────────────────────────── */
function scoreIntent(input: string, intent: Intent): number {
  const lower = input.toLowerCase();
  const words = lower.split(/\s+/);
  let score = 0;
  for (const group of intent.keywords) {
    let groupMatched = false;
    for (const term of group.terms) {
      // Exact phrase match
      if (lower.includes(term)) {
        score += group.weight;
        groupMatched = true;
        break;
      }
      // Partial word match for compound terms
      if (!groupMatched && term.split(" ").length === 1 && words.some(w => w.startsWith(term) || term.startsWith(w))) {
        score += Math.floor(group.weight * 0.6);
        groupMatched = true;
        break;
      }
    }
  }
  return score;
}

/* ── Context-aware response selector ───────────────────────────────────── */
function getBotResponse(input: string, lastTopic?: string): BotResponse {
  const lower = input.toLowerCase().trim();

  // Score all intents
  const scored = INTENTS.map((intent) => ({
    intent,
    score: scoreIntent(input, intent),
  })).filter((s) => s.score > 0).sort((a, b) => b.score - a.score);

  // If strong match found
  if (scored.length > 0 && scored[0].score >= 5) {
    return scored[0].intent.response;
  }

  // General service overview
  if (/service|offer|do you|what (can|do)|help me|what.*provide|capabilities|speciali[sz]/i.test(lower)) {
    return {
      topic: "Services Overview",
      text: "KeySol Global offers a comprehensive suite of technology services:\n\n🤖 **AI & Automation** — Agentic AI, chatbots, process automation, ML\n💻 **Custom Software & ERP/CRM** — SaaS platforms, enterprise applications\n📈 **Digital Growth** — SEO/AEO, paid ads, content strategy, CRO\n🔗 **No-Code / Low-Code** — Rapid MVPs, Webflow, Bubble, workflow automation\n⛓️ **Emerging Tech** — Blockchain, IoT, AR/VR, computer vision\n🛒 **E-commerce** — Shopify, headless commerce, retail automation\n🎯 **Consultancy** — Technology strategy, audits, digital roadmapping\n\nWhich area would you like to explore?",
      links: [{ label: "View All Services →", href: "/platform/" }],
      chips: ["AI & Automation", "Custom Software", "Digital Growth", "Consultancy"],
    };
  }

  // Navigation helper
  if (/where|find|go to|navigate|page|section|link/i.test(lower)) {
    return {
      text: "Here are the main sections of the KeySol Global website:\n\n• **Platform** — Overview of all technology capabilities\n• **Marketplace** — Vetted technology partners and tools\n• **Consultancy** — Strategic advisory and booking\n• **Solutions** — Industry-specific solutions\n• **Insights** — Blogs, case studies, and resources\n• **About Us** — Company information\n• **Contact** — Get in touch or book a call",
      links: [
        { label: "Explore Platform →", href: "/platform/" },
        { label: "Contact Us →", href: "/contact/" },
      ],
      chips: ["Platform overview", "Book a consultation", "Read insights", "Contact us"],
    };
  }

  // Positive affirmations
  if (/^(yes|yeah|yep|sure|ok|okay|great|perfect|sounds good|absolutely|definitely|love it|brilliant)$/i.test(lower)) {
    return {
      text: "Excellent! What can I help you with next? Feel free to ask about our services, process, pricing, or I can connect you directly with our team. 😊",
      links: [{ label: "Contact Our Team →", href: "/contact/" }],
      chips: DEFAULT_CHIPS,
    };
  }

  // Negative / not interested
  if (/^(no|nope|not really|never mind|nevermind|not interested|no thanks)$/i.test(lower)) {
    return {
      text: "No problem at all! If you have any other questions or want to explore our services at any point, I'm right here. Is there anything else I can help with?",
      chips: DEFAULT_CHIPS,
    };
  }

  // Default — escalate to human
  return {
    text: "That's a great question — I want to make sure you get the most accurate answer possible.\n\nFor this specific enquiry, our team would be best placed to respond thoughtfully. Would you like to reach out to them directly?",
    links: [
      { label: "Contact Our Team →", href: "/contact/" },
      { label: "Book a Free Call →", href: "/consultancy/" },
    ],
    chips: ["What services do you offer?", "How does pricing work?", "Book a consultation"],
  };
}

/* ─── Types ───────────────────────────────────────────────────────────────── */
interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  links?: { label: string; href: string }[];
  topic?: string;
  chips?: string[];
  timestamp: Date;
}

/* ─── Markdown renderer ──────────────────────────────────────────────────── */
function RenderText({ text, isUser }: { text: string; isUser?: boolean }) {
  const lines = text.split("\n");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} style={{ height: 3 }} />;
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <span key={i} style={{ lineHeight: 1.7 }}>
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} style={{ fontWeight: 700, color: isUser ? "rgba(255,255,255,0.95)" : "#0F172A" }}>
                  {part.slice(2, -2)}
                </strong>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </span>
        );
      })}
    </div>
  );
}

/* ─── Typing Dots ──────────────────────────────────────────────────────────── */
function TypingDots() {
  const bars = [0.35, 0.6, 1, 0.75, 0.5, 0.85, 1, 0.6, 0.4, 0.7];
  return (
    <div style={{ padding: "16px 20px 14px 18px", minWidth: 160 }}>

      {/* Header row — avatar pulse ring + label */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        {/* Pulsing ring around the K icon */}
        <div style={{ position: "relative", width: 22, height: 22, flexShrink: 0 }}>
          <motion.div
            style={{
              position: "absolute", inset: -4,
              borderRadius: "50%",
              border: "2px solid #3b82f6",
            }}
            animate={{ scale: [1, 1.45, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          />
          <div style={{
            width: 22, height: 22, borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6, #7c3aed)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width={10} height={10} viewBox="0 0 32 32" fill="none">
              <path d="M4,4 L10,4 L10,14 L22,4 L30,4 L18,16 L30,28 L22,28 L10,18 L10,28 L4,28 Z" fill="white"/>
            </svg>
          </div>
        </div>

        {/* Animated gradient text label */}
        <motion.span
          style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.07em",
            textTransform: "uppercase",
            background: "linear-gradient(90deg, #3b82f6, #7c3aed, #3b82f6)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        >
          Kenza is thinking…
        </motion.span>
      </div>

      {/* Audio waveform bars */}
      <div style={{ display: "flex", alignItems: "center", gap: 2.5, height: 28 }}>
        {bars.map((h, i) => (
          <motion.div
            key={i}
            style={{
              width: 3.5,
              borderRadius: 10,
              background: `linear-gradient(180deg, #3b82f6 0%, #7c3aed 100%)`,
              flexShrink: 0,
            }}
            animate={{
              height: [`${h * 6}px`, `${h * 28}px`, `${h * 10}px`, `${h * 22}px`, `${h * 6}px`],
              opacity: [0.5, 1, 0.7, 1, 0.5],
            }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              delay: i * 0.07,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle processing text */}
      <motion.div
        style={{
          fontSize: 9.5, color: "#334155",
          marginTop: 10, letterSpacing: "0.04em",
          fontStyle: "italic",
        }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Crafting your personalised response...
      </motion.div>
    </div>
  );
}

/* ─── Avatar ─────────────────────────────────────────────────────────────── */
function KaiaAvatar({ size = 32 }: { size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", flexShrink: 0,
      background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 2px 8px rgba(37,99,235,0.35)",
    }}>
      <svg width={size * 0.45} height={size * 0.45} viewBox="0 0 32 32" fill="none">
        <path d="M4,4 L10,4 L10,14 L22,4 L30,4 L18,16 L30,28 L22,28 L10,18 L10,28 L4,28 Z" fill="white"/>
      </svg>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export function KeySolChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      text: "Hi there! 👋 I'm **Kenza**, KeySol Global's AI assistant.\n\nI can help you explore our services, learn about the company, get pricing guidance, or connect you with our team.\n\nWhat would you like to know?",
      chips: DEFAULT_CHIPS,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [fabHovered, setFabHovered] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const controls = useAnimation();

  // Stable session ID for this browser session
  const sessionId = useMemo(() => {
    if (typeof window === "undefined") return `session-${Date.now()}`;
    let sid = sessionStorage.getItem("kaia_session_id");
    if (!sid) {
      sid = `session-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      sessionStorage.setItem("kaia_session_id", sid);
    }
    return sid;
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [isOpen]);

  // Periodic pulse on FAB when closed
  useEffect(() => {
    controls.set({ scale: 1, opacity: 1 });
    if (!isOpen) {
      const interval = setInterval(() => {
        controls.start({
          scale: [1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" },
        });
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isOpen, controls]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      text: text.trim(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      // Build history for Groq (exclude the welcome message, send last 10 turns)
      const history = messages
        .filter((m) => m.id !== "welcome")
        .slice(-10)
        .map((m) => ({ role: m.role === "bot" ? "assistant" : "user", content: m.text }));

      const [res] = await Promise.all([
        fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...history, { role: "user", content: text.trim() }],
            sessionId,
          }),
        }),
        // Enforce minimum 2.5 second delay so response feels considered, not instant
        new Promise((resolve) => setTimeout(resolve, 2500)),
      ]);

      const data = (res as Response).ok ? await (res as Response).json() : null;
      const replyText = data?.reply || "I'm having a little trouble right now. Please try again or reach us at **contact@keysolglobal.com**.";

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        role: "bot",
        text: replyText,
        chips: DEFAULT_CHIPS,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errMsg: Message = {
        id: `b-err-${Date.now()}`,
        role: "bot",
        text: "Something went wrong on my end. You can reach us directly at **contact@keysolglobal.com** or call us anytime.",
        chips: DEFAULT_CHIPS,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsTyping(false);
    }
  }, [messages, sessionId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  // Get chips for the last bot message
  const lastBotMsg = [...messages].reverse().find(m => m.role === "bot");
  const currentChips = lastBotMsg?.chips;

  return (
    <>
      {/* ── FAB Button ───────────────────────────────────────────── */}
      <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 9999 }}>
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              style={{ position: "relative" }}
              onHoverStart={() => setFabHovered(true)}
              onHoverEnd={() => setFabHovered(false)}
            >
              {/* Outer glow ring */}
              <motion.div
                style={{
                  position: "absolute", inset: -6, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.15, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.button
                onClick={() => setIsOpen(true)}
                animate={controls}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 50%, #7C3AED 100%)",
                  border: "none", cursor: "pointer",
                  boxShadow: fabHovered
                    ? "0 12px 40px rgba(37,99,235,0.55), 0 4px 16px rgba(124,58,237,0.3)"
                    : "0 8px 28px rgba(37,99,235,0.42), 0 2px 8px rgba(0,0,0,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                  transition: "box-shadow 0.25s ease",
                }}
                aria-label="Open chat with Kenza"
              >
                {/* Shimmer sweep on FAB */}
                <motion.div
                  style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
                    borderRadius: "50%",
                  }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
                />
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <path d="M4,4 L10,4 L10,14 L22,4 L30,4 L18,16 L30,28 L22,28 L10,18 L10,28 L4,28 Z" fill="white"/>
                </svg>

                {/* Unread badge */}
                {hasUnread && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.3 }}
                    style={{
                      position: "absolute", top: 2, right: 2,
                      width: 16, height: 16, borderRadius: "50%",
                      background: "linear-gradient(135deg, #EF4444, #DC2626)",
                      border: "2.5px solid white",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: 8, fontWeight: 800, color: "#fff" }}>1</span>
                  </motion.div>
                )}
              </motion.button>

              {/* Tooltip label */}
              <AnimatePresence>
                {fabHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 8, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 8, scale: 0.9 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      position: "absolute", right: 74, top: "50%", transform: "translateY(-50%)",
                      background: "#0F172A", color: "#fff",
                      padding: "8px 14px", borderRadius: 10,
                      fontSize: 13, fontWeight: 600, whiteSpace: "nowrap",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                      pointerEvents: "none",
                    }}
                  >
                    Chat with Kenza ✨
                    <div style={{
                      position: "absolute", right: -5, top: "50%", transform: "translateY(-50%)",
                      width: 10, height: 10, background: "#0F172A",
                      clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
                    }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Chat Window ──────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 24, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 24 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            style={{
              position: "fixed", bottom: 28, right: 28,
              width: 420, height: 660,
              borderRadius: 24,
              background: "#ffffff",
              boxShadow: "0 32px 80px rgba(0,0,0,0.16), 0 8px 32px rgba(37,99,235,0.08), 0 1px 0 rgba(255,255,255,0.9)",
              display: "flex", flexDirection: "column",
              overflow: "hidden",
              zIndex: 9999,
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              border: "1px solid rgba(37,99,235,0.1)",
            }}
          >
            {/* ── Header ───────────────────────────────────────────── */}
            <div style={{
              background: "linear-gradient(135deg, #0D1B3E 0%, #1a3068 45%, #0F172A 100%)",
              padding: "16px 18px 15px",
              display: "flex", alignItems: "center", gap: 12,
              flexShrink: 0, position: "relative", overflow: "hidden",
            }}>
              {/* Subtle header gradient overlay */}
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.18) 0%, transparent 60%)",
              }} />

              {/* Avatar with pulse ring */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 0 0 3px rgba(96,165,250,0.2), 0 4px 12px rgba(37,99,235,0.4)",
                }}>
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                    <path d="M4,4 L10,4 L10,14 L22,4 L30,4 L18,16 L30,28 L22,28 L10,18 L10,28 L4,28 Z" fill="white"/>
                  </svg>
                </div>
                {/* Online dot */}
                <motion.div
                  style={{
                    position: "absolute", bottom: 1, right: 1,
                    width: 11, height: 11, borderRadius: "50%",
                    background: "#22C55E",
                    border: "2px solid #0D1B3E",
                  }}
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              <div style={{ flex: 1, zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 15.5, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>Kenza</span>
                  <motion.span
                    style={{
                      fontSize: 9.5, fontWeight: 700,
                      background: "linear-gradient(135deg, rgba(96,165,250,0.25), rgba(167,139,250,0.25))",
                      color: "#A5B4FC",
                      padding: "2px 8px", borderRadius: 20,
                      letterSpacing: "0.06em", textTransform: "uppercase",
                      border: "1px solid rgba(167,139,250,0.3)",
                    }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    AI Assistant
                  </motion.span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 3 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.01em" }}>
                    KeySol Global · Online now
                  </span>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  cursor: "pointer", zIndex: 1,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.16)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                aria-label="Close chat"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* ── Messages ─────────────────────────────────────────── */}
            <div style={{
              flex: 1, overflowY: "auto", padding: "18px 16px 10px",
              display: "flex", flexDirection: "column", gap: 14,
              background: "linear-gradient(180deg, #F0F4FF 0%, #F8FAFC 100%)",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(37,99,235,0.15) transparent",
            }}>
              {messages.map((msg, idx) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: "flex",
                    flexDirection: msg.role === "user" ? "row-reverse" : "row",
                    alignItems: "flex-end", gap: 8,
                  }}
                >
                  {/* Bot avatar */}
                  {msg.role === "bot" && <KaiaAvatar size={30} />}

                  <div style={{ maxWidth: "82%", display: "flex", flexDirection: "column", gap: 7, flex: msg.role === "user" ? undefined : 1 }}>
                    {/* Message bubble */}
                    <div style={{
                      padding: msg.role === "user" ? "11px 15px" : "13px 16px",
                      borderRadius: msg.role === "user"
                        ? "20px 20px 5px 20px"
                        : "20px 20px 20px 5px",
                      background: msg.role === "user"
                        ? "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)"
                        : "#ffffff",
                      color: msg.role === "user" ? "rgba(255,255,255,0.92)" : "#374151",
                      fontSize: 13.5, lineHeight: 1.65,
                      boxShadow: msg.role === "bot"
                        ? "0 2px 12px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.9), inset 0 1px 0 rgba(255,255,255,0.8)"
                        : "0 4px 14px rgba(37,99,235,0.3)",
                      border: msg.role === "bot" ? "1px solid rgba(37,99,235,0.07)" : "none",
                      position: "relative",
                    }}>
                      <RenderText text={msg.text} isUser={msg.role === "user"} />
                    </div>

                    {/* Link buttons */}
                    {msg.links && msg.links.length > 0 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {msg.links.map((link, i) => (
                          <motion.a
                            key={i}
                            href={link.href}
                            whileHover={{ x: 3, scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            style={{
                              display: "inline-flex", alignItems: "center", gap: 6,
                              background: "linear-gradient(135deg, #EFF6FF, #F5F3FF)",
                              color: "#2563EB", textDecoration: "none",
                              fontSize: 12.5, fontWeight: 600,
                              padding: "8px 13px", borderRadius: 10,
                              border: "1px solid rgba(37,99,235,0.15)",
                              alignSelf: "flex-start",
                              boxShadow: "0 1px 4px rgba(37,99,235,0.08)",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {link.label}
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12"/>
                              <polyline points="12 5 19 12 12 19"/>
                            </svg>
                          </motion.a>
                        ))}
                      </div>
                    )}

                    {/* Inline chips for last bot message */}
                    {msg.role === "bot" && msg.chips && idx === messages.length - 1 && !isTyping && (
                      <div style={{
                        display: "flex", gap: 5, flexWrap: "wrap", marginTop: 2,
                      }}>
                        {msg.chips.map((chip) => (
                          <motion.button
                            key={chip}
                            onClick={() => sendMessage(chip)}
                            whileHover={{ scale: 1.04, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            style={{
                              padding: "5px 12px", borderRadius: 20,
                              fontSize: 11.5, fontWeight: 600,
                              border: "1.5px solid rgba(37,99,235,0.18)",
                              background: "rgba(255,255,255,0.9)",
                              color: "#2563EB", cursor: "pointer",
                              whiteSpace: "nowrap",
                              boxShadow: "0 1px 4px rgba(37,99,235,0.07)",
                              transition: "border-color 0.15s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)")}
                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(37,99,235,0.18)")}
                          >
                            {chip}
                          </motion.button>
                        ))}
                      </div>
                    )}

                    {/* Timestamp */}
                    <span style={{
                      fontSize: 10, color: "#B0BEC5",
                      alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                      letterSpacing: "0.02em",
                    }}>
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 1, y: 14, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 1, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                    style={{ display: "flex", alignItems: "flex-end", gap: 10 }}
                  >
                    <KaiaAvatar size={32} />
                    <div style={{
                      background: "linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%)",
                      borderRadius: "20px 20px 20px 5px",
                      boxShadow: "0 4px 24px rgba(59,130,246,0.12), 0 1px 4px rgba(0,0,0,0.04)",
                      border: "1px solid rgba(99,102,241,0.15)",
                      position: "relative",
                      overflow: "hidden",
                    }}>
                      {/* Shimmer sweep */}
                      <motion.div
                        style={{
                          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
                          pointerEvents: "none",
                        }}
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.8 }}
                      />
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* ── Input Area ────────────────────────────────────────── */}
            <div style={{
              background: "#fff",
              borderTop: "1px solid rgba(37,99,235,0.08)",
              flexShrink: 0,
            }}>
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: "12px 14px 14px",
                  display: "flex", gap: 10, alignItems: "flex-end",
                }}
              >
                <div style={{ flex: 1, position: "relative" }}>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Kenza anything…"
                    style={{
                      width: "100%", padding: "11px 14px",
                      borderRadius: 14,
                      border: "1.5px solid #E8ECF4",
                      fontSize: 13.5, outline: "none",
                      color: "#111827", background: "#F8FAFC",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                      boxSizing: "border-box",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#2563EB";
                      e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                      e.target.style.background = "#fff";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#E8ECF4";
                      e.target.style.boxShadow = "none";
                      e.target.style.background = "#F8FAFC";
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  whileHover={input.trim() && !isTyping ? { scale: 1.08 } : {}}
                  whileTap={input.trim() && !isTyping ? { scale: 0.94 } : {}}
                  style={{
                    width: 42, height: 42, borderRadius: 13, border: "none",
                    background: input.trim() && !isTyping
                      ? "linear-gradient(135deg, #2563EB, #4F46E5)"
                      : "#E8ECF4",
                    cursor: input.trim() && !isTyping ? "pointer" : "not-allowed",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: input.trim() && !isTyping
                      ? "0 4px 14px rgba(37,99,235,0.35)"
                      : "none",
                    transition: "background 0.2s, box-shadow 0.2s",
                  }}
                  aria-label="Send message"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke={input.trim() && !isTyping ? "#fff" : "#9CA3AF"}
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </motion.button>
              </form>

              {/* Footer */}
              <div style={{
                padding: "0 16px 12px",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              }}>
                <div style={{
                  width: 14, height: 14, borderRadius: "50%",
                  background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="7" height="7" viewBox="0 0 32 32" fill="none">
                    <path d="M4,4 L10,4 L10,14 L22,4 L30,4 L18,16 L30,28 L22,28 L10,18 L10,28 L4,28 Z" fill="white"/>
                  </svg>
                </div>
                <span style={{ fontSize: 10.5, color: "#B0BEC5", letterSpacing: "0.01em" }}>
                  Powered by <span style={{ fontWeight: 700, color: "#6366F1" }}>KeySol AI</span> · Always improving
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
