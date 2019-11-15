import React, { Component } from 'react';
import styled from 'styled-components';

const Value = styled.div`
 color:${props=>props.isOver?"red":"black"};
`;

class Counter extends Component {
	constructor(props) {
		super(props);
	
	  this.state = {
	    number: 0
	  }
	}
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <Value isOver={this.state.number>5}>값: {this.state.number}</Value>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;