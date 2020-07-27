export const RegisterReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_REGISTER':
      return {
        ...state,
        count: ++state.count,
        registerList: [...state.registerList, action.payload],
      };
    case 'REMOVE_REGISTER':
      return {
        ...state,
        count: --state.count,
        registerList: state.registerList.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
