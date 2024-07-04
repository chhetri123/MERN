## CSS `position` Property Lecture

### Overview

The `position` property in CSS is used to specify how an element is positioned in a document. It can take several values, each affecting the element's positioning differently:

1. `static`
2. `relative`
3. `absolute`
4. `fixed`
5. `sticky`

### `static` Positioning

- **Default value**: Every element is positioned according to the normal flow of the document.
- **No special positioning**: Top, right, bottom, and left properties have no effect.

```html
<div class="static-position">I am static!</div>
```

```css
.static-position {
  position: static;
  background-color: lightblue;
}
```

### `relative` Positioning

- **Relative to itself**: The element is positioned relative to its normal position.
- **Offset**: You can use top, right, bottom, and left properties to move it.

```html
<div class="relative-position">I am relative!</div>
```

```css
.relative-position {
  position: relative;
  top: 10px;
  left: 20px;
  background-color: lightgreen;
}
```

### `absolute` Positioning

- **Relative to nearest positioned ancestor**: The element is positioned relative to the nearest ancestor with a position value other than `static`.
- **Removed from document flow**: Other elements will behave as if the absolute element does not exist.

```html
<div class="parent">
  <div class="absolute-position">I am absolute!</div>
</div>
```

```css
.parent {
  position: relative; /* Positioned ancestor */
  background-color: lightgray;
}
.absolute-position {
  position: absolute;
  top: 20px;
  left: 30px;
  background-color: pink;
}
```

### `fixed` Positioning

- **Relative to the viewport**: The element is positioned relative to the browser window.
- **Scroll independent**: It stays in the same position even when the page is scrolled.

```html
<div class="fixed-position">I am fixed!</div>
```

```css
.fixed-position {
  position: fixed;
  top: 0;
  right: 0;
  background-color: lightcoral;
}
```

### `sticky` Positioning

- **Hybrid of relative and fixed**: The element is positioned based on the user's scroll position.
- **Offset-based**: It toggles between `relative` and `fixed`, depending on the scroll position.

```html
<div class="sticky-position">I am sticky!</div>
```

```css
.sticky-position {
  position: sticky;
  top: 0;
  background-color: lightgoldenrodyellow;
}
```

### Task

1. **Create a Layout**: Using the different positioning properties, create a layout that includes a header, a sidebar, and a main content area. The header should be fixed at the top, the sidebar should be sticky on the left, and the main content should be scrollable.
2. **Experiment**: Change the positioning properties and observe the behavior. Try using different offsets and observe how the elements interact with each other.

This lecture and task should give students a comprehensive understanding of the `position` property in CSS and how to use it effectively.
