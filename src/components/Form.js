import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchNumber, setFormInput, setup} from '../actions';

function Form(props) {
  useEffect(() => {
    props.setFormInput(42);
    props.setup();
    props.fetchNumber(42, "trivia");
  }, []);

  return (
    <form id="number-form">
      <input
        type="text"
        placeholder="Number here"
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

export default connect(stateToProps, {fetchNumber, setFormInput, setup})(Form);