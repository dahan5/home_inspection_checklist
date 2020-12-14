import React, { useContext } from 'react';
import { ContextContainer } from './Checklist';

import Radio from './Radio';

const Exterior = () => {
  const { formData, setFormData } = useContext(ContextContainer);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='exterior'>
      <table className='table table-bordered table-hover table-condensed'>
        <caption>
          Are things loose, cracked, damaged, rotted, bug infested?
        </caption>
        <thead className='table-primary'>
          <tr>
            <th scope='col' className='col-sm'>
              Exterior
            </th>
            <th scope='col' className='text-center'>
              Good
            </th>
            <th scope='col' className='text-center'>
              OK
            </th>
            <th scope='col' className='text-center'>
              Bad
            </th>
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

      <div className='form-group'>
        Notes:
        <textarea
          name='exterior_notes'
          value={formData.exterior_notes}
          onChange={e => onChange(e)}
          rows='3'
          className='w-100'
        />
      </div>
    </div>
  );
};

export default Exterior;
