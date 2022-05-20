import React from "react";
import PageTaitle from "../../Pages/PageTaitle/PageTaitle";
import mobileShop from "../../../images/mobile shop.png";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";

import "./Home.css";
const Home = () => {
  return (
    <div>
      <PageTaitle title=" Home"></PageTaitle>
      <Banner></Banner>
      <h2 className="text-info mt-5 mb-5 text-center">
        How to create a Mobile Shop !!!
      </h2>
      <div className=" container d-flex mt-5 home-gap  ">
        <div className="">
          <img className="home-img" src={mobileShop} alt="" />
        </div>
        <div className="">
          <h3 className="text-primary mb-3 text-center">Online Shop</h3>
          <p>
            Trusted online shop in Bangladesh for genuine mobile, computer,
            perfume, watch, electronics & appliances. 0% interest on EMI. 3 Days
            Return. Happy shopping! As smartphones become more advanced, your
            business should be prepared to make it even easier for customers to
            buy online.MobileShop is the largest European webshop for
            smartphones and consumer electronics. New SIM-free mobile phones.
            Best prices, fast delivery, warranty.Shop Online Mobile. Buy
            smartphones online in Bangladesh at best price. Kablewala carry the
            variety of mobile phones in every budget at affordable range.A
            mobile phone is one of the wonderful wonders of modern science. It
            has added a new dimension to our lives and to communication. It can
            be moved easily from one place to another place. Through mobile
            phone, we can send messages to distant places, play games, know
            about time, solve the work of calculation, be aware of different
            kinds of news and views. In a single moment, we can communicate with
            the people living in a very distant place.
          </p>
        </div>
      </div>
      <h2 className="text-info text-center mt-5 ">Mobile Shopping </h2>
      <Services></Services>
    </div>
  );
};

export default Home;
