import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              La Casa del Alfarero
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A community of faith serving God and our community in Scranton, Pennsylvania.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📍 Scranton, PA</p>
              <p>📞 (570) 604-2739</p>
              <p>✉️ lacasadelalfareroipul@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Service Times</h4>
            <div className="space-y-2 text-gray-300">
              <div>
                <p className="font-medium">Sunday</p>
                <p>10:00 AM - 1:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Tuesday</p>
                <p>7:00 PM - 9:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Friday</p>
                <p>7:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} La Casa del Alfarero. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
