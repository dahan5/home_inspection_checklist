import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Checklist from './components/checklist/Checklist';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/checklist' component={Checklist} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
