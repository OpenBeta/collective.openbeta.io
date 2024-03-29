import React, { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import BrowserWindow from '../components/BrowserWindow';
import AboutCTA from '../components/sections/AboutCTA';
import Gallery from '../components/about/gallery'

export default function About() {
  return (
    <Layout>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO
        keywords={[
          `rock climbing`,
          `open data`,
          `free climbing api`,
          `openbeta`,
        ]}
        title="About us"
      />
      <article className='xs:mt-28'>
        <section className="std-layout std-layout-padding my-8 md:mt-24 max-w-prose">
          <div className="prose md:prose-xl">
            <h3 className="text-2xl font-medium">About OpenBeta</h3>
            <p>
              We are a proud nonprofit initiative that enables new and
              innovative uses of data about rock climbing routes.  Our mission is to provide free and open access to rock climbing data for computer programming, research, and data science endeavors.
            </p>
            <p>
              We are a collective under the <a href='https://opencollective.com/openbeta' target='_blank' rel='noopener noreferrer'>Open Collective Foundation</a>, a
              501(c)(3) organization.
            </p>
          </div>
        </section>
        <section className="layout-center layout-wide my-16 px-4">
          <div className="my-4">Heat map of climbing areas</div>
          <BrowserWindow className="shadow-2xl">
            <StaticImage
              src="../assets/usa-heatmap.png"
              alt="Heatmap of climbing areas in the US"
              layout="fullWidth"
              placeholder="blurred"
              quality="90"
            />
          </BrowserWindow>
        </section>
        <section className="std-layout std-layout-padding my-8 md:mt-24 prose md:prose-xl max-w-prose ">
          <h3 className="text-2xl font-bold">The People</h3>
          <div className="my-4">
            Behind the scenes, we're just a weird group of adventure-seeking
            humans, who enjoy climbing and believe in creating freedom and
            giving back to the community as much as we can.
          </div>
          <hr className='my-8'/>
          <h4 className='font-bold my-2'>Financial supporters</h4>
          <p className=''>We are thankful for the generous donations from our supporters.  To see a complete list of donors and learn how you can contribute, visit our page on the <a className='underline' href='https://opencollective.com/openbeta' target='_blank' rel='noopener noreferrer'>Open Collective Foundation</a> website.</p>
          <hr className='my-8'/>
          <People />
        </section>
        <section className='layout-wide mx-auto'>
          <Gallery />
        </section>
        <AboutCTA />
      </article>
    </Layout>
  );
}

const name_comparator = (a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

const People = () => {
  const contributorsURL = 'https://raw.githubusercontent.com/OpenBeta/open-tacos/develop/.all-contributorsrc';
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchContributors() {
      return await fetch(contributorsURL).then(res => res.json());
    }
    setPeople([]);
    let ignore = false;
    fetchContributors().then(res => {
      if (!ignore) {
        setPeople(res.contributors);
      }
    })
    return () => { ignore = true }
  }, []);

  return (
    <>
      <h4 className='font-bold my-2'>Volunteers</h4>
      <p>OpenBeta platform is built entirely by volunteer contributors.</p>
      <div className="mt-8 grid grid-flow-rows grid-cols-1 md:grid-cols-2  auto-rows-auto gap-x-8 gap-y-8">
        {people
          .filter((entry) => entry.active !== 'false')
          .sort(name_comparator)
          .map((entry) => (
            <Profile key={entry.avatar_url} {...entry} />
          ))}
      </div>
      <hr className='my-8' />
    </>
  )
};

const Profile = ({
  name,
  profile,
  contributions,
}) => (
  <div className="text-base flex flex-col space-y-2">
    <div className="text-lg font-bold capitalize">
      <a href={profile}>{name ? name : 'Anonymous'}</a>
    </div>
    <p className="text-sm text-gray-700 uppercase">{contributions.join(', ')}</p>
  </div>
);
