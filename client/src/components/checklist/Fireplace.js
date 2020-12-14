import React, { useContext } from 'react';
import { ContextContainer } from './Checklist';

import Radio from './Radio';

const Fireplace = () => {
  const { formData, setFormData } = useContext(ContextContainer);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='fireplace'>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Fireplace</th>
            <th scope='col'>Good</th>
            <th scope='col'>OK</th>
            <th scope='col'>Bad</th>
          </tr>
        </thead>
        <tbody>
          <Radio fullName='Blockages' itemName='blockages' />
          <Radio fullName='Carbon Monoxide Detector' itemName='carbon' />
          <Radio fullName='Mantle' itemName='mantle' />
          <Radio fullName='Soot' itemName='soot' />
          <Radio fullName='Tiles' itemName='tiles' />
        </tbody>
      </table>

      <p>Any buildup inside? Damage where connected to roof?</p>

      <label>
        Notes:
        <input
          type='text'
          name='fireplace_notes'
          value={formData.fireplace_notes}
          onChange={e => onChange(e)}
        />
      </label>
    </div>
  );
};

export default Fireplace;
