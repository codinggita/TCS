import React from "react";
import { FaTelegram, FaLinkedinIn } from "react-icons/fa";

const TeamCard = () => {
  return (
    <div className="p-10">
      <div className="w-1/2">
        <img
          className="w-100% rounded"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt=""
        />
      </div>
      <div className="details">
        <h5>Name</h5>
        <h6>Ocupation</h6>
        <div className="links flex space-x-10 my-4">
          <a href="">
            <FaTelegram className="text-blue-700 text-lg" />
          </a>
          <a href="">
            <FaLinkedinIn className="text-blue-700 text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
