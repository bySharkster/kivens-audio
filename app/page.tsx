
import { ContactSection } from "@/components/sections/ContactSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import type { Service, Testimonial } from "@/types";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {


  const services: Service[] = [
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

  const testimonials: Testimonial[] = [
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
    <div className="min-h-[1024px] w-full bg-background text-foreground">

      {/* Sección Hero */}
     <HeroSection/>

      {/* Sección de Servicios */}
     <ServicesSection services={services} />

      {/* Sección de Testimonios */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Sección de Contacto */}
      <ContactSection />


    </div>
  );
};