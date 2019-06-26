import React,{Component} from 'react';
import './App.css';

class App extends Component{
state={
  arr:[],
  text:"",
  setClass:"",
  text2:"",
  update:"Edit"
}

getValue=(e)=>{
  this.setState({
    text:e.target.value,
    setClass:""
  })
}

getValue2=(e)=>{
  this.setState({
    text2:e.target.value
  })
}

newAddon=()=>{
  if(this.state.text!=""){
    this.setState({
      arr:this.state.arr.concat(this.state.text),
      text:""
    });
  }
}

enterPressed=(e)=>{
    this.setState({
      setClass:"error"
    })
    if(e.key=="Enter"){
      this.newAddon()
    }
}

checked=(e)=>{
  const name=e.target.name
  this.setState({
    [name]:!this.state[name]
  })
 }

 validate=(e)=>{
   if(e.target.value==""){
    this.setState({
      setClass:"error"
    })
   }
 }

delete=(i)=>{
  this.setState({
    arr:this.state.arr.filter((v,index,arr)=>{
      return arr.indexOf(v)!=i
    })
  })
}

edit=(i)=>{
this.setState({
  ['edit'+i]:!this.state['edit'+i],
  text2:this.state.arr[i],
  ['save'+i]:!this.state['save'+i],
})

}

save=(i)=>{
  let a={...this.state}    
  a.arr[i]=this.state.text2
  this.setState({
    ...a,
    ['edit'+i]:!this.state['edit'+i]
  })  
}


  render(){

    return(
      <div>
      
        {this.state.arr.map((val,i)=>   
             <div className ='rows-value'>
              <div><input onClick={this.checked} type="checkbox" name={i} key={i}></input></div>
              <div className="val">{val}</div>
              <div className="task ">{this.state[i] && "completed"}</div>
               {                 
                 this.state['edit'+i] && <input type="text" onChange={this.getValue2} value={this.state.text2} ></input>
               }
               {<button onClick={()=>{this.state['edit'+i]?this.save(i):this.edit(i)}}>{this.state['edit'+i]?"save":"edit"}</button>}
              <button className="cancel" onClick={()=>this.delete(i)} key={i}>X</button>
            </div>
        )
        }
        <div>Todo</div>
        <div><input type="text" placeholder="Your Todo.." className={this.state.setClass +" textbox"} onChange={this.getValue}  onKeyPress={this.enterPressed} value={this.state.text}></input></div>
        <button onClick={this.newAddon}>Submit</button>
      </div>
    )
  }

}

export default App;