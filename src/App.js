import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Container className="mb-5">
        <Intro />
        <Skills /> 
        <Projects />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
