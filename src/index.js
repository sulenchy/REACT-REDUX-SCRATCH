import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import rootReducer from './reducers'
import App from './js/components/presentational/App'
import TodoApp from "./js/components/container/TodoApp"

const store = createStore(rootReducer, applyMiddleware(logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('create-todo-form')
)


