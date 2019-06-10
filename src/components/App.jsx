import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List, Button } from 'semantic-ui-react'
import TodoEntry from './TodoEntry'
import Wrapper from './Wrapper';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
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
          <FullCalendar
            events={() => {
              let events = [];
              this.props.todos.forEach(todo => {
                events.push({
                  "title": todo.title,
                  "start": todo.start
                });
              })
              return events
            }}
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
          // events={this.props.todos}
          />

        </Wrapper>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todo.collection,
})

export default connect(mapStateToProps, {
  dispatchMarkAsCompleted, filterTodos
})(App);
