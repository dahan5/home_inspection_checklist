import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import Exterior from './Exterior';
import Yard from './Yard';
import Roof from './Roof';
import Garage from './Garage';
import Fireplace from './Fireplace';

// Create context container in a global scope so it can be visible by every component
export const ContextContainer = React.createContext(null);

const Checklist = props => {
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

      await axios.post('/api/checklist', formData, config);

      alert('Checklist successfully sent');
      props.history.push('/');
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        for (const error of errors) {
          alert(error.msg);
        }
      }
    }
  };

  return (
    <Fragment>
      <div className='container mt-3 mb-5'>
        <h1>Home Inspection Checklist</h1>

        <form onSubmit={e => onSubmit(e)}>
          <div className='input-group-prepend'>
            <span className='input-group-text font-weight-bold'>Address</span>
            <input
              type='text'
              placeholder='Enter address'
              name='address'
              value={formData.address}
              onChange={e => onChange(e)}
              className='form-control'
            />
          </div>

          <div className='font-group p-2'>
            <p className='font-italic font-weight-light'>
              Note: This checklist is for personal use only. It should not be
              used in place of an official house inspection. This list may not
              be comprehensive. Contact a qualified ASHI certified home
              inspector for an official inspection.
            </p>

            <p className='font-weight-bold text-secondary'>
              M - missing, S - scratched, D - damaged, B - broken, R -
              repair/replace, W - Water Damage, L - Leaking
            </p>
          </div>

          <div className='row'>
            <ContextContainer.Provider value={{ formData, setFormData }}>
              <div className='col-sm'>
                <Exterior formData />
                <Yard formData />
              </div>

              <div className='col-sm'>
                <Roof formData />
                <Garage formData />
                <Fireplace formData />
              </div>
            </ContextContainer.Provider>
          </div>

          <input type='submit' className='btn btn-outline-primary' />

          <Link to='/' className='btn btn-outline-secondary ml-2'>
            Go Back
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

export default withRouter(Checklist);
