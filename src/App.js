import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Intro from './components/Intro'



function App() {
  return (
    <div className="App">
      <Container>
        <Intro />
      </Container>
    </div>
  );
}

export default App;
