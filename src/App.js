import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Play from "./modules/play/container/Play";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#CACED8",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Play />
    </MuiThemeProvider>
  );
}

export default App;
