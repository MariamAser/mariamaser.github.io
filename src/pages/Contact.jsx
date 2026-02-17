// src/pages/Contact.jsx
import React, { useState } from "react";

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur">
    {children}
  </span>
);

const GlassBtn = ({ type = "button", href, onClick, children, variant = "primary" }) => {
  const base =
    "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-bold backdrop-blur-xl transition hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "border-white/15 bg-white/10 text-white hover:bg-white/15"
      : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
        {children} <span className="ml-2">↗</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
};

const Input = (props) => (
  <input
    {...props}
    className={`w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none backdrop-blur
    focus:border-white/25 focus:bg-black/35 ${props.className || ""}`}
  />
);

const Textarea = (props) => (
  <textarea
    {...props}
    className={`w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none backdrop-blur
    focus:border-white/25 focus:bg-black/35 ${props.className || ""}`}
  />
);

export default function Contact() {
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Front-end only: just show a success message.
    // You can wire this to an email service later (Formspree, Resend, etc.)
    setStatus({ type: "success", msg: "Message ready — you can copy it or email me directly." });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="pt-6 sm:pt-10">

        <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
          Let’s Connect!
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          If you want to collaborate, talk cloud/infrastructure, or just say hi, 
          feel free to reach out!
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        {/* Left: Info */}
        <div className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            {/* subtle glow */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#FF9FFC]/10 blur-3xl" />
              <div className="absolute -right-32 -bottom-32 h-80 w-80 rounded-full bg-[#5227FF]/10 blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="text-xl font-bold text-white">Quick Links</h2>
              <p className="mt-2 text-sm text-white/65">
                Best way to reach me is email, but can also find me here:
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {/* Replace these with your real links */}
                <GlassBtn href="mailto:mariam.ata.aser@gmail.com" variant="primary">
                  Email
                </GlassBtn>
                <GlassBtn href="https://www.linkedin.com/in/mariamfaisalaser/" variant="secondary">
                  LinkedIn
                </GlassBtn>
                {/*<GlassBtn href="https://github.com/" variant="secondary">
                  GitHub
                </GlassBtn>*/}
              </div>

              <div className="mt-6 text-xs text-white/45">
                I typically responsed within 24 hrs!
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
          >
            {/* subtle glow */}
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#5227FF]/10 blur-3xl" />
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#FF9FFC]/10 blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="text-xl font-bold text-white">Send a message</h2>
              <p className="mt-2 text-sm text-white/65">
                This form is front-end only right now. It will format your message nicely.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-white/60">
                    Name
                  </label>
                  <Input placeholder="Your name" required />
                </div>

                <div>
                  <label className="text-xs font-semibold text-white/60">
                    Email
                  </label>
                  <Input type="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold text-white/60">
                  Subject
                </label>
                <Input placeholder="What’s this about?" required />
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold text-white/60">
                  Message
                </label>
                <Textarea rows={7} placeholder="Write your message…" required />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <GlassBtn type="submit" variant="primary">
                  Submit
                </GlassBtn>
                <GlassBtn
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    navigator.clipboard?.writeText(
                      "Hi Mariam,\n\nI wanted to reach out about...\n\nBest,\n"
                    );
                    setStatus({ type: "success", msg: "Template copied to clipboard." });
                  }}
                >
                  Copy message template
                </GlassBtn>
              </div>

              {status.type === "success" && (
                <div className="mt-4 rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/70">
                  {status.msg}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}
