import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            La Casa del Alfarero
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Bienvenidos a nuestra iglesia en Scranton, Pennsylvania
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Una comunidad de fe que sirve a Dios y a nuestra comunidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary text-lg px-8 py-3">
              Conoce Nuestra Iglesia
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-3">
              Visítanos
            </Link>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Horarios de Servicios
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card text-center">
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                Domingo
              </h3>
              <p className="text-lg text-gray-700 mb-2">Servicio de Adoración</p>
              <p className="text-2xl font-bold text-gray-900">11:00 AM</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                Miércoles
              </h3>
              <p className="text-lg text-gray-700 mb-2">Estudio Bíblico</p>
              <p className="text-2xl font-bold text-gray-900">7:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nuestras Áreas de Servicio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/ministries" className="card text-center hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Ministerios</h3>
              <p className="text-gray-600">Jóvenes, Mujeres, Hombres y más</p>
            </Link>
            <Link href="/events" className="card text-center hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Eventos</h3>
              <p className="text-gray-600">Actividades y anuncios</p>
            </Link>
            <Link href="/give" className="card text-center hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Ofrendas</h3>
              <p className="text-gray-600">Apoya nuestra misión</p>
            </Link>
            <Link href="/contact" className="card text-center hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Contacto</h3>
              <p className="text-gray-600">Ubicación y información</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
