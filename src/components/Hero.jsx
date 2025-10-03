import React, { useState, useEffect } from "react";
import { images } from "../assets/images";
import { useDarkMode } from "../contexts/DarkModeContext";
import { ArrowRight, Play, Shield, Zap, Users } from "lucide-react";

export default function Hero() {
  const { isDarkMode } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={`relative min-h-screen overflow-hidden transition-all duration-700 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-sky-50 via-white to-indigo-50'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Backlight Effect */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              ${isDarkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'} 0%, 
              transparent 70%)`,
            filter: 'blur(40px)',
            transition: 'all 0.1s ease-out'
          }}
        />
        
        {/* Floating Orbs */}
        <div className={`absolute top-20 left-20 w-32 h-32 rounded-full opacity-30 animate-pulse ${
          isDarkMode ? 'bg-blue-500/20' : 'bg-sky-300/30'
        } blur-xl`} />
        <div className={`absolute bottom-20 right-20 w-40 h-40 rounded-full opacity-20 animate-pulse ${
          isDarkMode ? 'bg-indigo-500/20' : 'bg-indigo-300/30'
        } blur-xl`} />
        <div className={`absolute top-1/2 right-1/4 w-24 h-24 rounded-full opacity-25 animate-pulse ${
          isDarkMode ? 'bg-emerald-500/20' : 'bg-emerald-300/30'
        } blur-xl`} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Badge */}
            <div className={`inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              isDarkMode 
                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                : 'bg-sky-100 text-sky-700 border border-sky-200'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                isDarkMode ? 'bg-blue-400' : 'bg-sky-500'
              } animate-pulse`} />
              Empowering resilient communities
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className={`text-4xl sm:text-5xl lg:text-5xl font-bold leading- transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Somali Insight
                <span className="block">Consultancy for safer,</span>
                <span className={`block bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-600 bg-clip-text text-transparent ${
                  isDarkMode ? 'from-blue-400 via-emerald-400 to-blue-500' : ''
                }`}>
                   sustainable futures
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl transition-colors duration-300 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              We partner with NGOs, institutions, and local governments to deliver impact-driven solutions in environmental management, disaster risk reduction, social development, and applied research.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40' 
                  : 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40'
              }`}>
                Book a consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className={`group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                isDarkMode 
                  ? 'border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400' 
                  : 'border-slate-300 text-slate-700 hover:border-sky-500 hover:text-sky-600'
              }`}>
                <Play className="mr-2 h-5 w-5" />
                Watch our story
              </button>
            </div>

            {/* Stats */}
            <div className={`flex items-center gap-6 pt-4 transition-colors duration-300 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-500" />
                <span className="text-sm">40+ projects delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span className="text-sm">20+ trusted partners</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span className="text-sm">Fast delivery</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Card */}
          <div className={`relative transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Main Image Card */}
            <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              isDarkMode 
                ? 'ring-1 ring-slate-700/50' 
                : 'ring-1 ring-slate-200/60'
            }`}>
              <img
                src={images.heroImg}
                alt="Field assessment and community consultation"
                className="h-full w-full object-cover"
                loading="eager"
              />
              
              {/* Overlay with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${
                isDarkMode 
                  ? 'from-slate-900/60 via-transparent to-transparent' 
                  : 'from-white/60 via-transparent to-transparent'
              }`} />
            </div>

            {/* Floating Stats Card */}
            <div className={`absolute -bottom-6 left-6 right-auto md:left-8 md:-bottom-8 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/90 border border-slate-700/50' 
                : 'bg-white/90 border border-slate-200'
            } rounded-2xl px-6 py-4 shadow-2xl backdrop-blur-xl`}>
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl font-bold text-lg ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white' 
                    : 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white'
                }`}>
                  SIP
                </div>
                <div>
                  <p className={`text-sm font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    40+ projects delivered
                  </p>
                  <p className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Across DRR, environment, and social impact
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Feature Cards */}
            <div className={`absolute -top-6 -right-6 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/90 border border-slate-700/50' 
                : 'bg-white/90 border border-slate-200'
            } rounded-xl px-4 py-3 shadow-xl backdrop-blur-xl`}>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className={`text-xs font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-emerald-400' : 'text-emerald-700'
                }`}>
                  100% Protected
                </span>
              </div>
            </div>

            <div className={`absolute top-1/2 -left-8 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/90 border border-slate-700/50' 
                : 'bg-white/90 border border-slate-200'
            } rounded-xl px-4 py-3 shadow-xl backdrop-blur-xl`}>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse" />
                <span className={`text-xs font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-700'
                }`}>
                  Nayo Bank
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Partners Section */}
        <div className={`mt-20 text-center transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
            isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Featured On
          </p>
          <div className="mt-8 flex items-center justify-center gap-8 opacity-60">
            
            <div className={`h-8 w-8 rounded-lg transition-colors duration-300 ${
              isDarkMode ? 'bg-slate-700' : 'bg-slate-200' 
            }`} 
          img src={images.partner1}

            />
            
            <div className={`h-8 w-8 rounded-lg transition-colors duration-300 ${
              isDarkMode ? 'bg-slate-700' : 'bg-slate-200'
            }`} />
            <div className={`h-8 w-8 rounded-lg transition-colors duration-300 ${
              isDarkMode ? 'bg-slate-700' : 'bg-slate-200'
            }`} />
            <div className={`h-8 w-8 rounded-lg transition-colors duration-300 ${
              isDarkMode ? 'bg-slate-700' : 'bg-slate-200'
            }`} />
            <div className={`h-8 w-8 rounded-lg transition-colors duration-300 ${
              isDarkMode ? 'bg-slate-700' : 'bg-slate-200'
            }`} />
            <div className={`h-8 w-8 rounded-lg transition-colors duration-300 ${
              isDarkMode ? 'bg-slate-700' : 'bg-slate-200'
            }`} />
          </div>
        </div>
      </div>
    </section>
  );
}
