import React, { useEffect, useRef, useState } from 'react';
import './about.css'

const About = () => {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={`About ${inView ? 'inView' : ''}`} ref={sectionRef}>
            <div className='Title'>About Me</div>
            <div className='Pera'>
                <p style={{ '--i': 0 }}>Hello, I am Shashank Chauhan.</p>
                <p style={{ '--i': 1 }}>I am graduated with a B.Tech in Artificial Intelligence and Data Science at IIT Jodhpur (June 2026).</p>
                <p style={{ '--i': 2 }}>I work as a Data Annotator & Analyst Intern — building SQL-based ETL pipelines, Power BI dashboards, and applied ML models (regression, classification, clustering), including an end-to-end pipeline processing 500K+ records for churn prediction. At Prodigal Tech, I annotate and analyze NLP model output, running error-pattern analysis and reporting for ML teams.</p>
                <p style={{ '--i': 3 }}>Alongside analytics, I build front-end web apps with React.js and Tailwind CSS — from a live client-facing photography portfolio to this site. Beyond technical work, I've taken on several Positions of Responsibility at IIT Jodhpur, from Class Representative to leading PR &amp; Marketing for a college fest, which sharpened my communication and cross-team collaboration.</p>
                <p style={{ '--i': 4 }}>I also maintain a balanced lifestyle by regularly participating in sports for physical well-being. I am passionate about turning data into actionable insights and continuously seek new challenges that push me to learn and grow as a data analyst.</p>
            </div>
            <div className='Quote' style={{ '--i': 5 }}>"I hope my personality will be better than yesterday."</div>
        </section>
    );
}

export default About