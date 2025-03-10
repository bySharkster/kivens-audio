import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <section
    id="inicio"
    className="overflow-hidden relative w-full h-screen"
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
        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
          Eleva Tus Eventos con Sonido y Luz
        </h1>
        <p className="mb-8 text-xl text-gray-200">
          Servicios profesionales de DJ para bodas, eventos corporativos y
          fiestas privadas. Creando experiencias inolvidables a través de la
          música y la atmósfera.
        </p>
        <Button asChild className="!rounded-button whitespace-nowrap text-lg px-8 py-6 bg-[#8A2BE2] hover:bg-[#7B27CC]">
          <Link href="#contacto">Reserva Tu Evento</Link>
        </Button>
      </div>
    </div>
  </section>
  )
}
