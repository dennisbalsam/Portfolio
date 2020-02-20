
import React, {Component} from 'react';
import SPORTSHUB from '../images/sportshub-gif.gif'
import YELP from '../images/yelpAPP.gif'
import MOVIES from '../images/movieApp.gif'
import GIT from '../images/git.png'
import MLPHOTOS from '../images/flowers.PNG'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
        description: this.projects[0].description,
        gif: this.projects[0].gif,
        title: this.projects[0].title,
        gitlink:this.projects[0].gitlink
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //projects array
  projects = [
    {
        id: 1,
        title:'SPORTSHUB',
        description: 'Project creating a sports application utilizing the sportsdataio, firebase, and microsoft azure apis' +
         'to create a sports betting application. The user is able to sign in to their google account, and from there they' +
          'are able to view stats, highlights, standings, etc about multiple sports. They are able to see what upcoming games' +
           'are scheduled by sport and allowed the oppurtunity to place a wager on that team. The user is able to deposit funds' +
            'into their account, and also view bets they have placed.',
        gif: SPORTSHUB,
        gitlink:'https://github.com/denniskrup/sportshub'
    },
    {
        id:2,
        description: 'Project utilizing the yelp, firebase and google MAPS API, to create a program with a modern, slick'+
         'interface where the user signs in to their google account and can search for business using 3 search' +
          'parameters, which provide a autocomplete function to show the results matching the criteria. The details' +
           'page returns the selected business details, the maps location and an option to store it to the google users' +
            'favorites.',
        title:'YELP APP',
        gif: YELP,
        gitlink:'https://github.com/denniskrup/yelpAPI-APP'
        
    },
    {
        id:3,
        description: 'Project conducting research to propose and develop different solutions for classification problems' +
         'using Convolutional Neural Networks, by experimenting with different training approaches including batch training,' +
          'gradient and stochastic gradient descent methods and different activation and loss functions, augmentation, pooling' +
           'and dropout. Models created use the Flowers data set from Kaggle, which are plotted and analyzed in order to see' +
           'evaluate the performance of the different applications and architectures using validation procedures. ' +
           'There are sample results of the expirements, Click the GitHub link if you would like to read the research paper',
        title:'MACHINE LEARNING  PROJECT',
        gif: MLPHOTOS,
        gitlink:'https://github.com/denniskrup/Deep-Learning-with-Python-Research-Project/blob/master/Thesis-Paper/thesis-paper.pdf'
    },
    {
        id:4,
        description: 'EMAIL TRANSLATE APP',
        title:'EMAIL TRANSLATE APP',
        gif: 'location',
        gitlink:'link'
    },
    {
      id:5,
      description: 'Project utilizing the OMDBApi ( a RESTful web service to obtain movie information), to create a small' +
       'interface where the user can either view details about the pre-selected movie options, or do a search for details' +
        'about the movie of their choice.',
      title:'MOVIE APP',
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
    this.setState({ description: project.description, gif:project.gif, title:project.title, gitlink:project.gitlink });
    
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
                <h1 className="text-center mb-2">{this.state.title}</h1>
                <p className="text-center project-description"  >{this.state.description}</p>
                <img style={{display: 'inline-block'}} className="float-right" alt="demo gif" src={this.state.gif}></img>
                <a style={{position:'absolute', bottom: '20px', right:'0'}}target="_blank" href={this.state.gitlink}><input className="float-right" type="image" height="30px" height="70px" id="saveform" src={GIT} alt="Submit Form"/></a>
              </div>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button  type="button" className="projectbtn" onClick={() => this.handleClick(1)}> SPORTSHUB</button>
                <button  type="button" className="projectbtn" onClick={() => this.handleClick(2)}> YELP</button>
                <button  type="button" className="projectbtn" onClick={() => this.handleClick(5)}> Movie APP</button>
                <button  type="button" className="projectbtn" onClick={() => this.handleClick(3)}> Machine Learning</button>
                <button  type="button" className="projectbtn" onClick={() => this.handleClick(4)}> Email Translate</button>
              </div>
            </div>
        </div>
    )
  }
}


export default Projects;
