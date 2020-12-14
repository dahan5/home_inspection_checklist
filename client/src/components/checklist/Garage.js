import React, { useContext } from 'react';
import { ContextContainer } from './Checklist';

import Radio from './Radio';

const Garage = () => {
  const { formData, setFormData } = useContext(ContextContainer);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='garage'>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Garage</th>
            <th scope='col'>Good</th>
            <th scope='col'>OK</th>
            <th scope='col'>Bad</th>
          </tr>
        </thead>
        <tbody>
          <Radio fullName='Ceiling' itemName='ceiling' />
          <Radio fullName='Doors' itemName='doors' />
          <Radio fullName='Floors' itemName='floors' />
          <Radio fullName='Lights' itemName='lights' />
          <Radio fullName='Storage' itemName='storage' />
          <Radio fullName='Walls' itemName='walls' />
          <Radio fullName='Windows' itemName='garage_windows' />
        </tbody>
      </table>

      <p>Is the garage door opener operating properly?</p>

      <label>
        Notes:
        <input
          type='text'
          name='garage_notes'
          value={formData.garage_notes}
          onChange={e => onChange(e)}
        />
      </label>
    </div>
  );
};

export default Garage;
