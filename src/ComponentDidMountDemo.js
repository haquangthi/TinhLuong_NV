import React from 'react';

class ComponentDidMountDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => this.setState(json));
  }

  render() {
    return (
      <div>
        <h2> ComponentDidMount {this.state.title} </h2>
      </div>
    );
  }
}
export default ComponentDidMountDemo;
