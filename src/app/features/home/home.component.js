import React, {  Component } from 'react';
import Link from 'react-router-dom/Link';


class Home extends Component {
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

export default Home;
