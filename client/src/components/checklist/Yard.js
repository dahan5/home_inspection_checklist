import React, { useContext } from 'react';
import { ContextContainer } from './Checklist';

import Radio from './Radio';

const Yard = () => {
  const { formData, setFormData } = useContext(ContextContainer);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='yard'>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Yard</th>
            <th scope='col'>Good</th>
            <th scope='col'>OK</th>
            <th scope='col'>Bad</th>
          </tr>
        </thead>
        <tbody>
          <Radio fullName='Drainage' itemName='drainage' />
          <Radio fullName='Fences and Gates' itemName='fences' />
          <Radio fullName='Retaining Wall' itemName='retaining_wall' />
          <Radio fullName='Shed' itemName='shed' />
          <Radio fullName='Sprinklers' itemName='sprinklers' />
          <Radio fullName='Swimming Pool' itemName='swimming_pool' />
        </tbody>
      </table>

      <p>Trees, shrubs and lawn dead, dying or bug infested?</p>

      <label>
        Notes:
        <input
          type='text'
          name='yard_notes'
          value={formData.yard_notes}
          onChange={e => onChange(e)}
        />
      </label>
    </div>
  );
};

export default Yard;
