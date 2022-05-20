import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ServiceHooks = () => {
  const { checkoutdatailId } = useParams();
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(
      `https://nameless-chamber-88657.herokuapp.com/service/${checkoutdatailId}`
    )
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return [service, setService];
};

export default ServiceHooks;
