/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Container, Column } from './Page'

const styles = {
  root: () => css`
    display: flex;
  `,
  main: (preview: boolean, width: number) => css`
    flex: 1;
    display: block;
    ${preview && width < 1024 && 'display: none;'}
  `,
  preview: () => css`
    flex: 1;
  `
}

const WIDGET_WIDTH = 400

function debounce(callback: Function, duration: number) {
  let timer: ReturnType<typeof setTimeout>
  return () => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      callback()
    }, duration)
  }
}

const SplitView: React.FC = ({ children }) => {
  return <main css={styles.root}>{children}</main>
}

export const MainPane: React.FC<MainProps> = ({ preview, children }) => {
  const $el = React.useRef<HTMLElement>(null)
  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWidth(window.innerWidth)
    }, 250)

    window.addEventListener('resize', debouncedHandleResize)

    return () => window.removeEventListener('resize', debouncedHandleResize)
  }, [setWidth])

  const columnWrapper: any = {}
  const result = []
  const numberOfWidgets = React.Children.count(children)
  let numberOfColumns =
    Math.floor((preview ? width / 2 : width) / WIDGET_WIDTH) || 1

  if (numberOfWidgets < numberOfColumns) {
    numberOfColumns = numberOfWidgets
  }

  for (let i = 0; i < numberOfColumns; i++) {
    columnWrapper[`column${i}`] = []
  }

  React.Children.forEach(children, (child, index) => {
    console.log(index, numberOfColumns)
    const columnIndex = index % numberOfColumns
    columnWrapper[`column${columnIndex}`].push(<div key={index}>{child}</div>)
  })

  for (let i = 0; i < numberOfColumns; i++) {
    result.push(<Column key={i}>{columnWrapper[`column${i}`]}</Column>)
  }

  return (
    <section css={styles.main(preview, width)} ref={$el}>
      <Container>{result}</Container>
    </section>
  )
}

interface MainProps {
  preview: boolean
}

export const PreviewPane: React.FC = ({ children }) => {
  if (children === false) {
    return <React.Fragment></React.Fragment>
  }

  return (
    <section css={styles.preview()}>
      <Container>
        <Column>
          <div>{children}</div>
        </Column>
      </Container>
    </section>
  )
}

export default SplitView
