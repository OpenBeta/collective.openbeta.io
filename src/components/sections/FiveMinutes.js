import React from 'react';

export default function FiveMinutes() {
  return (
    <section
      id="5-minutes"
      className="std-layout std-layout-padding py-16 md:py-24 md:pl-64"
    >
      <h1 className="text-5xl font-bold font-display text-gray-700">
        The Five-minute favor
      </h1>
      <div className="w-full mb-4 mt-10">
        <div className="text-3xl text-indigo-300 text-left leading-tight h-3">
          “
        </div>
        <p className="text-lg text-gray-600 font-light text-center px-5">
          <a
            href="https://www.linkedin.com/in/adamrifkin"
            target="_blank"
            className="underline hover:text-red-400"
          >
            Adam Rifkin
          </a>
          &nbsp;taught me that giving doesn’t require becoming Mother Teresa or
          Mahatma Gandhi; we can all find ways of adding high value to others’
          lives at a low personal cost.
        </p>
        <div className="text-3xl text-indigo-300 text-right leading-tight h-3 -mt-3">
          ”
        </div>
      </div>
      <div className="w-full">
        <p className="text-md text-sm text-gray-800 text-center">
          — Adam Grant
        </p>
      </div>
      <p className="pt-8 text-xl font-semibold text-gray-600">
        Be an effective giver.
      </p>
      <p className="pt-8 ">
        The five-minute favor is a simple action that takes you five minutes or
        less to help others, and you expect nothing in return. Your act of
        giving can be in the form of giving time, expertise, or connecting
        people within your network.
      </p>
      <p className="pt-8">
        Why five minutes? By giving strategically we become a more effective
        giver and protect ourselves from "
        <a
          target="_blank"
          className="underline hover:text-red-400"
          href="https://hbr.org/2017/01/beat-generosity-burnout"
        >
          generosity burnout
        </a>
        ".
      </p>
      <div className="pt-8">
        Examples of 5-minute favors:
        <ul className="list-inside list-disc">
          <li>Say hello to a junior engineer (in person or on Slack) and ask them how they're doing.</li>
          <li>
            Introduce two people who might benefit from knowing each other.
          </li>
          <li>Give someone a genuine recommendation on LinkedIn.</li>
          <li>
            Say thank you to someone for going above and beyond to help others.
          </li>
        </ul>
      </div>
    </section>
  );
}
