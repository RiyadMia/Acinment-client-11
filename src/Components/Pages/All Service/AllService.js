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
  const location = useLocation();
  let from = location.state?.from?.pathname || "/Allservice";
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
            <Products key={service._id} service={service}></Products>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllService;
