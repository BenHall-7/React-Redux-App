import React from 'react';
import './App.css';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {reducer} from './reducers';
import Form from "./components/Form";
import Trivia from './components/Trivia';

function App() {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <Trivia />
      </div>
    </Provider>
  );
}

export default App;
