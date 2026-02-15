/*import React from "react";
import { Card, ButtonLink, Pill } from "../components/UI.jsx";

export default function Resume() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-black tracking-tight">Resume</h1>
        <p className="text-slate-700">
          Please check out my resume! To contact me, head to the Contact page.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Card className="p-6">
          <h2 className="text-lg font-extrabold">Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <ButtonLink href="/resume.pdf" variant="primary">Download Resume PDF</ButtonLink>
            <ButtonLink href="https://www.linkedin.com/in/mariamfaisalaser/" variant="secondary">LinkedIn</ButtonLink>
            <ButtonLink href="https://github.com/" variant="secondary">GitHub</ButtonLink>
          </div>
        </Card>

        <Card className="p-3 sm:p-4">
          <div className="overflow-hidden rounded-xl2 bg-white">
            <iframe
              title="Resume PDF"
              src="/resume.pdf"
              className="h-[70vh] w-full"
            />
          </div>
          <p className="mt-3 text-xs text-slate-600">
            If the PDF doesn’t render, the download button still works!
          </p>
        </Card>
      </div>
    </div>
  );
}
*/

// src/pages/Resume.jsx
import React from "react";

const GlassBtn = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/10"
  >
    {children} <span className="ml-2">↗</span>
  </a>
);

export default function Resume() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="pt-6 sm:pt-10">

        <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
          Resume
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          A detailed overview of my technical experience, projects, and
          leadership involvement.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        {/* Replace with your actual resume link */}
        <GlassBtn href={`${import.meta.env.BASE_URL}resume.pdf`}>
          Download PDF
        </GlassBtn>

        <GlassBtn href="https://www.linkedin.com/in/mariamfaisalaser/">
          LinkedIn
        </GlassBtn>
      </div>

      {/* Resume Preview Section */}
      <div className="mt-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
          {/* subtle glow */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#FF9FFC]/10 blur-3xl" />
            <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-[#5227FF]/10 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-xl font-bold text-white">
              Resume Preview
            </h2>

            <p className="mt-2 text-sm text-white/60">
              Preview below or download the full version.
            </p>

            {/* Placeholder box — replace with embed if you want */}
            <div className="mt-6 flex justify-center">
              <img
                src="<img src={`${import.meta.env.BASE_URL}resume.png"
                alt="Resume"
                className="w-full max-w-4xl h-auto rounded-xl border border-white/10"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-10 text-sm text-white/50">
        References available upon request.
      </div>
    </div>
  );
}
