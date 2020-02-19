
import React, {Component} from 'react';


class Projects extends Component {


  
  constructor(props) {
    super(props)
    this.  state = {
        description: ' ',
        gif: ' '
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //projects array
  projects = [
    {
        id: 1,
        description: 'SPORTSHUB APP',
        gif: 'location'
    },
    {
        id:2,
        description: 'YELP APP',
        gif: 'location'
    },
    {
        id:3,
        description: 'MACHINE LEARNING PROJECT',
        gif: 'location'
    },
    {
        id:4,
        description: 'EMAIL TRANSLATE APP',
        gif: 'location'
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
      console.log(project);
      
    this.setState({ description: project.description });

  }


  render() {
    return (
        
        <div className="Project">
            <div id="projects">
                <div className="blackbar float-right"></div>
                <h2 className="headers"><span style={{color: 'rgb(4, 124, 34)'}}>PRO</span>JECTS</h2>
                <div className="blackbar float-left"></div>
            </div>  
            <button  onClick={() => this.handleClick(1)}> SPORTSHUB</button>
            <button  onClick={() => this.handleClick(2)}> YELP</button>
            <button  onClick={() => this.handleClick(3)}> Machine Learning</button>
            <button  onClick={() => this.handleClick(4)}> Email Translate</button>
            <p>{this.state.description}</p>
        </div>
    )
  }
}


export default Projects;
