import React, {Component} from 'react';
import '../../src/App.css';

class ShowTodo extends Component{
    render(){
        return(
            <div>
                {
                    this.props.data.arr.map((val,i)=>
                        <div className="row" key={i}>
                            <input type="checkbox" onClick={()=>this.props.checked(i)}></input>
                            <div className="val">{val}</div>
                            <div>{this.props.data['check' + i] && 'Complete'}</div>
                            {this.props.data['edit' + i] && <input type="text" onChange={this.props.getValue1} value={this.props.data.text1}></input> }
                            <button onClick={this.props.data['edit' + i]?()=>this.props.save(i):()=>this.props.edit(i)} >{this.props.data['edit' + i]?'Save':'Edit'}</button>
                            <button onClick={()=>this.props.delete(i)}>X</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default ShowTodo;