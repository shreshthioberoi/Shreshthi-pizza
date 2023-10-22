import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Welcome to <strong>Shree Pizza</strong> - a culinary masterpiece established in <strong>2018</strong> in the heart of Dehradun, India. At Shree Pizza, we're not just a pizzeria; we're on a mission to redefine pizza itself.

          Our journey is one of flavor, innovation, and community. We're dedicated to delivering the finest quality and the most delectable taste in every pizza we create. From classic Margheritas to our signature PedroTech Special, each pizza reflects a fusion of tradition and innovation.

          But it's not just about the food. It's about the people. Our incredible team, loyal customers, and the vibrant city of Dehradun have played a crucial role in our success. We're committed to giving back to the community that has embraced us.

          Join us in this mouthwatering journey, and let's create more unforgettable moments, one slice at a time. Come visit us to experience the warmth and flavors of Shree Pizza. We're not just a pizzeria; we're a slice of Dehradun's culinary heritage. Taste the difference, feel the love, and savor the best in Dehradun.
        </p>
      </div>
    </div>
  );
}

export default About;
