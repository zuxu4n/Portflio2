import React from "react";

const Button = ({ text, className, id }) => {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();

        // Toggle splash cursor off (make sure you have a window listener somewhere)
        window.dispatchEvent(new Event("toggleSplashCursor"));

        const target = document.getElementById("gallery");
        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
