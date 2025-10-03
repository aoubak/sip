import React from "react";
import { images } from "../assets/images";
import { Goal, Telescope } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function AboutPreview() {
  const { isDarkMode } = useDarkMode();
  return (
    <section id="about" className={`relative transition-all duration-300 py-16 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-slate-900 to-slate-800' 
        : 'bg-gradient-to-b from-white to-sky-50/40'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="relative">
            <div className="pointer-events-none absolute -top-6 -left-6 h-40 w-40 rounded-full bg-sky-200/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-200/60">
              <img className="w-full h-full object-cover" src={images.heroImg} alt="" />
            </div>
          </div>

          <div className="md:w-full">
            <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-sm backdrop-blur transition-all duration-300 ${
              isDarkMode 
                ? 'border-slate-600 bg-slate-800/70 text-slate-300' 
                : 'border-sky-200 bg-white/70 text-sky-800'
            }`}>
              About Us
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className={`border text-[12px] rounded-full px-3 py-1 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-slate-700 border-slate-600 text-slate-300' 
                  : 'bg-sky-100 border-sky-300 text-sky-900'
              }`}>
                Somali Insight Consultancy (SIP)
              </span>
              <span className={`text-[12px] transition-colors duration-300 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Founded: <span className={`font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-sky-400' : 'text-sky-700'
                }`}>2015</span>
              </span>
            </div>

            <hr className={`my-5 transition-colors duration-300 ${
              isDarkMode ? 'border-slate-600' : 'border-sky-200/70'
            }`} />

            <div className={`mt-4 mb-4 p-4 rounded-xl ring-1 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/50 ring-slate-600' 
                : 'bg-sky-700/5 ring-sky-100'
            }`}>
              <span className={`text-sm font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-sky-400' : 'text-sky-700'
              }`}>Focus</span>
              <p className={`mt-1 text-sm leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-slate-300' : 'text-neutral-700'
              }`}>
                Building safer and sustainable communities through environmental
                management, disaster risk reduction, social development, and
                research.
              </p>
            </div>

            <div className={`mt-4 mb-4 flex items-start gap-4 p-4 rounded-xl ring-1 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/50 ring-slate-600' 
                : 'bg-sky-700/5 ring-sky-100'
            }`}>
              <div className="shrink-0">
                <Goal size={55} className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-sky-400' : 'text-sky-900'
                }`} />
              </div>
              <div>
                <span className={`text-sm font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-sky-400' : 'text-sky-700'
                }`}>Mission</span>
                <p className={`mt-1 text-sm leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-neutral-700'
                }`}>
                  Building safer and sustainable communities through
                  environmental management, disaster risk reduction, social
                  development, and research.
                </p>
              </div>
            </div>

            <div className={`mt-4 mb-4 flex items-start gap-4 p-4 rounded-xl ring-1 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/50 ring-slate-600' 
                : 'bg-sky-700/5 ring-sky-100'
            }`}>
              <div className="shrink-0">
                <Telescope size={55} className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-sky-400' : 'text-sky-900'
                }`} />
              </div>
              <div>
                <span className={`text-sm font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-sky-400' : 'text-sky-700'
                }`}>Vision</span>
                <p className={`mt-1 text-sm leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-neutral-700'
                }`}>
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
