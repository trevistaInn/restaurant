import React from "react";
import "../../styles/pages/Home.css";
import background from "../../assets/assets/main-13.jpg";

const Home = () => {
  return (
    <div className="home">
      <img src={background} alt="Background" className="home-img" />
    </div>
  );
};

export default Home;
