import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              La Casa del Alfarero
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Una comunidad de fe que sirve a Dios y a nuestra comunidad en Scranton, Pennsylvania.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📍 Scranton, PA</p>
              <p>📞 (570) XXX-XXXX</p>
              <p>✉️ info@lcdachurch.org</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Ministerios
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Horarios</h4>
            <div className="space-y-2 text-gray-300">
              <div>
                <p className="font-medium">Domingo</p>
                <p>11:00 AM - Servicio</p>
              </div>
              <div>
                <p className="font-medium">Miércoles</p>
                <p>7:00 PM - Estudio Bíblico</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} La Casa del Alfarero. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacidad
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
