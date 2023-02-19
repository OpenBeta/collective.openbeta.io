import React from 'react';
import { Link } from 'gatsby';
import NavData from '../nav-data.json';

const titleStyles = "font-bold text-lg leading-10";
export default function FooterNav(props) {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-end mt-12 xs:hidden md:flex">
      {NavData.nav.map((entry) => {
        if (entry.route === '/') return null;
        if (entry.popover) {
          const list = NavData[entry.key];
          return (
            <div key={entry.title} className="">
              <div className={titleStyles}>{entry.title}</div>
              <div className="pl-4 md:pl-0 mt-2 flex flex-col space-y-1 text-base font-open-sans">
                {list.map((entry) => (
                  <SmartLink key={entry.route} {...entry} isChild={true} />
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

const SmartLink = ({ title, route, outline, isChild }) => {
  return (
    <div className={outline ? 'btn btn-link text-center bg-openbeta-orange font-bold h-10 w-32' : ''}>
      {route.startsWith('http') ? (
        <a  className={`${!isChild ? titleStyles : ''}  ${outline ? 'leading-normal' : ''}`} href={route}>{title}</a>
      ) : (
        route && <Link className={`${!isChild ? titleStyles : ''}`} to={route}>{title}</Link>
      )}
    </div>
  );
};
