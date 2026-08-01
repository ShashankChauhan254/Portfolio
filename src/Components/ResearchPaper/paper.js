import React, { useEffect, useRef, useState } from "react";
import "./paper.css";

const allPaper = [
  {
    title: "Exact and Parameterized Algorithms for Window Minimization in Bipartite Arrangement",
    venue: "CIAC 2025",
    location: "Rome, Italy",
    publishers: ["Springer Publishers"],
    date: "Jun 2024 – Nov 2024",
    bullets: [
      "Proposed O*(4.36ⁿ · 2^(p+n+b))-time algorithms for bipartite graph window minimization, applying combinatorial optimization.",
      "Developed parameterized FPT algorithms using graph-drawing and complexity techniques.",
    ],
    link: "https://link.springer.com/chapter/10.1007/978-3-031-92935-9_22", // TODO: add DOI / Springer link
  },
];

const ResearchPaper = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`paper-section ResearchPaper ${animate ? "animate" : ""}`}
      id="ResearchPaper"
      ref={sectionRef}
    >
      <h2 className="paper-heading">Research Paper</h2>
      <div className="paper-container">
        {allPaper.map((paper) => (
          <div className="paper-card" key={paper.title}>
            <h3>{paper.title}</h3>
            <p className="paper-meta">
              {paper.venue} · {paper.location} · {paper.date}
            </p>
            <p>
              <strong>Publishers:</strong> {paper.publishers.join(", ")}
            </p>
            <ul className="paper-bullets">
              {paper.bullets.map((b, i) => (
                <li key={b} style={{ "--i": i }}>{b}</li>
              ))}
            </ul>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="paper-link"
              style={{ "--i": paper.bullets.length }}
            >
              View publication →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPaper;