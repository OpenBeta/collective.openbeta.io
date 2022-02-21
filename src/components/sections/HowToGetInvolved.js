import React from 'react';
import { Link } from 'gatsby';
import Computer from '../../assets/icons/computer.inline.svg';
import Database from "../../assets/icons/database.inline.svg";
import MobilePhone from "../../assets/icons/mobile-phone.inline.svg";

export default function HowToGetInvolved() {
  return (
    <section className="flex bg-openbeta-white">
      <div className='max-w-7xl mx-auto flex flex-col items-center text-openbeta-black mb-20 xs:px-8 md:p-0 w-full'>
        <div className="justify-center mt-14 text-center">
          <h2 className="text-5xl xs:text-left md:text-center">How to get involved</h2>
          <h3 className="text-3xl mt-4  xs:text-left md:text-center font-open-sans"> OpenBeta is an open source project, and you can help!</h3>
        </div>

        <div className="md:flex-row md:py-20 md:items-center md:w-full md:justify-between xs:hidden md:flex">
          <div className="flex flex-1 md:text-center md:items-center flex-col">
            <Computer/>
            <div className="font-open-sans text-xl pt-5">
              Give a helping hand! <br></br> Help develop the platform itself
            </div>
          </div>

          <div className="flex flex-1 md:text-center md:items-center flex-col">
            <Database/>
            <div className="font-open-sans text-xl pt-5">
              Don't be shy! <br></br> Use the climbing dataset
            </div>
          </div>

          <div className="flex flex-1 md:text-center md:items-center flex-col">
            <MobilePhone/>
            <div className="font-open-sans text-xl pt-5">
              Be social!
            </div>
          </div>

        </div>
        <div className="xs:pt-12 md:p-0">
          <Link
            className="py-6 px-12 rounded text-openbeta-white text-center xs:font-medium md:font-normal xs:text-2xl md:text-lg leading-10 bg-openbeta-green"
            to="/join"
          >
            Join Today
          </Link>  
        </div>
      </div>
    </section>
  );
}