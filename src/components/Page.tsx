/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { TABLET_MEDIA_QUERY } from '@ltht-react/styles'

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0 0.5rem 0.5rem;

    & > div:last {
      padding-right: 0;
    }

    ${TABLET_MEDIA_QUERY} {
      flex-direction: row;
    }
  `,
  column: css`
    flex: 1;
    padding-right: 0.5rem;
  `
}

export const Container: React.FC = ({ children }) => {
  return <div css={styles.container}>{children}</div>
}

export const Column: React.FC = ({ children }) => {
  return <div css={styles.column}>{children}</div>
}
