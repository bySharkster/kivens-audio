"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Service } from "@/types"

interface ServicesSectionProps {
  services: Service[]
}

export const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section id="servicios" className="py-20 bg-[#1E1E3F]">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#8A2BE2] to-[#FF6EC7] bg-clip-text text-transparent">
          Nuestros Servicios
        </h2>
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
  )
}
