import React from "react";

const ContactForm = () => {
  return (
    <form action="" className="flex-col justify-around">
      <div className="name">
        <input
          type="text"
          placeholder="Name"
          className="outline-none border-gray-200 border-2"
        />
      </div>
      <div className="number">
        <input
          type="text"
          placeholder="Mobile"
          className="outline-none border-gray-200 border-2"
        />
      </div>
      <div className="email">
        <input
          type="text"
          placeholder="Email"
          className="outline-none border-gray-200 border-2 "
        />
      </div>
      <div className="massage">
        <textarea
          type="text"
          placeholder="Massage"
          className="outline-none border-gray-200 border-2"
        />
      </div>
      <div className="btn">
        <button>Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
