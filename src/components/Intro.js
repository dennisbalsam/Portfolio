import React from 'react'
import '../../src/index.css'
import Photo from '../images/personal-image4.jpg'

function Intro() {
    return (
        <div className="intro">
            <img className="photo" src={Photo}></img>
            <div className="info">
                <h1 className="namefont">Dennis Krupitsky</h1>
                <h2 className="position">Software Engineer</h2>
            </div>
        </div>
    )
}


export default Intro;