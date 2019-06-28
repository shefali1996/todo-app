import React, { Component } from "react";
import "../../src/App.css";

class ShowTodo extends Component {
  render() {
    return (
      <div>
        {this.props.data.arr.map((val, i) => (
          <div className="row" key={i}>
            <input type="checkbox" onClick={() => this.props.checked(i)} />
            <div className="val">{val.text}</div>
            <div>{this.props.data.arr[i].check && "Completed"}</div>
            {this.props.data.arr[i].edit && <input type="text"  onChange={(e)=>this.props.getValue1(e,i)} value={this.props.data.arr[i].text1}/>}
            <button
              onClick={
                this.props.data.arr[i].edit
                  ? () => this.props.save(i)
                  : () => this.props.edit(i)
              }
            >
              {this.props.data.arr[i].edit ? "Save" : "Edit"}
            </button>
            <button onClick={() => this.props.delete(i)}>X</button>
          </div>
        ))}
      </div>
    );
  }
}

export default ShowTodo;
