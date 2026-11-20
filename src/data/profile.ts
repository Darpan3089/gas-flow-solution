/**
 * The company profile: what we build, what we do, who we serve and why anyone
 * should pick us. Supplied by the client as an "About us" brief.
 *
 * This exists for the same reason `company.ts` does. The same four lists were
 * being retyped as inline arrays in `HomeContent` and `AboutContent`, and had
 * already drifted — the two pages named different industries and different
 * reasons to choose us. Every page that shows this material now reads it here.
 *
 * Rules for this file, inherited from `company.ts`: nothing goes in that is not
 * verifiably true. Describing the *scope* of a service is fine. Naming a
 * standard we are certified against, a number of installations, or a founding
 * year is not — leave those out until the client confirms them.
 *
 * Kept JSON-serializable (no React elements, icons referenced by key) so these
 * objects can cross the server/client boundary, matching `@/data/catalog`.
 */

/** Key into the lucide icon map in `@/components/ui/ProfileIcon`. */
export type ProfileIconKey =
  | "design"
  | "manufacturing"
  | "supply"
  | "commissioning"
  | "calibration"
  | "amc"
  | "maintenance"
  | "training"
  | "upgrade";

/* -------------------------------------------------------------------------- */
/* Positioning copy                                                           */
/* -------------------------------------------------------------------------- */

/** The one-line positioning statement. Used as a hero subhead. */
export const tagline =
  "Delivering reliable gas pressure regulation, metering and distribution solutions.";

/** Closing line of the client brief — the sign-off used on About. */
export const signOff =
  "Engineering reliable gas distribution solutions for a safer and smarter future.";

/** The two-paragraph "who we are". Rendered in order. */
export const intro = [
  "Gas Flow Solutions (GFS) is a leading designer, manufacturer and supplier of high-quality natural gas pressure regulating and metering systems for the City Gas Distribution (CGD), industrial, commercial and energy sectors. We provide complete engineering solutions for safe, reliable and efficient gas distribution networks, ensuring optimum performance from source to end user.",
  "With a strong focus on engineering excellence, product quality and customer satisfaction, we manufacture customized gas pressure regulating stations and metering skids that comply with national and international standards. Our experienced team delivers end-to-end solutions — from system design and manufacturing to installation, commissioning, testing and after-sales service.",
];

/** The commitment statement. */
export const commitment =
  "We are committed to delivering innovative, reliable and safe gas distribution solutions that help our customers operate efficiently while maintaining the highest standards of safety and performance — a trusted partner for gas utilities and industrial customers, through world-class products, responsive service and continuous technical innovation.";

/* -------------------------------------------------------------------------- */
/* Systems we build                                                           */
/* -------------------------------------------------------------------------- */

export interface System {
  /** Anchor id on `/solutions`, and the slug if these ever become own routes. */
  slug: string;
  name: string;
  /** The acronym the industry uses, or null where the name is already plain. */
  abbr: string | null;
  /** Where this sits in the network, in one line. Shown as an eyebrow. */
  role: string;
  /** Two or three sentences on what the system does. */
  overview: string;
  /** What a typical build includes. Scope of assembly, not rated figures. */
  includes: string[];
  /**
   * Category slugs in `@/data/catalog` this system is assembled from, so the
   * overview page can link a station to the components it is built out of.
   * Must stay in sync with the slugs there — a wrong one renders no link.
   */
  builtFrom: string[];
}

/**
 * Station- and skid-level systems, which sit a level *above* the component
 * catalog in `@/data/catalog` — a City Gate Station is assembled from the
 * regulators, filters, valves and meters listed there. `builtFrom` is that
 * relationship, and `/solutions` renders it.
 *
 * The `overview` text describes what each system type *is*, which is general
 * industry knowledge and safe to state. What is deliberately absent is any
 * rated figure — inlet pressure, flow capacity, stream count — because those
 * are per-project and none has been confirmed for GFS. Add them per system only
 * when the client supplies them.
 */
