import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import "./Navbar.css";
/*
 * 
 */
class Navbar extends Component{
    render(){
        return(
            <div className="navbar-main">
                <ul>
                        <li className="nav-title nav-item">
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
export default Navbar
/**
 *  <li className="nav-item active">
                            <Link to="/red"
                                className="unset-anchor nav-link">Red</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/blue"
                                className="unset-anchor nav-link">Blue</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/purple"
                                className="unset-anchor nav-link">Purple</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/yellow"
                                className="unset-anchor nav-link">Yellow</Link>
                        </li>
 */