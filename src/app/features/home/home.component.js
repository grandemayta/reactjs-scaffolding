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
        <p>Start to code!</p>
        <Button to={this.state.url}>
          Contacts
        </Button>
      </div>
    );
  }
}

export default Home;
