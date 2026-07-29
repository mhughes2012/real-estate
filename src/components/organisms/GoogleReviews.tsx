import React from 'react';
import { GoogleReviewCard } from '../molecules/GoogleReviewCard';
import { ExternalLink } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Donna Maksymec',
    content: 'Our house sale from start to Sold was extraordinary. Sheryl provided us with guidance that made the house presentable and we had a quick sale. So pleased with her service. Would strongly recommend her as your realtor.',
    date: '2022'
  },
  {
    name: 'Devon Lyons',
    content: 'Sheryl did all the staging, had her photographer come take the photos, and had it posted up on MLS and her website, and this all happened in 3 days! Within 5 days of listing my house was sold and for the value I desired!',
    date: '2017'
  },
  {
    name: 'Arica Peterson',
    content: 'I cannot express enough how valuable they have been with the sale of our home. We live out of the province and were highly dependent on them. They did an amazing job staging and did a fantastic job to ensure us the best possible price.',
    date: '2016'
  }
];

export const GoogleReviews = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-navy font-bold uppercase text-sm tracking-widest">Client Reviews</h3>
        <a 
          href="https://www.google.com/maps/place/Sheryl+Thompson,+Calgary+Realtor/@51.103668,-114.1657508,601m/data=!3m2!1e3!4b1!4m6!3m5!1s0x53716f2e94674701:0x4947ef12fe369366!8m2!3d51.103668!4d-114.1657508!16s%2Fg%2F11b7rxl9t_?entry=ttu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gold hover:text-navy transition-colors text-[10px] font-bold uppercase tracking-widest flex items-center gap-1"
        >
          View all on Google <ExternalLink size={10} />
        </a>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {REVIEWS.map((review, index) => (
          <GoogleReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};
