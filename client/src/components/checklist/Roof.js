import React, { useContext } from 'react';
import { ContextContainer } from './Checklist';

import Radio from './Radio';

const Roof = () => {
  const { formData, setFormData } = useContext(ContextContainer);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='roof'>
      <table className='table table-bordered table-hover'>
        <caption>
          When was it last replaced? Are there encroaching trees?
        </caption>
        <thead className='table-primary'>
          <tr>
            <th scope='col' className='col-sm'>
              Roof
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
          <Radio fullName='Chimney' itemName='chimney' />
          <Radio fullName='Gutters and Downspouts' itemName='gutters' />
          <Radio fullName='Soffits and Fascia' itemName='soffits' />
        </tbody>
      </table>

      <div className='form-group'>
        Notes:
        <textarea
          name='roof_notes'
          value={formData.roof_notes}
          onChange={e => onChange(e)}
          rows='3'
          className='w-100'
        />
      </div>
    </div>
  );
};

export default Roof;
