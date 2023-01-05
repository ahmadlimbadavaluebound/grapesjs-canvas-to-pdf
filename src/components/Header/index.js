import * as React from "react";

const styles = {
  headerMainContainer: {
    height: "72px",
    width: "100%",
    background: "linear-gradient(263.27deg, #1a35ab 0.13%, #10a5e5 92.98%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  headerLogoContainer: {
    marginLeft: "15px",
    fontWeight: 700,
    fontSize: "26px",
    textTransform: "capitalize",
    color: "white",
  },
};
const Header = () => {
  return (
    <div style={styles.headerMainContainer}>
      <p style={styles.headerLogoContainer}>GrapesJS PDF</p>
    </div>
  );
};
export default Header;
