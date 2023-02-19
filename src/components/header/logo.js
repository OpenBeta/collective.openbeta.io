import React from "react";
import { Link } from 'gatsby';
import LogoWithText from "../../assets/icons/logo-text-header.inline.svg";

function headerLogo () {
  return (
    <Link className="z-50" to="/">
      <h1 className="flex items-center no-underline z-50">
        <LogoWithText/>
      </h1>
    </Link>
  )
}
export default headerLogo;