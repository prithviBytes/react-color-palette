import chroma from "chroma-js";
import sizes from "./sizes";
export default {
  colorBox: {
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: "-3.7px",
    position: "relative",
    cursor: "pointer",
    "&:hover button": {
      opacity: "1",
      transition: ".4s"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: (props) => (props.showingFullPalette ? "20%" : "33.3333%")
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.showingFullPalette ? "10%" : "20%")
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: (props) => (props.showingFullPalette ? "5%" : "10%")
    }
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white"
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black"
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7
        ? "rgba(0, 0, 0, 0.5)"
        : "white",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    lineHeight: "30px",
    textAlign: "center",
    textTransform: "uppercase"
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7
        ? "rgba(0, 0, 0, 0.5)"
        : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textDecoration: "none",
    textTransform: "uppercase",
    border: "none",
    opacity: "0"
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px"
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0.1)",
    transition: "transform 0.6s ease-in-out"
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute"
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
      [sizes.down("xs")]: {
        fontSize: "4rem"
      }
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
      textTransform: "uppercase"
    }
  },
  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s"
  }
};
