import type { Category } from "./types";
import { docsFor, quoteCta } from "./shared";

export const gasMeteringSystems: Category = {
  slug: "gas-metering-systems",
  name: "Gas Metering Systems",
  icon: "meter",
  tagline:
    "Measure what actually passed through the pipe — with the accuracy class the commercial contract demands.",
  overview:
    "Metering is where gas becomes money, so the technology has to match the duty rather than the budget. Diaphragm meters excel at low flow and wide turndown; rotary meters hold accuracy under fluctuating industrial demand; turbine meters handle high steady flow economically; ultrasonic meters measure with nothing in the stream to wear. We size and select against your actual flow profile, then pair the meter with the correction and telemetry needed to make the reading commercially defensible.",
  features: [
    "Diaphragm, rotary, turbine and ultrasonic technologies from one supplier",
    "Accuracy classes suitable for custody transfer",
    "Pulse, encoder and digital outputs for telemetry and correction",
    "Bi-directional measurement on selected models",
    "Integral or remote volume correction",
    "Calibration certificates traceable to national standards",
  ],
  specs: [
    { label: "Flow range", value: "0.016 – 25,000 m³/h across the range" },
    { label: "Accuracy", value: "±0.2 % to ±1.5 % depending on technology and class" },
    { label: "Turndown ratio", value: "Up to 1:250 (rotary), 1:20 (turbine), 1:160 (diaphragm)" },
    { label: "Design pressure", value: "Up to 100 bar" },
    { label: "Sizes", value: "G1.6 – G6500 / DN 25 – DN 400" },
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
      title: "Ready for remote reading",
      description:
        "Standard pulse and digital outputs feed correctors, data loggers and telemetry without bespoke interfacing.",
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
        "It follows the flow profile. Wide turndown with low minimum flow favours diaphragm or rotary; high, steady flow favours turbine on cost; dirty or pulsating gas and zero-maintenance requirements favour ultrasonic. Send us a load profile and we will size against it.",
    },
    {
      question: "Why does gas volume need correction?",
      answer:
        "A meter measures the volume that physically passed through it, which depends on line pressure and temperature. Billing is done in standard-condition volume or energy, so a corrector converts the reading using measured pressure and temperature — without it, errors of tens of percent are normal at elevated pressure.",
    },
    {
      question: "How often does a meter need recalibration?",
      answer:
        "Set by local metrology regulation and by the meter type — typically every 5 to 10 years for fiscal service. Mechanical meters drift with wear; ultrasonic meters generally hold calibration far longer.",
    },
  ],
  products: [
    {
      slug: "rotary-gas-meters",
      name: "Rotary Gas Meters",
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
      documents: docsFor("MT-R Rotary Gas Meter"),
    },
    {
      slug: "turbine-gas-meters",
      name: "Turbine Gas Meters",
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
      documents: docsFor("MT-T Turbine Gas Meter"),
      faqs: [
        {
          question: "How much straight pipe does a turbine meter need?",
          answer:
            "Typically a defined number of diameters upstream with a flow conditioner, and a shorter run downstream. Disturbed flow directly biases the reading, so the straight-run requirement is part of the accuracy specification rather than a suggestion.",
        },
      ],
    },
    {
      slug: "diaphragm-gas-meters",
      name: "Diaphragm Gas Meters",
      series: "MT-D",
      tagline: "The proven choice for domestic and light-commercial measurement.",
      overview:
        "Flexible chambers fill and empty in sequence, displacing a precisely known volume per cycle. The MT-D reads accurately at flows far below any other technology's threshold, which is exactly what residential and light-commercial billing requires, and it does so with no external power for decades at a time.",
      features: [
        "Accurate at very low flow rates",
        "Turndown to 1:160",
        "No external power required",
        "Mechanical index with optional encoder output",
        "Corrosion-protected steel or composite case",
      ],
      specs: [
        { label: "Flow range", value: "0.016 – 100 m³/h" },
        { label: "Accuracy", value: "±1.5 % (±3 % at minimum flow)" },
        { label: "Turndown", value: "Up to 1:160" },
        { label: "Design pressure", value: "Up to 5 bar" },
        { label: "Sizes", value: "G1.6 – G65" },
        { label: "Connections", value: "Threaded, meter union" },
      ],
      applications: [
        "Residential billing meters",
        "Light-commercial premises",
        "Multi-tenant riser sub-metering",
      ],
      documents: docsFor("MT-D Diaphragm Gas Meter"),
    },
    {
      slug: "ultrasonic-gas-meters",
      name: "Ultrasonic Gas Meters",
      series: "MT-U",
      tagline: "Nothing in the flow path to wear, foul or slow down.",
      overview:
        "The MT-U times ultrasonic pulses travelling with and against the flow and derives velocity from the difference. With no moving parts, there is no bearing wear, no lubrication schedule and effectively no pressure loss — and calibration holds for far longer than any mechanical meter, which is where the lifetime economics come from.",
      features: [
        "No moving parts and no pressure loss",
        "Very wide turndown with no low-flow cut-off wear",
        "Built-in diagnostics reporting path health and gas velocity",
        "Bi-directional measurement standard",
        "Modbus and digital outputs for direct system integration",
      ],
      specs: [
        { label: "Flow range", value: "1 – 20,000 m³/h" },
        { label: "Accuracy", value: "±0.2 % to ±0.5 %" },
        { label: "Turndown", value: "Up to 1:100" },
        { label: "Design pressure", value: "Up to 100 bar" },
        { label: "Sizes", value: "DN 50 – DN 400" },
        { label: "Outputs", value: "Modbus RTU, pulse, 4 – 20 mA" },
      ],
      applications: [
        "Fiscal and custody-transfer measurement",
        "Bi-directional network interconnects",
        "Sites where maintenance access is difficult or costly",
      ],
      documents: docsFor("MT-U Ultrasonic Gas Meter"),
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
  ],
};

