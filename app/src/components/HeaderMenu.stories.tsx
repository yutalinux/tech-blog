import type { StoryObj, Meta } from "@storybook/react";

import HeaderMenu from "./HeaderMenu";

const meta: Meta<typeof HeaderMenu> = {
  title: "Components/HeaderMenu",
  component: HeaderMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeaderMenu>;

export const Default: Story = {};
