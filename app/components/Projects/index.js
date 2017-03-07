import React from 'react';
import bluecarlouisville from '../../assets/images/bluecarlouisville.jpg';
import twodobox from '../../assets/images/project-screenshots/twodobox.png';
import filmfavs from '../../assets/images/project-screenshots/filmfavs.png';
import frogger from '../../assets/images/project-screenshots/frogger.png';
import shootthoubreeze from '../../assets/images/project-screenshots/shootthoubreeze.png';
import weathrly from '../../assets/images/project-screenshots/weathrly.png';
import chucknorris from '../../assets/images/project-screenshots/chucknorris.png';

const Projects = () => {
  return (
    <div className='projects-section'>
      <h2 className='section-title'>projects</h2>
      <div className='project-info-wrapper'>

      <a className='project-link'
        target='_blank'
        href='https://github.com/ejwill04/frogger'>
        <div className='project'>
          <h3 className='project-name'>Frogger</h3>
          <img
            className='project-snapshot'
            src={frogger} />
          <p className='project-description'><span className='project-desc-title'>what:</span> The classic arcade game frogger</p>
          <p className='project-description'><span className='project-desc-title'>how:</span> JavaScript, Canvas</p>
        </div>
      </a>

      <a className='project-link'
        target='_blank'
        href='https://github.com/ejwill04/movie-tracker'>
        <div className='project'>
          <h3 className='project-name'>filmFavs</h3>
          <img
            className='project-snapshot'
            src={filmfavs} />
          <p className='project-description'><span className='project-desc-title'>what:</span> Favorite new and popular movies using MovieDB API</p>
          <p className='project-description'><span className='project-desc-title'>how:</span> JavaScript, React, React Router, Redux, SCSS</p>
        </div>
      </a>

      <a className='project-link'
        target='_blank'
        href='https://github.com/ejwill04/shoot-the-breeze'>
        <div className='project'>
          <h3 className='project-name'>Shoot Thou Breeze</h3>
          <img
            className='project-snapshot'
            src={shootthoubreeze} />
          <p className='project-description'><span className='project-desc-title'>what:</span> Messaging app</p>
          <p className='project-description'><span className='project-desc-title'>how:</span> JavaScript, React, OAuth</p>
        </div>
      </a>

      <a className='project-link'
        target='_blank'
        href=''>
        <div className='project'>
          <h3 className='project-name'>2DoBox</h3>
          <img
            className='project-snapshot'
            src={twodobox} />
          <p className='project-description'><span className='project-desc-title'>what:</span> A reminder app</p>
          <p className='project-description'><span className='project-desc-title'>how:</span> JavaScript</p>
        </div>
      </a>

      <a className='project-link'
        target='_blank'
        href=''>
        <div className='project'>
          <h3 className='project-name'>Weathrly</h3>
          <img
            className='project-snapshot'
            src={weathrly} />
          <p className='project-description'><span className='project-desc-title'>what:</span> Check local weather using API</p>
          <p className='project-description'><span className='project-desc-title'>how:</span> JavaScript and React</p>
        </div>
      </a>

      <a className='project-link'
        target='_blank'
        href=''>
        <div className='project'>
          <h3 className='project-name'>Chuck Norris Jokes</h3>
          <img
            className='project-snapshot'
            src={chucknorris} />
          <p className='project-description'><span className='project-desc-title'>what:</span> Get those Chuck Norris jokes</p>
          <p className='project-description'><span className='project-desc-title'>how:</span> JavaScript, React, React Router, SCSS</p>
        </div>
      </a>

      <a className='project-link'
        target='_blank'
        href='https://github.com/DanGrund/1610-remember-6'>
        <div className='project'>
          <h3 className='project-name'>Remember</h3>
          <img
            className='project-snapshot'
            src={bluecarlouisville} />
          <p className='project-description'><span className='project-desc-title'>what:</span> A reminder app</p>
          <p className='project-description'><span className='project-desc-title'>how:</span> JavaScript, Ember, and SCSS</p>
        </div>
      </a>

      <a className='project-link'
        target='_blank'
        href='https://github.com/JeffBuss/smart-budget'>
        <div className='project'>
          <h3 className='project-name'>Smart Budget</h3>
          <img
            className='project-snapshot'
            src={bluecarlouisville} />
          <p className='project-description'><span className='project-desc-title'>what:</span> Track those budgeting flows</p>
          <p className='project-description'><span className='project-desc-title'>how:</span> JavaScript, React, and SCSS</p>
        </div>
      </a>

      </div>
    </div>
  );
}

export default Projects;
