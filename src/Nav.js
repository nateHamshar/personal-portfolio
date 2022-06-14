import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/personal-portfolio" className="pageLinks">Home</Link>
                <div className="segment"></div>
                <Link to="/about" className="pageLinks">About</Link>
                <Link to="/projects" className="pageLinks">Projects</Link>
                <Link to="/resume" className="pageLinks">Resume</Link>
                <Link to="/contact" className="pageLinks">Contact</Link>
            </div>
        </div>
    );
}
 
export default Navbar;