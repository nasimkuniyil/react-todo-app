import React, { Component } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

class App extends Component {
  state = {
    items: [],
  };

  //add new todo item
  addItems = (newItem) => {
    this.setState(
      {
        items: [...this.state.items, newItem],
      },
      () => console.log(this.state.items)
    );
  };

  //for delete todo item
  deleteItems = (index) => {
    let items = this.state.items;

    items.splice(index,1);

    this.setState({
      items : items
    })
  }

  //edit todo items
  editItem = (id) => {
    let {items} = this.state;

    items.forEach( (item) => {

      //check items id
      if(item.id===id){
        let edited = prompt("Edit item",item.value);

        // retun if edited value is null
        if(edited===null) return

        // change value as edited
        item.value = edited;

        //update state
        this.setState({
          items : items
        })
      }
    })
  }

  //mark complete todo item
  isCompleted = (id) => {
    let {items} = this.state;

    items.forEach((item)=>{
      if(item.id===id){
        item.isCompleted = !item.isCompleted
      }
    })

    this.setState({
      items : items
    })
  }

  render() {
    return (
      <div>
        <h1>My Todo</h1>
        <TodoForm addItems={this.addItems} />
        <TodoList data={[this.state.items, this.deleteItems,this.isCompleted,this.editItem]} />
      </div>
    );
  }
}

export default App;
