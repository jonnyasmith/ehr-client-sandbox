/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'

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

  & a {
    color: #61dafb;
    padding-bottom: 0.4rem;
    font-size: 1.4rem;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`

const NotFound: React.FC = () => {
  return (
    <main css={styles}>
      <h3>Layouts</h3>
      <Link to="/split-view">Split View</Link>
    </main>
  )
}

export default NotFound
