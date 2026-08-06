import type { Category } from "./types";
import { docsFor, quoteCta } from "./shared";

export const solenoidValves: Category = {
  slug: "solenoid-valves",
  name: "Solenoid Valves",
  icon: "solenoid",
  tagline:
    "Electrically commanded isolation that closes the moment the control system — or the power — says stop.",
  overview:
    "A solenoid valve is the interface between the gas line and the safety logic around it. Ours are normally-closed fail-safe designs: de-energise the coil, whether by burner controller command, gas-detection trip or a power cut, and the valve shuts. Coil duty and reset behaviour are selectable, because a valve that may re-open the moment power returns has very different requirements from one that must stay shut until an engineer has been to site.",
  features: [
    "Normally-closed fail-safe action on loss of power",
    "Continuous-duty encapsulated coils rated for permanent energisation",
    "Fast-acting closure in under one second",
    "Manual-reset variants that require deliberate on-site intervention",
    "Position-indication microswitch option for proof-of-closure",
    "Coil replaceable without breaking the pressure envelope",
  ],
  specs: [
    { label: "Design pressure", value: "Up to 6 bar (higher on request)" },
    { label: "Sizes", value: "DN 15 – DN 200 / ½\" – 8\"" },
    { label: "Closing time", value: "< 1 s (fast-acting models)" },
    { label: "Coil voltages", value: "230 V AC, 110 V AC, 24 V DC, 24 V AC" },
    { label: "Duty rating", value: "100 % continuous, IP65 enclosure" },
    { label: "Connections", value: "Threaded BSP / NPT, PN16 flanged" },
    { label: "Operating temperature", value: "−20 °C to +60 °C" },
    { label: "Body materials", value: "Aluminium alloy, ductile iron" },
  ],
  applications: [
    "Burner and furnace gas trains",
    "Emergency isolation on gas-detection trip",
    "Boiler-house main shut-off",
    "Laboratory and school gas-safety systems",
    "Automated batch and process control",
  ],
  industries: [
    "Heavy manufacturing",
    "Power generation",
    "Food and beverage processing",
    "Education and public buildings",
    "Chemicals and petrochemicals",
    "Commercial real estate",
  ],
  benefits: [
    {
      title: "Fail-safe by construction",
      description:
        "Closure is spring-driven and power-independent, so the safe state is reached during exactly the events — power loss, cable damage, controller failure — that safety systems exist to cover.",
    },
    {
      title: "Deliberate restart where it matters",
      description:
        "Manual-reset variants prevent a line from re-pressurising automatically after a trip, forcing an operator to inspect the plant before gas returns.",
    },
    {
      title: "Clean integration with control systems",
      description:
        "Standard coil voltages and optional position feedback drop straight into existing burner controllers and PLC safety loops.",
    },
    {
      title: "Serviceable in place",
      description:
        "Coils and seals change without removing the body from the line, keeping planned maintenance short.",
    },
  ],
  cta: quoteCta,
  faqs: [
    {
      question: "What is the difference between automatic and manual reset?",
      answer:
        "An automatic-reset valve reopens as soon as its coil is re-energised. A manual-reset valve stays closed until someone physically operates the reset lever, which is normally required for gas-detection and emergency-shutdown duties so that a plant cannot re-gas unattended.",
    },
    {
      question: "Should the valve be normally open or normally closed?",
      answer:
        "Normally closed is the default for fuel lines, since the de-energised state is the safe one. Normally open variants exist for vent and relief duty, where the safe state is an open path to atmosphere — the choice follows which condition is safe, not which is convenient.",
    },
    {
      question: "Can the coil be left energised permanently?",
      answer:
        "Yes. All coils in this range are rated for 100 % continuous duty, which is the normal condition for a main gas valve that stays open through a production shift.",
    },
  ],
  products: [
    {
      slug: "manually-reset-solenoid-valves",
      name: "Manually Reset Solenoid Valves",
      series: "SV-MR",
      tagline: "Once it trips, gas does not return until a person decides it should.",
      overview:
        "The SV-MR latches closed after a trip and can only be reopened with the on-site reset lever, which is the behaviour codes usually demand for gas-detection and emergency-shutdown service. The lever cannot be held open against a live trip signal, so it cannot be defeated by a wedge or a cable tie.",
      features: [
        "Mechanical latch — no automatic re-opening",
        "Reset lever cannot be held against an active trip",
        "Closing time under one second on loss of coil power",
        "Visual open/closed position indicator",
        "Optional proof-of-closure switch",
        "Fail-safe closed on power loss",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 6 bar" },
        { label: "Sizes", value: "DN 15 – DN 150" },
        { label: "Closing time", value: "< 1 s" },
        { label: "Coil voltage", value: "230 V AC / 110 V AC / 24 V DC" },
        { label: "Connections", value: "Threaded BSP / NPT, PN16 flanged" },
        { label: "Body material", value: "Aluminium alloy or ductile iron" },
      ],
      applications: [
        "Gas-detection system isolation",
        "School and laboratory gas safety",
        "Boiler-house emergency shut-off",
      ],
      documents: docsFor("SV-MR Manually Reset Solenoid Valve"),
    },
  ],
};

