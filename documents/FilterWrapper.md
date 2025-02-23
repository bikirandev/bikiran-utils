# 7502NPM-Bikiran-Utils — FilterBarWrapper

A React component that combines a search bar with optional filters in a collapsible panel. It is part of the **7502NPM-Bikiran-Utils** package.

---

## Dependencies

1. **React**
2. **Tailwind CSS** (or equivalent classes)
3. **`cn` utility** for conditional class names (replace with your own if needed)
4. **Icon library** or custom icons (the code references `iconFilter` from `./icons/Icons`)

---

## IMPORTANT NOTE

1. **URL Parameters**: The component parses URL parameters from `window.location.search` to construct an initial state for filters. This means it will only work in a browser environment and not during server-side rendering.
2. **`formData`**: This object should represent the current filter values. Changing `formData` will affect the search string when the user submits the form.
3. **`onSearch`**: The callback to execute when the user submits the search. The component will generate a query string from `formData` and pass it back via `onSearch`.
4. **Classes**: The component uses Tailwind CSS classes. Replace or remove them if you use a different setup.
5. **Icons**: The code references `iconFilter()`. If you use a different icon library, replace it.

---

## Props and Usage

### Props

| Prop          | Type                       | Description                                                                                                     | Default Value          | Priority   |
| ------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------- |
| `formData`    | `Record<string, any>`      | Object representing form fields and their values. The component uses it to build a query string for `onSearch`. | `{}`                   | ✅Required |
| `onSearch`    | `(search: string) => void` | Callback function triggered upon form submission. Receives the query string (e.g., `?key=value`).               | —                      | ✅Required |
| `children`    | `React.ReactNode`          | **Filter fields** (e.g., input components, select, etc.) that appear in the collapsible panel.                  | —                      | ✅Required |
| `placeholder` | `string`                   | Placeholder text for the search bar.                                                                            | `"Search anything..."` | ❌Optional |
| `disabled`    | `boolean`                  | Disables the entire filter bar and input fields.                                                                | `false`                | ❌Optional |

---

### Usage

```tsx
import React from "react";
import FilterBarWrapper from "./path/to/FilterBarWrapper";

const ExamplePage = () => {
  const [filters, setFilters] = React.useState({
    category: "",
    sort: "",
  });

  const handleSearch = (queryString: string) => {
    console.log("Search triggered with query:", queryString);
    // e.g., use Next.js router to navigate: router.push(`/items${queryString}`);
  };

  return (
    <FilterBarWrapper
      formData={filters}
      onSearch={handleSearch}
      placeholder="Search items..."
    >
      {/* Inside the collapsible filter section, you can render inputs, selects, etc. */}
      <div className="flex flex-col space-y-2">
        <label>
          Category:
          <input
            type="text"
            value={filters.category}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, category: e.target.value }))
            }
            className="border border-gray-300 rounded p-1 w-full"
          />
        </label>
        <label>
          Sort:
          <select
            value={filters.sort}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, sort: e.target.value }))
            }
            className="border border-gray-300 rounded p-1 w-full"
          >
            <option value="">None</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
    </FilterBarWrapper>
  );
};

export default ExamplePage;
```

In this example:

- The `FilterBarWrapper` uses your `formData` (`filters` state) to build a query string.
- When the user clicks the **Search** button, `onSearch` is called with the query string.
- The search bar’s main input is read-only, displaying the current filter fields in a text format.
- Toggling the filter icon opens or closes the collapsible panel containing the filter inputs.

---

# License

This component is provided under the **MIT License**.

## 👨‍💻 **Author**

Created by [bikiran.com](https://bikiran.com/). Feel free to contribute!
