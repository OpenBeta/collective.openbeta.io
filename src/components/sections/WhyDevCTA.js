import React from 'react';
import WideContainer from '../WideContainer';

export default function WhyDevCTA(props) {
  return (
    <WideContainer
      className="bg-custom-primary bg-opacity-90 py-8"
      contentWidth="max-w-prose"
    >
      <div className=" text-4xl font-bold text-black">
        Don't do it solo&nbsp;
        <span className="text-gray-500">
          (unless your name is Alex Honnold).
        </span>{' '}
        Join our new and growing digital garden.
      </div>
      <div className="text-base text-black py-8">
        <a
          className="btn btn-primary bg-custom-blue"
          href="https://discord.gg/a5HskjmqPc"
        >
          Discord chat server
        </a>
        <div className="text-lg pt-8">
          Connect with other climbers who code.
          <br />
          Share your projects, exchange ideas, ask a coding question.
        </div>
      </div>
    </WideContainer>
  );
}
