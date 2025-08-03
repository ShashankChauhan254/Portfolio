import React, { useState } from "react";
import "./paper.css";

const allPaper = [
  {
    title: "Exact and Parameterized Algorithms for Window Minimization in Bipartite Arrangement",
    Publishers: ["Springer Publishers"],
  },
];

const ResearchPaper = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section className="paper-section ResearchPaper" id="paper">
      <h2 className="paper-heading">Research Paper</h2>
      <div className="paper-container">
        {allPaper.slice(0, visibleCount).map((project, index) => (
          <div className="paper-card" key={index}>
            <h3>{project.title}</h3>
            <p>
              <strong>Publishers:</strong> {project.Publishers.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPaper;
