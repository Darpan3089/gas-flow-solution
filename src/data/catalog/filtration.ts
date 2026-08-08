import type { Category } from "./types";
import { docsFor, quoteCta } from "./shared";

export const gasFilters: Category = {
  slug: "gas-filters",
  name: "Gas Filters",
  icon: "filter",
  tagline:
    "Take dust, rust, weld scale and liquid carry-over out of the stream before they reach a seat or a meter.",
  overview:
    "Regulators, meters and solenoid valves all fail in the same way: a particle lodges on a seat and the unit stops sealing. Filtration is the cheapest insurance in the station, and the range is organised by maximum working pressure — 6, 25 and 50 bar — so the housing is selected against the line it sits in rather than against pipe size alone. Every housing is sized on clean-and-dirty differential pressure, so the element reaches its service interval instead of choking the station.",
  features: [
    "Three working-pressure classes — Pmax 6, 25 and 50 bar",
    "Filtration grades from 25 μm down to 1 μm absolute",
    "Quick-release closures for element changes without pipework breaks",
    "Differential-pressure gauge and switch ports as standard",
    "Drain and vent connections on every vessel-style housing",
    "Element geometry chosen for dust-holding capacity, not just fineness",
    "Housings pressure-tested and rated to the station's maximum inlet",
  ],
  specs: [
    { label: "Design pressure", value: "Pmax 6, 25 or 50 bar depending on class" },
    { label: "Filtration grade", value: "1 μm – 25 μm" },
    { label: "Sizes", value: "DN 15 – DN 300 / ½\" – 12\"" },
    { label: "Connections", value: "Threaded BSP/NPT, PN16–PN63 flanged, ANSI 150–400" },
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
      question: "Which Pmax class should I order?",
      answer:
        "Select on the maximum pressure the filter can ever see — that is the station's inlet under regulator-failure conditions, not the normal running pressure. Pmax 6 Bar covers burner trains and low-pressure service lines, Pmax 25 Bar covers most industrial intake and distribution duty, and Pmax 50 Bar covers city-gate, transmission and custody-transfer skids.",
    },
  ],
  products: [
    {
      slug: "gas-filters-pmax-6-bar",
      name: "Gas Filters Pmax: 6 Bar",
      series: "GF-6",
      tagline: "Low-pressure in-line protection for burner trains and service lines.",
      overview:
        "The GF-6 is the compact end of the range: a threaded aluminium housing with a pleated cartridge, sized for the 6 bar duty that covers almost every burner gas train and commercial service line. Its face-to-face dimension is close to a spool piece, so it drops into existing pipework without re-piping, and the element lifts out through a top closure.",
      features: [
        "Maximum working pressure 6 bar",
        "Retrofit-friendly face-to-face dimension",
        "Top-entry element access",
        "Lightweight aluminium body for tight plant rooms",
        "Gauge ports upstream and downstream as standard",
      ],
      specs: [
        { label: "Design pressure", value: "Pmax 6 bar" },
        { label: "Filtration grade", value: "5 – 50 μm" },
        { label: "Sizes", value: "DN 15 – DN 80" },
        { label: "Connections", value: "Threaded BSP / NPT, PN16 flanged" },
        { label: "Body material", value: "Aluminium alloy" },
        { label: "Temperature range", value: "−20 °C to +60 °C" },
      ],
      applications: [
        "Burner gas train pre-filtration",
        "Commercial service-line protection",
        "Boiler-house and plant-room installations",
      ],
      image:
        "/products/gas-filter/gas-filters-pmax-6-bar/gf-series-aluminium-body-6-bar/gf-series-aluminium-body-main-photo.webp",
      gallery: [
        "/products/gas-filter/gas-filters-pmax-6-bar/gf-series-aluminium-body-6-bar/gf-series-aluminium-body1.webp",
        "/products/gas-filter/gas-filters-pmax-6-bar/gf-series-aluminium-body-6-bar/gf-series-aluminium-body2.webp",
        "/products/gas-filter/gas-filters-pmax-6-bar/gf-series-aluminium-body-6-bar/gf-series-aluminium-body3.webp",
        "/products/gas-filter/gas-filters-pmax-6-bar/gf-series-aluminium-body-6-bar/gf-series-aluminium-body4.webp",
      ],
      documents: docsFor("GF-6 Gas Filter Pmax 6 Bar"),
    },
    {
      slug: "gas-filters-pmax-25-bar",
      name: "Gas Filters Pmax: 25Bar",
      series: "GF-25",
      tagline: "The standard industrial class — 25 bar working pressure in an in-line body.",
      overview:
        "The GF-25 puts a pleated cartridge directly in the pipe run in a body rated to 25 bar, which covers the bulk of industrial intake and district regulating duty. Elements lift out through a top closure, and the standard gauge ports let a differential indicator be fitted at any time.",
      features: [
        "Maximum working pressure 25 bar",
        "Top-entry element access",
        "Pleated media for high surface area in a small body",
        "Gauge ports upstream and downstream as standard",
        "Grades from 5 μm to 25 μm",
      ],
      specs: [
        { label: "Design pressure", value: "Pmax 25 bar" },
        { label: "Filtration grade", value: "5 – 25 μm" },
        { label: "Sizes", value: "DN 15 – DN 100" },
        { label: "Connections", value: "Threaded BSP / NPT, PN16 – PN25 flanged" },
        { label: "Body material", value: "Aluminium alloy or ductile iron" },
        { label: "Temperature range", value: "−20 °C to +60 °C" },
      ],
      applications: [
        "Regulator and meter inlet protection",
        "Industrial intake filtration",
        "Retrofit into existing skids",
      ],
      image:
        "/products/gas-filter/gas-filters-pmax-25-bar/gs-series-pmax-25-bar-gas-filters/gs-series-pmax-25-bar-gas-filters-main-photo.webp",
      gallery: [
        "/products/gas-filter/gas-filters-pmax-25-bar/gs-series-pmax-25-bar-gas-filters/gs-series-pmax-25-bar-gas-filters1.webp",
        "/products/gas-filter/gas-filters-pmax-25-bar/gs-series-pmax-25-bar-gas-filters/gs-series-pmax-25-bar-gas-filters2.webp",
        "/products/gas-filter/gas-filters-pmax-25-bar/gs-series-pmax-25-bar-gas-filters/gs-series-pmax-25-bar-gas-filters3.webp",
        "/products/gas-filter/gas-filters-pmax-25-bar/gs-series-pmax-25-bar-gas-filters/gs-series-pmax-25-bar-gas-filters4.webp",
      ],
      documents: docsFor("GF-25 Gas Filter Pmax 25 Bar"),
    },
    {
      slug: "gas-filters-pmax-50-bar",
      name: "Gas Filters Pmax: 50Bar",
      series: "GF-50",
      tagline: "High-pressure vessel filtration for stations that cannot be taken offline often.",
      overview:
        "The GF-50 is a cast-steel vertical vessel rated to 50 bar, with a large-diameter element and a settling volume beneath it so heavy particulate drops out before it ever reaches the media. The result is a much longer interval between change-outs, which is what matters on transmission and city-gate duty where isolation is expensive.",
      features: [
        "Maximum working pressure 50 bar",
        "Settling chamber below the element for heavy particulate drop-out",
        "Large-diameter element for extended service life",
        "Quick-release closure with safety interlock",
        "Differential-pressure switch port for remote alarm",
      ],
      specs: [
        { label: "Design pressure", value: "Pmax 50 bar" },
        { label: "Filtration grade", value: "1 – 10 μm" },
        { label: "Sizes", value: "DN 50 – DN 300" },
        { label: "Connections", value: "PN25 – PN63 flanged, ANSI 150 – 400" },
        { label: "Body material", value: "Cast steel" },
        { label: "Temperature range", value: "−20 °C to +80 °C" },
      ],
      applications: [
        "City-gate and transmission stations",
        "Custody-transfer skid pre-filtration",
        "Power-plant fuel-gas conditioning",
      ],
      image:
        "/products/gas-filter/gas-filters-pmax-50-bar/gh-series-pmax-50-bar-gas-filters/gh-series-pmax-50-bar-gas-filters-main-photo.webp",
      gallery: [
        "/products/gas-filter/gas-filters-pmax-50-bar/gh-series-pmax-50-bar-gas-filters/gh-series-pmax-50-bar-gas-filters1.webp",
        "/products/gas-filter/gas-filters-pmax-50-bar/gh-series-pmax-50-bar-gas-filters/gh-series-pmax-50-bar-gas-filters2.webp",
      ],
      documents: docsFor("GF-50 Gas Filter Pmax 50 Bar"),
    },
  ],
};
