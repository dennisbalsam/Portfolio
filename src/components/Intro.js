import React from 'react'
import '../../src/index.css'
import Photo from '../images/personal-image4.jpg'

function Intro() {
    return (
        <React.Fragment>   
        <div className="intro" id="intro">     
            <div className="col-sm-4 col-md-12 col-lg-12">
                <img className="photo" src={Photo}></img>
                <div className="info">
                    <h1 className="namefont">Dennis Krupitsky</h1>
                    <h2 className="position">Software Engineer</h2>
                </div>
            </div>
            <div>
                <div className="blackbar float-right"></div>
                <h2 className="headers"><span style={{color: 'rgb(4, 124, 34)'}}>ABOUT </span> ME</h2>
                <div className="blackbar float-left"></div>
                <h5 className="mx-auto message" >Allow me to (re)introduce myself</h5>
            </div>
            <div className="description">
                <p className="bio"> 
                    My name is Dennis, I am an aspiring software engineer in New York City. I am currently working on acquiring my Bachelor of Science degree in Computer Science at the College of Staten Island. 
                    I have a passion for creating modern applications, in an attempt to become a full-stack developer. I am always looking to meet new people, learn new things, and
                    make the most out of life. On a more personal note, I am a big fanatic of the NFL, MLB and NBA (my goal is to start sports podcast by the end of the year), and I also 
                    really really love snowboarding. My time in college is coming to an end, and I am very excited to 
                    see what is in store for me in the real world.
                </p>
            </div>
        </div>
        </React.Fragment>

       
    )
}


export default Intro;