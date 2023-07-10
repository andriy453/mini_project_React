import React, { Component } from "react";
import "./TodoEditor.css";

class TodoEditor extends Component {
  state = {
    masseg: " ",
  };
  hendleChange = (e) => {
    this.setState({
      masseg: e.currentTarget.value,
    });
  };
  hendleSabmit = (e) => {
    e.preventDefault();
    this.props.OnSabmit(this.state.masseg);
    this.setState({
      masseg: " ",
    });
  };
  render() {
    return (
      <>
        <form onSubmit={this.hendleSabmit} className="form_Todo">
          <input
            type="text"
            className="textarea_Todo"
            value={this.state.masseg}
            onChange={this.hendleChange}
          />
          <button className="btn_Todo" type="sabmit">
            Додати замітку
          </button>
        </form>
      </>
    );
  }
}
export default TodoEditor;
