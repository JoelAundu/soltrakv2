import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const locations = [
  {
    city: 'Cape Town',
    region: 'Western Cape',
    energy: 8569,
    pr: 82.4,
    availability: 99.1,
    color: '#1768a1',
    gradient: ['#1768a1', '#1E81C6'],
  },
  {
    city: 'Johannesburg',
    region: 'Gauteng',
    energy: 4632,
    pr: 78.9,
    availability: 97.8,
    color: '#72BCBF',
    gradient: ['#72BCBF', '#1E81C6'],
  },
  {
    city: 'Durban',
    region: 'KwaZulu-Natal',
    energy: 7412,
    pr: 80.2,
    availability: 98.5,
    color: '#f97316',
    gradient: ['#f97316', '#f59e0b'],
  },
];

// Generate realistic solar irradiance curve data
function generateIrradianceData(peakMultiplier: number): number[] {
  const hours = Array.from({ length: 28 }, (_, i) => i); // 06:00 to 19:30 in 30min intervals
  return hours.map((h) => {
    const normalised = h / 27;
    const bell = Math.sin(normalised * Math.PI);
    const noise = (Math.random() - 0.5) * 0.06;
    return Math.max(0, Math.round(bell * peakMultiplier * (1 + noise)));
  });
}

const timeLabels = Array.from({ length: 28 }, (_, i) => {
  const totalMins = 6 * 60 + i * 30;
  const h = Math.floor(totalMins / 60).toString().padStart(2, '0');
  const m = (totalMins % 60).toString().padStart(2, '0');
  return `${h}:${m}`;
});

interface ChartCardProps {
  location: (typeof locations)[0];
  index: number;
}

const ChartCard: React.FC<ChartCardProps> = ({ location, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [data] = useState(() => generateIrradianceData(location.energy / 100));

  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: 160,
      sparkline: { enabled: false },
      toolbar: { show: false },
      animations: { enabled: true, speed: 1200 },
      background: 'transparent',
    },
    colors: [location.color],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.02,
        stops: [0, 100],
        colorStops: [
          { offset: 0, color: location.gradient[0], opacity: 0.5 },
          { offset: 100, color: location.gradient[1], opacity: 0.02 },
        ],
      },
    },
    stroke: { curve: 'smooth', width: 2 },
    xaxis: {
      categories: timeLabels,
      tickAmount: 6,
      labels: {
        style: { colors: '#6b7280', fontSize: '10px' },
        rotate: 0,
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: { colors: '#6b7280', fontSize: '10px' },
        formatter: (v) => `${v}`,
      },
    },
    grid: {
      borderColor: 'rgba(255,255,255,0.06)',
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
    },
    dataLabels: { enabled: false },
    tooltip: {
      theme: 'dark',
      x: { show: true },
      y: { formatter: (v) => `${v} kWh` },
    },
    markers: { size: 0, hover: { size: 4 } },
  };

  const series = [{ name: 'Energy Yield (kWh)', data }];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300"
    >
      {/* Card header */}
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-lg">{location.city}</h3>
            <p className="text-gray-500 text-xs mt-0.5">{location.region} · Today</p>
          </div>
          <div
            className="text-right"
            style={{ color: location.color }}
          >
            <div className="text-2xl font-black">{location.energy.toLocaleString()}</div>
            <div className="text-xs text-gray-500">kWh</div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="px-2 py-1">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={150}
        />
      </div>

      {/* KPI strip */}
      <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10">
        <div className="px-4 py-3 text-center">
          <div className="text-white font-bold">{location.pr}%</div>
          <div className="text-gray-500 text-xs uppercase tracking-wider mt-0.5">Performance Ratio</div>
        </div>
        <div className="px-4 py-3 text-center">
          <div className="text-white font-bold">{location.availability}%</div>
          <div className="text-gray-500 text-xs uppercase tracking-wider mt-0.5">Plant Availability</div>
        </div>
      </div>
    </motion.div>
  );
};

const IrradianceGraphs: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-[#0a1628] relative overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'url(/assets/Pattern-Grid.png)',
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative container-custom">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#72BCBF]/10 border border-[#72BCBF]/20 text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#72BCBF] animate-pulse" />
            Live Performance Data
          </span>
          <h2 className="section-heading text-white mb-4">
            Real-time Irradiance &{' '}
            <span className="gradient-text">Energy Yield</span>
          </h2>
          <p className="section-subheading mx-auto text-gray-400">
            SOLTRAK tracks solar irradiance and energy generation simultaneously across your entire portfolio, giving you instant visibility into performance deviations.
          </p>
          {/* <p className="mt-3 text-gray-600 text-xs">
            Data updates every 5 seconds · Numbers are illustrative
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <ChartCard key={`${location.city}-${tick}`} location={location} index={index} />
          ))}
        </div>

        {/* Bottom metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 grid grid-cols-3 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6"
        >
          {[
            { label: 'Total Portfolio Energy', value: '20,613 kWh', sub: 'Across 3 regions today' },
            { label: 'Fleet Avg Performance Ratio', value: '80.5%', sub: 'Within target range' },
            { label: 'Fleet Availability', value: '98.5%', sub: 'All assets operational' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-black text-white">{item.value}</div>
              <div className="text-sm text-gray-400 font-semibold mt-1">{item.label}</div>
              <div className="text-xs text-gray-600 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IrradianceGraphs;
