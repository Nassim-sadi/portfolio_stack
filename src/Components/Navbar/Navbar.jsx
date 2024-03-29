import React, { useState } from 'react';
import './Navbar.scss';
import images from '../../Constants/images';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';
const Navbar = () => {
  const [Toggle, setToggle] = useState();
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href='/'>
          <img src={images.logo} alt='logo' className='logo' />
        </a>
      </div>
      <ul className='app__navbar-links'>
        {['Home', 'About', 'Work', 'Skills', 'Contact'].map((elem) => {
          return (
            <li key={`key-${elem}`} className='app__flex'>
              <div />
              <a href={`#${elem}`}>{elem}</a>
            </li>
          );
        })}
        <li className='app__flex download_cv'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://drive.google.com/file/d/1MynlRjD8BuiI6Q90oj-_TWZOWj5L0VfW/view?usp=drive_link'
          >
            download CV
          </a>
        </li>
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt3 onClick={() => setToggle(true)} />
        <AnimatePresence>
          {Toggle && (
            <motion.div
              initial={{ width: '0', padding: 16, visibility: 'hidden' }}
              animate={
                Toggle
                  ? { width: '60%', visibility: 'visible' }
                  : { width: '0', visibility: 'hidden' }
              }
              transition={{ duration: 0.3 }}
              exit={{ width: '0', padding: 16 }}
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
                <li className='app__flex p-text'>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://drive.google.com/file/d/1MynlRjD8BuiI6Q90oj-_TWZOWj5L0VfW/view?usp=drive_link'
                  >
                    <div />
                    download CV
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
