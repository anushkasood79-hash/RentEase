import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import products from "../../data/products";

function MyRentals() {
  // Demo rented products
  const rentedProducts = [products[0], products[4]];

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center">
            My Rentals
          </h1>

          <p className="text-center text-gray-500 mt-3">
            Products currently rented by you.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {rentedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <h2 className="text-xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {item.category}
                  </p>

                  <p className="text-blue-600 font-bold mt-3">
                    ₹{item.rent}/month
                  </p>

                  <p className="mt-3 text-green-600 font-semibold">
                    Status: Active Rental
                  </p>

                  <p className="text-gray-500">
                    Rental Period: 6 Months
                  </p>

                  <button
                    onClick={() =>
                      alert("Rental details opened successfully!")
                    }
                    className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default MyRentals;