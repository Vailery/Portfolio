import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/computer.json"),
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <HiOutlineMail />
          <a href="mailto:leralaibik8@gmail.com" className="p-text">
            leralaibik8@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <HiOutlinePhone />
          <a href="tel:+375 (29) 152-69-20" className="p-text">
            +375 (29) 152-69-20
          </a>
        </div>
      </div>

      <div className="app__footer-animation" ref={container}></div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
