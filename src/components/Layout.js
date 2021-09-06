import React from 'react';

import Header from './Header';
import FooterNav from './FooterNav';

function Layout({ extraClz, bgColor = 'bg-current', children }) {
  return (
    <div className={`main-container ${extraClz}`}>
      <Header bgColor={bgColor} />

      <main className="">{children}</main>

      <footer className="bg-gray-900">
        <nav className="flex justify-between max-w-5xl p-4 mx-auto text-sm text-white">
          <FooterNav />
          <span className="text-gray-400">CC-BY-SA 2021 OpenBeta</span>
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
