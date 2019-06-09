import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List, Button } from 'semantic-ui-react'
import TodoEntry from './TodoEntry'
import Wrapper from './Wrapper';
import { dispatchMarkAsCompleted, filterTodos } from '../state/actions/todoActions'

class App extends Component {

  markAsCompleted(todo) {
    this.props.dispatchMarkAsCompleted(todo)
    // this.forceUpdate()
  }

  filterTodos() {
    let list = this.props.todos.map(todo => {
      // if (!todo.completed) {
        return (
          <TodoEntry todo={todo} key={todo.id} completedHandler={this.markAsCompleted.bind(this)} />
        )
      // }
    })
    return list
  }
  render() {
    let todoList = this.filterTodos()
    // let todos = this.props.todos
    // debugger

    return (
      <>
        <Wrapper>
          <List>
            {todoList}
          </List>
          <Button 
            onClick={() => this.props.filterTodos('all')}>
            All todos
          </Button>
          <Button 
            onClick={() => this.props.filterTodos()}>
            Active todos
          </Button>
        </Wrapper>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todo.collection,
})

export default connect(mapStateToProps, {dispatchMarkAsCompleted, filterTodos
})(App);
