import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            RentEase
          </h2>

          <p className="text-gray-400 mt-4">
            Affordable furniture and appliance rentals for students,
            families and working professionals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Customer Support
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Email: support@rentease.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Mon - Sat : 9 AM - 6 PM</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-3xl">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
            <span>💼</span>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-5 text-gray-400">
        © 2026 RentEase. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;