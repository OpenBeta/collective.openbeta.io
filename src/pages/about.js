import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import BrowserWindow from '../components/BrowserWindow';
import people from '../people.json';
import AboutCTA from '../components/sections/AboutCTA';

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
              innovative uses of data about rock climbing routes. Just as the
              Access Fund fights on behalf of climbers to keep public lands open
              to climbing, OpenBeta is dedicated to ensuring free and open
              access to rock climbing data.
            </p>
            <p>
              We are a collective under the Open Collective Foundation, a
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
        <section className="std-layout std-layout-padding my-8 md:mt-24 max-w-prose">
          <h3 className="text-2xl font-bold">The People</h3>
          <div className="my-4 prose md:prose-xl">
            Behind the scenes, we're just a weird group of adventure-seeking
            humans, who enjoy climbing and believe in creating freedom and
            giving back to the community as much as we can.
          </div>
          <People />
        </section>
        <AboutCTA />
      </article>
    </Layout>
  );
}

const name_comparator = (a, b) => {
  const nameA = a.lname.toUpperCase(); // ignore upper and lowercase
  const nameB = b.lname.toUpperCase(); // ignore upper and lowercase

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

const People = () => (
  <>
    <div className="mt-8 grid grid-flow-rows grid-cols-1 md:grid-cols-2 auto-rows-auto gap-x-8 gap-y-8">
      {people
        .filter((entry) => entry.active !== 'false')
        .sort(name_comparator)
        .map((entry) => (
          <Profile key={entry.fname + entry.lname} {...entry} />
        ))}
    </div>
    <div className="mt-8 text-lg font-bold">Former volunteers</div>
    <div className="mt-4 grid grid-flow-rows grid-cols-1 md:grid-cols-2 auto-rows-auto gap-x-8 gap-y-4">
      {people
        .filter((entry) => entry.active === 'false')
        .sort(name_comparator)
        .map(({ fname, lname, academic_title }) => (
          <div className="text-base" key={fname + lname}>{`${fname} ${lname}${
            academic_title ? `, ${academic_title}` : ''
          }`}</div>
        ))}
    </div>
  </>
);

const Profile = ({
  fname,
  lname,
  academic_title,
  role,
  email,
  linkedin,
  website,
}) => (
  <div className="text-base flex flex-col space-y-2">
    <div className="text-lg font-bold">
      {`${fname} ${lname}${academic_title ? `, ${academic_title}` : ''}`}
    </div>
    <div className="text-sm text-gray-700 uppercase">{role}</div>
    <a className="text-gray-500 link-default text-sm" href={`mailto:${email}`}>
      {email}
    </a>
    <div className="flex text-sm space-x-4">
      {website && (
        <a className="hover:underline" href={website}>
          Website
        </a>
      )}
      {linkedin && (
        <a className="hover:underline" href={linkedin}>
          Linkedin
        </a>
      )}
    </div>
  </div>
);
