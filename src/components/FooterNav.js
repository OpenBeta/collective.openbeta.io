import React, { useState } from 'react';
import { Link } from 'gatsby';
import NavData from '../nav-data.json';

export default function FooterNav(props) {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-end mt-12">
      {NavData.nav.map((entry) => {
        if (entry.route === '/') return null;
        if (entry.popover) {
          const list = NavData[entry.key];
          return (
            <div key={entry.title} className="">
              <div>{entry.title}</div>
              <div className="pl-4 md:pl-0 mt-2 flex flex-col space-y-2">
                {list.map((entry) => (
                  <SmartLink key={entry.route} {...entry} />
                ))}
              </div>
            </div>
          );
        }

        return <SmartLink key={entry.route} {...entry} />;
      })}
    </div>
  );
}

const SmartLink = ({ title, route, emphasis }) => {
  return (
    <div className={emphasis ? 'btn btn-link w-32 h-9 text-center bg-openbeta-orange' : ''}>
      {route.startsWith('http') ? (
        <a href={route}>{title}</a>
      ) : (
        route && <Link to={route}>{title}</Link>
      )}
    </div>
  );
};
