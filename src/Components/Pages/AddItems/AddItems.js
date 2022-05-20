import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import PageTaitle from "../PageTaitle/PageTaitle";
import "./AddItems.css";
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/addItems";
  const onSubmit = (data) => {
    const url = `https://nameless-chamber-88657.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("update seccessful ", result);
      });
  };

  return (
    <div className="w-50 mx-auto  ">
      <PageTaitle title="AddItems "></PageTaitle>
      <form
        className="d-flex flex-column  width-from mx-auto "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-info"> Add Youe Items</h3>

        <input
          className="mb-2 mt-2 padding"
          placeholder="Name"
          {...register("name")}
          required
        />
        <input
          className="mb-2 padding"
          placeholder="description"
          {...register("description")}
          required
        />
        <input
          className="mb-2 padding"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2 padding"
          placeholder="quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2 padding"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add Items" />
      </form>
    </div>
  );
};

export default AddItems;
