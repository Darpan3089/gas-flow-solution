import type { Category } from "./types";
import { docsFor, quoteCta } from "./shared";

export const gasFilters: Category = {
  slug: "gas-filters",
  name: "Gas Filters",
  icon: "filter",
  tagline:
    "Take dust, rust, weld scale and liquid carry-over out of the stream before they reach a seat or a meter.",
  overview:
    "Regulators, meters and solenoid valves all fail in the same way: a particle lodges on a seat and the unit stops sealing. Filtration is the cheapest insurance in the station, and our range spans simple Y-strainers for commissioning duty through to coalescing separators that pull aerosol liquids out of wet gas. Every housing is sized on clean-and-dirty differential pressure rather than pipe size alone, so the element reaches its service interval instead of choking the station.",
  features: [
    "Filtration grades from 50 μm down to 1 μm absolute",
    "Quick-release closures for element changes without pipework breaks",
    "Differential-pressure gauge and switch ports as standard",
    "Drain and vent connections on every vessel-style housing",
    "Element geometry chosen for dust-holding capacity, not just fineness",
    "Housings pressure-tested and rated to the station's maximum inlet",
  ],
  specs: [
    { label: "Design pressure", value: "Up to 100 bar depending on housing" },
    { label: "Filtration grade", value: "1 μm – 50 μm" },
    { label: "Sizes", value: "DN 15 – DN 300 / ½\" – 12\"" },
    { label: "Connections", value: "Threaded BSP/NPT, PN16–PN100 flanged, ANSI 150–600" },
    { label: "Recommended change-out ΔP", value: "0.3 – 0.5 bar above clean condition" },
    { label: "Element media", value: "Pleated cellulose, glass fibre, sintered stainless mesh" },
    { label: "Operating temperature", value: "−20 °C to +80 °C" },
    { label: "Body materials", value: "Ductile iron, cast steel, aluminium alloy" },
  ],
  applications: [
    "Regulator and meter inlet protection",
    "Pre-filtration ahead of custody-transfer skids",
    "Burner gas train protection",
    "Post-construction commissioning and line cleaning",
    "Wet-gas liquid removal on well-head and satellite stations",
  ],
  industries: [
    "Gas distribution utilities",
    "Power generation",
    "Oil and gas production",
    "Chemicals and petrochemicals",
    "Heavy manufacturing",
    "Pharmaceutical utilities",
  ],
  benefits: [
    {
      title: "Protects the expensive equipment downstream",
      description:
        "An element costs a fraction of a regulator overhaul or a failed meter calibration. Filtration converts unplanned seat damage into a scheduled consumable change.",
    },
    {
      title: "Measurable service intervals",
      description:
        "Differential-pressure instrumentation turns element replacement into a data-driven decision rather than a calendar guess, so elements are used to their full capacity.",
    },
    {
      title: "Shorter maintenance windows",
      description:
        "Quick-release closures and top-entry elements mean a change-out is a short isolation, not a pipework break and re-test.",
    },
    {
      title: "Cleaner combustion",
      description:
        "Removing liquid carry-over and fines stabilises burner behaviour and reduces nuisance flame-failure lockouts.",
    },
  ],
  cta: quoteCta,
  faqs: [
    {
      question: "What filtration grade do I actually need?",
      answer:
        "Match it to the most sensitive device downstream. Meters and pilot-operated regulators generally want 5 μm or finer; simple shut-off duty tolerates 25–50 μm. Going finer than required shortens element life without adding protection.",
    },
    {
      question: "When should the element be replaced?",
      answer:
        "On differential pressure, not on time. Record the clean ΔP at commissioning and replace once it has risen by roughly 0.3–0.5 bar, or sooner if the manufacturer's collapse rating is close.",
    },
    {
      question: "Do I need a coalescing filter or a particulate filter?",
      answer:
        "Particulate filters handle solids only. If the gas carries liquid aerosols — compressor oil, condensate, glycol — a coalescing separator is required, since liquid will blind a dry particulate element quickly.",
    },
  ],
  products: [
    {
      slug: "inline-cartridge-filters",
      name: "Inline Cartridge Filters",
      series: "GF-C",
      tagline: "Compact in-line protection where space is tight and flow is moderate.",
      overview:
        "The GF-C puts a pleated cartridge directly in the pipe run with a face-to-face dimension close to a spool piece, so it retrofits into existing stations without re-piping. Elements lift out through a top closure, and the standard gauge ports let a differential indicator be fitted at any time.",
      features: [
        "Retrofit-friendly face-to-face dimension",
        "Top-entry element access",
        "Pleated media for high surface area in a small body",
        "Gauge ports upstream and downstream as standard",
        "Grades from 5 μm to 25 μm",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 25 bar" },
        { label: "Filtration grade", value: "5 – 25 μm" },
        { label: "Sizes", value: "DN 15 – DN 100" },
        { label: "Connections", value: "Threaded BSP / NPT, PN16 flanged" },
        { label: "Body material", value: "Aluminium alloy or ductile iron" },
        { label: "Temperature range", value: "−20 °C to +60 °C" },
      ],
      applications: [
        "Regulator inlet protection on service lines",
        "Burner gas train pre-filtration",
        "Retrofit into existing skids",
      ],
      documents: docsFor("GF-C Inline Cartridge Filter"),
    },
    {
      slug: "vertical-vessel-filters",
      name: "Vertical Vessel Filters",
      series: "GF-V",
      tagline: "High dust-holding capacity for stations that cannot be taken offline often.",
      overview:
        "The GF-V uses a vertical vessel with a large-diameter element and a settling volume beneath it, so heavy particulate drops out before it ever reaches the media. The result is a much longer interval between change-outs, which is what matters on transmission and city-gate duty where isolation is expensive.",
      features: [
        "Settling chamber below the element for heavy particulate drop-out",
        "Large-diameter element for extended service life",
        "Quick-release closure with safety interlock",
        "Drain connection with optional automatic dump",
        "Differential-pressure switch port for remote alarm",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 100 bar" },
        { label: "Filtration grade", value: "1 – 10 μm" },
        { label: "Sizes", value: "DN 50 – DN 300" },
        { label: "Connections", value: "PN25 – PN100 flanged, ANSI 150 – 600" },
        { label: "Body material", value: "Cast steel" },
        { label: "Temperature range", value: "−20 °C to +80 °C" },
      ],
      applications: [
        "City-gate and transmission stations",
        "Custody-transfer skid pre-filtration",
        "Power-plant fuel-gas conditioning",
      ],
      documents: docsFor("GF-V Vertical Vessel Filter"),
    },
    {
      slug: "y-type-strainers",
      name: "Y-Type Strainers",
      series: "GF-Y",
      tagline: "Coarse mechanical protection — the cheapest way to stop weld scale reaching a seat.",
      overview:
        "A GF-Y strainer is the first thing to fit after construction and the last thing to remove. A stainless mesh basket in a Y-body catches scale, swarf and rust at very low pressure loss, and the blow-down plug lets accumulated debris be flushed without opening the line.",
      features: [
        "Stainless steel mesh basket, removable and reusable",
        "Very low clean pressure drop",
        "Blow-down plug for in-service flushing",
        "Mesh grades from 20 to 50 μm equivalent",
        "Suitable for permanent or commissioning-only installation",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 40 bar" },
        { label: "Filtration grade", value: "20 – 50 μm equivalent" },
        { label: "Sizes", value: "DN 15 – DN 200" },
        { label: "Connections", value: "Threaded BSP / NPT, PN16 – PN40 flanged" },
        { label: "Body material", value: "Ductile iron or cast steel" },
        { label: "Temperature range", value: "−20 °C to +80 °C" },
      ],
      applications: [
        "Post-construction line cleaning",
        "Permanent coarse protection ahead of shut-off valves",
        "Meter run protection on clean networks",
      ],
      documents: docsFor("GF-Y Y-Type Strainer"),
    },
    {
      slug: "coalescing-filter-separators",
      name: "Coalescing Filter Separators",
      series: "GF-CS",
      tagline: "Pulls aerosol liquids out of wet gas that a dry element would simply blind.",
      overview:
        "Where the stream carries compressor oil, condensate or glycol as fine aerosol, the GF-CS coalesces those droplets into a drainable liquid and removes solids in the same pass. A two-stage arrangement — coalescer then separator section — keeps the removed liquid from re-entraining downstream.",
      features: [
        "Two-stage coalescing and separation in one vessel",
        "Liquid sump with level gauge and manual or automatic drain",
        "Solids removal to 1 μm in the same pass",
        "High liquid-removal efficiency across turndown",
        "Sump heating option for cold-climate installation",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 100 bar" },
        { label: "Filtration grade", value: "1 μm solids; aerosol coalescing" },
        { label: "Sizes", value: "DN 50 – DN 250" },
        { label: "Connections", value: "PN25 – PN100 flanged, ANSI 150 – 600" },
        { label: "Body material", value: "Cast or fabricated steel" },
        { label: "Temperature range", value: "−20 °C to +80 °C" },
      ],
      applications: [
        "Well-head and satellite station conditioning",
        "Compressor discharge oil removal",
        "Fuel-gas conditioning ahead of turbines",
      ],
      documents: docsFor("GF-CS Coalescing Filter Separator"),
    },
  ],
};
