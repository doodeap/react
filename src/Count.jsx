import React, { component } from 'react';
import styled from 'styled-components';

const Value = styled.div`
 color:${props => props.isOver ? "red" : "black"};
`;
class Counter extends component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }
    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    };

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    };
}
render(){
    return (
        <div>
            <Value isOver={this.state.number > 5}>값:{this.state.number}</Value>
            <button onClick={this.handleIncrease}>+</button>
            <button onClick={this.handDeIncrease}>-</button>
        </div>
    );
}
export default Counter;