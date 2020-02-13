import React from 'react'
import CS from '../images/csharp.png'
import CPP from '../images/cpp-logo.png'
import PY from '../images/python-log.png'
import ReactJS from '../images/reactjs.png'
import EmberJS from '../images/emberjs.png'
import PHP from '../images/php.png'



export default function Skills() {


    const design1 = {
        color: 'rgb(4, 124, 34)'
    }


    return (
        <React.Fragment>
            <div>
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
                <div class="col mx-auto">
                    <img height="130px" width="130px" src={PY}></img>
                    <div className="progressbar mx-auto mt-5">
                        <div style={{width: '80%'}}></div>
                    </div>
                </div>
                <div class="col mx-auto">
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
            <div class="col mx-auto">
                <img height="130px" width="130px" src={PY}></img>
                <div className="progressbar mx-auto mt-5">
                    <div style={{width: '80%'}}></div>
                </div>
            </div>
            <div class="col mx-auto">
                <img height="130px" width="130px" src={ReactJS}></img>
                <div className="progressbar mx-auto mt-5">
                    <div style={{width: '60%'}}></div>
                </div>
            </div>
            </div>

        </React.Fragment> 
    )
}
