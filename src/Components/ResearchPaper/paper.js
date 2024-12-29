import React from "react";
import "./paper.css";

const Paper = () => {
    return (
        <section id="ResearchPaper">
        <span className="Title">Research Paper</span>
        <div className="PaperContainer">
            <div className="PaperBar">
            <div className="PaperName">
                <h3>Exact and Parameterized Algorithms for Window Minimization in Bipartite Arrangement</h3>
                <h4>July 2024 - Nov 2024</h4>
                <a href="https://drive.google.com/drive/folders/1eV8s1QGM1wbRuWR0tZ9wHVS0RXj7KvdO?usp=sharing"><h4>Paper</h4></a>
            </div>
            </div>
        </div>
        <button className="PaperButton">More Papers</button>
        </section>
    );
};

export default Paper;