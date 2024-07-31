# Understanding the DOM and DOM Manipulation

## Introduction to the DOM

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of nodes, where each node corresponds to a part of the document.

The DOM is crucial for making web pages interactive. JavaScript uses the DOM to access and manipulate HTML and CSS, making web pages dynamic and interactive.

## DOM Manipulation

DOM manipulation refers to the process of using JavaScript to interact with and modify the HTML and CSS of a web page. By manipulating the DOM, you can change the content, structure, and style of a document in real-time.

### Examples of DOM Manipulation

- Changing the text content of an element.
- Adding or removing elements from the document.
- Changing the attributes of an element.
- Modifying the CSS styles of an element.

## Selecting and Manipulating Elements

To manipulate the DOM, you first need to select the elements you want to interact with. JavaScript provides several methods to select elements from the DOM.

### Selecting Elements

1. **document.getElementById()**

   - Selects an element by its ID.

   ```javascript
   let elementById = document.getElementById("myId");
   ```

2. **document.getElementsByClassName()**

   - Selects elements by their class name.

   ```javascript
   let elementsByClassName = document.getElementsByClassName("myClass");
   ```

3. **document.getElementsByTagName()**

   - Selects elements by their tag name.

   ```javascript
   let elementsByTagName = document.getElementsByTagName("div");
   ```

4. **document.querySelector()**

   - Selects the first element that matches a CSS selector.

   ```javascript
   let elementQuerySelector = document.querySelector(".myClass");
   ```

5. **document.querySelectorAll()**
   - Selects all elements that match a CSS selector.
   ```javascript
   let elementsQuerySelectorAll = document.querySelectorAll(".myClass");
   ```

### Manipulating Elements

Once you have selected an element, you can manipulate it using various methods.

1. **Changing Content**

   - `textContent`: Sets or returns the text content of an element.
     ```javascript
     elementById.textContent = "New Content";
     ```
   - `innerHTML`: Sets or returns the HTML content of an element.
     ```javascript
     elementById.innerHTML = "<strong>New Content</strong>";
     ```

2. **Changing Attributes**

   - `setAttribute()`: Adds a specified attribute and value to an element.
     ```javascript
     elementById.setAttribute("data-info", "some data");
     ```
   - `getAttribute()`: Returns the value of a specified attribute on an element.
     ```javascript
     let attrValue = elementById.getAttribute("data-info");
     ```
   - `removeAttribute()`: Removes a specified attribute from an element.
     ```javascript
     elementById.removeAttribute("data-info");
     ```

3. **Changing Styles**
   - `style.property`: Sets or returns the value of a CSS property.
     ```javascript
     elementById.style.color = "blue";
     elementById.style.backgroundColor = "yellow";
     ```

## Handling Click Events

Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them. Handling events is a key part of making web pages interactive.

### Common Events

- `click`
- `mouseover`
- `mouseout`
- `keydown`
- `load`

### Handling Click Events

You can handle click events using the `addEventListener()` method or inline event handlers.

1. **addEventListener()**

   ```javascript
   elementById.addEventListener("click", function () {
     alert("Element clicked!");
   });
   ```

2. **Inline Event Handlers**
   ```html
   <button onclick="alert('Button clicked!')">Click Me</button>
   ```

### Example: Putting It All Together

```javascript
let button = document.querySelector("button");
button.addEventListener("click", function () {
  let div = document.createElement("div");
  div.textContent = "New Div Created!";
  div.style.color = "green";
  document.body.appendChild(div);
});
```

## List of DOM Methods

Here is a comprehensive list of DOM methods, organized by category:

### Document Methods

- `document.getElementById()`
- `document.getElementsByClassName()`
- `document.getElementsByTagName()`
- `document.querySelector()`
- `document.querySelectorAll()`
- `document.createElement()`
- `document.createTextNode()`
- `document.createAttribute()`
- `document.createDocumentFragment()`

### Element Methods

- `element.getAttribute()`
- `element.setAttribute()`
- `element.removeAttribute()`
- `element.hasAttribute()`
- `element.getAttributeNode()`
- `element.setAttributeNode()`
- `element.removeAttributeNode()`
- `element.getElementsByClassName()`
- `element.getElementsByTagName()`
- `element.querySelector()`
- `element.querySelectorAll()`
- `element.matches()`
- `element.closest()`
- `element.insertAdjacentHTML()`
- `element.insertAdjacentText()`
- `element.insertAdjacentElement()`

### Node Methods

- `node.appendChild()`
- `node.removeChild()`
- `node.replaceChild()`
- `node.cloneNode()`
- `node.contains()`
- `node.hasChildNodes()`
- `node.insertBefore()`
- `node.isEqualNode()`
- `node.isSameNode()`

### Event Methods

- `element.addEventListener()`
- `element.removeEventListener()`
- `element.dispatchEvent()`

### Style Methods

- `element.style.getPropertyValue()`
- `element.style.setProperty()`
- `element.style.removeProperty()`

### Attribute Methods

- `element.getAttribute()`
- `element.setAttribute()`
- `element.removeAttribute()`
- `element.hasAttribute()`
- `element.getAttributeNode()`
- `element.setAttributeNode()`
- `element.removeAttributeNode()`

### Miscellaneous Methods

- `element.scrollIntoView()`
- `element.focus()`
- `element.blur()`
- `element.click()`
- `element.draggable`
- `element.contentEditable`

# Lecture: Understanding Event Propagation, Event Delegation, DOM Traversing, and Building a Tabbed Component

## Table of Contents

