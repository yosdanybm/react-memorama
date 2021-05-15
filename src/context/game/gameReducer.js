const GameReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_LOGGED':
      return {
        ...state,
        logged: action.payload,
      };
    case 'UPDATE_PLAYER_1':
      return {
        ...state,
        player1: action.payload,
      };
    case 'UPDATE_PLAYER_2':
      return {
        ...state,
        player2: action.payload,
      };
    default:
      return state;
  }
};

export default GameReducer;
