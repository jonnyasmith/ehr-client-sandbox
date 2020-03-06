/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import SplitView from '../components/SplitView'

const styles = css`
  min-height: 100vh;
  background: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  & h3 {
    padding: 1rem;
    font-size: 2rem;
  }
`

const SplitViewPage: React.FC = () => {
  return (
    <div css={styles}>
      <h3>Split View!!!</h3>
    </div>
  )
}

export default SplitViewPage
