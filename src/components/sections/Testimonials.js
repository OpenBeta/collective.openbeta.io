import React from 'react';

export default function Testimonials() {
  return (
    <section className="bg-openbeta-dark-turquoise py-16 px-8">
        <div className='flex flex-wrap text-openbeta-white gap-8 justify-center'>
          {quotes.map((entry, index) => (
            <Card key={index} {...entry} />
          ))}
        </div>
    </section>
  );
}

const Card = ({ text, author }) => (
  <div className="text-testimonials max-w-sm border border-neutral-400 rounded-lg p-4 drop-shadow-xl">
    <q className="font-normal">{text}</q>
    <div className="font-medium mt-4 opacity-70 italic">
      &mdash;&nbsp;{author}
    </div>
  </div>
);

const quotes = [
  {
    text: 'I have been building a weather website for Skiing and Climbing and thanks to OpenBeta, I was able to really make the climbing part of it a whole lot better!',
    author: 'Robby Riley,  Founder @ Snarfme'
  },
  {
    text: 'Special thanks to the entire OpenBeta team for open-sourcing the climbing data, making it possible to create apps like Climb Lines.',
    author: 'Sergey Tsibel, Founder @ Climb Lines'
  },
  {
    text: 'So this is that futuristic project everyone has been talking about.',
    author: 'Jacob Kissing'
  },
  {
    text: 'Climbers are keenly aware how easily land access can be lost, perhaps open climbing information should not be taken for granted either.',
    author: 'Aaron Gerry, Climbing Magazine'
  },
  {
    text: 'Just as climbing should be open to everyone, the knowledge of these great experiences should be open to anyone willing to learn.',
    author: 'Brody Lowe'
  },
  {
    text: 'OpenBeta summed up my thoughts extremely well. I believe the data that was curated by the community should stay open to community use.',
    author: 'Raymond Fiscus'
  },
];
