import { FETCHING, FETCH_FAILED, FETCH_SUCCESS } from "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  errorMessage: null,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING: {     
      return {
        ...state,
        isFetching: action.payload.isFetching
      }

    }
    case FETCH_FAILED: {
      // console.log("FETCH FAILED", action.payload.error.statusText)
      return {
        ...state,
        isFetching: action.payload.isFetching,
        errorMessage: action.payload.error.statusText
      }

    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        isFetching: action.payload.isFetching,
        characters: action.payload.characters
      }
    }
    default:
      return state;
  }
};
