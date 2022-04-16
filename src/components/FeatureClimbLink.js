import React from "react";
import { Link } from 'gatsby';
import ClimbPin from "../assets/icons/climb-pin.inline.svg";

function headerLogo ({text, link}) {
  return (
    <Link className="flex absolute bottom-5 right-0" to={link}>
      <h1 className="openbeta-feature-climb-link flex items-center underline z-50 font-open-sans italic pl-5 pr-20 py-3">
        <ClimbPin></ClimbPin> <span className="ml-8">{text}</span>
      </h1>
    </Link>
  )
}
export default headerLogo;