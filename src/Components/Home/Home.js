import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Stairs from "../UI/Stairs/Stairs";
import Main from "../Main/Main";
import "./Home.scss";


const Home = () => {
  document.title = "Home";

  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <Stairs />
    </div>
  );
};

export default Home;
