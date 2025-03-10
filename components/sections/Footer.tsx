import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              {["Sobre Nosotros", "Servicios", "Testimonios"].map(
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
  )
}
