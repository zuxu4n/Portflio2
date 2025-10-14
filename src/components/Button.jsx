import React from "react";

const Button = ({ text = "Click Me", className = "" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event("toggleSplashCursor"));

    const target = document.getElementById("gallery");
    if (target) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a href="#" onClick={handleClick} className={`${className} btn-5`}>
      {text}
    </a>
  );
};

export default Button;

/* SCSS Styles */
const styles = `
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);

.btn-5 {
  all: initial;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 0;
  text-decoration: none;
  text-transform: uppercase;
  width: 367px;
  height: 45px;
  position: relative;
  user-select: none;
  
  border: 1px solid transparent; /* Reserve space */
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, .5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
} 

.btn-5:hover {
  border-color: rgba(255, 255, 255, 0.8); /* Only color changes */
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
}
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
