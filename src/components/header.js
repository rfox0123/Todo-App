import React, { Component } from "react";
import TodoTextInput from "./todoTextInput";

class Header extends Component {
    render(){
        return(
            <div>
              <header className="header">
              <h1>TODO APP</h1>
              <TodoTextInput onChange={this.handleChange} />
              </header>
            </div>
        )
    }
}

export default Header;