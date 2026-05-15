// All editable copy for the Nexus² site lives here.

export const brand = {
  name: "Nexus",
  super: "²",
  agentName: "Nexi",
  embedSnippet: `<script src="https://nexus2.ai/embed.js"></script>`,
  tagline: "The AI concierge that makes your website answer back.",
};

export const navLinks = [
  { label: "What is Nexus²", to: "/what-is-nexus" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
] as const;

export const footerLinks = {
  Product: [
    { label: "What is Nexus²", to: "/what-is-nexus" },
    { label: "Products", to: "/products" },
    { label: "Pricing", to: "/pricing" },
    { label: "Request a demo", to: "/demo" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
  ],
  Resources: [
    { label: "Documentation", to: "/" },
    { label: "Changelog", to: "/" },
    { label: "Blog", to: "/" },
  ],
  Legal: [
    { label: "Privacy", to: "/" },
    { label: "Terms", to: "/" },
    { label: "Security", to: "/" },
  ],
};

export const trustedLogos = ["Pampered Chef", "Barcodes", "Mouser", "JM Test", "Atlas Co.", "Northwind"];

export const heroDemo = {
  user: "Do these run small?",
  agent: "These run true to size — here's the size guide →",
};

export const howItWorks = [
  { n: "01", title: "Paste one line of code.", body: "Drop the snippet anywhere in your HTML. That's the whole install.", icon: "Clipboard" },
  { n: "02", title: "Nexi reads your site in 60 seconds.", body: "We crawl pages, products, and menus, then learn your voice.", icon: "ScanEye" },
  { n: "03", title: "Visitors get answers, you get conversions.", body: "Every question becomes a guided next step, not a dead end.", icon: "LineChart" },
];

export const platforms = [
  { name: "WordPress", color: "#21759B" },
  { name: "Shopify", color: "#95BF47" },
  { name: "Webflow", color: "#4353FF" },
  { name: "Framer", color: "#0055FF" },
  { name: "Squarespace", color: "#000000" },
  { name: "Notion", color: "#000000" },
  { name: "Custom HTML", color: "#6FAE7E" },
];

export const stats = [
  { n: "−38%", label: "bounce rate" },
  { n: "+22%", label: "conversion lift" },
  { n: "4.9/5", label: "from 600+ teams" },
];

export const testimonials = [
  {
    quote: "Nexus² transformed how our visitors navigate our complex documentation. Setup took an afternoon.",
    name: "Maya Okafor",
    role: "Product Team Lead",
    company: "Helix Docs",
  },
  {
    quote: "We watched bounce drop the same week we shipped it. I keep waiting for the catch.",
    name: "Jordan Reyes",
    role: "Head of Growth",
    company: "Forager",
  },
  {
    quote: "It's the rare tool our designers, engineers, and support team all asked for the next day.",
    name: "Priya Nair",
    role: "VP Customer Experience",
    company: "Sundial",
  },
];

export const pricingTiers = [
  {
    name: "Trial",
    price: "$0",
    period: "14 days",
    blurb: "Kick the tires on your real site.",
    features: [
      "Website scraping",
      "Flat-file uploads (PDFs, Docs, CSVs)",
      "Up to 2 basic connectors",
      "1,000 queries / month",
      "Full Studio admin access",
    ],
    cta: { label: "Start free trial", href: "/demo", variant: "ghost" as const },
    popular: false,
  },
  {
    name: "Pro",
    price: "$100",
    period: "per month",
    blurb: "For teams shipping to real users.",
    features: [
      "Up to 5 integrations (JIRA, Workspace, SQL, S3, HubSpot…)",
      "Website scraping + flat files",
      "50,000 queries / month",
      "Priority support",
      "Advanced analytics & custom branding",
      "Superadmin dashboard",
    ],
    cta: { label: "Upgrade to Pro", href: "/demo", variant: "primary" as const },
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "talk to us",
    blurb: "Security, scale, and white-glove support.",
    features: [
      "Unlimited integrations",
      "SSO & SAML",
      "Custom SLAs & dedicated CSM",
      "White-label option",
      "On-prem / VPC deployment",
      "Compliance & advanced governance",
    ],
    cta: { label: "Contact sales", href: "/contact", variant: "ghost" as const },
    popular: false,
  },
];

export const faqs = [
  { q: "How long does install take?", a: "Most teams are live in under 5 minutes. Paste the script, point Nexi at your URL, done." },
  { q: "What about data privacy?", a: "Zero tracking by default. No PII stored. EU hosting available. GDPR & CCPA friendly. SOC-2 in progress." },
  { q: "Can I customize the branding?", a: "Colors, logo, copy, voice, even the agent's name. Pro and Enterprise plans get full white-label." },
  { q: "Is there multilingual support?", a: "Out of the box, Nexi answers in 40+ languages and matches the visitor's locale automatically." },
  { q: "How does pricing scale?", a: "By queries, not seats. The Trial covers most pilots; Pro covers most production sites." },
  { q: "What if I exceed my plan limits?", a: "We'll notify you as you approach your limit. You can add a token pack at any time, or upgrade your tier. Your widget never stops working." },
  { q: "What are token top-up packs?", a: "Token packs add capacity to any paid plan and never expire. They kick in automatically once your monthly query allowance is used. Packs are available in 10K, 20K, 50K and 100K tokens — priced in ₹ for India and $ for the United States. You can stack as many as you need." },
  { q: "Can I cancel anytime?", a: "Yes. Monthly plans are month-to-month. Annual plans can be cancelled at renewal." },
];

export const verticals = {
  education: {
    slug: "education",
    name: "Education",
    tint: { from: "oklch(from var(--sage) l c h / 0.18)", to: "oklch(from var(--lilac) l c h / 0.22)" },
    blurb: "Help students find everything campus.",
    prompts: [
      "What courses are available for spring semester?",
      "Show me scholarships for STEM majors",
      "Where do I submit a FERPA request?",
    ],
    integrations: ["Canvas", "Blackboard", "Banner", "Workday Student", "Slate", "Google for Edu"],
    metrics: [
      { n: "−42%", label: "support tickets in the registrar's office" },
      { n: "+28%", label: "completed financial-aid applications" },
      { n: "<60s", label: "average time-to-answer for student queries" },
    ],
    audiences: [
      { name: "For Students", icon: "GraduationCap", lines: ["How do I apply for financial aid?", "Show me scholarships for STEM majors", "What are the library hours?"] },
      { name: "For Faculty", icon: "BookOpen", lines: ["Pull the grading rubric for ENG 201", "Where's the syllabus template?", "Submit absence form."] },
      { name: "For Administrators", icon: "Building2", lines: ["How many students enrolled in CS last term?", "Pull the FERPA compliance doc", "Open the maintenance ticket queue."] },
    ],
    compliance: ["FERPA-aligned", "SOC-2 aligned", "Data residency options", "Role-based access for staff/student records"],
    available: true,
  },
  enterprise: {
    slug: "enterprise",
    name: "Enterprise",
    tint: { from: "oklch(0.7 0.05 255 / 0.2)", to: "oklch(0.6 0.12 280 / 0.2)" },
    blurb: "Make every internal tool searchable in one prompt.",
    prompts: [
      "Pull the latest sprint board for Atlas",
      "Find the security review template",
      "Who owns the billing service runbook?",
    ],
    integrations: ["JIRA", "Confluence", "SharePoint", "Okta", "Slack", "Notion"],
    metrics: [
      { n: "−51%", label: "time spent searching internal docs" },
      { n: "+34%", label: "first-week onboarding velocity" },
      { n: "12m", label: "average payback period" },
    ],
    audiences: [
      { name: "For Engineers", icon: "Code", lines: ["Show me last week's PR reviews", "Find the auth service architecture doc", "Who owns the payments incident channel?"] },
      { name: "For Operations", icon: "Settings2", lines: ["Latest security review template", "Open the vendor risk checklist", "Pull Q3 OKRs for the platform team"] },
      { name: "For Leaders", icon: "Briefcase", lines: ["Summarize this quarter's hiring plan", "Pull last 5 board updates", "Compare retention by region"] },
    ],
    compliance: ["SOC-2 aligned", "SSO & SAML", "Granular RBAC", "Audit logs"],
    available: false,
  },
  ecommerce: {
    slug: "ecommerce",
    name: "E-commerce",
    tint: { from: "oklch(from var(--peach) l c h / 0.3)", to: "oklch(from var(--coral) l c h / 0.3)" },
    blurb: "Turn every shopper question into a sale.",
    prompts: [
      "Do these run small?",
      "Where's my order?",
      "Compare these two coffee makers for me.",
    ],
    integrations: ["Shopify", "Klaviyo", "Recharge", "Gorgias", "Stripe", "Yotpo"],
    metrics: [
      { n: "+22%", label: "add-to-cart conversion" },
      { n: "−38%", label: "PDP bounce rate" },
      { n: "3.4×", label: "ROI in the first quarter" },
    ],
    audiences: [
      { name: "For Shoppers", icon: "ShoppingBag", lines: ["Show me dresses under $80 in size M", "Do these run small?", "When will my order arrive?"] },
      { name: "For CX Teams", icon: "Headphones", lines: ["Open the returns policy", "Where's the wholesale form?", "Find the gift-card balance flow"] },
      { name: "For Merchandisers", icon: "BarChart3", lines: ["Top 10 products this week", "Conversion by collection", "Which size sells out first?"] },
    ],
    compliance: ["PCI-friendly", "GDPR-ready", "Cookieless by default", "Region-locked hosting"],
    available: false,
  },
  healthcare: {
    slug: "healthcare",
    name: "Healthcare",
    tint: { from: "oklch(0.85 0.06 180 / 0.25)", to: "oklch(0.78 0.08 160 / 0.25)" },
    blurb: "Guide patients without growing your call center.",
    prompts: [
      "Book a follow-up with Dr. Lin",
      "Is my insurance accepted?",
      "Where do I park for the cardiology wing?",
    ],
    integrations: ["Epic", "Cerner", "Athenahealth", "Okta", "Twilio", "DocuSign"],
    metrics: [
      { n: "−44%", label: "inbound call volume" },
      { n: "+19%", label: "patient portal adoption" },
      { n: "24/7", label: "always-on triage assistance" },
    ],
    audiences: [
      { name: "For Patients", icon: "Heart", lines: ["Book a follow-up with Dr. Lin", "Is my insurance accepted?", "Where do I park for cardiology?"] },
      { name: "For Front Desk", icon: "Stethoscope", lines: ["Open today's no-show list", "Find the consent form for MRIs", "What's the after-hours protocol?"] },
      { name: "For Administrators", icon: "ClipboardList", lines: ["Pull HIPAA training records", "Last week's portal sign-up rate", "Open the credentialing workflow"] },
    ],
    compliance: ["HIPAA-aligned", "BAA available", "PHI encryption at rest & in transit", "On-prem option"],
    available: false,
  },
} as const;

export type Vertical = (typeof verticals)[keyof typeof verticals];
