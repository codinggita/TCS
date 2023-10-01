import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./ServiceCard.css";

const ServiceCard = () => {
  return (
    <>
      <div className="card">
        <div className="img-icon">
          <FaBriefcase fontSize="70px" color="blue" />
        </div>
        <h3>For Business</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          voluptates voluptatibus.
        </p>
        <ul>
          <li>
            <AiOutlineCheckCircle color="blue" />
            Corporate goods
          </li>
          <li>
            <AiOutlineCheckCircle color="blue" />
            Corporate goods
          </li>
          <li>
            <AiOutlineCheckCircle color="blue" />
            Corporate goods
          </li>
        </ul>
        <button>Learn more</button>
      </div>
    </>
  );
};

export default ServiceCard;
