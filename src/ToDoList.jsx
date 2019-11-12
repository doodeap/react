import React, { Component } from 'react';

class ToDoItem extends React.Component {
	constructor(props) {
        super(props)
	  this.state = {
          items:[],
	    vaule:""
	  };
	}
  handlesujung = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDelete = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        {/* <Value isOver={this.state.number>5}>값: {this.state.number}</Value> */}
        <input type="text"/>
        <button onClick={this.handlesujung}>수정</button>
        <button onClick={this.handleDelete}>삭제</button>
      </div>
    );
  }
}

export default ToDoItem;