import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import "./SquiNav.css";
/*
 * 
 */
class SquiNav extends Component{
    render(){
        return(
            <div className="navbar-main">
                <ul>
                        <li className="nav-title">
                            Jessica's Portfolio 
                        </li>
                        <li className="nav-item">
                            Resume
                        </li>
                        <li className="nav-item">
                            projects
                        </li>
                        <li className="nav-item">
                            info
                        </li>
                </ul>
            </div>
        )
    }
}
export default SquiNav