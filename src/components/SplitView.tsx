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

function debounce(fn: Function, ms: number) {
  let timer: ReturnType<typeof setTimeout>
  return () => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      // timer = null
      fn()
    }, ms)
  }
}

const SplitView: React.FC = ({ children }) => {
  return <main css={styles.root}>{children}</main>
}

export const MainPane: React.FC<MainProps> = ({ preview, children }) => {
  const $el = React.useRef<HTMLElement>(null)
  const [dimensions, setDimensions] = React.useState({
    fullWidth: window.innerWidth,
    mainWidth: $el.current?.clientWidth
  })

  React.useEffect(() => {
    setDimensions({
      fullWidth: window.innerWidth,
      mainWidth: $el.current?.clientWidth
    })
  }, [preview])

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        fullWidth: window.innerWidth,
        mainWidth: $el.current?.clientWidth
      })
    }, 300)

    window.addEventListener('resize', debouncedHandleResize)

    return () => window.removeEventListener('resize', debouncedHandleResize)
  })

  console.log(dimensions)

  const columnWrapper: any = {}
  const result = []
  const numberOfColumns = Math.floor(
    (preview
      ? dimensions.mainWidth || dimensions.fullWidth
      : dimensions.fullWidth) / 368
  )

  for (let i = 0; i < numberOfColumns; i++) {
    columnWrapper[`column${i}`] = []
  }

  React.Children.forEach(children, (child, index) => {
    const columnIndex = index % numberOfColumns
    columnWrapper[`column${columnIndex}`].push(<div key={index}>{child}</div>)
  })

  for (let i = 0; i < numberOfColumns; i++) {
    result.push(<Column key={i}>{columnWrapper[`column${i}`]}</Column>)
  }

  return (
    <section css={styles.main(preview, dimensions.fullWidth)} ref={$el}>
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
