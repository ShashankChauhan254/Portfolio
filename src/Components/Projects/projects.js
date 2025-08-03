import React, { useState } from "react";
import "./projects.css";

const allProjects = [
  {
    title: "Customer Retention & Churn Prediction",
    skills: ["Data Analyst", "Machine Learning"],
    links: {
      github: "https://github.com/ShashankChauhan254/Customer_Churn_Prediction_and_Analytics_System.git",
      dashboard: "https://app.powerbi.com/view?r=eyJrIjoiNDZkODNhNmYtYzI3Yi00MzkxLWJjOTYtYTEzODI3MGI5N2Q5IiwidCI6IjE3ZDA1NDhhLTU2ZDYtNGY4NC05MWY3LTJjYTE5ZDgzM2Q4YyJ9&pageName=4c0f5284eb55945662a1"
    }
  },
  {
    title: "Fruit & Vegetables Recognition",
    skills: ["Machine Learning"],
    links: {
      github: "https://github.com/ShashankChauhan254/Fruit_Veg_Recognize.git"
    }
  },
  {
    title: "Ola Data Analytics Project",
    skills: ["Data Analyst"],
    links: {
      github: "https://github.com/ShashankChauhan254/OLA_Data_Analysis_Project.git",
      dashboard: "https://app.powerbi.com/view?r=eyJrIjoiZWU5NTIyZDctOTgxYS00YjlhLWIyN2UtNDk5NWM4YTQzYjcwIiwidCI6IjE3ZDA1NDhhLTU2ZDYtNGY4NC05MWY3LTJjYTE5ZDgzM2Q4YyJ9&pageName=2d27fd7446151eb52eda"
    }
  },
  {
    title: "ECommerce Website",
    skills: ["Web Development"],
    links: {
      github: "https://github.com/ShashankChauhan254/ECommerce.git",
      website: "https://funny-cucurucho-4a5ceb.netlify.app/"
    }
  },
  {
    title: "Face Mask Detection",
    skills: ["Machine Learning"],
    links: {
      github: "https://github.com/ShashankChauhan254/Face-Mask-Detection.git",
    }
  },
  {
    title: "Breast Cancer Classification",
    skills: ["Machine Learning"],
    links: {
      github: "https://github.com/ShashankChauhan254/BreastCancerClassification.git",
    }
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="projects-section Project" id="projects">
      <h2 className="project-heading">Projects</h2>
      <div className="projects-container">
        {allProjects.slice(0, visibleCount).map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>
              <strong>Skills:</strong> {project.skills.join(", ")}
            </p>
            <div className="links">
              {project.links.website && (
                <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                  Website
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.links.dashboard && (
                <a href={project.links.dashboard} target="_blank" rel="noopener noreferrer">
                  DashBoard
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {visibleCount < allProjects.length && (
        <button className="see-more" onClick={handleSeeMore}>
          See More
        </button>
      )}
    </section>
  );
};

export default Projects;
