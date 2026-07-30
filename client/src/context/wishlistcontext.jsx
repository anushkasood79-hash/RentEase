import { createContext, useState } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    const alreadyExists = wishlist.find(
      (item) => item.id === product.id
    );

    if (!alreadyExists) {
      setWishlist([...wishlist, product]);
      alert(`${product.name} added to wishlist!`);
    } else {
      alert(`${product.name} is already in your wishlist!`);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(
      wishlist.filter((item) => item.id !== id)
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;