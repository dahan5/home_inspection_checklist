import React, { useContext } from 'react';
import { ContextContainer } from './Checklist';

import Radio from './Radio';

const Roof = () => {
  const { formData, setFormData } = useContext(ContextContainer);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='roof'>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th scope='col'>Roof</th>
            <th scope='col'>Good</th>
            <th scope='col'>OK</th>
            <th scope='col'>Bad</th>
          </tr>
        </thead>
        <tbody>
          <Radio fullName='Chimney' itemName='chimney' />
          <Radio fullName='Gutters and Downspouts' itemName='gutters' />
          <Radio fullName='Soffits and Fascia' itemName='soffits' />
        </tbody>
      </table>

      <p>When was it last replaced? Are there encroaching trees?</p>

      <label>
        Notes:
        <input
          type='text'
          name='roof_notes'
          value={formData.roof_notes}
          onChange={e => onChange(e)}
        />
      </label>
    </div>
  );
};

export default Roof;
