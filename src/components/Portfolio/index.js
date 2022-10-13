import React from 'react';
import dailyPlanner from '../../assets/Portfolio/dailyPlanner.JPG';
import jateTextEditor from '../../assets/Portfolio/jateTextEditor.JPG';
import javaScriptQuiz from '../../assets/Portfolio/javaScriptQuiz.JPG';
import musicBox from '../../assets/Portfolio/musicBox.JPG';
import petHub from '../../assets/Portfolio/petHub.JPG';
import noteTaker from '../../assets/Portfolio/noteTaker.JPG';
import makeADeal from '../../assets/Portfolio/noteTaker.JPG';


function Portfolio() {
    const projects = [
        { 
            id: 1,
            title: "PetHub",
            name: petHub, 
            deployed:"https://pets-projects.herokuapp.com/",
            repository:"https://github.com/Beca-d/Project2" 
        },
        { 
            id: 2,
            title: "MusicBox",
            name: musicBox, 
            deployed:"https://beca-d.github.io/music-box/",
            repository: "https://github.com/Beca-d/music-box" 
        },
        { 
            id: 3,
            title: "JATE Text Editor",
            name: jateTextEditor, 
            deployed:"https://beca-d-jate.herokuapp.com/",
            repository: "https://github.com/Beca-d/Text-Editor" 
        },
        { 
            id: 4,
            title: "Note Taker",
            name: noteTaker, 
            deployed:"https://warm-river-97499.herokuapp.com/",
            repository: "https://github.com/Beca-d/Note-taker" 
        },
        { 
            id: 5,
            title: "Daily Planner",
            name: dailyPlanner, 
            deployed:"https://beca-d.github.io/Daily-Planner/",
            repository: "https://github.com/Beca-d/Daily-Planner" 
        },
        { 
            id: 6,
            title: "JavaScript Quiz",
            name: javaScriptQuiz, 
            deployed:"https://beca-d.github.io/JavaScript-Quiz/",
            repository: "https://github.com/Beca-d/JavaScript-Quiz" 
        },
        { 
            id: 7,
            title: "Make A Deal",
            name: makeADeal, 
            deployed:"hhttps://make-a-deal2.herokuapp.com/",
            repository: "https://github.com/Beca-d/Make-A-Deal" 
        }
    ];

    return (
        <div name='portfolio'>
            <div className=''>
                <h1 id='portfolio'>Portfolio</h1>
                <div id='projectContainer' className='flex-row'>
                    {projects.map((project) => (
                        <div key={project.id}>
                            <h5 id='projectTitle'>{project.title}</h5>
                            <img
                                src={project.name}
                                alt={project.name}
                                className='img-thumbnail mx-1'
                            />
                            <div className='projectButtons'>
                                <button>
                                    <a href={project.deployed} target='_blank' rel='noreferrer'>
                                        App
                                    </a>
                                </button>
                                <button>
                                    <a href={project.repository} target='_blank' rel='noreferrer'>
                                        Repo
                                    </a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
  };

  export default Portfolio;