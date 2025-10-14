import React from "react";
import "./ParallaxScroll.css";

export default function ParallaxScroll() {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="section05" className="demo">
      <a href="#" onClick={handleClick}>
        <span></span>Back to Top
      </a>
    </section>
  );
}
