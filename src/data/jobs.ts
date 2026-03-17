export interface Job {
  id: string;
  title: string;
  type: 'Full Time' | 'Part Time' | 'Contract' | 'Internship';
  workspace: 'On-site' | 'Remote' | 'Hybrid';
  location: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobs: Job[] = [
  {
    id: 'solar-energy-analyst',
    title: 'Solar Energy Analyst',
    type: 'Full Time',
    workspace: 'On-site',
    location: 'Cape Town',
    department: 'Energy Analytics',
    description: 'Join our energy analytics team to help clients optimise the performance of their solar assets. You will conduct performance assessments, build energy models, and deliver clear, actionable reports to institutional investors and O&M teams across Southern Africa.',
    responsibilities: [
      'Analyse solar plant performance data and produce monthly performance reports',
      'Build and validate energy yield models using tools such as PVsyst and SAM',
      'Identify underperformance root causes including soiling, shading, inverter faults, and grid curtailment',
      'Support clients during onboarding by validating metering setups and data quality',
      'Contribute to the development of SOLTRAK\'s internal performance benchmarking methodologies',
    ],
    requirements: [
      'BSc or BEng in Electrical Engineering, Mechanical Engineering, or a related technical field',
      'Minimum 2 years of experience in solar energy performance analysis or O&M',
      'Proficiency with PVsyst, SAM, or equivalent energy modelling software',
      'Strong analytical and data skills; experience with Python or Excel is advantageous',
      'Excellent written communication skills for producing client-facing reports',
    ],
  },
];
