
import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">Visit Poet's Corner</h2>
            <p className="text-lg text-slate-600 mb-10">We are conveniently located in the heart of Pleasant Hill. Drop by or give us a call to book your appointment.</p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Address</h4>
                  <p className="text-slate-600">123 Poet's Corner Ln, Pleasant Hill, CA 94523</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Phone</h4>
                  <p className="text-slate-600">(925) 555-0123</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-100">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Hours</h4>
                  <p className="text-slate-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-slate-600">Sat: 9:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl -mr-32 -mt-32"></div>
            <h3 className="text-3xl font-display font-bold mb-8 relative z-10">Instant Booking</h3>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Phone</label>
                  <input type="tel" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Vehicle Make/Model</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="2022 Toyota Tacoma" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Service Needed</label>
                <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none">
                  <option>Oil Change</option>
                  <option>Brake Service</option>
                  <option>Engine Diagnostic</option>
                  <option>Tires & Alignment</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20">
                Confirm Appointment Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
