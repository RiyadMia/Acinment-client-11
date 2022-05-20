import React from "react";
import "./Footer.css";
import footer from "../../../images/mobile.png";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="  bg-dark text-center text-white  footer-style mb-0">
      <div className="gridFooter text-white container">
        <div className="mt-4">
          <small> Mobile Shope </small>
          <br />
          <small>Haron Twoar,Mymenshing</small>
          <br />
          <small> Mobile : 01717000000</small>
        </div>
        <div className="mt-4">
          <small> Mobile Shope</small>
          <br />
          <small> Purbadhala Bazer</small>
          <br />
          <p>Gmail : abdul@gmail.com</p>
        </div>
        <div className="mt-4  ">
          <img className="img-footer" src={footer} alt="" />
        </div>
      </div>

      <p>
        <small className="text-white">This is footer @ {year}</small>
      </p>
    </footer>
  );
};

export default Footer;
