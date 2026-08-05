import type { Category } from "./types";
import { docsFor, quoteCta } from "./shared";

export const solenoidValves: Category = {
  slug: "solenoid-valves",
  name: "Solenoid Valves",
  icon: "solenoid",
  tagline:
    "Electrically commanded isolation that closes the moment the control system — or the power — says stop.",
  overview:
    "A solenoid valve is the interface between the gas line and the safety logic around it. Ours are normally-closed fail-safe designs: de-energise the coil, whether by burner controller command, gas-detection trip or a power cut, and the valve shuts. Coil duty, opening characteristic and reset behaviour are all selectable, because a furnace that needs a soft two-stage opening has very different requirements from an emergency isolation valve that must slam shut in under a second.",
  features: [
    "Normally-closed fail-safe action on loss of power",
    "Continuous-duty encapsulated coils rated for permanent energisation",
    "Fast, slow-opening and two-stage characteristics available",
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
      question: "Why choose a slow-opening valve?",
      answer:
        "Admitting full flow instantly into a large furnace volume can produce a rough light-up and pressure shock. A slow-opening or two-stage valve ramps flow so ignition is stable and pipework is not hammered.",
    },
    {
      question: "Can the coil be left energised permanently?",
      answer:
        "Yes. All coils in this range are rated for 100 % continuous duty, which is the normal condition for a main gas valve that stays open through a production shift.",
    },
  ],
  products: [
    {
      slug: "fast-acting-solenoid-valves",
      name: "Fast-Acting Solenoid Valves",
      series: "SV-F",
      tagline: "Sub-second closure for safety loops that cannot wait.",
      overview:
        "The SV-F closes in under a second on loss of coil power, which is what emergency shutdown and flame-failure logic require. A direct-acting armature with no pilot dependency means closure does not rely on line pressure being present.",
      features: [
        "Closing time under one second",
        "Direct-acting — closes with or without line pressure",
        "Encapsulated IP65 coil, 100 % duty",
        "Optional closed-position proof switch",
        "Automatic reset on re-energisation",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 6 bar" },
        { label: "Sizes", value: "DN 15 – DN 100" },
        { label: "Closing time", value: "< 1 s" },
        { label: "Coil voltage", value: "230 V AC / 110 V AC / 24 V DC" },
        { label: "Connections", value: "Threaded BSP / NPT, PN16 flanged" },
        { label: "Body material", value: "Aluminium alloy" },
      ],
      applications: [
        "Burner gas train safety shut-off",
        "Gas-detection emergency isolation",
        "Automated process line isolation",
      ],
      documents: docsFor("SV-F Fast-Acting Solenoid Valve"),
    },
    {
      slug: "manual-reset-solenoid-valves",
      name: "Manual Reset Solenoid Valves",
      series: "SV-MR",
      tagline: "Once it trips, gas does not return until a person decides it should.",
      overview:
        "The SV-MR latches closed after a trip and can only be reopened with the on-site reset lever, which is the behaviour codes usually demand for gas-detection and emergency-shutdown service. The lever cannot be held open against a live trip signal, so it cannot be defeated by a wedge or a cable tie.",
      features: [
        "Mechanical latch — no automatic re-opening",
        "Reset lever cannot be held against an active trip",
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
      documents: docsFor("SV-MR Manual Reset Solenoid Valve"),
    },
    {
      slug: "slow-opening-solenoid-valves",
      name: "Slow-Opening Solenoid Valves",
      series: "SV-SO",
      tagline: "Ramped admission for smooth light-up on large combustion volumes.",
      overview:
        "The SV-SO opens against an adjustable hydraulic restrictor so flow rises over a set interval rather than instantly. On large furnaces and kilns that turns a harsh light-up into a controlled one, protecting refractory and eliminating the pressure shock that trips downstream switches.",
      features: [
        "Adjustable opening time",
        "Optional first-stage rapid step then slow ramp",
        "Fast fail-safe closure regardless of opening setting",
        "Encapsulated IP65 coil, 100 % duty",
        "Adjustment accessible without depressurising",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 6 bar" },
        { label: "Sizes", value: "DN 25 – DN 200" },
        { label: "Opening time", value: "Adjustable, typically 3 – 20 s" },
        { label: "Closing time", value: "< 1 s" },
        { label: "Coil voltage", value: "230 V AC / 110 V AC / 24 V DC" },
        { label: "Connections", value: "Threaded BSP / NPT, PN16 flanged" },
      ],
      applications: [
        "Furnace and kiln light-up",
        "Large boiler main gas valve",
        "Any train where instant admission causes pressure shock",
      ],
      documents: docsFor("SV-SO Slow-Opening Solenoid Valve"),
    },
  ],
};

