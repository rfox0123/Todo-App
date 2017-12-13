import React, { Component } from "react";
import classNames from "classnames";
import TodoTextInput from "./todoTextInput";


class TodoItem extends Component {
    state = {
        editing: false
    }
    handleDoubleClick = () => {
        this.setState({editing: true})
    }

    handleSave = (id, text) => {

    }
    render(){
        const { todo, completeTodo, deleteTodo } = this.props;
        let element;
        if(this.state.editing){
            return(
            element = (
            <div>
              <label>Editing...</label>
              <TodoTextInput text={todo.text}/>
            </div>
            )
        )
        }
        return(
          <li
            className={classNames({
                completed: todo.completed
            })}>
            <div className="view">
               <input type="checkbox"
                      className="toggle"
                      checked={todo.completed}
                      onChange={() => completeTodo(todo.id)}
               />
               <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
               <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
            </div>
           </li>
        )
        
    }
}

export default TodoItem;