import React from 'react';
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work,
} from './Containers';
import { Navbar, SocialMedia } from './Components';
import './App.scss';
import './index.css';
const App = () => {
  return (
    <div className='app'>
      <div id='bg-holder1'></div>
      <SocialMedia />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
