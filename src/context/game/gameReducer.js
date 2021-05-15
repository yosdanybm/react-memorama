const GameReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LOGGED":
      return {
        ...state,
        logged: action.payload,
      };

    default:
      return state;
  }
};

export default GameReducer;
