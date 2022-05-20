import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("https://nameless-chamber-88657.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return [services, setService];
};

export default Hooks;
