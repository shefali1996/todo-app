import React,{Component} from 'react';
import './App.css';

class App extends Component{
state={
  arr:[],
  text:"",
  setClass:""
}

getValue=(e)=>{
  this.setState({
    text:e.target.value
  });
}

newAddon=()=>{
  this.setState({
    arr:this.state.arr.concat(this.state.text),
    text:""
  });
}

enterPressed=(e)=>{
  if(e.key=="Enter"){
    this.newAddon()
  }
}

checked=(e)=>{
  // console.log(e.target.name);
  const name=e.target.name
  console.log(name,this.state[name]);
  
  this.setState({
    [name]:!this.state[name]
  })
 }

//  validate=(e)=>{
//    console.log(e.target.value,"textbox")
//    if(e.target.value==""){
//     this.setState({
//       setClass:"error"
//     })
//    }
//  }



  render(){
console.log(this.state);

    return(
      <div>
      
          {this.state.arr.map((val,i)=>   
             <div className ='rows-value'>
              <div><input id="checkid" onClick={this.checked} type="checkbox" name={i} key={i}></input></div>
              <div className="val">{val}</div>
              <div className="task ">{this.state[i] && "completed"}</div>
            </div>
        )
        }
      <div>Todo</div>
       <div><input type="text" placeholder="Your Todo.." className={this.state.setClass +" textbox"} onChange={this.getValue} onBlur={this.validate} onKeyPress={this.enterPressed} value={this.state.text}></input></div>
        <button onClick={this.newAddon}>Submit</button>
      </div>
    )
  }

}

export default App;