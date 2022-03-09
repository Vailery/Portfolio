import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a target="_blank" href="https://github.com/Vailery">
          <BsGithub />
        </a>
      </div>

      <div>
        <a target="_blank" href="https://www.linkedin.com/in/vailery/">
          <BsLinkedin />
        </a>
      </div>

      <div>
        <a target="_blank" href="https://www.instagram.com/lily_lery/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
