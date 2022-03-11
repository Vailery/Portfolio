import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a target="_blank" href="https://github.com/Vailery" rel="noreferrer">
          <BsGithub />
        </a>
      </div>

      <div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/vailery/"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>

      <div>
        <a
          target="_blank"
          href="https://www.instagram.com/lily_lery/"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
