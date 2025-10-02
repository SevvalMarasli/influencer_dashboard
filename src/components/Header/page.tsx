import React from 'react';
import { UserCircle, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-center p-2  tracking-wider">
      <header className="w-full max-w-full sm:max-w-5xl bg-white rounded-xl shadow-xl flex justify-between items-center px-3 py-2 sm:px-4 sm:py-4 gap-6">
        
        {/* Logo */}
        <h1 className="text-xl sm:text-3xl font-extrabold
                       bg-gradient-to-r from-royalPurple to-deepNavy 
                       bg-clip-text text-transparent">
          Infofluencer
        </h1>

        {/* Profil */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer p-2 rounded-full hover:bg-gray-100 transition font-lato">
          <div className="bg-primaryBlue rounded-full text-primaryPurple">
            <UserCircle size={22} className="sm:w-[25px] sm:h-[25px]" />
          </div>

          <span className="text-sm sm:text-base font-semibold text-grayText hidden sm:block">
            Admin
          </span>

          <ChevronDown size={18} className="text-gray-500 sm:w-[20px] sm:h-[20px]" />
        </div>
      </header>
    </div>
  );
};

export default Header;
