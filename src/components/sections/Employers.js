import React from 'react';
import Subscribe from '../Subscribe';

export default function Employers() {
  return (
    <section id="employers" className="bg-blue-50">
      <div className="std-layout std-layout-padding py-16 md:py-24 md:pr-64">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-700">
          Hiring Managers
        </h1>
        <p className="pt-8 text-xl font-semibold text-gray-600">
          Tap into a network of Givers. Build a more resilient team.
        </p>
        <p className="pt-8">
          <a
            target="_blank"
            className="underline hover:text-red-400"
            href="https://www.mckinsey.com/business-functions/organization/our-insights/givers-take-all-the-hidden-dimension-of-corporate-culture"
          >
            Why givers are your team's most valueable asset
          </a>
          &nbsp;– McKinsey & Company
        </p>
        <p className="pt-8">
          <a
            target="_blank"
            className="underline hover:text-red-400"
            href="https://hbr.org/2013/04/in-the-company-of-givers-and-takers"
          >
            Why supporting the culture of generosity helps drive your team's
            success
          </a>
          &nbsp;– Havard Business Review
        </p>
      </div>
      <div className="std-layout std-layout-padding pb-16 md:pr-64">
        <Subscribe />
      </div>
    </section>
  );
}
