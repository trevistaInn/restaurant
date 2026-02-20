import React from "react";
import "../../styles/pages/Home.css";
import Features from "../../components/Features/Features"
import Menu1 from "../../components/menu/Menu1";
import DeliciousSection from "../../components/DeliciousSection/DeliciousSection";
// import background from "../../assets/assets/main-13.jpg";
import ImageSlide from "../ImageSliders/ImageSlide";
import Gallery1 from "../../components/Gallery1/Gallery1";

const Home = () => {
  return (
    <>
      {/* <div className="home">
        <img src={background} alt="Background" className="home-img" />
      </div> */}

      <ImageSlide />

      <Features/>
      <Menu1/>
      <DeliciousSection />
      <Gallery1/>
    </>
  );
};

export default Home;
