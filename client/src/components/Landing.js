import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Fragment>
      <h1>Home Inspection Checklist</h1>

      <Link to='/checklist'>Submit Checklist</Link>
    </Fragment>
  );
};

export default Landing;
