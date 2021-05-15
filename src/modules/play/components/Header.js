import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Header() {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography variant="h6">Game &ldquo;Memorama&rdquo;</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
