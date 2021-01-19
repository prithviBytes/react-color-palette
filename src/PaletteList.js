import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  render() {
    return (
      <div classname="PaletteList">
        <h1>React Colors</h1>
        {this.props.palettes.map((palette) => (
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        ))}
      </div>
    );
  }
}

export default PaletteList;
