import sizes from "./sizes";
import bg from "./bg.svg";
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1,
      transform: "scale(1)"
    },
    ".fade-exit-active": {
      opacity: 0,
      transform: "scale(0.1)",
      transition: "all 500ms ease-out"
    }
  },
  root: {
    backgroundColor: "#394bad",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    overflow: "scroll",
    justifyContent: "center",
    // Background by SVGbackgrounds.com
    backgroundImage: `url(${bg})`
  },
  heading: {
    fontSize: "2rem"
  },
  container: {
    width: "60%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("lg")]: {
      width: "80%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem"
    }
  }
};
