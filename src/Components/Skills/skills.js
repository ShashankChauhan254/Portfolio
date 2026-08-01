import React, { useEffect, useRef, useState } from 'react';
import './skills.css';

const SKILL_CARDS = [
  {
    title: "Data Analyst",
    rows: [
      { label: "Language", value: "SQL (Joins, Subqueries, Views), Python" },
      { label: "Libraries", value: "Pandas, NumPy, Matplotlib, Scikit-learn" },
      { label: "Tools", value: "MySQL, Power BI, Advanced Excel (Pivot Tables, VLOOKUP), Google Colab" },
    ],
  },
  {
    title: "Machine Learning",
    rows: [
      { label: "Language", value: "Python" },
      { label: "Libraries", value: "Pandas, NumPy, TensorFlow, Keras, Scikit-learn" },
      { label: "Tools", value: "VS Code, Google Colab, OpenCV" },
    ],
  },
  {
    title: "Web Development",
    rows: [
      { label: "Language", value: "HTML, CSS, JavaScript" },
      { label: "Libraries", value: "React.js, Tailwind CSS" },
      { label: "Tools", value: "VS Code, GitHub, Netlify" },
    ],
  },
  {
    title: "Game Development",
    rows: [
      { label: "Language", value: "C++" },
      { label: "Tools", value: "Unreal Engine" },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`skills-section Skills ${inView ? 'inView' : ''}`} ref={sectionRef}>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {SKILL_CARDS.map((card, i) => (
          <div className="skill-card" style={{ '--i': i }} key={card.title}>
            <h3 className="card-title">{card.title}</h3>
            {card.rows.map((row) => (
              <p key={row.label}><span className="label">{row.label}:</span> {row.value}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;