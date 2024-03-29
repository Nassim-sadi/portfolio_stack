import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { urlFor, client } from '../../client';
import { AppWrap } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>
        I know That <span>Good Design</span> <br /> means{' '}
        <span>good product</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <div className='app__profile-parent' key={index}>
            <div className='app__profile-background'></div>
            <motion.div
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profile-item'
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className='p-text' style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'About', 'app__bg2');
