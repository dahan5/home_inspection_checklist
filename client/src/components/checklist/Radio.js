import React, { useContext } from 'react';
import { ContextContainer } from './Checklist';

const Radio = props => {
  const { formData, setFormData } = useContext(ContextContainer);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <tr>
      <th scope='col'>{props.fullName}</th>
      <td>
        <label className='form-check-inline'>
          <input
            type='radio'
            name={props.itemName}
            value='good'
            onChange={e => onChange(e)}
          ></input>
        </label>
      </td>
      <td>
        <label className='form-check-inline'>
          <input
            type='radio'
            name={props.itemName}
            value='ok'
            onChange={e => onChange(e)}
          ></input>
        </label>
      </td>
      <td>
        <label className='form-check-inline'>
          <input
            type='radio'
            name={props.itemName}
            value='bad'
            onChange={e => onChange(e)}
          ></input>
        </label>
      </td>
    </tr>
  );
};

export default Radio;
