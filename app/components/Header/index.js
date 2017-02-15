import React from 'react';
// import headshot from '../../assets/images/headshot.jpg';

import Button from '../Button';

const Header = (props) => {
  return (
    <div className='header'>
      <h1 className='header-title'>Elijah J. Williams</h1>
      <div className='nav-btn-wrapper'>
        <button
          className='about-btn nav-btn'
          onClick={ () => {props.displayBody('About')}}
          >about
        </button>
        <button
          className='projects-btn nav-btn'
          onClick={ () => {props.displayBody('Projects')}}
          >projects
        </button>
      </div>
    </div>
  );
}
{/* <section className='hero-image-placeholder'></section> */}

export default Header;
