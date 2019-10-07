import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        marginTop: "30px"
      }
    }
  },
  palette: {
    primary: {
      light: "#35baf6",
      main: "#03a9f4",
      dark: "#0276aa"
    },
    secondary: {
      light: "#4aedc4",
      main: "#1de9b6",
      dark: "#14a37f"
    },
    error: {
      light: "#ff77a9",
      main: "#ec407a",
      dark: "#b4004e"
    }
  }
});

export default function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
