import React from "react";
import LinkedIn from "../assets/icons/li.inline.svg";
import Instagram from "../assets/icons/ig.inline.svg";
import Github from "../assets/icons/github.inline.svg";
import Twitter from "../assets/icons/twitter.inline.svg";


function socialIcons () {
  return (
    <div className="flex  justify-end">
      <div className="flex flex-row items-center w-48 justify-between">
        <a href="https://github.com/OpenBeta"><Github/></a>
        <a href="https://www.instagram.com/openbetaproject/"><Instagram/></a>
        <a href="https://twitter.com/OpenBetaHQ"><Twitter/></a>
        <a href="https://www.linkedin.com/company/openbetacollective/"><LinkedIn/></a>
      </div>
    </div>
  );
}

export default socialIcons;