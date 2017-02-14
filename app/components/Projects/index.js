import React from 'react';
import bluecarlouisville from '../../assets/images/bluecarlouisville.jpg';

const Projects = () => {
  return (
    <div className='projects-section'>
      <h2>projects</h2>
      <div className='project-info-wrapper'>

        <div className='project'>
          <h3 className='project-name'>Frogger</h3>
          <a
            className='project-link'
            target='_blank'
            href='https://github.com/ejwill04/frogger'
            >github repo
          </a>
          <img
            className='project-snapshot'
            src={bluecarlouisville} />
        </div>

        <div className='project'>
          <h3 className='project-name'>filmFavs</h3>
          <a
            className='project-link'
            target='_blank'
            href='https://github.com/ejwill04/movie-tracker'
            >github repo
          </a>
          <img
            className='project-snapshot'
            src={bluecarlouisville} />
        </div>

        <div className='project'>
          <h3 className='project-name'>Shoot Thou Breeze</h3>
          <a
            className='project-link'
            target='_blank'
            href='https://github.com/ejwill04/shoot-the-breeze'
            >github repo
          </a>
          <img
            className='project-snapshot'
            src={bluecarlouisville} />
        </div>

        <div className='project'>
          <h3 className='project-name'>Smart Budget</h3>
          <a
            className='project-link'
            target='_blank'
            href='https://github.com/JeffBuss/smart-budget'
            >github repo
          </a>
          <img
            className='project-snapshot'
            src={bluecarlouisville} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