export const gasMeasurementEquipment: Category = {
  slug: "gas-measurement-equipment",
  name: "Gas Measurement Equipment",
  icon: "measurement",
  tagline:
    "Correctors, transmitters, switches and loggers — the instruments that turn a raw meter reading into usable data.",
  overview:
    "A meter counts volume at line conditions; everything needed to make that number commercially and operationally meaningful sits in this category. Volume correctors normalise for pressure and temperature, transmitters feed the control system, pressure switches enforce interlocks and data loggers close the telemetry loop. All of it is specified to work together, so a station arrives as an integrated measurement chain rather than a collection of boxes.",
  features: [
    "Volume correction to standard conditions with stored gas composition",
    "Battery-powered instruments with multi-year field life",
    "Intrinsically safe and ATEX-certified variants",
    "Modbus, pulse and 4–20 mA interfacing",
    "On-board data logging with event and alarm records",
    "Remote reading over cellular or wired telemetry",
  ],
  specs: [
    { label: "Correction method", value: "PTZ (pressure, temperature, compressibility)" },
    { label: "Pressure measurement range", value: "0.8 – 100 bar absolute" },
    { label: "Temperature measurement range", value: "−25 °C to +60 °C" },
    { label: "Correction accuracy", value: "Better than ±0.5 % of computed volume" },
    { label: "Battery life", value: "Up to 5 years typical" },
    { label: "Interfaces", value: "Modbus RTU, pulse in/out, 4 – 20 mA, optical port" },
    { label: "Enclosure", value: "IP65 / IP66, ATEX II 1G option" },
    { label: "Logging capacity", value: "Hourly and daily archives, event log" },
  ],
  applications: [
    "Custody-transfer volume correction",
    "Remote meter reading and telemetry",
    "Burner and process pressure interlocks",
    "Station pressure and temperature monitoring",
    "Gas leak detection in plant rooms",
  ],
  industries: [
    "Gas distribution utilities",
    "Power generation",
    "Heavy manufacturing",
    "Chemicals and petrochemicals",
    "Commercial real estate",
    "District heating operators",
  ],
  benefits: [
    {
      title: "Turns volume into billable energy",
      description:
        "PTZ correction converts line-condition volume into standard volume, which is the only figure a commercial contract can be settled on.",
    },
    {
      title: "Removes the manual read",
      description:
        "Telemetry-ready loggers and correctors eliminate site visits for readings and make consumption visible daily rather than monthly.",
    },
    {
      title: "Evidence when something goes wrong",
      description:
        "Event and alarm archives show exactly when pressure excursions or interruptions occurred, which is what settles disputes and directs maintenance.",
    },
    {
      title: "Safe-area installation without extra barriers",
      description:
        "Intrinsically safe variants install in hazardous zones without additional isolation hardware, cutting cost and panel space.",
    },
  ],
  cta: quoteCta,
  faqs: [
    {
      question: "What does PTZ correction actually do?",
      answer:
        "It converts measured volume to standard conditions using line pressure, gas temperature and the compressibility factor Z. At elevated pressure the uncorrected reading can understate delivered energy by a large margin, so correction is a commercial necessity rather than a refinement.",
    },
    {
      question: "Can a corrector be retrofitted to an existing meter?",
      answer:
        "Usually yes, provided the meter has a suitable pulse or encoder output and a pressure tapping point is available. Most mechanical meters in service can accept a corrector without being replaced.",
    },
    {
      question: "How long do the batteries really last?",
      answer:
        "Typically up to five years, depending on logging frequency and how often telemetry transmits. Aggressive remote-reading schedules shorten it considerably, so the duty cycle should be agreed at specification time.",
    },
  ],
  products: [
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
    {
      slug: "pressure-temperature-transmitters",
      name: "Pressure & Temperature Transmitters",
      series: "ME-T",
      tagline: "Continuous station conditions delivered straight into your control system.",
      overview:
        "The ME-T range provides the analogue and digital signals a SCADA or plant control system needs to see station behaviour in real time. Stainless wetted parts and hazardous-area certification make it suitable for direct installation on the gas line without isolation hardware.",
      features: [
        "4 – 20 mA and Modbus RTU outputs",
        "Stainless steel wetted parts",
        "ATEX intrinsically safe versions",
        "Field-configurable measurement span",
        "Long-term stability with minimal drift",
      ],
      specs: [
        { label: "Pressure range", value: "0 – 100 bar, span configurable" },
        { label: "Temperature range", value: "−40 °C to +85 °C" },
        { label: "Accuracy", value: "±0.25 % of span" },
        { label: "Output", value: "4 – 20 mA, Modbus RTU" },
        { label: "Process connection", value: "½\" NPT / G½" },
        { label: "Enclosure", value: "IP66, ATEX option" },
      ],
      applications: [
        "SCADA station monitoring",
        "Regulator performance trending",
        "Process control feedback",
      ],
      documents: docsFor("ME-T Pressure & Temperature Transmitter"),
    },
    {
      slug: "gas-air-pressure-switches",
      name: "Gas & Air Pressure Switches",
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
      documents: docsFor("ME-S Gas & Air Pressure Switch"),
    },
    {
      slug: "data-loggers",
      name: "Data Loggers",
      series: "ME-L",
      tagline: "Remote visibility of a station you would otherwise only see on a site visit.",
      overview:
        "The ME-L records meter pulses, pressure and temperature at configurable intervals and transmits them over cellular telemetry, turning a monthly manual read into a daily data feed. Alarm thresholds trigger immediate transmission, so an abnormal station reports itself instead of waiting for the next scheduled read.",
      features: [
        "Configurable logging intervals with deep archive",
        "Cellular telemetry with scheduled and alarm-driven transmission",
        "Multiple pulse and analogue inputs",
        "Battery operation with multi-year life",
        "ATEX-certified variants for hazardous zones",
      ],
      specs: [
        { label: "Inputs", value: "Up to 4 pulse, 2 analogue" },
        { label: "Logging interval", value: "1 minute – 24 hours, configurable" },
        { label: "Telemetry", value: "Cellular, scheduled and alarm-triggered" },
        { label: "Battery life", value: "Up to 5 years typical" },
        { label: "Enclosure", value: "IP66, ATEX option" },
        { label: "Temperature range", value: "−25 °C to +60 °C" },
      ],
      applications: [
        "Remote meter reading",
        "Unmanned station monitoring",
        "Consumption profiling for energy management",
      ],
      documents: docsFor("ME-L Data Logger"),
    },
    {
      slug: "gas-leak-detectors",
      name: "Gas Leak Detectors",
      series: "ME-D",
      tagline: "Detects an escape early and drives the shut-off before anyone smells it.",
      overview:
        "The ME-D monitors atmosphere for combustible gas and raises staged alarms well below the lower explosive limit, with a relay output that drives a manual-reset solenoid valve directly. Sensor life and calibration status are reported continuously, so a detector that has quietly stopped detecting is not mistaken for a clear area.",
      features: [
        "Staged pre-alarm and alarm thresholds below the LEL",
        "Relay output to drive a shut-off valve directly",
        "Continuous sensor-health and calibration reporting",
        "Replaceable sensor cartridge",
        "Addressable multi-point systems available",
      ],
      specs: [
        { label: "Detected gases", value: "Methane, LPG, hydrogen (sensor dependent)" },
        { label: "Detection range", value: "0 – 100 % LEL" },
        { label: "Alarm thresholds", value: "Configurable, typically 10 % and 20 % LEL" },
        { label: "Output", value: "Volt-free relay, 4 – 20 mA, Modbus" },
        { label: "Enclosure", value: "IP65, ATEX option" },
        { label: "Sensor life", value: "3 – 5 years typical" },
      ],
      applications: [
        "Boiler and plant room monitoring",
        "Commercial kitchen safety systems",
        "Underground and confined station enclosures",
      ],
      documents: docsFor("ME-D Gas Leak Detector"),
    },
  ],
};
