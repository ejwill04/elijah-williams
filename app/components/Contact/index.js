import React from 'react';
// const email = require('../../assets/images/email.svg')

const Contact = () => {
  return (
    <section id="contact">
      <h2>contact</h2>
      <ul>
        <li>
          <a href="mailto:ejwill04@gmail.com">
            {/* <img src="../../assets/images/email.svg" alt="Email link"/> */}
          </a>
        </li>
        <li>
          <a href="https://github.com/ejwill04" target="_blank">
            {/* <img src="../../assets/images/github.svg" alt="GitHub link"/> */}
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ejwill04" target="_blank">
            {/* <img src="../../assets/images/t.svg" alt="Twitter link"/> */}
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/elijahwilliams" target="_blank">
            {/* <img src="../../assets/images/linkedin.svg" alt="LinkedIn link"/> */}
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
