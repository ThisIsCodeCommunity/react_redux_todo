const dispatchMarkAsCompleted = (todo) => ({
  type: 'MARK_AS_COMPLETED', 
  payload: todo 
})

const filterTodos = (options) => {
  return dispatch => {
    if (options === 'all') {
      dispatch({type: 'ALL_TODOS'})
    } else {
      dispatch({type: 'ACTIVE_TODOS'})
    }
  }
}

export { dispatchMarkAsCompleted, filterTodos }
