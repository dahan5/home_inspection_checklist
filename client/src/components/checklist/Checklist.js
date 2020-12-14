import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Exterior from './Exterior';
import Yard from './Yard';
import Roof from './Roof';
import Garage from './Garage';
import Fireplace from './Fireplace';

// Create context container in a global scope so it can be visible by every component
export const ContextContainer = React.createContext(null);

const Checklist = () => {
  const [formData, setFormData] = useState({
    address: '',

    // Exterior
    back_doors: '',
    deck: '',
    doorbell: '',
    driveway: '',
    front_doors: '',
    garage_doors: '',
    garbage_receptacle: '',
    house_number: '',
    mailbox: '',
    outdoor_lights: '',
    paint_and_trim: '',
    parking: '',
    recycling_receptacle: '',
    sidewalks: '',
    siding: '',
    traffic_noise: '',
    exterior_windows: '',
    exterior_notes: '',

    // Yard
    drainage: '',
    fences: '',
    retaining_wall: '',
    shed: '',
    sprinklers: '',
    swimming_pool: '',
    yard_notes: '',

    // Roof
    chimney: '',
    gutters: '',
    soffits: '',
    roof_notes: '',

    // Garage
    ceiling: '',
    doors: '',
    floors: '',
    lights: '',
    storage: '',
    walls: '',
    garage_windows: '',
    garage_notes: '',

    // Fireplace
    blockages: '',
    carbon: '',
    mantle: '',
    soot: '',
    tiles: '',
    fireplace_notes: '',
  });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      alert('trying');

      // alert(formData.address);

      await axios.post('/api/checklist', formData, config);
    } catch (err) {
      // TODO: error handling
    }
  };

  return (
    <Fragment>
      <div className='container'>
        <h1>Home Inspection Checklist</h1>

        <form onSubmit={e => onSubmit(e)}>
          <label>
            Address:
            <input
              type='text'
              name='address'
              value={formData.address}
              onChange={e => onChange(e)}
            />
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

          <ContextContainer.Provider value={{ formData, setFormData }}>
            <Exterior formData />
            <Yard formData />
            <Roof formData />
            <Garage formData />
            <Fireplace formData />
          </ContextContainer.Provider>

          <input type='submit' className='btn btn-success' />
          <Link to='/' className='btn btn-secondary'>
            Go Back
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

export default Checklist;
