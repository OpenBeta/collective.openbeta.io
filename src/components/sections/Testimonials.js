import React from 'react';

export default function Testimonials() {
  return (
    <section className="flex bg-openbeta-dark-turquoise">
      <div className='max-w-1240 w-1240 px-2 mx-auto my-24 layout-center layout-wide flex flex-col md:flex-row md:items-start text-openbeta-white justify-between'>
        {quotes.map((entry, index) => (
          <Card key={index} {...entry} />
        ))}
      </div>
    </section>
  );
}

const Card = ({ text, author, title }) => (
  <div className="w-5/12">
    <q className="text-testimonials h-7 font-normal leading-8 font-open-sans">{text}</q>
    <div className="flex flex-col mt-12 items-end">
      <div className="text-2xl">— {author}</div>
      <div className="text-2xl">{title}</div>
    </div>
  </div>
);

const quotes = [
  {
    text: 'Just as climbing should be open to everyone. The knowledge of these great experiences should be open to anyone willing to learn.',
    author: 'Brody Lowe',
    title: 'title'
  },
  {
    text: 'OpenBeta summed up my thoughts extremely well. I believe the data that was curated by the community should stay open to community use.',
    author: 'Raymond Fiscus',
    title: 'title'
  },
];
