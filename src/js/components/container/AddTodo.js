import React from 'react'
import ReactDOM from "react-dom";
import { connect } from 'react-redux'
import { addTodo } from '../../../actions'
import App from '../presentational/App';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}


// const wrapper = document.getElementById("create-article-form");
// wrapper ? ReactDOM.render(<App />, wrapper) : false;

export default connect()(AddTodo)