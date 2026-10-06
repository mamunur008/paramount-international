// Portfolio facts are tied to supplied source material. Historical project names retain their attribution.
export const BRAND = {
  "name": "Paramount International",
  "domain": "https://paramountint.com",
  "email": "anam4mba@gmail.com",
  "phone": "+880 1717 022299",
  "phoneHref": "tel:+8801717022299",
  "technologyPhone": "+880 1979 113353",
  "technologyPhoneHref": "tel:+8801979113353",
  "address": "House 05, Road 17, Block D, Banani, Dhaka 1213, Bangladesh",
  "established": "13 June 2022",
  "licence": "TRAD/DNCC/002748/2021"
};

export const NAV_LINKS = [
  { "label": "Home", "href": "/" },
  { "label": "Company", "href": "/about" },
  {
    "label": "Services",
    "href": "/services"
  },
  {
    "label": "Products",
    "href": "/products"
  },
  {
    "label": "Projects",
    "href": "/projects"
  }
];

export const COMPANY_LINKS = [
  { label: "About Paramount", href: "/about", desc: "Our company, purpose and approach" },
  { label: "Leadership & Team", href: "/leadership", desc: "The people responsible for your project" },
  { label: "Technology & Strengths", href: "/engineering", desc: "Our engineering experience and tools" }
];

export const SERVICES = [
  {
    "slug": "software-development",
    "title": "Custom software development",
    "short": "Software shaped around your operation.",
    "icon": "Code2",
    "desc": "Web applications, business tools and APIs that connect your people, processes and data. We work from the actual workflow, then build the screens and services around it.",
    "image": "/assets/codeio/project-image-1.jpg",
    "intro": "A useful application starts with a clear understanding of the work it needs to support. We map user roles, business rules, data flows and reporting needs before defining the first release.",
    "points": [
      "Requirements, workflow mapping and release planning",
      "Responsive interfaces for business users and administrators",
      "Backend services, APIs and third-party integrations",
      "Testing, deployment, documentation and continued support"
    ],
    "delivery": "We break delivery into reviewable increments: discovery, interface design, implementation and validation. Each increment connects a working interface to its underlying business rules so your team can review real behaviour early."
  },
  {
    "slug": "enterprise-platforms",
    "title": "Enterprise platforms & integrations",
    "short": "Bring disconnected systems together.",
    "icon": "Workflow",
    "desc": "Connect CRM, sales, subscriptions, inventory, billing and support through well-defined services, shared workflows and reliable data exchange.",
    "image": "/assets/codeio/project-image-2.jpg",
    "intro": "Growing businesses often keep customer, order and billing information in separate systems. Our enterprise work focuses on connecting those functions while keeping each service responsible for a clear part of the business.",
    "points": [
      "CRM, sales and subscription workflows",
      "Inventory, billing, support and partner operations",
      "API contracts and integration with existing systems",
      "Email, SMS and push notification workflows"
    ],
    "delivery": "We define ownership of data and business events first. Interfaces and service boundaries then follow those decisions, allowing the platform to evolve module by module instead of requiring a complete replacement whenever a process changes."
  },
  {
    "slug": "product-engineering",
    "title": "Product engineering & experience",
    "short": "From a first release to a better product.",
    "icon": "Layers3",
    "desc": "Product planning, interface design, feature development and ongoing improvements for software that needs to evolve with its users.",
    "image": "/assets/codeio/project-image-3.jpg",
    "intro": "A product needs more than its initial build. It needs a maintainable codebase, understandable interfaces and a release process that can turn user feedback into dependable improvements.",
    "points": [
      "Product discovery and feature prioritisation",
      "UI/UX design and reusable interface components",
      "Incremental development and release preparation",
      "Maintenance, issue resolution and product improvements"
    ],
    "delivery": "We connect design and engineering throughout the release cycle. The team reviews journeys, edge cases and acceptance criteria together, then demonstrates working features before expanding the scope."
  },
  {
    "slug": "cloud-and-support",
    "title": "Cloud delivery & application support",
    "short": "Keep the software working after launch.",
    "icon": "CloudCog",
    "desc": "Deployment automation, environment management, monitoring and technical support for applications that your business relies on every day.",
    "image": "/assets/codeio/why-choose-image-1.jpg",
    "intro": "A release is the beginning of a software system's working life. We plan deployment, configuration, operational visibility and support alongside feature delivery, so the handover is understandable to the people maintaining it.",
    "points": [
      "Containerisation and deployment pipelines",
      "Environment configuration and release management",
      "Application monitoring and issue investigation",
      "Maintenance planning and agreed support arrangements"
    ],
    "delivery": "Support scope and response arrangements are agreed for each engagement. We document environments and release steps, investigate recurring issues and use operational feedback to guide improvements."
  }
];

