import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exampleAction } from '../actions/actions';

class App extends Component {
  render() {
    return (
      <div>
      <h1>{this.props.example}</h1>
      <button className="example-btn" onClick={this.props.exampleAction}> Click me to see an example action call </button>
      </div>
    );
  }
}

function mapStateToProps({ defaultReducer }) {
  return {
    example: defaultReducer.example
  };
}
export default connect(mapStateToProps, { exampleAction })(App);