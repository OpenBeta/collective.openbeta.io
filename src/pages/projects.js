import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

export default function Projects() {
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
        title="Our projects"
      />
      <article className='xs:my-28'>
        <section className="std-layout std-layout-padding my-8 md:mt-24 max-w-prose prose lg:prose-lg">
            <h2>Our Projects</h2>
            <hr/>
            <h3>Climbing Route Catalog</h3>
            <p><i>Status: <span className='text-red-400'>Active</span></i></p>
            <p>
             The climbing route catalog, <a href='https://openbeta.io'>openbeta.io</a>, is a free online catalog of rock climbing routes developed and maintained by a community of volunteers. 
            </p>
            <p>
               It is more than just about building a website to share climbing information in an open manner. The project stands as a testament to the strengths of both individuals and communities.  When a small group of climbers and supporters of open source care enough to take matters into their own hands, together we can make a positive impact in our own community.
            </p>
            <ul>
              <li>Project outcome: <a href='https://openbeta.io'>openbeta.io</a></li>
              <li>Learn more: <a href='https://docs.openbeta.io/how-to-contribute/overview'> How to contribute guide</a></li>
            </ul>
        </section>
        <section className="std-layout std-layout-padding my-8 md:mt-24 max-w-prose prose lg:prose-lg">
              <h3 id='search-api'>Climb Search API</h3>
              <p><i>Status: <span className='text-red-400'>Active</span></i></p>
              <p>
                The climb search API enables other applications to search for climb names in milliseconds. Initially, we built this out of necessity to power the search on our websites. However, we decided to open up access to this API to help accelerate the development of other climbing-related projects in the open-source space.
              </p>
            <ul>
              <li>Project outcome: <a href='https://github.com/OpenBeta/openbeta-graphql'>OpenBeta GraphQL project on GitHub</a></li>
              <li>Learn more: <a href='https://openbeta.substack.com/p/announcing-free-access-climb-search-api'>Blog: Free climb search API</a></li>
            </ul>
        </section>
        <section className="std-layout std-layout-padding my-8 md:mt-24 max-w-prose prose lg:prose-lg">
          <h3 id='fa-cleanup'>First Ascensionist Data Cleanup</h3>
          <p><i>Status: <span className='text-red-400'>Planned</span></i></p>
          <p>
         First ascensionists (FAs) played a crucial role in the development of rock climbing. However, the records of notable first ascents and the growth of modern rock climbing are spread across websites with unclear data licenses or in printed guidebooks, some of which are no longer in print.
          </p>
          <p>Our database currently holds information on over 200,000 climbs, but the data about first ascents is <i>incomplete and unstructured</i>. We want to organize and arrange this information by climbers' names and dates. By doing so, we will enable community users to curate and catalog climbs by first ascensionists in ways not possible before.
         </p>
          <ul>
            <li>Project outcome: <span className='font-medium'>A public domain dataset of climbs and normalized first ascensionist data in a machine readable format.</span></li>
            <li>Learn more: <a href='https://docs.openbeta.io/project-ideas/software-dev#fa-data-cleanup'>FA Data Cleanup</a></li>
          </ul>
        </section>
</article>
</Layout>)
}