import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import Tippy from '@tippyjs/react/headless';

import Logo from '../assets/icons/logo-2022.inline.svg';
import Close from '../assets/icons/x.inline.svg';
import ChevronDown from '../assets/icons/chevron-down.inline.svg';
import NavData from "../nav-data.json";

function Header({ bgColor = 'bg-gray-50' }) {
  const [isExpanded, toggleExpansion] = useState(false);
  const location = useLocation();
  return (
    <header className={`w-full mx-auto py-2 z-auto py-3 h-20 ${bgColor}}`}>
      <div className="flex flex-wrap items-center justify-between max-w-6xl  px-2 mx-auto">
        <Link to="/">
          <h1 className="flex items-center no-underline">
            <Logo/>          
            <h1 className="font-black text-openbeta-orange ml-3 text-4xl">OpenBeta</h1>
          </h1>

        </Link>
        <button
          className="z-50 items-center block px-3 py-2 text-gray-900 border rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          {isExpanded ? (
            <Close />
          ) : (
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
        </button>

        <nav
          className={`z-50 text-sm ${
            isExpanded ? `block bg-gray-50` : `hidden`
          }  md:flex md:justify-end w-full md:w-auto  `}
        >
          {NavData.nav.map((entry) => {
            if (entry.popover) {
              return (
                <Tippy
                  key={entry.title}
                  interactive={true}
                  trigger="click"
                  // className="border"
                  placement="bottom"
                  render={(attrs) => (
                    <PopoverContent
                      attrs={attrs}
                      list={NavData[entry.key]}
                    />
                  )}
                >
                  <IconButtonRef
                    pathname={location.pathname}
                    {...entry}
                    popover={true}
                  />
                </Tippy>
              );
            }

            return (
              <IconButton
                key={entry.title}
                pathname={location.pathname}
                {...entry}
              />
            );
          })}
        </nav>
      </div>
    </header>
  );
}

const IconButton = ({
  innerRef,
  title,
  route,
  emphasis,
  pathname,
  popover,
}) => {

  const isDontationButton = emphasis;

  const Child = (
    <div
      className={`text-lg no-underline ${
        route === pathname ? 'border-b-2 border-gray-500' : ''
      }`}
    >
      {title}
    </div>
  );

  return (
    <div
      ref={innerRef}
      className={`flex items-center	cursor-pointer border-transparent hover:border-custom-primary border rounded ${
        isDontationButton ? 'md:mx-4 bg-openbeta-orange text-openbeta-white h-10 w-36 justify-center' : ''
      }`}
    >
      {popover && (
        <div className="px-4 py-2 flex items-center">
          {Child}
          <ChevronDown className="ml-2 w-4 h-4" />
        </div>
      )}
      {route && route.startsWith('http') ? (
        <a className="px-4 py-1.5" href={route}>
          {Child}
        </a>
      ) : (
        route && (
          <Link className="px-4 py-2" to={route}>
            {Child}
          </Link>
        )
      )}
    </div>
  );
};

const IconButtonRef = React.forwardRef((props, ref) => {
  return (
    <IconButton {...props} innerRef={ref}>
      {props.children}
    </IconButton>
  );
});

const PopoverContent = ({ attrs, list }) => (
  <div
    className="bg-gray-100 max-w-screen-sm p-4 rounded-md shadow-xl border-2"
    {...attrs}
  >
    <div className="flex flex-col gap-y-4 text-lg divide-y">
      {list.map(({ route, title, description }) => (
        <a key={route} className="p-2 hover:bg-gray-200 rounded" href={route}>
          <div className="font-extrabold">{title}</div>
          <div className="text-base">{description}</div>
        </a>
      ))}
    </div>
  </div>
);

export default Header;
