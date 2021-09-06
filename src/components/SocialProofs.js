import React from 'react';

export default function SocialProofs(props) {
  return (
    <div className="rounded-md border-gray-50 border-2 bg-blue-200 w-80 shadow-md p-8">
      <div className="stylistic-quote-mark">
        &ldquo;
      </div>

      <div className="text-lg text-gray-800 text-left">Brilliant!</div>
      <div className="text-sm text-gray-800 text-left">
        <a
          href="https://www.linkedin.com/in/tomaswebdesigner/"
          target="_blank"
          className="underline hover:text-red-400"
        >
          <b>Tomás Canale</b>
        </a>
        <p> Designer & WordPress Specialist</p>
      </div>
    </div>
  );
}
