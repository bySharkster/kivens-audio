import React from 'react'

export const Footer = () => {
  return (
    <footer className="py-12 bg-background text-foreground">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid gap-8 mb-8 md:grid-cols-3">
          <div>
            <h4 className="mb-4 text-xl font-bold">Enlaces Rápidos</h4>
            <div className="space-y-2">
              {["Sobre Nosotros", "Servicios", "Testimonios", "Contacto"].map(
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
            <h4 className="mb-4 text-xl font-bold">Servicios</h4>
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
            <h4 className="mb-4 text-xl font-bold">Legal</h4>
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
        <div className="pt-8 text-sm text-center text-gray-400 border-t border-gray-800">
          2025 Rolan2 Audio. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
