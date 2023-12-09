import { SET_TOLL_DETAILS } from './actions';

const initialState = {
  tollDetails: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOLL_DETAILS:
      return {
        ...state,
        tollDetails: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
