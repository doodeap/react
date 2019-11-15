import React from "react";
import "./App.module.scss";

function Input({value, onChange, onClick}) {
  return (
    <div>
    <input type="text" value={value} onChange={(e) => {
      onChange(e.target.value);
    }} />
    <button onClick={onClick}>Apply</button>
    </div>
  )
}
class TodoItem extends React.Component {
  state = {
    update: false
  }
  render() {
    return (
      <div>
        {
          this.state.update
          ? <Input value={this.props.value} onChange={this.props.onClickMo} onClick={() => {
            this.setState({update: false});
          }} />
          : <span>{this.props.value}</span>
        }
        <button onClick={() => {
          this.setState({update: true});
        }} >수정</button>
        <button onClick={this.props.onClickDel}>삭제</button>
      </div>
    );
  }
}

export default TodoItem;