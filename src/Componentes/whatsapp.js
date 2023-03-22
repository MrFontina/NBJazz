import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=5491131522831"
        className="btn-wp"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Whatsapp;
