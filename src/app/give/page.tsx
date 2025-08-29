export default function Give() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Giving and Donations
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Support our church's mission and the work of the Kingdom
          </p>
        </div>
      </section>

      {/* Why Give Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why Give?
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            The Bible teaches us that giving is a fundamental part of Christian worship. 
            When we give, we not only support God's work, but we also grow spiritually.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Worship
              </h3>
              <p className="text-gray-600">
                Giving is a way to worship God and recognize that everything we have comes from Him.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Service
              </h3>
              <p className="text-gray-600">
                Our offerings enable the church to serve the community and fulfill its mission.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Blessing
              </h3>
              <p className="text-gray-600">
                God promises to bless those who give generously and with joy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Options */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Ways to Give
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* In-Person Giving */}
            <div className="card">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💒</div>
                <h3 className="text-2xl font-bold text-primary-600 mb-3">
                  In-Person Giving
                </h3>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                You can give your offering during our Sunday services or 
                during office hours.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span>Sunday - Main Service</span>
                  <span className="font-semibold">11:00 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Office - Monday to Friday</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Online Giving */}
            <div className="card">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-primary-600 mb-3">
                  Online Giving
                </h3>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                Give your offering securely and conveniently from anywhere.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span>Credit/Debit Card</span>
                  <span className="text-green-600">✓ Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Bank Transfer</span>
                  <span className="text-green-600">✓ Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>PayPal</span>
                  <span className="text-blue-600">Coming Soon</span>
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
            Online Giving
          </h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Your full name"
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
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                Amount *
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
                Offering Category
              </label>
              <select
                id="category"
                name="category"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="general">General Offering</option>
                <option value="missions">Missions</option>
                <option value="building">Building Fund</option>
                <option value="youth">Youth Ministry</option>
                <option value="children">Children's Ministry</option>
                <option value="outreach">Outreach Ministry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="A special message or prayer intention..."
              ></textarea>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 text-xl">ℹ️</div>
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">Important Information:</p>
                  <ul className="space-y-1">
                    <li>• All donations are processed securely</li>
                    <li>• You will receive a receipt by email</li>
                    <li>• Offerings are tax deductible</li>
                    <li>• You can cancel at any time</li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-3 text-lg"
            >
              Proceed with Offering
            </button>
          </form>
        </div>
      </section>

      {/* Biblical Principles */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Biblical Principles on Giving
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">
                Malachi 3:10
              </h3>
              <blockquote className="text-gray-700 italic mb-4">
                "Bring the whole tithe into the storehouse, that there may be food in my house. 
                Test me in this," says the Lord Almighty, "and see if I will not throw open 
                the floodgates of heaven..."
              </blockquote>
              <p className="text-gray-600 text-sm">
                God promises to abundantly bless those who are faithful in their tithes.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">
                2 Corinthians 9:7
              </h3>
              <blockquote className="text-gray-700 italic mb-4">
                "Each of you must give as you have made up your mind, not reluctantly 
                or under compulsion, for God loves a cheerful giver."
              </blockquote>
              <p className="text-gray-600 text-sm">
                God wants us to give with joy and from the heart, not out of obligation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            If you have questions about giving or need help, 
            don't hesitate to contact us.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-sm opacity-90">(570) XXX-XXXX</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="text-lg font-semibold mb-2">Send Us an Email</h3>
              <p className="text-sm opacity-90">lacasadelalfareroipul@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