export const safetyReliefValves: Category = {
  slug: "safety-relief-valves",
  name: "Safety Relief Valves",
  icon: "relief",
  tagline:
    "Bleed off a small overpressure before it becomes a shutdown — then reseat and carry on.",
  overview:
    "Most overpressure events are small and transient: a regulator seat picks up a particle, or thermal expansion lifts a locked-in section. A relief valve vents just enough gas to clear the excursion and reseats, which keeps the station running instead of tripping a slam-shut and dispatching an engineer. Sizing matters more here than anywhere: undersized relief cannot protect, oversized relief chatters and destroys its own seat.",
  features: [
    "Reseats automatically once pressure returns to normal",
    "Direct-spring design with immediate response to pressure rise",
    "Set points adjustable in the field within the fitted spring range",
    "Vent connection for piping discharge to a safe location",
    "Soft seats for tight seal below set point",
    "Test-lift facility for in-service function checks",
  ],
  specs: [
    { label: "Set pressure range", value: "20 mbar – 16 bar" },
    { label: "Sizes", value: "DN 15 – DN 50 / ½\" – 2\"" },
    { label: "Reseat pressure", value: "Typically 90 % of set point" },
    { label: "Discharge capacity", value: "Sized per installation and relieving scenario" },
    { label: "Connections", value: "Threaded BSP / NPT" },
    { label: "Operating temperature", value: "−20 °C to +60 °C" },
    { label: "Body materials", value: "Aluminium alloy, brass" },
    { label: "Seat materials", value: "NBR, HNBR" },
  ],
  applications: [
    "Downstream protection at regulating stations",
    "Thermal-expansion relief on isolated pipe sections",
    "Meter set overpressure protection",
    "Burner gas train relief",
  ],
  industries: [
    "Gas distribution utilities",
    "Power generation",
    "Chemicals and petrochemicals",
    "Food and beverage processing",
    "Heavy manufacturing",
  ],
  benefits: [
    {
      title: "Prevents nuisance shutdowns",
      description:
        "A correctly sized relief absorbs small excursions so the slum-shut never trips, avoiding a site visit and a supply interruption for an event that lasted seconds.",
    },
    {
      title: "Protects downstream pipe ratings",
      description:
        "Relief caps the pressure a downstream network can ever see, which is often what allows a lower-rated and far cheaper pipe specification to be used.",
    },
    {
      title: "Verifiable in service",
      description:
        "The test-lift facility lets function be confirmed during a routine visit without removing the valve or shutting the station down.",
    },
    {
      title: "Self-restoring",
      description:
        "Automatic reseat means no manual intervention after a minor event, unlike a trip device that latches.",
    },
  ],
  cta: quoteCta,
  faqs: [
    {
      question: "Should a relief valve be used instead of a slum-shut?",
      answer:
        "They are complementary, not alternatives. Relief handles small, self-clearing excursions; a slum-shut handles genuine regulator failure where venting could never keep up. Stations commonly carry both, with the relief set below the slum-shut trip point.",
    },
    {
      question: "Why does an oversized relief valve cause problems?",
      answer:
        "It vents more than the excursion requires, pressure collapses, the valve reseats, pressure rises again and the cycle repeats. That chattering hammers the seat and destroys sealing quickly. Size on the actual relieving scenario, not on pipe diameter.",
    },
    {
      question: "Where should the discharge be piped?",
      answer:
        "To a safe outdoor location away from ignition sources, air intakes and occupied areas, with the vent line sized so its back-pressure does not compromise the valve's capacity.",
    },
  ],
  products: [
    {
      slug: "safety-relief-valves",
      name: "Safety Relief Valves",
      series: "RV-D",
      tagline: "Simple, immediate relief for small excursions and thermal expansion.",
      overview:
        "In the RV-D a spring holds a soft seat closed until line pressure overcomes it. There is nothing else in the mechanism, which makes it fast, cheap and extremely reliable for the small relieving loads that make up the bulk of real events.",
      features: [
        "Single spring-and-seat mechanism",
        "Immediate response to pressure rise",
        "Colour-coded spring sets across the range",
        "Test-lift lever option",
        "Threaded vent connection",
      ],
      specs: [
        { label: "Set pressure", value: "20 mbar – 16 bar" },
        { label: "Sizes", value: "DN 15 – DN 50" },
        { label: "Reseat pressure", value: "≈ 90 % of set point" },
        { label: "Connections", value: "Threaded BSP / NPT" },
        { label: "Body material", value: "Aluminium alloy or brass" },
        { label: "Seat material", value: "NBR or HNBR" },
      ],
      applications: [
        "Thermal-expansion relief",
        "Meter set protection",
        "Small commercial regulating installations",
      ],
      documents: docsFor("RV-D Safety Relief Valve"),
    },
  ],
};

