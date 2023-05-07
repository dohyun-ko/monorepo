import React from "react";
import styled from "styled-components";
import { Button, Flex, Text } from "@common/components";
import TodoItem from "@/types/TodoItem";
import keyboardArrowDown from "@/assets/icons/keyboardArrowDown.svg";
import keyboardDoubleArrowDown from "@/assets/icons/keyboardDoubleArrowDown.svg";

const TodoItemRowWrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px;

  border-radius: 8px;

  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;

interface TodoItemRowProps {
  item: TodoItem;
}

const TodoItemRow = ({ item }: TodoItemRowProps) => {
  return (
    <TodoItemRowWrapper>
      <Button>Done</Button>

      <Text>{item.title}</Text>

      <Flex>
        <Button>
          <img src={keyboardArrowDown} alt={"keyboardArrowDown"} />
        </Button>
        <Button>
          <img src={keyboardDoubleArrowDown} alt={"keyboardDoubleArrowDown"} />
        </Button>
      </Flex>
    </TodoItemRowWrapper>
  );
};

export default TodoItemRow;
