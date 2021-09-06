import React from 'react';
import {Link} from "gatsby"
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function IndexPage() {
  return (
    <Layout>
      {/* eslint-disable react/jsx-pascal-case */}
      <Seo
        keywords={[`rock climbing`, `openbeta`, `free climbing api`]}
        title="Page not found"
      />
      <div className="h-24">Oops this is embarrassing.  Return to <Link to="/">home page.</Link></div>
    </Layout>
  );
}
