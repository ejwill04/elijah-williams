import React from 'react';

const logStuff = (btn) => {
  console.log(btn);
}

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick() }>Click Me</button>
  );
}

export default Button;
