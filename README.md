[![npm Version](https://img.shields.io/npm/v/@bikiran/utils.svg?style=flat-square)](https://www.npmjs.com/package/@bikiran/utils)[![npm Version](https://img.shields.io/npm/v/@bikiran/utils.svg?style=flat-square)](https://www.npmjs.com/package/@bikiran/utils)

[![npm Downloads](https://img.shields.io/npm/dt/@bikiran/utils.svg?style=flat-square)](https://www.npmjs.com/package/@bikiran/utils)[![npm Downloads](https://img.shields.io/npm/dt/@bikiran/utils.svg?style=flat-square)](https://www.npmjs.com/package/@bikiran/utils)

[![GitHub License](https://img.shields.io/github/license/bikirandev/bikiran-utils.svg?style=flat-square)](https://github.com/bikirandev/bikiran-utils/blob/main/LICENSE)[![GitHub License](https://img.shields.io/github/license/bikirandev/bikiran-utils.svg?style=flat-square)](https://github.com/bikirandev/bikiran-utils/blob/main/LICENSE)

[![GitHub Issues](https://img.shields.io/github/issues/bikirandev/bikiran-utils.svg?style=flat-square)](https://github.com/bikirandev/bikiran-utils/issues)[![GitHub Issues](https://img.shields.io/github/issues/bikirandev/bikiran-utils.svg?style=flat-square)](https://github.com/bikirandev/bikiran-utils/issues)

[![GitHub Stars](https://img.shields.io/github/stars/bikirandev/bikiran-utils.svg?style=flat-square)](https://github.com/bikirandev/bikiran-utils/stargazers)[![GitHub Stars](https://img.shields.io/github/stars/bikirandev/bikiran-utils.svg?style=flat-square)](https://github.com/bikirandev/bikiran-utils/stargazers)

[![GitHub Last Commit](https://img.shields.io/github/last-commit/bikirandev/bikiran-utils.svg?style=flat-square)](https://github.com/bikirandev/bikiran-utils/commits/main)[![GitHub Last Commit](https://img.shields.io/github/last-commit/bikirandev/bikiran-utils.svg?style=flat-square)](https://github.com/bikirandev/bikiran-utils/commits/main)

# @bikiran/utils## Overview

A comprehensive collection of **React components** and **utility functions** specifically developed for modern web applications. This package provides a robust set of UI components, helper functions, and utilities designed to accelerate development while maintaining consistency and performance.A collection of utility components specifically developed for our organization's internal projects. While primarily tailored to our needs, others may find some components useful.

## 🌟 Overview⚠️ **Important Note**: This package was optimized for our specific use cases and may not work as expected in all projects. Use with caution.

A collection of utility components specifically developed for our organization's internal projects. While primarily tailored to our needs, others may find some components useful.## Dependencies

⚠️ **Important Note**: This package was optimized for our specific use cases and may not work as expected in all projects. Use with caution.- `clsx`

- `tailwind-merge`

## ✨ Key Features- `Next.js`

- **🎨 UI Components**: Pre-built React components with consistent styling## Peer Dependencies

- **🛠️ Utility Functions**: Helper functions for common operations

- **📱 Responsive Design**: Mobile-first, responsive componentsThe following packages are required to be installed in your project:

- **🎯 Theme Integration**: Seamlessly inherits your Tailwind CSS theme

- **⚡ Performance Optimized**: Lightweight and efficient components- `react` (^19.1.0)

- **📦 TypeScript Support**: Full TypeScript definitions included- `react-dom` (^19.1.0)

- **🔧 Configurable**: Highly customizable with sensible defaults- `dayjs` (^1.11.0) - Used for date/time utilities

## 📦 What's IncludedMake sure to install these peer dependencies in your project:

### 🧩 UI Components (15)```bash

- **Navigation & Layout**: Custom Sidebar, Header components, Project Selectornpm install react react-dom dayjs

- **User Interface**: Profile Management, User Info, Tooltip components ```

- **Interactive Elements**: Button Wrapper, Currency Selector, Filter Wrapper

- **Feedback Components**: Loading states, Page Loading, Cookies popupPerfect! Here's how you can update the **"Available Components"** section so that each component is a clickable item linking to its dedicated documentation page in your GitHub wiki:

- **Service Integration**: Services Popup with app listings

- **Data Display**: Pagination, Information Tooltip---

- **Utility Widgets**: Copy Wrapper for easy content copying

## Available Components

### ⚙️ Utility Functions (11+)

- **Date & Time**: Date formatting, time calculations with dayjs integrationEach component below links to its own documentation page for detailed usage:

- **Text Processing**: String capitalization, copy-to-clipboard functionality

- **Data Structures**: Hash generation, mathematical operations1. [Pagination](https://github.com/bikirandev/bikiran-utils/wiki/02.-Pagination)

- **Environment**: URL generation, domain management2. [FilterBarWrapper](https://github.com/bikirandev/bikiran-utils/wiki/03.-FilterBarWrapper)

- **Styling**: Class name merging with Tailwind CSS3. [ServicesPopup](https://github.com/bikirandev/bikiran-utils/wiki/05.-ServicePopup)

- **State Management**: Cookie handling, local storage utilities4. [ButtonWrapper](https://github.com/bikirandev/bikiran-utils/wiki/04.-ButtonWrapper)

- **Type Safety**: TypeScript definitions and type guards5. [CurrencySelector](https://github.com/bikirandev/bikiran-utils/wiki/06.-CurrencySelector)

6. [CustomSidebar](https://github.com/bikirandev/bikiran-utils/wiki/07.-CustomSidebar)

## 🏗️ Dependencies7. [PageLoading](https://github.com/bikirandev/bikiran-utils/wiki/08.-PageLoading)

8. [LoadingComp](https://github.com/bikirandev/bikiran-utils/wiki/09.-LoadingComp)

### Core Dependencies9. [CookiesAcceptPopup](https://github.com/bikirandev/bikiran-utils/wiki/10.-CookiesAcceptPopup)

- `clsx` - Conditional class name utility10. [ProfileManage](https://github.com/bikirandev/bikiran-utils/wiki/11.-ProfileManage)

- `tailwind-merge` - Tailwind CSS class merging11. [TooltipUserInfo](https://github.com/bikirandev/bikiran-utils/wiki/12.-TooltipUserInfo)

- `Next.js` - React framework (recommended)12. [UserInfoComp](https://github.com/bikirandev/bikiran-utils/wiki/13.-UserInfoComp)

### Peer Dependencies## Getting Started

The following packages are required to be installed in your project:### Installation

- `react` (^19.1.0) - React libraryInstall the package via **npm**:

- `react-dom` (^19.1.0) - React DOM rendering

- `dayjs` (^1.11.0) - Date/time manipulation and formatting```bash

npm install @bikiran/utils

**Install peer dependencies:**```

```````bashOr via **yarn**:

npm install react react-dom dayjs

``````bash

yarn add @bikiran/utils

## 🚀 Available Components```



Each component below links to its own documentation page for detailed usage:---



### 📋 **Navigation & Layout**### How It Works

1. [CustomSidebar](https://github.com/bikirandev/bikiran-utils/wiki/07.-CustomSidebar) - Responsive sidebar with navigation

2. [ProjectSelector](https://github.com/bikirandev/bikiran-utils/wiki/ProjectSelector) - Project selection dropdownThis package is designed to **seamlessly inherit your project’s Tailwind CSS theme**. It automatically uses your existing:



### 👤 **User & Profile**  - **Primary/secondary colors**

3. [ProfileManage](https://github.com/bikirandev/bikiran-utils/wiki/11.-ProfileManage) - Complete profile management system- **Font families**

4. [UserInfoComp](https://github.com/bikirandev/bikiran-utils/wiki/13.-UserInfoComp) - User information display- **Spacing scale**

5. [TooltipUserInfo](https://github.com/bikirandev/bikiran-utils/wiki/12.-TooltipUserInfo) - User info in tooltip format- **Other design tokens**



### 🎛️ **Interactive Controls**No extra configuration is needed—just ensure your `tailwind.config.js` is properly set up.

6. [ButtonWrapper](https://github.com/bikirandev/bikiran-utils/wiki/04.-ButtonWrapper) - Enhanced button component

7. [CurrencySelector](https://github.com/bikirandev/bikiran-utils/wiki/06.-CurrencySelector) - Currency selection dropdown#### Example:

8. [FilterBarWrapper](https://github.com/bikirandev/bikiran-utils/wiki/03.-FilterBarWrapper) - Advanced filtering interface

Your `tailwind.config.js` should define colors using CSS variables like this:

### 📄 **Data & Display**

9. [Pagination](https://github.com/bikirandev/bikiran-utils/wiki/02.-Pagination) - Pagination controls```js

10. [InformationTooltip](https://github.com/bikirandev/bikiran-utils/wiki/InformationTooltip) - Information tooltipstheme: {

11. [CopyWrapper](https://github.com/bikirandev/bikiran-utils/wiki/CopyWrapper) - Copy-to-clipboard functionality  extend: {

    colors: {

### ⏳ **Loading & Feedback**      primary: {

12. [PageLoading](https://github.com/bikirandev/bikiran-utils/wiki/08.-PageLoading) - Full-page loading state        DEFAULT: "var(--primary)",

13. [LoadingComp](https://github.com/bikirandev/bikiran-utils/wiki/09.-LoadingComp) - Inline loading component        50: "var(--primary-50)",

14. [CookiesAcceptPopup](https://github.com/bikirandev/bikiran-utils/wiki/10.-CookiesAcceptPopup) - GDPR cookie consent        100: "var(--primary-100)",

        200: "var(--primary-200)",

### 🔗 **Integration & Services**        300: "var(--primary-300)",

15. [ServicesPopup](https://github.com/bikirandev/bikiran-utils/wiki/05.-ServicePopup) - Service app launcher        500: "var(--primary-500)",

        700: "var(--primary-700)",

## 📚 Getting Started        900: "var(--primary-900)",

      },

### Installation      secondary: {

        DEFAULT: "var(--secondary)",

Install the package via **npm**:        50: "var(--secondary-50)",

        100: "var(--secondary-100)",

```bash        300: "var(--secondary-300)",

npm install @bikiran/utils        500: "var(--secondary-500)",

```        700: "var(--secondary-700)",

        900: "var(--secondary-900)",

Or via **yarn**:      },

    },

```bash  },

yarn add @bikiran/utils}

```````

Or via **pnpm**:This setup allows all components—like `<ButtonWrapper>` and `<CurrencySelector>`—to **automatically inherit your color scheme** across different shades.

````bash### Basic Usage

pnpm add @bikiran/utils

```1. **Import Components**



---   ```tsx

   import { ButtonWrapper, PageLoading } from "7502NPM-Bikiran-Utils";

### 🎨 How It Works   ```



This package is designed to **seamlessly inherit your project's Tailwind CSS theme**. It automatically uses your existing:2. **Use with Your Theme**

   ```tsx

- **Primary/secondary colors**   // Buttons will adopt your project's `primary`/`secondary` colors

- **Font families**     <ButtonWrapper variant="primary">Click Me</ButtonWrapper>

- **Spacing scale**   ```

- **Other design tokens**

### Customization (Optional)

No extra configuration is needed—just ensure your `tailwind.config.js` is properly set up.

To override styles:

#### Example Configuration:

- Use `className` props (e.g., `<ButtonWrapper className="bg-red-500">`)

Your `tailwind.config.js` should define colors using CSS variables like this:- Extend your Tailwind config (recommended for consistency)



```js### Requirements

module.exports = {

  theme: {- Next.js 14+

    extend: {- Tailwind CSS v3+ (**must** have `primary`/`secondary` colors defined)

      colors: {

        primary: {## Documentation

          DEFAULT: "var(--primary)",

          50: "var(--primary-50)",For complete documentation and usage examples, please see:

          100: "var(--primary-100)",[Components Documentation](https://github.com/bikirandev/bikiran-utils/wiki/Home)

          200: "var(--primary-200)",

          300: "var(--primary-300)",Sure! Here's just the **"How to Contribute"** section in Markdown:

          500: "var(--primary-500)",

          700: "var(--primary-700)",## 🤝 How to Contribute

          900: "var(--primary-900)",

        },We welcome contributions! To contribute to the package :

        secondary: {

          DEFAULT: "var(--secondary)",1. **Fork the repository** and clone your fork locally.

          50: "var(--secondary-50)",2. **Create a new branch** for your feature or bugfix:

          100: "var(--secondary-100)",   ```

          300: "var(--secondary-300)",   git checkout -b my-feature-name

          500: "var(--secondary-500)",   ```

          700: "var(--secondary-700)",3. Make your changes in supporting files.

          900: "var(--secondary-900)",4. If you’re adding a feature or behavior, consider updating the docs or usage example.

        },5. Commit your changes:

      },   ```

    },   git commit -m "feat: add awesome feature"

  },   ```

  plugins: [],6. Push to your fork:

}   ```

```   git push origin my-feature-name

````

This setup allows all components—like `<ButtonWrapper>` and `<CurrencySelector>`—to **automatically inherit your color scheme** across different shades.7. **Open a Pull Request** with a clear title and description.

### 🔧 Basic Usage### 🧪 Before submitting:

1. **Import Components**- Run and test the component in your app.

- Check for console errors or style breakages.

  ````tsx- Use consistent naming and follow the existing code style.

  import {

    ButtonWrapper, Thanks for your contribution! ❤️

    PageLoading,

    UserInfoComp,## License

    CopyWrapper,

    Pagination MIT License

  } from "@bikiran/utils";

  ```## Author
  ````

2. **Import Utility Functions**Developed by [Bikiran](https://bikiran.com/)

   ```tsx
   import {
     GetDate,
     GetTime,
     timeAgo,
     capitalizeFirstLetter,
   } from "@bikiran/utils";
   ```

3. **Use with Your Theme**

   ```tsx
   // Components automatically adopt your project's colors
   <ButtonWrapper variant="primary">Click Me</ButtonWrapper>;

   // Utility functions work independently
   const formattedDate = GetDate(Date.now() / 1000, "DD MMM YYYY");
   ```

### 🎛️ Customization (Optional)

To override default styles:

- **Use `className` props**: `<ButtonWrapper className="bg-red-500 hover:bg-red-600">`
- **Extend your Tailwind config**: Recommended for maintaining consistency
- **CSS custom properties**: Override CSS variables in your global styles

### 📋 Requirements

- **React** 19.1.0+
- **Next.js** 14+ (recommended)
- **Tailwind CSS** v3+ with `primary`/`secondary` colors defined
- **dayjs** 1.11.0+ for date utilities

## 🔧 Component Examples

### Quick Examples

```tsx
// Profile with user information
<UserInfoComp
  name="John Doe"
  email="john@example.com"
  photoUrl="https://example.com/photo.jpg"
  ImageComponent={Image}
/>

// Copy functionality
<CopyWrapper content="Copy this text">
  Click to copy
</CopyWrapper>

// Loading states
{loading && <PageLoading />}
{processing && <LoadingComp />}

// Navigation
<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => setCurrentPage(page)}
/>
```

### Advanced Usage

```tsx
// Complete profile management
<ProfileManage
  LinkComponent={Link}
  ImageComponent={Image}
  AuthCompWrapper={AuthWrapper}
  authFn={() => ({
    authInfo: user,
    logOut: handleLogout,
    loginUrl: "/login"
  })}
/>

// Service popup with apps
<ServicesPopup
  staticAppLogo="/logo.png"
  appsData={serviceApps}
  LinkComponent={Link}
  ImageComponent={Image}
/>
```

## 🛠️ Utility Functions

### Date & Time Utilities

```tsx
import { GetDate, GetTime, timeAgo, timeRemaining } from "@bikiran/utils";

// Format dates
const formatted = GetDate(timestamp, "DD MMM YYYY"); // "07 Oct 2025"
const time = GetTime(timestamp, "HH:mm A"); // "02:30 PM"

// Relative time
const relative = timeAgo(timestamp); // "2 hours ago"
const remaining = timeRemaining(futureTimestamp); // "3 days remaining"
```

### Text & Data Utilities

```tsx
import { capitalizeFirstLetter, Copy } from "@bikiran/utils";

// Text processing
const capitalized = capitalizeFirstLetter("hello world"); // "Hello world"

// Copy functionality (React hook)
const MyCopyComponent = () => {
  const { copy, isCopied } = Copy();

  return (
    <button onClick={() => copy("Text to copy")}>
      {isCopied ? "Copied!" : "Copy Text"}
    </button>
  );
};
```

### CSS & Styling

```tsx
import { cn } from "@bikiran/utils";

// Merge Tailwind classes efficiently
const buttonClasses = cn(
  "px-4 py-2 rounded",
  isActive && "bg-blue-500",
  isDisabled && "opacity-50 cursor-not-allowed",
);
```

## 📖 Documentation

For complete documentation and usage examples, please see:
[**📚 Components Documentation**](https://github.com/bikirandev/bikiran-utils/wiki/Home)

### 🔗 Quick Links

- [Installation Guide](https://github.com/bikirandev/bikiran-utils/wiki/Installation)
- [Component API Reference](https://github.com/bikirandev/bikiran-utils/wiki/Components)
- [Utility Functions](https://github.com/bikirandev/bikiran-utils/wiki/Utilities)
- [Examples & Demos](https://github.com/bikirandev/bikiran-utils/wiki/Examples)

## 🤝 How to Contribute

We welcome contributions! To contribute to the package:

1. **Fork the repository** and clone your fork locally
2. **Create a new branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/my-awesome-feature
   ```
3. **Make your changes** in supporting files
4. **Add tests** and update documentation if needed
5. **Test your changes** thoroughly
6. **Commit your changes** with descriptive messages:
   ```bash
   git commit -m "feat: add awesome new feature"
   ```
7. **Push to your fork** and create a Pull Request:
   ```bash
   git push origin feature/my-awesome-feature
   ```

### 🧪 Before Submitting

- ✅ Run tests and ensure all pass
- ✅ Test components in a real application
- ✅ Check for console errors or style conflicts
- ✅ Follow existing code style and naming conventions
- ✅ Update documentation for new features
- ✅ Add TypeScript definitions for new exports

### 📝 Contribution Guidelines

- **Bug Reports**: Use GitHub Issues with detailed reproduction steps
- **Feature Requests**: Discuss in Issues before implementing
- **Code Style**: Follow existing patterns and use TypeScript
- **Testing**: Add tests for new functionality
- **Documentation**: Update README and wiki documentation

Thanks for your contribution! ❤️

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Developed by [Bikiran](https://bikiran.com/)**

- 🌐 Website: [bikiran.com](https://bikiran.com/)
- 📧 Email: [Contact](https://bikiran.com/contact)
- 🐙 GitHub: [@bikirandev](https://github.com/bikirandev)

---

<div align="center">

**Made with ❤️ for the React community**

[⭐ Star this repo](https://github.com/bikirandev/bikiran-utils) • [🐛 Report Bug](https://github.com/bikirandev/bikiran-utils/issues) • [💡 Request Feature](https://github.com/bikirandev/bikiran-utils/issues/new)

</div>

---

## 🏢 About Bikiran

**[Bikiran](https://bikiran.com/)** is a software development and cloud infrastructure company founded in 2012, headquartered in Khulna, Bangladesh. With 15,000+ clients and over a decade of experience, Bikiran builds and operates a suite of products spanning domain services, cloud hosting, app deployment, workflow automation, and developer tools.

| SL  | Topic        | Product                                                              | Description                                             |
| --- | ------------ | -------------------------------------------------------------------- | ------------------------------------------------------- |
| 1   | Website      | [Bikiran](https://bikiran.com/)                                      | Main platform — Domain, hosting & cloud services        |
| 2   | Website      | [Edusoft](https://www.edusoft.com.bd/)                               | Education management software for institutions          |
| 3   | Website      | [n8n Clouds](https://n8nclouds.com/)                                 | Managed n8n workflow automation hosting                 |
| 4   | Website      | [Timestamp Zone](https://www.timestamp.zone/)                        | Unix timestamp converter & timezone tool                |
| 5   | Website      | [PDFpi](https://pdfpi.bikiran.com/)                                  | Online PDF processing & manipulation tool               |
| 6   | Website      | [Blog](https://blog.bikiran.com/)                                    | Technical articles, guides & tutorials                  |
| 7   | Website      | [Support](https://support.bikiran.com/)                              | 24/7 customer support portal                            |
| 8   | Website      | [Probackup](https://probackup.bikiran.com/)                          | Automated database backup for SQL, PostgreSQL & MongoDB |
| 9   | Service      | [Domain](https://www.bikiran.com/domain)                             | Domain registration, transfer & DNS management          |
| 10  | Service      | [Hosting](https://www.bikiran.com/services/hosting/web)              | Web, app & email hosting on NVMe SSD                    |
| 11  | Service      | Email & SMS                                                          | Bulk email & SMS notification service                   |
| 12  | npm          | [Chronopicks](https://www.npmjs.com/package/@bikiran/chronopick)     | Date & time picker React component                      |
| 13  | npm          | [Rich Editor](https://www.npmjs.com/package/@bikiran/editor)         | WYSIWYG rich text editor for React                      |
| 14  | npm          | [Dropdown](https://www.npmjs.com/package/bik-dropdown)               | Project selector dropdown component                     |
| 15  | npm          | [Button](https://www.npmjs.com/package/@bikiran/button)              | Reusable React button component library                 |
| 16  | npm          | [Electron Boilerplate](https://www.npmjs.com/package/create-edx-app) | CLI to scaffold Electron.js project templates           |
| 17  | NuGet        | [Bkash](https://www.nuget.org/packages/Bikiran.Payment.Bkash)        | bKash payment gateway integration for .NET              |
| 18  | NuGet        | [Bikiran Engine](https://www.nuget.org/packages/Bikiran.Engine)      | Core .NET engine library for Bikiran services           |
| 19  | Open Source  | [PDFpi](https://github.com/bikirandev/pdfpi)                         | PDF processing tool — open source                       |
| 20  | Open Source  | [Bikiran Engine](https://github.com/bikirandev/Bikiran.Engine)       | Core .NET engine — open source                          |
| 21  | Open Source  | [Drive CLI](https://github.com/bikirandev/DriveCLI)                  | CLI tool to manage Google Drive from terminal           |
| 22  | Docker       | [Pgsql](https://github.com/bikirandev/docker-pgsql)                  | Docker setup for PostgreSQL                             |
| 23  | Docker       | [n8n](https://github.com/bikirandev/docker-n8n)                      | Docker setup for n8n automation                         |
| 24  | Docker       | [Pgadmin](https://github.com/bikirandev/docker-pgadmin)              | Docker setup for pgAdmin                                |
| 25  | Social Media | [LinkedIn](https://www.linkedin.com/company/bikiran12)               | Bikiran on LinkedIn                                     |
| 26  | Social Media | [Facebook](https://www.facebook.com/bikiran12)                       | Bikiran on Facebook                                     |
| 27  | Social Media | [YouTube](https://www.youtube.com/@bikiranofficial)                  | Bikiran on YouTube                                      |
| 28  | Social Media | [FB n8nClouds](https://www.facebook.com/n8nclouds)                   | n8n Clouds on Facebook                                  |
