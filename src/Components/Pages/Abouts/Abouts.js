import React from "react";
import aboutImg from "../../../images/abouts.png";
import PageTaitle from "../PageTaitle/PageTaitle";
import "./Abouts.css";
const Abouts = () => {
  return (
    <div>
      <PageTaitle title="Abouts"></PageTaitle>
      <h1 className="text-center text-info mt-5 mb-5">This is Phone Abouts </h1>
      <div className=" d-flex container about-home">
        <div className="">
          <p>
            A mobile phone, cellular phone, cell phone, cellphone, handphone,
            hand phone or pocket phone, sometimes shortened to simply mobile,
            cell, or just phone, is a portable telephone that can make and
            receive calls over a radio frequency link while the user is moving
            within a telephone service area. The radio frequency link
            establishes a connection to the switching systems of a mobile phone
            operator, which provides access to the public switched telephone
            network (PSTN). Modern mobile telephone services use a cellular
            network architecture and, therefore, mobile telephones are called
            cellular telephones or cell phones in North America. In addition to
            telephony, digital mobile phones (2G) support a variety of other
            services, such as text messaging, MMS, email, Internet access,
            short-range wireless communications (infrared, Bluetooth), business
            applications, video games and digital photography. Mobile phones
            offering only those capabilities are known as feature phones; mobile
            phones which offer greatly advanced computing capabilities are
            referred to as smartphones.
          </p>
        </div>
        <div className="">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Abouts;
