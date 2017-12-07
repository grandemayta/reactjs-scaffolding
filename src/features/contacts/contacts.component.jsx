import React from 'react';
import Link from 'react-router-dom/Link';


export default class Contacts extends React.Component {
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
        <Link to={this.state.link}>Torna alla Home</Link>
      </div>
    );
  }
}
