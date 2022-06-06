import React from "react";
import {
  AiOutlineCopyrightCircle,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="socials-wrap">
        <AiFillTwitterCircle size={"40px"} style={{ marginRight: "10px" }} />
        <AiFillLinkedin size={"40px"} />
      </div>
      <div className="copyright-wrap">
        <AiOutlineCopyrightCircle />
        <p>2022 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
