import type { Service, Industry, Article, PricingPackage, ProcessStep, FAQ } from './types';

export const services: Service[] = [
  {
    id: 'business-strategy',
    title: 'Business Strategy & Planning',
    description: 'Develop a clear business model, growth strategy and execution roadmap.',
    explanation: 'Many businesses operate without a clearly articulated strategy, making it difficult to prioritise initiatives or measure progress. This service helps you step back, assess where your business stands today, identify where the real growth opportunities lie, and build a practical roadmap that turns strategic intent into scheduled action. The result is a clear direction your entire team can align around.',
    deliverables: [
      'Business model assessment',
      'Market and competitor analysis',
      'Revenue model review',
      'Growth opportunities',
      'Business plans',
      'Annual and multi-year strategy',
      '90-day action roadmap',
    ],
    iconName: 'Target',
  },
  {
    id: 'sales-revenue-growth',
    title: 'Sales & Revenue Growth',
    description: 'Improve customer acquisition, sales conversion and revenue-generation systems.',
    explanation: 'Generating leads is only half the challenge; converting them into paying customers consistently is where most businesses struggle. This service examines your entire sales process from first contact to close, identifies where prospects drop off, and builds a structured, repeatable sales system with clear KPIs. Whether your team is one person or twenty, you will gain a pipeline that is visible, measurable and improvable.',
    deliverables: [
      'Sales strategy',
      'Ideal customer profile',
      'Lead-generation planning',
      'B2B sales processes',
      'CRM pipeline design',
      'Sales scripts and proposals',
      'Sales team KPIs',
      'Performance reporting',
    ],
    iconName: 'TrendingUp',
  },
  {
    id: 'business-operations',
    title: 'Business Operations & Management',
    description: 'Build organised systems that improve productivity, accountability and coordination.',
    explanation: 'As businesses grow, informal ways of working break down and inefficiencies quietly accumulate. This service maps your core processes, identifies bottlenecks and redundant work, and helps you implement standard operating procedures, clear departmental responsibilities and KPI dashboards. The goal is an operation that runs smoothly without depending on any single individual.',
    deliverables: [
      'Operational assessments',
      'Standard Operating Procedures',
      'Department responsibilities',
      'Workflow improvement',
      'KPI dashboards',
      'Management reporting',
      'Cost-efficiency initiatives',
    ],
    iconName: 'Settings',
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning & Profitability',
    description: 'Help management understand business economics and identify opportunities to improve profitability.',
    explanation: 'Rising revenue does not always mean rising profit. This service gives you a clear picture of your business economics, where your margins actually come from, and where costs are eroding them. Through pricing reviews, cash-flow forecasting and break-even analysis, you gain the financial clarity needed to make confident decisions about investments, pricing and cost management.',
    deliverables: [
      'Revenue and expense analysis',
      'Pricing and margin reviews',
      'Budget planning',
      'Cash-flow forecasting',
      'Break-even analysis',
      'Cost-control recommendations',
      'Financial scenarios',
    ],
    iconName: 'BarChart3',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation & Technology',
    description: 'Identify technology opportunities that improve efficiency and support business growth.',
    explanation: 'Technology should serve your business strategy, not drive it. This service helps you evaluate which tools and platforms will genuinely improve your operations, and which are unnecessary complexity. From CRM and ERP selection to automation roadmaps and digital presence planning, you get a practical technology plan aligned with your growth objectives and budget.',
    deliverables: [
      'CRM, ERP and LMS planning',
      'SaaS strategy',
      'Business automation roadmap',
      'Website and digital presence planning',
      'Technology vendor assessment',
      'Digital marketing strategy',
      'Technology implementation planning',
    ],
    iconName: 'Cpu',
  },
  {
    id: 'market-expansion',
    title: 'Market Expansion & Business Development',
    description: 'Help companies enter new markets, develop partnerships and scale their distribution channels.',
    explanation: 'Expansion is one of the most powerful growth levers, but also one of the riskiest if done without proper evaluation. This service helps you assess new markets systematically, understand the competitive landscape and unit economics, choose the right entry mode, and plan a phased rollout that validates demand before you commit significant resources.',
    deliverables: [
      'Market-entry strategies',
      'City-wise and state-wise expansion plans',
      'Channel partner development',
      'Distribution and franchise strategy',
      'B2B partnerships',
      'Corporate client acquisition planning',
      'Commercial model development',
    ],
    iconName: 'Globe',
  },
  {
    id: 'startup-advisory',
    title: 'Startup & New Business Advisory',
    description: 'Help entrepreneurs evaluate business ideas, prepare launch plans and establish sustainable operating models.',
    explanation: 'Starting a business without a structured plan is one of the most common reasons startups struggle. This service helps you validate your idea before investing heavily, build a realistic business model, plan your pricing and budget, and create a 90-day launch roadmap. You begin with clarity on your market, your numbers and your first steps.',
    deliverables: [
      'Business model development',
      'Market validation',
      'Competitor analysis',
      'Pricing and revenue planning',
      'Startup budgets',
      'Team structure',
      'Customer acquisition strategy',
      '90-day launch plan',
    ],
    iconName: 'Rocket',
  },
  {
    id: 'monthly-advisory',
    title: 'Monthly Strategic Advisory',
    description: 'Provide continuing support to business owners and leadership teams.',
    explanation: 'Strategy is not a one-time exercise; it needs regular review and adjustment to stay effective. This service provides ongoing advisory support with monthly strategy reviews, KPI tracking and implementation guidance. It is designed for business owners who want a trusted sounding board and structured accountability as they execute their growth plans.',
    deliverables: [
      'Monthly strategy reviews',
      'Weekly KPI reviews as agreed',
      'Management action plans',
      'Sales and operations reviews',
      'Growth initiative tracking',
      'Quarterly business reviews',
      'Implementation guidance',
    ],
    iconName: 'CalendarCheck',
  },
];

