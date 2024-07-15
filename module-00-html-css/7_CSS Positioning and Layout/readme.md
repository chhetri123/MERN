### README.md

# Css Positioning and Layout

## 7.1. CSS Display

The `display` property specifies the display behavior of an element.

### Key Points:

- `none`, `block`, `inline`, `inline-block`, `flex`, `grid`.

## 7.2. CSS Max-width

The `max-width` property sets the maximum width of an element.

### Key Points:

- Useful for responsive design.
- Prevents elements from exceeding a specified width.

## 7.3. CSS Position

The `position` property specifies the type of positioning method used for an element.

### Key Points:

- Values: `static`, `relative`, `absolute`, `fixed`, `sticky`.

## 7.4. Static Positioning

Static is the default positioning for an element.

### Key Points:

- Elements are positioned according to the normal flow of the document.

## 7.5. Relative Positioning

Relative positioning positions an element relative to its normal position.

### Key Points:

- Use `top`, `right`, `bottom`, `left` to move the element.

## 7.6. Absolute Positioning

Absolute positioning positions an element relative to the nearest positioned ancestor.

### Key Points:

- Removes the element from the normal document flow.

## 7.7. Fixed Positioning

Fixed positioning positions an element relative to the browser window.

### Key Points:

- The element stays in the same position even when the page is scrolled.

## 7.8. CSS Overflow

The `overflow` property controls what happens when content overflows an element's box.

### Key Points:

- Values: `visible`, `hidden`, `scroll`, `auto`.

## 7.9. CSS Float

The `float` property is used for positioning and formatting content.

### Key Points:

- Values: `left`, `right`, `none`.
- Often used for text wrapping around images.

## 7.10. CSS Inline-block

The `inline-block` value allows elements to be formatted as inline elements but maintain block-level properties.

### Key Points:

- Useful for creating layouts with inline elements.

## 7.11. CSS Align

CSS provides various properties for aligning content, including `text-align`, `vertical-align`, and `align-items`.

### Key Points:

- `text-align`: Aligns text horizontally.
- `vertical-align`: Aligns elements vertically.
- `align-items`: Aligns items in a flex container.

## 7.12. CSS Combinators

CSS combinators describe the relationship between selectors.

### Key Points:

- Types: descendant (` `), child (`>`), adjacent sibling (`+`), general sibling (`~`).

## 7.13. CSS Pseudo-class

Pseudo-classes specify the special state of an element.

### Key Points:

- Common pseudo-classes: `:hover`, `:focus`, `:active`, `:nth-child(n)`.

## 7.14. CSS Pseudo-element

Pseudo-elements style specified parts of an element.

### Key Points:

- Common pseudo-elements: `::before`, `::after`, `::first-letter`, `::first-line`.

## 7.15. CSS Opacity

The `opacity` property sets the transparency level of an element.

### Key Points:

- Value ranges from `0` (completely transparent) to `1` (completely opaque).

## 7.16. CSS Navigation

CSS can be used to style navigation bars.

### Key Points:

- Use `ul` and `li` for list-based navigation.
- Use `display: inline` or `float` for horizontal navigation.

## 7.17. Introduction to Flexbox

Flexbox is a layout module that makes it easier to design flexible and responsive layouts.

### Key Points:

- `display: flex` sets the flex container.
- Flexbox properties apply to flex containers and flex items.

## 7.18. Flex Container

A flex container is the parent element with `display: flex`.

### Key Points:

- Properties: `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`.

## 7.19. Flex Items

Flex items are the children of a flex container.

### Key Points:

- Properties: `order`, `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`.

## 7.20. Introduction to CSS Grid

CSS Grid Layout is a two-dimensional layout system for the web.

### Key Points:

- `display: grid` sets the grid container.
- Grid properties apply to grid containers and grid items.

## 7.21. Grid Container

A grid container is the parent element with `display: grid`.

### Key Points:

- Properties: `grid-template-columns`, `grid-template-rows`, `grid-gap`, `justify-items`, `align-items`.

## 7.22. Grid Items

Grid items are the children of a grid container.

### Key Points:

- Properties: `grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end`.
