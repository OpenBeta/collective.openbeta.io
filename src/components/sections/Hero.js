import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import FeatureClimbLink from '../FeatureClimbLink';

export default function Hero() {
  return (
    <section className="layout-center xs:mt-28 md:mt-0">
      <div className="" style={{ display: 'grid'}}>
      <StaticImage
        className="z-0"
        src="../../assets/heros/hero-zebra.jpg"
        alt="Climbers walking in Indian Creek, Utah"
        layout="fullWidth"
        placeholder="blurred"
        quality="80"
        objectFit='cover'
        objectPosition='50% 85%'
        style={{
          gridArea: '1/1'
        }}
      />
      <div
        style={{
          background: 'linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) )',
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: '1/1',
          position: 'relative',
          // This centers the other elements inside the hero component
          display: 'grid',
        }}
      >
        <div className="mx-auto max-w-7xl text-white text-left">
          <h1 className="self-start xs:text-5xl md:text-7xl pb-4 font-bold tracking-tight text-openbeta-white xs:py-12 xs:px-8 md:px-0 md:py-24">
            A fair, free <br />
            and open future
          </h1>
          <div className="py-4 mb-12 md:text2xl font-sans text-2xl text-openbeta-white font-open-sans leading-9 font-normal md:w-2/5 xs:px-8 md:px-0">
            Built and run by climbers. OpenBeta is a nonprofit initiative that
            enables <span className="font-extrabold">open access </span> and{' '}
            <span className="font-extrabold">innovative</span> uses of data about
            rock climbing routes.
          </div>
          <div className="flex xs:px-8 xs:pb-16 md:px-0 md:pb-0">
            <Link
              className="self-start py-4 px-12 btn btn-link text-center leading-10 bg-openbeta-orange xs:font-medium md:font-normal xs:text-2xl md:text-lg"
              to="/why"
            >
              Learn more
            </Link>
            <FeatureClimbLink
              link="https://tacos.openbeta.io/climbs/623b6bcf26b7b51117760df4"
              text="Colorado, Independence Pass"
            ></FeatureClimbLink>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
