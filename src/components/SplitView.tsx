/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const styles = {
  root: css`
    flex: 1;
    display: flex;

    & > section {
      padding-left: 5px;
      padding-top: 5px;
    }
  `,
  main: (preview: boolean) => {
    return css`
      flex: 1;
      display: flex;
      ${preview && "flex-direction: column;"}

      & > div {
        ${!preview && "flex: 1;"}
      }
    `;
  },
  preview: css`
    flex: 1;
  `
};

const SplitView: React.FC = ({ children }) => {
  return <div css={styles.root}>{children}</div>;
};

export const MainPane: React.FC<MainProps> = ({ preview, children }) => {
  const wrapped = React.Children.map(children, (child, index) => (
    <div key={index}>{child}</div>
  ));
  return <section css={styles.main(preview)}>{wrapped}</section>;
};

interface MainProps {
  preview: boolean;
}

export const PreviewPane: React.FC = ({ children }) => {
  if (children === false) {
    return <React.Fragment></React.Fragment>;
  }

  return (
    <section css={styles.preview}>
      <div>{children}</div>
    </section>
  );
};

export default SplitView;
