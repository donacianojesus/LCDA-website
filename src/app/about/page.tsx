export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About La Casa del Alfarero
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Learn about our history, mission and vision for the community
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              To be a church that glorifies God, builds up believers and reaches the lost 
              with the gospel of Jesus Christ, forming disciples who impact their community and the world.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              To be a multicultural church that reflects the diversity of God's kingdom, 
              where each person finds love, acceptance and purpose in Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Worship
              </h3>
              <p className="text-gray-600">
                We worship God in spirit and in truth, recognizing His greatness and goodness.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Word of God
              </h3>
              <p className="text-gray-600">
                The Bible is our final authority for faith and Christian practice.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                We foster authentic relationships and mutual care among believers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our History
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="mb-6">
              La Casa del Alfarero was founded with the vision of serving the Hispanic community 
              of Scranton, Pennsylvania, and sharing Christ's love with everyone.
            </p>
            <p className="mb-6">
              Since our beginnings, we have been committed to preaching the gospel, 
              discipling believers and serving our community.
            </p>
            <p>
              As part of IPUL (Iglesia Pentecostal Unida Latinoamérica), we maintain the 
              apostolic doctrine and pentecostal experience that characterizes our movement.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                👨‍💼
              </div>
              <h3 className="text-xl font-semibold text-primary-600 mb-2">
                Senior Pastor
              </h3>
              <p className="text-gray-600 mb-2">
                Pastor Octavio Valencia Jr.
              </p>
              <p className="text-gray-600 text-sm">
                Leading our congregation with wisdom and compassion.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                👥
              </div>
              <h3 className="text-xl font-semibold text-primary-600 mb-2">
                Elder Board
              </h3>
              <p className="text-gray-600">
                Providing spiritual direction and wisdom to the church.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
