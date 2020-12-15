import './App.css';
import { Router } from "@reach/router"
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import About from "./components/about/About";
import PersonalProjects from "./components/personal-projects/PersonalProjects";
import WorkExperience from "./components/work-experience/WorkExperience";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper-grid">
          <div id="nav"><Navigation/></div>
          <div id="component-root">
            <Router>
              <Home path="/" />
              <About path="about" />
              <PersonalProjects path="personal-projects" />
              <WorkExperience path="work-exp" />
              <Education path="education" />
              <Contact path="contact" />
            </Router>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
