import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Hooks from "../../Hooks/Hooks";

import Products from "../Products/Products";
import "./Services.css";
const Services = () => {
  const [Services, setServices] = Hooks([]);

  const sliceRsult = Services.slice(0, 6);
  let navegat = useNavigate();
  return (
    <div className="orders-container container">
      <div className="service-container">
        {sliceRsult.map((service) => (
          <Products
            key={service._id}
            service={service}
            // handelToCart={handelToCart}
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
