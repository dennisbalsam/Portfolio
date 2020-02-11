import React from 'react'
import CPP from '../images/cpp-logo.png'
import CS from '../images/csharp.png'
import Python from '../images/python-log.png'
import ReactJS from '../images/reactjs'
export default function Skills() {
    const imageedit = {
        height: '170px',
        width: '170px',
    }
    return (
        <React.Fragment>
            <div>
            <div className="blackbar float-right"></div>
                <h2 className="headers"><span style={{color: 'rgb(4, 124, 34)'}}>SKI</span>LLS</h2>
                <div className="blackbar float-left"></div>
            </div>
            <div className="mt-5">
                <div class="row">
                    <div class="col-sm"><img src={CPP} style={imageedit} ></img></div>
                    <div class="col-sm"><img src={CS} style={imageedit} ></img></div>
                    <div class="col-sm"><img src={Python} style={imageedit}></img></div>
                    <div class="col-sm"><img src={ReactJS} style={imageedit}></img></div>
                </div>
            </div>
        </React.Fragment> 
    )
}
