import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import styles from './boardStyle.js';
import GameContext from 'context/game/gameContext';
import Cart from './Cart';

const useStyles = makeStyles(styles);

function Board() {
  const classes = useStyles();
  const [state] = useContext(GameContext);

  return (
    <Grid
      className={classes.board}
      container
      justify="center"
      alignItems="center"
    >
      {state.carts.map((el, index) => {
        return (
          <Grid key={index} item xs={3}>
            <Cart currentCart={el} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Board;
