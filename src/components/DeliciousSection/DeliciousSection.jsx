import React from "react";
import "./DeliciousSection.css";

import burger from "../../assets/assets/burger.png";


const DeliciousSection = () => {
  return (
    <section className="delicious-section">
      <div className="container">
        <div className="left-content">
          <p className="small-title">Why our</p>
          <h2 className="main-title">Delicious food</h2>
          <p className="description">
            The most happiest time of the day! Morbi sagittis, sem quis lacinia faucibus,
            orci ipsum gravida tortor, vel interdum mi sapien ut justo.
          </p>
          <p className="description">
            Facilisis ut venenatis eu, sodales vel dolor. The most happiest time of the day!
          </p>
        </div>
        <div className="image-wrapper">
          <img src={burger} alt="Burger" />
        </div>
      </div>
    </section>
  );
};

export default DeliciousSection;

