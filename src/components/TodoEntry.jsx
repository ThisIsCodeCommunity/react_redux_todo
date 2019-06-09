import React from 'react'
import { List, Divider } from 'semantic-ui-react'

const TodoEntry = (props) => {
  let todo = props.todo
  return (
    <>
      <List.Item>
        <List.Description as='small'>
          Due date: {todo.dueDate}
        </List.Description>
        <List.Header as='h2'>
          {todo.title}
        </List.Header>
        <List.Description>
          {todo.details}
        </List.Description>
      </List.Item>
      <Divider />
    </>
  )
}

export default TodoEntry
