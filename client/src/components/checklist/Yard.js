import React, { useContext } from 'react';
import { ContextContainer } from './Checklist';

import Radio from './Radio';

const Yard = () => {
  const { formData, setFormData } = useContext(ContextContainer);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='yard'>
      <table className='table table-bordered table-hover'>
        <caption>Trees, shrubs and lawn dead, dying or bug infested?</caption>
        <thead className='table-primary'>
          <tr>
            <th scope='col' className='col-sm'>
              Yard
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
          <Radio fullName='Drainage' itemName='drainage' />
          <Radio fullName='Fences and Gates' itemName='fences' />
          <Radio fullName='Retaining Wall' itemName='retaining_wall' />
          <Radio fullName='Shed' itemName='shed' />
          <Radio fullName='Sprinklers' itemName='sprinklers' />
          <Radio fullName='Swimming Pool' itemName='swimming_pool' />
        </tbody>
      </table>

      <div className='form-group'>
        Notes:
        <textarea
          name='yard_notes'
          value={formData.yard_notes}
          onChange={e => onChange(e)}
          rows='3'
          className='w-100'
        />
      </div>
    </div>
  );
};

export default Yard;
