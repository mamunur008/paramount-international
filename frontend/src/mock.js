// All data is MOCKED (frontend-only). Company: Paramount International.

export const BRAND = {
  name: "Paramount International",
  phone: "(123) 456 789",
  phoneHref: "tel:123456789",
  email: "info@paramountintl.com",
  address: "123 Innovation Drive, Tech City, TX 75001",
};

const U = (id, w = 900) => `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&q=85&w=${w}`;

export const IMAGES = {
  heroVisual: U("photo-1573164713988-8665fc963095"),
  whyChoose: U("photo-1522071820081-009f0129c71c"),
  whyChooseBg: U("photo-1557804506-669a67965ba0"),
  about: U("photo-1557804506-669a67965ba0"),
  whatWeHighlight: U("photo-1762163516269-3c143e04175c"),
  whatWe: U("flagged/photo-1579274216947-86eaa4b00475"),
  features: U("photo-1550751827-4bd374c3f58b"),
  authors: [
    U("photo-1494790108377-be9c29b29330", 200),
    U("photo-1560250097-0b93528c311a", 200),
    U("photo-1507003211169-0a1dd7228f2d", 200),
    U("photo-1573496359142-b8d87734a5a2", 200),
  ],
  services: [
    U("photo-1555066931-4365d14bab8c", 1200),
    U("photo-1563986768609-322da13575f3", 1200),
    U("photo-1558494949-ef010cbdcc31", 1200),
    U("photo-1544197150-b99a580bb7a8", 1200),
  ],
  servicesAlt: [
    U("photo-1522071820081-009f0129c71c"),
    U("photo-1510511459019-5dda7724fd87"),
    U("photo-1597852074816-d933c7d2b988"),
    U("photo-1451187580459-43490279c0fa"),
  ],
  projects: [
    U("photo-1614064548237-096f735f344f", 1200),
    U("photo-1667984390535-6d03cff0b11a", 1200),
    U("photo-1506399309177-3b43e99fead2", 1200),
  ],
  projectsAlt: [
    U("photo-1551288049-bebda4e38f71"),
    U("photo-1460925895917-afdab827c52f"),
    U("photo-1523240795612-9a054b0db644"),
  ],
  blog: [
    U("photo-1667984390535-6d03cff0b11a", 1200),
    U("photo-1573164713988-8665fc963095", 1200),
    U("photo-1550751827-4bd374c3f58b", 1200),
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export const HERO = {
  welcome: "Welcome Paramount International",
  title: "Empowering our Business with Smart IT Solutions",
  desc: "We provide cutting-edge IT services designed to streamline operations, enhance security & drive innovation. Our expert solutions are tailored to meet your unique business.",
  cta: "Get a Free Consultation",
  benefits: [
    { title: "End-to-End IT Solutions", desc: "From consulting to deployment we cover your full digital journey." },
    { title: "Cybersecurity Approach", desc: "Layered protection that keeps your people, data and systems safe." },
    { title: "24/7 Support & Monitoring", desc: "Round-the-clock engineers watching your infrastructure so you don't have to." },
  ],
  stats: [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "500+", label: "Projects Complete" },
  ],
};

export const ABOUT = {
  eyebrow: "About us",
  title: "Discover our journey of empowering businesses through cutting edge IT solutions, expert support, and innovation that drives growth, security, and long term digital transformation success.",
  note: "Get your free quote today and discover smart, scalable IT solutions your business needs.",
  rating: "4.9/5",
  reviews: "Over 4200 Reviews",
  counters: [
    { value: "25+", label: "Years delivering trusted IT solutions across multiple industries." },
    { value: "98%", label: "Client retention rate built on transparent, measurable results." },
    { value: "24/7", label: "Proactive monitoring and support from certified engineers." },
    { value: "99.9%", label: "Guaranteed uptime across every platform we manage." },
  ],
};

export const SERVICES = {
  eyebrow: "Our Services",
  title: "Empowering your growth through expert IT service offerings",
  items: [
    {
      slug: "software-development",
      icon: "Code2",
      title: "Software Development",
      desc: "Custom software & app development to meet your unique needs.",
      detail: {
        headline: "Software built around the way your business actually works",
        image: IMAGES.services[0],
        image2: IMAGES.servicesAlt[0],
        intro: [
          "Paramount International designs and engineers bespoke software that mirrors your real operations. From discovery workshops to post-launch optimisation, our product teams combine modern architecture, rigorous QA and transparent delivery to ship solutions that scale with you.",
          "Whether you need a customer-facing mobile app, an internal operations platform or an API layer that unifies legacy systems, we bring senior engineers, UX designers and delivery managers together under one accountable roof.",
        ],
        features: [
          "Web, mobile & desktop application development",
          "Cloud-native microservice architecture",
          "API design, integration & modernisation",
          "Automated testing & CI/CD pipelines",
          "UX research, prototyping & design systems",
          "Long-term maintenance & feature roadmaps",
        ],
        benefitsTitle: "Benefits of partnering with us",
        benefits: [
          { title: "Faster time to market", desc: "Agile two-week sprints with live demos, so value lands early and often." },
          { title: "Built to scale", desc: "Cloud-native foundations and clean code that grow with traffic, users and ambition." },
          { title: "Total ownership", desc: "You own the code, the documentation and the roadmap. No lock-in, ever." },
        ],
        whyTitle: "Why choose Paramount for software development",
        why: "Our engineers have shipped platforms for finance, healthcare, logistics and education. We pair deep technical expertise with a product mindset, measuring success by the outcomes your users feel, not by lines of code.",
        faqs: [
          { q: "Which technologies do you work with?", a: "We are stack-agnostic but most often deliver with React, Node.js, Python, .NET, Flutter and the major cloud platforms (AWS, Azure, Google Cloud)." },
          { q: "How do you estimate a project?", a: "After a short discovery phase we provide a fixed-scope estimate for the first release and a transparent sprint rate for ongoing development." },
          { q: "Do you provide support after launch?", a: "Yes. Every engagement includes a warranty period, followed by optional SLAs for monitoring, maintenance and feature work." },
        ],
      },
    },
    {
      slug: "cybersecurity-services",
      icon: "ShieldCheck",
      title: "Cybersecurity Services",
      desc: "Advanced protection to keep your systems safe & secure.",
      detail: {
        headline: "Security that works as hard as your business does",
        image: IMAGES.services[1],
        image2: IMAGES.servicesAlt[1],
        intro: [
          "Threats evolve daily, and so do we. Our cybersecurity practice protects organisations with a layered defence model that spans people, process and technology, from the endpoint to the cloud.",
          "We start with a risk assessment that maps your attack surface, then design controls that reduce exposure without slowing your teams down. Continuous monitoring and rapid incident response close the loop.",
        ],
        features: [
          "Security audits & penetration testing",
          "24/7 threat detection & response (SOC)",
          "Identity, access & zero-trust architecture",
          "Endpoint, email & network protection",
          "Compliance readiness (ISO 27001, SOC 2, GDPR)",
          "Security awareness training for staff",
        ],
        benefitsTitle: "What a stronger security posture delivers",
        benefits: [
          { title: "Reduced risk", desc: "Close the gaps attackers exploit before they become headlines." },
          { title: "Regulatory confidence", desc: "Evidence-ready controls that satisfy auditors and customers alike." },
          { title: "Business continuity", desc: "Tested incident playbooks keep operations running when it matters most." },
        ],
        whyTitle: "Why choose Paramount for cybersecurity",
        why: "Our certified analysts (CISSP, CEH, OSCP) hold Microsoft, Cisco and AWS security credentials and follow global standards to safeguard your data and infrastructure around the clock.",
        faqs: [
          { q: "How quickly can you respond to an incident?", a: "Our SOC acknowledges critical alerts within 15 minutes and begins containment immediately under an agreed response plan." },
          { q: "Do you work with small businesses?", a: "Absolutely. We package enterprise-grade protection into right-sized plans for teams of 10 to 10,000." },
          { q: "Can you help us pass a compliance audit?", a: "Yes. We perform gap analyses, implement controls and prepare the documentation auditors expect." },
        ],
      },
    },
    {
      slug: "it-infrastructure-setup",
      icon: "Server",
      title: "IT Infrastructure Setup",
      desc: "Reliable infrastructure design, setup, and management.",
      detail: {
        headline: "Infrastructure designed for performance, resilience and growth",
        image: IMAGES.services[2],
        image2: IMAGES.servicesAlt[2],
        intro: [
          "Great software needs great foundations. We design, deploy and manage on-premise, cloud and hybrid infrastructure that is secure by default, observable end-to-end and ready to scale on demand.",
          "From a single office network refresh to multi-region cloud landing zones, our architects document every decision and hand over an environment your team can confidently operate.",
        ],
        features: [
          "Network design, cabling & Wi-Fi deployment",
          "Server, storage & virtualisation platforms",
          "Cloud migration & landing-zone architecture",
          "Infrastructure as Code (Terraform, Ansible)",
          "Observability, logging & capacity planning",
          "Managed services & lifecycle refresh",
        ],
        benefitsTitle: "Why modern infrastructure matters",
        benefits: [
          { title: "Predictable performance", desc: "Right-sized environments eliminate bottlenecks and surprise outages." },
          { title: "Lower total cost", desc: "Automation and consolidation cut licence, energy and admin overhead." },
          { title: "Future-ready", desc: "Modular designs that absorb new workloads without a rebuild." },
        ],
        whyTitle: "Why choose Paramount for infrastructure",
        why: "We hold partner-level certifications with Microsoft, Cisco and AWS, and we have delivered more than 500 infrastructure projects with a 99.9% uptime record.",
        faqs: [
          { q: "Can you migrate us to the cloud without downtime?", a: "Yes. We use phased, blue-green cut-overs and rehearse every migration so production is never interrupted." },
          { q: "Do you manage infrastructure after setup?", a: "We offer flexible managed-service tiers covering monitoring, patching, backups and 24/7 support." },
          { q: "How do you handle documentation?", a: "Every environment ships with architecture diagrams, runbooks and Infrastructure-as-Code repositories." },
        ],
      },
    },
    {
      slug: "data-backup-recovery",
      icon: "DatabaseBackup",
      title: "Data Backup & Recovery",
      desc: "Secure backups and fast recovery to protect your data.",
      detail: {
        headline: "Never lose a byte. Never lose a day.",
        image: IMAGES.services[3],
        image2: IMAGES.servicesAlt[3],
        intro: [
          "Ransomware, hardware failure and human error are not a matter of if but when. Our backup and disaster-recovery services make sure your data is protected, verified and restorable within minutes.",
          "We design recovery objectives around your business tolerance, automate immutable backups across locations and run regular restore drills so recovery is a routine, not a crisis.",
        ],
        features: [
          "Immutable, encrypted backups (3-2-1 strategy)",
          "Cloud, on-premise & hybrid replication",
          "Microsoft 365 & SaaS data protection",
          "Disaster-recovery planning & RTO/RPO design",
          "Quarterly restore testing & reporting",
          "Ransomware recovery & forensics support",
        ],
        benefitsTitle: "Peace of mind, measured",
        benefits: [
          { title: "Minutes, not days", desc: "Orchestrated fail-over gets critical systems back online fast." },
          { title: "Verified restores", desc: "Automated integrity checks prove every backup is actually recoverable." },
          { title: "Compliance built in", desc: "Retention policies that meet legal and industry requirements." },
        ],
        whyTitle: "Why choose Paramount for data protection",
        why: "We protect petabytes of client data every night and have never missed a recovery objective. Our engineers treat your data with the care we give our own.",
        faqs: [
          { q: "How often are backups taken?", a: "As often as your recovery point objective requires, from continuous replication to nightly snapshots." },
          { q: "Where is our data stored?", a: "In encrypted, geographically separate locations you choose, with full data-residency compliance." },
          { q: "Do you test restores?", a: "Yes. Automated integrity checks run daily and full restore drills are scheduled quarterly with reports." },
        ],
      },
    },
  ],
};

export const WHY_CHOOSE = {
  eyebrow: "Why choose us",
  title: "Why smart businesses choose our expert IT support services",
  cards: [
    { value: "1K+", label: "Businesses supported with certified Microsoft, Cisco & AWS expertise." },
    { value: "98%", label: "Delivering trusted IT solutions across multiple industries." },
    { value: "320", label: "Security standards we follow to safeguard your data & infrastructure." },
  ],
  support: {
    value: "24/7",
    title: "Technical Support",
    desc: "Round-the-clock service to keep your business running smoothly.",
  },
};

export const HOW_IT_WORKS = {
  eyebrow: "How It Works",
  title: "Step-by-step breakdown of our reliable IT service approach",
  note: "Join us to build smarter, faster, and future-ready technology solutions.",
  steps: [
    { no: "01", title: "Discovery & Consultation", desc: "We understand your business goals and identify your IT needs through collaborative sessions." },
    { no: "02", title: "Custom Strategy Design", desc: "We design a tailored roadmap aligned with your objectives and budget." },
    { no: "03", title: "Seamless Implementation", desc: "We deploy solutions efficiently with minimal disruption to your operations." },
    { no: "04", title: "Ongoing Support & Optimization", desc: "We monitor, maintain and continuously optimize your systems." },
  ],
};

export const WHAT_WE_DO = {
  eyebrow: "What we do",
  title: "What we do to empower your business with technology",
  desc: "At the heart of our services is a commitment to helping your business thrive in a digital world. We offer a comprehensive suite of IT solutions, from infrastructure management and cloud services to cybersecurity.",
  cta: "Get a Free Consultation",
  caption: "Unlock powerful tools and technologies that drive smarter, faster business operations.",
  tabs: [
    { icon: "Lightbulb", title: "IT Consulting & Strategy" },
    { icon: "DatabaseBackup", title: "Data Backup & Recovery" },
    { icon: "Cloud", title: "Integration Cloud Service" },
  ],
};

export const PROJECTS = {
  eyebrow: "Our Project",
  title: "Explore our most successful IT projects across multiple industries",
  items: [
    {
      slug: "enterprise-network-security-enhancement",
      tags: ["Infrastructure", "Security"],
      title: "Enterprise Network Security Enhancement",
      image: IMAGES.projects[0],
      image2: IMAGES.projectsAlt[0],
      meta: { client: "Northwind Logistics", category: "Infrastructure", date: "March 2026", duration: "14 Weeks", location: "Dallas, TX" },
      overview: [
        "Northwind Logistics operates 42 distribution hubs across North America on a network that had grown organically for a decade. Flat segmentation, ageing firewalls and inconsistent access policies left the business exposed and slowed every new site launch.",
        "Paramount International was engaged to redesign the enterprise network with security at its core, without interrupting the 24-hour flow of goods that the company depends on.",
      ],
      problems: [
        { title: "Flat network topology", desc: "A single broadcast domain per hub meant one compromised device could reach warehouse robotics, finance systems and guest Wi-Fi alike." },
        { title: "End-of-life hardware", desc: "Firewalls and core switches were out of vendor support, with no path to receive security patches." },
        { title: "No central visibility", desc: "Each site was managed locally, so security teams had no unified view of traffic, incidents or policy drift." },
      ],
      solution: {
        intro: "We delivered a zero-trust network architecture built on micro-segmentation, next-generation firewalls and a cloud-managed control plane, rolled out site by site over 14 weeks with zero unplanned downtime.",
        quote: "The Paramount team treated our uptime like it was their own. We gained enterprise-grade security and somehow the network got faster.",
        quoteBy: "Head of IT, Northwind Logistics",
        list: ["Micro-segmented VLAN design per business function", "Next-gen firewalls with IDS/IPS at every hub", "Cloud-managed SD-WAN with encrypted tunnels", "Centralised identity-based access (802.1X)", "Unified SIEM dashboard for the security team", "Automated configuration compliance checks"],
      },
      results: [
        { no: "01", title: "Zero downtime", desc: "All 42 hubs migrated during live operations without a single unplanned outage." },
        { no: "02", title: "87% fewer alerts", desc: "Noise reduction through segmentation and tuned detection rules." },
        { no: "03", title: "3x faster rollout", desc: "New sites now come online in two days using templated configurations." },
        { no: "04", title: "Audit passed", desc: "Achieved ISO 27001 network controls on the first external assessment." },
      ],
    },
    {
      slug: "financeedge-cloud-security-optimization",
      tags: ["Industry-Specific", "Cloud"],
      title: "FinanceEdge Cloud Security Optimization",
      image: IMAGES.projects[1],
      image2: IMAGES.projectsAlt[1],
      meta: { client: "FinanceEdge Capital", category: "Cloud Security", date: "January 2026", duration: "10 Weeks", location: "New York, NY" },
      overview: [
        "FinanceEdge, a fast-growing wealth-management platform, had migrated to the cloud quickly to keep up with demand. Speed came at a cost: sprawling permissions, unencrypted storage buckets and a compliance deadline looming from regulators.",
        "Paramount International was brought in to harden the environment, automate compliance evidence and build security into the engineering workflow rather than bolting it on afterwards.",
      ],
      problems: [
        { title: "Over-privileged access", desc: "Hundreds of IAM roles with administrator rights and no review process." },
        { title: "Inconsistent encryption", desc: "Customer data sat in storage with mixed encryption standards and manual key handling." },
        { title: "Manual compliance", desc: "Evidence for SOC 2 was gathered by hand in spreadsheets each quarter." },
      ],
      solution: {
        intro: "We implemented least-privilege identity, policy-as-code guardrails and continuous compliance monitoring across the entire cloud estate, embedding security checks directly into the CI/CD pipeline.",
        quote: "Security used to be the thing that slowed our releases. Now it runs quietly in the background and our auditors love us.",
        quoteBy: "CTO, FinanceEdge Capital",
        list: ["IAM redesign with just-in-time privileged access", "Customer-managed encryption keys with rotation", "Policy-as-code guardrails (OPA) in every deploy", "Continuous SOC 2 evidence collection", "Secrets management & vault integration", "Cloud security posture management dashboard"],
      },
      results: [
        { no: "01", title: "SOC 2 Type II", desc: "Certification achieved six weeks ahead of the regulatory deadline." },
        { no: "02", title: "92% fewer admin roles", desc: "Privileged access reduced from 318 roles to 24 with automated reviews." },
        { no: "03", title: "100% encrypted", desc: "Every data store now encrypted with managed, rotating keys." },
        { no: "04", title: "40% faster releases", desc: "Automated security gates removed manual review bottlenecks." },
      ],
    },
    {
      slug: "edubridge-online-learning-infrastructure",
      tags: ["Data Management", "Education"],
      title: "EduBridge Online Learning Infrastructure Setup",
      image: IMAGES.projects[2],
      image2: IMAGES.projectsAlt[2],
      meta: { client: "EduBridge Academy", category: "Data Management", date: "November 2025", duration: "16 Weeks", location: "Austin, TX" },
      overview: [
        "EduBridge Academy serves 120,000 learners across 14 countries. Its learning platform ran on a single data centre that buckled during exam season and offered no disaster-recovery capability.",
        "Paramount International designed a globally distributed, auto-scaling infrastructure with a modern data platform that protects student records and keeps classes online, wherever learners are.",
      ],
      problems: [
        { title: "Peak-season outages", desc: "Exam weeks pushed servers to 100% utilisation, causing hours of downtime." },
        { title: "Siloed data", desc: "Student, content and assessment data lived in disconnected systems with no single source of truth." },
        { title: "No disaster recovery", desc: "A single-site deployment meant any regional outage would take the whole platform offline." },
      ],
      solution: {
        intro: "We built a multi-region, auto-scaling platform on Kubernetes with a unified data lake, encrypted student-record storage and automated fail-over tested every month.",
        quote: "For the first time, exam week was boring. Nothing went down, and our teachers finally have one dashboard for every learner.",
        quoteBy: "Director of Technology, EduBridge Academy",
        list: ["Multi-region Kubernetes platform with auto-scaling", "Global CDN for video and course content", "Unified data lake with governed access", "Encrypted student-record store (FERPA/GDPR)", "Automated cross-region disaster recovery", "Real-time learning analytics dashboards"],
      },
      results: [
        { no: "01", title: "99.99% uptime", desc: "Through two full exam seasons with zero platform outages." },
        { no: "02", title: "5x capacity", desc: "Auto-scaling absorbs peak demand without over-provisioning." },
        { no: "03", title: "< 4 min fail-over", desc: "Monthly DR drills consistently restore service in under four minutes." },
        { no: "04", title: "35% cost saving", desc: "Scale-to-zero environments cut infrastructure spend year on year." },
      ],
    },
  ],
};

export const FEATURES = {
  eyebrow: "Our Features",
  title: "Innovative IT features designed to meet your business needs",
  cards: [
    { title: "24/7 IT Support", desc: "We help organizations stay ahead with innovative strategies and reliable support." },
    { title: "Enterprise-grade Security", desc: "Multi-layered protection that keeps your data, people and reputation safe." },
    { title: "Cloud Infrastructure Management", desc: "We help organizations stay ahead with innovative strategies and reliable support." },
  ],
  list: [
    "Secure Data Backup",
    "Network Design & Management",
    "Strategic IT Consulting",
    "Fast Response Time",
    "User-Friendly Tech Support",
    "Advanced Cybersecurity Protection",
  ],
};

export const TESTIMONIALS = {
  eyebrow: "Our Testimonials",
  title: "Client testimonials that showcase our commitment to excellence in IT services",
  satisfaction: "99.9% Client Satisfaction Rate",
  items: [
    { name: "Darlene Robertson", role: "Co-Founder, Brightline Retail", avatar: IMAGES.authors[0], quote: "Working with Paramount International has completely transformed the way we manage our IT infrastructure. From the consultation to ongoing support, their team has been incredibly knowledgeable and helped us migrate to the cloud seamlessly." },
    { name: "Daniel Johnson", role: "Cybersecurity Specialist", avatar: IMAGES.authors[1], quote: "Their security team found gaps our previous vendor missed for years. The 24/7 monitoring gives us confidence, and the reporting is clear enough to share directly with our board." },
    { name: "Marsh Drary", role: "CTO, FinNova Technologies", avatar: IMAGES.authors[2], quote: "What stands out most is their ability to tailor solutions to our unique needs. They provided 24/7 support we can truly rely on and delivered every milestone on time." },
    { name: "Ethan Miller", role: "DevOps Engineer", avatar: IMAGES.authors[3], quote: "The infrastructure they designed simply works. Deployments are faster, costs are lower and we finally have real observability across every environment." },
  ],
};

export const FAQS = {
  eyebrow: "FAQ's",
  title: "Answers to common questions about our IT services.",
  desc: "Have questions about our IT solutions, support, or process? We've compiled answers to the most frequently asked questions to help you better understand.",
  items: [
    { q: "What types of IT services do you provide?", a: "We provide a full suite of IT services including software development, cybersecurity, cloud integration, IT infrastructure setup, data backup & recovery, and 24/7 managed support tailored to your business." },
    { q: "Can you customize IT solutions for our business?", a: "Absolutely. Every solution we deliver is tailored to your unique goals, budget, and industry requirements, ensuring the best fit for your operations." },
    { q: "How secure are your IT services?", a: "Our IT services are built with security at the core. We implement a multi-layered approach including advanced firewalls, real-time threat detection, data encryption, endpoint protection, and regular vulnerability assessments." },
    { q: "What industries do you work with?", a: "We serve clients across finance, healthcare, education, retail, manufacturing, and more, delivering trusted IT solutions across multiple industries." },
    { q: "How do we get started with your services?", a: "Simply reach out for a free consultation. We'll assess your needs, design a custom strategy, and guide you through a seamless implementation." },
  ],
};

export const MARQUEE = ["Smart Solutions", "24/7 Service", "Digital Growth"];

export const JOIN = {
  eyebrow: "Join us today",
  title: "Join us today and build the future with technology experts",
  contact: { label: "Contact", value: BRAND.phone, href: BRAND.phoneHref },
  email: { label: "E-mail", value: BRAND.email, href: `mailto:${BRAND.email}` },
};

export const BLOG = {
  eyebrow: "Our blog",
  title: "Latest blog posts covering innovations in IT & technology",
  posts: [
    {
      slug: "how-cloud-computing-is-revolutionizing-small-business-it",
      title: "How Cloud Computing is Revolutionizing Small Business IT",
      date: "June 12, 2026",
      cat: "Cloud",
      readTime: "6 min read",
      author: { name: "Darlene Robertson", role: "Cloud Solutions Lead", avatar: IMAGES.authors[0] },
      image: IMAGES.blog[0],
      excerpt: "Small businesses no longer need a server room to compete. Here is how the cloud levels the playing field.",
      tags: ["Cloud", "Small Business", "Strategy"],
      content: [
        { type: "p", text: "A decade ago, enterprise-grade IT meant enterprise-grade budgets. Servers, licences, cooling and a team to keep it all running put serious technology out of reach for most small businesses. Cloud computing has quietly rewritten that equation." },
        { type: "p", text: "Today a ten-person firm can spin up the same databases, analytics tools and security controls used by global banks, pay only for what it consumes, and switch it all off on a Friday evening. The barrier to entry has collapsed, and with it the advantage that scale used to buy." },
        { type: "h2", text: "From capital expense to operating expense" },
        { type: "p", text: "The most immediate shift is financial. Instead of a five-figure hardware purchase every few years, cloud services are billed monthly and scale with your revenue. Cash that used to sit in a rack can be invested in people and products." },
        { type: "quote", text: "The cloud doesn't just save small businesses money. It gives them permission to experiment." },
        { type: "h2", text: "Security that is finally within reach" },
        { type: "p", text: "Cloud providers employ thousands of security engineers and invest billions in protecting their platforms. When configured correctly, a small business inherits that protection: encrypted storage, managed identity, automatic patching and continuous monitoring." },
        { type: "ul", items: ["Automatic backups across multiple geographic regions", "Built-in identity and multi-factor authentication", "Patching and updates handled by the provider", "Pay-as-you-go pricing with no upfront commitment"] },
        { type: "h2", text: "Where to start" },
        { type: "p", text: "Begin with the workloads that hurt most: email, file storage and backups. Then move line-of-business applications once your team is comfortable. A good partner will help you avoid the two classic mistakes, over-provisioning and under-securing, and set up governance from day one." },
      ],
    },
    {
      slug: "why-your-business-needs-a-managed-it-services-provider",
      title: "Why Your Business Needs a Managed IT Services Provider",
      date: "June 02, 2026",
      cat: "Managed IT",
      readTime: "5 min read",
      author: { name: "Daniel Johnson", role: "Managed Services Director", avatar: IMAGES.authors[1] },
      image: IMAGES.blog[1],
      excerpt: "Break-fix IT is a tax on growth. Managed services turn technology from a liability into a predictable advantage.",
      tags: ["Managed IT", "Support", "Operations"],
      content: [
        { type: "p", text: "Most businesses discover their IT strategy the hard way: a server dies on a Monday, the one person who knew the password left last year, and the invoice from the emergency technician arrives before the systems do." },
        { type: "p", text: "Managed IT services replace that chaos with a predictable, proactive model. Instead of paying to fix things when they break, you pay a fixed monthly fee for a team whose job is to make sure they don't." },
        { type: "h2", text: "Proactive beats reactive, every time" },
        { type: "p", text: "A managed provider monitors your environment around the clock. Disks are replaced before they fail, patches are applied before vulnerabilities are exploited, and capacity is added before users notice a slowdown." },
        { type: "quote", text: "The best IT support is the kind your team never has to call." },
        { type: "h2", text: "What a good provider actually delivers" },
        { type: "ul", items: ["24/7 monitoring and a staffed helpdesk", "Patch management and vulnerability remediation", "Backup verification and disaster-recovery testing", "Strategic roadmaps and budgeting support", "Vendor management for software and connectivity"] },
        { type: "h2", text: "The real return on investment" },
        { type: "p", text: "The obvious saving is lower downtime. The bigger one is focus: your people spend their time on customers rather than on printers, and your leadership gets a technology partner who speaks business, not jargon." },
      ],
    },
    {
      slug: "boosting-productivity-through-smart-it-infrastructure-planning",
      title: "Boosting Productivity Through Smart IT Infrastructure Planning",
      date: "May 24, 2026",
      cat: "Infrastructure",
      readTime: "7 min read",
      author: { name: "Marsh Drary", role: "Principal Infrastructure Architect", avatar: IMAGES.authors[2] },
      image: IMAGES.blog[2],
      excerpt: "Infrastructure is invisible when it works and unforgettable when it doesn't. Planning is the difference.",
      tags: ["Infrastructure", "Productivity", "Planning"],
      content: [
        { type: "p", text: "Every minute an employee waits for a file to open, a VPN to connect or a video call to stop freezing is a minute of productivity lost. Multiply that across a company and across a year, and poor infrastructure becomes one of the most expensive line items nobody budgets for." },
        { type: "h2", text: "Start with how people actually work" },
        { type: "p", text: "Good infrastructure planning begins away from the server room. Map the workflows that matter most, the applications they depend on and the locations they happen in. Only then design the network, compute and storage that support them." },
        { type: "quote", text: "Infrastructure should be designed around people, not the other way round." },
        { type: "h2", text: "Principles that pay off" },
        { type: "ul", items: ["Design for peak demand, not average demand", "Standardise hardware and configurations to simplify support", "Build observability in from day one", "Automate everything that happens more than twice", "Plan refresh cycles before equipment reaches end of life"] },
        { type: "h2", text: "Measure what matters" },
        { type: "p", text: "Track time-to-resolution, application response times and user satisfaction alongside uptime. These are the numbers that connect infrastructure spend to business outcomes, and they are the ones your leadership team will care about." },
      ],
    },
  ],
};

export const FOOTER = {
  headline: "Let's build the future of your business together",
  desc: "We provide cutting-edge IT services designed to streamline operations, enhance security & drive innovation for businesses of every size.",
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/#about" },
        { label: "Our Services", href: "/#services" },
        { label: "Our Projects", href: "/#projects" },
        { label: "Latest Blog", href: "/#blog" },
        { label: "Contact Us", href: "/#contact" },
      ],
    },
    {
      title: "Services",
      links: SERVICES.items.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
    },
    {
      title: "Projects",
      links: PROJECTS.items.map((p) => ({ label: p.title, href: `/projects/${p.slug}` })),
    },
  ],
};