export const safetyShutOffValves: Category = {
  slug: "safety-shut-off-valves",
  name: "Safety Shut-off Valves",
  icon: "shutoff",
  tagline:
    "The commanded last line of defence — isolate the line on any trip signal the plant can generate.",
  overview:
    "Safety shut-off valves close on an external command: a fire signal, a gas-detection trip, an ESD button or a loss of instrument air. Unlike a slam-shut, which reacts autonomously to pressure, an SSOV does what the safety system tells it to, which makes it the enforcement point for plant-wide shutdown logic. Actuation can be electric, pneumatic or thermal, and every variant fails to the closed position.",
  features: [
    "Fail-closed on loss of power, signal or actuating air",
    "Electric, pneumatic and thermal-fusible actuation options",
    "Fire-safe seat and stem-seal construction available",
    "Limit switches for open and closed position proof",
    "Partial-stroke test capability on actuated models",
    "Manual override for controlled commissioning",
  ],
  specs: [
    { label: "Design pressure", value: "Up to 100 bar" },
    { label: "Sizes", value: "DN 25 – DN 400 / 1\" – 16\"" },
    { label: "Closing time", value: "< 2 s typical, application configurable" },
    { label: "Actuation", value: "Electric 24 V DC / 230 V AC, pneumatic 4 – 7 bar, thermal fuse" },
    { label: "Leakage class", value: "Class VI / bubble-tight shut-off" },
    { label: "Connections", value: "PN16 – PN100 flanged, ANSI 150 – 600" },
    { label: "Operating temperature", value: "−20 °C to +200 °C (fire-safe variants)" },
    { label: "Body materials", value: "Cast steel, ductile iron, stainless" },
  ],
  applications: [
    "Plant-wide emergency shutdown systems",
    "Fire-triggered isolation at building risers",
    "Battery-limit isolation on process units",
    "Compressor station block valves",
    "Storage and loading facility isolation",
  ],
  industries: [
    "Oil and gas production",
    "Chemicals and petrochemicals",
    "Power generation",
    "Heavy manufacturing",
    "Marine and offshore",
    "Commercial and institutional buildings",
  ],
  benefits: [
    {
      title: "Single enforcement point for shutdown logic",
      description:
        "Every trip source in the plant can be routed to one valve, so the shutdown path is auditable rather than distributed across a dozen devices.",
    },
    {
      title: "Testable without a shutdown",
      description:
        "Partial-stroke testing exercises the actuator and confirms the valve is free to move while production continues, closing the biggest gap in shut-off reliability.",
    },
    {
      title: "Survives the event it is there for",
      description:
        "Fire-safe construction keeps the valve sealing after elastomer seats have been destroyed, which is precisely when isolation matters most.",
    },
    {
      title: "Proof of position",
      description:
        "Limit switches give the safety system positive confirmation of closure instead of an assumption based on command state.",
    },
  ],
  cta: quoteCta,
  faqs: [
    {
      question: "How is a safety shut-off valve different from a slam-shut valve?",
      answer:
        "A slam-shut is autonomous: it senses downstream pressure itself and trips on its own when limits are exceeded. A safety shut-off valve is commanded — it closes when an external system tells it to. Most stations use both, because they cover different failure modes.",
    },
    {
      question: "What does fire-safe construction actually guarantee?",
      answer:
        "That the valve still provides a defined, limited leakage rate after its soft seats have burned away, because a secondary metal-to-metal seat and graphite stem packing take over. It is a tested condition, not a claim about surviving fire undamaged.",
    },
    {
      question: "What is partial-stroke testing and why does it matter?",
      answer:
        "The actuator moves the valve through a small part of its travel — typically 10–20 % — and returns it, proving the assembly is not seized without interrupting flow. Shut-off valves fail most often by sticking after long periods without movement, and this catches that.",
    },
  ],
  products: [
    {
      slug: "electric-actuated-shut-off-valves",
      name: "Electric Actuated Shut-off Valves",
      series: "SSV-E",
      tagline: "Cable in, isolation out — no compressed-air infrastructure required.",
      overview:
        "The SSV-E pairs a quarter-turn valve with a spring-return electric actuator, so a single control cable delivers both command and fail-safe behaviour. Where a site has no instrument air, this removes an entire utility from the safety path.",
      features: [
        "Spring-return actuator fails closed on power loss",
        "No instrument air required",
        "Integral limit switches for open and closed proof",
        "Manual override handwheel",
        "Partial-stroke test input",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 40 bar" },
        { label: "Sizes", value: "DN 25 – DN 300" },
        { label: "Closing time", value: "< 2 s" },
        { label: "Supply voltage", value: "24 V DC / 230 V AC" },
        { label: "Enclosure", value: "IP66, ATEX option" },
        { label: "Connections", value: "PN16 – PN40 flanged, ANSI 150 – 300" },
      ],
      applications: [
        "Building riser fire isolation",
        "Process unit battery limits",
        "Sites without instrument air",
      ],
      documents: docsFor("SSV-E Electric Actuated Shut-off Valve"),
    },
    {
      slug: "pneumatic-actuated-shut-off-valves",
      name: "Pneumatic Actuated Shut-off Valves",
      series: "SSV-P",
      tagline: "Fast, high-torque isolation for large bores and hazardous areas.",
      overview:
        "For large-bore duty the SSV-P's spring-return pneumatic actuator delivers the torque and speed that electric units struggle to match, and with no electrical energy in the actuator it suits hazardous-area installation with minimal certification burden.",
      features: [
        "High torque for large-bore valves",
        "Spring-return fails closed on air loss",
        "Rapid closure independent of stroke length",
        "Solenoid pilot with manual reset option",
        "Fire-safe construction available",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 100 bar" },
        { label: "Sizes", value: "DN 50 – DN 400" },
        { label: "Closing time", value: "< 2 s" },
        { label: "Actuating air", value: "4 – 7 bar instrument air" },
        { label: "Leakage class", value: "Class VI" },
        { label: "Connections", value: "PN25 – PN100 flanged, ANSI 150 – 600" },
      ],
      applications: [
        "Compressor station block valves",
        "Large process isolation",
        "Hazardous-area emergency shutdown",
      ],
      documents: docsFor("SSV-P Pneumatic Actuated Shut-off Valve"),
    },
    {
      slug: "thermal-shut-off-valves",
      name: "Thermal Shut-off Valves",
      series: "SSV-T",
      tagline: "Closes on heat alone — no cable, no air, no control system.",
      overview:
        "The SSV-T holds open on a fusible element that melts at a defined temperature, releasing a spring and isolating the line. Because it needs no external service of any kind, it keeps working when fire has already taken out power and control wiring.",
      features: [
        "Fusible element trips at a defined temperature",
        "Requires no power, air or signal",
        "Mechanical latch — no automatic reopening",
        "Selectable trip temperature",
        "Compact, fits inside riser and meter enclosures",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 16 bar" },
        { label: "Sizes", value: "DN 15 – DN 100" },
        { label: "Trip temperature", value: "95 °C / 100 °C selectable" },
        { label: "Reset", value: "Element replacement" },
        { label: "Connections", value: "Threaded BSP / NPT, PN16 flanged" },
        { label: "Body material", value: "Brass or ductile iron" },
      ],
      applications: [
        "Meter set and riser fire protection",
        "Appliance-local thermal isolation",
        "Retrofit fire safety on existing installations",
      ],
      documents: docsFor("SSV-T Thermal Shut-off Valve"),
    },
  ],
};

