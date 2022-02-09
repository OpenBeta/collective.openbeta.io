import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function Hero() {
  return (
    <div className="">
      <section className="layout-center">
        {/* <StaticImage
            className="z-0 max-h-624"
            src="../../assets/heros/home-climbing.png"
            alt="Something"
            layout="fullWidth"
            placeholder="blurred"
            quality="80"
            style={{
              gridArea: '1/1',
            }}
        />
        <div className="absolute mt-30 top-0 left-0 right-0 flex flex-col flex-wrap items-center justify-between px-2 mx-auto max-w-7xl">
          <h1 className="self-start text-7xl md:text-7xl pb-4 font-black md:font-bold tracking-tight text-openbeta-white">
            A fair, free <br />
            and open future
          </h1>
          <div className="self-start max-w-xl flex flex-col justify-center items-center">
            <h3 className="text-left text-2xl text-openbeta-white font-open-sans leading-9 font-normal">
              Built and run by climbers. OpenBeta is a nonprofit initiative that
              enables <span className="font-extrabold">open access </span> and{' '}
              <span className="font-extrabold">innovative</span> uses of data about
              rock climbing routes.
            </h3>
            <Link
              className="self-start btn btn-link w-48 h-13 mt-12 btn btn-primary text-center leading-10 bg-openbeta-orange font-normal text-lg"
              to="/why"
            >
              Learn more
            </Link>
          </div>
        </div> */}
        <div className="0" style={{ display: 'grid' }}>
        <StaticImage
          className="z-0"
          src="../../assets/heros/home-climbing.png"
          alt="Climbers walking in Indian Creek, Utah"
          layout="fullWidth"
          placeholder="blurred"
          quality="80"
          style={{
            gridArea: '1/1',
          }}
        />
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: '1/1',
            position: 'relative',
            // This centers the other elements inside the hero component
            placeItems: 'center',
            display: 'grid',
          }}
        >
          <div className="max-w-7xl mt-16 md:mt-0 mx-4 md:mx-16 text-white text-left">
            <h1 className="self-start text-7xl md:text-7xl pb-4 font-black md:font-bold tracking-tight text-openbeta-white">
              A fair, free <br />
              and open future
            </h1>
            <div className="py-4 md:text2xl font-sans text-2xl text-openbeta-white font-open-sans leading-9 font-normal">
              Built and run by climbers. OpenBeta is a nonprofit initiative that
              enables <span className="font-extrabold">open access </span> and{' '}
              <span className="font-extrabold">innovative</span> uses of data about
              rock climbing routes.
            </div>
            <Link
              className="self-start btn btn-link w-48 h-13 mt-12 btn btn-primary text-center leading-10 bg-openbeta-orange font-normal text-lg"
              to="/why"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
