import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Intro from './components/Intro'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="mb-5">
        <Intro />
      </Container>
    </div>
  );
}

export default App;
