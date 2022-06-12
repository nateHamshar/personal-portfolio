import Navbar from "./Nav";
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
