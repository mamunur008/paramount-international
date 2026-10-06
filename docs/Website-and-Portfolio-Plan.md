# Paramount International: website and company profile plan

Prepared 5 October 2026.

## The recommendation

Use the website to help a prospective customer recognise their problem, examine relevant work and book a useful conversation. Use the printed profile to give a decision maker a concise, verifiable record of the company, people, project experience and delivery capability. A bank submission adds financial evidence in a separate private annex.

The design should earn trust through specific examples: an actual product screen, a clearly explained workflow, a named contribution and a documented result. Repeated slogans, abstract illustrations and identical feature cards make the material feel generic. Editing those out is more effective than trying to disguise how a document was produced.

## Website navigation and content

| Menu | What belongs there |
|---|---|
| Home (through the logo) | A direct statement of what Paramount builds, two or three representative projects, company context and a contact action. |
| Services | Custom software, product engineering, enterprise integration, cloud delivery and support. Explain the problem addressed and the deliverables. |
| Products | Current implementation offerings, intended buyers, included modules, configuration scope and a walkthrough request. Keep proposed product names visibly provisional. |
| Our work | Four substantial case studies: Catena UK, document intelligence, Phoenix/GoMembership, and SalesTrace. Show screenshots, the original problem, functionality, engineering contribution, business value and project status. |
| Engineering | Modern technologies, why they are selected, evidence from specific projects, delivery practices and team strengths. |
| Company | Founder, CTO, COO and BDM, real portraits, team structure, establishment and contact information. |
| Contact | A short enquiry form, phone, address and an invitation to discuss a concrete workflow. |

Keep bank applications, financial statements, personal identification, signed contracts and purchase orders out of the public navigation. Share a bank pack privately.

## Product naming

| Working name | Intended use | Historical reference |
|---|---|---|
| Paramount Commerce | Proposed commercial name for the Catena UK implementation offering. | Catena UK remains visible in the case study and supplied screenshots. |
| Paramount Archive | Proposed name for a future Paramount document-intelligence offering. | Explain the earlier IScanner / Wood delivery accurately. |
| Paramount Community | Proposed name for a future membership and configurable-workflow offering. | Retain Phoenix, GoMembership and JustGo as the names of the historical platforms. |
| SalesTrace | Retain the clear, established portfolio name. | Distinguish the current demonstration from earlier SalesTracing delivery experience. |

These are naming proposals, not claims that third-party software has changed ownership or that a trademark search has been completed. JustGo's official screenshots and client examples remain credited to JustGo. New branding should be applied only to an offering Paramount is entitled to commercialise.

## Catena UK: the sales story

**Recommended introduction:** Paramount Commerce connects the product catalogue, pricing, sales, subscriptions and accounts in a configurable business platform. It is designed for organisations whose commercial rules no longer fit a simple sales tool.

**Why it exists:** A change to an offer affects prices, orders, subscriptions, approvals and accounting. Separate systems make staff re-enter or reconcile the same decision. Catena supplies a shared administration environment and distinct service domains around those responsibilities.

**Why a company would buy an implementation:** To represent its own bundles, pricing variables, recurring plans and approval structure; connect the commercial and finance teams; and introduce an agreed set of workflows in phases.

**Evidence reviewed:** The uploaded Catena archive, the user guide and technical review, and the supplied dashboard screenshot. All 68 mapped navigation destinations were matched to source pages; the archive contains 113 page components. This is not a claim that all live workflows were exercised. `localhost:5174` points to the user's computer and was not remotely accessible.

**Actual stack:** TypeScript/Node.js/Express services; React/Next.js administration; Sequelize/PostgreSQL; REST/gRPC; Redis/BullMQ; Keycloak/APISIX; Docker and Kubernetes configuration. This corrects the older bank profile's blanket .NET description of this particular version.

**Module scope:** Accounts, Workflow, Wallet, Accounting, Subscription, Rate, Sales, Configuration and Product. The presence of a menu is not proof that every workflow is finished. Dashboard sign-in and recent-activity views include demonstration data. KCI, inventory, support and partner management are separately scoped capabilities, not assumed complete in this archive.

**Before a commercial production release:** Recheck the earlier technical review's authentication, secret handling, deployment and recovery findings against the current code. The source review does not establish that these have all been resolved. Quote a scoped implementation and acceptance process, not an unqualified production-ready licence.

## Website project-page template

1. Product name, original project reference and one plain-language value statement.
2. A real screenshot with an accurate caption and an enlarge control.
3. The business problem and intended users.
4. What the software does, grouped by a real workflow.
5. How it was developed and the contributor's actual role.
6. Documented milestones or outcomes; no invented savings or customer counts.
7. Customer context where supported, with the contract relationship stated accurately.
8. A relevant call to action: discuss a similar workflow, arrange a walkthrough or scope an implementation.

## Printed company profile

Use A4 pages with a light background, generous margins, dark teal headings, restrained gold accents, real leadership portraits and large product images. Avoid a printed copy of the website's dark interface. Use a consistent header with the logo on the left and the company name and section on the right.

Recommended sequence: cover; company and legal identity; leadership and organisation; engineering strengths; Catena UK; Phoenix and membership; Wood document intelligence; SalesTrace; delivery and support; sources and contact. Project spreads should vary with the evidence: screenshots for interface products, a process explanation for document handling, and a timeline for Phoenix/GoMembership.

## Bank submission

Use the same factual company profile with a bank-neutral funding note and an evidence index. Keep the detailed financial annex separate: financial statements, tax records, bank statements, genuine work orders, invoices, collections, a dated pipeline, a costed use-of-funds schedule and a repayment forecast. Values and dates should come from the actual records.

The requested BDT 5 crore is an application amount, not proof of eligibility, an approved facility or a verified contract value. The bank's appraisal determines the facility. The current pack does not fabricate purchase orders, historical revenue, customer contracts or annual price increases.

## What changes the visual impression

- Lead with product evidence, not abstract marketing artwork.
- Write short, specific claims that a project screen or source record can support.
- Use varied page compositions instead of repeating the same rounded-card grid.
- Keep the cursor effects optional and preserve the system cursor on touch/reduced-motion devices.
- Keep the 240 ms theme transition coordinated with text and icon changes.
- Use real staff photographs, a clear contact route and a visible account of the delivery process.
- Have leadership review the wording aloud: remove any sentence they would not naturally say to a client.

## Using the delivered website

For an immediate Netlify deployment, extract `paramount-ready-to-deploy.zip` and upload its contents, including `index.html`, `static`, `assets`, `_redirects` and the Netlify form definition. Keep form detection enabled. Your existing form-notification recipient remains a Netlify project setting.

For source changes, extract `paramount-emergent-polished.zip`, enter `paramount-international/frontend`, install dependencies using the included lockfile and run `npm run build`. The deployable output is `frontend/build`. The source includes a top-level deployment README.

The package is prepared locally. It does not by itself change the live site or confirm a GitHub push.
