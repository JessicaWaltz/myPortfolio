import React, { Component } from "react";
import "./Proj1.css";
//test
class Proj1 extends Component{
    render(){
        return(
            <div className="Proj1-conatiner Proj1" id="Proj1">
                <div className="proj1-name-container project-name">
                    Pokemon Battle Strategy
                </div>
                <div className="proj1-desc-container project-description">
                    The Pokemon Battle Strategy Project uses the (link)pokeApi(link). 
                    With this data the code will calculate the best type advantage to take in order to combat 
                    the selected Pokemon. It also calculates the types the user should avoid.
                </div>
                <div className="proj1-visual-conatainer">Add visual and have link to page it is on</div>
                <div className="proj1-link-container">visit</div>
            </div>
        )
    }
}
export default Proj1;
