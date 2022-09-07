import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialMedia = () => (
  <div className='app__social'>
    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.1 }}>
      <a href='https://github.com/Nassim-sadi' target='_blank' rel='noreferrer'>
        <div>
          <FaGithub />
        </div>
      </a>
    </motion.div>
    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.1 }}>
      <a href='https://twitter.com/Nassimsadi4' target='_blank' rel='noreferrer'>
        <div>
          <FaTwitter />
        </div>
      </a>
    </motion.div>
    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.1 }}>
      <a href='https://www.linkedin.com/in/nassim-sadi-22587b156/' target='_blank' rel='noreferrer'>
        <div>
          <FaLinkedin />
        </div>
      </a>
    </motion.div>
  </div>
);

export default SocialMedia;
