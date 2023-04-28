import React from "react";
import MaterialInput from "./MaterialInput";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "packages/components/inputs/MaterialInput",
  component: MaterialInput,
} as ComponentMeta<typeof MaterialInput>;

const Template: ComponentStory<typeof MaterialInput> = (args) => (
  <MaterialInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  inputProps: {},
};
