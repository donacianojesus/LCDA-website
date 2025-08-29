export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Acerca de La Casa del Alfarero
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Conoce nuestra historia, misión y visión para la comunidad
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ser una iglesia que glorifique a Dios, edifique a los creyentes y alcance a los perdidos 
              con el evangelio de Jesucristo, formando discípulos que impacten su comunidad y el mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestra Visión
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ser una iglesia multicultural que refleje la diversidad del reino de Dios, 
              donde cada persona encuentre amor, aceptación y propósito en Cristo.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Adoración
              </h3>
              <p className="text-gray-600">
                Adoramos a Dios en espíritu y en verdad, reconociendo Su grandeza y bondad.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Palabra de Dios
              </h3>
              <p className="text-gray-600">
                La Biblia es nuestra autoridad final para la fe y la práctica cristiana.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Comunidad
              </h3>
              <p className="text-gray-600">
                Fomentamos relaciones auténticas y el cuidado mutuo entre los creyentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nuestra Historia
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="mb-6">
              La Casa del Alfarero fue fundada con la visión de servir a la comunidad hispana 
              de Scranton, Pennsylvania, y compartir el amor de Cristo con todos.
            </p>
            <p className="mb-6">
              Desde nuestros inicios, hemos estado comprometidos con la predicación del evangelio, 
              el discipulado de creyentes y el servicio a nuestra comunidad.
            </p>
            <p>
              Como parte de IPUL (Iglesia Pentecostal Unida Latinoamérica), mantenemos la 
              doctrina apostólica y la experiencia pentecostal que caracteriza a nuestro movimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nuestro Liderazgo
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                👨‍💼
              </div>
              <h3 className="text-xl font-semibold text-primary-600 mb-2">
                Pastor Principal
              </h3>
              <p className="text-gray-600">
                Liderando nuestra congregación con sabiduría y compasión.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                👥
              </div>
              <h3 className="text-xl font-semibold text-primary-600 mb-2">
                Consejo de Ancianos
              </h3>
              <p className="text-gray-600">
                Proporcionando dirección espiritual y sabiduría a la iglesia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
