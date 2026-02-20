import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './index.css'


import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import About from './components/pages/About';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import ImageSlide from './components/ImageSliders/ImageSlide';
function App() {
  return (
    <div className="App">   
      <Navbar />
      <Routes>
         <Route path="/" element={<ImageSlide />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
