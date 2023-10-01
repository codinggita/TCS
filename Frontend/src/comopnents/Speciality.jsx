import React from "react";
import "./Speciality.css";
import { TimeIcon } from "@chakra-ui/icons";

const Speciality = () => {
  return (
    <div className="speciality_nav">
      <div className="speciality">
        <TimeIcon w={30} h={30} color="#4e60ff" />
        <span>On time delivery</span>
      </div>
      <div className="speciality">
        <TimeIcon w={30} h={30} color="#4e60ff" />
        <span>Fast home delivery</span>
      </div>
      <div className="speciality">
        <TimeIcon w={30} h={30} color="#4e60ff" />
        <span>We are your product</span>
      </div>
    </div>
  );
};

export default Speciality;
