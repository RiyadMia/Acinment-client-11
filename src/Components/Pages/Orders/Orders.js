import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Hooks from "../../../Hooks/Hooks";
import { removeFromDb } from "../../../uitilits/fakedb";

import useCart from "../../Cart/useCart/useCart";
import Service from "../../Services/Service/Service";
import Manage from "../Manage/Manage";

const Orders = () => {
  const [Services, setServices] = Hooks();
  const [cart, setCart] = useCart(Services);
  const navegate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/orders";
  // const hendelRemove = (product) => {
  // const rest = cart.filter((pd) => pd._id !== product._id);
  // setCart(rest);
  // removeFromDb(product._id);
  // };
  return (
    <div className="">
      <div className="orders-container mt-5 container">
        <div className=""></div>
      </div>
      <Link to="/addItems">
        <button className="btn-cart text-center  ">Add New Items </button>
      </Link>
    </div>
  );
};

export default Orders;
