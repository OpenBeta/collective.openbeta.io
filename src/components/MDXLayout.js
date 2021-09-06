import React from 'react';
import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

import { h1 } from '../styles/markdown';
const shortcodes = { h1 };

export default ({ pageContext, children }) => {
  const { frontmatter } = pageContext;
  const { title, keywords } = frontmatter;
  return (
    <Layout>
      <SEO keywords={keywords} title={title} />
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Layout>
  );
};
