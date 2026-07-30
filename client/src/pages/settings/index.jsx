import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Settings() {

  const comingSoon = () => {
    alert("This feature will be available in a future update.");
  };

  const logout = () => {
    alert("Logged out successfully!");
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-100 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

          <h1 className="text-4xl font-bold mb-8 text-center">
            Settings
          </h1>

          <div className="space-y-5">

            <button
              onClick={comingSoon}
              className="w-full text-left bg-gray-100 p-4 rounded-lg hover:bg-gray-200"
            >
              🔒 Change Password
            </button>

            <button
              onClick={comingSoon}
              className="w-full text-left bg-gray-100 p-4 rounded-lg hover:bg-gray-200"
            >
              📧 Change Email
            </button>

            <button
              onClick={comingSoon}
              className="w-full text-left bg-gray-100 p-4 rounded-lg hover:bg-gray-200"
            >
              🔔 Notification Settings
            </button>

            <button
              onClick={comingSoon}
              className="w-full text-left bg-gray-100 p-4 rounded-lg hover:bg-gray-200"
            >
              🌙 Dark Mode (Coming Soon)
            </button>

            <button
              onClick={logout}
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 mt-6"
            >
              Logout
            </button>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Settings;