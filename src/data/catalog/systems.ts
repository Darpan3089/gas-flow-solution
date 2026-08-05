import type { Category } from "./types";
import { docsFor, quoteCta } from "./shared";

export const pressureControlStations: Category = {
  slug: "pressure-control-stations",
  name: "Pressure Control Stations",
  icon: "station",
  tagline:
    "Complete reduction, protection and measurement skids — designed, built and tested before they reach site.",
  overview:
    "A station is more than the sum of its regulators. Stream sizing, safety-device set points, noise, relief routing, weather protection and access all have to resolve together, and the cheapest place to resolve them is in a workshop rather than on site. We design and assemble complete skids, pressure-test and function-test them under works conditions, and deliver a unit that needs connecting rather than constructing.",
  features: [
    "Single or dual-stream layouts with automatic changeover",
    "Regulation, slam-shut, relief, filtration and metering integrated",
    "Works pressure-tested and function-tested before dispatch",
    "Kiosk, cabinet, skid and open-frame arrangements",
    "Noise treatment engineered to a stated boundary limit",
    "Telemetry and remote monitoring pre-wired and commissioned",
  ],
  specs: [
    { label: "Inlet pressure", value: "Up to 100 bar" },
    { label: "Outlet pressure", value: "20 mbar – 40 bar" },
    { label: "Capacity", value: "50 – 100,000 m³/h" },
    { label: "Stream configuration", value: "Single, duty/standby, or duty/duty" },
    { label: "Enclosure options", value: "GRP kiosk, steel cabinet, open skid, walk-in building" },
    { label: "Noise limit", value: "Engineered to project boundary requirement" },
    { label: "Testing", value: "Hydrostatic / pneumatic strength and tightness test, function test" },
    { label: "Ambient range", value: "−30 °C to +55 °C with appropriate options" },
  ],
  applications: [
    "City-gate and district pressure reduction",
    "Industrial site intake stations",
    "Power-plant fuel-gas conditioning skids",
    "Custody-transfer metering and regulating stations",
    "District heating plant supply",
  ],
  industries: [
    "Gas distribution utilities",
    "Power generation",
    "Petrochemical and refining",
    "Heavy manufacturing",
    "District heating operators",
    "Infrastructure and EPC contractors",
  ],
  benefits: [
    {
      title: "Site time measured in days, not weeks",
      description:
        "Pre-assembled and pre-tested skids arrive needing pipework connection and commissioning only, which compresses the programme and the site-safety exposure that goes with it.",
    },
    {
      title: "One party accountable",
      description:
        "When regulation, protection and measurement come from a single design authority, interface risk between components stops being the client's problem to manage.",
    },
    {
      title: "Verified before it ships",
      description:
        "Works function testing proves set points, changeover and trip behaviour under controlled conditions, where a problem costs hours instead of a site mobilisation.",
    },
    {
      title: "Continuity through maintenance",
      description:
        "Duty/standby streams let one side be isolated and serviced while the other carries load, so planned maintenance no longer requires a supply interruption.",
    },
  ],
  cta: quoteCta,
  faqs: [
    {
      question: "What do you need from us to design a station?",
      answer:
        "Inlet pressure range, required outlet pressure and tolerance, minimum and maximum flow, gas composition, ambient extremes, applicable codes, and any site constraints on footprint or noise. From those we produce a scheme, a P&ID and a costed proposal.",
    },
    {
      question: "Is a dual-stream station always worth it?",
      answer:
        "It is whenever an interruption is more expensive than the second stream. For continuous process plant that is almost always true; for seasonal or interruptible loads a single stream with a planned outage window is often the better economics.",
    },
    {
      question: "How is station noise controlled?",
      answer:
        "Primarily by design — axial-flow regulators, staged reduction and correct trim sizing address noise at source. Acoustic lagging and enclosure treatment are then applied as needed to meet the stated boundary limit.",
    },
  ],
  products: [
    {
      slug: "district-regulating-stations",
      name: "District Regulating Stations",
      series: "PS-D",
      tagline: "Steps transmission pressure down to distribution, unattended, year after year.",
      overview:
        "The PS-D is a fully enclosed district station: dual streams with automatic changeover, integrated slam-shut and relief protection, and a weatherproof kiosk designed for unmanned operation. Layout follows the maintenance access requirement rather than the smallest possible footprint, because these stations are serviced for decades.",
      features: [
        "Dual-stream duty/standby with automatic changeover",
        "Integrated slam-shut and relief on each stream",
        "Weatherproof GRP or steel kiosk",
        "Telemetry-ready with pre-wired instrument loop",
        "Access layout designed around routine maintenance tasks",
      ],
      specs: [
        { label: "Inlet pressure", value: "7 – 70 bar" },
        { label: "Outlet pressure", value: "0.75 – 7 bar" },
        { label: "Capacity", value: "1,000 – 50,000 m³/h" },
        { label: "Streams", value: "2 (duty/standby)" },
        { label: "Enclosure", value: "GRP or steel kiosk, lockable" },
        { label: "Ambient range", value: "−30 °C to +55 °C" },
      ],
      applications: [
        "Utility district pressure reduction",
        "Town and network feed stations",
        "Municipal distribution networks",
      ],
      documents: docsFor("PS-D District Regulating Station"),
    },
    {
      slug: "industrial-skid-stations",
      name: "Industrial Skid Stations",
      series: "PS-I",
      tagline: "A plant intake station on a frame — craned into place and connected.",
      overview:
        "The PS-I puts filtration, regulation, protection and metering on a single structural skid sized to fit standard transport. It arrives function-tested, so site work is limited to setting it down, connecting inlet and outlet, and commissioning.",
      features: [
        "Complete intake train on one structural frame",
        "Transport-optimised footprint",
        "Filtration, regulation, protection and metering integrated",
        "Lifting points and load calculations supplied",
        "Works function-tested before dispatch",
      ],
      specs: [
        { label: "Inlet pressure", value: "1 – 40 bar" },
        { label: "Outlet pressure", value: "50 mbar – 16 bar" },
        { label: "Capacity", value: "200 – 20,000 m³/h" },
        { label: "Streams", value: "1 or 2" },
        { label: "Frame", value: "Painted structural steel, galvanised option" },
        { label: "Testing", value: "Strength, tightness and function tested" },
      ],
      applications: [
        "Manufacturing plant intake",
        "Boiler-house supply skids",
        "Process unit battery-limit stations",
      ],
      documents: docsFor("PS-I Industrial Skid Station"),
    },
    {
      slug: "custody-transfer-stations",
      name: "Custody Transfer Stations",
      series: "PS-C",
      tagline: "Where ownership changes hands, and the measurement has to stand up to audit.",
      overview:
        "The PS-C is built around the metrology: pattern-approved meters, straight-run and flow conditioning to specification, PTZ correction and sealed metrological parameters. Every element that could influence the reading is documented and traceable, because the station's output is a commercial instrument.",
      features: [
        "Pattern-approved meter with traceable calibration certificate",
        "Straight-run and flow conditioning per meter specification",
        "PTZ volume correction with sealed parameters",
        "Bypass stream for meter proving and exchange",
        "Full documentation and data pack for audit",
      ],
      specs: [
        { label: "Inlet pressure", value: "4 – 100 bar" },
        { label: "Capacity", value: "500 – 100,000 m³/h" },
        { label: "Measurement accuracy", value: "±0.5 % or better on corrected volume" },
        { label: "Meter technology", value: "Turbine, rotary or ultrasonic" },
        { label: "Correction", value: "PTZ, sealed metrological parameters" },
        { label: "Approvals", value: "MID / OIML pattern approval" },
      ],
      applications: [
        "Network interconnection points",
        "Large-consumer fiscal metering",
        "Producer and shipper handover stations",
      ],
      documents: docsFor("PS-C Custody Transfer Station"),
    },
  ],
};

