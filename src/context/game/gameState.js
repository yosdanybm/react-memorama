import React, { useReducer } from 'react';
import GameReducer from './gameReducer';
import GameContext from './gameContext';
import PropTypes from 'prop-types';
import { InitCards } from 'helpers/utils';

const init = InitCards();

const GameState = (props) => {
  const initialState = {
    cards: init,
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
    playing: false,
  };

  const [state, dispatch] = useReducer(GameReducer, initialState);

  return (
    <GameContext.Provider value={[state, dispatch]}>
      {props.children}
    </GameContext.Provider>
  );
};

GameState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameState;
