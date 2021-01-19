import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { Switch, Route } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Homepage</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <h1>Palette Display Page</h1>}
        />
      </Switch>
    );
  }
}

export default App;
