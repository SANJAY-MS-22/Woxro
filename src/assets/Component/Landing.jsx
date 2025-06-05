import React, { useEffect, useState } from "react";
import "./Landing.css";

export default function Landing() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxScroll = window.innerHeight; // 100vh
  const progress = Math.min(scrollY / maxScroll, 1);

  const scale = 1 + progress * 0.2;
  const opacity = 1 - progress;
  const isFixed = scrollY < maxScroll;

  return (
    <div className="container">
      {/* First Section */}
      <div
        className={`section top-section ${isFixed ? "fixed" : "relative"}`}
        style={{ zIndex: 2 }}
      >
        <div className="cubes">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>
        <h1
          className="header-text"
          style={{
            transform: `scale(${scale})`,
            opacity,
            transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
          }}
        >
          The first media company<br />
          crafted for the digital first <br />
          generation
        </h1>
      </div>

      {/* Second Section */}
      <div className="section middle-section">
        <div className="subtitle">
          <strong>Where innovation meets precision.</strong>
          <p>
            Symphonia unites visionary thinkers, creative architects, and<br />
            analytical experts, collaborating seamlessly to transform challenges<br />
            into oppurtunities. Together, we deliver tailored solutions that drive<br />
            impact and inspire growth.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="bottom-section">Your next section goes here.</div>
    </div>
  );
}
