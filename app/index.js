import React from 'react'
import { render } from 'react-dom'
import Application from './Application'
require ('./styles/main');

render(<Application />, document.querySelector('.application'));
