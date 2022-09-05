import React, { Component } from 'react';
import './style.css';
// import logo from ''
import Counter from './Counter'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  
  componentDidUpdate() {
    console.log('updated');
  }
  componentDidMount() {
    console.log('mounted');
  }
  do(){
    this.setState({count:this.state.count+1})
  }
  render() {
    return (
      <>
        <h1>Hello + ${this.state.count}!</h1>
        <p>Start editing to see some magic happen :)</p>
        <img
          style={{ height: 100, width: 150 }}
          src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697"
        />
        <button onClick={()=>{this.do()}}> Click Me </button>
        <Counter/>
      </>
    );
  }
}