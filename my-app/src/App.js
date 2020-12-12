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
      pressed: false,
      checked: false,
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

  handleClickClick = e => {
    let { pressed } = this.state;
    //서브밋 이벤트 방지
    e.preventDefault();
    console.log("e.target   "+e.target)
    console.log("asd  d   "+pressed)
    this.setState({ 
      pressed: !pressed
    });
   }
   handleClick = e => {
    let { input, todoList } = this.state;
    //서브밋 이벤트 방지
    e.preventDefault();
    if(input === ""){
      alert("할 일을 입력해주세요QQQQ")
    }
    else
    this.setState({ 
      input:"",
      todoList: todoList.concat({
        id: this.state.id++,
        text: input
      })
    });
   }

  onCheckboxChangeHandler = id =>{
    //console.log("wdwdwdwd  "+e.target.checked )
    console.log("id  "+id )
    // this.setState({ 
    //   checked: !this.state.checked
    // });
   }
  render(){
   
    let {todoList,pressed,checked} = this.state
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
              <Button className = "TodoList_Smallbtn" type="submit" variant="outlined" color="primary" aria-pressed={pressed} onClick={this.handleClickClick}>ALL</Button>
              <Button className = "TodoList_Smallbtn" type="submit" variant="outlined" color="primary" aria-pressed={pressed} onClick={this.handleClickClick}>ACTIVE</Button>
              <Button className = "TodoList_Smallbtn" type="submit" variant="outlined" color="primary" aria-pressed={pressed} onClick={this.handleClickClick}>COMPLETED</Button>
            </div>
            <h2>{todoList.length} tasks remaining</h2>
            <div className = "TodoList">
                {todoList.map((v,i)=>{
                  return(
                    <ListItem key={v.id}>
                      <ul>
                        
                        <li className="List">
                        <input type="checkbox" onChange ={this.onCheckboxChangeHandler(v.id)}
                       />
                          {v.text}
                        </li>
                    
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
