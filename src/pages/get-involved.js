import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import WideContainer from '../components/WideContainer';

export default function Why() {
  return (
    <Layout
      bgColor='md:bg-transparent xs:bg-white'
    >
      <Seo
        keywords={[`rock climbing`, `openbeta`, `free climbing api`]}
        title="How to get involved"
      />
      <div className="md:-mt-32 xs:mt-28" style={{ display: 'grid' }}>
        <StaticImage
          className="z-0"
          src="../assets/heros/indian-creek.jpg"
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
          <div className="mt-16 md:mt-0 mx-4 md:mx-16 text-white text-center">
            <h1 className="font-display font-black text-4xl md:text-7xl tracking-tight">
              How to get involved
            </h1>
            <div className="py-4 text-xl md:text2xl font-sans">
              OpenBeta is an open source project, and you can help!
            </div>
          </div>
        </div>
      </div>
      <section className="my-12 md:my-16">
        <div className="mx-auto md:max-w-prose prose px-4 text-base lg:prose-xl">
          <h3>Four primary ways you can get involved:</h3>
          <ul>
            <li>
              Help improve the <a href="https://tacos.openbeta.io">climbing route wiki (OpenTacos)</a>, write descriptions for your
              favorite climbing areas, and make corrections to a climb/boulder.
            </li>
            <li>
              Participate in the development of the OpenBeta platform itself: 
               &nbsp;the{' '}
              <a href="https://github.com/openbeta/open-tacos">
                wiki
              </a>,{' '}
              the&nbsp;
              <a href="https://github.com/OpenBeta/openbeta-graphql">
              API
              </a>,{' '}
              and the &nbsp;
              <a href="https://github.com/OpenBeta/sandbag">
              grade conversion library.
              </a>
            </li>

            <li>
              Use the{' '}
              <a href="https://github.com/OpenBeta/climbing-data">
                climbing dataset
              </a>{' '}
              and our hosted services to build anything you want.
            </li>
            <li>
              Contribute a guest article on{' '}
              <a href="https://openbeta.io/blog">openbeta.io/blog</a>
            </li>
          </ul>
          <blockquote>
            Contributor{' '}
            <a href="https://github.com/OpenBeta/open-tacos/blob/main/CODE_OF_CONDUCT.md">
              Code of Conduct
            </a>
          </blockquote>
          <h3>OpenBeta platform development</h3>
          <p>Your industry experience can give the project a huge boost.</p>
          <b>Software development</b>
          <ul>
            <li>UX designers.</li>
            <li>Frontend developers with CSS, Javascript, React experience.</li>
            <li>Backend developers with Node.js, Python experience.</li>
            <li>Data scientists, machine learning specialists.</li>
          </ul>
          <b>Others</b>
          <ul>
            <li>Technical writers, grant writers.</li>
            <li>Illustrators, graphic designers.</li>
            <li>Community managers.</li>
            <li>Program managers.</li>

          </ul>
        </div>
      </section>
      <WideContainer
        className="bg-custom-blue bg-opacity-60 text-black py-8"
        contentWidth="max-w-prose"
        contentClass="prose lg:prose-xl text-base"
      >
        <b>Still not sure how to get start started?</b>
        <ul>
          <li>
            Have a look at the{' '}
            <a href="https://trello.com/b/Ir8emiyR/openbeta-project">
              Trello board
            </a>{' '}
            to see what we're working on.
          </li>
          <li>
            {' '}
            Join the{' '}
            <a href="https://discord.com/invite/2A2F6kUtyh">
              Discord chat server
            </a>{' '}
            to chat with volunteers and climbers.
          </li>
          <li>Help us sustain the project by becoming a backer for as little as $3/month.  <a href="https://opencollective.com/openbeta">Donate now</a>.</li>
        </ul>
        <p>Questions? email us at hello@openbeta.io</p>
      </WideContainer>
    </Layout>
  );
}
