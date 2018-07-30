import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import features from '../features';


const routes = [];

features.forEach(feature => routes.push(feature));

export default function Routes() {
  return (
    <Router>
      <div>
        {routes.map(route => <Route key={route.name} path={route.path} component={route.component} />)}
      </div>
    </Router>
  );
}
