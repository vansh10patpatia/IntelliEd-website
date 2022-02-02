import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import Feature from './components/Feature';
import Work from './components/Work';
import Benefit from './components/Benefit';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <div className="headContainer">
        <Navbar />
        <Header />
        <ImageSlider />
      </div>
       <div className="downContainer">
        <Feature />
        <Work />
        <Benefit />
        <Contact />
       </div>
    </div>
  );
}

export default App;
