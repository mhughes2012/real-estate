import React from 'react';
import { Star, Quote } from 'lucide-react';

interface GoogleReviewCardProps {
  name: string;
  content: string;
  date?: string;
}

export const GoogleReviewCard = ({ name, content, date }: GoogleReviewCardProps) => {
  return (
    <div className="bg-white p-6 border border-white-muted shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="text-gold fill-gold" />
        ))}
        <span className="ml-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">Verified Review</span>
      </div>
      
      <div className="relative">
        <Quote className="text-gold/10 absolute -top-2 -left-2" size={32} />
        <p className="text-sm text-gray-600 leading-relaxed mb-4 relative z-10 italic">
          &ldquo;{content}&rdquo;
        </p>
      </div>
      
      <div className="flex justify-between items-center border-t border-white-muted pt-4">
        <span className="font-bold text-navy text-xs uppercase tracking-tight">{name}</span>
        {date && <span className="text-[10px] text-gray-400">{date}</span>}
      </div>
    </div>
  );
};
