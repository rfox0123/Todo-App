import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../actions/action";


class TodoTextInput extends Component {
    
    state = {
        text: ""
    }

    handleChange = event => {
        
        const text = event.target.value.trim();
        if (event.which === 13){
            console.log(this.props);
            this.props.actions.addtodo(text);
            this.refs.input.value= ""
            this.refs.input.placeholder="What else you want?"
        }
    };
    
    render(){
        return(
        <div>
           <input
           ref="input"
           placeholder="What you want fool?" 
           onKeyDown={this.handleChange}
           autoFocus="true"
           />
        </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    actions: bindActionCreators(TodoActions, dispatch)
  })

export default connect(null, mapDispatchToProps)(TodoTextInput)