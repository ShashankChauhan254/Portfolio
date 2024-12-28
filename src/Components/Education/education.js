import React from 'react';
import './education.css';
import GSEB from '../../Assets/GSEB.png';
import IITJ from '../../Assets/iitj.png';

const Education = () => {
    return (
        <section id = 'education'>
            <span className='Title'>Education</span>
            <div className='EducationContainer'>
                <div className='EducationBar'>
                    <img src={GSEB} alt='' className='EducationBarImg' />
                    <div className='EducationName'>
                        <h2>10th Board Exam</h2>
                        <h4>Year: 2018</h4>
                        <h4>Percentage: 85.67%</h4>
                    </div>
                </div>
                <div className='EducationBar'>
                    <img src={GSEB} alt='' className='EducationBarImg' />
                    <div className='EducationName'>
                        <h2>12th Board Exam</h2>
                        <h4>Year: 2020</h4>
                        <h4>Percentage: 71.38%</h4>
                    </div>
                </div>
                <div className='EducationBar'>
                    <img src={IITJ} alt='' className='EducationBarImg' />
                    <div className='EducationName'>
                        <h2>BTech In Artifical Intelligence and Data Science</h2>
                        <h4>Year: 2021-25</h4>
                        <h4>CGPA: 5.26</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education
