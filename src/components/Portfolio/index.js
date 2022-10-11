import React , {useState} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

import { FaGithubSquare, FaAppStore } from 'react-icons/fa'

function Portfolio() {
    const projects = useState([
        { 
            name: "PetHub", 
            deployed:"https://pets-projects.herokuapp.com/",
            repository:"https://github.com/Beca-d/Project2" 
        },
        { 
            name: "MusicBox", 
            deployed:"https://beca-d.github.io/music-box/",
            repository: "https://github.com/Beca-d/music-box" 
        },
        { 
            name: "JATE Text Editor", 
            deployed:"https://beca-d-jate.herokuapp.com/",
            repository: "https://github.com/Beca-d/Text-Editor" 
        },
        { 
            name: "Note Taker", 
            deployed:"https://warm-river-97499.herokuapp.com/",
            repository: "https://github.com/Beca-d/Note-taker" 
        },
        { 
            name: "Daily Planner", 
            deployed:"https://beca-d.github.io/Daily-Planner/",
            repository: "https://github.com/Beca-d/Daily-Planner" 
        },
        { 
            name: "JavaScript Quiz", 
            deployed:"https://beca-d.github.io/JavaScript-Quiz/",
            repository: "https://github.com/Beca-d/JavaScript-Quiz" 
        },
    ]);
    return (
        <section className="my-5">
            <h1 id="portfolio">Portfolio</h1>
            <div id="container-of-work" className='flex-row'>
                {projects.map((image) => (
                    <div>
                        <div className='flex-row space-between '>
                            <h2 className="mx-2">{capitalizeFirstLetter(image.name)}</h2>
                            <h2 className="mx-2">
                                <a href={image.repo} 
                                    rel="noreferrer" 
                                    target="_blank" 
                                    alt="Github logo"
                                >

                                    <FaGithubSquare/>
                                </a>
                            </h2>
                            <h2 className="mx-2">
                                <a href={image.deployedLink} 
                                    rel="noreferrer" 
                                    target="_blank" 
                                    alt="App logo" 
                                >
                                <FaAppStore/>
                                </a>
                            </h2>
                </div>
                <img
                    src={require(`../../assets/Portfolio/${image.name}.jpg`).default}
                    alt={image.name}
                    className='img-thumbnail mx-1'
                    key={image.name}
                />
            </div>
                ))}
            </div>
            
        </section>
    );
}

export default Portfolio; 