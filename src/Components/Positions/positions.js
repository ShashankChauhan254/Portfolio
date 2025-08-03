import React, { useState } from "react";
import "./positions.css";

const allPOR = [
  {
    title: "Member, Board of Academic Interaction",
    Location: ["IIT Jodhpur"],
    Year: "Dec 2021 - Jul 2025"
  },
  {
    title: "Class Representative, B21 AI & Data Science",
    Location: ["IIT Jodhpur"],
    Year: "Dec 2021 - Jul 2025"
  },
  {
    title: "Head, PR & Marketing, Aaftaab Fest",
    Location: ["IIT Jodhpur"],
    Year: "Jan 2024 - Feb 2024"
  },
  {
    title: "Assistant Head, Resources, Ignus Fest",
    Location: ["IIT Jodhpur"],
    Year: "Dec 2022 - Feb 2023"
  },
  {
    title: "Assistant Head, PR, Prometeo Fest",
    Location: ["IIT Jodhpur"],
    Year: "Nov 2022 - Jan 2023"
  },
  {
    title: "Assistant Head, ATS, Varchas Fest",
    Location: ["IIT Jodhpur"],
    Year: "Oct 2022 - Nov 2022"
  },
];

const POR = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="pors-section Positions" id="pors">
      <h2 className="pors-heading">Position of Responcibilities</h2>
      <div className="pors-container">
        {allPOR.slice(0, visibleCount).map((project, index) => (
          <div className="por-card" key={index}>
            <h3>{project.title}</h3>
            <p>
              {project.Location.join(", ")}
            </p>
            <p className="por-year">
              {project.Year}
            </p>
          </div>
        ))}
      </div>
      {visibleCount < allPOR.length && (
        <button className="see-more" onClick={handleSeeMore}>
          See More
        </button>
      )}
    </section>
  );
};

export default POR;
