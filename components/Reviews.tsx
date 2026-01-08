
import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    author: "James T.",
    content: "The best shop in Pleasant Hill. They don't try to upsell you on things you don't need. Honest, fair, and fast.",
    date: "2 months ago",
    rating: 5
  },
  {
    author: "Sarah M.",
    content: "Found Poet's Corner through Yelp and I'm so glad I did. They explained everything clearly and got my car back on the road in a day.",
    date: "1 month ago",
    rating: 5
  },
  {
    author: "Robert K.",
    content: "Professionalism at its peak. Their diagnostic tool was spot on. Highly recommended for any European car owners.",
    date: "3 weeks ago",
    rating: 5
  }
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">What Our Neighbors Say</h2>
          <div className="flex justify-center items-center gap-2 text-amber-400 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <p className="text-slate-600 font-medium">Ranked #1 for Customer Satisfaction in Pleasant Hill</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <Quote className="absolute top-6 right-8 text-slate-100" size={48} />
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                  {review.author[0]}
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">{review.author}</h5>
                  <p className="text-sm text-slate-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://www.yelp.com/biz/poets-corner-automotive-pleasant-hill" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-[#d32323] text-white rounded-full font-bold hover:bg-[#b01e1e] transition-all">
            Read More on Yelp
          </a>
        </div>
      </div>
    </section>
  );
};
