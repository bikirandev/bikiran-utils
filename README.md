[![npm Version](https://img.shields.io/npm/v/@bikiran/utils.svg?style=flat-square)](https://www.npmjs.com/package/@bikiran/utils)
[![npm Downloads](https://img.shields.io/npm/dt/@bikiran/utils.svg?style=flat-square)](https://www.npmjs.com/package/@bikiran/utils)
[![GitHub License](https://img.shields.io/github/license/bikirandev/bikiran-utils.svg?style=flat-square)](https://github.com/bikirandev/bikiran-utils/blob/main/LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/bikirandev/bikiran-utils.svg?style=flat-square)](https://github.com/bikirandev/bikiran-utils/issues)
[![GitHub Stars](https://img.shields.io/github/stars/bikirandev/bikiran-utils.svg?style=flat-square)](https://github.com/bikirandev/bikiran-utils/stargazers)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/bikirandev/bikiran-utils.svg?style=flat-square)](https://github.com/bikirandev/bikiran-utils/commits/main)

## Overview

A collection of utility components specifically developed for our organization's internal projects. While primarily tailored to our needs, others may find some components useful.

⚠️ **Important Note**: This package was optimized for our specific use cases and may not work as expected in all projects. Use with caution.

## Dependencies

- `clsx`
- `tailwind-merge`
- `Next.js`

Perfect! Here's how you can update the **"Available Components"** section so that each component is a clickable item linking to its dedicated documentation page in your GitHub wiki:

---

## Available Components

Each component below links to its own documentation page for detailed usage:

1. [Pagination](https://github.com/bikirandev/bikiran-utils/wiki/02.-Pagination)
2. [FilterBarWrapper](https://github.com/bikirandev/bikiran-utils/wiki/03.-FilterBarWrapper)
3. [ServicesPopup](https://github.com/bikirandev/bikiran-utils/wiki/05.-ServicePopup)
4. [ButtonWrapper](https://github.com/bikirandev/bikiran-utils/wiki/04.-ButtonWrapper)
5. [CurrencySelector](https://github.com/bikirandev/bikiran-utils/wiki/06.-CurrencySelector)
6. [CustomSidebar](https://github.com/bikirandev/bikiran-utils/wiki/07.-CustomSidebar)
7. [PageLoading](https://github.com/bikirandev/bikiran-utils/wiki/08.-PageLoading)
8. [LoadingComp](https://github.com/bikirandev/bikiran-utils/wiki/09.-LoadingComp)
9. [CookiesAcceptPopup](https://github.com/bikirandev/bikiran-utils/wiki/10.-CookiesAcceptPopup)
10. [ProfileManage](https://github.com/bikirandev/bikiran-utils/wiki/11.-ProfileManage)
11. [TooltipUserInfo](https://github.com/bikirandev/bikiran-utils/wiki/12.-TooltipUserInfo)
12. [UserInfoComp](https://github.com/bikirandev/bikiran-utils/wiki/13.-UserInfoComp)

## Getting Started

### Installation

Install the package via **npm**:

```bash
npm install @bikiran/utils
```

Or via **yarn**:

```bash
yarn add @bikiran/utils
```

---

### How It Works

This package is designed to **seamlessly inherit your project’s Tailwind CSS theme**. It automatically uses your existing:

- **Primary/secondary colors**
- **Font families**
- **Spacing scale**
- **Other design tokens**

No extra configuration is needed—just ensure your `tailwind.config.js` is properly set up.

#### Example:

Your `tailwind.config.js` should define colors using CSS variables like this:

```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "var(--primary)",
        50: "var(--primary-50)",
        100: "var(--primary-100)",
        200: "var(--primary-200)",
        300: "var(--primary-300)",
        500: "var(--primary-500)",
        700: "var(--primary-700)",
        900: "var(--primary-900)",
      },
      secondary: {
        DEFAULT: "var(--secondary)",
        50: "var(--secondary-50)",
        100: "var(--secondary-100)",
        300: "var(--secondary-300)",
        500: "var(--secondary-500)",
        700: "var(--secondary-700)",
        900: "var(--secondary-900)",
      },
    },
  },
}
```

This setup allows all components—like `<ButtonWrapper>` and `<CurrencySelector>`—to **automatically inherit your color scheme** across different shades.

### Basic Usage

1. **Import Components**

   ```tsx
   import { ButtonWrapper, PageLoading } from "7502NPM-Bikiran-Utils";
   ```

2. **Use with Your Theme**
   ```tsx
   // Buttons will adopt your project's `primary`/`secondary` colors
   <ButtonWrapper variant="primary">Click Me</ButtonWrapper>
   ```

### Customization (Optional)

To override styles:

- Use `className` props (e.g., `<ButtonWrapper className="bg-red-500">`)
- Extend your Tailwind config (recommended for consistency)

### Requirements

- Next.js 14+
- Tailwind CSS v3+ (**must** have `primary`/`secondary` colors defined)

## Documentation

For complete documentation and usage examples, please see:
[Components Documentation](https://github.com/bikirandev/bikiran-utils/wiki/Home)

Sure! Here's just the **"How to Contribute"** section in Markdown:

## 🤝 How to Contribute

We welcome contributions! To contribute to the package :

1. **Fork the repository** and clone your fork locally.
2. **Create a new branch** for your feature or bugfix:
   ```
   git checkout -b my-feature-name
   ```
3. Make your changes in supporting files.
4. If you’re adding a feature or behavior, consider updating the docs or usage example.
5. Commit your changes:
   ```
   git commit -m "feat: add awesome feature"
   ```
6. Push to your fork:
   ```
   git push origin my-feature-name
   ```
7. **Open a Pull Request** with a clear title and description.

### 🧪 Before submitting:

- Run and test the component in your app.
- Check for console errors or style breakages.
- Use consistent naming and follow the existing code style.

Thanks for your contribution! ❤️

## License

MIT License

## Author

Developed by [Bikiran](https://bikiran.com/)

