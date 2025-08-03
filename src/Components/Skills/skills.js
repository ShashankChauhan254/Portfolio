import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <div className="skills-section Skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <h3 className="card-title">Data Analyst</h3>
          <p><span className="label">Language:</span> SQL, Python</p>
          <p><span className="label">Libraries:</span> Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn</p>
          <p><span className="label">Tools:</span> MySQL, Power BI, Excel, Google Colab</p>
        </div>

        <div className="skill-card">
          <h3 className="card-title">Machine Learning</h3>
          <p><span className="label">Language:</span> Python</p>
          <p><span className="label">Libraries:</span> Pandas, Numpy, TensorFlow, PyTorch, Scikit-learn</p>
          <p><span className="label">Tools:</span> VS Code, Google Colab, Excel</p>
        </div>

        <div className="skill-card">
          <h3 className="card-title">Web Development</h3>
          <p><span className="label">Language:</span> HTML, CSS, JS</p>
          <p><span className="label">Libraries:</span> React JS, TailWind CSS</p>
          <p><span className="label">Tools:</span> VS Code, GitHub, Netlify</p>
        </div>

        <div className="skill-card">
          <h3 className="card-title">Game Development</h3>
          <p><span className="label">Language:</span> C++</p>
          <p><span className="label">Tools:</span> Unreal Engine</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
