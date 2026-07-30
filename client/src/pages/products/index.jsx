import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import products from "../../data/products";

function Products() {
 const [searchParams] = useSearchParams();

 const urlSearch = searchParams.get("search") || "";
 const urlCategory = searchParams.get("category") || "All";

 const [search, setSearch] = useState(urlSearch);
 const [category, setCategory] = useState(urlCategory);

 const filteredProducts = products.filter((product) => {
  const matchesSearch =
    search === "" ||
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    category === "All" ||
    product.category.toLowerCase() === category.toLowerCase();

  return matchesSearch && matchesCategory;
});
    console.log("Search:", search);
    console.log("Filtered Products:", filteredProducts);

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center">
            Our Products
          </h1>

          <p className="text-center text-gray-500 mt-3">
            Find the perfect furniture and appliance rentals.
          </p>

          {/* Search Box */}
          <div className="flex justify-center mt-10">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-center mt-6">
         <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full md:w-1/3 p-3 rounded-xl border border-gray-300"
            >
          <option value="All">All Categories</option>
          <option value="Bed">Bed</option>
          <option value="Sofa">Sofa</option>
          <option value="Television">Television</option>
          <option value="Refrigerator">Refrigerator</option>
          <option value="Kitchen Appliances">Kitchen Appliances</option>
         </select>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 text-xl">
                No products found.
              </p>
            )}
          </div>

        </div>
      </section>
    </>
  );
}

export default Products;