export const reliefValves: Category = {
  slug: "relief-valves",
  name: "Relief Valves",
  icon: "relief",
  tagline:
    "Bleed off a small overpressure before it becomes a shutdown — then reseat and carry on.",
  overview:
    "Most overpressure events are small and transient: a regulator seat picks up a particle, or thermal expansion lifts a locked-in section. A relief valve vents just enough gas to clear the excursion and reseats, which keeps the station running instead of tripping a slam-shut and dispatching an engineer. Sizing matters more here than anywhere: undersized relief cannot protect, oversized relief chatters and destroys its own seat.",
  features: [
    "Reseats automatically once pressure returns to normal",
    "Direct-spring and pilot-operated designs across the pressure range",
    "Set points adjustable in the field within the fitted spring range",
    "Vent connection for piping discharge to a safe location",
    "Soft seats for tight seal below set point",
    "Test-lift facility for in-service function checks",
  ],
  specs: [
    { label: "Set pressure range", value: "20 mbar – 100 bar" },
    { label: "Sizes", value: "DN 15 – DN 150 / ½\" – 6\"" },
    { label: "Reseat pressure", value: "Typically 90 – 95 % of set point" },
    { label: "Discharge capacity", value: "Sized per installation and relieving scenario" },
    { label: "Connections", value: "Threaded BSP/NPT, PN16 – PN100 flanged" },
    { label: "Operating temperature", value: "−20 °C to +60 °C" },
    { label: "Body materials", value: "Aluminium alloy, ductile iron, cast steel" },
    { label: "Seat materials", value: "NBR, HNBR, FKM" },
  ],
  applications: [
    "Downstream protection at regulating stations",
    "Thermal-expansion relief on isolated pipe sections",
    "Meter set overpressure protection",
    "Burner gas train relief",
    "Storage vessel and tanker offloading protection",
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
        "A correctly sized relief absorbs small excursions so the slam-shut never trips, avoiding a site visit and a supply interruption for an event that lasted seconds.",
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
      question: "Should a relief valve be used instead of a slam-shut?",
      answer:
        "They are complementary, not alternatives. Relief handles small, self-clearing excursions; a slam-shut handles genuine regulator failure where venting could never keep up. Stations commonly carry both, with the relief set below the slam-shut trip point.",
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
      slug: "direct-spring-relief-valves",
      name: "Direct Spring Relief Valves",
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
      documents: docsFor("RV-D Direct Spring Relief Valve"),
    },
    {
      slug: "pilot-operated-relief-valves",
      name: "Pilot Operated Relief Valves",
      series: "RV-P",
      tagline: "Full capacity right at set point, with a tight seal just below it.",
      overview:
        "A direct-spring valve begins leaking as line pressure approaches set point. The RV-P uses line pressure to hold itself shut, so sealing actually improves the closer it gets — then it opens fully and fast once the pilot trips. That combination is what high-pressure, high-capacity relief duty needs.",
      features: [
        "Seal tightness increases as pressure approaches set point",
        "Rapid full-lift once the pilot releases",
        "High discharge capacity for the body size",
        "Field-adjustable pilot set point",
        "Back-pressure tolerant",
      ],
      specs: [
        { label: "Set pressure", value: "1 – 100 bar" },
        { label: "Sizes", value: "DN 25 – DN 150" },
        { label: "Reseat pressure", value: "≈ 95 % of set point" },
        { label: "Connections", value: "PN25 – PN100 flanged, ANSI 150 – 600" },
        { label: "Body material", value: "Cast steel" },
        { label: "Seat material", value: "HNBR or FKM" },
      ],
      applications: [
        "High-pressure transmission station relief",
        "Large district regulating stations",
        "Storage and loading facility protection",
      ],
      documents: docsFor("RV-P Pilot Operated Relief Valve"),
    },
    {
      slug: "creep-relief-valves",
      name: "Creep Relief Valves",
      series: "RV-C",
      tagline: "Handles the slow seat weep that would otherwise trip the station overnight.",
      overview:
        "A regulator seat that passes a tiny amount of gas will slowly pressurise a no-flow network until the slam-shut trips — typically at 3 a.m. The RV-C is deliberately small, vents that creep as it accumulates and keeps the station on line until the seat is serviced at the next planned visit.",
      features: [
        "Low discharge rate matched to seat-weep magnitude",
        "Prevents nuisance slam-shut trips during no-flow periods",
        "Compact body suited to skid mounting",
        "Adjustable set point below the slam-shut trip",
        "Soft seat for tight closure at rest",
      ],
      specs: [
        { label: "Set pressure", value: "50 mbar – 25 bar" },
        { label: "Sizes", value: "DN 15 – DN 25" },
        { label: "Discharge", value: "Low rate, creep duty only" },
        { label: "Connections", value: "Threaded BSP / NPT" },
        { label: "Body material", value: "Aluminium alloy or stainless" },
        { label: "Seat material", value: "NBR, HNBR or FKM" },
      ],
      applications: [
        "District regulating stations with long no-flow periods",
        "Seasonal and standby installations",
        "Any station with a history of overnight slam-shut trips",
      ],
      documents: docsFor("RV-C Creep Relief Valve"),
    },
  ],
};

