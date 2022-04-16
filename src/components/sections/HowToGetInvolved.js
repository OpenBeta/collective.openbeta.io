import React from 'react';
import { Link } from 'gatsby';
import One from '../../assets/icons/one.inline.svg';
import Two from "../../assets/icons/two.inline.svg";
import Three from "../../assets/icons/three.inline.svg";

export default function HowToGetInvolved() {
  return (
    <section className="flex bg-openbeta-white">
      <div className='max-w-7xl mx-auto flex flex-col items-center text-openbeta-black mb-20 xs:px-8 md:p-0 w-full'>
        <div className="justify-center mt-14 text-center">
          <h2 className="text-5xl text-center">3 ways you can get invovled</h2>
          <h3 className="text-3xl mt-4  text-center font-open-sans"> OpenBeta is an open source project, and you can help!</h3>
        </div>

        <div className="md:flex-row md:py-20 md:items-baseline md:w-full md:justify-between md:flex xs:flex xs:flex-col xs:items-center">
          <div className="flex flex-1 text-center items-center flex-col xs:pt-20">
            <One/>
            <div className="font-open-sans text-xl pt-5">
              <b>Give a helping hand!</b> <br></br> Help develop the platform itself
            </div>
          </div>

          <div className="flex flex-1 text-center items-center flex-col xs:pt-20">
            <Two/>
            <div className="font-open-sans text-xl pt-5">
              <b>Don't be shy!</b> <br></br> Use the climbing dataset
            </div>
          </div>

          <div className="flex flex-1 text-center items-center flex-col xs:pt-20">
            <Three/>
            <div className="font-open-sans text-xl pt-5">
              <b>Join the conversation!</b> <br></br> Be part of Discord community
            </div>
          </div>

        </div>
        <div className="xs:pt-24 md:p-0">
          <Link
            className="py-6 px-12 rounded text-openbeta-white text-center xs:font-medium md:font-normal xs:text-2xl md:text-lg leading-10 bg-openbeta-green"
            to="/get-involved"
          >
            Learn more
          </Link>  
        </div>
      </div>
    </section>
  );
}