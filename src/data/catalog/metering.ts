import type { Category } from "./types";
import { docsFor, quoteCta } from "./shared";

export const gasMeters: Category = {
  slug: "gas-meters",
  name: "Gas Meters",
  icon: "meter",
  tagline:
    "Measure what actually passed through the pipe — with the accuracy class the commercial contract demands.",
  overview:
    "Metering is where gas becomes money, so the technology has to match the duty rather than the budget. Rotarymeters hold accuracy under fluctuating industrial demand; turbinmeters handle high steady flow economically; quantometers cover internal consumption monitoring where fiscal approval is unnecessary. Volume correctors complete the chain, converting the raw reading into the standard-condition figure a contract is settled on. We size and select against your actual flow profile, then pair the meter with the correction needed to make the reading commercially defensible.",
  features: [
    "Rotary, turbine and quantometer technologies from one supplier",
    "Accuracy classes suitable for custody transfer",
    "Pulse, encoder and digital outputs for telemetry and correction",
    "Bi-directional measurement on selected models",
    "Integral or remote volume correction",
    "PTZ volume correctors with on-board hourly and daily archives",
    "Calibration certificates traceable to national standards",
  ],
  specs: [
    { label: "Flow range", value: "0.5 – 25,000 m³/h across the range" },
    { label: "Accuracy", value: "±0.5 % to ±2 % depending on technology and class" },
    { label: "Turndown ratio", value: "Up to 1:250 (rotary), 1:20 (turbine)" },
    { label: "Design pressure", value: "Up to 100 bar" },
    { label: "Sizes", value: "G16 – G6500 / DN 40 – DN 400" },
    { label: "Outputs", value: "Low-frequency pulse, high-frequency pulse, encoder, Modbus" },
    { label: "Operating temperature", value: "−25 °C to +55 °C" },
    { label: "Approvals", value: "MID / OIML pattern approval available" },
  ],
  applications: [
    "Custody-transfer and fiscal measurement",
    "Industrial plant sub-metering and cost allocation",
    "District and city-gate station measurement",
    "Commercial and multi-tenant building metering",
    "Process gas consumption monitoring",
  ],
  industries: [
    "Gas distribution utilities",
    "Power generation",
    "Heavy manufacturing",
    "Chemicals and petrochemicals",
    "Food and beverage processing",
    "Commercial real estate",
  ],
  benefits: [
    {
      title: "Billing you can defend",
      description:
        "Pattern-approved meters with traceable calibration certificates give both parties a reading that survives a commercial dispute.",
    },
    {
      title: "Accuracy held across real load profiles",
      description:
        "Selecting on turndown rather than peak flow means the meter stays accurate at 3 a.m. minimum draw as well as at production peak — where most measurement error actually accumulates.",
    },
    {
      title: "Ready for volume correction",
      description:
        "Standard pulse and encoder outputs feed correctors and telemetry equipment without bespoke interfacing.",
    },
    {
      title: "Predictable ownership cost",
      description:
        "Technology matched to duty means fewer recalibrations, less mechanical wear and longer intervals between exchanges.",
    },
  ],
  cta: quoteCta,
  faqs: [
    {
      question: "Which meter technology suits my site?",
      answer:
        "It follows the flow profile. Wide turndown with low minimum flow favours rotary; high, steady flow favours turbine on cost; internal consumption monitoring that needs no fiscal approval is best served by a quantometer. Send us a load profile and we will size against it.",
    },
    {
      question: "Why does gas volume need correction?",
      answer:
        "A meter measures the volume that physically passed through it, which depends on line pressure and temperature. Billing is done in standard-condition volume or energy, so a corrector converts the reading using measured pressure and temperature — without it, errors of tens of percent are normal at elevated pressure.",
    },
    {
      question: "How often does a meter need recalibration?",
      answer:
        "Set by local metrology regulation and by the meter type — typically every 5 to 10 years for fiscal service. Mechanical meters drift as bearings and rotors wear, so duty and gas cleanliness both shorten the interval.",
    },
  ],
  products: [
    {
      slug: "rotarymeters",
      name: "Rotarymeters",
      series: "MT-R",
      tagline: "Wide turndown and high accuracy in a body far smaller than the flow suggests.",
      overview:
        "Two precisely machined impellers displace a fixed volume per revolution, giving the MT-R excellent accuracy right down to very low flow. Turndown up to 1:250 makes it the natural choice for industrial sites where demand collapses overnight and peaks during production — exactly the profile that defeats a turbine meter.",
      features: [
        "Turndown to 1:250",
        "High accuracy sustained at low flow",
        "Compact relative to equivalent-capacity turbine meters",
        "Low-frequency and high-frequency pulse outputs",
        "Integral or remote volume correction",
      ],
      specs: [
        { label: "Flow range", value: "0.5 – 1,600 m³/h" },
        { label: "Accuracy", value: "±1 % (±0.5 % over upper range)" },
        { label: "Turndown", value: "Up to 1:250" },
        { label: "Design pressure", value: "Up to 20 bar" },
        { label: "Sizes", value: "G16 – G1000 / DN 40 – DN 150" },
        { label: "Connections", value: "PN16 flanged, ANSI 150" },
      ],
      applications: [
        "Industrial sub-metering with variable demand",
        "Commercial custody transfer",
        "District station measurement",
      ],
      documents: docsFor("MT-R Rotarymeter"),
    },
    {
      slug: "turbinmeters",
      name: "Turbinmeters",
      series: "MT-T",
      tagline: "The economical route to high, steady flow measurement.",
      overview:
        "The MT-T uses gas velocity to spin a bladed rotor, with revolutions proportional to volume. At high sustained flow it delivers accuracy at a lower cost per m³/h than any displacement technology, which is why it dominates transmission and large-industrial measurement. It needs steady flow and clean gas to perform, so straight-run and filtration requirements are part of the specification.",
      features: [
        "High capacity for the body size and cost",
        "Low permanent pressure loss",
        "Lubrication system for extended bearing life",
        "High-frequency pulse output for fast response",
        "Bi-directional versions available",
      ],
      specs: [
        { label: "Flow range", value: "8 – 25,000 m³/h" },
        { label: "Accuracy", value: "±1 % (±0.5 % over upper range)" },
        { label: "Turndown", value: "Up to 1:20" },
        { label: "Design pressure", value: "Up to 100 bar" },
        { label: "Sizes", value: "DN 50 – DN 400" },
        { label: "Connections", value: "PN16 – PN100 flanged, ANSI 150 – 600" },
      ],
      applications: [
        "Transmission and city-gate measurement",
        "Power-station fuel-gas metering",
        "Large industrial intake",
      ],
      documents: docsFor("MT-T Turbinmeter"),
      faqs: [
        {
          question: "How much straight pipe does a turbine meter need?",
          answer:
            "Typically a defined number of diameters upstream with a flow conditioner, and a shorter run downstream. Disturbed flow directly biases the reading, so the straight-run requirement is part of the accuracy specification rather than a suggestion.",
        },
      ],
    },
    {
      slug: "quantometers",
      name: "Quantometers",
      series: "MT-Q",
      tagline: "Turbine-derived consumption monitoring where fiscal approval is not required.",
      overview:
        "The MT-Q applies turbine measurement to internal consumption monitoring and energy management, where knowing usage to within a couple of percent is enough and pattern approval is unnecessary. Dropping the fiscal certification makes it substantially cheaper to deploy across many departmental sub-meters.",
      features: [
        "Turbine sensing without fiscal approval overhead",
        "Compact, low-cost body for wide deployment",
        "Pulse output for energy-management systems",
        "Low pressure loss",
        "Straightforward in-line installation",
      ],
      specs: [
        { label: "Flow range", value: "6 – 2,500 m³/h" },
        { label: "Accuracy", value: "±2 %" },
        { label: "Design pressure", value: "Up to 16 bar" },
        { label: "Sizes", value: "DN 50 – DN 200" },
        { label: "Output", value: "Low-frequency pulse" },
        { label: "Connections", value: "PN16 flanged" },
      ],
      applications: [
        "Departmental energy monitoring",
        "Boiler-house consumption tracking",
        "Internal cost allocation",
      ],
      documents: docsFor("MT-Q Quantometer"),
    },
    {
      slug: "volume-correctors",
      name: "Volume Correctors",
      series: "ME-V",
      tagline: "Converts line-condition volume into the standard-condition figure you invoice on.",
      overview:
        "The ME-V continuously measures line pressure and gas temperature, computes compressibility from stored composition and applies the correction to the meter's pulse stream in real time. It stores hourly and daily archives alongside an event log, so the entire billing period is reconstructable.",
      features: [
        "Full PTZ correction with stored gas composition",
        "Hourly and daily archives with event logging",
        "Battery-powered, up to five-year field life",
        "Optical and Modbus interfaces for readout",
        "Sealed metrological parameters for fiscal service",
      ],
      specs: [
        { label: "Correction", value: "PTZ per standard compressibility algorithms" },
        { label: "Pressure range", value: "0.8 – 100 bar absolute" },
        { label: "Temperature range", value: "−25 °C to +60 °C" },
        { label: "Accuracy", value: "Better than ±0.5 % of computed volume" },
        { label: "Power", value: "Internal battery, up to 5 years" },
        { label: "Enclosure", value: "IP66, ATEX II 1G option" },
      ],
      applications: [
        "Custody-transfer correction",
        "Industrial billing meters",
        "District station measurement",
      ],
      documents: docsFor("ME-V Volume Corrector"),
    },
  ],
};

