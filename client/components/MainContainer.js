import React, {Component} from 'react';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <h1>Hello {this.props.currentUser}</h1>
    )
  }
}

export default MainContainer;