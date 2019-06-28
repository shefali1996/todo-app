import React, { Component } from "react";
import "../src/App.css";
import TextBox from "./component/TextBox";
import ShowTodo from "./component/ShowTodo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      text: "",
      error: ""
    };
  }

  getValue = e => {
    this.setState({
      text: e.target.value
    });
  };

  submit = () => {
    if (this.state.text != "") {
      const todo = {
        text: this.state.text,
        completed: false,
        check: false,
        edit: false,
        save: false,
        text1: this.state.text
      };
      this.setState({
        arr: this.state.arr.concat(todo),
        text: "",
        error: "red"
      });
    }
  };

  enterKey = e => {
    if (e.key == "Enter" && e.target.value != "") {
      this.submit();
    }
  };

  delete = i => {
    this.setState({
      arr: this.state.arr.filter((v, index, arr) => {
        return arr.indexOf(v) != i;
      })
    });
  };

  checked = i => {
    let newState = { ...this.state };
    newState.arr[i].check = !this.state.arr[i].check;
    this.setState({
      ...newState
    });
  };

  edit = i => {
    let newState = { ...this.state };
    newState.arr[i].edit = !this.state.arr[i].edit;
    this.setState({
      ...newState
    });
  };

  save = i => {
    let newState = { ...this.state };
    newState.arr[i].text = newState.arr[i].text1;
    newState.arr[i].edit = !this.state.arr[i].edit;
    this.setState({
      ...newState
    });
  };

  getValue1 = (e, i) => {
    let newState = { ...this.state };
    newState.arr[i].text1 = e.target.value;
    this.setState({
      ...newState
    });
  };

  render() {
    return (
      <div>
        <ShowTodo
          data={this.state}
          delete={this.delete}
          checked={this.checked}
          edit={this.edit}
          save={this.save}
          getValue1={this.getValue1}
        />
        <TextBox
          data={this.state}
          getValue={this.getValue}
          submit={this.submit}
          enterKey={this.enterKey}
        />
      </div>
    );
  }
}

export default App;
