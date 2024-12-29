import React from "react";
import "./positions.css";

const Positions = () => {
    return (
        <section id="Positions">
        <span className="Title">Positions</span>
        <div className="PositionContainer">
            <div className="PositionBar">
            <div className="PositionName">
                <h2>Member of Board of Academic Interaction, IIT Jodhpur</h2>
                <h4>Dec. 2021 - Present</h4>
            </div>
            </div>
            <div className="PositionBar">
            <div className="PositionName">
                <h2>Class Representative of B21 Artificial Intelligence and Data Science, IIT Jodhpur</h2>
                <h4>Dec. 2021 - Present</h4>
            </div>
            </div>
            <div className="PositionBar">
            <div className="PositionName">
                <h2>Head of the Aaftaab Fest PR and Marketing Team, IIT Jodhpur </h2>
                <h4>Jan. 2024 - Feb. 2024</h4>
            </div>
            </div>
        </div>
        <button className="PositionButton">More Positions</button>
        </section>
    );
}

export default Positions;