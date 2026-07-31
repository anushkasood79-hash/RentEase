import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">
            My Dashboard
          </h1>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Profile */}
            <Link
              to="/profile"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition block"
            >
              <h2 className="text-xl font-semibold">👤 Profile</h2>
              <p className="text-gray-500 mt-3">
                Manage your personal information.
              </p>
            </Link>

            {/* My Rentals */}
            <Link to="/my-rentals">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold">📦 My Rentals</h2>

            <p className="text-gray-500 mt-3">
            View all rented furniture and appliances.
            </p>
            </div>
            </Link>
            

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition block"
            >
              <h2 className="text-xl font-semibold">❤️ Wishlist</h2>
              <p className="text-gray-500 mt-3">
                Your saved favourite products.
              </p>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition block"
            >
              <h2 className="text-xl font-semibold">🛒 Cart</h2>
              <p className="text-gray-500 mt-3">
                Review products before checkout.
              </p>
            </Link>

            {/* Rental History */}
            <Link
            to="/history"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition block"
            >
            <h2 className="text-xl font-semibold">📜 Rental History</h2>

            <p className="text-gray-500 mt-3">
            View your previous rental orders.
            </p>
            </Link>

            

            {/* Settings */}
             <Link
             to="/settings"
             className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition block"
             >
            <h2 className="text-xl font-semibold">⚙️ Settings</h2>

            <p className="text-gray-500 mt-3">
            Change password and account settings.
            </p>
            </Link>


           

          </div>

        </div>
      </section>
    </>
  );
}

export default Dashboard;