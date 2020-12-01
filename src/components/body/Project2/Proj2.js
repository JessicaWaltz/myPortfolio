import React, { Component } from "react";
import "./Proj1.css";
import img01 from "../../../img/Proj1-img01.png";
import img02 from "../../../img/Proj1-img02.png";
import img03 from "../../../img/Proj1-img03.png";
//test
class Proj2 extends Component{
    render(){
        //Add background from proj1 and a link to the project 
        return(
            <div className="Proj1-conatiner Proj1" id="Proj1">
                <div className="proj1-name-container project-name">
                    Pokemon Battle Strategy
                </div>
                <div className="proj1-desc-container project-description">
                    <div className="proj1-desc-title" id="about"> About:</div>
                    <div>World of dogs is an application that holds information about many dogs such as 
                    their name, breed, size, owner, and a description.This application has multiple 
                    routes with the ability to display all the dogs, sort the dogs by their information,
                    add new dogs, edit/delete old dogs, and return a random dog from the list. 
                    </div>
                    <div className="proj1-desc-title" id="what-is-used">What is used:</div>
                    <div>This application uses Redux to store the state of all the dogs in the list, in the future 
                    the dogs will be added to a database so the dog list can be permanently updated and doesnt revert
                    back to its initial state.</div>
                    <div className="proj1-desc-title" id="what-is-planned">What is Planned:</div>
                    <ul>
                    <li>In the future the dogs will be added to a database so the dog list can be permanently updated 
                    and doesnt revert back to its initial state when the apllication is refreshed.</li>
                    <li></li>
                    </ul>
                </div>
                <div className="proj1-visual-conatainer animate__animated animate__fadeInUp">
                    <div className="proj1-visual-pics">
                    </div>
                </div>
                <div className="proj1-link-container"><a className="dont-link" href="http://world--of--dogs.herokuapp.com/">Visit Site</a></div>
            </div>
        )
    }
}
export default Proj2;
