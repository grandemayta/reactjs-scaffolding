import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = props => (
  <header>
    {props.title}
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
