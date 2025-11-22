import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchFilter from './components/SearchFilter';
import PlaceList from './components/PlaceList';

// ข้อมูล mock สถานที่ท่องเที่ยวในอำเภอเมืองหนองคาย
const places = [
  {
    id: 'sala-kaew-ku',
    name: 'ศาลาแก้วกู่',
    category: 'แลนด์มาร์ก',
    location: 'อำเภอเมืองหนองคาย จังหวัดหนองคาย',
    imageUrl:
      'https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=1200&q=80',
    description:
      'สวนประติมากรรมพญานาคและประติมากรรมพุทธศิลป์ขนาดใหญ่ บรรยากาศร่มรื่น เหมาะกับการเดินชมและถ่ายภาพ',
  },
  {
    id: 'wat-pho-chai',
    name: 'วัดโพธิ์ชัย',
    category: 'วัด/วัดไทย',
    location: 'อำเภอเมืองหนองคาย จังหวัดหนองคาย',
    imageUrl:
      'https://images.unsplash.com/photo-1569992244284-16e4c7ce0694?auto=format&fit=crop&w=1200&q=80',
    description:
      'วัดสำคัญประจำจังหวัด เป็นที่ประดิษฐานหลวงพ่อพระใส พระพุทธรูปคู่บ้านคู่เมืองและศูนย์รวมจิตใจของชาวหนองคาย',
  },
  {
    id: 'rimkhong-walk',
    name: 'ริมโขงหนองคาย',
    category: 'ริมโขง',
    location: 'ถนนเลียบแม่น้ำโขง อำเภอเมืองหนองคาย',
    imageUrl:
      'https://images.unsplash.com/photo-1526481280695-3c469c2f68f7?auto=format&fit=crop&w=1200&q=80',
    description:
      'เส้นทางเดินเล่นและปั่นจักรยานชมวิวแม่น้ำโขง แสงเย็นสวยงาม มีร้านอาหารและคาเฟ่ให้เลือกนั่งพักผ่อน',
  },
  {
    id: 'tha-sadet-market',
    name: 'ตลาดท่าเสด็จ',
    category: 'ตลาด/ชุมชน',
    location: 'ริมแม่น้ำโขง ใกล้สะพานมิตรภาพไทย-ลาว',
    imageUrl:
      'https://images.unsplash.com/photo-1533920298318-06e0e8b16c6f?auto=format&fit=crop&w=1200&q=80',
    description:
      'ตลาดเก่าแก่ริมโขง จำหน่ายสินค้าพื้นเมือง ของฝาก และอาหารท้องถิ่น บรรยากาศคึกคักตลอดวัน',
  },
  {
    id: 'saphan-mittraphap',
    name: 'สะพานมิตรภาพไทย-ลาว แห่งที่ 1',
    category: 'แลนด์มาร์ก',
    location: 'บ้านหนองกอมเกาะ อำเภอเมืองหนองคาย',
    imageUrl:
      'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=1200&q=80',
    description:
      'สะพานข้ามแม่น้ำโขงแห่งแรก เชื่อมต่อไทย-ลาว จุดชมวิวพระอาทิตย์ขึ้นและลงที่งดงาม เห็นวิถีชีวิตริมน้ำ',
  },
  {
    id: 'skywalk-wat-pu-tok',
    name: 'สกายวอล์กวัดผาตากเสื้อ (ใกล้เมือง)',
    category: 'แลนด์มาร์ก',
    location: 'ตำบลบ้านเดื่อ อำเภอเมืองหนองคาย',
    imageUrl:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    description:
      'ทางเดินกระจกยื่นออกจากหน้าผา มองเห็นโค้งแม่น้ำโขงและฝั่งลาวแบบพาโนรามา เป็นจุดถ่ายรูปยอดนิยม',
  },
  {
    id: 'hygge-cafe',
    name: 'Hygge Café & Bistro',
    category: 'คาเฟ่',
    location: 'ถนนประจักษ์ศิลปาคม อำเภอเมืองหนองคาย',
    imageUrl:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    description:
      'คาเฟ่สไตล์มินิมัลโทนอบอุ่น เสิร์ฟกาแฟพิเศษและขนมโฮมเมด มีมุมถ่ายรูปและพื้นที่ทำงานสงบสบาย',
  },
  {
    id: 'mali-cafe',
    name: 'Mali Café & Eatery',
    category: 'คาเฟ่',
    location: 'ถนนพิบูลสงคราม อำเภอเมืองหนองคาย',
    imageUrl:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    description:
      'คาเฟ่และร้านอาหารบรรยากาศสบาย มองเห็นแม่น้ำโขง เมนูฟิวชันและเครื่องดื่มหลากหลาย เหมาะกับการนั่งชิล',
  },
  {
    id: 'rimkhong-park',
    name: 'สวนสาธารณะหนองคายริเวอร์ไซด์พาร์ค',
    category: 'ริมโขง',
    location: 'ถนนสันติสุข อำเภอเมืองหนองคาย',
    imageUrl:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    description:
      'สวนสาธารณะขนาดใหญ่ติดแม่น้ำโขง มีลานออกกำลังกาย เส้นทางวิ่ง และสนามเด็กเล่น เหมาะสำหรับครอบครัว',
  },
  {
    id: 'pho-chai-museum',
    name: 'พิพิธภัณฑ์วัดโพธิ์ชัย',
    category: 'วัด/วัดไทย',
    location: 'ภายในวัดโพธิ์ชัย อำเภอเมืองหนองคาย',
    imageUrl:
      'https://images.unsplash.com/photo-1500214753174-c6f63e26c9c8?auto=format&fit=crop&w=1200&q=80',
    description:
      'จัดแสดงโบราณวัตถุและประวัติความเป็นมาของหลวงพ่อพระใส เรียนรู้ศิลปวัฒนธรรมท้องถิ่นอย่างใกล้ชิด',
  },
  {
    id: 'lan-pha-yak',
    name: 'ลานพญาศรีสัตตนาคราช',
    category: 'แลนด์มาร์ก',
    location: 'ริมแม่น้ำโขง ใกล้ท่าเสด็จ',
    imageUrl:
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80',
    description:
      'ลานประดิษฐานรูปหล่อพญานาคองค์ใหญ่ สัญลักษณ์ใหม่ของหนองคาย รายล้อมด้วยวิวแม่น้ำและบรรยากาศสบาย',
  },
];

