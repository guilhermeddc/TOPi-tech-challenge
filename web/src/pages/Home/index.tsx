import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/images/github.svg';

import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <header className="Home-header container">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>The repositories with the most stars of your favorite language.</p>
        <Link className="Home-link" to="/repository">
          Getting Started
        </Link>
      </header>
    </div>
  );
};

export default Home;
