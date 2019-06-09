import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'
import TodoEntry from './TodoEntry'
import Wrapper from './Wrapper';

class App extends Component {
  render() {
    let todoList = this.props.todos.map(todo => {
      return (
        <TodoEntry todo={todo} key={todo.id} />
      )
    })

    return (
      <>
        <Wrapper>
          <List>
            {todoList}
          </List>
        </Wrapper>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todo.todos
})



export default connect(mapStateToProps)(App);