export const PROJECTS = [
  {
    "slug": "salestrace",
    "title": "SalesTrace",
    "category": "Sales intelligence",
    "kind": "Product showcase",
    "visual": "screenshot",
    "image": "/assets/projects/salestrace-dashboard.png",
    "imageAlt": "SalesTrace dashboard showing traced sales, rebate trends and contract mix",
    "desc": "Turn sales files into a clear view of performance, rebates and reporting exceptions.",
    "context": "A software portfolio demonstration for sales and commercial operations. Explore the working interface through the public demo and the application screenshot gallery.",
    "audience": "Sales operations, commercial analysts and reporting teams",
    "overview": [
      "SalesTrace brings file intake, reporting and exception review into one application. Its dashboard gives business users a visual overview of traced sales, chargebacks, sales and rebate trends, contract types and product categories.",
      "Behind that overview are more detailed working screens: a tracing file repository, invoice-date and reporting-date reports, exception rules and a non-EDI data-load area. Together, these views help a team move from source files to a report it can investigate."
    ],
    "capabilities": [
      {
        "title": "Understand performance",
        "desc": "Read sales and rebate trends alongside traced-versus-shipped and contract-type breakdowns."
      },
      {
        "title": "Investigate the detail",
        "desc": "Use invoice-date and reporting-date views to examine the records behind the dashboard."
      },
      {
        "title": "Manage incoming data",
        "desc": "Organise tracing files and non-EDI uploads through dedicated intake screens."
      },
      {
        "title": "Review exceptions",
        "desc": "Maintain exception rules and focus attention on records that need an analyst's review."
      }
    ],
    "approach": "The interface separates file intake, validation, reporting and visual analysis into distinct working areas. A persistent navigation shell keeps those areas connected, while reusable tables and charts present the underlying business data. The linked public demo and source repository provide a practical way to explore the implementation.",
    "links": [
      {
        "label": "Open live demo",
        "href": "https://salestrace-demo.netlify.app/"
      },
      {
        "label": "View source",
        "href": "https://github.com/mamunur008/salestrace-demo"
      }
    ],
    "screenshots": [
      {
        "src": "/assets/projects/salestrace-dashboard.png",
        "title": "Performance dashboard",
        "desc": "Sales, chargebacks, reporting coverage and contract mix in one view."
      },
      {
        "src": "/assets/projects/salestrace-reporting.png",
        "title": "Reporting-date analysis",
        "desc": "A detailed tabular view for reviewing reporting periods."
      },
      {
        "src": "/assets/projects/salestrace-invoices.png",
        "title": "Invoice-date report",
        "desc": "Record-level reporting organised around invoice dates."
      },
      {
        "src": "/assets/projects/salestrace-exceptions.png",
        "title": "Exception rules",
        "desc": "A dedicated workspace for managing exception checks."
      },
      {
        "src": "/assets/projects/salestrace-repository.png",
        "title": "Tracing file repository",
        "desc": "An intake and review area for source tracing files."
      },
      {
        "src": "/assets/projects/salestrace-data-load.png",
        "title": "Non-EDI data load",
        "desc": "A separate workflow for loading non-EDI source data."
      }
    ],
    "why": "Commercial teams receive sales records in different files and reporting periods. Explaining a total becomes difficult when source records, rebate calculations and exceptions live in different places. SalesTrace brings intake and investigation alongside management reporting.",
    "benefits": [
      {
        "title": "Trace a number to its source",
        "desc": "Move from dashboard trends to reporting views and the files behind them."
      },
      {
        "title": "Focus the investigation",
        "desc": "Use exception rules and comparisons to identify records that need an analyst’s attention."
      },
      {
        "title": "Repeat the reporting process",
        "desc": "Give recurring intake and review a consistent workspace instead of rebuilding spreadsheets each month."
      }
    ],
    "sourceNote": "The supplied screenshots illustrate application features. Displayed organisations and monetary values are interface data, not verified Paramount customers or financial results."
  },
  {
    "slug": "enterprise-platform",
    "title": "Paramount Commerce",
    "category": "Catena UK · Proposed product name",
    "kind": "Implementation platform",
    "visual": "screenshot",
    "image": "/assets/projects/catena-dashboard.png",
    "imageAlt": "Supplied Catena dashboard with identity, accounting, wallet, rates, subscriptions, workflow, catalogue and sales navigation",
    "desc": "Connect your product catalogue, pricing, sales, subscriptions and accounts in a configurable business platform.",
    "context": "Catena UK is presented under the proposed commercial name Paramount Commerce. The supplied source archive and local demonstration establish the implementation foundation. Configuration, integrations and release scope are agreed for each engagement.",
    "audience": "Subscription businesses, service providers, B2B sales operations and organisations with multiple business units",
    "overview": [
      "A new offer changes more than a price list. It affects what sales can sell, how a customer is charged, the subscription they receive and the records finance must reconcile. Paramount Commerce brings those responsibilities into one administration environment, with distinct services behind each business domain.",
      "The reviewed Catena UK implementation contains nine business services: Accounts, Workflow, Wallet, Accounting, Subscription, Rate, Sales, Configuration and Product. Users work through a Next.js interface with organisation, role and permission context. Module configuration determines the workflows available in an installation."
    ],
    "capabilities": [
      {
        "title": "Define what you sell",
        "desc": "Maintain products, bundles, categories, attributes, profiles, units of measure and tax rules. Reusable definitions support a catalogue with more variation than a simple item list."
      },
      {
        "title": "Manage rates and recurring plans",
        "desc": "Configure rate plans, variables, charging methods and time bands; evaluate pricing inputs. Define subscription plans, durations and billing cycles for recurring services."
      },
      {
        "title": "Follow the customer and order",
        "desc": "Maintain customers, customer groups, pricing attributes and product configurations. Sales order screens connect commercial records with workflow requirements."
      },
      {
        "title": "Connect financial operations",
        "desc": "Manage payment accounts and wallet operations alongside vouchers, the chart of accounts, dimensions, posting rules, trial balance and general ledger views."
      },
      {
        "title": "Make approvals explicit",
        "desc": "Define workflow states, transition conditions, action rules and SLA thresholds, then inspect workflow instances as work progresses."
      },
      {
        "title": "Organise access and shared data",
        "desc": "Maintain users, organisational hierarchies, roles and permissions. Shared configuration and address datasets provide consistent reference information."
      }
    ],
    "approach": "The reviewed UK codebase uses TypeScript and Node.js services with Express, Sequelize and PostgreSQL. The React / Next.js interface uses typed repositories and APIs. REST and gRPC connect service boundaries; Redis and BullMQ support workflow jobs. Keycloak supplies identity and Apache APISIX provides routing. Docker Compose and Kubernetes definitions support repeatable environments. Production controls and the final deployment topology are verified during implementation.",
    "links": [],
    "screenshots": [
      {
        "src": "/assets/projects/catena-dashboard.png",
        "title": "Catena administration workspace",
        "desc": "Supplied dashboard image. The navigation exposes business modules; charts and recent activity include demonstration data."
      }
    ],
    "imageLabel": "Supplied Catena dashboard",
    "imageCaption": "Screenshot supplied by the project owner. Dashboard activity and sign-in charts include demonstration data; they are not customer or performance claims.",
    "why": "The platform addresses the handoffs between commercial and operational systems. When catalogue, price calculation, order, subscription and accounting records are maintained separately, staff repeatedly translate the same business decision. A shared platform makes those relationships explicit and provides a foundation for integration.",
    "benefits": [
      {
        "title": "A fit for recurring revenue",
        "desc": "Bring a variable product catalogue, configurable rates and subscription plans together around your commercial model."
      },
      {
        "title": "Fewer disconnected handoffs",
        "desc": "Give sales, operations and finance a common administration environment and defined ownership of information."
      },
      {
        "title": "A phased implementation",
        "desc": "Begin with the workflows that address the immediate problem, then scope the next modules against business priorities."
      },
      {
        "title": "Room for business-specific rules",
        "desc": "Use catalogue attributes, pricing variables and workflow definitions to represent the way your organisation operates."
      }
    ],
    "customerTitle": "Who should consider it?",
    "customerIntro": "Consider this platform when standard sales software cannot represent your product combinations, recurring plans, pricing rules or approval structure. Start with a requirements workshop and a walkthrough of the relevant modules.",
    "customers": [],
    "customerNote": "Presented as an implementation offering. No signed customer contract is inferred from demo usernames or sample data.",
    "technologies": [
      "TypeScript / Node.js",
      "React / Next.js",
      "PostgreSQL",
      "REST / gRPC",
      "Redis / BullMQ",
      "Keycloak / APISIX",
      "Docker / Kubernetes"
    ],
    "sourceNote": "Based on the supplied Catena UK archive: 68 mapped navigation destinations and 113 page components, with the supplied dashboard screenshot. Source review is distinct from live acceptance testing. Inventory, support, partner management and KCI remain separately scoped capabilities; they are not assumed to be complete in this nine-service archive."
  },
  {
    "slug": "gomembership",
    "title": "JustGo (formerly GoMembership)",
    "category": "Membership technology",
    "kind": "Leadership experience",
    "visual": "screenshot",
    "image": "/assets/projects/justgo-members.webp",
    "imageAlt": "JustGo's published membership administration interface showing searchable member records",
    "imageLabel": "Official JustGo product image",
    "imageCaption": "Current product image published by JustGo. GoMembership was renamed JustGo in 2021; this image illustrates the present platform, not its original interface.",
    "desc": "Memberships, renewals, events and payments in one connected platform for clubs and governing bodies.",
    "context": "Md. Mamunur Rashid contributed to the platform's foundations and evolution during his 2005–2022 career at Azolve Technologies / JustGo Technologies Ltd. This is the earlier professional experience behind Paramount's technical leadership; JustGo is an independently owned product.",
    "audience": "Sports governing bodies, associations, regional organisations, clubs and their members",
    "overview": [
      "A membership organisation needs more than a contact list. It must know who has joined, what they have paid for, which organisation they belong to and whether they meet the requirements to participate. JustGo brings these connected responsibilities into a configurable online service.",
      "Members can manage their information and purchases, while administrators oversee records and activity across a community. The product serves organisations with different membership rules and structures, from individual clubs to national bodies with affiliated regions and clubs."
    ],
    "why": "The platform was created to reduce the administrative burden of running membership communities. Disconnected spreadsheets, repeated data entry and separate payment or event processes make it harder to maintain reliable records. A shared system connects the member journey and gives staff and volunteers more time to support their community.",
    "timeline": [
      {
        "year": "2004",
        "title": "Phoenix foundations",
        "desc": "The underlying configurable enterprise-platform work began, according to the CTO's project history."
      },
      {
        "year": "2012",
        "title": "Sports membership focus",
        "desc": "Azolve's partnership with sportscotland shaped a solution for sports governing bodies."
      },
      {
        "year": "2016",
        "title": "GoMembership launches",
        "desc": "The membership product launched under the GoMembership name."
      },
      {
        "year": "2021",
        "title": "A new name: JustGo",
        "desc": "The rebrand was announced in December, reflecting a broader community-management platform."
      }
    ],
    "capabilities": [
      {
        "title": "Join, pay and renew",
        "desc": "Membership purchase, renewal reminders and member records connect the recurring relationship between an organisation and its community."
      },
      {
        "title": "A connected organisation",
        "desc": "Multi-tier administration links governing bodies, regional organisations and clubs while supporting their different responsibilities."
      },
      {
        "title": "Events and participation",
        "desc": "Event discovery, bookings and payment journeys sit alongside membership activity, helping people take part as well as sign up."
      },
      {
        "title": "Credentials and communication",
        "desc": "Qualification records and communication tools help administrators coordinate a community and manage participation requirements."
      }
    ],
    "benefits": [
      {
        "title": "Less repetitive administration",
        "desc": "Give members self-service access and keep connected information in a shared workflow."
      },
      {
        "title": "A clearer path to participation",
        "desc": "Bring joining, paying and booking together so members can move from registration to activity."
      },
      {
        "title": "Rules that fit the organisation",
        "desc": "Configure fields, workflows and membership structures around the organisation's needs."
      }
    ],
    "customerTitle": "Organisations using the platform",
    "customers": [
      {
        "name": "British Rowing",
        "desc": "ClubHub and membership services; its own 2021 notice confirms the GoMembership-to-JustGo change.",
        "href": "https://www.britishrowing.org/2021/11/british-rowing-clubhub-and-membership-platforms-update/"
      },
      {
        "name": "Paddle Australia",
        "desc": "A publicly listed JustGo community organisation in Australian paddle sports.",
        "href": "https://justgo.com/features/membership/"
      },
      {
        "name": "Special Olympics Ireland",
        "desc": "A publicly listed JustGo community organisation supporting participation in sport.",
        "href": "https://justgo.com/features/membership/"
      }
    ],
    "customerNote": "Examples of JustGo platform customers, not a claim that Paramount holds their contracts.",
    "approach": "The CTO co-created Phoenix, a metadata-driven foundation that could generate database structures, forms, workflows, business rules and reports from configuration. Its early .NET and Prototype.js implementation evolved through .NET/jQuery applications toward a React frontend and RESTful .NET APIs. His contribution combined architecture, hands-on engineering, performance work, mentoring and production delivery. This experience helps Paramount design adaptable business platforms that can evolve without rebuilding every customer workflow from the beginning.",
    "technologies": [
      "C# / .NET",
      "Prototype.js → jQuery",
      "React",
      "REST APIs",
      "Metadata-driven configuration"
    ],
    "sourceNote": "Engineering history: CTO's supplied résumé and project account. Public launch and rebrand dates: JustGo's company history. Current features and imagery: JustGo's published product pages.",
    "links": [
      {
        "label": "Explore JustGo",
        "href": "https://justgo.com/"
      },
      {
        "label": "Product history & name change",
        "href": "https://justgo.com/gomembership-rebranded-to-justgo/"
      }
    ],
    "screenshots": [
      {
        "src": "/assets/projects/justgo-members.webp",
        "title": "Membership administration",
        "desc": "Official JustGo image: organise and work with member records in a shared administration view."
      },
      {
        "src": "/assets/projects/justgo-events.jpg",
        "title": "Events and bookings",
        "desc": "Official JustGo image: discover events and follow the participation journey."
      },
      {
        "src": "/assets/projects/justgo-member-profile.png",
        "title": "Member self-service",
        "desc": "Official JustGo image: members access and manage their own information."
      }
    ]
  },
  {
    "slug": "iscanner",
    "title": "IScanner",
    "category": "Document intelligence",
    "kind": "Leadership experience · Wood Group",
    "visual": "photo",
    "image": "/assets/projects/iscanner-document-scanner.webp",
    "imageAlt": "A professional document scanner processing paper records beside organised archive folders",
    "imageLabel": "Document scanning illustration",
    "imageCaption": "Illustrative scanner image created for this case study; not an IScanner interface or a photograph of Wood's equipment.",
    "desc": "Turn paper records into searchable business information with capture, OCR and enterprise document retrieval.",
    "context": "An enterprise document-processing project for Wood, delivered during Md. Mamunur Rashid's earlier Azolve / JustGo career. He co-designed and developed the initial pilot with another senior engineer.",
    "audience": "Document-intensive enterprises, engineering operations and records-management teams",
    "overview": [
      "IScanner addressed the gap between storing a scanned file and being able to use the information inside it. The solution brought document capture, parsing, optical character recognition (OCR), metadata extraction, indexing and retrieval into one enterprise workflow.",
      "The initial working pilot was delivered in seven days. The CTO's project record describes a production implementation indexing more than one million documents and processing over 50,000 documents a month through OCR workflows."
    ],
    "why": "Large document collections are difficult to use when finding a record depends on its filename or a manual search through folders. IScanner was created to make captured documents discoverable through extracted text and metadata, so operational teams could retrieve information from a growing archive.",
    "metrics": [
      {
        "value": "7 days",
        "label": "Initial working pilot"
      },
      {
        "value": "1M+",
        "label": "Documents indexed"
      },
      {
        "value": "50K+",
        "label": "Documents processed per month"
      }
    ],
    "metricsNote": "Historical project milestones reported in the CTO's supplied résumé.",
    "customerTitle": "Customer: Wood Group",
    "customerIntro": "Wood (Wood Group) is a global engineering and consulting business serving energy and materials markets. Its teams help design, operate and improve complex industrial assets.",
    "customers": [
      {
        "name": "Wood / Wood Group",
        "desc": "Enterprise customer for the document-processing project described in the CTO's professional portfolio.",
        "href": "https://www.woodgroup.com/"
      }
    ],
    "capabilities": [
      {
        "title": "Capture and parse",
        "desc": "Bring scanned documents into a structured processing pipeline and prepare their content for extraction."
      },
      {
        "title": "Recognise text with OCR",
        "desc": "Extract machine-readable text from document images so information is usable beyond the original scanned page."
      },
      {
        "title": "Extract and index",
        "desc": "Associate documents with useful metadata and build searchable indexes across a large archive."
      },
      {
        "title": "Search and retrieve",
        "desc": "Support secure document search and retrieval so authorised users can find the information they need."
      }
    ],
    "benefits": [
      {
        "title": "Make the archive usable",
        "desc": "Search document content and metadata instead of relying only on filenames and folder structures."
      },
      {
        "title": "Reduce manual handling",
        "desc": "Use OCR and structured processing to make repeated document intake a software workflow."
      },
      {
        "title": "Build for continuing intake",
        "desc": "Apply enterprise processing and indexing experience to archives that keep growing after launch."
      }
    ],
    "approach": "The implementation used C# and .NET with LEADTOOLS for document-processing capabilities, Lucene.NET for indexing and search, and SQL Server for structured data. Custom processing components connected capture, extraction and retrieval. The work progressed from a rapid, working pilot to production-scale document handling, combining practical validation with an architecture for sustained processing.",
    "technologies": [
      "C# / .NET",
      "LEADTOOLS",
      "Lucene.NET",
      "SQL Server",
      "OCR & metadata extraction"
    ],
    "sourceNote": "Project scope, technologies and historical milestones: CTO's supplied résumé. Wood company introduction: Wood's official website. The exact IScanner launch date is not stated in the available project record.",
    "links": [
      {
        "label": "About Wood Group",
        "href": "https://www.woodgroup.com/"
      }
    ],
    "screenshots": []
  }
];

