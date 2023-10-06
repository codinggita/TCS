import React from "react";
import ServiceCard from "./ServiceCard";
import "./Service.css";

const Service = () => {
  return (
    <div className="service">
      <h4>SERVICE</h4>
      <h3>Our services for you</h3>
      <div className="cards">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Service;
