import React from 'react';
import {connect} from 'react-redux';

const Trivia = (props) => {
  if (!props.isSetUp) {
    return <p>Loading...</p>
  }

  let text = null;
  if (props.isFetching) {
    text = "fetching..."
  } else if (props.trivia) {
    text = props.trivia
  } else if (props.error) {
    text = props.error;
  }

  return (
    <div id="trivia">
      <p>Your number: {props.number}</p>
      <p>{text}</p>
    </div>
  )
}

export default connect(
  state => ({
    isSetUp: state.isSetUp,
    number: state.number,
    trivia: state.trivia,
    error: state.error,
  }), {}
)(Trivia);