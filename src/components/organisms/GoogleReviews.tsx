import React from 'react';
import { GoogleReviewCard } from '../molecules/GoogleReviewCard';
import { ExternalLink } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Raelyn Bauer',
    content: 'This review is a little late (December purchase) but worth sending it!  We had a fantastic experience working with Sheryl. From start to finish, she was incredibly attentive and provided excellent customer service every step of the way. We know we were very picky buyers, but she remained patient, supportive, and fully committed to helping us find the right home.\n' +
        'When we finally found an almost perfect spot, she helped us through the "can\'t live without/can live without" process and was always available to make sure our questions were answered in a very timely manner. She didn’t hesitate to reach out to the seller’s realtor to get the information we needed several times, which gave us confidence in our decisions throughout the process.\n' +
        'Her responsiveness, professionalism, patience and market knowledge truly sets her apart. We would highly recommend Sheryl to anyone looking for a reliable and amazing realtor!',
    date: '2026'
  },
  {
    name: 'Cynthia Ruiter',
    content: 'Our experience with Sheryl was excellent. She listed & sold our home in less then 30 days, with occupancy in just over 30 days. Sheryl virtually stage our home beautifully. I would recommend her whole heartedly, as Sheryl done a wonderful job, & answered all our questions & relieved all our anxieties in the process of selling our home. We can not thank her enough for her professionalism & kindness.\n' +
        'Cynthia & Philip Ruiter',
    date: '2026'
  },
  {
    name: 'J. Kubek',
    content: 'Before listing our home, we sat down with three different real-estate agents to see what they all had to offer. They were all great, however Sheryl stood out and had the best marketing strategy plan by far. That\'s a HUGE part in selling. Your listing needs to stick out amongst all the other comparables for you to get the best out of it, and she delivered. Going in we figured to receive an offer in 3-4 weeks, all being that the market was now trending towards the buyers side, but it only took us a week!\n' +
        'I can\'t express enough on how grateful we were to have met Sheryl and have her represent us. She\'s was always very translucent, informative, and she wants only the best outcome for her clients. Very, very highly recommended.',
    date: '2026'
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
