// Services.jsx (page)
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import { Users, Snowflake, Sprout, MoveUpRight, HeartPlus, BadgePercent, Activity } from "lucide-react"; 




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
  return (
    <section id="services" className="relative bg-sky-800 text-white overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center rounded-full">
          <span className="bg-sky-200 border text-sm border-sky-800 text-sky-800 rounded-full px-4 py-1">Services</span>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl text-white font-bold">Core Services</h1>
          <p className="text-neutral-200 max-w-2xl mx-auto mt-2">We provide professional consultancy in environmental, social, and research sectors across Somalia.</p>
        </div>

        {servicesData.map((section, index) => (
          <div key={index} className="service-category">
            <h2 className="text-sm mb-4 mt-6 opacity-95 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1">{section.category}</h2>
            <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {section.services.map((service, i) => (
                <ServiceCard key={i} {...service} icon={service.icon ? <service.icon /> : null} />
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-white/80 text-white px-6 py-3 rounded-md hover:bg-white hover:text-sky-900 transition duration-200"
          >
            View more
            <MoveUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
