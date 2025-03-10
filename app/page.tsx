"use client"

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: "fa-music",
      title: "Sistemas de Sonido Profesional",
      description:
        "Equipo de audio de última generación que ofrece un sonido cristalino para cualquier tamaño de lugar.",
    },
    {
      icon: "fa-lights-holiday",
      title: "Efectos de Iluminación Dinámicos",
      description:
        "Crea la atmósfera perfecta con nuestra tecnología de iluminación avanzada y efectos.",
    },
    {
      icon: "fa-sliders",
      title: "Personalización de Eventos",
      description:
        "Selección de música y esquemas de iluminación adaptados para coincidir con el tema de tu evento.",
    },
  ];

  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1741073104186-81bd0fed603e?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "El mejor servicio de DJ que podríamos haber pedido para nuestra boda. ¡Todos estuvieron bailando toda la noche!",
      name: "Alba Rodríguez",
      event: "Celebración de Boda",
    },
    {
      image:
        "https://images.unsplash.com/photo-1740459223350-0fc006bf870d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "Hizo que nuestro evento corporativo fuera verdaderamente memorable. Excelente profesionalismo y selección musical.",
      name: "Miguel Ojara",
      event: "Gala Corporativa",
    },
  ];

  return (
    <div className="min-h-[1024px] w-full bg-[#121212] text-white">
      {/* Encabezado */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90" : "bg-transparent"}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#FF6EC7] bg-clip-text text-transparent">
          Rolan2 Audio
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Inicio", "Servicios", "Eventos", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#FF6EC7] transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
            <Button className="!rounded-button whitespace-nowrap bg-[#8A2BE2] hover:bg-[#7B27CC]">
              Reservar Ahora
            </Button>
          </div>

          <Button
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}/>
          </Button>
        </div>

        {/* Menú Móvil */}
        <div
          className={`md:hidden transition-all duration-300 ${isMenuOpen ? "max-h-64" : "max-h-0"} overflow-hidden bg-black/90`}
        >
          {["Inicio", "Servicios", "Eventos", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-3 hover:bg-[#8A2BE2]/20 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="px-6 py-3">
            <Button className="w-full !rounded-button whitespace-nowrap bg-[#8A2BE2] hover:bg-[#7B27CC]">
              Reservar Ahora
            </Button>
          </div>
        </div>
      </header>

      {/* Sección Hero */}
      <section
        className="relative h-screen w-full overflow-hidden"
        style={{
          backgroundImage:
            "url(/images/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"/>
        <div className="relative h-full max-w-[1440px] mx-auto px-6 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Eleva Tus Eventos con Sonido y Luz
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Servicios profesionales de DJ para bodas, eventos corporativos y
              fiestas privadas. Creando experiencias inolvidables a través de la
              música y la atmósfera.
            </p>
            <Button className="!rounded-button whitespace-nowrap text-lg px-8 py-6 bg-[#8A2BE2] hover:bg-[#7B27CC]">
              Reserva Tu Evento
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="py-20 bg-[#1E1E3F]">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="bg-[#121212]/50 border-none text-white hover:transform hover:scale-105 transition-transform duration-300"
              >
                <CardHeader>
                  <i
                    className={`fas ${service.icon} text-4xl text-[#FF6EC7] mb-4`}
                  />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            spaceBetween={30}
            slidesPerView={1}
            className="mb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <div className="text-center px-4 py-8">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                    width={96}
                    height={96}
                  />
                  <p className="text-xl italic mb-4">{testimonial.quote}</p>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.event}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-20 bg-[#1E1E3F]">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Contáctanos</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Reserva Tu Evento</h3>
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Tu Nombre"
                  className="bg-[#121212]/50 border-none text-white"
                />
                <Input
                  type="email"
                  placeholder="Dirección de Correo Electrónico"
                  className="bg-[#121212]/50 border-none text-white"
                />
                <Select>
                  <SelectTrigger className="bg-[#121212]/50 border-none text-white">
                    <SelectValue placeholder="Tipo de Evento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Boda</SelectItem>
                    <SelectItem value="corporate">Evento Corporativo</SelectItem>
                    <SelectItem value="birthday">Fiesta de Cumpleaños</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="date"
                  className="bg-[#121212]/50 border-none text-white"
                />
                <Textarea
                  placeholder="Cuéntanos sobre tu evento"
                  className="bg-[#121212]/50 border-none text-white"
                />
                <Button className="w-full !rounded-button whitespace-nowrap bg-[#8A2BE2] hover:bg-[#7B27CC]">
                  Enviar Mensaje
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <p>
                  <i className="fas fa-envelope mr-3"/>{" "}
                  contact@rolan2audio.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"/> +1 (939) 415-7217
                </p>
                <p>
                  <i className="fas fa-clock mr-3"/>Disponible 24/7
                </p>
                <div className="flex gap-4 mt-8">
                  {["facebook", "instagram", "twitter", "youtube"].map(
                    (social) => (
                      <a
                        key={social}
                        href={`#${social}`}
                        className="text-2xl hover:text-[#FF6EC7] transition-colors cursor-pointer"
                      >
                        <i className={`fab fa-${social}`}/>
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de Página */}
      <footer className="bg-black py-12">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
              <div className="space-y-2">
                {["Sobre Nosotros", "Servicios", "Galería", "Testimonios"].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="block hover:text-[#FF6EC7] transition-colors cursor-pointer"
                    >
                      {link}
                    </a>
                  ),
                )}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Servicios</h4>
              <div className="space-y-2">
                {[
                  "DJ para Bodas",
                  "Eventos Corporativos",
                  "Fiestas de Cumpleaños",
                  "Ocasiones Especiales",
                ].map((service) => (
                  <a
                    key={service}
                    href={`#${service.toLowerCase()}`}
                    className="block hover:text-[#FF6EC7] transition-colors cursor-pointer"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Legal</h4>
              <div className="space-y-2">
                {["Política de Privacidad", "Términos de Servicio", "Política de Cookies"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block hover:text-[#FF6EC7] transition-colors cursor-pointer"
                    >
                      {item}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            2025 Rolan2 Audio. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};