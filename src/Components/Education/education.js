import React, { useEffect, useRef, useState } from "react";
import "./education.css"; 

const Education = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
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
            <div className="dot"/>
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
            <div className="dot" />
          </div>
          <div className="box bottom">
            <span className="yellow">2020</span>
          </div>
        </div>

        <div className="pair_column fade delay3">
          <div className="box top">
            <span className="yellow">2025</span>
          </div>
          <div className="box line_col">
            <div className="dot" />
          </div>
          <div className="box bottom">
            <div>
              <span className="yellow">BTech</span>
              <p>IIT Jodhpur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
