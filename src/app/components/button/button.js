import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import './button.scss';

const Button = props => (
  <Link to={props.to} className="button">
    {props.children}
  </Link>
);

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default Button;
