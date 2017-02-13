import React from 'react';

import Button from '../Button';

const Header = (props) => {
  return (
    <div className="Header">
      <h1>Elijah J. Williams</h1>
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
  );
}

export default Header;
