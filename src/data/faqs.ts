export interface FAQ {
  question: string;
  answer: string;
}

export const generalFaqs: FAQ[] = [
  {
    question: 'What is SOLTRAK?',
    answer: 'SOLTRAK is Africa\'s leading solar asset performance monitoring platform. We provide independent, real-time visibility into the performance of solar energy installations, enabling investors, asset owners, and O&M teams to track, verify, and optimize their solar portfolios with precision.',
  },
  {
    question: 'How does SOLTRAK track performance?',
    answer: 'SOLTRAK integrates with your existing metering infrastructure—grid meters, solar meters, inverters, and weather stations—to aggregate live performance data. Our platform applies industry-standard algorithms to calculate key performance indicators (KPIs) such as Performance Ratio (PR), Plant Availability, and Energy Yield, giving you a complete picture of your asset\'s health.',
  },
  {
    question: 'Who is SOLTRAK designed for?',
    answer: 'SOLTRAK serves a broad ecosystem of stakeholders in the solar industry: independent power producers (IPPs), institutional investors, property funds, O&M contractors, and energy consultants. Whether you manage a single rooftop installation or a portfolio of utility-scale assets, SOLTRAK adapts to your needs.',
  },
  {
    question: 'How long does onboarding take?',
    answer: 'Typical onboarding takes between 2–4 weeks, depending on the complexity of your metering setup and the number of assets being integrated. Our team will guide you through every step—from initial infrastructure assessment to data validation and dashboard configuration.',
  },
  {
    question: 'Is my data secure on SOLTRAK?',
    answer: 'Absolutely. SOLTRAK employs enterprise-grade security practices including end-to-end encryption, role-based access control, and regular third-party security audits. Your data is hosted on ISO 27001-compliant infrastructure and is never shared with third parties without your explicit consent.',
  },
];

export const technicalFaqs: FAQ[] = [
  {
    question: 'What hardware is required to use SOLTRAK?',
    answer: 'At minimum, you need a compatible grid meter and grid-tied inverter to get started. Additional hardware such as solar meters, BESS meters, battery inverters, and weather stations enrich your data and unlock more advanced analytics. SOLTRAK is hardware-agnostic and supports a wide range of metering brands and communication protocols.',
  },
  {
    question: 'Which cloud platforms does SOLTRAK integrate with?',
    answer: 'SOLTRAK integrates with major cloud data platforms including SolarEdge, Fronius Solar.web, SMA Sunny Portal, Huawei FusionSolar, and others. If your platform uses standard APIs (REST, MQTT, Modbus TCP/IP), our engineering team can build a custom integration.',
  },
  {
    question: 'Can SOLTRAK detect underperformance and faults?',
    answer: 'Yes. SOLTRAK\'s analytics engine continuously compares actual generation against modelled expectations based on real-time irradiance data. Deviations beyond configurable thresholds trigger automated alerts. Our platform can identify inverter clipping, soiling losses, shading events, and meter drift—often before your O&M team is even aware.',
  },
  {
    question: 'Does SOLTRAK provide API access for our internal systems?',
    answer: 'Yes, SOLTRAK offers a RESTful API that allows you to pull performance data, alerts, and reports into your own dashboards, ERP systems, or BI tools. API access is available on all enterprise plans. Full API documentation is provided upon onboarding.',
  },
];
