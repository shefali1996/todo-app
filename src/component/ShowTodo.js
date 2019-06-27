import React, {Component} from 'react';
import '../../src/App.css';

class ShowTodo extends Component{
    render(){
        return(
            <div>
                {
                    this.props.data.arr.map((val,i)=>
                        <div className="row" key={i}>
                            <input type="checkbox"></input>
                            <div className="val">{val}</div>
                            <button>Edit</button>
                            <button onClick={()=>this.props.delete(i)}>X</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default ShowTodo;