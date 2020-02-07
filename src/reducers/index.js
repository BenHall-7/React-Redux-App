import {
  FETCH_NUMBER_START,
  FETCH_NUMBER_SUCCESS,
  FETCH_NUMBER_FAIL,
  SET_FORM_INPUT,
  SET_TRIVIA,
  SETUP,
} from '../actions';

const initialState = {
  isSetUp: false,
  number: 0,
  trivia: null,
  error: null,
  isFetching: false,
  formInput: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SETUP: {
      return {
        ...state,
        isSetUp: true,
      }
    }
    case FETCH_NUMBER_START: return {
      ...state,
      number: action.payload,
      isFetching: true
    }
    case FETCH_NUMBER_SUCCESS: return {
      ...state,
      isFetching: false,
      trivia: action.payload,
      error: null,
    }
    case FETCH_NUMBER_FAIL: return {
      ...state,
      trivia: null,
      error: action.payload,
    }
    case SET_FORM_INPUT: return {
      ...state,
      formInput: action.payload,
    }
    case SET_TRIVIA: return {
      ...state,
      trivia: action.payload
    }
    default: return state;
  }
}