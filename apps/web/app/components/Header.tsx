import { AppBar, Toolbar } from "@mui/material";
import { TextBig } from "../atoms/Text";

export const Header = () => (
  <AppBar
    position="static"
    style={{
      backgroundColor: "#0e0e0e",
      marginBottom: 10,
    }}
    enableColorOnDark
  >
    <Toolbar
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextBig text="Rick & Morty army" />
    </Toolbar>
  </AppBar>
);
