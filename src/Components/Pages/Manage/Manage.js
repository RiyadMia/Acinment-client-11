import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Hooks from "../../../Hooks/Hooks";
import PageTaitle from "../PageTaitle/PageTaitle";
import "./Manage.css";
const Manage = () => {
  const [Services, setServices] = Hooks([]);
  // const sliceRsult = Services.slice(9);

  // const { name, price, quantity, img, _id } =Service;

  const location = useLocation();
  let from = location.state?.from?.pathname || "/manage";

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://nameless-chamber-88657.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = Services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/checkoutdatail/${id}`);
  };

  return (
    <div className=" mx-auto container w-50">
      <div className="  ">
        <PageTaitle title="Manage "></PageTaitle>

        {Services.map((service) => (
          <div key={service._id}>
            <div className="manage-container mx-auto  ">
              <div className="">
                <img src={service.img} alt="" />
                <div className="margin">
                  <p className="mt-5"> {service.name}</p>
                  <p> price : {service.price}</p>
                  <p> quantity : {service.quantity}</p>
                </div>
              </div>

              <div className="review-item-details-container">
                <button
                  onClick={() => navigateToServiceDetail(service._id)}
                  className=" mt-3  btn btn-primary  order-btn"
                >
                  Delevare
                </button>
                <button
                  className="text-danger delete-btn"
                  onClick={() => handleDelete(service._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manage;
