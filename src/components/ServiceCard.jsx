import { MoveUpRight } from "lucide-react";

// ServiceCard.jsx (component)
export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card group relative overflow-hidden p-5 bg-white flex flex-row justify-between rounded-xl border border-slate-200/70 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/20 to-indigo-500/20 blur-md" aria-hidden="true" />
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full ring-1 ring-sky-200 bg-gradient-to-br from-sky-600 to-indigo-600 text-white">
            {icon ? icon : <MoveUpRight className="h-5 w-5" />}
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold mb-1 text-slate-900">{title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-prose">{description}</p>
        </div>
      </div>

      <div className="ml-3 shrink-0">
        <button
          aria-label={`Learn more about ${title}`}
          className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 text-slate-700 hover:text-white hover:bg-sky-600 hover:border-sky-600 transition-colors duration-200"
        >
          <MoveUpRight className="h-4 w-4" />
        </button>
      </div>

      <div className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-sky-100 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
    </div>
  );
}
