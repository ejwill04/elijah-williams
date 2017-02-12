import React from 'react';
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default class Application extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}
