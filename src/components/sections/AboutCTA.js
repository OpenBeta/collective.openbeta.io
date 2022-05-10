import React from 'react';
import { Link } from 'gatsby';
import WideContainer from '../WideContainer';
import ArrowRight from '../../assets/icons/arrow-right.inline.svg';

export default function AboutCTA(props) {
  return (
    <WideContainer
      className="bg-custom-blue bg-opacity-40 py-16"
      contentWidth="max-w-prose"
    >
      <div className="text-xl font-bold flex items-center">
        Interested in helping out?{' '}
        <Link
          className="ml-8 btn btn-primary flex items-center "
          to="/get-involved"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </WideContainer>
  );
}
