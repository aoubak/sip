// Services.jsx (page)
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import { Users, Snowflake, Sprout, MoveUpRight, HeartPlus, BadgePercent, Activity } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext"; 




const servicesData  = [
  {
    category: "Environmental Services",
    services: [
      {
        title: "Environmental Impact Assessment",
        description: "Identify and assess environmental impacts to ensure sustainable project outcomes.",
        icon: Sprout
      },
      {
        title: "Climate Risk Assessment",
        description: "Analyze risks and develop adaptation strategies for climate resilience.",
        icon: Snowflake
      }
    ]
  },
  {
    category: "Social & Community Services",
    services: [
      {
        title: "Community Consultation",
        description: "Engage stakeholders for inclusive and transparent project planning.",
        icon: Users
      },
      {
        title: "Social & Resettlement Studies",
        description: "Assessing impacts of land use and resource changes on local communities.",
        icon: HeartPlus
      }
    ]
  },
   {
    category: "Research & Development",
    services: [
      {
        title: "Socio-Economic Studies",
        description: "Baseline surveys, impact evaluations, and livelihood security assessments.",
        icon: BadgePercent
      },
      {
        title: "Monitoring & Evaluation (M&E)",
        description: "Designing and implementing frameworks for project performance tracking.",
        icon: Activity 
      }
    ]
  }
];

export default function ServicesPreview() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <section id="services" className={`relative transition-all duration-300 overflow-hidden ${
      isDarkMode 
        ? 'bg-slate-800 text-white' 
        : 'bg-sky-800 text-white'
    }`}>
      <div className={`pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl
        ${isDarkMode ? 'bg-sky-500/10' : 'bg-sky-400/20'}
      `} />
      <div className={`pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl
        ${isDarkMode ? 'bg-indigo-500/10' : 'bg-indigo-400/20'}
      `} />

      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center rounded-full">
          <span className={`border text-sm rounded-full px-4 py-1
            ${isDarkMode 
              ? 'bg-slate-700/70 border-slate-600 text-slate-200'
              : 'bg-sky-200 border-sky-800 text-sky-800'
            }
          `}>Services</span>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl text-white font-bold">Core Services</h1>
          <p className="text-neutral-200 max-w-2xl mx-auto mt-2">We provide professional consultancy in environmental, social, and research sectors across Somalia.</p>
        </div>

        {servicesData.map((section, index) => (
          <div key={index} className="service-category">
            <h2 className={`text-sm mb-4 mt-6 opacity-95 inline-flex items-center gap-2 rounded-full border px-3 py-1
              ${isDarkMode 
                ? 'border-slate-600/50 bg-slate-700/50 text-slate-200'
                : 'border-white/20 bg-white/10 text-white'
              }
            `}>{section.category}</h2>
            <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {section.services.map((service, i) => (
                <ServiceCard key={i} {...service} icon={service.icon ? <service.icon /> : null} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-center mt-12">
          <Link
            to="/services"
            className={`inline-flex items-center gap-2 border px-6 py-3 rounded-md transition duration-200
              ${isDarkMode 
                ? 'border-slate-600/80 text-slate-200 hover:bg-slate-700 hover:text-white'
                : 'border-white/80 text-white hover:bg-white hover:text-sky-900'
              }
            `}
          >
            View more
            <MoveUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
