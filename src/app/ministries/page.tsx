import Image from 'next/image'

export default function Ministries() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Ministries
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Discover how you can serve and grow in our church
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
                Youth Ministry
              </h3>
              <p className="text-gray-600 mb-6">
                A dynamic space where young people can grow in their faith, 
                develop Christian friendships and have fun in a healthy way.
              </p>
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <p><strong>Ages:</strong> 13-25 years</p>
                <p><strong>Activities:</strong> Bible studies, social events, retreats</p>
              </div>
              <div className="flex justify-center space-x-3">
                <a href="https://www.instagram.com/ipulscrantonyouth/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/Instagram_icon.png" alt="Instagram" width={24} height={24} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <span className="text-lg">📘</span>
                </a>
              </div>
            </div>

            {/* Women's Ministry */}
            <div className="card text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-6xl mb-4">👩‍👩‍👧‍👧</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4">
                Women's Ministry
              </h3>
              <p className="text-gray-600 mb-6">
                A ministry that empowers women to grow spiritually, 
                develop meaningful relationships and serve the community.
              </p>
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <p><strong>Activities:</strong> Bible studies, special events, community service</p>
              </div>
              <div className="flex justify-center space-x-3">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/Instagram_icon.png" alt="Instagram" width={24} height={24} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <span className="text-lg">📘</span>
                </a>
              </div>
            </div>

            {/* Men's Ministry */}
            <div className="card text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-6xl mb-4">👨‍👨‍👦‍👦</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4">
                Men's Ministry
              </h3>
              <p className="text-gray-600 mb-6">
                A space where men can strengthen their faith, 
                develop leadership and build authentic friendships.
              </p>
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <p><strong>Activities:</strong> Breakfasts, Bible studies, service projects</p>
              </div>
              <div className="flex justify-center space-x-3">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/Instagram_icon.png" alt="Instagram" width={24} height={24} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <span className="text-lg">📘</span>
                </a>
              </div>
            </div>

            {/* Children's Ministry */}
            <div className="card text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-6xl mb-4">👶</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4">
                Children's Ministry
              </h3>
              <p className="text-gray-600 mb-6">
                A ministry dedicated to teaching children about God's love 
                in a fun and age-appropriate way.
              </p>
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <p><strong>Ages:</strong> 0-12 years</p>
                <p><strong>Activities:</strong> Sunday school, special events, crafts</p>
              </div>
              <div className="flex justify-center space-x-3">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/Instagram_icon.png" alt="Instagram" width={24} height={24} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <span className="text-lg">📘</span>
                </a>
              </div>
            </div>

            {/* Music Ministry */}
            <div className="card text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4">
                Music Ministry
              </h3>
              <p className="text-gray-600 mb-6">
                A ministry that uses music to worship God and 
                create an atmosphere of worship in our services.
              </p>
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <p><strong>Needs:</strong> Musicians, singers, sound technicians</p>
              </div>
              <div className="flex justify-center space-x-3">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/Instagram_icon.png" alt="Instagram" width={24} height={24} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <span className="text-lg">📘</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Leaders Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Ministry Leaders
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👨‍💼
              </div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">
                Youth Pastor
              </h3>
              <p className="text-gray-600 text-sm">
                Leading the youth ministry with passion and creativity.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👩‍💼
              </div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">
                Women's Leader
              </h3>
              <p className="text-gray-600 text-sm">
                Guiding women in their spiritual growth.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                🎵
              </div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">
                Music Director
              </h3>
              <p className="text-gray-600 text-sm">
                Coordinating the church's musical worship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
