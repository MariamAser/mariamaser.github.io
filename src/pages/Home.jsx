// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import LightPillar from "../components/LightPillar.jsx";

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-xl">
    <span className="inline-block h-4 w-4 rounded-full bg-white/20" />
    {children}
  </span>
);

const PrimaryBtn = ({ to, children }) => (
  <Link
    to={to}
    className="
      inline-flex items-center justify-center
      rounded-full
      bg-white px-7 py-3
      text-sm font-extrabold text-black
      shadow-[0_18px_60px_rgba(255,255,255,0.15)]
      transition hover:-translate-y-0.5
    "
  >
    {children}
  </Link>
);

const SecondaryBtn = ({ to, children }) => (
  <Link
    to={to}
    className="
      inline-flex items-center justify-center
      rounded-full
      border border-white/15
      bg-white/5 px-7 py-3
      text-sm font-extrabold text-white/90
      backdrop-blur-xl
      transition hover:-translate-y-0.5 hover:bg-white/10
    "
  >
    {children}
  </Link>
);

export default function Home() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center text-center">

      {/* FULL SCREEN LIGHT PILLAR BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl px-6">

        <h1 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-6xl">
          Hi, 
          <br className="hidden sm:block" />
          I'm Mariam!
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
          UofT Computer Engineering Student.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
          Cloud / DevOps / SRE 
        </p>
        

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <PrimaryBtn to="/projects">Get Started</PrimaryBtn>
          <SecondaryBtn to="/experience">Learn More</SecondaryBtn>
        </div>

      </div>
    </div>
  );
}
