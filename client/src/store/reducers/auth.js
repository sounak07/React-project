import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isAuth: false,
  users: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_USER:
      return {
        ...state,
        isAuth: true,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