export const gasTrainComponents: Category = {
  slug: "gas-train-components",
  name: "Gas Train Components",
  icon: "train",
  tagline:
    "Everything between the service line and the burner head, specified as one compliant assembly.",
  overview:
    "A burner gas train is a code-defined sequence: isolation, filtration, regulation, safety shut-off, proving and control, in a specific order with specific interlocks. Getting the sequence right matters more than any individual component, so we supply trains as complete assemblies with the interlock scheme documented. Multiblock units compress several of those functions into one casting where space is tight.",
  features: [
    "Multiblock units combining filter, regulator and double shut-off",
    "Valve proving system connections built in",
    "Minimum and maximum gas pressure switch ports as standard",
    "Modulating butterfly control valves for firing-rate control",
    "Test points at every functional stage",
    "Assemblies supplied with interlock scheme documentation",
  ],
  specs: [
    { label: "Design pressure", value: "Up to 6 bar" },
    { label: "Sizes", value: "DN 15 – DN 200 / ½\" – 8\"" },
    { label: "Burner capacity", value: "Trains sized from 50 kW to 40 MW" },
    { label: "Shut-off arrangement", value: "Double shut-off with proving, class A" },
    { label: "Control", value: "On/off, high/low, or fully modulating" },
    { label: "Connections", value: "Threaded BSP / NPT, PN16 flanged" },
    { label: "Media", value: "Natural gas, LPG, propane, butane, biogas" },
    { label: "Operating temperature", value: "−20 °C to +60 °C" },
  ],
  applications: [
    "Industrial and commercial burner trains",
    "Boiler and hot-water plant",
    "Furnaces, kilns and ovens",
    "Thermal oxidisers and dryers",
    "Combined heat and power engine fuel trains",
  ],
  industries: [
    "Heavy manufacturing",
    "Food and beverage processing",
    "Glass, ceramics and cement",
    "Textiles and dyeing",
    "Power generation",
    "Commercial real estate",
  ],
  benefits: [
    {
      title: "Compliance designed in",
      description:
        "Supplying the train as one assembly means the valve sequence, proving arrangement and interlocks are correct by construction, rather than assembled correctly by chance on site.",
    },
    {
      title: "Shorter, lighter trains",
      description:
        "Multiblock construction replaces several separate bodies and their flange pairs with one casting, which matters in plant rooms where the train has to fit an existing space.",
    },
    {
      title: "Faster commissioning and fault-finding",
      description:
        "Test points at each stage let an engineer isolate a problem to one component in minutes instead of stripping the train.",
    },
    {
      title: "Verified tightness before every start",
      description:
        "Valve proving checks the shut-off seats for leakage on each cycle, catching a degrading seat long before it becomes a hazard.",
    },
  ],
  cta: quoteCta,
  faqs: [
    {
      question: "Why do gas trains need two shut-off valves in series?",
      answer:
        "Redundancy. A single seat can be held open by debris without any external indication, so codes require two independent valves in series above defined burner ratings, usually with a proving system that confirms both are sealing.",
    },
    {
      question: "What does a valve proving system do?",
      answer:
        "It monitors pressure in the space between the two shut-off valves through a controlled test cycle. If either seat is passing, the pressure change reveals it and the burner is prevented from starting.",
    },
    {
      question: "Can an existing train be upgraded rather than replaced?",
      answer:
        "Often, yes — adding proving, upgrading a shut-off valve or replacing a regulator is routine. Whether that is sufficient depends on the current code requirement for the burner rating, which we assess against the existing arrangement.",
    },
  ],
  products: [
    {
      slug: "multiblock-gas-valves",
      name: "Multiblock Gas Valves",
      series: "GT-M",
      tagline: "Filter, regulator and double shut-off in a single casting.",
      overview:
        "The GT-M compresses four or five separate train components into one body: inlet filter, pressure regulator, two safety shut-off valves in series and the pressure-switch ports needed to interlock them. Fewer joints means fewer leak paths, and a train that fits where a built-up assembly would not.",
      features: [
        "Integral filter, regulator and double shut-off",
        "Built-in pressure switch and proving connections",
        "Test points upstream, inter-valve and downstream",
        "Adjustable outlet regulation",
        "Compact envelope for retrofit into existing plant rooms",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 500 mbar" },
        { label: "Sizes", value: "DN 15 – DN 80" },
        { label: "Outlet regulation", value: "5 – 200 mbar adjustable" },
        { label: "Shut-off class", value: "Class A double shut-off" },
        { label: "Coil voltage", value: "230 V AC / 110 V AC / 24 V DC" },
        { label: "Connections", value: "Threaded BSP / NPT" },
      ],
      applications: [
        "Packaged burner trains",
        "Small and medium boiler plant",
        "Retrofit into space-constrained plant rooms",
      ],
      documents: docsFor("GT-M Multiblock Gas Valve"),
    },
    {
      slug: "butterfly-control-valves",
      name: "Butterfly Control Valves",
      series: "GT-B",
      tagline: "Modulates firing rate smoothly instead of cycling the burner on and off.",
      overview:
        "The GT-B varies gas flow to the burner under actuator control, letting the plant track load continuously rather than swinging between full fire and off. That stabilises process temperature and removes the purge losses that repeated cycling incurs.",
      features: [
        "Characterised disc profile for smooth modulation",
        "Electric actuator with position feedback",
        "Mechanical linkage option for air/gas ratio control",
        "Adjustable minimum and maximum travel stops",
        "Low pressure loss when fully open",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 6 bar" },
        { label: "Sizes", value: "DN 25 – DN 200" },
        { label: "Control signal", value: "3-point floating or 4 – 20 mA" },
        { label: "Actuator supply", value: "230 V AC / 24 V AC" },
        { label: "Travel", value: "0 – 90°, adjustable stops" },
        { label: "Connections", value: "PN16 flanged or wafer" },
      ],
      applications: [
        "Modulating burner firing-rate control",
        "Air/gas ratio control systems",
        "Furnace temperature control",
      ],
      documents: docsFor("GT-B Butterfly Control Valve"),
    },
    {
      slug: "valve-proving-systems",
      name: "Valve Proving Systems",
      series: "GT-VP",
      tagline: "Confirms both shut-off seats are tight before the burner is allowed to light.",
      overview:
        "The GT-VP runs an automatic tightness test on the volume between the two safety shut-off valves at every start, and optionally at shutdown. A passing seat shows up as an unexpected pressure change, and the burner is locked out before ignition rather than after an incident.",
      features: [
        "Automatic test cycle at start-up and optional shutdown",
        "Lockout output wired into the burner control chain",
        "Adjustable test duration and threshold",
        "Fault indication distinguishing which valve is passing",
        "Compatible with multiblock and built-up trains",
      ],
      specs: [
        { label: "Test pressure range", value: "5 – 500 mbar" },
        { label: "Test duration", value: "Adjustable, typically 10 – 60 s" },
        { label: "Supply voltage", value: "230 V AC / 110 V AC" },
        { label: "Output", value: "Volt-free lockout and fault contacts" },
        { label: "Enclosure", value: "IP54" },
        { label: "Temperature range", value: "−20 °C to +60 °C" },
      ],
      applications: [
        "Burner trains above code-defined capacity thresholds",
        "Boiler and furnace safety chains",
        "Upgrading existing trains to current standards",
      ],
      documents: docsFor("GT-VP Valve Proving System"),
    },
  ],
};
