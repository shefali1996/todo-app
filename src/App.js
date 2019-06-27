import React,{Component} from 'react';
import '../src/App.css';
import TextBox from './component/TextBox';
import ShowTodo from './component/ShowTodo';

class App extends Component{

  state={
    arr:[],
    text:""
  }

  getValue=(e)=>{
    this.setState({
      text:e.target.value,
    });
  }

  submit=()=>{
    if(this.state.text!=""){
      this.setState({
        arr:this.state.arr.concat(this.state.text),
        text:""
      })
    }
  }

  enterKey=(e)=>{
    if(e.key=="Enter" && e.target.value!=""){
      this.submit()
    }
  }

  render(){
    return(
      <div>
        <ShowTodo data={this.state}/>
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