export const industries: Industry[] = [
  { id: 'startups', name: 'Startups & Entrepreneurs', useCase: 'Business model validation, launch planning, fundraising readiness and customer acquisition strategy for new ventures.', iconName: 'Rocket' },
  { id: 'msmes', name: 'MSMEs & Small Businesses', useCase: 'Operational systems, sales process improvement, profitability analysis and growth planning for small and medium enterprises.', iconName: 'Building2' },
  { id: 'manufacturing', name: 'Manufacturing & Industrial', useCase: 'Production efficiency, cost optimisation, supply chain coordination and expansion planning for manufacturing businesses.', iconName: 'Factory' },
  { id: 'retail', name: 'Retail & Distribution', useCase: 'Channel strategy, inventory management, multi-location operations and customer experience improvement for retail businesses.', iconName: 'ShoppingCart' },
  { id: 'it-saas', name: 'IT & SaaS Companies', useCase: 'Product-market fit, pricing strategy, B2B sales pipelines, customer success systems and scalable growth planning.', iconName: 'Code' },
  { id: 'education', name: 'Education & Training', useCase: 'Course portfolio strategy, enrolment funnel optimisation, operational systems and multi-campus or online expansion planning.', iconName: 'GraduationCap' },
  { id: 'logistics', name: 'Logistics & Supply Chain', useCase: 'Route optimisation, cost reduction, service-level improvement, technology adoption and network expansion strategy.', iconName: 'Truck' },
  { id: 'professional-services', name: 'Professional & Business Services', useCase: 'Service delivery systems, client acquisition, pricing strategy, practice management and scalability planning.', iconName: 'Briefcase' },
  { id: 'franchise', name: 'Franchise & Multi-Location', useCase: 'Franchise model design, unit economics, operational standardisation, partner onboarding and expansion strategy.', iconName: 'Network' },
  { id: 'corporate', name: 'Established Companies & Corporate', useCase: 'Strategic reviews, organisational effectiveness, new business unit planning, digital transformation and performance management.', iconName: 'Landmark' },
];

export const pricingPackages: PricingPackage[] = [
  {
    id: 'health-audit',
    name: 'Business Health Audit',
    price: '₹15,000',
    includes: [
      'Initial discovery meeting',
      'Business performance assessment',
      'Review of key business challenges',
      'Priority recommendations',
      'Written improvement roadmap',
    ],
  },
  {
    id: 'growth-strategy',
    name: 'Business Growth Strategy',
    price: '₹30,000',
    popular: true,
    includes: [
      'Business and market assessment',
      'Growth strategy',
      'Revenue opportunity analysis',
      'Action plan',
      'KPI framework',
      'Strategy presentation',
    ],
  },
  {
    id: 'monthly-advisory',
    name: 'Monthly Business Advisory',
    price: '₹40,000',
    period: 'per month',
    includes: [
      'Regular strategy meetings',
      'Business performance reviews',
      'Sales and operational guidance',
      'KPI tracking',
      'Monthly recommendations report',
    ],
  },
  {
    id: 'growth-partner',
    name: 'Strategic Growth Partner',
    price: '₹75,000',
    period: 'per month',
    includes: [
      'Ongoing management advisory',
      'Growth strategy and implementation oversight',
      'Sales and operations reviews',
      'Performance reporting',
      'Expansion planning',
      'Management action tracking',
    ],
  },
];

