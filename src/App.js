import React, { Component } from 'react';
import './style.css';
// import logo from ''

export default class App extends Component {
  componentDidMount() {
    console.log('first');
  }
  render() {
    return (
      <>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <img
          style={{ height: 100, width: 150 }}
          src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697"
        />
      </>
    );
  }
}