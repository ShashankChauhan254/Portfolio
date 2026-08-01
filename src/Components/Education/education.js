import React, { useEffect, useRef, useState } from "react";
import "./education.css"; 

const COURSEWORK = [
  "Probability, Statistics & Stochastic Processes",
  "Data Visualization",
  "Statistical Inference & Simulation Techniques",
  "Complex Analysis",
  "Intro to Financial Engineering",
  "Mathematics for Economics",
  "Data Structures & Algorithms",
  "Pattern Recognition & Machine Learning",
  "Data Engineering",
  "Deep Learning",
];

const Education = () => {
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
    <div className={`timeline_container Education ${animate ? "animate" : ""}`} ref={sectionRef}>
      <h2 className="timeline_title">Education</h2>

      <div className="timeline_grid">
        <div className="pair_column fade delay1">
          <div className="box top">
            <span className="yellow">2018</span>
          </div>
          <div className="box line_col">
            <div className="dot dot1"/>
          </div>
          <div className="box bottom">
            <div>
              <span className="yellow">10th Board</span>
              <p>GSEB</p>
            </div>
          </div>
        </div>

        <div className="pair_column fade delay2">
          <div className="box top">
            <div>
              <p>GSEB</p>
              <span className="yellow">12th Board</span>
            </div>
          </div>
          <div className="box line_col">
            <div className="dot dot2" />
          </div>
          <div className="box bottom">
            <span className="yellow">2020</span>
          </div>
        </div>

        <div className="pair_column fade delay3">
          <div className="box top">
            <span className="yellow">June 2026</span>
          </div>
          <div className="box line_col">
            <div className="dot dot3 current" />
          </div>
          <div className="box bottom">
            <div className="tooltipWrap">
              <span className="yellow">B.Tech, AI &amp; Data Science</span>
              <p>IIT Jodhpur</p>
              <div className="tooltip">
                {COURSEWORK.map((c) => (
                  <span key={c} className="tooltipItem">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;