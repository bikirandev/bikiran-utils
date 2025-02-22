# 7502NPM-Bikiran-Utils

# Dependencies

**1.clsx**
**2.tailwind-merge**
**3.Nextjs**

# IMPORTANT NOTE

## **Service Popup**

This component displays a service popup menu that lists available applications. It also allows users to close the popup when clicking outside of it.

```tsx

```

# Props and Usage

## Props

| prop            | type                                    | description                             | default value | priority   |
| --------------- | --------------------------------------- | --------------------------------------- | ------------- | ---------- |
| auth            | { currentUser?: { photoUrl?: string } } | Holds authentication details            | {}            | ✅Required |
| apps            | { id: string; status: string }[]        | List of apps to display                 | false         | ❌Optional |
| setShow         | (show: boolean) => void                 | Function to toggle the popup visibility | -             | ✅Required |
| ref             | any                                     | Ref to detect clicks outside the popup  | undefined     | ❌Optional |
| applicationData | any[]                                   | Alternative app data if apps is empty   | []            | ✅Required |
| LinkComponent   | any                                     | Component to render links               | null          | ✅Required |
| ImageComponent  | any                                     | Component to render links               | null          | ✅Required |

## Usage

```tsx
import ServicesPopup from "your-popup-package";
import Link from "next/link";
import Image from "next/image";

const MyComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  return (
    <div>
      <button onClick={() => setShowPopup(true)}>Open Popup</button>
      {showPopup && (
        <ServicesPopup
          auth={{ currentUser: { photoUrl: "/user.jpg" } }}
          apps={[{ id: "1", status: "active" }]}
          setShow={setShowPopup}
          ref={popupRef}
          applicationData={[]}
          LinkComponent={Link}
          ImageComponent={Image}
        />
      )}
    </div>
  );
};
```