export const PRODUCTS = [
  {
    "id": "enterprise",
    "title": "Paramount Commerce",
    "subtitle": "Your commercial operation, connected.",
    "desc": "Proposed commercial name for the Catena UK implementation offering. Connect catalogue, pricing, sales, subscriptions and financial workflows through a scoped deployment.",
    "modules": [
      [
        "Catalogue & rates",
        "Products, bundles, pricing variables and charging rules."
      ],
      [
        "Sales & subscriptions",
        "Customer orders, plans, durations and billing cycles."
      ],
      [
        "Financial operations",
        "Payment accounts, wallets, vouchers and accounting views."
      ],
      [
        "Workflow",
        "States, transitions, actions and SLA rules."
      ],
      [
        "Identity & access",
        "Users, organisational scope, roles and permissions."
      ],
      [
        "Configuration",
        "Shared settings and structured reference data."
      ]
    ]
  },
  {
    "id": "people",
    "title": "Employee management",
    "subtitle": "Give people operations a dedicated home.",
    "desc": "Paramount's employee management offering brings staff administration into a focused software workflow. The scope, reporting needs and integrations are agreed around the organisation's processes.",
    "modules": [
      [
        "Employee records",
        "A central place for staff information."
      ],
      [
        "Administration",
        "Define the employee workflows your organisation needs."
      ],
      [
        "Access & roles",
        "Plan appropriate access for staff and administrators."
      ],
      [
        "Reporting needs",
        "Agree reports around operational decisions."
      ],
      [
        "Integrations",
        "Connect existing tools where required by the agreed scope."
      ],
      [
        "Implementation",
        "Walk through requirements, configuration and adoption with our team."
      ]
    ]
  }
];

