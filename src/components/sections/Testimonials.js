import React from 'react';

export default function Testimonials() {
  return (
    <section className="flex bg-openbeta-dark-turquoise">
      <div className='max-w-1240 w-1240 px-2 mx-auto my-24 layout-center layout-wide flex flex-col md:flex-row md:items-start text-openbeta-white justify-between'>
        {quotes.map((entry) => (
          <Card {...entry} />
        ))}
      </div>
    </section>
  );
}

const Card = ({ text, author, title }) => (
  <div className="w-5/12">
    <div className="text-lg font-semibold">{text}</div>
    <div className="flex flex-col mt-16 items-end">
      <div className="">— {author}</div>
      <div className="">— {title}</div>
    </div>
  </div>
);

const quotes = [
  {
    text: 'Just as climbing should be open to everyone. The knowledge of these great experiences should be open to anyone willing to learn.',
    author: 'Brody Lowe',
    title: 'FILL THIS IN'
  },
  {
    text: 'OpenBeta summed up my thoughts extremely well. I believe the data that was curated by the community should stay open to community use.',
    author: 'Raymond Fiscus',
    title: 'FILL THIS IN'
  },
];
