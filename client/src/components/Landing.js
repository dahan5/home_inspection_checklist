import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

const Landing = () => {
  return (
    <Fragment>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p className='font-weight-light'>Home Inspection Checklist</p>
          <Link to='/checklist' className='btn btn-outline-info'>
            Submit Checklist
          </Link>
        </header>
      </div>
    </Fragment>
  );
};

export default Landing;
