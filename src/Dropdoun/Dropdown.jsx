import React, { Component } from "react";
import "./Dropdown.css";

class DropDown extends Component {
    state = {
        visible: false,
    };

    togle = () => {
        this.setState(prevState =>
            ({ visible: !prevState.visible })
    )
}
  render() {
    const {visible} = this.state
    return (
      <>
        <div className="DropDown">
          <button type="button" className="btn" onClick={this.togle}>
            {visible ? "hide" : "show"}
          </button>

          {visible && (
            <div className="conteiner-menu">
              <div className="menu">menu</div>
              <div className="menu">menu</div>
              <div className="menu">menu</div>
            </div>
          )}
        </div>
      </>
    );
  }
}
export default DropDown;
