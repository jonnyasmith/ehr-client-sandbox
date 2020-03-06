import * as React from 'react'
import './styles.css'
import { Card, CardHeader, CardBody } from '@ltht-react/card'
import { Container, Column } from './components/Page'

export default function App() {
  return (
    <Container>
      <Column>
        <Card>
          <CardHeader>
            <h3>Hello</h3>
          </CardHeader>
          <CardBody>World</CardBody>
        </Card>
      </Column>
    </Container>
  )
}
