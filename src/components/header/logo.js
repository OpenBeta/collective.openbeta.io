import React from "react";
import { Link } from 'gatsby';
import Logo from '../../assets/icons/logo-2022.inline.svg';

function headerLogo () {
  return (
    <Link to="/">
      <h1 className="flex items-center no-underline">
        <Logo/>          
        <h1 className="font-black text-openbeta-orange ml-3 text-4xl mt-2.5">OpenBeta</h1>
      </h1>
    </Link>
  )
}
export default headerLogo;