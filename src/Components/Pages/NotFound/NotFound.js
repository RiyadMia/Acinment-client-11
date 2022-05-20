import React from "react";
import PageTaitle from "../PageTaitle/PageTaitle";
import notfound from "../../../images/download.png";
const NotFound = () => {
  return (
    <div>
      <PageTaitle title=" NotFound"></PageTaitle>
      <img className="w-100" src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
