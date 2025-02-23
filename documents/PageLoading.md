# 7502NPM-Bikiran-Utils — PageLoading

A simple, full-page loading component that covers the entire screen and displays a rotating circular SVG animation. It is part of the **7502NPM-Bikiran-Utils** package.

---

## Dependencies

1. **React**
2. **Tailwind CSS** (or equivalent classes)

---

## IMPORTANT NOTE

1. **Full Page Overlay**: Uses Tailwind classes to cover the entire screen (`size-full`) and position itself on top (`z-50`). If you’re not using Tailwind, replace or supplement these styles.
2. **Customizable SVG**: The rotating circles are defined via SVG animations. Feel free to edit colors or rotation speed by adjusting the `animate` attributes.
3. **Potential SSR Issues**: Make sure you do not run this code on the server. This component is purely visual and should be rendered client-side.

---

## Usage

```tsx
import React from "react";
import PageLoading from "./path/to/PageLoading";

const SomePage = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Example: simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <PageLoading />}
      <h1 className="text-lg font-bold">My Page Content</h1>
      {/* Add your main page content here */}
    </div>
  );
};

export default SomePage;
```

1. Place `<PageLoading />` in your page or layout component.
2. Show or hide it based on your app’s loading state.

---

# License

This component is provided under the **MIT License**.

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com/). Feel free to contribute!
