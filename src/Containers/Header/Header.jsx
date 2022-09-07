import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import images from '../../Constants/images.js';
import { AppWrap } from '../../wrapper';
const ScaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};
const Header = () => {
  return (
    <div className='app__flex app__header'>
      <motion.div
        whileInView={{
          x: [-100, 0],
          opacity: [0, 1],
        }}
        className='app_header-info'
        transition={{
          duration: 1.5,
          ease: 'backInOut',
        }}
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span class='wave'>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head_text'>Nassim</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'> Full Stack Developer</p>
            <p className='p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 1.5,
          ease: 'backInOut',
          delayChildren: 0.5,
        }}
        className='app__header-img'
      >
        <img src={images.cover} alt='cover_bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>
      <motion.div variants={ScaleVariants} whileInView={ScaleVariants.whileInView} className='app__header-circles'>
        {[images.flutter, images.javascript, images.react].map((circle, index) => {
          return (
            <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle} alt='circle' />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'Home');
