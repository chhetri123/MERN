## CSS Grid Layout Lecture

### Overview

CSS Grid Layout is a powerful layout system available in CSS. It allows for the creation of complex, responsive web designs using a two-dimensional grid system. It simplifies the process of creating layouts and aligning elements within a container.

### Basic Concepts

- **Grid Container**: The element on which `display: grid;` is applied. This becomes a grid context for its direct children.
- **Grid Item**: The direct children of the grid container.
- **Grid Lines**: The dividing lines that create the structure of the grid.
- **Grid Tracks**: The space between two grid lines. This includes grid columns and rows.

### Example

Here’s a simple example to demonstrate a basic grid layout.

#### CSS Explanation

- **Grid Container**:

  - `display: grid;`: Defines the element as a grid container.
  - `grid-template-columns: repeat(3, 1fr);`: Creates three equal columns using the `repeat` function and the `1fr` unit (fractional unit, meaning one part of the available space).
  - `gap: 1em;`: Sets the gap between grid items.
  - `padding: 1em;`: Adds padding inside the grid container.

- **Grid Item**:
  - `background-color: #f4f4f4;`: Sets a light gray background color for grid items.
  - `padding: 1em;`: Adds padding inside each grid item.
  - `nth-child(odd)`: Applies a different background color to odd-numbered grid items.

### Task

1. **Create a Responsive Grid Layout**:

   - Expand the existing example to include more items.
   - Use different grid template areas to create a header, sidebar, main content, and footer layout.

2. **Experiment with Grid Properties**:
   - Use properties like `grid-template-rows`, `grid-template-areas`, `justify-items`, and `align-items` to see how they affect the layout.
