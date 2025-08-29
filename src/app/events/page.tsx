export default function Events() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Events and Announcements
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Stay up to date with what's happening in our church
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Upcoming Events
          </h2>
          
          <div className="space-y-8">
            {/* Event 1 */}
            <div className="card hover:shadow-lg transition-shadow duration-200">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center md:text-left">
                  <div className="text-4xl font-bold text-primary-600">15</div>
                  <div className="text-lg text-gray-600">September</div>
                  <div className="text-sm text-gray-500">2024</div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Youth Conference
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A special conference for youth with music, preaching and activities 
                    designed to strengthen their faith and build Christian friendships.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      🕐 6:00 PM - 9:00 PM
                    </span>
                    <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                      📍 Main Auditorium
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      🎯 Youth 13-25 years
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
                  <div className="text-lg text-gray-600">September</div>
                  <div className="text-sm text-gray-500">2024</div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Holy Spirit Baptism
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Special service where new believers will receive the baptism 
                    of the Holy Spirit. Come and celebrate with us!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      🕐 11:00 AM
                    </span>
                    <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                      📍 Main Auditorium
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                      ✨ Special Service
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
                  <div className="text-lg text-gray-600">September</div>
                  <div className="text-sm text-gray-500">2024</div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Celebration Dinner
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A special night of fellowship and celebration. Bring a dish 
                    to share and enjoy communion with the church family.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      🕐 6:00 PM
                    </span>
                    <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                      📍 Event Hall
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
            Weekly Schedule
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-600 mb-4 text-center">
                Sunday
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Worship Service</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-primary-600 mb-4 text-center">
                Tuesday
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Bible Study</span>
                  <span className="font-semibold text-gray-900">7:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-primary-600 mb-4 text-center">
                Friday
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Prayer & Fellowship</span>
                  <span className="font-semibold text-gray-900">7:00 PM - 9:00 PM</span>
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
            Important Announcements
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🎉 Welcome New Members!
              </h3>
              <p className="text-gray-600">
                We welcome the new families who have joined our congregation. 
                May God bless you in your new spiritual home!
              </p>
              <p className="text-sm text-gray-500 mt-2">Posted: September 1, 2024</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                📚 New Bible Study
              </h3>
              <p className="text-gray-600">
                We're starting a new Bible study on "The Fruits of the Spirit" 
                this Wednesday. Don't miss it!
              </p>
              <p className="text-sm text-gray-500 mt-2">Posted: August 30, 2024</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🤝 We Need Volunteers
              </h3>
              <p className="text-gray-600">
                We're looking for volunteers for the children's ministry and cleaning team. 
                If you can help, talk to the pastor.
              </p>
              <p className="text-sm text-gray-500 mt-2">Posted: August 28, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to receive updates about events and announcements
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
