import React from "react";
import { mockFeedItems } from "../utils/mockFeedItems";

const Feed = () => {
  return (
    <aside className="bg-[#F3F2EE] p-4 ">
      <div className="bg-white shadow rounded-lg p-4 text-start">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Añadir a tu feed
        </h2>
        <ul className="space-y-4">
          {mockFeedItems.map((item) => (
            <>
              <li key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.title}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">{item.subtitle}</p>
                    <div className="mt-2">
                      <button className="bg-white font-bold text-gray-800 text-base px-2 py-2 border-gray-800 border-2 rounded-full flex items-center gap-1  transition">
                        <span className="text-base font-bold text-gray-800">
                          +
                        </span>
                        Seguir
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Feed;
