import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    border: "3px solid black",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    backgroundColor: "gray"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0px",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    fontSize: "1.5rem",
    marginLeft: "0.5rem"
  }
};

function MiniPalette(props) {
  const { classes, paletteName, emoji } = props;
  return (
    <div className="">
      <div className={classes.root}>
        <div className={classes.colors}></div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
