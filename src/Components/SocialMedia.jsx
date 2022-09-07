import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
    <a href='https://github.com/Nassim-sadi' target='_blank' rel='noreferrer'>
      <div>
        <FaGithub />
      </div>
    </a>
    <a href='https://twitter.com/Nassimsadi4' target='_blank' rel='noreferrer'>
      <div>
        <FaTwitter />
      </div>
    </a>
    <a href='https://www.linkedin.com/in/nassim-sadi-22587b156/' target='_blank' rel='noreferrer'>
      <div>
        <FaLinkedin />
      </div>
    </a>
  </div>
);

export default SocialMedia;
