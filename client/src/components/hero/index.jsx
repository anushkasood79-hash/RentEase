import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            Trusted by Students & Professionals
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-6 leading-tight">
            Rent Furniture &
            <span className="text-blue-600"> Appliances</span>
            <br />
            Without Buying
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Affordable monthly rentals with flexible plans, fast delivery,
            and hassle-free maintenance.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
           >
            Browse Products
           </Link>

           <Link
           to="/about"
           className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
           >
           Learn More
          </Link>
          </div>

          <div className="flex gap-8 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-600">5000+</h2>
              <p className="text-gray-500">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">1200+</h2>
              <p className="text-gray-500">Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">25+</h2>
              <p className="text-gray-500">Cities</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-3xl shadow-xl p-10 h-[450px] flex flex-col justify-center items-center">
          <div className="text-8xl">🛋️</div>

          <h2 className="text-3xl font-bold mt-6">
            Premium Rentals
          </h2>

          <p className="text-gray-500 text-center mt-4">
            Beds • Sofas • TVs • Refrigerators • Washing Machines
          </p>

          <Link
           to="/products"
           className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
            >
            Explore Collection
           </Link>
        </div>

      </div>
    </section>
  );
}

export default Hero;