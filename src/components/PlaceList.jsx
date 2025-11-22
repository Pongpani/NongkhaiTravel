import React from 'react';
import PlaceCard from './PlaceCard';

const PlaceList = ({ places }) => {
  return (
    <section id="places">
      {places.length === 0 ? (
        <div className="text-center py-16 bg-white/70 rounded-2xl border">
          <p className="text-lg font-semibold text-gray-700">ไม่พบสถานที่ที่ค้นหา</p>
          <p className="text-sm text-gray-500 mt-1">ลองเปลี่ยนคำค้นหรือเลือกหมวดหมู่อื่น</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PlaceList;
