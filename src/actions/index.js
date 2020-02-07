import axios from "axios";

export const SETUP = 'SETUP';
export const FETCH_NUMBER_START = 'FETCH_NUMBER_START';
export const FETCH_NUMBER_SUCCESS = 'FETCH_NUMBER_SUCCESS';
export const FETCH_NUMBER_FAIL = 'FETCH_NUMBER_FAIL';
export const SET_FORM_INPUT = 'SET_FORM_INPUT';
export const SET_TRIVIA = 'SET_TRIVIA';

export const fetchNumber = (number, type) => dispatch => {
  dispatch({type: FETCH_NUMBER_START, payload: number});
  axios.get(`http://numbersapi.com/${number}/${type || "trivia"}`)
    .then(res => {
      dispatch({
        type: FETCH_NUMBER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_NUMBER_FAIL,
        payload: "There was an error loading this trivia!",
      })
    })
}

export const setFormInput = input => ({
  type: SET_FORM_INPUT,
  payload: input,
})

export const setup = input => ({
  type: SETUP,
})