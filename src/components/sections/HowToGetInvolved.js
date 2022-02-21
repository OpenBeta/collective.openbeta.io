import React from 'react';
import { Link } from 'gatsby';

export default function HowToGetInvolved() {
  return (
    <section className="flex bg-openbeta-white">
      <div className='max-w-7xl mx-auto flex flex-col items-center text-openbeta-black mb-20 xs:px-8 md:p-0'>
        <div className="justify-center mt-14 text-center">
          <h2 className="text-5xl xs:text-left md:text-center">How to get involved</h2>
          <h3 className="text-3xl mt-4  xs:text-left md:text-center font-open-sans"> OpenBeta is an open source project, and you can help!</h3>
        </div>
        <Link
          className="py-4 px-12 rounded text-openbeta-white text-center xs:font-medium md:font-normal xs:text-2xl md:text-lg leading-10 bg-openbeta-green"
          to="/join"
        >
          Join Today
        </Link>  
      </div>
    </section>
  );
}