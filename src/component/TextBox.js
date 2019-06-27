import React,{Component} from 'react';
import '../../src/App.css';

class TextBox extends Component{
    render(){
        return(
            <div>
                <h2>Todo</h2>
                <div><input placeholder="Your Todo..." className="textbox" type="text" onChange={this.props.getValue} value={this.props.data.text} onKeyPress={this.props.enterKey}></input></div>
                <button onClick={this.props.submit}>Submit</button>
            </div>
        );
    }
}

export default TextBox;