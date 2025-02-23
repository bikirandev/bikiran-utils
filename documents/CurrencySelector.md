# 7502NPM-Bikiran-Utils — CurrencySelector

A lightweight, flexible React component for selecting currencies from a dropdown list. This component either accepts a custom event handler for selection (via the `onClick` prop) or uses an internal handler (via the `useApp` hook) to update the current locale. Part of the **7502NPM-Bikiran-Utils** package.

---

## Dependencies

1. **React**
2. **TypeScript**
3. **Tailwind CSS** (or equivalent classes in your styling setup)
4. **`useApp` hook** that provides `currencies`, `locale`, and `handelChangeLocale`  
   (Make sure this hook is properly implemented and passed as a prop to `CurrencySelector`.)

---

## IMPORTANT NOTE

1. The component uses Tailwind CSS classes to style the dropdown. If you're not using Tailwind, replace or remove the relevant classes.
2. The `useApp` prop must return an object containing:
   - `currencies`: An array of currency objects (e.g., `[{ currency: "USD" }, { currency: "BDT" }]`).
   - `locale`: An object with a `currency` field representing the current locale currency.
   - `handelChangeLocale`: A function to update the currency in your app’s state.
3. If you provide the `onClick` prop, the component will **not** call `handelChangeLocale`. Instead, it will call your custom event handler.

---

## Props and Usage

### Props

| Prop        | Type                                                                                     |                                                                                                                                           | Default Value | Priority    |     |
| ----------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------- | --- |
| `children`  | `React.ReactNode`                                                                        | Optional children to render as the button content. If not provided, a default UI with text and arrow is used.                             | —             | ❌ Optional |
| `className` | `string`                                                                                 | Additional CSS classes to apply to the wrapper container.                                                                                 | —             | ❌ Optional |
| `onClick`   | `(currency: string) => void`                                                             | Custom handler to call when a currency is clicked. If provided, `handelChangeLocale` from the `useApp` hook is **not** called.            | —             | ❌ Optional |
| `value`     | `string`                                                                                 | Currently selected currency. If you provide `onClick`, this value is compared against the currency list to highlight the active currency. | —             | ❌ Optional |
| `useApp`    | `() => { currencies: any; locale: any; handelChangeLocale: (currency: string) => void }` | **Required** hook that returns the list of currencies, the current locale, and the default locale-changing function.                      | —             | ✅ Required |

---

### Usage

```tsx
import React from "react";
import CurrencySelector from "./path/to/CurrencySelector";

// Example custom useApp hook or state management
function useAppMock() {
  return {
    currencies: [
      { currency: "USD" },
      { currency: "BDT" },
      // ...add more currencies
    ],
    locale: { currency: "USD" },
    handelChangeLocale: (currency: string) => {
      console.log("Locale changed to:", currency);
      // handle locale/currency change in your app
    },
  };
}

const App = () => {
  // 1. Using the internal `handelChangeLocale` from `useApp`:

  return (
    <div>
      <CurrencySelector useApp={useAppMock} />
    </div>
  );
};

export default App;
```

#### With Custom Click Handler

If you wish to manage currency changes manually, provide the `onClick` prop and `value`. The `CurrencySelector` will then call your custom handler instead of `handelChangeLocale`:

```tsx
import React, { useState } from "react";
import CurrencySelector from "./path/to/CurrencySelector";

function useAppMock() {
  return {
    currencies: [{ currency: "USD" }, { currency: "BDT" }],
    locale: { currency: "USD" },
    handelChangeLocale: (currency: string) => {
      console.log("Default Handler:", currency);
    },
  };
}

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  return (
    <div>
      <CurrencySelector
        useApp={useAppMock}
        onClick={(currency) => {
          console.log("Custom handler called with:", currency);
          setSelectedCurrency(currency);
        }}
        value={selectedCurrency}
      />
    </div>
  );
};

export default App;
```

In this scenario, `CurrencySelector` will use your custom event handler instead of calling the hook’s `handelChangeLocale`.

---

# License

This component is provided under the **MIT License**.

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com/). Feel free to contribute!
