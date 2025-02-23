# 7502NPM-Bikiran-Utils — LoadingComp

A simple, lightweight React component that displays a full-screen loading overlay with an animated SVG. It is part of the **7502NPM-Bikiran-Utils** package.

---

## Dependencies

1. **React**
2. **Tailwind CSS** (or equivalent classes)

---

## IMPORTANT NOTE

1. **Full-Screen Overlay**: The component uses utility classes to center itself both vertically and horizontally (`top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`) and covers the entire screen with `size-full`. If you are not using Tailwind, you’ll need equivalent styles.
2. **Customizable Animation**: The SVG is hardcoded, but you can replace it with any other loading animation you prefer.
3. **Z-Index**: The overlay has a very high z-index (`z-[9999999999999999]`). Adjust this value if it conflicts with other elements in your application.

---

## Usage

```tsx
import React from "react";
import LoadingComp from "./path/to/LoadingComp";

const SomePage = () => {
  const [loading, setLoading] = React.useState(true);

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <LoadingComp />}
      <h1 className="text-xl">Your page content goes here</h1>
    </div>
  );
};

export default SomePage;
```

1. Import and render `<LoadingComp />` conditionally while your page is busy.
2. The loading spinner takes up the full screen until `loading` is set to `false`.

---

# License

This component is provided under the **MIT License**.

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com/). Feel free to contribute!
