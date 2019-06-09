import React from 'react'
import Moment from 'react-moment';

import { Button } from 'semantic-ui-react'

const TodoControls = (props) => {
  return (
    <>
      {!props.todo.completed ?
        <Button
          primary
          size='tiny'
          content='Done'
          onClick={() => props.completedHandler(props.todo)}
        /> : <p>Completed at: <Moment unix format='YYYY-MM-DD HH:mm'>{props.todo.completedAt / 1000}</Moment></p>

      }

    </>
  )
}

export default TodoControls
