import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center">
            About RentEase
          </h1>

          <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
            RentEase is a furniture and appliance rental platform designed
            for students, working professionals, and families. We provide
            affordable rental plans with flexible durations, quick delivery,
            and hassle-free maintenance.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-blue-600">
                🎯 Our Mission
              </h2>

              <p className="mt-4 text-gray-600">
                To make quality furniture and appliances affordable through
                flexible rental solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-blue-600">
                👁 Our Vision
              </h2>

              <p className="mt-4 text-gray-600">
                To become India's most trusted furniture rental platform by
                providing excellent customer service and modern products.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-blue-600">
                ⭐ Why Choose Us
              </h2>

              <ul className="mt-4 text-gray-600 space-y-2">
                <li>✔ Affordable monthly rentals</li>
                <li>✔ Free maintenance</li>
                <li>✔ Fast delivery</li>
                <li>✔ Flexible rental plans</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;