import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Hooks from "../../../Hooks/Hooks";

import useCart from "../../Cart/useCart/useCart";
import Products from "../../Products/Products";
import Lodeing from "../Lodeing/Lodeing";
import { addToDb, getStoredCart } from "../../../uitilits/fakedb";
import "./AllService.css";
import PageTaitle from "../PageTaitle/PageTaitle";

const AllService = () => {
  const [Services, setServices] = Hooks([]);
  const [user, loading] = useAuthState(auth);
  const [cart, setCart] = useCart(Services);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/Allservice";
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
  if (loading) {
    return <Lodeing></Lodeing>;
  }
  return (
    <div className=" mt-5 ">
      <h2 className=" text-center text-info">All Products</h2>
      <div className="container orders-container ">
        <PageTaitle title=" All service"></PageTaitle>
        <h2 className="  text-info"> </h2>
        <div className="mt-5 service-container text-center">
          {Services.map((service) => (
            <Products
              key={service._id}
              service={service}
              handelToCart={handelToCart}
            ></Products>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllService;
