import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    // Save login status
    localStorage.setItem("isLoggedIn", "true");

    // Save basic user information
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: email,
      })
    );

    alert("Login successful!");

    // Go to dashboard
    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">

          <h1 className="text-4xl font-bold text-center">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Login to your RentEase account
          </p>

          <form
            className="mt-8"
            onSubmit={handleLogin}
          >

            {/* Email */}
            <div className="mb-5">

              <label className="block font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Password */}
            <div className="mb-5">

              <label className="block font-medium mb-2">
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-blue-600 mt-2 text-sm"
              >
                {showPassword
                  ? "Hide Password"
                  : "Show Password"}
              </button>

            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-6">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-blue-600 font-semibold"
            >
              Register
            </Link>

          </p>

        </div>

      </section>
    </>
  );
}

export default Login;