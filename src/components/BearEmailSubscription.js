import React, { useState } from 'react';
import * as Validator from 'validate.js';

const emailConstraint = {
  from: {
    email: true,
  },
};

export default function BearEmailSubscription({
  placeholder,
  message,
  postSubscribeMessage,
  subscribed,
  error,
  errorMessage,
  sending,
  ctaLabel,
  onSubmit,
}) {
  const [{ type, email, isEmailValid }, setState] = useState({
    type: '',
    email: '',
    isEmailValid: false,
  });

  const _validate_email = (e) => {
    const emailText = e.target.value;
    const errorObj = Validator.validate({ from: emailText }, emailConstraint);
    setState({ email: emailText, isEmailValid: !errorObj, type });
  };

  const _onTypeChange = (e) => {
    const type = e.target.value;
    setState({ type, email, isEmailValid });
  };

  return (
    <div className="w-full block">
      {subscribed && (
        <div>
          <p>{postSubscribeMessage}</p>
        </div>
      )}
      {error && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
      {!subscribed && !error && (
        <div className="block w-full">
          <div className="mb-4">
            <div>
              <b>Please select one:</b>
            </div>
            <div className="px-4">
              <input
                type="radio"
                id="job-seeker"
                name="type"
                value="seeker"
                checked={type === 'seeker'}
                onChange={_onTypeChange}
              />
              <label htmlFor="job-seeker" className="pl-2 cursor-pointer">
                I'm a job seeker.
              </label>
            </div>

            <div className="px-4">
              <input
                type="radio"
                id="employer"
                name="type"
                value="employer"
                checked={type === 'employer'}
                onChange={_onTypeChange}
              />
              <label htmlFor="employer" className="pl-2 cursor-pointer">
                I'm an employer.
              </label>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
          <input
            id="email"
            type="email"
            value={email}
            placeholder={placeholder || 'Enter your email'}
            className="w-full md:w-3/4 px-4 rounded-md border-red-400 focus:border-red-400 outline-none focus:outline-none focus:ring-0 font-mono"
            onChange={_validate_email}
          />
          <button
            type="submit"
            disabled={sending || !isEmailValid || type === ''}
            onClick={() => onSubmit({ email, type })}
            className={`rounded-md px-4 py-2  ${
              sending || !isEmailValid || type === ''
                ? 'cursor-not-allowed bg-gray-200'
                : 'bg-red-400'
            }`}
          >
            {ctaLabel ? ctaLabel : 'Subscribe'}
          </button>
          </div>
        </div>
      )}
      <div className="ml-2 text-sm">
        {!isEmailValid && email ? 'Please enter a valid e-mail.' : ' '}
        {sending && email && 'Sending...'}
      </div>
    </div>
  );
}
