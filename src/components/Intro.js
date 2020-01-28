import React from 'react'
import '../../src/index.css'
import Photo from '../images/personal-image4.jpg'

function Intro() {
    return (
        <React.Fragment>        
        <div className="intro" id="intro">
            <img className="photo" src={Photo}></img>
            <div className="info">
                <h1 className="namefont">Dennis Krupitsky</h1>
                <h2 className="position">Software Engineer</h2>
            </div>
        </div>
        <div>
            <div className="blackbar float-right"></div>
            <h2 className="aboutme">ABOUT ME</h2>
            <div className="blackbar float-left"></div>
            <h5 className="mx-auto" >Allow me to introduce myself</h5>
        </div>
        <div className="description">
        <p> 
        Hi, nice to meet you, my name is Dennis.
        </p>
        </div>
        </React.Fragment>

       
    )
}


export default Intro;