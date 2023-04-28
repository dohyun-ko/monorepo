import React from "react";
import FilledButton from "./FilledButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "packages/components/buttons/FilledButton",
  component: FilledButton,
} as ComponentMeta<typeof FilledButton>;

const Template: ComponentStory<typeof FilledButton> = (args) => (
  <FilledButton {...args} />
);

export const Small = Template.bind({});
Small.args = {
  children: "Button",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Button",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  children: "Button",
  size: "large",
};
