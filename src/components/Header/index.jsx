import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <nav>
      <Link to="/">Y.P</Link>
      <Link to="/projects">Contact</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/aboutme">About Me</Link>
    </nav>
  </>
);

export default Header;
