import React from 'react';

import Header from './Header';
import FooterNav from './FooterNav';
import LogoLarge from '../assets/icons/logo-2022-large.inline.svg';
import SocialIcons from './SocialIcons';


function Layout({ extraClz, bgColor = 'bg-current', children }) {
  return (
    <div className={`main-container ${extraClz}`}>
      <Header bgColor={bgColor} />

      <main className="">{children}</main>

      <footer className="bg-openbeta-dark-turquoise">
        <nav className="flex max-w-7xl mx-auto text-sm text-white flex-col">
          <div className="flex flex-row justify-between mt-12">
            <LogoLarge />
            <FooterNav />
          </div>
          <SocialIcons/>
          <span className="pt-1.5 mt-14 mb-14 border-t border-white font-open-sans text-lg">CC-BY-SA 2021 OpenBeta</span>
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
