import React from 'react';

const Navbar = () => {
  const navItems = [
    { label: 'หน้าแรก', href: '#' },
    { label: 'สถานที่ท่องเที่ยว', href: '#places' },
    { label: 'เกี่ยวกับจังหวัด', href: '#about' },
    { label: 'ติดต่อ', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-white/60 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-blue-400 flex items-center justify-center text-white font-bold shadow-lg">
            NT
          </span>
          <span className="text-lg md:text-xl font-semibold text-gray-900">NongkhaiTravel</span>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-gray-700">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-brand-600 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-500 to-blue-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
          เข้าสู่ระบบ
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
