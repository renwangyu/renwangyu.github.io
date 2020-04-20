const reducer = (state, action) => {
  switch(action.type) {
    case 'switch-stage':
      return Object.assign({}, state, { stage: action.payload })
    case 'ready':
      return Object.assign({}, state, { ready: true })
    default:
      return state;
  }
};

export default reducer;
