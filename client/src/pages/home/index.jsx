import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Categories from "../../components/categories";
import FeaturedProducts from "../../components/featuredproducts";
import WhyChooseUs from "../../components/whychooseus";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default Home;