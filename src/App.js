import React from 'react';
//import logo from './logo.svg';
//import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from "react-router-dom";
import './App.css';
import AboutMe from './components/body/AboutMe.js';
import Nav from "./components/navbar/Nav.js";
import Proj1 from "./components/body/Project1/Proj1.js";
import ProjNav from "./components/navbar/ProjectNav.js";
import "animate.css";

function App() {
  return (
    <div>
      <Nav/>
      <ProjNav/>
      <AboutMe/>
      <Proj1/>
    </div>
  );
}

export default App;
