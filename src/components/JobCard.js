import React from 'react';
import { Link } from 'gatsby';
import Tags from './Tags';
import Locations from './Locations';
import { fromNow } from '../utils/dt';

export default function JobCard({ title, employer, id, slug, metadata }) {
  return (
    <Link to={slug}>
      <div className="card m-2 border hover:border-custom-orange rounded-lg bg-gray-50 text-base p-4 cursor-pointer">
        {/* header */}
        <div className="divide-y">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg">{title}</h2>
              <div className="text-sm text-teal-800 font-mono rounded-full animate-pulse text-right align-middle">
                {fromNow(metadata.date)}
              </div>
            </div>
            <div className="text-sm font-semibold mb-2">{employer}</div>
          </div>
          <div className="text-sm">
            <Locations list={metadata.location} />
          </div>
        </div>
        <div>
          <div className="mt-4 flex">
            <div className="w-60">
              <div className="-ml-2 mt-2 flex flex-wrap">
                <Tags type="cat" list={metadata.categories} />
              </div>
            </div>
            <div className="flex-grow">
              <div className="-ml-2 mt-2">
                <Tags type="tag" list={metadata.tags} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
