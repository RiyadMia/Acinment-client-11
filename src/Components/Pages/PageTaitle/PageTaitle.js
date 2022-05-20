import React from "react";
import { Helmet } from "react-helmet-async";

const PageTaitle = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title> {title}-Mobile service</title>
      </Helmet>
    </div>
  );
};

export default PageTaitle;
