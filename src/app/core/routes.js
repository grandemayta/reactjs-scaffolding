import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const Routes = props => (
  <Router>
    <div>
      {props.routes.map(route => {
        if (route.exact) return <Route exact key={route.name} path={route.path} component={route.component} />;
        return <Route key={route.name} path={route.path} component={route.component} />;
      })}
    </div>
  </Router>
);

Routes.propTypes = {
  routes: PropTypes.array.isRequired
};

export default Routes;
