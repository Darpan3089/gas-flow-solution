import type { Category } from "./types";
import { docsFor, quoteCta } from "./shared";

export const gasPressureRegulators: Category = {
  slug: "gas-pressure-regulators",
  name: "Gas Pressure Regulators",
  icon: "regulator",
  tagline:
    "Hold outlet pressure steady while inlet conditions swing — from transmission tie-ins down to appliance connections.",
  overview:
    "Our regulator range covers the whole pressure ladder a gas network has to descend: high-pressure transmission take-offs, district reduction, industrial service lines and final appliance connections. Every model is a self-operated design that draws its control energy from the gas itself, so regulation continues through a power failure. Bodies, trims and spring ranges are selected per application rather than sold as a one-size line, which keeps droop and lock-up inside the band your commissioning engineer actually needs.",
  features: [
    "Self-operated control — no external power or instrument air required",
    "Balanced-plug trim options that suppress inlet-pressure droop",
    "Interchangeable spring sets for fast on-site outlet-range changes",
    "Optional integrated slam-shut and relief for single-body safety",
    "Corrosion-protected bodies with nitrile or HNBR elastomer sets",
    "Field-serviceable: seats, diaphragms and pilots replace without pipework removal",
  ],
  specs: [
    { label: "Inlet pressure range", value: "20 mbar – 100 bar (model dependent)" },
    { label: "Outlet pressure range", value: "8 mbar – 40 bar" },
    { label: "Body sizes", value: "DN 15 – DN 300 / ½\" – 12\"" },
    { label: "Connections", value: "Threaded BSP/NPT, PN16–PN100 flanged, ANSI 150–600" },
    { label: "Accuracy class", value: "AC 1 – AC 10 depending on trim and pilot" },
    { label: "Lock-up class", value: "SG 2.5 – SG 20" },
    { label: "Operating temperature", value: "−20 °C to +60 °C (−40 °C low-temp option)" },
    { label: "Body materials", value: "Ductile iron, cast steel, aluminium alloy, stainless" },
    { label: "Suitable media", value: "Natural gas, LPG, propane, butane, air, nitrogen" },
  ],
  applications: [
    "City-gate and district pressure reduction",
    "Industrial plant service lines and boiler houses",
    "Commercial building and multi-tenant risers",
    "Burner and furnace inlet regulation",
    "CNG and LPG decanting installations",
    "Standby and emergency supply skids",
  ],
  industries: [
    "Gas distribution utilities",
    "Power generation",
    "Petrochemical and refining",
    "Glass, ceramics and cement",
    "Food and beverage processing",
    "Textiles and dyeing",
    "Commercial real estate",
  ],
  benefits: [
    {
      title: "Stable pressure under swinging demand",
      description:
        "Balanced trim and correctly matched pilots keep outlet pressure inside a narrow band even when upstream supply or downstream draw moves sharply, protecting burner tuning and combustion efficiency.",
    },
    {
      title: "Lower lifetime cost",
      description:
        "Wear parts are grouped into serviceable kits, so a scheduled overhaul is a seal-and-seat change rather than a unit replacement.",
    },
    {
      title: "Fewer failure points",
      description:
        "Combining regulation, slam-shut and relief in a single body removes flanges, gaskets and leak paths from the station and shortens the skid.",
    },
    {
      title: "Faster commissioning",
      description:
        "Spring ranges and set points adjust in the field without cutting into pipework, so a station can be re-ranged during the same shift.",
    },
  ],
  cta: quoteCta,
  faqs: [
    {
      question: "How do I choose between a spring-loaded and a pilot-operated regulator?",
      answer:
        "Spring-loaded units are simpler, cheaper and ideal where flow is modest and a few percent of droop is acceptable. Pilot-operated units use the gas itself to amplify the control signal, giving far tighter accuracy at high capacity — the usual choice above roughly DN 50 or where accuracy class AC 1–2.5 is specified.",
    },
    {
      question: "What is the difference between accuracy class and lock-up class?",
      answer:
        "Accuracy class describes how far outlet pressure deviates from set point across the working flow range. Lock-up class describes how far pressure rises above set point once flow stops. Both are specified as percentages, and both should be checked against the downstream equipment's maximum rating.",
    },
    {
      question: "Do these regulators need a separate safety device?",
      answer:
        "Most installations require overpressure protection downstream. That can be an integrated slam-shut, an integrated relief, or separate devices — the right answer depends on your local code and on the downstream pipe rating. We size the protection together with the regulator.",
    },
    {
      question: "Can outlet pressure be changed after installation?",
      answer:
        "Yes, within the fitted spring's range by adjusting the set-point screw. Moving outside that band requires swapping to a different spring set, which is a field operation on every model in this range.",
    },
  ],
  products: [
    {
      slug: "r-series-gas-pressure-regulator",
      name: "R Series – Gas Pressure Regulator, Threaded Connection PS: 16 bar",
      series: "R Series",
      group: "Spring Loaded Gas Pressure Regulators",
      tagline:
        "Direct-acting, spring-loaded regulation with threaded connections, rated PS 16 bar.",
      overview:
        "The R Series is a direct-acting, spring-loaded gas pressure regulator designed and manufactured according to the 2014/68/EU Pressure Equipment Directive, EN 334 and EN 14382. A fail-open design with a balanced valve or ratio system, it holds outlet pressure across a wide regulation range and seals fully at zero flow, making it the threaded-connection workhorse for service lines and industrial installations up to 16 bar.",
      features: [
        "Fail-open regulator with balanced valve or ratio system",
        "Rugged construction for durability",
        "Wide pressure regulation range",
        "Full seal at zero flow",
        "Easy maintenance",
        "Optional minimum and/or maximum pressure slam-shut device",
        "Available with or without SSV",
        "Electric SSV-closed position indicator via inductive proximity switch",
        "Internal relief valve",
        "Combined monitoring system",
        "Bypass system for easy SSV reactivation",
      ],
      specs: [
        { label: "Design pressure (PS)", value: "16 bar" },
        { label: "Connections", value: "Threaded BSP / NPT" },
        { label: "Operating principle", value: "Direct-acting, spring-loaded, fail open" },
        { label: "Design standards", value: "EN 334, EN 14382" },
        { label: "Compliance", value: "2014/68/EU Pressure Equipment Directive" },
        { label: "Safety options", value: "Slam-shut (min/max), internal relief valve" },
        { label: "Temperature range", value: "−20 °C to +60 °C" },
        { label: "Suitable media", value: "Natural gas, LPG, air, non-corrosive gases" },
      ],
      applications: [
        "Commercial building service lines",
        "Boiler-house and burner inlet regulation",
        "Industrial plant service lines",
        "Secondary reduction downstream of a district station",
      ],
      image: "/products/r-series/main.webp",
      gallery: [
        "/products/r-series/1.webp",
        "/products/r-series/2.webp",
        "/products/r-series/3.webp",
        "/products/r-series/4.webp",
        "/products/r-series/5.webp",
      ],
      documents: docsFor("R Series Gas Pressure Regulator"),
      faqs: [
        {
          question: "Does a spring-loaded regulator need a vent line?",
          answer:
            "Outdoors, the bonnet vent can usually discharge to atmosphere directly. Indoors, fit the vent-limiter option or pipe the vent to a safe external location as required by local code.",
        },
        {
          question: "How much droop should I expect?",
          answer:
            "Across the normal working range, outlet pressure falls a few percent as flow rises toward maximum capacity. Size the unit so design flow sits near the middle of its capacity curve rather than at the top.",
        },
      ],
    },
    {
      slug: "f-series-gas-pressure-regulator",
      name: "F Series – Gas Pressure Regulators, Flanged Connection PS: 25 bar",
      series: "F Series",
      group: "Spring Loaded Gas Pressure Regulators",
      tagline:
        "Direct-acting, spring-loaded regulation with flanged connections, rated PS 25 bar.",
      overview:
        "The F Series is a direct-acting, spring-loaded gas pressure regulator built to the 2014/68/EU Pressure Equipment Directive, EN 334 and EN 14382. Its flanged, fail-open body with a balanced valve covers higher-capacity duties up to 25 bar, with full seal at zero flow and optional internal or external silencers where noise limits apply.",
      features: [
        "Fail-open regulator with balanced valve",
        "Rugged construction for durability",
        "Wide pressure regulation range",
        "Full seal at zero flow",
        "Easy maintenance",
        "Optional minimum and/or maximum pressure slam-shut device",
        "Optional silencer, internal and/or external",
        "Available with or without SSV",
        "Electric SSV-closed position indicator via inductive proximity switch",
        "Internal relief valve",
        "Combined monitoring system",
        "Bypass system for easy SSV reactivation",
      ],
      specs: [
        { label: "Design pressure (PS)", value: "25 bar" },
        { label: "Connections", value: "Flanged" },
        { label: "Operating principle", value: "Direct-acting, spring-loaded, fail open" },
        { label: "Design standards", value: "EN 334, EN 14382" },
        { label: "Compliance", value: "2014/68/EU Pressure Equipment Directive" },
        { label: "Safety options", value: "Slam-shut (min/max), internal relief valve, silencer" },
        { label: "Temperature range", value: "−20 °C to +60 °C" },
        { label: "Suitable media", value: "Natural gas, LPG, air, non-corrosive gases" },
      ],
      applications: [
        "District and industrial regulating stations",
        "Large boiler-house and plant intake lines",
        "Power-station fuel-gas supply",
        "High-capacity commercial installations",
      ],
      image: "/products/f-series/main.webp",
      gallery: [
        "/products/f-series/1.webp",
        "/products/f-series/2.webp",
        "/products/f-series/3.webp",
        "/products/f-series/4.webp",
        "/products/f-series/5.webp",
        "/products/f-series/6.webp",
      ],
      documents: docsFor("F Series Gas Pressure Regulator"),
    },
    {
      slug: "pilot-operated-regulators",
      name: "Pilot Operated Regulators",
      series: "GR-P",
      group: "Pilot-Controlled",
      tagline:
        "Tight accuracy at high capacity, using the gas stream itself as the control amplifier.",
      overview:
        "In the GR-P a small pilot regulator senses outlet pressure and modulates loading pressure on the main diaphragm. That amplification lets a large main valve be driven by a very small error signal, so the unit holds accuracy class AC 1 across a wide turndown. It is the standard selection for district stations, custody-transfer skids and any installation where downstream equipment is intolerant of pressure drift.",
      features: [
        "Two-path pilot circuit with adjustable restrictor for stability tuning",
        "Accuracy held to AC 1 across the working range",
        "Balanced main plug largely immune to inlet-pressure variation",
        "Pilot serviceable while the main body stays in line",
        "Accepts monitor (standby) pilot for fail-to-set-point redundancy",
      ],
      specs: [
        { label: "Inlet pressure", value: "1 – 100 bar" },
        { label: "Outlet pressure", value: "0.1 – 40 bar" },
        { label: "Sizes", value: "DN 25 – DN 300" },
        { label: "Accuracy class", value: "AC 1 – AC 2.5" },
        { label: "Lock-up class", value: "SG 2.5 – SG 5" },
        { label: "Connections", value: "PN16 – PN100 flanged, ANSI 150 – 600" },
        { label: "Body material", value: "Cast steel or ductile iron" },
        { label: "Temperature range", value: "−20 °C to +60 °C (−40 °C option)" },
      ],
      applications: [
        "City-gate and district regulating stations",
        "Custody-transfer metering skids",
        "Large industrial plant intake",
        "Power-station fuel-gas conditioning",
      ],
      documents: docsFor("GR-P Pilot Operated Regulator"),
      faqs: [
        {
          question: "What is a monitor regulator and do I need one?",
          answer:
            "A monitor is a second regulator in series held at a slightly higher set point. It does nothing in normal service but takes over if the primary fails open, capping downstream pressure without shutting off supply. It is common where an interruption is more costly than the extra hardware.",
        },
        {
          question: "Why does the pilot need a restrictor adjustment?",
          answer:
            "The restrictor sets how quickly loading pressure bleeds off, which determines the balance between fast response and hunting. It is tuned once at commissioning against the actual station volume.",
        },
      ],
    },
    {
      slug: "low-pressure-regulators",
      name: "Low Pressure Regulators",
      series: "GR-L",
      group: "Direct-Acting",
      tagline:
        "Final-stage reduction to appliance pressure, sized for the millibar end of the network.",
      overview:
        "The GR-L handles the last step before the burner or appliance, delivering a stable millibar-range outlet from a low or medium-pressure feed. A large diaphragm area relative to the seat gives the sensitivity that low-pressure duties demand, and a compact body keeps it viable inside plant rooms and appliance enclosures.",
      features: [
        "Oversized diaphragm for high sensitivity at low differential",
        "Outlet set points from 8 mbar",
        "Compact envelope for confined plant-room installation",
        "Integral test nipples upstream and downstream",
        "Optional over-pressure cut-off for appliance protection",
      ],
      specs: [
        { label: "Inlet pressure", value: "Up to 5 bar" },
        { label: "Outlet pressure", value: "8 – 300 mbar" },
        { label: "Sizes", value: "DN 15 – DN 80" },
        { label: "Accuracy class", value: "AC 5 – AC 10" },
        { label: "Lock-up class", value: "SG 10 – SG 20" },
        { label: "Connections", value: "Threaded BSP / NPT" },
        { label: "Body material", value: "Aluminium alloy" },
        { label: "Temperature range", value: "−20 °C to +60 °C" },
      ],
      applications: [
        "Appliance and burner inlet connections",
        "Residential and light-commercial meter sets",
        "Laboratory and test-bench gas supply",
        "Catering and commercial kitchen equipment",
      ],
      documents: docsFor("GR-L Low Pressure Regulator"),
    },
  ],
};
