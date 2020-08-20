import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.scss";

const Home = () => {
  document.title = "Home";

  return (
    <div>
      <Header />
      <Footer />
      <div className="stair-bg" />
    </div>
  );
};

export default Home;