export const systems: System[] = [
  {
    slug: "city-gate-stations",
    name: "City Gate Stations",
    abbr: "CGS",
    role: "Transmission pipeline → city network",
    overview:
      "The handover point where gas leaves a high-pressure transmission pipeline and enters a city distribution network. A City Gate Station filters the gas, reduces it to distribution pressure, meters the volume taken, and protects the downstream network against over-pressure. It is the custody transfer point, so metering accuracy here is what the whole network is billed on.",
    includes: [
      "Inlet isolation, filtration and, where required, preheating",
      "Duty and standby regulating streams with automatic changeover",
      "Slam shut and relief protection sized for the downstream network",
      "Custody transfer metering with volume correction",
    ],
    builtFrom: ["gas-filters", "gas-pressure-regulators", "slum-shut-valves", "gas-meters"],
  },
  {
    slug: "district-regulating-stations",
    name: "District Regulating Stations",
    abbr: "DRS",
    role: "City network → district network",
    overview:
      "A step-down between pressure tiers within a distribution network, taking gas from the medium-pressure ring and feeding a district at a lower pressure. Sized for the peak demand of the district it serves, with redundant streams so a regulator can be serviced without cutting supply.",
    includes: [
      "Filtration ahead of the regulating streams",
      "Duty and standby regulating streams with automatic changeover",
      "Slam shut and creep relief protection",
      "Weatherproof enclosure or kiosk for street-side installation",
    ],
    builtFrom: ["gas-filters", "gas-pressure-regulators", "slum-shut-valves", "safety-relief-valves"],
  },
  {
    slug: "metering-regulating-stations",
    name: "Metering & Regulating Stations",
    abbr: "MRS",
    role: "Network → large consumer",
    overview:
      "Combines pressure reduction and measurement in one assembly at the point where a network supplies a single large consumer. Because the meter reading is the basis of the bill, an MRS pairs the regulating stream with a metering stream accurate across the consumer's full turndown, from overnight minimum to peak load.",
    includes: [
      "Filtration, regulation and metering in a single skid",
      "Meter sized to the consumer's actual turndown, not just peak flow",
      "Volume correction for pressure and temperature",
      "Over-pressure protection on the consumer side",
    ],
    builtFrom: ["gas-filters", "gas-pressure-regulators", "gas-meters", "slum-shut-valves"],
  },
  {
    slug: "service-regulating-modules",
    name: "Service Regulating Modules",
    abbr: "SRM",
    role: "District network → individual service",
    overview:
      "The final regulating step before gas enters a building or small commercial premises, delivering the low, stable outlet pressure appliances are designed for. Built as a compact pre-assembled module so installation at the service point is a connection rather than a build.",
    includes: [
      "Service isolation and inlet filtration",
      "Single or twin-stream regulation to appliance pressure",
      "Integral over-pressure shut-off",
      "Compact wall- or pedestal-mounted enclosure",
    ],
    builtFrom: ["gas-pressure-regulators", "gas-filters", "slum-shut-valves"],
  },
  {
    slug: "industrial-regulating-skids",
    name: "Industrial Gas Pressure Regulating Skids",
    abbr: null,
    role: "Plant inlet → process pressure",
    overview:
      "A skid-mounted regulating assembly built for a specific plant, taking the supply pressure at the boundary down to what the burners, furnaces or process equipment require. Configured around the plant's own flow profile and, where the process cannot be interrupted, built with redundancy so servicing does not stop production.",
    includes: [
      "Skid-mounted assembly on a structural base, pre-piped and pre-tested",
      "Single or dual-stage reduction depending on the pressure drop required",
      "Duty and standby streams where supply cannot be interrupted",
      "Relief and slam shut protection to the plant's safety requirements",
    ],
    builtFrom: ["gas-pressure-regulators", "gas-filters", "safety-relief-valves", "slum-shut-valves"],
  },
  {
    slug: "metering-skids",
    name: "Metering Skids",
    abbr: null,
    role: "Measurement, standalone",
    overview:
      "Measurement without pressure reduction, for sites that already have regulation in place but need accurate volume data — for billing, for allocation between departments, or for energy monitoring. Meter type is selected against the flow range and turndown rather than pipe size, since an oversized meter is inaccurate at low flow.",
    includes: [
      "Rotary, turbine or diaphragm meter selected against the actual flow range",
      "Upstream straight lengths and strainer as the meter type requires",
      "Volume correction for pressure and temperature",
      "Bypass line where measurement cannot interrupt supply",
    ],
    builtFrom: ["gas-meters", "gas-filters"],
  },
  {
    slug: "pressure-reduction-stations",
    name: "Pressure Reduction Stations",
    abbr: "PRS",
    role: "Any tier → lower tier",
    overview:
      "The general case of a regulating station: taking gas from one pressure tier to a lower one, at whatever point in a network or plant that step is needed. Configuration — number of streams, single or dual-stage, degree of redundancy — follows the criticality of what is downstream.",
    includes: [
      "Single or dual-stage reduction according to the pressure ratio",
      "Parallel streams with automatic changeover where required",
      "Slam shut and relief protection on the outlet",
      "Monitor regulator arrangement where a shut-off cannot be tolerated",
    ],
    builtFrom: ["gas-pressure-regulators", "slum-shut-valves", "safety-relief-valves"],
  },
  {
    slug: "gas-filter-skids",
    name: "Gas Filter Skids",
    abbr: null,
    role: "Protection for everything downstream",
    overview:
      "Removes pipe scale, dust, rust and liquid carryover before they reach regulators, meters and burners. Filtration is what determines how long the equipment behind it holds its accuracy: particulate is the usual cause of a regulator passing and a meter drifting, and both fail expensively.",
    includes: [
      "Filter vessel with the element grade selected for the contamination present",
      "Differential pressure indication so element change is scheduled on condition",
      "Drain arrangement for collected liquids",
      "Duplex configuration where filtration cannot be taken offline",
    ],
    builtFrom: ["gas-filters"],
  },
  {
    slug: "gas-pressure-control-panels",
    name: "Gas Pressure Control Panels",
    abbr: null,
    role: "Control and monitoring",
    overview:
      "The instrumentation and control side of a regulating installation — pressure switches, indication, alarms and the interlocks that shut gas off on an abnormal condition. Supplied as a panel built and wired against the station it serves.",
    includes: [
      "Pressure switches and indication for inlet, interstage and outlet",
      "Low and high pressure alarm and trip interlocks",
      "Safety shut-off valve control",
      "Panel built, wired and tested against the station drawings",
    ],
    builtFrom: ["gas-air-pressure-switch", "solenoid-valves"],
  },
  {
    slug: "custom-distribution-solutions",
    name: "Customized Gas Distribution Solutions",
    abbr: null,
    role: "Where none of the above fits as-is",
    overview:
      "Not every requirement matches a standard station type. Where the site constraints, gas composition, pressure tiers or metering arrangement fall outside the usual patterns, the system is designed from the requirement rather than adapted from a template — through the same design, manufacture, test and commission route as everything else.",
    includes: [
      "Design worked from your requirement, site survey and constraints",
      "Drawings issued for approval before anything is fabricated",
      "Built, tested and commissioned by the same team",
      "Documented so it can be maintained and modified later",
    ],
    builtFrom: [],
  },
];

