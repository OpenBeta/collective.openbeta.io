import React from "react";
import LinkedIn from "../assets/icons/li.inline.svg";
import Instagram from "../assets/icons/ig.inline.svg";
import Github from "../assets/icons/github.inline.svg";
import Twitter from "../assets/icons/twitter.inline.svg";


function socialIcons () {
  return (
    <div className="flex xs:justify-center md:justify-end">
      <div className="flex flex-row items-center w-48 justify-between">
        <a href="https://github.com/OpenBeta"><Github role="img" aria-label="OpenBeta on GitHub"/></a>
        <a href="https://www.instagram.com/openbetaproject/"><Instagram role="img" aria-label="OpenBeta on Instagram"/></a>
        <a href="https://twitter.com/OpenBetaHQ"><Twitter role="img" aria-label="OpenBeta on Twitter"/></a>
        <a href="https://www.linkedin.com/company/openbetahq/"><LinkedIn role="img" aria-label="OpenBeta on LinkedIn"/></a>
      </div>
    </div>
  );
}

export default socialIcons;