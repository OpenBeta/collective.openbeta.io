import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import MadeWithOB from "../components/sections/MadeWithOB"
import Pin from '../assets/icons/pin.inline.svg';
import WhyDevCTA from '../components/sections/WhyDevCTA';

export default function Why() {
  return (
    <Layout
      bgColor='md:bg-transparent xs:bg-white'
    >
      <Seo
        keywords={[`rock climbing`, `openbeta`, `free climbing api`]}
        title="Why OpenBeta"
      />
      <div className="md:-mt-32 xs:mt-28" style={{ display: 'grid' }}>
        <StaticImage
          className="z-0"
          src="../assets/mohammad-alizade-bg.jpeg"
          alt="Abstract background"
          layout="fullWidth"
          placeholder="blurred"
          quality="90"
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
          <section className="layout-center max-w-5xl flex flex-col items-center justify-center mt-24">
            <div className="border-4 rounded-lg border-dashed px-12 py-12 border-custom-blue border-opacity-50">
              <Pin className="w-12 h-12 md:w-16 md:h-16 animate-pulse" />
            </div>
            <div className="mt-8 text-white text-center mx-4 md:mx-16">
              <div className="font-display font-black text-5xl md:text-7xl">
                Open license climbing data,
                <br /> open source library
              </div>
              <div className="my-8 text-2xl text-gray-200 font-sans">
                Build a climbing weather app • plan your next guidebook project • make a map of all the best 5.7s • study
                data science • learn Python Pandas • connect with climbers who code<br/> <i>All possible with OpenBeta
                community.</i>
              </div>
            </div>
          </section>
        </div>
      </div>

      <MadeWithOB/>
      <WhyDevCTA/>
    </Layout>
  );
}

