import React, { useEffect, useRef, useState } from "react";
import "./experience.css";

const Experience = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
  const currentSection = sectionRef.current;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true);
      }
    },
    { threshold: 0.6 }
  );

  if (currentSection) observer.observe(currentSection);

  return () => {
    if (currentSection) observer.unobserve(currentSection);
  };
}, []);

  return (
    <div className={`timeline_container Experience ${animate ? "animate" : ""}`} ref={sectionRef}>
      <h2 className="timeline_title">Experience</h2>

        <div className="pair_column fade delay2">
          <div className="box top">
            <div>
              <span className="yellow">Research Intern</span>
              <p>IIT Indore</p>
            </div>
          </div>
          <div className="box line_col">
            <div className="dot" />
          </div>
          <div className="box bottom">
            <span className="yellow">May-June 2025</span>
          </div>
        </div>

    </div>
  );
};

export default Experience;
