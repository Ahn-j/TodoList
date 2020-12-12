import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { ListItem } from '@material-ui/core';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:3,
      input:"",
      todoList:[
      {id:1 , text:"아침먹기"},
      {id:2 , text:"점심먹기"}  
      ]
    }
  }
  handleChangeText = e => {
    this.setState({ 
      input: e.target.value 
      });
    }

  handleClick = e => {
    const { input, todoList } = this.state;
    //서브밋 이벤트 방지
    e.preventDefault();
    console.log("asd"+this.state.id)
    this.setState({ 
      input:"",
      todoList: todoList.concat({
        id: this.state.id++,
        text: input
      })
    });
   }

  
  render(){
    console.log(this.state.todoList)
    return (
      <div className = "TodoList_Layout">
        <h1>---------TodoList---------</h1>
        <h3>----Insert your TodoList----</h3>
          <form>
            <input className = "TodoList_text" type = "text" onChange={this.handleChangeText} value={this.state.input}/>
            <Button className = "TodoList_btn" type="submit" variant="contained" color="secondary" onClick={this.handleClick}>
              Add
            </Button>
          </form>  
            <div className = "TodoList_btn_List">
              <Button className = "TodoList_Smallbtn" type="submit" variant="outlined" color="primary" aria-pressed="true">ALL</Button>
              <Button className = "TodoList_Smallbtn" type="submit" variant="outlined" color="primary">ACTIVE</Button>
              <Button className = "TodoList_Smallbtn" type="submit" variant="outlined" color="primary">COMPLETED</Button>
            </div>
            <div className = "TodoList">
                {this.state.todoList.map((v,i)=>{
                  return(
                    <ListItem key={v.id}>
                      <ul>
                        <li className="List">{v.text}</li>
                      </ul>
                    </ListItem>
                  );  
                })}
            </div>
               
          
      </div>
    )
  }
}

export default App;
