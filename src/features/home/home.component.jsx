import React from 'react';
import Link from 'react-router-dom/Link';


export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Home',
      url: '/contacts'
    };
  }

  render() {
    return (
      <div>
        <form>
          <h1>{this.state.title}</h1>
          <Link to={this.state.url}>Go to contacts</Link>
        </form>
      </div>
    );
  }
}
