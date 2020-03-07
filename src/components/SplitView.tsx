/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const styles = {
  root: css`
    flex: 1;
    display: flex;

    & > section {
      padding-left: 5px;
      padding-top: 5px;
    }
  `,
  main: css`
    flex: 1;
    display: flex;
    background: blue;

    & > div {
      flex: 1;
    }
  `,
  preview: css`
    flex: 1;
    background: yellow;
  `
}

const SplitView: React.FC = ({ children }) => {
  return <div css={styles.root}>{children}</div>
}

export const MainPane: React.FC = ({ children }) => {
  const wrapped = React.Children.map(children, (child, index) => (
    <div key={index}>{child}</div>
  ))
  return <section css={styles.main}>{wrapped}</section>
}

export const PreviewPane: React.FC = ({ children }) => {
  console.log(children)
  return (
    <section css={styles.preview}>
      <div>{children}</div>
    </section>
  )
}

export default SplitView
