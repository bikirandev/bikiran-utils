# 7502NPM-Bikiran-Utils

# Dependencies

**1.clsx**
**2.tailwind-merge**
**3.Nextjs**

# IMPORTANT NOTE

This package was specifically developed and tailored for our organization’s projects. It may not be particularly helpful for your needs, but you’re welcome to try it out. Just keep in mind that it could potentially break your project—or it might work exactly as intended.

## 🎨 **Available Components**

```tsx
<Pagination  />
<FilterBarWrapper />
<ServicesPopup />
<ButtonWrapper />
<CurrencySelector />
<CustomSidebar/>
<PageLoading />
<LoadingComp  />
<CookiesAcceptPopup />
<ProfileManage />
<TooltipUserInfo />
<UserInfoComp />
```

## Pagination

You need to write this code where you will use your pagination .This will Check query Params and create a new url . which is important for this component

```tsx
const pathname = usePathname();
const searchParams = useSearchParams();
const currentPage = Number(searchParams.get("CurrentPage"));
const queries = new URLSearchParams(searchParams.toString());

// Make URL with existing queries if any
const mkUrl = (number: number) => {
  queries.set("CurrentPage", number.toString());
  return `${pathname}?${queries.toString()}`;
};
```

# Props and Usage

## Props

| prop        | type                                           | description                                     | default value           | priority   |
| ----------- | ---------------------------------------------- | ----------------------------------------------- | ----------------------- | ---------- |
| data        | TPagination                                    | this is an object                               | {} as TPagination       | ✅Required |
| disabled    | boolean                                        | determine is that pagination is disabled or not | false                   | ❌Optional |
| currentPage | number                                         | Which page it is now                            | 0                       | ✅Required |
| mkUrl       | (page: number) => string                       | add query params                                | (page:number) => string | ✅Required |
| link        | FC<{ href: string; children: React.ReactNode } | Pass the link tag here                          | null                    | ✅Required |

## Usage

```tsx
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Pagination from "your-pagination-package";

const MyPagination = ({ data }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("CurrentPage")) || 1;

  const makeUrl = (num: number) => {
    const queries = new URLSearchParams(searchParams.toString());
    queries.set("CurrentPage", num.toString());
    return `${pathname}?${queries.toString()}`;
  };

  return (
    <Pagination
      data={data}
      currentPage={currentPage}
      makeUrl={makeUrl}
      LinkComponent={Link}
    />
  );
};
```

## 🔗 **More Details**

For more details, visit the [GitHub repository](https://github.com/bikirandev/7502NPM-Bikiran-Utils/tree/main/documents).

---

## 🔗 **License**

This project is licensed under the MIT License.

---

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com/). Feel free to contribute!
