import React, { useContext } from 'react';
import { ContextContainer } from './Checklist';

import Radio from './Radio';

const Exterior = () => {
  const { formData, setFormData } = useContext(ContextContainer);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='exterior'>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Exterior</th>
            <th scope='col'>Good</th>
            <th scope='col'>OK</th>
            <th scope='col'>Bad</th>
          </tr>
        </thead>
        <tbody>
          <Radio fullName='Back Doors' itemName='back_doors' />
          <Radio fullName='Deck, Porch, Patio' itemName='deck' />
          <Radio fullName='Doorbell' itemName='doorbell' />
          <Radio fullName='Driveway' itemName='driveway' />
          <Radio fullName='Front Doors' itemName='front_doors' />
          <Radio fullName='Garage Doors' itemName='garage_doors' />
          <Radio fullName='Garbage Receptacle' itemName='garbage_receptacle' />
          <Radio fullName='House Number' itemName='house_number' />
          <Radio fullName='Mailbox' itemName='mailbox' />
          <Radio fullName='Outdoor Lights' itemName='outdoor_lights' />
          <Radio fullName='Paint and Trim' itemName='paint_and_trim' />
          <Radio fullName='Parking' itemName='parking' />
          <Radio
            fullName='Recycling Receptacle'
            itemName='recycling_receptacle'
          />
          <Radio fullName='Sidewalks' itemName='sidewalks' />
          <Radio fullName='Siding (brick/stone/cement)' itemName='siding' />
          <Radio fullName='Traffic Noise' itemName='traffic_noise' />
          <Radio fullName='Windows' itemName='exterior_windows' />
        </tbody>
      </table>

      <p>Are things loose, cracked, damaged, rotted, bug infested?</p>

      <label>
        Notes:
        <input type='text' />
      </label>
    </div>
  );
};

export default Exterior;
