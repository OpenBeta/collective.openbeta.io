import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default ({ src, imageAltText, children }) => (
  <div className="-mt-32 h-screen" style={{ display: 'grid' }}>
    <StaticImage
      className="z-0"
      src="./src/assets/heros/indian-creek.jpg"
      alt={imageAltText}
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
      This is a test{' '}
    </div>
  </div>
);
