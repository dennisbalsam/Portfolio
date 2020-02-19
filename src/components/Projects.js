
import React, {Component} from 'react';
import SPORTSHUB from '../images/sportshub-gif.gif'
import YELP from '../images/yelpAPP.gif'
import MOVIES from '../images/movieApp.gif'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
        description: 'SPORTSHUB APP',
        gif: SPORTSHUB
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //projects array
  projects = [
    {
        id: 1,
        description: 'SPORTSHUB APP',
        gif: SPORTSHUB,
        gitlink:'link'
    },
    {
        id:2,
        description: 'YELP APP',
        gif: YELP,
        gitlink:'link'
        
    },
    {
        id:3,
        description: 'MACHINE LEARNING PROJECT',
        gif: 'location',
        gitlink:'link'
    },
    {
        id:4,
        description: 'EMAIL TRANSLATE APP',
        gif: 'location',
        gitlink:'link'
    },
    {
      id:5,
      description: 'EMAIL TRANSLATE APP',
      gif: MOVIES,
      gitlink:'link'
  }
  ]
  // toggle complete
  handleClick(value) {
    //find correct project
    let project = '';
    this.projects.map(todo => {
        if(todo.id === value) {
        project = todo;
        }
    });
        
    //set state  
    this.setState({ description: project.description, gif:project.gif });
    
  }


  render() {
    return (
        
        <div className="Project">
            <div id="projects">
                <div className="blackbar float-right"></div>
                <h2 className="headers"><span style={{color: 'rgb(4, 124, 34)'}}>PRO</span>JECTS</h2>
                <div className="blackbar float-left"></div>
            </div>  
            <div>
              <div className="project-details">
                <h1 className="text-center mb-5" >{this.state.description}</h1>
                <img className="float-right" alt="demo gif" src={this.state.gif}></img>
              </div>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button  type="button" className="projectbtn" onClick={() => this.handleClick(1)}> SPORTSHUB</button>
                <button  type="button" className="projectbtn" onClick={() => this.handleClick(2)}> YELP</button>
                <button  type="button" className="projectbtn" onClick={() => this.handleClick(3)}> Machine Learning</button>
                <button  type="button" className="projectbtn" onClick={() => this.handleClick(4)}> Email Translate</button>
                <button  type="button" className="projectbtn" onClick={() => this.handleClick(5)}> Movie APP</button>
              </div>
            </div>
        </div>
    )
  }
}


export default Projects;
