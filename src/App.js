import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <NavBar />

      <scroll-container>
        <scroll-page id="home">
          <Home />
        </scroll-page>
        <scroll-page id="about">
          <About />
        </scroll-page>
        <scroll-page id="projects">
          <Projects />
        </scroll-page>
        <scroll-page id="contact">
          <Contact />
        </scroll-page>
      </scroll-container>
    </>
  );
}

export default App;
