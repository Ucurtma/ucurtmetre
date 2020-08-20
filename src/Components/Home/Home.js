import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Stairs from "../UI/Stairs/Stairs";
import "./Home.scss";


const Home = () => {
  document.title = "Home";

  return (
    <div>
      <Header />
      <Footer />
      <Stairs />
    </div>
  );
};

export default Home;
