# 7502NPM-Bikiran-Utils

## ButtonWrapper Component

A lightweight and reusable React button component that supports conditional styling and click handling. It is part of the 7502NPM-Bikiran-Utils package.

---

## Dependencies

**1. React**  
**2. clsx**  
**3. CSS Styling**

---

## IMPORTANT NOTE

### Styling & Class Name Management

This component relies on a CSS file (`style.css`) for its default styling, including the `hover_icon` class for hover effects. The conditional class names are managed using the custom `cn` utility.  
Ensure that:

- The `style.css` file is properly imported and configured in your project.
- The `cn` function is available from the specified path, or replace it with a similar utility such as [classnames](https://www.npmjs.com/package/classnames).

---

## Props and Usage

### Props

| prop      | type              | description                                   | default value | priority   |
| --------- | ----------------- | --------------------------------------------- | ------------- | ---------- |
| children  | `React.ReactNode` | Content to be rendered inside the button      | —             | ✅Required |
| active    | `boolean`         | Determines if the button has active styling   | `false`       | ❌Optional |
| className | `string`          | Additional CSS classes to apply to the button | —             | ❌Optional |
| onClick   | `() => void`      | Function to call when the button is clicked   | —             | ❌Optional |

---

### Usage

```tsx
import React from "react";
import ButtonWrapper from "./path/to/ButtonWrapper";

const App = () => {
  return (
    <div>
      <ButtonWrapper
        active={true}
        className="custom-button"
        onClick={() => console.log("Button clicked")}
      >
        Click Me
      </ButtonWrapper>
    </div>
  );
};

export default App;
```

## 🔗 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com/). Feel free to contribute!
