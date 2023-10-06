import React from "react";
// import heroImage from "../Assets/small-parcel-courier-service-500x500.webp";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero">
      <div className="text-area">
        <div className="text">
          <h1>Your Text Here</h1>
          <p>Some additional information or description can go here.</p>
        </div>
      </div>
      <div className="img-area">
        <div className=" image">{/* <img src={heroImage} alt="Hero" /> */}</div>
      </div>
    </div>
  );
};

export default Banner;
