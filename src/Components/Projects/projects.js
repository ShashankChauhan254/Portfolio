import React, { useState, useRef, useEffect } from "react";
import "./projects.css";

const allProjects = [
  {
    title: "Shree Photos Films — Portfolio Website",
    date: "Dec 2025 – Jan 2026",
    skills: ["Web Development"],
    bullets: [
      "Designed and built a full front-end portfolio site from scratch using React.js and Tailwind CSS for a photography and videography studio.",
      "Developed a responsive photo/video gallery, a studio journey/work showcase, and a contact section, consistent across desktop and mobile.",
      "Deployed to production as a live client-facing platform enabling client inquiries; continue to maintain and update it.",
    ],
    links: {
      website: "https://shashank-chauhan-portfolio.netlify.app/",
    },
  },
  {
    title: "PPTX Inconsistency Checker",
    date: "Jul – Aug 2025",
    skills: ["Machine Learning", "Data Analyst"],
    bullets: [
      "Built an AI-powered Python tool using python-pptx and Tesseract OCR to extract text from slide content and embedded images.",
      "Combined rule-based checks (regex-driven numeric/date parsing) with an LLM pipeline (Google Gemini 2.5 Flash) to flag conflicting numbers, statements, and date mismatches between slides.",
      "Generated structured JSON and Markdown inconsistency reports by slide for quick review.",
    ],
    links: {
      github: "https://github.com/ShashankChauhan254/pptx_checker", // TODO: add repo link
    },
  },
  {
    title: "Customer Retention & Churn Prediction",
    date: "Jun – Jul 2025",
    skills: ["Data Analyst", "Machine Learning"],
    bullets: [
      "Built an end-to-end ETL pipeline using SQL and Python to clean, transform, and load 500K+ records for churn prediction.",
      "Segmented customers using RFM analysis and KMeans clustering; developed interactive Power BI dashboards for churn risk and KPIs.",
      "Delivered targeted retention recommendations, translating analysis into business process improvements.",
    ],
    links: {
      github: "https://github.com/ShashankChauhan254/Customer_Churn_Prediction_and_Analytics_System",
      dashboard: "https://app.powerbi.com/view?r=eyJrIjoiNDZkODNhNmYtYzI3Yi00MzkxLWJjOTYtYTEzODI3MGI5N2Q5IiwidCI6IjE3ZDA1NDhhLTU2ZDYtNGY4NC05MWY3LTJjYTE5ZDgzM2Q4YyJ9&pageName=4c0f5284eb55945662a1",
    },
  },
  {
    title: "Ola Data Analytics Project",
    date: "May – Jun 2025",
    skills: ["Data Analyst"],
    bullets: [
      "Analyzed 100K+ booking records; designed SQL views and calculated KPIs for ride metrics, ratings, and cancellation patterns.",
      "Built Power BI dashboards highlighting peak demand periods and high-value customer segments for data-backed decisions.",
    ],
    links: {
      github: "https://github.com/ShashankChauhan254/OLA_Data_Analysis_Project",
      dashboard: "https://app.powerbi.com/view?r=eyJrIjoiZWU5NTIyZDctOTgxYS00YjlhLWIyN2UtNDk5NWM4YTQzYjcwIiwidCI6IjE3ZDA1NDhhLTU2ZDYtNGY4NC05MWY3LTJjYTE5ZDgzM2Q4YyJ9&pageName=2d27fd7446151eb52eda",
    },
  },
  {
    title: "ECommerce Website",
    date: "Dec 2024 – Jan 2025",
    skills: ["Web Development"],
    bullets: [
      "Built a front-end e-commerce landing site from scratch using React.js and Tailwind CSS, with hero, product listing, testimonials, and newsletter sections.",
      "Implemented a persistent light/dark mode toggle, scroll-triggered animations (AOS), and a product carousel (react-slick).",
    ],
    links: {
      github: "https://github.com/ShashankChauhan254/ECommerce",
      website: "https://funny-cucurucho-4a5ceb.netlify.app/",
    },
  },
  {
    title: "Face Mask Detection",
    date: "Dec 2024",
    skills: ["Machine Learning"],
    bullets: [
      "Built a CNN image classifier in TensorFlow/Keras to detect whether a person is wearing a face mask.",
      "Preprocessed and normalized image data, achieving 92% test accuracy; built an OpenCV pipeline for real-time inference.",
    ],
    links: {
      github: "https://github.com/ShashankChauhan254/Face-Mask-Detection",
    },
  },
  {
    title: "Breast Cancer Classification",
    date: "Dec 2024",
    skills: ["Machine Learning"],
    bullets: [
      "Built a neural network classifier in TensorFlow/Keras to predict malignant vs. benign tumors using the Wisconsin dataset (30 features).",
      "Standardized input features and trained a dense neural network, achieving 95.6% test accuracy.",
    ],
    links: {
      github: "https://github.com/ShashankChauhan254/BreastCancerClassification",
    },
  },
  {
    title: "Fruit & Vegetables Recognition",
    date: "Apr – May 2023",
    skills: ["Machine Learning"],
    bullets: [
      "Developed a production-ready computer vision system using CNN, RCNN, and SSD architectures, achieving 95%+ accuracy on 3,800+ images.",
      "Optimized for real-time inference, reducing latency by 40% through model quantization and pruning.",
      "Deployed a lightweight model for real-time classification on edge devices.",
    ],
    links: {
      github: "https://github.com/ShashankChauhan254/Fruit_Veg_Recognize",
    },
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
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
      { threshold: 0.15 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <section className="projects-section Project" id="Project" ref={sectionRef}>
      <h2 className="project-heading">Projects</h2>
      <div className={`projects-container ${inView ? "inView" : ""}`}>
        {allProjects.slice(0, visibleCount).map((project, index) => (
          <div
            className="project-card"
            style={{ "--i": index % 3 }}
            key={project.title}
          >
            <h3>{project.title}</h3>
            <p className="project-date">{project.date}</p>
            <p>
              <strong>Skills:</strong> {project.skills.join(", ")}
            </p>

            <div className="tooltip">
              {project.bullets.map((b) => (
                <span key={b} className="tooltipItem">{b}</span>
              ))}
            </div>

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