import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import exiosPrivet from "../../../api/axiosPoint";
import auth from "../../../firebase.init";

import PageTaitle from "../PageTaitle/PageTaitle";
import "./MyItems.css";
const MyItems = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/myitems";

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://nameless-chamber-88657.herokuapp.com/order?email=${email}`;

      try {
        const { data } = await exiosPrivet.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);
  return (
    <div className="text-center mt-5  container  ">
      <PageTaitle title="MyItems"></PageTaitle>
      <h1>Your Items : {orders.length}</h1>
      <div className="text-center orders-grid mt-5 ">
        {orders.map((order) => (
          <div key={order._id}>
            <p>{order.email}</p>
            <h6>{order.service} </h6>
            <p>Mobile : {order.phone}</p>
            <p>Address : {order.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
