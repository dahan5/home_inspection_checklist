import React, { useContext } from 'react';
import { ContextContainer } from './Checklist';

const Radio = props => {
  const { formData, setFormData } = useContext(ContextContainer);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <tr>
      <th scope='col'>{props.fullName}</th>
      <td className='text-center'>
        <div className='text-center'>
          <input
            type='radio'
            name={props.itemName}
            value='good'
            onChange={e => onChange(e)}
          ></input>
        </div>
      </td>
      <td className='text-center'>
        <div className='text-center'>
          <input
            type='radio'
            name={props.itemName}
            value='ok'
            onChange={e => onChange(e)}
          ></input>
        </div>
      </td>
      <td className='text-center'>
        <div className='text-center'>
          <input
            type='radio'
            name={props.itemName}
            value='bad'
            onChange={e => onChange(e)}
          ></input>
        </div>
      </td>
    </tr>
  );
};

export default Radio;
