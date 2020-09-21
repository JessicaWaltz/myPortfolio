import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import "./AboutMe.css";
class AboutMe extends Component{
    render(){
        return(
            <div className="AboutMe">
                <div className="AboutMe-title">
                    About me
                </div>
                <div>Style like resume with description above</div>
            </div>
        )
    }
}
export default AboutMe;