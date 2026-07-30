import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function Admin() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center mb-12">
            Admin Dashboard
          </h1>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h2 className="text-4xl">📦</h2>
              <h3 className="text-3xl font-bold mt-3">1200+</h3>
              <p className="text-gray-500 mt-2">Products</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h2 className="text-4xl">👥</h2>
              <h3 className="text-3xl font-bold mt-3">5000+</h3>
              <p className="text-gray-500 mt-2">Customers</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h2 className="text-4xl">📋</h2>
              <h3 className="text-3xl font-bold mt-3">860</h3>
              <p className="text-gray-500 mt-2">Active Rentals</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h2 className="text-4xl">💰</h2>
              <h3 className="text-3xl font-bold mt-3">₹4.8L</h3>
              <p className="text-gray-500 mt-2">Monthly Revenue</p>
            </div>

          </div>

          {/* Product Management */}
          <div className="bg-white rounded-xl shadow-md p-8 mt-10">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">
                Product Management
              </h2>

              <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
                + Add Product
              </button>
            </div>

            <table className="w-full">

              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Product</th>
                  <th className="text-left">Category</th>
                  <th className="text-left">Rent</th>
                  <th className="text-left">Status</th>
                  <th className="text-left">Action</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="py-4">Modern Queen Bed</td>
                  <td>Bed</td>
                  <td>₹1299</td>
                  <td className="text-green-600">Available</td>
                  <td>
                    <button className="text-blue-600 mr-4">
                      Edit
                    </button>

                    <button className="text-red-600">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4">Luxury Sofa</td>
                  <td>Sofa</td>
                  <td>₹1899</td>
                  <td className="text-green-600">Available</td>
                  <td>
                    <button className="text-blue-600 mr-4">
                      Edit
                    </button>

                    <button className="text-red-600">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="py-4">Smart LED TV</td>
                  <td>Television</td>
                  <td>₹999</td>
                  <td className="text-red-600">
                    Out of Stock
                  </td>
                  <td>
                    <button className="text-blue-600 mr-4">
                      Edit
                    </button>

                    <button className="text-red-600">
                      Delete
                    </button>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Admin;