### CSS Pseudo-elements: `::before` and `::after`

#### Introduction

The `::before` and `::after` pseudo-elements are used to insert content before or after the actual content of an element. They are incredibly useful for adding decorative content or icons without modifying the HTML.

#### Syntax

```css
selector::before {
  content: "content";
  /* additional styles */
}

selector::after {
  content: "content";
  /* additional styles */
}
```

### Task

Create a styled list where each list item has a custom bullet icon using `::before`.

#### Instructions

1. Create an HTML file with an unordered list.
2. Use CSS to style the `li::before` pseudo-element to add a custom bullet (e.g., a star symbol "★").
3. Style the list and list items for better presentation.

### Summary

Using `::before` and `::after`, you can insert content before or after an element’s content without altering the HTML. These pseudo-elements are versatile and can be styled just like any other element, providing a powerful tool for enhancing the presentation of your web pages.
