import React, { Component } from "react";
import "./colorPiker.css";

class ColorPiker extends Component {
  state = {
    activOptionInx: 4,
  };
  setEctivIndx = (index) => {
    this.setState({ activOptionInx: index });
  };

    render() {
        const { opsions } = this.props;
        const { color, lebel } = opsions[this.state.activOptionInx];
        const { activOptionInx } = this.state;

    return (
      <>
        <div className="colorPiker">
          <h2 className="colorPiker_title">Color Piker</h2>
          <span> color:{color}</span>
          {/* <span style={{ backgroundColor: color }}> {color}</span> */}
          <div>{lebel}</div>
          <div className="conteiner">
            {opsions.map(({ lebel, color }, index) => (
              <button
                onClick={() => this.setEctivIndx(index)}
                key={lebel}
                className="colorPiker__opsions"
                style={{
                  backgroundColor: color,
                  border: index ===  activOptionInx ? "5px solid teal" : "none",
                  transform:
                    index === activOptionInx
                      ? "scale(1.2)"
                      : "none ",
                }}
              ></button>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default ColorPiker;
