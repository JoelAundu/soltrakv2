import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

// Particle field component
function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const count = 2000;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.03;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#72BCBF"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });
      gsap.from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.5,
      });
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.7,
      });
      gsap.from(mockupRef.current, {
        x: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.4,
      });

      // Floating animation for mockup
      gsap.to(mockupRef.current, {
        y: -15,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex flex-col overflow-hidden bg-[#0a1628]">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(23,104,161,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(23,104,161,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1768a1]/20 via-transparent to-transparent"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(23,104,161,0.15) 0%, transparent 70%)' }}
      />

      {/* Three.js particle field */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ParticleField />
        </Canvas>
      </div>

      <div className="relative container-custom w-full pt-24 pb-0">
        {/* Top: text content */}
        <div className="flex flex-col items-start pt-12 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1768a1]/20 border border-[#1768a1]/30 text-[#72BCBF] text-xs font-semibold uppercase tracking-widest rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#72BCBF] animate-pulse" />
              Live Performance Monitoring
            </span>
          </motion.div>

          <h1
            ref={headingRef}
            className="text-4xl tablet:text-5xl desktop:text-6xl font-black text-white leading-[1.05] tracking-tight max-w-3xl"
          >
            TRACK PERFORMANCE
            <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #1E81C6, #72BCBF)' }}>
              WITH PRECISION
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 text-lg tablet:text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            Africa's leading solar asset performance monitoring platform. Independent verification, real-time visibility, and investor-grade reporting, all in one place.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/getting-started"
              className="group flex items-center gap-2 px-7 py-3.5 bg-[#1768a1] text-white font-semibold rounded-xl hover:bg-[#1E81C6] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1768a1]/30"
            >
              Get Started
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('expandContact'))}
              className="group flex items-center gap-2 px-7 py-3.5 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <FiPlay className="w-3 h-3 ml-0.5" />
              </span>
              Request Demo
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { value: '157 MWp+', label: 'Assets Tracked' },
              { value: '2,200+', label: 'Assessments' },
              { value: '>R2M', label: 'Claims Recovered' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width dashboard mockup below the text */}
      <div ref={mockupRef} className="relative w-full mt-4 px-4 tablet:px-8 desktop:px-16">
        {/* Glow behind image */}
        <div
          className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(23,104,161,0.35) 0%, transparent 70%)' }}
        />
        <img
          src="/assets/Platform-Mockup-3.png"
          alt="SOLTRAK Platform Dashboard"
          className="relative w-full"
          style={{
            filter: 'drop-shadow(0 -10px 60px rgba(23,104,161,0.4))',
            transform: 'perspective(2000px) rotateX(4deg)',
            transformOrigin: 'top center',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
