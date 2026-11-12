import { ServiceItem, FaqItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    category: 'development',
    subtitle: 'Transform your online presence with custom web solutions. We specialize in building fast, secure, and mobile-friendly websites featuring seamless database integration, intuitive navigation, and user-focused design.',
    features: [
      'Sub-second load times with modern React & Next.js engines',
      'Mobile-first responsive architecture tested across 40+ devices',
      'Conversion-centered UX with streamlined inquiry funnels',
      'Enterprise CMS & secure backend database integration'
    ],
    metrics: '<1.1s Avg Load Speed · +42% Conversion Lift',
    badge: 'Core Flagship',
    iconName: 'Globe'
  },
  {
    id: 'app-dev',
    title: 'App Development',
    category: 'development',
    subtitle: 'We design and develop custom, high-performance digital applications tailored to your institutional needs. From intuitive, responsive user interfaces built with modern frameworks to robust backend APIs and secure database integration, we deliver seamless and scalable digital experiences.',
    features: [
      'Native-feel Progressive Web Apps (PWA) & cross-platform apps',
      'Robust REST & GraphQL API orchestration',
      'Role-based access control (Admin, Student, Faculty, Staff)',
      'Real-time notifications, offline syncing, and zero data loss'
    ],
    metrics: '99.98% Uptime SLA · Enterprise Grade',
    badge: 'Custom Architecture',
    iconName: 'Smartphone'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    category: 'marketing',
    subtitle: "Grow your institute's presence with results-driven digital campaigns. From social media engagement across platforms like Instagram, Facebook, LinkedIn, and YouTube to local search visibility, we help you reach students and parents looking for quality education and holistic growth.",
    features: [
      'High-intent Google Ads & search keyword dominance',
      'Targeted social media management across Meta, LinkedIn & YouTube',
      'Local SEO optimization for hyper-targeted regional inquiries',
      'Multi-touch attribution tracking to measure cost-per-acquisition'
    ],
    metrics: '3.8x Avg ROAS · -34% Lower Lead Cost',
    badge: 'High ROI',
    iconName: 'TrendingUp'
  },
  {
    id: 'web-maintenance',
    title: 'Website Maintenance & Security',
    category: 'infrastructure',
    subtitle: 'Protect your digital investment. We handle ongoing updates, speed tuning, and security monitoring so your website remains lightning-fast, secure, and fully functional 24 hours a day, 365 days a year.',
    features: [
      'Automated daily encrypted offsite cloud backups',
      'Continuous SSL, firewall, and DDoS mitigation monitoring',
      'Quarterly performance tuning and Core Web Vitals audits',
      'Guaranteed 2-hour priority emergency response SLA'
    ],
    metrics: '24/7 Threat Protection · Zero Downtime',
    badge: 'Proactive Care',
    iconName: 'ShieldCheck'
  },
  {
    id: 'graphic-design',
    title: 'Graphic & Brand Design',
    category: 'marketing',
    subtitle: 'Bring your brand to life with stunning visuals. We design professional banners, course slides, identity kits, and promotional materials tailored to engage students, clients, and corporate partners alike.',
    features: [
      'Conversion-tested ad creative variants for social & display',
      'Comprehensive brand typography and UI design design systems',
      'Custom infographics, course syllabus decks, and whitepapers',
      'Vector asset export ready for web, mobile, and print'
    ],
    metrics: '+68% Click-Through Rate on Custom Creatives',
    badge: 'Brand Polish',
    iconName: 'Palette'
  },
  {
    id: 'hosting-domain',
    title: 'Domain & Cloud Hosting',
    category: 'infrastructure',
    subtitle: 'Ensure your digital platform is always online, lightning-fast, and completely secure. We provide reliable domain registration, seamless DNS management, and high-performance hosting solutions configured specifically to keep your website and student registration workflows running smoothly 24/7.',
    features: [
      'Global multi-zone Edge CDN caching for instantaneous delivery',
      'Zero-hassle DNS propagation and custom business email routing',
      'Auto-scaling resources that absorb sudden viral traffic spikes',
      'Automated SSL renewal and HTTP/3 protocol acceleration'
    ],
    metrics: '99.99% Server Reliability · Global CDN',
    badge: 'Fast Infrastructure',
    iconName: 'Server'
  }
];

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    category: 'Full-Stack Engineering',
    title: 'Custom Web & Mobile Application Engineering',
    tagline: 'High-performance digital products engineered for sub-second speed, flawless usability, and predictable customer conversion.',
    stats: [
      { label: 'Avg Speed Score', value: '98/100' },
      { label: 'Conversion Lift', value: '+42%' },
      { label: 'Uptime SLA', value: '99.98%' }
    ],
    features: ['React & Next.js Architecture', 'Custom Database Integration', 'Mobile-First Experience'],
    ctaLabel: 'Explore Web Engineering',
    accentColor: 'teal'
  },
  {
    id: 'slide-2',
    category: 'E-Learning & Campus Tech',
    title: 'Interactive E-Learning & Student Portals',
    tagline: 'Purpose-built LMS platforms supporting HD live lecture streaming, batch enrollments, secure payment gateways, and automated certificates.',
    stats: [
      { label: 'Launch Timeline', value: '3-4 Weeks' },
      { label: 'Concurrent Users', value: '10,000+' },
      { label: 'Dropout Reduction', value: '-35%' }
    ],
    features: ['Live Video Classroom Integration', 'Automated Grade & Quiz Engine', 'Multi-Tier Student Access'],
    ctaLabel: 'Explore E-Learning Suite',
    accentColor: 'indigo'
  },
  {
    id: 'slide-3',
    category: 'Paid Growth & SEO',
    title: 'Precision Paid Ads & Organic Search Dominance',
    tagline: 'Eliminate wasted marketing ad spend. We engineer targeted Google Ads and high-converting social campaigns with rigorous attribution tracking.',
    stats: [
      { label: 'Average ROAS', value: '3.8x' },
      { label: 'Lower Cost Per Lead', value: '-34%' },
      { label: 'Qualified Inbounds', value: '+185%' }
    ],
    features: ['Google Search & Performance Max', 'Conversion-Focused Ad Creatives', 'Real-Time ROI Dashboard'],
    ctaLabel: 'Explore Growth Engine',
    accentColor: 'amber'
  },
  {
    id: 'slide-4',
    category: 'Managed Infrastructure',
    title: '24/7 Enterprise Hosting & Zero-Downtime Maintenance',
    tagline: 'Never worry about server crashes, slow pages, or security vulnerabilities during peak enrollment or marketing campaign launches.',
    stats: [
      { label: 'Edge Latency', value: '<25ms' },
      { label: 'Security Threats Blocked', value: '100%' },
      { label: 'Backup Cadence', value: 'Daily Cloud' }
    ],
    features: ['High-Velocity Global CDN', 'Automated Daily Backups', 'Guaranteed 2-Hour SLA Response'],
    ctaLabel: 'View Managed Plans',
    accentColor: 'emerald'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 1,
    category: 'E-Learning & Development',
    question: 'Which type of E-Learning platforms have you developed in the past?',
    answer: 'We have built a wide range of educational platforms including single-instructor course portals, multi-instructor academic marketplaces, live video batch systems, subscription-based learning hubs, and customized corporate B2B training portals across technical, academic, and professional sectors.'
  },
  {
    id: 2,
    category: 'Timelines & Delivery',
    question: 'How much time does it take for an online learning platform to go live?',
    answer: 'It depends on your required feature set. Developing a full-featured E-Learning platform involves setting up live streaming, video hosting, user roles, student tracking, and payment gateways. At Sunflower Digital, we focus on efficient, high-quality development. Typically, a standard live course platform takes about 3 to 4 weeks to launch, and we also offer accelerated fast-track sprints to meet urgent admission or launch dates.'
  },
  {
    id: 3,
    category: 'Support & Longevity',
    question: 'What if I face any issues on my website or platform after delivery?',
    answer: 'We stand firmly behind our work with a 30-day post-launch warranty and comprehensive ongoing maintenance packages. Our technical team monitors uptime 24/7, applies proactive security patches, optimizes server resources, and is on standby for emergency bug resolution.'
  },
  {
    id: 4,
    category: 'Conversion & Growth',
    question: 'How do you ensure our new website or landing page actually converts visitors into paying customers?',
    answer: 'We build with a conversion-first methodology: clean value propositions above the fold, frictionless multi-step inquiry funnels, micro-interactions that build confidence, social proof placement directly adjacent to conversion points, sub-second page load times to prevent bounce, and clear single-line call-to-actions tailored for decision makers.'
  },
  {
    id: 5,
    category: 'Pricing & Contracts',
    question: 'Are there hidden hosting or maintenance fees after the initial build?',
    answer: 'No. All our quotes provide a transparent breakdown of upfront design and development costs alongside optional managed hosting and support tiers. You retain 100% intellectual property ownership of your codebase, domain, and data.'
  }
];

