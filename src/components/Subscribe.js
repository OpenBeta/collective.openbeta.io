import React from 'react';

import MailChimp from '../components/MailChimp.js';

export default function Subscribe(props) {
  return (
    <div className="w-full flex flex-col">
      <div className="px-4 py-2 mb-4 bg-custom-mint rounded-md">
        <div className="text-gray-800 font-bold">
          Hello! You caught us before we're ready.
        </div>
        <div className="text-gray-800 mt-2">
          We're working hard to get the site ready for job submissions. If you'd
          like to receive a reminder when the site is ready, just put your email
          below:
        </div>
      </div>
      <MailChimp message="" placeholder="Your email" ctaLabel="Remind me" />
      <p className="pt-8">
        Got a question? Write to us: <i>hello at openbeta.io</i>
      </p>
    </div>
  );
}
