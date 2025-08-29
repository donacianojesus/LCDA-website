export default function Events() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Eventos y Anuncios
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Mantente al día con lo que está sucediendo en nuestra iglesia
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Próximos Eventos
          </h2>
          
          <div className="space-y-8">
            {/* Event 1 */}
            <div className="card hover:shadow-lg transition-shadow duration-200">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center md:text-left">
                  <div className="text-4xl font-bold text-primary-600">15</div>
                  <div className="text-lg text-gray-600">Septiembre</div>
                  <div className="text-sm text-gray-500">2024</div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Conferencia de Jóvenes
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Una conferencia especial para jóvenes con música, predicación y actividades 
                    diseñadas para fortalecer su fe y construir amistades cristianas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      🕐 6:00 PM - 9:00 PM
                    </span>
                    <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                      📍 Auditorio Principal
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      🎯 Jóvenes 13-25 años
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="card hover:shadow-lg transition-shadow duration-200">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center md:text-left">
                  <div className="text-4xl font-bold text-primary-600">22</div>
                  <div className="text-lg text-gray-600">Septiembre</div>
                  <div className="text-sm text-gray-500">2024</div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Bautismo en el Espíritu Santo
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Servicio especial donde los nuevos creyentes recibirán el bautismo 
                    del Espíritu Santo. ¡Ven y celebra con nosotros!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      🕐 11:00 AM
                    </span>
                    <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                      📍 Auditorio Principal
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                      ✨ Servicio Especial
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 3 */}
            <div className="card hover:shadow-lg transition-shadow duration-200">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center md:text-left">
                  <div className="text-4xl font-bold text-primary-600">29</div>
                  <div className="text-lg text-gray-600">Septiembre</div>
                  <div className="text-sm text-gray-500">2024</div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Cena de Celebración
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Una noche especial de compañerismo y celebración. Trae un plato 
                    para compartir y disfruta de la comunión con la familia de la iglesia.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      🕐 6:00 PM
                    </span>
                    <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                      📍 Salón de Eventos
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                      🍽️ Potluck
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Horario Semanal
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-600 mb-4 text-center">
                Domingo
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Escuela Dominical</span>
                  <span className="font-semibold text-gray-900">9:30 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Servicio de Adoración</span>
                  <span className="font-semibold text-gray-900">11:00 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Servicio de Oración</span>
                  <span className="font-semibold text-gray-900">6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-primary-600 mb-4 text-center">
                Miércoles
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Estudio Bíblico</span>
                  <span className="font-semibold text-gray-900">7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Ministerio de Jóvenes</span>
                  <span className="font-semibold text-gray-900">7:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Anuncios Importantes
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🎉 ¡Bienvenidos Nuevos Miembros!
              </h3>
              <p className="text-gray-600">
                Damos la bienvenida a las nuevas familias que se han unido a nuestra congregación. 
                ¡Que Dios los bendiga en su nueva casa espiritual!
              </p>
              <p className="text-sm text-gray-500 mt-2">Publicado: 1 de Septiembre, 2024</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                📚 Nuevo Estudio Bíblico
              </h3>
              <p className="text-gray-600">
                Comenzamos un nuevo estudio bíblico sobre "Los Frutos del Espíritu" 
                este miércoles. ¡No te lo pierdas!
              </p>
              <p className="text-sm text-gray-500 mt-2">Publicado: 30 de Agosto, 2024</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🤝 Necesitamos Voluntarios
              </h3>
              <p className="text-gray-600">
                Estamos buscando voluntarios para el ministerio de niños y el equipo de 
                limpieza. Si puedes ayudar, habla con el pastor.
              </p>
              <p className="text-sm text-gray-500 mt-2">Publicado: 28 de Agosto, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mantente Informado
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Suscríbete para recibir actualizaciones sobre eventos y anuncios
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Suscribir
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
