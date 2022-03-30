import { REQUEST_API, RESPONSE_FAILURE, RESPONSE_SUCCESS } from "../actions";

const INTIAL_STATE = {
  loading: false,
};

const apiRedditReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        loading: true,
      };
    case RESPONSE_SUCCESS:
      return {
        ...state,
        subredditObject: action.object,
        loading: false,
      }
    case RESPONSE_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        loading: false,
      }
    default:
      return state;
  }
};

export default apiRedditReducer;