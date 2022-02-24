import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';


export default function LatestBlogArticle() {
  return (
    <section className="flex bg-openbeta-white md:border-t border-black flex flex-col justify-center">
      <div className='flex-row text-openbeta-black justify-between items-center xs:hidden md:flex'>
        <StaticImage
          className="w-1/2"
          src="../../assets/heros/bouldering-hero.jpg"
          alt=""
          layout="fullWidth"
          placeholder="blurred"
          quality="90"
          objectFit='cover'
          objectPosition='50% 75%'
          style={{
            maxHeight: '750px'
          }}
        />
        <div className="flex flex-col mt-12 pl-14 w-1/2 self-start">
          <h3 className="font-bold text-3xl">Latest blog article</h3>
          <h1 className="font-open-sans text-5xl mt-4 w-3/5 leading-blog-article-title">Estimating Route Quality: Analysis and Applications</h1>
          <div className="mt-12">
              <Link
                className="self-start py-4 px-12 btn btn-link text-center leading-10 bg-openbeta-orange xs:font-medium md:font-normal xs:text-2xl md:text-lg"
                to="https://openbeta.substack.com/p/estimating-route-quality-analysis"
              >
                Read more
              </Link>
            </div>
        </div>
      </div>

      {/* Mobile only */}
      <div className="flex-row text-openbeta-black justify-between items-center md:hidden">
      <div className="" style={{ display: 'grid' }}>
        <StaticImage
          className="z-0"
          src="../../assets/heros/bouldering-hero.jpg"
          alt=""
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
          <div className="max-w-7xl text-white text-center px-8 pt-20 pb-6 bg-openbeta-dark-turquoise-opactiy h-full">
            <h3 className="font-bold text-3xl">
              Latest blog article
            </h3>
            <h1 className="font-open-sans text-5xl py-8">Estimating Route Quality: Analysis and Applications</h1>
            <div class="py-8">
              <Link
                  className="self-start py-6 px-12 btn btn-link text-center leading-10 bg-openbeta-orange xs:font-medium md:font-normal xs:text-2xl md:text-lg"
                  to="https://openbeta.substack.com/p/estimating-route-quality-analysis"
                >
                  Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}