export default function Give() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ofrendas y Donaciones
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Apoya la misión de nuestra iglesia y el trabajo del Reino
          </p>
        </div>
      </section>

      {/* Why Give Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            ¿Por Qué Dar?
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            La Biblia nos enseña que dar es una parte fundamental de la adoración cristiana. 
            Cuando damos, no solo apoyamos la obra de Dios, sino que también crecemos espiritualmente.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Adoración
              </h3>
              <p className="text-gray-600">
                Dar es una forma de adorar a Dios y reconocer que todo lo que tenemos viene de Él.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Servicio
              </h3>
              <p className="text-gray-600">
                Nuestras ofrendas permiten que la iglesia sirva a la comunidad y cumpla su misión.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Bendición
              </h3>
              <p className="text-gray-600">
                Dios promete bendecir a quienes dan generosamente y con alegría.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Options */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Formas de Dar
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* In-Person Giving */}
            <div className="card">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💒</div>
                <h3 className="text-2xl font-bold text-primary-600 mb-3">
                  Ofrendas en Persona
                </h3>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                Puedes dar tu ofrenda durante nuestros servicios dominicales o 
                en horarios de oficina.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span>Domingo - Servicio Principal</span>
                  <span className="font-semibold">11:00 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Oficina - Lunes a Viernes</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Online Giving */}
            <div className="card">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-primary-600 mb-3">
                  Ofrendas en Línea
                </h3>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                Da tu ofrenda de forma segura y conveniente desde cualquier lugar.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span>Tarjeta de Crédito/Débito</span>
                  <span className="text-green-600">✓ Disponible</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Transferencia Bancaria</span>
                  <span className="text-green-600">✓ Disponible</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>PayPal</span>
                  <span className="text-blue-600">Próximamente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Giving Form */}
      <section className="section-padding bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Ofrenda en Línea
          </h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                Cantidad *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  required
                  min="1"
                  step="0.01"
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Categoría de Ofrenda
              </label>
              <select
                id="category"
                name="category"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="general">Ofrenda General</option>
                <option value="missions">Misiones</option>
                <option value="building">Fondo de Construcción</option>
                <option value="youth">Ministerio de Jóvenes</option>
                <option value="children">Ministerio de Niños</option>
                <option value="outreach">Ministerio de Alcance</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje (Opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Un mensaje especial o intención de oración..."
              ></textarea>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 text-xl">ℹ️</div>
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">Información Importante:</p>
                  <ul className="space-y-1">
                    <li>• Todas las donaciones son procesadas de forma segura</li>
                    <li>• Recibirás un recibo por email</li>
                    <li>• Las ofrendas son deducibles de impuestos</li>
                    <li>• Puedes cancelar en cualquier momento</li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-3 text-lg"
            >
              Proceder con la Ofrenda
            </button>
          </form>
        </div>
      </section>

      {/* Biblical Principles */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Principios Bíblicos sobre Dar
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">
                Malaquías 3:10
              </h3>
              <blockquote className="text-gray-700 italic mb-4">
                "Traed todos los diezmos al alfolí y haya alimento en mi casa; 
                y probadme ahora en esto, dice Jehová de los ejércitos, 
                si no os abriré las ventanas de los cielos..."
              </blockquote>
              <p className="text-gray-600 text-sm">
                Dios promete bendecir abundantemente a quienes son fieles en sus diezmos.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">
                2 Corintios 9:7
              </h3>
              <blockquote className="text-gray-700 italic mb-4">
                "Cada uno dé como propuso en su corazón: no con tristeza, 
                ni por necesidad, porque Dios ama al dador alegre."
              </blockquote>
              <p className="text-gray-600 text-sm">
                Dios quiere que demos con alegría y de corazón, no por obligación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Tienes Preguntas?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Si tienes preguntas sobre las ofrendas o necesitas ayuda, 
            no dudes en contactarnos.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-lg font-semibold mb-2">Llámanos</h3>
              <p className="text-sm opacity-90">(570) XXX-XXXX</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="text-lg font-semibold mb-2">Envíanos un Email</h3>
              <p className="text-sm opacity-90">finanzas@lcdachurch.org</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
