import React, { useEffect, useContext, useCallback, useRef } from 'react';
import { InitCards } from 'helpers/utils';
import GameContext from 'context/game/gameContext';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Avatar,
  Button,
  Tooltip,
} from '@material-ui/core';
import styles from './headerStyle.js';
import StyledBadge from 'components/avatar/avatar';
import useCountDown from '../../../hooks/useCountDown';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

const useStyles = makeStyles(styles);

const initialTime = 10 * 1000;
const interval = 1000;

function Header() {
  const classes = useStyles();
  const [state, dispatch] = useContext(GameContext);
  const [timeLeft, { start }] = useCountDown(initialTime, interval);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (!isFirstRun.current) {
      handleStart();
    }
  }, [state.player1.active]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (timeLeft === 0) {
      changePlayerActive();
    }
  }, [timeLeft]);

  const resetGame = () => {
    dispatch({
      type: 'RESET_GAME',
      payload: {
        cards: InitCards(),
        player1: {
          name: 'Player 1',
          active: true,
          points: 0,
        },
        player2: {
          name: 'Player 2',
          active: false,
          points: 0,
        },
      },
    });

    handleStart();
  };

  const handlePlay = () => {
    dispatch({
      type: 'UPDATE_PLAYING',
      payload: true,
    });

    handleStart();
  };

  const handleStart = useCallback(() => {
    const newTime = 10 * 1000;
    start(newTime);
  }, []);

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

    setTimeout(() => {
      handleStart();
    }, 200);
  };

  return (
    <AppBar className={classes.header} position="fixed">
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item className={classes.players}>
            <div>
              <Tooltip
                title={
                  state.player1.active ? 'Player active' : 'Player inactive'
                }
                arrow
              >
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant={state.player1.active ? 'dot' : 'standard'}
                >
                  <Avatar src="/broken-image.jpg" />
                </StyledBadge>
              </Tooltip>
            </div>

            <Grid container direction="column" alignItems="flex-start">
              <Typography variant="h6" gutterBottom>
                {state.player1.name}
              </Typography>

              <Typography variant="subtitle2" gutterBottom>
                Points: {state.player1.points}
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                style={{
                  color:
                    state.player1.active && !isFirstRun.current
                      ? 'red'
                      : 'white',
                }}
                className={classes.countDown}
              >
                Time left: {state.player1.active ? timeLeft / 1000 : '0'} sec
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Typography className={classes.title} variant="h5">
              Game &ldquo;Memorama&rdquo;
            </Typography>
            <Button
              variant="contained"
              color="default"
              size="small"
              onClick={() => handlePlay()}
              style={{ marginRight: 65 }}
              startIcon={<RotateLeftIcon />}
            >
              Play
            </Button>
            <Button
              variant="contained"
              color="default"
              size="small"
              disabled={!state.playing}
              onClick={resetGame}
              startIcon={<RotateLeftIcon />}
            >
              Reset
            </Button>
          </Grid>

          <Grid item className={classes.players}>
            <div>
              <Tooltip
                title={
                  state.player2.active ? 'Player active' : 'Player inactive'
                }
                arrow
              >
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant={state.player2.active ? 'dot' : 'standard'}
                >
                  <Avatar src="/broken-image.jpg" />
                </StyledBadge>
              </Tooltip>
            </div>

            <Grid container direction="column" alignItems="flex-start">
              <Typography variant="h6" gutterBottom>
                {state.player2.name}
              </Typography>

              <Typography variant="subtitle2" gutterBottom>
                Points: {state.player2.points}
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                style={{
                  color:
                    state.player2.active && !isFirstRun.current
                      ? 'red'
                      : 'white',
                }}
                className={classes.countDown}
              >
                Time left: {state.player2.active ? timeLeft / 1000 : '0'} sec
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
