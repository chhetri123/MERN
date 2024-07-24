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

## Examples of DOM Manipulation
