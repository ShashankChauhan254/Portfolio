import React, { useEffect, useRef, useState } from "react";
import "./experience.css";

const EXPERIENCE = [
  // {
  //   role: "Research Intern",
  //   org: "IIT Indore",
  //   date: "May – Jun 2025",
  //   current: false,
  //   bullets: [
  //     "Designed and optimized DP algorithms, gaining a 20% performance improvement over baseline through redesign, parallelization, and memory optimization.",
  //     "Applied the algorithms to protein networks, robotics, and transit planning datasets, demonstrating data-driven problem solving at scale.",
  //   ],
  // },
  {
    role: "Data Annotator Intern",
    org: "Prodigal Tech",
    date: "Sep 2025 – Present",
    current: true,
    bullets: [
      "Analyzed AI-generated NLP output against human benchmarks to identify, categorize, and annotate model errors.",
      "Ran weekly error-pattern analysis across multiple client datasets, delivering structured reports with graphs, tables, and charts.",
      "Built and maintained data reporting pipelines and visualizations communicating AI performance trends to management.",
      "Collaborated cross-functionally with ML engineers, translating findings into NLP model retraining strategies.",
    ],
  },
];

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

      <div className="timeline_grid" style={{ gridTemplateColumns: `repeat(${EXPERIENCE.length}, 1fr)` }}>
        {EXPERIENCE.map((exp, i) => (
          <div className={`pair_column fade delay${i + 1}`} key={exp.role}>
            <div className="box top">
              <div className="tooltipWrap">
                <span className="yellow">{exp.role}</span>
                <p>{exp.org}</p>
                <div className="tooltip">
                  {exp.bullets.map((b) => (
                    <span key={b} className="tooltipItem">{b}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="box line_col">
              <div className={`dot dot${i + 1} ${exp.current ? "current" : ""}`} />
            </div>
            <div className="box bottom">
              <span className="yellow">{exp.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;