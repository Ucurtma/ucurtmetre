import React from "react";
import Header from "../Header/Header";
import "./Home.scss";

const Home = () => {
  document.title = "Home";

  return (
    <div>
      <Header />
      <div className="stair-bg" />
    </div>
  );
};

export default Home;
