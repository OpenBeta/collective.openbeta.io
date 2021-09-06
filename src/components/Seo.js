import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet';

function Seo({ description, meta = [], keywords = [], title, social_card }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl: url
          defaultImage: image
        }
      }
    }
  `);
  const seo = {
    metaDescription: description || site.siteMetadata.description,
    metaTitle: title || site.siteMetadata.title,
    image: social_card ? `${site.siteMetadata.siteUrl}${pathname}/twitter-card.jpg` : `${site.siteMetadata.defaultImage}`,
    url: `${site.siteMetadata.siteUrl}${pathname}`,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      meta={[
        {
          name: `description`,
          content: seo.metaDescription,
        },
        {
          property: `og:title`,
          content: seo.metaTitle,
        },
        {
          property: `og:description`,
          content: seo.metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: seo.image,
        },
        {
          property: `og:url`,
          content: seo.url,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: seo.metaTitle,
        },
        {
          name: `twitter:description`,
          content: seo.metaDescription,
        },
        {
          name: `twitter:image`,
          content: seo.image,
        }

      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      title={seo.metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

export default Seo;
