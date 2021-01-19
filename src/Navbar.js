import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      format: e.target.value
    });
    this.props.handleChange(e.target.value);
  }
  render() {
    const { format } = this.state;
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">reactColorPicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - (255,76,231)</MenuItem>
            <MenuItem value="rgba">RGBA - (255,76,231,1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
