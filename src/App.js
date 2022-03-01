
import React, { useRef,useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import Feature from './components/Feature';
import Work from './components/Work';
import Benefit from './components/Benefit';
import Contact from './components/Contact';
import scrollToComponent from 'react-scroll-to-component';

function App() {
  return (
    <div>
      <div className="headContainer">
        <Navbar   />
        <Header />
        <ImageSlider />
      </div>
       <div className="downContainer">
        <div id='feature-container'>
          <Feature  />
        </div>
        <div id='work-container'>
          <Work />
        </div>
        <Benefit />
        <div id='contact-container'>
          <Contact />
        </div>
        <a href='#feature-container' >Hello</a>
       </div>
    </div>
  );
}

export default App;
