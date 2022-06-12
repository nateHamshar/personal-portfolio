import "./Navbar.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";

const Navbar = () => {

    return (
        <div className="navbar">
            <BrowserRouter>
            <div className="links">
                <Link className="title" to="/">Logo</Link>
                <div className="segment"></div>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resumé</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <Routes>
                <Route> path="/contact" element={<About />} </Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default Navbar;