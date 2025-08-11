import React from "react";
import { images } from "../assets/images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-medium text-sky-800 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
              Empowering resilient communities
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading text-slate-900">
              Somali Insight Consultancy
              <span className="block bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">for safer, sustainable futures</span>
            </h1>

            <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              We partner with NGOs, institutions, and local governments to deliver impact-driven solutions in environmental management, disaster risk reduction, social development, and applied research.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-sky-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 transition"
              >
                Book a consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-sky-700 font-semibold hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 transition"
              >
                Explore our services
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-xs font-bold ring-2 ring-white">NGO</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold ring-2 ring-white">Gov</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold ring-2 ring-white">Edu</span>
              </div>
              <span className="hidden sm:inline">Trusted by 20+ partners across the region</span>
              <span className="sm:hidden">Trusted by 20+ partners</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-slate-200/60">
              <img
                src={images.heroImg}
                alt="Field assessment and community consultation"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            <div className="absolute -bottom-4 left-4 right-auto md:left-6 md:-bottom-6">
              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 text-white font-bold">SIP</div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">40+ projects delivered</p>
                  <p className="text-xs text-slate-600">Across DRR, environment, and social impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
