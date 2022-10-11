import React from 'react';
import profileImage from "../../assets/profile.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <div>
                <img src={profileImage} className="my-2" style={{ width: "175px", height: "250px" }} alt="cover" /> 
                <div className="my-2">
                    <p> 
                        I am a proven GIS analyst with 7+ years experience working with ArcGIS software and spatial databases including 2.5 years of professional experience. I have recently decided to upgrade my skills and complete a coding bootcamp at UFT in order to become a Full Stack Developer. I hope to utilize both my skills in GIS, data analysis, and my newly fostered development skills to grow my career in the tech industry. I am keen on learning new things and constantly growing my knowledge base. I have established ability in database management, data analysis, and project management. I am demonstrated in working with a team and leading various projects including workflow automation with FME and providing custom data products to stakeholders. I look forward to developing new applications and building more complex web maping applications with my new skills. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About; 