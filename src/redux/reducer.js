const reducer = (state, action) => {
  switch(action.type) {
    case 'switch-stage':
      return Object.assign({}, state, { stage: action.payload });
    case 'view-project':
      return Object.assign({}, state, {
        showPanel: true,
        projectId: action.payload.projectId,
      });
    case 'close-panel':
      return Object.assign({}, state, { showPanel: false });
    case 'ready':
      return Object.assign({}, state, { ready: true });
    default:
      return state;
  }
};

export default reducer;