export const processSteps: ProcessStep[] = [
  { step: 1, title: 'Discovery Consultation', description: 'Understand the business, objectives and challenges.' },
  { step: 2, title: 'Business Assessment', description: 'Review available sales, financial, operational and market information.' },
  { step: 3, title: 'Strategic Recommendations', description: 'Identify priorities, opportunities and improvement areas.' },
  { step: 4, title: 'Action Plan', description: 'Develop milestones, responsibilities and measurable KPIs.' },
  { step: 5, title: 'Implementation Support', description: 'Guide the client through agreed initiatives.' },
  { step: 6, title: 'Performance Review', description: 'Track progress and refine the strategy.' },
];

export const faqs: FAQ[] = [
  {
    question: 'What does a business consultant do?',
    answer: 'A business consultant helps you identify problems and opportunities in your business, develops practical strategies to address them, and supports you through implementation. This includes analysing operations, reviewing sales and financial performance, recommending improvements, creating action plans with measurable KPIs, and providing ongoing guidance to help your business grow.',
  },
  {
    question: 'Which types of businesses can engage your consulting services?',
    answer: 'We work with startups, MSMEs, established companies and corporate organisations across industries including manufacturing, retail, IT and SaaS, education, logistics, professional services, franchise businesses and more. If you are looking to improve strategy, sales, operations or plan expansion, we can help.',
  },
  {
    question: 'How much does business consulting cost?',
    answer: 'Our indicative packages start from ₹15,000 for a Business Health Audit, ₹30,000 for a Growth Strategy engagement, ₹40,000 per month for Monthly Advisory, and ₹75,000 per month for a Strategic Growth Partnership. Final fees depend on business size, scope, complexity and engagement duration, and are specified in the client proposal.',
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer: 'Yes. We have a dedicated Startup & New Business Advisory service that helps entrepreneurs evaluate ideas, validate markets, plan launches and build sustainable operating models. We tailor our approach to the stage and resources of each business.',
  },
  {
    question: 'Can you help improve sales and profitability?',
    answer: 'Yes. Our Sales & Revenue Growth and Financial Planning & Profitability services are specifically designed to help you improve customer acquisition, sales conversion, pricing, cost control and overall profitability. We develop practical systems and KPIs that help you track and sustain improvements.',
  },
  {
    question: 'Do you provide implementation support?',
    answer: 'Yes. Our consulting process includes implementation support where we guide you through agreed initiatives, not just recommendations. The Monthly Strategic Advisory and Strategic Growth Partner packages provide continuing hands-on support for ongoing initiatives.',
  },
  {
    question: 'How long does a consulting engagement last?',
    answer: 'Engagement duration depends on the scope and objectives. A Business Health Audit may be completed in a few sessions, while a Growth Strategy engagement typically spans several weeks. Monthly advisory and growth partner engagements are ongoing relationships that continue for as long as you need support.',
  },
  {
    question: 'Do you offer monthly advisory services?',
    answer: 'Yes. We offer both Monthly Business Advisory and Strategic Growth Partner packages that provide regular strategy meetings, performance reviews, KPI tracking and implementation guidance on a continuing basis.',
  },
  {
    question: 'Is revenue growth guaranteed?',
    answer: 'No. Outcomes depend on the client\'s circumstances, market conditions, and the extent to which recommendations are implemented. We do not guarantee specific results. Our role is to provide expert analysis, practical strategies and implementation support to give your business the best opportunity for growth.',
  },
  {
    question: 'How can I book a consultation?',
    answer: 'You can book a consultation by using the "Book a Consultation" button on our website, filling out the consultation request form, or contacting us directly via phone, email or WhatsApp. We will get back to you to schedule a convenient time.',
  },
];

export const valueProps = [
  { title: 'Business Strategy & Planning', iconName: 'Target' },
  { title: 'Sales & Revenue Growth', iconName: 'TrendingUp' },
  { title: 'Operational Excellence', iconName: 'Settings' },
  { title: 'Digital Transformation', iconName: 'Cpu' },
  { title: 'Market Expansion', iconName: 'Globe' },
];

export const principles = [
  { title: 'Practical Business Solutions', description: 'Strategies grounded in your real business context, not theoretical frameworks.', iconName: 'CheckCircle' },
  { title: 'Data-Informed Decisions', description: 'Recommendations based on business data, market information and structured analysis.', iconName: 'BarChart3' },
  { title: 'Measurable Objectives', description: 'Every initiative tied to clear KPIs so progress is visible and trackable.', iconName: 'Target' },
  { title: 'Transparent Communication', description: 'Clear, honest reporting on progress, challenges and results throughout the engagement.', iconName: 'MessageSquare' },
  { title: 'Long-Term Client Relationships', description: 'A partnership approach focused on sustained growth, not one-time projects.', iconName: 'Handshake' },
];
