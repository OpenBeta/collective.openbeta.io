const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `OpenBeta`,
    description: `Open source rock climbing platform`,
    author: `support@openbeta.io`,
    url: `https://openbeta.io`,
    image: `/images/social-card-bg.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OpenBeta`,
        short_name: `Open source climbing platform`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.green['500'],
        display: `minimal-ui`,
        icon: `static/openbeta-logo.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/mdx-pages`,
        ignore: [`**/\.*`], // Ignore file starting with dot
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/components/MDXLayout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/mdx-pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['ISO'],
          urls: ['/fonts/fonts.css']
        }
      }
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:
          'https://utexas.us10.list-manage.com/subscribe/post?u=3e899e583d6655f35ce154233&amp;id=ed782c4c0d',
        timeout: 5500,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
