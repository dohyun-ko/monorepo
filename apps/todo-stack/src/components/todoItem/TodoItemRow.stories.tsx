import React from "react";
import TodoItemRow from "./TodoItemRow";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "apps/todo-stack/components/todoItem/TodoItemRow",
  component: TodoItemRow,
} as Meta<typeof TodoItemRow>;

const Template: StoryFn<typeof TodoItemRow> = (args) => (
  <TodoItemRow {...args} />
);

export const Default = Template.bind({});
