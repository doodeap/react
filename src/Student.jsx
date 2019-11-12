import React from "react";
import styled from "styled-components";
const Input = styled.input`
&+div{
    display:none;
}
&.check{
    &+div{
        display:block
    }
}
`


class Student extends React.Component {
    constructor(props) {
        super(props);
        const obj = {
            key:"value",
        }
        const a = "value"
        this.state = {
            checked:false,
            checkedStyle:false
        };
    }


handleChange = event => {
    this.setState({ name: event.target.value });
};

handleChangeName = event => {
    this.setState({ name: event.target.name });
};

handleChangeNumber = event => {
    this.setState({ name: event.target.number });
};

handleChangeClub = event => {
    this.setState({ name: event.target.club });
};
handleClick = event =>{
    alert(`학번 ${this.state.number}, 이름 ${this.state.name}, 동아리 ${this.state.club}`);
}
handleChecked = event=>{
    if({checked:event.target.checked});
}
handleCheckedStyle = event=>{
    this.setState({checkedStyle:event.target.checked});
}
render(){
    return (
        <div>
            <input type="text" placeholder="이름" value={this.state.number} onClick={this.handleClick}/>
            <input type="text" value={this.state.name} onClick={this.handleClick}/>
            <input type="text" value={this.state.club} onClick={this.handleClick}/>
            <br/>
            <input type="text" value={this.state.name} onChange={this.handleChange}/>
            이름은 <b>{this.props.name}</b>,학번은{this.props.Student_num},동아리는{this.props.club}
            <div>{this.state.name}</div>
            <br/>
            {this.state.checked&&<div>check</div>
            <Input type="checkBox" name="checkBox"
            onChange = {this.handleCheckedStyle}
            className = {this.state.checkedStyle&&"check"}
            />
            <div>check-styled</div>
        </div>
    )
}
}

export default Student;