import type { Category } from "./types";
import { docsFor, quoteCta } from "./shared";

export const burnerEquipment: Category = {
  slug: "burner-equipment",
  name: "Burner & Combustion Equipment",
  icon: "burner",
  tagline:
    "Zero governors, ratio controls and ignition hardware — the pieces that decide how well the flame behaves.",
  overview:
    "Combustion quality is set by the relationship between gas and air, and that relationship is maintained by a small group of unglamorous components. Zero governors hold gas at atmospheric reference so an atmospheric burner draws exactly what it needs; ratio controls keep the mixture correct as firing rate changes; ignition and flame-proving hardware make the sequence safe. Getting these right is usually worth more in fuel savings than any change to the burner itself.",
  features: [
    "Zero governors delivering gas at atmospheric reference pressure",
    "Air/gas ratio controls maintaining mixture across the firing range",
    "Ignition transformers and spark electrodes for reliable light-up",
    "Flame detection by ionisation probe or UV cell",
    "Combustion air proving switches",
    "Components matched as a set rather than sold individually",
  ],
  specs: [
    { label: "Design pressure", value: "Up to 500 mbar" },
    { label: "Sizes", value: "DN 15 – DN 150 / ½\" – 6\"" },
    { label: "Burner capacity", value: "Components rated 20 kW – 20 MW" },
    { label: "Ratio control range", value: "Typically 1:1 to 1:20 air/gas turndown" },
    { label: "Ignition transformer output", value: "5 – 15 kV" },
    { label: "Flame detection", value: "Ionisation probe or UV cell" },
    { label: "Media", value: "Natural gas, LPG, propane, butane, biogas" },
    { label: "Operating temperature", value: "−20 °C to +60 °C" },
  ],
  applications: [
    "Atmospheric and forced-draught burners",
    "Industrial ovens, dryers and kilns",
    "Boiler and hot-water plant",
    "Radiant heating systems",
    "Thermal oxidisers",
  ],
  industries: [
    "Food and beverage processing",
    "Glass, ceramics and cement",
    "Textiles and dyeing",
    "Heavy manufacturing",
    "Agriculture and drying",
    "Commercial real estate",
  ],
  benefits: [
    {
      title: "Lower fuel cost from correct mixture",
      description:
        "A burner running with excess air heats the flue instead of the process. Maintaining ratio across the firing range is one of the cheapest efficiency gains available on existing plant.",
    },
    {
      title: "Reliable light-up",
      description:
        "Correctly specified ignition and flame-proving hardware removes the repeated lockouts that cost production time and gradually erode operator trust in the interlocks.",
    },
    {
      title: "Stable process temperature",
      description:
        "Consistent combustion means the process sees a steady heat input, which shows up directly in product quality on ovens, kilns and dryers.",
    },
    {
      title: "Cleaner emissions",
      description:
        "Complete combustion at correct ratio reduces carbon monoxide and unburnt hydrocarbons, helping keep the site inside its emissions consent.",
    },
  ],
  cta: quoteCta,
  faqs: [
    {
      question: "What does a zero governor actually do?",
      answer:
        "It delivers gas at essentially atmospheric pressure, so gas only flows when the burner's air stream creates suction. That makes gas delivery inherently proportional to air flow, which is what keeps an atmospheric burner's mixture correct without active control.",
    },
    {
      question: "Ionisation probe or UV flame detection?",
      answer:
        "Ionisation probes are simpler and cheaper and work well on stable, well-defined gas flames with a good earth path. UV cells suit larger flames, oil/gas dual-fuel duty and installations where the probe cannot be positioned reliably.",
    },
    {
      question: "How often should combustion be re-tuned?",
      answer:
        "At least annually, and after any change to the burner, the gas supply or the process load. Ratio drifts with linkage wear and fouling, and the fuel cost of running untuned typically dwarfs the cost of the visit.",
    },
  ],
  products: [
    {
      slug: "zero-governors",
      name: "Zero Governors",
      series: "BC-Z",
      tagline: "Holds gas at atmospheric reference so the burner draws exactly what it needs.",
      overview:
        "The BC-Z regulates outlet pressure to approximately zero gauge, meaning gas only moves when the burner's air stream pulls it. Delivery therefore tracks air flow automatically, giving atmospheric and injector-type burners a self-correcting mixture with no linkage to wear or drift.",
      features: [
        "Outlet held at atmospheric reference",
        "Gas delivery follows air flow automatically",
        "Fine zero-adjustment screw",
        "Balanced diaphragm for high sensitivity",
        "Suitable for natural gas, LPG and biogas",
      ],
      specs: [
        { label: "Inlet pressure", value: "20 mbar – 500 mbar" },
        { label: "Outlet pressure", value: "Approximately 0 mbar gauge, adjustable" },
        { label: "Sizes", value: "DN 15 – DN 100" },
        { label: "Connections", value: "Threaded BSP / NPT" },
        { label: "Body material", value: "Aluminium alloy" },
        { label: "Temperature range", value: "−20 °C to +60 °C" },
      ],
      applications: [
        "Atmospheric burner gas supply",
        "Injector and venturi mixing systems",
        "Radiant tube and infra-red heaters",
      ],
      documents: docsFor("BC-Z Zero Governor"),
    },
    {
      slug: "air-gas-ratio-controls",
      name: "Air/Gas Ratio Controls",
      series: "BC-R",
      tagline: "Keeps the mixture right at every firing rate, not just at full fire.",
      overview:
        "The BC-R references combustion air pressure and modulates gas delivery to track it, so the air/gas ratio holds as the burner modulates. Without it, a burner tuned at high fire almost always runs with excess air at low fire — which is where most plant spends its time.",
      features: [
        "Air-pressure referenced gas modulation",
        "Adjustable ratio and offset for fine tuning",
        "Maintains mixture across the full turndown",
        "Mechanical operation — no control power required",
        "Test points on air and gas references",
      ],
      specs: [
        { label: "Gas inlet pressure", value: "20 mbar – 500 mbar" },
        { label: "Air reference range", value: "0.5 – 100 mbar" },
        { label: "Ratio range", value: "Adjustable, typically 0.75:1 to 3:1" },
        { label: "Sizes", value: "DN 20 – DN 150" },
        { label: "Connections", value: "Threaded BSP / NPT, PN16 flanged" },
        { label: "Temperature range", value: "−20 °C to +60 °C" },
      ],
      applications: [
        "Modulating forced-draught burners",
        "Industrial ovens and dryers",
        "Kiln and furnace combustion systems",
      ],
      documents: docsFor("BC-R Air/Gas Ratio Control"),
    },
    {
      slug: "ignition-flame-detection",
      name: "Ignition & Flame Detection",
      series: "BC-IF",
      tagline: "Lights the burner reliably and proves the flame is genuinely there.",
      overview:
        "The BC-IF set pairs an ignition transformer and electrode with the flame-detection device that proves ignition succeeded. Both halves matter: a strong spark that no one can confirm is as useless as a detector watching an unlit burner, and nuisance lockouts nearly always trace back to a mismatch between the two.",
      features: [
        "Ignition transformers from 5 kV to 15 kV output",
        "Ceramic-insulated electrodes for high-temperature service",
        "Ionisation probes and UV cells for flame proving",
        "Screened cable sets to suppress interference",
        "Components matched as a set to the burner",
      ],
      specs: [
        { label: "Transformer output", value: "5 – 15 kV" },
        { label: "Supply voltage", value: "230 V AC / 110 V AC" },
        { label: "Electrode service temperature", value: "Up to +600 °C" },
        { label: "Detection method", value: "Ionisation probe or UV cell" },
        { label: "Response time", value: "< 1 s flame-failure detection" },
        { label: "Enclosure", value: "IP40 transformer, IP54 detector" },
      ],
      applications: [
        "Burner ignition systems",
        "Flame safeguard and proving chains",
        "Retrofit of ageing ignition equipment",
      ],
      documents: docsFor("BC-IF Ignition & Flame Detection"),
    },
  ],
};

