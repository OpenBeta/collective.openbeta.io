const slugify = require('slugify');
const path = require(`path`);
const social_card = require(`gatsby-remark-twitter-cards`);


exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'Mdx') {
    const { createNodeField } = actions;
    const parent = getNode(node['parent']);
    const nodeType = parent['sourceInstanceName'];
  }
    
};

exports.createPages = async function ({ actions, graphql }) {
  // const { data } = await graphql(`
  //   query {
  //     allMdx(filter: { fields: { collection: { eq: "jobs" } } }) {
  //       edges {
  //         node {
  //           id
  //           fields {
  //             slug
  //           }
  //           frontmatter {
  //             title
  //             employer
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // data.allMdx.edges.forEach((edge) => {
  //   const slug = edge.node.fields.slug;
  //   actions.createPage({
  //     path: slug,
  //     component: require.resolve(`./src/templates/JobTemplate.js`),
  //     context: { slug: slug },
  //   });
  //   const { title, employer } = edge.node.frontmatter;
  //   add_social_card(edge.node, {
  //     title: employer + ' is hiring a\n' + title,
  //     subTitleLeft: 'actionables.net',
  //     subTitleRight: 'Job search for Givers',
  //     slug
  //   });
  // });
};

function add_social_card(node, { title, subTitleLeft, subTitleRight, slug }) {
  const mdNode = {
    fields: {
      slug: node.slug ? node.slug : slug,
    },
    frontmatter: {
      title: node.title ? node.title : title, // main title
    },
  };
  social_card(
    { markdownNode: mdNode },
    {
      title: subTitleLeft,
      author: subTitleRight,
      fontStyle: 'sans-serif',
      titleFontSize: 112,
      subtitleFontSize: 48,
      fontColor: '#fafafa',
      background: require.resolve('./static/images/social-card-bg.png'),
    }
  );
}