import type { Meta, StoryObj } from "@storybook/react";

import ThemeMenu from "./ThemeMenu";

const meta = {
  title: "Components/ThemeMenu",
  component: ThemeMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
