# 7502NPM-Bikiran-Utils — UserInfoComp

A simple React component for displaying a user’s photo, name, and email address. It is part of the **7502NPM-Bikiran-Utils** package.

---

## Dependencies

1. **React**
2. **Tailwind CSS** (or an equivalent CSS utility framework)

---

## IMPORTANT NOTE

1. **Image Component**: The component expects an `ImageComponent` prop for rendering the user’s photo. You can use Next.js’s `Image` or any custom image element.
2. **Styling**: Tailwind utility classes are used for layout and text styling. Modify or remove them if you have a different setup.

---

## Props and Usage

### Props

| Prop             | Type              | Description                                                        | Default | Priority   |
| ---------------- | ----------------- | ------------------------------------------------------------------ | ------- | ---------- |
| `photoUrl`       | `string`          | **Required**. URL of the user’s photo.                             | —       | ✅Required |
| `name`           | `string`          | **Required**. User’s full name.                                    | —       | ✅Required |
| `email`          | `string`          | **Required**. User’s email address.                                | —       | ✅Required |
| `ImageComponent` | `React.Component` | **Required**. Custom component or element for rendering the image. | —       | ✅Required |

---

### Usage

```tsx
import React from "react";
import UserInfoComp from "./path/to/UserInfoComp";

// Mock image component for demonstration
const MockImage = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} style={{ width: "40px", height: "40px" }} />
);

const Example = () => {
  const userPhotoUrl = "https://example.com/my-photo.jpg";
  const userName = "John Doe";
  const userEmail = "john.doe@example.com";

  return (
    <div>
      <UserInfoComp
        photoUrl={userPhotoUrl}
        name={userName}
        email={userEmail}
        ImageComponent={MockImage}
      />
    </div>
  );
};

export default Example;
```

**How it works**:

- `UserInfoComp` takes in a URL for the user’s photo, as well as name and email strings.
- The `ImageComponent` prop allows you to inject a custom image solution (e.g., Next.js `Image`, standard `<img>`, etc.).

---

# License

This component is provided under the **MIT License**.

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com/). Feel free to contribute!
