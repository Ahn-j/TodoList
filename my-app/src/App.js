import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }

  }
  render(){
    return (
      <div className = "TodoList_Layout">
        <h1>---------TodoList---------</h1>
          <form>
            <input type = "text"/>
            <Button className = "TodoList_btn" variant="contained" color="secondary">Add</Button>
               
          </form>
      </div>
    )
  }
}

export default App;
