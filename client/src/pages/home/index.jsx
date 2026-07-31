import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Hero from "../../components/Hero";
import Categories from "../../components/Categories";
import FeaturedProducts from "../../components/FeaturedProducts";
import WhyChooseUs from "../../components/WhyChooseUs";

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