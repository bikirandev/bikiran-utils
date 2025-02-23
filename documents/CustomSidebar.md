# 7502NPM-Bikiran-Utils — CustomSidebar

A lightweight and flexible sidebar component that uses a modal-like approach to open or close the sidebar. It is part of the **7502NPM-Bikiran-Utils** package.

---

## Dependencies

1. **React**
2. **Tailwind CSS** or equivalent classes
3. **`cn` utility** (for conditional class names; replace it with your own utility if needed)
4. **`usePathname` hook** (provided via Next.js or your custom routing)
5. **`useTemplate` hook** (must provide `modalType`, `openModal`, `closeModal`, and `modalData`)

---

## IMPORTANT NOTE

1. **Modal Handling**: This component uses the `useTemplate` hook to manage modal states (`openModal`, `closeModal`, `modalType`, and `modalData`). Ensure your `useTemplate` hook is properly set up to handle these.
2. **Routing**: The `usePathname` hook is used to detect navigation changes. When the pathname changes, the sidebar automatically closes.
3. **Class Names**: The component uses Tailwind CSS. Replace or remove those classes if you have a different CSS setup.
4. **Icons**: The code references an `IconClose` component. Make sure to provide your own close icon if you don’t have it.

---

## Props and Usage

### Props

| Prop          | Type                                                                                                                | Description                                                                                                      | Default Value | Priority    |
| ------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------- | ----------- |
| `children`    | `ReactNode`                                                                                                         | The main content of the sidebar.                                                                                 | —             | ✅ Required |
| `className`   | `string`                                                                                                            | Additional classes to apply to the main content area.                                                            | —             | ❌ Optional |
| `usePathname` | `() => string`                                                                                                      | **Required** hook that returns the current pathname. Used to close the sidebar upon route changes.               | —             | ✅ Required |
| `useTemplate` | `() => { modalType: string; closeModal: () => void; openModal: (type: string, data: any) => void; modalData: any }` | **Required** hook for managing modal state. Must return `modalType`, `closeModal`, `openModal`, and `modalData`. | —             | ✅ Required |

---

### Usage

```tsx
import React from "react";
import CustomSidebar from "./path/to/CustomSidebar";

function usePathnameMock() {
  // Example hook returning a string
  return "/some/path";
}

function useTemplateMock() {
  return {
    modalType: "", // or "custom-sidebar"
    closeModal: () => console.log("closeModal called"),
    openModal: (type: string, data: any) =>
      console.log("openModal called with", type, data),
    modalData: {},
  };
}

const App = () => {
  return (
    <div>
      <CustomSidebar
        usePathname={usePathnameMock}
        useTemplate={useTemplateMock}
        className="bg-gray-50"
      >
        <h2 className="text-xl font-semibold">Sidebar Content Here</h2>
      </CustomSidebar>
    </div>
  );
};

export default App;
```

- Clicking on the sidebar’s toggle button will open or close the sidebar.
- The sidebar automatically closes on any route change (detected via `usePathname`).
- The `useTemplate` hook is responsible for managing `modalType` and other modal states.

---

# License

This component is provided under the **MIT License**.

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com/). Feel free to contribute!
