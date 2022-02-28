
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
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   ;
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  const [feauture,setFeature] =useState()
  const data={ offset: 0, align: 'middle', duration: 500, ease:'inCirc'}
  return (
    <div>
      <div className="headContainer">
        <Navbar   executeScroll={()=>scrollToComponent(feauture,data)} />
        <Header />
        <ImageSlider />
      </div>
       <div className="downContainer">
        <Feature ref={myRef} className='violet' ref={(section) => { setFeature(section); }} />
        <Work />
        <Benefit />
        <Contact />
       </div>
    </div>
  );
}

export default App;
