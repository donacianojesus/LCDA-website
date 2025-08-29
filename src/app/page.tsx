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
            Welcome to our church in Scranton, Pennsylvania
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
            A community of faith serving God and our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary text-lg px-8 py-3">
              Learn About Our Church
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-3">
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Picture Slideshow Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Church Family
          </h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-4xl mb-4">📸</div>
              <p className="text-lg">Church Photo Slideshow</p>
              <p className="text-sm mt-2">Beautiful moments from our services and events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Service Times
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                Sunday
              </h3>
              <p className="text-lg text-gray-700 mb-2">Sunday School</p>
              <p className="text-2xl font-bold text-gray-900">10:00 AM - 1:00 PM</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                Tuesday
              </h3>
              <p className="text-lg text-gray-700 mb-2">Prayer & Doctrine</p>
              <p className="text-2xl font-bold text-gray-900">7:00 PM - 9:00 PM</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                Friday
              </h3>
              <p className="text-lg text-gray-700 mb-2">Praise & Worship</p>
              <p className="text-2xl font-bold text-gray-900">7:00 PM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Areas of Service
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/ministries" className="card text-center hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Ministries</h3>
              <p className="text-gray-600">Youth, Women, Men and more</p>
            </Link>
            <Link href="/events" className="card text-center hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Events</h3>
              <p className="text-gray-600">Activities and announcements</p>
            </Link>
            <Link href="/give" className="card text-center hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Give</h3>
              <p className="text-gray-600">Support our mission</p>
            </Link>
            <Link href="/contact" className="card text-center hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Contact</h3>
              <p className="text-gray-600">Location and information</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
