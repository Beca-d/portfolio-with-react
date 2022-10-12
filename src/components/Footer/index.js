import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="flex-row ">
            <h2 className="mx-2">
              <a href="https://www.linkedin.com/in/rebeca-smith-79438814a/"
                  rel="noreferrer" target="_blank"
                  alt="LinkedIn logo" 
              >
                  <FaLinkedin/>
              </a>
            </h2>
            <h2 className="mx-2">
              <a href="https://github.com/Beca-d" 
                  rel="noreferrer" target="_blank" 
                  alt="Github logo" 
              >
                  <FaGithub/>
              </a>
            </h2>
            <h2 className="mx-2">
              <a href="https://twitter.com/RebecaS75025870"
                  rel="noreferrer" target="_blank"
                  alt="Twitter logo" 
              >
                  <FaTwitter/>
              </a>
            </h2>
        </footer>
    )
}

export default Footer;