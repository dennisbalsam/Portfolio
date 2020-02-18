import React from 'react'
import CS from '../images/csharp.png'
import CPP from '../images/cpp-logo.png'
import PY from '../images/python-log.png'
import ReactJS from '../images/reactjs.png'
import EmberJS from '../images/emberjs.png'
import PHP from '../images/php.png'
import SQL from '../images/mysql.png'
import CSS from '../images/csslogo.png'
import PERL from '../images/perllogo.png'
import GIT from '../images/gitlogo.png'
import HTML from '../images/htmllogo.png'
import JS from '../images/jslogo.png'


export default function Skills() {


    const design1 = {
        color: 'rgb(4, 124, 34)'
    }


    return (
        <div id="skills" >
            <div >
                <div className="blackbar float-right"></div>
                <h2 className="headers"><span style={{color: 'rgb(4, 124, 34)'}}>SKI</span>LLS</h2>
                <div className="blackbar float-left"></div>
            </div>  
            <div class="row mt-5 mx-auto">
                <div class="col mx-auto">
                        <img height="130px" width="130px" src={CPP}></img>
                        <div className="progressbar mx-auto mt-5">
                            <div style={{width: '95%'}}></div>
                        </div>
                </div>
                <div class="col mx-auto">
                    <img height="130px" width="130px" src={CS}></img>
                    <div className="progressbar mx-auto mt-5">
                        <div style={{width: '80%'}}></div>
                    </div>
                </div>
                <div class="col mx-auto mobile-skills">
                    <img height="130px" width="130px" src={PY}></img>
                    <div className="progressbar mx-auto mt-5">
                        <div style={{width: '80%'}}></div>
                    </div>
                </div>
                <div class="col mx-auto mobile-skills">
                    <img height="130px" width="130px" src={EmberJS}></img>
                    <div className="progressbar mx-auto mt-5">
                        <div style={{width: '80%'}}></div>
                    </div>
                </div>
            </div>
            <div class="row mt-5 mx-auto">
                <div class="col mx-auto">
                        <img height="130px" width="130px" src={ReactJS}></img>
                        <div className="progressbar mx-auto mt-5">
                            <div style={{width: '60%'}}></div>
                        </div>
                </div>
                <div class="col mx-auto">
                    <img height="130px" width="130px" src={PHP}></img>
                    <div className="progressbar mx-auto mt-5">
                        <div style={{width: '60%'}}></div>
                    </div>
                </div>
                <div class="col mx-auto mobile-skills">
                    <img height="130px" width="130px" src={SQL}></img>
                    <div className="progressbar mx-auto mt-5">
                        <div style={{width: '80%'}}></div>
                    </div>
                </div>
                <div class="col mx-auto mobile-skills">
                    <img height="130px" width="130px" src={GIT}></img>
                    <div className="progressbar mx-auto mt-5">
                        <div style={{width: '85%'}}></div>
                    </div>
                </div>
            </div>
            <div class="row mt-5 mx-auto">
                <div class="col mx-auto">
                        <img height="130px" width="130px" src={PERL}></img>
                        <div className="progressbar mx-auto mt-5">
                            <div style={{width: '40%'}}></div>
                        </div>
                </div>
                <div class="col mx-auto">
                    <img height="130px" width="95px" src={CSS}></img>
                    <div className="progressbar mx-auto mt-5">
                        <div style={{width: '80%'}}></div>
                    </div>
                </div>
                <div class="col mx-auto mobile-skills">
                    <img height="130px" width="130px" src={HTML}></img>
                    <div className="progressbar mx-auto mt-5">
                        <div style={{width: '90%'}}></div>
                    </div>
                </div>
                <div class="col mx-auto mobile-skills">
                    <img height="130px" width="130px" src={JS}></img>
                    <div className="progressbar mx-auto mt-5">
                        <div style={{width: '80%'}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
