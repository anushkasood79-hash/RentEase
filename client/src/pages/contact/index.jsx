import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center">
            Contact Us
          </h1>

          <p className="text-center text-gray-600 mt-4">
            We'd love to hear from you. Send us your questions or feedback.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-16">

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8">

              <h2 className="text-2xl font-bold mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                  required
                />

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-md p-8">

              <h2 className="text-2xl font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-bold text-lg">📧 Email</h3>
                  <p className="text-gray-600">
                    support@rentease.com
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">📞 Phone</h3>
                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">📍 Address</h3>
                  <p className="text-gray-600">
                    Dehradun, Uttarakhand, India
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">🕒 Working Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;