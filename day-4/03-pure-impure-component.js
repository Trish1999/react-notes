//pure component
//Implements shouldComponentUpdate or React's built-in optimization to avoid unnecessary re-renders.
// PureComponent automatically performs a shallow comparison of props and state to determine if the component should re-render.

import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
  render() {
    console.log('Rendered: MyPureComponent');
    return <div>{this.props.value}</div>;
  }
}

export default MyPureComponent;


//impure component
// re-renders on every update, regardless of whether the props or state have changed.
//By default, Component does not optimize rendering.

import React, { Component } from 'react';

class MyImpureComponent extends Component {
  render() {
    console.log('Rendered: MyImpureComponent');
    return <div>{this.props.value}</div>;
  }
}

export default MyImpureComponent;
