import React from "react";
import ContactForm from "../comopnents/contactHero/ContactForm";
import Image from "../comopnents/contactHero/Image";
import lightHouse from "../Assets/lightHouse.jpg";

const Contact = () => {
  return (
    <>
      <div className="mt-100px flex justify-evenly ">
        <Image src={lightHouse} />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
