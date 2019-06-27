import React, {Component} from 'react';

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
                            <button>X</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default ShowTodo;