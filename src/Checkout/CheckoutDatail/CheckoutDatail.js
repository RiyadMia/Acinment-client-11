import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ServiceHooks from "../../Hooks/ServiceHooks";
import "./CheckoutDatail.css";
const CheckoutDatail = () => {
  const { checkoutdatailId } = useParams();
  const [service] = ServiceHooks(checkoutdatailId);

  return (
    <div className="container mt-5 mb-5 text-center ">
      <div className="mb-5 border">
        <div className=" ">
          <img className="checkout-img" src={service.img} alt="" />
        </div>
        <div className=" mt-2">
          <h5>Name : {service.name} </h5>
          <h6>Price : $ {service.price}</h6>
        </div>
      </div>
      <div className="text-center  itmes-center ">
        <Link to={`/chackout/${checkoutdatailId}`}>
          <button className="btn btn-primary ">Pleace order</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutDatail;
