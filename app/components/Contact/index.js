import React from 'react';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import email from '../../assets/images/email.png';

const Contact = () => {
  return (
    <section id="contact">
      <h2>contact</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/elijahwilliams">
            <img src={linkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/ejwill04" target="_blank">
          <img src={github} />
          </a>
        </li>
        <li>
          <a href="mailto:ejwill04@gmail.com" target="_blank">
            <img src={email} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
