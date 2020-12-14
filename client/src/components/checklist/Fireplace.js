import React, { useContext } from 'react';
import { ContextContainer } from './Checklist';

import Radio from './Radio';

const Fireplace = () => {
  const { formData, setFormData } = useContext(ContextContainer);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='fireplace'>
      <table className='table table-bordered table-hover'>
        <caption>Any buildup inside? Damage where connected to roof?</caption>
        <thead className='table-primary'>
          <tr>
            <th scope='col' className='col-sm'>
              Fireplace
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
          <Radio fullName='Blockages' itemName='blockages' />
          <Radio fullName='Carbon Monoxide Detector' itemName='carbon' />
          <Radio fullName='Mantle' itemName='mantle' />
          <Radio fullName='Soot' itemName='soot' />
          <Radio fullName='Tiles' itemName='tiles' />
        </tbody>
      </table>

      <div className='form-group'>
        Notes:
        <textarea
          name='fireplace_notes'
          value={formData.fireplace_notes}
          onChange={e => onChange(e)}
          rows='3'
          className='w-100'
        />
      </div>
    </div>
  );
};

export default Fireplace;
