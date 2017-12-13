import React from 'react';
import Header from "./header";
import MainSection from "./MainSection";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../actions/action";



const App = ({ todos, actions }) => {
  // const { todos, actions } = props;
  // const handleChange = event => {
  //   const text = event.target.value.trim();
  //   if (event.which === 13){
  //       this.props.addtodo(text);
  //   }
  // };
    return (
      <div>
        <Header addtodo={actions.addtodo} />
        <MainSection todos={todos} actions={actions} />
      </div>

    )
};

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch =>({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
