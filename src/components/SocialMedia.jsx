import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href='https://github.com/mkchahal' target='_blank' rel='noreferrer'>
      <FaGithub />
    </a>
    <a href='mailto:chahal.mandeep@outlook.com?subject=Connecting from Awesome Portfolio 💜' target='_blank' rel='noreferrer'>
      <FaEnvelope />
    </a>
    <a href='https://www.linkedin.com/in/mkchahal' target='_blank' rel='noreferrer'>
      <FaLinkedinIn />
    </a>
  </div>
);

export default SocialMedia;