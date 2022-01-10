import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';


export default function LatestBlogArticle() {
  return (
    <section className="flex bg-openbeta-white border-t border-black flex flex-col justify-center">
      <div className='flex flex-row text-openbeta-black justify-between items-center'>
        <StaticImage
          className="w-1/2"
          src="../../assets/heros/article-image.png"
          alt=""
          layout="fullWidth"
          placeholder="blurred"
          quality="90"
        />
        <div className="flex flex-col mt-12 ml-14 w-1/2 self-start">
          <h3 className="font-bold text-3xl">Latest blog article</h3>
          <h1 className="font-open-sans text-5xl mt-4 w-3/5">Estimating Route Quality: Analysis and Applications</h1>
          <Link
            className="btn btn-link w-32 h-9 mt-12 btn btn-primary text-center bg-openbeta-orange"
              to="https://openbeta.substack.com/p/estimating-route-quality-analysis"
          >
          Read more
          </Link>  
        </div>
      </div>
    </section>
  );
}