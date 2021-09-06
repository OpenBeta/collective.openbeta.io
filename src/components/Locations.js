import React from 'react';

export default function Locations({ list }) {
  return (
    <span className="flex justify-left items-center">
      {list &&
        list.map((item) => (
          <span key={item} className={`my-0.5 mr-1`}>
            {item}
          </span>
        ))}
    </span>
  );
}
