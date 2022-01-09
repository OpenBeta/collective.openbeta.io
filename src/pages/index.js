import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/sections/Hero';
import Testimonials from '../components/sections/Testimonials';
import HowToGetInvolved from '../components/sections/HowToGetInvolved';

export default function IndexPage() {
  return (
    <Layout extraClz="" bgColor="bg-white">
      <Seo
        keywords={[`rock climbing`, `open data`, `free climbing api`, `openbeta`]}
        title="Open collaboration climbing platform"
      />
      <Hero />
      <Testimonials/>
      <HowToGetInvolved/>
    </Layout>
  );
}
