import React from 'react';
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      sectionDisplayed: '',
    }
  }

  displayBody(section) {
    this.setState({ sectionDisplayed: section });
  }

  render() {
    return (
      <div>
        <Header
          displayBody={this.displayBody.bind(this)}
        />
        {this.state.sectionDisplayed === 'Projects' ? <Projects /> : <About />}
        <Contact />
        <Footer />
      </div>
    );
  }
}
