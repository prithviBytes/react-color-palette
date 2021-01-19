import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[5])} />
      </div>
    );
  }
}

export default App;
