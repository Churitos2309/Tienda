import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";


const Header = () => {
const location = useLocation

  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">CrespoRan</h1>
          <p className="text-gray-500">09 Enero 2000</p>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Buscar"
            />
          </div>
        </form>
      </div>
      {/* Tabs */}
      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
          <Link to="/" className="relative py-2 pr-4 before:w-72 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]">
            Platos Calientes
          </Link>
          <Link to="/Platos-Frios" className="py-2 pr-4 text-[#ec7c6a]">
            Platos Frios
          </Link>
          <Link to="/Sopa" className="relative py-2 pr-4 before:w-28 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]">
            Sopa
          </Link>
          <Link to="/Parrilla" className="py-2 text-[#ec7c6a]">
            Parrillas
          </Link>
         
      </nav>
    </header>
  );
};

export default Header;
