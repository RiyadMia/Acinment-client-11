import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hooks from "../../Hooks/Hooks";
import { addToDb, getStoredCart } from "../../uitilits/fakedb";

import Products from "../Products/Products";
import "./Services.css";
const Services = () => {
  const [Services, setServices] = Hooks([]);
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

  const handelToCart = (selectservices) => {
    let newCard = [];

    const exists = cart.find((product) => product._id === selectservices.id);
    if (!exists) {
      selectservices.quantity = 1;
      newCard = [...cart, selectservices];
    } else {
      const rest = cart.filter((product) => product._id !== selectservices.id);
      exists.quantity = exists.quantity + 1;
      newCard = [...rest, exists];
    }
    // const newCard = [...cart, service];
    setCart(newCard);
    addToDb(selectservices._id);
  };

  const sliceRsult = Services.slice(0, 6);
  let navegat = useNavigate();
  return (
    <div className="orders-container container">
      <div className="service-container">
        {sliceRsult.map((service) => (
          <Products
            key={service._id}
            service={service}
            handelToCart={handelToCart}
          ></Products>
        ))}
      </div>

      <Link to="/Allservice">
        <button className="btn-cart">Allservice </button>
      </Link>
    </div>
  );
};

export default Services;
