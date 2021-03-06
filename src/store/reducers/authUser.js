import constants from '../constants';

const {
  SET_CURRENT_USER, USER_SIGNUP_FAILED,
  USER_SIGNUP_STARTED,
  MODAL_SHOW,
  MODAL_CLOSE,
  RESET_CURRENT_USER,
  LOGOUT
} = constants;

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false,
  modalOpen: false
};
const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_STARTED:
      return {
        ...state,
        loading: true
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case RESET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case USER_SIGNUP_FAILED:
      return {
        ...state,
        loading: false
      };
    case MODAL_CLOSE:
      return {
        ...state,
        modalOpen: false
      };
    case MODAL_SHOW:
      return {
        ...state,
        modalOpen: true
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
        showUserMenu: false,
      };
    default:
      return state;
  }
};

export default authUserReducer;