export const slumShutValves: Category = {
  slug: "slum-shut-valves",
  name: "Slum Shut Valves",
  icon: "slamshut",
  tagline:
    "Autonomous overpressure protection that trips on its own and stays shut until someone checks why.",
  overview:
    "A slum-shut is the station's independent judgement. It monitors downstream pressure through its own sensing line and latches closed the instant limits are exceeded — no control system, no power, no operator. Critically, it does not reset itself: gas stays off until an engineer has established why the regulator failed. That latching behaviour is the entire point, and it is why slum-shuts are mandated where a regulator failure could overpressure a lower-rated network.",
  features: [
    "Fully autonomous — independent sensing line, no external energy",
    "Mechanical latch, manual reset only",
    "Over-pressure and under-pressure trip on the same device",
    "Trip points adjustable independently of the regulator",
    "Integrated into a regulator body or supplied as a standalone valve",
    "Trip-status indicator visible without opening the unit",
  ],
  specs: [
    { label: "Design pressure", value: "Up to 100 bar" },
    { label: "Over-pressure trip range", value: "30 mbar – 60 bar" },
    { label: "Under-pressure trip range", value: "10 mbar – 30 bar (optional)" },
    { label: "Sizes", value: "DN 25 – DN 300 / 1\" – 12\"" },
    { label: "Trip accuracy", value: "AG 1 – AG 5" },
    { label: "Closing time", value: "< 1 s" },
    { label: "Connections", value: "Threaded, PN16 – PN100 flanged, ANSI 150 – 600" },
    { label: "Operating temperature", value: "−20 °C to +60 °C (−40 °C option)" },
  ],
  applications: [
    "Mandatory overpressure protection at district stations",
    "Protection of lower-rated downstream networks",
    "Industrial plant intake safety",
    "Custody-transfer skid protection",
    "Under-pressure detection on critical supplies",
  ],
  industries: [
    "Gas distribution utilities",
    "Power generation",
    "Petrochemical and refining",
    "Heavy manufacturing",
    "District heating operators",
  ],
  benefits: [
    {
      title: "Independent of everything else",
      description:
        "Because it senses and acts entirely on its own, a slum-shut still protects when the control system, the power supply and the regulator have all failed together.",
    },
    {
      title: "Forces a root-cause investigation",
      description:
        "The latch guarantees a human looks at the station before gas returns, so a failing regulator seat is found rather than masked by an automatic reset.",
    },
    {
      title: "Enables cheaper downstream design",
      description:
        "A certified trip point caps the maximum credible downstream pressure, which is frequently what justifies a lower pipe rating across the whole network.",
    },
    {
      title: "Catches supply loss too",
      description:
        "The under-pressure trip option shuts the line on supply failure, preventing air ingress and unlit appliance hazards when pressure is restored.",
    },
  ],
  cta: quoteCta,
  faqs: [
    {
      question: "How far above the regulator set point should the trip be?",
      answer:
        "Far enough that normal lock-up and transient swings never reach it, and comfortably below the downstream maximum allowable pressure. The gap is set from the regulator's lock-up class and the pipe rating, so it is calculated per station rather than taken from a default.",
    },
    {
      question: "Should the slum-shut be integrated or standalone?",
      answer:
        "Integrated units are shorter, cheaper and simpler to install. Standalone units let the trip device be selected, tested and replaced independently of the regulator, which is preferred on high-consequence stations and where different maintenance intervals apply.",
    },
    {
      question: "How is a slum-shut tested without shutting down the station?",
      answer:
        "Through the test connection on the sensing line: a portable source raises pressure at the sensing port only, verifying the trip point while the main line stays in normal service.",
    },
  ],
  products: [
    {
      slug: "slum-shut-valves",
      name: "Slum Shut Valves",
      series: "SS",
      tagline: "Latching overpressure trip, supplied integrated in the regulator or standalone.",
      overview:
        "The SS senses downstream pressure through its own line and latches closed the moment the trip point is passed, using nothing but spring force — no power, no controller, no operator. It is supplied two ways: the SS-I sits inside the regulator body for compact kiosks, and the SS-X is an independent in-line valve with its own maintenance record for high-consequence stations. Both reset only by hand.",
      features: [
        "Fully autonomous — independent sensing line, no external energy",
        "Mechanical latch, manual reset lever only",
        "Over- and under-pressure trip on the same device",
        "Integrated (SS-I) or standalone (SS-X) execution",
        "Trip point set independently of the regulator set point",
        "Test connection on the sensing line for in-service proving",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 100 bar (SS-X), up to 25 bar (SS-I)" },
        { label: "Over-pressure trip", value: "30 mbar – 60 bar" },
        { label: "Under-pressure trip", value: "10 mbar – 30 bar (optional)" },
        { label: "Sizes", value: "DN 25 – DN 300" },
        { label: "Trip accuracy", value: "AG 1 – AG 5" },
        { label: "Closing time", value: "< 1 s" },
        { label: "Connections", value: "Threaded, PN16 – PN100 flanged, ANSI 150 – 600" },
        { label: "Reset", value: "Manual lever" },
      ],
      applications: [
        "City-gate and transmission stations",
        "Compact district regulating kiosks",
        "Custody-transfer skids",
        "High-consequence industrial intake",
      ],
      documents: docsFor("SS Slum Shut Valve"),
    },
  ],
};