export const accessoriesAndSpares: Category = {
  slug: "accessories-and-spare-parts",
  name: "Accessories & Spare Parts",
  icon: "accessory",
  tagline:
    "Seal kits, springs, elements and fittings — held in stock so a planned overhaul stays planned.",
  overview:
    "Most station downtime is not caused by a catastrophic failure; it is caused by waiting for a diaphragm. We hold consumables and wear parts for the equipment we supply, grouped into the kits an engineer actually opens during a service rather than as individual line items. Spring sets, filter elements, seal kits and test-point hardware ship from stock, and we will build a recommended holding list against your installed base.",
  features: [
    "Service kits grouped by overhaul task, not by part number",
    "Complete spring sets covering every outlet range in the regulator line",
    "Filter elements in all supplied grades and geometries",
    "Elastomer options for standard, sour and low-temperature service",
    "Test points, gauges, manifolds and isolation fittings",
    "Recommended spares holding prepared against your installed base",
  ],
  specs: [
    { label: "Seal materials", value: "NBR, HNBR, FKM, EPDM" },
    { label: "Filter element grades", value: "1, 5, 10, 25, 50 μm" },
    { label: "Spring sets", value: "Full outlet-range coverage for GR-S, GR-L, GR-SL, GR-P pilots" },
    { label: "Gauges", value: "40 – 100 mm dial, 0 – 100 bar ranges, glycerine-filled option" },
    { label: "Test points", value: "M8, M10, G¼ pressure test nipples and caps" },
    { label: "Fittings", value: "Threaded and flanged adapters, PN16 – PN100" },
    { label: "Temperature range", value: "−40 °C to +80 °C depending on elastomer" },
    { label: "Availability", value: "Core kits held in stock" },
  ],
  applications: [
    "Scheduled regulator and valve overhauls",
    "Filter element replacement programmes",
    "Outlet-range changes on existing regulators",
    "Instrument and gauge replacement",
    "Emergency breakdown response",
  ],
  industries: [
    "Gas distribution utilities",
    "Power generation",
    "Heavy manufacturing",
    "Chemicals and petrochemicals",
    "Facilities maintenance contractors",
    "District heating operators",
  ],
  benefits: [
    {
      title: "Overhauls finish in the window they were booked for",
      description:
        "A complete kit on the shelf means the service is a single visit, rather than a strip-down followed by a wait and a second mobilisation.",
    },
    {
      title: "Right elastomer for the actual gas",
      description:
        "Standard nitrile fails early on sour or heavily odorised gas and stiffens in genuine cold. Selecting the material to the service is what makes the interval predictable.",
    },
    {
      title: "Re-range instead of replace",
      description:
        "Changing outlet pressure is a spring swap on our regulator range, so a change in downstream requirement rarely means buying a new unit.",
    },
    {
      title: "Stock that matches your plant",
      description:
        "We build the recommended holding from your installed base, so the store carries the parts that will actually be needed and not much else.",
    },
  ],
  cta: quoteCta,
  faqs: [
    {
      question: "Which spares should we hold on site?",
      answer:
        "As a rule: one seal kit per critical regulator, one filter element per housing plus a spare, and a spring set for any station whose outlet pressure might change. Send us your equipment list and we will prepare a costed recommended holding.",
    },
    {
      question: "How do I identify the right kit for an installed unit?",
      answer:
        "From the series and size on the nameplate, plus the outlet range if a spring is involved. Photograph the nameplate and send it over — that is normally enough for us to identify the kit without a site visit.",
    },
    {
      question: "Do you supply parts for equipment bought elsewhere?",
      answer:
        "For common regulator and filter designs, frequently yes — many elements and seal profiles are dimensionally interchangeable. Send the nameplate details and we will confirm before you order.",
    },
  ],
  products: [
    {
      slug: "regulator-service-kits",
      name: "Regulator Service Kits",
      series: "AC-RK",
      tagline: "Every wear part for one overhaul, in one bag.",
      overview:
        "Each AC-RK kit contains the diaphragm, seat, O-rings and fasteners needed for a full service of a specific regulator series and size, with the correct elastomer for the stated gas service. Nothing is missing halfway through the job, which is the entire point.",
      features: [
        "Complete wear-part set for one overhaul",
        "Elastomer specified to the gas service",
        "Series- and size-specific — no cross-referencing",
        "Includes fasteners and seals often forgotten",
        "Shelf-life marked on every pack",
      ],
      specs: [
        { label: "Contents", value: "Diaphragm, seat, O-ring set, fasteners" },
        { label: "Elastomer options", value: "NBR, HNBR, FKM" },
        { label: "Coverage", value: "GR-S, GR-L, GR-SL, GR-P, GR-AX series" },
        { label: "Temperature rating", value: "−40 °C to +80 °C by elastomer" },
        { label: "Shelf life", value: "Marked per pack" },
      ],
      applications: [
        "Scheduled regulator overhaul",
        "Breakdown repair",
        "Elastomer upgrade for changed gas service",
      ],
      documents: docsFor("AC-RK Regulator Service Kit"),
    },
    {
      slug: "filter-elements",
      name: "Filter Elements",
      series: "AC-FE",
      tagline: "Replacement media in every grade and geometry we supply.",
      overview:
        "Replacement elements for the GF range in all filtration grades, with seals included so the housing reseals correctly on reassembly. Element geometry is matched to the original housing, because a nearly-right element bypasses at the seal and filters nothing.",
      features: [
        "Grades from 1 μm to 50 μm",
        "Housing seals included in every pack",
        "Pleated, cartridge and mesh geometries",
        "Coalescing elements for GF-CS housings",
        "Bulk pricing for replacement programmes",
      ],
      specs: [
        { label: "Filtration grades", value: "1, 5, 10, 25, 50 μm" },
        { label: "Media", value: "Pleated cellulose, glass fibre, sintered stainless mesh" },
        { label: "Coverage", value: "GF-C, GF-V, GF-Y, GF-CS housings" },
        { label: "Seals", value: "Included, NBR or HNBR" },
        { label: "Temperature rating", value: "−20 °C to +80 °C" },
      ],
      applications: [
        "Scheduled element replacement",
        "Differential-pressure-triggered change-out",
        "Post-commissioning first change",
      ],
      documents: docsFor("AC-FE Filter Element"),
    },
    {
      slug: "spring-sets-and-pilots",
      name: "Spring Sets & Pilot Assemblies",
      series: "AC-SP",
      tagline: "Re-range a regulator in the field instead of replacing it.",
      overview:
        "Colour-coded spring sets and complete pilot assemblies covering every outlet range across the regulator line. A change in downstream requirement becomes a spring swap during a planned visit rather than a capital purchase and a shutdown.",
      features: [
        "Colour-coded by outlet range for unambiguous selection",
        "Complete pilot assemblies for GR-P and GR-AX",
        "Covers the full outlet range of every regulator series",
        "Supplied with the setting instruction for the range",
        "Corrosion-protected finish for long shelf storage",
      ],
      specs: [
        { label: "Outlet range coverage", value: "8 mbar – 40 bar across the set range" },
        { label: "Identification", value: "Colour-coded and stamped" },
        { label: "Coverage", value: "GR-S, GR-L, GR-SL, GR-P pilots, GR-AX pilots" },
        { label: "Finish", value: "Corrosion-protected" },
        { label: "Supplied with", value: "Range setting instruction" },
      ],
      applications: [
        "Outlet pressure re-ranging",
        "Pilot replacement on high-accuracy stations",
        "Commissioning spares holding",
      ],
      documents: docsFor("AC-SP Spring Set & Pilot Assembly"),
    },
    {
      slug: "gauges-and-test-points",
      name: "Gauges, Test Points & Fittings",
      series: "AC-GT",
      tagline: "The small hardware that makes a station measurable and serviceable.",
      overview:
        "Pressure gauges, test nipples, manifolds, isolation cocks and adapters for building and maintaining stations. Unremarkable individually, but a station without accessible test points cannot be commissioned properly or fault-found quickly.",
      features: [
        "Glycerine-filled gauges for vibration resistance",
        "Standard test nipples with sealing caps",
        "Gauge isolation cocks and syphon fittings",
        "Threaded and flanged adapters across the pressure range",
        "Stainless options for corrosive atmospheres",
      ],
      specs: [
        { label: "Gauge ranges", value: "0 – 60 mbar up to 0 – 100 bar" },
        { label: "Dial sizes", value: "40, 63, 100 mm" },
        { label: "Test points", value: "M8, M10, G¼" },
        { label: "Fitting ratings", value: "PN16 – PN100" },
        { label: "Materials", value: "Brass, carbon steel, stainless steel" },
      ],
      applications: [
        "Station construction and retrofit",
        "Commissioning and periodic testing",
        "Instrument replacement",
      ],
      documents: docsFor("AC-GT Gauges, Test Points & Fittings"),
    },
  ],
};
