import React, { useState } from 'react';
import './Navbar.scss';
import images from '../../Constants/images';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' className='logo' />
      </div>
      <ul className='app__navbar-links'>
        {['Home', 'About', 'Work', 'Skills', 'Contact'].map((elem) => {
          return (
            <li key={`key-${elem}`} className='app__flex p-text'>
              <div />
              <a href={`#${elem}`}>{elem}</a>
            </li>
          );
        })}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt3 onClick={() => setToggle(true)} />
        {Toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ ease: 'easeOut', duration: 0.85 }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['Home', 'About', 'Work', 'Skills', 'Contact'].map((elem) => {
                return (
                  <li key={elem} className='app__flex p-text'>
                    <a href={`#${elem}`} onClick={() => setToggle(false)}>
                      <div />
                      {elem}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
