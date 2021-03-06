const citiesReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }
    // TODO: handle some actions
  switch (action.type) {
    case 'SET_CITIES':
      return action.payload;
    case 'SELECT_CITIES':
      return [];
    default:
      return state;
  }
};

export default citiesReducer;
