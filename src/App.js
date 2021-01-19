import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { Switch, Route } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Homepage</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(this.findPalette(routeProps.params.id))}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
