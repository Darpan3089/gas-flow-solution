import type { Category } from "./types";
import { docsFor, quoteCta } from "./shared";

export const zeroGovernor: Category = {
  slug: "zero-governor",
  name: "Zero Governor",
  icon: "governor",
  tagline:
    "Holds gas at atmospheric reference so an atmospheric burner draws exactly what its air stream calls for.",
  overview:
    "A zero governor regulates outlet pressure to approximately zero gauge, which means gas only moves when the burner's air stream pulls it. Delivery therefore tracks air flow automatically and the mixture stays right across the whole firing range, with no mechanical linkage to wear or drift out of tune. On atmospheric and injector-type burners it is usually worth more in fuel savings than any change to the burner head itself.",
  features: [
    "Outlet held at atmospheric reference pressure",
    "Gas delivery follows air flow without a linkage",
    "Fine zero-adjustment screw for commissioning",
    "Balanced diaphragm for high sensitivity at low flow",
    "Built-in inlet screen protecting the seat",
    "Suitable for natural gas, LPG, propane, butane and biogas",
  ],
  specs: [
    { label: "Inlet pressure", value: "20 mbar – 500 mbar" },
    { label: "Outlet pressure", value: "Approximately 0 mbar gauge, adjustable" },
    { label: "Sizes", value: "DN 15 – DN 100 / ½\" – 4\"" },
    { label: "Burner capacity", value: "20 kW – 8 MW" },
    { label: "Connections", value: "Threaded BSP / NPT" },
    { label: "Body material", value: "Aluminium alloy" },
    { label: "Diaphragm material", value: "NBR" },
    { label: "Operating temperature", value: "−20 °C to +60 °C" },
  ],
  applications: [
    "Atmospheric burner gas supply",
    "Injector and venturi mixing systems",
    "Radiant tube and infra-red heaters",
    "Industrial ovens, dryers and kilns",
    "Air/gas ratio control on forced-draught burners",
  ],
  industries: [
    "Food and beverage processing",
    "Glass, ceramics and cement",
    "Textiles and dyeing",
    "Heavy manufacturing",
    "Agriculture and drying",
  ],
  benefits: [
    {
      title: "Lower fuel cost from correct mixture",
      description:
        "A burner running with excess air heats the flue instead of the process. Tying gas delivery directly to air flow keeps the mixture right without a linkage that drifts out of tune between services.",
    },
    {
      title: "Ratio held across the firing range",
      description:
        "Because the governor responds to the suction the burner itself creates, the air/gas ratio stays correct at low fire as well as high fire — where linkage-based systems are usually furthest out.",
    },
    {
      title: "Stable process temperature",
      description:
        "Consistent combustion means the process sees a steady heat input, which shows up directly in product quality on ovens, kilns and dryers.",
    },
    {
      title: "Cleaner emissions",
      description:
        "Complete combustion at the correct ratio reduces carbon monoxide and unburnt hydrocarbons, helping keep the site inside its emissions consent.",
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
      question: "Is a zero governor the same as a normal pressure regulator?",
      answer:
        "No. A pressure regulator holds a positive set outlet pressure regardless of what the burner does. A zero governor holds zero and lets the burner determine flow, which is the opposite relationship — fitting one where the other is required will either starve the burner or run it dangerously rich.",
    },
    {
      question: "How is the zero point set on site?",
      answer:
        "With the burner at high fire, the adjustment screw is trimmed until combustion analysis shows the target excess air, then the setting is checked back down to low fire. It should be re-checked annually and after any change to the burner, the gas supply or the process load.",
    },
  ],
  products: [
    {
      slug: "zero-governor",
      name: "Zero Governor",
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
  ],
};

export const burnerEquipments: Category = {
  slug: "burner-equipments",
  name: "Burner Equipments",
  icon: "burner",
  tagline:
    "Ignition and flame-proving hardware — the pieces that decide whether the burner lights and whether anyone can prove it.",
  overview:
    "Light-up is where most burner faults show themselves, and nuisance lockouts nearly always trace back to a mismatch between the spark and the device watching for the flame. We supply ignition transformers, electrodes, ionisation probes, UV cells and the screened cable that stops one interfering with the other — matched as a set to the burner rather than bought individually and hoped into agreement.",
  features: [
    "Ignition transformers from 5 kV to 15 kV output",
    "Ceramic-insulated electrodes for high-temperature service",
    "Flame detection by ionisation probe or UV cell",
    "Screened cable sets to suppress interference",
    "Sub-second flame-failure response",
    "Components matched as a set rather than sold individually",
  ],
  specs: [
    { label: "Transformer output", value: "5 – 15 kV" },
    { label: "Supply voltage", value: "230 V AC / 110 V AC" },
    { label: "Burner capacity", value: "Components rated 20 kW – 20 MW" },
    { label: "Electrode service temperature", value: "Up to +600 °C" },
    { label: "Detection method", value: "Ionisation probe or UV cell" },
    { label: "Response time", value: "< 1 s flame-failure detection" },
    { label: "Enclosure", value: "IP40 transformer, IP54 detector" },
    { label: "Operating temperature", value: "−20 °C to +60 °C" },
  ],
  applications: [
    "Burner ignition systems",
    "Flame safeguard and proving chains",
    "Retrofit of ageing ignition equipment",
    "Industrial ovens, dryers and kilns",
    "Boiler and hot-water plant",
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
      title: "Reliable light-up",
      description:
        "Correctly specified ignition and flame-proving hardware removes the repeated lockouts that cost production time and gradually erode operator trust in the interlocks.",
    },
    {
      title: "Proof, not assumption",
      description:
        "A flame detector matched to the flame it is watching means the safety chain is confirming a real flame rather than tolerating an unlit burner filling a chamber with gas.",
    },
    {
      title: "Fewer interference faults",
      description:
        "Screened cable and correctly routed HT leads stop the ignition spark from swamping the detection signal — the single most common cause of intermittent, hard-to-diagnose lockouts.",
    },
    {
      title: "Straightforward retrofit",
      description:
        "Standard mounting and voltages let ageing ignition equipment be replaced without changing the burner or the controller around it.",
    },
  ],
  cta: quoteCta,
  faqs: [
    {
      question: "Ionisation probe or UV flame detection?",
      answer:
        "Ionisation probes are simpler and cheaper and work well on stable, well-defined gas flames with a good earth path. UV cells suit larger flames, oil/gas dual-fuel duty and installations where the probe cannot be positioned reliably.",
    },
    {
      question: "Why does the burner lock out intermittently on light-up?",
      answer:
        "Most often the ignition spark is interfering with the flame signal, or the electrode gap has opened up as the tip eroded. Check the HT lead routing and screening first, then the gap and the earth path — the detector itself is rarely the fault.",
    },
    {
      question: "How often should combustion be re-tuned?",
      answer:
        "At least annually, and after any change to the burner, the gas supply or the process load. Settings drift as electrodes erode and burner heads foul, and the fuel cost of running untuned typically dwarfs the cost of the visit.",
    },
  ],
  products: [
    {
      slug: "burner-equipments",
      name: "Burner Equipments",
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
      documents: docsFor("BC-IF Burner Ignition & Flame Detection"),
    },
  ],
};
