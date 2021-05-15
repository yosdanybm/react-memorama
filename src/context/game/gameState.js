import React, { useReducer } from "react";
import GameReducer from "./gameReducer";
import GameContext from "./gameContext";
import PropTypes from "prop-types";

const GameState = (props) => {
  const initialState = {
    cards: [],
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
