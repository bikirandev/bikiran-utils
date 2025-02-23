# 7502NPM-Bikiran-Utils — ServicesPopup

A dynamic popup component that displays a grid of available applications, along with a user profile or account tile. It is part of the **7502NPM-Bikiran-Utils** package.

---

## Dependencies

1. **React**
2. **Tailwind CSS** (or a similar utility-first CSS framework)
3. **`AppAccount`** and **`ServiceApp`** components (both are part of this package or an import)
4. **Icons** (the code references `serviceIcons` from `./icons/Icons`)

---

## IMPORTANT NOTE

1. **Application Data**: The component expects `apps` (or `applicationData`) containing information on different applications. These are passed into `ServiceApp`.
2. **User Profile**: The `auth` prop includes `currentUser.photoUrl`, which is shown via `AppAccount`.
3. **Closing Mechanism**: The popup closes when the user clicks outside of it. This logic is managed by a `mousedown` event listener attached to the document.
4. **Custom Components**: `LinkComponent` and `ImageComponent` must be provided if you have custom routing or image handling.
5. **Mobile vs Desktop**: Tailwind utility classes (`fixed vs absolute`, etc.) handle responsiveness differently for small screens.

---

## Props and Usage

### Props

| Prop              | Type                                                      | Description                                                                                   | Default | Priority   |
| ----------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------- | ---------- |
| `auth`            | `{ currentUser?: { photoUrl?: string } }`                 | **Required**. Authentication info; `photoUrl` is used for the profile image.                  | —       | ✅Required |
| `apps`            | `{ id: string; status: string }[]`                        | Optional array of apps; each app with `id` and `status`. Filtered to exclude `inactive` apps. | `[]`    | ❌Optional |
| `setShow`         | `(show: boolean) => void`                                 | **Required**. Callback used to toggle the popup visibility.                                   | —       | ✅Required |
| `ref`             | `React.RefObject<HTMLDivElement>` or any valid ref object | A reference to the popup DOM node, used for detecting outside clicks.                         | —       | ❌Optional |
| `applicationData` | `any[]`                                                   | An alternative array of apps if `apps` is not provided. Filtered to exclude `inactive` apps.  | `[]`    | ❌Optional |
| `LinkComponent`   | `React.Component` or any link component                   | Custom link component for navigation.                                                         | —       | ✅Required |
| `ImageComponent`  | `React.Component` or any image component                  | Custom image component for rendering icons and profile images (e.g., Next.js `Image`).        | —       | ✅Required |

---

### Usage

```tsx
import React, { useRef, useState } from "react";
import ServicesPopup from "./path/to/ServicesPopup";

// Mock or real components
const LinkMock = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => <a href={href}>{children}</a>;

const ImageMock = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} style={{ width: 24, height: 24 }} />
);

const Example = () => {
  const [showPopup, setShowPopup] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const userAuth = {
    currentUser: {
      photoUrl: "https://example.com/myphoto.jpg",
    },
  };

  const apps = [
    { id: "app-1", status: "active" },
    { id: "app-2", status: "inactive" },
    { id: "app-3", status: "active" },
  ];

  return (
    <div ref={containerRef}>
      <button onClick={() => setShowPopup(true)}>Show Services Popup</button>
      {showPopup && (
        <ServicesPopup
          auth={userAuth}
          apps={apps}
          setShow={setShowPopup}
          ref={containerRef}
          applicationData={[]}
          LinkComponent={LinkMock}
          ImageComponent={ImageMock}
        />
      )}
    </div>
  );
};

export default Example;
```

In this example:

- **`apps`** is an array of application objects, each with an `id` and `status`. Only apps whose status is not `inactive` are displayed.
- **`setShowPopup`** toggles the visibility of the popup.
- **`LinkComponent`** and **`ImageComponent`** are mock components, but you would typically use a router-based `Link` (e.g., Next.js) and a specialized image component.
- Clicking outside the `div` referenced by `containerRef` automatically closes the popup.

---

# License

This component is provided under the **MIT License**.

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com/). Feel free to contribute!
