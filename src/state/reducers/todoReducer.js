import initialState from '../store/initialState'
import { Date } from 'core-js';

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MARK_AS_COMPLETED':
      let todos = []
      state.collection.forEach(todo => {
        if (todo === action.payload) {
          todo.completed = true
          todo.completedAt = Date.now()
        }
        todos.push(todo)
      })
      return {
        ...state,
        collection: todos
      };
    case 'ALL_TODOS':
      return initialState
    case 'ACTIVE_TODOS':
      let filteredTodos = state.collection.filter(todo =>
        todo.completed === false
      )
      return {
        ...state,
        collection: filteredTodos, visible: 'active'
      }
    default:
      return initialState
  }

}

export default todoReducer
