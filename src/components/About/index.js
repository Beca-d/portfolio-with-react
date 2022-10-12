import React from 'react';
import profileImage from "../../assets/profile.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            
            <div>
                <div>
                    <img src={profileImage} className="profilePic" style={{ width: "175px", height: "250px" }} alt="cover" /> 
                    <h2 id='myName'> Hey, I'm Rebeca!</h2>
                </div>
                <div className="my-2">
                    <p className='bio'> 
                        I am a GIS analyst with 7+ years experience working with ArcGIS software and spatial databases. I have recently decided to upgrade my skills and complete a coding bootcamp at UofT in order to become a Full Stack Developer. I hope to utilize both my skills in GIS, data analysis, and my newly fostered development skills to grow my career in the tech industry. I am keen on learning and constantly growing my knowledge base. I have established ability in database management, data analysis, and project management. I am demonstrated in working with a team and leading various projects including workflow automation with FME and providing custom data products to stakeholders. I look forward to developing new applications and building more complex web maping applications with my new skills. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About; 