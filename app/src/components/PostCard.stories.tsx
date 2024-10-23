import type { Meta, StoryObj } from "@storybook/react";

import PostCard from "./PostCard";

const meta = {
  title: "Components/PostCard",
  component: PostCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PostCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "タイトル",
    description: "説明文です",
  },
};
