import { useState } from "react";
import "./Gallery1.css";

const images = [
  { src: "/images/img_1.jpg", title: "Paper Pouch" },
  { src: "/images/img_2.jpg", title: "Fresh Dish" },
  { src: "/images/img_3.jpg", title: "Sushi Roll" },
  { src: "/images/img_4.jpg", title: "Grill Plate" },
  { src: "/images/img_5.jpg", title: "Steak Salad" },
  { src: "/images/img_6.jpg", title: "Healthy Bowl" },
  { src: "/images/img_7.jpg", title: "Dinner Time" },
  { src: "/images/img_8.jpg", title: "Special Dish" },
  { src: "/images/food_21.png", title: "Classic Meal" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section">
      <div className="gallery-container">

        {/* LEFT SIDE TEXT */}
        <div className="gallery-text">
          <span className="gallery-small">The Food</span>
          <h2 className="gallery-script">Gallery</h2>
          <p>
            The most happiest time of the day!. Morbi sagittis, sem quis
            lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien
            ut justo.
          </p>
        </div>

        {/* RIGHT SIDE GRID */}
        <div className="gallery-grid">
          {images.map((item, index) => (
            <div
              className="image-card"
              key={index}
              onClick={() => setSelectedImage(item.src)}
            >
              <img src={item.src} alt={item.title} />

              <div className="overlay">
                <div className="zoom-circle">ZOOM</div>
                <div className="image-title">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="zoomed" />
        </div>
      )}
    </section>
  );
}