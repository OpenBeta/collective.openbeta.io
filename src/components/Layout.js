import React from 'react';

import Header from './Header';
import FooterNav from './FooterNav';

function Layout({ extraClz, bgColor = 'bg-current', children }) {
  return (
    <div className={`main-container ${extraClz}`}>
      <Header bgColor={bgColor} />

      <main className="">{children}</main>

      <footer className="bg-openbeta-dark-turquoise">
        <nav className="flex justify-between max-w-5xl mx-auto text-sm text-white">
          <FooterNav />
        </nav>
        <span className="">CC-BY-SA 2021 OpenBeta</span>
      </footer>
    </div>
  );
}

export default Layout;
