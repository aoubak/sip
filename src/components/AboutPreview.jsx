import React from "react";
import { images } from "../assets/images";
import { Goal, Telescope } from "lucide-react";

export default function AboutPreview() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-white to-sky-50/40 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="relative">
            <div className="pointer-events-none absolute -top-6 -left-6 h-40 w-40 rounded-full bg-sky-200/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-200/60">
              <img className="w-full h-full object-cover" src={images.heroImg} alt="" />
            </div>
          </div>

          <div className="md:w-full">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-medium text-sky-800 shadow-sm backdrop-blur">
              About Us
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="bg-sky-100 border text-[12px] border-sky-300 text-sky-900 rounded-full px-3 py-1">
                Somali Insight Consultancy (SIP)
              </span>
              <span className="text-[12px] text-slate-600">
                Founded: <span className="font-bold text-sky-700">2015</span>
              </span>
            </div>

            <hr className="my-5 border-sky-200/70" />

            <div className="mt-4 mb-4 bg-sky-700/5 p-4 rounded-xl ring-1 ring-sky-100">
              <span className="text-sm text-sky-700 font-bold">Focus</span>
              <p className="mt-1 text-sm text-neutral-700 leading-relaxed">
                Building safer and sustainable communities through environmental
                management, disaster risk reduction, social development, and
                research.
              </p>
            </div>

            <div className="mt-4 mb-4 flex items-start gap-4 bg-sky-700/5 p-4 rounded-xl ring-1 ring-sky-100">
              <div className="shrink-0">
                <Goal size={55} className="text-sky-900" />
              </div>
              <div>
                <span className="text-sm text-sky-700 font-bold">Mission</span>
                <p className="mt-1 text-sm text-neutral-700 leading-relaxed">
                  Building safer and sustainable communities through
                  environmental management, disaster risk reduction, social
                  development, and research.
                </p>
              </div>
            </div>

            <div className="mt-4 mb-4 flex items-start gap-4 bg-sky-700/5 p-4 rounded-xl ring-1 ring-sky-100">
              <div className="shrink-0">
                <Telescope size={55} className="text-sky-900" />
              </div>
              <div>
                <span className="text-sm text-sky-700 font-bold">Mission</span>
                <p className="mt-1 text-sm text-neutral-700 leading-relaxed">
                  Become a leading consultancy firm in environmental and social compliance monitoring, environmental science, and agricultural development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