/** The promise made about every system, used as supporting copy under the list. */
export const systemsPromise =
  "Every system is designed for precise pressure control, accurate gas measurement, maximum operational safety and long-term reliability.";

/* -------------------------------------------------------------------------- */
/* Services                                                                   */
/* -------------------------------------------------------------------------- */

export interface Service {
  slug: string;
  title: string;
  icon: ProfileIconKey;
  /** One sentence. Shown on cards and in compact lists. */
  summary: string;
  /** What the engagement actually covers. Scope, not claims. */
  detail: string[];
}

export interface ServicePhase {
  slug: string;
  /** Short label for the phase, e.g. "Design & Build". */
  title: string;
  /** One line on what this phase of the relationship covers. */
  blurb: string;
  services: Service[];
}

/**
 * The nine services from the client brief, grouped into the three phases of a
 * system's life. The grouping is ours; the nine titles are the client's and
 * should not be renamed without asking.
 */
export const servicePhases: ServicePhase[] = [
  {
    slug: "design-build",
    title: "Design & Build",
    blurb: "Sizing the system around your gas, then manufacturing it.",
    services: [
      {
        slug: "system-design-engineering",
        title: "System Design & Engineering",
        icon: "design",
        summary:
          "Stations and skids sized around your inlet pressure, flow range, site constraints and metering requirements.",
        detail: [
          "Pressure and flow calculations, regulator and meter sizing, and stream configuration",
          "P&ID, general arrangement and dimensional drawings issued for approval before fabrication",
          "Over-pressure protection philosophy — slam shut and relief sizing — settled at design stage",
          "Layout worked against the real site envelope, including access for future maintenance",
        ],
      },
      {
        slug: "manufacturing-assembly",
        title: "Manufacturing & Assembly",
        icon: "manufacturing",
        summary:
          "In-house fabrication and assembly, with inspection and testing at every stage before despatch.",
        detail: [
          "Skid fabrication, pipework, and assembly of regulating and metering streams",
          "Stage-wise inspection through the build rather than a single check at the end",
          "Pressure and leak testing of the completed assembly before it leaves the works",
          "Systems despatched pre-assembled and tested, to shorten the work left at site",
        ],
      },
      {
        slug: "supply-of-equipment",
        title: "Supply of Equipment & Accessories",
        icon: "supply",
        summary:
          "Pressure regulators, slam shut valves, filters, flow meters and accessories — as part of a system or on their own.",
        detail: [
          "Pressure regulators, slam shut valves, relief valves and gas filters",
          "Rotary, turbine and diaphragm meters, quantometers and volume correctors",
          "Instrumentation, pressure switches and burner-side components",
          "Spares held against the equipment we have supplied and installed",
        ],
      },
    ],
  },
  {
    slug: "deliver-commission",
    title: "Deliver & Commission",
    blurb: "Getting the system installed, proven and handed over.",
    services: [
      {
        slug: "installation-commissioning",
        title: "Installation & Commissioning",
        icon: "commissioning",
        summary:
          "Site installation, tie-in, purging and first gas-in, carried out by the team that built the system.",
        detail: [
          "Positioning, tie-in to the incoming and outgoing lines, and pre-commissioning checks",
          "Purging and controlled gas-in, with set points established on live gas",
          "Slam shut and relief settings proven under commissioning conditions",
          "Handover with as-built drawings and a record of the settings the system was left at",
        ],
      },
      {
        slug: "testing-calibration",
        title: "Performance Testing & Calibration",
        icon: "calibration",
        summary:
          "Metering accuracy and regulator set points verified at commissioning, then re-verified on schedule.",
        detail: [
          "Meter accuracy checks and volume corrector verification",
          "Regulator, slam shut and relief set points confirmed against the design intent",
          "Re-calibration on an agreed interval, since accuracy drifts with time and duty",
          "Test records issued for each visit, so a measurement dispute has an audit trail",
        ],
      },
    ],
  },
  {
    slug: "operate-maintain",
    title: "Operate & Maintain",
    blurb: "Keeping it accurate, safe and available for the life of the installation.",
    services: [
      {
        slug: "annual-maintenance-contracts",
        title: "Annual Maintenance Contracts (AMC)",
        icon: "amc",
        summary:
          "A scheduled contract covering routine servicing, calibration and priority response for the year.",
        detail: [
          "An agreed visit schedule rather than call-out only, so servicing does not get deferred",
          "Filter elements, seals and consumables covered within the contract scope",
          "Calibration intervals tracked and met without you having to raise them",
          "Priority attendance for contracted sites when something does go wrong",
        ],
      },
      {
        slug: "preventive-breakdown-maintenance",
        title: "Preventive & Breakdown Maintenance",
        icon: "maintenance",
        summary: "Planned servicing to stop failures, and attendance when one happens anyway.",
        detail: [
          "Filter element changes, seal and diaphragm replacement, and set point re-checks",
          "Inspection for the failure modes that precede an outage — creep, drift, passing valves",
          "Breakdown attendance with the spares for the equipment actually installed",
          "Findings reported against the specific unit, not a generic service sheet",
        ],
      },
      {
        slug: "technical-support-training",
        title: "Technical Support & Training",
        icon: "training",
        summary:
          "Operator and technician training on the equipment you run, plus support when a question comes up.",
        detail: [
          "Operator training on normal duty, changeover and safe isolation",
          "Technician training on servicing, set point adjustment and fault diagnosis",
          "Support on selection, sizing and troubleshooting for existing installations",
          "Documentation and settings recorded so knowledge survives a change of staff",
        ],
      },
      {
        slug: "upgradation-modernization",
        title: "System Upgradation & Modernization",
        icon: "upgrade",
        summary:
          "Bringing an existing station up to current requirements without rebuilding it from scratch.",
        detail: [
          "Capacity uprating where demand has outgrown the original design",
          "Meter replacement and volume corrector retrofit for better measurement",
          "Obsolete equipment replaced where spares are no longer available",
          "Staged changeover planned around your outage window, not ours",
        ],
      },
    ],
  },
];

