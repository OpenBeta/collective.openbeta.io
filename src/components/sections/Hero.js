import React from 'react';
import { Link } from 'gatsby';
import ArrowRight from '../../assets/icons/arrow-right.svg';

export default function Hero() {
  return (
    <div className="">
      <section className="layout-center py-16 md:pt-36 md:mb-24 ">
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
      <section className="layout-center layout-wide">
        {/* <BrowserWindow className="opacity-70 from-black via-black to-gray-800">
            <StaticImage
              src="../../assets/usa-heatmap.png"
              alt="Heatmap of climbing areas in the US"
              layout="fullWidth"
              placeholder="blurred"
              quality="90"
            />
        </BrowserWindow> */}
      </section>
    </div>
  );
}
