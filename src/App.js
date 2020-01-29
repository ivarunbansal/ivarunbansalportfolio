import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from  './components/home';
import About from  './components/about';
import Contact from  './components/contact';
import Education from  './components/education';
import Skills from  './components/skills';
import Sidebar from  './components/sidebar';
import Timeline from './components/timeline'
import { Experience } from './components/experience';
import Work from './components/work'

function App() {
 
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Home></Home>
      	<About></About>
         <Skills></Skills>
					<Experience></Experience>
          <Contact></Contact>
          	</div>
      	</div>
      </div>
    );
}

export default App;
