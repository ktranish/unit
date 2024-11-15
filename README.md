# Unit

> **A React-based design system built for consistency and flexibility, utilizing Tailwind CSS and utility-first styling.**

## About

**Unit** is a flexible and scalable design system developed with React and Tailwind CSS. It provides a set of reusable UI components, hooks, and utility classes to help build responsive, consistent, and maintainable web applications. This project follows utility-first principles to offer maximum customization with minimal configuration.

## Features

- **React Components**: Custom components designed for reusability and easy integration.
- **Tailwind CSS Integration**: Built-in support for Tailwind CSS, allowing quick styling with utility classes.
- **TypeScript**: Full TypeScript support for better type safety and developer experience.
- **Utility-first Styling**: Offers a range of configurable design tokens for spacing, typography, colors, and more.
- **Translation Hook**: Provides an easy-to-use translation hook (`useTranslation`) for multilingual support, with support for dynamic language loading.
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
import React from "react";
import { Button, cn } from "@ktranish/unit";

function App() {
  return (
    <div className={cn("p-4")}>
      <Button label="Click Me" />
    </div>
  );
}
```

## Tailwind Configuration

Unit includes a custom Tailwind configuration file (`tailwind.config.js`) that consumers can extend in their own projects. This allows your project’s Tailwind setup to seamlessly inherit Unit’s custom themes, spacing, colors, and other configurations.

To use Unit’s configuration, import it in your own `tailwind.config.js` file and extend it as shown below.

```js
// tailwind.config.js in the consumer project
const designSystemConfig = require("@ktranish/unit/tailwind.config");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@ktranish/unit/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...designSystemConfig.theme,
    },
  },
  plugins: [...designSystemConfig.plugins],
};
```

### Required Plugin Installation

To use the plugins from Unit’s configuration, make sure to install the following packages:

```bash
pnpm add -D @tailwindcss/forms @tailwindcss/typography
```

## Translation Setup

Unit includes a `getServerSideTranslations` utility function and `TranslationProvider` to support multilingual content. This feature works seamlessly with or without namespaces.

### With Namespaces

For projects that use namespaces (e.g., modular translations for `common`, `home`, etc.), you can specify the namespaces to load:

#### Example Directory Structure

```bash
locales/
├── en/
│   ├── common.json
│   ├── home.json
├── es/
│   ├── common.json
│   ├── home.json
```

#### Example Consumer Code

```tsx
import { getServerSideTranslations } from "@ktranish/unit";

export async function getServerSideProps(context) {
  const { locale = "en" } = context;

  // Load specific namespaces for the locale
  const translations = await getServerSideTranslations(locale, [
    "common",
    "home",
  ]);

  return {
    props: {
      locale,
      translations,
    },
  };
}

export default function HomePage({ translations }: { translations: any }) {
  return (
    <TranslationProvider translations={translations}>
      <Main />
    </TranslationProvider>
  );
}
```

### Without Namespaces

For projects that don’t use namespaces, the utility will automatically load all translation files in the specified locale directory.

#### Example Directory Structure

```bash
locales/
├── en.json
├── es.json
```

#### Example Consumer Code

```tsx
import { getServerSideTranslations } from "@ktranish/unit";

export async function getServerSideProps(context) {
  const { locale = "en" } = context;

  // Load all translations for the locale
  const translations = await getServerSideTranslations(locale);

  return {
    props: {
      locale,
      translations,
    },
  };
}

export default function HomePage({ translations }: { translations: any }) {
  return (
    <TranslationProvider translations={translations}>
      <Main />
    </TranslationProvider>
  );
}
```

### Custom Translation Path

If your translations are stored in a non-standard directory, you can use the `basePath` parameter to specify the root directory of your translations.

#### Custom Directory Structure

```bash
translations/
├── en/
│   ├── common.json
│   ├── home.json
├── es/
│   ├── common.json
│   ├── home.json
```

#### Example Consumer Code

```tsx
import { getServerSideTranslations } from "@ktranish/unit";
import path from "path";

export async function getServerSideProps(context) {
  const { locale = "en" } = context;

  // Specify a custom basePath for translations
  const translations = await getServerSideTranslations(
    locale,
    ["common", "home"],
    path.join(process.cwd(), "translations"),
  );

  return {
    props: {
      locale,
      translations,
    },
  };
}

export default function HomePage({ translations }: { translations: any }) {
  return (
    <TranslationProvider translations={translations}>
      <Main />
    </TranslationProvider>
  );
}
```

### Dynamic Language Loading

For larger applications, translations can be loaded dynamically based on the selected language. Consumers can store each language in a separate JSON file and load it as needed.

#### Example setup with JSON files:

Organize translations in `locales` directory as follows:

```bash
src/
├── locales/
│   ├── en.json
│   ├── es.json
│   └── fr.json
└── App.tsx
```

Each JSON file contains translations for one language. For example, `en.json`:

```json
{
  "welcome": "Welcome",
  "goodbye": "Goodbye"
}
```

Then, in `App.tsx`, dynamically load translations based on the selected language:

```tsx
import React, { useState, useEffect } from "react";
import { Button, TranslationProvider, useTranslation } from "@ktranish/unit";

const App = () => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState({});

  const loadTranslations = async (lang: string) => {
    const translations = await import(`./locales/${lang}.json`);
    setTranslations(translations);
  };

  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  const switchLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <TranslationProvider translations={translations}>
      <Welcome />
      <button onClick={switchLanguage}>
        Switch to {language === "en" ? "Spanish" : "English"}
      </button>
    </TranslationProvider>
  );
};

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <Button label={t("goodbye", "Click here")} />
    </div>
  );
};
```

This setup allows you to load only the necessary translations, keeping the app lightweight and efficient.

## Development

### Building the Project

To build the project, ensure you have all dependencies installed. Then run:

```bash
pnpm build
```

### Linting & Formatting

This project uses **ESLint** for linting and **Prettier** for code formatting.

- **Lint**: Run `pnpm run lint` to check for linting errors.
- **Format**: Run `pnpm run prettier:format` to auto-format your code.

## Components

List of core components available in Unit (update with actual components as they’re added):

Each component supports Tailwind utility classes, making it easy to customize and extend.

## Hooks

Unit includes several utility hooks to facilitate common patterns and functionality:

Each hook provides functionality designed to integrate smoothly with Unit’s components, enhancing the developer experience and making complex functionality easy to manage.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
