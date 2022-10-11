import React from 'react';
import dailyPlanner from '../../assets/Portfolio/dailyPlanner.JPG';
import jateTextEditor from '../../assets/Portfolio/jateTextEditor.JPG';
import javaScriptQuiz from '../../assets/Portfolio/javaScriptQuiz.JPG';
import musicBox from '../../assets/Portfolio/musicBox.JPG';
import petHub from '../../assets/Portfolio/petHub.JPG';
import noteTaker from '../../assets/Portfolio/noteTaker.JPG';


function Portfolio() {
    const projects = [
        { 
            id: 1,
            name: petHub, 
            deployed:"https://pets-projects.herokuapp.com/",
            repository:"https://github.com/Beca-d/Project2" 
        },
        { 
            id: 2,
            name: musicBox, 
            deployed:"https://beca-d.github.io/music-box/",
            repository: "https://github.com/Beca-d/music-box" 
        },
        { 
            id: 3,
            name: jateTextEditor, 
            deployed:"https://beca-d-jate.herokuapp.com/",
            repository: "https://github.com/Beca-d/Text-Editor" 
        },
        { 
            id: 4,
            name: noteTaker, 
            deployed:"https://warm-river-97499.herokuapp.com/",
            repository: "https://github.com/Beca-d/Note-taker" 
        },
        { 
            id: 5,
            name: dailyPlanner, 
            deployed:"https://beca-d.github.io/Daily-Planner/",
            repository: "https://github.com/Beca-d/Daily-Planner" 
        },
        { 
            id: 6,
            name: javaScriptQuiz, 
            deployed:"https://beca-d.github.io/JavaScript-Quiz/",
            repository: "https://github.com/Beca-d/JavaScript-Quiz" 
        }
    ];

    return (
        <div
        name='portfolio'
        className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
      >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>
              Portfolio
            </h1>
          </div>
  
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {projects.map(({ id, name, deployed, repository }) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img
                  src={name}
                  alt=''
                  className='rounded-md duration-200 hover:scale-105'
                  width="300px" 
                  height="300px"
                />
                <div className='flex items-center justify-center'>
                  <button
                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    href='{}'
                  >
                    <a href={deployed} target='_blank' rel='noreferrer'>
                      App
                    </a>
                  </button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    <a href={repository} target='_blank' rel='noreferrer'>
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