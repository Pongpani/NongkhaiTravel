import React from 'react';

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="h-[480px] md:h-[520px] bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative max-w-5xl mx-auto px-4 h-full flex flex-col items-start justify-center text-white space-y-4">
          <p className="uppercase tracking-[0.3em] text-sm text-white/80">Discover Nong Khai</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
            ริมโขงหนองคาย &amp; วัดโพธิ์ชัย
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            อำเภอเมืองหนองคาย จังหวัดหนองคาย — เมืองริมโขงที่เต็มไปด้วยวัดสำคัญ วิวแม่น้ำสุดโรแมนติก และวัฒนธรรมหลากหลายรสชาติ
          </p>
          <div className="flex space-x-3">
            <button className="px-5 py-3 rounded-full bg-gradient-to-r from-brand-500 to-blue-500 font-semibold shadow-lg hover:scale-[1.02] transition-transform">
              ดูรายละเอียด
            </button>
            <button className="px-5 py-3 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm font-semibold hover:bg-white/20 transition">
              สำรวจสถานที่
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
