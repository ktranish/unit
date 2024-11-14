# Unit

> A React-based design system built for consistency and flexibility, utilizing Tailwind CSS and utility-first styling.

## About

**Unit** is a flexible and scalable design system developed with React and Tailwind CSS. It provides a set of reusable UI components and utility classes to help build responsive, consistent, and maintainable web applications. This project follows utility-first principles to offer maximum customization with minimal configuration.

## Features

- **React Components**: Custom components designed for reusability and easy integration.
- **Tailwind CSS Integration**: Built-in support for Tailwind CSS, allowing quick styling with utility classes.
- **TypeScript**: Full TypeScript support for better type safety and developer experience.
- **Utility-first Styling**: Offers a range of configurable design tokens for spacing, typography, colors, and more.
- **Scalable Structure**: Organized file structure for easy navigation and scaling as the design system grows.

## Getting Started

### Installation

To install Unit, use `pnpm` (or `npm/yarn`) to add it to your project:

```bash
pnpm add @ktranish/unit
```

### Usage

1. Import the desired component(s) into your React project.
2. Use the `cn` utility to merge class names where needed (useful for custom styling with Tailwind classes).

Example usage:

```tsx
import React from 'react';
import { Button, cn } from '@ktranish/unit';

function App() {
  return (
    <div className={cn('p-4')}>
      <Button label="Click Me" />
    </div>
  );
}
```

## Development

### Building the Project

To build the project, ensure you have all dependencies installed. Then run:

```bash
pnpm build
```

### Linting & Formatting

This project uses ESLint for linting and Prettier for code formatting.

- **Lint**: Run `pnpm run lint` to check for linting errors.
- **Format**: Run `pnpm run prettier:format` to auto-format your code.

## Components

List of core components available in Unit (update with actual components as they’re added):

Each component supports Tailwind utility classes, making it easy to customize and extend.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
