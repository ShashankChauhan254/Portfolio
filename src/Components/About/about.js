import React from 'react';
import './about.css'

const About = () => {
    return (
        <section className='About'>
            <div className='Title'>About Me</div>
            <div className='Pera'>
                Hello, I am Shashank Chauhan.
                <p>I am currently pursuing a BTech in Artificial Intelligence and Data Science at IIT Jodhpur. </p>
                <p>With a strong foundation in data-driven technologies, I have developed skills in data analysis, statistical modeling, machine learning, and data visualization. </p>
                <p>I am proficient in tools such as Python, SQL, Excel, and Power BI, which I use to extract insights and solve real-world problems. Beyond technical expertise, I actively work on enhancing my communication and collaboration skills by contributing to the organization of college fests and events. </p>
                <p>I also maintain a balanced lifestyle by regularly participating in sports for physical well-being. I am passionate about turning data into actionable insights and continuously seek new challenges that push me to learn and grow as a data analyst.</p>
            </div>
            <div className='Quote'>"I hope my personality will be better than yesterday."</div>
        </section>
    );
}

export default About