const categories = ['ทั้งหมด', 'วัด/วัดไทย', 'แลนด์มาร์ก', 'ริมโขง', 'คาเฟ่', 'ตลาด/ชุมชน'];

function App() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ทั้งหมด');

  const filteredPlaces = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();

    return places.filter((place) => {
      const matchCategory =
        activeCategory === 'ทั้งหมด' || place.category === activeCategory;
      const matchQuery =
        !normalizedQuery ||
        place.name.toLowerCase().includes(normalizedQuery) ||
        place.location.toLowerCase().includes(normalizedQuery);
      return matchCategory && matchQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 via-white to-blue-50 text-gray-900">
      <Navbar />
      <Hero />
      <SearchFilter
        query={query}
        setQuery={setQuery}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <main className="max-w-6xl mx-auto px-4 pb-16 space-y-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-600 font-semibold">
              NongkhaiTravel
            </p>
            <h2 className="section-heading mt-1">สถานที่แนะนำในอำเภอเมืองหนองคาย</h2>
          </div>
          <div className="hidden md:flex space-x-2 text-sm text-gray-500">
            <span className="px-3 py-1 rounded-full bg-white border shadow-sm">
              รวมทั้งหมด {places.length} จุด
            </span>
            <span className="px-3 py-1 rounded-full bg-white border shadow-sm">
              กรองได้ {filteredPlaces.length} จุด
            </span>
          </div>
        </div>

        <PlaceList places={filteredPlaces} />

        <section id="about" className="glass-card rounded-3xl p-8 md:p-10 space-y-4">
          <h3 className="section-heading">เกี่ยวกับอำเภอเมืองหนองคาย</h3>
          <p className="text-gray-700 leading-relaxed">
            เมืองหนองคายเป็นประตูสู่อินโดจีนริมฝั่งแม่น้ำโขง มีทั้งวัดสำคัญ สะพานมิตรภาพไทย-ลาว ตลาดท่าเสด็จ และวิถีชีวิตริมน้ำที่อบอุ่น
            ตอบโจทย์ทั้งสายไหว้พระ สายคาเฟ่ และสายธรรมชาติในทริปเดียว
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-2xl bg-white shadow-sm border">
              <p className="font-semibold text-brand-700">การเดินทาง</p>
              <p className="text-gray-600 mt-1">ขับรถจากกรุงเทพฯ ประมาณ 8 ชั่วโมง หรือบินลงอุดรธานีแล้วต่อรถบัส/รถตู้ 45 นาที</p>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-sm border">
              <p className="font-semibold text-brand-700">เทศกาลเด่น</p>
              <p className="text-gray-600 mt-1">บั้งไฟพญานาค ออกพรรษาริมโขง และงานบุญบั้งไฟชุมชนรอบเมือง</p>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-sm border">
              <p className="font-semibold text-brand-700">สายชิลล์</p>
              <p className="text-gray-600 mt-1">เดินเล่นริมโขง จิบกาแฟชมพระอาทิตย์ตก และเลือกซื้อของฝากที่ตลาดท่าเสด็จ</p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl bg-gradient-to-r from-brand-500 to-blue-500 text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4 shadow-lg"
        >
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-white/80">Contact</p>
            <h3 className="text-2xl font-semibold mt-1">ติดต่อทีม NongkhaiTravel</h3>
            <p className="text-white/90 mt-2 max-w-2xl">
              ต้องการข้อมูลเพิ่มเติมเกี่ยวกับเส้นทาง ร้านอาหาร หรือแผนทริป 2-3 วันในอำเภอเมืองหนองคาย ส่งข้อความมาหาเราได้เลย
            </p>
          </div>
          <div className="space-y-2 text-white/90">
            <a className="block px-4 py-3 bg-white/10 rounded-2xl border border-white/30 hover:bg-white/15 transition" href="mailto:hello@nongkhaitravel.example">
              hello@nongkhaitravel.example
            </a>
            <a className="block px-4 py-3 bg-white/10 rounded-2xl border border-white/30 hover:bg-white/15 transition" href="tel:+66999999999">
              099-999-9999
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
