import React from 'react'
import '../../src/index.css'
import Photo from '../images/personal-image4.jpg'

function Intro() {
    return (
        <div className="intro">
            <img className="photo" src={Photo}></img>
            <div className="info">
                <h1 style={namefont}>Dennis Krupitsky</h1>
                <h2 style={position}>Software Engineer</h2>
            </div>
        </div>
    )
}

const namefont = {
    fontSize: '65px'
}

const position = {
    fontSize: '45px'
}
export default Intro;