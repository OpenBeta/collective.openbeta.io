import React from 'react';
import { Link } from 'gatsby';

export default function HowToGetInvolved() {
  return (
    <section className="flex bg-openbeta-white">
      <div className='max-w-7xl mx-auto flex flex-col items-center text-openbeta-black mb-20'>
        <div className="justify-center mt-14 text-center">
          <h2 className="text-5xl">How to get involved</h2>
          <h3 className="text-3xl mt-4 font-open-sans"> OpenBeta is an open source project, and you can help!</h3>
        </div>
        <Link
          className="btn btn-link w-48 h-14 mt-12 btn btn-primary text-center leading-10 bg-openbeta-green"
          to="/join"
        >
          Join Today
        </Link>  
      </div>
    </section>
  );
}