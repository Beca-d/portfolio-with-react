import React from "react";

function Resume() {
    return (
        <section className="ju resume">
            <div className="my-5">
                <h1>
                    <b>Professional Resume: </b>
                </h1>
                <h3>
                    <a  href="https://drive.google.com/uc?export=download&id=1cHcMpwTtkpsBsp0S3sqkizWT4z9GncRk" 
                        rel="noreferrer" target="_blank"
                        alt="Resume"
                    >
                    Click here
                    </a>
                    <span> </span> to download a copy of my resume!
                </h3>
            </div>
            <div>
                <h3>
                    <b>Front End Skills </b>
                </h3>
                <h5>
                    HTML & CSS
                </h5>
                <h5>
                    JavaScript/jQuery
                </h5>
                <h5>
                    AJAX
                </h5>
                <h5>
                    Git 
                </h5>
                <h3>
                    <b>Back End Skills</b> 
                </h3>
                <h5>
                    Node.js
                </h5>
                <h5>
                    Express
                </h5>
                <h5>
                    React
                </h5>
                <h5>
                    MongoDB
                </h5>
                <h5>
                    MySQL
                </h5>
            </div>
        </section>
    );
}

export default Resume;