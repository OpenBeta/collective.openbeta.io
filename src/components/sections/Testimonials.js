import React from 'react';

export default function Testimonials() {
  return (
    <section className="flex bg-openbeta-dark-turquoise">
      <div className='max-w-7xl mx-auto flex xs:flex-col md:flex-row justify-between xs:pb-12 md:p-0 xs:mt-20 md:my-24 text-openbeta-white'>
        {quotes.map((entry, index) => (
          <Card key={index} {...entry} />
        ))}
      </div>
    </section>
  );
}

const Card = ({ text, author }) => (
  <div className="md:w-5/12 xs:px-8 xs:pb-8 md:p-0">
    <q className="text-testimonials h-7 font-normal leading-8 font-open-sans">{text}</q>
    <div className="flex flex-col mt-12 items-end">
      <div className="text-2xl">— {author}</div>
    </div>
  </div>
);

const quotes = [
  {
    text: 'Just as climbing should be open to everyone, the knowledge of these great experiences should be open to anyone willing to learn.',
    author: 'Brody Lowe'
  },
  {
    text: 'OpenBeta summed up my thoughts extremely well. I believe the data that was curated by the community should stay open to community use.',
    author: 'Raymond Fiscus'
  },
];
