'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/app/data';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger buton */}
      <button
        className="md:hidden fixed top-3 left-4 w-7 h-7 flex flex-col items-center justify-center rounded-xl bg-grayText text-white z-30"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-3 h-[2px] bg-white mb-1"></span>
        <span className="block w-3 h-[2px] bg-white mb-1"></span>
        <span className="block w-3 h-[2px] bg-white"></span>
      </button>

      {/* Overlay - sidebar açıkken */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-60 bg-cardBg shadow-2xl rounded-xl p-5
          font-lato tracking-wider font-bold flex flex-col gap-12
          transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 md:h-[600px] z-20
        `}
      >
        <div className="mt-6">
          <hr className="border-t-2 border-gray-300" />
        </div>

        <nav className="flex-1 flex flex-col gap-6">
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            const baseStyle =
              'flex items-center gap-3 p-3 rounded-xl transition-colors';
            const activeStyle = 'bg-pink text-darkText';
            const inactiveStyle =
              'text-grayText hover:bg-gray-50 hover:text-purple-600';

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
