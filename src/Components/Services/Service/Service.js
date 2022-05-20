import React, { useEffect, useState } from "react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Service.css";
import { useNavigate } from "react-router-dom";
import { addToDb } from "../../../uitilits/fakedb";

const Service = (props) => {
  const { service, hendelRemove } = props;
  const { name, price, quantity, img, _id } = props.service;
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    console.log(id);
    navigate(`/checkoutdatail/${id}`);
  };

  const incrigeDetail = (selectservices) => {
    let newCard = [];
    const exists = cart.find((product) => product._id === selectservices.id);
    if (!exists) {
      selectservices.quantity = quantity - 1;
      newCard = [...cart, selectservices];
    }

    setCart(newCard);
    addToDb(selectservices._id);
  };
  return (
    <div className="review-item container">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-details-container  ">
        <div className="revew-item-details">
          <p className="product-name" title={name}></p>
          <p>
            <span className="orange-color">$ {price}</span>
          </p>
          <p>
            <small> quantity : {quantity}</small>
          </p>
        </div>
        <div className="detele-container">
          <button className="delete-btn" onClick={() => hendelRemove(service)}>
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
        <button
          onClick={() => incrigeDetail(service)}
          className=" mt-3  btn btn-primary  order-btn"
        >
          incriage
        </button>

        <button
          onClick={() => navigateToServiceDetail(_id)}
          className=" mt-3  btn btn-primary  order-btn"
        >
          Delevare
        </button>
      </div>
    </div>
  );
};

export default Service;
