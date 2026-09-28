import { useState, useEffect } from "react";
import main from "../../assets/assets/main-13.jpg";
import main2 from "../../assets/assets/restaurant.jpg";
import "./ImageSlide.css";

const ImageSlide = () => {
  const slides = [
    {
      image: main,
      //  subtitle: "Your food is",
      //  title: "READY TO BE SERVED",
      //  description: "Most delicious food in the World"
    },
    {
      image: main2,
       subtitle: "Your food is",
      title: "READY TO BE SERVED",
      description: "Ultimate dining experience like no other"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, );

  return (
    <div className="hero-container">
      <div className="carousel-track">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})`, transform: `translateX(${100 * (index - current)}%)` }}
          >
            <div className="overlay"></div>
            <div className="hero-text">
              <h4>{slide.subtitle}</h4>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-buttons">
        <button
          className="carousel-btn prev"
          onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        >
          ❮
        </button>
        <button
          className="carousel-btn next"
          onClick={() => setCurrent((current + 1) % slides.length)}
        >
          ❯
        </button>
      </div>
    </div>
  );
}
export default ImageSlide;