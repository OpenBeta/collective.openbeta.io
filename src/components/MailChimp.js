import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import BearEmailSub from './BearEmailSubscription';

export default function MailChimp({ message, ctaLabel, autofocus }) {
  const [{ sending, subscribed, error }, setSendingState] = useState({
    sending: false,
    subscribed: false,
    error: false,
  });

  const submitHandler = async ({ email, type }) => {
    setSendingState({ sending: true });
    try {
      const response = await addToMailchimp(email, { type });
      const success = response.result && response.result === 'success';
      setSendingState({ sending: false, subscribed: success, error: !success });
    } catch (e) {
      setSendingState({ sending: false, subscribed: false, error: true });
    }
  };

  return (
    <BearEmailSub
      autofocus={autofocus}
      message={message}
      postSubscribeMessage={<>Thank you for subscribing.</>}
      ctaLabel={ctaLabel}
      errorMessage={<>Oops, we can't receive your email. Please try again.</>}
      subscribed={subscribed}
      error={error}
      sending={sending}
      onSubmit={submitHandler}
    />
  );
}
