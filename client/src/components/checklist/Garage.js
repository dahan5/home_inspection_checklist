import React from 'react';
const Garage = () => {
  return (
    <div className='garage'>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Garage</th>
            <th scope='col'>Good</th>
            <th scope='col'>OK</th>
            <th scope='col'>Bad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='col'>Ceiling</th>
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
            <th scope='col'>Doors</th>
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
            <th scope='col'>Floors</th>
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
            <th scope='col'>Lights</th>
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
            <th scope='col'>Storage</th>
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
            <th scope='col'>Walls</th>
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
            <th scope='col'>Windows</th>
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
        </tbody>
      </table>

      <label>
        Notes:
        <input type='text' />
      </label>
    </div>
  );
};

export default Garage;
