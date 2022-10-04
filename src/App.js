import { Box } from "@chakra-ui/react";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Box id="home">
        <Home />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
      <Footer />
    </>
  );
}

export default App;
