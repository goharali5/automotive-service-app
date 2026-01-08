
import React from 'react';
import { Fuel, ShieldAlert, Cpu, Thermometer, Wind, Settings2 } from 'lucide-react';

const services = [
  {
    title: 'Precision Oil Change',
    description: 'High-performance synthetic and conventional oil services including filter replacement and 21-point safety check.',
    icon: <Fuel size={32} />,
    color: 'blue'
  },
  {
    title: 'Brake Specialist',
    description: 'Full pad, rotor, and hydraulic system inspections. We only use premium, long-lasting components.',
    icon: <ShieldAlert size={32} />,
    color: 'red'
  },
  {
    title: 'Engine Diagnostics',
    description: 'Advanced computer scanning for check engine lights and performance issues using state-of-the-art tools.',
    icon: <Cpu size={32} />,
    color: 'indigo'
  },
  {
    title: 'Climate Control',
    description: 'A/C recharge and heating system repairs to keep you comfortable in every California season.',
    icon: <Wind size={32} />,
    color: 'cyan'
  },
  {
    title: 'Cooling Systems',
    description: 'Radiator flushes, water pumps, and thermostat replacements to prevent engine overheating.',
    icon: <Thermometer size={32} />,
    color: 'orange'
  },
  {
    title: 'Scheduled Maintenance',
    description: 'Factory-recommended 30k, 60k, and 90k mile services to maintain your vehicle warranty.',
    icon: <Settings2 size={32} />,
    color: 'emerald'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">World-Class Services for Every Drive.</h3>
            <p className="text-lg text-slate-600">From routine maintenance to complex engine work, our ASE-certified mechanics treat your car like their own.</p>
          </div>
          <a href="#contact" className="text-slate-900 font-bold border-b-2 border-blue-500 pb-1 hover:text-blue-500 transition-colors">
            View All Services
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-${service.color}-600 bg-${service.color}-50 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
              <button className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
                Learn More
                <div className="w-8 h-px bg-slate-300 group-hover:w-12 group-hover:bg-blue-600 transition-all"></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
