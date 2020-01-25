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
        <div className="description">
        <p> 
        i am a software engineer
        </p>
        </div>
        </React.Fragment>

       
    )
}


export default Intro;