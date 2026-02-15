// src/pages/Personal.jsx
import React from "react";
//import CircularGallery from './CircularGallery'
import ProfileCard from '/src/components/ProfileCard'

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur">
    {children}
  </span>
);
  

export default function Personal() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="pt-6 sm:pt-10">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          
          {/* LEFT SIDE: Text */}
          <div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
             Beyond Engineering
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              I’m a graduating Computer Engineering student at the University of Toronto with experience spanning multi-cloud infrastructure, Security, and full-stack development.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
             But, beyond technical systems, 
             {" "}
              <span className="text-white font-semibold">
                I care deeply about people, leadership, and building meaningful communities.
              </span>{" "}
            </p>
          </div>

          {/* RIGHT SIDE: Profile Card */}
          <div className="flex justify-start lg:justify-end">
            <ProfileCard
              name="Mariam Aser"
              title="Computer Engineer"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl={`${import.meta.env.BASE_URL}avatar.png`}
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
              showIcon
              showBehindGlow
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              customInnerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </div>

        </div>
      </div>


      {/* ================= HOBBIES ================= */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold text-white">Hobbies & Interests</h2>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {/* Reading */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">Reading</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              I enjoy historical non-fiction and immersive storytelling.
              One of my recent favorite reads was{" "}
              <span className="text-white font-semibold">
                Killers of the Flower Moon
              </span>{" "}
              — a powerful exploration of history, justice, and investigative
              persistence.
            </p>
          </div>

          {/* Gardening */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">
              Gardening & Growing Plants
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              I enjoy nurturing plants and watching them grow over time.
              Gardening teaches patience, care, and consistency — values that
              translate surprisingly well into engineering.
            </p>
          </div>

          {/* Family & Friends */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">
              Friends & Family
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Spending quality time with close friends and family keeps me
              grounded and balanced. I value deep conversations and shared
              experiences.
            </p>
          </div>

          {/* Drawing */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">Drawing</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              I enjoy sketching as a creative outlet. It helps me think visually
              and slow down from technical work.
            </p>

            {/* Replace filenames with your actual PNG names */}
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <img
                src={`${import.meta.env.BASE_URL}sketch1.jpg`}
                alt="Sketch 1"
                className="w-full h-auto rounded-lg border border-white/10"
              />
              <img
                src={`${import.meta.env.BASE_URL}sketch2.jpg`}
                alt="Sketch 2"
                className="w-full h-auto rounded-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= COMMUNITY ================= */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white">
          Community & Leadership
        </h2>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">
              Women’s Circle President
            </h3>
            <div className="text-xs font-semibold text-white/55">
              Jan 2022 – July 2024
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Served as President, leading planning and execution of events,
              including the annual Winter Retreat. Focused on building
              intentional community spaces centered around reflection, growth,
              and connection.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">
              Orphan Sponsorship Program
            </h3>
            <div className="text-xs font-semibold text-white/55">
              July 2023 – July 2024
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Participated in initiatives supporting orphan sponsorship and
              community fundraising efforts, contributing to structured,
              long-term support systems.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">
              Muslim Students' Association — Religious Services Director
            </h3>
            <div className="text-xs font-semibold text-white/55">
              July 2022 – July 2023
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Oversaw organization and coordination of religious services and
              logistics, ensuring smooth operations and inclusive access for
              students.
            </p>
          </div>
        </div>
      </div>

      {/* ================= TECH TEAM ================= */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white">
          Technical Team Involvement
        </h2>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-white">
            UofT Robotics Assocaition — Embedded Subsystem Team Member
          </h3>
          <div className="text-xs font-semibold text-white/55">
              September 2023 – December 2023
            </div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Contributed to embedded systems development within the robotics
            team, collaborating on hardware–software integration and subsystem
            reliability.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      
    </div>
  );
}
