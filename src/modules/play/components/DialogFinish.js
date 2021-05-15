import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GameContext from 'context/game/gameContext';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const DialogFinish = (props) => {
  const { open, onClose } = props;
  const [state] = useContext(GameContext);

  return (
    <div>
      <Dialog
        onClose={onClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        BackdropProps={{
          style: { backgroundColor: 'rgba(68, 75, 98, 0.7)' },
        }}
      >
        <DialogTitle style={{ textAlign: 'center' }}>Finish!!!</DialogTitle>
        <DialogContent
          style={{ minHeight: 100, minWidth: 200, textAlign: ' center' }}
        >
          <DialogContentText>
            {state.player1.points === state.player2.points && (
              <p style={{ marginTop: 0 }}>
                Tied game!!!{' '}
                <span style={{ fontSize: 'xx-large', color: 'initial' }}>
                  🎉
                </span>
              </p>
            )}

            {state.player1.points > state.player2.points && (
              <p style={{ marginTop: 0 }}>
                Player 1 WON!!!{' '}
                <span style={{ fontSize: 'xx-large', color: 'initial' }}>
                  🎉
                </span>
              </p>
            )}

            {state.player1.points < state.player2.points && (
              <p style={{ marginTop: 0 }}>
                Player 2 WON!!!{' '}
                <span style={{ fontSize: 'xx-large', color: 'initial' }}>
                  🎉
                </span>
              </p>
            )}
          </DialogContentText>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={onClose}
            startIcon={<PlayCircleOutlineIcon />}
          >
            Play Again
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

DialogFinish.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default DialogFinish;