/** All nine services, flattened — for compact lists, the sitemap and JSON-LD. */
export const services: Service[] = servicePhases.flatMap((phase) => phase.services);

/* -------------------------------------------------------------------------- */
/* Industries                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Sectors served, as given by the client. Deliberately plain strings: these are
 * rendered as chips, and none of them has a page to link to.
 */
export const industries = [
  "City Gas Distribution (CGD)",
  "Natural Gas Transmission",
  "Industrial Manufacturing",
  "Power Generation",
  "Steel & Metals",
  "Glass & Ceramics",
  "Food Processing",
  "Textiles",
  "Commercial Gas Distribution",
  "LPG & Alternative Fuels",
];

/* -------------------------------------------------------------------------- */
/* Why us                                                                     */
/* -------------------------------------------------------------------------- */

export interface Differentiator {
  title: string;
  body: string;
}

/**
 * The client's eight reasons, each given a sentence of substance. Note what is
 * absent: no named certification, no installation count, no years in business.
 * The brief claims "compliance with international standards" without naming
 * one, so neither do we.
 */
export const differentiators: Differentiator[] = [
  {
    title: "Experienced engineering team",
    body: "Engineers and technicians who have specified, built and commissioned regulating and metering systems in the field.",
  },
  {
    title: "Customized for every application",
    body: "Stations and skids configured around your inlet pressure, flow range, site constraints and metering requirements.",
  },
  {
    title: "Strict quality control",
    body: "In-house manufacturing with inspection and testing at every stage of assembly before despatch.",
  },
  {
    title: "Standards compliance",
    body: "Systems designed and built to the applicable national and international standards for gas distribution equipment.",
  },
  {
    title: "Safe, energy-efficient systems",
    body: "Precise pressure control and over-pressure protection engineered in, not added on.",
  },
  {
    title: "Timely project execution",
    body: "Schedules committed against realistic manufacturing and commissioning plans, and met.",
  },
  {
    title: "Complete after-sales support",
    body: "AMC, preventive and breakdown maintenance, calibration and spares for the life of the installation.",
  },
  {
    title: "Cost-effective and customer-focused",
    body: "Solutions scoped to what the site actually needs, with a single point of responsibility throughout.",
  },
];
