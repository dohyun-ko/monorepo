import React, { useEffect, useState } from "react";
import { Area, Content, Flex, Grid, Text } from "@common/components";
import TodoItemRow from "@/components/todoItem/TodoItemRow";
import TodoItem from "@/types/TodoItem";

const HomePage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    setTodos([
      {
        uuid: "1",
        title: "Todo 1",
        content: "Todo 1 content",
        deadline: new Date(Date.now() + 1000 * 3600 * 24 * 3),
        requiredTime: new Date(1000 * 3600 * 3),
        completionTime: null,
        priority: 1,
      },
    ]);
  }, []);

  useEffect(() => {
    const sortedTodos = [...todos].sort((a, b) => {
      if (a.priority > b.priority) return -1;
      if (a.priority < b.priority) return 1;
      return 0;
    });

    setTodos(sortedTodos);
  }, [todos]);

  return (
    <Area>
      <Content width={"70%"}>
        <Flex width={"100%"} justifyContent={"center"}>
          <Text size={"2rem"}>Todo Stack</Text>
        </Flex>

        <Grid>
          {todos.map((todo) => (
            <TodoItemRow item={todo} />
          ))}
        </Grid>
      </Content>
    </Area>
  );
};

export default HomePage;
