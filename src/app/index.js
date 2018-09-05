import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './core/routes';
import Features from './features';
import '../styles/common.scss';

ReactDOM.render(<Routes routes={Features} />, document.getElementById('root'));
