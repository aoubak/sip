import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// ServiceCard.jsx (component)
export default function ServiceCard({ icon, title, description, isDarkMode = false }) {
  return (
    <div className={`service-card group relative overflow-hidden p-5 flex flex-row justify-between rounded-xl border shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5
      ${isDarkMode 
        ? 'bg-slate-800/70 text-slate-200 border-slate-700 hover:bg-slate-800'
        : 'bg-white text-slate-900 border-slate-200/70'
      }
    `}>
      <div className="flex items-start space-x-4">
        <div className="relative">
          <div className={`absolute inset-0 rounded-full blur-md
            ${isDarkMode 
              ? 'bg-gradient-to-br from-sky-500/10 to-indigo-500/10'
              : 'bg-gradient-to-br from-sky-500/20 to-indigo-500/20'
            }
          `} aria-hidden="true" />
          <div className={`relative w-10 h-10 flex items-center justify-center rounded-full ring-1 bg-gradient-to-br from-sky-600 to-indigo-600 text-white
            ${isDarkMode ? 'ring-slate-600' : 'ring-sky-200'}
          `}>
            {icon ? icon : <MoveUpRight className="h-5 w-5" />}
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold mb-1">{title}</h3>
          <p className="text-sm leading-relaxed max-w-prose">{description}</p>
        </div>
      </div>

      <div className="ml-3 shrink-0">
        <Link to="/services" 
          aria-label={`Learn more about ${title}`}
          className={`inline-flex items-center justify-center h-9 w-9 rounded-full border transition-colors duration-200
            ${isDarkMode 
              ? 'border-slate-600 text-slate-300 hover:text-white hover:bg-sky-600 hover:border-sky-600'
              : 'border-slate-200 text-slate-700 hover:text-white hover:bg-sky-600 hover:border-sky-600'
            }
          `}
        >
          <MoveUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className={`pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-80
        ${isDarkMode ? 'bg-slate-600/20' : 'bg-sky-100'}
      `} />
    </div>
  );
}
