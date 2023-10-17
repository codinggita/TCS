import React from "react";

const Image = (props) => {
  return (
    <div className="w-2/6 rounded ">
      <img src={props.src} className="rounded" />
    </div>
  );
};

export default Image;
