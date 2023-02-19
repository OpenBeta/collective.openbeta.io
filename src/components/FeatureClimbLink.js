import React from "react";
import ClimbPin from "../assets/icons/climb-pin.inline.svg";

function headerLogo ({text, link}) {
  return (
    <a className="absolute bottom-5 right-0 hidden md:flex" href={link}>
      <div className="openbeta-feature-climb-link flex gap-4 items-center underline z-50 font-open-sans italic px-6  py-3 mr:0 md:mr-24">
        <ClimbPin/> <span>{text}</span>
      </div>
    </a>
  )
}
export default headerLogo;