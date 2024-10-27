import React, { Component } from "react";
import "./TodoList.css";

class TodoList extends Component {
  
  render() {
    let [items, deleteItems, isCompleted, editItem] = this.props.data;
    return (
      <div className="list-item-wrapper">
        <ul>
          {items.map((item, index) => {
            return (
              <li key={item.id}>
                <p
                  className={item.isCompleted ? "completed" : ""}
                  onClick={() => isCompleted(item.id)}
                  type="text"
                >
                  {item.value}
                </p>
                <span className="action-btn">
                  <i className="fa-solid fa-pen-to-square edit-btn" onClick={()=> editItem(item.id)}></i>
                  <i
                    className="fa-solid fa-trash del-btn"
                    onClick={() => deleteItems(index)}
                  ></i>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
