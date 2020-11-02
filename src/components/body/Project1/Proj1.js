import React, { Component } from "react";
import "./Proj1.css";
import img01 from "../../../img/Proj1-img01.png";
import img02 from "../../../img/Proj1-img02.png";
import img03 from "../../../img/Proj1-img03.png";
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
                <div className="proj1-visual-conatainer animate__animated animate__fadeInUp">
                    <div className="proj1-visual-pics">
                        <img className="proj1-img" src={img01} alt="pic 1"/>
                        <img className="proj1-img" src={img02} alt="pic 2"/>
                        <img className="proj1-img" src={img03} alt="pic 3"/>
                    </div>
                </div>
                <div className="proj1-link-container">visit</div>
            </div>
        )
    }
}
export default Proj1;
