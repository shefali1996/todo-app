import React, { Component } from "react";
import "../../src/App.css";

class TextBox extends Component {
  render() {
    return (
      <div>
        <h2>Todo</h2>
        <div>
          <input
            className={this.props.data.error +" textbox"}
            placeholder="Your Todo..."
            type="text"
            onChange={this.props.getValue}
            value={this.props.data.text}
            onKeyPress={this.props.enterKey}
          />
        </div>
        <button onClick={this.props.submit}>Submit</button>
      </div>
    );
  }
}

export default TextBox;
