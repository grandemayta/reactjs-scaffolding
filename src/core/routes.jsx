import React from 'react';
import { Home, Contacts } from 'features/features.module';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default function Routes() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={Contacts} />
      </div>
    </Router>
  );
}
