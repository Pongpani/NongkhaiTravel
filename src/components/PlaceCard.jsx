import React from 'react';

const PlaceCard = ({ place }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white border border-white/70 hover:-translate-y-1 hover:shadow-xl transition-transform duration-200">
      <span className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-brand-700 shadow-md">
        {place.category}
      </span>
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img
          src={place.imageUrl}
          alt={place.name}
          className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">{place.name}</h3>
          <p className="text-sm text-gray-600">{place.location}</p>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">{place.description}</p>
        <div className="flex justify-between items-center pt-1">
          <button className="text-sm font-semibold text-brand-700 hover:text-brand-800">
            ดูรายละเอียด
          </button>
          <div className="flex -space-x-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-blue-400 text-white text-xs font-bold flex items-center justify-center shadow-md">
              NK
            </span>
            <span className="w-8 h-8 rounded-full bg-white border text-[10px] text-gray-600 flex items-center justify-center shadow-sm">
              View
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
