import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import FeatureClimbLink from '../FeatureClimbLink';

export default function Hero() {
  return (
    <section className="layout-center mt-28 md:mt-0">
      <div className="" style={{ display: 'grid'}}>
      <StaticImage
        className="z-0 opacity-80"
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
          background: 'linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.45) )',
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: '1/1',
          position: 'relative',
          // This centers the other elements inside the hero component
          display: 'grid',
        }}
      >
        <div className="mx-auto max-w-7xl text-white px-8 py-12  lg:py-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-openbeta-white">
            A collaborative<br />
            and open future
          </h1>
          <div className="mt-8 text-2xl text-openbeta-white leading-9 w-full md:max-w-3xl font-open-sans">
            Built and run by climbers. OpenBeta is a nonprofit initiative dedicated to
            providing open access to data about rock climbing routes.
          </div>
          <div className="mt-8 flex">
            <Link
              className="self-start py-4 px-12 btn btn-link text-center leading-10 bg-openbeta-orange xs:font-medium md:font-normal xs:text-2xl md:text-lg"
              to="/why"
            >
              Learn more
            </Link>
            <FeatureClimbLink
              link="https://tacos.openbeta.io/climbs/b03c57ac-d132-5b27-8779-d3098d9b0966"
              text="Colorado, Independence Pass"
            ></FeatureClimbLink>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
