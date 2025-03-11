"use client";

import { useState, } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const menuItems = ['Menú', 'Nosotros', 'Eventos'];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/80">
    <div className="container flex justify-between items-center px-4 mx-auto h-20">
      <div className="flex gap-12 items-center">
        <Link className="text-2xl font-bold text-[#5c3444] cursor-pointer" href="#">{siteConfig.business.name}</Link>
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <a key={item} href={`#${item === 'Menú' ? 'menu' : item.toLowerCase()}`} className="text-[#5c3444] hover:text-[#ee9ca7] transition-colors cursor-pointer text-sm font-medium whitespace-nowrap">
                {item}
              </a>
            ))}
          </ul>
        </nav>
      </div>
      <div className="hidden gap-6 items-center lg:flex">
        
        <Button className="bg-[#5c3444] text-white hover:bg-[#5c3444]/90 !rounded-button">
          Ordenar en Línea
        </Button>
      </div>
      <Button
        className="lg:hidden text-[#5c3444] cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className="text-xl fas fa-bars"/>
      </Button>
    </div>
    <nav className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100`}>
      <ul className="flex flex-col p-4">
        {['Menú', 'Nosotros', 'Ubicaciones', 'Eventos', 'Ordenar en Línea'].map((item) => (
          <li key={item} className="py-3 text-[#5c3444] hover:text-[#ee9ca7] transition-colors cursor-pointer text-sm font-medium border-b border-gray-100 last:border-none">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  </header>
  

  );
}
