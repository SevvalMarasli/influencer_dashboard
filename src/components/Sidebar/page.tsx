'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/app/data';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Sidebar açma-kapama state

  return (
    <>
      <button
        className="md:hidden fixed mt-2 top-100 left-7 w-8 h-8 flex flex-col items-center justify-center p-1 rounded-md bg-grayText text-white z-30"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Basit hamburger icon*/}
        <span className="block w-5 h-[2px] bg-white mb-1"></span>
        <span className="block w-5 h-[2px] bg-white mb-1"></span>
        <span className="block w-5 h-[2px] bg-white"></span>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-100 left-0 h-[400px] w-60 bg-cardBg shadow-xl rounded-xl p-5
          font-lato tracking-wider font-bold flex flex-col gap-12
          transform ${isOpen ? 'translate-x-2' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 md:h-[600px]
        `}
      >
        <div className="mt-6">
          <hr className="flex-1 border-t-1 border-gray-300" />
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
                onClick={() => setIsOpen(false)} //linke tıklayınca sidebar kapanıyor
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
