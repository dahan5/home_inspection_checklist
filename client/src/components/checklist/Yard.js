import React from 'react';
const Yard = () => {
  return (
    <div className='yard'>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Yard</th>
            <th scope='col'>Good</th>
            <th scope='col'>OK</th>
            <th scope='col'>Bad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='col'>Drainage</th>
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
            <th scope='col'>Fences and Gates</th>
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
            <th scope='col'>Retaining Wall</th>
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
            <th scope='col'>Shed</th>
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
            <th scope='col'>Sprinklers</th>
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
            <th scope='col'>Swimming Pool</th>
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
          <p>Trees, shrubs and lawn dead, dying or bug infested?</p>
        </tbody>
      </table>

      <label>
        Notes:
        <input type='text' />
      </label>
    </div>
  );
};

export default Yard;
