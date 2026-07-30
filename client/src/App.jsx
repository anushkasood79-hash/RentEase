import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import MyRentals from "./pages/myRentals";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetails from "./pages/productDetails";
import Login from "./pages/login";
import Register from "./pages/register";
import Cart from "./pages/cart";
import Dashboard from "./pages/dashboard";
import Admin from "./pages/admin";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import Wishlist from "./pages/wishlist";
import Checkout from "./pages/checkout";
import OrderSuccess from "./pages/orderSuccess";
import History from "./pages/history";
import Settings from "./pages/settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-rentals" element={<MyRentals />} />
      <Route path="/history" element={<History />} />
      <Route path="/settings" element={<Settings />} />
      
    </Routes>
  );
}

export default App;