import { fn } from "@storybook/test";
import type { StoryObj, Meta } from "@storybook/react";

import HeaderMenu from "./HeaderMenu";

const meta: Meta<typeof HeaderMenu> = {
  title: "Components/HeaderMenu",
  component: HeaderMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof HeaderMenu>;

export const Basic: Story = {
  render: () => {
    return (
      <div className="max-w-5xl w-screen">
        <HeaderMenu />
      </div>
    );
  },
};
