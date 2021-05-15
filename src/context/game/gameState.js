import React, { useReducer } from 'react';
import GameReducer from './gameReducer';
import GameContext from './gameContext';
import PropTypes from 'prop-types';
import { InitCarts } from 'helpers/utils';

const GameState = (props) => {
  const initialState = {
    carts: InitCarts(),
    player1: {
      points: 0,
    },
    player2: {
      points: 0,
    },
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
