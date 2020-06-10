import React from 'react'
import Resume from '../images/DennisKResume.pdf'
import ResumeLogo from '../images/resumelogo.png'
import GIT from '../images/git.png'
import LinkedIN from '../images/linkedinlogo.png'
export default function Contact() {
    return (
        <div id="contact" style={{marginBottom: '100px'}}>
            <div>
                <div className="blackbar float-right"></div>
                <h2 className="headers"><span style={{color: 'rgb(4, 124, 34)'}}>CON</span>TACT</h2>
                <div className="blackbar float-left"></div>
            </div>  
            <div className="mt-5 ml-4">
                <a target="_blank" href="https://github.com/denniskrup"><input type="image" height="80px" src={GIT} alt="Open Link"/></a>
                <a target="_blank" style={{marginRight: '-20px', outline: 'none'}}href="https://www.linkedin.com/in/dennis-krupitsky-481168182/"><input type="image" height="90px" src={LinkedIN} alt="Open Link"/></a>
                <a target="_blank" href={Resume}><input height="90px" type="image" src={ResumeLogo} alt="Open Link"/></a>
            </div>
        </div>
    )
}
