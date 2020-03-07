import React from 'react'
import { Card, CardHeader, CardBody } from '@ltht-react/card'

import SplitView, { MainPane, PreviewPane } from '../components/SplitView'

const SplitViewPage: React.FC = () => {
  return (
    <SplitView>
      <MainPane>
        <Advice />
        <TaskList />
      </MainPane>
      <PreviewPane>
        <Form />
      </PreviewPane>
    </SplitView>
  )
}

const Form: React.FC = () => {
  return (
    <Card>
      <CardBody>
        <div style={{ height: '500px' }}>Form</div>
      </CardBody>
    </Card>
  )
}

const Advice: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <h3>Nursing Assessment Advice</h3>
      </CardHeader>
      <CardBody>
        <dl>
          <dt>Advice One</dt>
          <dd>Do this</dd>
        </dl>
      </CardBody>
    </Card>
  )
}

const TaskList: React.FC = () => {
  function handleClick(e) {
    console.log(e)
  }
  return (
    <Card>
      <CardHeader>
        <h3>Task List</h3>
      </CardHeader>
      <CardBody>
        <ul>
          <TaskListItem name="Task 1" clickHandler={handleClick} />
          <TaskListItem name="Task 2" clickHandler={handleClick} />
          <TaskListItem name="Task 3" clickHandler={handleClick} />
          <TaskListItem name="Task 4" clickHandler={handleClick} />
          <TaskListItem name="Task 5" clickHandler={handleClick} />
        </ul>
      </CardBody>
    </Card>
  )
}

const TaskListItem: React.FC<ItemProps> = ({ name, clickHandler }) => {
  return (
    <li role="menuitem" onClick={(): void => clickHandler(name)}>
      {name}
    </li>
  )
}

interface ItemProps {
  name: string
  clickHandler(item: string): void
}

export default SplitViewPage
