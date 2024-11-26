import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "../components/tabs";

const meta = {
  title: "Example/Tabs",
  component: Tabs,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

/**
 * @see https://storybook.js.org/docs/get-started/setup
 */
export const Story: Story = {
  args: {
    navigation: [
      {
        current: false,
        href: "/",
        name: "Home",
      },
      {
        current: true,
        href: "/",
        name: "Blog",
      },
      {
        current: false,
        href: "/",
        name: "About",
      },
      {
        current: false,
        href: "/",
        name: "Contact",
      },
    ],
  },
};
