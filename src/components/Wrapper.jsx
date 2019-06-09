import React from 'react'
import { Container, Header } from 'semantic-ui-react'


const Wrapper = (props) => {
  return (
    <>
      <Container>
        <Header as='h2'>Another TODO app</Header>
        {props.children}
      </Container>
    </>
  )
}

export default Wrapper
