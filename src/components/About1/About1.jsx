import React from 'react'
import "./About1.css"

const About1 = () => {
  return (
    <div>

      {/* Header Section */}
      <div className="About-header">
        <div className="About-header-content">
          <h1>About Us</h1>
          <p>Our Restaurant</p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="Welcome">
        <h1>Welcome to our restaurant</h1>
        <p>
          We are passionate about serving quality food with love. The food we serve
          is prepared with dedication and passion. Our staff works very hard and
          is committed to providing the best service to our customers.
        </p>
      </div>

      {/* Chef Images Section */}
      <div className="chef-container">
        <div className="Images-1"></div>
        <div className="Images-2"></div>
      </div>

      {/* Story Section */}
      <div className="story-section">

        <div className="section-title">
          <span>Our Story</span>
        </div>

        <div className="section-para">
          <h3>Passion for great food</h3>
          <p>
            We believe that great food comes from a combination of passion,
            quality ingredients, and traditional cooking methods.
          </p>
        </div>

        <div className="box-container">
          <div className="box">
            <h3>Fresh Ingredients</h3>
            <p>We use fresh local ingredients.</p>
          </div>

          <div className="box">
            <h3>Authentic Recipes</h3>
            <p>Traditional cooking methods.</p>
          </div>
          </div>
        </div>
        <div className="About-Chef">
             
      </div>
</div>
    
  )
}

export default About1