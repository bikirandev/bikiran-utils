# 7502NPM-Bikiran-Utils

## CookiesAcceptPopup

A lightweight and fully self-contained React component that shows a cookie consent popup at the bottom of the screen. Once users click the I Accept button, the consent is stored in a cookie, and the popup no longer appears. This component is part of the 7502NPM-Bikiran-Utils package.

---

## Dependencies

**1.clsx**
**2.tailwind-merge**
**3.Nextjs**

---

## IMPORTANT NOTE

This component uses Tailwind CSS classes for its styling (fixed, bottom-7, z-[9999999], etc.). Ensure you have Tailwind configured or replace the classes with your own.
The domain for the cookie is determined by getBaseDomain() from your environment utility. Make sure that function returns the correct domain for your project.
The privacy policy link is constructed using getBikiranUrl(). Adjust or replace it if you have a different URL structure.

---

## Props and Usage

### Props

| prop | type | description | default value | priority |
| ---- | ---- | ----------- | ------------- | -------- |
|      |      |             |               |          |

---

### Usage

```tsx
import React from "react";
import CookiesAcceptPopup from "./path/to/CookiesAcceptPopup";

const App = () => {
  return (
    <div>
      {/* Other components in your application */}
      <CookiesAcceptPopup />
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
