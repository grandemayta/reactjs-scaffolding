import React, { Component } from 'react';
import { Button, Header } from '../../components';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      link: '/'
    };
  }

  render() {
    return (
      <div>
        <Header title="Contacts" />
        <div style={{ textAlign: 'center' }}>
          <div className="divisor" />
          <h2>Gabriel Mayta</h2>
          <div className="divisor" />
          <Button to={this.state.link}>
            Contacts
          </Button>
        </div>
      </div>
    );
  }
}

export default Contacts;