export const TEAM = [
  {
    "name": "Md. Anamul Haque Sarker",
    "role": "Founder & CEO",
    "image": "/assets/team/anamul-haque-sarker.jpg",
    "desc": "Leads the company's direction, business relationships and long-term development."
  },
  {
    "name": "Md. Mamunur Rashid",
    "role": "Chief Technology Officer",
    "image": "/assets/team/md-mamunur-rashid.jpg",
    "desc": "Leads software architecture and engineering, drawing on enterprise product experience through Azolve and JustGo."
  },
  {
    "name": "Mohammad Amiruzzaman",
    "role": "Chief Operating Officer",
    "image": "/assets/team/mohammad-amiruzzaman.jpg",
    "desc": "Coordinates operations, project delivery and the practical needs of clients and the team."
  },
  {
    "name": "Md. Shahaful Islam (Shovon)",
    "role": "Business Development Manager",
    "image": "/assets/team/shovon-portrait-2026.jpg",
    "desc": "Builds business relationships and helps translate customer needs into a clear engagement brief."
  }
];

export const FAQ = [
  {
    "q": "What kind of software do you build?",
    "a": "We focus on business software: custom web applications, enterprise platforms, CRM and subscription workflows, operational tools and integrations. We also offer ERP and employee management solutions."
  },
  {
    "q": "Can we see the products before discussing a project?",
    "a": "Yes. SalesTrace has a public demo and a screenshot gallery. For the enterprise platform, contact us to arrange a guided walkthrough of the relevant workflows."
  },
  {
    "q": "How do you start a new engagement?",
    "a": "We begin with the problem, users and existing process. Together we define an initial scope, success criteria, timeline and commercial proposal before implementation begins."
  },
  {
    "q": "Can you work with our current systems?",
    "a": "Integration is a core part of our enterprise work. We first review the available APIs, data ownership and workflow requirements, then agree an integration approach and any limitations."
  },
  {
    "q": "Do you maintain software after launch?",
    "a": "Yes. Application maintenance, deployment and technical support can be included in an agreed support arrangement. Coverage and response expectations are defined for each engagement."
  }
];

