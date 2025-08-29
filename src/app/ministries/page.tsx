export default function Ministries() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Ministerios
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Descubre cómo puedes servir y crecer en nuestra iglesia
          </p>
        </div>
      </section>

      {/* Main Ministries Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Youth Ministry */}
            <div className="card text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4">
                Ministerio de Jóvenes
              </h3>
              <p className="text-gray-600 mb-6">
                Un espacio dinámico donde los jóvenes pueden crecer en su fe, 
                desarrollar amistades cristianas y divertirse de manera sana.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p><strong>Reuniones:</strong> Viernes 7:00 PM</p>
                <p><strong>Edades:</strong> 13-25 años</p>
                <p><strong>Actividades:</strong> Estudios bíblicos, eventos sociales, retiros</p>
              </div>
            </div>

            {/* Women's Ministry */}
            <div className="card text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-6xl mb-4">👩‍👩‍👧‍👧</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4">
                Ministerio de Mujeres
              </h3>
              <p className="text-gray-600 mb-6">
                Un ministerio que empodera a las mujeres para crecer espiritualmente, 
                desarrollar relaciones significativas y servir a la comunidad.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p><strong>Reuniones:</strong> Sábados 10:00 AM</p>
                <p><strong>Actividades:</strong> Estudios bíblicos, eventos especiales, servicio comunitario</p>
              </div>
            </div>

            {/* Men's Ministry */}
            <div className="card text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-6xl mb-4">👨‍👨‍👦‍👦</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4">
                Ministerio de Hombres
              </h3>
              <p className="text-gray-600 mb-6">
                Un espacio donde los hombres pueden fortalecer su fe, 
                desarrollar liderazgo y construir amistades auténticas.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p><strong>Reuniones:</strong> Sábados 8:00 AM</p>
                <p><strong>Actividades:</strong> Desayunos, estudios bíblicos, proyectos de servicio</p>
              </div>
            </div>

            {/* Children's Ministry */}
            <div className="card text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-6xl mb-4">👶</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4">
                Ministerio de Niños
              </h3>
              <p className="text-gray-600 mb-6">
                Un ministerio dedicado a enseñar a los niños sobre el amor de Dios 
                de manera divertida y apropiada para su edad.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p><strong>Edades:</strong> 0-12 años</p>
                <p><strong>Actividades:</strong> Escuela dominical, eventos especiales, manualidades</p>
              </div>
            </div>

            {/* Music Ministry */}
            <div className="card text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4">
                Ministerio de Música
              </h3>
              <p className="text-gray-600 mb-6">
                Un ministerio que usa la música para adorar a Dios y 
                crear una atmósfera de adoración en nuestros servicios.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p><strong>Reuniones:</strong> Jueves 7:00 PM</p>
                <p><strong>Necesidades:</strong> Músicos, cantantes, técnicos de sonido</p>
              </div>
            </div>

            {/* Outreach Ministry */}
            <div className="card text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4">
                Ministerio de Alcance
              </h3>
              <p className="text-gray-600 mb-6">
                Un ministerio que lleva el amor de Cristo a nuestra comunidad 
                a través de servicio, evangelismo y compasión.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p><strong>Actividades:</strong> Visitas hospitalarias, distribución de alimentos, evangelismo</p>
                <p><strong>Horarios:</strong> Varios días de la semana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Cómo Puedes Participar?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Cada uno de nosotros tiene dones y talentos que podemos usar para servir a Dios y a otros. 
            Te invitamos a descubrir dónde puedes hacer la diferencia.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card text-center">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Descubre Tus Dones
              </h3>
              <p className="text-gray-600 mb-4">
                Toma tiempo para reflexionar sobre tus pasiones y habilidades.
              </p>
              <button className="btn-primary">
                Evaluación de Dones
              </button>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Habla con un Líder
              </h3>
              <p className="text-gray-600 mb-4">
                Conecta con los líderes de los ministerios que te interesan.
              </p>
              <button className="btn-primary">
                Contactar Líder
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Leaders Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Líderes de Ministerios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👨‍💼
              </div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">
                Pastor de Jóvenes
              </h3>
              <p className="text-gray-600 text-sm">
                Liderando el ministerio juvenil con pasión y creatividad.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👩‍💼
              </div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">
                Líder de Mujeres
              </h3>
              <p className="text-gray-600 text-sm">
                Guiando a las mujeres en su crecimiento espiritual.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                🎵
              </div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">
                Director de Música
              </h3>
              <p className="text-gray-600 text-sm">
                Coordinando la adoración musical de la iglesia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
