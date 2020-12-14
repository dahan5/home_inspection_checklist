import React from 'react';
const Roof = () => {
  return (
    <div className='roof'>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Roof</th>
            <th scope='col'>Good</th>
            <th scope='col'>OK</th>
            <th scope='col'>Bad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='col'>Chimney</th>
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
            <th scope='col'>Gutters and Downspouts</th>
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
            <th scope='col'>Soffits and fascia</th>
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
          <p>When was it last replaced? Are there encroaching trees?</p>
        </tbody>
      </table>

      <label>
        Notes:
        <input type='text' />
      </label>
    </div>
  );
};

export default Roof;
