import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import "./Nav.css";
/*
 * 
 */
class Nav extends Component{
    render(){
        return(
            <div className="grid-container">
                <div className="name">
                    Welcome
                </div>
                <div className="info">
                    <h2>Jessica Waltz</h2>
                    <div className="job">Full stack developer</div>
                    <div className="phone">
                        (360)567-5682
                    </div>
                    <div>
                        <span>
                            <span>
                                <a className="github dont-link" 
                                href="/#AboutMe" >About me</a>
                            </span>
                        </span>
                        <span>
                            <span className="px-2">•</span>
                            <span>
                                <a className="github dont-link" 
                                href="https://github.com/JessicaWaltz">Github</a>
                            </span>
                        </span>
                        <span>
                            <span className="px-2">•</span>
                            <span>
                                <a className="email dont-link" href="mailto:jessicawaltz93@gmail">Email</a>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="projects">
                <span className="font-bold text-sm">Projects</span>
                    <span className="px-2">•</span>
                    <span><a className="dont-link" href="/#" target="_blank">Project 1</a>, </span>
                    <span><a className="dont-link" href="/#" target="_blank">Project 2</a>, </span>
                    <span><a className="dont-link" href="/#" target="_blank">Project 3</a>, </span>
                    <span><a className="dont-link" href="/#" target="_blank">Project 4</a>, </span>
                    <span><a className="dont-link" href="/#" target="_blank">Project 5</a></span>
                </div>
            </div>
        )
    }
}
export default Nav