export const slamShutValves: Category = {
  slug: "slam-shut-valves",
  name: "Slam Shut Valves",
  icon: "slamshut",
  tagline:
    "Autonomous overpressure protection that trips on its own and stays shut until someone checks why.",
  overview:
    "A slam-shut is the station's independent judgement. It monitors downstream pressure through its own sensing line and latches closed the instant limits are exceeded — no control system, no power, no operator. Critically, it does not reset itself: gas stays off until an engineer has established why the regulator failed. That latching behaviour is the entire point, and it is why slam-shuts are mandated where a regulator failure could overpressure a lower-rated network.",
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
        "Because it senses and acts entirely on its own, a slam-shut still protects when the control system, the power supply and the regulator have all failed together.",
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
      question: "Should the slam-shut be integrated or standalone?",
      answer:
        "Integrated units are shorter, cheaper and simpler to install. Standalone units let the trip device be selected, tested and replaced independently of the regulator, which is preferred on high-consequence stations and where different maintenance intervals apply.",
    },
    {
      question: "How is a slam-shut tested without shutting down the station?",
      answer:
        "Through the test connection on the sensing line: a portable source raises pressure at the sensing port only, verifying the trip point while the main line stays in normal service.",
    },
  ],
  products: [
    {
      slug: "integrated-slam-shut-valves",
      name: "Integrated Slam Shut Valves",
      series: "SS-I",
      tagline: "Trip protection built into the regulator body — shorter skid, fewer leak paths.",
      overview:
        "The SS-I is fitted inside the regulator's own body, sharing the inlet passage. That removes a flange pair, a spool and a set of gaskets from the station and shortens the run considerably, which matters most in kiosks and cabinets where length is the binding constraint.",
      features: [
        "Shares the regulator body — no additional flanged joints",
        "Over- and under-pressure trip",
        "Manual reset lever on the outside of the body",
        "Trip point set independently of regulator set point",
        "Test connection on the sensing line",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 25 bar" },
        { label: "Over-pressure trip", value: "30 mbar – 16 bar" },
        { label: "Sizes", value: "Matched to host regulator, DN 25 – DN 150" },
        { label: "Trip accuracy", value: "AG 2.5 – AG 5" },
        { label: "Closing time", value: "< 1 s" },
        { label: "Reset", value: "Manual lever" },
      ],
      applications: [
        "Compact district regulating kiosks",
        "Commercial meter sets",
        "Space-constrained plant rooms",
      ],
      documents: docsFor("SS-I Integrated Slam Shut Valve"),
    },
    {
      slug: "standalone-slam-shut-valves",
      name: "Standalone Slam Shut Valves",
      series: "SS-X",
      tagline: "A separate trip device you can select, test and replace on its own schedule.",
      overview:
        "The SS-X is an independent in-line valve upstream of the regulator, with its own sensing line and its own maintenance record. Keeping the protective function physically separate from the thing it protects against is the conventional choice for high-consequence stations, and it lets the trip device be swapped without touching regulation.",
      features: [
        "Fully independent of the regulator",
        "Separate maintenance and test schedule",
        "Over- and under-pressure trip",
        "High trip accuracy class",
        "Available across the full pressure range",
      ],
      specs: [
        { label: "Design pressure", value: "Up to 100 bar" },
        { label: "Over-pressure trip", value: "50 mbar – 60 bar" },
        { label: "Under-pressure trip", value: "10 mbar – 30 bar (optional)" },
        { label: "Sizes", value: "DN 25 – DN 300" },
        { label: "Trip accuracy", value: "AG 1 – AG 2.5" },
        { label: "Connections", value: "PN16 – PN100 flanged, ANSI 150 – 600" },
      ],
      applications: [
        "City-gate and transmission stations",
        "Custody-transfer skids",
        "High-consequence industrial intake",
      ],
      documents: docsFor("SS-X Standalone Slam Shut Valve"),
    },
  ],
};
