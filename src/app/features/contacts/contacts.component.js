import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Contacts',
      link: '/',
      mobilePhone: '+39 3349499303'
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>Tel: {this.state.mobilePhone}</p>
        <Link to={this.state.link}>Go back to home</Link>
      </div>
    );
  }
}

export default Contacts;
