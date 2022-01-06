import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ArrowRight from '../../assets/icons/arrow-right.inline.svg';

export default function Hero() {
  return (
    <div className="">
      <section className="layout-center">
        <StaticImage
            className="z-0 max-h-624"
            src="../../assets/heros/home-climbing-res.jpg"
            alt="Something"
            layout="fullWidth"
            placeholder="blurred"
            quality="80"
            style={{
              gridArea: '1/1',
            }}
        />
        <h1 className="text-center text-5xl md:text-7xl pb-4 font-display font-black md:font-bold tracking-tight text-gray-800">
          A fair, free <br />
          and open future
        </h1>
        <div className="mx-auto max-w-xl mt-4 flex flex-col justify-center items-center px-4">
          <h3 className="text-center text-2xl text-gray-600 font-sans">
            Built and run by climbers. OpenBeta is a nonprofit initiative that
            enables <span className="text-red-500">open access </span> and{' '}
            <span className="text-red-500">innovative</span> uses of data about
            rock climbing routes.
          </h3>
          <Link
            className="btn btn-link mt-8 btn btn-primary pl-8 pr-6 py-4 flex items-center"
            to="/why"
          >
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