export const gasAirPressureSwitch: Category = {
  slug: "gas-air-pressure-switch",
  name: "Gas/Air Pressure Switch",
  icon: "measurement",
  tagline:
    "Hard-wired interlocks that hold the burner off until gas and combustion air are both where they should be.",
  overview:
    "A pressure switch is the simplest device in the safety chain and often the only one that still works when everything else has failed. A diaphragm moves against an adjustable spring, a snap-action contact changes state, and the burner controller is either permitted to light or it is not. We supply gas and air variants across the full set-point range, plus differential versions for filter and fan proving, all with the approvals a burner safety chain requires.",
  features: [
    "Snap-action contact with a defined switching differential",
    "Adjustable set point with a visible scale",
    "Gas, air and differential variants across the range",
    "Test nipple integrated in the body",
    "Manual-reset versions where a lockout must be deliberate",
    "Approved for burner safety-chain use",
  ],
  specs: [
    { label: "Set-point range", value: "0.4 mbar – 5 bar depending on model" },
    { label: "Maximum working pressure", value: "Up to 6 bar" },
    { label: "Contact rating", value: "250 V AC, 5 A resistive" },
    { label: "Switching differential", value: "Fixed or adjustable by model" },
    { label: "Media", value: "Natural gas, LPG, air, inert gases" },
    { label: "Process connection", value: "G¼ / G½ threaded" },
    { label: "Enclosure", value: "IP54 / IP65" },
    { label: "Temperature range", value: "−20 °C to +60 °C" },
  ],
  applications: [
    "Burner minimum and maximum gas pressure proving",
    "Combustion air proving",
    "Filter differential-pressure alarm",
    "Fan and blower running proof",
    "Low-pressure cut-off on industrial gas trains",
  ],
  industries: [
    "Heavy manufacturing",
    "Power generation",
    "Food and beverage processing",
    "Glass, ceramics and cement",
    "Commercial real estate",
    "District heating operators",
  ],
  benefits: [
    {
      title: "Interlocks that do not depend on software",
      description:
        "A mechanical diaphragm and a snap-action contact prove gas and air pressure without a controller in the path, which is exactly what a safety chain should rely on.",
    },
    {
      title: "Stops the two failures that matter most",
      description:
        "Low gas pressure and missing combustion air are the conditions behind most unburnt-fuel incidents. Proving both before ignition removes the scenario rather than mitigating it.",
    },
    {
      title: "Set and verified on site",
      description:
        "A visible scale and an integrated test nipple mean the set point can be adjusted and proved during commissioning and every service visit, without removing the switch.",
    },
    {
      title: "Drops into any controller",
      description:
        "A volt-free changeover contact wires into existing burner controllers and PLC safety loops without interface hardware.",
    },
  ],
  cta: quoteCta,
  faqs: [
    {
      question: "What is the difference between a gas and an air pressure switch?",
      answer:
        "The working principle is identical; the difference is the set-point range and the materials. Gas switches use gas-compatible diaphragms and cover higher pressures, while air switches are built for the very low mbar range a combustion-air fan produces. They are not interchangeable, and fitting an air switch to a gas line is a common and serious commissioning error.",
    },
    {
      question: "Where should the minimum gas pressure switch be fitted?",
      answer:
        "Downstream of the regulator and filter but upstream of the safety shut-off valves, so it sees the pressure actually offered to the burner. Fitting it upstream of the regulator proves the supply rather than the burner's inlet, which is not what the interlock is for.",
    },
    {
      question: "How often should the switch be tested?",
      answer:
        "At every service visit, and always after work on the gas train. Testing through the integrated nipple confirms the switch trips at the marked set point — diaphragms stiffen and contacts degrade slowly enough that only a deliberate test finds it.",
    },
  ],
  products: [
    {
      slug: "gas-air-pressure-switch",
      name: "Gas/Air Pressure Switch",
      series: "ME-S",
      tagline: "Hard-wired interlocks that hold the burner off until conditions are right.",
      overview:
        "The ME-S is the pressure interlock in a burner safety chain: a diaphragm and a snap-action contact that prove minimum gas pressure, maximum gas pressure or combustion-air presence before the controller will permit ignition. It is deliberately simple, because a safety interlock should not depend on software.",
      features: [
        "Adjustable set point with visible scale",
        "Snap-action contact with defined switching differential",
        "Gas and air variants across the pressure range",
        "Test nipple integrated in the body",
        "Approved for burner safety-chain use",
      ],
      specs: [
        { label: "Set-point range", value: "0.4 mbar – 5 bar depending on model" },
        { label: "Contact rating", value: "250 V AC, 5 A resistive" },
        { label: "Media", value: "Natural gas, LPG, air, inert gases" },
        { label: "Process connection", value: "G¼ / G½ threaded" },
        { label: "Enclosure", value: "IP54 / IP65" },
        { label: "Temperature range", value: "−20 °C to +60 °C" },
      ],
      applications: [
        "Burner minimum and maximum gas pressure proving",
        "Combustion air proving",
        "Filter differential-pressure alarm",
      ],
      documents: docsFor("ME-S Gas/Air Pressure Switch"),
    },
  ],
};
