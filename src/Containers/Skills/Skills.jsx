import React from 'react';
import { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { client, urlFor } from '../../client';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
  const [Experiences, setExperiences] = useState([]);
  const [skills, setskills] = useState([]);
  //Get Skills from Backend
  useEffect(() => {
    const ExpQuery = '*[_type == "experiences"]';
    const SkillQuery = '*[_type == "skills"]';
    client.fetch(ExpQuery).then((data) => {
      setExperiences(data);
    });
    client.fetch(SkillQuery).then((data) => {
      setskills(data);
    });
  }, []);
  return (
    <>
      {console.log()}
      <h2 className='head-text'>Skills {Experiences.length !== 0 && <span>and Experiences</span>}</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text bold-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {Experiences.length !== 0 && (
          <div className='app__skills-exp'>
            {Experiences.map((experience) => (
              <motion.div className='app__skills-exp-item' key={experience.year}>
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experience.year}</p>
                </div>
                <motion.div className='app__skills-exp-works'>
                  {experience.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='app__skills-exp-work'
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className='bold-text'>{work.name}</h4>
                        <p className='p-text'>{work.company}</p>
                      </motion.div>
                      <ReactTooltip id={work.name} effect='solid' arrowColor='#fff' className='skills-tooltip'>
                        {work.desc}
                      </ReactTooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'Skills', 'app__bg2');
