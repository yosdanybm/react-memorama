const GameReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CARDS':
      return {
        ...state,
        cards: action.payload,
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
    case 'RESET_GAME':
      return {
        ...state,
        cards: action.payload.cards,
        player1: action.payload.player1,
        player2: action.payload.player2,
      };
    case 'UPDATE_PLAYING':
      return {
        ...state,
        playing: action.payload,
      };
    default:
      return state;
  }
};

export default GameReducer;
