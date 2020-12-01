import React, { Component } from "react";
import "./Nav.css";

class ProjNav extends Component{
    componentDidMount(){
        window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("projects");
        var onRight = document.getElementById("span-right");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
                onRight.classList.remove("invisible");
                onRight.classList.add("animate");
            } else {
                navbar.classList.remove("sticky");
                onRight.classList.add("invisible");
                onRight.classList.remove("animate");
            }
        }
    }
    render(){
        return(
            <div className="projects" id="projects">
                <span className="font-bold text-sm">Projects</span>
                <span className="px-2">•</span>
                <span><a className="dont-link" href="/#Proj1">World of Dogs</a>, </span>
                <span><a className="dont-link" href="/#Proj2">PKMN Battle Strategy</a>, </span>
                <span><a className="dont-link" href="/#">Project 3</a>, </span>
                <span><a className="dont-link" href="/#">Project 4</a>, </span>
                <span><a className="dont-link" href="/#">Project 5</a></span>
                <span className="span-right invisible" id="span-right"><a className="dont-link" href="/#">Back to top</a></span>
            </div>
           
        )
    }
}
export default ProjNav;