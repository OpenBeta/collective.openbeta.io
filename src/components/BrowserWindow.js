import React from 'react';

export default ({ children, className }) => (
  <div className={`rounded z-50 shadow ${className}`}>
    <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-300 rounded-t flex items-center pl-2">
      <Controls />
    </div>
    <div>{children}</div>
  </div>
);

const Controls = () => (
  <div className="flex nowrap">
    <Dot className="fill-current text-pink-300"/>
    <Dot className="fill-current text-gray-300"/>
    <Dot className="fill-current text-custom-avery"/>
  </div>
);

const Dot = ({ className }) => (
  <svg className={`h-6 w-6 ${className}`} viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="6"/>
  </svg>
);
