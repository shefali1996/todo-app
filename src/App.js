import React,{Component} from 'react';
import '../src/App.css';
import TextBox from './component/TextBox';
import ShowTodo from './component/ShowTodo';

class App extends Component{

  state={
    arr:[],
    text:"",
    text1:"",
    error:""

  }

  getValue=(e)=>{
    this.setState({
      error:"",
      text:e.target.value,
    });
  }

  submit=()=>{
    if(this.state.text!=""){
      this.setState({
        arr:this.state.arr.concat(this.state.text),
        text:"",
        error:"red"
      })
    }
  }

  enterKey=(e)=>{
    if(e.key=="Enter" && e.target.value!=""){
      this.submit()
    }
  }

  delete=(i)=>{
    this.setState({
      arr:this.state.arr.filter((v,index,arr)=>
      {
        return arr.indexOf(v)!=i;
      }
      )
    })
  }

  checked=(i)=>{
    this.setState({
    ['check' + i]:!this.state['check'+ i]
    })
  }

  edit=(i)=>{
    this.setState({
      ['edit' + i]:!this.state['edit'+ i],
      text1:this.state.arr[i]
    })
  }

  save=(i)=>{
    let a={}
    a=this.state
    a.arr[i]=a.text1
    this.setState({
      ...a
    })
    this.setState({
      ['edit' + i]:!this.state['edit'+ i]

    })
  }

  getValue1=(e)=>{
    this.setState({
      text1:e.target.value,
    });
  }


  render(){
   
    return(
      <div>
        <ShowTodo data={this.state}
         delete={this.delete}
         checked={this.checked}
         edit={this.edit}
         save={this.save}
         getValue1={this.getValue1}
         />
        <TextBox data={this.state}
        getValue={this.getValue}
        submit={this.submit}
        enterKey={this.enterKey}
        />
      </div>
    )
  }
}

export default App;