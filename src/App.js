import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import GameState from './context/game/gameState';
import Play from './modules/play/container/Play';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#187DE4',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <GameState>
        <Play />
      </GameState>
    </MuiThemeProvider>
  );
}

export default App;
