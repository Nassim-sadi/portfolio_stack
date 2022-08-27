import React from 'react';
import { About, Footer, Header, Skills, Testimonials, Work } from './Containers';
import { Navbar } from './Components';
import './App.scss';
import './index.css';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
