import React, { Fragment } from 'react';

import Exterior from './Exterior';
import Yard from './Yard';
import Roof from './Roof';
import Garage from './Garage';
import Fireplace from './Fireplace';

const Checklist = () => {
  return (
    <Fragment>
      <h1>Home Inspection Checklist</h1>

      <form>
        <label>
          Address:
          <input type='text' name='address' />
        </label>

        <p>
          Note: This checklist is for personal use only. It should not be used
          in place of an official house inspection. This list may not be
          comprehensive. Contact a qualified ASHI certified home inspector for
          an official inspection.
        </p>

        <p>
          M - missing, S - scratched, D - damaged, B - broken, R -
          repair/replace, W - Water Damage, L - Leaking
        </p>

        <Exterior />
        <Yard />
        <Roof />
        <Garage />
        <Fireplace />
      </form>
    </Fragment>
  );
};

export default Checklist;
