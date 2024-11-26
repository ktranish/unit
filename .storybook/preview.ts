import type { Preview } from "@storybook/react";
import "../src/index.css";

/**
 * @see https://storybook.js.org/recipes/tailwindcss
 */
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
