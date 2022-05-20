import React, { useEffect, useState } from "react";
import { getStoredCart } from "../../../uitilits/fakedb";

const useCart = (Services) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = Services.find((product) => product._id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [Services]);
  return [cart, setCart];
};

export default useCart;
