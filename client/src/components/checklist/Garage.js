import React, { useContext } from 'react';
import { ContextContainer } from './Checklist';

import Radio from './Radio';

const Garage = () => {
  const { formData, setFormData } = useContext(ContextContainer);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='garage'>
      <table className='table table-bordered table-hover'>
        <caption>Is the garage door opener operating properly?</caption>
        <thead className='table-primary'>
          <tr>
            <th scope='col' className='col-sm'>
              Garage
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
          <Radio fullName='Ceiling' itemName='ceiling' />
          <Radio fullName='Doors' itemName='doors' />
          <Radio fullName='Floors' itemName='floors' />
          <Radio fullName='Lights' itemName='lights' />
          <Radio fullName='Storage' itemName='storage' />
          <Radio fullName='Walls' itemName='walls' />
          <Radio fullName='Windows' itemName='garage_windows' />
        </tbody>
      </table>

      <div className='form-group'>
        Notes:
        <textarea
          name='garage_notes'
          value={formData.garage_notes}
          onChange={e => onChange(e)}
          rows='3'
          className='w-100'
        />
      </div>
    </div>
  );
};

export default Garage;