export const TECHNOLOGY = [
  {
    "title": "Application engineering",
    "tools": "C# / .NET · TypeScript · Node.js · React · Next.js · Tailwind CSS",
    "desc": "Build the interface and the services behind it. Choose the stack around the workflow, operating environment and expected lifespan of the system.",
    "evidence": "See the Catena UK implementation",
    "href": "/projects/enterprise-platform"
  },
  {
    "title": "Business data and search",
    "tools": "PostgreSQL · SQL Server · Redis · Lucene.NET · OCR",
    "desc": "Model business records, process document content and make information retrievable. Data design starts with the questions the business needs to answer.",
    "evidence": "See the Wood document project",
    "href": "/projects/iscanner"
  },
  {
    "title": "Service architecture",
    "tools": "REST · gRPC · Domain modelling · Workflow orchestration",
    "desc": "Give each domain clear responsibilities and defined interfaces. Plan integrations, failure handling and data ownership as part of the design.",
    "evidence": "Explore the connected platform",
    "href": "/projects/enterprise-platform"
  },
  {
    "title": "Identity and delivery",
    "tools": "Keycloak · APISIX · Docker · Kubernetes · CI/CD",
    "desc": "Plan access, configuration and releases alongside development. Test the production controls required by the target deployment.",
    "evidence": "How we deliver and support",
    "href": "/services/cloud-and-support"
  }
];
