### README.md

# CSS Basics And Box Models

## 6.1. What is CSS?

CSS (Cascading Style Sheets) is a language used to describe the presentation of a document written in HTML. CSS defines how HTML elements should be displayed.

### Key Points:

- CSS separates content from presentation.
- CSS can control layout, colors, fonts, and more.

## 6.2. CSS Syntax

CSS rules are made up of selectors and declaration blocks. A declaration block contains one or more declarations separated by semicolons. Each declaration includes a property and a value, separated by a colon.

### Key Points:

- `selector { property: value; }`: Basic CSS syntax.
- Multiple declarations are separated by semicolons.

## 6.3. CSS Selectors

CSS selectors are used to "select" HTML elements you want to style.

### Key Points:

- Types of selectors: element, id, class, attribute, pseudo-class, pseudo-element.

## 6.4. CSS Colors

CSS allows you to set the color of text, backgrounds, borders, and other elements using color names, hex codes, RGB, RGBA, HSL, and HSLA values.

### Key Points:

- Color formats: color names, hex (`#ff0000`), RGB (`rgb(255, 0, 0)`), RGBA (`rgba(255, 0, 0, 0.5)`), HSL (`hsl(0, 100%, 50%)`), HSLA (`hsla(0, 100%, 50%, 0.5)`).

## 6.5. CSS Backgrounds

CSS provides properties to control the background of elements, including color, images, repeat, attachment, and position.

### Key Points:

- `background-color`, `background-image`, `background-repeat`, `background-attachment`, `background-position`.

## 6.6. CSS Borders

CSS borders are used to specify the border style, width, and color of an element.

### Key Points:

- `border-style`, `border-width`, `border-color`.
- Shorthand: `border: 1px solid black;`.

## 6.7. CSS Margins

Margins are used to create space around elements, outside of any defined borders.

### Key Points:

- `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.
- Shorthand: `margin: 10px 20px 30px 40px;`.

## 6.8. CSS Padding

Padding is used to create space around an element's content, inside of any defined borders.

### Key Points:

- `padding-top`, `padding-right`, `padding-bottom`, `padding-left`.
- Shorthand: `padding: 10px 20px 30px 40px;`.

## 6.9. CSS Height and Width

Height and width properties are used to set the height and width of an element.

### Key Points:

- `height`, `width`.
- Can be set using px, em, %, etc.

## 6.10. CSS Box Model

The CSS box model describes the rectangular boxes generated for elements in the document tree and consists of margins, borders, padding, and the content area.

### Key Points:

- Components: content, padding, border, margin.

## 6.11. CSS Outline

The outline property draws a line outside the element's border and is used to make an element stand out.

### Key Points:

- `outline-style`, `outline-width`, `outline-color`.
- Shorthand: `outline: 1px solid black;`.

## 6.12. CSS Text

CSS provides various properties to style text, including color, alignment, decoration, transformation, spacing, shadow, and more.

### Key Points:

- `color`, `text-align`, `text-decoration`, `text-transform`, `letter-spacing`, `text-shadow`.

## 6.13. CSS Fonts

CSS allows you to change the font family, size, weight, style, and variant of text.

### Key Points:

- `font-family`, `font-size`, `font-weight`, `font-style`, `font-variant`.
- Shorthand: `font: italic small-caps bold 16px/1.5 Arial, sans-serif;`.

## 6.14. CSS Icons

CSS can be used to display icons from icon libraries (like Font Awesome) or custom icons.

### Key Points:

- Use `content` property with `::before` or `::after` pseudo-elements.
- Use font libraries for scalable vector icons.

## 6.15. CSS Links

CSS can be used to style different states of links (unvisited, visited, hover, active).

### Key Points:

- `a:link`, `a:visited`, `a:hover`, `a:active`.

## 6.16. CSS Lists

CSS allows you to style list items, including the list style type, position, and image.

### Key Points:

- `list-style-type`, `list-style-position`, `list-style-image`.
- Shorthand: `list-style: square inside url('image.png');`.

## 6.17. CSS Tables

CSS can be used to style table elements, including the table itself, table rows, table cells, and table headers.

### Key Points:

- `border-collapse`, `border-spacing`, `table-layout`.
- Target table elements: `table`, `th`, `td`, `tr`.

---
