# 7502NPM-Bikiran-Utils — TooltipUserInfo

A lightweight React component that shows user information in a tooltip upon clicking on the user’s avatar. It is part of the **7502NPM-Bikiran-Utils** package.

---

## Dependencies

1. **React**
2. **Tailwind CSS** (or an equivalent CSS utility framework)
3. **`cn` utility** for conditional class names (replace it with your own if needed)

---

## IMPORTANT NOTE

1. **Outside Click**: The tooltip is dismissed when the user clicks outside of it, thanks to a `mousedown` event listener on `document`.
2. **Conditional Rendering**: The `show` state determines whether the tooltip is visible or hidden.
3. **Styles**: The tooltip uses Tailwind classes for positioning and animation (scale, opacity, etc.). Replace or remove these if you use different styling.
4. **Image Component**: A custom image component must be provided via `ImageComponent`. For example, you can pass Next.js `Image` or a standard `<img>`.

---

## Props and Usage

### Props

| Prop             | Type              | Description                                                                                    | Default | Priority   |
| ---------------- | ----------------- | ---------------------------------------------------------------------------------------------- | ------- | ---------- |
| `user`           | `any`             | **Required**. User object containing at least an `id`, `photoUrl`, `displayName`, and `email`. | —       | ✅Required |
| `ImageComponent` | `React.Component` | **Required**. Your custom image component (e.g. Next.js `Image`) or plain `<img>` element.     | —       | ✅Required |

---

### Usage

```tsx
import React from "react";
import TooltipUserInfo from "./path/to/TooltipUserInfo";

// Example custom image component
const CustomImage = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} style={{ width: "50px", height: "50px" }} />;
};

const Example = () => {
  const user = {
    id: 123,
    photoUrl: "https://example.com/user-photo.jpg",
    displayName: "Jane Doe",
    email: "jane.doe@example.com",
  };

  return (
    <div>
      <TooltipUserInfo user={user} ImageComponent={CustomImage} />
    </div>
  );
};

export default Example;
```

**How it works**:

- When you click on the user avatar, a tooltip with user info (`displayName` and `email`) is shown or hidden.
- Clicking outside the tooltip closes it.

---

# License

This component is provided under the **MIT License**.

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com/). Feel free to contribute!