export const TRUST_PROOFS = [
  { value: '240+', label: 'Digital Platforms Delivered' },
  { value: '3.8x', label: 'Average Client Ad ROAS' },
  { value: '< 1.1s', label: 'Average Page Load Time' },
  { value: '99.4%', label: 'Long-Term Client Retention' }
];

export const CASE_STUDIES = [
  {
    client: 'Apex Academy Online',
    industry: 'EdTech & Professional Certification',
    outcome: '+214% Enrollment Inquiries in 90 Days',
    summary: 'Redesigned sluggish legacy portal into an ultra-fast React LMS with automated video batches and seamless Stripe/Razorpay payment flows.',
    metricName: 'Conversion Rate',
    beforeMetric: '1.2%',
    afterMetric: '4.6%',
    servicesUsed: ['E-Learning LMS', 'Web Development', 'Google Ads']
  },
  {
    client: 'Vanguard Industrial Services',
    industry: 'B2B Technical Services',
    outcome: '$1.8M Qualified Sales Pipeline Generated',
    summary: 'Restructured B2B lead generation funnel with an interactive pricing estimator and hyper-targeted search ads for institutional procurement officers.',
    metricName: 'Cost Per Qualified Lead',
    beforeMetric: '$148.00',
    afterMetric: '$46.50',
    servicesUsed: ['Website Redesign', 'Google Search Ads', 'SEO']
  },
  {
    client: 'Sunburst Medical Hub',
    industry: 'Healthcare & Patient Portals',
    outcome: '99.99% Uptime During Peak Registration',
    summary: 'Migrated legacy WordPress infrastructure to a high-availability cloud architecture with automated appointment booking and patient SMS reminders.',
    metricName: 'Bounce Rate',
    beforeMetric: '64%',
    afterMetric: '22%',
    servicesUsed: ['App Development', 'Cloud Hosting', 'Maintenance']
  }
];
