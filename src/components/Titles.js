import React from 'react';

class Titles extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Titles;