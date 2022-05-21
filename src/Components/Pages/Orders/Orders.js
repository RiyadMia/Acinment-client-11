import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Hooks from "../../../Hooks/Hooks";

const Orders = () => {
  const [Services, setServices] = Hooks();

  const navegate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/orders";
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
