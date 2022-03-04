import React from "react";
import styles from "./App.module.scss";

import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
