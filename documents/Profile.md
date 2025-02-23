# 7502NPM-Bikiran-Utils — ProfileManage

A lightweight React component that handles profile display and logout functionality. It displays a user profile picture and a menu for account-related options. Part of the **7502NPM-Bikiran-Utils** package.

---

## Dependencies

1. **React**
2. **ProfileView** and **ProfileMenuPopup** components (both are part of this package or an import)
3. **Tailwind CSS** (or equivalent classes for styling)

---

## IMPORTANT NOTE

1. **Custom Hooks and Components**: This component relies on custom hooks and components such as `useLayout`, `useRouter`, `ProfileView`, `ProfileMenuPopup`, etc. Be sure these are correctly implemented or replaced with your own.
2. **Logout Flow**: The `logout` callback is fired when the user clicks the logout option in the menu. Adjust it to integrate with your authentication flow.
3. **Conditional Rendering**: The user profile menu toggles when the user clicks the profile avatar, and closes when the user clicks outside.

---

## Props and Usage

### Props

| Prop              | Type                                     | Description                                                                       | Default | Priority   |
| ----------------- | ---------------------------------------- | --------------------------------------------------------------------------------- | ------- | ---------- |
| `auth`            | `TAuthInfo`                              | **Required**. Contains user authentication data, used to display logged-in state. | —       | ✅Required |
| `loginUrl`        | `string`                                 | URL for the login or sign-in page.                                                | —       | ✅Required |
| `logout`          | `() => void`                             | Callback fired upon logout.                                                       | —       | ✅Required |
| `LinkComponent`   | `React.Component` or any component       | Custom component for links (e.g., Next.js `Link`).                                | —       | ✅Required |
| `AuthCompWrapper` | `React.Component`                        | Custom wrapper component for authentication-related logic.                        | —       | ✅Required |
| `ImageComponent`  | `React.Component`                        | Component used for rendering the profile image (e.g., `next/image`).              | —       | ✅Required |
| `SIZE_SM`         | `number`                                 | Size parameter, typically used for image dimensions in `ProfileView`.             | —       | ❌Optional |
| `useLayout`       | `() => { windowWidth: number }`          | **Required** hook providing layout info such as the window width.                 | —       | ✅Required |
| `useRouter`       | `() => { push: (arg0: string) => void }` | **Required** hook for navigation logic.                                           | —       | ✅Required |

---

### Usage

```tsx
import React from "react";
import ProfileManage from "./path/to/ProfileManage";

// Mock or real hooks/components
function useLayoutMock() {
  return {
    windowWidth: 1024,
  };
}

function useRouterMock() {
  return {
    push: (url: string) => console.log("Navigating to", url),
  };
}

const ImageMock = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} style={{ width: 40, height: 40 }} />
);

const AuthCompWrapperMock = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

const App = () => {
  const userAuth = {
    isLoggedIn: true,
    userName: "JohnDoe",
    userImage: "https://example.com/profile.jpg",
    // ...more fields as required by your logic
  };

  // Example logout handler
  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <ProfileManage
      auth={userAuth}
      loginUrl="/login"
      logout={handleLogout}
      LinkComponent="a" // or a custom <Link> component
      AuthCompWrapper={AuthCompWrapperMock}
      ImageComponent={ImageMock}
      SIZE_SM={40}
      useLayout={useLayoutMock}
      useRouter={useRouterMock}
    />
  );
};

export default App;
```

In this setup:

- **`auth.isLoggedIn`** is used by `ProfileView` to decide if the user is logged in.
- When the user clicks on the profile image, the menu toggles.
- **`logout`** is triggered from the menu’s logout button.
- Clicks outside the menu automatically close it.

---

# License

This component is provided under the **MIT License**.

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com/). Feel free to contribute!
