import React, { Component } from "react";
import "./AboutMe.css";
//test
class AboutMe extends Component{
    render(){
        return(
            <div className="AboutMe-conatiner content animate__animated animate__fadeInUp" id="AboutMe">
                <div className="AboutMe-box">
                    <div className="AboutMe-title">
                        About me
                    </div>
                    <div className="AboutMe-intro">
                    Hello and welcome to my portfolio! My name is Jessica Waltz and I am a full stack developer 
                    from Washington State University. I enjoy front end work the most. I use React in my projects 
                    with Spring boot for backend. Check out my github for my project progress, I will be posting 
                    some of them on here in the near future. 
                    </div>
                    <div className="AboutMe-info">
                        re-word later: intrest in computers at young age, started making flash games in as3, started
                         intrests in making websites because of neopets. Love dogs 
                    </div>
                </div>
                <div className="AboutMe-deg">
                    <div>
                        <h2>Washington State University - Computer Science</h2>
                        April 2019 Bachelor's Degree
                    </div>
                    <div>
                        <h2>Washington State University - Computer Engineering</h2>
                        April 2016 Bachelor's Degree
                    </div>
                    <div>
                        <h2>Washington State University - Electrical Engineering</h2>
                        April 2016 Bachelor's Degree
                    </div>
                </div>
                <div className="AboutMe-work">
                    <div>
                        <h2>Anthem, Wallingford CT - Developer</h2>
                        November 2019 - September 2020
                        <ul>
                            <li> Experience in adding new features to the acmp UI as well as adding and 
                            editing requirements for said UI through the use of jsp, java, and javascript.</li> 
                            <li>Knowledge of database manipulation and testing with the use of DataStudio, MongoDB, and SoapUI</li> 
                            <li>Adding Queues and their requirements for queueing and routing</li>
                            <li>Worked for this company through Revature</li>
                        </ul> 
                    </div>
                    <div>
                        <h2>Revature, Tampa FL - Full Stack Developer</h2>
                        July 2019 - Current
                        <ul>
                            <li>Experience in making Single Page Applications using tools like React and Bootstrap</li>
                            <li>Created back-ends for said Single Page Applications in both Typescript/JavaScript, 
                            and Java using Spring Applications like Spring Boot, Data, and MVC as well as NodeJS and Express. </li>
                        </ul>
                        
                    </div>
                    <div>
                        <h2>Western Tool and Supply, Portland OR - CS/CE Internship</h2>
                        May 2018 - August 2018
                        <ul>
                            <li>Experience setting up the Raspberry Pis and programing them with Western 
                            Tool and Supply's user interface. </li>
                            <li>Tested and assembled locking mechanisms, made sure they 
                            respond(lock/unlock) to a request sent from a Particle Photon.</li>
                            <li>Experience setting up a tutorial for new users to follow so they are familiar 
                            with the interface using Hopscotch framework</li>
                        </ul>
                    </div>
                </div>
                <div className="AboutMe-exp"> 
                    <ul className="AboutMe-list">
                        <li>JavaScript - 5 years</li>
                        <li>Typescript - 2 years</li>
                        <li>Java - 4 years</li>
                        <li>C - 3 years</li>
                        <li>C++ - 2 years</li>
                        <li>CSS - 5 years</li>
                        <li>HTML - 5 years</li>
                        <li>JSP - 1 year</li>
                        <li>React - 2 years</li>
                        <li>Python - 5 years</li>
                        <li>SQL - 4 years</li>
                        <li>Mongo DB - 1 year</li>
                        <li>DBeaver - 1 year</li>
                        <li>PostgreSQL - 1 year</li>
                        <li>MySQL - 1 year</li>
                        <li>Git - 6 years</li>
                        <li>Jira - 1 year</li>
                    </ul>
                </div>
                <div className="AboutMe-download">
                    
                    <a className="download-btn" href={require("../../doc/resume.pdf")} download="resume.pdf">Download Resume</a>  
                </div>
            </div>
        )
    }
}
export default AboutMe;

/** 
@keyframes animatebottom {
	from {
		bottom: -300px;
		opacity: 0
	}
	to {
		bottom: 0;
		opacity: 1
	}
}
 */