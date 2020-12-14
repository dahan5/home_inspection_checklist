import React from 'react';
const Fireplace = () => {
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
          <tr>
            <th scope='col'>Blockages</th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
          </tr>
          <tr>
            <th scope='col'>Carbon Monoxide Detector</th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
          </tr>
          <tr>
            <th scope='col'>Mantle</th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
          </tr>
          <tr>
            <th scope='col'>Soot</th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
          </tr>
          <tr>
            <th scope='col'>Tiles</th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
            <th>
              <label class='checkbox-inline'>
                <input type='checkbox' value=''></input>
              </label>
            </th>
          </tr>
          <p>Any buildup inside? Damage where connected to roof?</p>
        </tbody>
      </table>

      <label>
        Notes:
        <input type='text' />
      </label>
    </div>
  );
};

export default Fireplace;
