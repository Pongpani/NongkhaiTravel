import React from 'react';
import { MagnifyingGlassIcon } from './icons/MagnifyingGlassIcon';

const SearchFilter = ({ query, setQuery, categories, activeCategory, setActiveCategory }) => {
  return (
    <section className="relative -mt-16 md:-mt-20 z-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* กล่องค้นหา */}
        <div className="glass-card rounded-3xl p-4 md:p-6 shadow-xl">
          <form
            className="flex flex-col md:flex-row items-stretch md:items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="ค้นหาสถานที่ที่อยากไปในหนองคาย..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-brand-400 focus:border-brand-400 outline-none bg-white/90"
              />
            </div>
            <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-500 to-blue-500 text-white font-semibold shadow-md hover:shadow-lg transition">
              ค้นหา
            </button>
          </form>

          {/* หมวดหมู่ */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition shadow-sm hover:shadow-md ${
                    active
                      ? 'bg-gradient-to-r from-brand-500 to-blue-500 text-white border-transparent'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-brand-300'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
