<div>React hook library, ready to use, written in Typescript.</div>

[![License](https://badgen.net/badge/License/MIT/blue)](https://github.com/juliencrn/usehooks-ts/blob/master/LICENSE)

<br />

### Usage example

```tsx
import { useDebounceSearch } from "@repo/hooks";

function Component() {
  const { onChangeSearchText } = useDebounceSearch("search"); // query name
  const { searchParams } = useQueryString();

  console.log(searchParams.get("search"));
  return <input type="text" onChange={onChangeSearchText} />;
}
```

## 🪝 Available Hooks

<!-- HOOKS:START -->

- [`useHideOnScroll`] - when user scroll the page, hide the thing u want
- [`useClickOutside`] — handles click events to hide the select box or something else.
- [`useQueryString`] — adding, updating & remove the query string
- [`useDebounceSearch`] — this hooks upload the search text to the query with query name which u filled in the hooks parameter with debouncing time,
