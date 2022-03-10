import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    const random = Math.floor(Math.random() * 100) + 1;

    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[random]);
      });
  };

  return (
    <>
      <h2
        className="head-text"
        onClick={() => {
          getQuote();
        }}
      >
        `{quote.text}`
        <br />
        <span>{quote.author || "Witout author"}</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
