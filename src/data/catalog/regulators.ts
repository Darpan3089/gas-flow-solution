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
      slug: "spring-loaded-regulators",
      name: "Spring-Loaded Regulators",
      series: "GR-S",
      group: "Direct-Acting",
      tagline:
        "Direct-acting regulation with nothing to power and almost nothing to go wrong.",
      overview:
        "The GR-S is a direct-acting regulator in which a calibrated spring sets outlet pressure and the diaphragm senses it directly. With no pilot circuit in the loop, the response is immediate and the part count is low, which makes it the workhorse choice for service lines, small commercial installations and any duty where simplicity outranks last-percent accuracy.",
      features: [
        "Single moving assembly — spring, diaphragm and plug",
        "Colour-coded spring sets covering 15 mbar to 4 bar outlet",
        "Reinforced diaphragm rated for continuous cycling",
        "Built-in vent limiter option for indoor installation",
        "Adjustment accessible without removing the spring cap",
      ],
      specs: [
        { label: "Inlet pressure", value: "Up to 16 bar" },
        { label: "Outlet pressure", value: "15 mbar – 4 bar" },
        { label: "Sizes", value: "DN 15 – DN 100" },
        { label: "Accuracy class", value: "AC 5 – AC 10" },
        { label: "Lock-up class", value: "SG 10 – SG 20" },
        { label: "Connections", value: "Threaded BSP / NPT, PN16 flanged" },
        { label: "Body material", value: "Aluminium alloy or ductile iron" },
        { label: "Temperature range", value: "−20 °C to +60 °C" },
      ],
      applications: [
        "Commercial building service lines",
        "Small boiler and water-heater supply",
        "Workshop and laboratory gas feeds",
        "Secondary reduction downstream of a district station",
      ],
      documents: docsFor("GR-S Spring-Loaded Regulator"),
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
    {
      slug: "service-line-regulators",
      name: "Service Line Regulators",
      series: "GR-SL",
      group: "Direct-Acting",
      tagline:
        "Weatherproof reduction at the property boundary, built for decades outdoors.",
      overview:
        "The GR-SL sits where the distribution main meets the customer, so it is built for exposure rather than for a plant room: sealed bonnet, protected vent and a coating system rated for coastal atmospheres. Capacity suits single premises through to small multi-tenant risers, and the body accepts an integral shut-off for meter-set compliance.",
      features: [
        "Sealed, weather-protected bonnet with screened vent",
        "Coating system suited to coastal and industrial atmospheres",
        "Integral shut-off option for compliant meter sets",
        "Tamper-resistant set-point cap",
        "Mounting geometry compatible with common meter brackets",
      ],
      specs: [
        { label: "Inlet pressure", value: "Up to 7 bar" },
        { label: "Outlet pressure", value: "19 mbar – 2 bar" },
        { label: "Sizes", value: "DN 20 – DN 50" },
        { label: "Accuracy class", value: "AC 5" },
        { label: "Lock-up class", value: "SG 10" },
        { label: "Connections", value: "Threaded BSP / NPT" },
        { label: "Body material", value: "Aluminium alloy, coated" },
        { label: "Temperature range", value: "−30 °C to +60 °C" },
      ],
      applications: [
        "Domestic and small-commercial meter sets",
        "Property-boundary service connections",
        "Multi-tenant riser feeds",
        "Rural and semi-exposed installations",
      ],
      documents: docsFor("GR-SL Service Line Regulator"),
    },
    {
      slug: "axial-flow-regulators",
      name: "Axial Flow Regulators",
      series: "GR-AX",
      group: "Pilot-Controlled",
      tagline:
        "Straight-through geometry for very high capacity with noticeably less noise.",
      overview:
        "The GR-AX moves gas along the pipe axis rather than turning it through a globe body, which cuts pressure loss, raises capacity for a given size and takes a substantial bite out of generated noise. Where a conventional regulator would need acoustic lagging or an upsized body, the axial design often meets the noise target as installed.",
      features: [
        "In-line axial path for low permanent pressure loss",
        "Markedly reduced noise emission versus globe-style bodies",
        "High capacity within a compact face-to-face dimension",
        "Fast stroke response suited to sharp load steps",
        "Pilot-controlled with monitor capability",
      ],
      specs: [
        { label: "Inlet pressure", value: "2 – 100 bar" },
        { label: "Outlet pressure", value: "0.5 – 40 bar" },
        { label: "Sizes", value: "DN 50 – DN 300" },
        { label: "Accuracy class", value: "AC 1" },
        { label: "Lock-up class", value: "SG 2.5" },
        { label: "Connections", value: "PN25 – PN100 flanged, ANSI 150 – 600" },
        { label: "Body material", value: "Cast steel" },
        { label: "Temperature range", value: "−20 °C to +60 °C (−40 °C option)" },
      ],
      applications: [
        "High-capacity transmission take-offs",
        "Noise-sensitive urban regulating stations",
        "Power-plant and large-industrial intake",
        "Pipeline pressure-let-down installations",
      ],
      documents: docsFor("GR-AX Axial Flow Regulator"),
    },
  ],
};
