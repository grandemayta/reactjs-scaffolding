import React, { Component } from 'react';
import { Button, Header } from '../../components';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      url: '/contacts'
    };
  }

  render() {
    return (
      <div>
        <Header title="ReactJs Scaffolding" />
        <div style={{ textAlign: 'center' }}>
          <div className="divisor" />
          <p>Start to code!</p>
          <div className="divisor" />
          <Button to={this.state.url}>
            Contacts
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
