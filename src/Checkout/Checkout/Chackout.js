import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ServiceHooks from "../../../src/Hooks/ServiceHooks";
import auth from "../../firebase.init";
import "./Chackout.css";
const Chackout = () => {
  const { checkoutdatailId } = useParams();
  const [service] = ServiceHooks(checkoutdatailId);
  const [user] = useAuthState(auth);

  const handlPlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      checkoutdatailId: checkoutdatailId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios
      .post("https://nameless-chamber-88657.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Your order is booked!!!");
          event.target.reset();
        }
      });
  };

  return (
    <div className="w-50 mx-auto  ">
      <div className="width-from mx-auto  ">
        <h3 className="text-primary  mx-auto">Name : {service.name}</h3>
        <form onSubmit={handlPlaceOrder}>
          <input
            className="w-100 mt-3 padding"
            type="text"
            value={user?.displayName}
            name="Name"
            placeholder="Name"
            required
            readOnly
            disabled
          />
          <br />
          <input
            className="w-100 mt-3 padding"
            type="text"
            name="email"
            value={user?.email}
            placeholder="Email"
            required
            readOnly
            disabled
          />
          <br />
          <input
            className="w-100 mt-3"
            type="text"
            name="service"
            value={service.name}
            placeholder="service"
            readOnly
            required
          />
          <br />
          <input
            className="w-100 mt-3 padding"
            type="text"
            name="address"
            autoComplete="off"
            placeholder="address"
            required
          />
          <br />
          <input
            className="w-100 mt-3 padding"
            type="text"
            name="phone"
            placeholder="phone"
            required
          />
          <br />
          <input
            className=" btn btn-primary mt-3  "
            type="submit"
            value="Pleace order"
          />
        </form>
      </div>
    </div>
  );
};

export default Chackout;