1. [Event Propagation: Bubbling and Capturing](#event-propagation-bubbling-and-capturing)
2. [Event Propagation in Practice](#event-propagation-in-practice)
3. [Event Delegation](#event-delegation)
4. [DOM Traversing](#dom-traversing)
5. [Building a Tabbed Component](#building-a-tabbed-component)

---

## Event Propagation: Bubbling and Capturing

### Introduction

Event propagation is a mechanism that defines how events travel through the DOM tree. There are three phases of event propagation:

1. **Capturing Phase**: The event travels from the root to the target element.
2. **Target Phase**: The event reaches the target element.
3. **Bubbling Phase**: The event bubbles up from the target element to the root.

### Bubbling

In the bubbling phase, the event starts from the target element and moves up to the root. Only events that bubble will move up the DOM tree.

### Capturing

In the capturing phase, the event starts from the root and moves down to the target element. This phase is also known as the "trickling" phase.

### Code Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Propagation</title>
    <style>
      .outer {
        background-color: lightblue;
        padding: 30px;
      }
      .middle {
        background-color: lightcoral;
        padding: 20px;
      }
      .inner {
        background-color: lightgreen;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div class="outer">
      Outer Div
      <div class="middle">
        Middle Div
        <div class="inner">Inner Div</div>
      </div>
    </div>

    <script>
      document
        .querySelector(".outer")
        .addEventListener("click", () => alert("Outer Div"), false);
      document
        .querySelector(".middle")
        .addEventListener("click", () => alert("Middle Div"), false);
      document
        .querySelector(".inner")
        .addEventListener("click", () => alert("Inner Div"), false);
    </script>
  </body>
</html>
```

In this example, clicking the "Inner Div" will trigger alerts in the order: "Inner Div", "Middle Div", and "Outer Div" due to event bubbling.

---

## Event Propagation in Practice

### Capturing Example

By setting the `useCapture` parameter to `true`, you can observe capturing in action.

### Code Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Capturing</title>
  </head>
  <body>
    <div class="outer">
      Outer Div
      <div class="middle">
        Middle Div
        <div class="inner">Inner Div</div>
      </div>
    </div>

    <script>
      document
        .querySelector(".outer")
        .addEventListener("click", () => alert("Outer Div"), true);
      document
        .querySelector(".middle")
        .addEventListener("click", () => alert("Middle Div"), true);
      document
        .querySelector(".inner")
        .addEventListener("click", () => alert("Inner Div"), true);
    </script>
  </body>
</html>
```

In this example, clicking the "Inner Div" will trigger alerts in the order: "Outer Div", "Middle Div", and "Inner Div" due to event capturing.

---

## Event Delegation

### Introduction

Event delegation is a technique that allows you to handle events at a higher level in the DOM, rather than adding event listeners to individual elements. This is particularly useful when dealing with dynamic elements.

### Example Scenario

Imagine you have a list of items, and you want to handle clicks on each item. Instead of attaching a click event listener to each item, you attach a single event listener to the parent element.

### Code Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Delegation</title>
  </head>
  <body>
    <ul id="itemList">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <script>
      document
        .getElementById("itemList")
        .addEventListener("click", function (event) {
          if (event.target.tagName === "LI") {
            alert(event.target.textContent);
          }
        });
    </script>
  </body>
</html>
```

In this example, clicking any list item will trigger an alert with the item's text content. The event listener is attached to the parent `<ul>` element, demonstrating event delegation.

---

## DOM Traversing

### Introduction

DOM traversing refers to the methods and properties used to navigate through the DOM tree. Common methods include:

- `parentNode`
- `childNodes`
- `firstChild`
- `lastChild`
- `nextSibling`
- `previousSibling`

### Code Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Traversing</title>
  </head>
  <body>
    <div id="parent">
      <p id="child1">Child 1</p>
      <p id="child2">Child 2</p>
      <p id="child3">Child 3</p>
    </div>

    <script>
      const child1 = document.getElementById("child1");
      const parent = child1.parentNode;
      console.log(parent); // Logs the parent div

      const nextSibling = child1.nextSibling;
      console.log(nextSibling); // Logs the next sibling (child2)
    </script>
  </body>
</html>
```

In this example, we navigate the DOM to access the parent of `child1` and its next sibling.

---

## Building a Tabbed Component

### Introduction

A tabbed component allows users to switch between different sections of content without navigating to a new page.

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tabbed Component</title>
    <style>
      .tab {
        display: none;
      }
      .tab.active {
        display: block;
      }
      .tabs button {
        margin-right: 10px;
      }
    </style>
  </head>
  <body>
    <div class="tabs">
      <button data-tab="tab1">Tab 1</button>
      <button data-tab="tab2">Tab 2</button>
      <button data-tab="tab3">Tab 3</button>
    </div>
    <div id="tab1" class="tab active">Content for Tab 1</div>
    <div id="tab2" class="tab">Content for Tab 2</div>
    <div id="tab3" class="tab">Content for Tab 3</div>

    <script>
      document
        .querySelector(".tabs")
        .addEventListener("click", function (event) {
          if (event.target.tagName === "BUTTON") {
            const tabId = event.target.getAttribute("data-tab");
            document.querySelectorAll(".tab").forEach(function (tab) {
              tab.classList.remove("active");
            });
            document.getElementById(tabId).classList.add("active");
          }
        });
    </script>
  </body>
</html>
```

In this example, clicking on a tab button shows the corresponding content and hides the others. This demonstrates how to build a simple tabbed component using event delegation.
