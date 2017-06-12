import React                        from 'react';
import ReactDOM                     from 'react-dom';


const Content = React.createClass({
  render: function() {
    return (
      <div>
        <b>Congratulations</b>, you are now ready to implement your client side application! Enjoy :-)
      </div>
    );
  }
});

ReactDOM.render(<Content />, document.getElementById('content'));