export interface Job {
  id: string;
  title: string;
  city: string;
  type: 'Full Time' | 'Part Time' | 'Contract' | 'Internship';
  workspace: 'On-site' | 'Remote' | 'Hybrid';
  department: string;
  overview: string;
  aboutUs?: string;
  responsibilities: string[];
  benefits: string[];
  qualification: string[];
  beneficial?: string[];
  techStack?: string[];
  physicalRequirements?: string[];
  remuneration?: string;
  howToApplyLink: string;
}

export const jobs: Job[] = [
  {
    id: 'soltrak-administrator',
    title: 'SOLTRAK Administrator',
    city: 'Cape Town, South Africa',
    type: 'Full Time',
    workspace: 'Hybrid',
    department: 'Operations',
    overview:
      'SOLTRAK is looking for an Administrator with a passion for renewable energy to join our team in Black River Park, Observatory, Cape Town. This role is ideal for someone who is organized, detail-oriented, and eager to work in a fast-paced, dynamic environment within the renewable energy sector.',
    aboutUs: `SOLTRAK is a renewable energy performance tracking company that gives renewable asset owners insight into the performance of their assets. SOLTRAK offers independent performance reporting, support in setting up an O&M agreement, and access to a live monitoring platform that provides real-time access to performance metrics for an asset portfolio in one location.\n\nSOLTRAK is a dynamic and young company with great ambitions to have a positive impact on the renewable energy sector in Sub-Saharan Africa.`,
    responsibilities: [
      'Provide administrative assistance to managers and team members.',
      'Perform data-capture activities.',
      'Monitor dashboards for deviant behaviour against established metrics.',
      'Schedule meetings, arrange conference calls, and manage calendars.',
      'Make travel arrangements and coordinate logistics for managers and team members.',
      'Maintain company files, records, and databases.',
      'Assist in preparing and distributing reports.',
    ],
    benefits: [
      'Exposure to the growing embedded solar market in South Africa.',
      'Hands-on experience with the tools and processes in the renewable energy industry.',
      'Networking opportunities within the solar PV construction and installation sectors.',
      'A dynamic, hybrid work environment.',
      'Growth potential within a rapidly growing company.',
    ],
    physicalRequirements: [
      'Own transport and driver\'s license.',
      'Reside in Cape Town or the immediate surrounds.',
      'Laptop will be provided.',
    ],
    remuneration: 'R216 000 – R240 000 cost to company per annum. Final offer in line with candidate experience and qualifications.',
    qualification: [
      'Relevant diploma in Office Administration, Secretarial Studies, or similar.',
      'Minimum 2 years of experience in office administration or related roles.',
      'Strong organisational and communication skills.',
      'Ability to work independently and handle multiple tasks efficiently.',
      'Beneficial: Experience with Google Workspace (Docs, Sheets, Slides).',
    ],
    howToApplyLink: 'https://forms.gle/jBCMULBiPGksrA8A9',
  },
  {
    id: 'soltrak-energy-data-analyst',
    title: 'Energy Data Analyst',
    city: 'Cape Town, South Africa',
    type: 'Full Time',
    workspace: 'Hybrid',
    department: 'Energy Analytics',
    overview:
      'SOLTRAK is looking for an Energy Analyst with a strong data analytics focus and a passion for renewable energy to join our team in Black River Park, Observatory, Cape Town.',
    aboutUs: `SOLTRAK is a renewable energy performance tracking company that provides renewable asset owners with insights into the performance of their assets. Our services include independent performance reporting, support for O&M agreements, and a live monitoring platform offering real-time metrics for asset portfolios.\n\nSOLTRAK is a dynamic and young company with ambitions to positively impact the renewable energy sector in Sub-Saharan Africa.`,
    responsibilities: [
      'Manage and integrate Greenfield and Brownfield projects onto the SOLTRAK Monitoring Platform.',
      'Conduct performance evaluations with senior energy analysts to identify underperformance.',
      'Assess opportunities to improve plant performance by analysing key metrics.',
      'Develop telemetry schemas and protocols.',
      'Collaborate with the software development team to roll out features and fix bugs.',
      'Work on automated reporting frameworks, introducing new features, and identifying bugs.',
    ],
    benefits: [
      'Rapid learning curve in solar PV and energy storage markets in South Africa.',
      'Opportunity to work with a market leader in renewable energy.',
      'Exposure to tools and processes used in the renewable energy sector.',
      'Networking opportunities in the South African renewable energy space.',
      'Opportunity to develop machine learning tools to forecast plant performance.',
    ],
    physicalRequirements: [
      'Own transport and driver\'s license.',
      'Reside in Cape Town or surrounding areas.',
      'Laptop will be provided.',
    ],
    remuneration: 'R270 000 cost-to-company per annum. Final offer based on experience and qualifications.',
    qualification: [
      'BSc/BSc Eng – Electrical/Mechanical/Mechatronic or Statistics.',
      'Strong statistical and analytics background.',
      'Valid driver\'s license.',
      'Beneficial: MSc Degree or one year of work experience.',
    ],
    howToApplyLink: 'https://forms.gle/SiW2RN2CwVfFhpSi7',
  },
  {
    id: 'soltrak-energy-analyst',
    title: 'SOLTRAK Energy Analyst',
    city: 'Cape Town, South Africa',
    type: 'Full Time',
    workspace: 'Hybrid',
    department: 'Energy Analytics',
    overview:
      'SOLTRAK is looking for an Energy Analyst with a passion for renewable energy to join our team in Black River Park, Observatory, Cape Town.',
    aboutUs: `SOLTRAK is a renewable energy performance tracking company that gives renewable asset owners insight into the performance of their assets. SOLTRAK offers independent performance reporting, support in setting up an O&M agreement, and access to a live monitoring platform that provides real-time access to performance metrics for an asset portfolio in one location.\n\nSOLTRAK is a dynamic and young company with great ambitions to have a positive impact on the renewable energy sector in Sub-Saharan Africa.`,
    responsibilities: [
      'Management & integration of Greenfield and Brownfield projects onto the SOLTRAK Monitoring Platform.',
      'Undertaking performance evaluation assessments together with senior energy analysts to identify areas of plant underperformance.',
      'Assess opportunities to improve plant performance by assessing key performance metrics.',
      'Assisting with the development of telemetry schemas and protocols.',
      'Working closely with end users/asset owners to understand platform improvements.',
      'Work together with SOLTRAK\'s automated reporting framework, introducing new features, and identifying bugs.',
    ],
    benefits: [
      'Exposure and rapid learning curve to the embedded and distributed solar PV and energy storage markets.',
      'Opportunity to work with a fast-growing market leader in the South African renewable energy market.',
      'Introduction to tools and processes used in the Renewable Energy Market.',
      'Opportunity to develop machine learning tools and forecast algorithms.',
      'Start networking in the South African renewable energy space.',
    ],
    physicalRequirements: [
      'Own transport and driver\'s license.',
      'Reside in Cape Town or the immediate surrounds.',
      'Laptop will be provided.',
    ],
    remuneration: 'R360 000 – R420 000 cost to company per annum. Final offer in line with candidate experience and qualifications.',
    qualification: [
      'Technical qualification (B/BSc Eng – Electrical/Mechanical/Mechatronic).',
      '1–2 years work experience.',
      'Driver\'s license.',
    ],
    beneficial: [
      'MSc Degree (or similar).',
      'Exposure to South African tariff structures.',
      'Experience with Google Workspace (Docs, Sheets, Slides).',
      'Understanding/exposure to Python and/or JavaScript.',
      'Communication network (industrial automation).',
    ],
    howToApplyLink: 'https://forms.gle/z2HJRC5MMfNsFh9g8',
  },
  {
    id: 'soltrak-backend-developer',
    title: 'Intermediate to Senior Backend Developer',
    city: 'Cape Town, South Africa',
    type: 'Full Time',
    workspace: 'Hybrid',
    department: 'Software Engineering',
    overview:
      "SOLTRAK is on the hunt for a Software Developer who's not just skilled in code but also excited to be driving the renewable energy revolution! Join our dynamic team at Black River Park, Cape Town and blend your tech talent with a purpose-driven mission.",
    aboutUs: `SOLTRAK is a renewable energy performance tracking company that gives renewable asset owners insight into the performance of their assets. SOLTRAK offers independent performance reporting, support in setting up an O&M agreement, and access to a live monitoring platform that provides real-time access to performance metrics for an asset portfolio in one location.`,
    responsibilities: [
      'Work closely with front-end developers to build and maintain the backend infrastructure for our platforms and external APIs.',
      'Deliver high-quality, scalable solutions and code to ensure the quality of ongoing projects.',
      'Manage DevOps (Testing, Deployment, Monitoring, Error Handling, and Security).',
      'Plan and manage database migrations.',
      'Carry out R&D ahead of future projects to make necessary recommendations.',
      'Ensure tooling and software systems are always current and relevant.',
      'Help maintain a high level of code quality.',
      'Assist with hosting and scaling the application through effective cloud engineering.',
    ],
    benefits: [
      'Exposure to the embedded and distributed solar PV markets in South Africa.',
      'Introduction to tools and processes used in the Renewable Energy market.',
      'Networking in the South African renewable energy space.',
      'Exposure to a full stack development environment.',
      'Working with the latest web technologies.',
      'Working with an experienced team, with growth potential.',
    ],
    physicalRequirements: [
      'Own transport and driver\'s license.',
      'Reside in Cape Town or the immediate surrounds.',
      'Laptop will be provided.',
    ],
    remuneration: 'R40 000 – R57 500 per month, negotiable depending on experience.',
    qualification: [
      'At least 3 years experience building complex applications.',
      'Experience building NodeJS API applications.',
      'Experience with relational databases, preferably PostgreSQL.',
      'Strong understanding of software architecture design principles.',
      'An understanding of front-end development frameworks, particularly React.',
      'Experience with Git or similar source control systems.',
      'BSc in Computer Science or equivalent qualification.',
    ],
    beneficial: [
      'Experience with the AWS Ecosystem (Lambda, Cognito, RDS, S3, etc.) or other cloud infrastructure.',
      'Any experience with Python/Apps Script is a plus.',
      'Exposure to commercial power systems, especially solar PV.',
    ],
    howToApplyLink: 'https://forms.gle/GpNz7jsWA9x1pv3s6',
  },
];
