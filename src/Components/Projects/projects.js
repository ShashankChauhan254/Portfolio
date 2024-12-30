import React from 'react';
import './projects.css';

const Projects = () => {
    return (
        <section id = 'Project'>
            <span className='Title'>Projects</span>
            <div className='ProjectContainer'>
                <div className='ProjectBar'>
                    <div className='ProjectName'>
                        <h2>Fruit & Vegetables Recognition</h2>
                        <h4>Apr 2023 - May 2023</h4>
                        <a href='https://github.com/ShashankChauhan254/Fruit_Veg_Recognize.git'><h4>GitHub</h4></a>
                    </div>
                </div>
                // <div className='ProjectBar'>
                //     <div className='ProjectName'>
                //         <h2>Portfolio</h2>
                //         <h4>Dec 2024 - Dec 2024</h4>
                //         <a href='#'><h4>Website</h4></a>
                //     </div>
                // </div>
                <div className='ProjectBar'>
                    <div className='ProjectName'>
                        <h2>Shooting Game</h2>
                        <h4>Aug 2023 - Aug 2023</h4>
                        <a href='https://drive.google.com/drive/folders/1gQIgcoZO5VGgtN3GLnttal6_zqx1_AQy?usp=sharing'><h4>Game</h4></a>
                    </div>
                </div>
            </div>
            <button className='ProjectButton'>More Projects</button>
        </section>
    );
}

export default Projects
