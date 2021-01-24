export default {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  },
  goBack: {
    position: "relative",
    backgroundColor: "black",
    height: "50%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: "-3.7px",
    cursor: "pointer",
    opacity: "1",
    "& a": {
      color: "white",
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
      opacity: "1"
    }
  }
};
