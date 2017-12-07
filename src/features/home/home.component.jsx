import React from 'react';
import Link from 'react-router-dom/Link';


export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Home',
      link: '/contacts'
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Link to={this.state.link}>Contacts</Link>
      </div>
    );
  }
}
