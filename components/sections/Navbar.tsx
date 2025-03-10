"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const menuItems = ["Inicio", "Servicios", "Testimonios", "Contacto"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-sm text-foreground" : "bg-background/5 backdrop-blur-sm text-foreground-alt"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Rolan2 Audio
          </span>
        </div>

        <div className="hidden gap-8 items-center md:flex">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors cursor-pointer text-primary hover:text-primary-hover"
            >
              {item}
            </a>
          ))}
        <Button asChild className="!rounded-button whitespace-nowrap text-lg px-8 py-6 bg-primary hover:bg-primary-hover">
          <Link href="#contacto">Reservar Ahora</Link>
        </Button>
        </div>

        <Button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </Button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-64" : "max-h-0"
        } overflow-hidden bg-background/90 backdrop-blur-sm`}
      >
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block px-6 py-3 cursor-pointer hover:bg-primary/20"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <div className="px-6 py-3">
          <Button className="w-full text-white rounded-button bg-primary hover:bg-primary-hover">
            Reservar Ahora
          </Button>
        </div>
      </div>
    </nav>
  );
}
