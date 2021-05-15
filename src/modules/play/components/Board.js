import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import styles from './boardStyle.js';
import GameContext from 'context/game/gameContext';
import CardFlip from './CardFlip';
import DialogFinish from './DialogFinish';

const useStyles = makeStyles(styles);

function Board() {
  const classes = useStyles();
  const [state, dispatch] = useContext(GameContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCardClickCallback = (position) => {
    let tmpCards = state.cards;
    let currentCard = tmpCards[position];

    if (currentCard.selected || !state.playing) {
      return;
    }

    dispatch({
      type: 'UPDATE_CARDS',
      payload: tmpCards.map((el) => {
        if (el === currentCard) {
          el.isFlipped = !el.isFlipped;
        }
        return el;
      }),
    });

    if (tmpCards.filter((el) => el.isFlipped).length === 2) {
      setTimeout(() => {
        compare();
      }, 500);
    }
  };

  const compare = () => {
    let tmpCards = state.cards;
    let flippedCards = tmpCards.filter((el) => el.isFlipped);
    if (flippedCards[0].icon !== flippedCards[1].icon) {
      tmpCards = tmpCards.map((el) => {
        el.isFlipped = false;
        return el;
      });

      changePlayerActive();
    } else {
      tmpCards = tmpCards.map((el) => {
        if (el.icon === flippedCards[0].icon) {
          el.isFlipped = false;
          el.selected = true;
        }
        return el;
      });

      calculatePlayerPoints();
    }

    dispatch({
      type: 'UPDATE_CARDS',
      payload: tmpCards,
    });

    verifyWinner(tmpCards);
  };

  const verifyWinner = (cards) => {
    if (cards.filter((el) => !el.selected).length === 0) {
      dispatch({
        type: 'UPDATE_PLAYING',
        payload: false,
      });

      handleClickOpen();
    }
  };

  const changePlayerActive = () => {
    if (state.player1.active) {
      dispatch({
        type: 'UPDATE_PLAYER_2',
        payload: {
          ...state.player2,
          active: true,
        },
      });
      dispatch({
        type: 'UPDATE_PLAYER_1',
        payload: {
          ...state.player1,
          active: false,
        },
      });
    } else {
      dispatch({
        type: 'UPDATE_PLAYER_1',
        payload: {
          ...state.player1,
          active: true,
        },
      });
      dispatch({
        type: 'UPDATE_PLAYER_2',
        payload: {
          ...state.player2,
          active: false,
        },
      });
    }
  };

  const calculatePlayerPoints = () => {
    dispatch({
      type: state.player1.active ? 'UPDATE_PLAYER_1' : 'UPDATE_PLAYER_2',
      payload: {
        ...state[state.player1.active ? 'player1' : 'player2'],
        points: state.player1.active
          ? state.player1.points + 1
          : state.player2.points + 1,
      },
    });
  };

  return (
    <>
      <Grid
        className={classes.board}
        container
        justify="center"
        alignItems="center"
      >
        {state.cards.map((el, index) => {
          return (
            <Grid key={index} item xs={3}>
              <CardFlip
                currentCart={el}
                index={index}
                handleCardClick={handleCardClickCallback}
              />
            </Grid>
          );
        })}
      </Grid>

      <DialogFinish open={open} onClose={handleClose} />
    </>
  );
}

export default Board;
