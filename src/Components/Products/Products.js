import React from "react";
import { Link } from "react-router-dom";
import Manage from "../Pages/Manage/Manage";
import "./Products.css";
const Products = (props) => {
  const { name, img, price, _id, description, quantity } = props.service;
  const { handelToCart, service } = props;

  return (
    <div className="product text-center mt-5 mb-5">
      <div className="img-border">
        <img src={img} alt="" />

        <h5 className="mt-2">{name}</h5>
        <h6>Price : $ {price}</h6>
        <h6>quantity : {quantity}</h6>
        <h6>Description</h6>
        <p>
          <small>
            {description.length > 60
              ? description.slice(0, 60) + "..."
              : description}
          </small>
        </p>
      </div>

      <div className="">
        <Link to="/manage">
          <button className="btn-cart">Inventory</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
