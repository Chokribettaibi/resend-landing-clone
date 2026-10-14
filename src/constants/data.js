// This file stores all landing-page text, code snippets, and marketing arrays.
// To update copy, links, feature cards, or testimonials, edit the exported objects in this file.
// Components import these values rather than embedding strings inline for easier reuse and maintenance.
export const navItems = [
  { label: 'Product', href: '#' },
  { label: 'Customers', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Docs', href: '#' },
  { label: 'Blog', href: '#' }
];

export const hero = {
  badge: 'Announcing Resend Forward >',
  headline: 'Email for developers',
  subtitle:
    'Resend helps teams send transactional and product emails reliably, with a beautiful API and support that feels native to the developer workflow.',
  primaryCta: 'Get started',
  secondaryCta: 'Book a demo'
};

export const codeWindow = {
  title: 'send-email.ts',
  lines: [
    { content: 'import { Resend } from "@resend/node";', color: 'text-[#3b9eff]' },
    { content: '', color: 'text-[#f0f0f0]' },
    { content: 'const resend = new Resend(process.env.RESEND_API_KEY);', color: 'text-[#f0f0f0]' },
    { content: '', color: 'text-[#f0f0f0]' },
    { content: 'await resend.emails.send({', color: 'text-[#f0f0f0]' },
    { content: '  from: "Acme <onboarding@acme.dev>",', color: 'text-[#9281f7]' },
    { content: '  to: ["jordan@acme.dev"],', color: 'text-[#9281f7]' },
    { content: '  subject: "Welcome aboard!"', color: 'text-[#f0f0f0]' },
    { content: '  html: "<h1>Hello world</h1>"', color: 'text-[#9281f7]' },
    { content: '});', color: 'text-[#f0f0f0]' },
    { content: '', color: 'text-[#f0f0f0]' },
    { content: 'console.log("Delivered successfully")', color: 'text-[#3ad389]' }
  ]
};

export const customerLogos = [
  'Raycast',
  'Warner Bros.',
  'Max',
  'Vercel',
  'Stripe',
  'Linear',
  'Notion',
  'Ramp'
];

export const features = [
  {
    title: 'Reliable delivery',
    description: 'Reach inboxes with delivery logic, retry handling, and observability built in from day one.',
    accent: 'Delivered worldwide'
  },
  {
    title: 'Inbox preview',
    description: 'Preview template rendering and email content before sending to production recipients.',
    accent: 'Real-time test inbox'
  },
  {
    title: 'Transactional API',
    description: 'Ship customer and product email flows through a simple API your team will actually enjoy using.',
    accent: '1 API, all workflows'
  },
  {
    title: 'Analytics controls',
    description: 'Track opens, clicks, bounces, and trends with clear dashboards built for product teams.',
    accent: 'Actionable metrics'
  },
  {
    title: 'Templates',
    description: 'Design dynamic, reusable email templates with variables, logic, and branded layouts.',
    accent: 'Reusable blocks'
  },
  {
    title: 'Team workflows',
    description: 'Manage senders, permissions, and environments across your entire engineering organization.',
    accent: 'Fast approval cycles'
  },
  {
    title: 'Multi-domain sending',
    description: 'Send on any domain with the controls and deliverability safeguards your product needs.',
    accent: 'Domain ready'
  },
  {
    title: 'Developer-first docs',
    description: 'Ship faster with examples, SDKs, and clear docs written by engineers who build products.',
    accent: 'Built for shipping'
  }
];

export const testimonials = [
  {
    quote:
      'We moved our transactional emails to Resend and immediately saw stronger reliability with less operational overhead.',
    person: 'Ari Martinez',
    role: 'Engineering Lead, Northstar'
  },
  {
    quote:
      'The API is simple enough for product engineers to pick up, but robust enough for our scale and compliance needs.',
    person: 'Nina Patel',
    role: 'VP Product, Fieldnote'
  },
  {
    quote:
      'Resend gave us a cleaner pipeline for onboarding, account activity, and product updates without compromising speed.',
    person: 'Leo Park',
    role: 'CTO, Harbor Labs'
  },
  {
    quote:
      'We launched in a week and our team stopped worrying about deliverability because the defaults were already excellent.',
    person: 'Cara Brooks',
    role: 'Founder, Arc & Co.'
  }
];

export const footerLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' }
];
