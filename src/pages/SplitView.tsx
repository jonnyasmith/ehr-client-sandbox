/** @jsx jsx */
import React, { useState, useCallback } from "react";
import { css, jsx } from "@emotion/core";
import { Card, CardHeader, CardBody } from "@ltht-react/card";
import { CARD_LIST_ITEM_BACKGROUND_HOVER } from "@ltht-react/styles";

import SplitView, { MainPane, PreviewPane } from "../components/SplitView";

const SplitViewPage: React.FC = () => {
  const [preview, setPreview] = useState(false);

  const handleTaskClick = useCallback(
    (name: string) => {
      console.log("SplitViewPage ", name);
      setPreview(true);
    },
    [setPreview]
  );

  const handlePreviewClick = useCallback(() => {
    setPreview(false);
  }, [setPreview]);

  return (
    <SplitView>
      <MainPane preview={preview}>
        <Advice />
        <TaskList onClick={handleTaskClick} />
      </MainPane>
      <PreviewPane>
        {preview && <Form onClick={handlePreviewClick} />}
      </PreviewPane>
    </SplitView>
  );
};

const Form: React.FC<FormProps> = ({ onClick }) => {
  return (
    <Card>
      <CardBody>
        <div style={{ height: "500px" }} onClick={onClick}>
          Form
        </div>
      </CardBody>
    </Card>
  );
};

interface FormProps {
  onClick(): void;
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
  );
});

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
`;

const TaskList: React.FC<TaskProps> = React.memo(({ onClick }) => {
  return (
    <Card>
      <CardHeader>
        <h3>Task List</h3>
      </CardHeader>
      <CardBody>
        <ul css={taskStyles}>
          <TaskListItem name="Task 1" onClick={onClick} />
          <TaskListItem name="Task 2" onClick={onClick} />
          <TaskListItem name="Task 3" onClick={onClick} />
          <TaskListItem name="Task 4" onClick={onClick} />
          <TaskListItem name="Task 5" onClick={onClick} />
        </ul>
      </CardBody>
    </Card>
  );
});

interface TaskProps {
  onClick(item: string): void;
}

const TaskListItem: React.FC<ItemProps> = ({ name, onClick }) => {
  function handleClick(_e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    onClick(name);
  }
  return (
    <li role="menuitem" onClick={handleClick}>
      {name}
    </li>
  );
};

interface ItemProps extends TaskProps {
  name: string;
}

export default SplitViewPage;
