import "./About.css";
import { faGithub, faJs, faCss3, faHtml5, faReact, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
    return (
      <div className="container">
        <div className="me section">
          <h1 className="title">Hi, my name is Nate Hamshar</h1>
          <p className="description">I am a self taught front end developer, with a passion for making websites that are both functional and beautiful. I tend to pick up skills quickly, and love to push myself to get better and better every day. If I'm not in front of my laptop, I'm probably gaming or playing with my dogs.</p>
        </div>
        <div className="skills section mini1">
          <FontAwesomeIcon icon={faGithub} className="icons"/>
          <FontAwesomeIcon icon={faGitAlt} className="icons"/>
          <FontAwesomeIcon icon={faJs} className="icons"/>
          <FontAwesomeIcon icon={faCss3} className="icons"/>
          <FontAwesomeIcon icon={faHtml5} className="icons"/>
          <FontAwesomeIcon icon={faReact} className="icons"/>
        </div>
        <div className="mySkills section mini1">
          <h1 className="skillset">Skill Set</h1>
          <ul>
            <li>Git and <a className="githubLink" href="https://github.com/nateHamshar" target="_blank">Github</a></li>
            <li>HTML5, CSS3, and JS</li>
            <li>Avid React Developer</li>
            <li>Experience using D3, SASS, Boostrap, and Semantic UI</li>
            <li>Object Oriented Programming</li>
            <li>Comfortable using Axios, and working with APIs and databases</li>
          </ul>
        </div>
        
      </div>
    );
};
export default About;