/** @jsx jsx */
import React, { useState, useCallback } from 'react'
import { css, jsx } from '@emotion/core'
import { Card, CardHeader, CardBody } from '@ltht-react/card'
import { CARD_LIST_ITEM_BACKGROUND_HOVER } from '@ltht-react/styles'

import SplitView, { MainPane, PreviewPane } from '../components/SplitView'

const SplitViewPage: React.FC = () => {
  const [preview, setPreview] = useState(false)

  const handleTaskClick = useCallback(() => {
    setPreview(true)
  }, [setPreview])

  const handlePreviewClick = useCallback(() => {
    setPreview(false)
  }, [setPreview])

  return (
    <SplitView>
      <MainPane preview={preview}>
        <Advice />
        <Advice />
        <Advice />
        <TaskList onClick={handleTaskClick} itemCount={10} />
        <TaskList onClick={handleTaskClick} itemCount={25} />
        <TaskList onClick={handleTaskClick} itemCount={20} />
      </MainPane>
      <PreviewPane>
        {preview && <Form onClick={handlePreviewClick} />}
      </PreviewPane>
    </SplitView>
  )
}

const formStyles = css`
  height: 91vh;
  position: relative;
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
`

const Form: React.FC<FormProps> = ({ onClick }) => {
  function handleClick(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    onClick()
  }
  return (
    <Card>
      <CardBody>
        <button
          style={{ padding: '0.5rem 1rem', marginBottom: '1rem' }}
          onClick={handleClick}
        >
          Close
        </button>
        <input
          type="text"
          style={{
            float: 'right',
            marginRight: '0.5rem',
            height: '26px'
          }}
        />
        <div id="map-container" css={formStyles}>
          <iframe
            src="https://en.wikipedia.org/wiki/React_(web_framework)"
            style={{
              border: '0',
              position: 'absolute',
              height: '100%',
              width: '98%'
            }}
            title="Map"
          ></iframe>
        </div>
      </CardBody>
    </Card>
  )
}

interface FormProps {
  onClick(): void
}

const Advice: React.FC = React.memo(() => {
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
})

const taskStyles = css`
  list-style: none;

  & li {
    border-top: 1px solid #b0b0b0;
    padding: 0.5rem 0.5rem 0.5rem 0;
  }
  & li:hover {
    cursor: pointer;
    background: ${CARD_LIST_ITEM_BACKGROUND_HOVER};
  }
`

const TaskList: React.FC<TaskProps> = React.memo(({ onClick, itemCount }) => {
  var rows = []
  for (var i = 0; i < itemCount; i++) {
    rows.push(<TaskListItem key={i} name={`Task ${i}`} onClick={onClick} />)
  }
  return (
    <Card>
      <CardHeader>
        <h3>Task List</h3>
      </CardHeader>
      <CardBody>
        <ul css={taskStyles}>{rows}</ul>
      </CardBody>
    </Card>
  )
})

interface TaskProps {
  itemCount: number
  onClick(item: string): void
}

const TaskListItem: React.FC<ItemProps> = ({ name, onClick }) => {
  function handleClick(_e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    onClick(name)
  }
  return (
    <li role="menuitem" onClick={handleClick}>
      {name}
    </li>
  )
}

interface ItemProps {
  name: string
  onClick(item: string): void
}

export default SplitViewPage
