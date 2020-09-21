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
                                href="/#" >About me</a>
                            </span>
                        </span>
                        <span>
                            <span className="px-2">•</span>
                            <span>
                                <a className="gitlab dont-link" 
                                href="#">Gitlab</a>
                            </span>
                        </span>
                        <span>
                            <span className="px-2">•</span>
                            <span>
                                <a className="github dont-link" 
                                href="#" >Github</a>
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
                    <span class="px-2">•</span>
                    <span><a class="dont-link" href="/#draggable" target="_blank">draggable</a>, </span>
                    <span><a class="dont-link" href="/#desktop-buddy" target="_blank">Desktop buddy</a>, </span>
                    <span><a class="dont-link" href="/#" target="_blank">POST GET</a>, </span>
                    <span><a class="dont-link" href="/#" target="_blank">Project 4</a>, </span>
                    <span><a class="dont-link" href="/#" target="_blank">Project 5</a></span>
                </div>
            </div>
        )
    }
}
export default Nav