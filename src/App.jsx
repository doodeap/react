import React from "react";
import TodoItem from "./TodoItem";
import toto from "./toto.png";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      value: ""
    };
  }
  onClickDel = idx => {
    const newItems = [...this.state.items];
    newItems.splice(idx,1);
    this.setState({items:newItems});
    console.log(idx);
  }
  onClickMo = (value,idx) =>{
    const newMos = [...this.state.items.slice(0,idx),value,...this.state.items.slice(idx+1)];
    this.setState({items:newMos});
  }
  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items
    });
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <input type="text" onChange={this.onChange} />
        <button onClick={this.onClickAdd}>추가</button>
        {this.state.items.map((value, idx) => (
          <TodoItem key={idx} value={value} 
          onClickDel={() => {
            this.onClickDel(idx);
          }}
          onClickMo={(value)=>{
            this.onClickMo(value,idx);
          }}
          />
        ))}
        <img src={toto} />
      </>
    );
  }
}
export default App;