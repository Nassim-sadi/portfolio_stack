import React from 'react';
import { SocialMedia } from '../Components';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container`}>
        <div className='app__wrapper app__flex'>
          <Component />
        </div>
        {/* <NavigationDots active={idName} /> */}
      </div>
    );
  };
export default AppWrap;
