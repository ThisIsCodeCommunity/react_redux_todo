import React from 'react'
import { Responsive, List, Divider, Grid, Segment } from 'semantic-ui-react'
import TodoControls from './TodoControls'

const TodoEntry = (props) => {
  let todo = props.todo
  return (
    <>
      <List.Item>
        <Segment>
          <Grid stackable>
            <Grid.Column floated='left' width={5}>
              <List.Description as='small'>
                Due date: {todo.start}
              </List.Description>
              <List.Header as='h2'>
                {todo.title}
              </List.Header>
              <List.Description>
                {todo.details}
              </List.Description>
            </Grid.Column>
            <Grid.Column floated='right' width={5} verticalAlign='middle'>
              <TodoControls todo={props.todo} completedHandler={props.completedHandler}/>
            </Grid.Column>
          </Grid>
          <Responsive minWidth='768'>
            <Divider vertical content='Actions' />
          </Responsive>
        </Segment>
        <Divider />

      </List.Item>
    </>
  )
}

export default TodoEntry
