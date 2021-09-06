import React from 'react';

import Quote from '../../assets/icons/quote.svg';

export default function Testimonials() {
  return (
    <section className="my-16 layout-center layout-wide flex flex-col md:flex-row md:items-start gap-x-16 gap-y-8">
      <div>
        <Quote className="w-12 h-12 fill-current text-gray-400" />
      </div>
      {quotes.map((entry) => (
        <Card {...entry} />
      ))}
    </section>
  );
}

const Card = ({ text, author }) => (
  <div>
    <div className="text-lg font-semibold">{text}</div>
    <div className="mt-2">— {author}</div>
  </div>
);

const quotes = [
  {
    text: 'Just as climbing should be open to everyone. The knowledge of these great experiences should be open to anyone willing to learn.',
    author: 'Brody Lowe',
  },
  {
    text: 'OpenBeta summed up my thoughts extremely well. I believe the data that was curated by the community should stay open to community use.',
    author: 'Raymond Fiscus',
  },
];
