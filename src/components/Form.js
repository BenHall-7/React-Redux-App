import React from 'react';
import {connect} from 'react-redux';
import {fetchNumber, setFormInput} from '../actions';

function Form(props) {
  return (
    <form id="number-form">
      <input
        type="text"
        value={props.input}
        onChange={e => props.setFormInput(e.target.value)}
      />
      <button onClick={e => {
        e.preventDefault();
        props.fetchNumber(props.input, "trivia");
      }}>Search</button>
    </form>
  )
}

const stateToProps = state => ({
  input: state.formInput,
})

export default connect(stateToProps, {fetchNumber, setFormInput})(Form);