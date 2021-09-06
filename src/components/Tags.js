import React from 'react';

const pill_type = {
  tag: 'pill-tag',
  cat: 'pill-cat',
};
export default function Tags({ type, list }) {
  return (
    <span className="flex justify-left items-center flex-wrap">
      {list &&
        list.map((item) => (
          <span key={item} className={`my-0.5 mr-1 pill ${pill_type[type]}`}>
            {item}
          </span>
        ))}
    </span>
  );
}
