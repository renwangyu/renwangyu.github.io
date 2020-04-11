const reducer = (state, action) => {
  switch(action.type) {
    case 'switch-stage':
      return Object.assign({}, state, { stage: action.payload })
    default:
      return state;
  }
};

export default reducer;
