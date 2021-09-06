import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import BrowserWindow from '../BrowserWindow';
import WideContainer from '../WideContainer';

export default () => (
  <section className="">
    <WideContainer className="pt-12 md:pt-16" contentWidth="max-w-6xl" contentClass="">
      <div className="text-4xl font-bold">
        The rock climbing dataset you've been looking for.{' '}
        <span className="text-gray-400">
          Available in JSON, CSV and Python pickle files.
        </span>
      </div>

      <div className="my-16">
        <Heading
          title="Route name word cloud"
          author="Christopher Gian"
          hashtags="#datascience #python #pandas"
        />
        <BrowserWindow>
          <StaticImage
            src="../../assets/made-with-openbeta/word-cloud.png"
            alt="Sport route votes per route for each grade"
            layout="fullWidth"
            placeholder="blurred"
            quality="90"
          />
        </BrowserWindow>
      </div>

      <div>
        <Heading
          title="Estimating Route Quality"
          author="Ryther Anderson, PhD"
          hashtags="#datascience #python #pandas"
        />
        <BrowserWindow>
          <StaticImage
            src="../../assets/made-with-openbeta/vote-counts-by-grade.png"
            alt="Distribution of user vote counts by grade"
            layout="fullWidth"
            placeholder="blurred"
            quality="90"
            style={{
              margin: '2rem 2rem',
            }}
          />
        </BrowserWindow>
      </div>
    </WideContainer>

    <WideContainer
      className="bg-gray-800"
      contentWidth="max-w-6xl"
      contentClass="pt-12 md:pt-16 text-white"
    >
      <div className="text-4xl font-bold text-white">
        Build from our Javascript and Python libraries/examples.&nbsp;
        <span className="text-gray-400">
          Use our Geocoder API to look up climbs by name, location.
        </span>
      </div>
      <div className="my-16">
        <Heading
          title="Route search by FA"
          author="OpenBeta"
          hashtags="#restapi #javascript #react #pandas"
        />
        <BrowserWindow>
          <StaticImage
            src="../../assets/made-with-openbeta/fa-search.png"
            alt="Search by first accesionists"
            layout="fullWidth"
            placeholder="blurred"
            quality="90"
          />
        </BrowserWindow>
      </div>
      <div>
        <Heading
          className="text-white"
          title="Indian Creek walls"
          author="OpenBeta"
          hashtags="#restapi #javascript #react #mapbox #deckgl"
        />
        <BrowserWindow>
          <StaticImage
            src="../../assets/made-with-openbeta/indian-creek-map.png"
            alt="Climbing walls in Indian Creek, Utah"
            layout="fullWidth"
            placeholder="blurred"
            quality="90"
          />
        </BrowserWindow>
      </div>
    </WideContainer>
  </section>
);
//
const Heading = ({ title, author, hashtags }) => (
  <>
    <div className="text-2xl font-semibold tracking-tight">{title}</div>
    <div className="font-light">{author}</div>
    <div className="font-mono mt-4 mb-4">{hashtags}</div>
  </>
);
